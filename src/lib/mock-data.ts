import { PlaceHolderImages } from './placeholder-images';

export type Role = 'ADMIN' | 'VENDOR' | 'CUSTOMER';

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
    color: 'bg-rose-600',
    icon: 'M',
    logoUrl: 'https://picsum.photos/seed/melcom-logo/100/100',
    description: "Ghana's largest electronics and appliance department, powered by Melcom."
  },
  {
    id: 'v2',
    name: 'PrimeRentals GH',
    category: 'Real Estate',
    rating: 4.8,
    itemsCount: 42,
    joinedDate: 'Mar 2021',
    color: 'bg-indigo-500',
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
    color: 'bg-emerald-500',
    icon: 'H',
    logoUrl: 'https://picsum.photos/seed/homeliving/100/100',
    description: 'Premium furniture and interior decor with secure delivery across Ghana.'
  },
  {
    id: 'v4',
    name: 'SuperStore Groceries',
    category: 'Supermarket',
    rating: 4.7,
    itemsCount: 4500,
    joinedDate: 'Sep 2022',
    color: 'bg-amber-500',
    icon: 'S',
    logoUrl: 'https://picsum.photos/seed/superstore/100/100',
    description: 'Fresh daily essentials and imported household goods.'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Samsung 65" Crystal 4K UHD Smart TV',
    vendorId: 'v1',
    category: 'Electronics',
    price: 8450,
    oldPrice: 10200,
    location: 'Accra Mall, Ghana',
    imageUrl: PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl || '',
    rating: 4.9,
    discount: '17% OFF'
  },
  {
    id: '2',
    title: 'LG Side-by-Side Inverter Refrigerator',
    vendorId: 'v1',
    category: 'Appliances',
    price: 12500,
    oldPrice: 14000,
    location: 'Melcom Plus, Kaneshie',
    imageUrl: PlaceHolderImages.find(img => img.id === 'appliances')?.imageUrl || '',
    rating: 4.8,
    discount: '10% OFF'
  },
  {
    id: '3',
    title: 'Modern L-Shaped Sectional Sofa Set',
    vendorId: 'v3',
    category: 'Home & Living',
    price: 6800,
    location: 'Spintex Road, Accra',
    imageUrl: PlaceHolderImages.find(img => img.id === 'furniture')?.imageUrl || '',
    rating: 5.0
  },
  {
    id: '4',
    title: 'Premium Grocery Care Package',
    vendorId: 'v4',
    category: 'Supermarket',
    price: 450,
    oldPrice: 550,
    location: 'Tema, Ghana',
    imageUrl: PlaceHolderImages.find(img => img.id === 'supermarket')?.imageUrl || '',
    rating: 4.7,
    discount: '18% OFF'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Platform Admin', email: 'admin@vault.com', role: 'ADMIN' },
  { id: 'u2', name: 'Melcom Store Manager', email: 'tech@gadgets.com', role: 'VENDOR' },
  { id: 'u3', name: 'John Buyer', email: 'user@example.com', role: 'CUSTOMER' }
];
