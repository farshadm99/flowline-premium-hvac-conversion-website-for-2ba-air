import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { updateSEO } from '@/lib/seo';
import { FAQ_DATA } from '@/data/site-content';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function FAQPage() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.flatMap(cat => cat.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      })))
    };
    updateSEO({
      title: `HVAC Frequently Asked Questions | ${BUSINESS_CONFIG.name}`,
      description: `Find clear answers on HVAC pricing, repairs, maintenance plans, and emergency services in ${BUSINESS_CONFIG.serviceArea.summary}.`,
      jsonLd: faqSchema
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary mb-4">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">HVAC Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about keeping your home comfortable and your system running efficiently.
          </p>
        </section>
        <Tabs defaultValue={FAQ_DATA[0].category} className="w-full space-y-8">
          <TabsList className="w-full flex h-auto p-1 bg-muted/50 rounded-2xl overflow-x-auto no-scrollbar justify-start md:justify-center">
            {FAQ_DATA.map(cat => (
              <TabsTrigger key={cat.category} value={cat.category} className="px-6 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {FAQ_DATA.map(cat => (
            <TabsContent key={cat.category} value={cat.category} className="mt-0">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {cat.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`q-${idx}`} className="border rounded-2xl px-6 bg-card transition-all hover:border-primary/50">
                      <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline py-6 text-left leading-tight">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground text-lg leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        <section className="bg-primary/5 rounded-[3rem] p-12 lg:p-16 border text-center space-y-8">
          <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary">
            <MessageSquare className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-primary">Still have questions?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our team is here to help. Reach out directly for a consultation or to schedule a service visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="hvac-cta-navy">
              <Link to="/contact">Request Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <a href={BUSINESS_CONFIG.phoneRaw}><Phone className="mr-2 h-4 w-4" /> {BUSINESS_CONFIG.phone}</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}