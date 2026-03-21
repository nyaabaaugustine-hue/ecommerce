
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Share2, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

/**
 * @fileOverview High-Fidelity Marketplace Listing Card (Masonry Style)
 * Updated with specific 7% border-radius protocol strictly for listings.
 */
export function HighFidelityListingCard(props: Listing) {
  const { id, title, price, location, imageUrl, category, subcategory, specs, seller, isNegotiable } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-white border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-[7%]">
      {/* VISUAL ASSET */}
      <Link href={`/listings/${id}`} className="relative aspect-[4/5] w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 400px"
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Floating Seller Avatar */}
        <div className="absolute bottom-3 right-3 z-10">
          <div className="relative">
            <Avatar className="h-10 w-10 border-2 border-white shadow-lg">
              <AvatarImage src={seller.avatar} />
              <AvatarFallback className="bg-primary text-white text-[10px] font-black">{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {seller.isVerified && (
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <CheckCircle2 className="h-3 w-3 text-green-500 fill-green-500 text-white" />
              </div>
            )}
          </div>
        </div>
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight truncate">
          {category} {subcategory && `> ${subcategory}`}
        </p>

        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-black text-[15px] leading-tight text-secondary group-hover:text-primary transition-colors line-clamp-2 uppercase">
            {title}
          </h3>
        </Link>

        {specs && (
          <div className="flex flex-wrap gap-x-2 text-[11px] font-medium text-muted-foreground">
            {specs.map((spec, i) => (
              <span key={i} className="flex items-center gap-2 uppercase tracking-tighter">
                {spec}
                {i < specs.length - 1 && <span className="h-1 w-1 bg-muted-foreground/30 rounded-full" />}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-black uppercase">
          <MapPin className="h-3 w-3 text-muted-foreground/60" />
          <span>{location}</span>
        </div>

        <div className="mt-auto pt-3 border-t border-dashed flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-black text-secondary tracking-tighter">
              {formatPrice(price)}
            </span>
            {isNegotiable && (
              <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest -mt-1">
                Negotiable
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-red-500 transition-colors">
              <Heart className="h-4 w-4" />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
