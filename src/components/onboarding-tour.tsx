"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, Timer, ArrowRight, ShieldAlert } from 'lucide-react';

export function OnboardingTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem('ecommerce_tour_seen');
    if (!seen) {
      setOpen(true);
    }
  }, []);

  const handleFinish = () => {
    setOpen(false);
    localStorage.setItem('ecommerce_tour_seen', 'true');
  };

  const steps = [
    {
      title: "Welcome to Ecommerce",
      desc: "Ghana's safest marketplace. Every transaction is protected by our high-fidelity Escrow system.",
      icon: ShieldCheck,
    },
    {
      title: "How Escrow Protects You",
      desc: "When you buy, your money is held safely by us. It is only released to the seller after you inspect and approve the item.",
      icon: Lock,
    },
    {
      title: "The 48-Hour Guarantee",
      desc: "Sellers must ship within 48 hours. If they don't, your funds are automatically returned to your account.",
      icon: Timer,
    },
    {
      title: "Ready to Start?",
      desc: "Browse our verified product nodes and shop with absolute confidence.",
      icon: ShieldAlert,
    }
  ];

  const current = steps[step];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-none border-t-4 border-t-primary p-0 overflow-hidden shadow-2xl">
        <div className="bg-secondary p-10 flex flex-col items-center justify-center text-white space-y-6">
          <div className="h-20 w-20 bg-primary/20 flex items-center justify-center border-2 border-primary animate-pulse">
            <current.icon className="h-10 w-10 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black uppercase tracking-tighter">{current.title}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Secure Registry Node</p>
          </div>
        </div>
        <div className="p-10 space-y-8 bg-white">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center leading-relaxed">
            {current.desc}
          </p>
          
          <div className="flex gap-1 justify-center">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 w-8 transition-all ${i === step ? 'bg-primary' : 'bg-muted'}`} />
            ))}
          </div>

          <Button 
            onClick={() => step < steps.length - 1 ? setStep(s => s + 1) : handleFinish()}
            className="w-full h-14 bg-secondary text-white hover:bg-primary font-black uppercase text-[10px] tracking-widest rounded-none shadow-xl gap-3"
          >
            {step < steps.length - 1 ? "Authorize Next" : "Enter Marketplace"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
