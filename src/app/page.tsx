
"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { ListingCard } from '@/components/listing-card';
import { CategoryBar } from '@/components/category-bar';
import { HeroCarousel } from '@/components/hero-carousel';
import { PrivacyPopup } from '@/components/privacy-popup';
import { LISTINGS } from '@/lib/mock-data';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @fileOverview VaultCommerce Home Command Node
 * High-density architecture mirroring the OLX marketplace flow.
 * All sections aligned to max-w-7xl (1280px) grid with ShadCN animations.
 * Force clone: 5 items per row to fit the project alignment.
 */
export function HomePage() {
  const cellPhones = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Electronics' && l.id.startsWith('e')).slice(0, 5);
  }, []);

  const cabinets = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Home & Furniture').slice(0, 5);
  }, []);

  const airConditioners = useMemo(() => {
    return LISTINGS.filter(l => l.id.includes('ac')).slice(0, 5);
  }, []);

  const gameBoys = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('gb')).slice(0, 5);
  }, []);

  const vehicles = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden">
      {/* CATEGORY REGISTRY */}
      <CategoryBar />
      
      {/* HERO COMMAND CENTER */}
      <div className="max-w-7xl mx-auto w-full px-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* CLONE ROW: Cell Phones Registry */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Most searched in <span className="font-bold">Cell Phones and Smartphones</span>
          </h2>
          <Link href="/listings?category=Electronics" className="text-sm font-bold text-primary hover:underline">
            View all
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cellPhones.map((item, idx) => (
              <div key={item.id} className={cn("animate-in fade-in slide-in-from-right-4 duration-500", `delay-${idx * 100}`)}>
                <ListingCard {...item} />
              </div>
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border shadow-xl rounded-full hidden md:flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110 active:scale-95 border-border/50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Institutional Separator */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="h-[1px] w-full bg-border/50" />
      </div>

      {/* CLONE ROW: Cabinets and Wardrobes */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Most popular items in <span className="font-bold">Cabinets and Wardrobes</span>
          </h2>
          <Link href="/listings?category=Home & Furniture" className="text-sm font-bold text-primary hover:underline">
            View all
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cabinets.map((item, idx) => (
              <div key={item.id} className={cn("animate-in fade-in slide-in-from-right-4 duration-500", `delay-${idx * 100}`)}>
                <ListingCard {...item} />
              </div>
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border shadow-xl rounded-full hidden md:flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110 active:scale-95 border-border/50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Institutional Separator */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="h-[1px] w-full bg-border/50" />
      </div>

      {/* CLONE ROW: Air Conditioners */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Most popular <span className="font-bold">air conditioners</span>
          </h2>
          <Link href="/listings?category=Electronics" className="text-sm font-bold text-primary hover:underline">
            View all
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {airConditioners.map((item, idx) => (
              <div key={item.id} className={cn("animate-in fade-in slide-in-from-right-4 duration-500", `delay-${idx * 100}`)}>
                <ListingCard {...item} />
              </div>
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border shadow-xl rounded-full hidden md:flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110 active:scale-95 border-border/50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Institutional Separator */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="h-[1px] w-full bg-border/50" />
      </div>

      {/* CLONE ROW: Trending Heading & Game Boy Grid */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Trending on Ecommerce - <span className="font-bold">"game boy"</span>
          </h2>
          <Link href="/listings?category=Electronics" className="text-sm font-bold text-primary hover:underline">
            View all
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gameBoys.map((item, idx) => (
              <div key={item.id} className={cn("animate-in fade-in slide-in-from-right-4 duration-500", `delay-${idx * 100}`)}>
                <ListingCard {...item} />
              </div>
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border shadow-xl rounded-full hidden md:flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110 active:scale-95 border-border/50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Institutional Separator */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="h-[1px] w-full bg-border/50" />
      </div>

      {/* CLONE ROW: Sovereign Vehicles */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Sovereign <span className="font-bold">Vehicles Node</span>
          </h2>
          <Link href="/listings?category=Vehicles" className="text-sm font-bold text-primary hover:underline">
            View all
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {vehicles.map((item, idx) => (
              <div key={item.id} className={cn("animate-in fade-in slide-in-from-right-4 duration-500", `delay-${idx * 100}`)}>
                <ListingCard {...item} />
              </div>
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border shadow-xl rounded-full hidden md:flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110 active:scale-95 border-border/50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      <PrivacyPopup />
    </div>
  );
}

export default function Page() {
  return <HomePage />;
}
