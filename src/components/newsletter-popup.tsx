"use client";

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, Zap, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

/**
 * @fileOverview Sovereign Newsletter Registry Popup
 * Styled after elite marketplace welcome modals (Jumia style).
 * Features a split layout with institutional benefits and subscription node.
 */
export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('vault_newsletter_dismissed');
    if (dismissed) return;

    // Show after 5 seconds of session start
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
    
    // Simulate registry enrollment
    console.log("Subscribing to registry:", email);
    handleDismiss();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row rounded-none overflow-hidden animate-in zoom-in-95 duration-500 border-t-4 border-t-accent">
        
        {/* Left Side: Institutional Promises (Theme Orange/Accent) */}
        <div className="w-full md:w-[40%] bg-accent p-8 md:p-12 text-secondary space-y-10 flex flex-col justify-center relative">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-secondary text-white flex items-center justify-center font-black text-xl">1</div>
              <p className="text-xs font-black uppercase tracking-widest leading-snug">Authorized for quickest escrow processing.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-secondary text-white flex items-center justify-center font-black text-xl">2</div>
              <p className="text-xs font-black uppercase tracking-widest leading-snug">Elite access to "Gold Standard" reviews.</p>
            </div>

            <div className="pt-8 space-y-6">
              <Badge className="bg-secondary text-white rounded-none font-black text-[10px] px-4 py-1.5 uppercase tracking-widest border-none">Our Promises</Badge>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="h-6 w-6" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Verified Trust</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="h-6 w-6" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Quick Refund</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Zap className="h-6 w-6" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Pay on Node</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-6 w-6" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">Fast Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Subscription Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
          <button 
            onClick={handleDismiss}
            className="absolute top-6 right-6 text-muted-foreground hover:text-secondary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="max-w-md mx-auto w-full text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter uppercase leading-none">Welcome to Vault!</h2>
              <h3 className="text-lg font-black text-muted-foreground uppercase tracking-widest">Subscribe to the registry</h3>
              <p className="text-xs font-medium text-muted-foreground leading-relaxed uppercase">
                Be the first to authorize amazing deals and receive the latest protocol updates via our institutional digest.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-6">
              <div className="space-y-6 text-left">
                <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed">
                  To subscribe to our node, you must first read and agree to our <span className="text-accent underline cursor-pointer">Sovereign Legal Terms</span>.
                </p>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="terms" 
                    checked={agreed} 
                    onCheckedChange={(v) => setAgreed(!!v)} 
                    className="mt-0.5 border-2 border-muted-foreground"
                  />
                  <label htmlFor="terms" className="text-[10px] font-bold text-muted-foreground uppercase cursor-pointer select-none">
                    I agree to the Vault's Privacy and Cookie Policy node. You can unsubscribe at any time.
                  </label>
                </div>
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                <Input 
                  type="email" 
                  placeholder="Enter Authorized Email Address" 
                  className="rounded-none h-16 pl-14 border-2 focus:border-accent font-black uppercase text-xs"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={!agreed || !email}
                className="w-full h-16 bg-[#9ca3af] hover:bg-secondary text-white font-black text-xl uppercase tracking-tighter transition-all rounded-none"
              >
                AUTHORIZE SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
