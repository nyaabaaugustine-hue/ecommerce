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

  const themes: { id: PrimaryTheme; name: string; color: string; desc: string }[] = [
    { id: 'sovereign', name: 'Sovereign', color: 'bg-slate-900', desc: 'Prestige Dark' },
    { id: 'midnight', name: 'Midnight', color: 'bg-black', desc: 'OLED Black' },
    { id: 'cold-white', name: 'Cold White', color: 'bg-white border', desc: 'Institutional Light' },
    { id: 'cobalt', name: 'Cobalt', color: 'bg-blue-900', desc: 'Enterprise Series' },
    { id: 'royal', name: 'Royal', color: 'bg-purple-900', desc: 'Regal Elite' },
    { id: 'crimson', name: 'Crimson', color: 'bg-red-900', desc: 'Power Series' },
  ];

  return (
    <header className="w-full bg-background border-b sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Top Institutional Bar */}
      <div className="bg-muted border-b border-dashed">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <Info className="h-3 w-3" /> Institutional About
            </Link>
            <Link href="/vendors" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> Verified Vendors
            </Link>
            <Link href="/help" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <HelpCircle className="h-3 w-3" /> Support Hub
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">Vault Escrow Protocol Active: GHS-ACCRA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-8 h-full">
          {/* LOGO NODE */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-none border-2 border-primary/20 p-1 bg-white shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image 
                src={content.settings.logoUrl} 
                alt="Logo" 
                fill 
                sizes="48px" 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-2xl text-foreground tracking-tighter uppercase leading-none">
                {content.settings.siteName}
              </span>
              <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em] mt-1">Sovereign Registry</span>
            </div>
          </Link>

          <div className="hidden lg:block h-full py-6">
            <div className="h-full w-px bg-border mx-2" />
            <MegaMenu />
          </div>
        </div>

        {/* SEARCH COMMAND CENTER */}
        <div className="hidden lg:flex flex-1 max-w-xl items-center h-14 border-2 border-border rounded-md overflow-hidden bg-muted/20 focus-within:border-primary focus-within:bg-background transition-all duration-500 shadow-sm">
          <div className="flex-1 flex items-center px-5 gap-3 border-r border-border">
            <input 
              placeholder='Search verified institutional inventory...' 
              className="w-full bg-transparent outline-none text-foreground text-[14px] font-bold placeholder:text-muted-foreground/50 uppercase tracking-tight"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-5 flex items-center gap-3 shrink-0 cursor-pointer hover:bg-muted h-full transition-colors group">
            <MapPin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-black text-foreground uppercase tracking-widest">Accra</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
          <button className="h-full px-6 bg-primary text-primary-foreground hover:opacity-90 transition-all group">
            <Search className="h-5 w-5 group-hover:scale-110 transition-all" />
          </button>
        </div>

        {/* UTILITY ACTIONS ROW */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden xl:flex items-center gap-6">
            {/* THEME REGISTRY SELECTOR */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
                  <div className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Palette className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">Protocol</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 rounded-none border-t-4 border-t-primary shadow-2xl p-2" align="end">
                <DropdownMenuLabel className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-foreground mb-2">Institutional Environments</DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-2" />
                <div className="grid gap-1">
                  {themes.map((t) => (
                    <DropdownMenuItem 
                      key={t.id} 
                      onClick={() => setTheme(t.id)}
                      className={cn(
                        "flex items-center justify-between cursor-pointer py-3 px-4 transition-all hover:bg-muted",
                        theme === t.id && "bg-primary/10 border-l-2 border-primary"
                      )}
                    >
                      <div className="flex flex-col">
                        <span className={cn("text-[11px] font-black uppercase tracking-widest", theme === t.id ? "text-primary" : "text-foreground")}>{t.name}</span>
                        <span className="text-[8px] font-bold text-muted-foreground uppercase">{t.desc}</span>
                      </div>
                      <div className={cn("h-4 w-4 rounded-full shadow-inner", t.color)} />
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <div className="p-2 rounded-full hover:bg-muted transition-colors relative">
                <Bell className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-primary rounded-full" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest">Alerts</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <Link href="/dashboard">
                <Button variant="outline" className="text-foreground font-black text-[11px] uppercase tracking-[0.2em] px-6 h-12 hover:bg-muted rounded-md border-2 border-border transition-all">
                  Registry Node
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost" 
                className="text-foreground font-black text-[11px] uppercase tracking-[0.2em] px-8 h-12 hover:bg-muted rounded-[2rem] border-2 border-border transition-all"
              >
                Access
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-primary-foreground hover:opacity-90 font-black text-[11px] uppercase tracking-[0.2em] h-12 px-10 rounded-[7%] shadow-lg border-2 border-white/10 flex items-center gap-3 active:scale-95 transition-all"
              >
                <div className="bg-white/20 p-1.5 rounded-full"><Search className="h-3 w-3 text-white rotate-45" /></div>
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
