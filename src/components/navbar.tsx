"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  MapPin, 
  Bell, 
  Palette,
  ChevronDown,
  Info,
  ShieldCheck,
  HelpCircle,
  Plus,
  Menu,
  Home as HomeIcon,
  Phone,
  User as UserIcon
} from 'lucide-react';
import { useAuth, useContent, useTheme, useSearch, type PrimaryTheme } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { MegaMenu } from '@/components/mega-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const { theme, setTheme } = useTheme();
  const { searchQuery, setSearchQuery } = useSearch();
  const [showAuth, setShowAuth] = useState(false);

  const themes: { id: PrimaryTheme; name: string; color: string; desc: string }[] = [
    { id: 'cold-white', name: 'Clinical Light', color: 'bg-white border', desc: 'Standard Default' },
    { id: 'sovereign', name: 'Elite Sovereign', color: 'bg-slate-900', desc: 'Space Blue Blend' },
    { id: 'midnight', name: 'Midnight OLED', color: 'bg-black', desc: 'Slate Blue Blend' },
    { id: 'cobalt', name: 'Enterprise Blue', color: 'bg-blue-900', desc: 'Corporate Cobalt' },
    { id: 'royal', name: 'Royal Majesty', color: 'bg-purple-900', desc: 'Indigo Blend' },
    { id: 'crimson', name: 'Power Crimson', color: 'bg-red-900', desc: 'Heat Blend' },
  ];

  const NAV_LINKS = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Vendors', href: '/vendors', icon: ShieldCheck },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const UTILITY_LINKS = [
    { name: 'Help', href: '/help', icon: HelpCircle },
  ];

  return (
    <header className="w-full bg-background border-b sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      <div className="bg-muted/50 border-b border-dashed hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 h-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {UTILITY_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-[8px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1">
                <link.icon className="h-2.5 w-2.5" /> {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[7px] font-bold text-primary uppercase tracking-[0.4em]">SECURE ESCROW ACTIVE • ACCRA HUB</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8 h-full">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative h-7 w-7 md:h-9 md:w-9 overflow-hidden rounded-none border border-primary/20 p-1 bg-white shadow-sm group-hover:border-primary transition-colors duration-500">
              <Image 
                src={content.settings.logoUrl} 
                alt="Logo" 
                fill 
                sizes="40px" 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-base md:text-lg text-foreground tracking-tighter uppercase leading-none">
                {content.settings.siteName}
              </span>
              <span className="text-[6px] font-black text-primary uppercase tracking-[0.3em] mt-0.5">Marketplace</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center h-full gap-6">
            <div className="h-6 w-px bg-border mr-2" />
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-all relative group/nav"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/nav:w-full" />
              </Link>
            ))}
            <div className="h-6 w-px bg-border mx-2" />
            <MegaMenu />
          </div>
        </div>

        <div className="hidden sm:flex flex-1 max-w-md items-center h-9 md:h-10 border border-border rounded-none overflow-hidden bg-muted/10 focus-within:border-primary/40 focus-within:bg-background transition-all duration-300">
          <div className="flex-1 flex items-center px-3 md:px-4 gap-3 border-r border-border">
            <input 
              placeholder='Search verified listings...' 
              className="w-full bg-transparent outline-none text-foreground text-[11px] md:text-[12px] font-bold placeholder:text-muted-foreground/40 uppercase tracking-tight"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="hidden md:flex px-3 items-center gap-2 shrink-0 cursor-pointer hover:bg-muted h-full transition-colors group">
            <MapPin className="h-3 w-3 text-primary/60" />
            <span className="text-[9px] font-black text-foreground uppercase tracking-widest">Accra</span>
            <ChevronDown className="h-2 w-2 text-muted-foreground" />
          </div>
          <button className="h-full px-3 md:px-4 bg-primary text-primary-foreground hover:opacity-90 transition-all group">
            <Search className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden xl:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-col items-center gap-0.5 text-secondary hover:text-primary transition-all cursor-pointer group px-2">
                  <Palette className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[7px] font-black uppercase tracking-widest">THEME</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-none border-t-2 border-t-primary shadow-xl" align="end">
                <DropdownMenuLabel className="text-[9px] uppercase font-black tracking-[0.2em] text-muted-foreground">Themes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid gap-0.5">
                  {themes.map((t) => (
                    <DropdownMenuItem 
                      key={t.id} 
                      onClick={() => setTheme(t.id)}
                      className={cn(
                        "flex items-center justify-between cursor-pointer py-2 px-3 transition-all hover:bg-muted rounded-none",
                        theme === t.id && "bg-primary/10 border-l-2 border-primary"
                      )}
                    >
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", theme === t.id ? "text-primary" : "text-foreground")}>{t.name}</span>
                      <div className={cn("h-3 w-3 rounded-none", t.color)} />
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex flex-col items-center gap-0.5 text-secondary hover:text-primary transition-all cursor-pointer group px-2 relative">
              <Bell className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
              <span className="text-[7px] font-black uppercase tracking-widest">Alerts</span>
              <span className="absolute top-0 right-1 h-1 w-1 bg-primary rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 px-3 h-9 border-2 border-primary/20 rounded-none group hover:border-primary transition-all">
                    <Avatar className="h-5 w-5 rounded-none border border-primary/20">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-primary text-secondary text-[8px] font-black">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start leading-none hidden sm:flex">
                      <span className="text-[9px] font-black uppercase tracking-tight text-foreground">{user.name}</span>
                      <span className="text-[7px] font-bold uppercase text-primary tracking-widest">{user.role.replace('_', ' ')}</span>
                    </div>
                    <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 rounded-none border-t-2 border-t-primary" align="end">
                  <DropdownMenuLabel className="text-[9px] uppercase font-black text-muted-foreground tracking-widest">Account Node</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard">
                    <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest cursor-pointer">Dashboard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest cursor-pointer">My Listings</DropdownMenuItem>
                  <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest cursor-pointer">Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="outline" 
                className="text-foreground font-black text-[8px] md:text-[9px] uppercase tracking-widest px-3 md:px-4 h-8 hover:bg-muted border-2 transition-all"
              >
                Login
              </Button>
            )}

            <Link href="/listings/create" className="hidden xs:block">
              <Button 
                className="bg-primary text-primary-foreground hover:opacity-95 font-black text-[8px] md:text-[9px] uppercase tracking-widest h-8 px-3 md:px-5 shadow-md flex items-center gap-2"
              >
                <Plus className="h-3 w-3" />
                <span className="hidden sm:inline">Post Ad</span>
                <span className="sm:hidden">Post</span>
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
