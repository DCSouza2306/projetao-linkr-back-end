import { Router } from 'express';
import authRoutes from './auth-routes.js';
import postRoutes from './posts-routes.js';
import hashtagRankingRoutes from './hashtag-routes.js';
import commentsRoutes from './comments-routes.js'

const router = Router();

router.use(authRoutes);
router.use(postRoutes);
router.use(hashtagRankingRoutes);
router.use(commentsRoutes)

export default router;
