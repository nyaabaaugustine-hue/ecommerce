"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowBadge } from '@/components/escrow-badge';
import { Star, Eye, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ListingProps {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  location: string;
  imageUrl: string;
  rating: number;
  provider: string;
  discount?: string;
}

export function ListingCard({ id, title, category, price, oldPrice, location, imageUrl, rating, provider, discount }: ListingProps) {
  return (
    <Card className="group overflow-hidden bg-white border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {discount && (
          <Badge className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 border-none rounded-sm">
            {discount}
          </Badge>
        )}
        <EscrowBadge className="bg-white/95 scale-75 origin-left shadow-sm" />
      </div>

      {/* Quick Actions Overlay */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-md bg-white hover:bg-primary hover:text-white">
          <Heart className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-md bg-white hover:bg-primary hover:text-white">
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Image Section */}
      <Link href={`/listings/${id}`} className="relative h-56 w-full overflow-hidden block">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <CardContent className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <Link href={`/listings?category=${category}`} className="text-[10px] text-primary font-bold uppercase tracking-wider hover:underline">
            {category}
          </Link>
        </div>
        <Link href={`/listings/${id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="font-bold text-sm line-clamp-2 leading-snug mb-2 min-h-[2.5rem]">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">{rating}</span>
          <span className="text-[10px] text-muted-foreground">(12 sold)</span>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-black text-primary">${price.toLocaleString()}</span>
          {oldPrice && (
            <span className="text-xs text-muted-foreground line-through">${oldPrice.toLocaleString()}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 bg-muted/20 border-t mt-auto">
        <Button size="sm" className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold text-xs shadow-sm shadow-primary/5 h-9">
          <ShoppingCart className="h-3.5 w-3.5 mr-2" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}