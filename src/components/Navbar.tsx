import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../data/navigation';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for nav highlight
      const sections = ['hero', 'about', 'expertise', 'projects', 'process', 'team', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#5A2F32]/10 py-3 shadow-wine-sm'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="focus:outline-hidden"
          >
            <Logo
              variant={isScrolled ? 'wine' : 'light'}
              size="md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors relative group ${
                    isScrolled
                      ? isActive
                        ? 'text-[#5A2F32] font-semibold'
                        : 'text-[#242020]/80 hover:text-[#5A2F32]'
                      : isActive
                      ? 'text-[#FAF8F5] font-semibold'
                      : 'text-[#FAF8F5]/85 hover:text-[#FAF8F5]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? 'bg-[#5A2F32]'
                          : 'bg-[#B49A78]'
                        : isScrolled
                        ? 'bg-[#5A2F32] scale-x-0 group-hover:scale-x-100'
                        : 'bg-[#FAF8F5] scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-[#5A2F32] text-[#FAF8F5] hover:bg-[#3E2023] border border-[#5A2F32]'
                  : 'bg-[#5A2F32] text-[#FAF8F5] hover:bg-[#3E2023] border border-[#B49A78]/40 shadow-wine-md'
              }`}
            >
              <span>Start a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#B49A78]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xs transition-colors ${
              isScrolled
                ? 'text-[#5A2F32] hover:bg-[#5A2F32]/5'
                : 'text-[#FAF8F5] hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#5A2F32]/15 shadow-wine-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <div className="space-y-1 divide-y divide-[#5A2F32]/10">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-3 text-sm font-semibold tracking-wider uppercase text-[#242020] hover:text-[#5A2F32]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#B49A78]" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#5A2F32]/15 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 bg-[#5A2F32] text-[#FAF8F5] rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#3E2023] shadow-wine-md"
                >
                  <span>Start a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#B49A78]" />
                </button>

                <div className="flex items-center justify-between text-xs text-[#6E6565] pt-2">
                  <a
                    href="tel:+919437121415"
                    className="inline-flex items-center gap-1.5 hover:text-[#5A2F32]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5A2F32]" />
                    <span>+91 94371 21415</span>
                  </a>
                  <a
                    href="mailto:bvcomohan@gmail.com"
                    className="inline-flex items-center gap-1.5 hover:text-[#5A2F32]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5A2F32]" />
                    <span>bvcomohan@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
