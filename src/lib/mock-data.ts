
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
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c1bae4ce1?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1586191582151-f73872dfd183?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ec6ceea2bd?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785bf67e45?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1603919306380-dc79375a3a80?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1594494818044-8fa90700cc35?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1599409674493-25bc606e50c8?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v5',
    description: 'The ultimate fashion investment.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's70', name: 'Elite Horology', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021' }
  },

  // SERVICES (5 ITEMS)
  {
    id: 'sr1',
    title: 'Professional Corporate Audit Services',
    price: 15000,
    isNegotiable: true,
    category: 'Services',
    location: 'Ridge Financial Hub',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v6',
    description: 'Certified financial and risk analysis.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's80', name: 'Apex Consulting', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2017' }
  },
  {
    id: 'sr2',
    title: 'Full Stack Web Development Node',
    price: 8500,
    isNegotiable: true,
    category: 'Services',
    location: 'Remote / Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v6',
    description: 'Next.js, React, and Backend architecture.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's80', name: 'Apex Consulting', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2017' }
  },
  {
    id: 'sr3',
    title: 'Industrial Cleaning & Disinfection',
    price: 2500,
    isNegotiable: false,
    category: 'Services',
    location: 'Greater Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v6',
    description: 'Post-construction and warehouse sanitization.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's80', name: 'Apex Consulting', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2017' }
  },
  {
    id: 'sr4',
    title: 'Legal Registry & Land Title Search',
    price: 3200,
    isNegotiable: false,
    category: 'Services',
    location: 'Ridge',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v6',
    description: 'Verified land title verification services.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's80', name: 'Apex Consulting', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2017' }
  },
  {
    id: 'sr5',
    title: 'Interior Design & Space Planning',
    price: 12000,
    isNegotiable: true,
    category: 'Services',
    location: 'East Legon',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v6',
    description: 'Modern luxury home transformations.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's80', name: 'Apex Consulting', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2017' }
  },

  // SPORTS (5 ITEMS)
  {
    id: 'sp1',
    title: 'NordicTrack T-Series Treadmill Elite',
    price: 14500,
    isNegotiable: true,
    category: 'Sports',
    location: 'Airport Residential',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v7',
    description: 'Commercial grade home gym unit.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's90', name: 'Volt Fitness', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp2',
    title: 'Specialized Stumpjumper Mountain Bike',
    price: 8200,
    isNegotiable: true,
    category: 'Sports',
    location: 'Aburi',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ee051189032?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v7',
    description: 'Full suspension carbon frame bike.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's90', name: 'Volt Fitness', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp3',
    title: 'Adjustable Dumbbell Set (40kg)',
    price: 2800,
    isNegotiable: false,
    category: 'Sports',
    location: 'Greater Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v7',
    description: 'Quick-change weight system.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's90', name: 'Volt Fitness', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp4',
    title: 'Professional Yoga Studio Kit',
    price: 1500,
    isNegotiable: false,
    category: 'Sports',
    location: 'Osu',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v7',
    description: 'Eco-friendly mats and props.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's90', name: 'Volt Fitness', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp5',
    title: 'Basketball Hoop System Pro-Height',
    price: 5200,
    isNegotiable: true,
    category: 'Sports',
    location: 'East Legon',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200362e88bf?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v7',
    description: 'Portable heavy-duty glass backboard.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's90', name: 'Volt Fitness', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },

  // REAL ESTATE (5 ITEMS)
  {
    id: 're1',
    title: 'Apartment-style house in Airport Residential',
    price: 450000,
    isNegotiable: true,
    category: 'Property',
    location: 'Airport Residential',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Modern luxury living.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 're2',
    title: '3-Bedroom House for rent in East Legon',
    price: 4200,
    isNegotiable: false,
    category: 'Property',
    location: 'East Legon',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Spacious and secure family home.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 're3',
    title: 'Want to live in the best? Penthouse Accra',
    price: 850000,
    isNegotiable: true,
    category: 'Property',
    location: 'Cantonments',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'The peak of Accra real estate.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 're4',
    title: 'Commercial Space in Ridge Hub',
    price: 15000,
    isNegotiable: true,
    category: 'Property',
    location: 'Ridge, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Perfect for tech startups.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 're5',
    title: 'Luxury Studio Apartment in Osu',
    price: 2500,
    isNegotiable: false,
    category: 'Property',
    location: 'Osu',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Cozy and close to everything.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },

  // AIR CONDITIONERS (5 ITEMS)
  {
    id: 'ac1',
    title: 'Samsung 1.5HP Inverter AC',
    price: 4500,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Greater Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Energy saving inverter tech.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ac2',
    title: 'LG Dual Inverter 2.0HP',
    price: 6800,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Kumasi',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1591123120675-6f7f1aac447e?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Fast cooling for large rooms.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ac3',
    title: 'Midea Split Unit 1.0HP Elite',
    price: 3200,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Tema',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Compact and efficient.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ac4',
    title: 'Panasonic Nanoe-G Inverter',
    price: 5500,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Airport Residential',
    postedAt: '3 days ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1591123120675-6f7f1aac447e?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Air purifying technology.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ac5',
    title: 'Hisense 1.5HP Mirror Finish',
    price: 4800,
    isNegotiable: false,
    category: 'Electronics',
    location: 'East Legon',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Stylish black mirror design.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  }
];

export const VENDORS = [
  {
    id: 'v1',
    name: 'Melcom Digital',
    category: 'Electronics',
    description: "Leading electronics destination.",
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
    description: 'Luxury real estate assets.',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png',
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
    description: 'Verified pre-owned vehicles.',
    logoUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=600&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    itemsCount: 45,
    fidelityScore: 99,
    joinedYear: '2021'
  }
];
