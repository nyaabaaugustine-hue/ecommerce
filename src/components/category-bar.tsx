
"use client";

import Link from 'next/link';
import Image from 'next/image';
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
  { 
    name: 'Categories', 
    icon: Shapes, 
    imageUrl: 'https://picsum.photos/seed/cat1/100/100',
    href: '/listings' 
  },
  { name: 'Favorites', icon: Heart, href: '/dashboard' },
  { name: 'Coupons', icon: Ticket, href: '/listings' },
  { name: 'Vehicles', icon: Car, href: '/listings?category=Vehicles' },
  { name: 'Auto Parts', icon: Wrench, href: '/listings?category=Vehicles' },
  { name: 'Mobiles', icon: Smartphone, href: '/listings?category=Electronics' },
  { name: 'Property', icon: Home, href: '/listings?category=Property' },
  { name: 'Decoration', icon: Sparkles, href: '/listings?category=Home & Furniture' },
  { name: 'Appliances', icon: Tv, href: '/listings?category=Electronics' },
  { name: 'Furniture', icon: Armchair, href: '/listings?category=Home & Furniture' },
  { name: 'Sports', icon: Briefcase, href: '/listings' },
];

export function CategoryBar() {
  return (
    <section className="bg-background py-2 md:py-3 overflow-hidden border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 relative flex items-center group">
        <div className="flex items-center gap-2 md:gap-2.5 overflow-x-auto no-scrollbar w-full pb-1 scroll-smooth">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className={cn(
                "flex items-center gap-2 bg-muted/20 border border-transparent hover:border-primary/30 hover:bg-muted/40 px-3 md:px-3.5 py-1.5 rounded-none transition-all shrink-0 group/chip animate-in fade-in slide-in-from-right-2",
                `delay-${idx * 20}`
              )}
            >
              {cat.imageUrl ? (
                <div className="relative h-3.5 w-3.5 md:h-4 md:w-4 overflow-hidden rounded-none">
                  <Image 
                    src={cat.imageUrl} 
                    alt={cat.name} 
                    fill 
                    className="object-cover grayscale group-hover/chip:grayscale-0 transition-all"
                    sizes="16px"
                  />
                </div>
              ) : (
                <cat.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground group-hover/chip:text-primary transition-colors" />
              )}
              <span className="text-[9px] md:text-[10px] font-black text-muted-foreground group-hover/chip:text-primary whitespace-nowrap uppercase tracking-[0.1em]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 bg-background/90 backdrop-blur-sm border shadow-sm rounded-none flex items-center justify-center cursor-pointer hover:bg-muted transition-all z-10 lg:flex hidden mr-2 opacity-0 group-hover:opacity-100 active:scale-95">
           <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
