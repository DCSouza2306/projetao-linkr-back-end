import {Router} from "express"
import {getHashtagPosts, getHashtagRanking} from "../../controllers/posts/hashtags-controller.js"


const router = Router()

router.get("/hashtag", getHashtagRanking)

router.get("/hashtag/:hashtag", getHashtagPosts)

export default router