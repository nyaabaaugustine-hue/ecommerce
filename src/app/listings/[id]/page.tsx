"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EscrowBadge } from '@/components/escrow-badge';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, Share2, Heart, ShieldCheck, Info } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const router = useRouter();

  // Mock data fetching based on ID
  const listing = {
    id: id,
    title: id === '1' ? 'MacBook Pro M3 Max 16"' : 'Premium Professional Listing',
    category: id === '1' ? 'Electronics' : 'Services',
    price: id === '1' ? 3499 : 500,
    location: 'Accra, Ghana',
    imageUrl: id === '1' 
      ? PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl 
      : PlaceHolderImages.find(img => img.id === 'services')?.imageUrl,
    description: "Experience power and efficiency with this latest model. Featuring high performance storage, stunning display, and superior trust rating. This transaction is fully protected by VaultCommerce Escrow systems. Funds will only be released to the provider after you confirm satisfactory delivery.",
    rating: 4.9,
    provider: 'Premium Provider',
    joinedDate: 'Jan 2022'
  };

  const handlePurchase = () => {
    toast({
      title: "Transaction Initiated",
      description: "You're being redirected to Paystack to secure the funds in our Escrow Vault.",
    });
    // Simulate navigation to dashboard after "payment"
    setTimeout(() => router.push('/dashboard'), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Images and Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden group shadow-2xl">
            <Image 
              src={listing.imageUrl || 'https://picsum.photos/seed/placeholder/800/600'} 
              alt={listing.title} 
              fill 
              className="object-cover"
              data-ai-hint="product image"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <Badge className="bg-white/95 text-primary py-1.5 px-4 rounded-full font-bold shadow-sm">
                {listing.category}
              </Badge>
              <EscrowBadge className="bg-white/95 py-1.5 px-4 rounded-full shadow-sm" />
            </div>
            <div className="absolute top-6 right-6 flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-sm">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-sm">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">{listing.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-foreground">{listing.rating}</span>
                    <span className="text-xs">(124 verified reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary">${listing.price.toLocaleString()}</div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">About this Listing</h3>
              <p className="text-muted-foreground leading-relaxed">
                {listing.description}
              </p>
            </div>

            <Card className="bg-secondary/5 border-secondary/20 rounded-2xl p-6">
              <div className="flex gap-4">
                <ShieldCheck className="h-10 w-10 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-1">High-Trust Interaction Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    VaultCommerce protects both parties. The funds are held by Paystack's secure API until you trigger the 'Proof of Delivery' confirmation on your dashboard.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl sticky top-24 overflow-hidden">
            <div className="bg-primary p-6 text-primary-foreground">
              <h3 className="font-bold text-xl mb-1">Buy Securely</h3>
              <p className="text-xs opacity-70">Escrow Vault Service is Active</p>
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Item Price</span>
                <span className="font-bold">${listing.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Vault Fee (1.5%)</span>
                <span className="font-bold">${(listing.price * 0.015).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center py-2 text-lg font-headline">
                <span className="font-bold">Total Secure Hold</span>
                <span className="font-bold text-primary">${(listing.price * 1.015).toLocaleString()}</span>
              </div>
              
              <Button onClick={handlePurchase} size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 rounded-full shadow-lg shadow-secondary/10">
                Confirm & Secure Funds
              </Button>
              
              <div className="flex items-center justify-center gap-2 pt-2">
                <Image src="https://placehold.co/100x40/transparent/grey?text=Paystack" alt="Paystack" width={80} height={32} />
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Secure Gateway</span>
              </div>
              
              <div className="bg-muted p-4 rounded-xl flex items-start gap-3">
                <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground leading-tight">
                  Funds are held in a vault. Releasing funds prematurely is not recommended unless service is fully completed.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {listing.provider.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{listing.provider}</h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Joined {listing.joinedDate}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full text-xs font-bold">Message Provider</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}