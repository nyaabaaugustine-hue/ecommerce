
"use client";

import { useState, useEffect } from 'react';
import { X, ShoppingBag, Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function PromotionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true); // Default to true until checked
  const router = useRouter();

  useEffect(() => {
    // Check if user has already dismissed this specific promo
    const dismissed = localStorage.getItem('vault_promo_dismissed_v1');
    if (!dismissed) {
      setHasDismissed(false);
      // Show after a slight delay for impact
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('vault_promo_dismissed_v1', 'true');
  };

  const handleShopNow = () => {
    handleDismiss();
    router.push('/listings');
  };

  if (hasDismissed || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[380px] group">
        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute -top-12 right-0 md:-right-12 h-10 w-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Main Popup Content - AliExpress Style */}
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-500">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
          
          <div className="bg-[#ff1e5e] p-8 text-center space-y-6 relative border-4 border-white/10">
            {/* Header Tag */}
            <div className="flex justify-center -mt-4">
              <div className="bg-secondary px-6 py-2 shadow-xl transform -rotate-1">
                <span className="text-white font-black text-sm uppercase tracking-widest italic">ANNIVERSARY SALE</span>
              </div>
            </div>

            <div className="space-y-2 py-4">
              <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-none">
                Bundle Deals
              </h3>
              <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black">GH₵</span>
                  <span className="text-7xl font-black tracking-tighter">0.99</span>
                </div>
                <p className="text-white/90 font-black text-lg uppercase tracking-widest -mt-2">
                  on 1st item
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/90 font-bold uppercase text-[10px] tracking-widest">
              <Truck className="h-4 w-4" />
              <span>Free global shipping on orders</span>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleShopNow}
                className="w-full h-16 bg-white text-[#ff1e5e] hover:bg-white/90 rounded-full font-black text-xl uppercase tracking-tighter shadow-xl transform active:scale-95 transition-all"
              >
                Shop Now
              </Button>
            </div>
            
            <div className="flex justify-center gap-1 opacity-50">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-1 w-8 bg-white rounded-full" />
              ))}
            </div>
          </div>

          {/* Bottom Floating Icons */}
          <div className="absolute -bottom-6 -left-6 h-20 w-20 bg-primary rotate-12 flex items-center justify-center shadow-lg">
            <Zap className="h-10 w-10 text-secondary" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-secondary -rotate-12 flex items-center justify-center shadow-lg">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
