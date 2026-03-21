
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Truck, Lock } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

/**
 * @fileOverview High-Fidelity Marketplace Listing Card
 * Updated with specific 7% border-radius protocol strictly for listings.
 * Uses blended theme colors for visual depth.
 */
export function ListingCard(props: Listing) {
  const { id, title, price, oldPrice, location, postedAt, imageUrl, isEscrowProtected, isEasyDelivery, isFreeShipping, isEmphasis } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-card border border-border/40 shadow-none hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-[7%] animate-in fade-in zoom-in-95">
      {/* EMPHASIS NODE */}
      {isEmphasis && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 text-[9px] font-black px-2.5 py-1 rounded-none border-none shadow-xl uppercase tracking-widest">
            Priority
          </Badge>
        </div>
      )}

      {/* FAVORITE TRIGGER */}
      <button className="absolute top-3 right-3 z-10 h-10 w-10 bg-background/95 dark:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary shadow-xl transition-all active:scale-90 border border-border">
        <Heart className="h-5 w-5" />
      </button>

      {/* VISUAL ASSET REGISTRY */}
      <Link href={`/listings/${id}`} className="relative aspect-square w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 300px"
          className="object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.02] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <CardContent className="p-5 flex flex-col flex-1 gap-3">
        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-bold text-[15px] line-clamp-2 text-foreground/90 tracking-tight leading-tight min-h-[2.6rem] group-hover:text-primary transition-colors uppercase">
            {title}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-2">
          {isFreeShipping && (
            <Badge className="bg-green-100/10 text-green-500 text-[9px] font-black px-2 py-0.5 rounded-none border-none uppercase tracking-tighter">
              <Truck className="h-3 w-3" /> free shipping
            </Badge>
          )}
          {isEscrowProtected && (
            <Badge className="bg-primary/10 text-primary text-[9px] font-black px-2 py-0.5 rounded-none border-none uppercase flex items-center gap-1.5">
              <Lock className="h-2.5 w-2.5" /> Vault Guarantee
            </Badge>
          )}
        </div>

        <div className="space-y-1 mt-auto">
          {oldPrice && (
            <p className="text-[11px] text-muted-foreground/60 line-through font-bold tracking-widest">
              {formatPrice(oldPrice)}
            </p>
          )}
          <span className="text-2xl font-black text-foreground tracking-tighter heading-gradient">
            {formatPrice(price)}
          </span>
        </div>

        <div className="pt-4 flex flex-col text-[10px] text-muted-foreground font-black border-t border-dashed border-border/50 uppercase tracking-[0.1em]">
          <span className="truncate flex items-center gap-2">
            <span className="text-primary/60">{postedAt}</span>
            <span className="h-1 w-1 bg-muted-foreground/30 rounded-full" />
            <span className="truncate">{location}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
