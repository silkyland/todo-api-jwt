import { Request, Response } from 'express';
import Todo, { ITodo } from '../models/Todo';

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const userId = req.user?.id; // Assuming you have user info in req.user
    const todo: ITodo = new Todo({ title, description, userId });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};
