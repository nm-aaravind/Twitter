import express from "express"
import {connect} from "./config/database.js";
const app=express();
import TweetService from "./services/tweetservice.js"
app.listen(3000,async (req,res)=>{
    console.log("Started server on PORT",3000);
    await connect();
    console.log("Mongo db connected");
    let service=new TweetService();
    const response=await service.create({
        content:"ES6 done #es6life"
    })
})