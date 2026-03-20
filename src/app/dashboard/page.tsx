"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  Wallet, 
  CreditCard, 
  AlertCircle,
  Users,
  BarChart3,
  PackageCheck,
  ClipboardCheck,
  LogOut,
  Truck,
  MessageSquare,
  Activity,
  Timer,
  ShieldAlert,
  Lock,
  ShieldCheck,
  ChevronRight,
  Settings,
  Info
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Role, VENDORS, MOCK_USERS } from '@/lib/mock-data';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
      action: 'Awaiting Delivery',
      timer: '32h 15m'
    },
    {
      id: 'TX-GH-8815',
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
      tx.id === selectedTxId ? { ...tx, status: 'Completed', progress: 100, action: 'Funds Released', timer: 'Released' } : tx
    ));
    
    setIsVerifying(false);
    setSelectedTxId(null);
    setChecklist({ condition: false, authenticity: false, functionality: false, matches: false });

    toast({
      title: "Satisfaction Verified!",
      description: `GHS Funds for ${selectedTxId} have been authorized for release.`,
    });
  };

  const handleLogout = () => {
    toast({ title: "Signed Out", description: "Returning to marketplace." });
    router.push('/');
  };

  const stats = {
    HIGH_ADMIN: [
      { label: 'Platform GMV', val: 'GH₵4.2M', icon: BarChart3, color: 'text-primary', sub: 'Gross Ecosystem Volume' },
      { label: 'Active Disputes', val: '5', icon: AlertCircle, color: 'text-secondary', sub: 'High Priority Mediation' },
      { label: 'Verified Partners', val: '124', icon: Users, color: 'text-accent', sub: 'Trusted Vendor Nodes' },
      { label: 'Treasury Vault', val: 'GH₵1.8M', icon: Lock, color: 'text-primary', sub: 'Total Escrow Liquidity' },
    ],
    VENDOR_ADMIN: [
      { label: 'Total Revenue', val: 'GH₵186,750', icon: Wallet, color: 'text-primary', sub: 'Settled this month' },
      { label: 'Active Escrows', val: '12', icon: Shield, color: 'text-secondary', sub: 'Funds in progress' },
      { label: 'Customer Trust', val: '4.9/5', icon: CheckCircle, color: 'text-accent', sub: 'User Satisfaction Rating' },
      { label: 'Net Payout Ready', val: 'GH₵42,100', icon: CreditCard, color: 'text-green-500', sub: 'Available for settlement' },
    ],
    VENDOR_STAFF: [
      { label: 'Assigned Tasks', val: '14', icon: ClipboardCheck, color: 'text-primary', sub: 'Pending Processing' },
      { label: 'Shipped Today', val: '22', icon: Truck, color: 'text-secondary', sub: 'Active Transits' },
      { label: 'Live Chats', val: '4', icon: MessageSquare, color: 'text-accent', sub: 'Unread Protocol Queries' },
      { label: 'Success Rate', val: '98%', icon: CheckCircle, color: 'text-green-500', sub: 'Delivery Accuracy' },
    ],
    CUSTOMER: [
      { label: 'My Secured Funds', val: 'GH₵8,500', icon: Lock, color: 'text-secondary', sub: 'Held in Escrow' },
      { label: 'Total Spent', val: 'GH₵124,735', icon: CreditCard, color: 'text-primary', sub: 'Lifetime Trade Volume' },
      { label: 'Reward Points', val: '1,240', icon: Wallet, color: 'text-accent', sub: 'Redeemable Assets' },
      { label: 'Live Orders', val: '2', icon: Clock, color: 'text-primary', sub: 'Awaiting Verification' },
    ]
  };

  const getRoleLabel = (role: Role) => {
    switch(role) {
      case 'HIGH_ADMIN': return 'Super Admin';
      case 'VENDOR_ADMIN': return 'Business Owner';
      case 'VENDOR_STAFF': return 'Store Staff';
      case 'CUSTOMER': return 'Secure Buyer';
      default: return 'User';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Role Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white/80 backdrop-blur-md p-5 rounded-[2.5rem] border shadow-sm gap-4">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
             <Activity className="h-5 w-5 text-secondary animate-pulse" />
             <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Platform Command</span>
           </div>
           
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-full h-8 border-primary/20 text-primary font-black gap-2">
                 <Info className="h-3 w-3" />
                 Demo Identity
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-[2.5rem] p-6 shadow-2xl border-none">
               <h3 className="font-black text-primary mb-4 flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5 text-secondary" />
                 Credential Registry
               </h3>
               <div className="space-y-4">
                 {MOCK_USERS.map(user => (
                   <div key={user.id} className="p-4 bg-muted/30 rounded-2xl border border-muted hover:border-primary/20 transition-colors">
                     <p className="text-[9px] font-black uppercase text-secondary tracking-widest mb-1">{user.role.replace('_', ' ')}</p>
                     <p className="font-bold text-sm text-primary">{user.email}</p>
                     <p className="text-[10px] text-muted-foreground mt-1">Identified as: {user.name}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-4 text-[10px] text-muted-foreground font-bold leading-tight">
                 *Simulated environment. No authentication required for validation.
               </p>
             </PopoverContent>
           </Popover>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {(['HIGH_ADMIN', 'VENDOR_ADMIN', 'VENDOR_STAFF', 'CUSTOMER'] as Role[]).map(role => (
            <Button 
              key={role} 
              size="sm" 
              variant={currentRole === role ? 'default' : 'outline'}
              onClick={() => {
                setCurrentRole(role);
                toast({ title: `Role Switched: ${role}`, description: "Optimizing viewport for role protocol." });
              }}
              className={`rounded-full text-[9px] h-8 font-black uppercase tracking-widest ${currentRole === role ? 'bg-primary shadow-lg shadow-primary/20' : 'border-primary/20 text-primary'}`}
            >
              {role.replace('_', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-headline font-black text-primary tracking-tighter">
              {currentRole === 'HIGH_ADMIN' ? 'Control Center' : 'My Vault'}
            </h1>
            <Badge className="bg-secondary text-white border-none font-black px-5 py-1.5 rounded-full uppercase text-[10px] tracking-widest">
              {getRoleLabel(currentRole)}
            </Badge>
          </div>
          <p className="text-muted-foreground font-medium text-lg">
            {currentRole === 'HIGH_ADMIN' 
              ? 'Overseeing total ecosystem liquidity and protocol integrity.' 
              : `Managing secure trades and vault settlements.`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full shadow-sm border-primary/20 text-primary font-black h-14 px-8">
            <Settings className="h-5 w-5 mr-2" />
            Config
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-2xl shadow-primary/20 px-10 font-black h-14 text-lg" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-3 text-secondary" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-2xl transition-all group rounded-[3rem] glass-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-muted group-hover:bg-primary/10 transition-all duration-500`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-[0.2em] border-primary/20 text-primary">Live Data</Badge>
              </div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">{stat.label}</p>
              <p className="text-4xl font-headline font-black text-primary mb-3 tracking-tighter">{stat.val}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-bold">
                <Activity className="h-3 w-3 text-secondary" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <Tabs defaultValue="active" className="w-full">
            <div className="flex items-center justify-between mb-10">
              <TabsList className="bg-white/50 backdrop-blur-md p-1.5 border rounded-full shadow-sm">
                <TabsTrigger value="active" className="rounded-full px-10 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl font-black uppercase text-[10px] tracking-widest h-10">
                  {currentRole.includes('ADMIN') ? 'Settlement Queue' : 'Active Trades'}
                </TabsTrigger>
                <TabsTrigger value="history" className="rounded-full px-10 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl font-black uppercase text-[10px] tracking-widest h-10">Audit Log</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="space-y-8">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-700 group rounded-[3.5rem] glass-card">
                  <div className="p-10">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                      <div className="flex gap-6">
                        <Avatar className="h-20 w-20 rounded-[2rem] border-4 border-white shadow-xl">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-primary/10 text-primary font-black text-2xl">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-black text-primary text-2xl group-hover:text-secondary transition-colors tracking-tight">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                            <span className="text-[10px] text-muted-foreground font-black bg-muted px-3 py-1 rounded-full uppercase tracking-widest">{tx.id}</span>
                            <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                              <Lock className="h-3.5 w-3.5 text-secondary" />
                              Vault Protocol 1.2
                            </div>
                            <span className="text-xs text-muted-foreground font-black">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-primary tracking-tighter">GH₵{tx.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-end gap-3 mt-2">
                          <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`font-black uppercase text-[9px] tracking-widest px-4 py-1 rounded-full ${tx.status === 'Completed' ? 'bg-green-500' : 'bg-primary/10 text-primary border-none'}`}>
                            {tx.status}
                          </Badge>
                          {tx.status !== 'Completed' && (
                            <Badge variant="outline" className="border-secondary text-secondary font-black animate-pulse rounded-full px-4 py-1">
                              <Timer className="h-3 w-3 mr-1.5" /> {tx.timer}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-5 mb-10">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        <span>Trade Verification Path</span>
                        <span className="text-primary">{tx.progress}% Synchronized</span>
                      </div>
                      <Progress value={tx.progress} className="h-4 bg-muted rounded-full overflow-hidden shadow-inner border">
                         <div className="h-full bg-primary" />
                      </Progress>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dashed gap-6">
                      <div className="flex -space-x-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-muted flex items-center justify-center overflow-hidden shadow-lg transition-transform hover:scale-110 hover:z-10">
                             <Avatar className="h-full w-full">
                               <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/60/60`} />
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
                            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-black rounded-full px-12 h-16 shadow-2xl shadow-secondary/20 text-lg transition-all hover:scale-105 active:scale-95">
                              Verify Satisfaction & Release GHS
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md rounded-[3.5rem] p-12 shadow-[0_0_100px_rgba(0,0,0,0.1)]">
                            <DialogHeader>
                              <div className="h-20 w-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldAlert className="h-10 w-10 text-secondary" />
                              </div>
                              <DialogTitle className="text-3xl font-black text-primary text-center tracking-tighter">
                                Fidelity Protocol
                              </DialogTitle>
                              <DialogDescription className="text-center text-lg font-medium text-muted-foreground">
                                Verify product integrity to authorize release of GH₵{tx.amount.toLocaleString()} from the vault.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-8">
                              {[
                                { id: 'condition', label: 'Item is in perfect physical state', checked: checklist.condition },
                                { id: 'matches', label: 'Matches listing description & photos', checked: checklist.matches },
                                { id: 'functionality', label: 'All features are fully operational', checked: checklist.functionality },
                              ].map((item) => (
                                <div key={item.id} className="flex items-start space-x-5 p-5 rounded-[2rem] bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                                  <Checkbox 
                                    id={item.id} 
                                    checked={item.checked} 
                                    onCheckedChange={(checked) => setChecklist(prev => ({...prev, [item.id]: !!checked}))}
                                    className="mt-1 h-6 w-6 rounded-lg"
                                  />
                                  <label htmlFor={item.id} className="text-base font-black text-primary cursor-pointer leading-tight">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-white font-black rounded-[2rem] h-20 text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                Authorize GHS Release
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : currentRole.includes('ADMIN') ? (
                        <div className="flex gap-4">
                          <Button size="lg" variant="outline" className="rounded-full border-primary/20 text-primary font-black h-14 px-8">Audit Trail</Button>
                          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full font-black h-14 px-10 shadow-xl shadow-primary/10">Authorize Payout</Button>
                        </div>
                      ) : (
                        <Button size="lg" variant="ghost" className="text-[10px] font-black text-primary hover:bg-primary/5 rounded-full uppercase tracking-widest px-8">
                          Protocol Timeline <ChevronRight className="h-4 w-4 ml-2 text-secondary" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history">
               <Card className="border-none shadow-sm rounded-[4rem] glass-card">
                 <CardContent className="p-24 text-center space-y-8">
                   <div className="bg-primary/5 h-32 w-32 rounded-[3rem] flex items-center justify-center mx-auto border-4 border-white shadow-xl">
                     <PackageCheck className="h-16 w-16 text-primary" />
                   </div>
                   <div className="space-y-3">
                    <h3 className="text-4xl font-black text-primary tracking-tighter">High-Trust Archive</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto font-medium text-lg">Every transaction in the ecosystem is cryptographically secured and archived for regulatory compliance.</p>
                   </div>
                   <Button variant="outline" className="rounded-full px-12 h-16 border-primary/20 text-primary font-black text-lg">Generate Full Audit Report</Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-10">
          <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden relative group rounded-[3.5rem] min-h-[450px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-36 -mt-36 group-hover:scale-150 transition-transform duration-1000 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -ml-36 -mb-36 blur-3xl" />
            
            <CardHeader className="p-10 relative z-10">
              <CardTitle className="flex items-center gap-3 text-3xl font-black tracking-tighter">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                  <CreditCard className="h-8 w-8 text-secondary" />
                </div>
                Vault Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0 space-y-10 relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
                  {currentRole.includes('ADMIN') ? 'Global Platform Liquidity' : 'Secured GHS Protocol'}
                </span>
                <div className="text-6xl font-headline font-black tracking-tighter">
                  {currentRole.includes('ADMIN') ? 'GH₵273,682' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <span className="text-[8px] font-black uppercase tracking-widest block mb-2 text-white/60">SLA Success</span>
                  <div className="font-black text-2xl tracking-tighter">98.4%</div>
                </div>
                <div className="bg-white/10 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <span className="text-[8px] font-black uppercase tracking-widest block mb-2 text-white/60">Vault Fee</span>
                  <div className="font-black text-2xl text-secondary tracking-tighter">2.5%</div>
                </div>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white font-black rounded-[2rem] h-20 text-xl transition-all shadow-2xl">
                Liquidity Control
              </Button>
            </CardContent>
          </Card>

          <div className="p-10 bg-secondary/5 rounded-[3.5rem] border-2 border-secondary/10 border-dashed relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-1000">
              <ShieldCheck className="h-40 w-40 text-secondary" />
            </div>
            <div className="flex gap-6 relative z-10">
              <ShieldAlert className="h-12 w-12 text-secondary shrink-0" />
              <div>
                <h5 className="font-black text-primary text-xl mb-3 tracking-tight">Active Mediation Node</h5>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Every trade is restricted via the **Vault Protocol**. Funds are only released upon 100% satisfaction confirmation or SLA expiration.
                </p>
                <Button variant="link" className="p-0 h-auto text-[10px] font-black text-secondary uppercase tracking-[0.2em] mt-6">Protocol Security Manual</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}