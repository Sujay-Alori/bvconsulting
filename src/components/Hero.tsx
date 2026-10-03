import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreExpertise: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreExpertise,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#3E2023] overflow-hidden text-[#FAF8F5]"
    >
      {/* Background Architectural Photography with Precision Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2400&q=90"
          alt="B.V Consulting Engineers Architectural Structure"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.12]"
        />
        {/* Subtle Wine & Vignette Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2023]/95 via-[#5A2F32]/80 to-[#3E2023]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2023] via-transparent to-[#3E2023]/80" />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-35" />
      </div>

      {/* Floating Architectural Coordinate Marks */}
      <div className="absolute top-28 right-8 lg:right-16 hidden md:block text-right text-xs font-technical text-[#B49A78]/70 border-r border-[#B49A78]/40 pr-4 space-y-1">
        <p className="tracking-widest uppercase">PRACTICE ESTABLISHED</p>
        <p className="text-sm font-semibold text-[#FAF8F5]">1998 • 25+ YRS EXCELLENCE</p>
        <p className="text-[10px] text-[#FAF8F5]/60">BHUBANESWAR & JHARSUGUDA</p>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-32 w-full">
        <div className="max-w-3xl">
          {/* Small Label with Wine & Gold Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#FAF8F5]/10 border border-[#B49A78]/40 backdrop-blur-sm mb-6"
          >
            <Compass className="w-4 h-4 text-[#B49A78]" />
            <span className="font-brand text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#FAF8F5] uppercase">
              BV.CO CONSULTING ENGINEERS
            </span>
            <span className="h-3 w-[1px] bg-[#B49A78]/60" />
            <span className="font-technical text-[10px] text-[#B49A78] uppercase font-bold tracking-wider">
              SINCE 1998
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-[#FAF8F5] mb-6"
          >
            Engineering <br className="hidden sm:block" />
            <span className="font-normal italic text-[#FAF8F5]">with Precision.</span> <br />
            <span className="text-[#FAF8F5] font-normal">Building for Tomorrow.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/85 font-light leading-relaxed mb-10 max-w-2xl"
          >
            Integrated engineering and architectural expertise shaped by experience, precision and a commitment to lasting design.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onExploreExpertise}
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xs bg-[#5A2F32] hover:bg-[#783E43] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 border border-[#B49A78]/50 shadow-wine-lg"
            >
              <span>Explore Our Expertise</span>
              <ArrowRight className="w-4 h-4 text-[#B49A78] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xs bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 border border-[#FAF8F5]/30 backdrop-blur-sm"
            >
              <span>Start a Consultation</span>
            </button>
          </motion.div>

          {/* Subtext Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-[#FAF8F5]/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-technical text-[#FAF8F5]/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B49A78]" />
              <span>Structural Integrity & Code Adherence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49A78]" />
              <span>Comprehensive Architectural Synthesis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49A78]" />
              <span>Dual Practice Hubs (Bhubaneswar • Jharsuguda)</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-[#FAF8F5]/60 hover:text-[#FAF8F5] transition-colors"
        onClick={onExploreExpertise}
      >
        <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#B49A78]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#B49A78]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
