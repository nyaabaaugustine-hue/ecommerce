
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
    <header className="w-full flex flex-col sticky top-0 z-50">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Jumia Style Clearance Banner */}
      <div className="bg-[#1DA1F2] text-white py-2 flex items-center justify-between px-4 md:px-10 overflow-hidden relative border-b-4 border-accent">
         <div className="flex items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-4xl font-black italic tracking-tighter uppercase whitespace-nowrap">CLEARANCE SALE</h2>
            <div className="bg-white text-[#1DA1F2] px-4 py-1 font-black rounded-full text-xs md:text-sm animate-pulse whitespace-nowrap">UP TO 60% OFF</div>
         </div>
         <div className="hidden md:flex flex-col items-end">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Call to order</p>
            <p className="text-xl font-black tracking-tighter">{content.settings.supportPhone}</p>
         </div>
      </div>

      {/* Jumia Style Secondary Bar with Theme Toggle */}
      <div className="bg-[#f1f1f2] py-2 px-4 md:px-10 hidden sm:flex justify-between items-center text-[9px] font-black text-secondary/60 uppercase tracking-widest">
         <div className="flex items-center gap-6">
            <Link href="/vendors" className="flex items-center gap-2 hover:text-accent transition-colors">
               <span className="text-accent">★</span> Sell on Vault
            </Link>
            <span className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
               <ShieldCheck className="h-3 w-3 text-primary" /> VAULT PAY
            </span>
            <span className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
               <Zap className="h-3 w-3 text-primary" /> VAULT DELIVERY
            </span>
            <Separator orientation="vertical" className="h-4 mx-2" />
            <div className="flex items-center gap-3">
               <Palette className="h-3 w-3 text-primary" />
               <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                  <SelectTrigger className="h-7 rounded-none border-primary/20 bg-white text-[8px] font-black uppercase tracking-[0.2em] w-[140px]">
                     <SelectValue placeholder="Institutional Theme" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-t-4 border-primary">
                    {THEMES.map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-[9px] font-black uppercase tracking-widest">
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-primary">Our Story</Link>
            <Link href="/contact" className="hover:text-primary">Support Registry</Link>
         </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white border-b py-4 md:py-6 shadow-xl">
        <div className="container mx-auto px-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] rounded-none p-0 border-r-4 border-primary">
                <SheetHeader className="p-8 border-b text-left bg-background">
                  <SheetTitle className="text-2xl font-black text-secondary uppercase tracking-tighter">Sovereign Registry</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.name} href={link.href} className="px-8 py-4 font-black text-secondary hover:bg-primary/5 border-b text-xs uppercase tracking-widest">{link.name}</Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-3 md:gap-4 font-headline font-black text-xl md:text-3xl text-secondary shrink-0 group">
              <div className="relative h-8 w-8 md:h-12 md:w-12 overflow-hidden rounded-none border-2 border-primary/20 shadow-xl">
                <Image src={content.settings.logoUrl} alt="Logo" fill className="object-cover" />
              </div>
              <span className="tracking-tighter uppercase hidden sm:inline">
                <span className="text-accent animate-v-glow">{content.settings.siteName.charAt(0)}</span>{content.settings.siteName.slice(1)}
              </span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="relative w-full flex shadow-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products, brands and categories..." 
                className="w-full border-2 border-border rounded-none py-3 md:py-4 pl-12 pr-4 text-xs font-bold focus:border-accent focus:outline-none transition-all bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="hidden sm:flex rounded-none h-auto px-10 bg-[#f68b1e] hover:bg-[#e07b14] text-white font-black uppercase text-xs tracking-widest transition-all">
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <User className="h-6 w-6 text-secondary group-hover:text-accent transition-colors" />
                  <div className="hidden md:flex flex-col text-left">
                    <span className="text-[10px] text-muted-foreground uppercase font-black">Account</span>
                    <span className="text-[11px] font-black uppercase text-secondary group-hover:text-primary">Sign In <ChevronDown className="h-3 w-3 inline ml-1" /></span>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-none p-2 border-t-4 border-primary">
                 {!user ? (
                   <DropdownMenuItem onClick={() => setShowAuth(true)} className="p-3 font-black text-[10px] uppercase cursor-pointer hover:bg-primary/5">SECURE LOGIN</DropdownMenuItem>
                 ) : (
                   <>
                     <DropdownMenuItem asChild className="p-3 font-black text-[10px] uppercase cursor-pointer hover:bg-primary/5">
                        <Link href="/dashboard">Account Node</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={logout} className="p-3 font-black text-[10px] uppercase cursor-pointer text-destructive hover:bg-destructive/5">Logout Session</DropdownMenuItem>
                   </>
                 )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex items-center gap-2 cursor-pointer group">
               <HelpCircle className="h-6 w-6 text-secondary group-hover:text-accent" />
               <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase font-black">Help</span>
                  <ChevronDown className="h-3 w-3 text-secondary group-hover:text-primary" />
               </div>
            </div>

            <Button variant="ghost" size="icon" className="relative group h-12 w-12 rounded-none">
              <ShoppingCart className="h-7 w-7 text-secondary group-hover:text-accent transition-colors" />
              {items.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1.5 flex items-center justify-center bg-[#f68b1e] text-white text-[10px] font-black border-2 border-white shadow-xl rounded-none">
                  {items.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dynamic Ticker (Moved below main bar) */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-1 border-b border-accent/20">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="h-1.5 w-1.5 bg-accent animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
