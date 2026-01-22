import getUser from "./getUser";
import Notes from "@/models/notes";
import Favorite from "@/models/Favorites";
import connectToDB from "./DB";

export default async function getNotes() {
  await connectToDB(); // Always connect first
  const user: any = await getUser();

  if (!user) return [];

  const id = user.id;
  // Use .lean() to get plain JavaScript objects (required for Server Components)
  const notes = await Notes.find({ user: id }).sort({ createdAt: -1 }).lean();
  const favorites = await Favorite.find({ userId: id }).lean();

  const notesWithFavorites = notes.map((note: any) => ({
    ...note,
    isFavorite: favorites.some((fav: any) => fav.noteId === note._id.toString())
  }));

  return notesWithFavorites;
}