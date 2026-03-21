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
  "IN ACCRA",
  "SALE CONFIRMED: YAW MENSAH @ MELCOM DIGITAL",
  "SYSTEM UPDATE: SECURE ESCROW PROTECTION ACTIVE",
  "HIGH DEMAND: 24 USERS VIEWING SAMSUNG 65\" QLED",
  "SAFETY ALERT: BUYER PROTECTION SYSTEM ACTIVE",
  "MARKET DATA: 12 NEW ORDERS IN EAST LEGON",
  "NEW PARTNER: PRIME RENTALS GH JOINED MARKETPLACE"
];

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Vendors', href: '/vendors' },
  { name: 'Contact Us', href: '/contact' }
];

const THEMES: { label: string; value: PrimaryTheme }[] = [
  { label: "Classic Navy", value: "sovereign" },
  { label: "Deep Blue", value: "deep" },
  { label: "Royal Gold", value: "royal" },
  { label: "Midnight", value: "midnight" },
  { label: "Cobalt", value: "cobalt" },
  { label: "Silver Grey", value: "cold-white" },
  { label: "Crimson Red", value: "crimson" },
];

export function Navbar() {
  const { user, logout } = useAuth();
  const { items, total } = useCart();
  const { currency, setCurrency, formatPrice } = useCurrency();
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
      
      {/* News Ticker */}
      <div className="bg-primary text-primary-foreground overflow-hidden py-1 border-b border-accent/10">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="h-1 w-1 bg-accent animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-secondary text-white py-1.5 px-4 md:px-10 flex items-center justify-between text-[8px] font-black uppercase tracking-widest border-b border-white/5">
         <div className="flex items-center gap-4">
            <Badge className="bg-[#f68b1e] text-secondary rounded-none font-black text-[7px] uppercase tracking-widest px-2 py-0.5">CLEARANCE SALE</Badge>
            <span className="text-[#f68b1e]">UP TO 60% OFF</span>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
               <Phone className="h-2.5 w-2.5 text-primary" />
               <span>Call to order: {content.settings.supportPhone}</span>
            </div>
         </div>
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 opacity-70">
               <span className="hover:text-accent cursor-pointer transition-colors">Sell on Ecommerce</span>
               <span className="hover:text-accent cursor-pointer transition-colors">SAFE PAY</span>
               <span className="hover:text-accent cursor-pointer transition-colors">FAST DELIVERY</span>
            </div>
            <Separator orientation="vertical" className="h-3 bg-white/10" />
            <div className="flex items-center gap-4">
               {NAV_LINKS.map(link => (
                 <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">{link.name}</Link>
               ))}
            </div>
         </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b py-3 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative h-8 w-8 overflow-hidden rounded-none border border-primary/20 shadow-sm">
                <Image src={content.settings.logoUrl} alt="Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl text-secondary tracking-tighter uppercase leading-none">
                  {content.settings.siteName}
                </span>
                <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em]">Secure Escrow</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2 border-l pl-6 border-dashed">
               <div className="flex flex-col text-left leading-none">
                  <span className="text-[7px] text-muted-foreground uppercase font-black tracking-widest">Global Marketplace</span>
                  <span className="text-xs font-black text-secondary uppercase tracking-tight">Browse All</span>
               </div>
               <MegaMenu />
            </div>
          </div>

          <div className="flex-1 max-w-xl relative" ref={searchRef}>
            <div className="relative w-full flex shadow-sm border border-secondary/10 overflow-hidden rounded-none">
              <input 
                type="text" 
                placeholder="Search products, brands and categories..." 
                className="w-full bg-muted/10 py-2.5 pl-6 pr-3 text-[11px] font-bold focus:bg-white focus:outline-none transition-all placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
              <Button className="h-auto px-6 bg-secondary hover:bg-primary text-white font-black uppercase text-[10px] tracking-widest border-none">
                <Search className="h-3.5 w-3.5" />
              </Button>
            </div>
            {showSuggestions && searchQuery.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-t-0 shadow-2xl z-50 rounded-none">
                {suggestions.map((s) => (
                  <Link 
                    key={s.id} 
                    href={`/listings/${s.id}`}
                    onClick={() => setShowSuggestions(false)}
                    className="flex items-center gap-4 p-3 hover:bg-muted/30 transition-colors border-b last:border-0"
                  >
                    <div className="relative h-8 w-8 bg-muted shrink-0 rounded-none">
                      <Image src={s.imageUrl} alt={s.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-secondary uppercase truncate">{s.title}</p>
                      <p className="text-[8px] text-muted-foreground uppercase font-bold">{s.category}</p>
                    </div>
                    <span className="text-[10px] font-black text-burgundy">{formatPrice(s.price)}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-4">
               {user ? (
                 <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                     <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right flex flex-col">
                           <span className="text-[7px] text-muted-foreground uppercase font-black tracking-widest">Welcome</span>
                           <span className="text-xs font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">{user.name}</span>
                        </div>
                        <User className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                     </div>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent align="end" className="rounded-none w-48 border-t-2 border-primary">
                     <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="text-[9px] font-black uppercase tracking-widest cursor-pointer">My Dashboard</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={logout} className="text-[9px] font-black uppercase tracking-widest cursor-pointer text-burgundy">Logout</DropdownMenuItem>
                   </DropdownMenuContent>
                 </DropdownMenu>
               ) : (
                 <Button 
                   onClick={() => setShowAuth(true)}
                   className="bg-transparent text-secondary hover:text-accent font-black text-[10px] uppercase tracking-widest px-0 flex items-center gap-2"
                 >
                   <User className="h-4 w-4" />
                   Sign In
                 </Button>
               )}

               <div className="flex items-center gap-2 border-l border-dashed pl-6">
                 <Palette className="h-3 w-3 text-primary" />
                 <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                    <SelectTrigger className="h-6 rounded-none border-none bg-transparent text-[8px] font-black uppercase tracking-widest w-[100px] px-0 hover:text-accent">
                       <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-t-2 border-primary">
                      {THEMES.map((t) => (
                        <SelectItem key={t.value} value={t.value} className="text-[9px] font-black uppercase tracking-widest">
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                 </Select>
               </div>

               <Button variant="ghost" size="icon" className="relative group h-8 w-8 rounded-none hover:bg-transparent ml-2">
                 <ShoppingCart className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
                 {items.length > 0 && (
                   <Badge className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 flex items-center justify-center bg-accent text-secondary text-[8px] font-black border border-white shadow-sm rounded-none">
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