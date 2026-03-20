"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MOCK_USERS } from '@/lib/mock-data';
import { useAuth } from '@/components/providers';
import { ShieldCheck, User as UserIcon, Store, Shield } from 'lucide-react';

export function AuthDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const { login } = useAuth();

  const handleLogin = (email: string) => {
    login(email);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-secondary">Demo Access Registry</DialogTitle>
          <DialogDescription>
            Select a role to instantly log in and test the Vault Escrow protocols.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {MOCK_USERS.map((user) => (
            <Button
              key={user.id}
              variant="outline"
              className="h-auto flex items-center justify-start p-4 gap-4 hover:border-primary transition-all text-left"
              onClick={() => handleLogin(user.email)}
            >
              <div className="bg-muted p-2 rounded-lg">
                {user.role === 'HIGH_ADMIN' && <Shield className="h-5 w-5 text-primary" />}
                {user.role === 'VENDOR_ADMIN' && <Store className="h-5 w-5 text-primary" />}
                {user.role === 'CUSTOMER' && <UserIcon className="h-5 w-5 text-primary" />}
                {user.role === 'VENDOR_STAFF' && <ShieldCheck className="h-5 w-5 text-primary" />}
              </div>
              <div className="flex-1">
                <p className="font-bold text-secondary text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{user.role.replace('_', ' ')}</p>
              </div>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
