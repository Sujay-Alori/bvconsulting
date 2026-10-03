import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Residential',
    'Commercial',
    'Interior',
    'Engineering Consultancy',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'Residential',
        message: '',
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-[#3E2023]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-[#FAF8F5] w-full max-w-xl rounded-xs border border-[#5A2F32]/20 shadow-wine-lg z-10 overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#5A2F32] text-[#FAF8F5] px-6 py-5 flex items-center justify-between border-b border-[#B49A78]/30">
            <div>
              <span className="font-technical text-[10px] tracking-widest text-[#B49A78] uppercase font-bold">
                B.V CONSULTING ENGINEERS
              </span>
              <h3 className="font-editorial text-2xl font-light text-[#FAF8F5]">
                Start a Consultation
              </h3>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 rounded-xs text-[#FAF8F5]/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-[#5A2F32]/10 text-[#5A2F32] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#5A2F32]" />
                </div>
                <h4 className="font-editorial text-3xl text-[#242020] font-normal">
                  Inquiry Received
                </h4>
                <p className="text-base text-[#6E6565] max-w-md mx-auto leading-relaxed">
                  “Thank you. Our team will get in touch with you shortly.”
                </p>
                <div className="pt-6">
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-3 bg-[#5A2F32] text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-[#3E2023] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242020] mb-1 font-brand">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Er. / Ar. / Mr. / Ms. Full Name"
                    className="w-full px-4 py-2.5 rounded-xs border border-[#5A2F32]/20 bg-white text-[#242020] text-sm focus:outline-hidden focus:border-[#5A2F32] focus:ring-1 focus:ring-[#5A2F32]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#242020] mb-1 font-brand">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xs border border-[#5A2F32]/20 bg-white text-[#242020] text-sm focus:outline-hidden focus:border-[#5A2F32] focus:ring-1 focus:ring-[#5A2F32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#242020] mb-1 font-brand">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.name@example.com"
                      className="w-full px-4 py-2.5 rounded-xs border border-[#5A2F32]/20 bg-white text-[#242020] text-sm focus:outline-hidden focus:border-[#5A2F32] focus:ring-1 focus:ring-[#5A2F32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242020] mb-1 font-brand">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xs border border-[#5A2F32]/20 bg-white text-[#242020] text-sm focus:outline-hidden focus:border-[#5A2F32] focus:ring-1 focus:ring-[#5A2F32]"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242020] mb-1 font-brand">
                    Project Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your site location, structural requirements, or consultation goals..."
                    className="w-full px-4 py-2.5 rounded-xs border border-[#5A2F32]/20 bg-white text-[#242020] text-sm focus:outline-hidden focus:border-[#5A2F32] focus:ring-1 focus:ring-[#5A2F32] resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#6E6565] pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#5A2F32]" />
                  <span>Direct submission to BV.Co Managing Partners.</span>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#5A2F32] hover:bg-[#3E2023] text-[#FAF8F5] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-wine-md disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4 text-[#B49A78]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
