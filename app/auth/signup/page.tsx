'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function SignUp() {
  const [username, SetUsername] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [confirmPassword, SetConfirmPassword] = useState('')
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirm_password: confirmPassword
      })
    })
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData.message)
      throw new Error(errorData.error || "Failed to register")
    }
    const data = await response.json()
    console.log(data)
    router.push('/dashboard')


  }
  const router = useRouter();
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
          {/* Username Field */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 ml-1">
              Username
            </label>
            <input
              onChange={(e) => SetUsername(e.target.value)}
              type="text"
              name='username'
              placeholder="johndoe"
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder-zinc-600"
            />
          </div>
          {/*Email Field*/}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 ml-1">
              Email
            </label>
            <input
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              name='email'
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
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              name='password'
              placeholder="••••••••"
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder-zinc-600"
            />
          </div>

          {/* Confirm Password (Standard for Sign-Up) */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 ml-1">
              Confirm Password
            </label>
            <input
              onChange={(e) => SetConfirmPassword(e.target.value)}
              type="password"
              name='confirm_password'
              placeholder="••••••••"
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500 transition-all placeholder-zinc-600"
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4 hover:bg-zinc-200 transition-colors active:scale-[0.98]">
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <span className="text-zinc-500">Already have an account? </span>
          <button className="text-white font-medium hover:underline"
            onClick={() => router.push('/auth/signin')}
          >Log in</button>
        </div>
      </div>
    </div>
  );
};

