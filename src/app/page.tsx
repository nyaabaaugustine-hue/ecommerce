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
  Fingerprint
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
    <div className="flex flex-col gap-16 pb-24 bg-mesh-gradient min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden group shadow-2xl min-h-[500px] border-8 border-white">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Fashion" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent flex items-center">
              <div className="pl-12 space-y-8 max-w-2xl">
                <div className="flex gap-2">
                  <Badge className="bg-white/20 backdrop-blur-md text-white py-1.5 px-6 rounded-full font-black border-none text-[10px] tracking-widest uppercase">Protocol v1.2</Badge>
                  <Badge className="bg-secondary text-white py-1.5 px-6 rounded-full font-black border-none text-[10px] tracking-widest uppercase">Verified Escrow</Badge>
                </div>
                <h2 className="text-6xl md:text-8xl font-headline font-black text-white leading-[0.85] tracking-tighter">
                  HIGH-TRUST <br /> ACCRA RETAIL
                </h2>
                <p className="text-white/80 text-lg hidden md:block font-medium max-w-md leading-relaxed">
                  The ultimate GHS vault-protected shopping experience. Secure your funds via Paystack and shop with total peace of mind.
                </p>
                <div className="flex gap-4">
                  <Link href="/listings">
                    <Button size="lg" className="rounded-full px-12 bg-white text-primary hover:bg-accent hover:text-white font-black h-16 text-lg shadow-2xl transition-all hover:-translate-y-1">
                      Unlock Deals <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full px-10 border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 font-black h-16 transition-all">
                    Vault Policy
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/listings" className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-xl group block border-4 border-white">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px] p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Badge className="bg-white text-secondary w-fit mb-2 font-black">50% OFF</Badge>
                <h3 className="text-white font-black text-3xl tracking-tighter">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-xl group block border-4 border-white">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-accent/60 backdrop-blur-[2px] p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Badge className="bg-white text-accent w-fit mb-2 font-black">TRUSTED</Badge>
                <h3 className="text-white font-black text-3xl tracking-tighter">Makola Deals</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Lock, title: 'Secured Vault', sub: 'Paystack-Protected GHS', color: 'text-primary' },
            { icon: Fingerprint, title: 'Verified Identity', sub: 'Protocol-Driven Trust', color: 'text-accent' },
            { icon: Headphones, title: '24/7 Concierge', sub: 'Local Priority Support', color: 'text-secondary' },
            { icon: ShieldCheck, title: 'Escrow Shield', sub: 'Guaranteed Satisfaction', color: 'text-primary' },
          ].map((feat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-[2.5rem] glass-card">
              <CardContent className="p-8 flex items-center gap-6">
                <div className={`h-16 w-16 rounded-[1.5rem] bg-muted flex items-center justify-center shrink-0`}>
                  <feat.icon className={`h-8 w-8 ${feat.color}`} />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tight mb-0.5">{feat.title}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{feat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary/20 text-primary font-black px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">Ecosystem Hub</Badge>
            <h2 className="text-4xl font-black text-primary tracking-tighter">Market Sectors</h2>
          </div>
          <Link href="/listings">
            <Button variant="ghost" className="text-primary font-black gap-2 hover:bg-primary/5 rounded-full px-8 h-12">
              Explore All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-6 transition-all">
              <div className="w-32 h-32 rounded-[3rem] bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-xl group-hover:rotate-6 group-hover:shadow-2xl transition-all duration-700 p-8">
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={120} 
                  height={120} 
                  className="object-contain group-hover:scale-125 transition-transform duration-700"
                />
              </div>
              <span className="text-xs font-black text-center group-hover:text-primary transition-colors tracking-widest uppercase">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vault Favorites */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black text-primary tracking-tighter">Vault Favorites</h2>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full shadow-sm border-primary/20 w-12 h-12"><ChevronLeft className="h-5 w-5" /></Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm border-primary/20 w-12 h-12"><ChevronRight className="h-5 w-5" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {LISTINGS.slice(0, 4).map((listing) => (
            <ListingCard key={listing.id} {...listing} provider={listing.vendorId} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[4rem] p-16 relative overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center mb-6">
               <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md">
                 <ShieldAlert className="h-12 w-12 text-secondary" />
               </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              Ready to Secure Your Next Trade?
            </h2>
            <p className="text-xl text-white/80 font-medium max-w-xl mx-auto">
              Join the high-trust economy. Whether buying a fridge or renting a home, VaultCommerce ensures your GHS is restricted until you are 100% satisfied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white rounded-full px-12 h-20 text-xl font-black shadow-2xl transition-all">
                Create My Vault <ChevronRight className="h-6 w-6 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 rounded-full px-12 h-20 text-xl font-black">
                How it Works
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}