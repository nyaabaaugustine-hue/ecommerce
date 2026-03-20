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
  Info,
  History,
  TrendingUp,
  Cpu
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
      { label: 'Sovereign GMV', val: 'GH₵4.2M', icon: BarChart3, color: 'text-primary', sub: 'Gross Ecosystem Volume' },
      { label: 'Active Disputes', val: '5', icon: AlertCircle, color: 'text-destructive', sub: 'High Priority Mediation' },
      { label: 'Verified Partners', val: '124', icon: Users, color: 'text-secondary', sub: 'Audited Vendor Nodes' },
      { label: 'Treasury Vault', val: 'GH₵1.8M', icon: Lock, color: 'text-primary', sub: 'Total Escrow Liquidity' },
    ],
    VENDOR_ADMIN: [
      { label: 'Total Revenue', val: 'GH₵186,750', icon: TrendingUp, color: 'text-primary', sub: 'Settled this month' },
      { label: 'Active Escrows', val: '12', icon: Shield, color: 'text-secondary', sub: 'Funds in progress' },
      { label: 'Customer Trust', val: '4.9/5', icon: CheckCircle, color: 'text-accent', sub: 'Protocol Satisfaction' },
      { label: 'Net Payout Ready', val: 'GH₵42,100', icon: Wallet, color: 'text-accent', sub: 'Available for settlement' },
    ],
    VENDOR_STAFF: [
      { label: 'Assigned Tasks', val: '14', icon: ClipboardCheck, color: 'text-primary', sub: 'Pending Processing' },
      { label: 'Shipped Today', val: '22', icon: Truck, color: 'text-secondary', sub: 'Active Transits' },
      { label: 'Live Chats', val: '4', icon: MessageSquare, color: 'text-primary', sub: 'Protocol Queries' },
      { label: 'Success Rate', val: '98%', icon: CheckCircle, color: 'text-accent', sub: 'Delivery Accuracy' },
    ],
    CUSTOMER: [
      { label: 'Secured Funds', val: 'GH₵8,500', icon: Lock, color: 'text-primary', sub: 'Restricted in Vault' },
      { label: 'Total Spent', val: 'GH₵124,735', icon: CreditCard, color: 'text-secondary', sub: 'Lifetime Volume' },
      { label: 'Fidelity Points', val: '1,240', icon: Cpu, color: 'text-accent', sub: 'Audit Rewards' },
      { label: 'Live Orders', val: '2', icon: Clock, color: 'text-primary', sub: 'Awaiting Audit' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Role Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 rounded-[2rem] border border-primary/5 gap-6">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
             <Activity className="h-6 w-6 text-primary animate-pulse" />
             <span className="text-xs font-black text-secondary uppercase tracking-[0.25em]">Sovereign Control</span>
           </div>
           
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-full h-10 border-primary/20 text-secondary font-black gap-2 hover:bg-primary/5">
                 <Info className="h-4 w-4 text-primary" />
                 Audit Credentials
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-[2rem] p-8 shadow-2xl border-none mt-4">
               <h3 className="font-black text-secondary mb-6 flex items-center gap-3 text-lg tracking-tight">
                 <ShieldCheck className="h-6 w-6 text-primary" />
                 Protocol Registry
               </h3>
               <div className="space-y-4">
                 {MOCK_USERS.map(user => (
                   <div key={user.id} className="p-5 bg-muted/30 rounded-[1.25rem] border border-muted hover:border-primary/20 transition-all cursor-default">
                     <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1">{user.role.replace('_', ' ')}</p>
                     <p className="font-black text-sm text-secondary">{user.email}</p>
                     <p className="text-[10px] text-muted-foreground mt-1">Authorized as: {user.name}</p>
                   </div>
                 ))}
               </div>
             </PopoverContent>
           </Popover>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {(['HIGH_ADMIN', 'VENDOR_ADMIN', 'VENDOR_STAFF', 'CUSTOMER'] as Role[]).map(role => (
            <Button 
              key={role} 
              size="sm" 
              variant={currentRole === role ? 'default' : 'outline'}
              onClick={() => {
                setCurrentRole(role);
                toast({ title: `Role Synchronized: ${role}`, description: "Viewport optimized for protocol standards." });
              }}
              className={`rounded-full text-[10px] h-10 font-black uppercase tracking-widest transition-all ${currentRole === role ? 'bg-secondary text-white shadow-xl shadow-secondary/20 border-none' : 'border-primary/20 text-secondary hover:bg-primary/5'}`}
            >
              {role.replace('_', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl font-headline font-black text-secondary tracking-tighter">
              {currentRole === 'HIGH_ADMIN' ? 'Sovereign Console' : 'Registry Vault'}
            </h1>
            <Badge className="bg-primary text-secondary border-none font-black px-6 py-2 rounded-full uppercase text-[10px] tracking-[0.2em]">
              {currentRole.replace('_', ' ')} Protocol
            </Badge>
          </div>
          <p className="text-muted-foreground font-medium text-xl">
            {currentRole === 'HIGH_ADMIN' 
              ? 'Monitoring institutional liquidity and multisig protocol integrity.' 
              : `Managing restricted assets and fidelity settlements.`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button variant="outline" className="rounded-full shadow-lg border-primary/20 text-secondary font-black h-16 px-10 text-lg hover:bg-primary/5">
            <Settings className="h-6 w-6 mr-3 text-primary" />
            Config
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 rounded-full shadow-2xl shadow-secondary/20 px-12 font-black h-16 text-xl transition-all hover:scale-105" onClick={handleLogout}>
            <LogOut className="h-6 w-6 mr-3 text-primary" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-xl hover:shadow-[0_32px_64px_-12px_rgba(212,175,55,0.1)] transition-all duration-700 group rounded-[2.5rem] glass-card border border-primary/5">
            <CardContent className="p-10">
              <div className="flex items-center justify-between mb-8">
                <div className={`p-5 rounded-[1.25rem] bg-muted/50 group-hover:bg-primary/10 transition-all duration-500`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-[0.25em] border-primary/20 text-primary bg-primary/5">Realtime Audit</Badge>
              </div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.25em] mb-3">{stat.label}</p>
              <p className="text-5xl font-headline font-black text-secondary mb-4 tracking-tighter">{stat.val}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-2 font-black uppercase tracking-widest">
                <Activity className="h-4 w-4 text-primary" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <Tabs defaultValue="active" className="w-full">
            <div className="flex items-center justify-between mb-12">
              <TabsList className="bg-white p-2 border border-primary/10 rounded-full shadow-xl">
                <TabsTrigger value="active" className="rounded-full px-12 data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=active]:shadow-2xl font-black uppercase text-[10px] tracking-widest h-12 transition-all">
                  {currentRole.includes('ADMIN') ? 'Settlement Registry' : 'Active Vaults'}
                </TabsTrigger>
                <TabsTrigger value="history" className="rounded-full px-12 data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=active]:shadow-2xl font-black uppercase text-[10px] tracking-widest h-12 transition-all">Audit Archive</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="space-y-10">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden border-none shadow-2xl hover:shadow-[0_40px_80px_-15px_rgba(212,175,55,0.1)] transition-all duration-1000 group rounded-[3rem] glass-card border border-primary/10">
                  <div className="p-12">
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                      <div className="flex gap-8">
                        <Avatar className="h-24 w-24 rounded-[1.5rem] border-4 border-white shadow-2xl">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-primary/10 text-primary font-black text-3xl">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-black text-secondary text-3xl group-hover:text-primary transition-colors tracking-tighter mb-2">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                            <span className="text-[10px] text-muted-foreground font-black bg-muted/80 px-4 py-1.5 rounded-full uppercase tracking-widest border border-muted-foreground/10">{tx.id}</span>
                            <div className="flex items-center gap-3 text-[10px] font-black text-secondary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                              <Lock className="h-4 w-4 text-primary" />
                              Protocol v1.2
                            </div>
                            <span className="text-xs text-muted-foreground font-black uppercase tracking-widest">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-black text-secondary tracking-tighter mb-3">GH₵{tx.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-end gap-4">
                          <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`font-black uppercase text-[10px] tracking-widest px-6 py-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-accent text-white' : 'bg-primary text-secondary border-none'}`}>
                            {tx.status}
                          </Badge>
                          {tx.status !== 'Completed' && (
                            <Badge variant="outline" className="border-primary text-primary font-black animate-pulse rounded-full px-6 py-1.5 bg-primary/5">
                              <Timer className="h-4 w-4 mr-2" /> {tx.timer}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-12">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                        <span>Fidelity Verification Path</span>
                        <span className="text-secondary">{tx.progress}% Verified</span>
                      </div>
                      <Progress value={tx.progress} className="h-5 bg-muted rounded-full overflow-hidden shadow-inner border-2 border-white">
                         <div className="h-full bg-primary" />
                      </Progress>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-dashed border-primary/20 gap-8">
                      <div className="flex -space-x-5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-14 w-14 rounded-full border-4 border-white bg-muted flex items-center justify-center overflow-hidden shadow-2xl transition-all hover:scale-125 hover:z-20 cursor-pointer">
                             <Avatar className="h-full w-full">
                               <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/80/80`} />
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
                            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-black rounded-full px-16 h-20 shadow-2xl shadow-secondary/20 text-xl transition-all hover:scale-105">
                              Verify Fidelity & Release GHS
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-lg rounded-[3.5rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-none">
                            <DialogHeader>
                              <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                                <ShieldAlert className="h-12 w-12 text-primary" />
                              </div>
                              <DialogTitle className="text-4xl font-black text-secondary text-center tracking-tighter mb-4">
                                Fidelity Audit
                              </DialogTitle>
                              <DialogDescription className="text-center text-xl font-medium text-muted-foreground leading-relaxed">
                                Certify item integrity to authorize the multisig release of GH₵{tx.amount.toLocaleString()} from the registry.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 py-10">
                              {[
                                { id: 'condition', label: 'Item satisfies physical audit', checked: checklist.condition },
                                { id: 'matches', label: 'Authenticity protocol verified', checked: checklist.matches },
                                { id: 'functionality', label: 'Core functions fully operational', checked: checklist.functionality },
                              ].map((item) => (
                                <div key={item.id} className="flex items-start space-x-6 p-6 rounded-[2rem] bg-muted/40 border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                                  <Checkbox 
                                    id={item.id} 
                                    checked={item.checked} 
                                    onCheckedChange={(checked) => setChecklist(prev => ({...prev, [item.id]: !!checked}))}
                                    className="mt-1 h-7 w-7 rounded-xl border-primary"
                                  />
                                  <label htmlFor={item.id} className="text-lg font-black text-secondary cursor-pointer leading-tight">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-secondary font-black rounded-[2.5rem] h-24 text-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                Authorize Capital Release
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : currentRole.includes('ADMIN') ? (
                        <div className="flex gap-6">
                          <Button size="lg" variant="outline" className="rounded-full border-primary/20 text-secondary font-black h-16 px-10 text-lg hover:bg-primary/5">Protocol Audit</Button>
                          <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-full font-black h-16 px-12 text-lg shadow-2xl shadow-secondary/10 text-white">Authorize Payout</Button>
                        </div>
                      ) : (
                        <Button size="lg" variant="ghost" className="text-[12px] font-black text-secondary hover:bg-primary/5 rounded-full uppercase tracking-[0.3em] px-10 h-16">
                          Protocol Timeline <ChevronRight className="h-5 w-5 ml-4 text-primary" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history">
               <Card className="border-none shadow-2xl rounded-[4rem] glass-card border border-primary/5">
                 <CardContent className="p-32 text-center space-y-10">
                   <div className="bg-primary/5 h-40 w-40 rounded-[3.5rem] flex items-center justify-center mx-auto border-4 border-white shadow-2xl">
                     <History className="h-20 w-20 text-primary" />
                   </div>
                   <div className="space-y-4">
                    <h3 className="text-5xl font-black text-secondary tracking-tighter">Sovereign Archive</h3>
                    <p className="text-muted-foreground max-w-lg mx-auto font-medium text-xl leading-relaxed">Institutional record of all vault-secured settlements. Cryptographically signed for legal fidelity.</p>
                   </div>
                   <Button variant="outline" className="rounded-full px-16 h-20 border-primary/20 text-secondary font-black text-xl hover:bg-primary/5">Generate Audit Certificate</Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-12">
          <Card className="border-none shadow-[0_40px_80px_-15px_rgba(0,31,63,0.3)] bg-secondary text-white overflow-hidden relative group rounded-[3.5rem] min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-40 -mt-40 group-hover:scale-150 transition-transform duration-1000 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full -ml-40 -mb-40 blur-[100px]" />
            
            <CardHeader className="p-12 relative z-10">
              <CardTitle className="flex items-center gap-5 text-4xl font-black tracking-tighter">
                <div className="bg-white/10 p-5 rounded-[1.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
                  <Wallet className="h-10 w-10 text-primary" />
                </div>
                Vault Registry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12 pt-0 space-y-12 relative z-10">
              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
                  {currentRole.includes('ADMIN') ? 'Global Protocol Liquidity' : 'Restricted Sovereign Assets'}
                </span>
                <div className="text-7xl font-headline font-black tracking-tighter leading-none">
                  {currentRole.includes('ADMIN') ? 'GH₵273,682' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-widest block mb-3 text-white/50">Audit SL Success</span>
                  <div className="font-black text-3xl tracking-tighter">98.4%</div>
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-widest block mb-3 text-white/50">Registry Fee</span>
                  <div className="font-black text-3xl text-primary tracking-tighter">2.5%</div>
                </div>
              </div>
              <Button className="w-full bg-primary text-secondary hover:bg-white font-black rounded-[2.5rem] h-24 text-2xl transition-all shadow-2xl shadow-primary/20">
                Liquidity Management
              </Button>
            </CardContent>
          </Card>

          <div className="p-12 bg-primary/5 rounded-[3.5rem] border-2 border-primary/20 border-dashed relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-1000">
              <ShieldCheck className="h-48 w-48 text-primary" />
            </div>
            <div className="flex gap-8 relative z-10">
              <ShieldAlert className="h-14 w-14 text-primary shrink-0" />
              <div>
                <h5 className="font-black text-secondary text-2xl mb-4 tracking-tighter">Active Audit Node</h5>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  Every trade is restricted via the **Sovereign Vault Protocol**. Capital is only released upon multisig verification or SLA resolution.
                </p>
                <Button variant="link" className="p-0 h-auto text-[11px] font-black text-primary uppercase tracking-[0.3em] mt-8 hover:no-underline hover:text-secondary transition-colors">Registry Security Manual</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
