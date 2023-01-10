import { authValidation } from "../middlewares/auth-validation-middleware.js";
import { postComment } from "../controllers/comments-controller.js";
import {Router} from 'express';

const router = Router();

router.post("/posts/:id/comments", authValidation, postComment);

export default router;