"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ListingCard } from '@/components/listing-card';
import { LISTINGS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function ListingsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate high-fidelity skeleton loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredListings = LISTINGS.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         l.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryParam ? l.category === categoryParam : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-headline font-bold text-secondary tracking-tighter mb-2">
            {categoryParam ? categoryParam : 'All Products'}
          </h1>
          <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">Secure shopping across every verified category.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search products, brands..." 
              className="pl-12 rounded-none h-12 border-primary/20 focus:border-primary font-bold uppercase text-[10px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-none h-12 px-6 gap-2 border-primary/20 font-black uppercase text-[10px] tracking-widest">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-56 w-full rounded-none" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2 rounded-none" />
                <Skeleton className="h-6 w-full rounded-none" />
                <Skeleton className="h-10 w-full rounded-none" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in duration-700">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} vendorId={listing.vendorId} />
          ))}
        </div>
      )}
      
      {!isLoading && filteredListings.length === 0 && (
        <div className="py-24 text-center border-2 border-dashed border-muted">
          <p className="text-xl text-muted-foreground font-bold uppercase tracking-widest">No products found.</p>
          <Button 
            variant="link" 
            onClick={() => window.history.pushState({}, '', '/listings')} 
            className="mt-4 text-primary font-black uppercase tracking-widest text-[10px]"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {!isLoading && (
        <div className="mt-20 text-center">
          <Button variant="outline" size="lg" className="rounded-none px-16 border-primary/20 hover:border-primary h-14 font-black text-secondary text-[10px] uppercase tracking-[0.2em]">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center font-black uppercase tracking-widest">Authorizing Marketplace...</div>}>
      <ListingsContent />
    </Suspense>
  );
}
