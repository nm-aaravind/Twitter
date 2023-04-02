import { createTweet } from "../../controller/tweet-controller.js";
import { toggleLike } from "../../controller/likeController.js";
import { createComment } from "../../controller/commentController.js";

import express from 'express';
const router=express.Router();
router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',createComment)
export default router