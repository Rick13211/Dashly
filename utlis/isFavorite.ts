import Notes from "@/models/notes";
import connectToDB from "./DB"

const isFavorite = async (noteId: string) => {
  await connectToDB();
  const isFavorite = await Notes.findOne({ nodeId: noteId });
  return isFavorite != null;
}
export default isFavorite;