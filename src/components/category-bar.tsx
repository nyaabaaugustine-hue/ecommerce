"use client";

import Link from 'next/link';
import { 
  Car, 
  Smartphone, 
  Home, 
  Armchair, 
  Sparkles, 
  Heart, 
  Ticket,
  ChevronRight,
  Tv,
  Wrench,
  Shapes,
  Palette
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { name: 'Categories', icon: Shapes, href: '/listings', color: 'text-purple-500' },
  { name: 'Favorites', icon: Heart, href: '/dashboard', color: 'text-red-500' },
  { name: 'Coupons', icon: Ticket, href: '/listings', color: 'text-purple-400' },
  { name: 'Autos', icon: Car, href: '/listings?category=Vehicles', color: 'text-blue-500' },
  { name: 'Auto parts', icon: Wrench, href: '/listings?category=Vehicles', color: 'text-gray-500' },
  { name: 'Cell phones', icon: Smartphone, href: '/listings?category=Electronics', color: 'text-purple-400' },
  { name: 'Real Estate', icon: Home, href: '/listings?category=Property', color: 'text-green-500' },
  { name: 'Decoration', icon: Sparkles, href: '/listings?category=Home & Furniture', color: 'text-yellow-500' },
  { name: 'Electro', icon: Tv, href: '/listings?category=Electronics', color: 'text-indigo-500' },
  { name: 'Furniture', icon: Armchair, href: '/listings?category=Home & Furniture', color: 'text-orange-500' },
];

/**
 * @fileOverview Marketplace Category Registry
 * Exact clone of the OLX horizontal chip bar.
 */
export function CategoryBar() {
  return (
    <section className="bg-background border-b py-4 overflow-hidden">
      <div className="container mx-auto px-4 relative flex items-center">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pb-1">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="flex items-center gap-2 bg-muted/30 border border-muted hover:border-primary/40 hover:bg-muted/50 px-4 py-2.5 rounded-md transition-all shrink-0 group"
            >
              <cat.icon className={cn("h-4 w-4", cat.color || "text-foreground/60")} />
              <span className="text-[11px] font-bold text-foreground/80 group-hover:text-primary whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background/90 backdrop-blur-sm border shadow-xl rounded-full flex items-center justify-center cursor-pointer hover:bg-muted transition-colors z-10 lg:flex hidden mr-2">
           <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </section>
  );
}
