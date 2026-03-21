"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ListingCard } from '@/components/listing-card';
import { LISTINGS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function ListingSkeleton() {
  return (
    <div className="space-y-5 animate-pulse bg-card border border-border/40 p-5 rounded-[7%]">
      {/* FB-Style Profile Header Skeleton */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-2 w-24" />
          <Skeleton className="h-1.5 w-16" />
        </div>
      </div>
      
      {/* Main Image Asset Skeleton */}
      <Skeleton className="aspect-square w-full rounded-[7%]" />
      
      {/* Content Skeletons */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="pt-2 flex justify-between items-center">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function ListingsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate high-fidelity Facebook-style loading transition
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredListings = LISTINGS.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         l.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryParam ? l.category === categoryParam : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-headline font-black text-secondary tracking-tighter mb-2 uppercase">
            {categoryParam ? categoryParam : 'All Products'}
          </h1>
          <p className="text-muted-foreground font-black uppercase text-[10px] tracking-[0.3em]">Institutional Registry Node • ACCRA</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-96 border border-border group focus-within:border-primary transition-colors">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search verified listings..." 
              className="pl-12 rounded-none h-12 border-none focus-visible:ring-0 font-bold uppercase text-[11px] tracking-tight"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-none h-12 px-6 gap-2 border-2 font-black uppercase text-[10px] tracking-widest hover:bg-muted">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <ListingSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 animate-in fade-in duration-1000">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      )}
      
      {!isLoading && filteredListings.length === 0 && (
        <div className="py-24 text-center border-2 border-dashed border-muted">
          <p className="text-xl text-muted-foreground font-black uppercase tracking-[0.2em]">Zero Nodes Found.</p>
          <Button 
            variant="link" 
            onClick={() => window.history.pushState({}, '', '/listings')} 
            className="mt-4 text-primary font-black uppercase tracking-widest text-[10px]"
          >
            Clear Registry Filter
          </Button>
        </div>
      )}

      {!isLoading && filteredListings.length > 0 && (
        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="rounded-none px-16 border-2 hover:bg-secondary hover:text-white h-14 font-black text-secondary text-[10px] uppercase tracking-[0.3em] transition-all">
            Load More Assets
          </Button>
        </div>
      )}
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center font-black uppercase tracking-[0.4em] animate-pulse">Authorizing Marketplace Registry...</div>}>
      <ListingsContent />
    </Suspense>
  );
}