'use client'
import { signOut } from "next-auth/react";

export default function SignOut(){
  return(
    <button onClick={()=>signOut()} className="bg-zinc-700 text-white px-4 py-2 rounded-xl hover:bg-zinc-600 transition-colors">Sign Out</button>
  )
}