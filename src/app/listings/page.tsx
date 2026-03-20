
"use client";

import { useState } from 'react';
import { ListingCard } from '@/components/listing-card';
import { LISTINGS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredListings = LISTINGS.filter(l => 
    l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary mb-2">The Marketplace</h1>
          <p className="text-muted-foreground">Secure interactions across every business vertical.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search products, services, properties..." 
              className="pl-12 rounded-full h-12 border-primary/20 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-full h-12 px-6 gap-2 border-primary/20">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} {...listing} provider={listing.vendorId} />
        ))}
      </div>
      
      {filteredListings.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-xl text-muted-foreground">No listings found matching your criteria.</p>
        </div>
      )}

      <div className="mt-20 text-center">
        <Button variant="outline" size="lg" className="rounded-full px-16 border-primary/20 hover:border-primary h-14 font-bold text-primary">
          Explore More Listings
        </Button>
      </div>
    </div>
  );
}
