
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  ChevronRight, 
  ArrowRight, 
  Store,
  Star,
  Activity,
  Plus,
  Rocket,
  TrendingUp,
  Zap,
  Smartphone,
  Home,
  ShoppingBag,
  Truck,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { PromotionPopup } from '@/components/promotion-popup';
import { NewsletterPopup } from '@/components/newsletter-popup';
import { useContent, useCurrency } from '@/components/providers';

const CATEGORIES = [
  { name: 'Supermarket', icon: ShoppingBag },
  { name: 'Phones & Tablets', icon: Smartphone },
  { name: 'Electronics', icon: Zap },
  { name: 'Home & Office', icon: Home },
  { name: 'Appliances', icon: Activity },
  { name: 'Computing', icon: Smartphone },
  { name: 'Fashion', icon: ShoppingBag },
  { name: 'Gaming', icon: Rocket },
  { name: 'Other categories', icon: Plus },
];

export default function HomePage() {
  const { content } = useContent();
  const { formatPrice } = useCurrency();
  const { hero, highlights, trust, cta } = content.pages.home.sections;
  const [showVendorModal, setShowVendorModal] = useState(false);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <PromotionPopup />
      <NewsletterPopup />

      {/* SECTION 1: Gateway Navigation Hub */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="hidden lg:flex lg:col-span-3 bg-white flex-col border shadow-sm rounded-none">
            <div className="p-4 border-b bg-muted/20">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" /> Marketplace Categories
               </h3>
            </div>
            <div className="flex-1 py-2">
              {CATEGORIES.map((cat, i) => (
                <Link 
                  key={i} 
                  href={`/listings?category=${cat.name}`} 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/5 group transition-colors"
                >
                  <cat.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-tight group-hover:text-primary">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative bg-white border shadow-sm overflow-hidden min-h-[400px] rounded-none">
            <Image 
              src={hero.imageUrl} 
              alt="Hero" 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8 md:p-12 space-y-6">
               <div className="bg-primary w-fit px-4 py-1 rounded-none">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest italic">{hero.badge}</p>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none max-w-md">
                  {hero.title}
               </h2>
               <Button className="w-fit h-14 px-12 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-xs tracking-widest shadow-2xl">
                  {hero.primaryCta} <ArrowRight className="ml-3 h-5 w-5" />
               </Button>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex-1 bg-white border p-6 flex flex-col justify-center gap-6 shadow-sm rounded-none">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center rounded-none">
                     <Phone className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase text-muted-foreground">Call / WhatsApp</p>
                     <p className="text-sm font-black text-secondary">{content.settings.supportPhone}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center rounded-none">
                     <Store className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase text-muted-foreground">Sell on Ecommerce</p>
                     <p className="text-sm font-black text-secondary">Apply for account</p>
                  </div>
               </div>
            </div>
            
            <div className="h-40 relative border shadow-sm overflow-hidden rounded-none">
               <Image 
                 src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" 
                 alt="Clearance" 
                 fill 
                 sizes="(max-width: 768px) 100vw, 400px"
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-2xl">CLEARANCE SALE</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Verified Partner Hub */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative bg-secondary overflow-hidden h-[500px] border-4 border-white shadow-2xl rounded-none">
             <Image 
               src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
               alt="Marketplace Selection" 
               fill 
               sizes="(max-width: 1200px) 100vw, 1000px"
               className="object-cover opacity-90 contrast-125" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-center">
                <Badge className="w-fit bg-[#f68b1e] text-secondary font-black px-4 py-1.5 rounded-none uppercase text-[10px] tracking-widest mb-6">
                  Verified Escrow System
                </Badge>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight max-w-2xl mb-8">
                  {trust.title}
                </h2>
                <p className="text-white/70 text-sm md:text-lg font-bold uppercase tracking-widest max-w-xl leading-relaxed mb-10">
                  {trust.description}
                </p>
                <Button className="w-fit h-16 px-12 bg-accent text-secondary hover:bg-white font-black uppercase text-xs tracking-[0.2em] shadow-2xl transition-all">
                  Explore Security <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="relative h-[238px] bg-[#f68b1e] overflow-hidden border-4 border-white shadow-xl rounded-none">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" 
                  alt="Partner Deal" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover" 
                />
                <div className="absolute bottom-4 right-4 bg-secondary p-4 flex flex-col items-center justify-center border border-white/10 shadow-2xl rounded-none">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">ESCROW ACTIVE</span>
                   <span className="text-[10px] font-black text-accent uppercase tracking-widest">GH₵ 4.2M</span>
                </div>
             </div>
             <div className="relative h-[238px] bg-white overflow-hidden border-4 border-white shadow-xl group rounded-none">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
                  alt="Partner Selection" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover opacity-80" 
                />
                <div className="absolute bottom-4 right-4 bg-secondary p-4 flex flex-col items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-transform rounded-none">
                   <div className="h-8 w-8 bg-accent/20 flex items-center justify-center mb-2 rounded-none">
                      <ShoppingBag className="h-4 w-4 text-accent" />
                   </div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">System Live</span>
                   <span className="text-[10px] font-black text-accent uppercase tracking-widest">Secure Flow</span>
                </div>
                <div className="absolute bottom-6 left-6">
                   <span className="text-secondary font-black uppercase text-xs bg-white px-4 py-1.5 shadow-lg tracking-widest rounded-none">Shop Now</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Fastest Selling Items Section */}
      <section className="bg-primary py-16 overflow-hidden border-y border-accent/20">
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-4">
             <TrendingUp className="h-6 w-6 text-accent animate-pulse" />
             <h2 className="text-2xl font-black text-white uppercase tracking-widest">Fastest Selling This Week</h2>
          </div>
        </div>
        <div className="animate-marquee gap-10 py-6">
          {[...LISTINGS, ...LISTINGS].map((listing, idx) => (
            <Link key={`${listing.id}-${idx}`} href={`/listings/${listing.id}`} className="w-[630px] shrink-0 block group">
               <Card className="rounded-none border-none bg-white/5 backdrop-blur-md p-8 flex gap-8 group-hover:bg-white/10 transition-all border border-white/10 hover:border-accent/30 cursor-pointer h-full">
                  <div className="relative h-48 w-48 bg-white overflow-hidden shrink-0 shadow-xl border border-white/10 rounded-none">
                     <Image 
                       src={listing.imageUrl} 
                       alt={listing.title} 
                       fill 
                       sizes="192px"
                       className="object-cover group-hover:scale-110 transition-transform" 
                     />
                  </div>
                  <div className="flex-1 flex flex-col justify-center overflow-hidden">
                     <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-accent text-secondary text-[8px] font-black rounded-none px-2 uppercase">{listing.inventoryStatus}</Badge>
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{listing.category}</span>
                     </div>
                     <h4 className="text-base font-black text-white uppercase tracking-tighter truncate mb-2 leading-none">{listing.title}</h4>
                     <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                           <span className="text-2xl font-black text-accent">{formatPrice(listing.price)}</span>
                           <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{listing.salesCount} Verified Orders</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Star className="h-5 w-5 fill-gold text-gold" />
                           <span className="text-xs font-bold text-white/60">{listing.rating}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all pr-4">
                     <ArrowRight className="h-10 w-10 text-accent" />
                  </div>
               </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-muted pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                 <Activity className="h-5 w-5 text-accent" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Activity Feed</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase">{highlights.title}</h2>
              <p className="text-muted-foreground font-medium text-xs md:text-sm uppercase tracking-widest">{highlights.subtitle}</p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-10 font-black transition-all gap-3 text-[10px] uppercase tracking-widest">
                View All Items <ChevronRight className="h-5 w-5" />
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

      {/* Vendor Registry */}
      <section className="bg-background py-16 overflow-hidden border-b border-muted">
        <div className="container mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-accent font-black uppercase tracking-widest text-[10px] mb-2 block">Our Trusted Partners</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tighter uppercase">{trust.title}</h2>
          </div>
          
          <Dialog open={showVendorModal} onOpenChange={setShowVendorModal}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white hover:bg-accent hover:text-secondary font-black px-10 h-14 uppercase text-[11px] tracking-widest gap-3 shadow-xl">
                <Store className="h-5 w-5" />
                Partner With Us
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-none border-t-4 border-t-accent shadow-2xl">
              <DialogHeader className="p-10 md:p-14 pb-0">
                <DialogTitle className="text-4xl font-black tracking-tighter uppercase leading-none">Become a Partner</DialogTitle>
                <DialogDescription className="text-secondary/60 text-sm font-medium leading-relaxed mt-4">
                  {trust.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-secondary p-10 md:p-14 text-white space-y-10">
                  <div className="space-y-6">
                    <Badge className="bg-accent text-secondary font-black rounded-none uppercase text-[10px] tracking-widest px-4 py-1">Join The System</Badge>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">Expand your reach through Ghana's most secure escrow-powered registry.</p>
                  </div>
                </div>
                <div className="p-10 md:p-14 bg-white flex flex-col justify-center space-y-8">
                  <div className="space-y-6">
                    <div className="grid gap-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-secondary">Business Name</label>
                      <input className="w-full border-b-2 border-muted focus:border-accent outline-none py-3 text-sm font-bold bg-transparent transition-colors" placeholder="e.g. Melcom Digital Hub" />
                    </div>
                  </div>
                  <Button className="w-full h-16 bg-primary text-white font-black uppercase tracking-widest text-[11px] hover:bg-accent hover:text-secondary transition-all shadow-xl">
                    Submit Application <Rocket className="h-5 w-5 ml-3" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="relative">
          <div className="animate-marquee-reverse gap-8 py-6 [animation-duration:40s]">
            {[...VENDORS, ...VENDORS].map((vendor, idx) => (
              <div key={`${vendor.id}-${idx}`} className="w-[350px] md:w-[480px] shrink-0 px-3">
                <Card className="border-none shadow-2xl hover:border-accent transition-all duration-500 h-[240px] md:h-[320px] bg-secondary group rounded-none relative overflow-hidden border-t-2 border-t-transparent hover:border-t-accent">
                  <Image 
                    src={vendor.bgUrl} 
                    alt={vendor.name} 
                    fill 
                    sizes="(max-width: 768px) 350px, 480px"
                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent p-8 md:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="h-14 w-14 md:h-16 md:w-16 bg-white p-2 rounded-none shadow-2xl relative shrink-0">
                        <Image src={vendor.logoUrl} alt={vendor.name} fill sizes="64px" className="object-contain p-1" unoptimized />
                      </div>
                      <div>
                        <h4 className="font-black text-lg md:text-2xl text-white tracking-tight leading-none mb-2">{vendor.name}</h4>
                        <div className="flex items-center gap-3">
                           <Badge className="bg-accent text-secondary font-black rounded-none text-[9px] uppercase tracking-tighter px-3 py-0.5">{vendor.category}</Badge>
                           <div className="flex items-center gap-1.5">
                             <Star className="h-4 w-4 fill-gold text-gold" />
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
            sizes="100vw"
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
            <p className="text-white/50 font-black uppercase tracking-[0.4em] text-[10px] md:text-sm max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/listings" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-accent text-secondary hover:bg-white hover:text-secondary px-14 h-16 font-black shadow-2xl transition-all text-xs uppercase tracking-widest border-2 border-accent">
                {cta.primaryButton} <ChevronRight className="h-6 w-6 ml-3" />
              </Button>
            </Link>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-14 h-16 font-black transition-all text-xs uppercase tracking-widest shadow-xl border-2 border-primary">
              {cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
