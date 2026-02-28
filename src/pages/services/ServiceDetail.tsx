import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Info, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findServiceBySlug } from '@/data/services-data';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
export function ServiceDetail() {
  const { category, detail } = useParams();
  const data = findServiceBySlug(category || '', detail || '');
  useEffect(() => {
    if (data) {
      updateSEO({
        title: data.metaTitle,
        description: data.metaDescription,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": data.title,
          "provider": {
            "@type": "HVACBusiness",
            "name": "2ba Air"
          }
        }
      });
    }
  }, [data]);
  if (!data) return <Navigate to="/services" replace />;
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-16">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight leading-tight">
              {data.h1}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {data.promise}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="hvac-cta-red h-14 px-8">
                <Link to="/contact">Request Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary text-primary">
                <a href="tel:###-###-####"><Phone className="mr-2 h-4 w-4" /> (###) ###-####</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 hvac-pattern-blueprint opacity-10" />
            <Card className="relative overflow-hidden border-none shadow-2xl rounded-[2.5rem] bg-primary/5 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Info className="h-6 w-6 text-destructive" />
                Common Symptoms
              </h2>
              <ul className="grid gap-4">
                {data.symptoms.map(s => (
                  <li key={s} className="flex gap-3 text-lg text-muted-foreground bg-white/50 p-4 rounded-xl border border-white/20">
                    <CheckCircle2 className="h-6 w-6 text-destructive shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
        {/* CHECKS & PROCESS */}
        <section className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-destructive text-destructive-foreground rounded-[2.5rem] p-8 lg:p-12 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
                <ShieldCheck className="h-40 w-40" />
              </div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="h-6 w-6" />
                Safe Homeowner Checks
              </h2>
              <p className="font-medium opacity-90">Try these safe steps before scheduling service. If you suspect gas or electrical danger, stop and call immediately.</p>
              <ul className="space-y-4">
                {data.checks.map(c => (
                  <li key={c} className="flex gap-3 text-sm font-semibold border-b border-white/20 pb-3 last:border-0">
                    <ArrowRight className="h-4 w-4 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-12">
            <h2 className="text-3xl font-bold text-primary">What to Expect</h2>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/10">
              {data.process.map((p, i) => (
                <div key={i} className="pl-12 relative">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-4 border-background">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{p.step}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* RELATED */}
        <section className="pt-12 border-t">
          <h2 className="text-2xl font-bold text-primary mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.relatedSlugs.map(slug => (
              <Button key={slug} asChild variant="outline" className="h-auto p-6 justify-between rounded-2xl group hover:border-primary transition-all">
                <Link to={`/services/${category}/${slug}`}>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Service</div>
                    <div className="text-lg font-bold text-primary group-hover:text-destructive">{slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-destructive" />
                </Link>
              </Button>
            ))}
            <Button asChild variant="outline" className="h-auto p-6 justify-between rounded-2xl group bg-primary/5 border-primary/20">
              <Link to="/maintenance-plans">
                <div className="text-left">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Prevent It</div>
                  <div className="text-lg font-bold text-primary">Maintenance Plan</div>
                </div>
                <Zap className="h-5 w-5 text-destructive" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}