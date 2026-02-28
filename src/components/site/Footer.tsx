import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
const LOGO_URL = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
const serviceAreas = ["City 1", "City 2", "City 3", "City 4", "City 5", "Nearby Towns"];
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link to="/">
              <img src={LOGO_URL} alt="2ba Air Logo" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Service-first HVAC team focused on reliability, honest options, and craftsmanship in [Service Area].
            </p>
            <div className="flex items-center gap-2 text-xs font-medium bg-white/10 w-fit px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4 text-destructive" />
              Licensed & Fully Insured
            </div>
          </div>
          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-destructive" />
                <span>[Street, City, State ZIP]</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-destructive" />
                <a href="tel:###-###-####" className="hover:text-white transition-colors">[###-###-####]</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-destructive" />
                <a href="mailto:email@domain.com" className="hover:text-white transition-colors">email@domain.com</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-destructive" />
                <span>Mon–Sat 8am–6pm; 24/7 emergency available</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services/cooling" className="hover:text-white transition-colors">Air Conditioning</Link></li>
              <li><Link to="/services/heating" className="hover:text-white transition-colors">Heating & Furnaces</Link></li>
              <li><Link to="/services/heat-pumps" className="hover:text-white transition-colors">Heat Pumps</Link></li>
              <li><Link to="/services/indoor-air-quality" className="hover:text-white transition-colors">Indoor Air Quality</Link></li>
              <li><Link to="/services/ductwork" className="hover:text-white transition-colors">Ductwork Service</Link></li>
              <li><Link to="/maintenance-plans" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
            </ul>
          </div>
          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/70">
              {serviceAreas.map(area => (
                <li key={area}>
                  <Link to="/service-areas" className="hover:text-white transition-colors">{area}</Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/reviews" className="text-sm font-semibold text-white underline underline-offset-4 hover:text-destructive transition-colors">
                Read Our Reviews
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-10 bg-primary-foreground/10" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} 2ba Air. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/faq" className="hover:text-white">FAQ</Link>
            <Link to="/troubleshooting" className="hover:text-white">Troubleshooting</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}