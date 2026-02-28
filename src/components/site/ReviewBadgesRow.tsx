import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
interface BadgeProps {
  platform: string;
  rating: string;
  count: string;
  className?: string;
}
function StarRow() {
  return (
    <div className="flex gap-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
      ))}
    </div>
  );
}
function ReviewBadge({ platform, rating, count, className }: BadgeProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-4 min-w-[140px] rounded-xl border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
      className
    )}>
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{platform}</span>
      <StarRow />
      <span className="text-sm font-bold text-foreground">{rating}</span>
      <span className="text-[10px] text-muted-foreground">{count}</span>
    </div>
  );
}
export function ReviewBadgesRow() {
  const reviews = [
    { platform: "Google", rating: "5.0", count: "XXX Reviews" },
    { platform: "Yelp", rating: "5.0", count: "XXX Reviews" },
    { platform: "Facebook", rating: "5.0", count: "XXX Reviews" },
    { platform: "Nextdoor", rating: "5.0", count: "XXX Recs" },
    { platform: "HomeAdvisor", rating: "5.0", count: "Top Rated" },
    { platform: "BBB", rating: "A+", count: "Accredited" },
  ];
  return (
    <div className="w-full">
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 pb-4 no-scrollbar">
        {reviews.map((r) => (
          <ReviewBadge key={r.platform} platform={r.platform} rating={r.rating} count={r.count} />
        ))}
      </div>
    </div>
  );
}