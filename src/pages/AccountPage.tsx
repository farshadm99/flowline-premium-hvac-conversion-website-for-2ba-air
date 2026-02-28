import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  History, 
  FileText, 
  Settings, 
  Lock, 
  Rocket,
  ShieldCheck,
  CreditCard,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BreadcrumbNav } from '@/components/site/BreadcrumbNav';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function AccountPage() {
  const sidebarLinks = [
    { icon: User, label: "Profile", active: true },
    { icon: History, label: "Service History" },
    { icon: FileText, label: "Invoices" },
    { icon: Settings, label: "Preferences" },
  ];
  const features = [
    { icon: Calendar, title: "One-Click Rebooking", desc: "Easily schedule your next tune-up." },
    { icon: CreditCard, title: "Online Payments", desc: "Pay invoices securely in seconds." },
    { icon: ShieldCheck, title: "Warranty Tracking", desc: "View all your equipment certifications." },
  ];
  return (
    <div className="-mt-8 md:-mt-10 lg:-mt-12">
      <BreadcrumbNav />
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Mockup */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card border rounded-[2rem] p-6 space-y-8">
              <div className="flex items-center gap-4 px-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-primary leading-tight">Guest User</div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Customer Portal</div>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {sidebarLinks.map((link, i) => (
                  <button 
                    key={i} 
                    disabled 
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${link.active ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:bg-muted/50 cursor-not-allowed opacity-60'}`}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
          {/* Main Dashboard Area */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="rounded-[2.5rem] border-none bg-primary text-primary-foreground relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 hvac-pattern-airflow opacity-10" />
              <div className="absolute top-0 right-0 -mr-16 -mt-16 p-32 bg-white/5 rounded-full" />
              <CardContent className="p-8 lg:p-12 relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Rocket className="h-4 w-4 text-destructive" />
                  Coming Q3 2026
                </div>
                <h1 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight max-w-2xl">
                  A Smarter Way to Manage Your Home's Comfort.
                </h1>
                <p className="text-lg text-primary-foreground/80 max-w-xl">
                  We're building the {BUSINESS_CONFIG.name} portal to give you complete control over your HVAC service history, invoices, and scheduling.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="hvac-cta-red">
                    <Link to="/contact">Get Notified on Launch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-[2rem]">
                <div className="bg-white border shadow-xl rounded-2xl px-6 py-3 flex items-center gap-2 font-bold text-primary">
                  <Lock className="h-4 w-4 text-destructive" /> Feature Locked
                </div>
              </div>
              {features.map((f, i) => (
                <Card key={i} className="border rounded-[2rem] p-6 space-y-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-primary/5 rounded-2xl w-fit text-primary">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-primary">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </Card>
              ))}
            </div>
            <section className="bg-muted/30 rounded-[2.5rem] p-12 text-center space-y-6 border border-dashed border-primary/20">
              <h2 className="text-2xl font-bold text-primary">Need something right now?</h2>
              <p className="text-muted-foreground">Our team is available by phone to pull service history or assist with billing inquiries.</p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <a href={BUSINESS_CONFIG.phoneRaw}>Call Support</a>
                </Button>
                <Button asChild variant="ghost" className="text-primary font-bold">
                  <Link to="/contact">Contact via Web</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}