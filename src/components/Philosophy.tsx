import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#3E2023] text-[#FAF8F5] relative overflow-hidden text-center border-y border-[#B49A78]/30">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* Wine Gradient Shading */}
      <div className="absolute inset-0 bg-radial from-[#5A2F32]/60 via-[#3E2023] to-[#3E2023] opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Subtle Brand Accent Line */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#B49A78]/60" />
          <span className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B49A78]">
            OUR GUIDING ETHOS
          </span>
          <span className="h-[1px] w-12 bg-[#B49A78]/60" />
        </div>

        {/* Dramatic Large Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight text-[#FAF8F5]"
        >
          “Precision in engineering. <br className="hidden sm:block" />
          Clarity in design. <br className="hidden sm:block" />
          <span className="font-normal italic text-[#FAF8F5]">Confidence in execution.”</span>
        </motion.blockquote>

        {/* Minimal Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pt-4 space-y-1"
        >
          <p className="font-brand text-xs sm:text-sm uppercase tracking-[0.25em] text-[#FAF8F5]/90 font-bold">
            B.V Consulting Engineers
          </p>
          <p className="font-technical text-[10px] text-[#B49A78] uppercase tracking-widest">
            SINCE 1998
          </p>
        </motion.div>
      </div>
    </section>
  );
};
