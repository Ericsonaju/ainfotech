<?php
/**
 * Carregar variáveis de ambiente do arquivo .env
 */

$envFile = __DIR__ . '/../.env';

if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    foreach ($lines as $line) {
        // Ignorar comentários
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        // Processar linha KEY=VALUE
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            
            // Remover aspas se existirem
            $value = trim($value, '"\'');
            
            // Definir variável de ambiente
            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
}

// Definir valores padrão se não existirem
if (!isset($_ENV['DB_HOST'])) $_ENV['DB_HOST'] = 'localhost';
if (!isset($_ENV['DB_PORT'])) $_ENV['DB_PORT'] = '3306';
if (!isset($_ENV['CORS_ORIGIN'])) $_ENV['CORS_ORIGIN'] = '*';

