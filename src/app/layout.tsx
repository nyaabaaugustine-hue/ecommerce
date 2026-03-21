
"use client";

import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { AuthProviderWrapper, useContent } from '@/components/providers';
import { CartSheet } from '@/components/cart-sheet';
import { LiveActivityFeed } from '@/components/live-activity-feed';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Image from 'next/image';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { content } = useContent();
  
  return (
    <body className="font-body antialiased bg-background min-h-screen flex flex-col text-secondary m-0 p-0" suppressHydrationWarning>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      
      <WhatsAppButton />
      <CartSheet />
      <LiveActivityFeed />

      <footer className="bg-secondary text-white pt-12 pb-8 border-t border-primary/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-headline font-black text-xl text-white">
                    <div className="relative h-8 w-8 overflow-hidden rounded-[var(--radius)] border border-primary/30">
                      <Image 
                        src={content.settings.logoUrl} 
                        alt="Logo" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <span className="tracking-tighter uppercase">
                      <span className="text-primary animate-v-glow">{content.settings.siteName.charAt(0)}</span>{content.settings.siteName.slice(1)}
                    </span>
                  </div>
                  <p className="text-white/50 text-[10px] leading-relaxed max-w-xs font-medium">
                    The Gold Standard for secure cross-category trade in Ghana. Institutionally powered by multisig escrow protocols.
                  </p>
               </div>
               <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest text-primary">Protocol Support</p>
                  <p className="text-base font-black text-white">{content.settings.supportPhone}</p>
               </div>
            </div>
            
            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Marketplace Registry</h4>
              <ul className="space-y-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                <li className="hover:text-primary transition-colors cursor-pointer">Global Inventory</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Elite Favorites</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Treasury Settlement</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Vendor Registry</h4>
              <ul className="space-y-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                <li className="hover:text-primary transition-colors cursor-pointer">Fidelity Security</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Vault Protocols</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Mediation Node</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Anti-Fraud Engine</h4>
              <ul className="space-y-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                <li className="hover:text-primary transition-colors cursor-pointer">Identity Registry</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Mobile Registry</h4>
              <p className="text-white/50 text-[9px] mb-4 font-medium leading-relaxed">Manage your registry assets on the go.</p>
              <div className="flex flex-col gap-2">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774019348/download_yztyla.png" 
                  alt="Download" 
                  width={160} 
                  height={48} 
                  className="rounded-[var(--radius)] cursor-pointer hover:brightness-110 shadow-xl" 
                  unoptimized 
                />
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/5 text-center text-white/30 text-[8px] font-black uppercase tracking-[0.4em]" suppressHydrationWarning>
            {content.settings.footerCopyright}
          </div>
        </div>
      </footer>
      <Toaster />
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057991/supermarket-widget-1_cavrxq.jpg" />
      </head>
      <AuthProviderWrapper>
        <LayoutContent>{children}</LayoutContent>
      </AuthProviderWrapper>
    </html>
  );
}
