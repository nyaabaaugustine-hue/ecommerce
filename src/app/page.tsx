
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
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { useSearch } from '@/components/providers';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Activity, Zap, Lock, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
        <section className="w-full py-12 bg-muted/5 overflow-hidden border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none italic text-foreground">
                (Most popular laptops)
              </h2>
              <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Premium Hardware Registry • ACCRA</p>
            </div>
            <Link href="/listings?category=Electronics" className="text-[10px] md:text-[11px] font-black text-primary hover:underline uppercase tracking-widest">
              View Full Registry
            </Link>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {eliteComputing.map((item) => (
                <HighFidelityListingCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* (Most searched for mobiles) */}
      {smartCommunication.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-16 md:py-24">
          <div className="mb-10 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">
                (Most searched for mobiles)
              </h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Verified Smartphone Registry Node</p>
            </div>
            <Link href="/listings?category=Electronics" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest hover:underline">Full Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {smartCommunication.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {/* VERIFIED VENDOR SHOWCASE - SLOW MARQUEE */}
      <section className="bg-secondary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="grid grid-cols-12 h-full gap-4">
              {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white h-full" />)}
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <Badge className="bg-primary text-secondary font-black rounded-none uppercase text-[10px] tracking-[0.4em] px-6">Institutional Directory</Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Verified <br /> <span className="text-primary italic">Partner Sellers</span>
              </h2>
            </div>
            <Link href="/vendors">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-black rounded-none h-16 px-12 uppercase text-[11px] tracking-[0.3em] gap-3">
                Enter Vendor Registry <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Slow Motion Marquee Wrapper */}
          <div className="overflow-hidden relative group">
            <div className="flex animate-marquee-slow gap-8 py-4 whitespace-nowrap hover:[animation-play-state:paused]">
              {/* Double items for seamless loop */}
              {[...VENDORS, ...VENDORS].map((vendor, idx) => (
                <div key={`${vendor.id}-${idx}`} className="bg-white/5 border border-white/10 p-8 hover:border-primary transition-all group/card min-w-[350px] md:min-w-[400px]">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-16 w-16 bg-white relative p-2 shadow-2xl">
                      <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-contain p-1" unoptimized />
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">Fidelity Score</p>
                      <p className="text-2xl font-black text-white">{vendor.fidelityScore}%</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover/card:text-primary transition-colors whitespace-normal">{vendor.name}</h3>
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest leading-relaxed mb-8 h-12 line-clamp-3 whitespace-normal">
                    {vendor.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-sm font-black">{vendor.rating} Registry Rating</span>
                    </div>
                    <Badge variant="outline" className="border-white/20 text-white/60 rounded-none font-black text-[8px] uppercase tracking-widest">Since {vendor.joinedYear}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* (Most searched for vehicles) */}
      {premiumAutos.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 md:py-32">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">
                (Most searched for vehicles)
              </h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Verified High-Value Vehicle Registry</p>
            </div>
            <Link href="/listings?category=Vehicles" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest hover:underline">View All Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {premiumAutos.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      <SpotlightCategories />

      {/* (Most searched for agriculture) */}
      {industrialAgro.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 md:py-32 border-t border-dashed">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">
                (Most searched for agriculture)
              </h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Heavy Machinery & Farming Assets</p>
            </div>
            <Link href="/listings?category=Agriculture" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest hover:underline">View All Assets</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {industrialAgro.map((item) => <ListingCard key={item.id} {...item} />)}
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
