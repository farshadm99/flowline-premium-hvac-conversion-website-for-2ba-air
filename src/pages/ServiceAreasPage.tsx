import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function ServiceAreasPage() {
  useEffect(() => {
    updateSEO({
      title: `HVAC Service Areas in DMV (DC, MD, VA) | ${BUSINESS_CONFIG.name}`,
      description: `We provide expert AC repair and heating services across the entire DMV region, including Fairfax, Montgomery County, and Washington DC. Call ${BUSINESS_CONFIG.phone} for 24/7 HVAC support.`,
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HEADER SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-primary/10">
            <MapPin className="h-4 w-4 text-destructive" />
            DMV Regional Coverage
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">
            Serving All Listed Counties
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {BUSINESS_CONFIG.serviceArea.summary}. Our dispatch team is strategically positioned to provide fast response times from Northern Virginia to Montgomery County and everywhere in between.
          </p>
        </section>
        {/* TWO-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: SCANNABLE DIRECTORY */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div className="space-y-10">
              {BUSINESS_CONFIG.serviceArea.regions.map((region) => (
                <div key={region.name} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-destructive rounded-full" />
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">{region.name}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {region.locations.map((loc) => (
                      <Link 
                        key={loc}
                        to="/contact"
                        className="group flex items-center gap-2 p-2 rounded-xl hover:bg-primary/5 transition-all"
                      >
                        <Navigation className="h-3 w-3 text-destructive opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-muted-foreground font-bold group-hover:text-primary transition-colors">{loc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Card className="p-8 bg-primary text-primary-foreground rounded-[2rem] border-none shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
              <div className="relative z-10 space-y-6">
                <ShieldCheck className="h-12 w-12 text-destructive" />
                <h3 className="text-2xl font-bold">Licensed in 3 Jurisdictions</h3>
                <p className="opacity-80 font-medium">We maintain active master HVAC licenses in Virginia, Maryland, and the District of Columbia to ensure code-compliant workmanship for every client.</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> VA Class A Licensed
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> MD Master HVACR
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> DC Master Mechanic
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* RIGHT COLUMN: INTERACTIVE MAP */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <Card className="overflow-hidden rounded-[2.5rem] shadow-2xl border-none ring-1 ring-primary/5">
              <div className="relative w-full h-[500px] lg:h-[850px] bg-muted">
                {/* Google Maps Iframe - DMV Centered */}
                <iframe
                  title="2ba Air DMV Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198758.46875960682!2d-77.15465034999999!3d38.8993487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                {/* Custom Map Overlay Badge */}
                <div className="absolute top-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-72 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-destructive rounded-2xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Emergency Line</div>
                      <a href={BUSINESS_CONFIG.phoneRaw} className="text-xl font-black text-primary hover:text-destructive transition-colors">
                        {BUSINESS_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button asChild size="lg" className="hvac-cta-red h-16 text-lg font-black rounded-2xl">
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" /> BOOK SERVICE ONLINE
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 text-lg font-black border-primary text-primary rounded-2xl bg-white hover:bg-primary/5">
                <a href={BUSINESS_CONFIG.phoneRaw}>
                  <Phone className="mr-2 h-5 w-5" /> CALL LOCAL DISPATCH
                </a>
              </Button>
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <section className="bg-primary/5 rounded-[3.5rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden border">
          <div className="absolute inset-0 hvac-pattern-blueprint opacity-5" />
          <h2 className="text-3xl lg:text-4xl font-black text-primary max-w-2xl mx-auto">
            Reliable Comfort from the Beltway to the Blue Ridge.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you're in a downtown DC condo or a Fairfax estate, 2ba Air brings the same level of integrity, speed, and precision to every HVAC visit.
          </p>
          <div className="flex justify-center pt-4">
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {["Fairfax", "Arlington", "Bethesda", "Rockville"].map(city => (
                  <div key={city} className="flex flex-col items-center gap-2">
                    <div className="text-primary font-black text-2xl">30-45</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Avg. Min to {city}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}