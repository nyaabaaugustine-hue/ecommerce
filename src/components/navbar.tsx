
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
  LayoutGrid
} from 'lucide-react';
import { useAuth, useContent } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { user } = useAuth();
  const { content } = useContent();
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-2xl bg-secondary">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* HEADER TOP LOGIC (IMAGE CLONE) */}
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
          <span className="font-headline font-black text-2xl text-white tracking-tighter uppercase hidden lg:block">
            {content.settings.siteName}
          </span>
        </Link>

        {/* INTEGRATED SEARCH COMMAND (OLX CLONE) */}
        <div className="flex-1 flex items-center h-12 bg-white/5 border border-white/10 group focus-within:border-primary transition-all">
          <div className="flex-1 flex items-center px-4 gap-3 border-r border-white/10">
            <input 
              placeholder='Buscar "C"' 
              className="w-full bg-transparent outline-none text-white text-[13px] font-medium uppercase placeholder:text-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-4 flex items-center gap-2 shrink-0 cursor-pointer hover:bg-white/5 h-full">
            <MapPin className="h-4 w-4 text-primary/60" />
            <span className="text-[11px] font-bold uppercase text-white/60">Accra</span>
            <Search className="h-4 w-4 text-primary ml-2" />
          </div>
        </div>

        {/* ACTION NODES (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/vendors" className="flex items-center gap-2 text-white/60 hover:text-primary transition-all text-[11px] font-black uppercase tracking-widest">
            <Briefcase className="h-4 w-4" /> Professional Plan
          </Link>
          <Link href="/dashboard" className="flex items-center gap-2 text-white/60 hover:text-primary transition-all text-[11px] font-black uppercase tracking-widest">
            <LayoutGrid className="h-4 w-4" /> My Ads
          </Link>
          <div className="flex items-center gap-4">
            <MessageSquare className="h-5 w-5 text-white/40 cursor-pointer hover:text-primary transition-all" />
            <Bell className="h-5 w-5 text-white/40 cursor-pointer hover:text-primary transition-all" />
          </div>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2" />

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
              className="text-white font-black text-[11px] uppercase tracking-widest px-4 hover:bg-primary hover:text-secondary rounded-none"
            >
              To enter
            </Button>
          )}

          <Link href="/listings/create">
            <Button 
              className="bg-primary text-secondary hover:bg-white font-black text-[11px] uppercase tracking-[0.1em] h-12 px-8 rounded-[7%] shadow-xl"
            >
              Advertise for free
            </Button>
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="lg:hidden flex items-center gap-4">
           <Link href="/listings/create">
             <Button className="h-10 w-10 p-0 bg-primary text-secondary rounded-[7%]">
               <PlusCircle className="h-5 w-5" />
             </Button>
           </Link>
           <Button variant="ghost" size="icon" className="text-white">
             <Menu className="h-6 w-6" />
           </Button>
        </div>
      </div>

      {/* CULTURAL ACCENT NODE */}
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
