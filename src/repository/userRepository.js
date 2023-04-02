import User from "../models/user.js";
import crudRepository from "./crudRepository.js";
class UserRepository extends crudRepository{
    constructor(){
        super(User)
    }
}
export default UserRepository