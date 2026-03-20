
"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRightLeft, 
  CreditCard, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  AlertCircle,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Settings,
  Users,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { MOCK_USERS, Role } from '@/lib/mock-data';

export default function Dashboard() {
  const { toast } = useToast();
  const [currentRole, setCurrentRole] = useState<Role>('VENDOR');
  
  const [activeTransactions, setActiveTransactions] = useState([
    {
      id: 'TX-8821',
      item: 'MacBook Pro M3 Max',
      role: 'Seller',
      amount: 3499,
      status: 'In Escrow',
      progress: 65,
      date: 'Oct 24, 2023',
      buyer: 'John Doe',
      action: 'Awaiting Delivery'
    },
    {
      id: 'TX-8815',
      item: 'Modern 2-Bedroom Apartment',
      role: 'Buyer',
      amount: 1200,
      status: 'Verification Pending',
      progress: 90,
      date: 'Oct 22, 2023',
      seller: 'PrimeRentals',
      action: 'Confirm Delivery'
    }
  ]);

  const handleConfirm = (id: string) => {
    setActiveTransactions(prev => prev.map(tx => 
      tx.id === id ? { ...tx, status: 'Completed', progress: 100, action: 'Funds Released' } : tx
    ));
    toast({
      title: "Confirmation Successful!",
      description: `Transaction ${id} finalized. Funds disbursed.`,
    });
  };

  const stats = {
    ADMIN: [
      { label: 'Platform Revenue', val: '$45,849.00', icon: BarChart3, color: 'text-primary', sub: 'Gross merchandise value' },
      { label: 'Active Disputes', val: '2', icon: AlertCircle, color: 'text-red-500', sub: 'Awaiting mediation' },
      { label: 'Verified Vendors', val: '124', icon: Users, color: 'text-blue-500', sub: '+12 this month' },
      { label: 'Escrow Volume', val: '$280K', icon: Shield, color: 'text-secondary', sub: 'Total funds in vault' },
    ],
    VENDOR: [
      { label: 'Available Payout', val: '$12,450.00', icon: Wallet, color: 'text-primary', sub: 'Ready for withdrawal' },
      { label: 'Sales Velocity', val: '+24%', icon: TrendingUp, color: 'text-green-500', sub: 'Compared to last month' },
      { label: 'Active Vaults', val: '8', icon: Shield, color: 'text-secondary', sub: 'In-progress escrows' },
      { label: 'Trust Score', val: '4.95', icon: CheckCircle, color: 'text-indigo-500', sub: 'Top 5% of marketplace' },
    ],
    CUSTOMER: [
      { label: 'Secured Funds', val: '$4,849.00', icon: Shield, color: 'text-secondary', sub: 'Held in escrow' },
      { label: 'Total Purchases', val: '15', icon: CreditCard, color: 'text-primary', sub: 'Completed transactions' },
      { label: 'Reward Points', val: '1,240', icon: Wallet, color: 'text-amber-500', sub: 'Redeemable on next buy' },
      { label: 'Active Orders', val: '3', icon: Clock, color: 'text-blue-500', sub: 'Currently in transit' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Role Switcher for Demo */}
      <div className="flex justify-end mb-6 gap-2">
        <span className="text-xs font-bold text-muted-foreground mr-2 self-center">DEMO ROLE:</span>
        {(['ADMIN', 'VENDOR', 'CUSTOMER'] as Role[]).map(role => (
          <Button 
            key={role} 
            size="sm" 
            variant={currentRole === role ? 'default' : 'outline'}
            onClick={() => setCurrentRole(role)}
            className="rounded-full text-[10px] h-7"
          >
            {role}
          </Button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-headline font-bold text-primary">
              {currentRole === 'ADMIN' ? 'Platform Control' : 'Command Center'}
            </h1>
            <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20 font-bold px-3">
              {currentRole === 'ADMIN' ? 'Root Access' : currentRole === 'VENDOR' ? 'Verified Merchant' : 'Preferred Buyer'}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {currentRole === 'ADMIN' 
              ? 'Oversee global marketplace health and financial split logic.' 
              : 'Monitor your escrow pipeline and financial settlements.'}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full shadow-sm">
            <Settings className="h-4 w-4 mr-2" />
            Account Settings
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-lg px-8">
            {currentRole === 'CUSTOMER' ? 'Track Shipments' : 'Withdraw Funds'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl bg-muted`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">Live</Badge>
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-headline font-bold text-primary mb-2">{stat.val}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Tabs defaultValue="active" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-muted/50 p-1 border rounded-full">
                <TabsTrigger value="active" className="rounded-full px-6 data-[state=active]:bg-white">
                  {currentRole === 'ADMIN' ? 'Global Vaults' : 'Active Trades'}
                </TabsTrigger>
                <TabsTrigger value="payouts" className="rounded-full px-6 data-[state=active]:bg-white">Financials</TabsTrigger>
                <TabsTrigger value="logs" className="rounded-full px-6 data-[state=active]:bg-white">Activity</TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">View All</Button>
            </div>

            <TabsContent value="active" className="space-y-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center font-bold text-primary text-xl shrink-0">
                          {tx.item.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-xs text-muted-foreground font-mono">{tx.id}</span>
                            <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              <Shield className="h-3 w-3" />
                              {currentRole === 'ADMIN' ? 'Overseen' : tx.role}
                            </div>
                            <span className="text-xs text-muted-foreground">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${tx.amount.toLocaleString()}</div>
                        <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className="mt-1 font-bold">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <span>Escrow Progress</span>
                        <span>{tx.progress}%</span>
                      </div>
                      <Progress value={tx.progress} className="h-2 bg-muted" />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex -space-x-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-muted flex items-center justify-center text-[10px] font-bold">
                            U{i}
                          </div>
                        ))}
                      </div>
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Button size="sm" onClick={() => handleConfirm(tx.id)} className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6">
                          Verify Delivery
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost" className="text-xs font-bold text-primary">
                          Details <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="payouts">
               <Card className="border-none shadow-sm">
                 <CardContent className="p-12 text-center space-y-4">
                   <div className="bg-muted h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                     <Clock className="h-8 w-8 text-muted-foreground" />
                   </div>
                   <h3 className="text-xl font-bold text-primary">Settlement Intelligence</h3>
                   <p className="text-muted-foreground max-w-sm mx-auto">
                     Automatic split logic is processing. Next settlement scheduled in 14 hours.
                   </p>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-xl bg-primary text-white overflow-hidden relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                Financial Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">Total Assets</span>
                <div className="text-4xl font-headline font-bold">$18,245.50</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold uppercase block mb-1">Inflow</span>
                  <div className="font-bold text-lg">+$2,450</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold uppercase block mb-1">Fees</span>
                  <div className="font-bold text-lg">-$86.25</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {currentRole === 'ADMIN' && (
             <Card className="border-none shadow-sm bg-secondary/5">
                <CardHeader>
                  <CardTitle className="text-base">System Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-xs">
                    <span>Paystack API</span>
                    <span className="text-green-500 font-bold">Operational</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Escrow Locks</span>
                    <span className="text-green-500 font-bold">Active</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Dispute Res.</span>
                    <span className="text-amber-500 font-bold">2 Pending</span>
                  </div>
                </CardContent>
             </Card>
          )}

          <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/20 border-dashed">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-secondary shrink-0" />
              <div>
                <h5 className="font-bold text-primary text-sm mb-1">Vault Protection</h5>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  Your funds are secured in a tiered escrow structure. Releasing funds is legally binding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
