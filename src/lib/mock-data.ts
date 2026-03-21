
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
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
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
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
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

  // GAME BOYS (5 ITEMS)
  {
    id: 'gb1',
    title: 'Game Boy Advance SP - Cobalt Blue',
    price: 1200,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Osu, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1531525645387-7f14be13bd32?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Backlit IPS display mod, pristine condition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's50', name: 'Retro Gamer', type: 'Individual', rating: 4.9, isVerified: true, joinDate: '2023' }
  },
  {
    id: 'gb2',
    title: 'Original Game Boy DMG-01 Classic',
    price: 850,
    isNegotiable: false,
    category: 'Electronics',
    location: 'East Legon',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'The legend from 1989. Fully functional.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's50', name: 'Retro Gamer', type: 'Individual', rating: 4.9, isVerified: true, joinDate: '2023' }
  },
  {
    id: 'gb3',
    title: 'Game Boy Color - Atomic Purple',
    price: 950,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Ridge',
    postedAt: '2 days ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Transparent shell, cleaned and serviced.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's50', name: 'Retro Gamer', type: 'Individual', rating: 4.9, isVerified: true, joinDate: '2023' }
  },
  {
    id: 'gb4',
    title: 'Game Boy Pocket - Yellow Edition',
    price: 750,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Cantonments',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Slim design, great screen.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's50', name: 'Retro Gamer', type: 'Individual', rating: 4.9, isVerified: true, joinDate: '2023' }
  },
  {
    id: 'gb5',
    title: 'Game Boy Micro - Famicom Edition',
    price: 2500,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Airport',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Extremely rare collector edition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's50', name: 'Retro Gamer', type: 'Individual', rating: 4.9, isVerified: true, joinDate: '2023' }
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

  // PHONES (5 ITEMS)
  {
    id: 'ph1',
    title: 'iPhone 15 Pro Titanium 256GB',
    price: 14500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Airport Residential',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Brand new factory sealed.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph2',
    title: 'Samsung Galaxy S24 Ultra Hub',
    price: 13800,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'East Legon',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Titanium Grey, 512GB.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph3',
    title: 'Google Pixel 8 Pro Obsidian',
    price: 9500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Ridge',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351af963?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'US Model, pure android.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph4',
    title: 'iPhone 14 Plus Blue 128GB',
    price: 8500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Osu',
    postedAt: '2 days ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Perfect condition, 100% health.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
  },
  {
    id: 'ph5',
    title: 'OnePlus 12 Global Edition',
    price: 7800,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Cantonments',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Fastest charging smartphone.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's30', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2018' }
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
