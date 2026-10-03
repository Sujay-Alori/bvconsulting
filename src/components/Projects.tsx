import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import type { ProjectItem } from '../types';

interface ProjectsProps {
  onOpenConsultation: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Consultancy'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden border-b border-[#5A2F32]/10">
      {/* Background Subtle Line Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#5A2F32]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-[#5A2F32]" />
              <span className="font-brand text-xs uppercase tracking-[0.25em] text-[#5A2F32] font-bold">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#242020] font-normal">
              Selected <span className="italic font-serif text-[#5A2F32]">Projects</span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-base text-[#6E6565] font-light max-w-md">
            “Exploring the relationship between structure, space and design.”
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#5A2F32] text-[#FAF8F5] shadow-sm'
                  : 'bg-white text-[#6E6565] hover:text-[#5A2F32] hover:bg-[#FAF1F2] border border-[#5A2F32]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#5A2F32]/15 bg-white shadow-wine-sm hover:shadow-wine-md transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Hover Zoom & Wine Overlay */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-[#3E2023]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Wine Tint Overlay on Hover */}
                <div className="absolute inset-0 bg-[#3E2023]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 backdrop-blur-[2px]">
                  <div className="text-center text-[#FAF8F5] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                    <span className="font-technical text-xs tracking-widest text-[#B49A78] uppercase font-bold">
                      CLICK TO VIEW DETAILS
                    </span>
                    <p className="text-sm font-light text-[#FAF8F5]/90 max-w-xs mx-auto">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#FAF8F5]/95 backdrop-blur-sm border border-[#5A2F32]/20 rounded-xs">
                  <span className="font-brand text-[10px] uppercase tracking-wider text-[#5A2F32] font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#5A2F32] text-[#FAF8F5] rounded-xs flex items-center justify-center font-technical text-xs font-bold shadow-sm">
                  {project.number}
                </div>
              </div>

              {/* Editorial Card Footer */}
              <div className="p-6 sm:p-7 flex items-center justify-between gap-4 border-t border-[#5A2F32]/10 bg-white">
                <div>
                  <span className="font-technical text-xs text-[#B49A78] uppercase font-semibold tracking-wider">
                    {project.discipline}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#242020] font-normal group-hover:text-[#5A2F32] transition-colors mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="w-10 h-10 rounded-xs border border-[#5A2F32]/20 flex items-center justify-center text-[#5A2F32] group-hover:bg-[#5A2F32] group-hover:text-[#FAF8F5] transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3E2023]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F5] rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#5A2F32]/20 shadow-wine-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="p-4 sm:p-6 border-b border-[#5A2F32]/15 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-[#5A2F32] text-[#FAF8F5] rounded-xs flex items-center justify-center font-technical text-xs font-bold">
                    {selectedProject.number}
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#242020]">
                      {selectedProject.title}
                    </h3>
                    <p className="font-brand text-[10px] tracking-widest uppercase text-[#5A2F32] font-semibold">
                      {selectedProject.categoryLabel}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xs text-[#242020] hover:bg-[#5A2F32]/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full bg-[#3E2023]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-technical text-xs uppercase tracking-widest text-[#B49A78] font-bold mb-2">
                    PROJECT SUMMARY
                  </h4>
                  <p className="text-base text-[#242020] font-light leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-technical text-xs uppercase tracking-widest text-[#B49A78] font-bold mb-3">
                    TECHNICAL & DESIGN HIGHLIGHTS
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-[#242020]">
                        <CheckCircle2 className="w-4 h-4 text-[#5A2F32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xs bg-[#FAF1F2] border border-[#5A2F32]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-[#5A2F32]" />
                    <div>
                      <p className="text-xs font-bold text-[#5A2F32] uppercase font-brand">
                        DEMO PROJECT BLUEPRINT
                      </p>
                      <p className="text-xs text-[#6E6565]">
                        Ready to be populated with your firm's executed projects.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="px-4 py-2 rounded-xs bg-[#5A2F32] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E2023] transition-colors shrink-0"
                  >
                    Discuss Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
