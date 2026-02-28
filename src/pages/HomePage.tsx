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
  CreditCard,
  ShieldCheck,
  ChevronRight,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ReviewBadgesRow } from '@/components/site/ReviewBadgesRow';
import { updateSEO, commonSchemas } from '@/lib/seo';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function HomePage() {
  useEffect(() => {
    updateSEO({
      title: `HVAC Repair & Installation in ${BUSINESS_CONFIG.serviceArea.summary} | ${BUSINESS_CONFIG.name}`,
      description: `Fast AC repair, heating service, heat pumps, ductwork, and indoor air quality in ${BUSINESS_CONFIG.serviceArea.summary}. ${BUSINESS_CONFIG.license}. Call ${BUSINESS_CONFIG.phone} for scheduling.`,
      jsonLd: commonSchemas.localBusiness
    });
  }, []);
  return (
    <div className="space-y-20 -mt-8 md:-mt-10 lg:-mt-12 overflow-x-hidden">
      {/* HERO SECTION - Optimized Above-the-Fold */}
      <section className="relative pt-8 lg:pt-16 pb-12 min-h-[550px] lg:min-h-[650px] flex flex-col justify-center">
        <div className="absolute inset-0 bg-hvac-thermal-cool opacity-5 -z-10" />
        <div className="absolute inset-0 hvac-pattern-airflow opacity-10 -z-10" />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 z-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                </span>
                Immediate Dispatch
              </div>
              <Badge className="bg-destructive text-white hover:bg-destructive font-black px-4 py-2 rounded-full text-sm animate-pulse">
                Professional Assessment: {BUSINESS_CONFIG.assessmentPrice}
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-primary leading-[1.1]">
              Comfort You Can <span className="text-destructive">Count On</span>—Every Season.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Professional HVAC service across {BUSINESS_CONFIG.serviceArea.summary}. Honest options, clean workmanship, and reliable results—guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hvac-cta-red text-lg h-14 px-8 font-bold tracking-tight">
                <a href={BUSINESS_CONFIG.phoneRaw}>CALL NOW</a>
              </Button>
              <Button asChild size="lg" className="hvac-cta-navy text-lg h-14 px-8 font-bold tracking-tight">
                <Link to="/contact">REQUEST ASSESSMENT</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-primary/5">
              {["Same-day availability", "Licensed & insured", "Upfront flat-rates", "Work backed by warranty"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold text-primary/80">
                  <CheckCircle2 className="h-4 w-4 text-destructive shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=1200"
                alt="2ba Air professional technician"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-[2rem] shadow-2xl border flex items-center gap-4">
              <div className="bg-destructive/10 p-3 rounded-2xl">
                <BadgeCheck className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <div className="text-xl font-black text-primary">Certified Pros</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">NATE Trained Techs</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Visibility optimized Review Row */}
        <div className="mt-12 lg:mt-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">Verified Local Reputation</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <Link to="/reviews" className="text-xs font-bold text-primary hover:text-destructive flex items-center whitespace-nowrap transition-colors">
              READ REVIEWS <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <ReviewBadgesRow />
        </div>
      </section>
      {/* TRUST STRIP */}
      <div className="bg-primary py-8 rounded-[2rem] shadow-xl">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-between items-center gap-10 min-w-[800px]">
            {[
              { icon: Tag, label: `Assessment: ${BUSINESS_CONFIG.assessmentPrice}` },
              { icon: ShieldCheck, label: "Licensed / Insured" },
              { icon: BadgeCheck, label: "Expert Technicians" },
              { icon: Clock, label: "Warranty-Backed" },
              { icon: CreditCard, label: "Easy Financing" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-primary-foreground whitespace-nowrap group">
                <item.icon className="h-6 w-6 text-destructive transition-transform group-hover:scale-110" />
                <span className="font-bold text-sm tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SERVICES AT A GLANCE */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-black text-primary tracking-tighter">HVAC help, without the guesswork.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Tell us what’s happening—or choose a category below. We’ll confirm details, show clear options, and get your comfort back fast.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wind, title: "Cooling", href: "/services/cooling", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600", items: ["AC Repair", "AC Installation", "Tune-Ups", "Mini-Splits"] },
            { icon: Thermometer, title: "Heating", href: "/services/heating", img: "https://images.unsplash.com/photo-1585052245554-bc969c394dfc?auto=format&fit=crop&q=80&w=600", items: ["Furnace Repair", "New Heating Install", "Safety Checks", "Boilers"] },
            { icon: Zap, title: "Heat Pumps", href: "/services/heat-pumps", img: "https://images.unsplash.com/photo-1631541909061-70e08835ba88?auto=format&fit=crop&q=80&w=600", items: ["Hybrid Repair", "All-Electric Systems", "Maintenance", "Efficiency Upgrades"] },
          ].map(rail => (
            <div key={rail.title} className="group rounded-[2rem] border bg-card hover:border-primary transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
              <div className="h-40 overflow-hidden relative">
                <img src={rail.img} alt={rail.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-4 p-2.5 bg-white rounded-xl shadow-lg">
                  <rail.icon className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black text-primary tracking-tight">{rail.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {rail.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground font-bold text-xs">
                      <ChevronRight className="h-3 w-3 text-destructive" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="link" className="p-0 text-primary font-black text-base h-auto group-hover:translate-x-1 transition-transform">
                  <Link to={rail.href} className="flex items-center gap-2">Explore {rail.title} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-5xl font-display font-black text-primary tracking-tighter leading-none">Straight talk, clean work, honest options.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Finding a reliable HVAC team shouldn't be stressful. We prioritize clarity and craftsmanship so you can feel confident in your home's safety and comfort.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
              "Clear repair vs replace options",
              "Shoe covers & tidy finish",
              "Repair-first mindset",
              "NATE-certified expertise",
              "Emergency 24/7 priority",
              "Efficiency-focused checks"
            ].map(bullet => (
              <div key={bullet} className="flex items-center gap-2">
                <div className="p-1 bg-destructive/10 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-destructive shrink-0" />
                </div>
                <span className="text-sm font-bold text-primary/80">{bullet}</span>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="hvac-cta-navy h-14 px-8 text-base font-black tracking-tight">
            <Link to="/about">LEARN OUR MISSION</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 hvac-pattern-blueprint opacity-5" />
          <div className="bg-primary/5 rounded-[3rem] p-10 lg:p-14 border-2 border-primary/5 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 p-24 bg-primary/5 rounded-full" />
            <h3 className="text-2xl font-black text-primary tracking-tight relative z-10">Financing for Peace of Mind</h3>
            <p className="text-base text-muted-foreground relative z-10">We offer flexible financing options to ensure your home stays safe without the immediate financial burden of a major system replacement.</p>
            <div className="flex items-center gap-4 bg-white p-6 rounded-[2rem] shadow-xl border relative z-10">
              <div className="p-3 bg-destructive/10 rounded-2xl">
                <CreditCard className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <div className="text-xl font-black text-primary">Easy Approvals</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Low Monthly Payments</div>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full h-14 border-primary text-primary font-black text-base rounded-xl relative z-10">
              <Link to="/contact?intent=financing">REQUEST FINANCING DETAILS</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* FINAL CONVERSION */}
      <section className="bg-primary rounded-[3rem] py-16 px-10 lg:py-20 text-center relative overflow-hidden shadow-2xl mx-2 sm:mx-0">
        <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-display font-black text-white leading-none tracking-tighter">Ready for better comfort?</h2>
          <p className="text-lg lg:text-xl text-white/80 max-w-xl mx-auto font-medium">Call now or request service online—our local team is ready to get you back to perfect comfort.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="hvac-cta-red text-xl h-16 px-12 font-black tracking-tight rounded-2xl">
              <a href={BUSINESS_CONFIG.phoneRaw}>CALL NOW</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary text-xl h-16 px-12 font-black tracking-tight rounded-2xl">
              <Link to="/contact">BOOK ASSESSMENT</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}