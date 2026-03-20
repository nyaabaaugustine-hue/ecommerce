import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EscrowBadge({ className }: { className?: string }) {
  return (
    <Badge variant="secondary" className={cn("gap-1.5 py-1 px-3 bg-secondary/10 text-primary border-secondary/20 font-medium", className)}>
      <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
      Escrow Protected
    </Badge>
  );
}