import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Ensure this path is correct

export default async function getUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}