
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Shield, 
  ShieldCheck,
  Clock, 
  CheckCircle, 
  Wallet, 
  CreditCard, 
  Users, 
  BarChart3, 
  ClipboardCheck, 
  LogOut, 
  Truck, 
  MessageSquare, 
  Activity, 
  Lock, 
  ChevronRight, 
  TrendingUp, 
  Cpu, 
  ArrowRightLeft, 
  Key, 
  FileText, 
  LineChart, 
  Terminal,
  ShoppingBag,
  Home,
  AlertTriangle,
  Timer
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { VENDORS } from '@/lib/mock-data';
import { useAuth, useCurrency } from '@/components/providers';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart as ReLineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { cn } from '@/lib/utils';

const chartData = [
  { month: "Jan", volume: 1200 },
  { month: "Feb", volume: 2100 },
  { month: "Mar", volume: 1800 },
  { month: "Apr", volume: 3400 },
  { month: "May", volume: 4200 },
  { month: "Jun", volume: 5100 },
];

const chartConfig = {
  volume: {
    label: "Marketplace Sales",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { formatPrice } = useCurrency();
  const currentRole = user?.role || 'CUSTOMER';
  
  const [activeTransactions] = useState([
    {
      id: 'ORDER-8821',
      item: 'MacBook Pro M3 Max',
      amount: 8450,
      status: 'Escrow Secured',
      progress: 65,
      date: 'Oct 24, 2023',
      vendor: 'Melcom Digital',
      action: 'Awaiting Delivery',
      slaTimer: '32:15:00',
      type: 'BUY'
    },
    {
      id: 'ORDER-8815',
      item: 'Samsung 65" QLED TV',
      amount: 12500,
      status: 'Inspection Required',
      progress: 90,
      date: 'Oct 22, 2023',
      vendor: 'Melcom Digital',
      action: 'Approve Release',
      slaTimer: 'Expired',
      type: 'BUY'
    }
  ]);

  const stats = {
    HIGH_ADMIN: [
      { label: 'Total Sales', val: 'GH₵4.2M', icon: BarChart3, sub: 'Locked in Escrow' },
      { label: 'Pending Approvals', val: '5', icon: Key, sub: 'High-Value Orders' },
      { label: 'Verified Sellers', val: '124', icon: Users, sub: 'Active Businesses' },
      { label: 'System Health', val: '99.8%', icon: Activity, sub: 'Stable' },
    ],
    VENDOR_ADMIN: [
      { label: 'Total Revenue', val: 'GH₵186,750', icon: TrendingUp, sub: 'Paid Out' },
      { label: 'Escrow Volume', val: '12', icon: Shield, sub: 'Orders in Transit' },
      { label: 'Trust Rating', val: '98%', icon: CheckCircle, sub: 'Performance' },
      { label: 'Available Balance', val: 'GH₵42,100', icon: Wallet, sub: 'Ready for Payout' },
    ],
    VENDOR_STAFF: [
      { label: 'To Dispatch', val: '14', icon: ClipboardCheck, sub: 'Active Orders' },
      { label: 'Couriers', val: '22', icon: Truck, sub: 'Verified Drivers' },
      { label: 'Support Cases', val: '4', icon: MessageSquare, sub: 'Open Disputes' },
      { label: 'On-time Rate', val: '98%', icon: CheckCircle, sub: 'SLA Status' },
    ],
    CUSTOMER: [
      { label: 'Escrow Balance', val: 'GH₵20,950', icon: Lock, sub: 'Funds Held Safely' },
      { label: 'Reward Points', val: '1,240', icon: Cpu, sub: 'Loyalty Program' },
      { label: 'Active Orders', val: '2', icon: ShoppingBag, sub: 'In Progress' },
      { label: 'Trust Level', val: 'A+', icon: Shield, sub: 'Verified User' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl bg-background transition-colors duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary text-primary-foreground border-none font-black uppercase text-[9px] tracking-widest rounded-none px-4 py-1.5 shadow-xl">
              {currentRole.replace('_', ' ')} DASHBOARD
            </Badge>
            <div className="flex items-center gap-2">
               <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-black text-foreground uppercase tracking-[0.3em]">SECURE SYSTEM ACTIVE</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-none">
            {currentRole === 'HIGH_ADMIN' ? 'Admin' : 'My Account'} <br /> <span className="text-primary">Dashboard</span>
          </h1>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <Button 
            variant="outline"
            onClick={() => router.push('/')}
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-none px-10 font-black h-14 gap-3 text-[10px] uppercase tracking-widest"
          >
            <Home className="h-4 w-4" /> Go to Home
          </Button>
          
          {currentRole === 'HIGH_ADMIN' && (
             <Button 
               onClick={() => router.push('/admin')}
               className="bg-foreground text-background hover:opacity-90 rounded-none px-10 h-14 gap-3 shadow-2xl text-[10px] font-black uppercase tracking-widest"
             >
               <Terminal className="h-4 w-4 text-primary" /> Admin Panel
             </Button>
          )}
          <Button 
            onClick={logout}
            className="bg-destructive text-destructive-foreground hover:opacity-90 rounded-none px-10 h-14 font-black text-[10px] uppercase tracking-widest shadow-xl"
          >
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-2xl transition-all rounded-none bg-card border-l-4 border-l-primary group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-muted rounded-none group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <Activity className="h-4 w-4 text-green-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-foreground mb-2 tracking-tighter">{stat.val}</p>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <Card className="rounded-none border shadow-sm bg-card overflow-hidden">
            <CardHeader className="bg-muted/30 border-b p-8">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2 text-foreground">
                    <LineChart className="h-5 w-5 text-primary" />
                    Sales Analysis
                  </CardTitle>
                  <CardDescription className="text-[10px] font-bold uppercase mt-1 text-muted-foreground">Historical volume across the marketplace.</CardDescription>
                </div>
                <Badge variant="outline" className="rounded-none border-primary/20 text-primary text-[8px] font-black tracking-widest">LIVE DATA</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 h-[350px]">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ReLineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: "hsl(var(--muted-foreground))" }} className="uppercase tracking-widest" />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: "hsl(var(--muted-foreground))" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="volume" stroke="hsl(var(--primary))" strokeWidth={5} dot={{ r: 5, fill: "hsl(var(--primary))" }} activeDot={{ r: 10, strokeWidth: 0 }} />
                </ReLineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" /> Active Orders
            </h2>
            <div className="grid gap-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="border shadow-sm rounded-none group hover:border-primary/40 transition-all bg-card overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                      <div className="flex gap-8">
                        <div className="h-20 w-20 bg-muted flex items-center justify-center shrink-0 border border-border shadow-inner">
                          <ShoppingBag className="h-10 w-10 text-primary opacity-40" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 mb-1">
                            <Badge className="bg-primary text-primary-foreground text-[9px] font-black px-3 py-1 rounded-none shadow-lg">{tx.id}</Badge>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{tx.date}</span>
                          </div>
                          <h4 className="font-black text-foreground text-2xl tracking-tighter uppercase leading-none">{tx.item}</h4>
                          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{tx.vendor}</p>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-3">
                        <div className="text-3xl font-black text-foreground tracking-tighter">{formatPrice(tx.amount)}</div>
                        <div className="flex items-center gap-2">
                           <Lock className="h-3 w-3 text-primary" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{tx.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 items-center">
                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>Delivery Progress</span>
                          <span className="text-primary">{tx.progress}% Verified</span>
                        </div>
                        <Progress value={tx.progress} className="h-2 rounded-none bg-muted" />
                      </div>
                      <div className="bg-muted/30 p-4 border border-dashed flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Timer className="h-5 w-5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Delivery Window</span>
                         </div>
                         <span className={cn("text-lg font-black tracking-tighter", tx.slaTimer === 'Expired' ? 'text-destructive' : 'text-foreground')}>
                            {tx.slaTimer}
                         </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-dashed gap-6">
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-primary">
                            <ShieldCheck className="h-5 w-5" />
                         </div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground max-w-xs">
                            Secure payment held by our Accra office. Fully protected until approval.
                         </p>
                      </div>
                      
                      <Button 
                        onClick={() => router.push(`/orders/${tx.id}`)}
                        className="w-full sm:w-auto bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black rounded-none px-12 h-14 text-[11px] uppercase tracking-[0.3em] shadow-2xl transition-all"
                      >
                        {tx.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card className="rounded-none border shadow-sm p-8 bg-card hover:border-primary transition-all group">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-muted group-hover:bg-primary/10 rounded-none transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-black text-foreground text-sm uppercase tracking-widest leading-none mb-1">Sales Audit</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Download statements.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-none h-12 border-2 font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-primary-foreground shadow-xl transition-all">
              Download PDF
            </Button>
          </Card>

          <Card className="rounded-none border shadow-sm p-8 bg-card hover:border-primary transition-all group">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-muted group-hover:bg-primary/10 rounded-none transition-colors">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-black text-foreground text-sm uppercase tracking-widest leading-none mb-1">Support Chat</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Open a dispute.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-none h-12 border-2 font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-primary-foreground shadow-xl transition-all">
              Start Chat
            </Button>
          </Card>

          <Card className="rounded-none border shadow-sm p-8 bg-card hover:border-primary transition-all group">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-muted group-hover:bg-primary/10 rounded-none transition-colors">
                <ArrowRightLeft className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-black text-foreground text-sm uppercase tracking-widest leading-none mb-1">Withdrawals</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Manage payout accounts.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-none h-12 border-2 font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-primary-foreground shadow-xl transition-all">
              Payout Settings
            </Button>
          </Card>

          <Card className="rounded-none bg-primary text-primary-foreground p-10 space-y-6 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12">
                <AlertTriangle className="h-32 w-32 opacity-5 -mr-16 -mt-16" />
             </div>
             <div className="space-y-2 relative z-10">
                <h4 className="text-xl font-black uppercase tracking-tighter">Safety First</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">
                   Never share your login details or pay outside the secure escrow system.
                </p>
             </div>
             <Button className="w-full bg-primary-foreground text-primary font-black rounded-none h-12 uppercase text-[10px] tracking-widest hover:bg-white shadow-xl">
                Safety Guide
             </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
