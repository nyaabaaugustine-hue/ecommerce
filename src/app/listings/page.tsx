
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ListingCard } from '@/components/listing-card';
import { LISTINGS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';

function ListingsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

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
          <p className="text-muted-foreground font-medium">Safe and secure shopping across every category.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search products, services..." 
              className="pl-12 rounded-none h-12 border-primary/20 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-none h-12 px-6 gap-2 border-primary/20 font-bold uppercase text-[10px] tracking-widest">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} {...listing} vendorId={listing.vendorId} />
        ))}
      </div>
      
      {filteredListings.length === 0 && (
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

      <div className="mt-20 text-center">
        <Button variant="outline" size="lg" className="rounded-none px-16 border-primary/20 hover:border-primary h-14 font-black text-secondary text-[10px] uppercase tracking-[0.2em]">
          Load More Products
        </Button>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center font-black uppercase tracking-widest">Loading Marketplace...</div>}>
      <ListingsContent />
    </Suspense>
  );
}
