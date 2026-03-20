
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
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  price: z.string().min(1, "Please enter a price"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  location: z.string().min(3, "Please enter a location"),
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
  const commissionRate = 0.025; // 2.5% platform fee
  
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
        title: "Missing Information",
        description: "Please provide a title and category first to use the AI assistant.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateListingDescription({
        title,
        category,
        keyFeatures: keyFeatures.length > 0 ? keyFeatures : ["Ghanaian warranty", "Verified local seller", "Paystack secured"],
        length: 'medium',
        tone: 'professional'
      });
      form.setValue('description', result.description);
      toast({
        title: "AI Description Generated!",
        description: "Your listing description has been optimized in GHS context.",
      });
    } catch (error) {
      toast({
        title: "AI Helper Unavailable",
        description: "We couldn't generate a description right now.",
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
      title: "Listing Published",
      description: "Your listing is now live in GH₵ with escrow security enabled.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">Listing Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Modern Office for Rent in Accra" className="rounded-xl h-12" {...field} />
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
                <FormLabel className="text-primary font-bold">Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Real Estate">Real Estate</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Professional Services">Professional Services</SelectItem>
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
                <FormLabel className="text-primary font-bold">Price (GH₵)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">GH₵</span>
                    <Input type="number" placeholder="0.00" className="rounded-xl h-12 pl-12" {...field} />
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
                <FormLabel className="text-primary font-bold">Market Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Airport Residential, Accra" className="rounded-xl h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {watchPrice && (
          <Card className="bg-muted/30 border-none overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-4 w-4 text-secondary" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">GHS Settlement Breakdown</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">Listing Price</span>
                  <p className="text-xl font-bold text-primary">GH₵{parseFloat(watchPrice).toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    Vault Fee (2.5%) <Info className="h-3 w-3" />
                  </span>
                  <p className="text-xl font-bold text-red-500">-GH₵{payoutStats.treasuryFee.toFixed(2)}</p>
                </div>
                <div className="space-y-1 bg-secondary/10 p-3 rounded-xl border border-secondary/20">
                  <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Your Net Payout (GH)</span>
                  <p className="text-2xl font-black text-primary">GH₵{payoutStats.netEarnings.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <FormLabel className="text-primary font-bold">Key Selling Points</FormLabel>
            <span className="text-xs text-muted-foreground">Used by AI for GHS optimization</span>
          </div>
          <div className="flex gap-2">
            <Input 
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="e.g. Valid Ghanaian deed, Paystack verified..."
              className="rounded-xl"
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
            />
            <Button type="button" variant="outline" onClick={addFeature} className="rounded-xl px-4">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {keyFeatures.map((feature, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/10 text-primary py-1.5 px-3 border-secondary/20">
                {feature}
                <button type="button" onClick={() => removeFeature(i)} className="ml-2">
                  <X className="h-3 w-3 hover:text-red-500" />
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
              <div className="flex items-center justify-between mb-2">
                <FormLabel className="text-primary font-bold">Professional Description</FormLabel>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="secondary" 
                  className="h-9 gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6"
                  onClick={handleGenerateDescription}
                  disabled={isGenerating}
                >
                  {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  AI Optimizer (GH)
                </Button>
              </div>
              <FormControl>
                <Textarea 
                  placeholder="Provide a detailed overview in GHS context..." 
                  className="min-h-[200px] rounded-2xl leading-relaxed border-muted focus:border-secondary transition-colors" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        </div>

        <div className="bg-primary p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute -left-12 -top-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-sm border border-white/20">
            <ShieldCheck className="h-10 w-10 text-secondary" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-secondary" />
              Paystack Escrow Protocol (GH)
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              VaultCommerce ensures high-trust interactions in Ghana. Upon purchase, funds are restricted via Paystack until the client confirms delivery. Payouts are split automatically via our treasury logic.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-10">
          <Button type="submit" size="lg" className="px-16 bg-primary hover:bg-primary/90 rounded-full font-bold h-14 shadow-2xl shadow-primary/20">
            Publish with Escrow Security (GHS)
          </Button>
        </div>
      </form>
    </Form>
  );
}
