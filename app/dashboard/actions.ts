'use server'

import getUser from "@/utlis/getUser";
import connectToDB from "@/utlis/DB";
import Favorite from "@/models/Favorites";
import { revalidatePath } from "next/cache";

export async function toggleFavorite(noteId: string) {
  try {
    await connectToDB();
    const user = await getUser();

    if (!user || !user.id) return;

    const existingFavorite = await Favorite.findOne({ userId: user.id, noteId });

    if (existingFavorite) {
      await existingFavorite.deleteOne();
    } else {
      await Favorite.create({ userId: user.id, noteId });
    }

    revalidatePath('/dashboard');
  } catch (error) {
    console.error("Error toggling favorite:", error);
  }
}
