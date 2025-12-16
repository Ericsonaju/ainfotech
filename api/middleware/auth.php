<?php
/**
 * Middleware de autenticação JWT
 */

require_once __DIR__ . '/../config/database.php';

/**
 * Verificar e decodificar token JWT
 */
function authenticateToken() {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    
    if (empty($authHeader)) {
        http_response_code(401);
        echo json_encode(['error' => 'Token não fornecido']);
        return null;
    }
    
    // Extrair token (Bearer TOKEN)
    $token = null;
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $token = $matches[1];
    }
    
    if (!$token) {
        http_response_code(401);
        echo json_encode(['error' => 'Token não fornecido']);
        return null;
    }
    
    // Decodificar JWT manualmente (sem biblioteca externa)
    $jwtSecret = $_ENV['JWT_SECRET'] ?? '';
    
    if (empty($jwtSecret)) {
        http_response_code(500);
        echo json_encode(['error' => 'JWT_SECRET não configurado']);
        return null;
    }
    
    $decoded = decodeJWT($token, $jwtSecret);
    
    if (!$decoded) {
        http_response_code(403);
        echo json_encode(['error' => 'Token inválido ou expirado']);
        return null;
    }
    
    // Verificar se usuário existe e está ativo
    $db = Database::getConnection();
    $stmt = $db->prepare('SELECT id, email, name, role, is_active FROM users WHERE id = ? AND is_active = TRUE');
    $stmt->execute([$decoded['userId']]);
    $user = $stmt->fetch();
    
    if (!$user) {
        http_response_code(401);
        echo json_encode(['error' => 'Usuário não encontrado ou inativo']);
        return null;
    }
    
    return $user;
}

/**
 * Verificar se usuário tem role específica
 */
function requireRole($user, $allowedRoles) {
    if (!$user || !in_array($user['role'], $allowedRoles)) {
        http_response_code(403);
        echo json_encode(['error' => 'Acesso negado']);
        return false;
    }
    return true;
}

/**
 * Decodificar JWT manualmente
 */
function decodeJWT($token, $secret) {
    $parts = explode('.', $token);
    
    if (count($parts) !== 3) {
        return null;
    }
    
    list($header, $payload, $signature) = $parts;
    
    // Verificar assinatura
    $expectedSignature = base64_encode(hash_hmac('sha256', "$header.$payload", $secret, true));
    $expectedSignature = str_replace(['+', '/', '='], ['-', '_', ''], $expectedSignature);
    
    if ($signature !== $expectedSignature) {
        return null;
    }
    
    // Decodificar payload
    $payload = base64_decode(str_replace(['-', '_'], ['+', '/'], $payload));
    $data = json_decode($payload, true);
    
    if (!$data) {
        return null;
    }
    
    // Verificar expiração
    if (isset($data['exp']) && $data['exp'] < time()) {
        return null;
    }
    
    return $data;
}

/**
 * Gerar JWT
 */
function generateJWT($payload, $secret, $expiresIn = 604800) { // 7 dias padrão
    $header = base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
    $payload['exp'] = time() + $expiresIn;
    $payload = base64_encode(json_encode($payload));
    
    $signature = base64_encode(hash_hmac('sha256', "$header.$payload", $secret, true));
    $signature = str_replace(['+', '/', '='], ['-', '_', ''], $signature);
    
    return "$header.$payload.$signature";
}

