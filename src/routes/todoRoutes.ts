import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getTodos);
router.get('/:id', authMiddleware, getTodo);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);

export default router;
