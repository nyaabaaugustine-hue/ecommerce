"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Phone, ChevronDown, ShieldCheck, Globe, LogOut, Menu, Zap, Sparkles, Palette } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useAuth, useCart, useCurrency, useTheme, type CurrencyCode, type PrimaryTheme } from '@/components/providers';
import { useState, useEffect, useRef } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { MegaMenu } from '@/components/mega-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const TICKER_ITEMS = [
  "LIVE ACTIVITY: GH₵8,450.00 SECURED IN ACCRA VAULT",
  "PROTOCOL VERIFIED: YAW MENSAH @ MELCOM DIGITAL",
  "SECURITY ALERT: MULTISIG ESCROW PROTECTION ACTIVE",
  "MARKET DATA: 12 NEW ORDERS SECURED IN EAST LEGON",
  "BUYER ASSURANCE: 100% GHS PROTECTION ACTIVE",
  "NEW PARTNER: PRIME RENTALS GH JOINED REGISTRY",
  "SETTLEMENT UPDATE: 99.8% TRANSACTION SUCCESS RATE"
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { currency, setCurrency } = useCurrency();
  const { theme, setTheme } = useTheme();
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
      <div className="bg-primary text-white overflow-hidden py-2 border-b border-accent/20">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="h-2 w-2 bg-accent animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Utility Bar */}
      <div className="bg-secondary text-white py-2.5 hidden lg:block border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-12">
            <span className="flex items-center gap-3 hover:text-accent cursor-pointer transition-colors opacity-70">
              Institutional Partnership
            </span>
            <span className="flex items-center gap-3 hover:text-accent cursor-pointer transition-colors opacity-70">
              <Phone className="h-3.5 w-3.5" /> Support Node: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-8">
             {/* Theme Switcher */}
             <div className="flex items-center gap-2 border-r border-white/10 pr-6">
               <Palette className="h-3.5 w-3.5 text-accent" />
               <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                 <SelectTrigger className="h-6 w-32 bg-transparent border-none text-[9px] font-black uppercase p-0 focus:ring-0">
                    <SelectValue placeholder="Theme" />
                 </SelectTrigger>
                 <SelectContent className="rounded-none bg-secondary text-white border-accent/20">
                    <SelectItem value="sovereign">Sovereign Navy</SelectItem>
                    <SelectItem value="deep">Deep Blue</SelectItem>
                    <SelectItem value="royal">Royal Blue</SelectItem>
                    <SelectItem value="cobalt">Cobalt Blue</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <div className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors">
                    <Globe className="h-3.5 w-3.5" /> {currency} <ChevronDown className="h-3.5 w-3.5" />
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="rounded-none bg-secondary text-white border-accent/20">
                 {(['GHS', 'USD', 'EUR', 'GBP'] as CurrencyCode[]).map((code) => (
                   <DropdownMenuItem 
                    key={code} 
                    onClick={() => setCurrency(code)}
                    className="rounded-none hover:bg-accent hover:text-secondary font-black text-[10px] uppercase cursor-pointer py-3 px-6"
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
      <div className="bg-white/95 backdrop-blur-2xl border-b py-0 shadow-xl">
        <div className="container mx-auto px-4 flex items-center justify-between gap-6 h-16 md:h-24">
          <div className="flex items-center gap-3 md:gap-6">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-none h-12 w-12">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] md:w-[350px] rounded-none p-0 border-r-4 border-primary">
                <SheetHeader className="p-8 border-b text-left bg-background">
                  <SheetTitle className="text-2xl font-black text-secondary uppercase tracking-tighter">Sovereign Registry</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6">
                  <Link href="/listings" className="px-8 py-5 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Global Marketplace</Link>
                  <Link href="/dashboard" className="px-8 py-5 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Account Dashboard</Link>
                  <Link href="/listings/create" className="px-8 py-5 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">Publish Listing</Link>
                  <div className="p-8 space-y-6">
                    {!user ? (
                      <Button onClick={() => setShowAuth(true)} className="w-full bg-primary text-white font-black rounded-none h-14 text-xs uppercase tracking-widest shadow-xl">Secure Login</Button>
                    ) : (
                      <Button onClick={logout} variant="outline" className="w-full border-destructive text-destructive font-black rounded-none h-14 text-xs uppercase tracking-widest hover:bg-destructive hover:text-white">Terminate Session</Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-3 md:gap-4 font-headline font-black text-xl md:text-3xl text-secondary shrink-0 group">
              <div className="relative h-8 w-8 md:h-12 md:w-12 overflow-hidden rounded-none border-2 border-primary/20 shadow-xl">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                  alt="VaultCommerce Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="tracking-tighter uppercase">
                  <span className="text-accent animate-v-glow">V</span>ault<span className="text-primary">Commerce</span>
                </span>
                <span className="text-[7px] md:text-[9px] font-black text-secondary/40 tracking-[0.3em] md:tracking-[0.4em] uppercase mt-1">Escrow Protected Trade</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full gap-4">
            <MegaMenu />
            <Separator orientation="vertical" className="h-10 mx-2" />
          </div>

          <div className="flex-1 max-w-xl hidden md:flex items-center relative" ref={searchRef}>
            <div className="relative w-full flex shadow-lg">
              <input 
                type="text" 
                placeholder="Search global registry assets..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                className="w-full border-2 border-border border-r-0 rounded-none py-3.5 pl-8 pr-4 text-xs md:text-sm font-bold focus:border-accent focus:outline-none transition-all bg-background"
              />
              <Button className="rounded-none h-auto px-8 md:px-10 bg-primary hover:bg-accent hover:text-secondary transition-all">
                <Search className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>

            {/* AI Autocomplete Suggestions */}
            {showSuggestions && (
              <div className="absolute top-full left-0 w-full bg-white border-2 border-t-0 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-4">
                <div className="bg-background px-5 py-3 border-b flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-accent" /> Institutional Registry Matches
                  </span>
                  <Badge className="bg-accent text-secondary text-[8px] font-black rounded-none px-2">GOLD STANDARD</Badge>
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
                        className="flex items-center gap-5 px-6 py-4 hover:bg-primary/5 group transition-all"
                      >
                        <div className="h-12 w-12 relative bg-background border-2 overflow-hidden shadow-sm">
                          <Image src={suggestion.imageUrl} alt={suggestion.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[11px] font-black text-secondary group-hover:text-primary transition-colors line-clamp-1 uppercase tracking-tight">{suggestion.title}</p>
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{suggestion.category}</p>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black text-burgundy uppercase">GH₵{suggestion.price.toLocaleString()}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-6 py-10 text-center text-muted-foreground text-[11px] font-black uppercase tracking-widest">
                      No Sovereign matches found
                    </div>
                  )}
                </div>
                <div className="bg-secondary p-4 flex justify-center">
                   <Link href="/listings" onClick={() => setShowSuggestions(false)} className="text-[9px] font-black text-accent uppercase tracking-[0.3em] hover:underline flex items-center gap-2">
                     Browse Full Global Registry <ArrowRight className="h-3 w-3" />
                   </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 md:gap-6 shrink-0">
            {!user ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAuth(true)}
                className="hidden lg:flex flex-col items-center h-auto py-3 px-8 rounded-none border-2 border-primary/20 text-secondary font-black hover:bg-primary hover:text-white transition-all shadow-md group"
              >
                <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Registry Access</span>
                <span className="text-sm">Secure Login</span>
              </Button>
            ) : (
              <div className="hidden lg:flex items-center gap-6">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-accent uppercase font-black tracking-widest">Active Node</span>
                  <Link href="/dashboard" className="text-base font-black text-secondary hover:text-primary transition-colors">{user.name}</Link>
                </div>
                <Button variant="ghost" size="icon" onClick={logout} className="rounded-none hover:text-destructive hover:bg-destructive/10 h-12 w-12">
                  <LogOut className="h-6 w-6" />
                </Button>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden rounded-none h-12 w-12">
                <Search className="h-6 w-6 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="relative group rounded-none hover:bg-primary/5 h-12 w-12">
                <ShoppingCart className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                {items.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1.5 flex items-center justify-center bg-accent text-secondary text-[10px] font-black border-2 border-white shadow-xl rounded-none">
                    {items.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
