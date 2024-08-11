import cors from 'cors';
import express from 'express';
import { connectDB } from './config/database';
import { authMiddleware } from './middlewares/authMiddleware';
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

// Authentication routes
app.use('/api/auth', authRoutes);

// Todo routes (protected)
app.use('/api/todos', authMiddleware, todoRoutes);

app.get('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
