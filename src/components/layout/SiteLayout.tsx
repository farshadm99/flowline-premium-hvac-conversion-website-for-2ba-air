import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/data/business-config';
export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/10 selection:text-primary">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
      {/* Floating Call Now Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden animate-bounce">
        <Button
          asChild
          size="lg"
          className="hvac-cta-red rounded-full w-14 h-14 p-0 shadow-lg"
        >
          <a href={BUSINESS_CONFIG.phoneRaw} aria-label={`Call ${BUSINESS_CONFIG.name} at ${BUSINESS_CONFIG.phone}`}>
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>
      <Toaster richColors position="top-right" closeButton />
    </div>
  );
}