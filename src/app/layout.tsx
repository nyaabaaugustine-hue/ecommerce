import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { ShoppingBag, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'VaultCommerce | Secure Global Marketplace',
  description: 'The cross-category marketplace aggregator with high-trust escrow interactions.',
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
      <body className="font-body antialiased bg-[#f8f8f8] min-h-screen flex flex-col text-[#333]" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        
        {/* Floating Cart Console */}
        <div className="fixed right-6 bottom-24 z-50 flex flex-col gap-3">
          <div className="bg-primary text-white p-3 rounded-xl shadow-2xl flex flex-col items-center cursor-pointer hover:scale-105 transition-transform group">
             <ShoppingBag className="h-6 w-6" />
             <span className="text-[10px] font-black mt-1">0 Items</span>
             <span className="text-[10px] font-bold bg-white text-primary px-2 rounded-full mt-1 group-hover:bg-secondary group-hover:text-primary transition-colors">GH₵0.00</span>
          </div>
          <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg border-primary/20 text-primary hover:bg-primary hover:text-white transition-all">
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>

        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                 <div className="flex items-center gap-2 font-headline font-bold text-2xl text-primary">
                    <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                      <Image 
                        src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                        alt="VaultCommerce" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <span>VaultCommerce</span>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed">
                   The ultimate all-in-one high-trust solution for secure commerce in Ghana. Powered by Paystack Escrow.
                 </p>
                 <div className="space-y-2">
                    <p className="text-sm font-bold">Protocol Support: <span className="text-primary font-normal">+233 24 000 0000</span></p>
                    <p className="text-sm font-bold">Secure Mail: <span className="text-primary font-normal">vault@vaultcommerce.com</span></p>
                 </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Marketplace</h4>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">Live Inventory</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Vault Favorites</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Bulk Settlement</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">SLA Policy</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Vendor Portal</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Security</h4>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">Escrow Protocols</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Paystack GHS Layer</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Dispute Resolution</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Identity Vault</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Fraud Prevention</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Mobile Access</h4>
                <p className="text-white/60 text-xs mb-6">Manage your vault on the go. Available for GHS users.</p>
                <div className="flex flex-col gap-4">
                  <Image src="https://placehold.co/160x48/000000/ffffff?text=App+Store" alt="App Store" width={160} height={48} className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity" unoptimized />
                  <Image src="https://placehold.co/160x48/000000/ffffff?text=Google+Play" alt="Google Play" width={160} height={48} className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity" unoptimized />
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs" suppressHydrationWarning>
              © 2026 VaultCommerce. All rights reserved by <a href="https://cybergh.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Cyber</a>.
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}