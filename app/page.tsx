"use client"
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  return (
    // Explicitly setting the black background here to prevent white flashes
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden">
      
      {/* Grid Layer - Absolutely positioned behind content */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      
      
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
          
          <div className="flex flex-col justify-center items-center mb-10">
            {/* Massive White Heading with soft glow */}
            <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter italic text-white mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              DashLy
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light tracking-tight leading-relaxed">
              Your personalized space to <span className="text-white font-medium">capture ideas</span> and keep notes.
            </p>
          </div>

          <button 
            className="group relative bg-white text-black text-lg font-bold px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95"
            onClick={() => router.push('/auth/signup')}
          >
            Get Started 
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          {/* Styled decorative footer */}
          <div className="mt-16 flex items-center space-x-4 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            <div className="h-[1px] w-12 bg-zinc-800"></div>
            <span>No credit card required • Pure focus</span>
            <div className="h-[1px] w-12 bg-zinc-800"></div>
          </div>
        </div>
    </div>
  );
}