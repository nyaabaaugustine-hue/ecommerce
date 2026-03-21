"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, MapPin, Clock, Star, Heart, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Listing } from '@/lib/mock-data';

export function ListingCard(props: Listing) {
  const { id, title, price, location, postedAt, imageUrl, seller, isEscrowProtected, isNegotiable } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-secondary border border-white/5 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-none shadow-sm">
      {/* SAVES NODE */}
      <button className="absolute top-3 right-3 z-10 h-8 w-8 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-primary transition-colors">
        <Heart className="h-4 w-4" />
      </button>

      {/* ASSET VISUALIZATION */}
      <Link href={`/listings/${id}`} className="relative h-48 w-full overflow-hidden block bg-muted rounded-none">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isEscrowProtected && (
            <Badge className="bg-primary text-secondary text-[7px] font-black px-2 py-0.5 rounded-none border-none shadow-lg">
               ESCROW PROTECTED
            </Badge>
          )}
          {seller.isVerified && (
            <Badge className="bg-white/95 text-secondary text-[7px] font-black px-2 py-0.5 rounded-none border-none flex items-center gap-1">
               <CheckCircle2 className="h-2 w-2 text-green-600" /> VERIFIED
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-5 flex flex-col flex-1 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-primary tracking-tighter leading-none">
              {formatPrice(price)}
            </span>
            {isNegotiable && (
              <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">Negotiable</span>
            )}
          </div>
          <Link href={`/listings/${id}`} className="block">
            <h3 className="font-bold text-[13px] line-clamp-2 text-white/90 tracking-tight uppercase min-h-[2.4rem] group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
        </div>

        <div className="mt-auto space-y-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-primary/40" />
              <span className="truncate max-w-[100px]">{location.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-primary/40" />
              <span>{postedAt}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white/5 p-2 border border-white/5">
            <div className="flex items-center gap-2 overflow-hidden">
               <div className="h-6 w-6 bg-primary flex items-center justify-center text-[9px] font-black text-secondary shadow-inner shrink-0">
                 {seller.name.charAt(0)}
               </div>
               <div className="overflow-hidden">
                 <p className="text-[9px] font-black text-white/80 leading-none uppercase truncate">{seller.name}</p>
                 <p className="text-[7px] font-bold text-muted-foreground uppercase mt-1">{seller.type}</p>
               </div>
            </div>
            <div className="flex items-center gap-1 bg-secondary p-1">
              <Star className="h-2.5 w-2.5 fill-gold text-gold" />
              <span className="text-[9px] font-black text-white">{seller.rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
