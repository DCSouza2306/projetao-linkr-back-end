import { Router } from "express";
import { get_user_page } from "../controllers/users-page-controller.js";

const router = Router();

router.get("/user/:id", get_user_page);

export default router;
