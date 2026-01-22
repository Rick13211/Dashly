import {model, Model, models, Schema} from "mongoose";

export type user ={
  username:string,
  password:string,
  avatar:string|'',

}

const UserSchema = new Schema<user>({
  username:{type:String,required:true, unique:true, trim:true},
  password:{type:String,required:true},
  avatar:{type:String,required:false},
},{timestamps:true})

const User = models.User || model('User', UserSchema)
export default User