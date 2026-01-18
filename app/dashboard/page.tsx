import Link from 'next/link';

// Mock data (In a real app, this comes from your database)
const notes = [
  { id: '1', title: 'Project Ideas', content: 'Build a note taking app with Next.js and Tailwind. Focus on minimalist design and speed.', date: 'Jan 12' },
  { id: '2', title: 'Grocery List', content: 'Milk, Eggs, Coffee beans, Sourdough bread, Avocado, Spinach, Greek yogurt.', date: 'Jan 10' },
  { id: '3', title: 'Meeting Notes', content: 'Discuss the new layout with the team. Everyone likes the dark mode but wants a bigger sidebar.', date: 'Jan 08' },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Your Space</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notes.map((note) => (
          <Link key={note.id} href={`/dashboard/note/${note.id}`}>
            <div className="h-48 p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all flex flex-col justify-between group">
              <div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-zinc-300 transition-colors">
                  {note.title}
                </h3>
                {/* line-clamp-3 limits the preview to 3 lines */}
                <p className="text-zinc-500 text-sm line-clamp-3 leading-relaxed">
                  {note.content}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-tighter">
                  {note.date}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}