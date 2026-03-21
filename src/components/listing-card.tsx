"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, MapPin, Clock, Star, Heart } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Listing } from '@/lib/mock-data';

export function ListingCard(props: Listing) {
  const { id, title, price, location, postedAt, imageUrl, seller, isNegotiable, isEscrowProtected } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-secondary border border-white/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-none shadow-sm">
      {/* SAVES NODE */}
      <button className="absolute top-3 right-3 z-10 h-8 w-8 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-primary transition-colors">
        <Heart className="h-4 w-4" />
      </button>

      {/* ASSET VISUALIZATION */}
      <Link href={`/listings/${id}`} className="relative h-44 w-full overflow-hidden block bg-muted rounded-none">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 250px"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {isEscrowProtected && (
          <div className="absolute bottom-2 left-2">
            <Badge className="bg-primary text-secondary text-[7px] font-black px-2 py-0.5 rounded-none border-none shadow-lg">
               ESCROW
            </Badge>
          </div>
        )}
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-3">
        <div className="space-y-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xl font-black text-primary tracking-tighter leading-none">
              {formatPrice(price)}
            </span>
          </div>
          <Link href={`/listings/${id}`} className="block">
            <h3 className="font-bold text-[11px] line-clamp-2 text-white/90 tracking-tight uppercase min-h-[2.2rem] group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
        </div>

        <div className="mt-auto space-y-3 pt-3 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 overflow-hidden text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary/40 shrink-0" />
              <span className="text-[8px] font-bold uppercase truncate">{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3 w-3 text-primary/40 shrink-0" />
              <span className="text-[8px] font-bold uppercase">{postedAt}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white/5 p-1.5">
            <div className="flex items-center gap-2 overflow-hidden">
               <div className="h-5 w-5 bg-primary flex items-center justify-center text-[8px] font-black text-secondary shadow-inner shrink-0">
                 {seller.name.charAt(0)}
               </div>
               <p className="text-[8px] font-black text-white/60 leading-none uppercase truncate">{seller.name}</p>
            </div>
            {seller.isVerified && (
              <Star className="h-2.5 w-2.5 fill-primary text-primary" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
