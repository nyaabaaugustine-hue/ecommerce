
"use client";

import { useMemo } from 'react';
import Link from 'next/link';
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

export function HomePage() {
  const eliteComputing = useMemo(() => {
    return LISTINGS.filter(l => l.subcategory === 'Laptops').slice(0, 5);
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

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden">
      <CategoryBar />
      
      <div className="max-w-7xl mx-auto w-full px-4 mb-8 md:mb-12 mt-4 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* (Most popular laptops) */}
      <section className="w-full py-6 bg-muted/5 overflow-hidden border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 mb-4 flex items-end justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg md:text-2xl font-black tracking-tighter uppercase leading-none flex items-center gap-2 italic text-foreground">
              (Most popular laptops)
            </h2>
            <p className="text-[7px] md:text-[8px] font-black text-muted-foreground uppercase tracking-[0.3em]">Premium Hardware Registry • ACCRA</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[8px] md:text-[9px] font-black text-primary hover:underline uppercase tracking-widest">
            View Full Registry
          </Link>
        </div>
        
        <div className="relative group">
          <div className="animate-marquee hover:pause flex gap-4 px-4">
            {[...eliteComputing, ...eliteComputing].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[160px] md:w-[200px] shrink-0 transform scale-95 origin-center">
                <HighFidelityListingCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (Most searched for mobiles) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most searched for mobiles)
            </h2>
            <p className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Verified Smartphone Registry Node</p>
          </div>
          <Link href="/listings?category=Electronics" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Full Registry</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {smartCommunication.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* (Most searched for vehicles) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12 bg-muted/5">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most searched for vehicles)
            </h2>
            <p className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Verified High-Value Vehicle Registry</p>
          </div>
          <Link href="/listings?category=Vehicles" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {premiumAutos.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* (Most searched for agriculture) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most searched for agriculture)
            </h2>
            <p className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Heavy Machinery & Farming Assets</p>
          </div>
          <Link href="/listings?category=Agriculture" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industrialAgro.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* (Most popular fashion) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12 bg-muted/5">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most popular fashion)
            </h2>
            <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">Luxury Apparel & High-End Timepieces</p>
          </div>
          <Link href="/listings?category=Fashion" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {designerLifestyle.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      <SpotlightCategories />

      {/* (Most popular services) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most popular services)
            </h2>
            <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">Corporate Services & Technical Audits</p>
          </div>
          <Link href="/listings?category=Services" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {professionalSolutions.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* (Most searched for sports) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12 bg-muted/5">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
              (Most searched for sports)
            </h2>
            <p className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-1">Elite Fitness & Sporting Hardware</p>
          </div>
          <Link href="/listings?category=Sports" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {performanceAthletics.map((item) => <ListingCard key={item.id} {...item} />)}
        </div>
      </section>

      {/* (Most popular property) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12 border-b">
        <div className="mb-6 md:mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter italic leading-none">
               (Most popular property)
            </h2>
            <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">Luxury Residential & Commercial Real Estate</p>
          </div>
          <Link href="/listings?category=Property" className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
