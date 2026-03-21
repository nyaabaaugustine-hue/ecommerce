
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
  // HIGH FIDELITY LAPTOPS (EXTRACTED)
  {
    id: 'lp1',
    title: 'HP Spectre x360 Luxury Node',
    price: 8500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Ashanti Region',
    postedAt: 'Today, 10:15',
    postedTimestamp: Date.now() - 100000,
    imageUrl: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Ultra-slim professional laptop with OLED display. Extracted from authorized hardware registry.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i7', '16GB RAM', '512GB SSD'],
    seller: { id: 's30', name: 'Kwame Tech', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2022', avatar: 'https://i.pravatar.cc/150?u=lp1', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'lp2',
    title: 'MacBook Air M2 Midnight',
    price: 9200,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Greater Accra Region',
    postedAt: 'Today, 09:45',
    postedTimestamp: Date.now() - 200000,
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ec6ceea2bd?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Powerful and portable M2 chip MacBook. Condition: Vault Level.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['M2 Chip', '8-Core GPU', 'Liquid Retina'],
    seller: { id: 's31', name: 'Abena Laptops', type: 'Business Vendor', rating: 4.8, isVerified: true, joinDate: '2023', avatar: 'https://i.pravatar.cc/150?u=lp2', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'lp3',
    title: 'Dell XPS 15 InfinityEdge',
    price: 12500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Central Region',
    postedAt: 'Yesterday, 18:20',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785bf67e45?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'High-performance workstation extracted from premium inventory.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i9', '32GB RAM', 'RTX 4060'],
    seller: { id: 's32', name: 'Yaw Enterprise', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2021', avatar: 'https://i.pravatar.cc/150?u=lp3', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'lp4',
    title: 'Lenovo ThinkPad X1 Carbon',
    price: 7800,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Ashanti Region',
    postedAt: '2h ago',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'The business standard for productivity and durability.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i5', '16GB RAM', 'Carbon Fiber'],
    seller: { id: 's33', name: 'Efya Gadgets', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022', avatar: 'https://i.pravatar.cc/150?u=lp4', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'lp5',
    title: 'Asus ROG Zephyrus G14',
    price: 11000,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Greater Accra Region',
    postedAt: 'Just Now',
    postedTimestamp: Date.now() - 60000,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Compact gaming beast with Anime Matrix display.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Ryzen 9', '16GB RAM', 'RTX 4050'],
    seller: { id: 's34', name: 'Gaming Hub GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', avatar: 'https://i.pravatar.cc/150?u=lp5', phone: '0541988383', whatsapp: '233541988383' }
  },

  // IPHONES (EXTRACTED FROM OLX SEARCH PROMPT)
  {
    id: 'ip1',
    title: 'iPhone 15 Pro Max 256GB Titanium',
    price: 14200,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Airport Residential, Accra',
    postedAt: 'Today, 14:30',
    postedTimestamp: Date.now() - 500000,
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Pristine condition iPhone 15 Pro Max. Extracted from verified reseller. All original accessories included.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's40', name: 'iStore Ghana', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2019', avatar: 'https://i.pravatar.cc/150?u=ip1', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ip2',
    title: 'iPhone 14 128GB Blue - Local Warranty',
    price: 8500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'East Legon, Accra',
    postedAt: '1h ago',
    postedTimestamp: Date.now() - 3600000,
    imageUrl: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Unlocked iPhone 14. Extracted inventory from Melcom Hub. 12 months warranty.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's41', name: 'Gadget Home', type: 'Business Vendor', rating: 4.8, isVerified: true, joinDate: '2021', avatar: 'https://i.pravatar.cc/150?u=ip2', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ip3',
    title: 'iPhone 13 Mini Pink - Boxed',
    price: 5200,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Osu, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Rare iPhone 13 Mini. Compact size, huge power. Extracted from private collection.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's42', name: 'Pink Gadgets', type: 'Individual', rating: 4.5, isVerified: true, joinDate: '2023', avatar: 'https://i.pravatar.cc/150?u=ip3', phone: '0541988383', whatsapp: '233541988383' }
  },

  // VEHICLES
  {
    id: 'v_h1',
    title: 'Hyundai HB20X Style 1.6 Flex 16V Aut. 2015',
    price: 57000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 100000,
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
    postedTimestamp: Date.now() - 200000,
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
    title: 'Harley-Davidson Iron 1200 (XL1200NS) 2019...',
    price: 44900,
    oldPrice: 47900,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Osu, Accra',
    postedAt: 'Today, 2:53',
    postedTimestamp: Date.now() - 300000,
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Iconic Iron 1200, custom exhaust nodes.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },

  // REAL ESTATE
  {
    id: 're1',
    title: 'Apartment-style house in Airport Residential',
    price: 450000,
    isNegotiable: true,
    category: 'Property',
    location: 'Airport Residential',
    postedAt: 'Today, 3:15',
    postedTimestamp: Date.now() - 1000000,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Modern duplex with high-end finishes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },

  // AIR CONDITIONERS
  {
    id: 'ac1',
    title: 'Philco 12000 BTU Eco Inverter',
    price: 3200,
    oldPrice: 3800,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Spintex',
    postedAt: 'Today, 1:12',
    postedTimestamp: Date.now() - 4000000,
    imageUrl: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'High efficiency inverter AC.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  }
];

export const VENDORS = [
  {
    id: 'v1',
    name: 'Melcom Digital',
    category: 'Electronics',
    description: "Ghana's leading electronics and lifestyle destination.",
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
  },
  {
    id: 'v3',
    name: 'AutoTrust Motors',
    category: 'Vehicles',
    description: 'Verified pre-owned and luxury vehicles in Accra.',
    logoUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=600&auto=format&fit=crop',
    bgUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    itemsCount: 45,
    fidelityScore: 99,
    joinedYear: '2021'
  }
];
