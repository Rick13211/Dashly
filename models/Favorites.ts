import { models, model, Schema } from "mongoose";
type Favorite = {
  userId: string;
  noteId:string
}

const FavoriteSchema = new Schema<Favorite>({
  userId: {
    type: String,
    required: true,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const Favorite = models.Favorite || model("Favorite",FavoriteSchema)
export default Favorite;
