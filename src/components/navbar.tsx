"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  MapPin, 
  MessageSquare, 
  Bell, 
  User, 
  Briefcase,
  LayoutGrid,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useAuth, useContent } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';

/**
 * @fileOverview Master Header Command Hub
 * Exact 1:1 structural clone of the OLX header interaction logic.
 * Integrated Dual-Node search, utility icon registry, and Advertise action.
 */
export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-background border-b sticky top-0 z-50 shadow-sm">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* LOGO NODE */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/30 p-1 bg-white">
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

        {/* INTEGRATED SEARCH & LOCATION HUB */}
        <div className="hidden lg:flex flex-1 max-w-2xl items-center h-12 border-2 border-muted-foreground/20 rounded-md overflow-hidden bg-muted/10 focus-within:border-primary transition-all">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-muted-foreground/20">
            <input 
              placeholder='Buscar "C"' 
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
          <button className="h-full px-5 bg-transparent hover:bg-primary/10 transition-colors">
            <Search className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* UTILITY ACTIONS ROW */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden xl:flex items-center gap-5">
            <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group">
              <Briefcase className="h-5 w-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">Professional Plan</span>
            </Link>
            <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group">
              <LayoutGrid className="h-5 w-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">My Ads</span>
            </Link>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <MessageSquare className="h-5 w-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">Chat</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <Bell className="h-5 w-5" />
              <span className="text-[11px] font-bold uppercase tracking-tight">Notifications</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <Link href="/dashboard">
                <Button variant="ghost" className="text-foreground font-black text-[12px] uppercase tracking-widest px-4 hover:bg-muted rounded-md">
                  Account
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost" 
                className="text-foreground font-black text-[12px] uppercase tracking-widest px-6 h-12 hover:bg-muted rounded-[2rem] border border-muted-foreground/20"
              >
                To enter
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-secondary hover:bg-primary/90 font-black text-[11px] uppercase tracking-[0.1em] h-12 px-8 rounded-[2rem] shadow-lg border-2 border-white/10 flex items-center gap-2"
              >
                <div className="bg-white/20 p-1 rounded-full"><Search className="h-3 w-3 text-white rotate-45" /></div>
                Advertise for free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
