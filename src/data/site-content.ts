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
      { q: "How much does a new AC installation cost?", a: "Installation costs vary based on system size, efficiency rating (SEER2), and home configuration. We provide free, transparent estimates with multiple options." },
      { q: "Do you offer financing?", a: "Yes! We offer flexible financing options for system replacements. Ask our technician during your estimate for details on low monthly payments." },
      { q: "Is there a diagnostic fee for service calls?", a: "We charge a flat-rate diagnostic fee to send a certified tech to your home. If you are a Comfort Club member, this fee is typically waived or reduced." },
      { q: "Do you charge extra for weekends?", a: "While emergency rates may apply for non-members, our Comfort Club members enjoy standard rates 24/7." },
      { q: "Are your quotes flat-rate or hourly?", a: "We use upfront flat-rate pricing. You'll know the exact cost before we start, so there are no surprises on the final bill." },
      { q: "How do I get a free estimate?", a: "Free estimates are provided for system replacements and major installations. You can request one via our contact page or by calling us." }
    ]
  },
  {
    category: "Repairs & Service",
    items: [
      { q: "How quickly can you fix my AC?", a: "We offer same-day availability for most service calls. Our vans are fully stocked to ensure most repairs are completed on the first visit." },
      { q: "What brands of HVAC equipment do you service?", a: "We service all major brands, including Trane, Carrier, Lennox, Rheem, Goodman, and more." },
      { q: "What are the signs I need a repair?", a: "Common signs include unusual noises, weak airflow, rising energy bills, or the system struggling to maintain your set temperature." },
      { q: "Is it worth repairing an old unit?", a: "If a repair costs more than 50% of a new unit's value and the unit is over 12 years old, replacement is usually the smarter long-term investment." },
      { q: "Do you provide emergency repairs?", a: "Absolutely. We are available 24/7 for urgent issues like total loss of heat or cooling during extreme weather." },
      { q: "Are your technicians certified?", a: "Yes, our technicians are NATE-certified and undergo regular training to stay current on the latest HVAC technology." }
    ]
  },
  {
    category: "Indoor Air Quality",
    items: [
      { q: "How can I reduce dust in my home?", a: "High-efficiency media filters and regular duct sealing can significantly reduce dust. We also offer whole-home air purifiers that trap micro-particles." },
      { q: "What are UV lights for in an HVAC system?", a: "UV lights are installed near the cooling coil to kill mold, bacteria, and viruses, preventing them from circulating through your home's air." },
      { q: "Do I need a humidifier?", a: "If you experience dry skin, static shocks, or throat irritation in winter, a whole-home humidifier can maintain ideal 35-45% humidity levels." },
      { q: "Are air purifiers effective against allergies?", a: "Yes, our hospital-grade filtration systems can remove up to 99.9% of allergens, including pollen, pet dander, and smoke." }
    ]
  },
  {
    category: "Thermostats & Smart Home",
    items: [
      { q: "Can you install a thermostat I bought myself?", a: "Yes, we offer professional installation for all major smart thermostat brands to ensure proper wiring and Wi-Fi configuration." },
      { q: "Why is my thermostat screen blank?", a: "This is often caused by dead batteries, a tripped breaker, or a safety switch on your AC unit that has cut power due to a clogged drain." },
      { q: "Will a smart thermostat save me money?", a: "Most homeowners save 10-15% on heating and cooling costs by using schedules and 'away' modes on a smart thermostat." }
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
      },
      {
        name: "Burning Smell",
        causes: ["Dust burning off (normal at start of season)", "Electrical component failure", "Motor overheating"],
        checks: ["Wait 15 mins if it's the first use of the year", "Turn off unit if smell persists or smoke appears", "Check for scorched wiring"]
      }
    ]
  },
  {
    id: "thermostat",
    title: "Thermostats",
    intro: "The thermostat is the brain of your system. Many 'system failures' are actually simple thermostat issues.",
    symptoms: [
      {
        name: "Screen is Blank",
        causes: ["Dead batteries", "Loss of 24v power from furnace", "Internal failure"],
        checks: ["Replace batteries", "Check furnace power switch", "Check for 'C' wire connection"]
      },
      {
        name: "Temperature Doesn't Match",
        causes: ["Drafts near thermostat", "Poor calibration", "Unit mounted near heat source"],
        checks: ["Seal hole behind thermostat", "Verify with a separate thermometer", "Move lamps or electronics away from unit"]
      }
    ]
  },
  {
    id: "noises",
    title: "System Noises",
    intro: "New or loud noises often indicate mechanical strain. Identifying the sound helps us diagnose the issue faster.",
    symptoms: [
      {
        name: "Screeching or Squealing",
        causes: ["Worn fan belt", "Bearing failure", "High static pressure"],
        checks: ["Shut down immediately to prevent motor damage", "Check for loose panels", "Contact a pro for motor inspection"]
      },
      {
        name: "Banging or Thumping",
        causes: ["Loose blower component", "Compressor slugging", "Ductwork expansion"],
        checks: ["Check for debris in the blower wheel", "Note if it happens at startup or during run", "Verify filter is properly seated"]
      }
    ]
  }
];