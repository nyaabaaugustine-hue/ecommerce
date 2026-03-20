
"use client";

import { useState, useEffect } from 'react';
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
  Cpu,
  ArrowUpRight,
  Banknote,
  Key,
  BookOpen
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
      {/* Demo Role Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12 bg-white shadow-sm border p-4 rounded-none gap-4">
        <div className="flex items-center gap-4">
           <Activity className="h-5 w-5 text-primary" />
           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Switch Roles (Demo)</span>
           
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-none h-8 font-bold text-[10px] uppercase tracking-widest gap-2">
                 <Info className="h-3 w-3" />
                 User Roles
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-none p-6 shadow-xl border mt-2">
               <h3 className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm">
                 <ShieldCheck className="h-4 w-4 text-primary" />
                 Demo Accounts
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
                     <p className="text-[9px] text-muted-foreground font-medium mt-1 leading-tight">{roleNarratives[userItem.role]}</p>
                   </div>
                 ))}
               </div>
             </PopoverContent>
           </Popover>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 w-full md:w-auto">
          {(['HIGH_ADMIN', 'VENDOR_ADMIN', 'VENDOR_STAFF', 'CUSTOMER'] as Role[]).map(role => (
            <Button 
              key={role} 
              size="sm" 
              variant={currentRole === role ? 'default' : 'outline'}
              onClick={() => {
                const targetUser = MOCK_USERS.find(u => u.role === role);
                if (targetUser) login(targetUser.email);
                toast({ title: `Role Synced: ${role}` });
              }}
              className={`rounded-none text-[8px] md:text-[9px] h-8 font-bold uppercase tracking-widest flex-1 sm:flex-none ${currentRole === role ? 'bg-secondary text-white' : ''}`}
            >
              {role.replace('_', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-bold text-secondary tracking-tight">
              {currentRole === 'HIGH_ADMIN' ? 'Admin Console' : 'Account Dashboard'}
            </h1>
            <Badge className="bg-primary text-secondary border-none font-bold uppercase text-[9px] tracking-widest rounded-none">
              {currentRole.replace('_', ' ')}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
             <BookOpen className="h-4 w-4 text-primary" />
             <p className="font-bold text-[10px] md:text-xs uppercase tracking-widest">
               {roleNarratives[currentRole]}
             </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 w-full lg:w-auto">
          {currentRole === 'VENDOR_ADMIN' && (
             <Button className="w-full lg:w-auto bg-primary hover:bg-primary/90 rounded-none px-6 font-black h-11 text-secondary gap-2 text-xs">
              <Banknote className="h-4 w-4" />
              Withdraw Funds
            </Button>
          )}
          {currentRole === 'HIGH_ADMIN' && (
            <Button 
              onClick={handleAuthorizeLocks}
              className="w-full lg:w-auto bg-primary text-secondary rounded-none px-6 font-black h-11 gap-2 shadow-lg text-xs"
            >
              <Key className="h-4 w-4" />
              Authorize Payouts
            </Button>
          )}
          <Button variant="outline" className="w-full lg:w-auto rounded-none h-11 px-6 font-bold hover:bg-primary/5 text-xs">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button className="w-full lg:w-auto bg-secondary hover:bg-secondary/90 rounded-none px-6 font-bold h-11 text-white text-xs" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border shadow-sm hover:shadow-md transition-all rounded-none">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 md:p-3 rounded-none bg-muted flex items-center justify-center">
                  <stat.icon className={`h-4 w-4 md:h-6 md:w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest border-primary/20 rounded-none">Updated Live</Badge>
              </div>
              <p className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl md:text-3xl font-bold text-secondary mb-2">{stat.val}</p>
              <p className="text-[9px] text-muted-foreground flex items-center gap-1 font-bold">
                <Activity className="h-3 w-3 text-primary" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-muted p-1 rounded-none w-full sm:w-auto flex">
              <TabsTrigger value="active" className="rounded-none px-4 md:px-8 font-bold uppercase text-[9px] md:text-[10px] tracking-widest flex-1">
                {currentRole.includes('ADMIN') ? 'Order Queue' : 'Active Orders'}
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-none px-4 md:px-8 font-bold uppercase text-[9px] md:text-[10px] tracking-widest flex-1">Order History</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4 md:space-y-6 mt-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="border shadow-sm hover:shadow-md transition-all rounded-none overflow-hidden group">
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10 md:h-16 md:w-16 rounded-none border shadow-sm shrink-0">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-muted font-bold">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-secondary text-base md:text-xl tracking-tight mb-1">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="text-[8px] md:text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{tx.id}</span>
                            <div className="flex items-center gap-1 text-[8px] md:text-[9px] font-bold text-secondary uppercase tracking-widest">
                              <Lock className="h-2.5 w-2.5 text-primary" />
                              Secure Checkout
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                        <div className="text-lg md:text-2xl font-black text-secondary tracking-tight">GH₵{tx.amount.toLocaleString()}</div>
                        <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`font-bold uppercase text-[8px] tracking-widest px-2 rounded-none ${tx.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-primary text-secondary'}`}>
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <span>Fulfillment Progress</span>
                        <span className="text-secondary">{tx.progress}% Verified</span>
                      </div>
                      <Progress value={tx.progress} className="h-1.5 md:h-2 rounded-none" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-dashed border-border gap-4">
                      <div className="flex items-center gap-3">
                         <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <Avatar key={i} className="h-7 w-7 md:h-9 md:w-9 border-2 border-white shadow-sm rounded-none">
                              <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/40/40`} />
                              <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-muted-foreground">Support Team Active</span>
                      </div>
                      
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Dialog open={isVerifying && selectedTxId === tx.id} onOpenChange={(open) => {
                          setIsVerifying(open);
                          if(open) setSelectedTxId(tx.id);
                        }}>
                          <DialogTrigger asChild>
                            <Button className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 font-bold rounded-none px-6 h-11 text-[10px] md:text-xs uppercase tracking-widest">
                              Confirm & Release Funds
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md rounded-none p-6 md:p-8">
                            <DialogHeader>
                              <div className="h-12 w-12 bg-primary/10 rounded-none flex items-center justify-center mx-auto mb-4">
                                <ShieldAlert className="h-6 w-6 text-primary" />
                              </div>
                              <DialogTitle className="text-xl font-black text-secondary text-center">
                                Order Delivery Confirmation
                              </DialogTitle>
                              <DialogDescription className="text-center text-xs font-medium">
                                Certify item quality to release GH₵{tx.amount.toLocaleString()} from escrow to the vendor.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 py-4 md:py-6">
                              {[
                                { id: 'condition', label: 'Item is in good condition', checked: checklist.condition },
                                { id: 'matches', label: 'Item matches description', checked: checklist.matches },
                                { id: 'functionality', label: 'All features working correctly', checked: checklist.functionality },
                              ].map((item) => (
                                <div key={item.id} className="flex items-center space-x-3 p-3 rounded-none bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                                  <Checkbox 
                                    id={item.id} 
                                    checked={item.checked} 
                                    onCheckedChange={(checked) => setChecklist(prev => ({...prev, [item.id]: !!checked}))}
                                  />
                                  <label htmlFor={item.id} className="text-[11px] md:text-sm font-bold text-secondary cursor-pointer flex-1">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-secondary font-black rounded-none h-12 text-sm uppercase">
                                CONFIRM & RELEASE
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button size="sm" variant="ghost" className="w-full sm:w-auto text-[9px] md:text-[10px] font-bold text-secondary hover:bg-primary/5 rounded-none uppercase tracking-widest h-10">
                          Order Details <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6 md:space-y-8">
          <Card className="border shadow-lg bg-secondary text-white rounded-none overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
              <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-primary opacity-20" />
            </div>
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-tight text-white">
                <Wallet className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                Secure Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 space-y-6 md:space-y-8">
              <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {currentRole.includes('ADMIN') ? 'Total Platform Liquidity' : 'Funds in Escrow'}
                </span>
                <div className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                  {currentRole.includes('ADMIN') ? 'GH₵273.6K' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-3 rounded-none border border-white/10">
                  <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest block mb-1 text-white/50">Success Rate</span>
                  <div className="font-bold text-base md:text-xl text-white">99.4%</div>
                </div>
                <div className="bg-white/5 p-3 rounded-none border border-white/10">
                  <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest block mb-1 text-white/50">Reliability</span>
                  <div className="font-bold text-base md:text-xl text-primary">A+</div>
                </div>
              </div>
              
              <Button className="w-full bg-primary text-secondary hover:bg-white font-black rounded-none h-12 text-xs uppercase tracking-widest gap-2">
                <ArrowUpRight className="h-4 w-4" />
                {currentRole === 'HIGH_ADMIN' ? 'Manage Treasury' : 'Withdraw Funds'}
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 bg-muted/50 rounded-none border-2 border-border border-dashed relative group">
            <div className="flex gap-4 relative z-10">
              <ShieldAlert className="h-8 w-8 text-secondary shrink-0" />
              <div>
                <h5 className="font-bold text-secondary text-sm md:text-base mb-2 tracking-tight uppercase">Buyer Protection</h5>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed font-medium">
                  {currentRole === 'CUSTOMER' 
                    ? "Your funds are held securely in escrow. They only move to the vendor once you confirm delivery."
                    : "Admin oversight ensures all GHS settlements are verified. Every transaction is protected via our security protocol."
                  }
                </p>
                <Button variant="link" className="p-0 h-auto text-[9px] font-black text-primary uppercase tracking-widest mt-4">Read Safety Guide</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
