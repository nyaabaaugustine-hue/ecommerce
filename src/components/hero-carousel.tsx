"use client";

import * as React from "react";
import Image from "next/image";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const SLIDES = [
  {
    title: "FESTIVAL DE CARROS",
    subtitle: "PRA FINANCIAR, COM PARCELAS QUE CABEM NO SEU BOLSO*",
    highlight: "ATÉ 60X",
    cta: "Ver ofertas",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&auto=format&fit=crop",
    color: "bg-burgundy"
  },
  {
    title: "SOVEREIGN ELECTRONICS",
    subtitle: "THE GOLD STANDARD OF TECH DEALS IN ACCRA",
    highlight: "40% OFF",
    cta: "Shop now",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg",
    color: "bg-secondary"
  }
];

/**
 * @fileOverview High-Fidelity Marketplace Carousel
 * Functional 1:1 structural clone of the OLX hero slider.
 */
export function HeroCarousel() {
  return (
    <section className="w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {SLIDES.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden bg-black rounded-lg">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  sizes="100vw" 
                  className="object-cover opacity-60" 
                  priority={i === 0} 
                />
                
                <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
                  <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                       <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">{slide.highlight}</span>
                       <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-wider max-w-xs leading-tight">
                         {slide.subtitle}
                       </p>
                    </div>
                    <Button className="w-fit bg-[#90EE90] text-secondary hover:bg-white font-black uppercase text-[11px] tracking-[0.2em] h-12 px-10 rounded-[2rem] shadow-2xl transition-all">
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Custom Branding Overlay Stubs */}
                <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 h-12 w-12 bg-white/20 border-white/10 text-white rounded-full hover:bg-white hover:text-secondary transition-all" />
        <CarouselNext className="right-4 h-12 w-12 bg-white/20 border-white/10 text-white rounded-full hover:bg-white hover:text-secondary transition-all" />

        {/* Dash Indicators Registry */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <div key={idx} className={cn(
              "h-1.5 w-12 rounded-full transition-all",
              idx === 0 ? "bg-primary" : "bg-white/30"
            )} />
          ))}
        </div>
      </Carousel>
    </section>
  );
}

// Minimal helper since it's used in carousel locally
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
