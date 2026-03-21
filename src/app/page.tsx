"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { ListingCard } from '@/components/listing-card';
import { CategoryBar } from '@/components/category-bar';
import { HeroCarousel } from '@/components/hero-carousel';
import { PrivacyPopup } from '@/components/privacy-popup';
import { LISTINGS } from '@/lib/mock-data';
import { ChevronRight } from 'lucide-react';

/**
 * @fileOverview VaultCommerce Home Command Node
 * High-density architecture mirroring the OLX marketplace flow.
 */
export default function HomePage() {
  const cellPhones = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Electronics').slice(0, 5);
  }, []);

  const homeLiving = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Home & Furniture').slice(0, 5);
  }, []);

  const vehicles = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      {/* 1:1 CLONE CATEGORY REGISTRY */}
      <CategoryBar />
      
      {/* 1:1 CLONE HERO NODE */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-6">
        <HeroCarousel />
      </div>

      {/* CLONE SECTION: Cell Phones Registry */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Most searched in <span className="font-bold">Cell Phones and Smartphones</span>
          </h2>
        </div>
        
        <div className="relative group">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cellPhones.map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-background border shadow-xl rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Heritage Identity Separator */}
      <div className="h-[1px] w-full bg-border max-w-7xl mx-auto opacity-50" />

      {/* CLONE SECTION: Home & Furniture Registry */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Most popular items in <span className="font-bold">Cabinets and Wardrobes</span>
          </h2>
        </div>
        
        <div className="relative group">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {homeLiving.map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
          
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 h-12 w-12 bg-background border shadow-xl rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all z-10 hover:scale-110">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* CLONE SECTION: Sovereign Vehicles Registry */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">
            Elite <span className="font-bold">Sovereign Vehicles</span> in Accra
          </h2>
          <Link href="/listings?category=Vehicles" className="text-sm font-bold text-primary hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vehicles.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <PrivacyPopup />
    </div>
  );
}
