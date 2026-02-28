import { BUSINESS_CONFIG } from '@/data/business-config';
export interface SEOConfig {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}
const DEFAULT_LOGO = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
export function updateSEO(config: SEOConfig) {
  if (typeof document === 'undefined') return;
  // Title
  document.title = config.title;
  // Meta tags
  const setMeta = (name: string, content: string, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setMeta('description', config.description);
  setMeta('og:title', config.title, 'property');
  setMeta('og:description', config.description, 'property');
  setMeta('og:image', config.ogImage || DEFAULT_LOGO, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', config.title);
  setMeta('twitter:description', config.description);
  setMeta('twitter:image', config.ogImage || DEFAULT_LOGO);
  // JSON-LD cleanup and addition
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(s => s.remove());
  if (config.jsonLd) {
    const schemas = Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd];
    schemas.forEach((schema, idx) => {
      const script = document.createElement('script');
      script.id = `json-ld-${idx}`;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }
}
export const commonSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": BUSINESS_CONFIG.name,
    "image": DEFAULT_LOGO,
    "@id": BUSINESS_CONFIG.domain,
    "url": BUSINESS_CONFIG.domain,
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address.street,
      "addressLocality": BUSINESS_CONFIG.address.city,
      "addressRegion": BUSINESS_CONFIG.address.state,
      "postalCode": BUSINESS_CONFIG.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0,
      "longitude": 0
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": BUSINESS_CONFIG.serviceArea.cities,
    "priceRange": "$$"
  }
};