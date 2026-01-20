import getUser from "./getUser";
import Notes from "@/models/notes";
import connectToDB from "./DB";

export default async function getNotes() {
  await connectToDB(); // Always connect first
  const user: any = await getUser();
  
  if (!user) return [];
  
  const id = user.id;
  // Use .lean() to get plain JavaScript objects (required for Server Components)
  const notes = await Notes.find({ user: id }).lean();
  return notes;
}