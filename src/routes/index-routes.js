import { Router } from 'express';
import authRoutes from './auth.routes.js';
import postRoutes from './posts-routes.js';
import hashtagRankingRoutes from './hashtag-routes.js';

const router = Router();

router.use(authRoutes);
router.use(postRoutes);
router.use(hashtagRankingRoutes);

export default router;
