'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#070c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Academic Background"
          title="Education & Credentials"
          subtitle="Formal Information Systems degree, GPA score, academic achievements, and student organization contributions."
        />

        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-indigo-600 p-[1px] shrink-0">
                <div className="w-full h-full bg-[#070c18] rounded-[15px] flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                  {educationData.university}
                </h3>
                <p className="text-sm font-semibold text-emerald-400">
                  {educationData.degree} - {educationData.major}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {educationData.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {educationData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* GPA Score Badge */}
            <div className="glass-card px-6 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center shrink-0">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">
                GPA Score
              </div>
              <div className="text-3xl font-black text-emerald-400">
                {educationData.gpa} <span className="text-sm text-slate-400 font-normal">/ {educationData.maxGpa}</span>
              </div>
              <div className="text-[10px] text-emerald-300/80 font-medium">
                Scale 4.00
              </div>
            </div>
          </div>

          {/* Details Grid: Coursework, Honors, Organizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            
            {/* Academic Honors & Achievements */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Honors & Achievements</span>
              </h4>
              <ul className="flex flex-col gap-2.5">
                {educationData.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campus Leadership & Organizations */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Organization Leadership</span>
              </h4>
              <ul className="flex flex-col gap-2.5">
                {educationData.organizations.map((org, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Coursework */}
            <div className="md:col-span-2 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.courses.map((course, idx) => (
                  <Badge key={idx} variant="emerald" size="md">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
