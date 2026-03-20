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
      { label: 'Total Ecosystem GMV', val: 'GH₵4.2M', icon: BarChart3, color: 'text-primary', sub: 'Gross volume processed' },
      { label: 'Active Disputes', val: '5', icon: AlertCircle, color: 'text-secondary', sub: 'High priority mediation' },
      { label: 'Verified Partners', val: '124', icon: Users, color: 'text-accent', sub: '+12 this month' },
      { label: 'Treasury Vault', val: 'GH₵1.8M', icon: Lock, color: 'text-primary', sub: 'Held in secure escrow' },
    ],
    VENDOR_ADMIN: [
      { label: 'Store Revenue', val: 'GH₵186,750', icon: Wallet, color: 'text-primary', sub: 'Settled this month' },
      { label: 'Active Escrows', val: '12', icon: Shield, color: 'text-secondary', sub: 'Funds in progress' },
      { label: 'Staff Count', val: '8', icon: Users, color: 'text-accent', sub: 'Active staff accounts' },
      { label: 'Net Payout Ready', val: 'GH₵42,100', icon: CreditCard, color: 'text-green-500', sub: 'Available to withdraw' },
    ],
    VENDOR_STAFF: [
      { label: 'Assigned Tasks', val: '14', icon: ClipboardCheck, color: 'text-amber-500', sub: 'Needs attention' },
      { label: 'Processed Today', val: '22', icon: Truck, color: 'text-blue-500', sub: 'Dispatched & verified' },
      { label: 'Customer Chats', val: '4', icon: MessageSquare, color: 'text-primary', sub: 'Unread messages' },
      { label: 'Success Rate', val: '98%', icon: CheckCircle, color: 'text-green-500', sub: 'Satisfaction average' },
    ],
    CUSTOMER: [
      { label: 'My Secured Funds', val: 'GH₵8,500', icon: Lock, color: 'text-secondary', sub: 'Currently in escrow' },
      { label: 'Total Spent', val: 'GH₵124,735', icon: CreditCard, color: 'text-primary', sub: 'Lifetime volume' },
      { label: 'Reward Points', val: '1,240', icon: Wallet, color: 'text-amber-500', sub: 'Redeemable for GHS' },
      { label: 'Orders in Transit', val: '2', icon: Clock, color: 'text-blue-500', sub: 'Awaiting delivery' },
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
      {/* Role Switcher & Demo Credentials */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-3xl border shadow-sm gap-4">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
             <Activity className="h-5 w-5 text-secondary animate-pulse" />
             <span className="text-[10px] font-black text-muted-foreground uppercase tracking-wider">Command Node</span>
           </div>
           
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-full h-8 border-primary/20 text-primary font-black gap-2">
                 <Info className="h-3 w-3" />
                 Demo Access
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-[2rem] p-6 shadow-2xl border-none">
               <h3 className="font-black text-primary mb-4 flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5 text-secondary" />
                 Credential Registry
               </h3>
               <div className="space-y-4">
                 {MOCK_USERS.map(user => (
                   <div key={user.id} className="p-3 bg-muted/30 rounded-2xl border border-muted">
                     <p className="text-[10px] font-black uppercase text-secondary tracking-widest">{user.role.replace('_', ' ')}</p>
                     <p className="font-bold text-sm text-primary">{user.email}</p>
                     <p className="text-[10px] text-muted-foreground">Name: {user.name}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-4 text-[10px] text-muted-foreground font-medium leading-tight">
                 *No password required. These identities are simulated for platform validation.
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
                toast({ title: `Role Switched: ${role}`, description: "Dashboard optimized for role visibility." });
              }}
              className={`rounded-full text-[10px] h-7 font-black ${currentRole === role ? 'bg-primary' : 'border-primary/20 text-primary'}`}
            >
              {role.replace('_', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-headline font-bold text-primary tracking-tighter">
              {currentRole === 'HIGH_ADMIN' ? 'Vault Control' : 'Command Center'}
            </h1>
            <Badge variant="secondary" className="bg-secondary text-white border-none font-black px-4 py-1 rounded-full">
              {getRoleLabel(currentRole)}
            </Badge>
          </div>
          <p className="text-muted-foreground font-medium">
            {currentRole === 'HIGH_ADMIN' 
              ? 'Global oversight of GHS platform interactions and treasury vaults.' 
              : `Securely managing your ${currentRole.toLowerCase().replace('_', ' ')} protocol.`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full shadow-sm border-primary/20 text-primary font-bold">
            <Settings className="h-4 w-4 mr-2" />
            Config
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full shadow-lg px-8 font-black" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2 text-secondary" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all group rounded-[2rem]">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-primary/20 text-primary">Live Vault</Badge>
              </div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-headline font-black text-primary mb-2">{stat.val}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                <Clock className="h-3 w-3 text-secondary" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <Tabs defaultValue="active" className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList className="bg-white p-1 border rounded-full shadow-sm">
                <TabsTrigger value="active" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">
                  {currentRole.includes('ADMIN') ? 'Settlement Queue' : 'Active Vaults'}
                </TabsTrigger>
                <TabsTrigger value="history" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">History</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="space-y-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group rounded-[2.5rem]">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                      <div className="flex gap-4">
                        <Avatar className="h-16 w-16 rounded-2xl border-none shadow-inner">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-primary/10 text-primary font-black text-xl">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-black text-primary text-xl group-hover:text-secondary transition-colors">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-sm">{tx.id}</span>
                            <div className="flex items-center gap-1 text-[10px] font-black text-primary uppercase tracking-widest">
                              <Lock className="h-3 w-3 text-secondary" />
                              {currentRole === 'CUSTOMER' ? 'Escrow Protection' : `Role: ${currentRole}`}
                            </div>
                            <span className="text-xs text-muted-foreground font-bold">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-primary">GH₵{tx.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-end gap-2 mt-1">
                          <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`font-black uppercase tracking-tighter ${tx.status === 'Completed' ? 'bg-green-500' : 'bg-primary/10 text-primary border-none'}`}>
                            {tx.status}
                          </Badge>
                          {tx.status !== 'Completed' && (
                            <Badge variant="outline" className="border-secondary text-secondary font-black animate-pulse">
                              <Timer className="h-3 w-3 mr-1" /> {tx.timer}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <span>Vault Maturity Process</span>
                        <span className="text-primary">{tx.progress}% Verified</span>
                      </div>
                      <Progress value={tx.progress} className="h-3 bg-muted rounded-full overflow-hidden">
                         <div className="h-full bg-primary" />
                      </Progress>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-dashed">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-10 w-10 rounded-full border-4 border-white bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-sm">
                             <Avatar className="h-full w-full">
                               <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/40/40`} />
                               <AvatarFallback>U</AvatarFallback>
                             </Avatar>
                          </div>
                        ))}
                      </div>
                      
                      {/* Contextual Actions Based on Role */}
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Dialog open={isVerifying && selectedTxId === tx.id} onOpenChange={(open) => {
                          setIsVerifying(open);
                          if(open) setSelectedTxId(tx.id);
                        }}>
                          <DialogTrigger asChild>
                            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-black rounded-full px-10 shadow-lg shadow-secondary/10">
                              Verify Delivery & Release Funds
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md rounded-[3rem] p-10">
                            <DialogHeader>
                              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldAlert className="h-8 w-8 text-secondary" />
                              </div>
                              <DialogTitle className="text-2xl font-black text-primary text-center">
                                Final Verification Protocol
                              </DialogTitle>
                              <DialogDescription className="text-center text-lg font-medium">
                                Confirm delivery to release GH₵{tx.amount.toLocaleString()} from the secure vault.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-5 py-6">
                              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30">
                                <Checkbox 
                                  id="condition" 
                                  checked={checklist.condition} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, condition: !!checked}))}
                                  className="mt-1"
                                />
                                <label htmlFor="condition" className="text-sm font-bold text-primary cursor-pointer leading-tight">Product is in perfect physical condition.</label>
                              </div>
                              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30">
                                <Checkbox 
                                  id="matches" 
                                  checked={checklist.matches} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, matches: !!checked}))}
                                  className="mt-1"
                                />
                                <label htmlFor="matches" className="text-sm font-bold text-primary cursor-pointer leading-tight">Matches listing description and photos.</label>
                              </div>
                              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30">
                                <Checkbox 
                                  id="functionality" 
                                  checked={checklist.functionality} 
                                  onCheckedChange={(checked) => setChecklist(prev => ({...prev, functionality: !!checked}))}
                                  className="mt-1"
                                />
                                <label htmlFor="functionality" className="text-sm font-bold text-primary cursor-pointer leading-tight">All features are operational and verified.</label>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-white font-black rounded-2xl h-16 text-lg shadow-xl shadow-primary/20">
                                Release GHS Funds Now
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : currentRole.includes('ADMIN') ? (
                        <div className="flex gap-4">
                          <Button size="lg" variant="outline" className="rounded-full border-primary/20 text-primary font-bold">Audit Trail</Button>
                          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full font-black px-10">Authorize Payout</Button>
                        </div>
                      ) : (
                        <Button size="lg" variant="ghost" className="text-sm font-black text-primary hover:bg-primary/5 rounded-full">
                          View Protocol Timeline <ChevronRight className="h-5 w-5 ml-1 text-secondary" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history">
               <Card className="border-none shadow-sm rounded-[3rem]">
                 <CardContent className="p-20 text-center space-y-6">
                   <div className="bg-primary/5 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
                     <PackageCheck className="h-12 w-12 text-primary" />
                   </div>
                   <div className="space-y-2">
                    <h3 className="text-3xl font-black text-primary">High-Trust History</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto font-medium">Every transaction in your vault is cryptographically secured and archived for audit.</p>
                   </div>
                   <Button variant="outline" className="rounded-full px-10 border-primary/20 text-primary font-bold">Generate Audit Report</Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden relative group rounded-[2.5rem]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000 blur-2xl" />
            <CardHeader className="p-8">
              <CardTitle className="flex items-center gap-2 text-2xl font-black">
                <CreditCard className="h-6 w-6 text-secondary" />
                GHS Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                  {currentRole.includes('ADMIN') ? 'Total Platform Liquidity' : 'Securely Held in Vault'}
                </span>
                <div className="text-5xl font-headline font-black tracking-tighter">
                  {currentRole.includes('ADMIN') ? 'GH₵273,682' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase block mb-1 text-white/60">Weekly Inflow</span>
                  <div className="font-black text-xl">+GH₵36k</div>
                </div>
                <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase block mb-1 text-white/60">Vault Fee</span>
                  <div className="font-black text-xl text-secondary">2.0%</div>
                </div>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white font-black rounded-2xl h-16 text-lg transition-all">
                Manage Financials
              </Button>
            </CardContent>
          </Card>

          <div className="p-8 bg-secondary/5 rounded-[2.5rem] border-2 border-secondary/10 border-dashed relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-20 w-20 text-secondary" />
            </div>
            <div className="flex gap-4 relative z-10">
              <ShieldAlert className="h-10 w-10 text-secondary shrink-0" />
              <div>
                <h5 className="font-black text-primary text-lg mb-2">Vault Protocol Active</h5>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Funds are restricted via **Paystack GHS Vaults**. The Vendor has 48 hours to fulfill delivery. Auto-refund initiates upon SLA breach.
                </p>
                <Button variant="link" className="p-0 h-auto text-[10px] font-black text-secondary uppercase tracking-widest mt-4">Read Security Policy</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}