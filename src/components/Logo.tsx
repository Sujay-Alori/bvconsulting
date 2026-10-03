import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'wine';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isLight = variant === 'light';
  const isWine = variant === 'wine';

  const primaryTextColor = isLight ? 'text-[#FAF8F5]' : isWine ? 'text-[#5A2F32]' : 'text-[#242020]';
  const secondaryTextColor = isLight ? 'text-[#FAF8F5]/80' : isWine ? 'text-[#5A2F32]/85' : 'text-[#5A2F32]';
  const mutedTextColor = isLight ? 'text-[#B49A78]' : 'text-[#B49A78]';
  const badgeBg = isLight ? 'bg-[#FAF8F5]/10 border-[#FAF8F5]/20' : 'bg-[#5A2F32]/5 border-[#5A2F32]/15';
  const monogramBg = isLight ? 'bg-[#FAF8F5] text-[#3E2023]' : 'bg-[#5A2F32] text-[#FAF8F5]';

  const sizeConfigs = {
    sm: {
      monogram: 'w-8 h-8 text-sm',
      title: 'text-base font-semibold tracking-wider',
      subtitle: 'text-[9px] tracking-[0.2em]',
      est: 'text-[8px] tracking-widest',
    },
    md: {
      monogram: 'w-10 h-10 text-base',
      title: 'text-lg font-bold tracking-wider',
      subtitle: 'text-[10px] tracking-[0.22em]',
      est: 'text-[9px] tracking-widest',
    },
    lg: {
      monogram: 'w-14 h-14 text-xl',
      title: 'text-2xl font-bold tracking-wider',
      subtitle: 'text-xs tracking-[0.25em]',
      est: 'text-[10px] tracking-widest',
    },
  };

  const config = sizeConfigs[size];

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Structural Monogram Badge */}
      <div
        className={`${config.monogram} ${monogramBg} rounded-sm flex items-center justify-center font-brand font-semibold shadow-sm border border-[#B49A78]/30 transition-transform duration-300 group-hover:scale-105 shrink-0 relative overflow-hidden`}
      >
        <span className="relative z-10 font-bold">BV</span>
        <div className="absolute inset-0 border border-[#B49A78]/40 m-[2px]" />
      </div>

      {/* Brand Typography Details */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-2">
          <span className={`font-brand font-extrabold ${config.title} ${primaryTextColor} tracking-wide`}>
            BV.Co
          </span>
          {showTagline && (
            <span
              className={`font-technical ${config.est} ${mutedTextColor} uppercase font-semibold px-1.5 py-0.5 rounded-xs ${badgeBg} border inline-block`}
            >
              SINCE 1998
            </span>
          )}
        </div>
        <span
          className={`font-sans font-medium uppercase ${config.subtitle} ${secondaryTextColor} mt-0.5 font-semibold`}
        >
          B.V Consulting Engineers
        </span>
      </div>
    </div>
  );
};
