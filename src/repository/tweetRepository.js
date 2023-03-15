const { trusted } = require("mongoose");
const Tweet=require("../models/tweet");
class TweetRepository{
    async createTweet(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async getTweet(tweetId){
        try {
            const tweet=await Tweet.findById(tweetId)
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async updateTweet(tweetId,data){
        try {
            const tweet=await Tweet.findByIdAndUpdate(tweetId,data,{new:true})
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async getWithComments(tweetId){
        try {
            const tweet=await Tweet.findById(tweetId).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error,"in repo of tweet")
        }
    }
    async deleteTweet(tweetId){
        try {
            const tweet=await Tweet.findByIdAndRemove(tweetId);
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet
        } catch (error) {
            console.log(error,"in repo of tweet")
        }
    }
}
module.exports=TweetRepository;