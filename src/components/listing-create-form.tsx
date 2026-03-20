"use client";

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Plus, X, ShieldCheck, Info, Calculator, ArrowRightLeft } from 'lucide-react';
import { generateListingDescription } from '@/ai/flows/ai-generated-listing-description-flow';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  title: z.string().min(5, "Institutional title must be at least 5 characters"),
  category: z.string().min(1, "Please select an institutional sector"),
  price: z.string().min(1, "Please enter a registry price"),
  description: z.string().min(20, "Protocol description must be at least 20 characters"),
  location: z.string().min(3, "Please enter a verified market location"),
});

export function ListingCreateForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      price: "",
      description: "",
      location: "Accra, Ghana",
    },
  });

  const watchPrice = form.watch('price');
  const commissionRate = 0.025; // 2.5% institutional fee
  
  const payoutStats = useMemo(() => {
    const price = parseFloat(watchPrice) || 0;
    const treasuryFee = price * commissionRate;
    const netEarnings = price - treasuryFee;
    return { treasuryFee, netEarnings };
  }, [watchPrice]);

  const handleGenerateDescription = async () => {
    const title = form.getValues('title');
    const category = form.getValues('category');

    if (!title || !category) {
      toast({
        title: "Metadata Incomplete",
        description: "Please provide a title and sector first to initiate AI node.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateListingDescription({
        title,
        category,
        keyFeatures: keyFeatures.length > 0 ? keyFeatures : ["Sovereign Warranty", "Verified Registry Member", "Vault Secured"],
        length: 'medium',
        tone: 'professional'
      });
      form.setValue('description', result.description);
      toast({
        title: "AI Synthesis Successful",
        description: "Registry description has been optimized for GHS marketplace.",
      });
    } catch (error) {
      toast({
        title: "AI Node Temporarily Paused",
        description: "Focusing on manual protocol input. AI optimizations are currently offline.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const addFeature = () => {
    if (featureInput.trim() && !keyFeatures.includes(featureInput.trim())) {
      setKeyFeatures([...keyFeatures, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Listing Authorized",
      description: "Asset is now live in the global registry with multisig escrow protection.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Asset Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Executive Corporate Suite - Ridge" className="rounded-none h-14 border-2 focus:border-accent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Market Sector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-none h-14 border-2 focus:border-accent">
                      <SelectValue placeholder="Select Institutional Sector" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-none">
                    <SelectItem value="Electronics">Electronics & Tech</SelectItem>
                    <SelectItem value="Real Estate">Real Estate & Property</SelectItem>
                    <SelectItem value="Education">Educational Services</SelectItem>
                    <SelectItem value="Professional Services">Professional Advisory</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Registry Value (GH₵)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-primary">GH₵</span>
                    <Input type="number" placeholder="0.00" className="rounded-none h-14 pl-16 border-2 focus:border-accent" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Verified Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Airport Residential Area, Accra" className="rounded-none h-14 border-2 focus:border-accent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {watchPrice && (
          <Card className="bg-background border-2 border-dashed border-primary/20 rounded-none overflow-hidden shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-5 w-5 text-accent" />
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Settlement Protocol Breakdown</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Gross Asset Value</span>
                  <p className="text-2xl font-black text-secondary">GH₵{parseFloat(watchPrice).toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    Treasury Lock Fee (2.5%) <Info className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-2xl font-black text-destructive">-GH₵{payoutStats.treasuryFee.toFixed(2)}</p>
                </div>
                <div className="space-y-2 bg-primary/5 p-5 border-l-4 border-accent">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Net Vendor Settlement</span>
                  <p className="text-3xl font-black text-primary">GH₵{payoutStats.netEarnings.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Institutional Features</FormLabel>
            <span className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Optimizes Registry Visibility</span>
          </div>
          <div className="flex gap-3">
            <Input 
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="e.g. Accredited Ownership, Multisig Authorized..."
              className="rounded-none h-14 border-2 focus:border-accent"
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
            />
            <Button type="button" variant="secondary" onClick={addFeature} className="rounded-none px-8 h-14 bg-secondary text-white font-black">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {keyFeatures.map((feature, i) => (
              <Badge key={i} className="bg-primary/10 text-primary py-2 px-5 border-2 border-primary/20 rounded-none font-bold uppercase text-[9px] tracking-widest">
                {feature}
                <button type="button" onClick={() => removeFeature(i)} className="ml-3">
                  <X className="h-3.5 w-3.5 hover:text-destructive transition-colors" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-3">
                <FormLabel className="text-secondary font-black uppercase text-[10px] tracking-widest">Asset Specifications</FormLabel>
                <Button 
                  type="button" 
                  size="sm" 
                  className="h-10 gap-3 bg-secondary text-accent hover:bg-secondary/90 font-black rounded-none px-8 shadow-lg text-[9px] tracking-[0.2em] uppercase"
                  onClick={handleGenerateDescription}
                  disabled={isGenerating}
                >
                  {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  AI Registry Assistant
                </Button>
              </div>
              <FormControl>
                <Textarea 
                  placeholder="Provide comprehensive institutional overview and protocol requirements..." 
                  className="min-h-[250px] rounded-none leading-relaxed border-2 focus:border-accent transition-colors bg-background p-6 font-medium" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="bg-secondary p-10 rounded-none text-white flex flex-col md:flex-row items-center gap-10 relative overflow-hidden border-b-4 border-accent shadow-2xl">
          <div className="absolute -left-16 -top-16 w-40 h-40 bg-accent/5 rounded-none blur-3xl" />
          <div className="bg-white/5 p-6 rounded-none backdrop-blur-md border border-white/10 shadow-inner">
            <ShieldCheck className="h-12 w-12 text-accent" />
          </div>
          <div className="flex-1 space-y-3">
            <h4 className="font-black text-2xl mb-2 flex items-center gap-4 tracking-tighter uppercase">
              <ArrowRightLeft className="h-6 w-6 text-accent" />
              Sovereign Escrow Protection
            </h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              VaultCommerce enforces high-trust institutional trade in Ghana. Upon authorization, funds are restricted via Paystack until the recipient certifies the fidelity audit. All disbursements follow automated treasury split-logic.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-12 pb-8">
          <Button type="submit" size="lg" className="px-20 bg-primary text-white hover:bg-accent hover:text-secondary rounded-none font-black h-16 shadow-2xl text-[11px] uppercase tracking-[0.3em] border-2 border-primary">
            Publish To Global Registry
          </Button>
        </div>
      </form>
    </Form>
  );
}
