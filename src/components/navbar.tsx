"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Menu, LogOut, PlusCircle, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useAuth, useCart, useContent } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const { content } = useContent();
  const pathname = usePathname();
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-md">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      
      {/* Heritage Accent Strip */}
      <div className="h-1.5 w-full relative overflow-hidden">
        <Image 
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059614/nnn_h9vugd.jpg" 
          alt="Heritage Accent" 
          fill 
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Main Marketplace Navigation */}
      <div className="bg-white border-b py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-secondary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 flex flex-col border-r-4 border-primary">
                <div className="sr-only">
                  <SheetHeader>
                    <SheetTitle>Marketplace Menu</SheetTitle>
                    <SheetDescription>Browse categories and post ads.</SheetDescription>
                  </SheetHeader>
                </div>
                <div className="bg-secondary p-6 text-white space-y-4">
                  <div className="flex items-center gap-3">
                    <Image src={content.settings.logoUrl} alt="Logo" width={32} height={32} />
                    <h2 className="font-black text-xl tracking-tighter uppercase">{content.settings.siteName}</h2>
                  </div>
                  <Badge className="bg-primary text-gold font-black uppercase text-[8px] tracking-[0.2em] rounded-none px-3">Secure Account Center</Badge>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                   <Button 
                     onClick={() => { setShowAuth(true); setIsMobileMenuOpen(false); }}
                     className="w-full bg-accent text-secondary font-black text-xs uppercase tracking-widest h-14 gap-2 rounded-[7%]"
                   >
                     <PlusCircle className="h-5 w-5" /> Post Ad
                   </Button>
                   <nav className="space-y-4">
                      <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Directory</p>
                      <Link href="/listings" className="block font-black uppercase text-secondary text-sm">All Marketplace</Link>
                      <Link href="/vendors" className="block font-black uppercase text-secondary text-sm">Verified Sellers</Link>
                      <Link href="/about" className="block font-black uppercase text-secondary text-sm">Escrow Protection</Link>
                   </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative h-9 w-9 overflow-hidden rounded-none border border-primary/20 shadow-sm">
                <Image src={content.settings.logoUrl} alt="Logo" fill sizes="36px" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl text-secondary tracking-tighter uppercase leading-none">
                  {content.settings.siteName}
                </span>
                <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em] hidden sm:block">Open Marketplace</span>
              </div>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-8">
            <nav className="flex items-center gap-6">
               <Link href="/listings" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">Browse Ads</Link>
               <Link href="/vendors" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">Sellers</Link>
            </nav>

            <div className="flex items-center gap-4">
               {user ? (
                 <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                     <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right flex flex-col">
                           <span className="text-[7px] text-muted-foreground uppercase font-black tracking-widest">My Account</span>
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
                   variant="ghost"
                   className="font-black text-[10px] uppercase tracking-widest px-0 flex items-center gap-2"
                 >
                   <User className="h-4 w-4" />
                   Sign In
                 </Button>
               )}

               <Button 
                 onClick={() => setShowAuth(true)}
                 className="bg-accent text-secondary hover:bg-white font-black text-[10px] uppercase tracking-[0.2em] px-8 h-12 flex items-center gap-2 shadow-lg border border-accent/20 rounded-[7%]"
               >
                 <PlusCircle className="h-5 w-5" />
                 Post Ad
               </Button>
            </div>
          </div>

          {/* Mobile Search/User Short Actions */}
          <div className="flex items-center gap-3 lg:hidden">
             <Button variant="ghost" size="icon" className="h-10 w-10 text-secondary" onClick={() => setShowAuth(true)}>
               <User className="h-5 w-5" />
             </Button>
             <Button 
               onClick={() => setShowAuth(true)}
               className="bg-accent text-secondary font-black text-[10px] uppercase h-10 px-4 rounded-[7%]"
             >
               Post
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}