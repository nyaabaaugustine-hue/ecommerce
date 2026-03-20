"use client";

import { useState, useEffect } from 'react';
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
  Info, 
  Gavel, 
  CheckCircle2, 
  Lock, 
  Loader2, 
  ShieldAlert,
  ArrowRight,
  Timer,
  ShoppingCart,
  Key
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useAuth, useCart } from '@/components/providers';
import { AuthDialog } from '@/components/auth-dialog';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const { addItem } = useCart();
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
      "Connecting to Paystack Secure Layer...",
      "Syncing with High Admin Protocol...",
      "Authorizing GHS Vault Deposit...",
      "Locking Funds in Escrow..."
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
      title: "Added to Vault",
      description: `${listing.title} is now in your secure selection.`,
    });
  };

  const handleRedirectToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Images and Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-none overflow-hidden group shadow-lg border border-border">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              fill 
              className="object-cover"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <Badge className="bg-white/95 text-primary py-1.5 px-4 rounded-none font-bold shadow-sm">
                {listing.category}
              </Badge>
              <EscrowBadge className="bg-white/95 py-1.5 px-4 rounded-none shadow-sm" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-headline font-black text-secondary tracking-tighter mb-2">{listing.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-black text-secondary">{listing.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-black text-primary">GH₵{listing.price.toLocaleString()}</div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-none">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest">100% Protection Policy</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-none">
                <Timer className="h-5 w-5 text-secondary" />
                <span className="text-xs font-black uppercase tracking-widest">48h Delivery SLA Guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-secondary flex items-center gap-2 tracking-tight">
                <Lock className="h-5 w-5 text-primary" />
                The Vault Protocol
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                This transaction is protected by the **VaultCommerce Escrow System**. Once you deposit funds, they are restricted in our secure Paystack vault via a **High Admin Protocol Lock**. The vendor has 48 hours to initiate delivery. If they fail, your GH₵ is automatically returned to your wallet.
              </p>
            </div>

            <Card className="bg-secondary text-white border-none rounded-none p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-none -mr-20 -mt-20 blur-3xl" />
               <div className="flex gap-6 relative z-10">
                <ShieldCheck className="h-12 w-12 text-primary shrink-0" />
                <div>
                  <h4 className="font-black text-xl mb-1 tracking-tight">Institutional Authorization</h4>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    VaultCommerce acts as the neutral mediator. Every lock is cryptographically verified by our High Admin node. Your money is secured at the highest level of Ghanaian retail banking standards.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl sticky top-24 overflow-hidden rounded-none border border-border">
            <div className="bg-secondary p-8 text-white">
              <h3 className="font-black text-2xl mb-1 flex items-center gap-2 tracking-tight">
                <ShieldAlert className="h-6 w-6 text-primary" />
                Secure Vault
              </h3>
              <p className="text-[10px] opacity-70 font-black uppercase tracking-[0.2em]">Escrow Session Active</p>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-bold uppercase text-xs tracking-widest">Item Price</span>
                <span className="font-black text-secondary">GH₵{listing.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-bold uppercase text-xs tracking-widest">Vault Fee (2%)</span>
                <span className="font-black text-primary">GH₵{(listing.price * 0.02).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center py-4 text-xl font-headline">
                <span className="font-black text-secondary tracking-tight">Total Hold</span>
                <span className="font-black text-primary">GH₵{(listing.price * 1.02).toLocaleString()}</span>
              </div>
              
              <div className="grid gap-3">
                <Button 
                  onClick={handlePurchase} 
                  size="lg" 
                  className="w-full bg-secondary text-white hover:bg-secondary/90 font-black h-16 rounded-none shadow-lg transition-all"
                >
                  Deposit to Escrow Vault
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleAddToCart} 
                  size="lg" 
                  className="w-full border-primary/20 text-secondary hover:bg-primary/5 font-black h-16 rounded-none transition-all gap-2"
                >
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Add to Vault Selection
                </Button>
              </div>
              
              {!user && (
                <p className="text-[10px] text-center font-black text-primary uppercase tracking-widest animate-pulse">
                  Verification Required to Secure Funds
                </p>
              )}
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773997887/vbb_kuy4qi.png" 
                  alt="Paystack Secure Checkout" 
                  width={180} 
                  height={60} 
                  className="h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
                  unoptimized
                />
              </div>
              
              <div className="bg-muted/50 p-4 rounded-none flex items-start gap-3 border border-dashed border-primary/20">
                <Timer className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground leading-tight font-black uppercase">
                  SLA Active: 48h Auto-Refund triggers if delivery is not initiated by the vendor.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />

      {/* Vault Locking Animation Modal */}
      <Dialog open={isLocking}>
        <DialogContent className="sm:max-w-md border-none bg-secondary text-white text-center p-12 rounded-none">
          <div className="flex flex-col items-center gap-8 py-4">
            <div className="relative">
              <div className="h-32 w-32 rounded-none border-4 border-primary/20 flex items-center justify-center vault-lock-animation">
                <Lock className="h-16 w-16 text-primary" />
              </div>
              <div className="absolute inset-0 h-32 w-32 rounded-none border-4 border-primary border-t-transparent animate-spin" />
            </div>
            <div className="space-y-4 w-full">
              <DialogTitle className="text-2xl font-black text-white tracking-tighter">Vault Lockdown Initiated</DialogTitle>
              <div className="space-y-2">
                <p className="text-primary/80 text-[10px] font-black uppercase tracking-widest animate-pulse">
                  {["Connecting to Paystack...", "Syncing High Admin Protocol...", "Syncing Treasury...", "Securing Vault..."][lockStep]}
                </p>
                <Progress value={(lockStep + 1) * 25} className="h-2 bg-white/10" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showVaultSuccess}>
        <DialogContent className="sm:max-w-md rounded-none p-10">
          <div className="text-center space-y-6">
            <div className="h-20 w-20 bg-primary/10 rounded-none flex items-center justify-center mx-auto">
              <Key className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-black text-secondary tracking-tight">Protocol Lock Success!</DialogTitle>
              <DialogDescription className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                GH₵{(listing.price * 1.02).toLocaleString()} restricted via High Admin Node.
              </DialogDescription>
            </div>
            
            <Card className="bg-muted p-6 rounded-none border-none">
              <div className="flex items-center justify-center gap-3 text-secondary font-black">
                <Timer className="h-6 w-6 text-primary" />
                <span className="text-2xl font-black tracking-tighter">48:00:00</span>
              </div>
              <p className="text-[10px] uppercase font-black text-muted-foreground mt-2 tracking-widest">
                Vendor Delivery Window
              </p>
            </Card>

            <Button onClick={handleRedirectToDashboard} className="w-full h-14 bg-secondary text-white rounded-none font-black gap-2 text-lg hover:bg-secondary/90 shadow-xl">
              Manage in My Vault <ArrowRight className="h-5 w-5" />
            </Button>
            
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              Notification SMS sent to {user?.email}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
