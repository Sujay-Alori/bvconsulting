import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface AboutProps {
  onDiscoverClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverClick }) => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#FAF8F5] overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Large Typographic Watermark */}
      <div className="absolute right-4 bottom-2 select-none pointer-events-none opacity-[0.035] hidden lg:block">
        <span className="font-brand text-[180px] font-black text-[#5A2F32] leading-none">
          1998
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Category Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-[1px] w-12 bg-[#5A2F32]" />
          <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
            ABOUT BV.CO CONSULTING ENGINEERS
          </span>
          <span className="font-technical text-xs text-[#B49A78] font-semibold">
            [ EST. 1998 ]
          </span>
        </div>

        {/* Split Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial Statement & Decorative Architectural Element */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal leading-[1.12]"
            >
              Built on <span className="italic font-serif text-[#5A2F32]">experience.</span>
              <br />
              Driven by <span className="font-medium text-[#242020]">precision.</span>
            </motion.h2>

            {/* Architectural detail line box */}
            <div className="pt-6 border-l-2 border-[#5A2F32] pl-6 space-y-3">
              <p className="font-technical text-xs uppercase tracking-widest text-[#B49A78] font-semibold">
                CORE PHILOSOPHY
              </p>
              <p className="text-sm sm:text-base text-[#6E6565] font-light leading-relaxed">
                Every structure demands a synthesis of scientific calculation, material honesty, and spatial intelligence.
              </p>
            </div>

            {/* Established Badge Element */}
            <div className="inline-flex items-center gap-4 p-4 rounded-xs bg-white border border-[#5A2F32]/15 shadow-wine-sm">
              <div className="w-12 h-12 bg-[#5A2F32] text-[#FAF8F5] flex items-center justify-center font-brand font-bold text-sm">
                BV
              </div>
              <div>
                <p className="font-brand text-xs uppercase tracking-widest text-[#5A2F32] font-bold">
                  B.V Consulting Engineers
                </p>
                <p className="font-technical text-xs text-[#6E6565]">
                  Over 25 Years of Engineering Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Context, Narrative & Discover Link */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6 text-[#242020]/90 text-base sm:text-lg leading-relaxed font-light"
            >
              <p className="font-normal text-lg sm:text-xl text-[#242020] leading-snug">
                B.V Consulting Engineers brings together engineering and design expertise to create thoughtful, reliable and enduring solutions.
              </p>
              <p className="text-[#6E6565] text-base leading-relaxed">
                With a practice established in 1998, the firm combines technical knowledge with a practical understanding of architecture and the built environment.
              </p>
            </motion.div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#5A2F32]/10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A2F32]/10 text-[#5A2F32] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242020]">Structural Rigor</h4>
                  <p className="text-xs text-[#6E6565] mt-0.5">Precision load calculations & safety</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A2F32]/10 text-[#5A2F32] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242020]">Design Integration</h4>
                  <p className="text-xs text-[#6E6565] mt-0.5">Architecture aligned with utility</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A2F32]/10 text-[#5A2F32] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242020]">Technical Advisory</h4>
                  <p className="text-xs text-[#6E6565] mt-0.5">Objective engineering guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5A2F32]/10 text-[#5A2F32] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242020]">Multi-Discipline Sync</h4>
                  <p className="text-xs text-[#6E6565] mt-0.5">Cohesive execution across phases</p>
                </div>
              </div>
            </div>

            {/* Small Discover Link */}
            <div className="pt-2">
              <button
                onClick={onDiscoverClick}
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#5A2F32] hover:text-[#3E2023] transition-colors border-b-2 border-[#5A2F32] pb-1"
              >
                <span>Discover BV.Co</span>
                <ArrowRight className="w-4 h-4 text-[#B49A78] transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
