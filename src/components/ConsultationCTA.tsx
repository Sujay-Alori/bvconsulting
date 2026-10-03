import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquareCheck } from 'lucide-react';

interface ConsultationCTAProps {
  onOpenConsultation: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF1F2] relative overflow-hidden border-b border-[#5A2F32]/15">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#5A2F32] text-[#FAF8F5] p-8 sm:p-12 lg:p-16 rounded-xs border border-[#B49A78]/30 shadow-wine-lg relative overflow-hidden">
          {/* Subtle gold line & background elements */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#B49A78]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#B49A78]/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#FAF8F5]/10 border border-[#B49A78]/30 text-xs font-technical text-[#B49A78] uppercase">
                <MessageSquareCheck className="w-3.5 h-3.5 text-[#B49A78]" />
                <span>DIRECT CONSULTATION</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-tight">
                Have a <span className="italic font-serif">project in mind?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#FAF8F5]/85 max-w-2xl font-light leading-relaxed">
                Let's discuss your requirements and explore the right engineering and design approach for your project.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F5] hover:bg-white text-[#5A2F32] rounded-xs text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-md"
              >
                <span>Start a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#5A2F32] transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <span className="font-technical text-xs text-[#FAF8F5]/70">
                Response within 24 business hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
