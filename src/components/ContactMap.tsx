import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';
import { OFFICES_DATA } from '../data/offices';

export const ContactMap: React.FC = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('bhubaneswar');

  const currentOffice =
    OFFICES_DATA.find((o) => o.id === selectedOfficeId) || OFFICES_DATA[0];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#5A2F32]/15">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-12 bg-[#5A2F32]" />
              <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                PHYSICAL LOCATIONS
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#242020] font-normal">
              Visit Our <span className="italic font-serif text-[#5A2F32]">Office</span>
            </h2>
          </div>

          {/* Office Switcher Tabs */}
          <div className="mt-4 md:mt-0 flex gap-2">
            {OFFICES_DATA.map((off) => (
              <button
                key={off.id}
                onClick={() => setSelectedOfficeId(off.id)}
                className={`px-5 py-2.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  selectedOfficeId === off.id
                    ? 'bg-[#5A2F32] text-[#FAF8F5] shadow-sm'
                    : 'bg-white text-[#6E6565] border border-[#5A2F32]/10 hover:text-[#5A2F32]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{off.city} ({off.type.includes('Head') ? 'Head Office' : 'Branch'})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map & Office Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#5A2F32]/15 rounded-xs shadow-wine-md overflow-hidden">
          {/* Left Details Panel */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#FAF8F5]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A2F32] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest rounded-xs">
                <span>{currentOffice.type}</span>
              </div>

              <h3 className="font-editorial text-3xl text-[#242020] font-normal">
                {currentOffice.building}
              </h3>

              <div className="space-y-1 text-sm text-[#6E6565]">
                {currentOffice.addressLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="pt-2">
                <p className="font-technical text-xs text-[#5A2F32] font-semibold">
                  PIN CODE: {currentOffice.pincode}
                </p>
                <p className="font-technical text-xs text-[#6E6565] mt-1">
                  OFFICE HOURS: {currentOffice.timings}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#5A2F32]/10 space-y-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  currentOffice.googleMapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#5A2F32] hover:bg-[#3E2023] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#B49A78]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FAF8F5]/80" />
              </a>
            </div>
          </div>

          {/* Right Interactive Visual Map View */}
          <div className="lg:col-span-7 relative min-h-[360px] bg-[#3E2023] overflow-hidden flex items-center justify-center">
            {/* Map Canvas Background with blueprint & topographical styling */}
            <div className="absolute inset-0 bg-[#3E2023] bg-grid-pattern-dark opacity-80" />
            
            <div className="relative z-10 text-center p-8 text-[#FAF8F5] space-y-4 max-w-md">
              <motion.div
                key={currentOffice.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 rounded-full bg-[#5A2F32] border-2 border-[#B49A78] text-[#FAF8F5] flex items-center justify-center mx-auto shadow-wine-lg"
              >
                <MapPin className="w-8 h-8 text-[#B49A78]" />
              </motion.div>

              <div>
                <p className="font-brand text-xs uppercase tracking-widest text-[#B49A78] font-bold">
                  {currentOffice.city.toUpperCase()} LOCATION
                </p>
                <h4 className="font-editorial text-2xl text-[#FAF8F5] mt-1">
                  {currentOffice.building}
                </h4>
                <p className="font-technical text-xs text-[#FAF8F5]/70 mt-1">
                  Lat {currentOffice.coordinates.lat}° N, Lng {currentOffice.coordinates.lng}° E
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    currentOffice.googleMapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#FAF8F5] text-[#5A2F32] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <span>Launch Interactive Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
