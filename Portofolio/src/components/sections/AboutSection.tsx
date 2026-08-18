'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalInfo, statItems, personalValues } from '../../data/portfolioData';
import {
  Code2,
  Cpu,
  Award,
  GraduationCap,
  CheckCircle2,
  Layout,
  TrendingUp,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Award,
  GraduationCap,
  CheckCircle2,
  Layout,
  TrendingUp,
  Zap,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="About Me"
          title="Passionate About Creating User-Centered and Data-Driven Digital Solutions"
          subtitle="Fresh graduate in Information Systems with a strong interest in Product Management, Business Analysis, Data Analysis, and UI/UX Design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">

          {/* Left Column (7 cols): Story & Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Bio Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Fresh Graduate
                </span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                A driven Information Systems graduate from Del Institute of Technology with a strong interest in <strong className="text-blue-400">Data Analytics, Business Analysis, Business Development</strong>, and <strong className="text-purple-400">Product Analysis</strong>. Passionate about leveraging data, understanding business needs, and developing strategic solutions that create value for users and support business growth.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                My career goal is to contribute to a growth-oriented tech organization where I can bridge business requirements with technical execution, analyze data to drive product decisions, and design impactful digital experiences.
              </p>

              {/* Personality / Work Ethics */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Analytical Thinking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Data-Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Product Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>User-Centric UI/UX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Cross-Functional Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalValues.map((val, idx) => {
                const IconComponent = iconMap[val.icon] || Zap;
                return (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-200 mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column (5 cols): Dynamic Stats Grid & Location Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Stats Cards 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statItems.map((stat, idx) => {
                const IconComp = iconMap[stat.icon] || Code2;
                return (
                  <div
                    key={idx}
                    className="glass-card p-6 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group hover:border-purple-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mx-auto flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {stat.subtext}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Career Highlights Quick Summary Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Recruiter Highlights
              </h4>

              <ul className="flex flex-col gap-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-base leading-none">🎓</span>
                  <span><strong>Education:</strong> Bachelor's Degree in Information Systems, Del Institute of Technology</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-base leading-none">💼</span>
                  <span><strong>Career Interests:</strong> Data Analytics, Business Analysis, Business Development, and Product Analysis</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-base leading-none">📅</span>
                  <span><strong>Availability:</strong> Open to Full-Time, Internship, and Graduate Opportunities</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-base leading-none">🌍</span>
                  <span><strong>Preferred Work Model:</strong> On-site, Hybrid, or Remote</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-base leading-none">🛠</span>
                  <span><strong>Core Skills:</strong> SQL, Excel, Power BI, Tableau, Business Analysis, Product Analysis, Data Visualization, Requirements Gathering, Stakeholder Management</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
