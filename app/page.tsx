"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="text-8xl font-bold font-italic mb-4">DashLy</h1>
        <h2 className="text-2xl  text-gray-500">Your Personalized Space to keep Notes</h2>

      </div>
      <button className="bg-white text-black text-xl hover:bg-gray-200 px-4 py-2 rounded"
      onClick={()=>router.push('/auth/signup')}
      >
        Get Started
      </button>
    </div>
  );
}
