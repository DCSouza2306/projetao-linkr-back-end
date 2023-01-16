import { Router } from "express";
import {
  getHashtagPosts,
  getHashtagsNames,
  getHashtagRanking,
  postHashtagList,
  hashtagsValidation,
  getHashtagsIds,
  postHashtag,
  hashtagsListValidation
} from "../../controllers/posts/hashtags-controller.js";

const router = Router();

router.get("/hashtag/ranking", getHashtagRanking);

router.get("/hashtag",getHashtagsNames)

router.get("/hashtag/:hashtag", getHashtagPosts);

router.post(
  "/post/:id/hashtags",
  hashtagsValidation,
  postHashtag,
  getHashtagsIds,
  hashtagsListValidation,
  postHashtagList
);

export default router;
