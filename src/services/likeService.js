import {LikeRepository,TweetRepository } from "../repository/index.js"
class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository()
        this.tweetRepository=new TweetRepository()
    }
    async toggleLike(modelId,modelType,userId){
        try {
            if(modelType=="Tweet"){
                var likeable=await this.tweetRepository.find(modelId)
            }
            else if(modelType=='Comment'){
                //TODO
            }
            else{
                throw new Error("No model matching")
            }
        } catch (error) {
            console.log(error)
        }
        const exists=await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded={
                status:"Added like",
                success:true
            };
        }
        else{
            const newLike=await this.likeRepository.create({
                onModel:modelType,
                likeable:modelId,
                user: userId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded={
                status:"Removed like",
                success:true
            }
        }
        return isAdded;
    }
}
export default LikeService