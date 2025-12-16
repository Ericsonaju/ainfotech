<?php
/**
 * Configuração de conexão MySQL
 */

class Database {
    private static $connection = null;
    
    public static function getConnection() {
        if (self::$connection === null) {
            try {
                $host = $_ENV['DB_HOST'] ?? 'localhost';
                $port = $_ENV['DB_PORT'] ?? 3306;
                $dbname = $_ENV['DB_NAME'] ?? '';
                $username = $_ENV['DB_USER'] ?? '';
                $password = $_ENV['DB_PASSWORD'] ?? '';
                
                $dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";
                
                self::$connection = new PDO($dsn, $username, $password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Erro ao conectar ao banco de dados']);
                error_log('Database connection error: ' . $e->getMessage());
                exit;
            }
        }
        
        return self::$connection;
    }
}

