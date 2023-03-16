import mongoose from "mongoose";
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Character limit exceeded']
    },
    hashtags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hashtags"
    }]
},{timestamps:true});
const Tweet=mongoose.model('Tweet',tweetSchema);
export default Tweet;