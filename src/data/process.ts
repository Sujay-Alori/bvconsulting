import type { ProcessStep } from '../types';

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Understand',
    description: 'Understanding the brief, site and project requirements.',
    deliverables: ['Client brief assessment', 'Site & contextual review', 'Scope & timeline parameters']
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Analyse',
    description: 'Evaluating structural, functional and design considerations.',
    deliverables: ['Engineering load evaluation', 'Functional space planning', 'Material & compliance checks']
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Develop',
    description: 'Transforming requirements into coordinated engineering and design solutions.',
    deliverables: ['Coordinated structural drawings', 'Architectural detailing', 'Technical specifications']
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Deliver',
    description: 'Supporting the project through development and implementation.',
    deliverables: ['Construction oversight support', 'Quality adherence review', 'Technical milestone sign-offs']
  }
];
