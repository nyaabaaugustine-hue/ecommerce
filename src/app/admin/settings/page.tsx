
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  Image as ImageIcon, 
  Settings2, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Globe, 
  Lock, 
  AlertTriangle,
  RefreshCw,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function ProtocolSettings() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Protocol Registry Updated",
        description: "Institutional settings have been synchronized across all nodes.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-secondary uppercase tracking-tighter">Protocol Management</h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Configure global registry assets and institutional parameters.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-primary text-secondary font-black rounded-none px-8 h-12 uppercase text-[10px] tracking-widest gap-2 shadow-xl">
          {isSaving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Synchronize Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white border p-1 rounded-none w-full md:w-auto overflow-x-auto no-scrollbar">
          <TabsTrigger value="general" className="rounded-none px-6 py-2 text-[9px] font-black uppercase tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">General Node</TabsTrigger>
          <TabsTrigger value="content" className="rounded-none px-6 py-2 text-[9px] font-black uppercase tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">Hero Registry</TabsTrigger>
          <TabsTrigger value="categories" className="rounded-none px-6 py-2 text-[9px] font-black uppercase tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">Market Sectors</TabsTrigger>
          <TabsTrigger value="finance" className="rounded-none px-6 py-2 text-[9px] font-black uppercase tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">Fee Protocol</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="rounded-none border shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Support Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Global Support Hotline</label>
                  <Input defaultValue="+233 24 000 0000" className="rounded-none border-2 focus:border-primary font-bold" />
                </div>
                <div className="grid gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Institutional Email Node</label>
                  <Input defaultValue="support@vaultcommerce.gh" className="rounded-none border-2 focus:border-primary font-bold" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Marketplace Metadata
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Platform Title</label>
                  <Input defaultValue="VaultCommerce | The Gold Standard" className="rounded-none border-2 focus:border-primary font-bold" />
                </div>
                <div className="grid gap-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Sovereign Description</label>
                  <Textarea defaultValue="The Gold Standard for secure cross-category trade in Ghana. Institutionally powered by multisig escrow protocols." className="rounded-none border-2 focus:border-primary font-medium min-h-[100px]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="mt-8 space-y-8">
          <Card className="rounded-none border shadow-sm bg-white overflow-hidden">
            <CardHeader className="bg-muted/30 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xs font-black uppercase tracking-[0.2em]">Hero Slide Registry</CardTitle>
                  <CardDescription className="text-[9px] uppercase font-bold mt-1">Manage top-level visual assets and authoritative messaging.</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="rounded-none font-black text-[9px] uppercase tracking-widest gap-2">
                  <Plus className="h-3.5 w-3.5" /> Add Slide
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {[
                { id: 1, title: "Accra's Sovereign Trade Gateway", img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg", badge: "Verified Escrow Protocol" },
                { id: 2, title: "Authentic Secure Gadgets", img: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png", badge: "Premium Electronics" },
              ].map((slide) => (
                <div key={slide.id} className="flex flex-col lg:flex-row gap-8 p-8 border-b last:border-0 hover:bg-muted/10 transition-colors">
                  <div className="relative h-48 w-full lg:w-80 shrink-0 border-2 border-primary/10 overflow-hidden bg-muted group">
                    <Image src={slide.img} alt={slide.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                       <Button size="sm" className="bg-white text-secondary rounded-none font-black text-[9px] uppercase tracking-widest gap-2">
                          <ImageIcon className="h-3 w-3" /> Change Image
                       </Button>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="grid gap-2">
                        <label className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Slide Title</label>
                        <Input defaultValue={slide.title} className="rounded-none border-2 font-black uppercase text-xs" />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Badge Label</label>
                        <Input defaultValue={slide.badge} className="rounded-none border-2 font-black uppercase text-xs" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Supporting Narrative</label>
                      <Textarea defaultValue="Secure your funds in our escrow system and shop with total confidence across Ghana." className="rounded-none border-2 font-medium text-xs h-20" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="mt-8 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Card className="rounded-none border shadow-sm bg-white border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Lock className="h-4 w-4 text-primary" />
                    Escrow Fee Protocol
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Percentage Rate</label>
                    <div className="relative">
                       <Input defaultValue="2.0" className="rounded-none border-2 font-black pr-10" />
                       <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-xs text-primary">%</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/30 border border-dashed rounded-none">
                     <p className="text-[8px] font-bold text-muted-foreground uppercase leading-relaxed">Applied to all consumer-tier transactions within the sovereign registry.</p>
                  </div>
                </CardContent>
             </Card>

             <Card className="rounded-none border shadow-sm bg-white border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Settlement Node
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">SLA Window (Hours)</label>
                    <Input defaultValue="48" className="rounded-none border-2 font-black" />
                  </div>
                  <div className="p-4 bg-muted/30 border border-dashed rounded-none">
                     <p className="text-[8px] font-bold text-muted-foreground uppercase leading-relaxed">Automatic refund protocol triggers after this duration if dispatch is not verified.</p>
                  </div>
                </CardContent>
             </Card>

             <Card className="rounded-none border shadow-sm bg-white border-t-4 border-t-burgundy">
                <CardHeader>
                  <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-burgundy" />
                    Security Threshold
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Auto-Freeze Level (GHS)</label>
                    <Input defaultValue="50000" className="rounded-none border-2 font-black" />
                  </div>
                  <div className="p-4 bg-burgundy/5 border border-burgundy/10 rounded-none">
                     <p className="text-[8px] font-bold text-burgundy uppercase leading-relaxed">Transactions above this value require secondary Multisig authorization.</p>
                  </div>
                </CardContent>
             </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
