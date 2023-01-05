import { Router } from 'express';
import authRoutes from './auth.routes.js';
import postRoutes from './posts-routes.js';

const router = Router();

router.use(authRoutes);
router.use(postRoutes);

export default router;
