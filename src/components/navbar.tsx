import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Search, User, ListPlus, Bell } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl text-primary shrink-0">
          <Shield className="h-6 w-6 text-secondary fill-secondary/20" />
          <span>VaultCommerce</span>
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search listings, rentals, services..." 
              className="w-full bg-muted border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/listings/create" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="gap-2">
              <ListPlus className="h-4 w-4" />
              Post Listing
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-secondary rounded-full border-2 border-card" />
          </Button>
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
              <User className="h-4 w-4" />
              My Account
            </Button>
            <Button variant="outline" size="icon" className="sm:hidden">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}