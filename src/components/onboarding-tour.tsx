
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, Timer, ArrowRight, ShieldAlert } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
      badge: "Secure Account Access",
      bgImage: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057991/supermarket-widget-1_cavrxq.jpg"
    },
    {
      title: "How Escrow Protects You",
      desc: "When you buy, your money is held safely by us. It is only released to the seller after you inspect and approve the item.",
      icon: Lock,
      badge: "Secure Account Center",
      bgImage: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg"
    },
    {
      title: "The 48-Hour Guarantee",
      desc: "Sellers must ship within 48 hours. If they don't, your funds are automatically returned to your account.",
      icon: Timer,
      badge: "Buyer Protection",
      bgImage: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/seara-ad-1500x400-px_esp1og.jpg"
    },
    {
      title: "Ready to Start?",
      desc: "Browse our verified product catalog and shop with absolute confidence.",
      icon: ShieldAlert,
      badge: "Marketplace Entry",
      bgImage: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/milkana-widget-1_aof3w4.jpg"
    }
  ];

  const current = steps[step];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-none border-t-4 border-t-primary p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{current.title}</DialogTitle>
          <DialogDescription>{current.desc}</DialogDescription>
        </DialogHeader>
        
        {/* Header Visual Slide */}
        <div className="relative h-72 flex flex-col items-center justify-center text-white space-y-6 overflow-hidden">
          <Image 
            src={current.bgImage} 
            alt={current.title} 
            fill 
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover transition-transform duration-1000 scale-110" 
          />
          <div className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]" />
          
          <div className="relative z-10 h-20 w-20 bg-primary/20 flex items-center justify-center border-2 border-primary animate-pulse shadow-2xl">
            <current.icon className="h-10 w-10 text-primary" />
          </div>
          <div className="relative z-10 text-center space-y-2 px-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter drop-shadow-md">{current.title}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold bg-white/10 px-3 py-1 inline-block">{current.badge}</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-10 space-y-8 bg-white border-b">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center leading-relaxed h-12">
            {current.desc}
          </p>
          
          <div className="flex gap-1.5 justify-center">
            {steps.map((_, i) => (
              <div key={i} className={cn(
                "h-1 w-10 transition-all duration-500",
                i === step ? "bg-primary w-16" : "bg-muted"
              )} />
            ))}
          </div>
        </div>

        {/* Kente Heritage Footer Action Area (The Surprise) */}
        <div className="relative p-8 overflow-hidden group">
          <div className="absolute inset-0">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
              alt="Kente Background" 
              fill 
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <Button 
              onClick={() => step < steps.length - 1 ? setStep(s => s + 1) : handleFinish()}
              className="w-full h-16 bg-white text-secondary hover:bg-primary hover:text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-none shadow-2xl gap-3 transition-all border-2 border-transparent hover:border-white"
            >
              {step < steps.length - 1 ? "AUTHORIZE NEXT" : "ENTER MARKETPLACE"}
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center justify-between px-2">
               <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">Sovereign Protocol v1.4</span>
               {step > 0 && (
                 <button 
                   onClick={() => setStep(s => s - 1)}
                   className="text-[8px] font-black text-white hover:text-primary uppercase tracking-widest underline transition-colors"
                 >
                   Go Back
                 </button>
               )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
