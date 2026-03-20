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
  Zap, 
  Headphones,
  ChevronLeft,
  Lock,
  Target,
  ShieldAlert,
  Fingerprint,
  Crown
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';

export default function HomePage() {
  const { toast } = useToast();
  const [loadingMore, setLoadingMore] = useState(false);

  const categories = [
    { name: 'Electronics', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png' },
    { name: 'Appliances', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png' },
    { name: 'Supermarket', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png' },
    { name: 'Furniture', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg' },
    { name: 'Beauty', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg' },
    { name: 'Cameras', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png' },
  ];

  return (
    <div className="flex flex-col gap-24 pb-32 bg-heritage-gradient min-h-screen bg-kente-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative rounded-[2rem] overflow-hidden group shadow-[0_32px_64px_-12px_rgba(212,175,55,0.15)] min-h-[550px] border-t border-l border-white/40">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Retail" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent flex items-center">
              <div className="pl-16 space-y-10 max-w-2xl">
                <div className="flex gap-3">
                  <Badge className="bg-primary/20 backdrop-blur-md text-primary py-1.5 px-6 rounded-full font-black border border-primary/30 text-[10px] tracking-[0.2em] uppercase">Enterprise Protocol v1.2</Badge>
                  <Badge className="bg-primary text-secondary py-1.5 px-6 rounded-full font-black border-none text-[10px] tracking-[0.2em] uppercase">Verified Vault</Badge>
                </div>
                <h2 className="text-7xl md:text-9xl font-headline font-black text-white leading-[0.8] tracking-tighter">
                  ACCRA'S <br /> <span className="text-primary">GOLD</span> STANDARD
                </h2>
                <p className="text-white/70 text-xl hidden md:block font-medium max-w-md leading-relaxed">
                  The ultimate high-trust retail aggregator. Secure your GHS in our sovereign vault and shop with total institutional confidence.
                </p>
                <div className="flex gap-5">
                  <Link href="/listings">
                    <Button size="lg" className="rounded-full px-14 bg-primary text-secondary hover:bg-white transition-all font-black h-20 text-xl shadow-2xl shadow-primary/20">
                      Explore the Vault <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full px-12 border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 font-black h-20 text-lg transition-all">
                    Sovereign Policy
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/listings" className="flex-1 relative rounded-[2rem] overflow-hidden shadow-2xl group block border border-primary/10">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary/80 backdrop-blur-[4px] p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700">
                <Badge className="bg-secondary text-primary w-fit mb-3 font-black px-4">50% LEGACY REBATE</Badge>
                <h3 className="text-secondary font-black text-4xl tracking-tighter">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-[2rem] overflow-hidden shadow-2xl group block border border-primary/10">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[4px] p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700">
                <Badge className="bg-primary text-secondary w-fit mb-3 font-black px-4">SOVEREIGN TRUST</Badge>
                <h3 className="text-white font-black text-4xl tracking-tighter">Makola Select</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Lock, title: 'Heritage Vault', sub: 'Institutionally Secured', color: 'text-primary' },
            { icon: Fingerprint, title: 'Verified Identity', sub: 'Protocol-Driven Audit', color: 'text-secondary' },
            { icon: Crown, title: 'Elite Concierge', sub: 'Priority GHS Support', color: 'text-primary' },
            { icon: ShieldCheck, title: 'Escrow Shield', sub: 'Sovereign Guarantee', color: 'text-accent' },
          ].map((feat, i) => (
            <Card key={i} className="border-none shadow-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-700 hover:-translate-y-3 rounded-[2rem] glass-card">
              <CardContent className="p-10 flex items-center gap-8">
                <div className={`h-20 w-20 rounded-[1.5rem] bg-muted/50 flex items-center justify-center shrink-0 border border-primary/10`}>
                  <feat.icon className={`h-10 w-10 ${feat.color}`} />
                </div>
                <div>
                  <h4 className="font-black text-2xl tracking-tighter mb-1 text-secondary">{feat.title}</h4>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.25em]">{feat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary font-black px-6 py-2 rounded-full uppercase tracking-[0.25em] text-[10px] bg-primary/5">Strategic Hubs</Badge>
            <h2 className="text-6xl font-black text-secondary tracking-tighter">Market Sectors</h2>
          </div>
          <Link href="/listings">
            <Button variant="ghost" className="text-primary font-black gap-3 hover:bg-primary/5 rounded-full px-10 h-16 text-lg">
              Explore All Hubs <ChevronRight className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-8 transition-all">
              <div className="w-40 h-40 rounded-[2.5rem] bg-white flex items-center justify-center overflow-hidden border-2 border-primary/5 shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000 p-10 group-hover:border-primary/20">
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={160} 
                  height={160} 
                  className="object-contain group-hover:brightness-110 transition-all duration-1000"
                />
              </div>
              <span className="text-sm font-black text-center group-hover:text-primary transition-colors tracking-[0.2em] uppercase text-secondary/70">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vault Favorites */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl font-black text-secondary tracking-tighter">Vault Elite Favorites</h2>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full shadow-2xl border-primary/10 w-16 h-16 hover:bg-primary hover:text-white transition-all"><ChevronLeft className="h-8 w-8" /></Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-2xl border-primary/10 w-16 h-16 hover:bg-primary hover:text-white transition-all"><ChevronRight className="h-8 w-8" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {LISTINGS.slice(0, 4).map((listing) => (
            <ListingCard key={listing.id} {...listing} provider={listing.vendorId} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-secondary rounded-[3rem] p-24 relative overflow-hidden text-center text-white shadow-[0_40px_80px_-15px_rgba(0,31,63,0.3)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -mr-64 -mt-64 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full -ml-64 -mb-64 blur-[120px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="flex justify-center mb-8">
               <div className="bg-white/5 p-6 rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-2xl">
                 <ShieldAlert className="h-16 w-16 text-primary" />
               </div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              SECURE YOUR <br /> <span className="text-primary">NEXT TRADE</span>
            </h2>
            <p className="text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
              Join the institutional-grade trade economy. From appliances to real estate, VaultCommerce ensures your capital is restricted until sovereign satisfaction is reached.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <Button size="lg" className="bg-primary text-secondary hover:bg-white rounded-full px-16 h-24 text-2xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105">
                Register My Vault <ChevronRight className="h-8 w-8 ml-3" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white bg-white/5 hover:bg-white/10 rounded-full px-16 h-24 text-2xl font-black backdrop-blur-md">
                Protocol Manual
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
