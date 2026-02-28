import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Wind, 
  Thermometer, 
  Zap, 
  ArrowRight, 
  BadgeCheck, 
  Clock, 
  CreditCard 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReviewBadgesRow } from '@/components/site/ReviewBadgesRow';
import { updateSEO, commonSchemas } from '@/lib/seo';
export function HomePage() {
  useEffect(() => {
    updateSEO({
      title: "HVAC Repair & Installation in [Service Area], [State] | 2ba Air",
      description: "Fast AC repair, heating service, heat pumps, ductwork, and indoor air quality in [Service Area]. Licensed & insured. Call [Phone] for scheduling.",
      jsonLd: commonSchemas.localBusiness
    });
  }, []);
  return (
    <div className="space-y-20 -mt-8 md:-mt-10 lg:-mt-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-16">
        <div className="absolute inset-0 bg-hvac-thermal-cool opacity-5 -z-10" />
        <div className="absolute inset-0 hvac-pattern-airflow opacity-10 -z-10" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
              </span>
              Same-day availability in [Service Area]
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-primary leading-[1.1]">
              Comfort You Can <span className="text-destructive underline decoration-primary/10">Count On</span>—Every Season.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Fast, honest HVAC service for homes and light commercial spaces across [Service Area]. Clear options, clean workmanship, and reliable comfort—without the runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hvac-cta-red text-lg h-14 px-8">
                <a href="tel:###-###-####">Call Now</a>
              </Button>
              <Button asChild size="lg" className="hvac-cta-navy text-lg h-14 px-8">
                <Link to="/contact">Request Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8">
                <Link to="/contact?intent=estimate">Free Estimate</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Same-day availability",
                "Licensed & insured",
                "Upfront options",
                "Work backed by warranty"
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-destructive" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            {/* SVG HVAC Illustration Placeholder */}
            <div className="bg-gradient-to-br from-primary/5 to-destructive/5 rounded-3xl p-8 border shadow-inner">
              <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="200" height="250" rx="20" fill="#0B1B3B" />
                <rect x="120" y="120" width="160" height="100" rx="10" fill="#163B78" />
                <circle cx="200" cy="280" r="50" fill="#D7262E" opacity="0.8" />
                <path d="M150 140h100M150 160h100M150 180h100" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <motion.circle 
                  cx="200" cy="280" r="30" fill="none" stroke="white" strokeWidth="4" 
                  strokeDasharray="20 10" 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </svg>
            </div>
            {/* Overlay trust element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border flex items-center gap-4">
              <div className="bg-destructive/10 p-3 rounded-xl">
                <BadgeCheck className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">Certified Pros</div>
                <div className="text-sm text-muted-foreground">NATE Certified Techs</div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted Reviews</h2>
            <div className="h-px flex-1 bg-border" />
            <Link to="/reviews" className="text-sm font-semibold text-primary hover:text-destructive flex items-center">
              Read all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ReviewBadgesRow />
        </div>
      </section>
      {/* TRUST STRIP */}
      <div className="bg-primary py-8 rounded-3xl shadow-lg">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-between items-center gap-8 min-w-[800px]">
            {[
              { icon: ShieldCheck, label: "Licensed / Insured" },
              { icon: BadgeCheck, label: "Background-Checked" },
              { icon: Clock, label: "Warranty-Backed" },
              { icon: CreditCard, label: "Financing Available" },
              { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-primary-foreground whitespace-nowrap">
                <item.icon className="h-6 w-6 text-destructive shrink-0" />
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SERVICES AT A GLANCE */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">HVAC help, without the guesswork.</h2>
          <p className="text-lg text-muted-foreground">
            Tell us what’s happening—or choose a service below. We’ll confirm details, show clear options, and get your comfort back fast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wind, title: "Cooling", href: "/services/cooling", items: ["AC Repair", "New AC Install", "AC Maintenance", "Mini-Splits"] },
            { icon: Thermometer, title: "Heating", href: "/services/heating", items: ["Furnace Repair", "New Heating Install", "Safety Checks", "Boilers"] },
            { icon: Zap, title: "Heat Pumps", href: "/services/heat-pumps", items: ["Repair", "Hybrid Systems", "Installation", "Efficiency Upgrades"] },
          ].map(rail => (
            <div key={rail.title} className="group p-8 rounded-3xl border bg-card hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 p-8 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              <rail.icon className="h-10 w-10 text-destructive mb-6" />
              <h3 className="text-2xl font-bold mb-4">{rail.title}</h3>
              <ul className="space-y-2 mb-8">
                {rail.items.map(i => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <ChevronRight className="h-4 w-4 text-destructive" />
                    {i}
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="p-0 text-primary group-hover:translate-x-1 transition-transform">
                <Link to={rail.href} className="flex items-center gap-1 font-bold">
                  Explore {rail.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      {/* FINAL CONVERSION */}
      <section className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 hvac-pattern-blueprint" />
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary max-w-4xl mx-auto leading-tight">Ready for reliable comfort?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Call now or request service online—our team will confirm details and get you scheduled within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hvac-cta-red text-lg h-16 px-12">
              <a href="tel:###-###-####">Call Now</a>
            </Button>
            <Button asChild size="lg" className="hvac-cta-navy text-lg h-16 px-12">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
function ShieldCheck(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
function ChevronRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  );
}