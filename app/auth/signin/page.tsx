"use client"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function SignIn() {
  const router = useRouter();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const result = await signIn("credentials",{
      email,
      password,
      redirect:false
    })
    if(result?.error){
      console.log(result.error)
    }
    else{
      router.push('/dashboard')
    }
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Glow Effect Background (Optional for depth) */}
      <div className="absolute w-64 h-64 bg-white/5 rounded-full blur-[120px] -z-10"></div>

      <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Join DashLy</h2>
          <p className="text-zinc-500">Create your personalized space.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/*Email Field*/}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 ml-1">
              Email
            </label>
            <input 
              onChange={(e)=>SetEmail(e.target.value)}
              type="email" 
              placeholder="johndoe@email.com"
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder-zinc-600"
            />
          </div>
          {/* Password Field */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 ml-1">
              Password
            </label>
            <input 
              onChange={(e)=>SetPassword(e.target.value)}
              type="password" 
              placeholder="••••••••"
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder-zinc-600"
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4 hover:bg-zinc-200 transition-colors active:scale-[0.98]">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <span className="text-zinc-500">New User? </span>
          <button className="text-white font-medium hover:underline"
          onClick={()=>router.push('/auth/signup')}
          >Sign Up</button>
        </div>
      </div>
    </div>
  );
}