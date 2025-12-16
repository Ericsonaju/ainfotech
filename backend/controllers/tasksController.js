import pool from '../config/database.js';

/**
 * Listar todas as tasks (ordens de serviço)
 */
export const getTasks = async (req, res) => {
  try {
    const { status, assigned_to } = req.query;
    let query = 'SELECT * FROM tasks WHERE 1=1';
    const params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    if (assigned_to) {
      query += ' AND assigned_to = ?';
      params.push(assigned_to);
    }

    query += ' ORDER BY created_at DESC';

    const [tasks] = await pool.execute(query, params);
    
    // Converter JSON strings para objetos
    const formattedTasks = tasks.map(task => ({
      ...task,
      tags: typeof task.tags === 'string' ? JSON.parse(task.tags || '[]') : task.tags,
      checklist: typeof task.checklist === 'string' ? JSON.parse(task.checklist || '[]') : task.checklist
    }));

    res.json(formattedTasks);
  } catch (error) {
    console.error('Erro ao buscar tasks:', error);
    res.status(500).json({ error: 'Erro ao buscar tasks' });
  }
};

/**
 * Buscar task por OS number
 */
export const getTaskByOS = async (req, res) => {
  try {
    const { osNumber } = req.params;
    
    const [tasks] = await pool.execute(
      'SELECT * FROM tasks WHERE os_number = ?',
      [osNumber]
    );

    if (tasks.length === 0) {
      return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
    }

    const task = tasks[0];
    task.tags = typeof task.tags === 'string' ? JSON.parse(task.tags || '[]') : task.tags;
    task.checklist = typeof task.checklist === 'string' ? JSON.parse(task.checklist || '[]') : task.checklist;

    res.json(task);
  } catch (error) {
    console.error('Erro ao buscar task:', error);
    res.status(500).json({ error: 'Erro ao buscar task' });
  }
};

/**
 * Criar nova task
 */
export const createTask = async (req, res) => {
  try {
    const {
      os_number,
      title,
      description,
      status = 'pending',
      priority = 'medium',
      assigned_to,
      customer_name,
      customer_phone,
      customer_email,
      device_type,
      device_brand,
      device_model,
      issue_description,
      estimated_cost,
      tags = [],
      checklist = []
    } = req.body;

    if (!os_number || !title) {
      return res.status(400).json({ error: 'OS number e título são obrigatórios' });
    }

    // Verificar se OS já existe
    const [existing] = await pool.execute(
      'SELECT id FROM tasks WHERE os_number = ?',
      [os_number]
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: 'OS number já existe' });
    }

    const [result] = await pool.execute(
      `INSERT INTO tasks (
        os_number, title, description, status, priority, assigned_to,
        customer_name, customer_phone, customer_email,
        device_type, device_brand, device_model, issue_description,
        estimated_cost, tags, checklist
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        os_number, title, description, status, priority, assigned_to,
        customer_name, customer_phone, customer_email,
        device_type, device_brand, device_model, issue_description,
        estimated_cost,
        JSON.stringify(tags),
        JSON.stringify(checklist)
      ]
    );

    res.status(201).json({
      message: 'Task criada com sucesso',
      taskId: result.insertId
    });
  } catch (error) {
    console.error('Erro ao criar task:', error);
    res.status(500).json({ error: 'Erro ao criar task' });
  }
};

/**
 * Atualizar task
 */
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Remover campos que não devem ser atualizados diretamente
    delete updates.id;
    delete updates.created_at;
    delete updates.os_number;

    // Converter arrays para JSON
    if (updates.tags) updates.tags = JSON.stringify(updates.tags);
    if (updates.checklist) updates.checklist = JSON.stringify(updates.checklist);

    // Se status mudou para completed, atualizar completed_at
    if (updates.status === 'completed' && !updates.completed_at) {
      updates.completed_at = new Date();
    }

    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);

    await pool.execute(
      `UPDATE tasks SET ${fields} WHERE id = ?`,
      values
    );

    res.json({ message: 'Task atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar task:', error);
    res.status(500).json({ error: 'Erro ao atualizar task' });
  }
};

/**
 * Deletar task
 */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute('DELETE FROM tasks WHERE id = ?', [id]);

    res.json({ message: 'Task deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar task:', error);
    res.status(500).json({ error: 'Erro ao deletar task' });
  }
};

