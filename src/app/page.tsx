
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
 * High-density architecture with zero empty space.
 * Integrated new Newsletter node and saturated listings grid.
 */
export function HomePage() {
  const highFidelityLaptops = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('lp')).slice(0, 8);
  }, []);

  const sponsoredAds = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('sp') || l.category === 'Electronics').slice(0, 5);
  }, []);

  const priceDropItems = useMemo(() => {
    return LISTINGS.filter(l => l.oldPrice).slice(0, 5);
  }, []);

  const cellPhones = useMemo(() => {
    return LISTINGS.filter(l => l.subcategory === 'Mobiles').slice(0, 5);
  }, []);

  const airConditioners = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('ac') || l.title.includes('AC')).slice(0, 5);
  }, []);

  const gameBoys = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('gb') || l.category === 'Electronics').slice(5, 10);
  }, []);

  const vehiclesMostSearched = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  const realEstateRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Property').slice(0, 5);
  }, []);

  const REAL_ESTATE_SPOTLIGHT = [
    { title: "New properties for sale", imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
    { title: "Apartments for sale", imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
    { title: "Apartments for rent", imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop" },
    { title: "Houses for sale", imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
    { title: "Houses for rent", imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop" },
  ];

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

      {/* SPONSORED ADS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 relative group">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-foreground tracking-tight">Sponsored ads</h2>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-1">Exclusive Highlights</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sponsoredAds.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* AUTOS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-foreground tracking-tight">Autos</h2>
          <p className="text-sm text-muted-foreground font-medium mt-1">The best vehicles</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTOS_SPOTLIGHT.map((item) => (
            <Link key={item.title} href="/listings?category=Vehicles" className="group relative flex flex-col bg-card border rounded-md overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4 bg-muted/5 group-hover:bg-primary/5 transition-colors">
                <p className="text-center font-bold text-[13px] text-foreground group-hover:text-primary uppercase tracking-tight">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICE DROPS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8"><h2 className="text-2xl font-medium">Prices dropped on <span className="font-bold">Electronics.</span></h2></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {priceDropItems.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <SpotlightCategories />

      {/* NEWSLETTER NODE (Filling space) */}
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
              <Button className="h-14 px-10 bg-primary text-secondary font-black uppercase text-[10px] tracking-[0.2em] rounded-none hover:bg-white transition-all shadow-2xl">
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

      {/* REAL ESTATE */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <h2 className="text-2xl font-medium">Most searched in <span className="font-bold">Real Estate</span></h2>
          <Link href="/listings?category=Property" className="text-sm font-bold text-primary hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {realEstateRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* BENEFITS */}
      <BenefitsSection />

      {/* TIPS */}
      <TipsSection />

      {/* FOOTER TABS */}
      <FooterTabs />

      <PrivacyPopup />
      <NewsletterPopup />
    </div>
  );
}

export default function Page() {
  return <HomePage />;
}
