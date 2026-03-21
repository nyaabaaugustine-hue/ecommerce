
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
import { ShieldCheck, Activity, Zap, ArrowUpRight, Star } from 'lucide-react';
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

  // INDUSTRIAL SATIATION: Exactly 5 items per horizontal sector
  const eliteComputing = useMemo(() => filteredListings.filter(l => l.subcategory === 'Laptops').slice(0, 5), [filteredListings]);
  const smartCommunication = useMemo(() => filteredListings.filter(l => l.subcategory === 'Mobiles').slice(0, 5), [filteredListings]);
  const premiumAutos = useMemo(() => filteredListings.filter(l => l.category === 'Vehicles').slice(0, 5), [filteredListings]);
  const industrialAgro = useMemo(() => filteredListings.filter(l => l.category === 'Agriculture').slice(0, 5), [filteredListings]);
  const heritageFashion = useMemo(() => filteredListings.filter(l => l.category === 'Fashion').slice(0, 5), [filteredListings]);
  const corporateServices = useMemo(() => filteredListings.filter(l => l.category === 'Services').slice(0, 5), [filteredListings]);
  const eliteSports = useMemo(() => filteredListings.filter(l => l.category === 'Sports').slice(0, 5), [filteredListings]);
  const luxuryProperty = useMemo(() => filteredListings.filter(l => l.category === 'Property').slice(0, 5), [filteredListings]);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20 overflow-x-hidden transition-colors duration-500">
      <CategoryBar />
      
      <div className="max-w-7xl mx-auto w-full px-4 mb-8 md:mb-12 mt-4 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <HeroCarousel />
      </div>

      <SpotlightCategories />

      {/* REGISTRY SECTORS - EXACTLY 5 ITEMS PER GRID */}
      {eliteComputing.length > 0 && (
        <section className="w-full py-12 bg-muted/5 border-y border-primary/10">
          <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic text-foreground leading-none">
                (Most popular laptops)
              </h2>
              <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Premium Hardware Registry • ACCRA</p>
            </div>
            <Link href="/listings?category=Electronics" className="text-[10px] md:text-[11px] font-black text-primary hover:underline uppercase tracking-widest">
              View Full Registry
            </Link>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eliteComputing.map((item) => <HighFidelityListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {smartCommunication.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-16 md:py-24">
          <div className="mb-10 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most searched for mobiles)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Verified Smartphone Registry Hub</p>
            </div>
            <Link href="/listings?category=Electronics" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Directory</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {smartCommunication.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {/* INSTITUTIONAL PARTNER MARQUEE - SLOW MOTION */}
      <section className="bg-secondary py-24 text-white relative overflow-hidden">
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

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee-slow gap-10 py-4 whitespace-nowrap hover:[animation-play-state:paused]">
              {[...VENDORS, ...VENDORS].map((vendor, idx) => (
                <div key={`${vendor.id}-${idx}`} className="bg-white/5 border border-white/10 hover:border-primary transition-all duration-500 min-w-[380px] md:min-w-[450px] rounded-[7%] overflow-hidden flex flex-col shadow-2xl">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={vendor.bgUrl} alt={vendor.name} fill className="object-cover opacity-50 contrast-[1.1]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                    <div className="absolute bottom-6 left-8 flex items-end gap-6">
                      <div className="relative h-20 w-20 bg-white border-2 border-primary shadow-2xl p-2 rounded-[7%]">
                        <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-contain p-1" unoptimized />
                      </div>
                      <div className="pb-1 text-left whitespace-normal">
                        <Badge className="bg-primary text-secondary rounded-none font-black text-[8px] uppercase tracking-widest mb-2">PARTNER</Badge>
                        <h3 className="font-black text-white text-2xl tracking-tighter uppercase leading-none">{vendor.name}</h3>
                      </div>
                    </div>
                    <div className="absolute top-6 right-8">
                       <div className="bg-primary/90 backdrop-blur-md px-4 py-2 shadow-2xl flex flex-col items-center">
                          <span className="text-[9px] font-black text-secondary leading-none mb-1 uppercase">FIDELITY</span>
                          <span className="text-2xl font-black text-secondary leading-none">{vendor.fidelityScore}%</span>
                       </div>
                    </div>
                  </div>
                  <div className="p-10 space-y-10 flex-1 bg-secondary/30 border-t border-white/5">
                    <p className="text-[11px] font-medium text-white/60 uppercase tracking-widest h-12 line-clamp-2 whitespace-normal">{vendor.description}</p>
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-black text-white tracking-tight">{vendor.rating} Registry Rating</span>
                      </div>
                      <Badge variant="outline" className="border-white/20 text-white/40 rounded-none font-black text-[9px] uppercase tracking-widest">Since {vendor.joinedYear}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {premiumAutos.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most searched for vehicles)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Verified High-Value Vehicle Registry</p>
            </div>
            <Link href="/listings?category=Vehicles" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {premiumAutos.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {industrialAgro.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 border-t border-dashed">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most searched for agriculture)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Heavy Machinery & Farming Assets</p>
            </div>
            <Link href="/listings?category=Agriculture" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">View All Assets</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {industrialAgro.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {heritageFashion.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 bg-muted/5 border-y border-dashed">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most popular fashion)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Royal Kente & Heritage Design Nodes</p>
            </div>
            <Link href="/listings?category=Fashion" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {heritageFashion.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {corporateServices.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most popular services)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Corporate Services & Technical Audits</p>
            </div>
            <Link href="/listings?category=Services" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Directory</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {corporateServices.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {eliteSports.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 bg-secondary/5 border-y">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most searched for sports)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Performance Hardware Nodes</p>
            </div>
            <Link href="/listings?category=Sports" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eliteSports.map((item) => <ListingCard key={item.id} {...item} />)}
          </div>
        </section>
      )}

      {luxuryProperty.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-4 py-24 mb-12">
          <div className="mb-12 flex justify-between items-end">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter italic leading-none">(Most searched for property)</h2>
              <p className="text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">Elite Residential & Commercial Assets</p>
            </div>
            <Link href="/listings?category=Property" className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-widest">Full Registry</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {luxuryProperty.map((item) => <ListingCard key={item.id} {...item} />)}
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
