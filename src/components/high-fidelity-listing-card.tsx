
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

/**
 * @fileOverview High-Fidelity Marketplace Listing Card (Compact Hub Style)
 * Optimized for force-reduced height marquee contexts.
 * Uses blended theme colors for a premium finish.
 */
export function HighFidelityListingCard(props: Listing) {
  const { id, title, price, location, imageUrl, category, subcategory, specs, seller, isNegotiable } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-[7%]">
      {/* VISUAL ASSET */}
      <Link href={`/listings/${id}`} className="relative aspect-[4/5] w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="200px"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Floating Seller Avatar */}
        <div className="absolute bottom-2 right-2 z-10 scale-75 origin-bottom-right">
          <div className="relative">
            <Avatar className="h-8 w-8 border-2 border-white shadow-lg">
              <AvatarImage src={seller.avatar} />
              <AvatarFallback className="bg-primary text-secondary text-[8px] font-black">{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {seller.isVerified && (
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <CheckCircle2 className="h-2.5 w-2.5 text-green-500 fill-green-500" />
              </div>
            )}
          </div>
        </div>
      </Link>

      <CardContent className="p-3 flex flex-col flex-1 gap-1.5 bg-gradient-to-b from-card to-muted/5">
        <p className="text-[8px] font-bold text-primary uppercase tracking-tight truncate">
          {category} {subcategory && `> ${subcategory}`}
        </p>

        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-black text-[12px] leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 uppercase">
            {title}
          </h3>
        </Link>

        {specs && (
          <div className="flex flex-wrap gap-x-1.5 text-[9px] font-medium text-muted-foreground">
            {specs.map((spec, i) => (
              <span key={i} className="flex items-center gap-1 uppercase tracking-tighter">
                {spec}
                {i < specs.length - 1 && <span className="h-0.5 w-0.5 bg-muted-foreground/30 rounded-full" />}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 text-[9px] text-muted-foreground font-black uppercase mt-1">
          <MapPin className="h-2.5 w-2.5 text-primary/60" />
          <span className="truncate">{location}</span>
        </div>

        <div className="mt-auto pt-2 border-t border-dashed border-border/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-black text-foreground tracking-tighter heading-gradient">
              {formatPrice(price)}
            </span>
            {isNegotiable && (
              <span className="text-[7px] font-black text-muted-foreground uppercase tracking-widest -mt-0.5">
                Negotiable
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button className="text-muted-foreground hover:text-red-500 transition-colors">
              <Heart className="h-3 w-3" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
