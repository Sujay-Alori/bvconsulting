import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_DATA } from '../data/process';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#5A2F32]" />
            <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
              METHODOLOGY
            </span>
            <span className="h-[1px] w-8 bg-[#5A2F32]" />
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal">
            Our <span className="italic font-serif text-[#5A2F32]">Approach</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6E6565] font-light">
            A structured, transparent engineering process guaranteeing structural safety and execution clarity.
          </p>
        </div>

        {/* Desktop Process Timeline with Thin Wine-Colored Connecting Line */}
        <div className="relative">
          {/* Horizontal Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] bg-[#5A2F32]/25 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_DATA.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white p-6 sm:p-7 rounded-xs border border-[#5A2F32]/15 shadow-wine-sm relative group hover:border-[#5A2F32]/40 transition-all duration-300"
              >
                {/* Step Indicator Top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xs bg-[#5A2F32] text-[#FAF8F5] flex items-center justify-center font-technical text-sm font-bold shadow-sm group-hover:bg-[#3E2023] transition-colors">
                    {step.number}
                  </div>
                  <span className="font-technical text-[10px] uppercase tracking-widest text-[#B49A78] font-semibold">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl text-[#242020] font-medium mb-3 group-hover:text-[#5A2F32] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6E6565] font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables Sublist */}
                <div className="pt-4 border-t border-[#5A2F32]/10 space-y-1.5">
                  <p className="font-brand text-[9px] uppercase tracking-widest text-[#5A2F32] font-bold">
                    KEY OUTCOMES
                  </p>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-[#242020]">
                      <Check className="w-3 h-3 text-[#5A2F32] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
