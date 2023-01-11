import { Router } from "express";
import { find_user_by_name } from "../controllers/users-find-by-name-controller.js";
const router = Router();

router.get("/user", find_user_by_name);

export default router;
