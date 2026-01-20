import getUser from "@/utlis/getUser";
import Favorites from "@/models/Favorites";
import Note from "@/models/notes";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ArrowUpRight, Clock } from "lucide-react";

export default async function FavoritesPage() {
  const user = await getUser()
  if (!user) return
  const favorites = await Favorites.find({
    userId: user.id
  })
  const notes = await Note.find({
    _id: {
      $in: favorites.map((favorite) => favorite.noteId)
    }
  })

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note: any, index: number) => (
          <Link
            key={note._id.toString()}
            href={`/dashboard/note/${note._id}`}
            className="group block h-full focus:outline-none focus:ring-2 focus:ring-white/10 rounded-[2.5rem]"
          >
            <div className="relative h-72 p-8 bg-zinc-900/10 border border-white/5 rounded-[2.5rem] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/[0.03] blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-white transition-colors duration-500" />
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">
                      Personal
                    </span>
                  </div>
                  <div className="p-2 rounded-full bg-white/5 text-zinc-600 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 flex items-center gap-1">
                    <FavoriteButton noteId={note._id.toString()} />
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-zinc-200 tracking-tight leading-snug group-hover:text-white transition-colors">
                  {note.title}
                </h3>

                <p className="mt-3 text-zinc-500 text-sm line-clamp-4 leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                  {note.content}
                </p>
              </div>

              <div className="relative z-10 flex items-center pt-6 border-t border-white/[0.03]">
                <div className="flex items-center text-zinc-700 group-hover:text-zinc-500 transition-colors">
                  <Clock size={12} className="mr-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {/* Use proper date formatting since note.date might be a Date object */}
                    Modified {new Date(note.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 text-[40px] font-black text-white/[0.02] italic select-none group-hover:text-white/[0.04] transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}