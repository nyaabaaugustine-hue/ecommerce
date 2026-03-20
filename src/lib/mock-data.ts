
import { PlaceHolderImages } from './placeholder-images';

export type Role = 'ADMIN' | 'VENDOR' | 'CUSTOMER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  itemsCount: number;
  joinedDate: string;
  color: string;
  icon: string;
  description: string;
}

export interface Listing {
  id: string;
  title: string;
  vendorId: string;
  category: string;
  price: number;
  oldPrice?: number;
  location: string;
  imageUrl: string;
  rating: number;
  discount?: string;
}

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'GadgetZone Ghana',
    category: 'Electronics',
    rating: 4.9,
    itemsCount: 156,
    joinedDate: 'Jan 2022',
    color: 'bg-rose-500',
    icon: 'G',
    description: 'Premier electronics distributor in Accra specializing in high-end computing and mobile devices.'
  },
  {
    id: 'v2',
    name: 'PrimeRentals GH',
    category: 'Real Estate',
    rating: 4.8,
    itemsCount: 42,
    joinedDate: 'Mar 2021',
    color: 'bg-indigo-500',
    icon: 'P',
    description: 'Curating the finest residential and commercial properties across East Legon and Airport Residential.'
  },
  {
    id: 'v3',
    name: 'GlobalLex Consulting',
    category: 'Professional Services',
    rating: 5.0,
    itemsCount: 12,
    joinedDate: 'Jun 2020',
    color: 'bg-emerald-500',
    icon: 'L',
    description: 'Verified legal and corporate consulting services with escrow-backed project milestones.'
  },
  {
    id: 'v4',
    name: 'DevMastery Academy',
    category: 'Education',
    rating: 4.9,
    itemsCount: 28,
    joinedDate: 'Sep 2022',
    color: 'bg-amber-500',
    icon: 'D',
    description: 'Elite coding bootcamps and specialized technical mentorship programs in Kumasi and Accra.'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'MacBook Pro M3 Max 16"',
    vendorId: 'v1',
    category: 'Electronics',
    price: 52499,
    oldPrice: 58999,
    location: 'Accra, Ghana',
    imageUrl: PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl || '',
    rating: 4.9,
    discount: '10% OFF'
  },
  {
    id: '2',
    title: 'Modern 2-Bedroom Apartment',
    vendorId: 'v2',
    category: 'Real Estate',
    price: 18000,
    location: 'East Legon, Ghana',
    imageUrl: PlaceHolderImages.find(img => img.id === 'real-estate')?.imageUrl || '',
    rating: 4.7
  },
  {
    id: '3',
    title: 'Corporate Law - Annual Audit',
    vendorId: 'v3',
    category: 'Professional Services',
    price: 75000,
    location: 'Remote',
    imageUrl: PlaceHolderImages.find(img => img.id === 'legal')?.imageUrl || '',
    rating: 5.0
  },
  {
    id: '4',
    title: 'React Native Advanced Course',
    vendorId: 'v4',
    category: 'Education',
    price: 3750,
    oldPrice: 6000,
    location: 'Online',
    imageUrl: PlaceHolderImages.find(img => img.id === 'education')?.imageUrl || '',
    rating: 4.8,
    discount: '37% OFF'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'ADMIN' },
  { id: 'u2', name: 'GadgetZone Manager', email: 'tech@gadgets.com', role: 'VENDOR' },
  { id: 'u3', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER' }
];
