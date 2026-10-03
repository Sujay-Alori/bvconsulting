import React from 'react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../data/navigation';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2023] text-[#FAF8F5] relative overflow-hidden border-t border-[#B49A78]/30">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/15">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" size="lg" />

            <p className="text-sm sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed max-w-md">
              “Engineering Excellence Since 1998”
            </p>

            <p className="text-xs text-[#FAF8F5]/65 leading-relaxed max-w-sm">
              Integrated engineering and architectural consultancy delivering structural rigor, design precision, and trusted execution across Odisha.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xs bg-[#5A2F32] hover:bg-[#783E43] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest border border-[#B49A78]/50 transition-colors shadow-sm"
              >
                Request a Consultation
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-brand text-xs uppercase tracking-widest text-[#B49A78] font-bold">
              NAVIGATION
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#FAF8F5]/80 hover:text-[#FAF8F5] transition-colors tracking-wide uppercase font-medium hover:underline underline-offset-4 decoration-[#B49A78]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations & Direct Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <p className="font-brand text-xs uppercase tracking-widest text-[#B49A78] font-bold">
              OFFICE LOCATIONS
            </p>

            <div className="space-y-4 text-xs text-[#FAF8F5]/80">
              <div className="space-y-1">
                <p className="font-semibold text-[#FAF8F5] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B49A78]" />
                  <span>Head Office — Bhubaneswar</span>
                </p>
                <p className="pl-5 text-[#FAF8F5]/70">
                  203, Gayatree Enclave, Gayatree Nagar, Bomikhal, Bhubaneswar – 751010
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-[#FAF8F5] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B49A78]" />
                  <span>Jharsuguda Office</span>
                </p>
                <p className="pl-5 text-[#FAF8F5]/70">
                  Naik Building, Agriapada, Beheramal, Jharsuguda – 768203
                </p>
              </div>

              <div className="pt-2 space-y-2 border-t border-[#FAF8F5]/10">
                <a
                  href="mailto:bvcomohan@gmail.com"
                  className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B49A78]" />
                  <span>bvcomohan@gmail.com</span>
                </a>
                <a
                  href="tel:+919437121415"
                  className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors text-xs font-technical"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B49A78]" />
                  <span>+91 94371 21415 (Managing Director)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical text-[#FAF8F5]/60">
          <p>© 2026 B.V Consulting Engineers. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#B49A78]">ESTABLISHED 1998</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors uppercase tracking-widest text-[11px]"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B49A78]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
