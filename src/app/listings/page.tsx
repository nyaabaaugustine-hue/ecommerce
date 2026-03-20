import { ListingCard } from '@/components/listing-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';

export default function ListingsPage() {
  const listings = [
    {
      id: '1',
      title: 'MacBook Pro M3 Max 16"',
      category: 'Electronics',
      price: 3499,
      location: 'Accra, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl || '',
      rating: 4.9,
      provider: 'GadgetZone'
    },
    {
      id: '2',
      title: 'Modern 2-Bedroom Apartment',
      category: 'Real Estate',
      price: 1200,
      location: 'East Legon, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'real-estate')?.imageUrl || '',
      rating: 4.7,
      provider: 'PrimeRentals'
    },
    {
      id: '3',
      title: 'Advanced React Native Mentorship',
      category: 'Education',
      price: 150,
      location: 'Remote',
      imageUrl: PlaceHolderImages.find(img => img.id === 'education')?.imageUrl || '',
      rating: 5.0,
      provider: 'DevMastery'
    },
    {
      id: '4',
      title: 'Legal Consulting - Corporate Law',
      category: 'Professional Services',
      price: 500,
      location: 'Accra, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'services')?.imageUrl || '',
      rating: 4.8,
      provider: 'GlobalLex'
    },
    {
      id: '5',
      title: 'Professional Photography Gear',
      category: 'Electronics',
      price: 2500,
      location: 'Accra, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || '',
      rating: 4.6,
      provider: 'LensPro'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Marketplace</h1>
          <p className="text-muted-foreground">Securely buy and sell across all categories.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search everything..." className="pl-10 rounded-full" />
          </div>
          <Button variant="outline" className="rounded-full gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" className="rounded-full px-12 border-primary/20 hover:border-primary">
          Load More Listings
        </Button>
      </div>
    </div>
  );
}