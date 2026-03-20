
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
  Cpu,
  ArrowUpRight,
  Banknote
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
        title: "Audit Incomplete",
        description: "All satisfaction points must be verified to authorize release.",
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
      title: "Multisig release successful!",
      description: `GHS Funds for ${selectedTxId} have been disbursed to the vendor.`,
    });
  };

  const handleLogout = () => {
    toast({ title: "Session Terminated", description: "Returning to marketplace." });
    router.push('/');
  };

  const stats = {
    HIGH_ADMIN: [
      { label: 'Ecosystem GMV', val: 'GH₵4.2M', icon: BarChart3, color: 'text-primary', sub: 'Gross Settlement Volume' },
      { label: 'Active Disputes', val: '2', icon: AlertCircle, color: 'text-destructive', sub: 'Priority Mediation Required' },
      { label: 'Verified Nodes', val: '124', icon: Users, color: 'text-secondary', sub: 'Audited Institutional Partners' },
      { label: 'Treasury Vault', val: 'GH₵1.8M', icon: Lock, color: 'text-primary', sub: 'Total Escrow Liquidity' },
    ],
    VENDOR_ADMIN: [
      { label: 'Total Revenue', val: 'GH₵186,750', icon: TrendingUp, color: 'text-primary', sub: 'Settled to date' },
      { label: 'Active Escrows', val: '12', icon: Shield, color: 'text-secondary', sub: 'Capital in restriction' },
      { label: 'Trust Rating', val: '4.9/5', icon: CheckCircle, color: 'text-accent', sub: 'Fidelity Score' },
      { label: 'Net Payout Ready', val: 'GH₵42,100', icon: Wallet, color: 'text-accent', sub: 'Available for settlement' },
    ],
    VENDOR_STAFF: [
      { label: 'Assigned Tasks', val: '14', icon: ClipboardCheck, color: 'text-primary', sub: 'Pending Processing' },
      { label: 'In Transit', val: '22', icon: Truck, color: 'text-secondary', sub: 'Active Deliveries' },
      { label: 'Registry Alerts', val: '4', icon: MessageSquare, color: 'text-primary', sub: 'Protocol Queries' },
      { label: 'Success Rate', val: '98%', icon: CheckCircle, color: 'text-accent', sub: 'SLA Compliance' },
    ],
    CUSTOMER: [
      { label: 'Secured GHS', val: 'GH₵8,500', icon: Lock, color: 'text-primary', sub: 'Restricted in Vault' },
      { label: 'Market Volume', val: 'GH₵124,735', icon: CreditCard, color: 'text-secondary', sub: 'Lifetime Expenditure' },
      { label: 'Fidelity Points', val: '1,240', icon: Cpu, color: 'text-accent', sub: 'Audit Rewards' },
      { label: 'Active Vaults', val: '2', icon: Clock, color: 'text-primary', sub: 'Awaiting Satisfaction' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Role Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white shadow-sm border p-4 rounded-none gap-4">
        <div className="flex items-center gap-4">
           <Activity className="h-5 w-5 text-primary" />
           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Demo Control Center</span>
           
           <Popover>
             <PopoverTrigger asChild>
               <Button variant="outline" size="sm" className="rounded-none h-8 font-bold text-[10px] uppercase tracking-widest gap-2">
                 <Info className="h-3 w-3" />
                 Sovereign Flows
               </Button>
             </PopoverTrigger>
             <PopoverContent className="w-80 rounded-none p-6 shadow-xl border mt-2">
               <h3 className="font-bold text-secondary mb-4 flex items-center gap-2 text-sm">
                 <ShieldCheck className="h-4 w-4 text-primary" />
                 Demo User Registry
               </h3>
               <div className="space-y-3">
                 {MOCK_USERS.map(user => (
                   <div key={user.id} className="p-3 bg-muted/50 rounded-none border border-muted hover:border-primary/20 transition-all cursor-pointer" onClick={() => setCurrentRole(user.role)}>
                     <p className="text-[8px] font-bold uppercase text-primary tracking-widest">{user.role.replace('_', ' ')}</p>
                     <p className="font-bold text-xs text-secondary">{user.email}</p>
                   </div>
                 ))}
               </div>
               <div className="mt-6 pt-6 border-t border-dashed">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed">
                    Start as **Customer** to confirm a vault release, then switch to **Vendor Admin** to see the GHS settle in their payout wallet.
                  </p>
               </div>
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
                toast({ title: `Role Synced: ${role}`, description: "Optimizing viewport for role-specific protocols." });
              }}
              className={`rounded-none text-[9px] h-8 font-bold uppercase tracking-widest ${currentRole === role ? 'bg-secondary text-white' : ''}`}
            >
              {role.replace('_', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-secondary tracking-tight">
              {currentRole === 'HIGH_ADMIN' ? 'Sovereign Console' : 'Registry Dashboard'}
            </h1>
            <Badge className="bg-primary text-secondary border-none font-bold uppercase text-[9px] tracking-widest rounded-none">
              {currentRole.replace('_', ' ')}
            </Badge>
          </div>
          <p className="text-muted-foreground font-medium">
            {currentRole === 'HIGH_ADMIN' 
              ? 'Institutional oversight of GHS liquidity and multisig protocol integrity.' 
              : `Managing your restricted assets and fidelity-driven settlements.`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {currentRole === 'VENDOR_ADMIN' && (
             <Button className="bg-primary hover:bg-primary/90 rounded-none px-8 font-black h-12 text-secondary gap-2">
              <Banknote className="h-5 w-5" />
              Settle GHS to Bank
            </Button>
          )}
          <Button variant="outline" className="rounded-none h-12 px-6 font-bold hover:bg-primary/5">
            <Settings className="h-4 w-4 mr-2" />
            Registry Config
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 rounded-none px-8 font-bold h-12 text-white" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats[currentRole].map((stat, i) => (
          <Card key={i} className="border shadow-sm hover:shadow-md transition-all rounded-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-none bg-muted flex items-center justify-center">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-primary/20 rounded-none">Registry Audit</Badge>
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-secondary mb-2">{stat.val}</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-bold">
                <Activity className="h-3 w-3 text-primary" />
                {stat.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="active" className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList className="bg-muted p-1 rounded-none">
                <TabsTrigger value="active" className="rounded-none px-8 font-bold uppercase text-[10px] tracking-widest">
                  {currentRole.includes('ADMIN') ? 'Settlement Pipeline' : 'Active Vaults'}
                </TabsTrigger>
                <TabsTrigger value="history" className="rounded-none px-8 font-bold uppercase text-[10px] tracking-widest">Audit Archive</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="space-y-6">
              {activeTransactions.map((tx) => (
                <Card key={tx.id} className="border shadow-sm hover:shadow-md transition-all rounded-none overflow-hidden group">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                      <div className="flex gap-6">
                        <Avatar className="h-16 w-16 rounded-none border shadow-sm">
                          <AvatarImage src={tx.vendorLogo} alt={tx.item} />
                          <AvatarFallback className="bg-muted font-bold">{tx.item.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-secondary text-xl tracking-tight mb-1">{tx.item}</h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{tx.id}</span>
                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-secondary uppercase tracking-widest">
                              <Lock className="h-3 w-3 text-primary" />
                              Protocol v1.2
                            </div>
                            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{tx.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-secondary tracking-tight mb-2">GH₵{tx.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-end gap-2">
                          <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`font-bold uppercase text-[9px] tracking-widest px-3 rounded-none ${tx.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-primary text-secondary'}`}>
                            {tx.status}
                          </Badge>
                          {tx.status !== 'Completed' && (
                            <Badge variant="outline" className="border-primary text-primary font-bold rounded-none px-3">
                              <Timer className="h-3 w-3 mr-1" /> {tx.timer}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        <span>Fidelity Protocol Verification</span>
                        <span className="text-secondary">{tx.progress}% Verified</span>
                      </div>
                      <Progress value={tx.progress} className="h-2 rounded-none" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-dashed border-border gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <Avatar key={i} className="h-10 w-10 border-2 border-white shadow-sm rounded-none">
                            <AvatarImage src={`https://picsum.photos/seed/${tx.id}-${i}/40/40`} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      
                      {currentRole === 'CUSTOMER' && tx.status !== 'Completed' ? (
                        <Dialog open={isVerifying && selectedTxId === tx.id} onOpenChange={(open) => {
                          setIsVerifying(open);
                          if(open) setSelectedTxId(tx.id);
                        }}>
                          <DialogTrigger asChild>
                            <Button className="bg-secondary text-white hover:bg-secondary/90 font-bold rounded-none px-8 h-12 shadow-lg">
                              Audit & Authorize Release
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md rounded-none p-10">
                            <DialogHeader>
                              <div className="h-16 w-16 bg-primary/10 rounded-none flex items-center justify-center mx-auto mb-4">
                                <ShieldAlert className="h-8 w-8 text-primary" />
                              </div>
                              <DialogTitle className="text-2xl font-black text-secondary text-center">
                                Fidelity Protocol Audit
                              </DialogTitle>
                              <DialogDescription className="text-center text-sm font-medium">
                                Certify item integrity to trigger the multisig release of GH₵{tx.amount.toLocaleString()}.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-6">
                              {[
                                { id: 'condition', label: 'Item satisfies physical physical audit', checked: checklist.condition },
                                { id: 'matches', label: 'Serial number authenticity verified', checked: checklist.matches },
                                { id: 'functionality', label: 'Core functions fully operational', checked: checklist.functionality },
                              ].map((item) => (
                                <div key={item.id} className="flex items-center space-x-3 p-3 rounded-none bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                                  <Checkbox 
                                    id={item.id} 
                                    checked={item.checked} 
                                    onCheckedChange={(checked) => setChecklist(prev => ({...prev, [item.id]: !!checked}))}
                                  />
                                  <label htmlFor={item.id} className="text-sm font-bold text-secondary cursor-pointer flex-1">
                                    {item.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <DialogFooter>
                              <Button onClick={handleVerificationComplete} className="w-full bg-primary text-secondary font-black rounded-none h-14 text-lg">
                                EXECUTE GHS RELEASE
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : currentRole.includes('ADMIN') ? (
                        <div className="flex gap-4">
                          <Button size="sm" variant="outline" className="rounded-none px-6 h-10 font-bold">Audit Trails</Button>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90 rounded-none px-6 text-white font-bold h-10">
                            {tx.status === 'Completed' ? 'View Receipt' : 'Trigger Manual Check'}
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" variant="ghost" className="text-[10px] font-bold text-secondary hover:bg-primary/5 rounded-none uppercase tracking-widest h-10">
                          Registry Timeline <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history">
               <Card className="border shadow-sm rounded-none">
                 <CardContent className="p-20 text-center space-y-6">
                   <div className="bg-muted h-20 w-20 rounded-none flex items-center justify-center mx-auto">
                     <History className="h-10 w-10 text-muted-foreground" />
                   </div>
                   <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-secondary tracking-tight">Institutional Archive</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto text-sm">Secure record of all vault-protected trade settlements. Cryptographically signed.</p>
                   </div>
                   <Button variant="outline" className="rounded-none px-8 h-12 font-bold uppercase tracking-widest text-[10px]">Generate Archive Certificate</Button>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <Card className="border shadow-lg bg-secondary text-white rounded-none overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
              <ShieldCheck className="h-12 w-12 text-primary opacity-20" />
            </div>
            <CardHeader className="p-8">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold tracking-tight">
                <Wallet className="h-6 w-6 text-primary" />
                Vault Registry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {currentRole.includes('ADMIN') ? 'Global Protocol Liquidity' : 'Active Restricted Assets'}
                </span>
                <div className="text-5xl font-black tracking-tighter">
                  {currentRole.includes('ADMIN') ? 'GH₵273.6K' : 'GH₵8,500'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-none border border-white/10">
                  <span className="text-[8px] font-bold uppercase tracking-widest block mb-1 text-white/50">Success Rate</span>
                  <div className="font-bold text-xl">99.4%</div>
                </div>
                <div className="bg-white/5 p-4 rounded-none border border-white/10">
                  <span className="text-[8px] font-bold uppercase tracking-widest block mb-1 text-white/50">Protocol Fee</span>
                  <div className="font-bold text-xl text-primary">2.5%</div>
                </div>
              </div>
              
              <Button className="w-full bg-primary text-secondary hover:bg-white font-black rounded-none h-14 text-sm gap-2">
                <ArrowUpRight className="h-4 w-4" />
                Liquidity Management
              </Button>
            </CardContent>
          </Card>

          <div className="p-8 bg-muted/50 rounded-none border-2 border-border border-dashed relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-20 w-20 text-secondary" />
            </div>
            <div className="flex gap-4 relative z-10">
              <ShieldAlert className="h-10 w-10 text-secondary shrink-0" />
              <div>
                <h5 className="font-bold text-secondary text-lg mb-2 tracking-tight">Active Audit Node</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every trade is restricted via the **Sovereign Vault Protocol**. Capital release is contingent on institutional satisfaction audits.
                </p>
                <Button variant="link" className="p-0 h-auto text-[10px] font-black text-primary uppercase tracking-widest mt-4">Security Manual v1.2</Button>
              </div>
            </div>
          </div>
          
          <Card className="border rounded-none shadow-sm">
            <CardHeader className="p-6 pb-2">
               <h4 className="font-bold text-secondary flex items-center gap-2 text-sm uppercase tracking-widest">
                <History className="h-4 w-4 text-primary" />
                Live Audit Logs
               </h4>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
               {[
                 { msg: 'Vault Release GH₵8,450', role: 'CUSTOMER', time: '2m' },
                 { msg: 'Fulfillment Assigned', role: 'VENDOR_ADMIN', time: '14m' },
                 { msg: 'Registry Sync Success', role: 'SYSTEM', time: '1h' },
               ].map((log, i) => (
                 <div key={i} className="flex justify-between items-center text-[10px] border-b border-muted pb-2 last:border-0 last:pb-0">
                    <span className="font-bold text-secondary">{log.msg}</span>
                    <span className="text-muted-foreground">{log.time}</span>
                 </div>
               ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
