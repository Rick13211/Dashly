'use client';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { ReactNode } from 'react';
import { Plus, FileText, Star, LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex h-screen bg-[#050505] text-white selection:bg-white/10">
      {/* Refined Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-black/40 backdrop-blur-2xl p-8 flex flex-col relative z-20">
        
        {/* Logo Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-black italic tracking-tighter text-white">DashLy</h1>
        </div>

        {/* Dynamic User Profile (Update logic integrated) */}
        <div className="mb-10 p-4 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center group transition-all hover:bg-white/[0.05]">
          <div className="relative w-16 h-16 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-white/50 transition-all">
              <Image
                src={session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name || 'User'}&background=ffffff&color=000000&bold=true`}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="font-bold text-sm tracking-tight truncate w-full px-2">
            {session?.user?.name || "Member"}
          </h2>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest truncate w-full px-2">
            {session?.user?.email}
          </p>
        </div>

        {/* Nav Links */}
        <nav className="space-y-2 flex-1">
          <button className="flex items-center space-x-3 text-white w-full px-4 py-3 bg-white/5 rounded-2xl border border-white/5 font-medium text-sm">
            <FileText size={18} className="text-zinc-400" /> <span>All Notes</span>
          </button>
          <button className="flex items-center space-x-3 text-zinc-500 hover:text-white hover:bg-white/5 w-full px-4 py-3 rounded-2xl transition-all font-medium text-sm">
            <Star size={18} onClick={() => router.push('/dashboard/favorites')} /> <span>Favorites</span>
          </button>
        </nav>

        {/* Action Section */}
        <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
          <Link href="/dashboard/new">
            <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95">
              + New Note
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Subtle Background Grid - ensure this class exists in globals.css */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}