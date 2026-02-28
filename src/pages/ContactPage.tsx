import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, CheckCircle2, ShieldAlert, AlertTriangle, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { updateSEO } from '@/lib/seo';
import { api } from '@/lib/api-client';
import { BUSINESS_CONFIG } from '@/data/business-config';
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
  const [searchParams] = useSearchParams();
  const intentParam = searchParams.get('intent');
  const [isEmergency, setIsEmergency] = useState(intentParam === 'emergency');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: intentParam === 'financing' ? 'Financing' : "Cooling",
      emergencyType: "No AC",
    }
  });
  useEffect(() => {
    updateSEO({
      title: isEmergency ? `EMERGENCY HVAC Help | ${BUSINESS_CONFIG.name}` : `Contact ${BUSINESS_CONFIG.name} | Request Professional Assessment`,
      description: isEmergency
        ? `Immediate HVAC help needed? Call ${BUSINESS_CONFIG.phone} now. 24/7 emergency repair available for no heat, no AC, or leaks.`
        : `Request an HVAC professional assessment starting at ${BUSINESS_CONFIG.assessmentPrice}. Our team will reach out shortly to confirm scheduling in ${BUSINESS_CONFIG.serviceArea.cities[0]}.`,
    });
  }, [isEmergency]);
  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const finalIntent = isEmergency ? 'emergency' : (intentParam || 'service');
      await api('/api/leads', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          emergency: isEmergency,
          intent: finalIntent
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
          Thank you for contacting {BUSINESS_CONFIG.name}. Your request has been received, and a member of our team will reach out shortly to confirm the details.
        </p>
        <Button asChild size="lg" className="hvac-cta-navy mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className={cn("transition-colors duration-500 rounded-[3rem] p-4 sm:p-8 lg:p-12 min-h-[800px]", isEmergency ? "bg-destructive/5" : "bg-primary/5")}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col items-center space-y-4">
          <div className={cn(
            "w-full max-w-xl p-1 rounded-2xl border-2 transition-all flex items-center gap-4 px-6 py-4 cursor-pointer select-none",
            isEmergency ? "bg-destructive border-destructive text-white shadow-destructive/20 shadow-xl" : "bg-white border-primary/10 text-primary"
          )}
          onClick={() => setIsEmergency(!isEmergency)}
          >
            <div className={cn("p-2 rounded-lg", isEmergency ? "bg-white/20" : "bg-destructive/10")}>
              <AlertTriangle className={cn("h-6 w-6", isEmergency ? "text-white" : "text-destructive animate-pulse")} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Urgency Level</div>
              <div className="text-lg font-black">{isEmergency ? "EMERGENCY MODE ACTIVE" : "Switch to Emergency Mode?"}</div>
            </div>
            <Switch
              checked={isEmergency}
              onCheckedChange={setIsEmergency}
              className="data-[state=checked]:bg-white data-[state=checked]:text-destructive"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 pt-6">
            <div className="space-y-4">
              <h1 className={cn("text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.1]", isEmergency ? "text-destructive" : "text-primary")}>
                {isEmergency ? "Emergency Dispatch" : "Request Assessment"}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isEmergency
                  ? "Our emergency technicians are on standby 24/7. Use the form for fast intake or call now for immediate dispatch."
                  : "Tell us what’s going on—our team will reach out shortly to confirm details and scheduling."
                }
              </p>
            </div>
            <div className="space-y-6">
              <div className={cn("p-6 rounded-3xl border transition-all", isEmergency ? "bg-white border-destructive shadow-lg" : "bg-white border-primary/10")}>
                <div className="flex gap-4 items-center mb-2">
                  <div className={cn("p-3 rounded-xl", isEmergency ? "bg-destructive/10" : "bg-primary/10")}>
                    <Phone className={cn("h-6 w-6", isEmergency ? "text-destructive" : "text-primary")} />
                  </div>
                  <div className="font-bold text-lg text-primary">Fastest Response</div>
                </div>
                <a href={BUSINESS_CONFIG.phoneRaw} className={cn("text-3xl font-black block mt-2 hover:underline", isEmergency ? "text-destructive" : "text-primary")}>
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>
            <AnimatePresence>
              {isEmergency && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-8 bg-destructive text-destructive-foreground rounded-[2rem] space-y-4 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                    <ShieldAlert className="h-32 w-32" />
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="h-8 w-8" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Gas Smell Safety</h3>
                  </div>
                  <p className="text-lg leading-snug font-bold">
                    If you smell gas, leave the home IMMEDIATELY and call 911 or your utility provider.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="lg:col-span-3 space-y-4">
            {!isEmergency && (
              <div className="bg-primary text-white p-4 rounded-2xl flex items-center gap-3 shadow-lg">
                <Tag className="h-6 w-6 text-destructive" />
                <span className="font-black tracking-tight uppercase">Professional Assessment Starting At {BUSINESS_CONFIG.assessmentPrice}</span>
              </div>
            )}
            <Card className={cn(
              "border-none shadow-2xl rounded-[3rem] overflow-hidden transition-all duration-500",
              isEmergency ? "ring-4 ring-destructive" : ""
            )}>
              {isEmergency && (
                <div className="bg-destructive text-white py-4 px-8 flex justify-between items-center animate-pulse">
                  <span className="font-black text-lg uppercase tracking-widest">EMERGENCY INTAKE ACTIVE</span>
                  <Phone className="h-5 w-5" />
                </div>
              )}
              <CardContent className="p-8 sm:p-12 space-y-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className={isEmergency ? "text-destructive font-bold" : ""}>Your Name*</Label>
                      <Input {...register('name')} placeholder="John Doe" className={cn("h-12 rounded-xl", errors.name ? 'border-destructive' : '')} />
                      {errors.name && <p className="text-xs text-destructive font-bold">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className={isEmergency ? "text-destructive font-bold" : ""}>Phone Number*</Label>
                      <Input {...register('phone')} placeholder="(###) ###-####" className={cn("h-12 rounded-xl", errors.phone ? 'border-destructive' : '')} />
                      {errors.phone && <p className="text-xs text-destructive font-bold">{errors.phone.message}</p>}
                    </div>
                  </div>
                  {!isEmergency && (
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input {...register('email')} placeholder="john@example.com" className="h-12 rounded-xl" />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label className={isEmergency ? "text-destructive font-bold" : ""}>Service Address*</Label>
                    <Input {...register('address')} placeholder="123 Comfort St, City, State ZIP" className={cn("h-12 rounded-xl", errors.address ? 'border-destructive' : '')} />
                    {errors.address && <p className="text-xs text-destructive font-bold">{errors.address.message}</p>}
                  </div>
                  {isEmergency ? (
                    <div className="space-y-2">
                      <Label className="text-destructive font-bold">Emergency Type</Label>
                      <Select onValueChange={(val) => setValue('emergencyType', val)} defaultValue="No AC">
                        <SelectTrigger className="h-12 rounded-xl border-destructive/50">
                          <SelectValue placeholder="Select emergency type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No Heat">No Heat (Furnace Failure)</SelectItem>
                          <SelectItem value="No AC">No AC (Extreme Heat)</SelectItem>
                          <SelectItem value="Water Leak">Major Water Leak</SelectItem>
                          <SelectItem value="Burning Smell">Burning / Electrical Smell</SelectItem>
                          <SelectItem value="Gas Smell">Gas Smell (Evacuate First!)</SelectItem>
                          <SelectItem value="Other">Other Urgent Issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Service Category</Label>
                        <Select onValueChange={(val) => setValue('serviceType', val)} defaultValue={intentParam === 'financing' ? 'Financing' : 'Cooling'}>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Cooling">Cooling / AC</SelectItem>
                            <SelectItem value="Heating">Heating / Furnace</SelectItem>
                            <SelectItem value="Heat Pump">Heat Pump</SelectItem>
                            <SelectItem value="IAQ">Air Quality</SelectItem>
                            <SelectItem value="Financing">Financing Inquiry</SelectItem>
                            <SelectItem value="Commercial">Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Time</Label>
                        <Select onValueChange={(val) => setValue('preferredTime', val)}>
                          <SelectTrigger className="h-12 rounded-xl">
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
                    <Label className={isEmergency ? "text-destructive font-bold" : ""}>{isEmergency ? "Emergency Details (Optional)" : "How can we help?"}</Label>
                    <Textarea {...register('message')} placeholder="Tell us more about the issue..." className="min-h-[120px] rounded-xl" />
                  </div>
                  <div className="pt-4">
                    {isEmergency ? (
                      <div className="space-y-4">
                        <Button asChild size="lg" className="hvac-cta-red w-full h-16 text-xl font-black">
                          <a href={BUSINESS_CONFIG.phoneRaw}>CALL NOW (EMERGENCY)</a>
                        </Button>
                        <p className="text-center text-destructive font-bold text-sm">Emergency dispatchers are active now.</p>
                      </div>
                    ) : (
                      <Button type="submit" disabled={isLoading} size="lg" className="hvac-cta-navy w-full h-16 text-xl font-bold">
                        {isLoading ? "Sending..." : "Request Fast Assessment"}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}