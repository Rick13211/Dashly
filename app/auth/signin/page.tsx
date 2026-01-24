"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
  const router = useRouter();
  const session = useSession()
  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session, router]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false
    });

    if (result?.error) {
      setError("Invalid username or password");
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center px-4 overflow-hidden">
      {/* DashLy Grid Overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-zinc-900/40 border border-zinc-800/50 p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white tracking-tighter italic mb-2">Welcome Back</h2>
          <p className="text-zinc-500 font-light">Enter your details to access your space.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 rounded-xl text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2 ml-1">
              Username
            </label>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="John Doe"
              className="w-full bg-black/40 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition-all placeholder-zinc-700"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2 ml-1">
              Password
            </label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full bg-black/40 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-600 transition-all placeholder-zinc-700"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-xl mt-4 hover:bg-zinc-200 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-zinc-600">New to DashLy? </span>
          <button
            className="text-white font-medium hover:underline transition-all"
            onClick={() => router.push('/auth/signup')}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}