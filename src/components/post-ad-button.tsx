
"use client";

import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';

/**
 * @fileOverview Master Post Ad Action Node
 * Rectangular command node with 6% border-radius logic.
 * Scaled-down by 14% for elite visual balance.
 */
export function PostAdButton() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      <div className="fixed right-6 bottom-6 z-50 group">
        <Button 
          onClick={() => setShowAuth(true)}
          className="h-[55px] px-[34px] bg-primary text-secondary hover:bg-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-3 rounded-[6%] border-4 border-white/10 transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          <PlusCircle className="h-5 w-5 animate-pulse" />
          <span className="font-black uppercase text-[12px] tracking-[0.2em]">Post Ad</span>
        </Button>
      </div>
    </>
  );
}
