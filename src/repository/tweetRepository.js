import Tweet from "../models/tweet.js";
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
export default TweetRepository;