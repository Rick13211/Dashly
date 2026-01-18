import { getSession } from "next-auth/react";

    // Tailwind CSS React Component structure
const Dashboard = () => {

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar - Navigation */}
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
          <button className="w-full py-2 bg-white text-black rounded-md font-medium text-sm">
            + New Note
          </button>
        </div>
      </aside>

      {/* Main Content - Note Editor */}
      <main className="flex-1 flex flex-col">
        {/* Toolbar */}
        <header className="h-14 border-b border-zinc-800 flex items-center justify-right px-8">
          {/* <span className="text-xs text-zinc-500 italic">Saved 2m ago</span> */}
          <div className="flex space-x-4">
            <button className="text-zinc-400 hover:text-white text-sm">Share</button>
            <button className="text-zinc-400 hover:text-white text-sm">Settings</button>
          </div>
        </header>

        {/* Editor Area */}
        <div className="max-w-3xl mx-auto w-full h-full py-12 px-6 overflow-y-auto">
          <input 
            type="text" 
            placeholder="Untitled Note" 
            className="bg-transparent text-4xl font-bold outline-none w-full mb-6 placeholder-zinc-700"
          />
          <textarea 
            placeholder="Start typing your thoughts..."
            className="bg-transparent text-zinc-300 text-lg outline-none w-full h-full resize-none leading-relaxed placeholder-zinc-800"
          />
        </div>
      </main>
    </div>
  );
};
export default Dashboard;