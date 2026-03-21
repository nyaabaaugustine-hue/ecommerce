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
  PlusCircle, 
  Menu,
  Briefcase,
  LayoutGrid,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth, useContent, useTheme } from '@/components/providers';
import { useState, useEffect } from 'react';
import { AuthDialog } from '@/components/auth-dialog';

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
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-sm bg-background border-b">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      <div className="container mx-auto px-4 h-20 flex items-center gap-6">
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
          <span className="font-headline font-black text-2xl text-foreground tracking-tighter uppercase hidden lg:block">
            {content.settings.siteName}
          </span>
        </Link>

        {/* SEARCH HUB */}
        <div className="flex-1 flex items-center h-12 bg-muted/50 border border-border group focus-within:border-primary transition-all rounded-sm overflow-hidden">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-border">
            <input 
              placeholder='What are you looking for?' 
              className="w-full bg-transparent outline-none text-foreground text-[13px] font-medium placeholder:text-muted-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-4 flex items-center gap-2 shrink-0 cursor-pointer hover:bg-muted h-full transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold uppercase text-muted-foreground">Accra</span>
            <Search className="h-4 w-4 text-primary ml-2" />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-muted-foreground hover:text-primary">
              {theme === 'cold-white' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          )}
          
          <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all text-[11px] font-black uppercase tracking-widest">
            <LayoutGrid className="h-4 w-4" /> My Ads
          </Link>
          
          <div className="flex items-center gap-4">
            <MessageSquare className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-all" />
            <Bell className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-all" />
          </div>
          
          <div className="h-8 w-[1px] bg-border mx-2" />

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
              className="text-foreground font-black text-[11px] uppercase tracking-widest px-4 hover:bg-muted rounded-none"
            >
              Sign In
            </Button>
          )}

          <Link href="/listings/create">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-black text-[11px] uppercase tracking-[0.1em] h-12 px-8 rounded-[7%] shadow-lg"
            >
              Post Ad
            </Button>
          </Link>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex items-center gap-4">
           {mounted && (
             <button onClick={toggleTheme} className="p-2 text-muted-foreground">
               {theme === 'cold-white' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
             </button>
           )}
           <Link href="/listings/create">
             <Button className="h-10 w-10 p-0 bg-primary text-primary-foreground rounded-[7%]">
               <PlusCircle className="h-5 w-5" />
             </Button>
           </Link>
           <Button variant="ghost" size="icon" className="text-foreground">
             <Menu className="h-6 w-6" />
           </Button>
        </div>
      </div>

      {/* Heritage Accent */}
      <div className="h-[2px] w-full relative overflow-hidden">
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
