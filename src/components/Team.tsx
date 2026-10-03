import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { TEAM_DATA } from '../data/team';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#5A2F32]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-[#5A2F32]" />
              <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                LEADERSHIP & EXPERTISE
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal">
              Meet the <span className="italic font-serif text-[#5A2F32]">Team</span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-sm sm:text-base text-[#6E6565] font-light max-w-md">
            Established engineering leaders and design practitioners driving technical excellence since 1998.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xs border border-[#5A2F32]/15 shadow-wine-sm hover:shadow-wine-md transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Container with subtle wine tone */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#3E2023]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#5A2F32]/15 mix-blend-color group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2023]/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Card Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="font-technical text-[10px] uppercase tracking-widest text-[#B49A78] bg-[#3E2023]/90 px-2 py-0.5 rounded-xs border border-[#B49A78]/30 inline-block">
                    BV.CO PRINCIPAL
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-2xl text-[#242020] font-medium leading-tight group-hover:text-[#5A2F32] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-brand text-xs uppercase tracking-wider text-[#5A2F32] font-bold mt-1">
                    {member.designation}
                  </p>
                </div>

                {/* Contact Links from Client Business Card */}
                <div className="pt-4 border-t border-[#5A2F32]/10 space-y-2">
                  {member.phone && (
                    <a
                      href={`tel:${member.phoneRaw}`}
                      className="flex items-center gap-2 text-xs text-[#6E6565] hover:text-[#5A2F32] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#5A2F32]" />
                      <span className="font-technical">{member.phone}</span>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs text-[#6E6565] hover:text-[#5A2F32] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#5A2F32]" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
