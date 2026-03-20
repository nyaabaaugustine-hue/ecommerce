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
  ChevronLeft,
  Lock,
  ShieldAlert,
  Fingerprint,
  Crown
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LISTINGS } from '@/lib/mock-data';

export default function HomePage() {
  const categories = [
    { name: 'Electronics', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png' },
    { name: 'Appliances', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png' },
    { name: 'Supermarket', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png' },
    { name: 'Furniture', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg' },
    { name: 'Beauty', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg' },
    { name: 'Cameras', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png' },
  ];

  return (
    <div className="flex flex-col gap-24 pb-32 bg-subtle-pattern min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden group shadow-xl min-h-[500px] border border-border">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Retail" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className="pl-12 space-y-6 max-w-xl">
                <Badge className="bg-primary text-secondary font-bold uppercase text-[10px] tracking-widest px-4 py-1">Verified Escrow Protocol</Badge>
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                  ACCRA'S <span className="text-primary">GOLD</span> <br /> STANDARD
                </h2>
                <p className="text-white/80 text-lg hidden md:block font-medium">
                  The ultimate high-trust retail aggregator. Secure your GHS in our sovereign vault and shop with total institutional confidence.
                </p>
                <div className="flex gap-4">
                  <Link href="/listings">
                    <Button size="lg" className="rounded-full px-8 bg-primary text-secondary hover:bg-white transition-all font-bold h-14 text-lg">
                      Explore the Vault <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/listings" className="flex-1 relative rounded-2xl overflow-hidden shadow-lg group block border border-border">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-secondary text-primary w-fit mb-2 font-bold px-3">50% LEGACY REBATE</Badge>
                <h3 className="text-secondary font-bold text-2xl">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-2xl overflow-hidden shadow-lg group block border border-border">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-secondary/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-primary text-secondary w-fit mb-2 font-bold px-3">SOVEREIGN TRUST</Badge>
                <h3 className="text-white font-bold text-2xl">Makola Select</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lock, title: 'Heritage Vault', sub: 'Institutionally Secured', color: 'text-primary' },
            { icon: Fingerprint, title: 'Verified Identity', sub: 'Protocol-Driven Audit', color: 'text-secondary' },
            { icon: Crown, title: 'Elite Concierge', sub: 'Priority GHS Support', color: 'text-primary' },
            { icon: ShieldCheck, title: 'Escrow Shield', sub: 'Sovereign Guarantee', color: 'text-secondary' },
          ].map((feat, i) => (
            <Card key={i} className="border-border shadow-sm hover:shadow-md transition-all rounded-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <feat.icon className={`h-6 w-6 ${feat.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary">{feat.title}</h4>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{feat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-secondary tracking-tight">Market Sectors</h2>
            <p className="text-muted-foreground">Browse by professional category</p>
          </div>
          <Link href="/listings">
            <Button variant="ghost" className="text-primary font-bold gap-2">
              Explore All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-4 transition-all">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border border-border shadow-sm group-hover:border-primary transition-all p-4">
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-bold text-center uppercase tracking-widest text-secondary/70">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vault Favorites */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-secondary tracking-tight">Vault Favorites</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LISTINGS.slice(0, 4).map((listing) => (
            <ListingCard key={listing.id} {...listing} provider={listing.vendorId} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-secondary rounded-2xl p-16 relative overflow-hidden text-center text-white shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center mb-4">
              <ShieldAlert className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              SECURE YOUR <span className="text-primary">NEXT TRADE</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Join the institutional-grade trade economy. From appliances to real estate, VaultCommerce ensures your capital is restricted until sovereign satisfaction is reached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary text-secondary hover:bg-white rounded-full px-10 h-14 font-bold shadow-lg transition-all">
                Register My Vault <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}