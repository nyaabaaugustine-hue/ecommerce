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
  Palette,
  Briefcase,
  Monitor
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
 */
export function CategoryBar() {
  return (
    <section className="bg-background py-6 overflow-hidden">
      <div className="container mx-auto px-4 relative flex items-center">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full pb-1">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="flex items-center gap-2 bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 px-4 py-2.5 rounded-lg transition-all shrink-0 group"
            >
              <cat.icon className={cn("h-5 w-5", cat.color)} />
              <span className="text-[13px] font-medium text-foreground/80 group-hover:text-primary whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background/90 backdrop-blur-sm border shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-muted transition-colors z-10 lg:flex hidden mr-2">
           <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </section>
  );
}
