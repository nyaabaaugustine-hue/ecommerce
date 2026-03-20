
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
  Star, 
  Lock,
  ShieldAlert,
  Plus
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const HERO_SLIDES = [
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg",
    badge: "Verified Escrow Protocol",
    title: <>ACCRA'S <span className="text-primary">GOLD</span> <br /> STANDARD</>,
    desc: "The ultimate high-trust retail aggregator. Secure your GHS in our sovereign vault and shop with total institutional confidence."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png",
    badge: "Elite Inventory Layer",
    title: <>PREMIUM <span className="text-primary">VAULT</span> <br /> ELECTRONICS</>,
    desc: "Access authentic gadgets from verified Ghanaian partners. Every trade is restricted via the Vault Treasury until confirmed."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg",
    badge: "Sovereign Asset Registry",
    title: <>HERITAGE <span className="text-primary">HOME</span> <br /> LIVING</>,
    desc: "Curating elite furniture with institutional-grade protection. Secure your lifestyle assets with VaultCommerce Escrow."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setIsSliding(false);
      }, 800);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-12 md:gap-24 bg-subtle-pattern min-h-screen">
      {/* Hero Slider Section */}
      <section className="container mx-auto px-4 pt-6 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative rounded-none overflow-hidden group shadow-xl min-h-[400px] md:min-h-[500px] border border-border">
            <div className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out transform",
              isSliding ? "scale-105 blur-sm opacity-50" : "scale-100 blur-0 opacity-100"
            )}>
              <Image 
                src={HERO_SLIDES[currentSlide].image} 
                alt="Vault Hero" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className={cn(
                "px-6 md:pl-12 space-y-4 md:space-y-6 max-w-xl transition-all duration-700 delay-300",
                isSliding ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"
              )}>
                <Badge className="bg-primary text-secondary font-bold uppercase text-[9px] md:text-[10px] tracking-widest px-4 py-1 rounded-none">
                  {HERO_SLIDES[currentSlide].badge}
                </Badge>
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h2>
                <p className="text-white/80 text-base md:text-lg hidden sm:block font-medium">
                  {HERO_SLIDES[currentSlide].desc}
                </p>
                <div className="flex gap-4">
                  <Link href="/listings" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full rounded-none px-8 bg-primary text-secondary hover:bg-white transition-all font-bold h-12 md:h-14 text-base md:text-lg">
                      Explore the Vault <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-8">
            <Link href="/listings" className="relative h-40 md:h-full rounded-none overflow-hidden shadow-lg group block border border-border image-reveal">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/90 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-secondary text-primary w-fit mb-2 font-bold px-3 rounded-none">50% LEGACY REBATE</Badge>
                <h3 className="text-secondary font-bold text-xl md:text-2xl">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="relative h-40 md:h-full rounded-none overflow-hidden shadow-lg group block border border-border image-reveal">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover" />
              <div className="absolute inset-0 bg-secondary/90 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-primary text-secondary w-fit mb-2 font-bold px-3 rounded-none">SOVEREIGN TRUST</Badge>
                <h3 className="text-white font-bold text-xl md:text-2xl">Makola Select</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Registry Section - 12 INNOVATIVE PRODUCTS */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <Badge className="bg-secondary text-primary rounded-none uppercase font-black tracking-widest px-3 py-1">Sovereign Selection</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase">FEATURED INSTITUTIONAL REGISTRY</h2>
            <p className="text-muted-foreground font-medium max-w-lg text-sm md:text-base">Authentic inventory across all sectors, restricted via VaultCommerce protocols.</p>
          </div>
          <Link href="/listings">
            <Button className="bg-primary text-secondary hover:bg-secondary hover:text-white h-12 md:h-14 px-8 font-black rounded-none shadow-xl transition-all gap-2">
              Browse Global Vault <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {LISTINGS.slice(0, 12).map((listing) => (
            <ListingCard key={listing.id} {...listing} vendorId={listing.vendorId} />
          ))}
        </div>
      </section>

      {/* Vendor Marquee - Big Background Images */}
      <section className="bg-white py-20 md:py-32 overflow-hidden border-y">
        <div className="container mx-auto px-4 mb-16 text-center">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Sovereign Partner Network</span>
          <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase">THE ELITE VENDOR REGISTRY</h2>
        </div>
        
        <div className="relative">
          <div className="animate-marquee-reverse gap-8 py-4 [animation-duration:120s]">
            {[...VENDORS, ...VENDORS].map((vendor, idx) => (
              <div key={`${vendor.id}-${idx}`} className="w-[400px] md:w-[600px] shrink-0 px-4">
                <Card className="border shadow-2xl hover:border-primary transition-all duration-500 h-[300px] md:h-[400px] bg-secondary group rounded-none relative overflow-hidden">
                  <Image src={vendor.bgUrl} alt={vendor.name} fill className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 md:h-20 md:w-20 bg-white p-3 rounded-none shadow-xl relative shrink-0">
                        <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-contain p-2" unoptimized />
                      </div>
                      <div>
                        <h4 className="font-black text-xl md:text-3xl text-white tracking-tight">{vendor.name}</h4>
                        <div className="flex items-center gap-2">
                           <Badge className="bg-primary text-secondary font-black rounded-none text-[10px] uppercase">{vendor.category}</Badge>
                           <div className="flex items-center gap-1">
                             <Star className="h-3 w-3 fill-primary text-primary" />
                             <span className="text-xs font-black text-white">{vendor.rating}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm font-medium line-clamp-2 max-w-md">
                      {vendor.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

      {/* CTA Section - FULL WIDTH CLOUD IMAGE */}
      <section className="w-full py-24 md:py-32 relative overflow-hidden border-y border-primary/20">
        <div className="absolute inset-0">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" 
            alt="Sovereign Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-secondary/85 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 md:space-y-12">
          <div className="flex justify-center mb-4">
            <ShieldAlert className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              SECURE YOUR <br /><span className="text-primary underline decoration-primary/20 underline-offset-8">NEXT TRADE</span>
            </h2>
            <p className="text-white/50 font-bold uppercase tracking-[0.3em] text-xs md:text-sm max-w-2xl mx-auto">
              Institutional Escrow Protocols Active in the GHS Sovereignty.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" className="bg-primary text-secondary hover:bg-white rounded-none px-12 h-16 font-black shadow-2xl transition-all text-base uppercase tracking-widest">
              Register My Vault <ChevronRight className="h-6 w-6 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 rounded-none px-12 h-16 font-black transition-all text-base uppercase tracking-widest">
              Security Protocol Manual
            </Button>
          </div>
        </div>
        
        {/* Animated Background Icons */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5 pointer-events-none">
          <Lock className="h-64 w-64 text-white" />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none">
          <ShieldCheck className="h-64 w-64 text-white" />
        </div>
      </section>
      
      <div className="pb-24" />
    </div>
  );
}
