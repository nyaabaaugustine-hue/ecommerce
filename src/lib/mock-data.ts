/**
 * @fileOverview Institutional Data Registry
 * Senior-level mock dataset localized for the Ghanaian marketplace.
 * Governs the core domain models for Listings, Vendors, and Users.
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

export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  logoUrl: string;
  bgUrl: string;
  rating: number;
  itemsCount: number;
  fidelityScore: number;
  joinedYear: string;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  isNegotiable: boolean;
  category: ListingCategory;
  location: string;
  postedAt: string;
  imageUrl: string;
  seller: SellerIdentity;
  vendorId: string;
  description: string;
  status: ListingStatus;
  isEscrowProtected: boolean;
  requiresMultisig?: boolean;
  metadata?: Record<string, string | number>;
}

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Vendor Admin', email: 'vendor@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Logistics Node', email: 'staff@logistics.com', role: 'VENDOR_STAFF', fidelityScore: 100 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Melcom Digital Hub',
    category: 'Electronics',
    description: 'Ghana\'s leading multi-category retailer. Authorized node for institutional electronics and appliances.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://images.unsplash.com/photo-1556740734-7f1a0297ba16?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    itemsCount: 1240,
    fidelityScore: 98,
    joinedYear: '2018'
  },
  {
    id: 'v2',
    name: 'PrimeRentals GH',
    category: 'Real Estate',
    description: 'Premier residential asset management node. Verified listings across Accra\'s elite residential corridors.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    itemsCount: 85,
    fidelityScore: 100,
    joinedYear: '2020'
  },
  {
    id: 'v3',
    name: 'AutoTrust Motors',
    category: 'Vehicles',
    description: 'Verified dealership specializing in luxury and commercial vehicles. Sovereign inspection guaranteed.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    itemsCount: 320,
    fidelityScore: 95,
    joinedYear: '2021'
  }
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
    vendorId: 'v3',
    requiresMultisig: true,
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
    vendorId: 'v2',
    requiresMultisig: true,
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
    vendorId: 'v1',
    description: 'Factory sealed, US spec. Immediate delivery available via secure logistics.',
    status: 'Active',
    isEscrowProtected: true,
    seller: {
      id: 's3',
      name: 'Melcom Hub',
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
    vendorId: 'v4',
    requiresMultisig: true,
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
    vendorId: 'v5',
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
