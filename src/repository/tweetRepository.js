import Tweet from "../models/tweet.js";
import crudRepository from "./crudRepository.js";
class TweetRepository extends crudRepository{
    constructor(){
        super(Tweet);
    }
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
    async find(id){
        try {
            const response=await Tweet.findById(id).populate({path:'likes'})
            return response;
        } catch (error) {
            consoe=le.log(error)
        }
    }
}
export default TweetRepository;