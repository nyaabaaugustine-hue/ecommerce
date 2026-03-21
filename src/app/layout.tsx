
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
import { Facebook, Youtube, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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

      <footer className="bg-white dark:bg-background text-foreground pt-12 pb-8 border-t">
        <div className="max-w-7xl mx-auto px-4">
          {/* Horizontal Link Registry */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
            <Link href="/help" className="hover:text-primary">Help Node</Link>
            <Link href="/safety" className="hover:text-primary">Safety Protocols</Link>
            <Link href="/terms" className="hover:text-primary">Terms of use</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/about" className="hover:text-primary">About Vault</Link>
            <Link href="/vendors" className="hover:text-primary">Vendor Registry</Link>
            <Link href="/contact" className="hover:text-primary">Contact Registry</Link>
          </div>

          <div className="pt-12 border-t flex flex-col items-center gap-8">
            <p className="text-[10px] font-black text-muted-foreground text-center uppercase tracking-widest opacity-60">
              © 2026 Ecommerce Inc. Registry Node: Airport Residential Area, Accra, Ghana Node - 00233-GH-ACC
            </p>

            {/* Social Protocol Registry */}
            <div className="flex items-center gap-6">
              <a href="#" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all text-muted-foreground hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all text-muted-foreground hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all text-muted-foreground hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all text-muted-foreground hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all text-muted-foreground hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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
