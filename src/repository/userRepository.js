import User from "../models/user.js";
import crudRepository from "./crudRepository.js";
class UserRepository extends crudRepository{
    constructor(){
        super(User)
    }
    async findBy(data){
        try {
            const response=await User.find(data);
            return response;
        } catch (error) {
            console/log(error)
        }
    }
}
export default UserRepository