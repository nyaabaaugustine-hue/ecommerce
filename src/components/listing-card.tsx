"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, MapPin, Clock, Star, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '@/components/providers';
import { cn } from '@/lib/utils';

interface ListingProps {
  id: string;
  title: string;
  category: string;
  price: number;
  location: string;
  imageUrl: string;
  rating: number;
  postedAt: string;
  isNegotiable?: boolean;
  sellerType: 'Individual' | 'Dealer' | 'Verified Pro';
  sellerName: string;
}

export function ListingCard(props: ListingProps) {
  const { id, title, category, price, location, imageUrl, rating, postedAt, isNegotiable, sellerType, sellerName } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-white border border-border/60 hover:border-primary hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full rounded-none">
      {/* Escrow Trust Layer */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        <Badge className="bg-primary/95 text-white text-[8px] font-black px-2 py-0.5 rounded-none shadow-lg border-none flex items-center gap-1.5 backdrop-blur-sm">
           <ShieldCheck className="h-2.5 w-2.5 text-accent" />
           <span className="uppercase tracking-widest">Escrow Protected</span>
        </Badge>
        {sellerType === 'Verified Pro' && (
          <Badge className="bg-accent text-secondary text-[8px] font-black px-2 py-0.5 rounded-none shadow-md border-none flex items-center gap-1">
             <CheckCircle2 className="h-2.5 w-2.5" />
             <span className="uppercase tracking-widest">Verified Pro</span>
          </Badge>
        )}
      </div>

      {/* Image Section */}
      <Link href={`/listings/${id}`} className="relative h-56 w-full overflow-hidden block bg-muted rounded-none">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      <CardContent className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-black text-primary uppercase tracking-widest">{category}</p>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] font-bold text-muted-foreground uppercase">{postedAt}</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <span className="text-2xl font-black text-burgundy tracking-tighter block">{formatPrice(price)}</span>
          <Link href={`/listings/${id}`} className="block group/title">
            <h3 className="font-bold text-sm line-clamp-2 text-secondary tracking-tight uppercase min-h-[2.5rem] group-hover/title:text-primary transition-colors">{title}</h3>
          </Link>
        </div>

        <div className="mt-auto pt-4 border-t border-dashed flex flex-col gap-3">
          <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-tight truncate max-w-[120px]">{location}</span>
            </div>
            {isNegotiable && (
              <span className="text-[8px] font-black text-green-600 uppercase bg-green-50 px-2 py-0.5 border border-green-100">Negotiable</span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="h-6 w-6 bg-secondary flex items-center justify-center text-[9px] font-black text-white shadow-inner">
                 {sellerName.charAt(0)}
               </div>
               <div className="flex flex-col">
                 <p className="text-[9px] font-black text-secondary leading-none uppercase truncate max-w-[90px]">{sellerName}</p>
                 <p className="text-[7px] font-bold text-muted-foreground uppercase">{sellerType}</p>
               </div>
            </div>
            <div className="flex items-center gap-1 bg-muted/30 px-2 py-0.5">
               <Star className="h-2.5 w-2.5 fill-gold text-gold" />
               <span className="text-[9px] font-black text-secondary">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
