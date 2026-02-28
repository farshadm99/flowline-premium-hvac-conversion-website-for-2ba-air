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
    "name": "2ba Air",
    "image": DEFAULT_LOGO,
    "@id": "https://www.2baair.com",
    "url": "https://www.2baair.com",
    "telephone": "[###-###-####]",
    "email": "email@domain.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Street]",
      "addressLocality": "[City]",
      "addressRegion": "[State]",
      "postalCode": "[ZIP]",
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
    "areaServed": ["City 1", "City 2", "City 3"],
    "priceRange": "$$"
  }
};