
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
import { Badge } from "@/components/ui/badge";

const SLIDES = [
  {
    title: "FESTIVAL DE CARROS",
    subtitle: "PRA FINANCIAR, COM PARCELAS QUE CABEM NO SEU BOLSO",
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

export function HeroCarousel() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Carousel className="w-full">
        <CarouselContent>
          {SLIDES.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden bg-secondary border-b-4 border-primary shadow-2xl">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  sizes="100vw" 
                  className="object-cover opacity-40 contrast-125" 
                  priority={i === 0} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent p-10 md:p-20 flex flex-col justify-center">
                  <div className="max-w-2xl space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic">
                      {slide.title}
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                       <span className="text-5xl md:text-8xl font-black text-primary tracking-tighter">{slide.highlight}</span>
                       <p className="text-white/60 text-xs md:text-sm font-black uppercase tracking-widest max-w-xs leading-tight">
                         {slide.subtitle}
                       </p>
                    </div>
                    <Button className="w-fit bg-white text-secondary hover:bg-primary hover:text-secondary font-black uppercase text-[11px] tracking-[0.2em] h-14 px-12 rounded-none shadow-2xl transition-all">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-12 w-12 bg-white/10 border-white/20 text-white rounded-none hover:bg-primary hover:text-secondary" />
        <CarouselNext className="right-4 h-12 w-12 bg-white/10 border-white/20 text-white rounded-none hover:bg-primary hover:text-secondary" />
      </Carousel>
    </section>
  );
}
