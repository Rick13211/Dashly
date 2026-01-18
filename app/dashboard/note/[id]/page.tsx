'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ViewNotePage() {
  const params = useParams(); // Gets the 'id' from the URL
  const router = useRouter();

  // In a real app, you would fetch the note by params.id here
  const note = {
    title: "Project Ideas",
    content: "Build a note taking app with Next.js and Tailwind. Focus on minimalist design and speed."
  };

  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-6">
      <button 
        onClick={() => router.push('/dashboard')}
        className="text-zinc-500 hover:text-white mb-8 transition flex items-center gap-2"
      >
        ← Back to all notes
      </button>

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white outline-none">
          {note.title}
        </h1>
        <p className="text-zinc-400 text-xl leading-relaxed whitespace-pre-wrap">
          {note.content}
        </p>
      </div>
    </div>
  );
}