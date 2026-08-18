'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#070c18]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Career Journey"
          title="Experience & Milestones"
          subtitle="Track record of product analyst internship, teaching assistantship, data bootcamp, and UI/UX projects."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-indigo-600 -translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#070c18] border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20">
                          {exp.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mb-4">
                        {exp.company}
                      </p>

                      {/* Main Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet List */}
                      {exp.achievements.length > 0 && (
                        <div className="mb-5 pt-3 border-t border-slate-800/80">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Used Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skillsUsed.map((skill, sIdx) => (
                          <Badge key={sIdx} variant="emerald" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
