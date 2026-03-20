
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowBadge } from '@/components/escrow-badge';
import { Star, Eye, ShoppingCart, Heart, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/providers';
import { useToast } from '@/hooks/use-toast';

interface ListingProps {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  location: string;
  imageUrl: string;
  rating: number;
  vendorId: string;
  discount?: string;
  salesCount: number;
}

export function ListingCard(props: ListingProps) {
  const { id, title, category, price, oldPrice, location, imageUrl, rating, discount, salesCount } = props;
  const router = useRouter();
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/listings/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(props);
    toast({
      title: "Secure Selection Updated",
      description: "Item added to your cart for escrow protection.",
    });
  };

  return (
    <Card className="group overflow-hidden bg-white border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-none">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {discount && (
          <Badge className="bg-primary text-secondary text-[9px] font-black px-2 py-0.5 border-none rounded-none shadow-sm">
            {discount}
          </Badge>
        )}
        <EscrowBadge className="bg-white/95 scale-75 origin-left shadow-sm py-1 px-3" />
      </div>

      {/* Image Section with Reveal Animation */}
      <Link href={`/listings/${id}`} className="relative h-48 w-full overflow-hidden block image-reveal bg-muted product-card-image-wrap">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <CardContent className="p-5 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start">
          <Link href={`/listings?category=${category}`} className="text-[9px] text-primary font-black uppercase tracking-[0.2em] hover:underline">
            {category}
          </Link>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-[10px] font-black text-secondary">{rating}</span>
          </div>
        </div>
        
        <Link href={`/listings/${id}`} className="block hover:text-primary transition-colors">
          <h3 className="font-bold text-sm line-clamp-2 leading-tight min-h-[2.5rem] text-secondary">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-1.5 mt-1">
          <div className="bg-secondary/5 border border-secondary/10 px-2 py-0.5 flex items-center gap-1.5">
            <Users className="h-3 w-3 text-primary" />
            <span className="text-[8px] font-black text-secondary uppercase tracking-widest">{salesCount} secured this item</span>
          </div>
        </div>
        
        <div className="mt-auto pt-3 flex items-baseline gap-2">
          <span className="text-lg font-black text-secondary tracking-tight">GH₵{price.toLocaleString()}</span>
          {oldPrice && (
            <span className="text-[10px] text-muted-foreground line-through font-bold">GH₵{oldPrice.toLocaleString()}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-5 py-4 bg-muted/20 border-t flex gap-2">
        <Button 
          onClick={handleBuyNow}
          className="flex-1 bg-secondary text-white hover:bg-primary hover:text-secondary rounded-none font-black text-[10px] uppercase tracking-widest h-10 transition-all duration-300"
        >
          Secure Buy
        </Button>
        <Button 
          onClick={handleAddToCart}
          variant="outline"
          size="icon"
          className="rounded-none border-primary/20 text-primary hover:bg-primary/5 h-10 w-10 transition-all"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
