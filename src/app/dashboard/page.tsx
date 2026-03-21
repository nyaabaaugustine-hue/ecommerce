
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Shield, 
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
  Home
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { VENDORS } from '@/lib/mock-data';
import { useAuth, useCart, useCurrency } from '@/components/providers';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart as ReLineChart, XAxis, YAxis, CartesianGrid } from "recharts";

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
    label: "Registry Volume",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const currentRole = user?.role || 'CUSTOMER';
  
  const [activeTransactions] = useState([
    {
      id: 'ORDER-8821',
      item: 'MacBook Pro M3 Max',
      role: 'Seller',
      amount: 8450,
      status: 'In Escrow',
      progress: 65,
      date: 'Oct 24, 2023',
      buyer: 'Yaw Mensah',
      vendorLogo: VENDORS[0].logoUrl,
      action: 'Awaiting Delivery',
      timer: '32h 15m'
    },
    {
      id: 'ORDER-8815',
      item: 'Samsung 65" QLED TV',
      role: 'Buyer',
      amount: 8500,
      status: 'Verification Pending',
      progress: 90,
      date: 'Oct 22, 2023',
      seller: 'Melcom Hub',
      vendorLogo: VENDORS[0].logoUrl,
      action: 'Confirm Delivery',
      timer: '12h 04m'
    }
  ]);

  const stats = {
    HIGH_ADMIN: [
      { label: 'Platform GMV', val: 'GH₵4.2M', icon: BarChart3, color: 'text-primary', sub: 'Gross Sales Volume' },
      { label: 'Pending Payouts', val: '5', icon: Key, color: 'text-primary', sub: 'Awaiting Authorization' },
      { label: 'Verified Partners', val: '124', icon: Users, color: 'text-primary', sub: 'Trusted Institutional Vendors' },
      { label: 'Escrow Balance', val: 'GH₵1.8M', icon: Lock, color: 'text-primary', sub: 'Total Secure Liquidity' },
    ],
    VENDOR_ADMIN: [
      { label: 'Total Revenue', val: 'GH₵186,750', icon: TrendingUp, color: 'text-primary', sub: 'Settled to date' },
      { label: 'Active Escrows', val: '12', icon: Shield, color: 'text-primary', sub: 'Funds pending release' },
      { label: 'Trust Rating', val: '4.9/5', icon: CheckCircle, color: 'text-primary', sub: 'Customer Score' },
      { label: 'Ready for Payout', val: 'GH₵42,100', icon: Wallet, color: 'text-primary', sub: 'Available for settlement' },
    ],
    VENDOR_STAFF: [
      { label: 'Active Orders', val: '14', icon: ClipboardCheck, color: 'text-primary', sub: 'Pending Processing' },
      { label: 'In Transit', val: '22', icon: Truck, color: 'text-primary', sub: 'Active Deliveries' },
      { label: 'Support Tickets', val: '4', icon: MessageSquare, color: 'text-primary', sub: 'Customer Queries' },
      { label: 'On-Time Rate', val: '98%', icon: CheckCircle, color: 'text-primary', sub: 'SLA Compliance' },
    ],
    CUSTOMER: [
      { label: 'Secure Funds', val: 'GH₵8,500', icon: Lock, color: 'text-primary', sub: 'Pending in Escrow' },
      { label: 'Total Spent', val: 'GH₵124,735', icon: CreditCard, color: 'text-primary', sub: 'Lifetime Expenditure' },
      { label: 'Reward Points', val: '1,240', icon: Cpu, color: 'text-primary', sub: 'Loyalty Rewards' },
      { label: 'Active Orders', val: '2', icon: Clock, color: 'text-primary', sub: 'Awaiting Fulfillment' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-black text-secondary tracking-tighter uppercase">
              {currentRole === 'HIGH_ADMIN' ? 'Platform Command' : 'Account Console'}
            </h1>
            <Badge className="bg-primary text-secondary border-none font-bold uppercase text-[9px] tracking-widest rounded-[var(--radius)] px-3">
              {currentRole.replace('_', ' ')}
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:flex items-center gap-3 w-full lg:w-auto">
          <Button 
            variant="outline"
            onClick={() => router.push('/')}
            className="border-2 border-primary text-secondary hover:bg-primary hover:text-white rounded-[var(--radius)] px-6 font-black h-11 gap-2 text-[10px] uppercase tracking-widest"
          >
            <Home className="h-4 w-4" />
            Go to Home
          </Button>
          
          {currentRole === 'HIGH_ADMIN' && (
             <Button 
               onClick={() => router.push('/admin')}
               className="bg-secondary text-white hover:bg-secondary/90 rounded-[var(--radius)] px-6 font-black h-11 gap-2 shadow-lg text-[10px] uppercase tracking-widest"
             >
               <Terminal className="h-4 w-4 text-primary" />
               Admin Console
             </Button>
          )}
          <Button className="bg-secondary hover:bg-secondary/90 rounded-[var(--radius)] px-6 font-bold h-11 text-white text-[10px] uppercase tracking-widest" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all rounded-[var(--radius)] bg-white border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-muted rounded-[var(--radius)]">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <Activity className="h-3 w-3 text-green-500" />
              </div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-black text-secondary mb-2 tracking-tight">{stat.val}</p>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-12 rounded-[var(--radius)] border shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
            <LineChart className="h-4 w-4 text-primary" />
            Institutional Velocity Registry
          </CardTitle>
          <CardDescription className="text-[10px] font-bold uppercase mt-1">Real-time liquidity and transaction flow analysis.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ReLineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900 }} className="uppercase tracking-widest" />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="volume" stroke="hsl(var(--primary))" strokeWidth={4} dot={{ r: 4, fill: "hsl(var(--primary))" }} activeDot={{ r: 8, strokeWidth: 0 }} />
            </ReLineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-black uppercase tracking-widest text-secondary">Active Protocol Nodes</h2>
          {activeTransactions.map((tx) => (
            <Card key={tx.id} className="border shadow-sm rounded-[var(--radius)] group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
                  <div className="flex gap-6">
                    <div className="relative h-16 w-16 bg-white border shrink-0 rounded-[var(--radius)] overflow-hidden">
                      <Avatar className="h-full w-full rounded-none">
                        <AvatarImage src={tx.vendorLogo} alt={tx.item} className="object-contain p-2" />
                        <AvatarFallback className="bg-muted font-bold">{tx.item.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-primary text-secondary text-[8px] font-black px-2 rounded-none">{tx.id}</Badge>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{tx.date}</span>
                      </div>
                      <h4 className="font-black text-secondary text-xl tracking-tighter uppercase mb-2">{tx.item}</h4>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="text-2xl font-black text-burgundy tracking-tighter">GH₵{tx.amount.toLocaleString()}</div>
                    <Badge className="bg-secondary text-white font-black uppercase text-[8px] tracking-widest px-3 py-1 rounded-none">{tx.status}</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>Fulfillment Cycle</span>
                    <span className="text-secondary">{tx.progress}% Synchronized</span>
                  </div>
                  <Progress value={tx.progress} className="h-2 rounded-none" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-dashed gap-4">
                  <div className="flex items-center gap-3">
                     <Activity className="h-4 w-4 text-primary" />
                     <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Mediation Node Active</p>
                  </div>
                  
                  <Button 
                    onClick={() => router.push(`/orders/${tx.id}`)}
                    className="w-full sm:w-auto bg-secondary text-white hover:bg-primary hover:text-secondary font-black rounded-[var(--radius)] px-8 h-12 text-[10px] uppercase tracking-[0.2em] shadow-xl"
                  >
                    Manage Lifecycle Node
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="rounded-[var(--radius)] border shadow-sm p-6 hover:border-primary transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-[var(--radius)]"><FileText className="h-5 w-5 text-primary" /></div>
              <div>
                <h5 className="font-black text-secondary text-xs uppercase tracking-widest">Fidelity Reports</h5>
                <p className="text-[10px] text-muted-foreground uppercase">Export transaction audit trails.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-[var(--radius)] font-bold text-[9px] uppercase tracking-widest">Download PDF</Button>
          </Card>
          <Card className="rounded-[var(--radius)] border shadow-sm p-6 hover:border-primary transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-[var(--radius)]"><MessageSquare className="h-5 w-5 text-primary" /></div>
              <div>
                <h5 className="font-black text-secondary text-xs uppercase tracking-widest">Protocol Support</h5>
                <p className="text-[10px] text-muted-foreground uppercase">Connect with mediation node.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-[var(--radius)] font-bold text-[9px] uppercase tracking-widest">Open Session</Button>
          </Card>
          <Card className="rounded-[var(--radius)] border shadow-sm p-6 hover:border-primary transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-[var(--radius)]"><ArrowRightLeft className="h-5 w-5 text-primary" /></div>
              <div>
                <h5 className="font-black text-secondary text-xs uppercase tracking-widest">GHS Settlements</h5>
                <p className="text-[10px] text-muted-foreground uppercase">Manage bank node connections.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-[var(--radius)] font-bold text-[9px] uppercase tracking-widest">Manage Accounts</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
