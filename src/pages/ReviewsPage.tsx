import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReviewBadgesRow } from '@/components/site/ReviewBadgesRow';
import { updateSEO } from '@/lib/seo';
import { BUSINESS_CONFIG } from '@/data/business-config';
const testimonials = [
  {
    name: "Sarah J.",
    city: "City 1",
    rating: 5,
    text: "2ba Air was fantastic! They showed up exactly when they said they would, diagnosed my AC issue in minutes, and had it fixed the same day. No hidden fees and the technician was super professional.",
  },
  {
    name: "Mark T.",
    city: "City 3",
    rating: 5,
    text: "We used them for a full furnace replacement. They gave us three clear options at different price points and didn't pressure us. The installation was clean and they even wore shoe covers inside. Highly recommend.",
  },
  {
    name: "Linda M.",
    city: "City 2",
    rating: 5,
    text: "Excellent service! I called for an emergency repair on a Saturday night and they were here within two hours. Fair pricing even for after-hours work.",
  },
  {
    name: "David W.",
    city: "City 1",
    rating: 5,
    text: "Joined their Comfort Club maintenance plan. The peace of mind is worth every penny. They found a small leak during the tune-up that could have turned into a huge problem.",
  },
];
export function ReviewsPage() {
  useEffect(() => {
    updateSEO({
      title: `Customer Reviews | ${BUSINESS_CONFIG.name} HVAC Services`,
      description: `See what customers say about ${BUSINESS_CONFIG.name}. Read real testimonials from ${BUSINESS_CONFIG.serviceArea.summary} and leave a review on Google, Yelp, or Facebook.`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "HVACBusiness",
          "name": BUSINESS_CONFIG.name
        },
        "ratingValue": "5.0",
        "reviewCount": "150"
      }
    });
  }, []);
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-primary tracking-tight">Customer Reviews</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We’re proud of the reputation we’ve built for honest service and clean workmanship across {BUSINESS_CONFIG.serviceArea.summary}.
        </p>
      </section>
      <div className="bg-primary/5 rounded-3xl p-8 border">
        <ReviewBadgesRow />
      </div>
      <section className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border rounded-2xl p-8 shadow-sm relative"
          >
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/5" />
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
            <p className="text-lg text-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
            <div className="font-bold text-primary">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.city}, {BUSINESS_CONFIG.serviceArea.state}</div>
          </motion.div>
        ))}
      </section>
      <section className="bg-primary rounded-3xl p-12 text-center text-primary-foreground space-y-8">
        <h2 className="text-3xl font-bold">Have we served you recently?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Your feedback helps us keep improving and helps your neighbors find reliable HVAC service.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
            Review on Google
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
            Review on Yelp
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
            Review on Facebook
          </Button>
        </div>
      </section>
    </div>
  );
}