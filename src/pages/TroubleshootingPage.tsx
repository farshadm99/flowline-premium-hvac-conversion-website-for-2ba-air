import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Phone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { updateSEO } from '@/lib/seo';
import { TROUBLESHOOTING_SECTIONS } from '@/data/site-content';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function TroubleshootingPage() {
  useEffect(() => {
    updateSEO({
      title: `HVAC Troubleshooting Guide | ${BUSINESS_CONFIG.name}`,
      description: "Diagnose common AC and heating problems safely. Try our homeowner checks before calling a pro.",
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">Troubleshooting Guide</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Use this guide to understand symptoms and try safe checks. If you smell gas, see smoke, or suspect electrical damage—stop and call for help.
          </p>
        </section>
        <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 p-6 rounded-3xl">
          <ShieldAlert className="h-6 w-6" />
          <AlertTitle className="text-xl font-bold ml-2">Safety Disclaimer</AlertTitle>
          <AlertDescription className="text-lg mt-2 font-medium">
            HVAC systems use high voltage and flammable gases. Only perform the "Safe Checks" listed below. If you are uncomfortable or suspect a serious leak, turn off the system and call us.
          </AlertDescription>
        </Alert>
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-4">Sections</p>
              <nav className="flex flex-col gap-1">
                {TROUBLESHOOTING_SECTIONS.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="px-4 py-2 rounded-xl hover:bg-primary/5 text-primary font-medium transition-colors">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          <div className="lg:col-span-3 space-y-16">
            {TROUBLESHOOTING_SECTIONS.map(section => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                  <p className="text-muted-foreground">{section.intro}</p>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.symptoms.map((symptom, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-card">
                      <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline py-6">
                        {symptom.name}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h4 className="font-bold flex items-center gap-2 text-destructive">
                              <Info className="h-4 w-4" /> Likely Causes
                            </h4>
                            <ul className="space-y-2">
                              {symptom.causes.map(c => (
                                <li key={c} className="text-muted-foreground flex gap-2">
                                  <span className="text-primary">•</span> {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-bold flex items-center gap-2 text-primary">
                              <CheckCircle2 className="h-4 w-4" /> Safe Checks
                            </h4>
                            <ul className="space-y-2">
                              {symptom.checks.map(c => (
                                <li key={c} className="text-muted-foreground flex gap-2">
                                  <span className="text-destructive">→</span> {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="pt-4 border-t">
                          <Button asChild className="hvac-cta-navy">
                            <Link to="/contact">Still not working? Request Repair</Link>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
            <section className="bg-primary rounded-[3rem] p-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Our emergency team is available 24/7 for urgent breakdowns. Don't wait in the cold or heat.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="hvac-cta-red">
                  <a href={BUSINESS_CONFIG.phoneRaw}><Phone className="mr-2 h-4 w-4" /> Call {BUSINESS_CONFIG.phone}</a>
                </Button>
                <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Request Priority Service</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}