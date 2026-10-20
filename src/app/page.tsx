import React from 'react';
import { Database, Activity, Code2, Terminal, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal className="text-cyan-400 w-6 h-6" />
            <span className="font-mono font-bold text-lg">portfolio.v1</span>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Projects
          </span>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Card 1: Hero / Identity */}
          <div className="md:col-span-2 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Data Analyst & Software Engineer</p>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-3">Architecting Data Pipelines & Visual Insights.</h1>
              <p className="text-slate-400 text-sm">Specializing in production ELT infrastructure, healthcare analytics, and interactive web tools.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-xl hover:bg-cyan-400 transition">View Work</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-xl border border-slate-700 hover:bg-slate-700 transition flex items-center gap-2">
                GitHub <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Tech Stack Highlights */}
          <div className="md:col-span-2 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Code2 className="text-purple-400 w-4 h-4" /> Core Tech Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'dbt', 'Airflow', 'DuckDB', 'TypeScript', 'Next.js', 'PostgreSQL', 'Streamlit', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-800/80 border border-slate-700/50 rounded-lg text-xs font-mono text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">Focused on scalability, maintainable data models, and performant frontend UX.</p>
          </div>

          {/* Card 3: Healthcare Analytics Project */}
          <div className="md:col-span-2 md:row-span-2 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-rose-400 bg-rose-950/40 border border-rose-800 px-2.5 py-0.5 rounded-full">Healthcare Domain</span>
                <Activity className="text-rose-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition">Patient Readmission Prediction & Analytics Dashboard</h3>
              <p className="text-slate-400 text-sm mt-2">Analyzed clinical datasets to build risk scoring pipelines and an interactive dashboard for care coordinators.</p>
            </div>
            
            {/* Visual Placeholder */}
            <div className="my-6 h-36 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-center text-xs font-mono text-slate-500">
              [ Interactive Streamlit / Chart Component Embed ]
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Stack: MIMIC-IV, Python, Streamlit</span>
              <span className="text-cyan-400 group-hover:translate-x-1 transition flex items-center gap-1">Case Study &rarr;</span>
            </div>
          </div>

          {/* Card 4: ELT Data Engineering Project */}
          <div className="md:col-span-2 md:row-span-2 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800 px-2.5 py-0.5 rounded-full">Data Engineering</span>
                <Database className="text-cyan-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">Automated ELT Data Platform</h3>
              <p className="text-slate-400 text-sm mt-2">Orchestrated multi-source ingestion pipelines with containerized transformation models and automated quality tests.</p>
            </div>

            {/* Visual Placeholder */}
            <div className="my-6 h-36 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-center text-xs font-mono text-slate-500">
              [ Interactive Pipeline Architecture / DAG Visual ]
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Stack: Airflow, dbt-core, DuckDB, Docker</span>
              <span className="text-cyan-400 group-hover:translate-x-1 transition flex items-center gap-1">Architecture &rarr;</span>
            </div>
          </div>

          {/* Card 5: Fun / Personal Projects */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-slate-700 transition">
            <div>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800 px-2.5 py-0.5 rounded-full">Sandbox & Experiments</span>
              <h3 className="text-lg font-bold text-white mt-2">Personal & Fun Side Projects</h3>
              <p className="text-slate-400 text-sm">Interactive mini-apps, API experiments, and data visualizations built for fun.</p>
            </div>
            <button className="whitespace-nowrap px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-mono rounded-xl transition">
              Explore Playground
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}