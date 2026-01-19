import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const PageCover = ({ title = "Page" }) => {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 border-b border-white/5 pb-12">
          {/* Page Title */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="h-px w-8 bg-cyan-500"></div>
              <span className="text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase">Navigation [SYS-01]</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-2">
              {title}
            </h1>
            <div className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">Sector_Access_Granted</div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center text-zinc-500 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md border border-white/5 py-3 px-6 rounded-xl md:rounded-full shadow-2xl">
            <Link
              to="/"
              className="flex items-center hover:text-cyan-400 transition-colors"
            >
              <Home className="w-3 h-3 md:w-3.5 md:h-3.5 mr-2" />
              Main
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 md:mx-3 opacity-30" />
            <span className="text-cyan-400 font-black">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
