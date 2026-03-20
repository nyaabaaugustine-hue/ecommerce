
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Store, 
  ShieldCheck, 
  Settings, 
  History, 
  Database,
  Lock,
  Zap,
  ChevronRight,
  LogOut,
  ExternalLink,
  PlusCircle,
  FileText,
  AlertTriangle,
  Monitor
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const NAV_MAIN = [
  {
    title: "Command Center",
    url: "/admin",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Registry Assets",
    url: "/admin/listings",
    icon: ShoppingBag,
    items: [
      { title: "All Listings", url: "/admin/listings" },
      { title: "Pending Approval", url: "/admin/listings?status=pending" },
      { title: "Add New Asset", url: "/listings/create" },
    ],
  },
  {
    title: "Institutional Nodes",
    url: "/admin/vendors",
    icon: Store,
    items: [
      { title: "Verified Vendors", url: "/admin/vendors" },
      { title: "Registry Applications", url: "/admin/vendors/applications" },
      { title: "Fidelity Scores", url: "/admin/vendors/scores" },
    ],
  },
  {
    title: "Global Identity",
    url: "/admin/users",
    icon: Users,
    items: [
      { title: "All Accounts", url: "/admin/users" },
      { title: "Access Groups", url: "/admin/users/roles" },
      { title: "Sovereign Auth", url: "/admin/users/auth" },
    ],
  },
  {
    title: "Sovereign Protocol",
    url: "/admin/settings",
    icon: Settings,
    items: [
      { title: "Global Settings", url: "/admin/settings" },
      { title: "Escrow Fees", url: "/admin/settings/escrow" },
      { title: "Registry Themes", url: "/admin/settings/themes" },
    ],
  },
];

const NAV_SECONDARY = [
  { title: "Content Node", url: "/admin/settings?tab=content", icon: Monitor },
  { title: "Audit Trails", url: "/admin/audit", icon: History },
  { title: "Security Logs", url: "/admin/security", icon: Lock },
  { title: "Dispute Center", url: "/admin/disputes", icon: AlertTriangle },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-primary/20 bg-secondary text-white">
      <SidebarHeader className="p-4 bg-secondary">
        <Link href="/" className="flex items-center gap-3 group px-1">
          <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/30 shrink-0">
            <Image 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
              alt="VaultCommerce" 
              fill 
              className="object-cover"
            />
          </div>
          {state !== "collapsed" && (
            <div className="flex flex-col overflow-hidden">
               <span className="font-black text-sm uppercase tracking-tighter text-white truncate">
                  <span className="text-primary animate-v-glow">V</span>ault<span className="text-primary">Admin</span>
               </span>
               <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em] truncate">Sovereign Backend</span>
            </div>
          )}
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="bg-secondary px-2 py-4">
        <SidebarMenu>
          {NAV_MAIN.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                tooltip={item.title} 
                className={pathname.startsWith(item.url) ? "bg-primary text-secondary" : "hover:bg-primary/10 text-white/70 hover:text-white"}
                asChild
              >
                <Link href={item.url} className="flex items-center gap-3">
                  <item.icon className={`h-4 w-4 ${pathname.startsWith(item.url) ? 'text-secondary' : 'text-primary'}`} />
                  <span className="font-black text-[10px] uppercase tracking-widest">{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items && state !== "collapsed" && (
                <SidebarMenuSub className="border-l border-primary/20 ml-5 mt-1 space-y-1">
                  {item.items.map((sub) => (
                    <SidebarMenuSubItem key={sub.title}>
                      <SidebarMenuSubButton 
                        asChild 
                        className={pathname === sub.url ? "text-primary font-black" : "text-white/40 hover:text-white"}
                      >
                        <Link href={sub.url} className="text-[9px] uppercase tracking-widest font-bold flex items-center justify-between group/sub">
                          {sub.title}
                          <ChevronRight className="h-2 w-2 opacity-0 group-hover/sub:opacity-100 transition-all text-primary" />
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="mt-8 px-4 py-2">
           <p className="text-[7px] font-black text-primary uppercase tracking-[0.3em] mb-4">Internal Protocols</p>
           <SidebarMenu>
              {NAV_SECONDARY.map((item) => (
                <SidebarMenuItem key={item.title}>
                   <SidebarMenuButton 
                    tooltip={item.title}
                    className="hover:bg-primary/5 text-white/50 hover:text-white"
                    asChild
                   >
                     <Link href={item.url} className="flex items-center gap-3">
                       <item.icon className="h-3.5 w-3.5 text-primary" />
                       <span className="text-[9px] font-black uppercase tracking-widest">{item.title}</span>
                     </Link>
                   </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
           </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/5 bg-secondary">
         <div className="space-y-4">
           {state !== "collapsed" && (
              <div className="bg-white/5 p-3 border border-white/10 rounded-none mb-4">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-white/50 tracking-widest">Protocol Node Online</span>
                 </div>
                 <p className="text-[7px] font-bold text-white/30 uppercase leading-relaxed">High Admin authorized for registry modification and fund release.</p>
              </div>
           )}
           <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-primary/10 text-white/70 hover:text-white" asChild>
                  <Link href="/dashboard" className="flex items-center gap-3">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Exit to Registry</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-burgundy hover:bg-burgundy/10 hover:text-burgundy" asChild>
                   <Link href="/" className="flex items-center gap-3">
                     <LogOut className="h-4 w-4" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Terminate Console</span>
                   </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
           </SidebarMenu>
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
