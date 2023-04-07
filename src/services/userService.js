import {UserRepository} from '../repository/index.js'
import User from '../models/user.js';
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async signUp(data){
        try {
            const result=await this.userRepository.create(data);
            return result;
        } catch (error) {
            console.log(error)
        }
    }
    async findBy(data){
        try {
            const response=await this.userRepository.findBy(data);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async signIn(data){
        try {
            const user=await User.findOne({
                email:data.email
            })
            if(!user){
                throw{
                    message:"No user found",
                    success:false
                }
            }
            else{
                if(!user.comparePassword(data.password)){
                    throw {
                        message:"Incorrect password",
                        success:false
                    }
                }
                else{
                    const token=await user.genJWT();
                    return token;
                }
            }
        } catch (error) {
            throw error;
        }
    }
}
export default UserService;