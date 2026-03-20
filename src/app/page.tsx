
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Lock,
  ShieldAlert,
  Store,
  Star,
  Activity,
  Plus,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { PromotionPopup } from '@/components/promotion-popup';
import { useContent } from '@/components/providers';

export default function HomePage() {
  const { content } = useContent();
  const { hero, highlights, trust, cta } = content.pages.home.sections;
  const [isSliding, setIsSliding] = useState(false);
  const [showVendorModal, setShowVendorModal] = useState(false);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <PromotionPopup />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative rounded-none overflow-hidden group shadow-2xl h-[450px] md:h-[550px] border border-primary/10">
            <div className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out transform scale-100 opacity-100 blur-0"
            )}>
              <Image 
                src={hero.imageUrl} 
                alt="Hero" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent flex items-center">
              <div className="px-8 md:pl-16 space-y-6 md:space-y-8 max-w-2xl">
                <Badge className="bg-accent text-secondary font-black uppercase text-[10px] tracking-[0.2em] px-5 py-1.5 rounded-none">
                  {hero.badge}
                </Badge>
                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
                  {hero.title}
                </h2>
                <p className="text-white/70 text-sm md:text-lg hidden sm:block font-medium leading-relaxed max-w-lg">
                  {hero.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="/listings" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full rounded-none px-10 bg-primary text-white hover:bg-accent hover:text-secondary transition-all font-black h-14 md:h-16 text-[11px] uppercase tracking-widest border-2 border-primary">
                      {hero.primaryCta} <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Link href="/listings" className="relative h-full rounded-none overflow-hidden shadow-xl group block border border-border image-reveal min-h-[210px]">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Sale" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm">
                <Badge className="bg-accent text-secondary w-fit mb-3 font-black px-4 py-1 rounded-none text-[10px] tracking-widest uppercase">Limited Institutional Sale</Badge>
                <h3 className="text-white font-black text-xl uppercase tracking-tighter">Ghana Heritage Selection</h3>
              </div>
            </Link>
            <Link href="/listings" className="relative h-full rounded-none overflow-hidden shadow-xl group block border border-border image-reveal min-h-[210px]">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Market deals" fill className="object-cover" />
              <div className="absolute inset-0 bg-secondary/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm">
                <Badge className="bg-accent text-secondary w-fit mb-3 font-black px-4 py-1 rounded-none text-[10px] tracking-widest uppercase">Verified Partners</Badge>
                <h3 className="text-white font-black text-xl uppercase tracking-tighter">Elite Vendor Registry</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-muted pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                 <Activity className="h-5 w-5 text-accent" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{highlights.badge}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase">{highlights.title}</h2>
              <p className="text-muted-foreground font-medium text-xs md:text-sm uppercase tracking-widest">{highlights.subtitle}</p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-10 font-black rounded-none transition-all gap-3 text-[10px] uppercase tracking-[0.2em]">
                View All Assets <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LISTINGS.slice(0, 12).map((listing) => (
              <ListingCard key={listing.id} {...listing} vendorId={listing.vendorId} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-background py-16 overflow-hidden border-y border-muted">
        <div className="container mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-2 block">{trust.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tighter uppercase">{trust.title}</h2>
          </div>
          
          <Dialog open={showVendorModal} onOpenChange={setShowVendorModal}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white hover:bg-accent hover:text-secondary font-black rounded-none px-10 h-14 uppercase text-[11px] tracking-[0.2em] gap-3 shadow-xl">
                <Store className="h-5 w-5" />
                Partner With Us
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-none border-t-4 border-t-accent shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-secondary p-10 md:p-14 text-white space-y-10">
                  <div className="space-y-6">
                    <Badge className="bg-accent text-secondary font-black rounded-none uppercase text-[10px] tracking-widest px-4 py-1">Join The Registry</Badge>
                    <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">Become a <span className="text-accent">Vault</span> Partner</h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">{trust.description}</p>
                  </div>
                </div>
                <div className="p-10 md:p-14 bg-white flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <div className="grid gap-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary">Institutional Name</label>
                      <input className="w-full border-b-2 border-muted focus:border-accent outline-none py-3 text-sm font-bold bg-transparent transition-colors" placeholder="e.g. Melcom Digital Hub" />
                    </div>
                  </div>
                  <Button className="w-full h-16 bg-primary text-white font-black uppercase tracking-widest text-[11px] rounded-none hover:bg-accent hover:text-secondary transition-all shadow-xl">
                    Submit Registry Application <Rocket className="h-5 w-5 ml-3" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="relative">
          <div className="animate-marquee-reverse gap-8 py-6 [animation-duration:100s]">
            {[...VENDORS, ...VENDORS].map((vendor, idx) => (
              <div key={`${vendor.id}-${idx}`} className="w-[350px] md:w-[480px] shrink-0 px-3">
                <Card className="border-none shadow-2xl hover:border-accent transition-all duration-500 h-[240px] md:h-[320px] bg-secondary group rounded-none relative overflow-hidden border-t-2 border-t-transparent hover:border-t-accent">
                  <Image src={vendor.bgUrl} alt={vendor.name} fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent p-8 md:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="h-14 w-14 md:h-16 md:w-16 bg-white p-2 rounded-none shadow-2xl relative shrink-0">
                        <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-contain p-1" unoptimized />
                      </div>
                      <div>
                        <h4 className="font-black text-lg md:text-2xl text-white tracking-tight leading-none mb-2">{vendor.name}</h4>
                        <div className="flex items-center gap-3">
                           <Badge className="bg-accent text-secondary font-black rounded-none text-[9px] uppercase tracking-tighter px-3 py-0.5">{vendor.category}</Badge>
                           <div className="flex items-center gap-1.5">
                             <Star className="h-4 w-4 fill-accent text-accent" />
                             <span className="text-[11px] font-black text-white">{vendor.rating}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/60 text-[11px] md:text-sm font-medium line-clamp-2 max-w-sm leading-relaxed italic">
                      "{vendor.description}"
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" 
            alt="Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-[4px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-10">
          <div className="flex justify-center mb-4">
            <ShieldAlert className="h-20 w-20 text-accent animate-pulse" />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
              {cta.title}
            </h2>
            <p className="text-white/50 font-black uppercase tracking-[0.5em] text-[10px] md:text-sm max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="bg-accent text-secondary hover:bg-white hover:text-secondary rounded-none px-14 h-16 font-black shadow-2xl transition-all text-xs uppercase tracking-widest border-2 border-accent">
              {cta.primaryButton} <ChevronRight className="h-6 w-6 ml-3" />
            </Button>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-14 h-16 font-black transition-all text-xs uppercase tracking-widest shadow-xl border-2 border-primary">
              {cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
