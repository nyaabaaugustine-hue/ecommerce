
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Search, User, ShoppingCart, Heart, LayoutGrid, Phone, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  return (
    <header className="w-full flex flex-col sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
              Become a Seller in Ghana
            </span>
            <span className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
              <Phone className="h-3 w-3" /> Support: +233 24 000 0000
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              GHS GH₵ <ChevronDown className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              English <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white border-b py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="flex items-center gap-2 font-headline font-bold text-2xl text-primary shrink-0">
            <Shield className="h-8 w-8 fill-primary/10" />
            <span className="tracking-tighter">Vault<span className="text-foreground">Commerce</span></span>
          </Link>

          <div className="flex-1 max-w-2xl hidden md:flex items-center relative">
            <div className="relative w-full flex">
              <input 
                type="text" 
                placeholder="Search products, services, rentals in Ghana..." 
                className="w-full border-2 border-primary rounded-l-full py-2.5 pl-6 pr-4 text-sm focus:outline-none"
              />
              <Button className="rounded-r-full rounded-l-none h-auto px-6 bg-primary hover:bg-primary/90">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <div className="hidden lg:flex flex-col text-right mr-2">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Akwaaba, Guest</span>
              <Link href="/dashboard" className="text-sm font-bold hover:text-primary transition-colors">Sign In / Join</Link>
            </div>
            <Button variant="ghost" size="icon" className="relative group">
              <Heart className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <Badge className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 flex items-center justify-center bg-primary text-white text-[10px] border-none">0</Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <Badge className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 flex items-center justify-center bg-primary text-white text-[10px] border-none">0</Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b py-2 hidden md:block overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center gap-8 text-sm font-semibold">
          <div className="flex items-center gap-2 text-primary cursor-pointer hover:opacity-80 shrink-0">
            <LayoutGrid className="h-5 w-5" />
            Categories
          </div>
          <nav className="flex items-center gap-8 text-foreground/80 whitespace-nowrap">
            <Link href="/" className="text-primary border-b-2 border-primary pb-1">Home</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/listings?category=Digital" className="hover:text-primary transition-colors">Digital GH</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Shops</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Best Deal</Link>
            <Link href="/listings" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
