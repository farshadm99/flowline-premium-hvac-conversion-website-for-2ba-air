export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  promise: string;
  symptoms: string[];
  checks: string[];
  process: { step: string; description: string }[];
  relatedSlugs: string[];
}
export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  h1: string;
  iconType: 'cooling' | 'heating' | 'heatpump' | 'iaq' | 'ductwork' | 'thermostat' | 'commercial';
  services: ServiceDetail[];
}
export const SERVICES_DATA: ServiceCategory[] = [
  {
    slug: 'cooling',
    title: 'Cooling',
    description: 'AC Repair, Installation & Maintenance',
    h1: 'Cooling Services (AC Repair, Installation & Maintenance)',
    iconType: 'cooling',
    services: [
      {
        slug: 'ac-repair',
        title: 'AC Repair',
        metaTitle: 'AC Repair in [Service Area], [State] | 2ba Air',
        metaDescription: 'Fast AC repair services. We diagnose the issue, explain options, and get you cooling again—without surprises.',
        h1: 'AC Repair in [Service Area], [State]',
        promise: 'We diagnose the issue, explain options, and get you cooling again—without surprises.',
        symptoms: ['Warm air from vents', 'Weak airflow', 'Frequent cycling', 'Odd noises', 'Frozen indoor coil'],
        checks: ['Check thermostat batteries', 'Ensure air filter is clean', 'Check outdoor unit for debris', 'Verify breaker is on'],
        process: [
          { step: 'Arrival', description: 'Our tech arrives in a fully stocked van, ready to work.' },
          { step: 'Diagnosis', description: 'Comprehensive system check to find the root cause.' },
          { step: 'Options', description: 'Clear repair options with flat-rate pricing provided upfront.' },
          { step: 'Repair', description: 'Precision work using high-quality components.' },
          { step: 'Testing', description: 'Verification that the system is cooling perfectly.' }
        ],
        relatedSlugs: ['ac-maintenance', 'ductless-mini-splits']
      },
      {
        slug: 'ac-installation',
        title: 'AC Installation',
        metaTitle: 'New AC Installation & Replacement | 2ba Air',
        metaDescription: 'Upgrade to a high-efficiency cooling system. Professional sizing and installation for lasting comfort.',
        h1: 'AC Installation & Replacement',
        promise: 'Expertly sized and installed systems built for long-term reliability and lower energy bills.',
        symptoms: ['System is 15+ years old', 'Repair costs exceed half system value', 'Energy bills are skyrocketing', 'Uneven cooling'],
        checks: ['Review recent energy bills', 'Note hot/cold spots in home', 'Check age of current unit'],
        process: [
          { step: 'Consultation', description: 'Load calculation and efficiency goal setting.' },
          { step: 'Selection', description: 'Choosing the right brand and SEER2 rating for your home.' },
          { step: 'Installation', description: 'Professional removal and clean installation of the new unit.' },
          { step: 'Commissioning', description: 'Fine-tuning airflow and refrigerant charge to factory specs.' }
        ],
        relatedSlugs: ['ac-maintenance', 'ductwork-sealing']
      }
    ]
  },
  {
    slug: 'heating',
    title: 'Heating',
    description: 'Furnace & Heating Solutions',
    h1: 'Heating Services (Furnace Repair, Installation & Maintenance)',
    iconType: 'heating',
    services: [
      {
        slug: 'furnace-repair',
        title: 'Furnace Repair',
        metaTitle: 'Furnace Repair in [Service Area], [State] | 2ba Air',
        metaDescription: 'Reliable furnace repair. Safety-first approach to restore your home\'s warmth fast.',
        h1: 'Furnace Repair in [Service Area], [State]',
        promise: 'We prioritize safety and reliability to get your heat back on as quickly as possible.',
        symptoms: ['No heat', 'Yellow burner flame', 'Loud banging or whistling', 'Thermostat issues', 'Burning smell'],
        checks: ['Check gas valve position', 'Verify thermostat is in HEAT mode', 'Check furnace filter', 'Reset breaker if tripped'],
        process: [
          { step: 'Safety Check', description: 'Checking for gas leaks and carbon monoxide levels first.' },
          { step: 'Diagnostic', description: 'Tracing ignition, sensors, and blower issues.' },
          { step: 'Options', description: 'Providing clear fixes for immediate comfort.' },
          { step: 'Repair & Test', description: 'Restoring operation and verifying safety sensors.' }
        ],
        relatedSlugs: ['furnace-maintenance', 'heat-pump-repair-install']
      },
      {
        slug: 'furnace-installation',
        title: 'Furnace Installation',
        metaTitle: 'New Furnace Installation | 2ba Air',
        metaDescription: 'High-efficiency heating installation. Upgrade your home comfort and safety with professional replacement.',
        h1: 'Furnace Installation & Replacement',
        promise: 'We provide expert sizing and installation for maximum safety and lower monthly heating bills.',
        symptoms: ['Unit older than 15 years', 'Cracked heat exchanger', 'Loud noises from motor', 'Carbon monoxide alarm triggered'],
        checks: ['Compare repair vs replacement cost', 'Check system age', 'Note energy bill spikes'],
        process: [
          { step: 'Sizing', description: 'Proper load calculation for the space.' },
          { step: 'Removal', description: 'Safe disposal of old equipment.' },
          { step: 'Install', description: 'Code-compliant installation of new heating system.' },
          { step: 'Validation', description: 'Testing for gas leaks and proper venting.' }
        ],
        relatedSlugs: ['furnace-maintenance', 'air-purifiers']
      }
    ]
  },
  {
    slug: 'heat-pumps',
    title: 'Heat Pumps',
    description: 'All-Electric Heating & Cooling',
    h1: 'Heat Pump Services (Repair, Install & Maintenance)',
    iconType: 'heatpump',
    services: [
      {
        slug: 'repair',
        title: 'Heat Pump Repair',
        metaTitle: 'Heat Pump Repair | 2ba Air',
        metaDescription: 'Specialized heat pump repair for year-round efficiency. Diagnosis and fix for reversing valves, coils, and sensors.',
        h1: 'Heat Pump Repair Services',
        promise: 'Specialized expertise in electric heating and cooling systems to maximize your efficiency.',
        symptoms: ['Stuck in one mode', 'Ice buildup on outdoor unit', 'Constant running', 'Emergency heat always on'],
        checks: ['Ensure outdoor unit isn\'t buried in snow/leaves', 'Check thermostat setting', 'Verify outdoor disconnect'],
        process: [
          { step: 'Evaluation', description: 'Testing the reversing valve and defrost cycle.' },
          { step: 'Repair', description: 'Fixing refrigerant leaks or sensor failures.' },
          { step: 'Optimization', description: 'Ensuring the system balances efficiency and comfort.' }
        ],
        relatedSlugs: ['maintenance', 'installation']
      }
    ]
  },
  {
    slug: 'ductwork-iaq',
    title: 'Ductwork & IAQ',
    description: 'Air Purifiers, Duct Sealing & Filtration',
    h1: 'Air Quality & Ductwork Solutions',
    iconType: 'iaq',
    services: [
      {
        slug: 'air-purifiers',
        title: 'Air Purifiers',
        metaTitle: 'Whole-Home Air Purifiers | 2ba Air',
        metaDescription: 'Eliminate 99.9% of allergens and viruses with hospital-grade whole-home air purification.',
        h1: 'Whole-Home Air Purification',
        promise: 'Breathe easier with advanced systems that scrub the air as it circulates through your home.',
        symptoms: ['Excessive dust', 'Linger odors', 'Allergy flare-ups', 'Visible mold in ducts'],
        checks: ['Check air filter MERV rating', 'Note odors near vents', 'Inspect duct registries'],
        process: [
          { step: 'Assessment', description: 'Testing indoor air quality levels.' },
          { step: 'Selection', description: 'Choosing between UV lights and HEPA filtration.' },
          { step: 'Install', description: 'Direct integration with your existing HVAC system.' }
        ],
        relatedSlugs: ['duct-sealing', 'humidifiers']
      },
      {
        slug: 'duct-sealing',
        title: 'Duct Sealing',
        metaTitle: 'Duct Sealing & Repair | 2ba Air',
        metaDescription: 'Fix leaky ducts to improve comfort and save up to 30% on your energy bills.',
        h1: 'Duct Sealing & Repair Services',
        promise: 'Stop wasting money on conditioned air that never reaches your rooms.',
        symptoms: ['Hot/cold rooms', 'High energy bills', 'Dust coming from vents', 'Whistling noises in walls'],
        checks: ['Inspect exposed ducts in attic/basement', 'Feel for airflow at seams', 'Check for detached joints'],
        process: [
          { step: 'Inspection', description: 'Using thermal imaging to find leaks.' },
          { step: 'Sealing', description: 'Applying mastic or tape to all critical joints.' },
          { step: 'Balancing', description: 'Adjusting dampers for even airflow.' }
        ],
        relatedSlugs: ['air-purifiers', 'ac-maintenance']
      }
    ]
  },
  {
    slug: 'thermostats',
    title: 'Thermostats',
    description: 'Smart Controls & WiFi Troubleshooting',
    h1: 'Smart Thermostat & Control Services',
    iconType: 'thermostat',
    services: [
      {
        slug: 'smart-install',
        title: 'Smart Thermostats',
        metaTitle: 'Smart Thermostat Installation | 2ba Air',
        metaDescription: 'Upgrade to Nest, Ecobee, or Honeywell. Professional installation and mobile setup for maximum control.',
        h1: 'Smart Thermostat Installation',
        promise: 'Modern controls that learn your habits and save you money automatically.',
        symptoms: ['Outdated manual slider', 'Difficult to program', 'No remote control', 'Short cycling'],
        checks: ['Verify Wi-Fi signal at thermostat', 'Check for "C" wire', 'Review compatibility'],
        process: [
          { step: 'Wiring', description: 'Professional installation of the baseplate and C-wire if needed.' },
          { step: 'Configuration', description: 'Linking the unit to your home network.' },
          { step: 'Education', description: 'Walkthrough of mobile app and scheduling features.' }
        ],
        relatedSlugs: ['wifi-troubleshooting', 'professional-wiring']
      }
    ]
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    description: 'Light Commercial HVAC Services',
    h1: 'Commercial HVAC Solutions',
    iconType: 'commercial',
    services: [
      {
        slug: 'rtu-repair',
        title: 'RTU Repair',
        metaTitle: 'Commercial RTU Repair | 2ba Air',
        metaDescription: 'Fast repair for commercial rooftop units. Keep your business running and your customers comfortable.',
        h1: 'Commercial Rooftop Unit Repair',
        promise: 'Priority response for businesses to minimize downtime and comfort loss.',
        symptoms: ['Loud vibration', 'Water leaks through ceiling', 'Loss of cooling in retail space', 'High humidity'],
        checks: ['Verify roof access', 'Check internal breakers', 'Note unit model and brand'],
        process: [
          { step: 'Access', description: 'Safe roof access and unit panel removal.' },
          { step: 'Repair', description: 'Heavy-duty component replacement.' },
          { step: 'Test', description: 'Multi-stage validation of cooling and heating cycles.' }
        ],
        relatedSlugs: ['preventative-maintenance', 'duct-balancing']
      }
    ]
  }
];
export function findCategoryBySlug(slug: string) {
  return SERVICES_DATA.find(c => c.slug === slug);
}
export function findServiceBySlug(categorySlug: string, serviceSlug: string) {
  const cat = findCategoryBySlug(categorySlug);
  return cat?.services.find(s => s.slug === serviceSlug);
}