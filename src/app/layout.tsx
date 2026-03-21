"use client";

import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { AuthProviderWrapper, useContent } from '@/components/providers';
import { LiveActivityFeed } from '@/components/live-activity-feed';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { PostAdButton } from '@/components/post-ad-button';
import { ShoppingAssistant } from '@/components/shopping-assistant';
import { OnboardingTour } from '@/components/onboarding-tour';
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
      <PostAdButton />
      <LiveActivityFeed />
      <ShoppingAssistant />
      <OnboardingTour />

      <footer className="bg-secondary text-white pt-12 pb-8 border-t border-primary/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-1 space-y-4">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 font-headline font-black text-xl text-white">
                    <div className="relative h-8 w-8 overflow-hidden rounded-none border border-primary/30 shadow-sm">
                      <Image 
                        src={content.settings.logoUrl} 
                        alt="Logo" 
                        fill 
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <span className="tracking-tighter uppercase">
                      <span className="text-primary animate-v-glow">{content.settings.siteName.charAt(0)}</span>{content.settings.siteName.slice(1)}
                    </span>
                  </div>
                  <p className="text-white/50 text-[10px] leading-relaxed max-w-xs font-medium uppercase tracking-widest">
                    The most trusted multi-vendor marketplace in Accra. Protected by multi-method escrow systems.
                  </p>
               </div>
               <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-widest text-primary">Support Center</p>
                  <p className="text-base font-black text-white">{content.settings.supportPhone}</p>
               </div>
            </div>
            
            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Marketplace</h4>
              <ul className="space-y-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                <li className="hover:text-primary transition-colors cursor-pointer">Vehicles & Cars</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Property & Land</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Jobs & Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs mb-4 uppercase tracking-widest text-primary">Help & Safety</h4>
              <ul className="space-y-2 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                <li className="hover:text-primary transition-colors cursor-pointer">Escrow Protection</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Buyer Guarantee</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Dispute Center</li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="font-black text-xs uppercase tracking-widest text-primary">Authorized Payments</h4>
              <div className="bg-white/5 p-4 border border-white/10 rounded-none inline-block">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774059424/Screenshot_319_zlvuyf.png" 
                  alt="Payment Methods" 
                  width={300} 
                  height={60} 
                  className="h-auto w-full max-w-[280px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
              <p className="text-[8px] text-white/30 uppercase font-black tracking-widest leading-relaxed">
                Secure local and international checkout nodes active.
              </p>
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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057903/ai-removebg-preview_ikywpe.png" />
      </head>
      <AuthProviderWrapper>
        <LayoutContent>{children}</LayoutContent>
      </AuthProviderWrapper>
    </html>
  );
}
