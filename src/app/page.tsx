
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
import { ChevronRight, Sparkles, ArrowRight, Mail, ShieldCheck, Briefcase, ShoppingBag, Shirt, Sprout, Dumbbell, Smartphone, Refrigerator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * @fileOverview Marketplace Home Hub
 * Saturated grid architecture with exactly 5 listings per row.
 * Zero-whitespace, high-density professional environment.
 */
export function HomePage() {
  const highFidelityLaptops = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('lp')).slice(0, 5);
  }, []);

  const autosRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  const phonesRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.subcategory === 'Mobiles').slice(0, 5);
  }, []);

  const agricultureRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Agriculture').slice(0, 5);
  }, []);

  const fashionRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Fashion').slice(0, 5);
  }, []);

  const servicesRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Services').slice(0, 5);
  }, []);

  const sportsRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Sports').slice(0, 5);
  }, []);

  const realEstateRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Property').slice(0, 5);
  }, []);

  const acRegistry = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('ac')).slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden">
      <CategoryBar />
      
      <div className="max-w-7xl mx-auto w-full px-4 mb-12 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* FORCE REDUCED COMPUTING SECTION (35% REDUCTION) */}
      <section className="w-full py-6 bg-muted/5 overflow-hidden border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 mb-4 flex items-end justify-between">
          <div className="space-y-0.5">
            <h2 className="text-xl md:text-2xl font-black text-foreground tracking-tighter uppercase leading-none flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Most Popular Laptops
            </h2>
            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em]">Premium Computing Hub • ACCRA</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[9px] font-black text-primary hover:underline uppercase tracking-widest">
            View All Laptops
          </Link>
        </div>
        
        <div className="relative group">
          <div className="animate-marquee hover:pause flex gap-4 px-4">
            {[...highFidelityLaptops, ...highFidelityLaptops, ...highFidelityLaptops].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[200px] shrink-0 transform scale-95 origin-center">
                <HighFidelityListingCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHONES - EXTRACTED REGISTRY */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-primary" /> Elite <span className="text-primary">Mobiles</span>
            </h2>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Extracted iPhone Registry • Accra Hub</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {phonesRegistry.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* AUTOS GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 relative group">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic">Premium Autos</h2>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Verified Vehicle Registry</p>
          </div>
          <Link href="/listings?category=Vehicles" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {autosRegistry.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* AGRICULTURE GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Sprout className="h-6 w-6 text-green-600" /> Agri-Business <span className="text-primary">Hub</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Industrial Farming Registry</p>
          </div>
          <Link href="/listings?category=Agriculture" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {agricultureRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* FASHION GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Shirt className="h-6 w-6 text-pink-500" /> Designer <span className="text-primary">Registry</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Luxury Apparel & Accessories</p>
          </div>
          <Link href="/listings?category=Fashion" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {fashionRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <SpotlightCategories />

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" /> Business <span className="text-primary">Services</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Verified Corporate Registry</p>
          </div>
          <Link href="/listings?category=Services" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Dumbbell className="h-6 w-6 text-red-600" /> Sports & <span className="text-primary">Fitness</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Professional Athletics Registry</p>
          </div>
          <Link href="/listings?category=Sports" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sportsRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* AIR CONDITIONERS GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Refrigerator className="h-6 w-6 text-blue-400" /> Home <span className="text-primary">Comfort</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Premium AC & Appliances</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {acRegistry.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* REAL ESTATE GRID */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Elite <span className="text-primary">Properties</span></h2>
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
