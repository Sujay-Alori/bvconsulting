import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Scale, Maximize2 } from 'lucide-react';

interface EngineeringFeatureProps {
  onStartConsultation: () => void;
}

export const EngineeringFeature: React.FC<EngineeringFeatureProps> = ({ onStartConsultation }) => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Precision Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Decorative Blueprint Line Details */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#5A2F32]/10 hidden xl:block" />
      <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-[#5A2F32]/10 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Side with Architectural Line Frame */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative p-3 sm:p-4 bg-[#FAF8F5] border border-[#5A2F32]/20 rounded-xs shadow-wine-md">
              {/* Corner Coordinate Badges */}
              <div className="absolute -top-3 -left-3 px-2 py-0.5 bg-[#5A2F32] text-[#FAF8F5] font-technical text-[9px] uppercase tracking-widest rounded-xs">
                BV.CO SPEC-98
              </div>
              <div className="absolute -bottom-3 -right-3 px-2 py-0.5 bg-[#FAF8F5] text-[#5A2F32] border border-[#5A2F32]/30 font-technical text-[9px] uppercase tracking-widest rounded-xs">
                PRECISION ENG
              </div>

              <div className="relative overflow-hidden aspect-[4/3] rounded-xs bg-[#3E2023]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern structural engineering and architecture"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-[#5A2F32]/15 mix-blend-multiply" />
              </div>
            </div>
          </motion.div>

          {/* Narrative & Pillars Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-12 bg-[#5A2F32]" />
                <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                  INTEGRATED PHILOSOPHY
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal leading-[1.12]">
                Where Engineering <br />
                <span className="italic font-serif text-[#5A2F32]">Meets Design</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#242020]/90 font-light leading-relaxed">
              “Strong buildings begin with strong thinking. Our approach brings engineering discipline and design sensitivity together to create spaces that are practical, resilient and considered.”
            </p>

            {/* Engineering Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xs bg-[#FAF8F5] border border-[#5A2F32]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#5A2F32]">
                  <Shield className="w-4 h-4" />
                  <h4 className="text-xs font-brand uppercase tracking-wider font-bold">
                    Structural Resilience
                  </h4>
                </div>
                <p className="text-xs text-[#6E6565] leading-relaxed">
                  Rigorous calculation ensuring long-term structural health and safety.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF8F5] border border-[#5A2F32]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#5A2F32]">
                  <Sparkles className="w-4 h-4 text-[#B49A78]" />
                  <h4 className="text-xs font-brand uppercase tracking-wider font-bold">
                    Design Sensitivity
                  </h4>
                </div>
                <p className="text-xs text-[#6E6565] leading-relaxed">
                  Careful architectural proportioning and user-centric spatial flow.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF8F5] border border-[#5A2F32]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#5A2F32]">
                  <Scale className="w-4 h-4" />
                  <h4 className="text-xs font-brand uppercase tracking-wider font-bold">
                    Material Efficiency
                  </h4>
                </div>
                <p className="text-xs text-[#6E6565] leading-relaxed">
                  Optimized material usage reducing redundant costs without compromise.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF8F5] border border-[#5A2F32]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#5A2F32]">
                  <Maximize2 className="w-4 h-4 text-[#B49A78]" />
                  <h4 className="text-xs font-brand uppercase tracking-wider font-bold">
                    Spatial Harmony
                  </h4>
                </div>
                <p className="text-xs text-[#6E6565] leading-relaxed">
                  Integration of MEP, structural load lines, and interior finishes.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onStartConsultation}
                className="px-6 py-3 rounded-xs bg-[#5A2F32] hover:bg-[#3E2023] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
              >
                Discuss Your Engineering Needs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
