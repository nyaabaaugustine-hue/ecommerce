"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Cpu, 
  Home, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight,
  Monitor,
  Smartphone,
  Tv,
  Refrigerator,
  Building2,
  Key,
  Briefcase,
  Utensils,
  Armchair,
  Sparkles
} from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SECTORS = [
  {
    title: "Electronics & Tech",
    icon: Cpu,
    items: [
      { name: "Computing & Laptops", href: "/listings?category=Computing %26 Laptops", icon: Monitor },
      { name: "Mobile Ecosystem", href: "/listings?category=Mobile Ecosystem", icon: Smartphone },
      { name: "Sovereign Audio/Visual", href: "/listings?category=Sovereign Audio/Visual", icon: Tv },
      { name: "Institutional Appliances", href: "/listings?category=Institutional Appliances", icon: Refrigerator },
    ]
  },
  {
    title: "Real Estate & Assets",
    icon: Home,
    items: [
      { name: "Commercial Rentals", href: "/listings?category=Commercial Rentals", icon: Building2 },
      { name: "Residential Sales", href: "/listings?category=Residential Sales", icon: Key },
      { name: "Professional Services", href: "/listings?category=Professional Services", icon: Briefcase },
    ]
  },
  {
    title: "Lifestyle & Living",
    icon: ShoppingBag,
    items: [
      { name: "Heritage Furniture", href: "/listings?category=Heritage Furniture", icon: Armchair },
      { name: "Supermarket Registry", href: "/listings?category=Supermarket Registry", icon: Utensils },
      { name: "Beauty & Personal", href: "/listings?category=Beauty %26 Personal", icon: Sparkles },
    ]
  }
];

export function MegaMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-full px-6 flex flex-col items-center rounded-none hover:bg-primary/5 group transition-all">
          <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-black group-hover:text-primary transition-colors">Global Inventory</span>
          <span className="font-black text-secondary group-hover:text-primary transition-colors">Browse Registry</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100vw] max-w-7xl mx-auto p-0 border-x-0 border-t-4 border-t-primary shadow-2xl rounded-none bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Main Sectors */}
          {SECTORS.map((sector, idx) => (
            <div key={idx} className="p-10 border-r last:border-r-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-secondary flex items-center justify-center text-primary">
                  <sector.icon className="h-5 w-5" />
                </div>
                <h3 className="font-black text-secondary uppercase tracking-widest text-sm">{sector.title}</h3>
              </div>
              <ul className="space-y-6">
                {sector.items.map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <item.icon className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                      <span className="text-xs font-bold uppercase tracking-tight">{item.name}</span>
                      <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Institutional Spotlight */}
          <div className="bg-secondary p-10 text-white flex flex-col justify-between">
            <div>
              <Badge className="bg-primary text-secondary font-black rounded-none mb-4 uppercase text-[9px] tracking-widest">Sovereign Spotlight</Badge>
              <h3 className="text-2xl font-black tracking-tighter mb-4 leading-tight">THE ELITE <br /> VENDOR REGISTRY</h3>
              <p className="text-white/50 text-xs font-medium leading-relaxed mb-8">
                Access authentic inventory from verified Ghanaian institutional nodes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="h-8 w-8 bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest">Melcom Digital</p>
                    <p className="text-[8px] text-white/40 uppercase">Verified Node v1.2</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="h-8 w-8 bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest">PrimeRentals GH</p>
                    <p className="text-[8px] text-white/40 uppercase">Asset Registry Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/listings" className="mt-8">
              <Button className="w-full bg-primary text-secondary hover:bg-white font-black rounded-none h-12 uppercase text-[10px] tracking-widest gap-2">
                View Global SLA <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Ticker/Trust Bar */}
        <div className="bg-muted py-4 px-10 flex justify-between items-center border-t">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-none" />
              <span className="text-[9px] font-black text-secondary/60 uppercase tracking-widest">99.4% Settlement Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-none" />
              <span className="text-[9px] font-black text-secondary/60 uppercase tracking-widest">GHS Sovereign Vault Active</span>
            </div>
          </div>
          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Vault Protocol v1.2.4 Licensed Registry
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
