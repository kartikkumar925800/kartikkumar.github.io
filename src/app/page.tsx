"use client";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Briefcase, Code2, Sparkles, Cpu, ShieldCheck, Database, Layers, CheckCircle2 } from "lucide-react";

// Use an empty string for the root domain
const BASE_PATH = ''; 

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* 1. SLIM NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-slate-950/80 backdrop-blur-lg px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-xs">K</div>
          <span className="text-sm font-black tracking-tighter uppercase italic">KARTIK<span className="text-blue-500">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>

        <a href="mailto:k.kartikkumar8527@gmail.com" className="bg-white text-black px-4 py-2 rounded-lg text-[9px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">
          Contact
        </a>
      </nav>

      {/* 2. BALANCED HERO SECTION */}
      <section className="relative pt-48 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-bold tracking-widest uppercase mb-8">
            <Sparkles size={10} /> Final Year B.Tech CSE • Java Specialist
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 italic">Architect.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-medium mx-auto md:mx-0">
            I’m <span className="text-white">Kartik Kumar</span>. I build high-performance Java ecosystems. Engineering <span className="text-blue-400 font-bold">PrepAI</span> to redefine technical interview prep.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm uppercase">
              Explore Projects <Code2 size={16} />
            </a>
            <div className="flex gap-2">
              <a href="https://github.com/kartikkumar925800" target="_blank" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"><GithubIcon /></a>
              <a href="https://linkedin.com/in/kartikkumar925800" target="_blank" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"><LinkedinIcon /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="text-[9px] font-black mb-4 text-blue-500 tracking-[0.4em] uppercase">Professional</h2>
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4 tracking-tighter italic uppercase">
          <Terminal size={32} /> EXPERIENCE
        </h2>

        <motion.div className="p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h3 className="text-4xl font-black tracking-tight uppercase">AMDOX</h3>
              <p className="text-blue-500 font-black text-sm mt-2 uppercase tracking-widest">Full-Stack Java Intern</p>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] font-black uppercase tracking-widest">Double Certified</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed">
                Engineered an enterprise-grade <span className="text-white font-bold italic">Task Management Tool</span>. Optimized complex Spring Boot workflows and managed large-scale data schema in MySQL.
              </p>
              <div className="space-y-3">
                {["Developed REST APIs", "Optimized MySQL schema", "Mastered Git workflows"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase">
                    <CheckCircle2 size={14} className="text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* DUAL CERTIFICATE GALLERY (Fixed Sizing) */}
            <div className="relative h-[250px] w-full group/gallery">
              <motion.div whileHover={{ x: -20, rotate: -5 }} className="absolute top-10 right-0 w-[85%] aspect-video rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl transition-all opacity-40 group-hover/gallery:opacity-100">
                <img src={`${BASE_PATH}/amdox-training.jpeg`} alt="Training" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="absolute top-0 left-0 w-[85%] aspect-video rounded-2xl bg-slate-950 border border-blue-500/30 overflow-hidden shadow-2xl transition-all">
                <img src={`${BASE_PATH}/amdox-intern.jpeg`} alt="Internship" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center border-t border-white/5 bg-slate-950/40">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] opacity-30">© 2026 Kartik Kumar • Engineered in India</p>
      </footer>

    </main>
  );
}
