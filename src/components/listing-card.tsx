
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

/**
 * @fileOverview High-Fidelity Marketplace Listing Card
 * 1:1 structural clone of the OLX card architecture using ShadCN styling.
 * Supports "Emphasis" status and dual-badge logic (Easy Delivery + Vault Guarantee).
 * Force clone: Perfectly fits the 5-column grid.
 */
export function ListingCard(props: Listing) {
  const { id, title, price, oldPrice, location, postedAt, imageUrl, isEscrowProtected, isEasyDelivery, isEmphasis } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-white dark:bg-card border-none shadow-none hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-md animate-in fade-in zoom-in-95">
      {/* EMPHASIS TAG NODE */}
      {isEmphasis && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-[#6e0ad6] text-white hover:bg-[#6e0ad6] text-[10px] font-bold px-2 py-0.5 rounded-sm border-none shadow-md uppercase tracking-tighter">
            Emphasis
          </Badge>
        </div>
      )}

      {/* FAVORITE BUTTON NODE */}
      <button className="absolute top-3 right-3 z-10 h-9 w-9 bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 shadow-md transition-all active:scale-90">
        <Heart className="h-5 w-5" />
      </button>

      {/* ASSET VISUALIZATION NODE */}
      <Link href={`/listings/${id}`} className="relative aspect-square w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-2">
        {/* TYPOGRAPHIC HIERARCHY: TITLE */}
        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-normal text-[14px] line-clamp-2 text-foreground/90 tracking-tight leading-[1.3] min-h-[2.6rem] group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* OLX-SPECIFIC STATUS BADGES */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {isEasyDelivery && (
            <Badge className="bg-[#f2eafa] text-[#6e0ad6] dark:bg-[#6e0ad6]/20 dark:text-[#a78bfa] hover:bg-[#f2eafa] text-[10px] font-bold px-2 py-0.5 rounded-sm border-none shadow-none">
              Easy Delivery
            </Badge>
          )}
          {isEscrowProtected && (
            <Badge className="bg-[#fbeaf5] text-[#d60a91] dark:bg-[#d60a91]/20 dark:text-[#f472b6] hover:bg-[#fbeaf5] text-[10px] font-bold px-2 py-0.5 rounded-sm border-none shadow-none">
              Vault Guarantee
            </Badge>
          )}
        </div>

        {/* PRICE COMMAND NODE */}
        <div className="space-y-0.5 mt-1">
          {oldPrice && (
            <p className="text-[11px] text-muted-foreground line-through decoration-muted-foreground/50">
              {formatPrice(oldPrice)}
            </p>
          )}
          <span className="text-xl font-bold text-foreground tracking-tight">
            {formatPrice(price)}
          </span>
        </div>

        {/* METADATA REGISTRY FOOTER */}
        <div className="mt-auto pt-3 flex flex-col text-[11px] text-muted-foreground font-normal border-t border-border/20">
          <span className="truncate">{postedAt} • {location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
