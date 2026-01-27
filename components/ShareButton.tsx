'use client';
import { Share } from "lucide-react";
import { redirect } from "next/navigation";

interface ShareButtonProps {
  noteId: string;
}

export default function ShareButton({ noteId }: ShareButtonProps) {

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    redirect(`https://youtu.be/dQw4w9WgXcQ?si=FIJD_MiKzZyLohuR`)
  };

  return (
    <button
      onClick={handleShare}
      className="relative z-30 p-2 rounded-full text-zinc-600 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
      aria-label="Edit note"
    >
      <Share size={16} />
    </button>
  );
}