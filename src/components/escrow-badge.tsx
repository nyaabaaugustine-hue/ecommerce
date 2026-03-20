import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EscrowBadge({ className }: { className?: string }) {
  return (
    <Badge variant="secondary" className={cn("gap-1.5 py-1.5 px-4 bg-primary text-white border-none font-bold shadow-lg shadow-primary/10", className)}>
      <Lock className="h-3.5 w-3.5 text-secondary" />
      Secure GHS Vault
    </Badge>
  );
}