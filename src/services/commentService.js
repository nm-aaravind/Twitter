import {CommentRepository} from "../repository/index.js";
import {TweetRepository} from "../repository/index.js";
class CommentService{
    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository=new TweetRepository();
    }
    async createComment(modelId,modelType,userId,content){
        try {
            if(modelType=="Tweet"){
                var commentable=await this.tweetRepository.get(modelId)
            }
            else if(modelType=='Comment'){
                var commentable=await this.commentRepository.get(modelId)
            }
            else{
                throw new Error("No model matching")
            }
            const comment=await this.commentRepository.create({
                onModel:modelType,
                userId:userId,
                commentable:modelId,
                content:content,
                comments:[]
            })
            commentable.comments.push(comment);
            await commentable.save();
            return comment;
        } catch (error) {
            console.log(error)
        }
    }
}
export default CommentService;