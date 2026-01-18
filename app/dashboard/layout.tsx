
import { ReactNode } from 'react';
import Link from 'next/link';
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0A0A0A]">
      {/* Dashboard Sidebar - Only visible in /dashboard/.. routes */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-8">DashLy</h1>

        <nav className="space-y-4 flex-1">
          <button className="flex items-center space-x-3 text-white w-full p-2 bg-zinc-800 rounded-lg">
            <span>📝</span> <span>All Notes</span>
          </button>
          <button className="flex items-center space-x-3 text-zinc-500 hover:text-white w-full p-2 transition">
            <span>⭐</span> <span>Favorites</span>
          </button>
          <button className="flex items-center space-x-3 text-zinc-500 hover:text-white w-full p-2 transition">
            <span>🗑️</span> <span>Trash</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-800">
          <Link href="/dashboard/new">
            <button className="w-full py-2 bg-white text-black rounded-md font-medium text-sm hover:bg-zinc-200 transition">
              + New Note
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}