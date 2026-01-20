import { NextResponse } from "next/server";
import connectToDB from "@/utlis/DB";
import Notes from "@/models/notes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path to your authOptions

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectToDB();
    const { title, content } = await req.json();

    const result = await Notes.create({
      title,
      content,
      user: session.user.id,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to create note" }, { status: 500 });
  }
}