
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { AuthProvider, CartProvider } from '@/components/providers';
import { CartSheet } from '@/components/cart-sheet';
import { LiveActivityFeed } from '@/components/live-activity-feed';

export const metadata: Metadata = {
  title: 'VaultCommerce | The Gold Standard',
  description: 'The Gold Standard for secure cross-category trade in Ghana. Institutionally powered by multisig escrow protocols.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
        href: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
      }
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
        href: 'https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg',
      }
    ],
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
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background min-h-screen flex flex-col text-secondary" suppressHydrationWarning>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            
            <CartSheet />
            <LiveActivityFeed />

            <footer className="bg-secondary text-white pt-16 pb-12 border-t border-primary/40">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                  <div className="lg:col-span-1 space-y-6">
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 font-headline font-black text-2xl text-white">
                          <div className="relative h-10 w-10 overflow-hidden rounded-none border border-primary/30">
                            <Image 
                              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999402/file_eognv9.jpg" 
                              alt="VaultCommerce" 
                              fill 
                              className="object-cover"
                            />
                          </div>
                          <span className="tracking-tighter">Vault<span className="text-primary">Commerce</span></span>
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed max-w-xs font-medium">
                          The Gold Standard for secure cross-category trade in Ghana. Institutionally powered by multisig escrow protocols.
                        </p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-[9px] font-black uppercase tracking-widest text-primary">Protocol Support</p>
                        <p className="text-lg font-black text-white">+233 24 000 0000</p>
                     </div>
                  </div>
                  
                  <div>
                    <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-primary">Marketplace Registry</h4>
                    <ul className="space-y-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                      <li className="hover:text-primary transition-colors cursor-pointer">Global Inventory</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Elite Favorites</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Treasury Settlement</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Sovereign SLA</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-primary">Vendor Registry</h4>
                    <ul className="space-y-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                      <li className="hover:text-primary transition-colors cursor-pointer">Fidelity Security</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Vault Protocols</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Institutional Layer</li>
                      <li className="hover:text-primary transition-colors cursor-pointer">Mediation Node</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-primary">Anti-Fraud Engine</h4>
                    <ul className="space-y-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                      <li className="hover:text-primary transition-colors cursor-pointer">Identity Registry</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-primary">Mobile Registry</h4>
                    <p className="text-white/50 text-[10px] mb-6 font-medium leading-relaxed">Manage your registry assets on the go. Available for sovereign users.</p>
                    <div className="flex flex-col gap-3">
                      <Image src="https://placehold.co/200x60/0a1a2f/ffffff?text=App+Store" alt="App Store" width={160} height={48} className="rounded-none cursor-pointer hover:brightness-125 transition-all shadow-xl" unoptimized />
                      <Image src="https://placehold.co/200x60/0a1a2f/ffffff?text=Google+Play" alt="Google Play" width={160} height={48} className="rounded-none cursor-pointer hover:brightness-125 transition-all shadow-xl" unoptimized />
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/5 text-center text-white/30 text-[9px] font-black uppercase tracking-[0.4em]" suppressHydrationWarning>
                  © 2026 VaultCommerce. All rights reserved by Cyber.
                </div>
              </div>
            </footer>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
