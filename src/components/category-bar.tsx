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
  Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { name: 'Categories', icon: Shapes, href: '/listings', color: 'text-secondary' },
  { name: 'Favorites', icon: Heart, href: '/dashboard', color: 'text-secondary' },
  { name: 'Coupons', icon: Ticket, href: '/listings', color: 'text-secondary' },
  { name: 'Vehicles', icon: Car, href: '/listings?category=Vehicles', color: 'text-secondary' },
  { name: 'Auto Parts', icon: Wrench, href: '/listings?category=Vehicles', color: 'text-secondary' },
  { name: 'Mobiles', icon: Smartphone, href: '/listings?category=Electronics', color: 'text-secondary' },
  { name: 'Property', icon: Home, href: '/listings?category=Property', color: 'text-secondary' },
  { name: 'Decoration', icon: Sparkles, href: '/listings?category=Home & Furniture', color: 'text-secondary' },
  { name: 'Appliances', icon: Tv, href: '/listings?category=Electronics', color: 'text-secondary' },
  { name: 'Furniture', icon: Armchair, href: '/listings?category=Home & Furniture', color: 'text-secondary' },
  { name: 'Sports', icon: Briefcase, href: '/listings', color: 'text-secondary' },
];

/**
 * @fileOverview Marketplace Category Registry
 * Monochromatic Professional Polish.
 * Aligned to the 1280px (max-w-7xl) grid with ShadCN alignment logic.
 */
export function CategoryBar() {
  return (
    <section className="bg-background py-6 overflow-hidden animate-in fade-in duration-700 border-b">
      <div className="max-w-7xl mx-auto px-4 relative flex items-center group">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pb-1">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className={cn(
                "flex items-center gap-2 bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-muted/50 px-4 py-2.5 rounded-none transition-all shrink-0 group/chip animate-in slide-in-from-right-4",
                `delay-${idx * 50}`
              )}
            >
              <cat.icon className={cn("h-5 w-5 transition-transform group-hover/chip:scale-110", cat.color)} />
              <span className="text-[11px] font-black text-foreground/80 group-hover/chip:text-primary whitespace-nowrap uppercase tracking-widest">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background/90 backdrop-blur-sm border shadow-md rounded-none flex items-center justify-center cursor-pointer hover:bg-muted transition-all z-10 lg:flex hidden mr-2 opacity-0 group-hover:opacity-100 active:scale-95">
           <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </section>
  );
}