export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyCapabilities: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior Design' | 'Consultancy';
  categoryLabel: string;
  imageUrl: string;
  summary: string;
  highlights: string[];
  discipline: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  designation: string;
  phone?: string;
  phoneRaw?: string;
  email?: string;
  imageUrl: string;
  disciplines: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface OfficeItem {
  id: string;
  city: string;
  type: string;
  building: string;
  addressLines: string[];
  pincode: string;
  googleMapsQuery: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phones: {
    name: string;
    phone: string;
    raw: string;
  }[];
  email: string;
  timings: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}
