"use client";

import * as React from "react";
import Image from "next/image";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Timer } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    leftBg: "bg-[#6e0ad6]",
    rightBg: "bg-[#f2eafa]",
    title: "O maior inventário de autos do Brasil. ",
    highlight: "Mais de 800 mil opções pra escolher.",
    cta: "Ver ofertas",
    mainImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1600&auto=format&fit=crop",
    sideTitle: "Toyota Corolla GLI",
    sideDesc: "Ano 2024, 22.300 km e motor 2.0 Flex",
    accentColor: "text-[#6e0ad6]"
  },
  {
    id: 2,
    leftBg: "bg-[#d60a91]",
    rightBg: "bg-[#fbeaf5]",
    title: "Sovereign Electronics Center. ",
    highlight: "Os melhores smartphones de GHS-Accra.",
    cta: "Shop now",
    mainImage: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999233/177985_njyykl.png",
    sideTitle: "iPhone 15 Pro",
    sideDesc: "Titanium Blue, 256GB. Condição de Vault.",
    accentColor: "text-[#d60a91]"
  }
];

/**
 * @fileOverview High-Fidelity Marketplace Carousel
 * Exact structural clone of the 3-pane OLX hero layout.
 */
export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full relative group">
      <Carousel 
        setApi={setApi}
        className="w-full" 
        opts={{ loop: true }}
      >
        <CarouselContent>
          {SLIDES.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden rounded-xl flex shadow-sm border border-border/50">
                {/* LEFT PANE: BRANDING & CTA */}
                <div className={cn("w-full md:w-[40%] flex flex-col justify-center p-8 md:p-12 z-10 text-white relative", slide.leftBg)}>
                  <div className="space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                      {slide.title}
                      <span className="block font-black">{slide.highlight}</span>
                    </h1>
                    <div className="md:hidden">
                       <Button className="bg-[#90EE90] text-secondary hover:bg-white font-bold rounded-full h-10 px-8 transition-all">
                        {slide.cta}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* MIDDLE PANE: ASSET IMAGE */}
                <div className="hidden md:flex flex-1 relative bg-white overflow-hidden items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={slide.mainImage} 
                      alt="Hero Asset" 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* FLOATING CTA */}
                  <div className="absolute bottom-12 right-12 z-20">
                    <Button className="bg-[#90EE90] text-[#1a1a1a] hover:bg-white font-bold text-base rounded-full h-14 px-10 shadow-2xl shadow-green-500/20 transition-all scale-105 hover:scale-110">
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* RIGHT PANE: METADATA */}
                <div className={cn("hidden lg:flex w-[20%] flex-col justify-center p-8 border-l border-white/10", slide.rightBg)}>
                  <div className="space-y-4">
                    <div className={cn("h-10 w-10 flex items-center justify-center rounded-full bg-white/50", slide.accentColor)}>
                      <Timer className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={cn("font-black text-sm uppercase tracking-tight", slide.accentColor)}>
                        {slide.sideTitle}
                      </h3>
                      <p className="text-xs font-medium text-foreground/60 leading-relaxed">
                        {slide.sideDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="hidden md:flex -left-6 h-12 w-12 bg-white border shadow-xl text-foreground rounded-full hover:bg-muted transition-all z-30" />
        <CarouselNext className="hidden md:flex -right-6 h-12 w-12 bg-white border shadow-xl text-foreground rounded-full hover:bg-muted transition-all z-30" />

        {/* DASH INDICATORS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {SLIDES.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                idx === current ? "bg-primary w-10" : "bg-white/40 w-6"
              )} 
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
