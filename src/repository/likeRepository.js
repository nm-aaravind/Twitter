import Like from "../models/like.js";
import crudRepository from "./crudRepository.js";
class LikeRepository extends crudRepository{
    constructor(){
        super(Like)
    }
    async findByUserAndLikeable(data){
        try {
            const response=await Like.findOne(data)
            return response;
        } catch (error) {
            console.log(error)
        }

    }
}
export default LikeRepository