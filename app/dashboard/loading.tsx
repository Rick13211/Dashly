export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
      <p className="mt-4 text-zinc-500 text-xs uppercase tracking-widest animate-pulse">
        Syncing Workspace...
      </p>
    </div>
  );
}