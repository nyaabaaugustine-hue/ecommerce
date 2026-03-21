
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SPOTLIGHTS = [
  {
    title: "Cell phones",
    href: "/listings?category=Electronics",
    imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png",
    imageHint: "ghanaian smartphone"
  },
  {
    title: "Video games",
    href: "/listings?category=Electronics",
    imageUrl: "https://picsum.photos/seed/gh-spot-games/800/600",
    imageHint: "gaming console"
  },
  {
    title: "Computers",
    href: "/listings?category=Electronics",
    imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177984_n39gml.png",
    imageHint: "office computer"
  },
  {
    title: "Cameras and Drones",
    href: "/listings?category=Electronics",
    imageUrl: "https://picsum.photos/seed/gh-spot-cam/800/600",
    imageHint: "digital camera"
  },
];

/**
 * @fileOverview Marketplace Spotlight Categories Node
 * Exact structural clone of the 4-column promotional module in the OLX reference.
 * Aligned to the 1280px master grid.
 */
export function SpotlightCategories() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-12 animate-in fade-in duration-1000">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-foreground tracking-tight leading-tight">
          Electronics with prices <span className="font-bold">reduced by up to 10%!</span>
        </h2>
        <p className="text-sm text-muted-foreground font-medium mt-1 uppercase tracking-widest">
          Work and have fun
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPOTLIGHTS.map((item, idx) => (
          <Link 
            key={item.title} 
            href={item.href}
            className={cn(
              "group relative flex flex-col bg-white border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-500 rounded-md",
              `animate-in slide-in-from-bottom-4 delay-${idx * 150}`
            )}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 300px"
                data-ai-hint={item.imageHint}
                unoptimized
              />
            </div>
            <div className="p-4 bg-muted/5 group-hover:bg-primary/5 transition-colors">
              <p className="text-center font-bold text-[13px] text-foreground/80 group-hover:text-primary uppercase tracking-tight">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
