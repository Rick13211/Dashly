import {model, Model, models, Schema} from "mongoose";

type notes = {
  title:string,
  content:string,
  user:string
}

const NotesSchema = new Schema<notes>({
  title:{type:String, required:true},
  content:{type:String, required:true},
  user:{type:String, required:true}
})

const Notes = models.notes || model('Notes', NotesSchema)
export default Notes
