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
  ShieldAlert,
  ArrowRight,
  Timer,
  ShoppingCart,
  Key,
  Users,
  Activity,
  Wallet,
  Phone,
  MessageSquare,
  ChevronLeft,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useAuth, useCurrency } from '@/components/providers';
import { AuthDialog } from '@/components/auth-dialog';
import { cn } from '@/lib/utils';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showContactInfo, setShowContactContactInfo] = useState(false);

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
    setShowContactContactInfo(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-10 rounded-none gap-2 font-black text-[10px] uppercase tracking-widest border border-white/10 text-white/60 hover:text-white"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Marketplace
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        {/* Left: Visuals & Description */}
        <div className="lg:col-span-8 space-y-10">
          <div className="relative h-[400px] md:h-[600px] w-full bg-secondary overflow-hidden border border-white/5 shadow-2xl">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              fill 
              sizes="(max-width: 1200px) 100vw, 800px"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
              <Badge className="bg-primary text-secondary font-black uppercase text-[10px] px-4 py-1.5 rounded-none">
                {listing.category}
              </Badge>
              {listing.isEscrowProtected && (
                <Badge className="bg-secondary text-white font-black uppercase text-[10px] px-4 py-1.5 rounded-none border-2 border-primary/40 flex items-center gap-2">
                  <Lock className="h-3 w-3 text-primary" /> Escrow Protected
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight italic">
                  {listing.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Posted {listing.postedAt}</span>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 border border-primary/20 flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest">Active Node</span>
                  </div>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                {formatPrice(listing.price)}
                {listing.isNegotiable && (
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] mt-2 font-black">Negotiable</p>
                )}
              </div>
            </div>

            <Separator className="bg-white/5" />

            <div className="space-y-6">
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" /> Description
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium uppercase tracking-wide">
                {listing.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              <Card className="bg-secondary text-white border-white/10 rounded-none p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="space-y-6 relative z-10">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">Secure Escrow</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-widest">
                      Funds are held by VaultCommerce until you verify the asset. If the seller fails dispatch within 48h, a full GHS refund node is triggered.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="bg-secondary text-white border-white/10 rounded-none p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="space-y-6 relative z-10">
                  <Activity className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">Fidelity Audit</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-widest">
                      Every verified seller in our registry undergoes institutional verification. Shop with confidence across all Ghanaian sectors.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Right: Contact & Action Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-secondary border-4 border-primary/20 rounded-none overflow-hidden sticky top-24 shadow-2xl">
            <div className="p-8 space-y-8">
              {/* Seller Profile Node */}
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 bg-primary flex items-center justify-center text-2xl font-black text-secondary shadow-xl rounded-none">
                    {listing.seller.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-white uppercase tracking-tight text-lg">{listing.seller.name}</h4>
                      {listing.seller.isVerified && <CheckCircle2 className="h-4 w-4 text-primary" />}
                    </div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{listing.seller.type}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-6">
                  <div className="text-center space-y-1">
                    <p className="text-[8px] font-black text-white/40 uppercase tracking-widest">Trust Rating</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span className="text-sm font-black text-white">{listing.seller.rating}</span>
                    </div>
                  </div>
                  <div className="text-center space-y-1 border-l border-white/5">
                    <p className="text-[8px] font-black text-white/40 uppercase tracking-widest">Joined</p>
                    <p className="text-sm font-black text-white">{listing.seller.joinDate}</p>
                  </div>
                </div>
              </div>

              {/* Action Nodes */}
              <div className="space-y-4">
                <Button 
                  onClick={handleEscrowIntent}
                  className="w-full h-16 bg-primary text-secondary hover:bg-white font-black uppercase text-xs tracking-[0.2em] rounded-none shadow-2xl flex items-center justify-center gap-3 transition-all"
                >
                  <Lock className="h-5 w-5" /> Start Secure Escrow
                </Button>
                
                {showContactInfo ? (
                  <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <a href={`tel:${listing.seller.phone}`} className="block">
                      <Button className="w-full h-14 bg-white text-secondary font-black uppercase text-[10px] tracking-widest rounded-none gap-3">
                        <Phone className="h-4 w-4" /> Call: {listing.seller.phone}
                      </Button>
                    </a>
                    <a href={`https://wa.me/${listing.seller.whatsapp}`} target="_blank" className="block">
                      <Button className="w-full h-14 bg-[#25D366] text-white font-black uppercase text-[10px] tracking-widest rounded-none gap-3">
                        <MessageSquare className="h-4 w-4" /> WhatsApp Message
                      </Button>
                    </a>
                  </div>
                ) : (
                  <Button 
                    variant="outline"
                    onClick={handleShowContact}
                    className="w-full h-16 border-2 border-white/10 text-white hover:bg-white/5 font-black uppercase text-xs tracking-widest rounded-none flex items-center justify-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-primary" /> Reveal Contact Node
                  </Button>
                )}
              </div>

              <div className="bg-white/5 p-6 border border-dashed border-white/10 text-center">
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] leading-relaxed">
                  Avoid payment risks by using our Sovereign Escrow Protocol. Never pay in advance to unverified nodes.
                </p>
              </div>
            </div>
          </Card>

          {/* Institutional Sidebars */}
          <Card className="bg-secondary p-8 border border-white/10 rounded-none space-y-6">
            <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Safety Protocol</h5>
            <ul className="space-y-4">
              {[
                "Only release funds after physical inspection.",
                "Meet in public authorized locations.",
                "Verify property ownership documents.",
                "Report anomalous seller behavior."
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-[9px] font-bold text-white/60 uppercase leading-snug">
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
