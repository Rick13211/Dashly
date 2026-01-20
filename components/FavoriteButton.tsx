'use client'

import { Star } from 'lucide-react';
import { toggleFavorite } from '@/app/dashboard/actions';

interface FavoriteButtonProps {
  noteId: string;
}

export default function FavoriteButton({ noteId }: FavoriteButtonProps) {
  return (
    <div
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await toggleFavorite(noteId);
      }}
      className="cursor-pointer hover:text-yellow-400 transition-colors"
    >
      <Star size={14} />
    </div>
  );
}
