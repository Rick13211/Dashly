import Notes from "@/models/notes";
import connectToDB from "@/utlis/DB";
import { notFound } from "next/navigation";

export default async function PublicNotePage({ params }: { params: { id: string } }) {
  await connectToDB();
  
  let note;
  try {
    const {id} = await params;
    note = await Notes.findById(id);
  } catch (e) {
    return notFound();
  }

  if (!note) return notFound();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 relative overflow-hidden flex justify-center py-12 px-6 md:py-20">
  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-zinc-800/20 rounded-full blur-[100px]" />

  <div className="max-w-3xl w-full relative z-10">
    <div className="flex items-center gap-2 mb-12 opacity-50 hover:opacity-100 transition-opacity">
       <h1 className="text-2xl tracking-[0.1em] font-medium">DashLy</h1>
    </div>

    <main className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
      <header className="space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white/90">
          {note.title}
        </h1>
        <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 uppercase tracking-widest">
          <span>Public View</span>
          <span className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </header>
      
      <article className="prose prose-invert max-w-none">
        <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-light italic serif">
          {note.content}
        </p>
      </article>

      <footer className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-600 text-sm">
          Captured with DashLy — Your minimalist workspace.
        </p>
        <a 
          href="/" 
          className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
        >
          Create your own
        </a>
      </footer>
    </main>
  </div>
</div>
  );
}