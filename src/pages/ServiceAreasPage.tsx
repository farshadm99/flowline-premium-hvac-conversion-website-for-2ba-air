import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
const cities = [
  {
    name: "City 1",
    description: "Full-service cooling and heating solutions for residents of [City 1] and the surrounding residential blocks.",
    services: ["AC Repair", "Furnace Service", "Duct Sealing"]
  },
  {
    name: "City 2",
    description: "Reliable HVAC installation and maintenance for homes across [City 2]. Expert care for all system brands.",
    services: ["New AC Install", "Heat Pumps", "IAQ Setup"]
  },
  {
    name: "City 3",
    description: "Serving the growing [City 3] community with 24/7 emergency HVAC availability and Comfort Club plans.",
    services: ["Emergency Repairs", "Maintenance", "Thermostats"]
  },
  {
    name: "City 4",
    description: "Comprehensive light commercial and residential HVAC specialists serving the greater [City 4] metro area.",
    services: ["Commercial AC", "Boiler Service", "Heat Pumps"]
  },
  {
    name: "City 5",
    description: "Your local comfort experts in [City 5]. Fast response times and honest options for every homeowner.",
    services: ["AC Tune-Ups", "Ductwork", "Furnace Repair"]
  }
];
export function ServiceAreasPage() {
  useEffect(() => {
    updateSEO({
      title: `HVAC Service Areas | ${BUSINESS_CONFIG.name} - Service Near You`,
      description: `We serve ${BUSINESS_CONFIG.serviceArea.summary} and surrounding towns. Call today for fast, local HVAC expertise at ${BUSINESS_CONFIG.phone}.`,
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-16">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">
            HVAC Service Areas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We proudly serve {BUSINESS_CONFIG.serviceArea.summary} and the surrounding communities. If you are near one of the locations below, we have a technician ready to help.
          </p>
        </section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="bg-card border rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute inset-0 hvac-pattern-blueprint opacity-[0.03]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <Navigation className="h-5 w-5 text-destructive opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">{city.name}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{city.description}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Local Services</p>
                  <div className="space-y-2">
                    {city.services.map(s => (
                      <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-destructive" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full hvac-cta-navy">
                  <Link to="/contact">Book {city.name} Service</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden text-primary-foreground">
          <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold max-w-2xl mx-auto">Don't see your town listed?</h2>
            <p className="text-lg opacity-80 max-w-xl mx-auto">We are constantly expanding our range. Call us today and we'll let you know if we can reach your location.</p>
            <div className="flex justify-center gap-6">
              <Button asChild size="lg" className="hvac-cta-red">
                <a href={BUSINESS_CONFIG.phoneRaw}>Call {BUSINESS_CONFIG.phone}</a>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Check Availability</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}