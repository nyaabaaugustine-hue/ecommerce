
"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { CategoryBar } from '@/components/category-bar';
import { HeroCarousel } from '@/components/hero-carousel';
import { PrivacyPopup } from '@/components/privacy-popup';
import { LISTINGS } from '@/lib/mock-data';
import { 
  ChevronRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Search
} from 'lucide-react';

export default function HomePage() {
  const freshListings = useMemo(() => {
    return [...LISTINGS].sort((a, b) => b.postedTimestamp - a.postedTimestamp).slice(0, 5);
  }, []);

  const electronicListings = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Electronics').slice(0, 5);
  }, []);

  const vehicleListings = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      {/* 1. CLONE CATEGORY BAR */}
      <CategoryBar />

      {/* 2. CLONE HERO CAROUSEL */}
      <HeroCarousel />

      {/* 3. PROMOTIONAL BANNER (OLX STYLE) */}
      <section className="container mx-auto px-4 py-4">
        <div className="bg-white p-6 flex flex-col md:flex-row items-center justify-center gap-10 shadow-xl border-b-2 border-primary">
           <div className="relative h-12 w-40">
              <Image src="https://picsum.photos/seed/ad/200/100" alt="Partner" fill className="object-contain grayscale" sizes="160px" />
           </div>
           <h3 className="text-2xl md:text-4xl font-black text-secondary uppercase tracking-tighter">
             Japanese Used Cars For Sale
           </h3>
        </div>
      </section>

      {/* 4. SECTIONED FEED: ELECTRONICS (CLONE TARGET SECTION) */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
            Most searched in <span className="text-primary italic">Cell Phones and Smartphones</span>
          </h2>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase hover:underline tracking-widest flex items-center gap-2">
            View All <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {electronicListings.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 5. TRUST PROTOCOL BANNER (DIFFERENTIATOR) */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-secondary p-10 md:p-16 border-l-8 border-primary relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Escrow Protocol Active</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              Trade Safely. <br /> <span className="text-primary italic">Pay Institutional.</span>
            </h3>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
              Every GHS transaction is secured by Multisig Treasury nodes. Funds are only released after your physical inspection node is authorized.
            </p>
          </div>
          <Button className="relative z-10 h-16 px-12 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-none shadow-xl transition-all">
            How Escrow Works
          </Button>
        </div>
      </section>

      {/* 6. SECTIONED FEED: VEHICLES */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
            Elite <span className="text-primary italic">Sovereign Vehicles</span>
          </h2>
          <Link href="/listings?category=Vehicles" className="text-[10px] font-black text-primary uppercase hover:underline tracking-widest flex items-center gap-2">
            Explore Autos <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {vehicleListings.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 7. HERITAGE ACCENT STRIPE */}
      <div className="h-1.5 w-full relative overflow-hidden my-8">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Heritage Stripe" 
          fill 
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <PrivacyPopup />
    </div>
  );
}
