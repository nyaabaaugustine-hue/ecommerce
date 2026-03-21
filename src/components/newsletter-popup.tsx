"use client";

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, Zap, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

/**
 * @fileOverview Sovereign Newsletter Registry Popup
 * Styled after elite marketplace welcome modals with 50% opacity overlays.
 * Features institutional promises and GHS-Accra authorization nodes.
 */
export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('vault_newsletter_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('vault_newsletter_dismissed', 'true');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;
    handleDismiss();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row rounded-none overflow-hidden animate-in zoom-in-95 duration-500 border-t-4 border-t-accent">
        
        {/* Left Side: Institutional Image & Promises (50% Opacity Overlay) */}
        <div className="w-full md:w-[45%] relative bg-secondary text-white min-h-[400px]">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057741/cx_n0ltnr.jpg" 
            alt="Institutional Protocol" 
            fill 
            className="object-cover"
            priority
          />
          {/* 50% Opacity Accent Overlay */}
          <div className="absolute inset-0 bg-accent/50 pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full space-y-10 text-secondary">
            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="h-10 w-10 bg-secondary text-white flex items-center justify-center font-black text-xl shrink-0 group-hover:scale-110 transition-transform">1</div>
                <p className="text-xs font-black uppercase tracking-widest leading-snug pt-1">Authorized for quickest escrow processing.</p>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="h-10 w-10 bg-secondary text-white flex items-center justify-center font-black text-xl shrink-0 group-hover:scale-110 transition-transform">2</div>
                <p className="text-xs font-black uppercase tracking-widest leading-snug pt-1">Elite access to "Gold Standard" reviews.</p>
              </div>
            </div>

            <div className="pt-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Our Promises</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 group">
                   <ShieldCheck className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-black uppercase tracking-tighter">Verified Trust</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <RotateCcw className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-black uppercase tracking-tighter">Quick Refund</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <Zap className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-black uppercase tracking-tighter">Pay on Node</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <Truck className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                   <span className="text-[9px] font-black uppercase tracking-tighter">Fast Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Subscription Form Node */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative bg-white">
          <button 
            onClick={handleDismiss}
            className="absolute top-6 right-6 text-muted-foreground hover:text-secondary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="max-w-md mx-auto w-full text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter uppercase leading-none">Welcome to Vault!</h2>
              <h3 className="text-lg font-black text-muted-foreground uppercase tracking-[0.2em]">Subscribe to the registry</h3>
              <p className="text-[10px] font-medium text-muted-foreground leading-relaxed uppercase tracking-widest px-4">
                Be the first to authorize amazing deals and receive the latest protocol updates via our institutional digest.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-8">
              <div className="space-y-6 text-left bg-muted/20 p-6 border-l-4 border-accent">
                <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed">
                  To subscribe to our node, you must first read and agree to our <span className="text-accent underline cursor-pointer font-black">Sovereign Legal Terms</span>.
                </p>
                <div className="flex items-start gap-4">
                  <Checkbox 
                    id="terms" 
                    checked={agreed} 
                    onCheckedChange={(v) => setAgreed(!!v)} 
                    className="mt-0.5 border-2 border-muted-foreground"
                  />
                  <label htmlFor="terms" className="text-[9px] font-black text-muted-foreground uppercase cursor-pointer select-none leading-tight">
                    I agree to the Vault's Privacy and Cookie Policy node. You can unsubscribe at any time.
                  </label>
                </div>
              </div>

              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                <Input 
                  type="email" 
                  placeholder="Enter Authorized Email Address" 
                  className="rounded-none h-16 pl-14 border-2 focus:border-accent font-black uppercase text-xs tracking-widest"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={!agreed || !email}
                className="w-full h-16 bg-secondary text-white font-black text-sm md:text-lg uppercase tracking-[0.3em] transition-all rounded-none shadow-2xl hover:bg-primary gap-3"
              >
                AUTHORIZE SUBSCRIBE <ArrowRight className="h-5 w-5 text-accent" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
