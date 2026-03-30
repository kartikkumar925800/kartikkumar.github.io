"use client";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Code2, Sparkles, ShieldCheck, CheckCircle2, User, Database, Layout, Cpu, Globe, Download } from "lucide-react";

// --- Custom Brand Icons ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
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
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>

        <a href="mailto:k.kartikkumar8527@gmail.com" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 transition-all shadow-lg">
          Connect
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-10">
              <Sparkles size={12} className="animate-pulse" /> SOFTWARE ENGINEER @ AMDOX • EX-IBM
            </div>
            
            <h1 className="text-5xl md:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 italic">Developer.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
              Hello, I am <span className="text-white font-bold">Kartik</span>, a Software Engineer specializing in <span className="text-blue-400">scalable full-stack architectures</span> and enterprise-level backend systems. Currently architecting high-performance solutions utilizing Java, Spring Boot, and modern Next.js environments.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm uppercase">
                Explore Work <Code2 size={16} />
              </a>
              <a href="/kartikkumar.github.io/Resume.pdf" download className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm uppercase border border-slate-700">
                Download Resume <Download size={16} />
              </a>
              <div className="flex gap-3 w-full lg:w-auto justify-center lg:justify-start mt-4 lg:mt-0">
                <a href="https://github.com/kartikkumar925800" target="_blank" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"><GithubIcon /></a>
                <a href="https://linkedin.com/in/kartikkumar925800" target="_blank" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"><LinkedinIcon /></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-56 h-56 md:w-80 md:h-80 rounded-[3rem] border border-slate-800 bg-slate-900/50 overflow-hidden shadow-2xl group flex items-center justify-center flex-shrink-0">
             <User size={60} className="text-slate-700 absolute" />
             <img src="/kartikkumar.github.io/Profile.jpeg" alt="Kartik Kumar" className="relative z-10 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-[10px] font-black mb-4 text-emerald-500 tracking-[0.4em] uppercase">Technical Arsenal</h2>
        <h2 className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4 tracking-tighter italic uppercase underline decoration-emerald-500/30">
          <Cpu size={32} /> CORE_SKILLS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Backend Systems", icon: <Terminal size={24} className="mb-4 text-blue-400" />, skills: "Java, Spring Boot, Python, REST APIs, Microservices" },
            { title: "Frontend & UI", icon: <Layout size={24} className="mb-4 text-purple-400" />, skills: "Next.js, React, TypeScript, Tailwind CSS v4" },
            { title: "Databases", icon: <Database size={24} className="mb-4 text-emerald-400" />, skills: "SQL, MySQL, MongoDB, PostgreSQL" },
            { title: "Architecture & Sec", icon: <Globe size={24} className="mb-4 text-indigo-400" />, skills: "DSA, Threat Analysis, Git/GitHub, Cloud Deployments" }
          ].map((category, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all shadow-xl">
              {category.icon}
              <h3 className="text-xl font-black mb-3 tracking-tight uppercase">{category.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{category.skills}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-[10px] font-black mb-4 text-blue-500 tracking-[0.4em] uppercase">Career History</h2>
        <h2 className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4 tracking-tighter italic uppercase underline decoration-blue-500/30">
          <Terminal size={32} /> EXPERIENCE
        </h2>

        <div className="grid gap-16">
          
          {/* STEALTH STARTUP CARD */}
          <motion.div className="group relative p-12 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h3 className="text-4xl font-black tracking-tight uppercase group-hover:text-emerald-400 transition-colors italic">STEALTH STARTUP</h3>
                <p className="text-emerald-500 font-black text-sm mt-2 uppercase tracking-widest">Freelance Consulting • Jan 2025 - Present</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 lg:col-span-2">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Providing end-to-end full-stack consulting for early-stage enterprise applications, specializing in <span className="text-white font-bold italic">Java, Spring Boot, and Next.js</span> architectures.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Architected Whiteboard-to-Code translation engine", "Designed PrepAI sentiment analysis platform", "Optimized complex database schemas", "Implemented scalable API gateways"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* AMDOX CARD (IMAGES REMOVED) */}
          <motion.div className="group relative p-12 rounded-[3.5rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h3 className="text-4xl font-black tracking-tight uppercase group-hover:text-blue-400 transition-colors italic">AMDOX</h3>
                <p className="text-blue-500 font-black text-sm mt-2 uppercase tracking-widest">Full-Stack Software Engineer • Present</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 lg:col-span-2">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Implementing scalable backend architectures and robust full-stack solutions to drive <span className="text-white font-bold italic">enterprise-level applications</span> and reduce data retrieval latency.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {["Developed secure RESTful APIs (Java/Spring)", "Optimized complex SQL database queries", "Spearheaded frontend component integration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IBM CARD (CERTIFICATE REMOVED) */}
          <motion.div className="group relative p-12 rounded-[3.5rem] bg-slate-900/20 border border-slate-800 hover:border-indigo-500/30 transition-all shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <h3 className="text-4xl font-black tracking-tight uppercase group-hover:text-indigo-400 transition-colors italic">IBM</h3>
                <p className="text-indigo-500 font-black text-sm mt-2 uppercase tracking-widest">Network Security Consultant</p>
              </div>
              <ShieldCheck className="text-indigo-500/50 hidden md:block" size={48} />
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 lg:col-span-2">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Provided specialized network security consulting, focusing on proactive threat mitigation, vulnerability management, and <span className="text-white font-bold italic">defensive architectural strengthening</span>.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {["Spearheaded enterprise threat analysis", "Designed advanced network breach simulations", "Engineered custom Python/Wireshark utilities"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-[10px] font-black mb-4 text-purple-500 tracking-[0.4em] uppercase">Featured Work</h2>
        <h2 className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4 tracking-tighter italic uppercase underline decoration-purple-500/30">
          <Code2 size={32} /> PROJECTS
        </h2>

        <div className="grid gap-8">
          {/* PREPAI */}
          <motion.div className="group relative bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden p-12 hover:border-purple-500/30 transition-all shadow-2xl">
            <Sparkles className="text-purple-500/5 absolute -top-10 -right-10" size={250} />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-4xl font-black italic tracking-tight uppercase group-hover:text-purple-400 transition-colors">PrepAI</h3>
                <p className="text-purple-500 font-bold text-sm mt-2 uppercase tracking-widest">Enterprise Sentiment Analysis Engine</p>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-3xl relative z-10">
              Architected and deployed an AI-powered interview preparation platform. Developed a high-throughput sentiment analysis module capable of processing real-time user inputs to deliver predictive performance analytics and reduce processing latency.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 relative z-10">
              {["Java", "Spring Boot", "Next.js", "AI/NLP", "Tailwind CSS"].map(t => (
                <span key={t} className="text-[10px] font-black px-4 py-2 bg-white/5 text-slate-300 rounded-xl border border-white/10 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <a href="https://github.com/kartikkumar925800" className="inline-flex items-center gap-3 text-white font-black hover:text-purple-400 transition-all text-sm uppercase tracking-[0.2em] relative z-10">
              View Architecture <ExternalLink size={18} />
            </a>
          </motion.div>

          {/* WHITEBOARD TO CODE */}
          <motion.div className="group relative bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden p-12 hover:border-pink-500/30 transition-all shadow-2xl">
            <Code2 className="text-pink-500/5 absolute -top-10 -right-10" size={250} />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-4xl font-black italic tracking-tight uppercase group-hover:text-pink-400 transition-colors">Vision-to-Code</h3>
                <p className="text-pink-500 font-bold text-sm mt-2 uppercase tracking-widest">Real-Time Translation Architecture</p>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-3xl relative z-10">
              Engineered a sophisticated parsing system that converts raw whiteboard architectural sketches into deployable, object-oriented code structures. Utilized Java and Spring Boot to build a scalable backend API, significantly reducing developer prototyping timelines.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 relative z-10">
              {["Java", "Spring Boot", "REST APIs", "OOP", "System Architecture"].map(t => (
                <span key={t} className="text-[10px] font-black px-4 py-2 bg-white/5 text-slate-300 rounded-xl border border-white/10 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <a href="https://github.com/kartikkumar925800" className="inline-flex items-center gap-3 text-white font-black hover:text-pink-400 transition-all text-sm uppercase tracking-[0.2em] relative z-10">
              View Architecture <ExternalLink size={18} />
            </a>
          </motion.div>

          {/* PORTFOLIO RENOVATION */}
          <motion.div className="group relative bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden p-12 hover:border-blue-500/30 transition-all shadow-2xl">
            <Layout className="text-blue-500/5 absolute -top-10 -right-10" size={250} />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-4xl font-black italic tracking-tight uppercase group-hover:text-blue-400 transition-colors">Frontend Architecture</h3>
                <p className="text-blue-500 font-bold text-sm mt-2 uppercase tracking-widest">High-Performance Web Renovation</p>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-3xl relative z-10">
              Led the complete architectural overhaul of a legacy web application, migrating the infrastructure to a modern stack. Achieved massive improvements in UI rendering speeds, cross-browser compatibility, and production layout stability.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 relative z-10">
              {["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel CI/CD"].map(t => (
                <span key={t} className="text-[10px] font-black px-4 py-2 bg-white/5 text-slate-300 rounded-xl border border-white/10 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <a href="https://github.com/kartikkumar925800/kartikkumar.github.io.git" className="inline-flex items-center gap-3 text-white font-black hover:text-blue-400 transition-all text-sm uppercase tracking-[0.2em] relative z-10">
              View Source Code <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER WITH NEW CTA */}
      <footer className="py-24 text-center border-t border-white/5 bg-slate-950/40 relative">
        <div className="max-w-2xl mx-auto mb-16 px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-6 tracking-tight">Ready to scale your architecture?</h2>
          <p className="text-slate-400 mb-8 text-lg">Currently accepting freelance consulting opportunities for enterprise-level Java and Next.js applications.</p>
          <a href="mailto:k.kartikkumar8527@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] uppercase tracking-widest text-sm">
            Initiate Contact <Terminal size={18} />
          </a>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[1em] opacity-30 relative z-10">© 2026 KARTIK KUMAR • ARCHITECTED IN NEXT.JS</p>
      </footer>

    </main>
  );
}
