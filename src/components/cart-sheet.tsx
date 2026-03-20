"use client";

import { useState } from 'react';
import { ShoppingBag, X, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '@/components/providers';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export function CartSheet() {
  const { items, removeItem, total } = useCart();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="fixed right-10 bottom-10 z-50 flex flex-col gap-5">
          <div className="bg-secondary text-white p-5 rounded-2xl shadow-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all group border border-primary/20">
             <ShoppingBag className="h-8 w-8 text-primary" />
             <span className="text-[10px] font-black mt-2 tracking-widest uppercase">Vault: {items.length}</span>
             <span className="text-[10px] font-black bg-primary text-secondary px-3 py-0.5 rounded-full mt-2 transition-colors">GH₵{total.toLocaleString()}</span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-black text-secondary flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Secure Vault
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="bg-muted p-8 rounded-full">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">The vault is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-2">
                <div className="relative h-20 w-20 rounded-lg overflow-hidden shrink-0 border">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-secondary line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-bold">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-primary">GH₵{item.price.toLocaleString()}</span>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="h-8 w-8 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 space-y-6">
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-muted-foreground uppercase tracking-widest">
                <span>Subtotal</span>
                <span>GH₵{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-black text-secondary">
                <span>Total Secure Hold</span>
                <span className="text-primary">GH₵{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <p className="text-[10px] text-secondary/70 font-bold uppercase tracking-tight leading-tight">
                Funds will be restricted via Vault Escrow Protocol v1.2 upon checkout.
              </p>
            </div>
            <Button 
              className="w-full h-14 bg-secondary text-white font-black rounded-xl text-lg hover:bg-secondary/90 transition-all shadow-xl"
              onClick={() => {
                setOpen(false);
                router.push('/listings'); // In real app, go to checkout
              }}
            >
              Secure Checkout <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
