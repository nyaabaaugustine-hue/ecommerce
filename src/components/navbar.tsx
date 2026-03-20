
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Heart, Phone, ChevronDown, ShieldCheck, Globe, LogOut, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { useAuth, useCart } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { MegaMenu } from '@/components/mega-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const TICKER_ITEMS = [
  "LIVE VAULT ACTIVITY: GH₵8,450.00 SECURED IN ACCRA",
  "SETTLEMENT VERIFIED: YAW MENSAH @ MELCOM DIGITAL",
  "PROTOCOL UPDATE: MULTISIG ESCROW V1.2 ENGAGED",
  "HIGH DEMAND: 24 USERS VIEWING SAMSUNG 65\" QLED",
  "SOVEREIGN GUARANTEE: 100% GHS PROTECTION ACTIVE",
  "NEW VENDOR JOINED: PRIME RENTALS GH",
  "TREASURY SYNC: 99.4% SUCCESSFUL SETTLEMENT RATE",
  "LIVE AUDIT: 12 ACTIVE VAULTS IN EAST LEGON"
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* High-Velocity Activity Ticker */}
      <div className="bg-primary text-secondary overflow-hidden py-1.5 border-b border-secondary/10">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-secondary animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Utility Bar */}
      <div className="bg-secondary text-white py-2 hidden lg:block border-b border-primary/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors opacity-80">
              Institutional Partnership
            </span>
            <span className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors opacity-80">
              <Phone className="h-3 w-3" /> Support: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Globe className="h-3 w-3" /> GHS GH₵ <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white/95 backdrop-blur-xl border-b py-0 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-none h-10 w-10">
                  <Menu className="h-5 w-5 text-secondary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] md:w-[300px] rounded-none p-0">
                <SheetHeader className="p-6 border-b text-left">
                  <SheetTitle className="text-xl font-black text-secondary uppercase tracking-tight">Registry Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4">
                  <Link href="/listings" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Global Registry</Link>
                  <Link href="/dashboard" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Dashboard</Link>
                  <Link href="/listings/create" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Sell on Vault</Link>
                  <div className="p-6 space-y-4">
                    {!user ? (
                      <Button onClick={() => setShowAuth(true)} className="w-full bg-secondary text-white font-black rounded-none h-12 text-xs uppercase">Vault Entry</Button>
                    ) : (
                      <Button onClick={logout} variant="outline" className="w-full border-destructive text-destructive font-black rounded-none h-12 text-xs uppercase">Sign Out</Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 md:gap-3 font-headline font-black text-lg md:text-2xl text-secondary shrink-0 group">
              <div className="relative h-7 w-7 md:h-10 md:w-10 overflow-hidden rounded-none border border-primary/20 shadow-md">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                  alt="VaultCommerce Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="tracking-tighter">Vault<span className="text-primary">Commerce</span></span>
                <span className="text-[6px] md:text-[8px] font-black text-secondary/40 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-0.5 md:mt-1">Sovereign Escrow</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Elements */}
          <div className="hidden lg:flex items-center h-full gap-2">
            <MegaMenu />
            <Separator orientation="vertical" className="h-8 mx-2" />
          </div>

          <div className="flex-1 max-w-lg hidden md:flex items-center relative">
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Search the Global Vault Registry..." 
                className="w-full border border-border rounded-none py-2.5 md:py-3 pl-6 pr-4 text-[11px] md:text-sm font-medium focus:border-primary focus:outline-none transition-all bg-muted/20"
              />
              <Button className="rounded-none h-auto px-6 md:px-8 bg-secondary hover:bg-primary hover:text-secondary transition-all">
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-4 shrink-0">
            {!user ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAuth(true)}
                className="hidden lg:flex flex-col items-center h-auto py-2 px-6 rounded-none border-primary/20 text-secondary font-black hover:bg-primary/5"
              >
                <span className="text-[9px] uppercase tracking-widest opacity-50">Identity Registry</span>
                <span>Vault Entry</span>
              </Button>
            ) : (
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex flex-col text-right">
                  <span className="text-[9px] text-primary uppercase font-black tracking-widest">Logged in as</span>
                  <Link href="/dashboard" className="text-sm font-black text-secondary hover:text-primary transition-colors">{user.name}</Link>
                </div>
                <Button variant="ghost" size="icon" onClick={logout} className="rounded-none hover:text-destructive">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            )}
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="md:hidden rounded-none h-10 w-10">
                <Search className="h-5 w-5 text-secondary" />
              </Button>
              <Button variant="ghost" size="icon" className="relative group rounded-none hover:bg-primary/5">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-secondary group-hover:text-primary transition-colors" />
                {items.length > 0 && (
                  <Badge className="absolute -top-0.5 -right-0.5 h-4 md:h-5 min-w-[16px] md:min-w-[20px] px-1 flex items-center justify-center bg-primary text-secondary text-[8px] md:text-[9px] font-black border-2 border-white shadow-md rounded-none">
                    {items.length}
                  </Badge>
                )}
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-none border-border lg:hidden h-9 w-9 md:h-10 md:w-10">
                  <User className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 rounded-none p-1 shadow-xl border-border">
                {!user ? (
                  <DropdownMenuItem onClick={() => setShowAuth(true)} className="rounded-none p-3 font-black text-secondary text-xs">
                    <ShieldCheck className="h-4 w-4 mr-2 text-primary" /> LOGIN
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-none p-3 font-black text-secondary text-xs uppercase">
                      <Link href="/dashboard" className="w-full">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="rounded-none p-3 font-black text-destructive text-xs uppercase">
                      Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
