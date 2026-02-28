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
    slug: 'indoor-air-quality',
    title: 'Air Quality',
    description: 'Purifiers, UV Lights & Filtration',
    h1: 'Indoor Air Quality Solutions',
    iconType: 'iaq',
    services: []
  },
  {
    slug: 'ductwork',
    title: 'Ductwork',
    description: 'Repair, Sealing & Balancing',
    h1: 'Ductwork Design, Sealing & Repair',
    iconType: 'ductwork',
    services: []
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    description: 'Light Commercial HVAC Services',
    h1: 'Commercial HVAC Solutions',
    iconType: 'commercial',
    services: []
  }
];
export function findCategoryBySlug(slug: string) {
  return SERVICES_DATA.find(c => c.slug === slug);
}
export function findServiceBySlug(categorySlug: string, serviceSlug: string) {
  const cat = findCategoryBySlug(categorySlug);
  return cat?.services.find(s => s.slug === serviceSlug);
}