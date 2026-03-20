
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Phone, ChevronDown, ShieldCheck, Globe, LogOut, Menu, Zap, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { useAuth, useCart, useCurrency, type CurrencyCode } from '@/components/providers';
import { useState, useEffect, useRef } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { MegaMenu } from '@/components/mega-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const TICKER_ITEMS = [
  "LIVE ACTIVITY: GH₵8,450.00 SECURED IN ACCRA",
  "PURCHASE VERIFIED: YAW MENSAH @ MELCOM DIGITAL",
  "SECURITY UPDATE: ESCROW PROTECTION ACTIVE",
  "HIGH DEMAND: 24 USERS VIEWING SAMSUNG 65\" QLED",
  "BUYER GUARANTE: 100% PROTECTION ACTIVE",
  "NEW VENDOR JOINED: PRIME RENTALS GH",
  "TRANSACTION UPDATE: 99.4% SUCCESS RATE",
  "LIVE UPDATES: 12 NEW ORDERS IN EAST LEGON"
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = LISTINGS.filter(l => 
    l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    l.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Activity Ticker */}
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
              Partner with Us
            </span>
            <span className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors opacity-80">
              <Phone className="h-3 w-3" /> Support: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-6">
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                    <Globe className="h-3 w-3" /> {currency} <ChevronDown className="h-3 w-3" />
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="rounded-none bg-secondary text-white border-primary/20">
                 {(['GHS', 'USD', 'EUR', 'GBP'] as CurrencyCode[]).map((code) => (
                   <DropdownMenuItem 
                    key={code} 
                    onClick={() => setCurrency(code)}
                    className="rounded-none hover:bg-primary hover:text-secondary font-black text-[10px] uppercase cursor-pointer"
                   >
                     {code}
                   </DropdownMenuItem>
                 ))}
               </DropdownMenuContent>
             </DropdownMenu>
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
                  <SheetTitle className="text-xl font-black text-secondary uppercase tracking-tight">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4">
                  <Link href="/listings" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Shop All</Link>
                  <Link href="/dashboard" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Dashboard</Link>
                  <Link href="/listings/create" className="px-6 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Sell Online</Link>
                  <div className="p-6 space-y-4">
                    {!user ? (
                      <Button onClick={() => setShowAuth(true)} className="w-full bg-secondary text-white font-black rounded-none h-12 text-xs uppercase">Login</Button>
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
                <span className="tracking-tighter uppercase">
                  <span className="text-primary animate-v-glow">V</span>ault<span className="text-primary">Commerce</span>
                </span>
                <span className="text-[6px] md:text-[8px] font-black text-secondary/40 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-0.5 md:mt-1">Escrow Protected</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full gap-2">
            <MegaMenu />
            <Separator orientation="vertical" className="h-8 mx-2" />
          </div>

          <div className="flex-1 max-w-lg hidden md:flex items-center relative" ref={searchRef}>
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Search products, services, properties..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                className="w-full border border-border rounded-none py-2.5 md:py-3 pl-6 pr-4 text-[11px] md:text-sm font-medium focus:border-primary focus:outline-none transition-all bg-muted/20"
              />
              <Button className="rounded-none h-auto px-6 md:px-8 bg-secondary hover:bg-primary hover:text-secondary transition-all">
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            {/* AI Autocomplete Suggestions */}
            {showSuggestions && (
              <div className="absolute top-full left-0 w-full bg-white border border-t-0 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="bg-muted/50 px-4 py-2 border-b flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Sparkles className="h-3 w-3" /> Institutional Suggestions
                  </span>
                  <Badge variant="outline" className="text-[7px] font-black rounded-none">AI POWERED</Badge>
                </div>
                <div className="py-2">
                  {suggestions.length > 0 ? (
                    suggestions.map((suggestion) => (
                      <Link 
                        key={suggestion.id} 
                        href={`/listings/${suggestion.id}`}
                        onClick={() => {
                          setShowSuggestions(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-primary/5 group transition-all"
                      >
                        <div className="h-10 w-10 relative bg-muted border overflow-hidden">
                          <Image src={suggestion.imageUrl} alt={suggestion.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-black text-secondary group-hover:text-primary transition-colors line-clamp-1 uppercase">{suggestion.title}</p>
                          <p className="text-[8px] font-bold text-muted-foreground uppercase">{suggestion.category}</p>
                        </div>
                        <ChevronDown className="h-3 w-3 text-muted-foreground -rotate-90" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-center text-muted-foreground text-[10px] font-black uppercase">
                      No Sovereign matches found
                    </div>
                  )}
                </div>
                <div className="bg-secondary p-3 flex justify-center">
                   <Link href="/listings" onClick={() => setShowSuggestions(false)} className="text-[8px] font-black text-primary uppercase tracking-widest hover:underline">
                     Browse Full Global Registry
                   </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 md:gap-4 shrink-0">
            {!user ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAuth(true)}
                className="hidden lg:flex flex-col items-center h-auto py-2 px-6 rounded-none border-primary/20 text-secondary font-black hover:bg-primary/5"
              >
                <span className="text-[9px] uppercase tracking-widest opacity-50">Account</span>
                <span>Secure Login</span>
              </Button>
            ) : (
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex flex-col text-right">
                  <span className="text-[9px] text-primary uppercase font-black tracking-widest">Welcome</span>
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
