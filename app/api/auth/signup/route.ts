import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/utlis/DB";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";


export async function POST(request: NextRequest) {
  try {
    const { username, email, password, confirm_password } =
      await request.json();

    if (!username || !email || !password || !confirm_password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirm_password) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    console.log("MONGO URI:", process.env.MONGODB_URI);

    await connectToDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists!" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: username,   // ✅ FIXED
      email,
      password: hashedPassword,
      avatar: "",
    });

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("SIGNUP ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
