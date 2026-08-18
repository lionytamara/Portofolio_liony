import React from 'react';

interface SectionHeadingProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        <span>{badgeText}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div
        className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
