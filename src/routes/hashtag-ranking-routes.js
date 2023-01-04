import {Router} from "express"
import get_hashtag_ranking from "../controllers/hashtag-ranking-controller.js"


const router = Router()


router.get("/hashtag", get_hashtag_ranking)



