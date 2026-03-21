
"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ListingCard } from '@/components/listing-card';
import { HighFidelityListingCard } from '@/components/high-fidelity-listing-card';
import { CategoryBar } from '@/components/category-bar';
import { HeroCarousel } from '@/components/hero-carousel';
import { BenefitsSection } from '@/components/benefits-section';
import { PrivacyPopup } from '@/components/privacy-popup';
import { SpotlightCategories } from '@/components/spotlight-categories';
import { TipsSection } from '@/components/tips-section';
import { FooterTabs } from '@/components/footer-tabs';
import { NewsletterPopup } from '@/components/newsletter-popup';
import { LISTINGS } from '@/lib/mock-data';
import { ChevronRight, Sparkles, ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * @fileOverview Marketplace Home Hub
 * High-density architecture with exactly 5 listings per row.
 */
export function HomePage() {
  const highFidelityLaptops = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('lp')).slice(0, 5);
  }, []);

  const sponsoredAds = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('v_')).slice(0, 5);
  }, []);

  const priceDropItems = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('ph')).slice(0, 5);
  }, []);

  const airConditioners = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('ac')).slice(0, 5);
  }, []);

  const gameBoys = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('gb')).slice(0, 5);
  }, []);

  const realEstateRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Property').slice(0, 5);
  }, []);

  const AUTOS_SPOTLIGHT = [
    { title: "Cars", imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop" },
    { title: "Trucks", imageUrl: "https://images.unsplash.com/photo-1586191582151-f73872dfd183?q=80&w=800&auto=format&fit=crop" },
    { title: "Motorcycles", imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop" },
    { title: "Bus", imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden">
      {/* CATEGORY NAV */}
      <CategoryBar />
      
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto w-full px-4 mb-12 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* AUTO-SCROLLING LAPTOPS SECTION */}
      <section className="w-full py-12 bg-muted/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase leading-none flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" /> Most Popular Laptops
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Premium Computing Hub • ACCRA</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-xs font-black text-primary hover:underline uppercase tracking-widest">
            View All Laptops
          </Link>
        </div>
        
        <div className="relative group">
          <div className="animate-marquee hover:pause flex gap-6 px-4">
            {[...highFidelityLaptops, ...highFidelityLaptops].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[300px] shrink-0">
                <HighFidelityListingCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORED ADS (AUTOS ROW) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-foreground tracking-tighter uppercase italic">Sponsored Autos</h2>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Exclusive Vehicle Registry</p>
          </div>
          <Link href="/listings?category=Vehicles" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sponsoredAds.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* AUTOS SPOTLIGHT (4 COLS) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Auto Categories</h2>
          <p className="text-xs text-muted-foreground font-black uppercase tracking-[0.3em] mt-1">Verified Logistics Nodes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTOS_SPOTLIGHT.map((item) => (
            <Link key={item.title} href="/listings?category=Vehicles" className="group relative flex flex-col bg-card border rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4 bg-muted/5 group-hover:bg-primary transition-colors">
                <p className="text-center font-black text-[13px] text-foreground group-hover:text-secondary uppercase tracking-tight">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICE DROPS (PHONES ROW) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Price Drops: <span className="text-primary">Mobiles</span></h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Global Smartphone Registry</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {priceDropItems.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <SpotlightCategories />

      {/* AIR CONDITIONERS ROW */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Cooling Solutions</h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Inverter AC Registry</p>
          </div>
          <Link href="/listings" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {airConditioners.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* NEWSLETTER NODE */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="bg-secondary rounded-none overflow-hidden flex flex-col md:flex-row border-t-4 border-primary">
          <div className="flex-1 p-12 md:p-20 space-y-8 text-white">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none italic">Join the <br /><span className="text-primary">Registry.</span></h2>
              <p className="text-xs font-bold text-white/50 uppercase tracking-[0.3em]">Institutional Updates & Exclusive Deal Access</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                <Input placeholder="Enter Email Node" className="bg-white/5 border-white/10 h-14 pl-12 rounded-none text-white font-black uppercase text-[10px] tracking-widest" />
              </div>
              <Button className="h-14 px-10 bg-primary text-secondary font-black uppercase text-[10px] tracking-[0.2em] rounded-none hover:bg-white transition-all shadow-2xl border-none">
                Authorize <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <p className="text-[8px] font-black uppercase text-white/30 tracking-widest">Secured by AES-256 Encryption Protocol</p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative min-h-[300px]">
            <Image src="https://images.unsplash.com/photo-1556740734-7f1a0297ba16?q=80&w=800&auto=format&fit=crop" alt="Newsletter" fill className="object-cover contrast-125 saturate-0 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent" />
          </div>
        </div>
      </section>

      {/* GAME BOYS ROW */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Retro Gaming</h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Handheld Collector Registry</p>
          </div>
          <Link href="/listings" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {gameBoys.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* REAL ESTATE ROW */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Premium <span className="text-primary">Properties</span></h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Accra Real Estate Registry</p>
          </div>
          <Link href="/listings?category=Property" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {realEstateRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <BenefitsSection />
      <TipsSection />
      <FooterTabs />

      <PrivacyPopup />
      <NewsletterPopup />
    </div>
  );
}

export default function Page() {
  return <HomePage />;
}
