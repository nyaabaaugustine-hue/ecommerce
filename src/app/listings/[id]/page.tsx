
"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EscrowBadge } from '@/components/escrow-badge';
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
  Wallet
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useAuth, useCart, useCurrency } from '@/components/providers';
import { AuthDialog } from '@/components/auth-dialog';
import { cn } from '@/lib/utils';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  
  const [isLocking, setIsLocking] = useState(false);
  const [lockStep, setLockStep] = useState(0);
  const [showVaultSuccess, setShowVaultSuccess] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const listing = LISTINGS.find(l => l.id === id) || LISTINGS[0];

  const handlePurchase = () => {
    if (!user) {
      setShowAuthDialog(true);
      return;
    }

    setIsLocking(true);
    const steps = [
      "Connecting to Payment Gateway...",
      "Securing Funds in Escrow...",
      "Authorizing Payment Hold...",
      "Locking Transaction..."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLockStep(currentStep);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsLocking(false);
        setShowVaultSuccess(true);
      }
    }, 1200);
  };

  const handleAddToCart = () => {
    addItem(listing);
    toast({
      title: "Added to Cart",
      description: `${listing.title} is now in your secure cart.`,
    });
  };

  const handleRedirectToDashboard = () => {
    router.push('/dashboard');
  };

  const ESCROW_STEPS = [
    { label: "Deposit", icon: Wallet, desc: "GHS Secured" },
    { label: "Lock", icon: Lock, desc: "Safe Escrow" },
    { label: "Shipping", icon: Timer, desc: "48h Window" },
    { label: "Inspection", icon: ShieldCheck, desc: "Quality Check" },
    { label: "Payout", icon: Key, desc: "Seller Payment" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left: Images and Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[300px] md:h-[500px] w-full rounded-none overflow-hidden group shadow-lg border border-border">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              fill 
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
            />
            <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-wrap gap-2">
              <Badge className="bg-white/95 text-primary py-1.5 px-4 rounded-none font-black shadow-sm text-[10px] md:text-xs">
                {listing.category}
              </Badge>
              <EscrowBadge className="bg-white/95 py-1.5 px-4 rounded-none shadow-sm scale-90 md:scale-100" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl font-headline font-black text-secondary tracking-tighter mb-2 uppercase">{listing.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-[10px] md:sm font-black uppercase tracking-widest">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    <span className="text-[10px] md:sm font-black text-secondary">{listing.rating}</span>
                  </div>
                  <div className="bg-secondary/10 px-3 py-1 flex items-center gap-2 border border-secondary/20">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[9px] font-black text-secondary uppercase tracking-widest">{listing.salesCount} Verified Orders</span>
                  </div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-black text-burgundy">{formatPrice(listing.price)}</div>
            </div>

            <Separator />

            {/* Interactive Escrow Timeline */}
            <div className="space-y-6 py-4">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Secure Purchase Flow</h3>
               </div>
               <div className="grid grid-cols-5 gap-2">
                 {ESCROW_STEPS.map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center gap-3 group">
                      <div className={cn(
                        "h-12 w-12 flex items-center justify-center border-2 transition-all duration-500",
                        idx === 0 ? "bg-primary border-primary text-secondary shadow-xl" : "bg-muted border-border/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                      )}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-[8px] font-black uppercase tracking-tighter leading-none">{step.label}</p>
                        <p className="text-[7px] text-muted-foreground font-bold uppercase hidden md:block">{step.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="bg-muted/30 p-4 border border-dashed text-center">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    Funds are held securely by the Escrow system until you verify the order quality.
                  </p>
               </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-none">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest">Full Buyer Protection</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-none">
                <Timer className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-[10px] font-black uppercase tracking-widest">48h Delivery Guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-secondary flex items-center gap-2 tracking-tight uppercase">
                <Lock className="h-5 w-5 text-primary" />
                Your Safety Protocol
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium uppercase tracking-wide">
                This transaction is protected by our **Secure Escrow System**. Upon payment, your funds are restricted until you authorize release after inspection. Vendors must ship within 48 hours to avoid automatic refund nodes.
              </p>
            </div>

            <Card className="bg-secondary text-white border-none rounded-none p-6 md:p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-none -mr-20 -mt-20 blur-3xl" />
               <div className="flex flex-col sm:flex-row gap-4 md:gap-6 relative z-10">
                <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-primary shrink-0" />
                <div>
                  <h4 className="font-black text-lg md:text-xl mb-1 tracking-tight uppercase">Institutional Trust</h4>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium uppercase tracking-widest">
                    Ecommerce acts as an authorized neutral party. Every transaction is monitored to ensure GHS safety and high-fidelity product standards.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl sticky top-24 overflow-hidden rounded-none border border-border">
            <div className="bg-secondary p-6 md:p-8 text-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-black text-xl md:text-2xl flex items-center gap-2 tracking-tight uppercase">
                  <ShieldAlert className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Checkout
                </h3>
                <Badge className="bg-primary text-secondary animate-pulse rounded-none text-[8px] font-black uppercase">HIGH DEMAND</Badge>
              </div>
              <p className="text-[9px] opacity-70 font-black uppercase tracking-[0.2em]">Escrow Protected Session</p>
            </div>
            <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-black uppercase text-[10px] tracking-widest">Item Price</span>
                <span className="font-black text-burgundy text-sm md:text-base">{formatPrice(listing.price)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-black uppercase text-[10px] tracking-widest">Escrow Fee (2%)</span>
                <span className="font-black text-primary text-sm md:text-base">{formatPrice(listing.price * 0.02)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center py-4 text-lg md:text-xl font-headline">
                <span className="font-black text-secondary tracking-tight uppercase">Total Deposit</span>
                <span className="font-black text-burgundy">{formatPrice(listing.price * 1.02)}</span>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 bg-muted/50 border border-dashed border-primary/20">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-[9px] font-black text-secondary uppercase tracking-tight">Verified by {listing.salesCount} customers</span>
              </div>
              
              <div className="grid gap-3">
                <Button 
                  onClick={handlePurchase} 
                  size="lg" 
                  className="w-full bg-secondary text-white hover:bg-secondary/90 font-black h-14 md:h-16 rounded-none shadow-lg transition-all text-sm md:text-base uppercase tracking-widest"
                >
                  Pay Securely
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleAddToCart} 
                  size="lg" 
                  className="w-full border-primary/20 text-secondary hover:bg-primary/5 font-black h-14 md:h-16 rounded-none transition-all gap-2 text-sm md:text-base uppercase tracking-widest"
                >
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Add to Secure Cart
                </Button>
              </div>
              
              {!user && (
                <p className="text-[9px] md:text-[10px] text-center font-black text-primary uppercase tracking-widest animate-pulse">
                  Login Authorized Required to Purchase
                </p>
              )}
              
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-dashed">
                <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Authorized Payment Methods</p>
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059424/Screenshot_319_zlvuyf.png" 
                  alt="Secure Payments" 
                  width={200} 
                  height={50} 
                  className="h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  unoptimized
                />
              </div>
              
              <div className="bg-muted/50 p-4 rounded-none flex items-start gap-3 border border-dashed border-primary/20">
                <Timer className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[9px] text-muted-foreground leading-tight font-black uppercase tracking-widest">
                  Automatic GHS refund if the seller fails shipping within 48h.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />

      {/* Escrow Locking Animation Modal */}
      <Dialog open={isLocking}>
        <DialogContent className="sm:max-w-md border-none bg-secondary text-white text-center p-8 md:p-12 rounded-none">
          <DialogHeader className="sr-only">
             <DialogTitle>Processing Payment</DialogTitle>
             <DialogDescription>Securing your funds in our escrow system.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 md:gap-8 py-4">
            <div className="relative">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-none border-4 border-primary/20 flex items-center justify-center vault-lock-animation">
                <Lock className="h-10 w-10 md:h-16 md:w-16 text-primary" />
              </div>
              <div className="absolute inset-0 h-24 w-24 md:h-32 md:w-32 rounded-none border-4 border-primary border-t-transparent animate-spin" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">Securing Escrow</h3>
              <div className="space-y-2">
                <p className="text-primary/80 text-[9px] md:text-[10px] font-black uppercase tracking-widest animate-pulse">
                  {lockStep < 4 ? ["Connecting...", "Securing Funds...", "Authorizing...", "Finalizing..."][lockStep] : "Complete!"}
                </p>
                <Progress value={(lockStep + 1) * 25} className="h-2 bg-white/10" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showVaultSuccess}>
        <DialogContent className="sm:max-w-md rounded-none p-6 md:p-10 border-t-4 border-t-primary shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-black text-secondary tracking-tight uppercase text-center">Payment Secured!</DialogTitle>
            <DialogDescription className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest text-center mt-2">
              {formatPrice(listing.price * 1.02)} is now held safely in Escrow.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-6 pt-4">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-primary/10 rounded-none flex items-center justify-center mx-auto">
              <Key className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            
            <Card className="bg-muted p-4 md:p-6 rounded-none border-none shadow-inner">
              <div className="flex items-center justify-center gap-3 text-secondary font-black">
                <Timer className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="text-xl md:text-2xl font-black tracking-tighter">48:00:00</span>
              </div>
              <p className="text-[9px] md:text-[10px] uppercase font-black text-muted-foreground mt-2 tracking-widest">
                Seller's Shipping Deadline
              </p>
            </Card>

            <Button onClick={handleRedirectToDashboard} className="w-full h-12 md:h-14 bg-secondary text-white rounded-none font-black gap-2 text-xs uppercase tracking-widest hover:bg-secondary/90 shadow-xl">
              Track in My Account <ArrowRight className="h-5 w-5" />
            </Button>
            
            <p className="text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              Confirmation SMS sent to your phone
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
