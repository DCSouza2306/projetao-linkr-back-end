import { Router } from "express";
import authRoutes from "./auth.routes.js";
import hashtagRankingRoutes from "./hashtag-routes.js";

import users_pages from "../routes/users-page-routes.js";
import users_find_name from "../routes/users-find-by-name-routes.js";

const router = Router();

router.use(authRoutes);

router.use(hashtagRankingRoutes);

router.use(users_pages);
router.use(users_find_name);

export default router;
