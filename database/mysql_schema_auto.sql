-- ============================================
-- AINFOTECH E-COMMERCE - SCHEMA MySQL
-- HostGator Compatible - VERSÃO AUTOMÁTICA
-- ============================================
-- Este script é seguro para executar mesmo se o banco já existir
-- Execute direto no phpMyAdmin após selecionar o banco
-- ============================================

-- Remover tabelas se existirem (CUIDADO: apaga dados!)
-- Descomente apenas se quiser recriar tudo do zero:
-- DROP TABLE IF EXISTS order_items;
-- DROP TABLE IF EXISTS orders;
-- DROP TABLE IF EXISTS legal_consents;
-- DROP TABLE IF EXISTS stock_history;
-- DROP TABLE IF EXISTS price_history;
-- DROP TABLE IF EXISTS generated_ads;
-- DROP TABLE IF EXISTS ml_cache;
-- DROP TABLE IF EXISTS tasks;
-- DROP TABLE IF EXISTS affiliate_products;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS customers;
-- DROP TABLE IF EXISTS users;

-- ============================================
-- TABELA: users (Usuários/Administradores)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role ENUM('admin', 'technician', 'client') DEFAULT 'admin',
    is_active BOOLEAN DEFAULT TRUE,
    last_login DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_users_email (email),
    INDEX idx_users_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: products (Produtos Próprios - Domínio A)
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    technical_specs TEXT,
    category VARCHAR(50) NOT NULL DEFAULT 'outros',
    images JSON,
    tags JSON,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    cost_price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    profit_margin DECIMAL(5, 2) NOT NULL DEFAULT 30,
    final_price DECIMAL(10, 2) AS (cost_price * (1 + profit_margin / 100)) STORED,
    stock_quantity INT NOT NULL DEFAULT 0,
    min_stock_alert INT NOT NULL DEFAULT 5,
    warranty_days INT NOT NULL DEFAULT 90,
    weight DECIMAL(6, 3) DEFAULT 0,
    dimensions JSON DEFAULT ('{"width": 0, "height": 0, "depth": 0}'),
    barcode VARCHAR(50),
    ncm VARCHAR(10),
    origin VARCHAR(20) DEFAULT 'national',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_products_sku (sku),
    INDEX idx_products_category (category),
    INDEX idx_products_status (status),
    INDEX idx_products_stock (stock_quantity)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: affiliate_products (Produtos Afiliados - Domínio B)
-- ============================================
CREATE TABLE IF NOT EXISTS affiliate_products (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    technical_specs TEXT,
    category VARCHAR(50) NOT NULL DEFAULT 'outros',
    images JSON,
    tags JSON,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    affiliate_url TEXT NOT NULL,
    original_url TEXT NOT NULL,
    reference_price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    seller VARCHAR(255),
    rating DECIMAL(2, 1),
    review_count INT DEFAULT 0,
    free_shipping BOOLEAN DEFAULT FALSE,
    external_id VARCHAR(100),
    last_sync_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    sync_error TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_affiliate_sku (sku),
    INDEX idx_affiliate_category (category),
    INDEX idx_affiliate_status (status),
    INDEX idx_affiliate_external (external_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: customers (Clientes)
-- ============================================
CREATE TABLE IF NOT EXISTS customers (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    cpf_cnpj VARCHAR(18),
    address_street VARCHAR(255),
    address_number VARCHAR(20),
    address_complement VARCHAR(100),
    address_neighborhood VARCHAR(100),
    address_city VARCHAR(100),
    address_state VARCHAR(2),
    address_zipcode VARCHAR(10),
    marketing_consent BOOLEAN DEFAULT FALSE,
    data_processing_consent BOOLEAN DEFAULT FALSE,
    consent_timestamp TIMESTAMP NULL,
    consent_ip VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_customers_email (email),
    INDEX idx_customers_cpf (cpf_cnpj)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: orders (Pedidos)
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_number VARCHAR(20) UNIQUE NOT NULL,
    customer_id CHAR(36),
    subtotal DECIMAL(10, 2) NOT NULL DEFAULT 0,
    discount DECIMAL(10, 2) DEFAULT 0,
    shipping_cost DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL DEFAULT 0,
    payment_method VARCHAR(20),
    payment_status VARCHAR(20) DEFAULT 'pending',
    status VARCHAR(20) DEFAULT 'pending',
    customer_snapshot JSON NOT NULL,
    notes TEXT,
    internal_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    paid_at TIMESTAMP NULL,
    shipped_at TIMESTAMP NULL,
    delivered_at TIMESTAMP NULL,
    cancelled_at TIMESTAMP NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL,
    INDEX idx_orders_number (order_number),
    INDEX idx_orders_customer (customer_id),
    INDEX idx_orders_status (status),
    INDEX idx_orders_payment_status (payment_status),
    INDEX idx_orders_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: order_items (Itens do Pedido)
-- ============================================
CREATE TABLE IF NOT EXISTS order_items (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    product_id CHAR(36),
    product_sku VARCHAR(50) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL,
    INDEX idx_order_items_order (order_id),
    INDEX idx_order_items_product (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: legal_consents (Consentimentos Legais)
-- ============================================
CREATE TABLE IF NOT EXISTS legal_consents (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36),
    customer_id CHAR(36),
    consent_type VARCHAR(50) NOT NULL,
    accepted BOOLEAN NOT NULL DEFAULT FALSE,
    version VARCHAR(20) NOT NULL DEFAULT '1.0',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL,
    INDEX idx_consents_order (order_id),
    INDEX idx_consents_customer (customer_id),
    INDEX idx_consents_type (consent_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: stock_history (Histórico de Estoque)
-- ============================================
CREATE TABLE IF NOT EXISTS stock_history (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    previous_quantity INT NOT NULL,
    new_quantity INT NOT NULL,
    reason VARCHAR(20) NOT NULL,
    order_id CHAR(36),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL,
    INDEX idx_stock_history_product (product_id),
    INDEX idx_stock_history_date (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: price_history (Histórico de Preços)
-- ============================================
CREATE TABLE IF NOT EXISTS price_history (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36) NOT NULL,
    previous_cost DECIMAL(10, 2),
    new_cost DECIMAL(10, 2),
    previous_margin DECIMAL(5, 2),
    new_margin DECIMAL(5, 2),
    previous_price DECIMAL(10, 2),
    new_price DECIMAL(10, 2),
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_price_history_product (product_id),
    INDEX idx_price_history_date (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: generated_ads (Anúncios Gerados por IA)
-- ============================================
CREATE TABLE IF NOT EXISTS generated_ads (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    product_id CHAR(36),
    product_type VARCHAR(20) NOT NULL,
    headline VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    call_to_action VARCHAR(100),
    hashtags JSON,
    seo_keywords JSON,
    legal_disclaimer TEXT,
    platform VARCHAR(50) DEFAULT 'general',
    ai_model VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ads_product (product_id),
    INDEX idx_ads_platform (platform)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: ml_cache (Cache do Mercado Livre)
-- ============================================
CREATE TABLE IF NOT EXISTS ml_cache (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    url_hash VARCHAR(64) UNIQUE NOT NULL,
    original_url TEXT NOT NULL,
    extracted_data JSON NOT NULL,
    success BOOLEAN NOT NULL DEFAULT TRUE,
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    INDEX idx_ml_cache_hash (url_hash),
    INDEX idx_ml_cache_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: tasks (Ordens de Serviço - Kanban)
-- ============================================
CREATE TABLE IF NOT EXISTS tasks (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    os_number VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'waiting', 'completed', 'cancelled') DEFAULT 'pending',
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    column_id ENUM('entry', 'in_progress', 'waiting', 'completed', 'cancelled') DEFAULT 'entry',
    assigned_to CHAR(36),
    client_name VARCHAR(255),
    client_phone VARCHAR(20),
    client_email VARCHAR(255),
    client_cpf VARCHAR(18),
    client_address TEXT,
    equipment VARCHAR(255),
    serial_number VARCHAR(100),
    device_type VARCHAR(100),
    device_brand VARCHAR(100),
    device_model VARCHAR(100),
    issue_description TEXT,
    service_cost DECIMAL(10, 2) DEFAULT 0,
    parts_cost DECIMAL(10, 2) DEFAULT 0,
    estimated_cost DECIMAL(10, 2),
    final_cost DECIMAL(10, 2),
    technical_observation TEXT,
    photos JSON,
    subtasks JSON,
    checklist JSON,
    chat_history JSON,
    tags JSON,
    signature TEXT,
    tech_signature TEXT,
    is_approved BOOLEAN DEFAULT FALSE,
    budget_expiry_date BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    INDEX idx_tasks_os_number (os_number),
    INDEX idx_tasks_status (status),
    INDEX idx_tasks_column (column_id),
    INDEX idx_tasks_assigned (assigned_to),
    INDEX idx_tasks_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TRIGGERS (Apenas se não existirem)
-- ============================================

-- Remover triggers antigos se existirem
DROP TRIGGER IF EXISTS generate_order_number_trigger;
DROP TRIGGER IF EXISTS decrement_stock_after_order;

-- Trigger para gerar número do pedido
DELIMITER //
CREATE TRIGGER generate_order_number_trigger
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
        SET NEW.order_number = CONCAT('PED-', YEAR(NOW()), '-', 
            LPAD(COALESCE((SELECT MAX(CAST(SUBSTRING(order_number, 10, 4) AS UNSIGNED)) 
            FROM orders WHERE order_number LIKE CONCAT('PED-', YEAR(NOW()), '-%')), 0) + 1, 4, '0'));
    END IF;
END//
DELIMITER ;

-- Trigger para decrementar estoque após pedido
DELIMITER //
CREATE TRIGGER decrement_stock_after_order
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    DECLARE old_stock INT;
    
    UPDATE products 
    SET stock_quantity = stock_quantity - NEW.quantity
    WHERE id = NEW.product_id;
    
    SELECT stock_quantity + NEW.quantity INTO old_stock
    FROM products
    WHERE id = NEW.product_id;
    
    INSERT INTO stock_history (product_id, previous_quantity, new_quantity, reason, order_id)
    VALUES (NEW.product_id, old_stock, old_stock - NEW.quantity, 'sale', NEW.order_id);
END//
DELIMITER ;

-- ============================================
-- INSERIR USUÁRIO ADMIN INICIAL
-- ============================================
-- IMPORTANTE: Altere a senha após primeiro login!
-- Use o script: node backend/scripts/generate-password.js "sua_senha"
INSERT IGNORE INTO users (id, email, password_hash, name, role) 
VALUES (
    UUID(),
    'admin@ainfotech.com',
    '$2b$10$rOzJqKqKqKqKqKqKqKqKqO', -- ALTERE ISSO! Use bcrypt para gerar hash real
    'Administrador',
    'admin'
);

-- ============================================
-- FIM DO SCRIPT
-- ============================================
-- ✅ Execute este script no phpMyAdmin após selecionar o banco
-- ✅ Todas as tabelas serão criadas automaticamente
-- ✅ Se alguma tabela já existir, será ignorada (não apaga dados)
-- ============================================

