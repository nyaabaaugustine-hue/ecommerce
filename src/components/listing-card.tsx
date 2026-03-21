
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Truck, Lock, ShoppingBag, ShieldCheck, MapPin } from 'lucide-react';
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
    const cartTrigger = document.querySelector('[data-cart-trigger]') as HTMLElement;
    if (cartTrigger) cartTrigger.click();
  };

  return (
    <Card className="group overflow-hidden bg-card border border-border/40 shadow-none hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-[7%] animate-in fade-in zoom-in-95">
      {/* VISUAL ASSET - Increased to aspect-[3/4] to fill the card more effectively */}
      <Link href={`/listings/${id}`} className="relative aspect-[3/4] w-full overflow-hidden block bg-muted">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.02] saturate-[1.1]"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* EMPHASIS NODE */}
        {isEmphasis && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-primary text-secondary font-black px-2.5 py-1 rounded-none border-none shadow-2xl uppercase text-[8px] tracking-widest">
              Priority Node
            </Badge>
          </div>
        )}

        {/* FAVORITE TRIGGER */}
        <button className="absolute top-3 right-3 z-10 h-10 w-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:text-primary shadow-2xl transition-all active:scale-90 border border-border">
          <Heart className="h-5 w-5" />
        </button>

        {/* PRICE OVERLAY - Now very prominent on the image */}
        <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
           <div className="bg-white/95 backdrop-blur-md px-4 py-2 shadow-2xl border-l-4 border-primary">
              <p className="text-[14px] font-black text-secondary tracking-tighter leading-none">{formatPrice(price)}</p>
              {oldPrice && <p className="text-[8px] text-muted-foreground line-through font-bold mt-0.5">{formatPrice(oldPrice)}</p>}
           </div>
        </div>
      </Link>

      <CardContent className="p-4 md:p-5 flex flex-col flex-1 gap-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">{props.category} Hub</span>
          <div className="flex items-center gap-1 text-[8px] font-black text-muted-foreground uppercase tracking-widest">
            <MapPin className="h-2.5 w-2.5 text-primary/40" />
            <span>{location.split(',')[0]}</span>
          </div>
        </div>

        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-black text-[13px] md:text-[15px] line-clamp-2 text-foreground tracking-tighter leading-tight min-h-[2.4rem] group-hover:text-primary transition-colors uppercase italic">
            {title}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-2 mt-auto">
          {isFreeShipping && (
            <Badge className="bg-green-100/10 text-green-500 text-[8px] font-black px-2 py-0.5 rounded-none border-none uppercase tracking-tighter">
              <Truck className="h-3 w-3 mr-1" /> free
            </Badge>
          )}
          {isEscrowProtected && (
            <Badge className="bg-primary/10 text-primary text-[8px] font-black px-2 py-0.5 rounded-none border-none uppercase flex items-center gap-1">
              <Lock className="h-2.5 w-2.5" /> Vault
            </Badge>
          )}
        </div>

        <div className="pt-4 border-t border-dashed border-border/50">
          <Button 
            onClick={handleAddToCart}
            className="w-full h-11 bg-secondary text-white font-black uppercase text-[9px] tracking-widest rounded-none shadow-2xl gap-3 hover:bg-primary transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
          >
            <ShoppingBag className="h-4 w-4 text-primary" /> Acquisition Node
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
