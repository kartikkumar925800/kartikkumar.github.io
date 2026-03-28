"use client";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Briefcase, Code2, Sparkles, Cpu, ShieldCheck, Database, Layers, CheckCircle2 } from "lucide-react";

// Root domain means no prefix is needed
const BASE_PATH = '/kartikkumar.github.io'; 

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* 1. STABLE NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-slate-950/90 backdrop-blur-md px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">K</div>
          <span className="text-xl font-black tracking-tighter uppercase italic">KARTIK<span className="text-blue-500">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>

        <a href="mailto:k.kartikkumar8527@gmail.com" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 transition-all shadow-lg">
          Connect
        </a>
      </nav>

      {/* 2. BREATHING HERO SECTION */}
      <section className="relative pt-56 pb-40 px-6 max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-12">
            <Sparkles size={12} className="animate-pulse" /> Ex-AMDOX Intern • B.Tech CSE 2026
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter mb-10 leading-[0.85] uppercase">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 italic">Architect.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mb-14 leading-relaxed font-medium mx-auto md:mx-0">
            I’m <span className="text-white">Kartik Kumar</span>. I build high-performance Java ecosystems. Engineering <span className="text-white font-bold underline underline-offset-8 decoration-blue-500/50">PrepAI</span> to transform technical interview prep.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#projects" className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl flex items-center gap-2 text-lg uppercase">
              Explore Projects <Code2 size={20} />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/kartikkumar925800" target="_blank" className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl group">
                <div className="group-hover:scale-110 group-hover:text-blue-400 transition-all"><GithubIcon /></div>
              </a>
              <a href="https://linkedin.com/in/kartikkumar925800" target="_blank" className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl group">
                <div className="group-hover:scale-110 group-hover:text-blue-400 transition-all"><LinkedinIcon /></div>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROFESSIONAL EXPERIENCE (No Overlap) */}
      <section id="experience" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-black mb-20 flex items-center gap-4 tracking-tighter italic uppercase underline decoration-blue-500/30">
          <Terminal size={32} /> EXPERIENCE
        </h2>

        <div className="grid gap-16">
          <motion.div className="group relative p-12 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
              <div>
                <h3 className="text-5xl font-black tracking-tight uppercase group-hover:text-blue-400 transition-colors italic">AMDOX</h3>
                <p className="text-blue-500 font-black text-sm mt-2 uppercase tracking-widest">Full-Stack Java Intern • 2026</p>
              </div>
              <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-widest">Double Certified</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Engineered an enterprise-grade <span className="text-white font-bold italic">Task Management Tool</span>. Optimized complex data workflows and mastered production Git ecosystems.
                </p>
                <div className="space-y-4">
                  {["Developed RESTful APIs", "Optimized MySQL indexing", "Mastered Git workflows"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-blue-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CONSTRAINED DUAL CERTIFICATE GALLERY */}
              <div className="relative h-[300px] md:h-[380px] w-full group/gallery">
                <motion.div whileHover={{ x: -30, rotate: -8, zIndex: 30 }} className="absolute top-12 right-0 w-[90%] aspect-video rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl transition-all opacity-40 group-hover/gallery:opacity-100 z-10">
                  <img src={`${BASE_PATH}/amdox-training.jpeg`} alt="Training" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, zIndex: 40 }} className="absolute top-0 left-0 w-[90%] aspect-video rounded-3xl bg-slate-950 border border-blue-500/30 overflow-hidden shadow-2xl transition-all z-20">
                  <img src={`${BASE_PATH}/amdox-intern.jpeg`} alt="Internship" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 text-center border-t border-white/5 bg-slate-950/40">
        <p className="text-[10px] font-black uppercase tracking-[1em] opacity-30">© 2026 Kartik Kumar • Engineered in India</p>
      </footer>

    </main>
  );
}
