import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, Thermometer, Zap, Waves, Settings, Factory, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SERVICES_DATA } from '@/data/services-data';
import { updateSEO } from '@/lib/seo';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
const iconMap = {
  cooling: Wind,
  heating: Thermometer,
  heatpump: Zap,
  iaq: Waves,
  ductwork: Settings,
  commercial: Factory,
  thermostat: Settings
};
export function ServicesHub() {
  useEffect(() => {
    updateSEO({
      title: `HVAC Services in ${BUSINESS_CONFIG.serviceArea.summary}, ${BUSINESS_CONFIG.serviceArea.state} | ${BUSINESS_CONFIG.name}`,
      description: `Explore our full range of HVAC services including cooling, heating, heat pumps, air quality, and ductwork in ${BUSINESS_CONFIG.serviceArea.summary}. Assessments starting at ${BUSINESS_CONFIG.assessmentPrice}.`,
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-16">
        <section className="text-center max-w-3xl mx-auto space-y-6 px-4">
          <Badge className="bg-destructive text-white hover:bg-destructive font-black px-4 py-2 rounded-full text-sm mb-4">
            <Tag className="h-3 w-3 mr-2" /> Professional Assessment: {BUSINESS_CONFIG.assessmentPrice}
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">HVAC Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether it’s a quick repair or a full replacement, we’ll help you choose the right fix for comfort, efficiency, and long-term reliability.
          </p>
        </section>
        <div className="space-y-4">
          {SERVICES_DATA.map((cat, idx) => {
            const Icon = iconMap[cat.iconType as keyof typeof iconMap] || Settings;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] border bg-card transition-all hover:border-primary hover:shadow-xl"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                  {/* Visual Side */}
                  <div className={`w-full lg:w-1/3 p-12 flex justify-center items-center relative overflow-hidden ${isEven ? 'bg-primary/5' : 'bg-destructive/5'}`}>
                    <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
                    <Icon className={`h-24 w-24 ${isEven ? 'text-primary' : 'text-destructive'} relative z-10`} />
                  </div>
                  {/* Content Side */}
                  <div className="w-full lg:w-2/3 p-8 lg:p-12 space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-primary">{cat.title}</h2>
                      <p className="text-lg text-muted-foreground">{cat.description}</p>
                    </div>
                    {cat.services.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cat.services.map(s => (
                          <Link
                            key={s.slug}
                            to={`/services/${cat.slug}/${s.slug}`}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-destructive transition-colors group/link"
                          >
                            <ArrowRight className="h-4 w-4 text-destructive opacity-0 group-hover/link:opacity-100 transition-opacity -ml-6 group-hover/link:ml-0" />
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    <div className="pt-4 flex gap-4">
                      <Button asChild className={isEven ? 'hvac-cta-navy' : 'hvac-cta-red'}>
                        <Link to={`/services/${cat.slug}`}>View All {cat.title}</Link>
                      </Button>
                      <Button asChild variant="ghost" className="text-primary font-bold">
                        <Link to="/contact">Get Assessment</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* CTA BAND */}
        <section className="bg-primary rounded-[3rem] p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 hvac-pattern-blueprint opacity-10" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">Not sure what you need?</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Our troubleshooting guide helps you identify issues and find safe homeowner checks before calling a pro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                <Link to="/troubleshooting">Troubleshooting Guide</Link>
              </Button>
              <Button asChild className="hvac-cta-red">
                <Link to="/contact">Book {BUSINESS_CONFIG.assessmentPrice} Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}