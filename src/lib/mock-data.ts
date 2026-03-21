
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
  isEmphasis?: boolean;
}

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Vendor Admin', email: 'vendor@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Logistics Node', email: 'staff@logistics.com', role: 'VENDOR_STAFF', fidelityScore: 100 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

export const LISTINGS: Listing[] = [
  // ELECTRONICS (5 ITEMS)
  {
    id: 'e1',
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
    id: 'e2',
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
    id: 'e3',
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
    id: 'e4',
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
    id: 'e5',
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

  // FURNITURE (5 ITEMS)
  {
    id: 'f1',
    title: 'QUICK SALE PRICE - Antique Family Chest',
    price: 730,
    oldPrice: 1350,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Accra North',
    postedAt: 'Today, 1:52',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Beautiful antique wood chest. Heritage piece.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f2',
    title: 'Comfortable Modern Dresser',
    price: 270,
    isNegotiable: false,
    category: 'Home & Furniture',
    location: 'Kumasi Central',
    postedAt: 'Today, 0:33',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Compact and functional dresser.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f3',
    title: '3-Door Wardrobe with Mirror',
    price: 850,
    oldPrice: 1320,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Tema Node',
    postedAt: 'Yesterday, 14:12',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Spacious wardrobe with integrated mirror.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f4',
    title: 'Wardrobe with 2 sliding doors + mirror',
    price: 580,
    isNegotiable: false,
    category: 'Home & Furniture',
    location: 'Airport Residential',
    postedAt: 'Today, 22:07',
    postedTimestamp: Date.now() - 10000,
    imageUrl: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Modern sliding door system.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f5',
    title: 'Theo Retro 3-Door Wardrobe, Gray',
    price: 600,
    oldPrice: 800,
    isNegotiable: false,
    category: 'Home & Furniture',
    location: 'Osu, Accra',
    postedAt: 'Yesterday, 19:04',
    postedTimestamp: Date.now() - 90000000,
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Retro gray finish wardrobe.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },

  // AIR CONDITIONERS (5 ITEMS - CLONE FROM SCREENSHOT)
  {
    id: 'ac1_gh',
    title: 'PHILCO 12 BTU AIR CONDITIONER',
    price: 700,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Accra Node',
    postedAt: 'Mar 20, 22:39',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png',
    vendorId: 'v1',
    description: 'High efficiency split AC.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: false,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac2_gh',
    title: 'Selling a 9 BTU air conditioner.',
    price: 600,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Kumasi Central',
    postedAt: 'Mar 20, 16:12',
    postedTimestamp: Date.now() - 100000000,
    imageUrl: 'https://images.unsplash.com/photo-1631541119392-e700300f689c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Compact 9 BTU cooling unit.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac3_gh',
    title: 'Air conditioning unit',
    price: 500,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Tema Community 1',
    postedAt: 'Today, 1:12',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Wall mounted unit.',
    status: 'Active',
    isEscrowProtected: false,
    isEasyDelivery: false,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac4_gh',
    title: 'Samsung Windfree 12,000 BTU air conditioner',
    price: 1799,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Airport Residential',
    postedAt: 'Mar 20, 18:08',
    postedTimestamp: Date.now() - 90000000,
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png',
    vendorId: 'v1',
    description: 'Premium Samsung Windfree technology.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac5_gh',
    title: 'New Consul window air conditioner with remote...',
    price: 1590,
    oldPrice: 1790,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Spintex Road',
    postedAt: 'Today, 0:57',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1631541119392-e700300f689c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Includes remote and installation kit.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: false,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },

  // VEHICLES (5 ITEMS)
  {
    id: 'v1_car',
    title: '2022 Toyota Land Cruiser 300 V6',
    price: 1250000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: '2h ago',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    requiresMultisig: true,
    description: 'Pristine condition, full option.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v2_car',
    title: 'Mercedes-Benz G63 AMG 2023',
    price: 2850000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'East Legon',
    postedAt: '1h ago',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    requiresMultisig: true,
    description: 'Ultimate luxury performance.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v3_car',
    title: 'BMW X5 xDrive40i 2024',
    price: 950000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Spintex',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Latest model BMW X5.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v4_car',
    title: 'Range Rover Sport SVR 2022',
    price: 1450000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Tema',
    postedAt: '4h ago',
    postedTimestamp: Date.now() - 14400000,
    imageUrl: 'https://images.unsplash.com/photo-1606148632362-0ef350a2f5a1?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'High performance luxury SUV.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v5_car',
    title: 'Audi Q8 Quattro 2023',
    price: 820000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Cantonments',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Elegant luxury SUV.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
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
