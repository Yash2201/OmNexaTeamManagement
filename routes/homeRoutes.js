import express from 'express';
import { getHomeSummary } from '../controllers/homeController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';


const router = express.Router();

router.get('/summary', authMiddleware, getHomeSummary);

export default router;
