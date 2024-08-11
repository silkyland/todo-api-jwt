import express from 'express';
import { getUsers } from '../controllers/userController';

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Public
 */
router.get('/', getUsers);

export default router;

