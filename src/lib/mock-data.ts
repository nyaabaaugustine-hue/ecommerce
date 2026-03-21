export type Role = 'HIGH_ADMIN' | 'VENDOR_ADMIN' | 'VENDOR_STAFF' | 'CUSTOMER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
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
    description: "Ghana's largest electronics and appliance department, powered by Melcom."
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
    description: 'Curating the finest residential and commercial properties across East Legon.'
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
    description: 'Premium furniture and interior decor with secure delivery across Ghana.'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Quantum Precision MacBook Pro M3 Max',
    vendorId: 'v1',
    category: 'Computing & Laptops',
    price: 8450,
    oldPrice: 10200,
    location: 'Accra Mall, Ghana',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    rating: 4.9,
    discount: '17% OFF',
    salesCount: 124,
    inventoryStatus: 'In Stock'
  },
  {
    id: '2',
    title: 'Sovereign Series LG Inverter Refrigerator',
    vendorId: 'v1',
    category: 'Institutional Appliances',
    price: 12500,
    oldPrice: 14000,
    location: 'Melcom Plus, Kaneshie',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png',
    rating: 4.8,
    discount: '10% OFF',
    salesCount: 86,
    inventoryStatus: 'Limited Stock'
  },
  {
    id: '5',
    title: 'Titanium iPhone 15 Pro - Sovereign Edition',
    vendorId: 'v1',
    category: 'Mobile Ecosystem',
    price: 9200,
    location: 'Airport Residential',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    rating: 4.9,
    salesCount: 412,
    inventoryStatus: 'In Stock'
  },
  {
    id: '6',
    title: 'Sovereign 4K OLED Audio/Visual Hub',
    vendorId: 'v1',
    category: 'Sovereign Audio/Visual',
    price: 15400,
    location: 'Osu, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png',
    rating: 4.8,
    salesCount: 32,
    inventoryStatus: 'In Stock'
  },
  {
    id: '7',
    title: 'Apex Ridge Commercial Executive Suite',
    vendorId: 'v2',
    category: 'Commercial Rentals',
    price: 45000,
    location: 'Ridge Financial District',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    rating: 4.9,
    salesCount: 12,
    inventoryStatus: 'Limited Stock'
  },
  {
    id: '8',
    title: 'Sovereign 4-Bedroom Heritage Villa',
    vendorId: 'v2',
    category: 'Residential Sales',
    price: 2400000,
    location: 'East Legon, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    rating: 5.0,
    salesCount: 5,
    inventoryStatus: 'In Stock'
  },
  {
    id: '9',
    title: 'Institutional Corporate Legal Registry',
    vendorId: 'v2',
    category: 'Professional Services',
    price: 1500,
    location: 'Cantonments, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png',
    rating: 4.9,
    salesCount: 245,
    inventoryStatus: 'In Stock'
  },
  {
    id: '11',
    title: 'Protocol-Grade Professional Audit',
    vendorId: 'v2',
    category: 'Professional Services',
    price: 2500,
    location: 'Accra Central',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg',
    rating: 4.8,
    salesCount: 178,
    inventoryStatus: 'In Stock'
  },
  {
    id: '3',
    title: 'Elite Heritage L-Shaped Sectional Sofa',
    vendorId: 'v3',
    category: 'Heritage Furniture',
    price: 6800,
    location: 'Spintex Road, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    rating: 5.0,
    salesCount: 45,
    inventoryStatus: 'In Stock'
  },
  {
    id: '12',
    title: 'Elite Heritage Living Room Suite',
    vendorId: 'v3',
    category: 'Heritage Furniture',
    price: 12000,
    location: 'Spintex',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    rating: 4.9,
    salesCount: 18,
    inventoryStatus: 'In Stock'
  },
  {
    id: '10',
    title: 'Royal Orchid Heritage Beauty Protocol',
    vendorId: 'v3',
    category: 'Beauty & Personal',
    price: 850,
    location: 'Labone, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg',
    rating: 4.7,
    salesCount: 320,
    inventoryStatus: 'In Stock'
  },
  {
    id: '13',
    title: 'Makola Select Premium Grocery Registry',
    vendorId: 'v3',
    category: 'Supermarket Registry',
    price: 450,
    oldPrice: 550,
    location: 'Tema, Ghana',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png',
    rating: 4.7,
    discount: '18% OFF',
    salesCount: 540,
    inventoryStatus: 'In Stock'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN' },
  { id: 'u2', name: 'Store Owner', email: 'owner@melcom.com', role: 'VENDOR_ADMIN' },
  { id: 'u3', name: 'Store Staff', email: 'staff@melcom.com', role: 'VENDOR_STAFF' },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER' }
];