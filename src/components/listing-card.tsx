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
  sellerType: string;
  sellerName: string;
}

export function ListingCard(props: ListingProps) {
  const { id, title, category, price, location, imageUrl, rating, postedAt, isNegotiable, sellerType, sellerName } = props;
  const { formatPrice } = useCurrency();

  return (
    <Card className="group overflow-hidden bg-white border border-border/60 hover:border-primary hover:shadow-xl transition-all duration-300 relative flex flex-col h-full rounded-none">
      {/* Escrow Trust Layer */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-primary/95 text-white text-[8px] font-black px-2 py-0.5 rounded-none shadow-lg border-none flex items-center gap-1.5 backdrop-blur-sm">
           <ShieldCheck className="h-2.5 w-2.5 text-accent" />
           <span className="uppercase tracking-widest">Escrow Protected</span>
        </Badge>
      </div>

      {/* Image Section */}
      <Link href={`/listings/${id}`} className="relative h-48 w-full overflow-hidden block bg-muted rounded-none">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <CardContent className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-center mb-1">
          <p className="text-[10px] font-black text-primary uppercase tracking-widest">{category}</p>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] font-bold text-muted-foreground uppercase">{postedAt}</span>
          </div>
        </div>
        
        <Link href={`/listings/${id}`} className="block">
          <h3 className="font-bold text-sm line-clamp-2 text-secondary tracking-tight uppercase min-h-[2.5rem]">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl font-black text-burgundy tracking-tighter">{formatPrice(price)}</span>
          {isNegotiable && (
            <span className="text-[9px] font-bold text-green-600 uppercase bg-green-50 px-1.5 py-0.5 border border-green-100">Negotiable</span>
          )}
        </div>

        <div className="mt-auto pt-3 border-t border-dashed flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-tight truncate">{location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
               <div className="h-5 w-5 bg-secondary flex items-center justify-center text-[8px] font-black text-white">
                 {sellerName.charAt(0)}
               </div>
               <div className="flex flex-col">
                 <p className="text-[9px] font-black text-secondary leading-none uppercase truncate max-w-[80px]">{sellerName}</p>
                 <p className="text-[7px] font-bold text-muted-foreground uppercase">{sellerType}</p>
               </div>
            </div>
            <div className="flex items-center gap-1">
               <Star className="h-2.5 w-2.5 fill-gold text-gold" />
               <span className="text-[9px] font-black text-secondary">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}