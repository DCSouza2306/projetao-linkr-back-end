import { Router } from "express";
import authRoutes from "./auth/auth-routes.js";
import hashtagRankingRoutes from "./posts/hashtag-routes.js";
import users_pages from "./users/users-page-routes.js";
import users_find_name from "./users/users-find-by-name-routes.js";
import postRoutes from './posts/posts-routes.js';
import commentsRoutes from './posts/comments-routes.js'
import likeRoutes from './posts/like-routes.js';

const router = Router();

router.use(authRoutes);
router.use(postRoutes);
router.use(hashtagRankingRoutes);
router.use(commentsRoutes)
router.use(users_pages);
router.use(users_find_name);
router.use(likeRoutes)

export default router;
