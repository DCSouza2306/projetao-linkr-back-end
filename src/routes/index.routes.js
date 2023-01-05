import { Router } from "express";
import authRoutes from "./auth.routes.js"
import hashtagRankingRoutes from "./hashtag-routes.js"

const router = Router();

router.use(authRoutes);

router.use(hashtagRankingRoutes)


export default router;