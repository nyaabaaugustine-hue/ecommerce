
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
  imageHint: string;
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
  { id: 'u1', name: 'Chief Protocol Officer', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Melcom General Manager', email: 'vendor@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Head of Logistics Node', email: 'staff@logistics.com', role: 'VENDOR_STAFF', fidelityScore: 100 },
  { id: 'u4', name: 'Institutional Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];

const DEFAULT_SELLER: SellerIdentity = { 
  id: 's1', 
  name: 'Melcom Digital Hub', 
  type: 'Business Vendor', 
  rating: 4.9, 
  isVerified: true, 
  joinDate: '2018',
  phone: '0541988383',
  whatsapp: '233541988383'
};

export const LISTINGS: Listing[] = [
  // LAPTOPS (5 ITEMS)
  {
    id: 'lp1',
    title: 'MacBook Pro M3 Max - Space Black Edition',
    price: 45000,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Airport Residential, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-lp1/800/600',
    imageHint: 'macbook pro',
    vendorId: 'v1',
    description: 'Direct import, factory sealed. 14-core CPU, 30-core GPU.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['M3 Max', '32GB RAM', '1TB SSD'],
    seller: DEFAULT_SELLER
  },
  {
    id: 'lp2',
    title: 'Dell XPS 15 InfinityEdge - Business Node',
    price: 28500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Cantonments, Accra',
    postedAt: '2h ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-lp2/800/600',
    imageHint: 'dell laptop',
    vendorId: 'v1',
    description: 'Ultra-thin bezel, institutional grade hardware.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i9', '16GB RAM', 'OLED 4K'],
    seller: DEFAULT_SELLER
  },
  {
    id: 'lp3',
    title: 'HP Spectre x360 Convertible - Luxury Gold',
    price: 18000,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'East Legon, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-lp3/800/600',
    imageHint: 'hp laptop',
    vendorId: 'v1',
    description: 'Perfect for executive presentations and creative nodes.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Core i7', '16GB RAM', 'Touchscreen'],
    seller: DEFAULT_SELLER
  },
  {
    id: 'lp4',
    title: 'Lenovo ThinkPad X1 Carbon Gen 11',
    price: 22000,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Ridge, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-lp4/800/600',
    imageHint: 'lenovo thinkpad',
    vendorId: 'v1',
    description: 'The gold standard for corporate security and durability.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['vPro v11', '32GB RAM', 'Carbon Fiber'],
    seller: DEFAULT_SELLER
  },
  {
    id: 'lp5',
    title: 'ASUS ROG Zephyrus G14 Gaming Hub',
    price: 15500,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Laptops',
    location: 'Spintex, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-lp5/800/600',
    imageHint: 'gaming laptop',
    vendorId: 'v1',
    description: 'Compact gaming powerhouse. Verified performance nodes.',
    status: 'Active',
    isEscrowProtected: true,
    specs: ['Ryzen 9', 'RTX 4060', '120Hz'],
    seller: DEFAULT_SELLER
  },

  // MOBILES (5 ITEMS)
  {
    id: 'ph1',
    title: 'iPhone 15 Pro Max Titanium - 512GB',
    price: 19500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Airport Residential, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ph1/800/600',
    imageHint: 'iphone titanium',
    vendorId: 'v1',
    description: 'Local stock with official Ghanaian warranty.',
    status: 'Active',
    isEscrowProtected: true,
    seller: DEFAULT_SELLER
  },
  {
    id: 'ph2',
    title: 'Samsung Galaxy S24 Ultra - AI Edition',
    price: 17800,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Osu, Accra',
    postedAt: '1h ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ph2/800/600',
    imageHint: 'samsung ultra',
    vendorId: 'v1',
    description: 'Brand new, sealed. Authorized Melcom partner stock.',
    status: 'Active',
    isEscrowProtected: true,
    seller: DEFAULT_SELLER
  },
  {
    id: 'ph3',
    title: 'Google Pixel 8 Pro - Obsidian Node',
    price: 12500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Kumasi, Ashanti',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ph3/800/600',
    imageHint: 'google pixel',
    vendorId: 'v1',
    description: 'Pure Android experience. Vault verified hardware.',
    status: 'Active',
    isEscrowProtected: true,
    seller: DEFAULT_SELLER
  },
  {
    id: 'ph4',
    title: 'OnePlus 12 - Emerald Forest 512GB',
    price: 11000,
    isNegotiable: true,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'Tema, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ph4/800/600',
    imageHint: 'oneplus phone',
    vendorId: 'v1',
    description: 'Fastest charging smartphone in the registry.',
    status: 'Active',
    isEscrowProtected: true,
    seller: DEFAULT_SELLER
  },
  {
    id: 'ph5',
    title: 'Nothing Phone (2) - Glyph Design',
    price: 8500,
    isNegotiable: false,
    category: 'Electronics',
    subcategory: 'Mobiles',
    location: 'East Legon, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ph5/800/600',
    imageHint: 'nothing phone',
    vendorId: 'v1',
    description: 'Unique lighting protocol. Premium aesthetic.',
    status: 'Active',
    isEscrowProtected: true,
    seller: DEFAULT_SELLER
  },

  // VEHICLES (5 ITEMS)
  {
    id: 'v1',
    title: 'Toyota Land Cruiser V8 - 2024 Model',
    price: 1850000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Airport Residential, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-v1/800/600',
    imageHint: 'luxury suv',
    vendorId: 'v3',
    description: 'Full luxury trim, armored glass option included.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's3', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v2',
    title: 'Mercedes-Benz G63 AMG - Edition 1',
    price: 2450000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Cantonments, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-v2/800/600',
    imageHint: 'mercedes g-wagon',
    vendorId: 'v3',
    description: 'Matte black finish, ultra-low mileage.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's3', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v3',
    title: 'Range Rover Sport - 2023 Dynamic',
    price: 1650000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'East Legon, Accra',
    postedAt: '2h ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-v3/800/600',
    imageHint: 'range rover',
    vendorId: 'v3',
    description: 'Panoramic roof, massage seats, Meridian sound node.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v4',
    title: 'Hyundai Tucson - 2024 Luxury Hub',
    price: 450000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'Spintex, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-v4/800/600',
    imageHint: 'hyundai suv',
    vendorId: 'v3',
    description: 'Clean automatic SUV, perfect for families.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'v5',
    title: 'Kantanka Amoanim - Locally Assembled',
    price: 185000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Kumasi, Ashanti',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-v5/800/600',
    imageHint: 'kantanka car',
    vendorId: 'v3',
    description: 'Ghanaian pride. Reliable and easy to maintain.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' }
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
    imageUrl: 'https://picsum.photos/seed/gh-ag1/800/600',
    imageHint: 'farm tractor',
    vendorId: 'v4',
    description: 'High-performance utility tractor for large-scale farms.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag2',
    title: 'Hydroponic Greenhouse Kit - Elite Node',
    price: 15000,
    isNegotiable: false,
    category: 'Agriculture',
    location: 'Tema, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ag2/800/600',
    imageHint: 'hydroponic farm',
    vendorId: 'v4',
    description: 'Modern indoor farming setup. Fast installation.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag3',
    title: 'Cocoa Drier Professional - Solar Hub',
    price: 8500,
    isNegotiable: true,
    category: 'Agriculture',
    location: 'Koforidua, Eastern',
    postedAt: '2 days ago',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ag3/800/600',
    imageHint: 'solar dryer',
    vendorId: 'v4',
    description: 'Accelerate your cocoa processing with solar nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag4',
    title: 'Hybrid Maize Seeds - Bulk Registry',
    price: 2500,
    isNegotiable: false,
    category: 'Agriculture',
    location: 'Tamale, Northern',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ag4/800/600',
    imageHint: 'maize farm',
    vendorId: 'v4',
    description: 'High-yield seeds for the Northern farming nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },
  {
    id: 'ag5',
    title: 'Automated Poultry Feeding System',
    price: 12000,
    isNegotiable: true,
    category: 'Agriculture',
    location: 'Osu, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-ag5/800/600',
    imageHint: 'poultry farm',
    vendorId: 'v4',
    description: 'Scale your poultry business with AI feeding.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's4', name: 'AgroPrime Ghana', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' }
  },

  // FASHION (5 ITEMS)
  {
    id: 'fa1',
    title: 'Authentic Hand-Woven Kente - Royal Node',
    price: 4500,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Kumasi, Ashanti',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-fa1/800/600',
    imageHint: 'kente fabric',
    vendorId: 'v5',
    description: 'Bonwire Kente for prestige institutional events.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's5', name: 'Heritage Fashion', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'fa2',
    title: 'Custom Tailored Smock - Northern Hub',
    price: 1200,
    isNegotiable: false,
    category: 'Fashion',
    location: 'Tamale, Northern',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-fa2/800/600',
    imageHint: 'ghanaian smock',
    vendorId: 'v5',
    description: 'Hand-made smock with traditional thread nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's5', name: 'Heritage Fashion', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'fa3',
    title: 'Designer African Print Suit - Accra Style',
    price: 2800,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Airport Residential, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-fa3/800/600',
    imageHint: 'african suit',
    vendorId: 'v5',
    description: 'Modern silhouette with traditional Ghanaian motifs.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's5', name: 'Heritage Fashion', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'fa4',
    title: 'Luxury Leather Sandals - Kumasi Craft',
    price: 850,
    isNegotiable: false,
    category: 'Fashion',
    location: 'Kumasi, Ashanti',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-fa4/800/600',
    imageHint: 'leather sandals',
    vendorId: 'v5',
    description: 'High-fidelity leather nodes for durability.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's5', name: 'Heritage Fashion', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'fa5',
    title: 'Gold Plated Cufflinks - Adinkra Protocol',
    price: 1500,
    isNegotiable: true,
    category: 'Fashion',
    location: 'Osu, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-fa5/800/600',
    imageHint: 'gold cufflinks',
    vendorId: 'v5',
    description: 'Symbolic Adinkra designs for executive wear.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's5', name: 'Heritage Fashion', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' }
  },

  // SERVICES (5 ITEMS)
  {
    id: 'se1',
    title: 'Corporate Legal Audit - West Africa Node',
    price: 15000,
    isNegotiable: false,
    category: 'Services',
    location: 'Ridge, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-se1/800/600',
    imageHint: 'legal document',
    vendorId: 'v6',
    description: 'Comprehensive audit for multinational branch nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's6', name: 'LegalNode GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'se2',
    title: 'Solar Power Installation - Residential',
    price: 45000,
    isNegotiable: true,
    category: 'Services',
    location: 'East Legon, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-se2/800/600',
    imageHint: 'solar panels',
    vendorId: 'v6',
    description: 'Go off-grid with our institutional solar systems.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's6', name: 'LegalNode GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'se3',
    title: 'Web Security Node Penetration Test',
    price: 8500,
    isNegotiable: false,
    category: 'Services',
    location: 'Cyber District, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-se3/800/600',
    imageHint: 'cyber security',
    vendorId: 'v6',
    description: 'Vulnerability analysis for fintech and commerce nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's6', name: 'LegalNode GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'se4',
    title: 'Real Estate Valuation - Official Registry',
    price: 3500,
    isNegotiable: true,
    category: 'Services',
    location: 'Airport Residential, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-se4/800/600',
    imageHint: 'house valuation',
    vendorId: 'v6',
    description: 'Certified appraisal for high-value properties.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's6', name: 'LegalNode GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' }
  },
  {
    id: 'se5',
    title: 'Corporate Event Protocol Management',
    price: 12000,
    isNegotiable: false,
    category: 'Services',
    location: 'Cantonments, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-se5/800/600',
    imageHint: 'event management',
    vendorId: 'v6',
    description: 'Elite protocol and logistics for institutional events.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's6', name: 'LegalNode GH', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' }
  },

  // SPORTS (5 ITEMS)
  {
    id: 'sp1',
    title: 'TechnoGym Treadmill - Performance Node',
    price: 12500,
    isNegotiable: true,
    category: 'Sports',
    location: 'East Legon, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-sp1/800/600',
    imageHint: 'treadmill gym',
    vendorId: 'v7',
    description: 'Institutional grade running node for home gyms.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's7', name: 'SportHub Accra', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp2',
    title: 'Olympic Dumbbell Set - 50kg Hub',
    price: 3500,
    isNegotiable: false,
    category: 'Sports',
    location: 'Osu, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-sp2/800/600',
    imageHint: 'dumbbells weights',
    vendorId: 'v7',
    description: 'Calibrated iron nodes for professional strength.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's7', name: 'SportHub Accra', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp3',
    title: 'Road Bike Carbon Fiber - Elite Hub',
    price: 8200,
    isNegotiable: true,
    category: 'Sports',
    location: 'Aburi Hills, Eastern',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-sp3/800/600',
    imageHint: 'road bike',
    vendorId: 'v7',
    description: 'Ultra-light frame for Aburi hill nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's7', name: 'SportHub Accra', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp4',
    title: 'Full Basketball Court Setup - Outdoor',
    price: 25000,
    isNegotiable: false,
    category: 'Sports',
    location: 'Tema, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-sp4/800/600',
    imageHint: 'basketball hoop',
    vendorId: 'v7',
    description: 'Institutional grade hoop and court surfacing.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's7', name: 'SportHub Accra', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },
  {
    id: 'sp5',
    title: 'Professional Boxing Ring Node',
    price: 18000,
    isNegotiable: true,
    category: 'Sports',
    location: 'Bukom, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-sp5/800/600',
    imageHint: 'boxing ring',
    vendorId: 'v7',
    description: 'Competition standard ring for boxing nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's7', name: 'SportHub Accra', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' }
  },

  // PROPERTY (5 ITEMS)
  {
    id: 'pr1',
    title: 'Luxury 5-Bedroom Villa - Airport Residential',
    price: 8500000,
    isNegotiable: true,
    category: 'Property',
    location: 'Airport Residential, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-pr1/800/600',
    imageHint: 'luxury villa',
    vendorId: 'v2',
    description: 'Elite residential node with swimming pool and gym.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's2', name: 'PrimeEstate GH', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'pr2',
    title: 'Commercial Office Node - Ridge Financial',
    price: 12000000,
    isNegotiable: false,
    category: 'Property',
    location: 'Ridge, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-pr2/800/600',
    imageHint: 'office building',
    vendorId: 'v2',
    description: 'Multi-story office complex for institutional tenants.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeEstate GH', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'pr3',
    title: 'Serviced 3-Bedroom Penthouse - Cantonments',
    price: 4500000,
    isNegotiable: true,
    category: 'Property',
    location: 'Cantonments, Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-pr3/800/600',
    imageHint: 'penthouse apartment',
    vendorId: 'v2',
    description: 'Panoramic views of the capital. Vault condition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeEstate GH', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'pr4',
    title: 'Industrial Warehouse Node - Tema Harbor',
    price: 6500000,
    isNegotiable: true,
    category: 'Property',
    location: 'Tema, Accra',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-pr4/800/600',
    imageHint: 'warehouse factory',
    vendorId: 'v2',
    description: 'High-density storage for regional trade nodes.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeEstate GH', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' }
  },
  {
    id: 'pr5',
    title: 'Residential Plot - East Legon Hills',
    price: 1200000,
    isNegotiable: false,
    category: 'Property',
    location: 'East Legon, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now(),
    imageUrl: 'https://picsum.photos/seed/gh-pr5/800/600',
    imageHint: 'land plot',
    vendorId: 'v2',
    description: 'Prime land node for high-end development.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's2', name: 'PrimeEstate GH', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' }
  }
];

export const VENDORS = [
  {
    id: 'v1',
    name: 'Melcom Digital Hub',
    category: 'Electronics',
    description: "Ghana's premier electronics and technical node hub.",
    logoUrl: 'https://picsum.photos/seed/gh-logo1/200/200',
    bgUrl: 'https://picsum.photos/seed/gh-vbg1/800/400',
    rating: 4.9,
    itemsCount: 1240,
    fidelityScore: 98,
    joinedYear: '2018'
  },
  {
    id: 'v2',
    name: 'PrimeEstate GH',
    category: 'Property',
    description: 'Verified luxury real estate and institutional assets.',
    logoUrl: 'https://picsum.photos/seed/gh-logo2/200/200',
    bgUrl: 'https://picsum.photos/seed/gh-vbg2/800/400',
    rating: 5.0,
    itemsCount: 85,
    fidelityScore: 100,
    joinedYear: '2020'
  },
  {
    id: 'v3',
    name: 'AutoTrust Motors',
    category: 'Vehicles',
    description: 'Authorized pre-owned vehicle nodes and spare parts.',
    logoUrl: 'https://picsum.photos/seed/gh-logo3/200/200',
    bgUrl: 'https://picsum.photos/seed/gh-vbg3/800/400',
    rating: 4.9,
    itemsCount: 45,
    fidelityScore: 99,
    joinedYear: '2021'
  }
];
