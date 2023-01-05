import {Router} from "express"
import {getHashtagPosts, getHashtagRanking} from "../controllers/hashtags-controller.js"


const router = Router()

router.get("/hashtag", getHashtagRanking)

router.get("/hashtag/:hashtag", getHashtagPosts)

export default router