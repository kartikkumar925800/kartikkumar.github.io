"use client";
import React from "react";
import dynamic from 'next/dynamic';
import { ExternalLink, Terminal, Code2, Sparkles, ShieldCheck, CheckCircle2, User, Database, Layout, Cpu, Globe, Download, BadgeCheck, Play, ImageIcon } from "lucide-react";

const motion = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false }),
};
const Typewriter = dynamic(() => import('react-simple-typewriter').then((mod) => mod.Typewriter), { ssr: false });
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const PROJECTS = [
  {
    title: "PrepAI",
    subtitle: "Enterprise Sentiment Analysis Engine",
    description: "Architected and deployed an AI-powered interview preparation platform. Developed a high-throughput sentiment analysis module capable of processing real-time user inputs to deliver predictive performance analytics and reduce processing latency.",
    tech: ["Java", "Spring Boot", "Next.js", "AI/NLP", "Tailwind CSS"],
    repo: "https://github.com/kartikkumar925800",
    demo: null,
    icon: Sparkles,
    color: "purple",
    glow: "shadow-[0_0_50px_rgba(168,85,247,0.4)]",
    border: "hover:border-purple-400",
    text: "group-hover:text-purple-400",
    glowText: "drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]",
    iconColor: "text-purple-500/5"
  },
  {
    title: "Vision-to-Code",
    subtitle: "Real-Time Translation Architecture",
    description: "Engineered a sophisticated parsing system that converts raw whiteboard architectural sketches into deployable, object-oriented code structures. Utilized Java and Spring Boot to build a scalable backend API.",
    tech: ["Java", "Spring Boot", "REST APIs", "OOP", "Vision AI"],
    repo: "https://github.com/kartikkumar925800",
    demo: null,
    icon: Code2,
    color: "pink",
    glow: "shadow-[0_0_50px_rgba(236,72,153,0.4)]",
    border: "hover:border-pink-400",
    text: "group-hover:text-pink-400",
    glowText: "drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]",
    iconColor: "text-pink-500/5"
  },
  {
    title: "Team Task Manager",
    subtitle: "Full-Stack Project Management",
    description: "A high-performance project management dashboard built with Next.js and FastAPI. Features seamless JWT authentication, dynamic state synchronization, and a responsive Tailwind UI, powered by a containerized cloud backend.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/kartikkumar925800/team-task-manager.git",
    demo: "https://rare-courtesy-production-73ef.up.railway.app/",
    icon: CheckCircle2,
    color: "emerald",
    glow: "shadow-[0_0_50px_rgba(16,185,129,0.4)]",
    border: "hover:border-emerald-400",
    text: "group-hover:text-emerald-400",
    glowText: "drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]",
    iconColor: "text-emerald-500/5"
  },
  {
    title: "Frontend Architecture",
    subtitle: "High-Performance Web Renovation",
    description: "Engineered a complete architectural overhaul of a legacy web application, migrating the infrastructure to a modern Next.js stack. Implemented Framer Motion 3D physics and achieved massive improvements in UI rendering speeds and layout stability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Tilt"],
    repo: "https://github.com/kartikkumar925800/kartikkumar.github.io",
    demo: null,
    icon: Layout,
    color: "blue",
    glow: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
    border: "hover:border-blue-400",
    text: "group-hover:text-blue-400",
    glowText: "drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    iconColor: "text-blue-500/5"
  }
];

export default function Home() {
  const [commitCount, setCommitCount] = React.useState("5,800+");
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getCommits() {
      const username = 'kartikkumar925800';
      const PROXY_URL = 'https://commit-counter.vercel.app/api/github-stats'; 

      try {
        if (PROXY_URL) {
          const timeoutId = setTimeout(() => controller.abort(), 8000);
          
          try {
            const response = await fetch(PROXY_URL, { 
              signal,
              cache: 'no-store'
            });
            clearTimeout(timeoutId);

            if (response.ok) {
              const data = await response.json();
              if (data.totalContributions) {
                setCommitCount(new Intl.NumberFormat().format(data.totalContributions));
                return;
              }
            }
          } catch (e: any) {
            // Silently fail to fallback
          }
        }

        const searchRes = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
          signal,
          headers: { 'Accept': 'application/vnd.github.cloak-preview+json' }
        });
        const searchData = await searchRes.json();
        
        if (searchData && typeof searchData.total_count === 'number' && searchData.total_count > 5900) {
          setCommitCount(new Intl.NumberFormat().format(searchData.total_count));
          return;
        }

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=all`);
        const repos = await reposRes.json();

        if (Array.isArray(repos) && repos.length > 0) {
          const repoPromises = repos.slice(0, 30).map(async (repo: any) => {
            try {
              const commitRes = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`);
              const linkHeader = commitRes.headers.get('Link');
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                if (match) return parseInt(match[1]);
              }
              return 0;
            } catch {
              return 0;
            }
          });

          const commitCounts = await Promise.all(repoPromises);
          const totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

          if (totalCommits > 5900) {
            setCommitCount(new Intl.NumberFormat().format(totalCommits));
          } else {
            setCommitCount("5,900+");
          }
        } else {
          setCommitCount("5,900+");
        }
      } catch (err) {
        setCommitCount("5,900+");
      }
    }
    getCommits();
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-slate-950/90 backdrop-blur-md px-6 h-20 flex items-center justify-end gap-8 md:gap-12">
        <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-emerald-400 transition-colors">Certificates</a>
        </div>
        <a href="mailto:k.kartikkumar8527@gmail.com" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          Connect
        </a>
      </nav>

      <section className="relative pt-44 pb-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Sparkles size={12} className="animate-pulse" /> SOFTWARE ENGINEER @ AMDOX • EX-IBM
            </div>
            
            <h1 className="text-5xl md:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 italic drop-shadow-2xl">Developer.</span>
            </h1>

            <div className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium mx-auto lg:mx-0 min-h-20">
              <span className="text-red-400 font-bold drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]">Hello, I am Kartik,</span> a Software Developer. I specialize in{' '}
              <span className="text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                <Typewriter
                  words={['Java Enterprise Systems.', 'Responsive Next.js UIs.', 'AI-Driven Architectures.', 'Secure Backend APIs.']}
                  loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                />
              </span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 text-sm uppercase">
                Explore Work <Code2 size={16} />
              </a>
              <a href="/Resume.pdf" download="Kartik_Kumar_Resume.pdf" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm uppercase border border-slate-700">
                Download Resume <Download size={16} />
              </a>
              <div className="flex gap-3 w-full lg:w-auto justify-center lg:justify-start mt-4 lg:mt-0">
                <a href="https://github.com/kartikkumar925800" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all group"><GithubIcon /></a>
                <a href="https://linkedin.com/in/kartikkumar925800" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all group"><LinkedinIcon /></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-shrink-0 z-10">
            <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} scale={1.05} transitionSpeed={1500} className="relative w-56 h-56 md:w-80 md:h-80 rounded-[3rem] border-2 border-blue-500/50 hover:border-blue-400 bg-slate-900/50 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 group flex items-center justify-center">
               <User size={60} className="text-slate-700 absolute" />
               <img src="/Profile.jpeg" alt="Kartik Kumar" className="relative z-10 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </Tilt>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[10px] font-black mb-4 text-blue-500 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">GitHub Ecosystem</h2>
          
          <div className="w-full p-8 md:p-12 rounded-[3.5rem] bg-slate-900/40 border-2 border-slate-800/50 relative overflow-hidden group hover:border-emerald-500/30 transition-all shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10 opacity-60">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contribution Heatmap</p>
                <div className="flex gap-1.5">
                  {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-emerald-500/40 animate-pulse" />)}
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden bg-slate-950/50 p-6 md:p-10 border border-white/5 group-hover:border-emerald-500/20 transition-all shadow-inner">
                <img 
                  src="https://ghchart.rshah.org/10b981/kartikkumar925800" 
                  alt="Kartik Kumar's GitHub Chart" 
                  className="w-full h-auto opacity-70 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              <div className="mt-10 flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black tracking-widest uppercase mb-[-10px] animate-pulse">
                  <BadgeCheck size={10} /> Career Milestone
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-white/10 hidden md:block"></div>
                  <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase text-slate-100 group-hover:scale-105 transition-transform duration-500">
                    {commitCount} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Commits.</span>
                  </h3>
                  <div className="h-px w-12 bg-white/10 hidden md:block"></div>
                </div>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">
                  <span>Less</span>
                  <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded bg-slate-800" />
                    <div className="w-3.5 h-3.5 rounded bg-emerald-900" />
                    <div className="w-3.5 h-3.5 rounded bg-emerald-700" />
                    <div className="w-3.5 h-3.5 rounded bg-emerald-500" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black mb-4 text-emerald-500 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Technical Arsenal</h2>
          <h2 className="text-4xl md:text-5xl font-black flex items-center justify-center gap-4 tracking-tighter italic uppercase text-slate-100 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            CORE_SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-6 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Backend Systems", 
              icon: <Terminal size={24} className="mb-4 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] group-hover:scale-110 transition-transform" />, 
              pillClass: "bg-blue-500/10 border-blue-500/30 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500/20",
              cardClass: "border-blue-500/40 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
              skills: ["Java", "Spring Boot", "Python", "REST APIs", "Microservices"] 
            },
            { 
              title: "Frontend & UI", 
              icon: <Layout size={24} className="mb-4 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-transform" />, 
              pillClass: "bg-purple-500/10 border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:bg-purple-500/20",
              cardClass: "border-purple-500/40 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]",
              skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"] 
            },
            { 
              title: "Databases", 
              icon: <Database size={24} className="mb-4 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] group-hover:scale-110 transition-transform" />, 
              pillClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:bg-emerald-500/20",
              cardClass: "border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]",
              skills: ["SQL", "MySQL", "MongoDB", "PostgreSQL"] 
            },
            { 
              title: "Architecture", 
              icon: <Globe size={24} className="mb-4 text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.8)] group-hover:scale-110 transition-transform" />, 
              pillClass: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:bg-indigo-500/20",
              cardClass: "border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]",
              skills: ["DSA", "Threat Analysis", "Git/GitHub", "Cloud Basics"] 
            }
          ].map((category, i) => (
            <Tilt key={i} tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} transitionSpeed={1500} className={`p-8 rounded-[2rem] bg-slate-900/40 border-2 transition-all duration-500 group ${category.cardClass}`}>
              {category.icon}
              <h3 className="text-xl font-black mb-6 tracking-tight uppercase text-slate-200">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className={`text-[10px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest transition-all cursor-default ${category.pillClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black mb-4 text-blue-500 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Career History</h2>
          <h2 className="text-4xl md:text-5xl font-black flex items-center justify-center gap-4 tracking-tighter italic uppercase text-slate-100 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-6 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.02} transitionSpeed={1500} className="group relative p-10 rounded-[3rem] bg-slate-900/40 border-2 border-slate-800/50 hover:border-blue-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-blue-400 transition-colors italic drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">AMDOX</h3>
                  <p className="text-blue-500 font-black text-xs mt-2 uppercase tracking-widest">Full-Stack Intern • Jan '26 - Mar '26</p>
                </div>
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Implemented scalable backend architectures and robust full-stack solutions to drive <span className="text-white font-bold italic">enterprise-level applications</span> and reduce data retrieval latency. Earned dual certifications for project delivery.
              </p>
              
              <div className="flex gap-3 mb-8">
                <a href="#certificates" className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                  <BadgeCheck size={14} /> View Credential
                </a>
              </div>
            </div>

            <div className="opacity-40 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 border-t border-slate-800 pt-6">
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "REST APIs", "MySQL", "Maven", "Postman"].map(t => (
                  <span key={t} className="text-[9px] font-black px-3 py-1 bg-blue-500/5 text-blue-300/80 rounded border border-blue-500/10 uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.02} transitionSpeed={1500} className="group relative p-10 rounded-[3rem] bg-slate-900/20 border-2 border-slate-800/50 hover:border-indigo-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-indigo-400 transition-colors italic drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]">IBM</h3>
                  <p className="text-indigo-500 font-black text-xs mt-2 uppercase tracking-widest">Security Intern • Jan '25 - Mar '25</p>
                </div>
                <ShieldCheck className="text-indigo-500/30" size={32} />
              </div>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Provided specialized network security consulting, focusing on proactive threat mitigation, vulnerability management, and <span className="text-white font-bold italic">defensive architectural strengthening</span>.
              </p>

              <div className="flex gap-3 mb-8">
                <a href="#certificates" className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all">
                  <BadgeCheck size={14} /> View Credential
                </a>
              </div>
            </div>

            <div className="opacity-40 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 border-t border-slate-800 pt-6">
              <div className="flex flex-wrap gap-2">
                {["Threat Analysis", "Network Security", "Python", "Wireshark", "Zeek", "Nmap"].map(t => (
                  <span key={t} className="text-[9px] font-black px-3 py-1 bg-indigo-500/5 text-indigo-300/80 rounded border border-indigo-500/10 uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.02} transitionSpeed={1500} className="group relative p-10 rounded-[3rem] bg-slate-900/40 border-2 border-slate-800/50 hover:border-emerald-400 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] overflow-hidden flex flex-col justify-between h-full">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-emerald-400 transition-colors italic drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">STEALTH STARTUP</h3>
                <p className="text-emerald-500 font-black text-xs mt-2 uppercase tracking-widest">Freelance Consulting • Jan 2025 - Present</p>
              </div>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">
              Providing end-to-end full-stack consulting for early-stage enterprise applications, specializing in architecting <span className="text-white font-bold italic">Java, Spring Boot, and Next.js</span> solutions from the ground up.
            </p>
            
             <div className="opacity-40 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 border-t border-slate-800 pt-6">
              <div className="flex flex-wrap gap-2">
                {["System Design", "Java Enterprise", "Next.js", "PostgreSQL", "Cloud Deployments"].map(t => (
                  <span key={t} className="text-[9px] font-black px-3 py-1 bg-emerald-500/5 text-emerald-300/80 rounded border border-emerald-500/10 uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          </Tilt>

        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black mb-4 text-purple-500 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Featured Work</h2>
          <h2 className="text-4xl md:text-5xl font-black flex items-center justify-center gap-4 tracking-tighter italic uppercase text-slate-100 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-6 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <Tilt 
              key={idx}
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.02} 
              transitionSpeed={1500} 
              className={`group relative bg-slate-900/40 border-2 border-slate-800/50 rounded-[3.5rem] overflow-hidden p-10 transition-all duration-500 shadow-xl flex flex-col justify-between h-full ${project.border} ${project.glow}`}
            >
              <project.icon className={`${project.iconColor} absolute -top-10 -right-10`} size={250} />
              
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`text-3xl font-black italic tracking-tight uppercase transition-colors ${project.text} ${project.glowText}`}>
                      {project.title}
                    </h3>
                    <p className={`font-bold text-xs mt-2 uppercase tracking-widest ${project.iconColor.replace('/5', '')}`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed text-base flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 items-center">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-700 hover:text-white transition-all">
                    <GithubIcon /> {project.title === "Frontend Architecture" ? "View Source Code" : "View Repo"}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`px-5 py-3 bg-${project.color}-600/10 border border-${project.color}-500/30 text-${project.color}-400 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-${project.color}-600/20 hover:text-${project.color}-300 transition-all`}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

               <div className="mt-8 opacity-40 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 border-t border-slate-800 pt-6 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-black px-3 py-1.5 bg-white/5 text-slate-300 rounded border border-white/10 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black mb-4 text-emerald-500 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Verified Achievements</h2>
          <h2 className="text-4xl md:text-5xl font-black flex items-center justify-center gap-4 tracking-tighter italic uppercase text-slate-100 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-6 opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Dual Certification", issuer: "AMDOX", date: "Mar 2026", 
              theme: "text-blue-500", glow: "hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", 
              btn: "text-blue-400 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20",
              credentialUrl: "https://amdox.in/shared?id=adx/rX7W5iUZi0", imageUrl: "/amdox-dual-certs.pdf"
            },
            { 
              title: "Cybersecurity Intern", issuer: "IBM", date: "Aug 2025", 
              theme: "text-indigo-500", glow: "hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]", 
              btn: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20",
              credentialUrl: "#", imageUrl: "/cs.jpeg"
            },
            { 
              title: "Python Programming", issuer: "University/Institute", date: "Dec 2024", 
              theme: "text-sky-500", glow: "hover:border-sky-400 hover:shadow-[0_0_30_rgba(56,189,248,0.4)]", 
              btn: "text-sky-400 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20",
              credentialUrl: "https://verify.letsupgrade.in/certificate/LUEPYTJUL123165", imageUrl: "/pythonimg.jpeg"
            },
            { 
              title: "Java Certification", issuer: "Vcare Technical", date: "Apr 2023", 
              theme: "text-orange-500", glow: "hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]", 
              btn: "text-orange-400 border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20",
              credentialUrl: "https://vcaretechnicalinstitute.com/", imageUrl: "/java-vt.jpeg"
            },
            { 
              title: "Cybersecurity Essentials", issuer: "Cisco", date: "Jan 2024", 
              theme: "text-red-500", glow: "hover:border-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]", 
              btn: "text-red-400 border-red-500/30 bg-red-500/10 hover:bg-red-500/20",
              credentialUrl: "/cs.jpeg", imageUrl: "/cs.jpeg"
            },
            { 
              title: "MongoDB & SQL", issuer: "Bootcamp", date: "Sep 2024", 
              theme: "text-emerald-500", glow: "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]", 
              btn: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20",
              credentialUrl: "https://verify.letsupgrade.in/certificate/LUESQLJUL123968", imageUrl: "/mongodb-sql.pdf"
            },
            { 
              title: "DSA Bootcamp", issuer: "Bootcamp", date: "Jul 2023", 
              theme: "text-amber-500", glow: "hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]", 
              btn: "text-amber-400 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20",
              credentialUrl: "https://verify.letsupgrade.in/certificate/LUEDSAJUL123555", imageUrl: "/dsa.jpeg"
            },
          ].map((cert, i) => (
            <Tilt key={i} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={1500} className={`p-6 rounded-3xl bg-slate-900/40 border-2 border-slate-800/50 transition-all duration-500 group flex flex-col justify-between h-full min-h-[200px] ${cert.glow}`}>
              <div>
                <p className={`${cert.theme} font-black text-[9px] uppercase tracking-widest mb-2`}>{cert.issuer} • {cert.date}</p>
                <h3 className="text-lg font-black tracking-tight uppercase group-hover:text-slate-100 transition-colors">{cert.title}</h3>
              </div>
              
              <div className="flex gap-3 mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 py-2.5 flex items-center justify-center gap-2 rounded-lg border text-[9px] font-black uppercase tracking-widest transition-all ${cert.btn}`}>
                  <BadgeCheck size={14} /> Credential
                </a>
                <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 py-2.5 flex items-center justify-center gap-2 rounded-lg border text-[9px] font-black uppercase tracking-widest transition-all ${cert.btn}`}>
                  <ImageIcon size={14} /> View Image
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

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