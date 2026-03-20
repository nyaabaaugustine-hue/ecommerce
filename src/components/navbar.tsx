"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Heart, LayoutGrid, Phone, ChevronDown, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  return (
    <header className="w-full flex flex-col sticky top-0 z-50">
      {/* Utility Bar */}
      <div className="bg-destructive text-white py-2 hidden sm:block border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer transition-opacity">
              Become a Verified Seller
            </span>
            <span className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer transition-opacity">
              <Phone className="h-3 w-3" /> Secure Support: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              GHS GH₵ <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-3 font-headline font-bold text-2xl text-primary shrink-0 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-primary/20 shadow-sm group-hover:scale-105 transition-transform">
              <Image 
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                alt="VaultCommerce Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="tracking-tighter">Vault<span className="text-foreground">Commerce</span></span>
              <span className="text-[8px] font-black text-secondary tracking-[0.2em] uppercase">Escrow Secured</span>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl hidden md:flex items-center relative">
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Search products, services, or rentals in the Vault..." 
                className="w-full border-2 border-primary/10 rounded-l-full py-2.5 pl-6 pr-4 text-sm focus:border-primary focus:outline-none transition-all"
              />
              <Button className="rounded-r-full rounded-l-none h-auto px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="hidden lg:flex flex-col text-right mr-2">
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Identity Verified</span>
              <Link href="/dashboard" className="text-sm font-black hover:text-primary transition-colors">Sign In</Link>
            </div>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="relative group rounded-full">
                <Heart className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" className="relative group rounded-full">
                <ShoppingCart className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <Badge className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 flex items-center justify-center bg-secondary text-white text-[8px] font-black border-none shadow-sm">0</Badge>
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 shadow-sm md:hidden">
                  <User className="h-5 w-5 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl border-none">
                <DropdownMenuItem asChild className="rounded-xl p-3 cursor-pointer">
                  <Link href="/dashboard" className="flex items-center gap-2 font-bold">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="bg-white/50 backdrop-blur-sm border-b py-2 hidden md:block overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8 text-[11px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-2 text-primary cursor-pointer hover:opacity-80 shrink-0 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            <LayoutGrid className="h-4 w-4" />
            Sectors
          </div>
          <nav className="flex items-center gap-8 text-foreground/70 whitespace-nowrap">
            <Link href="/" className="text-primary border-b-2 border-primary pb-1">Home</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Marketplace</Link>
            <Link href="/listings?category=Electronics" className="hover:text-primary transition-colors">Tech Hub</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Verified Shops</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Bulk Orders</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Audit Support</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-2 text-secondary">
             <ShieldCheck className="h-4 w-4" />
             Protocol v1.2 Active
          </div>
        </div>
      </div>
    </header>
  );
}