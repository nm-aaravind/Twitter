import {LikeService} from "../services/index.js";

const likeService=new LikeService();
const toggleLike=async(req,res)=>{
    try {
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(400).json({
            data:response.status,
            success:response.success
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
}
export{
    toggleLike
}