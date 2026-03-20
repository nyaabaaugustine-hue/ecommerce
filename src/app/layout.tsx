import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { ShoppingBag, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'VaultCommerce | Sovereign GHS Marketplace',
  description: 'The institution-grade cross-category marketplace aggregator with high-trust escrow protocols.',
  icons: {
    icon: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
    apple: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background min-h-screen flex flex-col text-secondary" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        
        {/* Floating Cart Console */}
        <div className="fixed right-10 bottom-10 z-50 flex flex-col gap-5">
          <div className="bg-secondary text-white p-5 rounded-[1.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] flex flex-col items-center cursor-pointer hover:scale-105 transition-all group border border-primary/20">
             <ShoppingBag className="h-8 w-8 text-primary" />
             <span className="text-[10px] font-black mt-2 tracking-widest uppercase">Vault: 0</span>
             <span className="text-[10px] font-black bg-primary text-secondary px-3 py-0.5 rounded-full mt-2 transition-colors">GH₵0.00</span>
          </div>
          <Button variant="outline" size="icon" className="rounded-full bg-white shadow-2xl border-primary/20 text-secondary hover:bg-primary hover:text-secondary h-14 w-14 transition-all">
            <ChevronUp className="h-7 w-7" />
          </Button>
        </div>

        <footer className="bg-secondary text-white pt-24 pb-12 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div className="space-y-8">
                 <div className="flex items-center gap-4 font-headline font-black text-3xl text-white">
                    <div className="relative h-12 w-12 overflow-hidden rounded-[1rem] border border-primary/30">
                      <Image 
                        src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                        alt="VaultCommerce" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <span className="tracking-tighter">Vault<span className="text-primary">Commerce</span></span>
                 </div>
                 <p className="text-white/50 text-base leading-relaxed max-w-sm">
                   The Gold Standard for secure cross-category trade in Ghana. Institutionally powered by multisig escrow protocols.
                 </p>
                 <div className="space-y-3">
                    <p className="text-sm font-black uppercase tracking-widest">Protocol Support</p>
                    <p className="text-xl font-black text-primary">+233 24 000 0000</p>
                 </div>
              </div>
              
              <div>
                <h4 className="font-black text-xl mb-8 tracking-tighter">Marketplace Registry</h4>
                <ul className="space-y-5 text-white/50 text-sm font-bold uppercase tracking-widest">
                  <li className="hover:text-primary transition-colors cursor-pointer">Global Inventory</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Elite Favorites</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Treasury Settlement</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Sovereign SLA</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Vendor Registry</li>
                </ul>
              </div>

              <div>
                <h4 className="font-black text-xl mb-8 tracking-tighter">Fidelity Security</h4>
                <ul className="space-y-5 text-white/50 text-sm font-bold uppercase tracking-widest">
                  <li className="hover:text-primary transition-colors cursor-pointer">Vault Protocols</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Institutional Layer</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Mediation Node</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Identity Registry</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Anti-Fraud Engine</li>
                </ul>
              </div>

              <div>
                <h4 className="font-black text-xl mb-8 tracking-tighter">Mobile Registry</h4>
                <p className="text-white/50 text-sm mb-8 font-medium">Manage your registry assets on the go. Available for sovereign users.</p>
                <div className="flex flex-col gap-4">
                  <Image src="https://placehold.co/200x60/0a1a2f/ffffff?text=App+Store" alt="App Store" width={200} height={60} className="rounded-xl cursor-pointer hover:brightness-125 transition-all shadow-2xl" unoptimized />
                  <Image src="https://placehold.co/200x60/0a1a2f/ffffff?text=Google+Play" alt="Google Play" width={200} height={60} className="rounded-xl cursor-pointer hover:brightness-125 transition-all shadow-2xl" unoptimized />
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 text-center text-white/30 text-xs font-black uppercase tracking-[0.4em]" suppressHydrationWarning>
              © 2026 VaultCommerce. All rights reserved by <a href="https://cybergh.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Cyber</a>.
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
