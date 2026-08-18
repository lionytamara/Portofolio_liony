'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Endorsements"
          title="Testimonials & Recommendations"
          subtitle="Feedback from bootcamp leads, academic department heads, and project clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card p-8 rounded-3xl border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-purple-500/40 transition-colors" />
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    {item.author}
                  </h4>
                  <p className="text-xs font-semibold text-purple-400">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-slate-500">
                    {item.companyOrOrg}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
