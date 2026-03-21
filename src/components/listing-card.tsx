
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Truck, Lock, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCurrency, useCart } from '@/components/providers';
import type { Listing } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ListingCard(props: Listing) {
  const { id, title, price, oldPrice, location, postedAt, imageUrl, imageHint, isEscrowProtected, isFreeShipping, isEmphasis, seller } = props;
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(props);
    toast({
      title: "Asset Secured in Cart",
      description: `${title} is now in your escrow tray. Launching acquisition flow...`,
    });
    // Programmatic trigger for cart sheet would usually be handled by a global state, 
    // but the addItem logic in CartProvider can handle it or we use a custom event.
    const cartTrigger = document.querySelector('[data-cart-trigger]') as HTMLElement;
    if (cartTrigger) cartTrigger.click();
  };

  return (
    <Card className="group overflow-hidden bg-card border border-border/40 shadow-none hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-[7%] animate-in fade-in zoom-in-95">
      {/* EMPHASIS NODE */}
      {isEmphasis && (
        <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
          <Badge className="bg-primary text-secondary hover:opacity-90 text-[7px] md:text-[8px] font-black px-2 py-0.5 md:px-2 md:py-1 rounded-none border-none shadow-xl uppercase tracking-widest">
            Priority Node
          </Badge>
        </div>
      )}

      {/* FAVORITE TRIGGER */}
      <button className="absolute top-2 right-2 md:top-3 md:right-3 z-10 h-8 w-8 md:h-10 md:w-10 bg-background/95 dark:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary shadow-xl transition-all active:scale-90 border border-border">
        <Heart className="h-4 w-4 md:h-5 md:w-5" />
      </button>

      {/* VISUAL ASSET REGISTRY */}
      <Link href={`/listings/${id}`} className="relative aspect-square w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
          className="object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.02] saturate-[1.1]"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* FIDELITY OVERLAY */}
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          <div className="bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 flex items-center gap-2">
            <ShieldCheck className="h-2.5 w-2.5 text-primary" />
            <span className="text-[7px] font-black uppercase tracking-widest">{seller.rating} Fidelity Node</span>
          </div>
        </div>
      </Link>

      <CardContent className="p-3 md:p-5 flex flex-col flex-1 gap-2 md:gap-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7px] md:text-[8px] font-black text-primary uppercase tracking-[0.2em]">{props.category} Hub</span>
          <span className="text-[7px] md:text-[8px] font-black text-muted-foreground uppercase tracking-widest">{location.split(',')[0]}</span>
        </div>

        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-bold text-[12px] md:text-[14px] line-clamp-2 text-foreground/90 tracking-tight leading-tight min-h-[2.2rem] md:min-h-[2.4rem] group-hover:text-primary transition-colors uppercase italic font-black">
            {title}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {isFreeShipping && (
            <Badge className="bg-green-100/10 text-green-500 text-[7px] md:text-[8px] font-black px-1.5 py-0.5 rounded-none border-none uppercase tracking-tighter">
              <Truck className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" /> free
            </Badge>
          )}
          {isEscrowProtected && (
            <Badge className="bg-primary/10 text-primary text-[7px] md:text-[8px] font-black px-1.5 py-0.5 rounded-none border-none uppercase flex items-center gap-1">
              <Lock className="h-2 w-2 md:h-2.5 md:w-2.5" /> Vault
            </Badge>
          )}
        </div>

        <div className="space-y-0.5 md:space-y-1 mt-auto">
          {oldPrice && (
            <p className="text-[9px] md:text-[10px] text-muted-foreground/60 line-through font-bold tracking-widest">
              {formatPrice(oldPrice)}
            </p>
          )}
          <span className="text-lg md:text-2xl font-black text-foreground tracking-tighter heading-gradient">
            {formatPrice(price)}
          </span>
        </div>

        <div className="pt-2 md:pt-4 border-t border-dashed border-border/50">
          <Button 
            onClick={handleAddToCart}
            className="w-full h-9 md:h-10 bg-secondary text-white font-black uppercase text-[8px] md:text-[9px] tracking-widest rounded-none shadow-xl gap-2 hover:bg-primary transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
          >
            <ShoppingBag className="h-3 w-3 text-primary" /> Quick Buy Node
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
