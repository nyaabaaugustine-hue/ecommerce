"use client";

import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { AuthProviderWrapper } from '@/components/providers';
import { LiveActivityFeed } from '@/components/live-activity-feed';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { PostAdButton } from '@/components/post-ad-button';
import { ShoppingAssistant } from '@/components/shopping-assistant';
import { OnboardingTour } from '@/components/onboarding-tour';
import { PromotionPopup } from '@/components/promotion-popup';
import { Facebook, Youtube, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white dark:bg-background text-foreground pt-16 pb-12 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 mb-16 text-xs md:text-sm font-black text-secondary uppercase tracking-widest">
          <Link href="/help" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Help Node</Link>
          <Link href="/safety" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Safety Protocols</Link>
          <Link href="/terms" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Terms of use</Link>
          <Link href="/privacy" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Privacy Policy</Link>
          <Link href="/about" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">About Vault</Link>
          <Link href="/vendors" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Vendor Registry</Link>
          <Link href="/contact" className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Contact Registry</Link>
        </div>

        <div className="pt-12 border-t border-dashed border-secondary/20 flex flex-col items-center gap-10">
          <p className="text-[11px] md:text-xs font-black text-secondary text-center uppercase tracking-[0.3em] leading-relaxed">
            © 2026 Ecommerce Inc. Registry Node: Airport Residential Area, Accra, Ghana Node - 00233-GH-ACC
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="h-10 w-10 bg-secondary rounded-none flex items-center justify-center hover:bg-primary transition-all text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-secondary rounded-none flex items-center justify-center hover:bg-primary transition-all text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-secondary rounded-none flex items-center justify-center hover:bg-primary transition-all text-white">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-secondary rounded-none flex items-center justify-center hover:bg-primary transition-all text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-secondary rounded-none flex items-center justify-center hover:bg-primary transition-all text-white">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057903/ai-removebg-preview_ikywpe.png" />
      </head>
      <body className="antialiased bg-background min-h-screen flex flex-col text-secondary m-0 p-0" suppressHydrationWarning>
        <AuthProviderWrapper>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          
          <WhatsAppButton />
          <PostAdButton />
          <LiveActivityFeed />
          <ShoppingAssistant />
          <OnboardingTour />
          <PromotionPopup />
          <Footer />
          <Toaster />
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
