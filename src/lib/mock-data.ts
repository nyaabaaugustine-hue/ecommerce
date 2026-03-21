
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
  phone?: string;
  whatsapp?: string;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  isNegotiable: boolean;
  category: ListingCategory;
  location: string;
  postedAt: string;
  postedTimestamp: number;
  imageUrl: string;
  seller: SellerIdentity;
  vendorId: string;
  description: string;
  status: ListingStatus;
  isEscrowProtected: boolean;
  isEasyDelivery?: boolean;
  requiresMultisig?: boolean;
}

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Vendor Admin', email: 'vendor@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Logistics Node', email: 'staff@logistics.com', role: 'VENDOR_STAFF', fidelityScore: 100 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

export const LISTINGS: Listing[] = [
  {
    id: '2',
    title: 'iPhone 15 Pro Max 256GB - Natural Titanium',
    price: 14500,
    oldPrice: 16675,
    isNegotiable: true,
    category: 'Electronics',
    location: 'East Legon',
    postedAt: '45m ago',
    postedTimestamp: Date.now() - 2700000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    vendorId: 'v1',
    description: 'Brand new in box, global warranty. Verified node stock.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '4',
    title: 'MacBook Pro M3 Max 16-inch 1TB',
    price: 42000,
    oldPrice: 48300,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Tema Community 25',
    postedAt: '3h ago',
    postedTimestamp: Date.now() - 10800000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    vendorId: 'v1',
    description: 'Unopened, standard institutional hardware.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '6',
    title: 'Samsung 65" QLED 4K Smart TV',
    price: 12500,
    oldPrice: 14375,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Kumasi',
    postedAt: 'Just Now',
    postedTimestamp: Date.now() - 60000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png',
    vendorId: 'v1',
    description: 'Crystal clear 4K hub. Authorized dealer warranty.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '11',
    title: 'Samsung Galaxy S23 Ultra - 512GB',
    price: 8200,
    oldPrice: 9430,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Spintex Road, Accra',
    postedAt: '15m ago',
    postedTimestamp: Date.now() - 900000,
    imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Phantom Black, like new condition. All accessories included.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's8', name: 'TechHub Spintex', type: 'Business Vendor', rating: 4.6, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '13',
    title: 'Google Pixel 8 Pro - 128GB Bay',
    price: 7500,
    oldPrice: 8600,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Cantonments, Accra',
    postedAt: '1h ago',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Brand new Pixel 8 Pro. High-fidelity camera node.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '1',
    title: '2022 Toyota Land Cruiser 300 V6',
    price: 1250000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Airport Residential, Accra',
    postedAt: '2h ago',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    requiresMultisig: true,
    description: 'Pristine condition, full option, only 5,000km driven. Institutional sale.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '3',
    title: 'Modern 4-Bedroom Villa with Private Pool',
    price: 3450000,
    isNegotiable: true,
    category: 'Property',
    location: 'East Legon, Accra',
    postedAt: '5h ago',
    postedTimestamp: Date.now() - 18000000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    vendorId: 'v2',
    requiresMultisig: true,
    description: 'Executive luxury villa in the heart of East Legon. Fully furnished options available.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeRentals GH', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '5',
    title: 'Elite Heritage 3-Door Wardrobe with Mirror',
    price: 850,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Spintex, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    vendorId: 'v4',
    description: 'High-fidelity fabrics, custom wood frame. Heritage series.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: '12',
    title: 'Executive Desk & Ergonomic Mesh Chair',
    price: 3200,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Osu, Accra',
    postedAt: '3h ago',
    postedTimestamp: Date.now() - 10800000,
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Modern office setup. High-quality wood desk and mesh breathable chair.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  }
];

export const VENDORS = [
  {
    id: 'v1',
    name: 'Melcom Digital',
    category: 'Electronics',
    description: "Ghana's leading electronics and lifestyle node.",
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
    category: 'Property',
    description: 'Luxury real estate and commercial asset management.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png',
    bgUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    itemsCount: 85,
    fidelityScore: 100,
    joinedYear: '2020'
  }
];
