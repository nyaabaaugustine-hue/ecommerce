"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';

export function ListingCard(props: Listing) {
  const { id, title, price, location, postedAt, imageUrl, isEscrowProtected } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-card border-none hover:shadow-xl transition-all duration-300 relative flex flex-col h-full rounded-md">
      {/* SAVES */}
      <button className="absolute top-3 right-3 z-10 h-9 w-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 shadow-md transition-all">
        <Heart className="h-5 w-5" />
      </button>

      {/* ASSET VISUAL */}
      <Link href={`/listings/${id}`} className="relative h-48 md:h-56 w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-2 bg-background">
        {/* OLX Styled Badges */}
        <div className="flex flex-wrap gap-1.5 mb-1">
          <Badge className="bg-[#f2eafa] text-[#6e0ad6] hover:bg-[#f2eafa] text-[9px] font-bold px-2 py-0.5 rounded-sm border-none">
            Easy Delivery
          </Badge>
          {isEscrowProtected && (
            <Badge className="bg-[#fbeaf5] text-[#d60a91] hover:bg-[#fbeaf5] text-[9px] font-bold px-2 py-0.5 rounded-sm border-none">
              Vault Guarantee
            </Badge>
          )}
        </div>

        <div className="space-y-1">
          <Link href={`/listings/${id}`} className="block">
            <h3 className="font-medium text-sm line-clamp-2 text-foreground/90 tracking-tight leading-snug min-h-[2.5rem]">
              {title}
            </h3>
          </Link>
          
          <div className="space-y-0.5">
            {/* Old Price Mock */}
            <p className="text-[10px] text-muted-foreground line-through decoration-muted-foreground/50">
              {formatPrice(price * 1.2)}
            </p>
            <span className="text-xl font-bold text-foreground tracking-tight">
              {formatPrice(price)}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-3 flex flex-col text-[10px] text-muted-foreground font-medium">
          <span className="truncate">{postedAt}, {location.split(',')[0]}</span>
        </div>
      </CardContent>
    </Card>
  );
}
