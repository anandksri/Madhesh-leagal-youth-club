import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#0B1F3A]' : 'text-white';
  const subTextColor = isDark ? 'text-[#64748B]' : 'text-slate-300';
  const emblemBg = isDark ? 'bg-[#0B1F3A]' : 'bg-white';
  const iconStroke = isDark ? '#D4A72C' : '#0B1F3A';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem */}
      <div
        className={`w-10 h-10 rounded-lg ${emblemBg} flex items-center justify-center shrink-0 shadow-xs border border-[#D4A72C]/30 transition-transform duration-200 hover:scale-105`}
        aria-label="Madhesh Legal Youth Club Emblem"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconStroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Stylized Justice Scales & Open Pillar Motif */}
          <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2" />
          <line x1="6" y1="7" x2="18" y2="7" strokeWidth="1.8" />
          <circle cx="12" cy="3" r="1" fill={iconStroke} />
          {/* Left pan */}
          <path d="M6 7l-3 6h6l-3-6z" />
          {/* Right pan */}
          <path d="M18 7l-3 6h6l-3-6z" />
          {/* Base */}
          <line x1="9" y1="21" x2="15" y2="21" strokeWidth="2" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className={`text-sm sm:text-base font-bold tracking-tight uppercase ${textColor}`}>
          Madhesh Legal
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`text-xs sm:text-sm font-semibold tracking-wider text-[#D4A72C]`}>
            YOUTH CLUB
          </span>
          {showSubtitle && (
            <span className={`text-[10px] uppercase font-medium tracking-wider hidden sm:inline-block ${subTextColor} before:content-['•'] before:mr-1`}>
              Birgunj, Nepal
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
