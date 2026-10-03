import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '25+',
      label: 'Years of Experience',
      sublabel: 'Dedicated to Engineering',
    },
    {
      value: '1998',
      label: 'Established',
      sublabel: 'Continuous Practice',
    },
    {
      value: 'Dual',
      label: 'Engineering & Design',
      sublabel: 'Integrated Capabilities',
    },
    {
      value: 'Multiple',
      label: 'Disciplines',
      sublabel: 'Structures & Interiors',
    },
  ];

  return (
    <section className="bg-[#5A2F32] text-[#FAF8F5] relative overflow-hidden border-y border-[#B49A78]/30">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF8F5]/15">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col ${idx !== 0 ? 'sm:pl-8 lg:pl-10' : ''} ${
                idx > 1 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F5] tracking-tight leading-none">
                {item.value}
              </span>
              <span className="font-brand text-xs sm:text-sm uppercase tracking-widest text-[#B49A78] font-semibold mt-3">
                {item.label}
              </span>
              <span className="font-technical text-[11px] text-[#FAF8F5]/60 mt-1">
                {item.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
