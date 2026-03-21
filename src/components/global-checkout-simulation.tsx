
"use client";

import { useCart, useCurrency } from '@/components/providers';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Lock, Key, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * @fileOverview Global Forced Buying Process Modal
 * Handles the institutional simulation nodes: Connecting, Syncing, Authorizing.
 */
export function GlobalCheckoutSimulation() {
  const { isCheckingOut, checkoutStep, showSuccess, closeSuccess, total } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  const STEPS = [
    "Connecting to Escrow System...",
    "Syncing Payment Center...",
    "Authorizing Secure Lock...",
    "Finalizing Transaction..."
  ];

  const handleGoToDashboard = () => {
    closeSuccess();
    router.push('/dashboard');
  };

  return (
    <>
      {/* Simulation Progress Overlay */}
      <Dialog open={isCheckingOut}>
        <DialogContent className="sm:max-w-md border-none bg-secondary text-white text-center p-10 rounded-none shadow-2xl z-[150]">
          <DialogHeader className="sr-only">
             <DialogTitle>Payment Authorization</DialogTitle>
             <DialogDescription>Securing funds in the escrow system.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-8 py-4">
            <div className="relative">
              <div className="h-24 w-24 rounded-none border-4 border-primary/20 flex items-center justify-center">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute inset-0 h-24 w-24 rounded-none border-4 border-primary border-t-transparent animate-spin" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-xl font-black text-white tracking-tighter uppercase">Securing Escrow</h3>
              <div className="space-y-2">
                <p className="text-primary/80 text-[10px] font-black uppercase tracking-widest animate-pulse">
                  {STEPS[checkoutStep]}
                </p>
                <Progress value={(checkoutStep + 1) * 25} className="h-1.5 bg-white/10" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Protocol Modal */}
      <Dialog open={showSuccess} onOpenChange={closeSuccess}>
        <DialogContent className="sm:max-w-md rounded-none p-10 border-t-4 border-t-primary shadow-2xl z-[150]">
          <DialogHeader>
             <DialogTitle className="text-2xl font-black text-secondary tracking-tighter uppercase text-center">Payment Secured!</DialogTitle>
             <DialogDescription className="text-[10px] font-black text-muted-foreground uppercase tracking-widest text-center mt-2">
                Your institutional GHS deposit is successfully held in Escrow.
             </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-6 pt-4">
            <div className="h-16 w-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto">
              <Key className="h-8 w-8 text-primary" />
            </div>
            
            <div className="bg-muted p-6 rounded-none border border-dashed">
              <div className="flex items-center justify-center gap-3 text-secondary font-black">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-2xl font-black tracking-tighter">Authorized</span>
              </div>
              <p className="text-[9px] uppercase font-black text-muted-foreground mt-2 tracking-widest">
                Registry Node: GHS-ACCRA-AUTHORIZED
              </p>
            </div>

            <Button onClick={handleGoToDashboard} className="w-full h-14 bg-secondary text-white rounded-none font-black gap-2 text-[10px] uppercase tracking-widest hover:bg-secondary/90 shadow-2xl">
              View My Account <ArrowRight className="h-4 w-4" />
            </Button>
            
            <p className="text-[8px] text-muted-foreground font-black uppercase tracking-[0.3em]">
              Confirmation SMS sent to your verified phone
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
