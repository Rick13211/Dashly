import { clsx, type ClassValue } from "clsx"
import { redirect } from "next/navigation"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleShare(noteId: string) {
  redirect(`https://youtu.be/dQw4w9WgXcQ?si=FIJD_MiKzZyLohuR`)
}