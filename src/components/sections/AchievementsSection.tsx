'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { achievementsData } from '../../data/portfolioData';
import { Trophy, Medal, Mic, Wrench, Star } from 'lucide-react';

const categoryIconMap: Record<string, React.ElementType> = {
  Hackathon: Trophy,
  Competition: Medal,
  Seminar: Mic,
  Workshop: Wrench,
  Honor: Star,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Recognition"
          title="Achievements & Honors"
          subtitle="Competitions, hackathon victories, workshop speaking, and community awards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((ach) => {
            const IconComp = categoryIconMap[ach.category] || Trophy;
            return (
              <div
                key={ach.id}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {ach.rank || ach.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {ach.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-amber-300 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-2">
                    {ach.event}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
