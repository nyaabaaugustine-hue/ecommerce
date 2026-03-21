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
  TrendingUp,
  Zap,
  Star
} from 'lucide-react';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MARKET_CATEGORIES = [
  { name: 'Vehicles', icon: Car, color: 'bg-blue-500/10 text-blue-400', count: '1,240+' },
  { name: 'Property', icon: Home, color: 'bg-green-500/10 text-green-400', count: '850+' },
  { name: 'Electronics', icon: Smartphone, color: 'bg-purple-500/10 text-purple-400', count: '3,100+' },
  { name: 'Home & Furniture', icon: Armchair, color: 'bg-orange-500/10 text-orange-400', count: '1,100+' },
  { name: 'Fashion', icon: ShoppingBag, color: 'bg-pink-500/10 text-pink-400', count: '2,400+' },
  { name: 'Jobs', icon: Briefcase, color: 'bg-cyan-500/10 text-cyan-400', count: '420+' },
  { name: 'Services', icon: Sparkles, color: 'bg-yellow-500/10 text-yellow-400', count: '680+' },
  { name: 'Agriculture', icon: Leaf, color: 'bg-emerald-500/10 text-emerald-400', count: '350+' },
];

const HERO_SLIDES = [
  {
    title: "iPhone or Samsung",
    subtitle: "Up to 80% OFF",
    cta: "Shop Now",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057991/supermarket-widget-1_cavrxq.jpg",
    color: "from-purple-900/80 to-transparent"
  },
  {
    title: "Elite Real Estate",
    subtitle: "Verified Postings",
    cta: "Browse Property",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg",
    color: "from-blue-900/80 to-transparent"
  }
];

export default function HomePage() {
  const electronics = useMemo(() => LISTINGS.filter(l => l.category === 'Electronics'), []);
  const vehicles = useMemo(() => LISTINGS.filter(l => l.category === 'Vehicles'), []);
  const property = useMemo(() => LISTINGS.filter(l => l.category === 'Property'), []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      {/* ADVANCED HERO CAROUSEL */}
      <section className="container mx-auto px-4 py-6">
        <Carousel className="w-full">
          <CarouselContent>
            {HERO_SLIDES.map((slide, i) => (
              <CarouselItem key={i}>
                <div className="relative h-[250px] md:h-[450px] w-full overflow-hidden border-4 border-white/5">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-r p-10 md:p-24 flex flex-col justify-center gap-4", slide.color)}>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic">
                      {slide.title} <br /> <span className="text-primary">{slide.subtitle}</span>
                    </h2>
                    <Button className="w-fit bg-primary text-secondary font-black uppercase text-xs tracking-widest h-14 px-10 rounded-[7%] shadow-2xl">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white" />
          <CarouselNext className="right-4 bg-white/10 border-white/20 text-white" />
        </Carousel>
      </section>

      {/* QUICK CATEGORY REGISTRY */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {MARKET_CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/listings?category=${cat.name}`}
              className="flex flex-col items-center gap-3 min-w-[100px] group"
            >
              <div className={cn("h-16 w-16 flex items-center justify-center rounded-full transition-all group-hover:scale-110", cat.color)}>
                <cat.icon className="h-7 w-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTOR ROWS: DENSITY PASS */}
      <div className="space-y-16 mt-8">
        {/* TOP IN ELECTRONICS */}
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white">Popular in Electronics</h3>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">High-velocity technology nodes</p>
              </div>
            </div>
            <Link href="/listings?category=Electronics" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase hover:underline">
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {electronics.slice(0, 5).map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* HERITAGE STRIP SEPARATOR */}
        <div className="h-1.5 w-full relative overflow-hidden opacity-40">
          <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" alt="Separator" fill sizes="100vw" className="object-cover" />
        </div>

        {/* TOP IN VEHICLES */}
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white">Top in Vehicles</h3>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Verified automotive registry</p>
              </div>
            </div>
            <Link href="/listings?category=Vehicles" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase hover:underline">
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {vehicles.slice(0, 5).map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* INSTITUTIONAL TRUST CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-primary p-10 md:p-20 text-secondary relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 border border-secondary/20">
                <ShieldCheck className="h-4 w-4 text-secondary animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">Sovereign Protection Active</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Trade with <br /> <span className="text-white bg-secondary px-4 italic">Total Safety.</span>
              </h3>
              <p className="text-secondary/70 text-sm font-bold uppercase tracking-widest leading-relaxed">
                VaultCommerce eliminates marketplace risk through our 48-hour escrow settlement node.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <Button className="bg-secondary text-primary hover:bg-white hover:text-secondary font-black uppercase text-xs tracking-widest h-16 px-12 rounded-[7%] shadow-2xl">
                How Escrow Works
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-black uppercase text-xs tracking-widest h-16 px-12 rounded-[7%]">
                Register as Vendor
              </Button>
            </div>
          </div>
        </section>

        {/* TOP IN PROPERTY */}
        <section className="container mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white">Elite Property</h3>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Residential and Commercial Nodes</p>
              </div>
            </div>
            <Link href="/listings?category=Property" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase hover:underline">
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {property.slice(0, 5).map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
