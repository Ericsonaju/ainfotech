import express from 'express';
import { login, verifyToken, createUser } from '../controllers/authController.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

// Login público
router.post('/login', login);

// Verificar token
router.get('/verify', verifyToken);

// Criar usuário (apenas admin)
router.post('/users', authenticateToken, requireRole('admin'), createUser);

export default router;

