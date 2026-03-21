
"use client";

import Link from 'next/link';
import { 
  Car, 
  Smartphone, 
  Home, 
  Armchair, 
  Shirt, 
  Briefcase, 
  Sparkles, 
  Heart, 
  Ticket,
  ChevronRight,
  Tv,
  Wrench,
  Shapes
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { name: 'Categories', icon: Shapes, href: '/listings' },
  { name: 'Favorites', icon: Heart, href: '/dashboard', color: 'text-red-400' },
  { name: 'Coupons', icon: Ticket, href: '/listings', color: 'text-purple-400' },
  { name: 'Autos', icon: Car, href: '/listings?category=Vehicles', color: 'text-blue-400' },
  { name: 'Auto parts', icon: Wrench, href: '/listings?category=Vehicles', color: 'text-gray-400' },
  { name: 'Cell phones', icon: Smartphone, href: '/listings?category=Electronics', color: 'text-purple-400' },
  { name: 'Real Estate', icon: Home, href: '/listings?category=Property', color: 'text-green-400' },
  { name: 'Decoration', icon: Sparkles, href: '/listings?category=Home & Furniture', color: 'text-yellow-400' },
  { name: 'Electro', icon: Tv, href: '/listings?category=Electronics', color: 'text-indigo-400' },
  { name: 'Furniture', icon: Armchair, href: '/listings?category=Home & Furniture', color: 'text-orange-400' },
];

export function CategoryBar() {
  return (
    <section className="bg-secondary/50 border-b border-white/5 py-6">
      <div className="container mx-auto px-4 relative flex items-center">
        <div className="flex items-center justify-between gap-10 overflow-x-auto no-scrollbar w-full">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="flex flex-col items-center gap-3 min-w-[80px] group transition-all"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                <cat.icon className={cn("h-5 w-5", cat.color || "text-white/60")} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-secondary/80 flex items-center justify-center border border-white/10 cursor-pointer lg:flex hidden rounded-full shadow-xl">
           <ChevronRight className="h-5 w-5 text-white" />
        </div>
      </div>
    </section>
  );
}
