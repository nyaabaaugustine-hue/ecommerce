
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
  ShieldAlert
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
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

      {/* NODE 1: Jumia Style Hero Registry (Triple Column) */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Node: Category Sidebar */}
          <div className="hidden lg:flex lg:col-span-3 bg-white flex-col border shadow-sm">
            <div className="p-4 border-b bg-muted/20">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" /> Sector Registry
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

          {/* Center Node: Hero Slider */}
          <div className="lg:col-span-6 relative bg-white border shadow-sm overflow-hidden h-[400px] md:h-auto group min-h-[400px]">
            <Image 
              src={hero.imageUrl} 
              alt="Hero" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8 md:p-12 space-y-6">
               <div className="bg-primary w-fit px-4 py-1">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest italic">{hero.badge}</p>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none max-w-md">
                  {hero.title}
               </h2>
               <p className="text-white/70 text-sm font-medium uppercase tracking-widest max-w-sm hidden md:block">
                  {hero.description}
               </p>
               <Button className="w-fit h-14 px-12 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-xs tracking-widest rounded-none shadow-2xl">
                  {hero.primaryCta} <ArrowRight className="ml-3 h-5 w-5" />
               </Button>
            </div>
          </div>

          {/* Right Node: Utility Widgets */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex-1 bg-white border p-6 flex flex-col justify-center gap-6 shadow-sm group hover:border-primary transition-all cursor-pointer">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <Phone className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase text-muted-foreground">Call / WhatsApp</p>
                     <p className="text-sm font-black text-secondary">{content.settings.supportPhone}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <Store className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase text-muted-foreground">Sell on Vault</p>
                     <p className="text-sm font-black text-secondary">Apply for node</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <Truck className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase text-muted-foreground">Track Order</p>
                     <p className="text-sm font-black text-secondary">Fidelity Sync</p>
                  </div>
               </div>
            </div>
            
            <div className="h-40 relative border shadow-sm group overflow-hidden">
               <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Clearance" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-2xl">CLEARANCE SALE</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NODE 2: Reverted Sovereign Hero Registry (Full Width) */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-none overflow-hidden group shadow-2xl border-4 border-primary/10">
           <Image 
             src={hero.imageUrl} 
             alt="Hero" 
             fill 
             className="object-cover group-hover:scale-105 transition-transform duration-700" 
             priority 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent flex flex-col justify-center p-8 md:p-20 space-y-8">
              <Badge className="w-fit bg-primary text-secondary font-black px-6 py-2 rounded-none uppercase text-[10px] tracking-[0.4em]">
                {hero.badge}
              </Badge>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none max-w-4xl">
                {hero.title}
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-medium uppercase tracking-widest max-w-2xl leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button className="h-16 px-12 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-xs tracking-widest rounded-none shadow-2xl transition-all">
                  {hero.primaryCta} <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Flash Sales Node */}
      <section className="container mx-auto px-4 pb-6">
         <div className="bg-[#e61601] p-4 flex flex-col sm:flex-row items-center justify-between text-white border-b-4 border-accent">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-accent animate-pulse" />
                  <h3 className="text-xl font-black uppercase italic tracking-tighter">Flash Sales</h3>
               </div>
               <div className="hidden md:flex items-center gap-4 text-[11px] font-black uppercase tracking-widest">
                  <span className="opacity-70">Time Left:</span>
                  <div className="bg-white text-[#e61601] px-3 py-1 font-black">10h : 30m : 51s</div>
               </div>
            </div>
            <Link href="/listings" className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
               See All <ChevronRight className="h-4 w-4" />
            </Link>
         </div>
      </section>

      {/* Weekly Velocity Section (High Kinetic Speed) */}
      <section className="bg-primary py-12 overflow-hidden border-y border-accent/20">
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-4">
             <TrendingUp className="h-6 w-6 text-accent animate-pulse" />
             <h2 className="text-xl font-black text-white uppercase tracking-0.2em">Weekly Velocity: Best Selling Nodes</h2>
          </div>
        </div>
        <div className="animate-marquee gap-8 py-4 [animation-duration:25s]">
          {[...LISTINGS, ...LISTINGS].map((listing, idx) => (
            <div key={`${listing.id}-${idx}`} className="w-[300px] shrink-0">
               <Card className="rounded-none border-none bg-white/5 backdrop-blur-md p-4 flex gap-4 group hover:bg-white/10 transition-all border border-white/10 hover:border-accent/30 cursor-pointer">
                  <div className="relative h-16 w-16 bg-white overflow-hidden shrink-0">
                     <Image src={listing.imageUrl} alt={listing.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center overflow-hidden">
                     <h4 className="text-[10px] font-black text-white uppercase tracking-tighter truncate mb-1">{listing.title}</h4>
                     <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-accent">{formatPrice(listing.price)}</span>
                        <div className="flex items-center gap-1">
                           <Star className="h-2.5 w-2.5 fill-gold text-gold" />
                           <span className="text-[8px] font-bold text-white/60">{listing.rating}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all">
                     <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
               </Card>
            </div>
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
                 <span className="text-[10px] font-black uppercase tracking-0.4em text-primary">{highlights.badge}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase">{highlights.title}</h2>
              <p className="text-muted-foreground font-medium text-xs md:text-sm uppercase tracking-widest">{highlights.subtitle}</p>
            </div>
            <Link href="/listings">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-10 font-black rounded-none transition-all gap-3 text-[10px] uppercase tracking-0.2em">
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
      <section className="bg-background py-16 overflow-hidden border-b border-muted">
        <div className="container mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-accent font-black uppercase tracking-0.5em text-[10px] mb-2 block">{trust.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tighter uppercase">{trust.title}</h2>
          </div>
          
          <Dialog open={showVendorModal} onOpenChange={setShowVendorModal}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white hover:bg-accent hover:text-secondary font-black rounded-none px-10 h-14 uppercase text-[11px] tracking-0.2em gap-3 shadow-xl">
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
          <div className="animate-marquee-reverse gap-8 py-6 [animation-duration:40s]">
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
            <p className="text-white/50 font-black uppercase tracking-0.5em text-[10px] md:text-sm max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/listings" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-accent text-secondary hover:bg-white hover:text-secondary rounded-none px-14 h-16 font-black shadow-2xl transition-all text-xs uppercase tracking-widest border-2 border-accent">
                {cta.primaryButton} <ChevronRight className="h-6 w-6 ml-3" />
              </Button>
            </Link>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-14 h-16 font-black transition-all text-xs uppercase tracking-widest shadow-xl border-2 border-primary">
              {cta.secondaryButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
