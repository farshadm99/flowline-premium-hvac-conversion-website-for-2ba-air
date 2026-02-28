import React from 'react';
import { Star, Globe, MessageSquare, Facebook, Home, ShieldCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
interface BadgeProps {
  platform: string;
  rating: string;
  count: string;
  platformColor: string;
  icon: React.ReactNode;
}
function ReviewBadge({ platform, rating, count, platformColor, icon }: BadgeProps) {
  return (
    <div className="group flex flex-col items-center justify-center p-5 min-w-[160px] rounded-2xl border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={cn("p-2.5 rounded-xl mb-3 transition-transform group-hover:scale-110", platformColor)}>
        {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
      </div>
      <div className="flex gap-0.5 mb-1.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-[#FACC15] text-[#FACC15]" />
        ))}
      </div>
      <div className="text-sm font-black text-primary leading-tight text-center">{rating}</div>
      <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mt-1">{count}</div>
      <div className="mt-3 text-[10px] font-bold text-primary/40 uppercase tracking-tighter transition-colors group-hover:text-primary">{platform}</div>
    </div>
  );
}
export function ReviewBadgesRow() {
  const reviews = [
    {
      platform: "Google",
      rating: "5.0 (124 reviews)",
      count: "Verified Local",
      platformColor: "bg-blue-50 text-blue-600",
      icon: <Globe />
    },
    {
      platform: "Yelp",
      rating: "5.0 (42 reviews)",
      count: "Top Rated 2024",
      platformColor: "bg-red-50 text-red-600",
      icon: <MessageSquare />
    },
    {
      platform: "Facebook",
      rating: "5.0 (88 reviews)",
      count: "Highly Rec.",
      platformColor: "bg-indigo-50 text-indigo-700",
      icon: <Facebook />
    },
    {
      platform: "Nextdoor",
      rating: "5.0 (31 recs)",
      count: "Fave Pro",
      platformColor: "bg-green-50 text-green-600",
      icon: <Home />
    },
    {
      platform: "HomeAdvisor",
      rating: "Top Rated",
      count: "Elite Service",
      platformColor: "bg-orange-50 text-orange-600",
      icon: <ShieldCheck />
    },
    {
      platform: "BBB",
      rating: "A+ Rating",
      count: "Accredited",
      platformColor: "bg-blue-100 text-blue-900",
      icon: <Award />
    },
  ];
  return (
    <div className="w-full">
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-4 pb-4 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
        {reviews.map((r) => (
          <ReviewBadge
            key={r.platform}
            platform={r.platform}
            rating={r.rating}
            count={r.count}
            platformColor={r.platformColor}
            icon={r.icon}
          />
        ))}
      </div>
    </div>
  );
}