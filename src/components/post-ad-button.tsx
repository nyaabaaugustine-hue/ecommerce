"use client";

import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';

export function PostAdButton() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      <div className="fixed right-6 bottom-6 z-50 group">
        <Button 
          onClick={() => setShowAuth(true)}
          className="h-16 px-8 bg-accent text-secondary hover:bg-white shadow-[0_20px_50px_rgba(13,237,230,0.3)] flex items-center gap-3 rounded-[7%] border-4 border-white/20 transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          <PlusCircle className="h-6 w-6 animate-pulse" />
          <span className="font-black uppercase text-sm tracking-[0.2em]">Post Ad</span>
        </Button>
      </div>
    </>
  );
}