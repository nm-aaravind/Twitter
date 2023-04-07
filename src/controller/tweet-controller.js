import {TweetService} from "../services/index.js";
const tweetService=new TweetService();
export const createTweet=async (req,res)=>{
    try {
        const response=await tweetService.create(req.body);
        return res.status(200).json({
            data:response,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            error:error.message,
            success:false
        })
    }
}
export const getTweet=async (req,res)=>{
    try {
        const response= await tweetService.get(req.params.id)
        return res.status(200).json({
            data:response,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
}