import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, CheckCircle2, Navigation, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function ServiceAreasPage() {
  useEffect(() => {
    updateSEO({
      title: `DMV HVAC Coverage Map | ${BUSINESS_CONFIG.name} HVAC Service Areas`,
      description: `Comprehensive HVAC coverage map for DC, Maryland, and Virginia. Serving all counties from Fairfax and Montgomery to Washington DC. Fast ${BUSINESS_CONFIG.assessmentPrice} assessments available.`,
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
            DMV Regional HVAC Authority
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">
            DMV HVAC Coverage Map
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fast, reliable cooling and heating service across the entire DC Metropolitan area. Our mobile units are ready to deploy to your neighborhood for professional {BUSINESS_CONFIG.assessmentPrice} assessments.
          </p>
        </section>
        {/* TWO-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: SCANNABLE DIRECTORY (5 Columns on Large) */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div className="space-y-12">
              {BUSINESS_CONFIG.serviceArea.regions.map((region) => (
                <div key={region.name} className="space-y-6 bg-white/50 p-6 rounded-[2.5rem] border shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Zap className="h-5 w-5 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">{region.name}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {region.locations.map((loc) => (
                      <Link
                        key={loc}
                        to="/contact"
                        className="group flex items-center gap-2 p-1.5 rounded-lg hover:bg-primary/5 transition-all"
                      >
                        <Navigation className="h-3 w-3 text-destructive opacity-30 group-hover:opacity-100 transition-opacity" />
                        <span className="text-muted-foreground text-sm font-bold group-hover:text-primary transition-colors">{loc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Card className="p-8 bg-primary text-primary-foreground rounded-[2.5rem] border-none shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
              <div className="relative z-10 space-y-6">
                <ShieldCheck className="h-12 w-12 text-destructive" />
                <h3 className="text-2xl font-bold">Local Licensing Experts</h3>
                <p className="opacity-80 font-medium">We maintain active master HVAC licenses in Virginia, Maryland, and the District of Columbia to ensure code-compliant workmanship for every regional client.</p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2 text-xs font-bold bg-white/10 p-3 rounded-xl">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> VA Class A Master Licensed
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold bg-white/10 p-3 rounded-xl">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> MD Master HVACR Licensed
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold bg-white/10 p-3 rounded-xl">
                    <CheckCircle2 className="h-4 w-4 text-destructive" /> DC Master Mechanic Licensed
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* RIGHT COLUMN: HUGE INTERACTIVE MAP (7 Columns on Large) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <Card className="overflow-hidden rounded-[3rem] shadow-2xl border-none ring-1 ring-primary/5">
              <div className="relative w-full h-[600px] lg:h-[950px] bg-muted">
                {/* HUGE Map centered on DMV (Fairfax-DC-Montgomery corridor) */}
                <iframe
                  title="2ba Air DMV Coverage Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248446.46875960682!2d-77.1000000!3d38.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.1] contrast-[1.1] hover:grayscale-0 transition-all duration-1000 scale-105"
                />
                {/* floating Call/Assessment Badge */}
                <div className="absolute top-8 left-8 right-8 lg:left-10 lg:right-auto lg:w-80 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-primary/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-destructive rounded-2xl shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.15em] text-muted-foreground">Emergency Dispatch</div>
                        <a href={BUSINESS_CONFIG.phoneRaw} className="text-2xl font-black text-primary hover:text-destructive transition-colors block">
                          {BUSINESS_CONFIG.phone}
                        </a>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-primary tracking-tight">Professional Assessment</span>
                      <span className="text-lg font-black text-destructive">{BUSINESS_CONFIG.assessmentPrice}</span>
                    </div>
                  </div>
                </div>
                {/* Bottom coverage indicators */}
                <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-96 bg-primary/90 backdrop-blur text-white p-6 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive" />
                    <span className="font-black text-sm uppercase tracking-widest">Live Coverage Active</span>
                  </div>
                  <p className="text-xs font-medium opacity-80 leading-relaxed">
                    HVAC Units are currently operating in Fairfax, Bethesda, and Washington DC. Expect 45-60 minute arrival times for assessments.
                  </p>
                </div>
              </div>
            </Card>
            <div className="grid sm:grid-cols-2 gap-6">
              <Button asChild size="lg" className="hvac-cta-red h-18 text-xl font-black rounded-2xl shadow-2xl">
                <Link to="/contact">
                  <Calendar className="mr-2 h-6 w-6" /> BOOK {BUSINESS_CONFIG.assessmentPrice} ASSESSMENT
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-18 text-xl font-black border-primary text-primary rounded-2xl bg-white hover:bg-primary/5 shadow-xl">
                <a href={BUSINESS_CONFIG.phoneRaw}>
                  <Phone className="mr-2 h-6 w-6" /> CALL FOR DISPATCH
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}