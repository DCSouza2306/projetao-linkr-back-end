import { authValidation } from "../middlewares/auth-validation-middleware.js";
import { postExist } from "../middlewares/post-validation-middleware.js";
import { postComment, getComments, getCommentsCount } from "../controllers/comments-controller.js";
import {Router} from 'express';

const router = Router();

router.post("/posts/:id/comments", authValidation, postExist, postComment);

router.get("/posts/comments", authValidation, getComments);

router.get("/comments", getCommentsCount)

export default router;