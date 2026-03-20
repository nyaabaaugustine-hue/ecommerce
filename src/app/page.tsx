"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Lock,
  ShieldAlert,
  Fingerprint,
  Crown,
  Store,
  Gavel,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';

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
          <div className="lg:col-span-8 relative rounded-none overflow-hidden group shadow-xl min-h-[500px] border border-border image-reveal">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Retail" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className="pl-12 space-y-6 max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <Badge className="bg-primary text-secondary font-bold uppercase text-[10px] tracking-widest px-4 py-1 rounded-none">Verified Escrow Protocol</Badge>
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                  ACCRA'S <span className="text-primary">GOLD</span> <br /> STANDARD
                </h2>
                <p className="text-white/80 text-lg hidden md:block font-medium">
                  The ultimate high-trust retail aggregator. Secure your GHS in our sovereign vault and shop with total institutional confidence.
                </p>
                <div className="flex gap-4">
                  <Link href="/listings">
                    <Button size="lg" className="rounded-none px-8 bg-primary text-secondary hover:bg-white transition-all font-bold h-14 text-lg">
                      Explore the Vault <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/listings" className="flex-1 relative rounded-none overflow-hidden shadow-lg group block border border-border image-reveal">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-secondary text-primary w-fit mb-2 font-bold px-3 rounded-none">50% LEGACY REBATE</Badge>
                <h3 className="text-secondary font-bold text-2xl">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-none overflow-hidden shadow-lg group block border border-border image-reveal">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover" />
              <div className="absolute inset-0 bg-secondary/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all">
                <Badge className="bg-primary text-secondary w-fit mb-2 font-bold px-3 rounded-none">SOVEREIGN TRUST</Badge>
                <h3 className="text-white font-bold text-2xl">Makola Select</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Marquee (Left to Right) */}
      <section className="bg-secondary py-20 overflow-hidden border-y border-primary/20">
        <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Institutional High-Movers</h2>
            <p className="text-white/50 text-sm uppercase tracking-widest font-bold">Protocol-Synchronized Inventory</p>
          </div>
          <Link href="/listings">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-secondary font-bold rounded-none h-12">
              View Global Registry
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <div className="animate-marquee gap-8">
            {[...LISTINGS, ...LISTINGS].map((listing, idx) => (
              <div key={`${listing.id}-${idx}`} className="w-[320px] shrink-0">
                <ListingCard {...listing} provider={listing.vendorId} />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />
        </div>
      </section>

      {/* Vendor Marquee (Right to Left) */}
      <section className="bg-white py-16 overflow-hidden border-b">
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Verified Registry Nodes</span>
          <h2 className="text-2xl font-black text-secondary tracking-tighter">OUR SOVEREIGN PARTNERS</h2>
        </div>
        
        <div className="relative">
          <div className="animate-marquee-reverse gap-8 py-4">
            {[...VENDORS, ...VENDORS].map((vendor, idx) => (
              <div key={`${vendor.id}-${idx}`} className="w-[280px] shrink-0">
                <Card className="border shadow-sm hover:border-primary transition-colors h-full bg-white group rounded-none">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 bg-muted flex items-center justify-center shrink-0 border border-border group-hover:bg-primary/10 transition-colors rounded-none overflow-hidden relative">
                      <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-secondary truncate">{vendor.name}</h4>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest truncate">{vendor.category}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-[10px] font-bold text-secondary">{vendor.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

      {/* Become a Seller Advertisement */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-secondary p-12 md:p-20 text-white space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <Badge className="bg-primary text-secondary font-black rounded-none">SELL ON VAULT</Badge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                MONETIZE YOUR <br /> <span className="text-primary">INVENTORY</span>
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-md">
                Join 500+ verified retailers in Accra. Secure your payouts via our **Multisig Escrow Protocol** and access high-fidelity buyers instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <Zap className="h-6 w-6 text-primary" />
                <h4 className="font-bold">Instant GHS Payouts</h4>
                <p className="text-xs text-white/50 leading-relaxed">Funds are cleared via Paystack the moment satisfaction is confirmed.</p>
              </div>
              <div className="space-y-2">
                <Gavel className="h-6 w-6 text-primary" />
                <h4 className="font-bold">Sovereign Protection</h4>
                <p className="text-xs text-white/50 leading-relaxed">Our legal layer protects you from chargebacks and fraudulent claims.</p>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="bg-white text-secondary hover:bg-primary hover:text-secondary px-12 h-16 font-black rounded-none shadow-2xl transition-all">
                Open Your Vault Shop <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[400px] bg-muted overflow-hidden image-reveal">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Become a Seller" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/20" />
            <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-8 border border-white/20">
               <div className="flex items-center gap-6">
                 <TrendingUp className="h-10 w-10 text-primary" />
                 <div>
                   <p className="text-white font-black text-2xl tracking-tighter">GH₵4.2M+</p>
                   <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">Monthly GHS Settlement Volume</p>
                 </div>
               </div>
            </div>
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
            <Card key={i} className="border shadow-sm hover:shadow-md transition-all rounded-none overflow-hidden group bg-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-none bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
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
            <Button variant="ghost" className="text-primary font-bold gap-2 rounded-none">
              Explore All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-4 transition-all">
              <div className="w-24 h-24 rounded-none bg-white flex items-center justify-center overflow-hidden border border-border shadow-sm group-hover:border-primary transition-all p-4 relative">
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={80} 
                  height={80} 
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-bold text-center uppercase tracking-widest text-secondary/70">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-secondary rounded-none p-16 relative overflow-hidden text-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center mb-4">
              <ShieldAlert className="h-12 w-12 text-primary animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              SECURE YOUR <span className="text-primary">NEXT TRADE</span>
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Join the institutional-grade trade economy. From appliances to real estate, VaultCommerce ensures your capital is restricted until sovereign satisfaction is reached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary text-secondary hover:bg-white rounded-none px-10 h-14 font-bold shadow-lg transition-all">
                Register My Vault <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}