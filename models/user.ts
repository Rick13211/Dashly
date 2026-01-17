import {model, Model, models, Schema} from "mongoose";

export type user ={
  name:string,
  email:string,
  password:string,
  avatar:string|'',

}

const UserSchema = new Schema<user>({
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  avatar:{type:String,required:false},
},{timestamps:true})

const User = models.User || model('User', UserSchema)
export default User