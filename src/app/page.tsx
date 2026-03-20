
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

const HERO_SLIDES = [
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg",
    badge: "Verified Escrow Protocol",
    title: <>ACCRA'S <span className="text-primary">GOLD</span> <br /> STANDARD</>,
    desc: "The ultimate high-trust retail aggregator. Secure your funds in our escrow system and shop with total confidence."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png",
    badge: "Premium Electronics",
    title: <>PREMIUM <span className="text-primary">SECURE</span> <br /> ELECTRONICS</>,
    desc: "Access authentic gadgets from verified Ghanaian partners. Every purchase is protected via our treasury until confirmed."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg",
    badge: "Premium Assets",
    title: <>HERITAGE <span className="text-primary">HOME</span> <br /> LIVING</>,
    desc: "Curating elite furniture with high-grade protection. Secure your lifestyle assets with SecureCommerce Escrow."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [showVendorModal, setShowVendorModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setIsSliding(false);
      }, 600);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <PromotionPopup />

      <section className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 relative rounded-none overflow-hidden group shadow-xl h-[400px] md:h-[500px] border border-border">
            <div className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out transform",
              isSliding ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-100 blur-0"
            )}>
              <Image 
                src={HERO_SLIDES[currentSlide].image} 
                alt="Hero" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className={cn(
                "px-6 md:pl-10 space-y-4 md:space-y-6 max-w-xl transition-all duration-500",
                isSliding ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"
              )}>
                <Badge className="bg-primary text-secondary font-bold uppercase text-[9px] md:text-[10px] tracking-widest px-4 py-1 rounded-none">
                  {HERO_SLIDES[currentSlide].badge}
                </Badge>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                  {HERO_SLIDES[currentSlide].title}
                </h2>
                <p className="text-white/80 text-sm md:text-base hidden sm:block font-medium leading-relaxed">
                  {HERO_SLIDES[currentSlide].desc}
                </p>
                <div className="flex gap-4">
                  <Link href="/listings" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full rounded-none px-8 bg-primary text-secondary hover:bg-white transition-all font-black h-12 md:h-14 text-xs uppercase tracking-widest">
                      Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Link href="/listings" className="relative h-full rounded-none overflow-hidden shadow-lg group block border border-border image-reveal min-h-[190px]">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Sale" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/90 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-secondary text-primary w-fit mb-2 font-black px-3 rounded-none text-[10px] tracking-widest">50% DISCOUNT</Badge>
                <h3 className="text-secondary font-black text-lg uppercase tracking-tight">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="relative h-full rounded-none overflow-hidden shadow-lg group block border border-border image-reveal min-h-[190px]">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Market deals" fill className="object-cover" />
              <div className="absolute inset-0 bg-secondary/90 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-primary text-secondary w-fit mb-2 font-black px-3 rounded-none text-[10px] tracking-widest">TRUSTED DEALS</Badge>
                <h3 className="text-white font-black text-lg uppercase tracking-tight">Makola Select</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--burgundy-light))] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4 border-b border-burgundy/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                 <Activity className="h-4 w-4 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Activity Feed</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-secondary tracking-tighter uppercase">FEATURED PRODUCTS</h2>
              <p className="text-muted-foreground font-medium text-[10px] md:text-xs uppercase tracking-widest">Premium items protected via Secure Escrow Protocols.</p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white h-11 px-8 font-black rounded-none transition-all gap-2 text-[10px] uppercase tracking-[0.2em]">
                All Products <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LISTINGS.slice(0, 12).map((listing) => (
              <ListingCard key={listing.id} {...listing} vendorId={listing.vendorId} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 overflow-hidden border-y">
        <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-1 block">Our Trusted Partners</span>
            <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tighter uppercase">THE ELITE VENDOR REGISTRY</h2>
          </div>
          
          <Dialog open={showVendorModal} onOpenChange={setShowVendorModal}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-primary text-secondary hover:bg-primary font-black rounded-none px-8 h-12 uppercase text-[10px] tracking-[0.2em] gap-2">
                <Store className="h-4 w-4" />
                Become a vendor now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-none border-t-4 border-t-primary">
              <DialogHeader className="sr-only">
                <DialogTitle>Become a Vault Partner</DialogTitle>
                <DialogDescription>Register your business to join Ghana's most trusted institutional marketplace.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-secondary p-8 md:p-12 text-white space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-primary text-secondary font-black rounded-none uppercase text-[9px] tracking-widest">Join the Registry</Badge>
                    <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">Become a <span className="text-primary">Vault</span> Partner</h3>
                    <p className="text-white/60 text-xs font-medium leading-relaxed">Join Ghana's most trusted institutional marketplace. Benefit from multi-sig security and GHS settlement speed.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-white/10 pb-2">Our Elite Partners</p>
                    <div className="space-y-4">
                       <div className="flex gap-4 items-center p-3 bg-white/5 border border-white/10">
                          <div className="h-10 w-10 bg-white relative p-1 shrink-0">
                            <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" fill className="object-contain" alt="Melcom" />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase">Melcom Digital Hub</p>
                            <p className="text-[9px] text-white/40 uppercase">Electronics • 4.9 Rating</p>
                          </div>
                       </div>
                       <div className="flex gap-4 items-center p-3 bg-white/5 border border-white/10">
                          <div className="h-10 w-10 bg-white relative p-1 shrink-0">
                            <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" fill className="object-contain" alt="PrimeRentals" />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase">PrimeRentals GH</p>
                            <p className="text-[9px] text-white/40 uppercase">Trusted Agency • 4.8 Rating</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 bg-white flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary">Business Name</label>
                      <input className="w-full border-b-2 border-muted focus:border-primary outline-none py-2 text-sm font-bold" placeholder="e.g. Melcom Digital Hub" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary">Institutional Category</label>
                      <select className="w-full border-b-2 border-muted focus:border-primary outline-none py-2 text-sm font-bold bg-transparent">
                        <option>Electronics</option>
                        <option>Real Estate</option>
                        <option>Home & Living</option>
                        <option>Professional Services</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary">Registry Description</label>
                      <textarea className="w-full border-b-2 border-muted focus:border-primary outline-none py-2 text-sm font-bold resize-none h-20" placeholder="Describe your institutional offerings..." />
                    </div>
                  </div>
                  
                  <Button className="w-full h-14 bg-secondary text-white font-black uppercase tracking-widest text-[11px] rounded-none hover:bg-primary transition-all">
                    Register as Vendor <Rocket className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="relative">
          <div className="animate-marquee-reverse gap-6 py-4 [animation-duration:100s]">
            {[...VENDORS, ...VENDORS].map((vendor, idx) => (
              <div key={`${vendor.id}-${idx}`} className="w-[320px] md:w-[450px] shrink-0 px-2">
                <Card className="border shadow-2xl hover:border-primary transition-all duration-500 h-[220px] md:h-[300px] bg-secondary group rounded-none relative overflow-hidden">
                  <Image src={vendor.bgUrl} alt={vendor.name} fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 md:gap-4 mb-3">
                      <div className="h-12 w-12 md:h-14 md:w-14 bg-white p-2 rounded-none shadow-xl relative shrink-0">
                        <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-contain p-1" unoptimized />
                      </div>
                      <div>
                        <h4 className="font-black text-base md:text-xl text-white tracking-tight leading-none mb-2">{vendor.name}</h4>
                        <div className="flex items-center gap-2">
                           <Badge className="bg-primary text-secondary font-black rounded-none text-[8px] uppercase tracking-tighter">{vendor.category}</Badge>
                           <div className="flex items-center gap-1">
                             <Star className="h-3 w-3 fill-primary text-primary" />
                             <span className="text-[10px] font-black text-white">{vendor.rating}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/60 text-[10px] md:text-xs font-medium line-clamp-2 max-w-sm leading-relaxed">
                      {vendor.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" 
            alt="Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-secondary/85 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="flex justify-center mb-2">
            <ShieldAlert className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
              SECURE YOUR <br /><span className="text-primary underline decoration-primary/30 underline-offset-[12px]">NEXT PURCHASE</span>
            </h2>
            <p className="text-white/50 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs max-w-2xl mx-auto">
              Escrow Protection Active for all GHS Transactions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary text-secondary hover:bg-white hover:text-secondary rounded-none px-12 h-14 font-black shadow-2xl transition-all text-sm uppercase tracking-widest border-2 border-primary">
              Register My Vault <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" className="bg-burgundy text-white hover:bg-burgundy/90 rounded-none px-12 h-14 font-black transition-all text-sm uppercase tracking-widest shadow-xl border-2 border-burgundy">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
