import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowBadge } from '@/components/escrow-badge';
import { MapPin, Star } from 'lucide-react';

interface ListingProps {
  id: string;
  title: string;
  category: string;
  price: number;
  location: string;
  imageUrl: string;
  rating: number;
  provider: string;
}

export function ListingCard({ id, title, category, price, location, imageUrl, rating, provider }: ListingProps) {
  return (
    <Link href={`/listings/${id}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint="product listing"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-white/90 text-primary hover:bg-white border-none text-[10px] uppercase tracking-wider font-bold">
              {category}
            </Badge>
          </div>
          <div className="absolute bottom-2 right-2">
            <EscrowBadge className="bg-white/95 scale-75 origin-bottom-right" />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({Math.floor(Math.random() * 50) + 1} reviews)</span>
          </div>
          <div className="text-xl font-bold text-primary">
            ${price.toLocaleString()}
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-muted/30 border-t flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Provider: <span className="font-medium text-foreground">{provider}</span></span>
          <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Verified</span>
        </CardFooter>
      </Card>
    </Link>
  );
}