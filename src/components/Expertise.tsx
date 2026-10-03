import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Compass, Layers, Building2, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import type { ServiceItem } from '../types';

interface ExpertiseProps {
  onStartConsultation: () => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onStartConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#5A2F32]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-[#5A2F32]" />
              <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                CORE DISCIPLINES
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal">
              Our <span className="italic font-serif text-[#5A2F32]">Expertise</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#6E6565] max-w-md font-light">
            Comprehensive engineering analysis and thoughtful architectural planning refined through 25+ years of practice.
          </p>
        </div>

        {/* Numbered Editorial Service Rows */}
        <div className="divide-y divide-[#5A2F32]/15 border-t border-b border-[#5A2F32]/15">
          {SERVICES_DATA.map((service, idx) => {
            const isExpanded = selectedService?.id === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group transition-all duration-300 hover:bg-[#FAF1F2]/40"
              >
                <div
                  onClick={() => setSelectedService(isExpanded ? null : service)}
                  className="py-8 sm:py-10 px-4 sm:px-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="font-technical text-2xl sm:text-3xl font-light text-[#5A2F32]/60 group-hover:text-[#5A2F32] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="p-2 rounded-xs bg-[#5A2F32]/5 text-[#5A2F32] group-hover:bg-[#5A2F32] group-hover:text-[#FAF8F5] transition-colors">
                          {getIcon(service.iconName)}
                        </span>
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#242020] font-normal group-hover:text-[#5A2F32] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Description text */}
                  <div className="lg:max-w-md xl:max-w-lg lg:pl-4">
                    <p className="text-sm sm:text-base text-[#6E6565] font-light leading-relaxed">
                      “{service.shortDescription}”
                    </p>
                  </div>

                  {/* Right: Expand / Action indicator */}
                  <div className="flex items-center gap-3 self-end lg:self-center">
                    <span className="text-xs font-technical uppercase tracking-wider text-[#5A2F32] hidden sm:inline-block font-semibold">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xs border border-[#5A2F32]/20 flex items-center justify-center text-[#5A2F32] group-hover:bg-[#5A2F32] group-hover:text-[#FAF8F5] transition-all duration-300 ${
                        isExpanded ? 'bg-[#5A2F32] text-[#FAF8F5] rotate-180' : ''
                      }`}
                    >
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Capability Matrix */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden bg-[#FAF1F2]/60 border-t border-[#5A2F32]/10 px-6 py-8"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-3">
                          <p className="font-brand text-xs uppercase tracking-widest text-[#5A2F32] font-bold">
                            SCOPE OVERVIEW
                          </p>
                          <p className="text-sm sm:text-base text-[#242020] leading-relaxed">
                            {service.fullDescription}
                          </p>
                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onStartConsultation();
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#5A2F32] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E2023] transition-colors"
                            >
                              <span>Consult On This Service</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#B49A78]" />
                            </button>
                          </div>
                        </div>

                        <div className="lg:col-span-6">
                          <p className="font-technical text-xs uppercase tracking-widest text-[#B49A78] font-semibold mb-3">
                            CORE CAPABILITIES
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.keyCapabilities.map((cap) => (
                              <div
                                key={cap}
                                className="flex items-center gap-2.5 p-2.5 rounded-xs bg-white border border-[#5A2F32]/10"
                              >
                                <Check className="w-3.5 h-3.5 text-[#5A2F32] shrink-0" />
                                <span className="text-xs text-[#242020] font-medium">{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
