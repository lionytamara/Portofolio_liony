'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillsData } from '../../data/portfolioData';
import {
  FileCode,
  Palette,
  Braces,
  Code,
  Atom,
  Globe,
  Wind,
  Sparkles,
  Server,
  Layers,
  Network,
  Lock,
  Database,
  HardDrive,
  Zap,
  Coffee,
  Terminal,
  FileText,
  GitBranch,
  Github,
  Figma,
  Command,
  Box,
  Send,
  Cpu,
  BarChart2,
  PieChart,
  Activity,
  Search,
  Users,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Layout,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileCode,
  Palette,
  Braces,
  Code,
  Atom,
  Globe,
  Wind,
  Sparkles,
  Server,
  Layers,
  Network,
  Lock,
  Database,
  HardDrive,
  Zap,
  Coffee,
  Terminal,
  FileText,
  GitBranch,
  Github,
  Figma,
  Command,
  Box,
  Send,
  Cpu,
  BarChart2,
  PieChart,
  Activity,
  Search,
  Users,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Layout,
};

type Category = 'all' | 'analytics' | 'business' | 'bi' | 'database' | 'tools';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'analytics', label: 'Data Analytics' },
  { id: 'business', label: 'Business Analysis' },
  { id: 'bi', label: 'Business Intelligence' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Tools' },
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#070c18]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Technical Expertise"
          title="Skills & Technologies"
          subtitle="Categorized breakdown of analytical tools, databases, visualization platforms, and business frameworks."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComp = iconMap[skill.iconName] || Cpu;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-100">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {skill.badgeText && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {skill.badgeText}
                    </span>
                  )}
                </div>

                {/* Animated Level Bar */}
                <div className="space-y-1.5 mt-4">
                  <div className="flex justify-between text-xs font-medium text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-emerald-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
