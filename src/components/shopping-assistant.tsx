"use client";

import { useState } from 'react';
import { Sparkles, MessageSquare, Send, X, Loader2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { findProducts, type FindProductsOutput } from '@/ai/flows/shopping-assistant-flow';
import { cn } from '@/lib/utils';
import { useCurrency } from '@/components/providers';
import Link from 'next/link';

export function ShoppingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<FindProductsOutput | null>(null);
  const { formatPrice } = useCurrency();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setIsSearching(true);
    try {
      const response = await findProducts({ query });
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <div className="fixed left-6 bottom-36 md:left-10 md:bottom-48 z-40">
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 md:h-20 md:w-20 rounded-none bg-primary text-secondary hover:bg-white shadow-2xl flex flex-col gap-1 items-center justify-center p-0 border border-primary/20"
        >
          <Sparkles className="h-6 w-6 md:h-8 md:w-8 animate-pulse" />
          <span className="text-[8px] font-black uppercase tracking-widest">AI Agent</span>
        </Button>
      </div>

      <div className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <Card className="w-full max-w-2xl bg-white rounded-none border-t-4 border-t-primary shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          <CardHeader className="bg-secondary text-white p-6 md:p-8 flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="h-10 w-10 bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
               </div>
               <div>
                  <CardTitle className="text-xl font-black uppercase tracking-tighter">Personal Shopping Agent</CardTitle>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary">Institutional AI Node Active</p>
               </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white hover:bg-white/5">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8 max-h-[70vh] overflow-y-auto no-scrollbar">
            {!result && !isSearching ? (
              <div className="text-center space-y-6 py-12">
                <div className="h-20 w-20 bg-muted flex items-center justify-center mx-auto">
                   <MessageSquare className="h-10 w-10 text-muted-foreground opacity-30" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-lg font-black text-secondary uppercase tracking-tight">How can I assist you today?</h3>
                   <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest px-10">
                      Tell me what you're looking for, and I'll find the best secure deals in the marketplace.
                   </p>
                </div>
              </div>
            ) : isSearching ? (
              <div className="text-center py-20 space-y-6">
                 <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary animate-pulse">Syncing Marketplace Registry...</p>
              </div>
            ) : (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <Sparkles className="h-3 w-3" /> AI Recommendations
                   </h4>
                   <div className="grid gap-4">
                      {result.recommendations.map((item) => (
                        <div key={item.id} className="p-5 bg-muted/20 border-l-4 border-primary space-y-3">
                           <div className="flex justify-between items-start">
                              <h5 className="font-black text-secondary uppercase text-sm tracking-tight">{item.title}</h5>
                              <span className="text-burgundy font-black text-sm">{formatPrice(item.price)}</span>
                           </div>
                           <p className="text-[10px] font-medium text-muted-foreground uppercase leading-relaxed">{item.reason}</p>
                           <Link href={`/listings/${item.id}`} onClick={() => setIsOpen(false)}>
                             <Button size="sm" className="h-8 rounded-none bg-secondary text-white text-[9px] font-black uppercase tracking-widest gap-2">
                               <ShoppingBag className="h-3 w-3" /> View Product
                             </Button>
                           </Link>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-primary/5 p-6 border border-dashed border-primary/20 space-y-3">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Shopping Advice
                   </h4>
                   <p className="text-[11px] font-medium text-muted-foreground uppercase leading-relaxed">{result.advice}</p>
                </div>

                <Button variant="outline" onClick={() => setResult(null)} className="w-full h-12 rounded-none font-black uppercase text-[10px] tracking-widest border-primary/20">
                   New Search
                </Button>
              </div>
            )}

            <form onSubmit={handleSearch} className="sticky bottom-0 bg-white pt-4">
              <div className="relative group">
                <Input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Find me a premium sofa under GH₵8,000"
                  className="h-14 pl-6 pr-14 rounded-none border-2 focus:border-primary font-black uppercase text-xs"
                />
                <Button 
                  type="submit" 
                  disabled={isSearching || !query}
                  className="absolute right-2 top-2 h-10 w-10 bg-secondary text-white hover:bg-primary rounded-none p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
