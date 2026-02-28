export interface SEOConfig {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, any>;
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
  // JSON-LD
  const existingScript = document.getElementById('json-ld-data');
  if (existingScript) {
    existingScript.remove();
  }
  if (config.jsonLd) {
    const script = document.createElement('script');
    script.id = 'json-ld-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(config.jsonLd);
    document.head.appendChild(script);
  }
}
export const commonSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "2ba Air",
    "image": DEFAULT_LOGO,
    "telephone": "[###-###-####]",
    "email": "email@domain.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Street]",
      "addressLocality": "[City]",
      "addressRegion": "[State]",
      "postalCode": "[ZIP]"
    },
    "areaServed": ["City 1", "City 2", "City 3"],
    "openingHours": "Mo-Sa 08:00-18:00",
    "priceRange": "$$"
  }
};