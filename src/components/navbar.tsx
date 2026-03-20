"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingCart, Heart, LayoutGrid, Phone, ChevronDown, ShieldCheck, Globe } from 'lucide-react';
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
      <div className="bg-secondary text-white py-3 hidden sm:block border-b border-primary/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.25em]">
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
              Institutional Partnership
            </span>
            <span className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
              <Phone className="h-3 w-3" /> Protocol Support: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Globe className="h-3 w-3" /> GHS GH₵ <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white/90 backdrop-blur-xl border-b py-5 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-12">
          <Link href="/" className="flex items-center gap-4 font-headline font-black text-3xl text-secondary shrink-0 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-[1.25rem] border border-primary/30 shadow-2xl group-hover:scale-110 transition-all duration-700">
              <Image 
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                alt="VaultCommerce Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="tracking-tighter">Vault<span className="text-primary">Commerce</span></span>
              <span className="text-[9px] font-black text-secondary/40 tracking-[0.3em] uppercase mt-1">Sovereign Escrow</span>
            </div>
          </Link>

          <div className="flex-1 max-w-3xl hidden md:flex items-center relative">
            <div className="relative w-full flex shadow-2xl shadow-primary/5">
              <input 
                type="text" 
                placeholder="Search the Global Vault Inventory..." 
                className="w-full border-2 border-primary/10 rounded-l-[1.25rem] py-4 pl-8 pr-4 text-sm font-medium focus:border-primary focus:outline-none transition-all bg-muted/30"
              />
              <Button className="rounded-r-[1.25rem] rounded-l-none h-auto px-10 bg-secondary hover:bg-primary hover:text-secondary transition-all shadow-xl">
                <Search className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Audit Verified</span>
              <Link href="/dashboard" className="text-base font-black text-secondary hover:text-primary transition-colors">Vault Entry</Link>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative group rounded-full h-12 w-12 hover:bg-primary/5">
                <Heart className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" className="relative group rounded-full h-12 w-12 hover:bg-primary/5">
                <ShoppingCart className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                <Badge className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 flex items-center justify-center bg-primary text-secondary text-[10px] font-black border-2 border-white shadow-xl">0</Badge>
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 shadow-xl md:hidden h-12 w-12">
                  <User className="h-6 w-6 text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-[2rem] p-3 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border-none mt-4">
                <DropdownMenuItem asChild className="rounded-[1.25rem] p-4 cursor-pointer focus:bg-primary/5">
                  <Link href="/dashboard" className="flex items-center gap-3 font-black text-secondary">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Secure Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="bg-white/50 backdrop-blur-md border-b py-3 hidden md:block overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center justify-between gap-12 text-[11px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3 text-secondary cursor-pointer hover:text-primary shrink-0 bg-primary/10 px-6 py-2.5 rounded-full border border-primary/20 transition-all">
            <LayoutGrid className="h-5 w-5" />
            Global Sectors
          </div>
          <nav className="flex items-center gap-10 text-secondary/60 whitespace-nowrap">
            <Link href="/" className="text-secondary border-b-4 border-primary pb-1">Registry</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Marketplace</Link>
            <Link href="/listings?category=Electronics" className="hover:text-primary transition-colors">Tech Treasury</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Verified Nodes</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Bulk Settlement</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Audit Node</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3 text-primary bg-secondary/5 px-6 py-2.5 rounded-full border border-primary/5">
             <ShieldCheck className="h-5 w-5" />
             <span className="text-secondary font-black">Sovereign Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
