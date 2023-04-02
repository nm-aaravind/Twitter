import express from "express"
import { connect } from "./config/database.js";
import { router } from "./routes/index.js";
import bodyParser from "body-parser";

import UserRepository from "./repository/userRepository.js";
import LikeService from "./services/likeService.js";
import TweetRepository from "./repository/tweetRepository.js";

const app = express();

app.listen(3000, async () => {
    console.log("Started server on PORT", 3000);
    await connect();
    console.log("Mongo db connected");
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api', router)
    let userRepo=new UserRepository()
    let tweete=new TweetRepository()
    const t=await tweete.getAll()
    let likeSer=new LikeService()
    likeSer.toggleLike(t[0].id,'Tweet',"642959f5c6cae65ea50f06be")
    
})