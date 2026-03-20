"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MOCK_USERS } from '@/lib/mock-data';
import { useAuth } from '@/components/providers';
import { ShieldCheck, User as UserIcon, Store, Shield, Key } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AuthDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const { login } = useAuth();

  const handleLogin = (email: string) => {
    login(email);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-none border-t-4 border-t-primary shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-8 bg-secondary flex items-center justify-center">
               <ShieldCheck className="h-4 w-4 text-primary" />
            </div>
            <DialogTitle className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight">Access Registry</DialogTitle>
          </div>
          <DialogDescription className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
            Select an institutional role to authorize your session. Credentials are pre-configured for protocol validation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-6">
          {MOCK_USERS.map((user) => (
            <Button
              key={user.id}
              variant="outline"
              className="h-auto flex flex-col items-stretch p-4 gap-3 hover:border-primary transition-all text-left bg-muted/20 border-border/50 group rounded-none"
              onClick={() => handleLogin(user.email)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-2 group-hover:bg-primary transition-colors">
                  {user.role === 'HIGH_ADMIN' && <Shield className="h-5 w-5 text-primary group-hover:text-secondary" />}
                  {user.role === 'VENDOR_ADMIN' && <Store className="h-5 w-5 text-primary group-hover:text-secondary" />}
                  {user.role === 'CUSTOMER' && <UserIcon className="h-5 w-5 text-primary group-hover:text-secondary" />}
                  {user.role === 'VENDOR_STAFF' && <ShieldCheck className="h-5 w-5 text-primary group-hover:text-secondary" />}
                </div>
                <div className="flex-1">
                  <p className="font-black text-secondary text-sm uppercase tracking-tight">{user.name}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-black">{user.role.replace('_', ' ')}</p>
                </div>
              </div>
              <div className="pt-3 mt-1 border-t border-dashed border-border flex justify-between items-center">
                 <div className="flex items-center gap-1.5">
                    <Key className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-black text-secondary/60 tracking-widest">{user.email}</span>
                 </div>
                 <Badge className="bg-primary/10 text-primary border-none text-[7px] font-black px-2 py-0.5 rounded-none uppercase">Authorized Node</Badge>
              </div>
            </Button>
          ))}
        </div>
        <div className="bg-muted p-4 border border-dashed text-center">
           <p className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Sovereign Vault Protocol v1.2.4 Certified Access</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
