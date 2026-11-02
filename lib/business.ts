export const business = {
  name: "Mercy City Solar & Boreholes",
  location: "Tynwald South, Zimbabwe",
  phone: "+263 783 602 491",
  whatsapp: "263783602491",
  origin:
    process.env.NEXT_PUBLIC_SITE_URL || "https://mercy-city-solar.vercel.app",
  hours: null, // Publish only after the client confirms the supplied screenshot is current.
};
export const services = [
  {
    id: "groundwater-intelligence",
    title: "Groundwater Intelligence",
    short: "Understanding the ground before the next step.",
    description:
      "Groundwater intelligence brings together information about a site to inform discussions around practical water access. Tell us about your land, intended use and water requirements to discuss an appropriate assessment.",
    image: "survey",
    category: "Site Surveys",
  },
  {
    id: "underground-water-survey",
    title: "Underground Water Survey",
    short: "A considered starting point for water access.",
    description:
      "Underground water surveys support the assessment of a site before drilling is considered. Survey scope and the information required are discussed with you for the specific location. A survey is not a guarantee of water availability.",
    image: "survey",
    category: "Site Surveys",
  },
  {
    id: "borehole-drilling",
    title: "Borehole Drilling",
    short: "From site requirements to practical infrastructure.",
    description:
      "Discuss borehole drilling for your property or water project. Site conditions, access and your requirements guide the proposed scope. Depth, yield, timing and pricing are assessed individually rather than promised in advance.",
    image: "drilling",
    category: "Borehole Drilling",
  },
  {
    id: "solar-pump-installation",
    title: "Solar Pump Installation",
    short: "Connecting solar power with your water needs.",
    description:
      "Solar pump installation is offered around the needs of each water system. Enquire about pumping infrastructure and integration with suitable water-storage configurations. Equipment selection and installation requirements are determined through consultation.",
    image: "solar-tanks",
    category: "Solar Water Systems",
  },
  {
    id: "gis-services",
    title: "GIS Services",
    short: "A spatial perspective on your site.",
    description:
      "Geographic information system services help organise and interpret location-based information. Discuss the site, available data and intended output so the relevant GIS scope can be defined.",
    image: "agriculture",
    category: "Technical Services",
  },
  {
    id: "earth-observation",
    title: "Earth Observation",
    short: "A wider view to support technical understanding.",
    description:
      "Earth observation services are part of Mercy City’s technical offering. Share your area of interest and the questions you need to explore to discuss suitable information sources and deliverables.",
    image: "agriculture",
    category: "Technical Services",
  },
  {
    id: "gpr-services",
    title: "Ground-Penetrating Radar",
    short: "Technical investigation, shaped around your enquiry.",
    description:
      "Enquire about ground-penetrating radar services for your site. Suitability, survey objectives, ground conditions and the required outputs need to be discussed before a scope is agreed.",
    image: "survey",
    category: "Technical Services",
  },
];
export const projects = [
  {
    id: "drilling",
    title: "Borehole drilling on site",
    category: "Borehole Drilling",
    alt: "Green drilling rig positioned beside borehole casing pipes on a site",
    position: "50% 48%",
  },
  {
    id: "solar-tanks",
    title: "Solar panels & elevated storage",
    category: "Solar Water Systems",
    alt: "Two elevated water tanks with solar panels and blue water pipes",
    position: "50% 43%",
  },
  {
    id: "agriculture",
    title: "Water storage beside cultivated fields",
    category: "Agricultural Installations",
    alt: "Four elevated water tanks overlooking rows of crops",
    position: "50% 45%",
  },
  {
    id: "three-tanks",
    title: "Three-tank storage structure",
    category: "Water Storage Infrastructure",
    alt: "Three dark water tanks on individual steel support structures",
    position: "50% 45%",
  },
  {
    id: "survey",
    title: "Groundwater survey equipment",
    category: "Site Surveys",
    alt: "Survey instrument and probes arranged in an open equipment case outdoors",
    position: "50% 45%",
  },
  {
    id: "solar-single",
    title: "Solar array & single-tank system",
    category: "Solar Water Systems",
    alt: "Solar panel array next to an elevated black water tank in a rural setting",
    position: "50% 40%",
  },
  {
    id: "drilling-team",
    title: "Drilling equipment in operation",
    category: "Borehole Drilling",
    alt: "People working beside a drilling rig on site",
    position: "50% 50%",
  },
  {
    id: "rural-tank",
    title: "Elevated tank in a rural setting",
    category: "Water Storage Infrastructure",
    alt: "An elevated green water tank with surrounding pipework in a rural landscape",
    position: "50% 48%",
  },
];
export const categories = [
  "All Images",
  "Borehole Drilling",
  "Solar Water Systems",
  "Water Storage Infrastructure",
  "Site Surveys",
  "Agricultural Installations",
];
export const enquiryOptions = [
  "Groundwater Survey",
  "Borehole Drilling",
  "Solar Pump Installation",
  "GIS / Earth Observation",
  "GPR Services",
  "Other Enquiry",
];
export const faqs = [
  [
    "What services does Mercy City offer?",
    "Our offering includes groundwater intelligence, underground water surveys, borehole drilling, solar pump installation, GIS, earth observation and ground-penetrating radar services.",
  ],
  [
    "Can I request a groundwater survey?",
    "Yes. Share your project location and what you need water for. We can then discuss your survey requirements and the appropriate next step.",
  ],
  [
    "Do you offer borehole drilling?",
    "Yes. Borehole drilling is one of our core services. Each enquiry is discussed individually to establish the project scope.",
  ],
  [
    "Do you install solar-powered water pumps?",
    "Yes. Enquire about solar pump installation and tell us about your existing or proposed water system.",
  ],
  [
    "Can I enquire about an agricultural water system?",
    "Yes. Tell us about the site, water use and any existing infrastructure so we can discuss your requirements.",
  ],
  [
    "How can I request a quotation?",
    "Complete our enquiry form or contact Mercy City on WhatsApp. Your requirements help us start a project-specific conversation.",
  ],
];
