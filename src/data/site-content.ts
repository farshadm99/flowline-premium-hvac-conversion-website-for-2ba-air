export const MAINTENANCE_PLAN = {
  name: "Comfort Club",
  price: "$250/year",
  benefits: [
    { title: "Priority Scheduling", description: "Jump to the front of the line, even during peak summer and winter rushes.", icon: "clock" },
    { title: "Exclusive Discounts", description: "15% discount on all HVAC repairs and parts.", icon: "percent" },
    { title: "Seasonal Tune-ups", description: "Two precision visits per year (one cooling, one heating) to maximize efficiency.", icon: "wrench" },
    { title: "No Emergency Fees", description: "Standard diagnostic rates apply, even for late-night or weekend emergencies.", icon: "shield" },
    { title: "Maintenance Reminders", description: "We track your service history and call you when it's time for your check-up.", icon: "bell" },
    { title: "Extended Equipment Life", description: "Regularly maintained systems last up to 40% longer than neglected units.", icon: "heart" }
  ],
  comparison: [
    { feature: "Repair Discount", member: "15% Off", nonMember: "Full Price" },
    { feature: "Emergency Surcharge", member: "$0", nonMember: "$99+" },
    { feature: "Scheduling", member: "Priority", nonMember: "Standard" },
    { feature: "Annual Tune-ups", member: "Included (2)", nonMember: "$250+ value" }
  ]
};
export const FAQ_DATA = [
  {
    category: "Pricing & Estimates",
    items: [
      { q: "How much does a new AC installation cost?", a: "Installation costs vary based on system size, efficiency rating (SEER2), and home configuration. We provide free, transparent estimates with multiple options to fit your budget." },
      { q: "Do you offer financing?", a: "Yes! We offer flexible financing options for system replacements to help you get the comfort you need now. Ask our technician during your estimate." },
      { q: "Is there a diagnostic fee for service calls?", a: "We charge a flat-rate diagnostic fee to send a certified tech to your home. If you are a Comfort Club member, this fee may be reduced or waived." },
      { q: "Do you charge extra for weekends?", a: "We provide 24/7 emergency service. While after-hours rates may apply for non-members, our Comfort Club members enjoy standard rates around the clock." },
      { q: "Are your quotes flat-rate or hourly?", a: "We use flat-rate pricing. You'll know the exact cost of the repair before we start, so there are no surprises on the final bill." },
      { q: "Do you offer senior or military discounts?", a: "Yes, we are proud to offer discounts to our seniors and active/retired military personnel. Please mention this when scheduling." }
    ]
  },
  {
    category: "Repairs & Service",
    items: [
      { q: "How quickly can you fix my AC?", a: "We offer same-day availability for most service calls. Our vans are fully stocked to ensure most repairs are completed on the first visit." },
      { q: "What brands of HVAC equipment do you service?", a: "We service all major brands, including Trane, Carrier, Lennox, Rheem, Goodman, and more." },
      { q: "What are the signs I need a repair?", a: "Common signs include unusual noises, weak airflow, rising energy bills, or the system struggling to maintain your set temperature." },
      { q: "Is it worth repairing an old unit?", a: "Generally, if a repair costs more than 50% of a new unit's value and the unit is over 12 years old, replacement is usually the better investment." },
      { q: "Do you provide emergency repairs?", a: "Absolutely. We are available 24/7 for urgent issues like total loss of heat in winter or cooling in extreme summer heat." },
      { q: "Are your technicians certified?", a: "Yes, our technicians are NATE-certified and undergo regular training to stay current on the latest HVAC technology." }
    ]
  },
  {
    category: "Maintenance",
    items: [
      { q: "How often should I service my HVAC system?", a: "We recommend professional maintenance twice a year: once in the spring for cooling and once in the fall for heating." },
      { q: "What is included in a tune-up?", a: "Our 21-point inspection includes cleaning coils, checking refrigerant levels, testing safety sensors, tightening electrical connections, and more." },
      { q: "Can maintenance lower my energy bills?", a: "Yes. A clean, well-tuned system runs more efficiently, using less electricity or gas to achieve the same comfort level." },
      { q: "Will maintenance prevent breakdowns?", a: "Regular service catches small issues—like a worn capacitor or dirty sensor—before they turn into expensive mid-season failures." },
      { q: "Does maintenance keep my warranty valid?", a: "Most manufacturers require documented professional maintenance to keep your parts warranty active." },
      { q: "What can I do myself for maintenance?", a: "The most important thing a homeowner can do is change the air filters every 1-3 months and keep the outdoor unit clear of debris." }
    ]
  }
];
export const TROUBLESHOOTING_SECTIONS = [
  {
    id: "ac",
    title: "Air Conditioning",
    intro: "If your AC is struggling, try these checks first. Remember: if you see ice on the unit, turn it off immediately.",
    symptoms: [
      {
        name: "AC Not Turning On",
        causes: ["Thermostat batteries dead", "Tripped breaker", "Float switch triggered by water"],
        checks: ["Check thermostat screen", "Check electrical panel", "Check drain line for clogs"]
      },
      {
        name: "Blowing Warm Air",
        causes: ["Dirty air filter", "Low refrigerant", "Outdoor unit power loss"],
        checks: ["Replace air filter", "Ensure outdoor unit is running", "Check for blocked vents"]
      }
    ]
  },
  {
    id: "heating",
    title: "Heating & Furnaces",
    intro: "Safety is priority #1. If you smell gas, leave your home immediately and call emergency services.",
    symptoms: [
      {
        name: "No Heat",
        causes: ["Pilot light out (older units)", "Dirty flame sensor", "Ignitor failure"],
        checks: ["Verify gas valve is open", "Check thermostat setting", "Replace filter to ensure airflow"]
      }
    ]
  }
];