
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
  // SPONSORED ADS
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

  // REAL ESTATE ROW
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
  {
    id: 're2',
    title: 'House for rent in a gated community',
    price: 8500,
    isNegotiable: false,
    category: 'Property',
    location: 'Cantonments, Accra',
    postedAt: 'Today, 2:45',
    postedTimestamp: Date.now() - 2000000,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Spacious family home with pool.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 're3',
    title: 'Apartment for rent in Vila Node',
    price: 3500,
    isNegotiable: true,
    category: 'Property',
    location: 'Ridge, Accra',
    postedAt: 'Today, 1:30',
    postedTimestamp: Date.now() - 5000000,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Cozy apartment perfect for professionals.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 're4',
    title: 'House for Rent in Aleixo Hub',
    price: 5200,
    isNegotiable: false,
    category: 'Property',
    location: 'East Legon',
    postedAt: 'Today, 0:50',
    postedTimestamp: Date.now() - 8000000,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Classic residential home with large garden.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 're5',
    title: 'Want to live in the best Ridge node?',
    price: 1200000,
    isNegotiable: true,
    category: 'Property',
    location: 'Ridge, Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now() - 60000,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v2',
    description: 'Ultra-luxury penthouse with skyline views.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
    seller: { id: 's11', name: 'Prime Estate', type: 'Business Vendor', rating: 4.9, isVerified: true, joinDate: '2020', phone: '0541988383', whatsapp: '233541988383' }
  },

  // ELECTRONICS
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

  // FURNITURE
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
  },
  {
    id: 'ac2',
    title: 'Samsung WindFree Connect 12000',
    price: 4500,
    isNegotiable: true,
    category: 'Electronics',
    location: 'East Legon',
    postedAt: '2h ago',
    postedTimestamp: Date.now() - 7200000,
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Smart Wi-Fi enabled cooling.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac3',
    title: 'Consul Window AC 7500 BTU',
    price: 1800,
    oldPrice: 2100,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Kumasi',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Compact window unit.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac4',
    title: 'LG Dual Inverter Voice 9000',
    price: 2900,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Tema',
    postedAt: '3h ago',
    postedTimestamp: Date.now() - 10800000,
    imageUrl: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Voice controlled inverter.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'ac5',
    title: 'Gree G-Top 12000 BTU',
    price: 2600,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Accra',
    postedAt: 'Today',
    postedTimestamp: Date.now() - 500000,
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Reliable cooling for large rooms.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },

  // GAME BOY
  {
    id: 'gb1',
    title: 'Nintendo Game Boy Advance SP',
    price: 850,
    oldPrice: 1100,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Osu',
    postedAt: 'Today, 2:31',
    postedTimestamp: Date.now() - 1000000,
    imageUrl: 'https://images.unsplash.com/photo-1531525645387-7f14be13bd32?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Cobalt Blue GBA SP, includes charger.',
    status: 'Active',
    isEscrowProtected: true,
    isFreeShipping: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'gb2',
    title: 'Game Boy Color Atomic Purple',
    price: 600,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Accra',
    postedAt: '5h ago',
    postedTimestamp: Date.now() - 18000000,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Classic transparent purple GBC.',
    status: 'Active',
    isEscrowProtected: true,
    isEasyDelivery: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'gb3',
    title: 'Game Boy DMG-01 Original',
    price: 950,
    oldPrice: 1200,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Tema',
    postedAt: 'Yesterday',
    postedTimestamp: Date.now() - 86400000,
    imageUrl: 'https://images.unsplash.com/photo-1531525645387-7f14be13bd32?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Pristine 1989 original Game Boy.',
    status: 'Active',
    isEscrowProtected: true,
    isFreeShipping: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'gb4',
    title: 'Game Boy Pocket Silver',
    price: 450,
    isNegotiable: true,
    category: 'Electronics',
    location: 'Kumasi',
    postedAt: 'Today',
    postedTimestamp: Date.now() - 200000,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Thin and light GB Pocket.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'gb5',
    title: 'Game Boy Micro Black',
    price: 1500,
    isNegotiable: false,
    category: 'Electronics',
    location: 'Accra',
    postedAt: 'Just Now',
    postedTimestamp: Date.now() - 60000,
    imageUrl: 'https://images.unsplash.com/photo-1531525645387-7f14be13bd32?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v1',
    description: 'Rare Game Boy Micro collectors edition.',
    status: 'Active',
    isEscrowProtected: true,
    isFreeShipping: true,
    seller: { id: 's3', name: 'Melcom Digital', type: 'Verified Dealer', rating: 4.8, isVerified: true, joinDate: '2022', phone: '0541988383', whatsapp: '233541988383' }
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
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
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
  {
    id: 'v_toy1',
    title: 'Toyota Corolla GLI 2.0 2024',
    price: 185000,
    isNegotiable: false,
    category: 'Vehicles',
    location: 'East Legon',
    postedAt: 'Today, 1:15',
    postedTimestamp: Date.now() - 400000,
    imageUrl: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Latest model Corolla, showroom condition.',
    status: 'Active',
    isEscrowProtected: true,
    seller: { id: 's1', name: 'AutoTrust Motors', type: 'Verified Dealer', rating: 4.9, isVerified: true, joinDate: '2021', phone: '0541988383', whatsapp: '233541988383' }
  },
  {
    id: 'v_merc1',
    title: 'Mercedes-Benz C300 AMG Line 2022',
    price: 245000,
    oldPrice: 260000,
    isNegotiable: true,
    category: 'Vehicles',
    location: 'Airport Residential',
    postedAt: 'Just Now',
    postedTimestamp: Date.now() - 60000,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
    vendorId: 'v3',
    description: 'Sovereign tier luxury sedan.',
    status: 'Active',
    isEscrowProtected: true,
    isEmphasis: true,
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
