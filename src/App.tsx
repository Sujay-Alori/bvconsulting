import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { EngineeringFeature } from './components/EngineeringFeature';
import { Process } from './components/Process';
import { Philosophy } from './components/Philosophy';
import { Team } from './components/Team';
import { ConsultationCTA } from './components/ConsultationCTA';
import { Contact } from './components/Contact';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleScrollToExpertise = () => {
    const el = document.getElementById('expertise');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242020] flex flex-col selection:bg-[#5A2F32] selection:text-[#FAF8F5]">
      {/* Sticky Responsive Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* Full-Screen Architectural Hero */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreExpertise={handleScrollToExpertise}
        />

        {/* Introduction & About Split-Section */}
        <About onDiscoverClick={handleScrollToAbout} />

        {/* Experience Statistics Bar */}
        <Stats />

        {/* Numbered Editorial Expertise */}
        <Expertise onStartConsultation={handleOpenConsultation} />

        {/* Selected Projects Showcase with Filter & Detail Lightbox */}
        <Projects onOpenConsultation={handleOpenConsultation} />

        {/* Where Engineering Meets Design Feature */}
        <EngineeringFeature onStartConsultation={handleOpenConsultation} />

        {/* Process Timeline */}
        <Process />

        {/* Dramatic Minimal Wine Philosophy Quote */}
        <Philosophy />

        {/* Executive Team Section */}
        <Team />

        {/* Direct Consultation Call to Action */}
        <ConsultationCTA onOpenConsultation={handleOpenConsultation} />

        {/* Contact Information & Dual Office Directory */}
        <Contact onOpenConsultation={handleOpenConsultation} />

        {/* Physical Office Map & Interactive Switcher */}
        <ContactMap />
      </main>

      {/* Premium Dark Wine Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

export default App;
