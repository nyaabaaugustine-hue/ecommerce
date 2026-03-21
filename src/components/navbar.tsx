
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
  Plus
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

/**
 * @fileOverview Compact Institutional Navbar
 * Strictly rectangular (rounded-none). Optimized for density and zero overlap.
 * Precision height: h-18 (72px).
 */
export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const { theme, setTheme } = useTheme();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const themes: { id: PrimaryTheme; name: string; color: string; desc: string }[] = [
    { id: 'cold-white', name: 'Clinical Light', color: 'bg-white border', desc: 'Standard Default' },
    { id: 'sovereign', name: 'Elite Sovereign', color: 'bg-slate-900', desc: 'Space Blue Blend' },
    { id: 'midnight', name: 'Midnight OLED', color: 'bg-black', desc: 'Slate Blue Blend' },
    { id: 'cobalt', name: 'Enterprise Blue', color: 'bg-blue-900', desc: 'Corporate Cobalt' },
    { id: 'royal', name: 'Royal Majesty', color: 'bg-purple-900', desc: 'Indigo Blend' },
    { id: 'crimson', name: 'Power Crimson', color: 'bg-red-900', desc: 'Heat Blend' },
  ];

  return (
    <header className="w-full bg-background border-b sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Precision Top Bar */}
      <div className="bg-muted/50 border-b border-dashed">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Info className="h-3 w-3" /> About
            </Link>
            <Link href="/vendors" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> Verified
            </Link>
            <Link href="/help" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <HelpCircle className="h-3 w-3" /> Help
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[8px] font-bold text-primary/60 uppercase tracking-[0.3em]">SECURE ESCROW ACTIVE • ACCRA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-6 h-full">
          {/* COMPACT LOGO */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/20 p-1 bg-white shadow-sm group-hover:border-primary transition-colors duration-500">
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
              <span className="font-headline font-black text-xl text-foreground tracking-tighter uppercase leading-none">
                {content.settings.siteName}
              </span>
              <span className="text-[7px] font-black text-primary uppercase tracking-[0.3em] mt-0.5">Marketplace</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center h-full">
            <div className="h-8 w-px bg-border mx-2" />
            <MegaMenu />
          </div>
        </div>

        {/* STREAMLINED SEARCH */}
        <div className="hidden lg:flex flex-1 max-w-lg items-center h-11 border border-border rounded-none overflow-hidden bg-muted/10 focus-within:border-primary/40 focus-within:bg-background transition-all duration-300">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-border">
            <input 
              placeholder='Search verified listings...' 
              className="w-full bg-transparent outline-none text-foreground text-[13px] font-bold placeholder:text-muted-foreground/40 uppercase tracking-tight"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-4 flex items-center gap-2 shrink-0 cursor-pointer hover:bg-muted h-full transition-colors group">
            <MapPin className="h-3.5 w-3.5 text-primary/60" />
            <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Accra</span>
            <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
          </div>
          <button className="h-full px-5 bg-primary text-primary-foreground hover:opacity-90 transition-all group">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* COMPACT ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden xl:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all cursor-pointer group px-2">
                  <Palette className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[8px] font-black uppercase tracking-widest">THEME</span>
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

            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all cursor-pointer group px-2 relative">
              <Bell className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black uppercase tracking-widest">Alerts</span>
              <span className="absolute top-0 right-1 h-1.5 w-1.5 bg-primary rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <Link href="/dashboard">
                <Button variant="outline" className="text-foreground font-black text-[9px] uppercase tracking-widest px-4 h-9 hover:bg-muted border-2 transition-all">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost" 
                className="text-foreground font-black text-[9px] uppercase tracking-widest px-5 h-9 hover:bg-muted border-2 transition-all"
              >
                Login
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-primary-foreground hover:opacity-95 font-black text-[9px] uppercase tracking-widest h-9 px-6 shadow-md flex items-center gap-2"
              >
                <Plus className="h-3.5 w-3.5" />
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
