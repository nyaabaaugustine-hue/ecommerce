export type Role = 'HIGH_ADMIN' | 'VENDOR_ADMIN' | 'VENDOR_STAFF' | 'CUSTOMER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  fidelityScore?: number;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  itemsCount: number;
  joinedDate: string;
  color: string;
  icon: string;
  logoUrl: string;
  bgUrl: string;
  description: string;
  fidelityScore: number;
  settlementSpeed: string;
}

export interface Listing {
  id: string;
  title: string;
  vendorId: string;
  category: string;
  price: number;
  oldPrice?: number;
  location: string;
  imageUrl: string;
  rating: number;
  discount?: string;
  salesCount: number;
  inventoryStatus?: 'In Stock' | 'Limited Stock' | 'Sold Out';
  requiresMultisig?: boolean;
  postedAt: string;
  isNegotiable?: boolean;
  sellerType: 'Individual' | 'Dealer' | 'Verified Pro';
  sellerName: string;
  description?: string;
}

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Melcom Digital Hub',
    category: 'Electronics',
    rating: 4.9,
    itemsCount: 1560,
    joinedDate: 'Jan 2022',
    color: 'bg-primary',
    icon: 'M',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg',
    description: "Ghana's largest electronics and appliance department, powered by Melcom.",
    fidelityScore: 98,
    settlementSpeed: '1.2h'
  },
  {
    id: 'v2',
    name: 'PrimeRentals GH',
    category: 'Real Estate',
    rating: 4.8,
    itemsCount: 42,
    joinedDate: 'Mar 2021',
    color: 'bg-accent',
    icon: 'P',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    description: 'Curating the finest residential and commercial properties across East Legon.',
    fidelityScore: 94,
    settlementSpeed: '2.4h'
  },
  {
    id: 'v3',
    name: 'HomeLiving Furniture',
    category: 'Home & Living',
    rating: 5.0,
    itemsCount: 85,
    joinedDate: 'Jun 2020',
    color: 'bg-secondary',
    icon: 'H',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    description: 'Premium furniture and interior decor with secure delivery across Ghana.',
    fidelityScore: 99,
    settlementSpeed: '0.8h'
  },
  {
    id: 'v4',
    name: 'AutoTrust Motors',
    category: 'Vehicles',
    rating: 4.7,
    itemsCount: 120,
    joinedDate: 'Feb 2019',
    color: 'bg-primary',
    icon: 'A',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    bgUrl: 'https://images.unsplash.com/photo-1562141961-b5d1852d7316?q=80&w=800&auto=format&fit=crop',
    description: 'Accra\'s leading verified dealer for luxury and commercial vehicles.',
    fidelityScore: 96,
    settlementSpeed: '1.5h'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: '2022 Toyota Land Cruiser 300 V6',
    vendorId: 'v4',
    category: 'Vehicles',
    price: 1200000,
    location: 'Airport Residential',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    salesCount: 2,
    postedAt: '2 hours ago',
    isNegotiable: false,
    sellerType: 'Dealer',
    sellerName: 'AutoTrust Motors',
    requiresMultisig: true,
    description: 'Full option, pristine condition, duty paid.'
  },
  {
    id: '2',
    title: 'Modern 4-Bedroom Villa with Pool',
    vendorId: 'v2',
    category: 'Property',
    price: 2400000,
    location: 'East Legon',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    rating: 5.0,
    salesCount: 1,
    postedAt: '5 hours ago',
    isNegotiable: true,
    sellerType: 'Verified Pro',
    sellerName: 'PrimeRentals GH',
    requiresMultisig: true,
    description: 'Luxury living in the heart of East Legon. Gated community.'
  },
  {
    id: '3',
    title: 'MacBook Pro M3 Max - 16 inch',
    vendorId: 'v1',
    category: 'Electronics',
    price: 8450,
    location: 'Accra Mall',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    rating: 4.9,
    salesCount: 124,
    postedAt: 'JUST NOW',
    isNegotiable: true,
    sellerType: 'Dealer',
    sellerName: 'Melcom Digital Hub',
    description: 'Brand new, 1TB SSD, 32GB RAM.'
  },
  {
    id: '4',
    title: 'Land for Sale - 2 Plots',
    vendorId: 'v2',
    category: 'Property',
    price: 150000,
    location: 'Kasoa',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    salesCount: 0,
    postedAt: '1 hour ago',
    isNegotiable: true,
    sellerType: 'Individual',
    sellerName: 'Yaw Mensah',
    description: 'Walled and gated, litigation free.'
  },
  {
    id: '5',
    title: 'Toyota Corolla 2015',
    vendorId: 'v4',
    category: 'Vehicles',
    price: 65000,
    location: 'Tema',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    salesCount: 15,
    postedAt: '3 hours ago',
    isNegotiable: true,
    sellerType: 'Individual',
    sellerName: 'Kofi Arhin',
    description: 'Excellent fuel consumption, clean interior.'
  },
  {
    id: '6',
    title: 'iPhone 15 Pro Max Titanium',
    vendorId: 'v1',
    category: 'Electronics',
    price: 9800,
    location: 'Spintex Road',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    rating: 4.9,
    salesCount: 45,
    postedAt: '4 hours ago',
    isNegotiable: false,
    sellerType: 'Verified Pro',
    sellerName: 'Gadget Vault',
    description: 'US Spec, 256GB, Factory Unlocked.'
  },
  {
    id: '7',
    title: 'Professional Plumber Services',
    vendorId: 'v5',
    category: 'Services',
    price: 200,
    location: 'East Legon',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    salesCount: 89,
    postedAt: '6 hours ago',
    isNegotiable: true,
    sellerType: 'Verified Pro',
    sellerName: 'QuickFix GH',
    description: 'Leak repairs, pipe installations, 24/7 service.'
  },
  {
    id: '8',
    title: 'Delivery Rider Needed',
    vendorId: 'v6',
    category: 'Jobs',
    price: 3500,
    location: 'Accra',
    imageUrl: 'https://images.unsplash.com/photo-1626228636166-7e4c2f7a9929?q=80&w=800&auto=format&fit=crop',
    rating: 4.2,
    salesCount: 0,
    postedAt: 'Yesterday',
    isNegotiable: false,
    sellerType: 'Business Vendor',
    sellerName: 'LogiGH',
    description: 'Monthly salary, must have own license.'
  },
  {
    id: '9',
    title: 'L-Shaped Luxury Sofa Set',
    vendorId: 'v3',
    category: 'Home & Furniture',
    price: 7500,
    location: 'Spintex',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    rating: 5.0,
    salesCount: 12,
    postedAt: '2 hours ago',
    isNegotiable: true,
    sellerType: 'Dealer',
    sellerName: 'HomeLiving GH',
    description: 'High-quality fabric, comfortable seating.'
  },
  {
    id: '10',
    title: 'Samsung 65" QLED 4K TV',
    vendorId: 'v1',
    category: 'Electronics',
    price: 12500,
    location: 'Osu',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png',
    rating: 4.8,
    salesCount: 34,
    postedAt: '10 hours ago',
    isNegotiable: false,
    sellerType: 'Dealer',
    sellerName: 'Melcom Digital Hub',
    description: 'Smart TV, warranty included.'
  },
  {
    id: '11',
    title: 'Poultry Farm Feed - 50kg',
    vendorId: 'v7',
    category: 'Agriculture',
    price: 450,
    location: 'Kumasi',
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    salesCount: 156,
    postedAt: '1 hour ago',
    isNegotiable: false,
    sellerType: 'Business Vendor',
    sellerName: 'AgroPlus GH',
    description: 'High protein layer mash.'
  },
  {
    id: '12',
    title: 'Wedding Photography Package',
    vendorId: 'v8',
    category: 'Services',
    price: 5000,
    location: 'Accra',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    salesCount: 22,
    postedAt: '3 hours ago',
    isNegotiable: true,
    sellerType: 'Individual',
    sellerName: 'Capture Moments',
    description: 'Full day coverage + photo album.'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Store Owner', email: 'owner@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Store Staff', email: 'staff@melcom.com', role: 'VENDOR_STAFF', fidelityScore: 95 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];
