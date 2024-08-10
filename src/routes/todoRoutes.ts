import express from 'express';
import { createTodo, getTodos } from '../controllers/todoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getTodos);

// Add routes for update and delete

export default router;
