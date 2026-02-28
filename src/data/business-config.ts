export const BUSINESS_CONFIG = {
  name: "2ba Air",
  domain: "https://www.2baair.com",
  phone: "(555) 123-4567",
  phoneRaw: "tel:5551234567",
  email: "service@2baair.com",
  address: {
    street: "123 comfort way",
    city: "City Center",
    state: "ST",
    zip: "12345",
    full: "123 Comfort Way, City Center, ST 12345"
  },
  serviceArea: {
    summary: "Comprehensive HVAC coverage across the entire DMV region (DC, Maryland, Virginia)",
    state: "DMV",
    regions: [
      {
        name: "Virginia",
        locations: ["Fairfax County", "Arlington County", "Loudoun County", "Prince William County", "Alexandria", "Falls Church", "Manassas", "Vienna", "McLean", "Reston"]
      },
      {
        name: "Maryland",
        locations: ["Montgomery County", "Prince George's County", "Howard County", "Frederick County", "Rockville", "Gaithersburg", "Bethesda", "Silver Spring", "Bowie", "Columbia"]
      },
      {
        name: "Washington DC",
        locations: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Capitol Hill", "Georgetown", "Adams Morgan", "Dupont Circle"]
      }
    ],
    cities: [
      "Fairfax", "Arlington", "Loudoun", "Prince William", "Alexandria", 
      "Montgomery", "Prince George's", "Howard", "Frederick", "Washington DC"
    ]
  },
  hours: "Mon–Sat 8am–6pm; 24/7 Emergency Available",
  license: "Licensed, Bonded & Fully Insured in VA, MD, and DC",
  googleBusinessUrl: "#"
};