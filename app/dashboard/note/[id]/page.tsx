import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import connectToDB from "@/utlis/DB";
import Notes from "@/models/notes";

// Ensure the type for params is a Promise
export default async function ViewNotePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 1. Unwrap the params promise
  const { id } = await params;

  await connectToDB();
  
  let note;
  try {
    // 2. Use the unwrapped 'id'
    note = await Notes.findById(id).lean();
  } catch (error) {
    return notFound();
  }

  if (!note) return notFound();

  return (
    <div className="max-w-4xl mx-auto w-full py-16 px-8 relative z-10">
      <header className="flex justify-between items-center mb-16">
        <Link 
          href="/dashboard" 
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all"
        >
          <div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:border-white/20">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Workspace</span>
        </Link>
        <div className="flex items-center text-zinc-600">
          <Clock size={12} className="mr-2" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        </div>
      </header>

      <article>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em]">Personal Note</span>
        </div>
        <h1 className="text-6xl font-black text-white italic tracking-tighter mb-8 leading-none">
          {note.title}
        </h1>
        <div className="w-12 h-[1px] bg-white/10 mb-12" />
        <p className="text-zinc-400 text-xl leading-relaxed whitespace-pre-wrap font-light max-w-2xl">
          {note.content}
        </p>
      </article>
    </div>
  );
}