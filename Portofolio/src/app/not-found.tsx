'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-center">
      <div className="max-w-md glass-card p-10 rounded-3xl border border-slate-800 flex flex-col items-center">
        <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
          <FileQuestion className="w-10 h-10" />
        </div>

        <h1 className="text-6xl font-black gradient-text mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-100 mb-3">Page Not Found</h2>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
          The requested portfolio page or resource could not be found. Please return to the homepage to explore the portfolio.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Portfolio Home</span>
        </Link>
      </div>
    </div>
  );
}
