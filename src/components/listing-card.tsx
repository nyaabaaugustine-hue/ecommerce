"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Heart, CheckCircle2, Lock } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Listing } from '@/lib/mock-data';

export function ListingCard(props: Listing) {
  const { id, title, price, location, postedAt, imageUrl, seller, isEscrowProtected, isNegotiable } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-secondary border border-white/5 hover:border-primary/40 transition-all duration-500 relative flex flex-col h-full rounded-none shadow-sm">
      {/* SAVES INTERFACE */}
      <button className="absolute top-2 right-2 z-10 h-7 w-7 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-primary transition-colors">
        <Heart className="h-3.5 w-3.5" />
      </button>

      {/* ASSET VISUAL */}
      <Link href={`/listings/${id}`} className="relative h-36 md:h-44 w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 250px"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {isEscrowProtected && (
            <Badge className="bg-primary text-secondary text-[6px] font-black px-1.5 py-0.5 rounded-none border-none shadow-lg tracking-widest">
               ESCROW
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-3 md:p-4 flex flex-col flex-1 gap-2">
        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <span className="text-lg md:text-xl font-black text-primary tracking-tighter leading-none">
              {formatPrice(price)}
            </span>
          </div>
          <Link href={`/listings/${id}`} className="block">
            <h3 className="font-bold text-[11px] md:text-[12px] line-clamp-2 text-white/90 tracking-tight uppercase min-h-[2rem] group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
          </Link>
        </div>

        <div className="mt-auto pt-2 border-t border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-widest text-white/30">
            <div className="flex items-center gap-1">
              <MapPin className="h-2.5 w-2.5 text-primary/30" />
              <span className="truncate max-w-[60px] md:max-w-[100px]">{location.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-2.5 w-2.5 text-primary/30" />
              <span>{postedAt}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 overflow-hidden bg-white/5 p-1.5">
             <div className="h-5 w-5 bg-primary flex items-center justify-center text-[8px] font-black text-secondary shadow-inner shrink-0">
               {seller.name.charAt(0)}
             </div>
             <div className="overflow-hidden">
               <p className="text-[8px] font-black text-white/60 leading-none uppercase truncate">{seller.name}</p>
               <div className="flex items-center gap-1 mt-0.5">
                 <Star className="h-2 w-2 fill-gold text-gold" />
                 <span className="text-[7px] font-black text-white/40">{seller.rating}</span>
               </div>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
