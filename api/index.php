<?php
/**
 * API Backend PHP - AINFOTECH
 * Substitui o backend Node.js
 */

// Headers CORS e JSON
header('Access-Control-Allow-Origin: ' . ($_ENV['CORS_ORIGIN'] ?? '*'));
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

// Responder OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Carregar variáveis de ambiente
require_once __DIR__ . '/config/env.php';

// Autoloader simples
spl_autoload_register(function ($class) {
    $paths = [
        __DIR__ . '/controllers/',
        __DIR__ . '/middleware/',
        __DIR__ . '/config/',
    ];
    
    foreach ($paths as $path) {
        $file = $path . $class . '.php';
        if (file_exists($file)) {
            require_once $file;
            return;
        }
    }
});

// Conexão com banco
require_once __DIR__ . '/config/database.php';

// Middleware
require_once __DIR__ . '/middleware/auth.php';

// Controllers
require_once __DIR__ . '/controllers/AuthController.php';
require_once __DIR__ . '/controllers/TasksController.php';

// Roteamento
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Remover query string
$path = parse_url($requestUri, PHP_URL_PATH);

// Remover /api se existir
$path = preg_replace('#^/api#', '', $path);
$path = trim($path, '/');
$segments = explode('/', $path);

// Health check
if ($path === 'health' || $path === '') {
    echo json_encode([
        'status' => 'ok',
        'timestamp' => date('c')
    ]);
    exit;
}

// Rotas de autenticação
if ($segments[0] === 'auth') {
    $authController = new AuthController();
    
    if ($segments[1] === 'login' && $requestMethod === 'POST') {
        $authController->login();
    } elseif ($segments[1] === 'verify' && $requestMethod === 'GET') {
        $authController->verifyToken();
    } elseif ($segments[1] === 'users' && $requestMethod === 'POST') {
        // Criar usuário (requer admin)
        $authController->createUser();
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Rota não encontrada']);
    }
    exit;
}

// Rotas de tasks (requerem autenticação)
if ($segments[0] === 'tasks') {
    $tasksController = new TasksController();
    
    // Verificar autenticação
    $user = authenticateToken();
    if (!$user) {
        exit; // authenticateToken já enviou a resposta de erro
    }
    
    if ($requestMethod === 'GET' && !isset($segments[1])) {
        // GET /tasks
        $tasksController->getTasks();
    } elseif ($requestMethod === 'GET' && $segments[1] === 'os' && isset($segments[2])) {
        // GET /tasks/os/:osNumber
        $tasksController->getTaskByOS($segments[2]);
    } elseif ($requestMethod === 'POST' && !isset($segments[1])) {
        // POST /tasks
        $tasksController->createTask();
    } elseif ($requestMethod === 'PUT' && isset($segments[1])) {
        // PUT /tasks/:id
        $tasksController->updateTask($segments[1]);
    } elseif ($requestMethod === 'DELETE' && isset($segments[1])) {
        // DELETE /tasks/:id
        $tasksController->deleteTask($segments[1]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Rota não encontrada']);
    }
    exit;
}

// 404
http_response_code(404);
echo json_encode(['error' => 'Rota não encontrada']);

