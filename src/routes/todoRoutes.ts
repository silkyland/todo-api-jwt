import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getTodos);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);

export default router;
