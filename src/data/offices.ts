import type { OfficeItem } from '../types';

export const OFFICES_DATA: OfficeItem[] = [
  {
    id: 'bhubaneswar',
    city: 'Bhubaneswar',
    type: 'Head Office',
    building: '203, Gayatree Enclave',
    addressLines: [
      'Gayatree Nagar',
      'Bomikhal',
      'Bhubaneswar, Odisha – 751010'
    ],
    pincode: '751010',
    googleMapsQuery: 'Gayatree Enclave, Bomikhal, Bhubaneswar, Odisha 751010',
    coordinates: {
      lat: 20.2831,
      lng: 85.8576
    },
    phones: [
      { name: 'Er. Mohan Ch. Naik (M.D.)', phone: '+91 94371 21415', raw: '+919437121415' },
      { name: 'Ar. Zijinasa Naik (Architect)', phone: '+91 87633 53133', raw: '+918763353133' }
    ],
    email: 'bvcomohan@gmail.com',
    timings: 'Monday – Saturday: 9:30 AM – 7:00 PM'
  },
  {
    id: 'jharsuguda',
    city: 'Jharsuguda',
    type: 'Branch / Regional Office',
    building: 'Naik Building',
    addressLines: [
      'Agriapada',
      'Beheramal',
      'Jharsuguda, Odisha – 768203'
    ],
    pincode: '768203',
    googleMapsQuery: 'Naik Building, Agriapada, Beheramal, Jharsuguda, Odisha 768203',
    coordinates: {
      lat: 21.8554,
      lng: 84.0062
    },
    phones: [
      { name: 'Er. Ashwin Naik (Associate Engineer)', phone: '+91 82495 25472', raw: '+918249525472' },
      { name: 'Meena Naik (Partner)', phone: '+91 82493 04828', raw: '+918249304828' }
    ],
    email: 'bvcomohan@gmail.com',
    timings: 'Monday – Saturday: 9:30 AM – 7:00 PM'
  }
];
