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
    description: 'Ghana\'s leading multi-category retailer.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://images.unsplash.com/photo-1556740734-7f1a0297ba16?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    itemsCount: 1240,
    fidelityScore: 98,
    joinedYear: '2018'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: '2022 Toyota Land Cruiser 300 V6',
    price: 1250000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: '2h ago',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    requiresMultisig: true,
    description: 'Full option, pristine condition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: '2',
    title: 'MacBook Pro M3 Max 16-inch',
    price: 45000,
    isNegotiable: true,
    category: 'Electronics',
    location: 'East Legon',
    postedAt: '1h ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    vendorId: 'v1',
    description: 'Institutional hardware.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022' }
  },
  {
    id: '3',
    title: 'Modern 4-Bedroom Villa with Pool',
    price: 3450000,
    isNegotiable: true,
    category: 'Property',
    location: 'East Legon',
    postedAt: '5h ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    vendorId: 'v2',
    requiresMultisig: true,
    description: 'Luxury living.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeRentals', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: '4',
    title: 'Samsung 65" QLED 4K Smart TV',
    price: 12500,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Tema',
    postedAt: '3h ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png',
    vendorId: 'v1',
    description: '4K OLED Hub.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022' }
  },
  {
    id: '5',
    title: 'Elite Heritage Sofa Suite',
    price: 8500,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Spintex',
    postedAt: 'Yesterday',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    vendorId: 'v4',
    description: 'Luxury furniture.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021' }
  },
  {
    id: '6',
    title: 'iPhone 15 Pro Titanium',
    price: 14800,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Accra',
    postedAt: '30m ago',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    vendorId: 'v1',
    description: 'Titanium phone.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022' }
  },
  {
    id: '7',
    title: '2018 Honda Civic Full Spec',
    price: 85000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Kumasi',
    postedAt: '4h ago',
    imageUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Clean title.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  }
];
