
export type SellerType = 'Individual' | 'Verified Dealer' | 'Business Vendor';
export type ListingCategory = 'Vehicles' | 'Property' | 'Electronics' | 'Home & Furniture' | 'Jobs' | 'Services' | 'Fashion' | 'Agriculture' | 'Sports' | 'Other';
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
  avatar?: string;
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
  subcategory?: string;
  location: string;
  postedAt: string;
  postedTimestamp: number;
  imageUrl: string;
  images?: string[];
  seller: SellerIdentity;
  vendorId: string;
  description: string;
  status: ListingStatus;
  isEscrowProtected: boolean;
  isEasyDelivery?: boolean;
  isFreeShipping?: boolean;
  requiresMultisig?: boolean;
  isEmphasis?: boolean;
  specs?: string[];
}

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Vendor Admin', email: 'vendor@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Logistics Node', email: 'staff@logistics.com', role: 'VENDOR_STAFF', fidelityScore: 100 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

export const LISTINGS: Listing[] = [
  // VEHICLES (5 ITEMS)
  {
    id: 'v_h1',
    title: 'Hyundai HB20X Style 1.6 Flex 16V Aut. 2015',
    price: 57000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/v1/800/600',
    vendorId: 'v3',
    description: 'Clean automatic hatchback, full service history.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v_p1',
    title: 'Volkswagen Polo Highline TSI 1.0 Flex 12V Aut.',
    price: 99990,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Cantonments, Accra',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/v2/800/600',
    vendorId: 'v3',
    description: 'Turbocharged Polo in pristine condition.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v_hd1',
    title: 'Harley-Davidson Iron 1200 (XL1200NS) 2019',
    price: 44900,
    oldPrice: 47900,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Osu, Accra',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/v3/800/600',
    vendorId: 'v3',
    description: 'Iconic Iron 1200, custom exhaust nodes.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v_t1',
    title: 'Toyota Hilux GR-S 4x4 2024 Premium',
    price: 385000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'East Legon',
    postedAt: 'Today, 1:15',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/v4/800/600',
    vendorId: 'v3',
    description: 'Brand new GR-S trim, ultimate off-road power.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v_m1',
    title: 'Mercedes-Benz C300 AMG 2022 Sport',
    price: 450000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Ridge, Accra',
    postedAt: 'Today, 10:00',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/v5/800/600',
    vendorId: 'v3',
    description: 'Premium luxury sedan with full options.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },

  // LAPTOPS (5 ITEMS)
  {
    id: 'lp1',
    title: 'HP Spectre x360 Luxury Hub',
    price: 8500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Ashanti Region',
    postedAt: 'Today, 10:15',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/lp1/800/600',
    vendorId: 'v1',
    description: 'Ultra-slim professional laptop.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i7', '16GB RAM', '512GB SSD'],
    seller: { id: 's30', name: 'Kwame Tech', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2022', avatar: 'https://i.pravatar.cc/150?u=lp1' }
  },
  {
    id: 'lp2',
    title: 'MacBook Air M2 Midnight Pro',
    price: 9200,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Greater Accra',
    postedAt: 'Today, 09:45',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/lp2/800/600',
    vendorId: 'v1',
    description: 'M2 chip powerhouse.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['M2 Chip', '8GB RAM', 'Liquid Retina'],
    seller: { id: 's31', name: 'Abena Laptops', type: 'Business Vendor', rating: 4.8, isVerified: true, joinDate: '2023', avatar: 'https://i.pravatar.cc/150?u=lp2' }
  },
  {
    id: 'lp3',
    title: 'Dell XPS 15 InfinityEdge Elite',
    price: 12500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Central Region',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/lp3/800/600',
    vendorId: 'v1',
    description: 'Stunning display workstation.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i9', '32GB RAM', 'RTX 4060'],
    seller: { id: 's32', name: 'Yaw Enterprise', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021', avatar: 'https://i.pravatar.cc/150?u=lp3' }
  },
  {
    id: 'lp4',
    title: 'Lenovo ThinkPad X1 Carbon Gen 11',
    price: 7800,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Ashanti Region',
    postedAt: '2h ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/lp4/800/600',
    vendorId: 'v1',
    description: 'Ultimate business laptop.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i5', '16GB RAM', 'Carbon Fiber'],
    seller: { id: 's33', name: 'Efya Gadgets', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022', avatar: 'https://i.pravatar.cc/150?u=lp4' }
  },
  {
    id: 'lp5',
    title: 'Asus ROG Zephyrus G14 Gaming',
    price: 11000,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Greater Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/lp5/800/600',
    vendorId: 'v1',
    description: 'Compact gaming beast.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Ryzen 9', '16GB RAM', 'RTX 4050'],
    seller: { id: 's34', name: 'Gaming Hub', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', avatar: 'https://i.pravatar.cc/150?u=lp5' }
  },

  // PHONES - EXTRACTED IPHONES (5 ITEMS)
  {
    id: 'ph1',
    title: 'iPhone 15 Pro Max Titanium 512GB',
    price: 18500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Airport Residential',
    postedAt: 'Today, 14:20',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ph1/800/600',
    vendorId: 'v1',
    description: 'Brand new factory sealed, natural titanium.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph2',
    title: 'iPhone 14 Pro Deep Purple 256GB',
    price: 12200,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Kumasi',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ph2/800/600',
    vendorId: 'v1',
    description: 'Immaculate condition, 100% battery health.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph3',
    title: 'iPhone 13 Starlight 128GB',
    price: 7500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Osu',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ph3/800/600',
    vendorId: 'v1',
    description: 'Perfect budget flagship.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph4',
    title: 'iPhone 15 Blue 128GB - Sealed',
    price: 11000,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Cantonments',
    postedAt: '2 days ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ph4/800/600',
    vendorId: 'v1',
    description: 'Official warranty included.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph5',
    title: 'iPhone 12 Pro Pacific Blue 128GB',
    price: 6800,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'East Legon',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ph5/800/600',
    vendorId: 'v1',
    description: 'Vault condition, verified hardware.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },

  // AGRICULTURE (5 ITEMS)
  {
    id: 'ag1',
    title: 'John Deere 5075E Utility Tractor',
    price: 125000,
    isNegotiable: true,
    category: 'Agriculture',
    location: 'Kumasi, Ashanti',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ag1/800/600',
    vendorId: 'v4',
    description: 'Powerful 75HP tractor for large-scale farming.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's60', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag2',
    title: 'Hydroponic Greenhouse Kit Elite',
    price: 15000,
    isNegotiable: false,
    category: 'Agriculture',
    location: 'Tema, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ag2/800/600',
    vendorId: 'v4',
    description: 'Full vertical farming setup.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's60', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag3',
    title: 'Organic Fertilizer Bulk Node (50 Bags)',
    price: 4500,
    isNegotiable: true,
    category: 'Agriculture',
    location: 'Tamale, Northern',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ag3/800/600',
    vendorId: 'v4',
    description: 'High-grade NPK organic blend.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's60', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag4',
    title: 'Solar Powered Irrigation Pump',
    price: 8200,
    isNegotiable: false,
    category: 'Agriculture',
    location: 'Volta Region',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ag4/800/600',
    vendorId: 'v4',
    description: 'Maintenance-free solar water system.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's60', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag5',
    title: 'Hybrid Cocoa Seedlings (1000 Units)',
    price: 3500,
    isNegotiable: true,
    category: 'Agriculture',
    location: 'Eastern Region',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/ag5/800/600',
    vendorId: 'v4',
    description: 'Fast-growing high-yield variety.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's60', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },

  // FASHION (5 ITEMS)
  {
    id: 'fa1',
    title: 'Rolex Submariner Date 2023',
    price: 185000,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Airport Residential',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/fa1/800/600',
    vendorId: 'v5',
    description: 'Pristine condition, box and papers.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'fa2',
    title: 'Louis Vuitton Keepall 55 Bandoulière',
    price: 22000,
    isNegotiable: false,
    category: 'Fashion',
    location: 'Cantonments',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/fa2/800/600',
    vendorId: 'v5',
    description: 'Classic Monogram Canvas travel bag.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'fa3',
    title: 'Nike Air Jordan 1 Retro High OG',
    price: 4500,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Osu',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/fa3/800/600',
    vendorId: 'v5',
    description: 'Chicago Reimagined edition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'fa4',
    title: 'Ray-Ban Wayfarer Classic Black',
    price: 1800,
    isNegotiable: false,
    category: 'Fashion',
    location: 'East Legon',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/fa4/800/600',
    vendorId: 'v5',
    description: 'Polarized lenses, authentic vault stock.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'fa5',
    title: 'Hermès Birkin 30 Gold Hardware',
    price: 350000,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Ridge',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/fa5/800/600',
    vendorId: 'v5',
    description: 'The ultimate fashion investment.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  }
];

export const VENDORS = [
  {
    id: 'v1',
    name: 'Melcom Digital',
    category: 'Electronics',
    description: "Leading electronics destination.",
    logoUrl: 'https://picsum.photos/seed/vlogo1/200/200',
    bgUrl: 'https://picsum.photos/seed/vbg1/800/400',
    rating: 4.9,
    itemsCount: 1240,
    fidelityScore: 98,
    joinedYear: '2018'
  },
  {
    id: 'v2',
    name: 'PrimeEstate GH',
    category: 'Property',
    description: 'Luxury real estate assets.',
    logoUrl: 'https://picsum.photos/seed/vlogo2/200/200',
    bgUrl: 'https://picsum.photos/seed/vbg2/800/400',
    rating: 5.0,
    itemsCount: 85,
    fidelityScore: 100,
    joinedYear: '2020'
  },
  {
    id: 'v3',
    name: 'AutoTrust Motors',
    category: 'Vehicles',
    description: 'Verified pre-owned vehicles.',
    logoUrl: 'https://picsum.photos/seed/vlogo3/200/200',
    bgUrl: 'https://picsum.photos/seed/vbg3/800/400',
    rating: 4.9,
    itemsCount: 45,
    fidelityScore: 99,
    joinedYear: '2021'
  }
];
