'use client';

import React from 'react';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export const HeroSection: React.FC = () => {
  const typedTitle = useTypingEffect(personalInfo.titles, 80, 40, 2000);

const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl || '/Portofolio_liony/Liony_Tamara_Lewinsky_-_CV.pdf';
    link.download = 'Liony Tamara Lewinsky - CV.pdf'; 
        link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient gradient light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[380px] h-[380px] bg-teal-400/12 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTA */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-emerald-500/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-4" />
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-[1.1]">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typing Job Title */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-slate-200">
                <Terminal className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400">{typedTitle}</span>
                <span className="w-0.5 h-6 bg-emerald-400 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-emerald-500/50 font-bold text-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Follow Me:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50 hover:scale-110 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:scale-110 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Circular Avatar with Glowing Ring & Floating Badges */}
          <div className="relative flex items-center justify-center">
            
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-600 opacity-30 blur-2xl animate-pulse-slow" />
            
            <div className="relative p-2 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-600 shadow-2xl shadow-emerald-500/25">
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-[#070c18] bg-slate-900">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Tech Badge 1 */}
            <div className="absolute -top-4 -left-4 sm:top-4 sm:-left-8 glass-card px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-3 animate-float">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                SQL
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Business & Data Analysis</span>
                <span className="text-[10px] text-slate-400">Power BI & UI/UX Design</span>
              </div>
            </div>

            {/* Floating Tech Badge 2 */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:-right-6 glass-card px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">GPA 3.21 / 4.00</span>
                <span className="text-[10px] text-slate-400">Information Systems</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
