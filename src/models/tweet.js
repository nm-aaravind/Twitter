const mongoose=require("mongoose")
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
tweetSchema.virtual('contentWithEmail').get(function(){
    return `${this.content}\nCreated by:${this.userEmail}`;
})
tweetSchema.pre('save',function(next){
    console.log("Inside hooks");
    this.content=this.content+"...";
    next();
})
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;