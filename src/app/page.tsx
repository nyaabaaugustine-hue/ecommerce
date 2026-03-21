
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
import { useSearch } from '@/components/providers';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Activity, Zap, Lock } from 'lucide-react';

export function HomePage() {
  const { searchQuery } = useSearch();

  const filteredListings = useMemo(() => {
    if (!searchQuery) return LISTINGS;
    return LISTINGS.filter(l => 
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const eliteComputing = useMemo(() => {
    return filteredListings.filter(l => l.subcategory === 'Laptops').slice(0, 5);
  }, [filteredListings]);

  const premiumAutos = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Vehicles').slice(0, 5);
  }, [filteredListings]);

  const smartCommunication = useMemo(() => {
    return filteredListings.filter(l => l.subcategory === 'Mobiles').slice(0, 5);
  }, [filteredListings]);

  const industrialAgro = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Agriculture').slice(0, 5);
  }, [filteredListings]);

  const designerLifestyle = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Fashion').slice(0, 5);
  }, [filteredListings]);

  const professionalSolutions = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Services').slice(0, 5);
  }, [filteredListings]);

  const performanceAthletics = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Sports').slice(0, 5);
  }, [filteredListings]);

  const eliteEstates = useMemo(() => {
    return filteredListings.filter(l => l.category === 'Property').slice(0, 5);
  }, [filteredListings]);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden transition-colors duration-500">
      <CategoryBar />
      
      <div className="max-w-7xl mx-auto w-full px-4 mb-8 md:mb-12 mt-4 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      {/* REGISTRY STATS TICKER */}
      <section className="max-w-7xl mx-auto w-full px-4 mb-12">
        <div className="bg-secondary text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-10 border-b-4 border-primary shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 blur-3xl rounded-full" />
          <div className="flex flex-col items-center md:items-start gap-3 relative z-10">
            <Badge className="bg-primary text-secondary font-black rounded-none uppercase text-[8px] tracking-[0.4em] px-4">Network Monitoring</Badge>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic">Sovereign Protocol Hub</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full md:w-auto relative z-10">
            <div className="text-center md:text-left space-y-1">
              <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Total Locked</p>
              <p className="text-xl md:text-2xl font-black tracking-tighter">GH₵4.2M</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Active Nodes</p>
              <p className="text-xl md:text-2xl font-black tracking-tighter">1,248</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Fulfillment</p>
              <p className="text-xl md:text-2xl font-black tracking-tighter">99.4%</p>
            </div>
            <div className="text-center md:text-left space-y-1">
              <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Uptime</p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xl md:text-2xl font-black tracking-tighter">LIVE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Most popular laptops) */}
      {eliteComputing.length > 0 && (
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
      )}

      {/* (Most searched for mobiles) */}
      {smartCommunication.length > 0 && (
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
      )}

      {/* (Most searched for vehicles) */}
      {premiumAutos.length > 0 && (
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
      )}

      <SpotlightCategories />

      {/* (Most searched for agriculture) */}
      {industrialAgro.length > 0 && (
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
      )}

      {/* (Most popular fashion) */}
      {designerLifestyle.length > 0 && (
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
      )}

      {/* (Most popular services) */}
      {professionalSolutions.length > 0 && (
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
      )}

      {/* (Most searched for sports) */}
      {performanceAthletics.length > 0 && (
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
      )}

      {/* (Most popular property) */}
      {eliteEstates.length > 0 && (
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
      )}

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
