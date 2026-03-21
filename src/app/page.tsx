"use client";

import { useState } from 'react';
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
  PlusCircle,
  ShieldCheck,
  ChevronRight,
  Zap,
  Leaf
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

export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />

      {/* SEARCH-DRIVEN HERO */}
      <section className="bg-secondary text-white py-12 md:py-24 relative overflow-hidden border-b-4 border-accent">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg')] opacity-5 object-cover" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary text-gold px-4 py-1.5 rounded-full border border-gold/20 mb-4 animate-in fade-in slide-in-from-top-4 duration-700 shadow-xl">
               <ShieldCheck className="h-4 w-4 text-gold" />
               <span className="text-[10px] font-black uppercase tracking-widest">ACCRA'S PREMIER SECURE MARKETPLACE</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Buy & Sell <br /> <span className="text-accent">Anything in Ghana</span>
            </h1>
            <p className="text-white/60 text-sm md:text-xl font-bold uppercase tracking-widest max-w-2xl mx-auto">
              Cars, land, phones, rentals, jobs, services — all in one secure platform.
            </p>

            {/* THE MASTER SEARCH BOX */}
            <div className="bg-white p-2 md:p-3 shadow-2xl flex flex-col md:flex-row gap-2 rounded-none mt-12 border-4 border-white/10 group focus-within:border-accent transition-all">
               <div className="flex-[2] relative border-b md:border-b-0 md:border-r border-muted px-4 py-2 flex items-center gap-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input 
                    placeholder="What are you looking for?" 
                    className="w-full bg-transparent outline-none text-secondary font-bold uppercase text-xs"
                  />
               </div>
               <div className="flex-1 relative border-b md:border-b-0 md:border-r border-muted px-4 py-2 flex items-center gap-3">
                  <select className="w-full bg-transparent outline-none text-secondary font-black uppercase text-[10px] appearance-none cursor-pointer">
                    <option>All Categories</option>
                    {MARKET_CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
               </div>
               <div className="flex-1 relative px-4 py-2 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <select className="w-full bg-transparent outline-none text-secondary font-black uppercase text-[10px] appearance-none cursor-pointer">
                    <option>Accra</option>
                    <option>Tema</option>
                    <option>Kumasi</option>
                    <option>East Legon</option>
                    <option>Spintex</option>
                    <option>Kasoa</option>
                  </select>
               </div>
               <Button className="bg-primary text-white hover:bg-accent hover:text-secondary font-black uppercase text-xs tracking-widest px-10 h-14 rounded-[7%]">
                  Search
               </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
               <Link href="/listings">
                 <Button variant="ghost" className="text-white hover:bg-white/10 font-bold uppercase text-[10px] tracking-widest h-12 px-8 rounded-[7%] border border-white/20">
                   Browse Listings
                 </Button>
               </Link>
               <Button 
                 onClick={() => setShowAuth(true)}
                 className="bg-accent text-secondary hover:bg-white font-black uppercase text-[10px] tracking-widest h-12 px-8 rounded-[7%] shadow-lg"
               >
                 + Post Ad
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {MARKET_CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/listings?category=${cat.name}`}
              className="bg-white border hover:border-primary p-6 flex flex-col items-center justify-center gap-4 group transition-all shadow-sm"
            >
              <div className={cn("h-12 w-12 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner", cat.color)}>
                <cat.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">{cat.name}</p>
                <p className="text-[8px] font-bold text-muted-foreground uppercase mt-1">{cat.count} Ads</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FRESH LISTINGS FEED */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-10 border-b-2 border-primary/10 pb-6">
          <div className="flex items-center gap-4">
             <TrendingUp className="h-6 w-6 text-burgundy" />
             <h2 className="text-2xl font-black text-secondary uppercase tracking-tighter">Fresh Listings</h2>
          </div>
          <Link href="/listings" className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
            View All Ads <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button variant="outline" size="lg" className="px-16 border-2 border-primary text-primary font-black uppercase text-xs tracking-widest h-16 rounded-[7%] hover:bg-primary/5 shadow-xl">
              Load More Fresh Content
           </Button>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="container mx-auto px-4 py-12">
         <div className="bg-primary p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border-b-4 border-gold shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="relative z-10 space-y-6 text-center md:text-left max-w-2xl">
               <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 border border-white/20">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Sovereign Escrow Protocol</span>
               </div>
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Secure Your Next Purchase</h3>
               <p className="text-white/60 text-sm md:text-base font-medium uppercase tracking-widest leading-relaxed">
                  VaultCommerce acts as an authorized neutral party. Funds are only released to the seller after you inspect and approve the asset. No risk, pure trade.
               </p>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
               <Button className="bg-accent text-secondary hover:bg-white font-black uppercase text-xs tracking-widest px-12 h-16 rounded-[7%] shadow-2xl">
                  How Escrow Works
               </Button>
               <Button onClick={() => setShowAuth(true)} className="bg-white text-secondary hover:bg-accent font-black uppercase text-xs tracking-widest px-12 h-16 rounded-[7%] shadow-xl">
                  + Start Selling
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
