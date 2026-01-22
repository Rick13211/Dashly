'use client'

import { Trash2 } from 'lucide-react';
import { deleteNote } from '@/app/dashboard/actions';
import { useTransition } from 'react';

interface DeleteButtonProps {
  noteId: string;
}

export default function DeleteButton({ noteId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = window.confirm("Are you sure you want to delete this note?");
    if (!confirmed) return;

    startTransition(async () => {
      await deleteNote(noteId);
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="cursor-pointer hover:text-red-500 transition-colors disabled:opacity-50"
      aria-label="Delete note"
    >
      <Trash2 size={16} />
    </button>
  );
}
