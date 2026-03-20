"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, ShoppingBag, User, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 1000);
      
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const activity = ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-8 left-8 z-[60] w-full max-w-[340px] pointer-events-none">
      <div className={cn(
        "transition-all duration-700 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}>
        <Card className="bg-secondary text-white border-primary/20 shadow-2xl rounded-none overflow-hidden pointer-events-auto">
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
            <div className="space-y-1 flex-1">
              <p className="text-[10px] font-bold text-white/90 leading-tight">
                {activity.text}
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/20 text-primary text-[8px] font-black uppercase tracking-widest px-1.5 h-4 rounded-none border-none">
                  Registry Sync
                </Badge>
                <span className="text-[8px] text-white/40 font-bold uppercase">{activity.time}</span>
              </div>
            </div>
          </CardContent>
          <div className="h-1 w-full bg-primary/20">
             <div 
               className="h-full bg-primary transition-all duration-7000 linear" 
               style={{ width: isVisible ? '100%' : '0%' }} 
             />
          </div>
        </Card>
      </div>
    </div>
  );
}
