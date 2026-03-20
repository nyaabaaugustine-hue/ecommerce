"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowBadge } from '@/components/escrow-badge';
import { Star, Plus, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, useCurrency } from '@/components/providers';
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
  const { formatPrice } = useCurrency();
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
      title: "Registry Item Secured",
      description: "Asset added to your session for escrow authorization.",
    });
  };

  return (
    <Card className="group overflow-hidden bg-white border-2 border-border/50 hover:border-accent hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full rounded-none">
      {/* Top Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {discount && (
          <Badge className="bg-primary text-white text-[10px] font-black px-3 py-1 border-none rounded-none shadow-xl">
            {discount}
          </Badge>
        )}
        <div className="flex items-center gap-1.5 bg-accent/90 text-secondary py-1 px-3 rounded-none shadow-lg backdrop-blur-sm">
           <ShieldCheck className="h-3.5 w-3.5" />
           <span className="text-[9px] font-black uppercase tracking-widest">Escrow Verified</span>
        </div>
      </div>

      {/* Image Section with Reveal Animation */}
      <Link href={`/listings/${id}`} className="relative h-56 w-full overflow-hidden block image-reveal bg-background product-card-image-wrap">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <CardContent className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-start">
          <Link href={`/listings?category=${category}`} className="text-[10px] text-primary font-black uppercase tracking-[0.2em] hover:text-accent transition-colors">
            {category}
          </Link>
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-[11px] font-black text-secondary">{rating}</span>
          </div>
        </div>
        
        <Link href={`/listings/${id}`} className="block hover:text-primary transition-colors">
          <h3 className="font-bold text-base line-clamp-2 leading-snug min-h-[3rem] text-secondary tracking-tight uppercase">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-2 mt-1">
          <div className="bg-background border-2 border-border px-3 py-1 flex items-center gap-2 shadow-sm">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-[9px] font-black text-secondary uppercase tracking-widest">{salesCount} Secured Items</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 flex items-baseline gap-3">
          <span className="text-xl font-black text-primary tracking-tighter">{formatPrice(price)}</span>
          {oldPrice && (
            <span className="text-[11px] text-muted-foreground line-through font-bold">{formatPrice(oldPrice)}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 py-5 bg-background border-t-2 flex gap-3">
        <Button 
          onClick={handleBuyNow}
          className="flex-1 bg-secondary text-white hover:bg-primary transition-all rounded-none font-black text-[11px] uppercase tracking-[0.2em] h-12 shadow-lg"
        >
          Secure Buy
        </Button>
        <Button 
          onClick={handleAddToCart}
          variant="outline"
          size="icon"
          className="rounded-none border-2 border-primary/20 text-primary hover:bg-accent hover:border-accent hover:text-secondary h-12 w-12 transition-all shadow-md"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </CardFooter>
    </Card>
  );
}
