import { model, models, Schema, Types } from "mongoose";

type NoteType = {
  title: string;
  content: string;
  user: Types.ObjectId; // Reference to the User
  favourites: boolean;
};

const NotesSchema = new Schema<NoteType>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // This creates a relationship between Notes and Users
    required: true 
  },
  favourites: { type: Boolean, default: false }
}, { timestamps: true }); // Highly recommended for sorting notes by 'latest'

const Notes = models.Notes || model('Notes', NotesSchema);
export default Notes;
