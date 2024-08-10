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


export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error });
  }
};
