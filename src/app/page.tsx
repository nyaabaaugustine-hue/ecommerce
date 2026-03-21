"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  Car, 
  Home, 
  Smartphone, 
  Briefcase, 
  ShoppingBag, 
  Armchair, 
  Sparkles,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Search,
  MapPin,
  LayoutGrid,
  Zap,
  TrendingUp,
  Clock,
  Shirt,
  UserCheck
} from 'lucide-react';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const MARKET_CATEGORIES = [
  { name: 'Vehicles', icon: Car, color: 'bg-blue-500/10 text-blue-400', count: '1,240+' },
  { name: 'Property', icon: Home, color: 'bg-green-500/10 text-green-400', count: '850+' },
  { name: 'Electronics', icon: Smartphone, color: 'bg-purple-500/10 text-purple-400', count: '3,100+' },
  { name: 'Home', icon: Armchair, color: 'bg-orange-500/10 text-orange-400', count: '1,100+' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-500/10 text-pink-400', count: '2,400+' },
  { name: 'Jobs', icon: Briefcase, color: 'bg-cyan-500/10 text-cyan-400', count: '420+' },
  { name: 'Services', icon: Sparkles, color: 'bg-yellow-500/10 text-yellow-400', count: '680+' },
  { name: 'Agriculture', icon: Leaf, color: 'bg-emerald-500/10 text-emerald-400', count: '350+' },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const freshListings = useMemo(() => {
    return [...LISTINGS].sort((a, b) => b.postedTimestamp - a.postedTimestamp);
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen pb-20">
      {/* SEARCH-DRIVEN HERO GATEWAY (OLX STYLE) */}
      <section className="relative bg-secondary overflow-hidden py-12 md:py-24 border-b border-white/5">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&auto=format&fit=crop" 
            alt="Accra Market" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-2">
              <Badge className="bg-primary text-secondary font-black uppercase text-[8px] tracking-widest px-3">
                ACCRA'S PREMIER SECURE MARKETPLACE
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight italic">
              Buy. Sell. <br /> <span className="text-primary not-italic">Find Anything in Ghana.</span>
            </h1>
            
            <p className="text-white/60 text-sm md:text-lg font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto">
              Phones, cars, land, rentals, services — all protected by our Sovereign Escrow Protocol.
            </p>

            {/* MASTER SEARCH COMMAND BAR */}
            <div className="bg-white p-2 md:p-3 shadow-2xl flex flex-col md:flex-row items-stretch gap-2 mt-12 border-4 border-primary/20">
              <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-muted min-h-[60px]">
                <Search className="h-5 w-5 text-primary" />
                <input 
                  placeholder="What are you looking for?" 
                  className="w-full bg-transparent outline-none text-secondary text-sm font-black uppercase placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-[0.6] flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-muted min-h-[60px]">
                <LayoutGrid className="h-5 w-5 text-primary/40" />
                <select className="w-full bg-transparent outline-none text-secondary text-[10px] font-black uppercase cursor-pointer">
                  <option>All Categories</option>
                  {MARKET_CATEGORIES.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div className="flex-[0.6] flex items-center px-4 gap-3 min-h-[60px]">
                <MapPin className="h-5 w-5 text-primary/40" />
                <select className="w-full bg-transparent outline-none text-secondary text-[10px] font-black uppercase cursor-pointer">
                  <option>Accra</option>
                  <option>Tema</option>
                  <option>Kumasi</option>
                  <option>East Legon</option>
                  <option>Kasoa</option>
                </select>
              </div>
              <Button className="h-[60px] md:h-auto px-12 bg-secondary text-white font-black uppercase tracking-widest text-xs rounded-none hover:bg-primary hover:text-secondary transition-all">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Link href="/listings">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black uppercase text-[10px] tracking-widest h-14 px-10 rounded-[7%]">
                  Browse Listings
                </Button>
              </Link>
              <Link href="/listings/create">
                <Button className="bg-primary text-secondary font-black uppercase text-[10px] tracking-[0.2em] h-14 px-10 rounded-[7%] shadow-2xl animate-pulse">
                  + Post Ad Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ICONIC CATEGORY BAR (OLX BR STYLE) */}
      <section className="container mx-auto px-4 py-8 border-b border-white/5">
        <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-4">
          {MARKET_CATEGORIES.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/listings?category=${cat.name}`}
              className="flex flex-col items-center gap-3 min-w-[100px] group"
            >
              <div className={cn("h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-none border border-white/5 bg-secondary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all shadow-sm")}>
                <cat.icon className="h-6 w-6 md:h-8 md:w-8 text-white/60 group-hover:text-primary transition-colors" />
              </div>
              <div className="text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors block">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LIVE MARKET FEED */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Fresh Listings</h3>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Updated just now across Ghana</p>
            </div>
          </div>
          <Link href="/listings" className="flex items-center gap-2 text-[10px] font-black text-primary uppercase hover:underline tracking-widest">
            View All Ads <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {freshListings.map(item => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="outline" className="border-primary/20 text-white hover:bg-primary/5 h-16 px-16 font-black uppercase text-xs tracking-[0.3em] rounded-none">
            Load More Listings
          </Button>
        </div>
      </section>

      {/* ESCROW TRUST LAYER */}
      <section className="container mx-auto px-4 mt-12 pb-20">
        <div className="bg-primary p-10 md:p-20 text-secondary relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 -mr-48 -mt-48 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-6 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 border border-secondary/20">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-secondary">Institutional Trust Active</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              Trade with <br /> <span className="text-white bg-secondary px-4 not-italic">Total Safety.</span>
            </h3>
            <p className="text-secondary/70 text-sm font-bold uppercase tracking-widest leading-relaxed">
              Every GHS transaction is secured through our 48-hour escrow protocol. Inspect before you release.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <Button className="bg-secondary text-primary hover:bg-white hover:text-secondary font-black uppercase text-xs tracking-widest h-16 px-12 rounded-[7%] shadow-2xl">
              How Escrow Works
            </Button>
            <Link href="/listings/create" className="w-full">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-black uppercase text-xs tracking-widest h-16 px-12 rounded-[7%] w-full">
                Post Your First Ad
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
