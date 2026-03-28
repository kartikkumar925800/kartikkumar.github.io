"use client";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Briefcase, Code2, Sparkles, Cpu, ShieldCheck, Database, Layers, CheckCircle2 } from "lucide-react";

// --- Custom Brand Icons (Clean Version) ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. FIXED NAVIGATION (Better spacing to avoid overlap) */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">K</div>
          <span className="text-xl font-black tracking-tighter uppercase italic">KARTIK<span className="text-blue-500">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>

        <a href="mailto:k.kartikkumar8527@gmail.com" className="bg-white text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all shadow-lg">
          Contact Me
        </a>
      </nav>

      {/* 2. HERO SECTION (Centered layout for better balance) */}
      <section className="relative pt-44 pb-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-12">
            <Sparkles size={12} className="animate-pulse" /> Final Year B.Tech CSE • Java Specialist
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.9]">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">Architect.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-14 leading-relaxed font-medium mx-auto">
            I’m <span className="text-white">Kartik Kumar</span>. I specialize in building scalable Java ecosystems. Currently engineering <span className="text-white font-bold underline underline-offset-8 decoration-blue-500/50">PrepAI</span> to transform technical interview prep.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl flex items-center gap-2 text-lg">
              View Projects <Code2 size={20} />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/kartikkumar925800" target="_blank" className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group shadow-xl">
                <div className="group-hover:scale-110 group-hover:text-blue-400 transition-all"><GithubIcon /></div>
              </a>
              <a href="https://linkedin.com/in/kartikkumar925800" target="_blank" className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group shadow-xl">
                <div className="group-hover:scale-110 group-hover:text-blue-400 transition-all"><LinkedinIcon /></div>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. SKILLS GRID */}
      <section id="skills" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase mb-4">Core Toolkit</h2>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase flex items-center justify-center gap-4">
            <Layers className="text-blue-500" /> Technical_Stack
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Java 17", desc: "Enterprise Logic", color: "from-orange-500/20", icon: <Code2 /> },
            { name: "Spring Boot", desc: "Microservices", color: "from-green-500/20", icon: <Cpu /> },
            { name: "MySQL", desc: "Architecture", color: "from-blue-500/20", icon: <Database /> },
            { name: "DSA", desc: "Problem Solving", color: "from-purple-500/20", icon: <Layers /> }
          ].map((skill, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${skill.color} to-transparent border border-white/5 bg-slate-900/40 text-center flex flex-col items-center gap-4 shadow-xl`}>
              <div className="text-blue-400">{skill.icon}</div>
              <p className="font-black text-white text-xl tracking-tight uppercase italic">{skill.name}</p>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION (Fixing the Certificate size) */}
      <section id="experience" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-[10px] font-black mb-4 text-indigo-500 tracking-[0.4em] uppercase">Professional</h2>
        <h2 className="text-4xl md:text-5xl font-black mb-20 flex items-center gap-4 tracking-tighter italic uppercase">
          <Terminal size={32} /> Career_Path
        </h2>

        <div className="grid gap-16">
          {/* AMDOX CARD */}
          <motion.div className="group relative p-12 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
              <div>
                <h3 className="text-4xl font-black group-hover:text-blue-400 transition-colors tracking-tight italic uppercase">AMDOX</h3>
                <p className="text-blue-500 font-black text-sm mt-2 uppercase tracking-widest">Full-Stack Java Intern • 2026</p>
              </div>
              <div className="px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-black uppercase tracking-widest">Double Certified</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Engineered an enterprise-grade <span className="text-white font-bold">Task Management Tool</span>. Handled everything from Spring Security to complex database indexing.
                </p>
                <div className="space-y-4">
                  {["Developed RESTful APIs", "Optimized MySQL indexing", "Mastered Enterprise Git workflows"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-tight">
                      <CheckCircle2 size={16} className="text-blue-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CONSTRAINED CERTIFICATE GALLERY (Fixed sizing) */}
              <div className="relative h-[250px] md:h-[350px] w-full group/gallery order-1 lg:order-2">
                <motion.div whileHover={{ x: -20, rotate: -5, zIndex: 30 }} className="absolute top-10 right-0 w-[90%] aspect-video rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl transition-all opacity-40 group-hover/gallery:opacity-100 z-10">
                  <img src="/amdox-training.jpeg" alt="Training" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, zIndex: 40 }} className="absolute top-0 left-0 w-[90%] aspect-video rounded-3xl bg-slate-950 border border-blue-500/30 overflow-hidden shadow-2xl transition-all z-20">
                  <img src="/amdox-intern.jpeg" alt="Internship" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* IBM CARD */}
          <motion.div className="p-12 rounded-[3.5rem] bg-slate-900/20 border border-white/5 hover:border-indigo-500/30 transition-all group">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black group-hover:text-indigo-400 transition-colors uppercase tracking-tighter italic">IBM Cybersecurity</h3>
              <ShieldCheck className="text-indigo-500/50" size={32} />
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-3xl">
              Conducting threat analysis and defensive network infrastructure implementation.
            </p>
            <div className="flex gap-3">
              {["Threat Analysis", "Network Security"].map(t => (
                <span key={t} className="text-[9px] font-black px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-[10px] font-black mb-4 text-purple-500 tracking-[0.4em] uppercase">Development</h2>
        <h2 className="text-4xl md:text-5xl font-black mb-20 flex items-center gap-4 tracking-tighter italic uppercase">
          <Code2 size={32} /> Projects_Snapshot
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div whileHover={{ y: -10 }} className="group relative bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden p-12 hover:border-blue-500/30 transition-all">
            <Sparkles className="text-blue-500/5 absolute -top-10 -right-10" size={250} />
            <h3 className="text-4xl font-black mb-6 italic tracking-tight uppercase italic">PrepAI</h3>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              AI-driven platform leveraging <span className="text-white">NLP</span> for mock interview feedback. Built with a scalable Spring Boot core.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {["Spring Boot", "NLP", "Java"].map(t => (
                <span key={t} className="text-[9px] font-black px-4 py-2 bg-white/5 text-slate-500 rounded-xl border border-white/5 uppercase tracking-widest italic">{t}</span>
              ))}
            </div>
            <a href="https://github.com/kartikkumar925800" className="flex items-center gap-3 text-white font-black hover:text-blue-400 transition-all text-sm uppercase tracking-[0.2em]">
              View Repository <ExternalLink size={18} />
            </a>
          </motion.div>

          <div className="border-2 border-dashed border-slate-800 rounded-[3.5rem] flex flex-col items-center justify-center p-16 text-center text-slate-700 bg-slate-950/20">
             <Cpu size={50} className="mb-6 opacity-10" />
             <p className="text-2xl font-black italic tracking-tighter uppercase mb-2">Whiteboard-to-Code</p>
             <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-30">Architecture Phase</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 text-center border-t border-white/5 bg-slate-950/40">
        <p className="text-[10px] font-black uppercase tracking-[1em] opacity-40">
          © 2026 Kartik Kumar • Engineered in India
        </p>
      </footer>

    </main>
  );
}