
"use client";

import { MessageSquare, Heart, TrendingUp, CircleDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/components/providers';
import { useState } from 'react';
import { AuthDialog } from '@/components/auth-dialog';

/**
 * @fileOverview Institutional Benefits Command Node
 * 1:1 functional clone of the OLX "Create account" benefit block.
 * Uses the strict 7% border-radius protocol for the primary CTA.
 */
export function BenefitsSection() {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (user) return null;

  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-12">
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} />
      <Card className="rounded-none border shadow-sm bg-white overflow-hidden">
        <CardContent className="p-8 md:p-12 space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
            Create your Ecommerce account and enjoy all the benefits.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <CircleDollarSign className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-[13px] font-medium leading-relaxed text-secondary/80">
                <span className="font-bold">Advertise for free</span> and sell your products, cars, and real estate without paying anything.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <MessageSquare className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-[13px] font-medium leading-relaxed text-secondary/80">
                <span className="font-bold">Negotiate with buyers and sellers</span> through the Ecommerce chat and protect yourself from scams.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Heart className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-[13px] font-medium leading-relaxed text-secondary/80">
                <span className="font-bold">Favorite the offers</span> you liked the most.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-[13px] font-medium leading-relaxed text-secondary/80">
                We send <span className="font-bold">personalized recommendations</span> to help you find the perfect attachment.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              onClick={() => setShowAuth(true)}
              className="h-14 px-10 bg-primary text-secondary hover:bg-primary/90 font-black text-sm uppercase tracking-tight rounded-[7%] shadow-lg border-2 border-white/10"
            >
              Create a free account
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
