
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Phone, ChevronDown, ShieldCheck, Globe, LogOut, Menu, Zap, Sparkles, Palette, Store, HelpCircle } from 'lucide-react';
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
import { useAuth, useCart, useCurrency, useTheme, useContent, type CurrencyCode, type PrimaryTheme } from '@/components/providers';
import { useState, useEffect, useRef } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { MegaMenu } from '@/components/mega-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LISTINGS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const TICKER_ITEMS = [
  "LIVE ACTIVITY: GH₵8,450.00 SECURED IN ACCRA VAULT",
  "PROTOCOL VERIFIED: YAW MENSAH @ MELCOM DIGITAL",
  "SECURITY ALERT: MULTISIG ESCROW PROTECTION ACTIVE",
  "MARKET DATA: 12 NEW ORDERS SECURED IN EAST LEGON",
  "BUYER ASSURANCE: 100% GHS PROTECTION ACTIVE",
  "NEW PARTNER: PRIME RENTALS GH JOINED REGISTRY",
  "SETTLEMENT UPDATE: 99.8% TRANSACTION SUCCESS RATE"
];

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Vendors', href: '/vendors' },
  { name: 'Contact Us', href: '/contact' }
];

const THEMES: { label: string; value: PrimaryTheme }[] = [
  { label: "Sovereign Navy", value: "sovereign" },
  { label: "Deep Registry", value: "deep" },
  { label: "Royal Node", value: "royal" },
  { label: "Midnight", value: "midnight" },
  { label: "Cobalt Hub", value: "cobalt" },
  { label: "Silver Node", value: "cold-white" },
  { label: "Crimson Red", value: "crimson" },
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { currency, setCurrency } = useCurrency();
  const { theme, setTheme } = useTheme();
  const { content } = useContent();
  const pathname = usePathname();
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
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-sm">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Compact Clearance Banner */}
      <div className="bg-[#1DA1F2] text-white py-1 flex items-center justify-between px-4 md:px-10 overflow-hidden relative border-b-2 border-accent">
         <div className="flex items-center gap-3 md:gap-6">
            <h2 className="text-sm md:text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap">CLEARANCE SALE</h2>
            <div className="bg-white text-[#1DA1F2] px-3 py-0.5 font-black rounded-full text-[9px] md:text-[11px] animate-pulse whitespace-nowrap uppercase">UP TO 60% OFF</div>
         </div>
         <div className="hidden md:flex flex-col items-end leading-none">
            <p className="text-[7px] font-black uppercase tracking-widest opacity-80">Call to order</p>
            <p className="text-base font-black tracking-tighter">{content.settings.supportPhone}</p>
         </div>
      </div>

      {/* Compact Secondary Bar */}
      <div className="bg-[#f1f1f2] py-1 px-4 md:px-10 hidden sm:flex justify-between items-center text-[8px] font-black text-secondary/60 uppercase tracking-widest border-b">
         <div className="flex items-center gap-4">
            <Link href="/vendors" className="flex items-center gap-1.5 hover:text-accent transition-colors">
               <span className="text-accent text-[10px]">★</span> Sell on Vault
            </Link>
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors">
               <ShieldCheck className="h-2.5 w-2.5 text-primary" /> VAULT PAY
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors">
               <Zap className="h-2.5 w-2.5 text-primary" /> VAULT DELIVERY
            </span>
            <Separator orientation="vertical" className="h-3 mx-1" />
            <div className="flex items-center gap-2">
               <Palette className="h-2.5 w-2.5 text-primary" />
               <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                  <SelectTrigger className="h-6 rounded-none border-primary/10 bg-white text-[7px] font-black uppercase tracking-[0.15em] w-[120px] px-2">
                     <SelectValue placeholder="Theme Node" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-t-2 border-primary">
                    {THEMES.map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-[8px] font-black uppercase tracking-widest">
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div className="flex items-center gap-4">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
            ))}
         </div>
      </div>

      {/* Compact Main Bar */}
      <div className="bg-white border-b py-2 md:py-3 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8">
                  <Menu className="h-5 w-5 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] rounded-none p-0 border-r-4 border-primary">
                <SheetHeader className="p-6 border-b text-left bg-background">
                  <SheetTitle className="text-xl font-black text-secondary uppercase tracking-tighter">Sovereign Registry</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-4">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.name} href={link.href} className="px-6 py-3 font-black text-secondary hover:bg-primary/5 border-b text-[10px] uppercase tracking-widest">{link.name}</Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 md:gap-3 font-headline font-black text-base md:text-xl text-secondary shrink-0 group">
              <div className="relative h-6 w-6 md:h-9 md:w-9 overflow-hidden rounded-none border border-primary/20 shadow-lg">
                <Image src={content.settings.logoUrl} alt="Logo" fill className="object-cover" />
              </div>
              <span className="tracking-tighter uppercase hidden sm:inline">
                <span className="text-accent animate-v-glow">{content.settings.siteName.charAt(0)}</span>{content.settings.siteName.slice(1)}
              </span>
            </Link>
          </div>

          <div className="flex-1 max-w-xl relative" ref={searchRef}>
            <div className="relative w-full flex shadow-sm border border-border">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search institutional registry..." 
                className="w-full bg-background py-1.5 md:py-2 pl-9 pr-3 text-[10px] font-bold focus:bg-white focus:outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="hidden sm:flex rounded-none h-auto px-6 bg-[#f68b1e] hover:bg-[#e07b14] text-white font-black uppercase text-[10px] tracking-widest transition-all border-none">
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1.5 cursor-pointer group">
                  <User className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
                  <div className="hidden md:flex flex-col text-left">
                    <span className="text-[7px] text-muted-foreground uppercase font-black leading-none mb-0.5">Account</span>
                    <span className="text-[9px] font-black uppercase text-secondary group-hover:text-primary leading-none">Sign In <ChevronDown className="h-2 w-2 inline ml-0.5" /></span>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-none p-1 border-t-2 border-primary">
                 {!user ? (
                   <DropdownMenuItem onClick={() => setShowAuth(true)} className="p-2 font-black text-[9px] uppercase cursor-pointer hover:bg-primary/5">SECURE LOGIN</DropdownMenuItem>
                 ) : (
                   <>
                     <DropdownMenuItem asChild className="p-2 font-black text-[9px] uppercase cursor-pointer hover:bg-primary/5">
                        <Link href="/dashboard">Account Node</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={logout} className="p-2 font-black text-[9px] uppercase cursor-pointer text-destructive hover:bg-destructive/5">Logout Session</DropdownMenuItem>
                   </>
                 )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex items-center gap-1 cursor-pointer group">
               <HelpCircle className="h-5 w-5 text-secondary group-hover:text-accent" />
               <div className="flex flex-col">
                  <span className="text-[7px] text-muted-foreground uppercase font-black leading-none">Help</span>
                  <ChevronDown className="h-2.5 w-2.5 text-secondary group-hover:text-primary leading-none" />
               </div>
            </div>

            <Button variant="ghost" size="icon" className="relative group h-9 w-9 rounded-none hover:bg-transparent">
              <ShoppingCart className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
              {items.length > 0 && (
                <Badge className="absolute -top-0.5 -right-0.5 h-4 min-w-[16px] px-1 flex items-center justify-center bg-[#f68b1e] text-white text-[8px] font-black border border-white shadow-md rounded-none">
                  {items.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Ticker Node */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-0.5 border-b border-accent/10">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[7px] font-black uppercase tracking-[0.25em] flex items-center gap-3">
              <span className="h-1 w-1 bg-accent animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
