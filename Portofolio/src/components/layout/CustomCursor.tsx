'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button';

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          background: isPointer
            ? 'rgba(37, 99, 235, 0.15)'
            : 'rgba(6, 182, 212, 0.1)',
          border: isPointer
            ? '1px solid rgba(37, 99, 235, 0.5)'
            : '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isPointer ? '0 0 20px rgba(37, 99, 235, 0.3)' : 'none',
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#06b6d4]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
