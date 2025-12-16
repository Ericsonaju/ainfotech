<?php
/**
 * Controller de Tasks (Ordens de Serviço)
 */

require_once __DIR__ . '/../config/database.php';

class TasksController {
    private $db;
    
    public function __construct() {
        $this->db = Database::getConnection();
    }
    
    /**
     * Listar todas as tasks
     */
    public function getTasks() {
        $status = $_GET['status'] ?? null;
        $assignedTo = $_GET['assigned_to'] ?? null;
        
        $query = 'SELECT * FROM tasks WHERE 1=1';
        $params = [];
        
        if ($status) {
            $query .= ' AND status = ?';
            $params[] = $status;
        }
        
        if ($assignedTo) {
            $query .= ' AND assigned_to = ?';
            $params[] = $assignedTo;
        }
        
        $query .= ' ORDER BY created_at DESC';
        
        $stmt = $this->db->prepare($query);
        $stmt->execute($params);
        $tasks = $stmt->fetchAll();
        
        // Converter JSON strings para arrays
        foreach ($tasks as &$task) {
            $task['tags'] = json_decode($task['tags'] ?? '[]', true);
            $task['checklist'] = json_decode($task['checklist'] ?? '[]', true);
        }
        
        echo json_encode($tasks);
    }
    
    /**
     * Buscar task por OS number
     */
    public function getTaskByOS($osNumber) {
        $stmt = $this->db->prepare('SELECT * FROM tasks WHERE os_number = ?');
        $stmt->execute([$osNumber]);
        $task = $stmt->fetch();
        
        if (!$task) {
            http_response_code(404);
            echo json_encode(['error' => 'Ordem de serviço não encontrada']);
            return;
        }
        
        $task['tags'] = json_decode($task['tags'] ?? '[]', true);
        $task['checklist'] = json_decode($task['checklist'] ?? '[]', true);
        
        echo json_encode($task);
    }
    
    /**
     * Criar nova task
     */
    public function createTask() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $osNumber = $data['os_number'] ?? '';
        $title = $data['title'] ?? '';
        
        if (empty($osNumber) || empty($title)) {
            http_response_code(400);
            echo json_encode(['error' => 'OS number e título são obrigatórios']);
            return;
        }
        
        // Verificar se OS já existe
        $stmt = $this->db->prepare('SELECT id FROM tasks WHERE os_number = ?');
        $stmt->execute([$osNumber]);
        
        if ($stmt->fetch()) {
            http_response_code(400);
            echo json_encode(['error' => 'OS number já existe']);
            return;
        }
        
        // Preparar dados
        $description = $data['description'] ?? null;
        $status = $data['status'] ?? 'pending';
        $priority = $data['priority'] ?? 'medium';
        $assignedTo = $data['assigned_to'] ?? null;
        $customerName = $data['customer_name'] ?? null;
        $customerPhone = $data['customer_phone'] ?? null;
        $customerEmail = $data['customer_email'] ?? null;
        $deviceType = $data['device_type'] ?? null;
        $deviceBrand = $data['device_brand'] ?? null;
        $deviceModel = $data['device_model'] ?? null;
        $issueDescription = $data['issue_description'] ?? null;
        $estimatedCost = $data['estimated_cost'] ?? null;
        $tags = json_encode($data['tags'] ?? []);
        $checklist = json_encode($data['checklist'] ?? []);
        
        // Inserir
        $stmt = $this->db->prepare('
            INSERT INTO tasks (
                os_number, title, description, status, priority, assigned_to,
                customer_name, customer_phone, customer_email,
                device_type, device_brand, device_model, issue_description,
                estimated_cost, tags, checklist
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ');
        
        $stmt->execute([
            $osNumber, $title, $description, $status, $priority, $assignedTo,
            $customerName, $customerPhone, $customerEmail,
            $deviceType, $deviceBrand, $deviceModel, $issueDescription,
            $estimatedCost, $tags, $checklist
        ]);
        
        http_response_code(201);
        echo json_encode([
            'message' => 'Task criada com sucesso',
            'taskId' => $this->db->lastInsertId()
        ]);
    }
    
    /**
     * Atualizar task
     */
    public function updateTask($id) {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Remover campos que não devem ser atualizados
        unset($data['id'], $data['created_at'], $data['os_number']);
        
        // Converter arrays para JSON
        if (isset($data['tags'])) {
            $data['tags'] = json_encode($data['tags']);
        }
        if (isset($data['checklist'])) {
            $data['checklist'] = json_encode($data['checklist']);
        }
        
        // Se status mudou para completed, atualizar completed_at
        if (isset($data['status']) && $data['status'] === 'completed' && !isset($data['completed_at'])) {
            $data['completed_at'] = date('Y-m-d H:i:s');
        }
        
        // Construir query dinâmica
        $fields = [];
        $values = [];
        
        foreach ($data as $key => $value) {
            $fields[] = "$key = ?";
            $values[] = $value;
        }
        
        $values[] = $id;
        
        $query = 'UPDATE tasks SET ' . implode(', ', $fields) . ' WHERE id = ?';
        
        $stmt = $this->db->prepare($query);
        $stmt->execute($values);
        
        echo json_encode(['message' => 'Task atualizada com sucesso']);
    }
    
    /**
     * Deletar task
     */
    public function deleteTask($id) {
        $stmt = $this->db->prepare('DELETE FROM tasks WHERE id = ?');
        $stmt->execute([$id]);
        
        echo json_encode(['message' => 'Task deletada com sucesso']);
    }
}

