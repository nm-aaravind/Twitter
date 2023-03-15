const express=require("express")
const connect=require("./config/database");
const Tweet = require("./models/tweet");
const Comment=require("./models/comment")
const app=express();
const TweetRepository=require("./repository/tweetRepository")
app.listen(3000,async (req,res)=>{
    console.log("Started server on PORT",3000);
    await connect();
    console.log("Mongo db connected");
    const repo=new TweetRepository();
    const tweet=await repo.createTweet({content:"dandanakakakasda   qqqqqqqqqqakakdasdasde"});
    console.log(tweet);
    // const comment=await Comment.create({content:"HEHHEasndasjqqqqqqda"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    // const tweetget=await repo.getAll(0,4)
    // console.log(tweetget[1].contentWithEmail)
    // const tweet=await repo.getWithComments('63ef557778ccb67e2817c8d6')
    // console.log(tweet)
    // const tweet=await repo.updateTweet('63ee5dfec971851d3d5d1f18',{content:"Poda111222aaa"})
    // tweet.comments.push({content:"First comment bro fire uh"});
    // await tweet.save();
    // console.log(tweet);
    // const tweet=await Tweet.create({
    //     content:"third tweet",
    //     userEmail:'a@b.com'
    // })
    // const tweets=await Tweet.find();
    // console.log(tweets)
    // console.log(tweet);
})