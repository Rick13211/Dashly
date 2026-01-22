'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"

interface EditNoteFormProps {
  note: {
    _id: string;
    title: string;
    content: string;
  }
}

const EditNoteForm = ({ note }: EditNoteFormProps) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
  setLoading(true);
  try {
    const response = await fetch(`/api/notes`, { 
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        id: note._id, 
        title, 
        content 
      }),
    });

    if (!response.ok) {
      // PRO TIP: Check the server's error message for better debugging
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update");
    }

    router.push('/dashboard');
    router.refresh();
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative min-h-screen">
      {/* Background Detail */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full py-12 px-8 relative z-10">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-16">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
          >
            <div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:border-white/20 transition-all">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Discard</span>
          </button>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all disabled:opacity-50 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            <Save size={14} />
            {loading ? "Syncing..." : "Update Note"}
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">Editor Mode</span>
          </div>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="bg-transparent text-6xl md:text-7xl font-black italic tracking-tighter outline-none w-full placeholder-zinc-900 text-white selection:bg-white/20"
          />

          {/* Minimalist Divider */}
          <div className="w-16 h-[1px] bg-white/10" />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start typing your thoughts..."
            className="bg-transparent text-zinc-400 text-xl md:text-2xl font-light outline-none w-full h-[55vh] resize-none leading-relaxed placeholder-zinc-900 selection:bg-white/10"
          />
        </div>
      </div>
    </div>
  )
}

export default EditNoteForm;