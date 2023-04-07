import { createTweet,getTweet } from "../../controller/tweet-controller.js";
import { toggleLike } from "../../controller/likeController.js";
import { createComment } from "../../controller/commentController.js";
import { login, signUp } from "../../controller/userController.js";
import { authenticate } from "../../config/authenticate.js";
import express from 'express';  
const router=express.Router();
router.post('/tweets',authenticate,createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',createComment)
router.post('/signup',signUp)
router.post('/signin',login)

router.get('/tweets/:id',getTweet)
export default router