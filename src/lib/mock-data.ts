
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
  isFreeShipping?: boolean;
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
  // SPONSORED ADS (TOP PRIORITY CLONE)
  {
    id: 'sp1',
    title: 'Excellent plot/land for SALE or EXCHANGE in East Legon',
    price: 120000,
    isNegotiable: true,
    category: 'Property',
    location: 'East Legon, Accra',
    postedAt: 'Today, 2:54',
    postedTimestamp: Date.now() - 100000,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Prime land available for immediate development.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'sp2',
    title: 'Hyundai HB20X Style 1.6 Flex 16V Aut. 2015',
    price: 57000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 200000,
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Clean automatic hatchback, full service history.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'sp3',
    title: 'Volkswagen Polo Highline TSI 1.0 Flex 12V Aut.',
    price: 99990,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Cantonments, Accra',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 300000,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Turbocharged Polo in pristine condition.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'sp4',
    title: 'Harley-Davidson Iron 1200 (XL1200NS) 2019...',
    price: 44900,
    oldPrice: 47900,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Osu, Accra',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 400000,
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Iconic Iron 1200, custom exhaust nodes.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'sp5',
    title: 'Container snack bar measuring 3 by 2 meters...',
    price: 14900,
    oldPrice: 15900,
    isNegotiable: false,
    category: 'Other',
    location: 'Tema Node',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 500000,
    imageUrl: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Modular snack bar container, ready for setup.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },

  // ELECTRONICS (CELL PHONES ROW)
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

  // FURNITURE (CABINETS ROW)
  {
    id: 'f1',
    title: 'Antique Family Chest',
    price: 730,
    oldPrice: 1350,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Accra North',
    postedAt: 'Today, 1:52',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Beautiful antique wood chest.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f2',
    title: 'Modern 3-Door Wardrobe',
    price: 850,
    isNegotiable: false,
    category: 'Home & Furniture',
    location: 'Kumasi Central',
    postedAt: 'Today, 0:33',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Spacious wardrobe.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f3',
    title: 'Sliding Door Wardrobe + Mirror',
    price: 1200,
    oldPrice: 1500,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Tema Node',
    postedAt: 'Yesterday, 14:12',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Elegant bedroom storage.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f4',
    title: 'Retro 2-Door Wardrobe',
    price: 580,
    isNegotiable: false,
    category: 'Home & Furniture',
    location: 'Airport Residential',
    postedAt: 'Today, 22:07',
    postedTimestamp: Date.now() - 10000,
    imageUrl: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Minimalist retro design.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'HomeLiving GH', type: 'Business Vendor', rating: 4.7, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'f5',
    title: 'Office Cabinet Node',
    price: 450,
    isNegotiable: true,
    category: 'Home & Furniture',
    location: 'Osu, Accra',
    postedAt: 'Yesterday, 19:04',
    postedTimestamp: Date.now() - 90000000,
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v4',
    description: 'Professional office storage.',
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
    name: 'PrimeEstate GH',
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
