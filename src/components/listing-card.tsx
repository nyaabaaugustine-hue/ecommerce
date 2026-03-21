"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Listing } from '@/lib/mock-data';

/**
 * @fileOverview Senior Marketplace Listing Card
 * Focuses on scanning efficiency, price dominance, and trust visibility.
 */
export function ListingCard(props: Listing) {
  const { id, title, price, location, postedAt, imageUrl, seller, isNegotiable, isEscrowProtected } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-white border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-none shadow-sm">
      {/* Dynamic Trust Overlay */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2 pointer-events-none">
        {isEscrowProtected && (
          <Badge className="bg-secondary/90 text-white text-[8px] font-black px-2 py-1 rounded-none shadow-lg border-none flex items-center gap-1.5 backdrop-blur-md">
             <ShieldCheck className="h-2.5 w-2.5 text-primary" />
             <span className="uppercase tracking-widest">Escrow Protected</span>
          </Badge>
        )}
        {seller.isVerified && (
          <Badge className="bg-primary text-gold text-[8px] font-black px-2 py-1 rounded-none shadow-md border-none flex items-center gap-1">
             <CheckCircle2 className="h-2.5 w-2.5" />
             <span className="uppercase tracking-widest">Verified {seller.type.split(' ')[1] || 'Seller'}</span>
          </Badge>
        )}
      </div>

      {/* Asset Visualization */}
      <Link href={`/listings/${id}`} className="relative h-52 w-full overflow-hidden block bg-muted rounded-none border-b border-border/10">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="object-cover transition-transform duration-1000 group-hover:scale-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <CardContent className="p-5 flex flex-col flex-1 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-2xl font-black text-burgundy tracking-tighter leading-none">
              {formatPrice(price)}
            </span>
            {isNegotiable && (
              <span className="text-[7px] font-black text-green-600 uppercase bg-green-50 px-1.5 py-0.5 border border-green-100 leading-none">
                Negotiable
              </span>
            )}
          </div>
          <Link href={`/listings/${id}`} className="block group/title">
            <h3 className="font-bold text-sm line-clamp-2 text-secondary tracking-tight uppercase min-h-[2.5rem] group-hover/title:text-primary transition-colors duration-300">
              {title}
            </h3>
          </Link>
        </div>

        {/* Marketplace Metadata Node */}
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-muted-foreground border-t border-dashed pt-4">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <MapPin className="h-3 w-3 text-primary shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-tight truncate">{location}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Clock className="h-3 w-3" />
              <span className="text-[8px] font-bold uppercase">{postedAt}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-muted/20 p-2 border border-transparent group-hover:border-primary/10 transition-colors">
            <div className="flex items-center gap-2 overflow-hidden">
               <div className="h-7 w-7 bg-secondary flex items-center justify-center text-[10px] font-black text-primary shadow-inner shrink-0">
                 {seller.name.charAt(0)}
               </div>
               <div className="flex flex-col min-w-0">
                 <p className="text-[9px] font-black text-secondary leading-none uppercase truncate">{seller.name}</p>
                 <p className="text-[7px] font-bold text-muted-foreground uppercase">{seller.type}</p>
               </div>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white border shadow-sm shrink-0">
               <Star className="h-2.5 w-2.5 fill-gold text-gold" />
               <span className="text-[9px] font-black text-secondary">{seller.rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
