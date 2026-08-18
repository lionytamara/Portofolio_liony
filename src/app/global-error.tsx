'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#070c18] text-[#f8fafc] font-sans antialiased min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Application Error</h2>
          <p className="text-sm text-slate-400 mb-6">
            A critical error occurred. Please refresh or try again.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
