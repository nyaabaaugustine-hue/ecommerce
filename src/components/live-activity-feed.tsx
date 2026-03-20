"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, ShoppingBag, User, Zap, X, Megaphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ACTIVITIES = [
  { 
    id: 1, 
    type: 'purchase', 
    text: 'Someone in Accra just secured a MacBook Pro in the Vault.', 
    time: '2 mins ago', 
    icon: ShieldCheck,
    image: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png'
  },
  { 
    id: 2, 
    type: 'listing', 
    text: 'Melcom Digital Hub updated their global inventory.', 
    time: '5 mins ago', 
    icon: Zap,
    image: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/166105_nesnhj.png'
  },
  { 
    id: 3, 
    type: 'escrow', 
    text: 'GH₵8,500 deposit authorized for a Samsung QLED TV.', 
    time: 'Just now', 
    icon: ShoppingBag,
    image: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png'
  },
  { 
    id: 4, 
    type: 'trust', 
    text: 'New institutional vendor "PrimeRentals GH" verified.', 
    time: '12 mins ago', 
    icon: User,
    image: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg'
  },
];

export function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissedAd, setHasDismissedAd] = useState(false);

  useEffect(() => {
    // Check localStorage for dismissal
    const dismissed = localStorage.getItem('vault_ad_dismissed');
    if (dismissed) {
      setHasDismissedAd(true);
      return;
    }

    // Initial delay then repeat every 10 seconds
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const interval = setInterval(() => {
      if (!hasDismissedAd) {
        setIsVisible(true);
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
      }
    }, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [hasDismissedAd]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissedAd(true);
    localStorage.setItem('vault_ad_dismissed', 'true');
  };

  const activity = ACTIVITIES[currentIndex];

  if (hasDismissedAd) return null;

  return (
    <div className="fixed bottom-8 left-8 z-[60] w-full max-w-[340px] pointer-events-none">
      <div className={cn(
        "transition-all duration-700 ease-in-out transform",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}>
        <Card className="bg-secondary text-white border-primary/20 shadow-2xl rounded-none overflow-hidden pointer-events-auto relative">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleClose}
            className="absolute top-1 right-1 h-6 w-6 text-white/40 hover:text-primary rounded-none hover:bg-white/5"
          >
            <X className="h-3 w-3" />
          </Button>

          <CardContent className="p-4 flex gap-4 items-center">
            <div className="relative h-14 w-14 bg-white/5 border border-white/10 shrink-0">
              <Image 
                src={activity.image} 
                alt="Activity" 
                fill 
                className="object-cover opacity-80" 
                unoptimized
              />
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-primary flex items-center justify-center shadow-lg">
                <activity.icon className="h-3 w-3 text-secondary" />
              </div>
            </div>
            <div className="space-y-1 flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-primary text-secondary text-[7px] font-black uppercase tracking-widest px-1.5 h-3.5 rounded-none border-none">
                  AD ALERT
                </Badge>
                <span className="text-[8px] text-white/40 font-bold uppercase">{activity.time}</span>
              </div>
              <p className="text-[10px] font-bold text-white/90 leading-tight">
                {activity.text}
              </p>
            </div>
          </CardContent>
          <div className="h-1 w-full bg-primary/20">
             <div 
               className={cn(
                 "h-full bg-primary transition-all duration-7000 linear",
                 isVisible ? "w-full" : "w-0"
               )} 
               style={{ transitionDuration: '10000ms' }}
             />
          </div>
        </Card>
      </div>
    </div>
  );
}
