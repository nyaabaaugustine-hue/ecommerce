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
  Timer
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LISTINGS } from '@/lib/mock-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

export default function ListingDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const router = useRouter();
  const [isLocking, setIsLocking] = useState(false);
  const [lockStep, setLockStep] = useState(0);
  const [showVaultSuccess, setShowVaultSuccess] = useState(false);

  const listing = LISTINGS.find(l => l.id === id) || LISTINGS[0];

  const handlePurchase = () => {
    setIsLocking(true);
    // Simulate multi-step vault locking process
    const steps = [
      "Connecting to Paystack Secure Layer...",
      "Encrypting Transaction Payload...",
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

  const handleRedirectToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Images and Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl border-4 border-white">
            <Image 
              src={listing.imageUrl} 
              alt={listing.title} 
              fill 
              className="object-cover"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <Badge className="bg-white/95 text-primary py-1.5 px-4 rounded-full font-bold shadow-sm">
                {listing.category}
              </Badge>
              <EscrowBadge className="bg-white/95 py-1.5 px-4 rounded-full shadow-sm" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">{listing.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-foreground">{listing.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary">GH₵{listing.price.toLocaleString()}</div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold">100% Protection Policy</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/10 rounded-2xl">
                <Timer className="h-5 w-5 text-secondary" />
                <span className="text-sm font-bold">48h Delivery SLA Guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <Lock className="h-5 w-5 text-secondary" />
                The Vault Protocol
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This transaction is protected by the **VaultCommerce Escrow System**. Once you deposit funds, they are restricted in our secure Paystack vault. The vendor has 48 hours to initiate delivery. If they fail, your GH₵ is automatically returned to your wallet. Funds are only released to the vendor when YOU confirm satisfaction.
              </p>
            </div>

            <Card className="bg-primary text-white border-none rounded-[2rem] p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
               <div className="flex gap-6 relative z-10">
                <ShieldCheck className="h-12 w-12 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-1">Paystack-GHS Security Layer</h4>
                  <p className="text-sm text-white/70">
                    VaultCommerce acts as the neutral mediator. We hold the keys to the vault. Your money never touches the vendor's hands until the job is done right.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Purchase Sidebar */}
        <div className="space-y-6">
          <Card className="border-none shadow-2xl sticky top-24 overflow-hidden rounded-[2.5rem]">
            <div className="bg-primary p-8 text-primary-foreground">
              <h3 className="font-bold text-2xl mb-1 flex items-center gap-2">
                <ShieldAlert className="h-6 w-6 text-secondary" />
                Secure Vault
              </h3>
              <p className="text-xs opacity-70 font-bold uppercase tracking-widest">Escrow Session Active</p>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-medium">Item Price</span>
                <span className="font-bold">GH₵{listing.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground font-medium">Vault Service Fee (2%)</span>
                <span className="font-bold text-secondary">GH₵{(listing.price * 0.02).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center py-4 text-xl font-headline">
                <span className="font-bold">Total Secure Hold</span>
                <span className="font-bold text-primary">GH₵{(listing.price * 1.02).toLocaleString()}</span>
              </div>
              
              <Button 
                onClick={handlePurchase} 
                size="lg" 
                className="w-full bg-secondary text-white hover:bg-secondary/90 font-black h-16 rounded-full shadow-xl shadow-secondary/20 transition-all hover:scale-[1.02]"
              >
                Deposit to Escrow Vault
              </Button>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773997887/vbb_kuy4qi.png" 
                  alt="Paystack Secure Checkout" 
                  width={180} 
                  height={60} 
                  className="h-12 object-contain"
                  unoptimized
                />
              </div>
              
              <div className="bg-muted/50 p-4 rounded-2xl flex items-start gap-3 border border-dashed border-primary/20">
                <Timer className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground leading-tight font-medium">
                  **Safe-Guard Active**: Funds are restricted for 48 hours. Auto-refund triggers if delivery status isn't updated by vendor.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vault Locking Animation Modal */}
      <Dialog open={isLocking}>
        <DialogContent className="sm:max-w-md border-none bg-primary text-white text-center p-12 rounded-[3rem]">
          <div className="flex flex-col items-center gap-8 py-4">
            <div className="relative">
              <div className="h-32 w-32 rounded-full border-4 border-white/20 flex items-center justify-center vault-lock-animation">
                <Lock className="h-16 w-16 text-secondary" />
              </div>
              <div className="absolute inset-0 h-32 w-32 rounded-full border-4 border-white border-t-transparent animate-spin" />
            </div>
            <div className="space-y-4 w-full">
              <DialogTitle className="text-2xl font-black text-white">Vault Lockdown Initiated</DialogTitle>
              <div className="space-y-2">
                <p className="text-white/60 text-sm font-mono animate-pulse">
                  {["Connecting to Paystack...", "Encrypting GHS Payload...", "Syncing Treasury...", "Securing Vault..."][lockStep]}
                </p>
                <Progress value={(lockStep + 1) * 25} className="h-2 bg-white/10" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showVaultSuccess}>
        <DialogContent className="sm:max-w-md rounded-[3rem] p-10">
          <div className="text-center space-y-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-black text-primary">Funds Secured!</DialogTitle>
              <DialogDescription className="text-lg font-medium text-muted-foreground">
                GH₵{(listing.price * 1.02).toLocaleString()} is now locked in the VaultCommerce Treasury.
              </DialogDescription>
            </div>
            
            <Card className="bg-secondary/5 border-secondary/20 p-6 rounded-3xl">
              <div className="flex items-center justify-center gap-3 text-secondary font-black">
                <Timer className="h-6 w-6" />
                <span className="text-xl">48:00:00</span>
              </div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground mt-2">
                Vendor Delivery Window (GHS Protection Active)
              </p>
            </Card>

            <Button onClick={handleRedirectToDashboard} className="w-full h-14 bg-primary text-white rounded-2xl font-bold gap-2 text-lg">
              Manage in My Vault <ArrowRight className="h-5 w-5" />
            </Button>
            
            <p className="text-xs text-muted-foreground">
              You will be notified via SMS and Email once the vendor initiates delivery.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}