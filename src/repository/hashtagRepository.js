import Hashtag from "../models/hashtag.js";
class HashtagRepository{
    async createTweet(data){
        try {
            const tweet=await Hashtag.create(data);
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async getTweet(tweetId){
        try {
            const tweet=await Hashtag.findById(tweetId)
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async bulkCreate(data){
        try {
            const hashtag=await Hashtag.insertMany(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(data){
        try {
            const result=await Hashtag.find({
                title:data
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async getWithComments(tweetId){
        try {
            const tweet=await Hashtag.findById(tweetId).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error,"in repo of tweet")
        }
    }
    async deleteTweet(tweetId){
        try {
            const tweet=await Hashtag.findByIdAndRemove(tweetId);
            return tweet;
        } catch (error) {
            console.log(error,"inside repo")
        }
    }
    async getAll(offset,limit){
        try {
            const tweet=await Hashtag.find().skip(offset).limit(limit);
            return tweet
        } catch (error) {
            console.log(error,"in repo of tweet")
        }
    }
}
export default HashtagRepository;