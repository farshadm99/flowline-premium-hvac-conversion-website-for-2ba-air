import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertCircle, Phone, Clock, Mail, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { updateSEO } from '@/lib/seo';
import { api } from '@/lib/api-client';
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email().optional().or(z.literal('')),
  address: z.string().min(5, "Service address is required"),
  serviceType: z.string().optional(),
  emergencyType: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});
type ContactFormData = z.infer<typeof contactSchema>;
export function ContactPage() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: "Cooling",
      emergencyType: "No AC",
    }
  });
  useEffect(() => {
    updateSEO({
      title: isEmergency ? "Emergency Service Request | 2ba Air" : "Contact 2ba Air | Request HVAC Service",
      description: isEmergency 
        ? "Emergency HVAC help needed? Switch to Emergency Mode and call now for fastest response in [Service Area]."
        : "Request HVAC service or a free estimate online. Our team will reach out shortly to confirm scheduling.",
    });
  }, [isEmergency]);
  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      await api('/api/leads', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          emergency: isEmergency,
          intent: isEmergency ? 'emergency' : 'service'
        })
      });
      setIsSubmitted(true);
      toast.success("Request Received!");
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("Failed to send request. Please try calling us directly.");
    } finally {
      setIsLoading(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-12 md:py-20 text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-primary">Thank You!</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Thank you for contacting 2ba Air. Your request has been received, and a member of our team will reach out shortly to confirm the details.
        </p>
        <Button asChild size="lg" className="hvac-cta-navy mt-8">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    );
  }
  return (
    <div className={cn("transition-colors duration-500 rounded-[3rem] p-4 sm:p-8 lg:p-12", isEmergency ? "bg-destructive/5" : "bg-primary/5")}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Switch checked={isEmergency} onCheckedChange={setIsEmergency} id="emergency-mode" />
              <Label htmlFor="emergency-mode" className={cn("text-lg font-bold uppercase tracking-tight transition-colors", isEmergency ? "text-destructive" : "text-primary")}>
                {isEmergency ? "Emergency Mode ON" : "Normal Mode"}
              </Label>
            </div>
            <h1 className={cn("text-4xl font-display font-extrabold tracking-tight", isEmergency ? "text-destructive" : "text-primary")}>
              {isEmergency ? "Emergency Service Request" : "Request Service or Free Estimate"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isEmergency 
                ? "Emergency request selected — please call now for fastest response."
                : "Tell us what’s going on—our team will reach out shortly to confirm details and scheduling."
              }
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className={cn("p-3 rounded-xl shrink-0", isEmergency ? "bg-destructive/10" : "bg-primary/10")}>
                <Phone className={cn("h-6 w-6", isEmergency ? "text-destructive" : "text-primary")} />
              </div>
              <div>
                <div className="font-bold text-lg text-primary">Call Now</div>
                <a href="tel:###-###-####" className="text-xl font-bold text-destructive hover:underline">[###-###-####]</a>
              </div>
            </div>
            {!isEmergency && (
              <>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-primary">Email Us</div>
                    <div className="text-muted-foreground">email@domain.com</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-primary">Office Hours</div>
                    <div className="text-muted-foreground">Mon–Sat 8am–6pm</div>
                  </div>
                </div>
              </>
            )}
          </div>
          {isEmergency && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-6 bg-destructive text-destructive-foreground rounded-3xl space-y-4 shadow-xl">
              <ShieldAlert className="h-10 w-10" />
              <h3 className="text-xl font-bold">Safety Warning</h3>
              <p className="text-sm leading-relaxed font-medium">
                If you smell gas, leave the home immediately and call your gas utility provider or emergency services. Do not operate switches or appliances.
              </p>
            </motion.div>
          )}
        </div>
        <Card className="lg:col-span-3 border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Your Name*</Label>
                  <Input {...register('name')} placeholder="John Doe" className={errors.name ? 'border-destructive' : ''} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Phone Number*</Label>
                  <Input {...register('phone')} placeholder="(###) ###-####" className={errors.phone ? 'border-destructive' : ''} />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                </div>
              </div>
              {!isEmergency && (
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input {...register('email')} placeholder="john@example.com" />
                </div>
              )}
              <div className="space-y-2">
                <Label>Service Address*</Label>
                <Input {...register('address')} placeholder="123 Comfort St, City, State ZIP" className={errors.address ? 'border-destructive' : ''} />
                {errors.address && <p className="text-xs text-destructive">{errors.address.message}</p>}
              </div>
              {isEmergency ? (
                <div className="space-y-2">
                  <Label>Emergency Type</Label>
                  <Select onValueChange={(val) => setValue('emergencyType', val)} defaultValue="No AC">
                    <SelectTrigger>
                      <SelectValue placeholder="Select emergency type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No Heat">No Heat</SelectItem>
                      <SelectItem value="No AC">No AC</SelectItem>
                      <SelectItem value="Water Leak">Water Leak</SelectItem>
                      <SelectItem value="Burning Smell">Burning Smell</SelectItem>
                      <SelectItem value="Gas Smell">Gas Smell</SelectItem>
                      <SelectItem value="Other">Other Urgent Issue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Service Type</Label>
                    <Select onValueChange={(val) => setValue('serviceType', val)} defaultValue="Cooling">
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cooling">Cooling / AC</SelectItem>
                        <SelectItem value="Heating">Heating / Furnace</SelectItem>
                        <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                        <SelectItem value="IAQ">Air Quality</SelectItem>
                        <SelectItem value="Ductwork">Ductwork</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select onValueChange={(val) => setValue('preferredTime', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time of day" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning">Morning (8am-12pm)</SelectItem>
                        <SelectItem value="Afternoon">Afternoon (12pm-4pm)</SelectItem>
                        <SelectItem value="Evening">Evening (4pm-6pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label>{isEmergency ? "Brief Message (Optional)" : "How can we help?"}</Label>
                <Textarea {...register('message')} placeholder="Tell us more about the issue..." className="min-h-[100px]" />
              </div>
              <div className="flex flex-col gap-4">
                {isEmergency ? (
                  <Button asChild size="lg" className="hvac-cta-red w-full h-16 text-xl">
                    <a href="tel:###-###-####">CALL NOW (EMERGENCY)</a>
                  </Button>
                ) : (
                  <Button type="submit" disabled={isLoading} size="lg" className="hvac-cta-navy w-full h-16 text-xl">
                    {isLoading ? "Sending..." : "Request Service"}
                  </Button>
                )}
                {!isEmergency && (
                  <Button variant="outline" type="submit" disabled={isLoading} size="lg" className="w-full h-12">
                    Free Estimate Request
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}