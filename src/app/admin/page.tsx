
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingBag, 
  ShieldAlert, 
  BarChart3, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Activity
} from "lucide-react";
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Line, LineChart as ReLineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { LISTINGS, VENDORS, MOCK_USERS } from "@/lib/mock-data";

const chartData = [
  { month: "Jan", volume: 450000 },
  { month: "Feb", volume: 620000 },
  { month: "Mar", volume: 580000 },
  { month: "Apr", volume: 890000 },
  { month: "May", volume: 1200000 },
  { month: "Jun", volume: 1450000 },
];

const chartConfig = {
  volume: {
    label: "Registry Liquidity",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function AdminDashboard() {
  const stats = [
    { label: "Total Registry Volume", val: "GH₵4.2M", icon: TrendingUp, change: "+12.4%", status: "up" },
    { label: "Active Escrow Locks", val: "142", icon: Lock, change: "+5", status: "up" },
    { label: "Verified Vendors", val: VENDORS.length.toString(), icon: ShieldCheck, change: "Stable", status: "neutral" },
    { label: "Total Global Users", val: "1,248", icon: Users, change: "+24", status: "up" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-secondary uppercase tracking-tighter">Sovereign Control</h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Platform-wide oversight and registry management node.</p>
        </div>
        <div className="flex items-center gap-3">
           <Badge className="bg-primary text-secondary rounded-none font-black text-[9px] px-3 h-8 uppercase tracking-widest">Global Master</Badge>
           <div className="bg-white border p-2 rounded-none flex items-center gap-2 shadow-sm">
              <Activity className="h-4 w-4 text-green-500" />
              <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Real-time Feed Active</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="rounded-none border shadow-sm bg-white border-l-4 border-l-primary group hover:border-l-accent transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-muted p-3 group-hover:bg-primary/5 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge className={`rounded-none text-[8px] font-black tracking-widest border-none ${stat.status === 'up' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                  {stat.change}
                </Badge>
              </div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-secondary tracking-tight">{stat.val}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-none border shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Registry Liquidity Velocity
            </CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase">Aggregated GHS flow through the platform escrow node.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ReLineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 900 }} 
                  className="uppercase tracking-widest"
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 900 }}
                  tickFormatter={(val) => `GH₵${val / 1000}k`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: "hsl(var(--primary))" }} 
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </ReLineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="rounded-none border shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-burgundy" />
              Active Protocol Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { id: 'ALT-881', type: 'SLA Warning', text: 'Melcom Digital Hub SLA @ 42h (Order 8815)', time: '14m ago', status: 'warning' },
              { id: 'ALT-882', type: 'High Volume', text: 'Transaction GH₵45k authorized for Cantonments Villa', time: '1h ago', status: 'info' },
              { id: 'ALT-883', type: 'Dispute Node', text: 'User @ YawMensah initiated mediation for "MacBook M3"', time: '2h ago', status: 'danger' },
            ].map((alert, i) => (
              <div key={i} className="flex gap-4 p-4 bg-muted/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
                <div className={`h-2 w-2 rounded-full mt-1 shrink-0 ${alert.status === 'danger' ? 'bg-burgundy animate-pulse' : alert.status === 'warning' ? 'bg-orange-500' : 'bg-primary'}`} />
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[8px] font-black uppercase text-primary tracking-widest">{alert.type}</p>
                    <span className="text-[8px] text-muted-foreground uppercase font-bold">{alert.time}</span>
                  </div>
                  <p className="text-[10px] font-bold text-secondary uppercase leading-snug">{alert.text}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Card className="rounded-none border shadow-sm bg-secondary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8">
              <Globe className="h-20 w-20 text-primary opacity-5" />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-xs font-black uppercase tracking-[0.3em] text-primary">Regional Protocol Node</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
               <div>
                  <p className="text-3xl font-black tracking-tighter mb-1">ACCRA-GHS-01</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Primary settlement liquidity pool active</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 border border-white/10">
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Total Locked</p>
                    <p className="font-black text-xl text-milky">GH₵1.8M</p>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10">
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Authorization</p>
                    <p className="font-black text-xl text-primary">Sovereign</p>
                  </div>
               </div>
            </CardContent>
         </Card>

         <Card className="rounded-none border shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest">Recent Node Activity</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                 {[1, 2, 3, 4].map((n) => (
                   <div key={n} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-muted flex items-center justify-center">
                           <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-secondary uppercase tracking-tight">Registry Update Node {n}</p>
                           <p className="text-[8px] text-muted-foreground uppercase font-bold">Protocol sync success</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="rounded-none text-[7px] font-black px-2 uppercase border-primary/20 text-primary bg-primary/5">SYNCED</Badge>
                   </div>
                 ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
