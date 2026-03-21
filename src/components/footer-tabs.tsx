
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MAIN_CATEGORIES = [
  "Cell phones and telephony",
  "Furniture",
  "Apartments",
  "Children's items",
  "Jewelry, watches and..."
];

/**
 * @fileOverview Institutional Footer Tabs Node
 * 1:1 structural clone of the OLX footer tab interaction.
 * Aligned to the 1280px (max-w-7xl) grid.
 */
export function FooterTabs() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-12 border-t border-border/50">
      <Tabs defaultValue="main" className="w-full">
        <TabsList className="bg-transparent h-auto p-0 flex justify-start gap-8 border-b rounded-none mb-10 w-full overflow-x-auto no-scrollbar">
          <TabsTrigger 
            value="main" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-4 text-sm font-bold text-muted-foreground data-[state=active]:text-primary"
          >
            Main Categories
          </TabsTrigger>
          <TabsTrigger 
            value="popular" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-4 text-sm font-bold text-muted-foreground data-[state=active]:text-primary"
          >
            Popular Surveys
          </TabsTrigger>
          <TabsTrigger 
            value="links" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-4 text-sm font-bold text-muted-foreground data-[state=active]:text-primary"
          >
            Useful links
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="main" className="mt-0">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {MAIN_CATEGORIES.map((cat) => (
              <a 
                key={cat} 
                href="/listings" 
                className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat}
              </a>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular">
          <p className="text-[13px] font-medium text-muted-foreground">Rent trends in Accra, Vehicle value index Ghana, Electronics market reports.</p>
        </TabsContent>
        
        <TabsContent value="links">
          <div className="flex flex-wrap gap-8">
            <a href="/about" className="text-[13px] font-medium text-muted-foreground hover:text-primary underline">Escrow Guide</a>
            <a href="/contact" className="text-[13px] font-medium text-muted-foreground hover:text-primary underline">Safety Tips</a>
            <a href="/contact" className="text-[13px] font-medium text-muted-foreground hover:text-primary underline">Contact Us</a>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
