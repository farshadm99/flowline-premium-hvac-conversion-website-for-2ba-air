import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck, Clock, Percent, Bell, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { updateSEO } from '@/lib/seo';
import { MAINTENANCE_PLAN } from '@/data/site-content';
const iconMap = {
  clock: Clock,
  percent: Percent,
  wrench: Zap,
  shield: ShieldCheck,
  bell: Bell,
  heart: Heart
};
export function MaintenancePlansPage() {
  useEffect(() => {
    updateSEO({
      title: "Comfort Club Maintenance Plan ($250/yr) | 2ba Air",
      description: "Join the Comfort Club for priority scheduling, exclusive discounts, and bi-annual tune-ups to keep your HVAC system running perfectly.",
    });
  }, []);
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="space-y-20">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-destructive/10 text-destructive px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">Membership</div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight leading-tight">
              Join the Comfort Club for Only <span className="text-destructive">{MAINTENANCE_PLAN.price}</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay ahead of breakdowns and get priority help when it matters most. One emergency repair visit can cost more than a year of prevention.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button disabled size="lg" className="hvac-cta-red h-14 px-8 text-lg">
                Join Now (Coming Soon)
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary text-primary">
                <Link to="/contact">Ask About Enrollment</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic">Payment link will be added soon. Current customers can enroll via phone.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 hvac-pattern-blueprint opacity-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MAINTENANCE_PLAN.benefits.map((benefit, i) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap];
                return (
                  <Card key={i} className="border rounded-3xl p-6 hover:shadow-md transition-shadow bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0 space-y-4">
                      <div className="p-3 bg-primary/10 rounded-2xl w-fit text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-primary">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-primary-foreground">
          <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center">Membership Pays for Itself</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-xl opacity-90 leading-relaxed">
                  Neglected HVAC systems lose efficiency and are prone to sudden failure during extreme weather. Members enjoy peace of mind and lower utility bills year-round.
                </p>
                <ul className="space-y-4">
                  {MAINTENANCE_PLAN.comparison.map((item, i) => (
                    <li key={i} className="flex justify-between border-b border-white/10 pb-4">
                      <span className="font-medium opacity-80">{item.feature}</span>
                      <span className="font-bold text-destructive">{item.member}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 border border-white/20">
                <div className="text-center">
                  <div className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Annual Investment</div>
                  <div className="text-5xl font-black">{MAINTENANCE_PLAN.price}</div>
                </div>
                <div className="h-px bg-white/20" />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive" />
                    <span>Includes 2 Precision Tune-ups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive" />
                    <span>Includes 15% Repair Discount</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-destructive" />
                    <span>Priority Disaster Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-primary text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {[
              { q: "When do the tune-ups happen?", a: "We typically schedule cooling tune-ups in the spring and heating tune-ups in the fall, before the extreme weather hits." },
              { q: "Can I transfer my membership?", a: "Yes! If you sell your home, the membership can be transferred to the new owners, adding value to your home sale." },
              { q: "Is there a long-term contract?", a: "Our plan is billed annually. You can choose to renew each year, with no cancellation fees if you decide not to continue." }
            ].map((faq, i) => (
              <div key={i} className="space-y-2 p-6 border rounded-2xl">
                <h4 className="font-bold text-primary text-lg">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}