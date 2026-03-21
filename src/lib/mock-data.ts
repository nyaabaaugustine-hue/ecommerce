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
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'MacBook Pro M3 Max - 16 inch Space Black',
    vendorId: 'v1',
    category: 'Electronics',
    price: 8450,
    location: 'Accra Mall',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    rating: 4.9,
    salesCount: 124,
    postedAt: '2 hours ago',
    isNegotiable: true,
    sellerType: 'Dealer',
    sellerName: 'Melcom Digital'
  },
  {
    id: '14',
    title: '2023 Mercedes-Benz GLE 450 AMG Line',
    vendorId: 'v4',
    category: 'Vehicles',
    price: 850000,
    location: 'East Legon',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8af24b4d8?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    salesCount: 2,
    postedAt: '45 mins ago',
    isNegotiable: false,
    sellerType: 'Dealer',
    sellerName: 'AutoTrust Motors',
    requiresMultisig: true
  },
  {
    id: '8',
    title: 'Modern 4-Bedroom Villa with Pool',
    vendorId: 'v2',
    category: 'Property',
    price: 2400000,
    location: 'East Legon',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    rating: 5.0,
    salesCount: 5,
    postedAt: 'Yesterday',
    isNegotiable: true,
    sellerType: 'Verified Pro',
    sellerName: 'PrimeRentals GH',
    requiresMultisig: true
  },
  {
    id: '5',
    title: 'iPhone 15 Pro Max - 256GB Titanium',
    vendorId: 'v1',
    category: 'Electronics',
    price: 9200,
    location: 'Airport Residential',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    rating: 4.9,
    salesCount: 412,
    postedAt: '1 hour ago',
    isNegotiable: true,
    sellerType: 'Individual',
    sellerName: 'Kwame Mensah'
  },
  {
    id: '15',
    title: '2022 Toyota Land Cruiser 300 V6',
    vendorId: 'v4',
    category: 'Vehicles',
    price: 1200000,
    location: 'Spintex Road',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    salesCount: 4,
    postedAt: '3 hours ago',
    isNegotiable: false,
    sellerType: 'Dealer',
    sellerName: 'AutoTrust Motors',
    requiresMultisig: true
  },
  {
    id: '3',
    title: 'Premium L-Shaped Fabric Sofa',
    vendorId: 'v3',
    category: 'Home & Furniture',
    price: 6800,
    location: 'Spintex Road',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    rating: 5.0,
    salesCount: 45,
    postedAt: '5 hours ago',
    isNegotiable: true,
    sellerType: 'Verified Pro',
    sellerName: 'HomeLiving GH'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN', fidelityScore: 100 },
  { id: 'u2', name: 'Store Owner', email: 'owner@melcom.com', role: 'VENDOR_ADMIN', fidelityScore: 98 },
  { id: 'u3', name: 'Store Staff', email: 'staff@melcom.com', role: 'VENDOR_STAFF', fidelityScore: 95 },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER', fidelityScore: 92 }
];