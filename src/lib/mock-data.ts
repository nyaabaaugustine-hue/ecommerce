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
    logoUrl: 'https://picsum.photos/seed/primerental/100/100',
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
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg',
    description: 'Premium furniture and interior decor with secure delivery across Ghana.'
  },
  {
    id: 'v4',
    name: 'SuperStore Groceries',
    category: 'Supermarket',
    rating: 4.7,
    itemsCount: 4500,
    joinedDate: 'Sep 2022',
    color: 'bg-destructive',
    icon: 'S',
    logoUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png',
    description: 'Fresh daily essentials and imported household goods.'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'MacBook Pro M3 Max - Space Black',
    vendorId: 'v1',
    category: 'Computing & Laptops',
    price: 8450,
    oldPrice: 10200,
    location: 'Accra Mall, Ghana',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    rating: 4.9,
    discount: '17% OFF'
  },
  {
    id: '2',
    title: 'LG Inverter Double Door Refrigerator',
    vendorId: 'v1',
    category: 'Institutional Appliances',
    price: 12500,
    oldPrice: 14000,
    location: 'Melcom Plus, Kaneshie',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png',
    rating: 4.8,
    discount: '10% OFF'
  },
  {
    id: '3',
    title: 'Modern L-Shaped Sectional Sofa - Royal Velvet',
    vendorId: 'v3',
    category: 'Heritage Furniture',
    price: 6800,
    location: 'Spintex Road, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg',
    rating: 5.0
  },
  {
    id: '4',
    title: 'Premium Grocery Care Package - Makola Select',
    vendorId: 'v4',
    category: 'Supermarket Registry',
    price: 450,
    oldPrice: 550,
    location: 'Tema, Ghana',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png',
    rating: 4.7,
    discount: '18% OFF'
  },
  {
    id: '5',
    title: 'iPhone 15 Pro Max - Natural Titanium',
    vendorId: 'v1',
    category: 'Mobile Ecosystem',
    price: 9200,
    location: 'Airport Residential',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png',
    rating: 4.9
  },
  {
    id: '6',
    title: 'High-End Smart 4K OLED TV - 65"',
    vendorId: 'v1',
    category: 'Sovereign Audio/Visual',
    price: 15400,
    location: 'Osu, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png',
    rating: 4.8
  },
  {
    id: '7',
    title: 'Executive Office Space - Ridge Financial District',
    vendorId: 'v2',
    category: 'Commercial Rentals',
    price: 45000,
    location: 'Ridge, Accra',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: '8',
    title: 'Luxury 4-Bedroom Villa - East Legon',
    vendorId: 'v2',
    category: 'Residential Sales',
    price: 2400000,
    location: 'East Legon, Accra',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63bac817?q=80&w=2070&auto=format&fit=crop',
    rating: 5.0
  },
  {
    id: '9',
    title: 'Corporate Legal Advisory - Gold Tier',
    vendorId: 'v2',
    category: 'Professional Services',
    price: 1500,
    location: 'Cantonments, Accra',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: '10',
    title: 'Royal Orchid Beauty Set - Heritage Edition',
    vendorId: 'v3',
    category: 'Beauty & Personal',
    price: 850,
    location: 'Labone, Accra',
    imageUrl: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg',
    rating: 4.7
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'HIGH_ADMIN' },
  { id: 'u2', name: 'Store Owner', email: 'owner@melcom.com', role: 'VENDOR_ADMIN' },
  { id: 'u3', name: 'Store Staff', email: 'staff@melcom.com', role: 'VENDOR_STAFF' },
  { id: 'u4', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER' }
];
