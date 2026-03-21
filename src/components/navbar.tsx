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
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import { useAuth, useContent, useTheme } from '@/components/providers';
import { useState, useEffect } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const { theme, setTheme } = useTheme();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'cold-white' ? 'sovereign' : 'cold-white');
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-sm bg-background border-b">
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

        {/* COMBINED SEARCH & LOCATION HUB (THE CLONE CORE) */}
        <div className="hidden lg:flex flex-1 max-w-2xl items-center h-12 border-2 border-muted-foreground/20 rounded-md overflow-hidden bg-muted/30 focus-within:border-primary transition-all">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-muted-foreground/20">
            <input 
              placeholder='Search "Car"' 
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
        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center gap-5 mr-2">
            <Link href="/dashboard" className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-all group">
              <Briefcase className="h-5 w-5" />
              <span className="text-[9px] font-black uppercase tracking-tighter">Professional Plan</span>
            </Link>
            <Link href="/dashboard" className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-all group">
              <LayoutGrid className="h-5 w-5" />
              <span className="text-[9px] font-black uppercase tracking-tighter">My Ads</span>
            </Link>
            <div className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <MessageSquare className="h-5 w-5" />
              <span className="text-[9px] font-black uppercase tracking-tighter">Chat</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-all cursor-pointer group">
              <Bell className="h-5 w-5" />
              <span className="text-[9px] font-black uppercase tracking-tighter">Notifications</span>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-border mx-1 hidden lg:block" />

          {/* THEME TOGGLE */}
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex rounded-full text-muted-foreground hover:text-primary">
              {theme === 'cold-white' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          )}

          {/* AUTH & POST AD */}
          <div className="flex items-center gap-2 md:gap-4">
            {user ? (
              <Link href="/dashboard">
                <div className="h-10 w-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-[7%]">
                  <User className="h-5 w-5 text-primary" />
                </div>
              </Link>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                variant="ghost" 
                className="text-foreground font-black text-[12px] uppercase tracking-widest px-4 hover:bg-muted rounded-md"
              >
                To enter
              </Button>
            )}

            <Link href="/listings/create">
              <Button 
                className="bg-primary text-secondary hover:bg-primary/90 font-black text-[11px] uppercase tracking-[0.1em] h-11 px-6 rounded-full shadow-lg border-2 border-white/10"
              >
                Advertise for free
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Heritage Accent (Optional signature preserved) */}
      <div className="h-[2px] w-full relative overflow-hidden opacity-30">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Heritage Stripe" 
          fill 
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}
