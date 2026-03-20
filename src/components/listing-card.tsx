"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowBadge } from '@/components/escrow-badge';
import { Star, Eye, ShoppingCart, Heart, Plus } from 'lucide-react';
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
}

export function ListingCard(props: ListingProps) {
  const { id, title, category, price, oldPrice, location, imageUrl, rating, discount } = props;
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
      title: "Vault Updated",
      description: "Item added to your secure selection.",
    });
  };

  return (
    <Card className="group overflow-hidden bg-white border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative flex flex-col h-full rounded-xl">
      {/* Top Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
        {discount && (
          <Badge className="bg-primary text-secondary text-[9px] font-black px-2 py-0.5 border-none rounded">
            {discount}
          </Badge>
        )}
        <EscrowBadge className="bg-white/95 scale-75 origin-left shadow-sm py-1 px-3" />
      </div>

      {/* Image Section */}
      <Link href={`/listings/${id}`} className="relative h-48 w-full overflow-hidden block">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start">
          <Link href={`/listings?category=${category}`} className="text-[9px] text-primary font-black uppercase tracking-[0.2em] hover:underline">
            {category}
          </Link>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-[10px] font-black text-secondary">{rating}</span>
          </div>
        </div>
        
        <Link href={`/listings/${id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="font-bold text-sm line-clamp-2 leading-tight min-h-[2.5rem] text-secondary">{title}</h3>
        </Link>
        
        <div className="mt-auto pt-2 flex items-baseline gap-2">
          <span className="text-base font-black text-secondary">GH₵{price.toLocaleString()}</span>
          {oldPrice && (
            <span className="text-[10px] text-muted-foreground line-through font-bold">GH₵{oldPrice.toLocaleString()}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 bg-muted/20 border-t flex gap-2">
        <Button 
          onClick={handleBuyNow}
          className="flex-1 bg-secondary text-white hover:bg-secondary/90 rounded-lg font-black text-[10px] uppercase tracking-widest h-9"
        >
          Secure Buy
        </Button>
        <Button 
          onClick={handleAddToCart}
          variant="outline"
          size="icon"
          className="rounded-lg border-primary/20 text-primary hover:bg-primary/5 h-9 w-9"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
