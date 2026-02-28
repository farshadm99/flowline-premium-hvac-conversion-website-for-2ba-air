import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { findCategoryBySlug } from '@/data/services-data';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function CategoryHub() {
  const { category } = useParams();
  const data = findCategoryBySlug(category || '');
  useEffect(() => {
    if (data) {
      updateSEO({
        title: `${data.title} Services | 2ba Air HVAC`,
        description: `${data.description}. Professional assessments starting at ${BUSINESS_CONFIG.assessmentPrice}.`,
      });
    }
  }, [data]);
  if (!data) return <Navigate to="/services" replace />;
  const getThemeClass = (iconType: string) => {
    switch (iconType) {
      case 'cooling':
      case 'iaq':
      case 'ductwork':
        return 'bg-hvac-thermal-cool';
      case 'heating':
      case 'heatpump':
        return 'bg-hvac-thermal-heat';
      case 'commercial':
      case 'thermostat':
      default:
        return 'bg-gradient-primary';
    }
  };
  const themeClass = getThemeClass(data.iconType);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-16">
        <section className={`relative rounded-[3rem] p-12 lg:p-20 overflow-hidden text-white ${themeClass}`}>
          <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <Badge className="bg-white text-primary hover:bg-white font-black px-4 py-2 rounded-full text-sm mb-2 shadow-lg">
              <Tag className="h-3 w-3 mr-2" /> {data.title} Assessment: {BUSINESS_CONFIG.assessmentPrice}
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight leading-tight">
              {data.h1}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              {data.description}. Our local team provides straightforward recommendations and craftsman-level work for your home or business.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Link to="/contact">Request {data.title} Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">{data.title} Options</h2>
            <div className="grid gap-4">
              {data.services.map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${data.slug}/${s.slug}`}
                  className="group flex items-center justify-between p-6 rounded-2xl border bg-card hover:border-primary hover:shadow-lg transition-all"
                >
                  <span className="text-xl font-bold text-primary group-hover:text-destructive transition-colors">{s.title}</span>
                  <ArrowRight className="h-6 w-6 text-destructive group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
              {data.services.length === 0 && (
                <div className="p-8 text-center bg-muted/30 rounded-2xl border-dashed border-2">
                  <p className="text-muted-foreground">Detailed service information coming soon. Contact us for all {data.title} needs!</p>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-8 bg-primary/5 rounded-[2.5rem] p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <AlertCircle className="text-destructive h-6 w-6" />
              Common Reasons to Call
            </h2>
            <ul className="space-y-4">
              {[
                "System won't turn on or stay on",
                "Unusual or loud noises during operation",
                "Rising energy costs despite normal use",
                "Poor airflow or uneven temperatures",
                "Visible leaks or frozen components"
              ].map(reason => (
                <li key={reason} className="flex gap-3 text-lg text-muted-foreground">
                  <CheckCircle2 className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Related Help</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/maintenance-plans">Maintenance Plans</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/troubleshooting">Troubleshooting</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}