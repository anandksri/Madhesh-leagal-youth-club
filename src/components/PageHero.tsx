import React from 'react';
import { PageId } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  currentPageTitle: string;
  onNavigateHome: () => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Madhesh Legal Youth Club',
  currentPageTitle,
  onNavigateHome,
}) => {
  return (
    <section className="relative bg-[#0B1F3A] text-white py-14 sm:py-20 overflow-hidden border-b border-slate-800">
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4A72C 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 -mt-16 -mr-16 w-96 h-96 bg-[#174A7E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-300 mb-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-[#D4A72C] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#D4A72C] font-semibold" aria-current="page">
            {currentPageTitle}
          </span>
        </nav>

        {/* Small Label */}
        {badge && (
          <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#174A7E]/50 border border-[#D4A72C]/40 text-[#D4A72C]">
            {badge}
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
