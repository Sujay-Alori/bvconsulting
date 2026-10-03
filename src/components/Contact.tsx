import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, Building, Clock } from 'lucide-react';
import { OFFICES_DATA } from '../data/offices';

interface ContactProps {
  onOpenConsultation: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#5A2F32]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-[#5A2F32]" />
              <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                COMMUNICATION & LOCATIONS
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal">
              Let’s Build <br />
              <span className="italic font-serif text-[#5A2F32]">Something Strong.</span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-wrap gap-4">
            <a
              href="mailto:bvcomohan@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-[#5A2F32] hover:bg-[#3E2023] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#B49A78]" />
              <span>Email: bvcomohan@gmail.com</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-[#FAF1F2] hover:bg-[#FAF1F2]/80 text-[#5A2F32] border border-[#5A2F32]/20 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Consultation Form</span>
            </button>
          </div>
        </div>

        {/* Dual Office Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {OFFICES_DATA.map((office) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-xs bg-[#FAF8F5] border border-[#5A2F32]/15 shadow-wine-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#5A2F32]/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-[#5A2F32]" />
                    <span className="font-brand text-xs uppercase tracking-widest text-[#5A2F32] font-bold">
                      {office.type}
                    </span>
                  </div>
                  <span className="font-technical text-xs font-bold text-[#B49A78] uppercase">
                    {office.city}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#242020] font-normal">
                    {office.building}
                  </h3>
                  {office.addressLines.map((line, i) => (
                    <p key={i} className="text-sm text-[#6E6565] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#6E6565]">
                  <Clock className="w-4 h-4 text-[#5A2F32]" />
                  <span>{office.timings}</span>
                </div>
              </div>

              {/* Direct Personnel Phones for This Office */}
              <div className="pt-4 border-t border-[#5A2F32]/10 space-y-3">
                <p className="font-brand text-[10px] uppercase tracking-widest text-[#5A2F32] font-bold">
                  DIRECT CONTACTS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {office.phones.map((p) => (
                    <a
                      key={p.raw}
                      href={`tel:${p.raw}`}
                      className="p-3 rounded-xs bg-white border border-[#5A2F32]/10 hover:border-[#5A2F32] text-xs text-[#242020] flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <p className="font-medium text-[11px] text-[#5A2F32]">{p.name}</p>
                        <p className="font-technical text-xs text-[#242020] font-bold">{p.phone}</p>
                      </div>
                      <Phone className="w-3.5 h-3.5 text-[#B49A78] group-hover:text-[#5A2F32] transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Map Directions Button */}
                <div className="pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.googleMapsQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A2F32] hover:text-[#3E2023] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#5A2F32]" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B49A78]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Directory Bar */}
        <div className="p-6 sm:p-8 rounded-xs bg-[#5A2F32] text-[#FAF8F5] border border-[#B49A78]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-editorial text-2xl text-[#FAF8F5]">
              General Inquiries & Correspondence
            </h4>
            <p className="text-xs text-[#FAF8F5]/80 font-technical">
              Head Office: 203, Gayatree Enclave, Gayatree Nagar, Bomikhal, Bhubaneswar – 751010
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:bvcomohan@gmail.com"
              className="px-4 py-2.5 bg-[#FAF8F5] text-[#5A2F32] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-white transition-colors"
            >
              bvcomohan@gmail.com
            </a>
            <a
              href="tel:+919437121415"
              className="px-4 py-2.5 bg-[#3E2023] border border-[#B49A78]/50 text-[#FAF8F5] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#5A2F32] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B49A78]" />
              <span>+91 94371 21415</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
