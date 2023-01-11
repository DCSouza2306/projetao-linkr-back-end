import { Router } from "express";
import authRoutes from "./auth-routes.js";
import hashtagRankingRoutes from "./hashtag-routes.js";
import users_pages from "./users-page-routes.js";
import users_find_name from "./users-find-by-name-routes.js";
import postRoutes from './posts-routes.js';
import likeRoutes from './like-routes.js';

const router = Router();

router.use(authRoutes);
router.use(postRoutes);
router.use(hashtagRankingRoutes);
router.use(users_pages);
router.use(users_find_name);
router.use(likeRoutes)

export default router;
