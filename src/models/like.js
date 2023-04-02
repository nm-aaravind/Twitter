import mongoose from "mongoose";
const likeSchema=mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        refPath:'OnModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})
const Like=mongoose.model('Like',likeSchema)
export default Like