
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ListingCard } from '@/components/listing-card';
import { ShieldCheck, Truck, Users, Coins, ArrowRight, CheckCircle2, Search, Briefcase, Home, GraduationCap, Gavel, Car, Laptop } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const categories = [
    { name: 'Electronics', icon: Laptop, count: '2.4k', color: 'text-blue-500' },
    { name: 'Real Estate', icon: Home, count: '1.2k', color: 'text-green-500' },
    { name: 'Education', icon: GraduationCap, count: '850', color: 'text-purple-500' },
    { name: 'Services', icon: Briefcase, count: '3.1k', color: 'text-orange-500' },
    { name: 'Legal', icon: Gavel, count: '420', color: 'text-red-500' },
    { name: 'Automotive', icon: Car, count: '920', color: 'text-aqua-500' },
  ];

  const featuredListings = [
    {
      id: '1',
      title: 'MacBook Pro M3 Max 16"',
      category: 'Electronics',
      price: 3499,
      location: 'Accra, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'electronics')?.imageUrl || '',
      rating: 4.9,
      provider: 'GadgetZone'
    },
    {
      id: '2',
      title: 'Modern 2-Bedroom Apartment',
      category: 'Real Estate',
      price: 1200,
      location: 'East Legon, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'real-estate')?.imageUrl || '',
      rating: 4.7,
      provider: 'PrimeRentals'
    },
    {
      id: '3',
      title: 'Advanced React Native Mentorship',
      category: 'Education',
      price: 150,
      location: 'Remote',
      imageUrl: PlaceHolderImages.find(img => img.id === 'education')?.imageUrl || '',
      rating: 5.0,
      provider: 'DevMastery'
    },
    {
      id: '4',
      title: 'Legal Consulting - Corporate Law',
      category: 'Professional Services',
      price: 500,
      location: 'Accra, Ghana',
      imageUrl: PlaceHolderImages.find(img => img.id === 'services')?.imageUrl || '',
      rating: 4.8,
      provider: 'GlobalLex'
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 py-1.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-500">
              The Cross-Category Trust Aggregator
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-8 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
              High-Trust Marketplace <br className="hidden md:block" /> 
              <span className="text-secondary">Secured by Escrow</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-900">
              Whether you're hiring an employee, renting an apartment, or buying a laptop, our secure vault holds the funds until you're satisfied.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Link href="/listings" className="w-full sm:w-auto">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-10 h-16 font-bold w-full rounded-full shadow-2xl shadow-secondary/20">
                  Explore Marketplace
                </Button>
              </Link>
              <Link href="/listings/create" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white text-lg px-10 h-16 font-bold w-full rounded-full backdrop-blur-md">
                  List a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats / Flow */}
      <section className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: 'Secure Initiation', 
              desc: 'Funds are captured via Paystack and held in our encrypted Escrow Vault immediately upon purchase.',
              step: '01'
            },
            { 
              icon: Truck, 
              title: 'Verification Gate', 
              desc: 'Sellers deliver the goods or services. Funds remain restricted until the buyer confirms completion.',
              step: '02'
            },
            { 
              icon: Coins, 
              title: 'Automated Split', 
              desc: 'Upon verification, funds are instantly split between the provider and platform treasury.',
              step: '03'
            }
          ].map((item, i) => (
            <Card key={i} className="p-8 border-none shadow-2xl bg-white/95 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <item.icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <span className="text-4xl font-headline font-black text-muted/30 group-hover:text-secondary/20 transition-colors">{item.step}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">What are you looking for?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">VaultCommerce aggregates the best listings across dozens of professional and personal categories.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/listings?category=${cat.name}`}>
              <Card className="p-8 text-center border-none shadow-sm hover:shadow-xl transition-all cursor-pointer group bg-card">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted group-hover:bg-primary transition-colors mb-4`}>
                  <cat.icon className={`h-8 w-8 ${cat.color} group-hover:text-white transition-colors`} />
                </div>
                <div className="font-bold text-base mb-1 text-primary">{cat.name}</div>
                <div className="text-xs text-muted-foreground">{cat.count} listings</div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Trending Secure Listings</h2>
              <p className="text-muted-foreground">Hand-picked listings currently held in active escrow vaults.</p>
            </div>
            <Link href="/listings">
              <Button variant="ghost" className="text-primary font-bold gap-2 group">
                Browse All Marketplace
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Trust Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <Image src={PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || ''} alt="Trust" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-8">Ready to list with full protection?</h2>
            <div className="space-y-6 mb-12">
              {[
                'Real-time transaction tracking',
                'Automated Paystack settlement',
                'Zero-fraud marketplace policy',
                'AI-assisted high-converting descriptions'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/90">
                  <div className="bg-secondary p-1 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg font-light">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/listings/create">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-10">
                  Start Listing Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-10">
                Talk to Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
