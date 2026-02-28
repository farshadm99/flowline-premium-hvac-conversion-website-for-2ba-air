import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Users, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
export function AboutPage() {
  useEffect(() => {
    updateSEO({
      title: "About 2ba Air | Premium HVAC Service Specialists",
      description: "Learn about 2ba Air's service-first mission, our values of honest options, and why homeowners trust our NATE-certified technicians.",
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-20">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">Our Mission</div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight leading-tight">
              Service-first HVAC, focused on <span className="text-destructive">reliability</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At 2ba Air, our goal is simple: you should feel confident about your comfort system. We focus on providing honest options, clean workmanship, and a craftsman's attention to detail on every job.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-destructive shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Straightforward Advice</h3>
                  <p className="text-muted-foreground">We explain the "why" and show you clear repair vs. replace options before we start work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-destructive shrink-0" />
                <div>
                  <h3 className="font-bold text-primary">Resident-First Techs</h3>
                  <p className="text-muted-foreground">Our technicians treat your home with respect, using shoe covers and maintaining a tidy workspace.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 hvac-pattern-airflow opacity-5" />
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "Fully Licensed", val: "Compliant" },
                { icon: BadgeCheck, label: "NATE Certified", val: "Experts" },
                { icon: ShieldCheck, label: "Comprehensive Insurance", val: "Protected" },
                { icon: BadgeCheck, label: "Warranty-Backed", val: "Guaranteed" },
              ].map((v, i) => (
                <div key={i} className="bg-card border rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <v.icon className="h-10 w-10 text-destructive" />
                  <div>
                    <div className="text-lg font-bold text-primary">{v.label}</div>
                    <div className="text-sm text-muted-foreground">{v.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 hvac-pattern-blueprint opacity-10" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Ready for a better service experience?</h2>
              <p className="text-lg text-muted-foreground">Whether it's peak summer or a freezing winter night, 2ba Air is here to ensure your comfort never falters.</p>
              <div className="flex gap-4">
                <Button asChild className="hvac-cta-red">
                  <Link to="/contact">Request Service Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link to="/maintenance-plans">See Maintenance Plans</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-xl border w-full max-w-sm">
                <div className="text-center space-y-2 mb-8">
                  <div className="text-4xl font-extrabold text-primary">5.0</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => <BadgeCheck key={i} className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />)}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Average Customer Rating</p>
                </div>
                <Button asChild variant="link" className="w-full text-primary hover:text-destructive">
                  <Link to="/reviews">Read our client success stories <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}