'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { servicesData } from '../../data/portfolioData';
import { Globe, Layout, Zap, CheckCircle2 } from 'lucide-react';

const serviceIconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Zap,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Services Offered"
          title="What I Can Build For You"
          subtitle="Tailored engineering services for startups, agencies, and enterprise web teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Deliverables:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
