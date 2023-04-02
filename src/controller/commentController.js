import { CommentService } from "../services/index.js";
const commentService=new CommentService();
const createComment=async(req,res)=>{
    try {
        const response=await commentService.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
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
export{
    createComment
}