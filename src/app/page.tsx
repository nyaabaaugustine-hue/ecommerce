
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
import { ChevronRight, Sparkles, ArrowRight, Mail, ShieldCheck, Briefcase, ShoppingBag, Shirt, Sprout, Dumbbell, Smartphone, Refrigerator, Home, Key } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

/**
 * @fileOverview Marketplace Home Hub
 * Saturated grid architecture with exactly 5 listings per row.
 * Zero-whitespace, high-density professional environment with Elite Headings.
 */
export function HomePage() {
  const eliteComputing = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('lp')).slice(0, 5);
  }, []);

  const premiumAutos = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, []);

  const smartCommunication = useMemo(() => {
    return LISTINGS.filter(l => l.subcategory === 'Mobiles').slice(0, 5);
  }, []);

  const industrialAgro = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Agriculture').slice(0, 5);
  }, []);

  const designerLifestyle = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Fashion').slice(0, 5);
  }, []);

  const professionalSolutions = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Services').slice(0, 5);
  }, []);

  const performanceAthletics = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Sports').slice(0, 5);
  }, []);

  const eliteEstates = useMemo(() => {
    return LISTINGS.filter(l => l.category === 'Property').slice(0, 5);
  }, []);

  const climateControl = useMemo(() => {
    return LISTINGS.filter(l => l.id.startsWith('ac')).slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden">
      <CategoryBar />
      
      <div className="max-w-7xl mx-auto w-full px-4 mb-12 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* FORCE REDUCED ELITE COMPUTING HUB (35% REDUCTION) */}
      <section className="w-full py-6 bg-muted/5 overflow-hidden border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 mb-4 flex items-end justify-between">
          <div className="space-y-0.5">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none flex items-center gap-2 italic heading-gradient">
              <Sparkles className="h-4 w-4 text-primary" /> Elite Computing Hub
            </h2>
            <p className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em]">Premium Hardware Registry • ACCRA</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[9px] font-black text-primary hover:underline uppercase tracking-widest">
            View Full Registry
          </Link>
        </div>
        
        <div className="relative group">
          <div className="animate-marquee hover:pause flex gap-4 px-4">
            {[...eliteComputing, ...eliteComputing, ...eliteComputing].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[200px] shrink-0 transform scale-95 origin-center">
                <HighFidelityListingCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART COMMUNICATION - iPHONE REGISTRY */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-primary" /> Smart <span className="heading-gradient">Communication</span>
            </h2>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Verified iPhone & Smartphone Node</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Full Registry</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {smartCommunication.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* PREMIUM AUTOS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 relative group bg-muted/5">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic heading-gradient">Premium Autos</h2>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Verified High-Value Vehicle Registry</p>
          </div>
          <Link href="/listings?category=Vehicles" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {premiumAutos.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* INDUSTRIAL AGRO-BUSINESS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Sprout className="h-6 w-6 text-green-600" /> Industrial <span className="heading-gradient">Agro-Business</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Heavy Machinery & Farming Assets</p>
          </div>
          <Link href="/listings?category=Agriculture" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industrialAgro.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* DESIGNER LIFESTYLE */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 bg-muted/5">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Shirt className="h-6 w-6 text-accent" /> Designer <span className="heading-gradient">Lifestyle</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Luxury Apparel & High-End Timepieces</p>
          </div>
          <Link href="/listings?category=Fashion" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {designerLifestyle.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <SpotlightCategories />

      {/* PROFESSIONAL SOLUTIONS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-blue-600" /> Professional <span className="heading-gradient">Solutions</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Corporate Services & Technical Audits</p>
          </div>
          <Link href="/listings?category=Services" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {professionalSolutions.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* PERFORMANCE ATHLETICS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 bg-muted/5">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Dumbbell className="h-6 w-6 text-red-600" /> Performance <span className="heading-gradient">Athletics</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Elite Fitness & Sporting Hardware</p>
          </div>
          <Link href="/listings?category=Sports" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {performanceAthletics.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* CLIMATE CONTROL & APPLIANCES */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
              <Refrigerator className="h-6 w-6 text-blue-400" /> Climate <span className="heading-gradient">Control</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Premium AC & Smart Appliances</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {climateControl.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* ELITE ESTATES */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12 bg-muted/5 border-b">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
               <Home className="h-6 w-6 text-primary" /> Elite <span className="heading-gradient">Estates</span>
            </h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Luxury Residential & Commercial Real Estate</p>
          </div>
          <Link href="/listings?category=Property" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {eliteEstates.map((item) => <ListingCard key={item.id} {...item} />)}
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
