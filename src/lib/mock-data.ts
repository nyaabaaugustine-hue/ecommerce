/**
 * @fileOverview Institutional Data Registry
 * Senior-level mock dataset localized for the Ghanaian marketplace.
 */

export type SellerType = 'Individual' | 'Verified Dealer' | 'Business Vendor';
export type ListingCategory = 'Vehicles' | 'Property' | 'Electronics' | 'Home & Furniture' | 'Jobs' | 'Services' | 'Fashion' | 'Agriculture' | 'Other';
export type ListingStatus = 'Active' | 'Sold' | 'Under Review';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'HIGH_ADMIN' | 'VENDOR_ADMIN' | 'VENDOR_STAFF' | 'CUSTOMER';
  avatar?: string;
  fidelityScore: number;
}

export interface SellerIdentity {
  id: string;
  name: string;
  type: SellerType;
  rating: number;
  isVerified: boolean;
  joinDate: string;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  isNegotiable: boolean;
  category: ListingCategory;
  location: string;
  postedAt: string; // ISO format or relative string for senior UI
  imageUrl: string;
  seller: SellerIdentity;
  description: string;
  status: ListingStatus;
  isEscrowProtected: boolean;
  metadata?: Record<string, string | number>;
}

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: '2022 Toyota Land Cruiser 300 V6',
    price: 1250000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Airport Residential, Accra',
    postedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    description: 'Full option, pristine condition, duty paid. Sovereign series inspection certified.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's1',
      name: 'AutoTrust Motors',
      type: 'Verified Dealer',
      rating: 4.9,
      isVerified: true,
      joinDate: '2021'
    }
  },
  {
    id: '2',
    title: 'Modern 4-Bedroom Villa with Pool',
    price: 3450000,
    isNegotiable: true,
    category: 'Property',
    location: 'East Legon, Accra',
    postedAt: '5 hours ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    description: 'Luxury living in the heart of East Legon. Gated community with 24/7 security node.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's2',
      name: 'PrimeRentals GH',
      type: 'Business Vendor',
      rating: 5.0,
      isVerified: true,
      joinDate: '2020'
    }
  },
  {
    id: '3',
    title: 'iPhone 15 Pro Max Titanium - 256GB',
    price: 12800,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Spintex Road, Accra',
    postedAt: '1 hour ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    description: 'Factory sealed, US spec. Immediate delivery available via secure logistics.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's3',
      name: 'Gadget Vault',
      type: 'Verified Dealer',
      rating: 4.8,
      isVerified: true,
      joinDate: '2022'
    }
  },
  {
    id: '4',
    title: 'Land for Sale - 2 Prime Plots',
    price: 185000,
    isNegotiable: true,
    category: 'Property',
    location: 'Kasoa, Central Region',
    postedAt: 'Yesterday',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    description: 'Walled and gated, litigation free. Ready for institutional development.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's4',
      name: 'Yaw Mensah',
      type: 'Individual',
      rating: 4.5,
      isVerified: false,
      joinDate: '2023'
    }
  },
  {
    id: '5',
    title: 'Professional Civil Engineering Audit',
    price: 5000,
    isNegotiable: true,
    category: 'Services',
    location: 'Osu, Accra',
    postedAt: '3 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop',
    description: 'Structural integrity audits for commercial developments. Accredited nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's5',
      name: 'Elite Audits GH',
      type: 'Business Vendor',
      rating: 4.9,
      isVerified: true,
      joinDate: '2019'
    }
  }
];
