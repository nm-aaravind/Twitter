import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    methods:{
        comparePassword(password){
            return bcrypt.compareSync(password,this.password)
        }
    }
})
userSchema.pre('save',function(next){
    const user=this;
    const SALT=bcrypt.genSaltSync(10);
    const encryptedPassword=bcrypt.hashSync(user.password,SALT);
    user.password=encryptedPassword;
    next();
})
userSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password,this.password)
}
userSchema.methods.genJWT=function generate(){
    return jwt.sign({
        id:this._id,
        email:this.email
    },'twittersecret',{
        expiresIn:'1h'
    });
}
const User=mongoose.model('User',userSchema)
export default User;