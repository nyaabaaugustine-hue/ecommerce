
"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
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
  BarChart3,
  PackageCheck,
  ClipboardCheck,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Role, VENDORS } from '@/lib/mock-data';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { toast } = useToast();
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState<Role>('CUSTOMER');
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTxId, setSelectedTxId] = useState<string | null>(null);
  const [checklist, setChecklist] = useState({
    condition: false,
    authenticity: false,
    functionality: false,
    matches: false
  });
  
  const [activeTransactions, setActiveTransactions] = useState([
    {
      id: 'TX-GH-8821',
      item: 'MacBook Pro M3 Max',
      role: 'Seller',
      amount: 52499,
      status: 'In Escrow',
      progress: 65,
      date: 'Oct 24, 2023',
      buyer: 'Yaw Mensah',
      vendorLogo: VENDORS[0].logoUrl,
      action: 'Awaiting Delivery'
    },
    {
      id: 'TX-GH-8815',
      item: 'Modern 2-Bedroom Apartment',
      role: 'Buyer',
      amount: 18000,
      status: 'Verification Pending',
      progress: 90,
      date: 'Oct 22, 2023',
      seller: 'PrimeRentals GH',
      vendorLogo: VENDORS[1].logoUrl,
      action: 'Confirm Delivery'
    }
  ]);

  const handleVerificationComplete = () => {
    if (!selectedTxId) return;
    
    const isComplete = Object.values(checklist).every(v => v);
    if (!isComplete) {
      toast({
        variant: "destructive",
        title: "Checklist Incomplete",
        description: "Please verify all satisfaction points before confirming.",
      });
      return;
    }

    setActiveTransactions(prev => prev.map(tx => 
      tx.id === selectedTxId ? { ...tx, status: 'Completed', progress: 100, action: 'Funds Released' } : tx
    ));
    
    setIsVerifying(false);
    setSelectedTxId(null);
    setChecklist({ condition: false, authenticity: false, functionality: false, matches: false });

    toast({
      title: "Satisfaction Verified!",
      description: `GHS Funds for ${selectedTxId} have been authorized for release.`,
    });
  };

  const handleManualRelease = (id: string) => {
    toast({
      title: "Manual Release Initiated",
      description: `Admin has authorized fund release for ${id} following protocol.`,
    });
    setActiveTransactions(prev => prev.map(tx => 
      tx.id === id ? { ...tx, status: 'Completed', progress: 100, action: 'Settled' } : tx
    ));
  };

  const handleLogout = () => {
    toast({ title: "Signed Out", description: "Returning to marketplace." });
    router.push('/');
  };

  const stats = {
    ADMIN: [
      { label: 'Platform Revenue', val: 'GH₵687,735.00', icon: BarChart3, color: 'text-primary', sub: 'Gross merchandise value' },
      { label: 'Active Disputes', val: '2', icon: AlertCircle, color: 'text-red-500', sub: 'Awaiting mediation' },
      { label: 'Verified Vendors', val: '124', icon: Users, color: 'text-blue-500', sub: '+12 this month' },
      { label: 'Escrow Volume', val: 'GH₵4.2M', icon: Shield, color: 'text-secondary', sub: 'Total GHS in vault' },
    ],
    VENDOR: [
      { label: 'Available Payout', val: 'GH₵186,750.00', icon: Wallet, color: 'text-primary', sub: 'Ready for withdrawal' },
      { label: 'Sales Velocity', val: '+24%', icon: TrendingUp, color: 'text-green-500', sub: 'Compared to last month' },
      { label: 'Active Vaults', val: '8', icon: Shield, color: 'text-secondary', sub: 'In-progress escrows' },
      { label: 'Trust Score', val: '4.95', icon: CheckCircle, color: 'text-indigo-500', sub: 'Top 5% in Ghana' },
    ],
    CUSTOMER: [
      { label: 'Secured Funds', val: 'GH₵72,735.00', icon: Shield, color: 'text-secondary', sub: 'Held in escrow' },
      { label: 'Total Purchases', val: '15', icon: CreditCard, color: 'text-primary', sub: 'Completed transactions' },
      { label: 'Reward Points', val: '1,240', icon: Wallet, color: 'text-amber-500', sub: 'Redeemable on next buy' },
      { label: 'Active Orders', val: '3', icon: Clock, color: 'text-blue-500', sub: 'Currently in transit' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Role Switcher for Demo */}
      <div className="flex justify-between items-center mb-8 bg-muted/30 p-4 rounded-2xl border">
        <div className="flex items-center gap-2">
           <Shield className="h-5 w-5 text-primary" />
           <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Demo Command</span>
        </div>
        <div className="flex gap-2">
          {(['ADMIN', 'VENDOR', 'CUSTOMER'] as Role[]).map(role => (
            <Button 
              key={role} 
              size="sm" 
              variant={currentRole === role ? 'default' : 'outline'}
              onClick={() => {
                setCurrentRole(role);
                toast({ title: `Role Switched: ${role}`, description: "Interface updated for protocol testing." });
              }}
              className="rounded-full text-[10px] h-7"
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-headline font-bold text-primary">
              {currentRole === 'ADMIN' ? 'Vault Control' : 'My Command Center'}
            </h1>
            <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20 font-bold px-3">
              {currentRole === 'ADMIN' ? 'Escrow Admin' : currentRole === 'VENDOR' ? 'Verified Merchant' : 'Secure Buyer'}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {currentRole === 'ADMIN' 
              ? 'Managing GHS fund releases based on buyer satisfaction protocol.' 
              : 'Securely interact with your GHS trades and vault protection.'}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full shadow-sm hover:bg-muted" onClick={() => toast({ title: "Settings", description: "Security settings loaded." })}>
            <Settings className="h-4 w-4 mr-2" />
            Account Settings
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-lg px-8" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">GHS Vault</Badge>
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
                  {currentRole === 'ADMIN' ? 'Treasury Queue' : 'Active Trades'}
                </TabsTrigger>
                <TabsTrigger value="payouts" className="rounded-full px-6 data-[state=active]:bg-white">History</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="space-y-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 rounded-2xl border-none">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-muted text-primary font-bold">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-xs text-muted-foreground font-mono">{tx.id}</span>
                            <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              <Shield className="h-3 w-3" />
                              {currentRole === 'ADMIN' ? 'Vault Oversight' : tx.role}
                            </div>
                            <span className="text-xs text-muted-foreground">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">GH₵{tx.amount.toLocaleString()}</div>
                        <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className="mt-1 font-bold">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <span>Transaction Completion</span>
                        <span>{tx.progress}%</span>
                      </div>
                      <Progress value={tx.progress} className="h-2 bg-muted" />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex -space-x-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden">
                             <Avatar className="h-full w-full">
                               <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/40/40`} />
                               <AvatarFallback>U</AvatarFallback>
                             </Avatar>
                          </div>
                        ))}
                      </div>
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Dialog open={isVerifying && selectedTxId === tx.id} onOpenChange={(open) => {
                          setIsVerifying(open);
                          if(open) setSelectedTxId(tx.id);
                        }}>
                          <DialogTrigger asChild>
                            <Button 
                              onClick={() => setSelectedTxId(tx.id)}
                              size="sm" 
                              className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6"
                            >
                              Verify Satisfaction
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <ClipboardCheck className="h-5 w-5 text-secondary" />
                                Buyer Satisfaction Checklist
                              </DialogTitle>
                              <DialogDescription>
                                To release GH₵{tx.amount.toLocaleString()} to the vendor, please confirm the following:
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="condition" 
                                  checked={checklist.condition} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, condition: !!checked}))}
                                />
                                <label htmlFor="condition" className="text-sm font-medium leading-none cursor-pointer">
                                  Product arrived in good physical condition.
                                </label>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="matches" 
                                  checked={checklist.matches} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, matches: !!checked}))}
                                />
                                <label htmlFor="matches" className="text-sm font-medium leading-none cursor-pointer">
                                  Matches the description and photos provided.
                                </label>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="authenticity" 
                                  checked={checklist.authenticity} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, authenticity: !!checked}))}
                                />
                                <label htmlFor="authenticity" className="text-sm font-medium leading-none cursor-pointer">
                                  Authenticity is verified (if applicable).
                                </label>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Checkbox 
                                  id="functionality" 
                                  checked={checklist.functionality} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, functionality: !!checked}))}
                                />
                                <label htmlFor="functionality" className="text-sm font-medium leading-none cursor-pointer">
                                  Functions as expected and fully operational.
                                </label>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button 
                                type="button" 
                                onClick={handleVerificationComplete}
                                className="w-full bg-primary font-bold rounded-xl h-12"
                              >
                                Finalize & Release GHS Funds
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : currentRole === 'ADMIN' && tx.status === 'Verification Pending' ? (
                        <Button 
                          onClick={() => handleManualRelease(tx.id)}
                          size="sm" 
                          className="bg-green-600 text-white hover:bg-green-700 font-bold rounded-full px-6"
                        >
                          Manual Release
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => toast({ title: "Timeline View", description: "Audit trail and messaging history loaded." })}
                          size="sm" 
                          variant="ghost" 
                          className="text-xs font-bold text-primary hover:bg-primary/5"
                        >
                          View Timeline <ChevronRight className="h-4 w-4 ml-1" />
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
                     <PackageCheck className="h-8 w-8 text-muted-foreground" />
                   </div>
                   <h3 className="text-xl font-bold text-primary">High-Trust History</h3>
                   <p className="text-muted-foreground max-w-sm mx-auto">
                     All completed interactions are archived here. Funds were released only after 100% satisfaction confirmation.
                   </p>
                   <Button variant="outline" className="rounded-full px-8 mt-4" onClick={() => toast({ title: "Archived Logs", description: "Historical data is available in the audit dashboard." })}>
                     Download Audit Log
                   </Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-xl bg-primary text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                Treasury Assets (GHS)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">Protected Vault Total</span>
                <div className="text-4xl font-headline font-bold">GH₵273,682</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase block mb-1">Inflow</span>
                  <div className="font-bold text-lg">+GH₵36,750</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase block mb-1">Escrow Fee</span>
                  <div className="font-bold text-lg">1.5%</div>
                </div>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-secondary font-bold rounded-xl h-12" onClick={() => toast({ title: "Settlement Queue", description: "Reviewing eligible vault releases." })}>
                Manage Settlement
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/20 border-dashed">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-secondary shrink-0" />
              <div>
                <h5 className="font-bold text-primary text-sm mb-1">Admin Treasury Protocol</h5>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  Funds held in the Paystack vault are only released after the buyer confirms satisfaction checklist. Admin oversees all manual overrides for disputes.
                </p>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-sm overflow-hidden">
             <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                   <TrendingUp className="h-4 w-4 text-green-500" />
                   Market Activity
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between text-xs py-2 border-b last:border-0">
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-green-500" />
                       <span className="font-medium">New Deposit for TX-{8800 + i}</span>
                    </div>
                    <span className="text-muted-foreground">{i * 2}m ago</span>
                  </div>
                ))}
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
