import express from 'express';
import {
  getTasks,
  getTaskByOS,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/tasksController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticateToken);

// Listar tasks
router.get('/', getTasks);

// Buscar por OS number (público para clientes)
router.get('/os/:osNumber', getTaskByOS);

// Criar task
router.post('/', createTask);

// Atualizar task
router.put('/:id', updateTask);

// Deletar task
router.delete('/:id', deleteTask);

export default router;

