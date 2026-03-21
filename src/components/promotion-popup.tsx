"use client";

import { useState, useEffect } from 'react';
import { X, ShoppingBag, Truck, Zap, Smartphone, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const ADS = [
  {
    id: 1,
    badge: "ANNIVERSARY SALE",
    title: "Bundle Deals",
    price: "0.99",
    subtitle: "on 1st item",
    footer: "Free global shipping on orders",
    icon: Zap,
    color: "#ff1e5e",
    secondaryIcon: ShoppingBag
  },
  {
    id: 2,
    badge: "TECH EXTRAVAGANZA",
    title: "Elite Computing",
    price: "40%",
    subtitle: "INSTANT OFF",
    footer: "Verified Ghanaian Warranty Included",
    icon: Smartphone,
    color: "#0a1a2f",
    secondaryIcon: Sparkles
  },
  {
    id: 3,
    badge: "HERITAGE HOME",
    title: "Vault Vouchers",
    price: "500",
    subtitle: "GHS COUPON",
    footer: "Limited institutional supply available",
    icon: Home,
    color: "#453110",
    secondaryIcon: Truck
  }
];

export function PromotionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const dismissed = localStorage.getItem('vault_promo_dismissed_v2');
    if (dismissed) {
      setHasDismissed(true);
      return;
    }

    // Initial show
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Re-trigger every 10 seconds if closed
    const retriggerInterval = setInterval(() => {
      setIsOpen((prev) => {
        if (!prev && !hasDismissed) return true;
        return prev;
      });
      setCurrentAdIndex((prev) => (prev + 1) % ADS.length);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(retriggerInterval);
    };
  }, [hasDismissed]);

  const handleDismiss = () => {
    setIsOpen(false);
    // Note: We don't set permanent dismissal in localStorage yet to allow the "every 10 seconds" behavior requested
  };

  const handlePermanentDismiss = () => {
    setIsOpen(false);
    setHasDismissed(true);
    localStorage.setItem('vault_promo_dismissed_v2', 'true');
  };

  const handleShopNow = () => {
    handleDismiss();
    router.push('/listings');
  };

  if (hasDismissed || !isOpen) return null;

  const currentAd = ADS[currentAdIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[380px] group">
        <button 
          onClick={handlePermanentDismiss}
          className="absolute -top-12 right-0 md:-right-12 h-10 w-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
          
          <div 
            className="p-8 text-center space-y-6 relative border-4 border-white/10 transition-colors duration-1000"
            style={{ backgroundColor: currentAd.color }}
          >
            <div className="flex justify-center -mt-4">
              <div className="bg-primary px-6 py-2 shadow-xl transform -rotate-1">
                <span className="text-secondary font-black text-sm uppercase tracking-widest italic">{currentAd.badge}</span>
              </div>
            </div>

            <div className="space-y-2 py-4">
              <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-none">
                {currentAd.title}
              </h3>
              <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1 text-white">
                  {currentAd.id !== 2 && <span className="text-4xl font-black">GH₵</span>}
                  <span className="text-7xl font-black tracking-tighter">{currentAd.price}</span>
                </div>
                <p className="text-white/90 font-black text-lg uppercase tracking-widest -mt-2">
                  {currentAd.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/90 font-bold uppercase text-[10px] tracking-widest">
              <currentAd.icon className="h-4 w-4" />
              <span>{currentAd.footer}</span>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleShopNow}
                className="w-full h-16 bg-white text-secondary hover:bg-white/90 rounded-full font-black text-xl uppercase tracking-tighter shadow-xl transform active:scale-95 transition-all"
                style={{ color: currentAd.color }}
              >
                Shop Now
              </Button>
            </div>
            
            <div className="flex justify-center gap-1 opacity-50">
              {ADS.map((_, i) => (
                <div key={i} className={cn("h-1 w-8 rounded-full transition-all", i === currentAdIndex ? "bg-white" : "bg-white/30")} />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-20 w-20 bg-primary rotate-12 flex items-center justify-center shadow-lg">
            <currentAd.icon className="h-10 w-10 text-secondary" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-secondary -rotate-12 flex items-center justify-center shadow-lg">
            <currentAd.secondaryIcon className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
