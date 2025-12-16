<?php
/**
 * Controller de Autenticação
 */

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../middleware/auth.php';

class AuthController {
    private $db;
    
    public function __construct() {
        $this->db = Database::getConnection();
    }
    
    /**
     * Login de usuário
     */
    public function login() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';
        
        if (empty($email) || empty($password)) {
            http_response_code(400);
            echo json_encode(['error' => 'Email e senha são obrigatórios']);
            return;
        }
        
        // Buscar usuário
        $stmt = $this->db->prepare('SELECT id, email, password_hash, name, role, is_active FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if (!$user) {
            http_response_code(401);
            echo json_encode(['error' => 'Email ou senha incorretos']);
            return;
        }
        
        if (!$user['is_active']) {
            http_response_code(403);
            echo json_encode(['error' => 'Usuário inativo']);
            return;
        }
        
        // Verificar senha
        if (!password_verify($password, $user['password_hash'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Email ou senha incorretos']);
            return;
        }
        
        // Atualizar último login
        $stmt = $this->db->prepare('UPDATE users SET last_login = NOW() WHERE id = ?');
        $stmt->execute([$user['id']]);
        
        // Gerar token JWT
        $jwtSecret = $_ENV['JWT_SECRET'] ?? '';
        $token = generateJWT([
            'userId' => $user['id'],
            'email' => $user['email'],
            'role' => $user['role']
        ], $jwtSecret, 604800); // 7 dias
        
        echo json_encode([
            'token' => $token,
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['name'],
                'role' => $user['role']
            ]
        ]);
    }
    
    /**
     * Verificar token
     */
    public function verifyToken() {
        $user = authenticateToken();
        
        if (!$user) {
            return; // authenticateToken já enviou a resposta de erro
        }
        
        echo json_encode([
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['name'],
                'role' => $user['role']
            ]
        ]);
    }
    
    /**
     * Criar novo usuário (apenas admin)
     */
    public function createUser() {
        $user = authenticateToken();
        
        if (!$user) {
            return;
        }
        
        if ($user['role'] !== 'admin') {
            http_response_code(403);
            echo json_encode(['error' => 'Acesso negado']);
            return;
        }
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';
        $name = $data['name'] ?? '';
        $role = $data['role'] ?? 'admin';
        
        if (empty($email) || empty($password) || empty($name)) {
            http_response_code(400);
            echo json_encode(['error' => 'Email, senha e nome são obrigatórios']);
            return;
        }
        
        // Verificar se email já existe
        $stmt = $this->db->prepare('SELECT id FROM users WHERE email = ?');
        $stmt->execute([$email]);
        
        if ($stmt->fetch()) {
            http_response_code(400);
            echo json_encode(['error' => 'Email já cadastrado']);
            return;
        }
        
        // Hash da senha
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        
        // Criar usuário
        $stmt = $this->db->prepare('INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)');
        $stmt->execute([$email, $passwordHash, $name, $role]);
        
        http_response_code(201);
        echo json_encode([
            'message' => 'Usuário criado com sucesso',
            'userId' => $this->db->lastInsertId()
        ]);
    }
}

