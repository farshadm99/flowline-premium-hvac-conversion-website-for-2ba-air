import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/data/business-config';
const LOGO_URL = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
export function Footer() {
  const [logoError, setLogoError] = React.useState(false);
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand & Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              {!logoError ? (
                <img
                  src={LOGO_URL}
                  alt={`${BUSINESS_CONFIG.name} HVAC Professional Services`}
                  className="h-16 w-auto brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-3xl font-black tracking-tighter text-white">{BUSINESS_CONFIG.name.toUpperCase()}</span>
              )}
            </Link>
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-xs font-medium">
              A service-first HVAC team providing reliable cooling, heating, and air quality solutions across the DMV region.
            </p>
            <div className="flex items-center gap-3 text-xs font-black bg-white/10 w-fit px-4 py-2 rounded-full uppercase tracking-[0.1em]">
              <ShieldCheck className="h-4 w-4 text-destructive" />
              {BUSINESS_CONFIG.license}
            </div>
          </div>
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight uppercase text-white">Get In Touch</h3>
            <ul className="space-y-5 text-base text-primary-foreground/70">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-destructive" />
                <span className="font-semibold">{BUSINESS_CONFIG.address.full}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-destructive" />
                <a href={BUSINESS_CONFIG.phoneRaw} className="hover:text-white transition-colors font-black text-lg">{BUSINESS_CONFIG.phone}</a>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-destructive" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors font-semibold">{BUSINESS_CONFIG.email}</a>
              </li>
              <li className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 text-destructive" />
                <span className="font-semibold">{BUSINESS_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight uppercase text-white">Expert Services</h3>
            <ul className="space-y-3 text-base text-primary-foreground/70 font-semibold">
              <li><Link to="/services/cooling" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Cooling & AC</Link></li>
              <li><Link to="/services/heating" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Heating & Furnaces</Link></li>
              <li><Link to="/services/heat-pumps" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Heat Pump Systems</Link></li>
              <li><Link to="/services/ductwork-iaq" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Ductwork & IAQ</Link></li>
              <li><Link to="/services/thermostats" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Smart Thermostats</Link></li>
              <li><Link to="/services/commercial" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="h-4 w-4 text-destructive" /> Light Commercial</Link></li>
            </ul>
          </div>
          {/* Service Areas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight uppercase text-white">Local Areas</h3>
            <ul className="grid grid-cols-1 gap-3 text-base text-primary-foreground/70 font-semibold">
              {BUSINESS_CONFIG.serviceArea.cities.slice(0, 5).map(area => (
                <li key={area}>
                  <Link to="/service-areas" className="hover:text-white transition-colors flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-destructive opacity-50" />
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild className="hvac-cta-red w-full">
                <Link to="/reviews">READ OUR REVIEWS</Link>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-12 bg-primary-foreground/10" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/troubleshooting" className="hover:text-white transition-colors">TROUBLESHOOTING</Link>
            <Link to="/about" className="hover:text-white transition-colors">ABOUT US</Link>
            <Link to="/contact" className="hover:text-white transition-colors">BOOK SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}