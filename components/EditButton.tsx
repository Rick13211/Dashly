'use client';

import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface EditButtonProps {
  noteId: string;
}

export default function EditButton({ noteId }: EditButtonProps) {
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/dashboard/update/${noteId}`);
  };

  return (
    <button
      onClick={handleEdit}
      className="relative z-30 p-2 rounded-full text-zinc-600 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
      aria-label="Edit note"
    >
      <Pencil size={16} />
    </button>
  );
}