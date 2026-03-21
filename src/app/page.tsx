
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  Car, 
  Home, 
  Smartphone, 
  Briefcase, 
  ShoppingBag, 
  Armchair, 
  Sparkles,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Search,
  MapPin,
  LayoutGrid,
  Zap,
  TrendingUp,
  Clock,
  Shirt,
  Star,
  Tv,
  Gamepad2,
  Refrigerator
} from 'lucide-react';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const MARKET_CATEGORIES = [
  { name: 'Vehicles', icon: Car, color: 'text-blue-400', href: '/listings?category=Vehicles' },
  { name: 'Property', icon: Home, color: 'text-green-400', href: '/listings?category=Property' },
  { name: 'Electronics', icon: Smartphone, color: 'text-purple-400', href: '/listings?category=Electronics' },
  { name: 'Furniture', icon: Armchair, color: 'text-orange-400', href: '/listings?category=Home & Furniture' },
  { name: 'Fashion', icon: Shirt, color: 'text-pink-400', href: '/listings?category=Fashion' },
  { name: 'Jobs', icon: Briefcase, color: 'text-cyan-400', href: '/listings?category=Jobs' },
  { name: 'Services', icon: Sparkles, color: 'text-yellow-400', href: '/listings?category=Services' },
  { name: 'Agriculture', icon: Leaf, color: 'text-emerald-400', href: '/listings?category=Agriculture' },
];

export default function HomePage() {
  const freshListings = useMemo(() => {
    return [...LISTINGS].sort((a, b) => b.postedTimestamp - a.postedTimestamp).slice(0, 5);
  }, []);

  const vehicleListings = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  const electronicListings = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Electronics').slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      {/* 1. ICONIC CATEGORY BAR (OLX STYLE) */}
      <section className="bg-secondary border-b border-white/5 py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-8">
            {MARKET_CATEGORIES.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.href}
                className="flex flex-col items-center gap-2 min-w-[80px] group"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                  <cat.icon className={cn("h-5 w-5", cat.color)} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors whitespace-nowrap">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL CAROUSEL HERO */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-[250px] md:h-[400px] w-full bg-secondary overflow-hidden border-b-4 border-primary shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&auto=format&fit=crop" 
            alt="Accra Marketplace" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent p-10 md:p-20 flex flex-col justify-center">
            <Badge className="w-fit bg-primary text-secondary font-black uppercase text-[10px] tracking-[0.3em] mb-6 rounded-none px-4 py-1.5">
              Limited Institutional Offers
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic mb-6">
              iPhone & Samsung <br /> <span className="text-primary not-italic">Up to 40% Off.</span>
            </h1>
            <div className="flex gap-4">
              <Button className="bg-primary text-secondary font-black uppercase text-[10px] tracking-[0.2em] h-14 px-10 rounded-[7%] shadow-2xl">
                Explore Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FRESH LISTINGS ROW */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white italic">Fresh Listings</h2>
          </div>
          <Link href="/listings" className="text-[10px] font-black text-primary uppercase hover:underline tracking-widest flex items-center gap-2">
            View All <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {freshListings.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 4. HERITAGE ACCENT STRIPE */}
      <div className="h-1.5 w-full relative overflow-hidden my-8">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Heritage Stripe" 
          fill 
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 5. SOVEREIGN VEHICLES SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Car className="h-5 w-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white italic">Sovereign Vehicles</h2>
          </div>
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

      {/* 6. TRUST PROTOCOL BANNER */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-secondary p-8 md:p-16 border-l-8 border-primary relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Escrow Protocol Active</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              Trade Safely. <br /> <span className="text-primary italic">Pay Institutional.</span>
            </h3>
            <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
              Every GHS transaction is secured. Funds are only released to vendors after your verified physical inspection. 48-hour SLA guaranteed.
            </p>
          </div>
          <Button className="relative z-10 h-16 px-12 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-none shadow-xl transition-all">
            How Escrow Works
          </Button>
        </div>
      </section>

      {/* 7. ELITE ELECTRONICS SECTION */}
      <section className="container mx-auto px-4 py-12 pb-24">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white italic">Elite Electronics</h2>
          </div>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase hover:underline tracking-widest flex items-center gap-2">
            View Gadgets <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {electronicListings.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
