'use client';
import { Check, Share } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

interface ShareButtonProps {
  noteId: string;
}

export default function ShareButton({ noteId }: ShareButtonProps) {
const [copied, setCopied] = useState(false);
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareUrl = `${window.location.origin}/share/${noteId}`;
    try{
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      if (navigator.share) {
        await navigator.share({
          title: 'DashLy Note',
          url: shareUrl
        });
      }
    }catch(e){
      console.error('Failed to copy to clipboard', e);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="relative z-30 p-2 rounded-full text-zinc-600 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
      aria-label="Edit note"
    >
      {copied? <Check className="text-green-500" size={16}/>: <Share size={16}/>}
    </button>
  );
}