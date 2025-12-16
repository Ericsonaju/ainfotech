
import { apiService } from './api';
import { Task, Priority, ColumnType } from '../types';

// Mapeamento: Banco (snake_case) -> App (camelCase)
const mapTaskFromDB = (dbTask: any): Task => {
  if (!dbTask) {
      throw new Error("Dados da tarefa inválidos ou vazios.");
  }

  let cleanTags = Array.isArray(dbTask.tags) ? [...dbTask.tags] : [];
  
  // Helper de data
  const parseDate = (dateStr: string | number) => {
      if (!dateStr) return Date.now();
      if (typeof dateStr === 'number') return dateStr;
      const parsed = new Date(dateStr).getTime();
      return isNaN(parsed) ? Date.now() : parsed;
  };

  // Lógica de validade robusta para evitar NaN
  const createdAt = parseDate(dbTask.created_at);
  let finalExpiryDate = createdAt + (10 * 24 * 60 * 60 * 1000); // Default 10 days

  if (dbTask.budget_expiry_date) {
      const parsedExpiry = Number(dbTask.budget_expiry_date);
      if (!isNaN(parsedExpiry) && parsedExpiry > 0) {
          finalExpiryDate = parsedExpiry;
      }
  }

  return {
    id: dbTask.id,
    osNumber: dbTask.os_number || 'S/N',
    title: dbTask.title || 'Sem Título',
    description: dbTask.description || '',
    clientName: dbTask.client_name || 'Cliente',
    clientPhone: dbTask.client_phone || '',
    
    clientCpf: dbTask.client_cpf || '', 
    clientAddress: dbTask.client_address || '',
    
    equipment: dbTask.equipment || 'Equipamento',
    serialNumber: dbTask.serial_number || '',
    priority: (dbTask.priority as Priority) || Priority.Medium,
    columnId: (dbTask.column_id as ColumnType) || ColumnType.Entry,
    subtasks: Array.isArray(dbTask.subtasks) ? dbTask.subtasks : [],
    checklist: Array.isArray(dbTask.checklist) ? dbTask.checklist : [],
    chatHistory: Array.isArray(dbTask.chat_history) ? dbTask.chat_history : [],
    signature: dbTask.signature || undefined,
    techSignature: dbTask.tech_signature || undefined, 
    
    isApproved: !!dbTask.is_approved,
    createdAt: createdAt,
    tags: cleanTags,
    
    serviceCost: Number(dbTask.service_cost) || 0,
    partsCost: Number(dbTask.parts_cost) || 0,
    technicalObservation: dbTask.technical_observation || '',
    photos: Array.isArray(dbTask.photos) ? dbTask.photos : [],
    
    budgetExpiryDate: finalExpiryDate
  };
};

// Mapeamento: App (camelCase) -> Banco (snake_case)
const mapTaskToDB = (task: Task) => {
  const dbTags = (task.tags || []).filter(t => 
    typeof t === 'string' && t.trim() !== ''
  );

  return {
    os_number: task.osNumber,
    title: task.title,
    description: task.description,
    client_name: task.clientName,
    client_phone: task.clientPhone,
    client_cpf: task.clientCpf,
    client_address: task.clientAddress,
    equipment: task.equipment,
    serial_number: task.serialNumber,
    priority: task.priority,
    column_id: task.columnId,
    subtasks: task.subtasks || [],
    checklist: task.checklist || [],
    chat_history: task.chatHistory || [],
    signature: task.signature,
    tech_signature: task.techSignature,
    is_approved: task.isApproved,
    created_at: task.createdAt, 
    tags: dbTags, 
    service_cost: task.serviceCost,
    parts_cost: task.partsCost,
    technical_observation: task.technicalObservation,
    photos: task.photos || [],
    budget_expiry_date: task.budgetExpiryDate
  };
};

export const taskService = {
  async fetchTasks() {
    const response = await apiService.getTasks();
    
    if (response.error) {
        console.error("API error fetchTasks:", response.error);
        throw new Error(response.error || "Erro ao conectar com o servidor.");
    }
    return (response.data || []).map(mapTaskFromDB);
  },

  async fetchTaskByOS(osNumber: string) {
    const cleanOs = osNumber.trim().replace(/^OS-?/i, ''); // Remove prefixo OS- se houver
    const response = await apiService.getTaskByOS(`OS-${cleanOs}`);

    if (response.error) {
        console.error("API error fetchTaskByOS:", response.error);
        if (response.error.includes('não encontrada')) {
          return null;
        }
        throw new Error(response.error || "Erro ao buscar O.S.");
    }
    return response.data ? mapTaskFromDB(response.data) : null;
  },

  async createTask(task: Task) {
    const dbTask = mapTaskToDB(task);
    // Remove ID if present to allow DB auto-generation
    if (dbTask['id']) { delete (dbTask as any).id; }

    const response = await apiService.createTask(dbTask);
      
    if (response.error) {
        console.error("API error createTask:", response.error);
        throw new Error(response.error);
    }
    
    // Buscar task criada para retornar com ID
    if (response.data && (response.data as any).taskId) {
      // Se a API retornar apenas o ID, buscar a task completa
      const created = await this.fetchTaskByOS(task.osNumber);
      return created || task;
    }
    
    return task;
  },

  async updateTask(task: Task) {
    const dbTask = mapTaskToDB(task);
    const response = await apiService.updateTask(task.id, dbTask);

    if (response.error) {
        console.error("API error updateTask:", response.error);
        throw new Error(response.error);
    }
    
    // Buscar task atualizada
    const updated = await this.fetchTaskByOS(task.osNumber);
    return updated || task;
  },

  async deleteTask(id: string) {
    const response = await apiService.deleteTask(id);
      
    if (response.error) {
        throw new Error(response.error || `Erro ao excluir`);
    }
  }
};
