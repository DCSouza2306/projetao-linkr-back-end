import { Router } from "express";
import { deleteLikeDatabase, getLikesDatabase, isLiked, postLikeDatabase } from "../controllers/like-controller.js";
import db from "../database/db.js";
import { authValidation } from "../middlewares/auth-validation-middleware.js";
import { validatePostid } from "../middlewares/likes-middlewares.js";

const router = Router()


router.post("/likes/:postId", authValidation ,validatePostid, postLikeDatabase )

router.post("/likesdelete/:postId", authValidation, validatePostid,deleteLikeDatabase )

router.get("/likes", getLikesDatabase)

router.post("/isliked", authValidation ,isLiked)

export default router