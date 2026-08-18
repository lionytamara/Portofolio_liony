'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Top glowing ambient line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {personalInfo.shortBio}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience & Timeline
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-blue-400 transition-colors">
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-200 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-slate-700 transition-all hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Location: <span className="text-slate-300">{personalInfo.location}</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> & Next.js
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
