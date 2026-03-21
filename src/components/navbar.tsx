
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  MapPin, 
  MessageSquare, 
  Bell, 
  Palette,
  ChevronDown,
  Info,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { useAuth, useContent, useTheme, type PrimaryTheme } from '@/components/providers';
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

export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const { theme, setTheme } = useTheme();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const themes: { id: PrimaryTheme; name: string; color: string }[] = [
    { id: 'sovereign', name: 'Sovereign', color: 'bg-slate-900' },
    { id: 'midnight', name: 'Midnight', color: 'bg-black' },
    { id: 'cobalt', name: 'Cobalt', color: 'bg-blue-900' },
    { id: 'royal', name: 'Royal', color: 'bg-purple-900' },
    { id: 'crimson', name: 'Crimson', color: 'bg-red-900' },
    { id: 'cold-white', name: 'Cold White', color: 'bg-white border' },
  ];

  return (
    <header className="w-full bg-background border-b sticky top-0 z-50 shadow-sm transition-colors duration-500">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Top Utility Nav */}
      <div className="bg-secondary/5 border-b border-dashed">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <Info className="h-3 w-3" /> Institutional About
            </Link>
            <Link href="/vendors" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> Verified Vendors
            </Link>
            <Link href="/help" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <HelpCircle className="h-3 w-3" /> Help Center
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">Escrow Active: GHS-ACCRA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-8 h-full">
          {/* LOGO NODE */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/30 p-1 bg-white shadow-sm group-hover:scale-105 transition-transform">
              <Image 
                src={content.settings.logoUrl} 
                alt="Logo" 
                fill 
                sizes="40px" 
                className="object-contain" 
                priority 
              />
            </div>
            <span className="font-headline font-black text-2xl text-foreground tracking-tighter uppercase hidden xl:block">
              {content.settings.siteName}
            </span>
          </Link>

          {/* Mega Menu Trigger */}
          <div className="hidden lg:block h-full py-4">
            <div className="h-full w-px bg-border mx-2" />
            <MegaMenu />
          </div>
        </div>

        {/* SEARCH HUB */}
        <div className="hidden lg:flex flex-1 max-w-xl items-center h-12 border-2 border-muted-foreground/20 rounded-md overflow-hidden bg-muted/10 focus-within:border-primary transition-all duration-300">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-muted-foreground/20">
            <input 
              placeholder='Search verified inventory...' 
              className="w-full bg-transparent outline-none text-foreground text-[14px] font-medium placeholder:text-muted-foreground/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-4 flex items-center gap-2 shrink-0 cursor-pointer hover:bg-muted h-full transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-[12px] font-bold text-foreground">Accra</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
          <button className="h-full px-5 bg-transparent hover:bg-primary/10 transition-colors group">
            <Search className="h-5 w-5 text-primary group-active:scale-90 transition-transform" />
          </button>
        </div>

        {/* UTILITY ACTIONS ROW */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden xl:flex items-center gap-5">
            {/* THEME TOGGLE */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
                  <Palette className="h-5 w-5" />
                  <span className="text-[10px] font-bold uppercase tracking-tight">Theme</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-none border-t-4 border-t-primary">
                <DropdownMenuLabel className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Select Protocol</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themes.map((t) => (
                  <DropdownMenuItem 
                    key={t.id} 
                    onClick={() => setTheme(t.id)}
                    className="flex items-center justify-between cursor-pointer py-3"
                  >
                    <span className={cn("text-[11px] font-black uppercase tracking-widest", theme === t.id && "text-primary")}>{t.name}</span>
                    <div className={cn("h-3 w-3 rounded-full", t.color)} />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <MessageSquare className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-tight">Chat</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <Bell className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-tight">Alerts</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <Link href="/dashboard">
                <Button variant="ghost" className="text-foreground font-black text-[12px] uppercase tracking-widest px-4 hover:bg-muted rounded-md transition-all">
                  Account
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost" 
                className="text-foreground font-black text-[12px] uppercase tracking-widest px-6 h-12 hover:bg-muted rounded-[2rem] border border-muted-foreground/20 transition-all"
              >
                Login
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-secondary hover:bg-primary/90 font-black text-[11px] uppercase tracking-[0.1em] h-12 px-8 rounded-[7%] shadow-lg border-2 border-white/10 flex items-center gap-2 active:scale-95 transition-all"
              >
                <div className="bg-white/20 p-1 rounded-full"><Search className="h-3 w-3 text-white rotate-45" /></div>
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
