"use client";

import { useState, useEffect } from 'react';
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
  TrendingUp,
  MessageSquare,
  Plus
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LISTINGS, VENDORS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const HERO_SLIDES = [
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg",
    badge: "Verified Escrow Protocol",
    title: <>ACCRA'S <span className="text-primary">GOLD</span> <br /> STANDARD</>,
    desc: "The ultimate high-trust retail aggregator. Secure your GHS in our sovereign vault and shop with total institutional confidence."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png",
    badge: "Elite Inventory Layer",
    title: <>PREMIUM <span className="text-primary">VAULT</span> <br /> ELECTRONICS</>,
    desc: "Access authentic gadgets from verified Ghanaian partners. Every trade is restricted via the Vault Treasury until confirmed."
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg",
    badge: "Sovereign Asset Registry",
    title: <>HERITAGE <span className="text-primary">HOME</span> <br /> LIVING</>,
    desc: "Curating elite furniture with institutional-grade protection. Secure your lifestyle assets with VaultCommerce Escrow."
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Yaw Mensah",
    location: "East Legon",
    comment: "The vault system gave me peace of mind for my MacBook purchase. Highly professional.",
    rating: 5,
    date: "2 days ago",
    avatar: "https://picsum.photos/seed/yaw/40/40"
  },
  {
    id: 2,
    name: "Ama Serwaa",
    location: "Kumasi",
    comment: "Fast delivery and the item was exactly as described. Melcom is a great partner.",
    rating: 5,
    date: "1 week ago",
    avatar: "https://picsum.photos/seed/ama/40/40"
  },
  {
    id: 3,
    name: "Kofi Owusu",
    location: "Tema",
    comment: "I was skeptical about escrow in Ghana, but VaultCommerce proved me wrong. Seamless.",
    rating: 4,
    date: "3 days ago",
    avatar: "https://picsum.photos/seed/kofi/40/40"
  },
  {
    id: 4,
    name: "Afia Mansa",
    location: "Airport Residential",
    comment: "Security first. I love that my GH₵ only goes to the vendor once I'm happy.",
    rating: 5,
    date: "1 day ago",
    avatar: "https://picsum.photos/seed/afia/40/40"
  },
  {
    id: 5,
    name: "Kwame Boateng",
    location: "Osu",
    comment: "The best marketplace for authentic brands in Accra. No more fake items.",
    rating: 5,
    date: "4 days ago",
    avatar: "https://picsum.photos/seed/kwame/40/40"
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setIsSliding(false);
      }, 800);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleAddReview = () => {
    toast({
      title: "Registry Open",
      description: "Review submission is restricted to verified buyers. Please login.",
    });
  };

  const categories = [
    { name: 'Electronics', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png' },
    { name: 'Appliances', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png' },
    { name: 'Supermarket', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/161113d_wcatfr.png' },
    { name: 'Furniture', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132066.b_efva72.jpg' },
    { name: 'Beauty', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg' },
    { name: 'Cameras', icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999008/167240_prgdit.png' },
  ];

  const partners = [
    { name: 'Partner 1', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003514/thh_ayplwg.png' },
    { name: 'Partner 2', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/jjtj_yw3wpz.jpg' },
    { name: 'Partner 3', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/wghwegg_zaqfyj.jpg' },
    { name: 'Partner 4', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/tn_wcqrvc.png' },
    { name: 'Partner 5', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/wrfwf_onzwgf.png' },
    { name: 'Partner 6', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/erherh_gk3hxz.jpg' },
    { name: 'Partner 7', logo: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774003513/hrh_rucdbr.png' },
  ];

  return (
    <div className="flex flex-col gap-24 pb-32 bg-subtle-pattern min-h-screen">
      {/* Hero Slider Section */}
      <section className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative rounded-none overflow-hidden group shadow-xl min-h-[500px] border border-border">
            <div className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out transform",
              isSliding ? "scale-105 blur-sm opacity-50" : "scale-100 blur-0 opacity-100"
            )}>
              <Image 
                src={HERO_SLIDES[currentSlide].image} 
                alt="Vault Hero" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent flex items-center">
              <div className={cn(
                "pl-12 space-y-6 max-w-xl transition-all duration-700 delay-300",
                isSliding ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"
              )}>
                <Badge className="bg-primary text-secondary font-bold uppercase text-[10px] tracking-widest px-4 py-1 rounded-none">
                  {HERO_SLIDES[currentSlide].badge}
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h2>
                <p className="text-white/80 text-lg hidden md:block font-medium">
                  {HERO_SLIDES[currentSlide].desc}
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

            <div className="absolute bottom-8 right-12 flex gap-3">
              {HERO_SLIDES.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1 transition-all duration-500",
                    currentSlide === i ? "w-12 bg-primary" : "w-6 bg-white/30"
                  )} 
                />
              ))}
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

      {/* Product Marquee */}
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

      {/* Reviews Section - Black Background + Slow Marquee */}
      <section className="bg-black py-24 overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-3">
            <Badge className="bg-[#4285F4] text-white rounded-none uppercase font-black tracking-widest px-3 py-1">Registry Feedback</Badge>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase">SOVEREIGN TRUST REVIEWS</h2>
            <p className="text-white/50 font-medium max-w-lg">Audited testimonials from verified buyers in the VaultCommerce ecosystem.</p>
          </div>
          <Button 
            onClick={handleAddReview}
            className="bg-primary text-secondary hover:bg-white h-14 px-8 font-black rounded-none shadow-xl transition-all gap-2"
          >
            <Plus className="h-5 w-5" />
            Register My Feedback
          </Button>
        </div>

        <div className="relative">
          <div className="animate-marquee gap-8 py-8 [animation-duration:120s]">
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={`${review.id}-${i}`} className="w-[400px] shrink-0">
                <Card className="border-none shadow-2xl bg-white/5 backdrop-blur-md rounded-none overflow-hidden group hover:bg-white/10 transition-all duration-500">
                  <div className={cn(
                    "h-1.5 w-full",
                    i % 3 === 0 ? "bg-[#4285F4]" : i % 3 === 1 ? "bg-[#EA4335]" : "bg-[#FBBC05]"
                  )} />
                  <CardContent className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={cn(
                              "h-4 w-4 fill-current",
                              star <= review.rating 
                                ? (star === 1 ? "text-[#4285F4]" : star === 2 ? "text-[#EA4335]" : star === 3 ? "text-[#FBBC05]" : "text-[#34A853]")
                                : "text-white/10"
                            )} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{review.date}</span>
                    </div>
                    
                    <p className="text-white font-medium leading-relaxed italic text-sm">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="relative h-12 w-12 overflow-hidden border border-white/10">
                        <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-sm">{review.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                          <ShieldCheck className="h-3 w-3 text-[#34A853]" />
                          Verified {review.location} Buyer
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </section>

      {/* Vendor Marquee */}
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
                      <Image src={vendor.logoUrl} alt={vendor.name} fill className="object-cover" unoptimized />
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

      {/* Become a Seller */}
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
                  unoptimized
                />
              </div>
              <span className="text-xs font-bold text-center uppercase tracking-widest text-secondary/70">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands Registry */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="text-center mb-12">
           <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Institutional Integration</span>
           <h2 className="text-2xl font-black text-secondary tracking-tighter">GLOBAL PARTNER REGISTRY</h2>
        </div>
        <div className="relative overflow-hidden w-full h-24">
          <div className="animate-marquee-reverse gap-20 py-4 flex items-center [animation-duration:80s]">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="relative h-12 w-48 overflow-hidden flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain"
                    unoptimized
                  />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10" />
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