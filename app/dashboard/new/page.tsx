'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSave = () => {
    // Logic to save to your DB/API would go here
    console.log("Saving:", { title, content });
    router.push('/dashboard'); // Go back to view all notes
  };

  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-6">
      <div className="flex justify-between items-center mb-10">
        <button onClick={() => router.back()} className="text-zinc-500 hover:text-white transition">← Back</button>
        <button 
          onClick={handleSave}
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200"
        >
          Save Note
        </button>
      </div>

      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent text-5xl font-bold outline-none w-full mb-6 placeholder-zinc-800"
      />
      <textarea
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-transparent text-zinc-400 text-xl outline-none w-full h-[60vh] resize-none leading-relaxed placeholder-zinc-900"
      />
    </div>
  );
}