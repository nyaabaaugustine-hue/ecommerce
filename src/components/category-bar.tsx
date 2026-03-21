
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
  { name: 'Categorias', icon: Shapes, href: '/listings', color: 'text-purple-500' },
  { name: 'Favoritos', icon: Heart, href: '/dashboard', color: 'text-red-500' },
  { name: 'Cupons', icon: Ticket, href: '/listings', color: 'text-purple-400' },
  { name: 'Autos', icon: Car, href: '/listings?category=Vehicles', color: 'text-gray-700' },
  { name: 'Autopeças', icon: Wrench, href: '/listings?category=Vehicles', color: 'text-gray-500' },
  { name: 'Celulares', icon: Smartphone, href: '/listings?category=Electronics', color: 'text-purple-400' },
  { name: 'Imóveis', icon: Home, href: '/listings?category=Property', color: 'text-green-600' },
  { name: 'Decoração', icon: Sparkles, href: '/listings?category=Home & Furniture', color: 'text-yellow-500' },
  { name: 'Eletro', icon: Tv, href: '/listings?category=Electronics', color: 'text-indigo-500' },
  { name: 'Móveis', icon: Armchair, href: '/listings?category=Home & Furniture', color: 'text-[#d60a91]' },
  { name: 'Esportes', icon: Briefcase, href: '/listings', color: 'text-blue-500' },
];

/**
 * @fileOverview Marketplace Category Registry
 * Exact 1:1 structural clone of the OLX horizontal chip bar.
 * Aligned to the 1280px (max-w-7xl) grid with ShadCN alignment logic.
 */
export function CategoryBar() {
  return (
    <section className="bg-background py-6 overflow-hidden animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 relative flex items-center group">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pb-1">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className={cn(
                "flex items-center gap-2 bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 px-4 py-2.5 rounded-lg transition-all shrink-0 group/chip animate-in slide-in-from-right-4",
                `delay-${idx * 50}`
              )}
            >
              <cat.icon className={cn("h-5 w-5 transition-transform group-hover/chip:scale-110", cat.color)} />
              <span className="text-[13px] font-medium text-foreground/80 group-hover/chip:text-primary whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background/90 backdrop-blur-sm border shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-muted transition-all z-10 lg:flex hidden mr-2 opacity-0 group-hover:opacity-100 active:scale-95">
           <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </section>
  );
}
