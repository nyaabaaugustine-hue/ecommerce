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
  ChevronLeft
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function HomePage() {
  const { toast } = useToast();
  const [loadingMore, setLoadingMore] = useState(false);

  const categories = [
    { name: 'Beauty', icon: 'https://picsum.photos/seed/beauty/100/100', color: 'bg-pink-100' },
    { name: 'Sports', icon: 'https://picsum.photos/seed/sport/100/100', color: 'bg-blue-100' },
    { name: 'Gadgets', icon: 'https://picsum.photos/seed/gadget/100/100', color: 'bg-slate-100' },
    { name: 'Clothing', icon: 'https://picsum.photos/seed/cloth/100/100', color: 'bg-amber-100' },
    { name: 'Stationery', icon: 'https://picsum.photos/seed/stat/100/100', color: 'bg-green-100' },
    { name: 'Groceries', icon: 'https://picsum.photos/seed/groc/100/100', color: 'bg-lime-100' },
    { name: 'Toys', icon: 'https://picsum.photos/seed/toys/100/100', color: 'bg-purple-100' },
    { name: 'Appliances', icon: 'https://picsum.photos/seed/app/100/100', color: 'bg-indigo-100' },
  ];

  const popularListings = [
    {
      id: '1',
      title: 'Fitbit Charge 6 Fitness Tracker',
      category: 'Electronics',
      price: 1815,
      oldPrice: 2685,
      location: 'Accra',
      imageUrl: PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl || '',
      rating: 4.8,
      provider: 'GadgetHub',
      discount: '32% OFF'
    },
    {
      id: '2',
      title: 'Premium Korean Skincare Set',
      category: 'Beauty',
      price: 900,
      oldPrice: 1275,
      location: 'Accra',
      imageUrl: 'https://picsum.photos/seed/skincare/400/400',
      rating: 4.9,
      provider: 'K-Beauty',
      discount: '15% OFF'
    },
    {
      id: '3',
      title: 'HDR 4K UHD Smart TV 55"',
      category: 'Electronics',
      price: 4785,
      oldPrice: 7485,
      location: 'Accra',
      imageUrl: 'https://picsum.photos/seed/tv/400/400',
      rating: 4.7,
      provider: 'VisionDirect',
      discount: '36% OFF'
    },
    {
      id: '4',
      title: 'Sony Alpha Mirrorless Camera',
      category: 'Photography',
      price: 27000,
      location: 'Kumasi',
      imageUrl: 'https://picsum.photos/seed/camera/400/400',
      rating: 5.0,
      provider: 'PhotoWorld'
    }
  ];

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
      toast({
        title: "More Items Loaded",
        description: "Displaying latest marketplace updates for you.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-12 pb-24 bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 relative rounded-[1.5rem] overflow-hidden group shadow-lg min-h-[400px]">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg" 
              alt="Premium Accra Fashion" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="pl-12 space-y-4 max-w-xl">
                <Badge className="bg-primary text-white hover:bg-primary py-1 px-4">New Arrival</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
                  Premium <br /> Accra Fashion
                </h2>
                <p className="text-white/90 text-lg hidden md:block">
                  Get up to 50% off on premium brands. Secured by Vault Escrow Ghana.
                </p>
                <Link href="/listings">
                  <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 mt-4">Shop Now</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-6">
            <Link href="/listings" className="flex-1 relative rounded-2xl overflow-hidden shadow-md group block">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg" alt="Akwaaba Sale" fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-center">
                <span className="text-primary font-bold text-sm bg-white/90 w-fit px-2 py-0.5 rounded">UP TO 50% OFF</span>
                <h3 className="text-white font-bold text-xl mt-2">Akwaaba Sale</h3>
              </div>
            </Link>
            <Link href="/listings" className="flex-1 relative rounded-2xl overflow-hidden shadow-md group block">
              <Image src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg" alt="Makola Market deals" fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-center">
                <span className="text-emerald-500 font-bold text-sm bg-white/90 w-fit px-2 py-0.5 rounded">FRESH ORGANIC</span>
                <h3 className="text-white font-bold text-xl mt-2">Makola Market Deals</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: 'Secure Payment', sub: 'Mobile Money & Cards' },
            { icon: Star, title: 'Genuine Reviews', sub: 'Verified Ghanaian Users' },
            { icon: Headphones, title: '24/7 Support', sub: 'Local support team' },
            { icon: RefreshCw, title: 'Easy Returns', sub: '30 Days Refund Policy' },
          ].map((feat, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground">{feat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Link href="/listings">
            <Button variant="link" className="text-primary font-bold gap-1">View All <ChevronRight className="h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`} className="group flex flex-col items-center gap-3">
              <div className={`w-20 h-20 rounded-full ${cat.color} flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-primary transition-all p-4`}>
                <Image 
                  src={cat.icon} 
                  alt={cat.name} 
                  width={60} 
                  height={60} 
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-xs font-bold text-center group-hover:text-primary transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular in Ghana</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full shadow-sm"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>

      {/* Just For You */}
      <section className="container mx-auto px-4 bg-white py-12 rounded-[2rem] shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Recommended For You</h2>
          <p className="text-muted-foreground">AI-recommended listings curated for your secure browsing in GHS.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularListings.concat(popularListings).map((listing, i) => (
            <ListingCard key={`${listing.id}-${i}`} {...listing} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            onClick={handleLoadMore}
            disabled={loadingMore}
            variant="outline" 
            size="lg" 
            className="rounded-full px-12 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all"
          >
            {loadingMore ? 'Syncing Vault...' : 'Load More Products'}
          </Button>
        </div>
      </section>
    </div>
  );
}
