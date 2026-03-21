"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { User, PlusCircle, Menu, LogOut, ShieldCheck, Search, LayoutGrid, MapPin, MessageSquare } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useAuth, useContent } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { user, logout } = useAuth();
  const { content } = useContent();
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-2xl">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* HERITAGE ACCENT STRIP */}
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

      <div className="bg-secondary border-b border-white/10 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8">
          <div className="flex items-center gap-8 shrink-0">
            {/* MOBILE NAV TRIGGER */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-white hover:bg-primary hover:text-secondary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] p-0 flex flex-col border-r-8 border-primary rounded-none bg-secondary text-white">
                <div className="sr-only">
                  <SheetHeader>
                    <SheetTitle>Marketplace Gateway</SheetTitle>
                    <SheetDescription>Access categories and session nodes.</SheetDescription>
                  </SheetHeader>
                </div>
                
                <div className="p-8 border-b border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white relative p-2 shadow-xl shrink-0">
                      <Image src={content.settings.logoUrl} alt="Logo" fill sizes="48px" className="object-contain" />
                    </div>
                    <div>
                      <h2 className="font-black text-2xl tracking-tighter uppercase">{content.settings.siteName}</h2>
                      <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Ghana's Secure Market</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar">
                   <Link href="/listings/create" onClick={() => setIsMobileMenuOpen(false)}>
                     <Button 
                       className="w-full bg-primary text-secondary font-black text-xs uppercase tracking-[0.2em] h-16 gap-3 rounded-[7%] shadow-2xl"
                     >
                       <PlusCircle className="h-6 w-6" /> Post Ad
                     </Button>
                   </Link>
                   <nav className="space-y-8">
                      <Link href="/listings" onClick={() => setIsMobileMenuOpen(false)} className="block font-black uppercase text-white/70 text-xl hover:text-primary transition-colors">Browse Ads</Link>
                      <Link href="/vendors" onClick={() => setIsMobileMenuOpen(false)} className="block font-black uppercase text-white/70 text-xl hover:text-primary transition-colors">Verified Sellers</Link>
                      <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block font-black uppercase text-white/70 text-xl hover:text-primary transition-colors">Escrow Protocol</Link>
                   </nav>
                </div>

                <div className="p-8 border-t border-white/5">
                   {user ? (
                     <Button onClick={() => { logout(); setIsMobileMenuOpen(false); }} variant="outline" className="w-full border-2 border-red-500/20 text-red-500 font-black rounded-none h-14 uppercase text-[10px] tracking-widest">
                        Sign Out
                     </Button>
                   ) : (
                     <Button onClick={() => { setShowAuth(true); setIsMobileMenuOpen(false); }} className="w-full bg-white text-secondary font-black rounded-none h-14 uppercase text-[10px] tracking-widest">
                        Sign In
                     </Button>
                   )}
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/30 shadow-xl p-1 bg-white">
                <Image src={content.settings.logoUrl} alt="Logo" fill sizes="40px" className="object-contain" priority />
              </div>
              <span className="font-headline font-black text-2xl text-white tracking-tighter uppercase leading-none hidden sm:block">
                {content.settings.siteName}
              </span>
            </Link>
          </div>

          {/* ADVANCED HEADER SEARCH INTEGRATION */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl">
            <div className="w-full h-12 bg-white/5 border border-white/10 flex items-center group focus-within:border-primary transition-all">
              <div className="px-4 border-r border-white/10 flex items-center gap-2 shrink-0">
                <LayoutGrid className="h-4 w-4 text-primary/40" />
                <span className="text-[9px] font-black uppercase text-white/60">Categories</span>
              </div>
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className="h-4 w-4 text-primary" />
                <input 
                  placeholder="Find anything in Ghana..." 
                  className="w-full bg-transparent outline-none text-white text-[11px] font-black uppercase placeholder:text-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="h-full rounded-none bg-primary text-secondary font-black uppercase text-[10px] px-8 tracking-widest">
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="hidden md:flex items-center gap-2 text-white/60 hover:text-primary transition-all text-[10px] font-black uppercase tracking-widest">
                  <MessageSquare className="h-4 w-4" /> Chats
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="h-10 w-10 bg-primary/10 border border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-all rounded-[7%]">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-none w-56 border-t-4 border-t-primary shadow-2xl bg-secondary text-white">
                    <DropdownMenuItem asChild className="p-3">
                      <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest cursor-pointer w-full flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-primary" /> Account Center
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="p-3 text-[10px] font-black uppercase tracking-widest cursor-pointer text-red-400 bg-red-500/5 hover:bg-red-500 hover:text-white mt-2">
                      <LogOut className="h-4 w-4" /> Terminate Session
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost"
                className="hidden sm:flex text-white font-black text-[11px] uppercase tracking-widest px-4 hover:bg-primary hover:text-secondary"
              >
                Sign In
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-secondary hover:bg-white font-black text-[11px] uppercase tracking-[0.2em] h-12 px-8 flex items-center gap-3 shadow-xl rounded-[7%]"
              >
                <PlusCircle className="h-5 w-5" />
                <span className="hidden md:inline">Post Ad</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
