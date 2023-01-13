import { Router } from "express";
import { getUserPage, postFollower, deleteFollower } from "../controllers/users-page-controller.js";
import { authValidation } from "../middlewares/auth-validation-middleware.js";

const router = Router();

router.get("/user/:id", getUserPage);

router.post("/user/:id/follow", authValidation, postFollower)

router.delete("/user/:id/unfollow", authValidation, deleteFollower)

export default router;
