
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
  "SETTLEMENT VERIFIED: YAW MENSAH @ MELCOM DIGITAL",
  "PROTOCOL UPDATE: MULTISIG ESCROW V1.2 ENGAGED",
  "HIGH DEMAND: 24 USERS VIEWING SAMSUNG 65\" QLED",
  "SECURITY ALERT: MULTISIG ESCROW PROTECTION ACTIVE",
  "MARKET DATA: 12 NEW ORDERS SECURED IN EAST LEGON",
  "NEW PARTNER: PRIME RENTALS GH JOINED REGISTRY"
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
      
      {/* Ticker Node */}
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

      {/* Institutional Top Bar */}
      <div className="bg-secondary text-white py-2 px-4 md:px-10 flex items-center justify-between text-[9px] font-black uppercase tracking-widest border-b border-white/5">
         <div className="flex items-center gap-6">
            <span>Institutional Partnership</span>
            <div className="flex items-center gap-2">
               <Phone className="h-3 w-3 text-primary" />
               <span>Support: {content.settings.supportPhone}</span>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors">
               <Globe className="h-3 w-3" />
               <span>GHS GHC</span>
            </div>
            <div className="flex items-center gap-2">
               <Palette className="h-3 w-3 text-primary" />
               <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                  <SelectTrigger className="h-6 rounded-none border-none bg-transparent text-[9px] font-black uppercase tracking-widest w-[120px] px-0 hover:text-accent">
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
         </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white border-b py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/20 shadow-lg">
                <Image src={content.settings.logoUrl} alt="Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-2xl text-secondary tracking-tighter uppercase leading-none">
                  {content.settings.siteName}
                </span>
                <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] leading-tight">Sovereign Escrow</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2 border-l pl-8 border-dashed">
               <div className="flex flex-col text-left leading-none">
                  <span className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">Global Inventory</span>
                  <span className="text-sm font-black text-secondary uppercase tracking-tight">Browse Registry</span>
               </div>
               <MegaMenu />
            </div>
          </div>

          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="relative w-full flex shadow-sm border-2 border-secondary/5">
              <input 
                type="text" 
                placeholder="Search the Global Vault Registry..." 
                className="w-full bg-muted/20 py-3 pl-6 pr-3 text-xs font-bold focus:bg-white focus:outline-none transition-all placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="rounded-none h-auto px-8 bg-secondary hover:bg-primary text-white font-black uppercase text-[11px] tracking-widest transition-all border-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <div className="flex items-center gap-4">
               {user ? (
                 <div className="flex items-center gap-4 border-r pr-8 border-dashed">
                    <div className="flex flex-col text-right">
                       <span className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">Logged In As</span>
                       <span className="text-sm font-black text-secondary uppercase tracking-tight">{user.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={logout} className="h-10 w-10 text-secondary hover:text-accent">
                       <LogOut className="h-5 w-5" />
                    </Button>
                 </div>
               ) : (
                 <Button 
                   onClick={() => setShowAuth(true)}
                   className="bg-transparent text-secondary hover:text-accent font-black text-xs uppercase tracking-widest px-0"
                 >
                   Secure Access
                 </Button>
               )}

               <Button variant="ghost" size="icon" className="relative group h-10 w-10 rounded-none hover:bg-transparent">
                 <ShoppingCart className="h-6 w-6 text-secondary group-hover:text-accent transition-colors" />
                 {items.length > 0 && (
                   <Badge className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1.5 flex items-center justify-center bg-accent text-secondary text-[9px] font-black border-2 border-white shadow-md rounded-none">
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
