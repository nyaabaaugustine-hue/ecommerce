"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { User, PlusCircle, Menu, LogOut, ShieldCheck, Globe, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useAuth, useCart, useContent } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';

/**
 * @fileOverview Marketplace Header Protocol
 * Senior UX: Unified mobile/desktop navigation drawer, session nodes, and localized settings.
 */
export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { content } = useContent();
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-2xl">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Heritage Accent Protocol */}
      <div className="h-1.5 w-full relative overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Heritage Accent" 
          fill 
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {/* Unified Nav Drawer */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12 text-secondary bg-muted/20 hover:bg-primary hover:text-secondary transition-all">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] p-0 flex flex-col border-r-8 border-primary rounded-none">
                <div className="sr-only">
                  <SheetHeader>
                    <SheetTitle>Marketplace Protocol</SheetTitle>
                    <SheetDescription>Access categories and session management.</SheetDescription>
                  </SheetHeader>
                </div>
                
                <div className="bg-secondary p-8 text-white space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -mr-16 -mt-16 rounded-full blur-2xl" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="h-12 w-12 bg-white relative p-2 shadow-xl shrink-0">
                      <Image src={content.settings.logoUrl} alt="Logo" fill className="object-contain" />
                    </div>
                    <div>
                      <h2 className="font-black text-2xl tracking-tighter uppercase">{content.settings.siteName}</h2>
                      <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Institutional Registry</p>
                    </div>
                  </div>
                  <Badge className="bg-primary text-secondary font-black uppercase text-[9px] tracking-[0.2em] rounded-none px-4 py-1 border-none shadow-lg">
                    Secure Access Active
                  </Badge>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar">
                   <Button 
                     onClick={() => { setShowAuth(true); setIsMobileMenuOpen(false); }}
                     className="w-full bg-primary text-secondary font-black text-xs uppercase tracking-[0.2em] h-16 gap-3 rounded-[7%] shadow-2xl"
                   >
                     <PlusCircle className="h-6 w-6" /> Post Ad Node
                   </Button>
                   
                   <nav className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] border-b border-muted pb-2">Global Directory</p>
                        <Link href="/listings" className="block font-black uppercase text-secondary text-lg hover:text-primary transition-all">All Listings</Link>
                        <Link href="/vendors" className="block font-black uppercase text-secondary text-lg hover:text-primary transition-all">Verified Sellers</Link>
                        <Link href="/about" className="block font-black uppercase text-secondary text-lg hover:text-primary transition-all">Sovereign Trust</Link>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] border-b border-muted pb-2">User Settings</p>
                        <div className="flex items-center justify-between text-[10px] font-black text-secondary uppercase tracking-widest bg-muted/30 p-3">
                           <span className="flex items-center gap-2"><Globe className="h-3 w-3" /> Currency</span>
                           <span className="text-primary">GHS (GH₵)</span>
                        </div>
                      </div>
                   </nav>
                </div>

                <div className="p-8 border-t bg-muted/10">
                   {user ? (
                     <Button onClick={logout} variant="outline" className="w-full border-2 border-burgundy/20 text-burgundy font-black rounded-none h-14 uppercase text-[10px] tracking-widest gap-2">
                        <LogOut className="h-4 w-4" /> Terminate Session
                     </Button>
                   ) : (
                     <Button onClick={() => setShowAuth(true)} className="w-full bg-secondary text-white font-black rounded-none h-14 uppercase text-[10px] tracking-widest gap-2">
                        <User className="h-4 w-4 text-primary" /> Authorize Session
                     </Button>
                   )}
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-11 w-11 overflow-hidden rounded-none border-2 border-primary/20 shadow-xl p-1 bg-white">
                <Image src={content.settings.logoUrl} alt="Logo" fill sizes="44px" className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-2xl text-secondary tracking-tighter uppercase leading-none">
                  {content.settings.siteName}
                </span>
                <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] hidden sm:block">Open Marketplace Engine</span>
              </div>
            </Link>
          </div>

          {/* Desktop Control Nodes */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
               <Link href="/listings" className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors relative group">
                  Browse Registry
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
               </Link>
               <Link href="/vendors" className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors relative group">
                  Sellers
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
               </Link>
            </nav>

            <div className="flex items-center gap-6">
               <div className="h-8 w-px bg-muted mx-2" />
               
               {user ? (
                 <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                     <div className="flex items-center gap-4 cursor-pointer group hover:bg-muted/30 p-2 px-4 transition-all border border-transparent hover:border-muted">
                        <div className="text-right flex flex-col">
                           <span className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">Authorized User</span>
                           <span className="text-xs font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">{user.name}</span>
                        </div>
                        <div className="h-10 w-10 bg-secondary flex items-center justify-center shadow-lg">
                           <User className="h-5 w-5 text-primary group-hover:animate-pulse" />
                        </div>
                     </div>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent align="end" className="rounded-none w-56 border-t-4 border-t-primary shadow-2xl p-2">
                     <DropdownMenuItem asChild className="p-3">
                        <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest cursor-pointer w-full flex items-center gap-3">
                           <ShieldCheck className="h-4 w-4 text-primary" /> My Command Center
                        </Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={logout} className="p-3 text-[10px] font-black uppercase tracking-widest cursor-pointer text-burgundy bg-burgundy/5 hover:bg-burgundy hover:text-white mt-2">
                        <LogOut className="h-4 w-4" /> Terminate Node
                     </DropdownMenuItem>
                   </DropdownMenuContent>
                 </DropdownMenu>
               ) : (
                 <Button 
                   onClick={() => setShowAuth(true)}
                   variant="ghost"
                   className="font-black text-[11px] uppercase tracking-widest px-0 flex items-center gap-3 hover:text-primary transition-colors"
                 >
                   <User className="h-5 w-5 text-primary" />
                   Sign In
                 </Button>
               )}

               <Button 
                 onClick={() => setShowAuth(true)}
                 className="bg-primary text-secondary hover:bg-secondary hover:text-white font-black text-[11px] uppercase tracking-[0.3em] px-10 h-14 flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,215,0,0.3)] border-2 border-primary rounded-[7%] transition-all"
               >
                 <PlusCircle className="h-6 w-6" />
                 Post Ad
               </Button>
            </div>
          </div>

          {/* Mobile Fast-Action Node */}
          <div className="flex items-center gap-4 lg:hidden">
             <Button 
               variant="ghost" 
               size="icon" 
               className="h-12 w-12 text-secondary bg-muted/20"
               onClick={() => setShowAuth(true)}
             >
               <User className="h-6 w-6 text-primary" />
             </Button>
             <Button 
               onClick={() => setShowAuth(true)}
               className="bg-primary text-secondary font-black text-[10px] uppercase h-12 px-6 rounded-[7%] shadow-xl"
             >
               Post
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
