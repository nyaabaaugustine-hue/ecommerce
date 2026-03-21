"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  Search, 
  Car, 
  Home, 
  Smartphone, 
  Briefcase, 
  ShoppingBag, 
  Armchair, 
  Sparkles,
  MapPin,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Leaf,
  PlusCircle,
  LayoutGrid
} from 'lucide-react';
import { LISTINGS } from '@/lib/mock-data';
import { AuthDialog } from '@/components/auth-dialog';
import { cn } from '@/lib/utils';

const MARKET_CATEGORIES = [
  { name: 'Vehicles', icon: Car, color: 'bg-blue-50 text-blue-600', count: '1,240+' },
  { name: 'Property', icon: Home, color: 'bg-green-50 text-green-600', count: '850+' },
  { name: 'Electronics', icon: Smartphone, color: 'bg-purple-50 text-purple-600', count: '3,100+' },
  { name: 'Home & Furniture', icon: Armchair, color: 'bg-orange-50 text-orange-600', count: '1,100+' },
  { name: 'Fashion', icon: ShoppingBag, color: 'bg-pink-50 text-pink-600', count: '2,400+' },
  { name: 'Jobs', icon: Briefcase, color: 'bg-cyan-50 text-cyan-600', count: '420+' },
  { name: 'Services', icon: Sparkles, color: 'bg-yellow-50 text-yellow-600', count: '680+' },
  { name: 'Agriculture', icon: Leaf, color: 'bg-emerald-50 text-emerald-600', count: '350+' },
];

const LOCATIONS = ['Accra', 'Tema', 'Kumasi', 'East Legon', 'Spintex', 'Kasoa', 'Takoradi', 'Tamale'];

/**
 * @fileOverview Marketplace Home Engine
 * Senior Architecture: Modular sections, search-driven UI, and recency-first listing feeds.
 */
export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const freshListings = useMemo(() => LISTINGS.slice(0, 8), []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />

      {/* SEARCH-DRIVEN HERO GATEWAY */}
      <section className="bg-secondary text-white py-16 md:py-32 relative overflow-hidden border-b-4 border-primary">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg')] opacity-5 object-cover" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 bg-primary text-gold px-5 py-2 rounded-full border border-gold/20 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 shadow-2xl">
               <ShieldCheck className="h-4 w-4 text-gold animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Accra's Premier Secure Marketplace</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                Buy. Sell. <br /> <span className="text-primary italic">Find Anything.</span>
              </h1>
              <p className="text-white/50 text-xs md:text-xl font-bold uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed">
                Cars, property, electronics, jobs, and services — all localized for Ghana and protected by Sovereign Escrow.
              </p>
            </div>

            {/* THE COMMAND SEARCH BAR */}
            <div className="bg-white p-2 md:p-4 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-2 rounded-none mt-12 border-4 border-white/5 group focus-within:border-primary transition-all duration-500">
               <div className="flex-[2] relative border-b lg:border-b-0 lg:border-r border-muted px-4 py-3 flex items-center gap-4">
                  <Search className="h-6 w-6 text-primary" />
                  <input 
                    placeholder="What are you looking for?" 
                    className="w-full bg-transparent outline-none text-secondary font-black uppercase text-sm placeholder:text-muted-foreground/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <div className="flex-1 relative border-b lg:border-b-0 lg:border-r border-muted px-4 py-3 flex items-center gap-3">
                  <LayoutGrid className="h-5 w-5 text-primary opacity-40" />
                  <select className="w-full bg-transparent outline-none text-secondary font-black uppercase text-[11px] appearance-none cursor-pointer">
                    <option>All Categories</option>
                    {MARKET_CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
               </div>
               <div className="flex-1 relative px-4 py-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <select className="w-full bg-transparent outline-none text-secondary font-black uppercase text-[11px] appearance-none cursor-pointer">
                    {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
               </div>
               <Button className="bg-primary text-secondary hover:bg-white hover:text-secondary font-black uppercase text-xs tracking-[0.2em] px-12 h-16 rounded-[7%] shadow-2xl transition-all duration-500">
                  Execute Search
               </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
               <Link href="/listings">
                 <Button variant="ghost" className="text-white hover:bg-white/10 font-bold uppercase text-[10px] tracking-widest h-12 px-10 rounded-[7%] border border-white/20 transition-all">
                   Explore Registry
                 </Button>
               </Link>
               <Button 
                 onClick={() => setShowAuth(true)}
                 className="bg-primary text-secondary hover:bg-white font-black uppercase text-[10px] tracking-[0.3em] h-12 px-10 rounded-[7%] shadow-2xl"
               >
                 + Post Free Ad
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY INFRASTRUCTURE */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {MARKET_CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/listings?category=${cat.name}`}
              className="bg-white border-2 border-transparent hover:border-primary p-8 flex flex-col items-center justify-center gap-5 group transition-all duration-500 shadow-xl"
            >
              <div className={cn("h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner", cat.color)}>
                <cat.icon className="h-7 w-7" />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-black text-secondary uppercase tracking-widest">{cat.name}</p>
                <p className="text-[8px] font-bold text-muted-foreground uppercase mt-1.5 opacity-60">{cat.count} Nodes</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DYNAMIC LISTINGS FEED */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-12 border-b-2 border-primary/5 pb-8">
          <div className="flex items-center gap-5">
             <div className="h-12 w-12 bg-burgundy/5 flex items-center justify-center text-burgundy shadow-inner">
                <TrendingUp className="h-6 w-6" />
             </div>
             <div>
                <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter leading-none">Fresh Listings</h2>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5">Real-time marketplace activity across Ghana.</p>
             </div>
          </div>
          <Link href="/listings" className="group flex items-center gap-3">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] group-hover:underline">View All Ads</span>
            <div className="h-8 w-8 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
               <ChevronRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {freshListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>

        <div className="mt-20 text-center">
           <Button variant="outline" size="lg" className="px-20 border-2 border-primary/20 text-primary font-black uppercase text-xs tracking-[0.3em] h-16 rounded-[7%] hover:bg-primary/5 hover:border-primary shadow-2xl transition-all">
              Load More Content
           </Button>
        </div>
      </section>

      {/* INSTITUTIONAL TRUST PROTOCOL */}
      <section className="container mx-auto px-4 py-12">
         <div className="bg-primary p-10 md:p-24 text-secondary relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 border-b-8 border-gold shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-80 -mt-80 blur-3xl" />
            <div className="relative z-10 space-y-8 text-center lg:text-left max-w-3xl">
               <div className="inline-flex items-center gap-3 bg-secondary/10 px-5 py-2 border border-secondary/20 shadow-inner">
                  <ShieldCheck className="h-5 w-5 text-secondary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Sovereign Escrow Protocol v1.4</span>
               </div>
               <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-secondary">
                  Trade with <br /> <span className="text-white bg-secondary px-4">Absolute Safety.</span>
               </h3>
               <p className="text-secondary/70 text-sm md:text-lg font-medium uppercase tracking-widest leading-relaxed">
                  VaultCommerce eliminates marketplace risk. Your funds are held in a secure GHS treasury node and only released to the seller after you authorize the inspection.
               </p>
            </div>
            <div className="relative z-10 flex flex-col gap-5 w-full lg:w-auto">
               <Button className="bg-secondary text-primary hover:bg-white hover:text-secondary font-black uppercase text-xs tracking-[0.3em] px-16 h-20 rounded-[7%] shadow-2xl transition-all duration-500">
                  How Escrow Works
               </Button>
               <Button onClick={() => setShowAuth(true)} className="bg-white text-secondary hover:bg-secondary hover:text-white font-black uppercase text-xs tracking-[0.3em] px-16 h-20 rounded-[7%] shadow-xl transition-all duration-500">
                  + Start Selling Now
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
