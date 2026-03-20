import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'VaultCommerce | Secure Escrow Marketplace',
  description: 'A cross-category marketplace aggregator with high-trust escrow interactions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t py-8 bg-card mt-auto">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} VaultCommerce. Secure Transactions Simplified.
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}