
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
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const { toast } = useToast();
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
    },
    {
      id: 'TX-8790',
      item: 'Advanced React Mentorship',
      role: 'Seller',
      amount: 150,
      status: 'Completed',
      progress: 100,
      date: 'Oct 20, 2023',
      buyer: 'Alice Smith',
      action: 'Funds Released'
    }
  ]);

  const handleConfirm = (id: string) => {
    setActiveTransactions(prev => prev.map(tx => 
      tx.id === id ? { ...tx, status: 'Completed', progress: 100, action: 'Funds Released' } : tx
    ));
    toast({
      title: "Confirmation Successful!",
      description: `Proof of Delivery confirmed for ${id}. Funds are being split via Paystack API.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-headline font-bold text-primary">Command Center</h1>
            <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20 font-bold px-3">
              Verified Merchant
            </Badge>
          </div>
          <p className="text-muted-foreground">Monitor your escrow pipeline and financial settlements.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full shadow-sm">
            <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
            Performance Reports
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-lg px-8">
            Withdraw Funds
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Active Escrow', val: '$4,849.00', icon: Shield, color: 'text-secondary', sub: 'Across 2 transactions' },
          { label: 'Net Earnings', val: '$12,450.00', icon: Wallet, color: 'text-primary', sub: 'After platform fees' },
          { label: 'Platform Trust', val: '4.95', icon: CheckCircle, color: 'text-green-500', sub: 'Top 5% of providers' },
          { label: 'Treasury Split', val: '2.5%', icon: ArrowRightLeft, color: 'text-blue-500', sub: 'Current commission rate' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl bg-muted`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">Stats</Badge>
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
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
                <TabsTrigger value="active" className="rounded-full px-6 data-[state=active]:bg-white">Active Vaults</TabsTrigger>
                <TabsTrigger value="payouts" className="rounded-full px-6 data-[state=active]:bg-white">Payout History</TabsTrigger>
                <TabsTrigger value="notifications" className="rounded-full px-6 data-[state=active]:bg-white">Alerts</TabsTrigger>
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
                              {tx.role}
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
                      <p className="text-[11px] text-muted-foreground italic">
                        {tx.status === 'Completed' ? 'Funds have been disbursed to the respective stakeholders.' : 'Platform is awaiting verification from the buyer to release held funds.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex -space-x-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-muted flex items-center justify-center text-[10px] font-bold">
                            U{i}
                          </div>
                        ))}
                        <div className="h-8 w-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                          VC
                        </div>
                      </div>
                      {tx.action === 'Confirm Delivery' ? (
                        <Button size="sm" onClick={() => handleConfirm(tx.id)} className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6">
                          Verify Completion
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost" disabled className="text-xs font-bold group-hover:text-primary transition-colors">
                          {tx.action}
                          <ChevronRight className="h-4 w-4 ml-1" />
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
                   <h3 className="text-xl font-bold text-primary">Settlement Logic Active</h3>
                   <p className="text-muted-foreground max-w-sm mx-auto">VaultCommerce processes payouts every 24 hours for all verified transactions. Your next payout of <span className="text-primary font-bold">$1,240</span> is scheduled for tomorrow.</p>
                   <Button variant="outline" className="rounded-full">Download Statements</Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-xl bg-primary text-white overflow-hidden relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-20" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                Wallet Overview
              </CardTitle>
              <CardDescription className="text-white/60">Real-time split analytics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">Total Available</span>
                <div className="text-4xl font-headline font-bold">$8,245.50</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowDownLeft className="h-4 w-4 text-secondary" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Inflow</span>
                  </div>
                  <div className="font-bold text-lg">+$1,450</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowUpRight className="h-4 w-4 text-red-400" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Treasury Fee</span>
                  </div>
                  <div className="font-bold text-lg">-$36.25</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/60 italic">Processing via Paystack API</span>
                <ExternalLink className="h-3 w-3 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-secondary" />
                Dispute Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                No active disputes found. Our escrow logic ensures 99.8% of transactions are completed without intervention.
              </p>
              <Button variant="outline" className="w-full rounded-full text-xs font-bold h-10">
                Contact Mediator
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/20 border-dashed">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-secondary shrink-0" />
              <div>
                <h5 className="font-bold text-primary text-sm mb-1">Vault Protection</h5>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  Your funds are secured in a tiered escrow structure. Releasing funds to providers is legally binding and irreversible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
