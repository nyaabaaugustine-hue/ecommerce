
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCurrency, useCart } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

/**
 * @fileOverview Reduced Height High-Fidelity Listing Node
 * Updated aspect ratio to 4:5 (15% height reduction from 2:3)
 * Tightened metadata nodes for clinical density.
 */
export function HighFidelityListingCard(props: Listing) {
  const { id, title, price, location, imageUrl, imageHint, category, subcategory, specs, seller, isNegotiable } = props;
  const { formatPrice } = useCurrency();
  const { addItem, startCheckoutSim } = useCart();
  const { toast } = useToast();

  const handleForcedAcquisition = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(props);
    // Immediately trigger the global simulated buying process
    startCheckoutSim();
    toast({
      title: "Protocol Initialized",
      description: `Syncing treasury node for ${title}...`,
    });
  };

  return (
    <Card className="group overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-[7%]">
      {/* VISUAL ASSET - Optimized 4:5 ratio (Reduced Height) */}
      <Link href={`/listings/${id}`} className="relative aspect-[4/5] w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover transition-all duration-700 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
        
        {/* Floating Seller Avatar */}
        <div className="absolute bottom-2.5 right-2.5 z-10 scale-75 origin-bottom-right">
          <div className="relative">
            <Avatar className="h-10 w-10 border-2 border-white shadow-lg rounded-none">
              <AvatarImage src={seller.avatar} />
              <AvatarFallback className="bg-primary text-secondary text-[10px] font-black">{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {seller.isVerified && (
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <CheckCircle2 className="h-3 w-3 text-green-500 fill-green-500" />
              </div>
            )}
          </div>
        </div>

        {/* Pricing Overlay */}
        <div className="absolute top-2.5 left-2.5">
           <Badge className="bg-secondary/90 backdrop-blur-md text-white border-none font-black text-[9px] px-2.5 py-1 rounded-none shadow-2xl uppercase tracking-widest">
              {formatPrice(price)}
           </Badge>
        </div>
      </Link>

      <CardContent className="p-3 flex flex-col flex-1 gap-1.5 bg-gradient-to-b from-card to-muted/5">
        <div className="flex items-center justify-between">
          <p className="text-[7px] font-bold text-primary uppercase tracking-widest truncate">
            {category} {subcategory && `> ${subcategory}`}
          </p>
          <div className="flex items-center gap-1 text-[7px] text-muted-foreground font-black uppercase">
            <MapPin className="h-2 w-2 text-primary/60" />
            <span className="truncate">{location.split(',')[0]}</span>
          </div>
        </div>

        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-black text-[11px] leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 uppercase italic tracking-tighter">
            {title}
          </h3>
        </Link>

        {specs && (
          <div className="flex flex-wrap gap-x-1.5 text-[8px] font-bold text-muted-foreground/60">
            {specs.map((spec, i) => (
              <span key={i} className="uppercase tracking-tighter">
                {spec}
                {i < specs.length - 1 && " • "}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-2 border-t border-dashed border-border/50 flex flex-col gap-2">
          <Button 
            onClick={handleForcedAcquisition}
            className="w-full h-9 bg-secondary text-white font-black uppercase text-[8px] tracking-[0.2em] rounded-none shadow-xl gap-2 hover:bg-primary transition-all active:scale-95"
          >
            <ShoppingBag className="h-3 w-3 text-primary" /> Authorize Buy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
