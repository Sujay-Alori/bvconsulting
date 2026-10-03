import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'structural-engineering',
    number: '01',
    title: 'Structural Engineering',
    shortDescription: 'Technical thinking that supports safe, efficient and enduring structures.',
    fullDescription: 'Comprehensive structural analysis, load calculation, and reinforced foundation design tailored for longevity, safety, and architectural intent.',
    keyCapabilities: [
      'Structural Analysis & Design',
      'Foundation & Substructure Planning',
      'Reinforced Concrete & Steel Detailing',
      'Structural Safety & Integrity Audits'
    ],
    iconName: 'Compass'
  },
  {
    id: 'engineering-consultancy',
    number: '02',
    title: 'Engineering Consultancy',
    shortDescription: 'Practical engineering solutions developed around project requirements and performance.',
    fullDescription: 'Strategic engineering advisory bridging technical feasibility, statutory compliance, material optimization, and construction efficiency.',
    keyCapabilities: [
      'Technical Feasibility Assessment',
      'Structural Optimization & Value Engineering',
      'Code Compliance & Regulatory Advisory',
      'Construction Methodology Advisory'
    ],
    iconName: 'Layers'
  },
  {
    id: 'architecture-interior-design',
    number: '03',
    title: 'Architecture & Interior Design',
    shortDescription: 'Design expertise that connects spatial quality with functional requirements.',
    fullDescription: 'Holistic spatial design balancing aesthetic proportions, natural light, material tactile quality, and ergonomic utility for residential and commercial environments.',
    keyCapabilities: [
      'Architectural Layout & Spatial Planning',
      'Interior Architecture & Material Selection',
      'Lighting & Environmental Integration',
      'Elevational & Facade Detailing'
    ],
    iconName: 'Building2'
  },
  {
    id: 'project-consultation',
    number: '04',
    title: 'Project Consultation',
    shortDescription: 'Professional guidance from early concepts through project development.',
    fullDescription: 'End-to-end consulting stewardship guiding clients, builders, and stakeholders through each milestone with clarity and technical rigor.',
    keyCapabilities: [
      'Concept Evaluation & Project Scoping',
      'Site Assessment & Contextual Review',
      'Design Coordination & Technical Oversight',
      'Pre-Construction Advisory'
    ],
    iconName: 'CheckCircle2'
  }
];
