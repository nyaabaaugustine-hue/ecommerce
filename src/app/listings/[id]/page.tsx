"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Phone, 
  MessageSquare, 
  ChevronLeft, 
  CheckCircle2, 
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';
import { useAuth, useCurrency } from '@/components/providers';
import { AuthDialog } from '@/components/auth-dialog';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const listing = LISTINGS.find(l => l.id === id) || LISTINGS[0];

  const handleEscrowIntent = () => {
    if (!user) {
      setShowAuthDialog(true);
      return;
    }
    router.push(`/dashboard?intent=escrow&listingId=${listing.id}`);
  };

  const handleShowContact = () => {
    if (!user) {
      setShowAuthDialog(true);
      return;
    }
    setShowContactInfo(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl bg-background text-foreground">
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-10 rounded-none gap-2 font-black text-[10px] uppercase tracking-widest border border-border text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Marketplace
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        {/* ASSET VISUALIZATION */}
        <div className="lg:col-span-8 space-y-10">
          <div className="relative h-[400px] md:h-[600px] w-full bg-muted overflow-hidden border border-border shadow-2xl">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              fill 
              sizes="(max-width: 1200px) 100vw, 800px"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
              <Badge className="bg-primary text-primary-foreground font-black uppercase text-[10px] px-4 py-1.5 rounded-none">
                {listing.category}
              </Badge>
              {listing.isEscrowProtected && (
                <Badge variant="secondary" className="font-black uppercase text-[10px] px-4 py-1.5 rounded-none border-2 border-primary/40 flex items-center gap-2">
                  <Lock className="h-3 w-3 text-primary" /> Escrow Protected
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-tight italic">
                  {listing.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Posted {listing.postedAt}</span>
                  </div>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                {formatPrice(listing.price)}
                {listing.isNegotiable && (
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] mt-2 font-black">Negotiable</p>
                )}
              </div>
            </div>

            <Separator className="bg-border" />

            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground uppercase tracking-widest flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" /> Description
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium uppercase tracking-wide">
                {listing.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              <Card className="bg-card text-card-foreground border-border rounded-none p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="space-y-6 relative z-10">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">Protected by Escrow</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-widest">
                      Funds are held securely until you verify the asset. Inspect before you release. Full refunds triggered after 48h non-dispatch.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="bg-card text-card-foreground border-border rounded-none p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="space-y-6 relative z-10">
                  <AlertTriangle className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">Safety Notice</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-widest">
                      Only pay through our Sovereign Escrow system. Never send money in advance directly to sellers. Report suspicious listings.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* SELLER & ACTION COMMAND SIDEBAR */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-card border-4 border-primary/20 rounded-none overflow-hidden sticky top-24 shadow-2xl">
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 bg-primary flex items-center justify-center text-2xl font-black text-primary-foreground shadow-xl rounded-none">
                    {listing.seller.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-foreground uppercase tracking-tight text-lg">{listing.seller.name}</h4>
                      {listing.seller.isVerified && <CheckCircle2 className="h-4 w-4 text-primary" />}
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{listing.seller.type}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-y border-border py-6">
                  <div className="text-center space-y-1">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Market Rating</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span className="text-sm font-black text-foreground">{listing.seller.rating}</span>
                    </div>
                  </div>
                  <div className="text-center space-y-1 border-l border-border">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Registry Age</p>
                    <p className="text-sm font-black text-foreground">{listing.seller.joinDate}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={handleEscrowIntent}
                  className="w-full h-16 bg-primary text-primary-foreground hover:opacity-90 font-black uppercase text-xs tracking-[0.2em] rounded-none shadow-2xl flex items-center justify-center gap-3 transition-all"
                >
                  <Lock className="h-5 w-5" /> Start Secure Escrow
                </Button>
                
                {showContactInfo ? (
                  <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <a href={`tel:${listing.seller.phone}`} className="block">
                      <Button variant="outline" className="w-full h-14 font-black uppercase text-[10px] tracking-widest rounded-none gap-3">
                        <Phone className="h-4 w-4" /> Call: {listing.seller.phone}
                      </Button>
                    </a>
                    <a href={`https://wa.me/${listing.seller.whatsapp}`} target="_blank" className="block">
                      <Button className="w-full h-14 bg-[#25D366] text-white font-black uppercase text-[10px] tracking-widest rounded-none gap-3 border-none">
                        <MessageSquare className="h-4 w-4" /> WhatsApp Seller
                      </Button>
                    </a>
                  </div>
                ) : (
                  <Button 
                    variant="outline"
                    onClick={handleShowContact}
                    className="w-full h-16 border-2 border-border text-foreground hover:bg-muted font-black uppercase text-xs tracking-widest rounded-none flex items-center justify-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-primary" /> Reveal Contact Details
                  </Button>
                )}
              </div>

              <div className="bg-muted p-6 border border-dashed border-border text-center">
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] leading-relaxed">
                  Avoid payment risks by using our Sovereign Escrow Protocol. Do not pay outside the platform.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card p-8 border border-border rounded-none space-y-6">
            <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Safety Protocol</h5>
            <ul className="space-y-4">
              {[
                "Inspect item before authorizing release.",
                "Meet sellers in public authorized locations.",
                "Verify vehicle registration documents.",
                "Never share your platform password."
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-[9px] font-bold text-muted-foreground uppercase leading-snug">
                  <div className="h-1.5 w-1.5 bg-primary mt-1 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </div>
  );
}
