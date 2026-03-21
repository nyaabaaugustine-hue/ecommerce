
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Phone, ChevronDown, ShieldCheck, Globe, LogOut, Menu, Zap, Sparkles, Palette, Store, HelpCircle, X } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-sm">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Heritage Accent Strip */}
      <div className="h-1.5 w-full relative overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Kente Accent" 
          fill 
          className="object-cover"
        />
      </div>

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

      {/* Top Banner - Hidden on Mobile */}
      <div className="hidden md:flex bg-secondary text-white py-1.5 px-4 md:px-10 items-center justify-between text-[8px] font-black uppercase tracking-widest border-b border-white/5">
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
      <div className="bg-white border-b py-2 md:py-3 shadow-md">
        <div className="container mx-auto px-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Trigger */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-secondary">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0 flex flex-col border-r-4 border-primary">
                  <div className="bg-secondary p-6 text-white flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 bg-white p-1 rounded-none border border-primary/30">
                        <Image src={content.settings.logoUrl} alt="Logo" fill className="object-contain" />
                      </div>
                      <span className="font-black text-xl tracking-tighter uppercase">{content.settings.siteName}</span>
                    </div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">The Gold Standard</p>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                    <nav className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Navigation Nodes</p>
                        <ul className="space-y-4">
                          {NAV_LINKS.map(link => (
                            <li key={link.name}>
                              <Link href={link.href} className="text-sm font-black uppercase text-secondary hover:text-primary transition-colors flex items-center justify-between">
                                {link.name}
                                <ChevronDown className="h-4 w-4 -rotate-90 opacity-30" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Marketplace Registry</p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="categories" className="border-none">
                            <AccordionTrigger className="py-0 text-sm font-black uppercase text-secondary hover:no-underline">Shop Categories</AccordionTrigger>
                            <AccordionContent className="pt-4 space-y-3">
                              <Link href="/listings?category=Computing" className="block text-[11px] font-bold text-muted-foreground uppercase pl-4">Electronics & Tech</Link>
                              <Link href="/listings?category=Real Estate" className="block text-[11px] font-bold text-muted-foreground uppercase pl-4">Property & Real Estate</Link>
                              <Link href="/listings?category=Home" className="block text-[11px] font-bold text-muted-foreground uppercase pl-4">Lifestyle & Home</Link>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Institutional Settings</p>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between bg-muted/20 p-3">
                            <span className="text-[10px] font-black text-secondary uppercase">Theme Protocol</span>
                            <Select value={theme} onValueChange={(v) => setTheme(v as PrimaryTheme)}>
                              <SelectTrigger className="h-8 border-none bg-transparent text-[10px] font-black uppercase tracking-widest w-[120px] px-0">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="rounded-none">
                                {THEMES.map((t) => (
                                  <SelectItem key={t.value} value={t.value} className="text-[9px] font-black uppercase">{t.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center justify-between bg-muted/20 p-3">
                            <span className="text-[10px] font-black text-secondary uppercase">GHS Currency</span>
                            <Select value={currency} onValueChange={(v) => setCurrency(v as CurrencyCode)}>
                              <SelectTrigger className="h-8 border-none bg-transparent text-[10px] font-black uppercase tracking-widest w-[80px] px-0">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="rounded-none">
                                <SelectItem value="GHS" className="text-[9px] font-black uppercase">GHS</SelectItem>
                                <SelectItem value="USD" className="text-[9px] font-black uppercase">USD</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div className="p-6 bg-muted/30 border-t">
                    {user ? (
                      <Button onClick={logout} variant="outline" className="w-full border-burgundy/20 text-burgundy font-black text-[10px] uppercase tracking-widest h-12 gap-2">
                        <LogOut className="h-4 w-4" /> Terminate Session
                      </Button>
                    ) : (
                      <Button onClick={() => { setShowAuth(true); setIsMobileMenuOpen(false); }} className="w-full bg-secondary text-white font-black text-[10px] uppercase tracking-widest h-12">
                        Authorize Identity
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="relative h-8 w-8 md:h-9 md:w-9 overflow-hidden rounded-none border border-primary/20 shadow-sm">
                  <Image src={content.settings.logoUrl} alt="Logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline font-black text-lg md:text-xl text-secondary tracking-tighter uppercase leading-none">
                    {content.settings.siteName}
                  </span>
                  <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em] hidden sm:block">Secure Escrow</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3 md:hidden">
               <Button variant="ghost" size="icon" className="h-10 w-10 text-secondary" onClick={() => setShowAuth(true)}>
                 <User className="h-5 w-5" />
               </Button>
               <Button variant="ghost" size="icon" className="relative h-10 w-10 text-secondary">
                 <ShoppingCart className="h-5 w-5" />
                 {items.length > 0 && (
                   <Badge className="absolute top-1 right-1 h-4 min-w-[16px] px-1 flex items-center justify-center bg-accent text-secondary text-[8px] font-black rounded-none">
                     {items.length}
                   </Badge>
                 )}
               </Button>
            </div>

            <div className="hidden lg:flex items-center gap-2 border-l pl-6 border-dashed">
               <div className="flex flex-col text-left leading-none">
                  <span className="text-[7px] text-muted-foreground uppercase font-black tracking-widest">Global Marketplace</span>
                  <span className="text-xs font-black text-secondary uppercase tracking-tight">Browse All</span>
               </div>
               <MegaMenu />
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative" ref={searchRef}>
            <div className="relative w-full flex shadow-sm border border-secondary/10 overflow-hidden rounded-none">
              <input 
                type="text" 
                placeholder="Search products, brands and categories..." 
                className="w-full bg-muted/10 py-2.5 pl-4 md:pl-6 pr-3 text-[11px] font-bold focus:bg-white focus:outline-none transition-all placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
              <Button className="h-auto px-4 md:px-6 bg-secondary hover:bg-primary text-white font-black uppercase text-[10px] tracking-widest border-none rounded-none">
                <Search className="h-3.5 w-3.5" />
              </Button>
            </div>
            {showSuggestions && searchQuery.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-t-0 shadow-2xl z-[60] rounded-none">
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

          <div className="hidden md:flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-4">
               {user ? (
                 <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                     <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right flex flex-col">
                           <span className="text-[7px] text-muted-foreground uppercase font-black tracking-widest">Logged in as</span>
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

               <div className="hidden lg:flex items-center gap-2 border-l border-dashed pl-6">
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
