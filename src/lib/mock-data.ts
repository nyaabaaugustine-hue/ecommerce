
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
  { id: 'lp1', title: 'MacBook Pro M3 Max - Space Black', price: 45000, isNegotiable: true, category: 'Electronics', subcategory: 'Laptops', location: 'Airport Residential', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-lp1/800/1000', imageHint: 'laptop', vendorId: 'v1', description: 'Factory sealed. 14-core CPU.', status: 'Active', isEscrowProtected: true, specs: ['M3 Max', '32GB RAM'], seller: DEFAULT_SELLER },
  { id: 'lp2', title: 'Dell XPS 15 Business Node', price: 28500, isNegotiable: false, category: 'Electronics', subcategory: 'Laptops', location: 'Cantonments', postedAt: '2h ago', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-lp2/800/1000', imageHint: 'laptop', vendorId: 'v1', description: 'Institutional grade hardware.', status: 'Active', isEscrowProtected: true, specs: ['Core i9', '16GB RAM'], seller: DEFAULT_SELLER },
  { id: 'lp3', title: 'HP Spectre x360 Luxury Gold', price: 18000, isNegotiable: true, category: 'Electronics', subcategory: 'Laptops', location: 'East Legon', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-lp3/800/1000', imageHint: 'laptop', vendorId: 'v1', description: 'Executive presentation node.', status: 'Active', isEscrowProtected: true, specs: ['Core i7', 'Touchscreen'], seller: DEFAULT_SELLER },
  { id: 'lp4', title: 'Lenovo ThinkPad X1 Carbon Gen 11', price: 22000, isNegotiable: false, category: 'Electronics', subcategory: 'Laptops', location: 'Ridge', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-lp4/800/1000', imageHint: 'laptop', vendorId: 'v1', description: 'Gold standard security.', status: 'Active', isEscrowProtected: true, specs: ['Carbon Fiber', '32GB RAM'], seller: DEFAULT_SELLER },
  { id: 'lp5', title: 'ASUS ROG Zephyrus G14 Gaming', price: 15500, isNegotiable: true, category: 'Electronics', subcategory: 'Laptops', location: 'Spintex', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-lp5/800/1000', imageHint: 'laptop', vendorId: 'v1', description: 'Compact gaming powerhouse.', status: 'Active', isEscrowProtected: true, specs: ['Ryzen 9', 'RTX 4060'], seller: DEFAULT_SELLER },

  // MOBILES (5 ITEMS)
  { id: 'ph1', title: 'iPhone 15 Pro Max Titanium', price: 19500, isNegotiable: false, category: 'Electronics', subcategory: 'Mobiles', location: 'Airport Residential', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ph1/800/1200', imageHint: 'iphone', vendorId: 'v1', description: 'Official Ghanaian warranty.', status: 'Active', isEscrowProtected: true, seller: DEFAULT_SELLER },
  { id: 'ph2', title: 'Samsung Galaxy S24 Ultra AI', price: 17800, isNegotiable: true, category: 'Electronics', subcategory: 'Mobiles', location: 'Osu', postedAt: '1h ago', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ph2/800/1200', imageHint: 'samsung', vendorId: 'v1', description: 'Authorized partner stock.', status: 'Active', isEscrowProtected: true, seller: DEFAULT_SELLER },
  { id: 'ph3', title: 'Google Pixel 8 Pro Obsidian', price: 12500, isNegotiable: false, category: 'Electronics', subcategory: 'Mobiles', location: 'Kumasi', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ph3/800/1200', imageHint: 'pixel', vendorId: 'v1', description: 'Pure Android experience.', status: 'Active', isEscrowProtected: true, seller: DEFAULT_SELLER },
  { id: 'ph4', title: 'OnePlus 12 Emerald Forest', price: 11000, isNegotiable: true, category: 'Electronics', subcategory: 'Mobiles', location: 'Tema', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ph4/800/1200', imageHint: 'oneplus', vendorId: 'v1', description: 'Fastest charging node.', status: 'Active', isEscrowProtected: true, seller: DEFAULT_SELLER },
  { id: 'ph5', title: 'Nothing Phone (2) Glyph', price: 8500, isNegotiable: false, category: 'Electronics', subcategory: 'Mobiles', location: 'East Legon', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ph5/800/1200', imageHint: 'nothing', vendorId: 'v1', description: 'Unique lighting protocol.', status: 'Active', isEscrowProtected: true, seller: DEFAULT_SELLER },

  // VEHICLES (5 ITEMS)
  { id: 'v1', title: 'Toyota Land Cruiser V8 2024', price: 1850000, isNegotiable: true, category: 'Vehicles', location: 'Airport Residential', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-v1/800/1200', imageHint: 'suv', vendorId: 'v3', description: 'Full luxury trim.', status: 'Active', isEscrowProtected: true, isEmphasis: true, seller: { id: 's3', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'v2', title: 'Mercedes-Benz G63 AMG', price: 2450000, isNegotiable: false, category: 'Vehicles', location: 'Cantonments', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-v2/800/1200', imageHint: 'gwagon', vendorId: 'v3', description: 'Matte black finish.', status: 'Active', isEscrowProtected: true, isEmphasis: true, seller: { id: 's3', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'v3', title: 'Range Rover Sport 2023', price: 1650000, isNegotiable: true, category: 'Vehicles', location: 'East Legon', postedAt: '2h ago', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-v3/800/1200', imageHint: 'rover', vendorId: 'v3', description: 'Panoramic roof.', status: 'Active', isEscrowProtected: true, seller: { id: 's3', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'v4', title: 'Hyundai Tucson 2024 Luxury', price: 450000, isNegotiable: false, category: 'Vehicles', location: 'Spintex', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-v4/800/1200', imageHint: 'tucson', vendorId: 'v3', description: 'Clean automatic SUV.', status: 'Active', isEscrowProtected: true, seller: { id: 's3', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'v5', title: 'Kantanka Amoanim Local', price: 185000, isNegotiable: true, category: 'Vehicles', location: 'Kumasi', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-v5/800/1200', imageHint: 'kantanka', vendorId: 'v3', description: 'Ghanaian pride.', status: 'Active', isEscrowProtected: true, seller: { id: 's3', name: 'AutoTrust', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021' } },

  // AGRICULTURE (5 ITEMS)
  { id: 'ag1', title: 'John Deere 5075E Tractor', price: 125000, isNegotiable: true, category: 'Agriculture', location: 'Kumasi', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ag1/800/1200', imageHint: 'tractor', vendorId: 'v4', description: 'High-performance utility.', status: 'Active', isEscrowProtected: true, seller: { id: 's4', name: 'AgroPrime', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' } },
  { id: 'ag2', title: 'Hydroponic Greenhouse Kit', price: 15000, isNegotiable: false, category: 'Agriculture', location: 'Tema', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ag2/800/1200', imageHint: 'hydro', vendorId: 'v4', description: 'Indoor farming setup.', status: 'Active', isEscrowProtected: true, seller: { id: 's4', name: 'AgroPrime', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' } },
  { id: 'ag3', title: 'Cocoa Drier Solar Hub', price: 8500, isNegotiable: true, category: 'Agriculture', location: 'Koforidua', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ag3/800/1200', imageHint: 'drier', vendorId: 'v4', description: 'Solar nodes for cocoa.', status: 'Active', isEscrowProtected: true, seller: { id: 's4', name: 'AgroPrime', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' } },
  { id: 'ag4', title: 'Hybrid Maize Seeds Bulk', price: 2500, isNegotiable: false, category: 'Agriculture', location: 'Tamale', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ag4/800/1200', imageHint: 'seeds', vendorId: 'v4', description: 'High-yield nodes.', status: 'Active', isEscrowProtected: true, seller: { id: 's4', name: 'AgroPrime', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' } },
  { id: 'ag5', title: 'Automated Poultry Feeder', price: 12000, isNegotiable: true, category: 'Agriculture', location: 'Osu', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-ag5/800/1200', imageHint: 'poultry', vendorId: 'v4', description: 'AI feeding protocol.', status: 'Active', isEscrowProtected: true, seller: { id: 's4', name: 'AgroPrime', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2019' } },

  // FASHION (5 ITEMS)
  { id: 'fa1', title: 'Hand-Woven Royal Kente', price: 4500, isNegotiable: true, category: 'Fashion', location: 'Kumasi', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-fa1/800/1200', imageHint: 'kente', vendorId: 'v5', description: 'Bonwire prestige node.', status: 'Active', isEscrowProtected: true, seller: { id: 's5', name: 'Heritage', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'fa2', title: 'Custom Northern Smock', price: 1200, isNegotiable: false, category: 'Fashion', location: 'Tamale', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-fa2/800/1200', imageHint: 'smock', vendorId: 'v5', description: 'Traditional thread nodes.', status: 'Active', isEscrowProtected: true, seller: { id: 's5', name: 'Heritage', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'fa3', title: 'African Suit Accra Style', price: 2800, isNegotiable: true, category: 'Fashion', location: 'Airport', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-fa3/800/1200', imageHint: 'suit', vendorId: 'v5', description: 'Modern silhouette.', status: 'Active', isEscrowProtected: true, seller: { id: 's5', name: 'Heritage', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'fa4', title: 'Leather Kumasi Sandals', price: 850, isNegotiable: false, category: 'Fashion', location: 'Kumasi', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-fa4/800/1200', imageHint: 'sandals', vendorId: 'v5', description: 'High-fidelity leather.', status: 'Active', isEscrowProtected: true, seller: { id: 's5', name: 'Heritage', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'fa5', title: 'Gold Adinkra Cufflinks', price: 1500, isNegotiable: true, category: 'Fashion', location: 'Osu', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-fa5/800/1200', imageHint: 'cufflinks', vendorId: 'v5', description: 'Symbolic designs.', status: 'Active', isEscrowProtected: true, seller: { id: 's5', name: 'Heritage', type: 'Business Vendor', rating: 5.0, isVerified: true, joinDate: '2020' } },

  // SERVICES (5 ITEMS)
  { id: 'se1', title: 'Corporate Legal Audit', price: 15000, isNegotiable: false, category: 'Services', location: 'Ridge', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-se1/800/1200', imageHint: 'legal', vendorId: 'v6', description: 'Multinational branch nodes.', status: 'Active', isEscrowProtected: true, seller: { id: 's6', name: 'LegalNode', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'se2', title: 'Solar Installation Hub', price: 45000, isNegotiable: true, category: 'Services', location: 'East Legon', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-se2/800/1200', imageHint: 'solar', vendorId: 'v6', description: 'Institutional systems.', status: 'Active', isEscrowProtected: true, seller: { id: 's6', name: 'LegalNode', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'se3', title: 'Cyber Security Pen-Test', price: 8500, isNegotiable: false, category: 'Services', location: 'Accra', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-se3/800/1200', imageHint: 'cyber', vendorId: 'v6', description: 'Vulnerability analysis.', status: 'Active', isEscrowProtected: true, seller: { id: 's6', name: 'LegalNode', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'se4', title: 'Real Estate Valuation', price: 3500, isNegotiable: true, category: 'Services', location: 'Airport', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-se4/800/1200', imageHint: 'valuation', vendorId: 'v6', description: 'Certified appraisal.', status: 'Active', isEscrowProtected: true, seller: { id: 's6', name: 'LegalNode', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' } },
  { id: 'se5', title: 'Event Protocol Node', price: 12000, isNegotiable: false, category: 'Services', location: 'Cantonments', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-se5/800/1200', imageHint: 'event', vendorId: 'v6', description: 'Elite logistics.', status: 'Active', isEscrowProtected: true, seller: { id: 's6', name: 'LegalNode', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2021' } },

  // SPORTS (5 ITEMS)
  { id: 'sp1', title: 'TechnoGym Performance', price: 12500, isNegotiable: true, category: 'Sports', location: 'East Legon', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-sp1/800/1200', imageHint: 'treadmill', vendorId: 'v7', description: 'Institutional running node.', status: 'Active', isEscrowProtected: true, seller: { id: 's7', name: 'SportHub', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' } },
  { id: 'sp2', title: 'Olympic Dumbbell Set', price: 3500, isNegotiable: false, category: 'Sports', location: 'Osu', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-sp2/800/1200', imageHint: 'weights', vendorId: 'v7', description: 'Calibrated iron nodes.', status: 'Active', isEscrowProtected: true, seller: { id: 's7', name: 'SportHub', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' } },
  { id: 'sp3', title: 'Carbon Road Bike Elite', price: 8200, isNegotiable: true, category: 'Sports', location: 'Aburi', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-sp3/800/1200', imageHint: 'bike', vendorId: 'v7', description: 'Ultra-light frame.', status: 'Active', isEscrowProtected: true, seller: { id: 's7', name: 'SportHub', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' } },
  { id: 'sp4', title: 'Outdoor Basketball Setup', price: 25000, isNegotiable: false, category: 'Sports', location: 'Tema', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-sp4/800/1200', imageHint: 'hoop', vendorId: 'v7', description: 'Court surfacing node.', status: 'Active', isEscrowProtected: true, seller: { id: 's7', name: 'SportHub', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' } },
  { id: 'sp5', title: 'Boxing Ring Pro Node', price: 18000, isNegotiable: true, category: 'Sports', location: 'Bukom', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-sp5/800/1200', imageHint: 'ring', vendorId: 'v7', description: 'Competition standard.', status: 'Active', isEscrowProtected: true, seller: { id: 's7', name: 'SportHub', type: 'Verified Dealer', rating: 4.7, isVerified: true, joinDate: '2022' } },

  // PROPERTY (5 ITEMS)
  { id: 'pr1', title: 'Luxury 5-Bed Villa', price: 8500000, isNegotiable: true, category: 'Property', location: 'Airport Residential', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-pr1/800/1200', imageHint: 'villa', vendorId: 'v2', description: 'Elite residential node.', status: 'Active', isEscrowProtected: true, isEmphasis: true, seller: { id: 's2', name: 'PrimeEstate', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'pr2', title: 'Commercial Ridge Node', price: 12000000, isNegotiable: false, category: 'Property', location: 'Ridge', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-pr2/800/1200', imageHint: 'office', vendorId: 'v2', description: 'Financial complex.', status: 'Active', isEscrowProtected: true, seller: { id: 's2', name: 'PrimeEstate', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'pr3', title: 'Serviced Penthouse Hub', price: 4500000, isNegotiable: true, category: 'Property', location: 'Cantonments', postedAt: 'Today', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-pr3/800/1200', imageHint: 'penthouse', vendorId: 'v2', description: 'Panoramic views.', status: 'Active', isEscrowProtected: true, seller: { id: 's2', name: 'PrimeEstate', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'pr4', title: 'Industrial Warehouse Tema', price: 6500000, isNegotiable: true, category: 'Property', location: 'Tema', postedAt: 'Yesterday', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-pr4/800/1200', imageHint: 'warehouse', vendorId: 'v2', description: 'Trade logistics node.', status: 'Active', isEscrowProtected: true, seller: { id: 's2', name: 'PrimeEstate', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' } },
  { id: 'pr5', title: 'Residential East Legon Plot', price: 1200000, isNegotiable: false, category: 'Property', location: 'East Legon', postedAt: 'Just Now', postedTimestamp: Date.now(), imageUrl: 'https://picsum.photos/seed/gh-pr5/800/1200', imageHint: 'plot', vendorId: 'v2', description: 'Prime development land.', status: 'Active', isEscrowProtected: true, seller: { id: 's2', name: 'PrimeEstate', type: 'Verified Dealer', rating: 5.0, isVerified: true, joinDate: '2020' } }
];

export const VENDORS = [
  { id: 'v1', name: 'Melcom Digital Hub', category: 'Electronics', description: "Ghana's premier technical hub.", logoUrl: 'https://picsum.photos/seed/gh-logo1/200/200', bgUrl: 'https://picsum.photos/seed/gh-vbg1/800/400', rating: 4.9, itemsCount: 1240, fidelityScore: 98, joinedYear: '2018' },
  { id: 'v2', name: 'PrimeEstate GH', category: 'Property', description: 'Luxury real estate assets.', logoUrl: 'https://picsum.photos/seed/gh-logo2/200/200', bgUrl: 'https://picsum.photos/seed/gh-vbg2/800/400', rating: 5.0, itemsCount: 85, fidelityScore: 100, joinedYear: '2020' },
  { id: 'v3', name: 'AutoTrust Motors', category: 'Vehicles', description: 'Authorized pre-owned nodes.', logoUrl: 'https://picsum.photos/seed/gh-logo3/200/200', bgUrl: 'https://picsum.photos/seed/gh-vbg3/800/400', rating: 4.9, itemsCount: 45, fidelityScore: 99, joinedYear: '2021' },
  { id: 'v4', name: 'AgroPrime Ghana', category: 'Agriculture', description: 'Heavy machinery technology.', logoUrl: 'https://picsum.photos/seed/gh-logo4/200/200', bgUrl: 'https://picsum.photos/seed/gh-vbg4/800/400', rating: 4.8, itemsCount: 312, fidelityScore: 100, joinedYear: '2019' },
  { id: 'v5', name: 'Heritage Fashion', category: 'Fashion', description: 'Elite Kente and design.', logoUrl: 'https://picsum.photos/seed/gh-logo5/200/200', bgUrl: 'https://picsum.photos/seed/gh-vbg5/800/400', rating: 5.0, itemsCount: 890, fidelityScore: 100, joinedYear: '2020' }
];
