import {UserService} from '../services/index.js'
const userService=new UserService(); 
export const signUp=async(req,res)=>{
    try {
        const result=await userService.signUp({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })
        return res.status(200).json({
            data:result,
            success:true,
            message:"Created User"
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            success:false,
            message:error.explanation
        })
    }
}
export const login=async (req,res)=>{
    try {
        const token=await userService.signIn(req.body)
        return res.status(200).json({
            token:token,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
}