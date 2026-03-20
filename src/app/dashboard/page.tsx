"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  User,
  Star,
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
  Cpu,
  ArrowUpRight,
  ArrowRightLeft,
  Banknote,
  Key,
  BookOpen,
  ArrowDownLeft,
  FileText,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Role, VENDORS, MOCK_USERS } from '@/lib/mock-data';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers';
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
  const { user, login, logout } = useAuth();
  const currentRole = user?.role || 'CUSTOMER';
  
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedTxId, setSelectedTxId] = useState<string | null>(null);
  
  const [checklist, setChecklist] = useState({
    condition: false,
    matches: false,
    functionality: false
  });
  
  const [activeTransactions, setActiveTransactions] = useState([
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

  const handleVerificationComplete = () => {
    if (!selectedTxId) return;
    
    const isComplete = checklist.condition && checklist.matches && checklist.functionality;
    
    if (!isComplete) {
      toast({
        variant: "destructive",
        title: "Audit Incomplete",
        description: "All checks must be certified to release funds.",
      });
      return;
    }

    setActiveTransactions(prev => prev.map(tx => 
      tx.id === selectedTxId ? { ...tx, status: 'Completed', progress: 100, action: 'Funds Released', timer: 'Released' } : tx
    ));
    
    setIsVerifying(false);
    setSelectedTxId(null);
    setChecklist({ condition: false, matches: false, functionality: false });

    toast({
      title: "Funds released successfully!",
      description: `GHS Funds for ${selectedTxId} have been disbursed to the vendor.`,
    });
  };

  const handleAuthorizeLocks = () => {
    toast({
      title: "Escrow Locks Authorized",
      description: "Transaction funds have been secured via the platform protocol.",
    });
  };

  const handleLogout = () => {
    toast({ title: "Session Terminated", description: "Returning to marketplace." });
    logout();
    router.push('/');
  };

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

  const roleNarratives = {
    HIGH_ADMIN: "You manage the platform integrity. Your primary duty is to authorize payouts and secure transaction liquidity.",
    VENDOR_ADMIN: "You monitor sales and revenue. Funds move to your 'Ready for Payout' balance once customers confirm delivery.",
    VENDOR_STAFF: "You manage fulfillment and shipping. Your role is to process orders and ensure timely delivery.",
    CUSTOMER: "You are the final authority. Your funds are held securely; you only release them once your delivery audit is complete."
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10 bg-white shadow-sm border p-4 rounded-none gap-4">
        <div className="flex items-center gap-4">
           <Zap className="h-4 w-4 text-primary animate-pulse" />
           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Sovereign Registry: Online</span>
           <Badge variant="outline" className="border-primary/20 rounded-none text-[8px] px-2 py-0.5">V 1.2.4</Badge>
        </div>

        <div className="flex items-center gap-4">
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-none h-8 font-bold text-[10px] uppercase tracking-widest gap-2">
                 <Users className="h-3 w-3" />
                 Demo Profiles
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-none p-6 shadow-xl border mt-2">
               <h3 className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm">
                 <ShieldCheck className="h-4 w-4 text-primary" />
                 Institutional Nodes
               </h3>
               <div className="space-y-3">
                 {MOCK_USERS.map(userItem => (
                   <div 
                    key={userItem.id} 
                    className={`p-3 rounded-none border transition-all cursor-pointer ${currentRole === userItem.role ? 'bg-primary/10 border-primary' : 'bg-muted/50 border-muted hover:border-primary/20'}`} 
                    onClick={() => {
                      login(userItem.email);
                      toast({ title: "Account Switched", description: `Logged in as ${userItem.role}` });
                    }}
                  >
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-[8px] font-black uppercase text-primary tracking-widest">{userItem.role.replace('_', ' ')}</p>
                        {currentRole === userItem.role && <CheckCircle className="h-3 w-3 text-primary" />}
                     </div>
                     <p className="font-bold text-xs text-secondary">{userItem.email}</p>
                   </div>
                 ))}
               </div>
             </PopoverContent>
           </Popover>
           
           <Button variant="ghost" size="sm" className="h-8 rounded-none text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
             <Info className="h-3 w-3 mr-2" />
             Help Center
           </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-black text-secondary tracking-tighter uppercase">
              {currentRole === 'HIGH_ADMIN' ? 'Platform Command' : 'Account Console'}
            </h1>
            <Badge className="bg-primary text-secondary border-none font-bold uppercase text-[9px] tracking-widest rounded-none px-3">
              {currentRole.replace('_', ' ')}
            </Badge>
          </div>
          <p className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
             <ShieldCheck className="h-4 w-4 text-primary" />
             {roleNarratives[currentRole]}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:flex items-center gap-3 w-full lg:w-auto">
          {currentRole === 'VENDOR_ADMIN' && (
             <Button className="bg-primary hover:bg-primary/90 rounded-none px-6 font-black h-11 text-secondary gap-2 text-[10px] uppercase tracking-widest shadow-lg">
              <Banknote className="h-4 w-4" />
              Settle Funds
            </Button>
          )}
          {currentRole === 'HIGH_ADMIN' && (
            <Button 
              onClick={handleAuthorizeLocks}
              className="bg-primary text-secondary rounded-none px-6 font-black h-11 gap-2 shadow-lg text-[10px] uppercase tracking-widest"
            >
              <Key className="h-4 w-4" />
              Authorize Payouts
            </Button>
          )}
          <Button variant="outline" className="rounded-none h-11 px-6 font-bold text-[10px] uppercase tracking-widest hover:bg-primary/5">
            <Settings className="h-4 w-4 mr-2" />
            Config
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 rounded-none px-6 font-bold h-11 text-white text-[10px] uppercase tracking-widest" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all rounded-none bg-white border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-muted rounded-none">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">Live Feed</p>
                  <Activity className="h-3 w-3 text-green-500 ml-auto" />
                </div>
              </div>
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-black text-secondary mb-2 tracking-tight">{stat.val}</p>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-muted p-1 rounded-none w-full sm:w-auto">
              <TabsTrigger value="active" className="rounded-none px-8 font-bold uppercase text-[9px] tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">
                Active Protocol
              </TabsTrigger>
              <TabsTrigger value="tools" className="rounded-none px-8 font-bold uppercase text-[9px] tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-white">
                Management Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="mt-6 space-y-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="border shadow-sm rounded-none group">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
                      <div className="flex gap-6">
                        <div className="relative h-16 w-16 bg-white border shrink-0">
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
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-1.5 text-[9px] font-bold text-secondary uppercase tracking-widest">
                               <User className="h-3 w-3 text-primary" />
                               Buyer: {tx.buyer || 'Yaw Mensah'}
                             </div>
                             <div className="flex items-center gap-1.5 text-[9px] font-bold text-secondary uppercase tracking-widest">
                               <Timer className="h-3 w-3 text-primary" />
                               SLA: {tx.timer}
                             </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <div className="text-2xl font-black text-burgundy tracking-tighter">GH₵{tx.amount.toLocaleString()}</div>
                        <Badge className="bg-secondary text-white font-black uppercase text-[8px] tracking-widest px-3 py-1 rounded-none">
                          {tx.status}
                        </Badge>
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
                         <div className="bg-muted p-2">
                           <Activity className="h-4 w-4 text-primary" />
                         </div>
                         <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Mediation Node Active</p>
                      </div>
                      
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Dialog open={isVerifying && selectedTxId === tx.id} onOpenChange={(open) => {
                          setIsVerifying(open);
                          if(open) setSelectedTxId(tx.id);
                        }}>
                          <DialogTrigger asChild>
                            <Button className="bg-secondary text-white hover:bg-primary hover:text-secondary font-black rounded-none px-8 h-12 text-[10px] uppercase tracking-[0.2em] shadow-xl">
                              Audit & Release Funds
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md rounded-none border-t-4 border-t-primary p-8 shadow-2xl">
                            <DialogHeader>
                              <div className="h-14 w-14 bg-secondary flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                              </div>
                              <DialogTitle className="text-2xl font-black text-secondary text-center uppercase tracking-tighter">
                                Fidelity Audit Protocol
                              </DialogTitle>
                              <DialogDescription className="text-center text-[10px] font-bold uppercase tracking-widest mt-2">
                                Verify asset quality to disburse <span className="text-burgundy">GH₵{tx.amount.toLocaleString()}</span> from treasury.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 py-8">
                              {[
                                { id: 'condition', label: 'Item Integrity Verified', checked: checklist.condition },
                                { id: 'matches', label: 'Description Synchronized', checked: checklist.matches },
                                { id: 'functionality', label: 'Operational Standards Met', checked: checklist.functionality },
                              ].map((item) => (
                                <div key={item.id} className="flex items-center space-x-4 p-4 rounded-none bg-muted/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer" onClick={() => setChecklist(prev => ({...prev, [item.id]: !prev[item.id as keyof typeof prev]}))}>
                                  <Checkbox 
                                    id={item.id} 
                                    checked={item.checked} 
                                  />
                                  <label htmlFor={item.id} className="text-[10px] font-black uppercase tracking-widest text-secondary cursor-pointer flex-1">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-secondary font-black rounded-none h-14 text-xs uppercase tracking-widest shadow-2xl">
                                AUTHORIZE SETTLEMENT
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button variant="outline" className="rounded-none h-11 px-6 font-black text-[10px] uppercase tracking-widest">
                          Protocol History <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-none border shadow-sm p-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary rounded-none">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-secondary text-xs uppercase tracking-widest">Fidelity Reports</h5>
                      <p className="text-[10px] text-muted-foreground uppercase">Export transaction audit trails.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-none font-bold text-[9px] uppercase tracking-widest">Download PDF</Button>
                </Card>
                <Card className="rounded-none border shadow-sm p-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary rounded-none">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-secondary text-xs uppercase tracking-widest">Protocol Support</h5>
                      <p className="text-[10px] text-muted-foreground uppercase">Connect with mediation node.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-none font-bold text-[9px] uppercase tracking-widest">Open Session</Button>
                </Card>
                <Card className="rounded-none border shadow-sm p-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary rounded-none">
                      <ArrowRightLeft className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-secondary text-xs uppercase tracking-widest">GHS Settlements</h5>
                      <p className="text-[10px] text-muted-foreground uppercase">Manage bank node connections.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-none font-bold text-[9px] uppercase tracking-widest">Manage Accounts</Button>
                </div>
                <Card className="rounded-none border shadow-sm p-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary rounded-none">
                      <ShieldAlert className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-black text-secondary text-xs uppercase tracking-widest">Dispute Center</h5>
                      <p className="text-[10px] text-muted-foreground uppercase">Report protocol anomalies.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-none font-bold text-[9px] uppercase tracking-widest">File Report</Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-2xl bg-secondary text-white rounded-none overflow-hidden relative border-t-4 border-t-primary">
            <div className="absolute top-0 right-0 p-6">
              <ShieldCheck className="h-16 w-16 text-primary opacity-10" />
            </div>
            <CardHeader className="p-8">
              <CardTitle className="flex items-center gap-3 text-xl font-black tracking-tight uppercase">
                <Wallet className="h-6 w-6 text-primary" />
                Sovereign Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-10">
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
                  {currentRole.includes('ADMIN') ? 'Global Platform Treasury' : 'Funds Restricted in Escrow'}
                </span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                  {currentRole.includes('ADMIN') ? 'GH₵273.6K' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-none border border-white/10">
                  <span className="text-[8px] font-black uppercase tracking-widest block mb-1 text-white/40">Reliability</span>
                  <div className="font-black text-xl text-primary uppercase">Elite</div>
                </div>
                <div className="bg-white/5 p-4 rounded-none border border-white/10">
                  <span className="text-[8px] font-black uppercase tracking-widest block mb-1 text-white/40">Auth Level</span>
                  <div className="font-black text-xl text-white uppercase">Sovereign</div>
                </div>
              </div>
              
              <Button className="w-full bg-primary text-secondary hover:bg-white font-black rounded-none h-14 text-[10px] uppercase tracking-[0.2em] shadow-xl">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                {currentRole === 'HIGH_ADMIN' ? 'Manage Master Treasury' : 'Initiate Withdrawal'}
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-none border shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/50 border-b p-6">
              <CardTitle className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Fidelity Registry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {[
                { label: 'Escrow Locks Active', val: '142', icon: Lock },
                { label: 'Funds Authorized Today', val: 'GH₵12.4K', icon: Zap },
                { label: 'Trust Rating (Global)', val: '4.98', icon: Star },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-dashed pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">{item.label}</span>
                  </div>
                  <span className="font-black text-secondary text-sm">{item.val}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="bg-primary/5 p-8 rounded-none border-2 border-primary/20 border-dashed relative">
             <div className="flex gap-4 relative z-10">
              <ShieldAlert className="h-10 w-10 text-secondary shrink-0" />
              <div>
                <h5 className="font-black text-secondary text-sm mb-2 uppercase tracking-widest">Protocol Safety Node</h5>
                <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-tight">
                  {currentRole === 'CUSTOMER' 
                    ? "Your funds are restricted in our vault. They only move to the vendor once you certify the fidelity audit."
                    : "High Admin oversight ensures all GHS settlements are verified. Every protocol step is cryptographically logged."
                  }
                </p>
                <Button variant="link" className="p-0 h-auto text-[9px] font-black text-primary uppercase tracking-[0.2em] mt-6">View Safety Manual</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
