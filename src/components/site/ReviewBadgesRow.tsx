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
    <div className="group flex flex-col items-center justify-center p-6 min-w-[170px] rounded-2xl border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500">
      <div className={cn("p-3 rounded-2xl mb-4 transition-transform group-hover:scale-110", platformColor)}>
        {icon}
      </div>
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-[#FACC15] text-[#FACC15]" />
        ))}
      </div>
      <div className="text-base font-black text-primary leading-tight">{rating}</div>
      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{count}</div>
      <div className="mt-3 text-[11px] font-bold text-primary/40 uppercase tracking-tighter transition-colors group-hover:text-primary">{platform}</div>
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
      icon: <Globe className="h-6 w-6" /> 
    },
    { 
      platform: "Yelp", 
      rating: "5.0 (42 reviews)", 
      count: "Top Rated 2024", 
      platformColor: "bg-red-50 text-red-600",
      icon: <MessageSquare className="h-6 w-6" /> 
    },
    { 
      platform: "Facebook", 
      rating: "5.0 (88 reviews)", 
      count: "Highly Rec.", 
      platformColor: "bg-indigo-50 text-indigo-700",
      icon: <Facebook className="h-6 w-6" /> 
    },
    { 
      platform: "Nextdoor", 
      rating: "5.0 (31 recs)", 
      count: "Fave Pro", 
      platformColor: "bg-green-50 text-green-600",
      icon: <Home className="h-6 w-6" /> 
    },
    { 
      platform: "HomeAdvisor", 
      rating: "Top Rated", 
      count: "Elite Service", 
      platformColor: "bg-orange-50 text-orange-600",
      icon: <ShieldCheck className="h-6 w-6" /> 
    },
    { 
      platform: "BBB", 
      rating: "A+ Rating", 
      count: "Accredited", 
      platformColor: "bg-blue-100 text-blue-900",
      icon: <Award className="h-6 w-6" /> 
    },
  ];
  return (
    <div className="w-full">
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-5 pb-6 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
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