import type { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'contemporary-residence',
    number: '01',
    title: 'Contemporary Residence',
    category: 'Residential',
    categoryLabel: 'Residential Architecture & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    summary: 'A balanced residential composition uniting clean geometric volumes, cantilevered concrete overhangs, and thoughtful natural illumination.',
    highlights: [
      'Cantilevered structural engineering',
      'Harmonious indoor-outdoor integration',
      'Optimized thermal envelope & daylighting'
    ],
    discipline: 'Structural Engineering & Architectural Design'
  },
  {
    id: 'commercial-structure',
    number: '02',
    title: 'Commercial Structure',
    category: 'Commercial',
    categoryLabel: 'Commercial & Multi-Storey Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    summary: 'High-performance commercial framework designed for spatial flexibility, expansive column-free spans, and robust structural longevity.',
    highlights: [
      'Engineered wide-span column grid',
      'Integrated service core and structural stability',
      'Refined facade engineering and load distribution'
    ],
    discipline: 'Structural Engineering & Project Consultation'
  },
  {
    id: 'integrated-interior',
    number: '03',
    title: 'Integrated Interior',
    category: 'Interior Design',
    categoryLabel: 'Interior Architecture & Space Planning',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    summary: 'Sophisticated interior spatial orchestration emphasizing tactile natural textures, custom joinery details, and purposeful architectural lighting.',
    highlights: [
      'Tailored material palette and finishes',
      'Acoustic and luminous comfort engineering',
      'Seamless structural integration with interior flow'
    ],
    discipline: 'Architecture & Interior Design'
  },
  {
    id: 'urban-development',
    number: '04',
    title: 'Urban Development',
    category: 'Consultancy',
    categoryLabel: 'Urban Engineering & Technical Advisory',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    summary: 'Comprehensive engineering consultancy and master development advisory focused on site responsiveness, infrastructure resilience, and coordinated execution.',
    highlights: [
      'Multi-disciplinary site feasibility',
      'Phased development structural planning',
      'Environmental and civil infrastructure coordination'
    ],
    discipline: 'Engineering Consultancy & Project Advisory'
  }
];
