
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Smartphone, 
  Zap, 
  RefreshCw, 
  Headphones,
  ShoppingBag,
  TrendingUp,
  ChevronLeft,
  Lock
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';

export default function HomePage() {
  const { toast } = useToast();
  const [loadingMore, setLoadingMore] = useState(false);

  const categories = [
    { name: 'Beauty', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg', color: 'bg-accent/10' },
    { name: 'Sports', icon: 'https://picsum.photos/seed/sport/100/100', color: 'bg-primary/10' },
    { name: 'Gadgets', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png', color: 'bg-slate-100' },
    { name: 'Clothing', icon: 'https://picsum.photos/seed/cloth/100/100', color: 'bg-amber-100' },
    { name: 'Stationery', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png', color: 'bg-green-100' },
    { name: 'Groceries', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/183297_wlhtmo.png', color: 'bg-lime-100' },
    { name: 'Toys', icon: 'https://picsum.photos/seed/toys/100/100', color: 'bg-destructive/10' },
    { name: 'Appliances', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png', color: 'bg-indigo-100' },
  ];

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
      toast({
        title: "Vault Synchronized",
        description: "Fresh Ghanaian inventory loaded into the marketplace.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-12 pb-24 bg-mesh-gradient">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden group shadow-2xl min-h-[450px] border-4 border-white">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Fashion" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/60 via-primary/40 to-transparent flex items-center">
              <div className="pl-12 space-y-6 max-w-xl">
                <div className="flex gap-2">
                  <Badge className="bg-white text-destructive hover:bg-white py-1 px-4 font-black">PREMIUM</Badge>
                  <Badge className="bg-accent text-white hover:bg-accent py-1 px-4 font-black">SECURE</Badge>
                </div>
                <h2 className="text-5xl md:text-7xl font-headline font-black text-white leading-[0.9] tracking-tighter">
                  HIGH-TRUST <br /> ACCRA RETAIL
                </h2>
                <p className="text-white/90 text-xl hidden md:block font-medium">
                  Experience the ultimate GHS vault-protected shopping. Up to 50% off global brands.
                </p>
                <Link href="/listings">
                  <Button size="lg" className="rounded-full px-12 bg-white text-primary hover:bg-accent hover:text-white font-black h-14 text-lg shadow-xl transition-all">
                    Unlock Deals <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-6">
            <Link href="/listings" className="flex-1 relative rounded-[1.5rem] overflow-hidden shadow-lg group block border-2 border-white">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-accent/40 backdrop-blur-[2px] p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-xs bg-destructive w-fit px-3 py-1 rounded-full mb-2">50% OFF</span>
                <h3 className="text-white font-black text-2xl">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-[1.5rem] overflow-hidden shadow-lg group block border-2 border-white">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-xs bg-accent w-fit px-3 py-1 rounded-full mb-2">TRUSTED</span>
                <h3 className="text-white font-black text-2xl">Makola Deals</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'Secure GHS Vault', sub: 'Paystack-Protected Payments', color: 'text-primary' },
            { icon: Star, title: 'Verified Satisfy', sub: 'Protocol-Driven Reviews', color: 'text-accent' },
            { icon: Headphones, title: '24/7 Concierge', sub: 'Local Support Hotline', color: 'text-destructive' },
            { icon: Lock, title: 'Escrow Shield', sub: 'SLA Guaranteed Delivery', color: 'text-primary' },
          ].map((feat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 rounded-[2rem]">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl bg-muted flex items-center justify-center`}>
                  <feat.icon className={`h-7 w-7 ${feat.color}`} />
                </div>
                <div>
                  <h4 className="font-black text-sm tracking-tight">{feat.title}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{feat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tighter">Market Sectors</h2>
            <p className="text-sm font-medium text-muted-foreground">Diversified Ghanaian commerce protocols.</p>
          </div>
          <Link href="/listings">
            <Button variant="ghost" className="text-primary font-black gap-2 hover:bg-primary/5 rounded-full px-6">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-4">
              <div className={`w-24 h-24 rounded-[2rem] ${cat.color} flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:rotate-6 transition-all duration-500 p-5`}>
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={80} 
                  height={80} 
                  className="object-contain group-hover:scale-125 transition-transform"
                />
              </div>
              <span className="text-xs font-black text-center group-hover:text-primary transition-colors tracking-tight">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-primary tracking-tighter">Vault Favorites</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full shadow-sm border-primary/20"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm border-primary/20"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LISTINGS.slice(0, 4).map((listing) => (
            <ListingCard key={listing.id} {...listing} provider={listing.vendorId} />
          ))}
        </div>
      </section>

      {/* Just For You */}
      <section className="container mx-auto px-4 bg-white/50 backdrop-blur-md py-16 rounded-[3rem] shadow-sm border border-white">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/10 text-accent hover:bg-accent/20 font-black py-1 px-4 border-none">INTELLIGENCE UNIT</Badge>
          <h2 className="text-4xl font-black text-primary tracking-tighter">Curated Protocol Matches</h2>
          <p className="text-muted-foreground font-medium max-w-lg mx-auto">AI-recommended listings verified by the VaultCommerce satisfaction algorithm.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {LISTINGS.map((listing, i) => (
            <ListingCard key={`${listing.id}-${i}`} {...listing} provider={listing.vendorId} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button 
            onClick={handleLoadMore}
            disabled={loadingMore}
            variant="outline" 
            size="lg" 
            className="rounded-full px-16 border-2 border-primary text-primary hover:bg-primary hover:text-white font-black h-16 transition-all shadow-xl shadow-primary/10"
          >
            {loadingMore ? 'Syncing Vault Nodes...' : 'Load More GHS Products'}
          </Button>
        </div>
      </section>
    </div>
  );
}
