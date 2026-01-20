'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    if (!title || !content) return alert("Please fill in all fields");
    
    setLoading(true);
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error("Failed to save");

      router.push('/dashboard');
      router.refresh(); // Forces the dashboard grid to update with the new note
    } catch (err) {
      console.error(err);
      alert("Error saving note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-6 relative z-10">
      <div className="flex justify-between items-center mb-10">
        <button onClick={() => router.back()} className="text-zinc-500 hover:text-white transition">
          ← Back
        </button>
        <button 
          onClick={handleSave}
          disabled={loading}
          className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Note"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Untitled Note"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent text-5xl font-black italic tracking-tighter outline-none w-full mb-6 placeholder-zinc-800 text-white"
      />
      <textarea
        placeholder="Start writing your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-transparent text-zinc-400 text-xl outline-none w-full h-[60vh] resize-none leading-relaxed placeholder-zinc-900"
      />
    </div>
  );
}