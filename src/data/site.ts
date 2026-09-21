export const site = {
  name: "Guilhem Rozier Vilardell",
  headline: "Microengineering, electronics — Everything in life is about problem solving.",
  location: "Geneva / Nyon, Switzerland",

  email: "guilhem.roziervi@hes-so.ch",
  phone: "+41 78 670 23 79",

  links: {
    github: "https://github.com/chouca14",
    linkedin: "https://www.linkedin.com/in/guilhem-rozier-vilardell",
  },

  seo: {
    url: "https://chouca14.github.io",
    description:
      "Portfolio of Guilhem Rozier Vilardell — third-year microengineering (electronics) student: embedded control, data acquisition, PCB design, automation, and prototyping.",
  },

  about: {
    intro:
      "Third-year BSc student in Microengineering (electronics orientation) at HEPIA, with hands-on experience in embedded control, ADC-based data acquisition, PCB design, and industrial automation, validated through real hardware projects. Currently building FPGA fundamentals (third-year curriculum, autumn 2026).",
    goal:
      "Looking for a semester project starting November 2026 (one day per week), leading into a full-time Bachelor thesis from mid-March to mid-July 2027, in electronics, instrumentation, and embedded systems.",
    bullets: [
      "I like fast iteration loops: define constraints → prototype → measure → improve.",
      "Comfortable bridging mechanics, electronics, and software to ship reliable prototypes.",
      "I document decisions so a team can move quickly and maintain systems over time.",
    ],
  },

  experience: [
    {
      company: "Renault",
      location: "Paris, France",
      role: "Internship",
      period: "Jul 2026",
      bullets: [
        "Built Node-RED flows for industrial data acquisition and control from cameras and industrial robot arms, supporting AI-based image processing for quality control.",
        "Developed a dashboard for real-time visualisation and analysis of production-line performance.",
        "Wrote the code for an internal training application teaching Renault employees about security protocols.",
      ],
    },
    {
      company: "Haleon",
      location: "Nyon, Switzerland",
      role: "Cleaning Operator — GMP High-Risk Zone",
      period: "2023–2025",
      bullets: [
        "Cleaning operations in a regulated pharmaceutical factory: strict procedural compliance, traceability, and operational reliability.",
        "Worked across different risk zones, each with its own protocols and procedures.",
      ],
    },
    {
      company: "GS3Dfactory",
      location: "Nyon, Switzerland",
      role: "Co-Founder & CTO",
      period: "2020–2022",
      bullets: [
        "Designed and produced mask fasteners during the pandemic, from prototyping with GHOL hospital to a finished product sold to hospitals, clinics, and pharmacies in Switzerland.",
        "Ran 3D manufacturing, stock management, and logistics for small-batch production.",
        "Built a custom ERP system for production and order management, and a custom website for product promotion and sales.",
        "Planned tests and iterated with suppliers and customers under real production constraints.",
      ],
    },
    {
      company: "Hublot",
      location: "Nyon, Switzerland",
      role: "Technical Internship",
      period: "Apr 2017",
      bullets: [
        "Exposure to high-precision component assembly, quality control, and industrial manufacturing processes.",
      ],
    },
  ],

  education: [
    {
      school: "HEPIA — University of Applied Sciences, Geneva",
      degree: "BSc in Microengineering (Electronics orientation)",
      period: "2024–Present",
      note: "Grade: 5.3 / 6",
    },
    {
      school: "University of Southern Denmark (SDU), Odense",
      degree: "Summer School in AI for Healthcare Data",
      period: "Aug 2026",
      note: "Grade: 5.0 / 6",
    },
    {
      school: "CPNV, Yverdon",
      degree: "Preparatory Year in Engineering",
      period: "2023–2024",
      note: "Grade: 5.2 / 6",
    },
  ],

  skills: {
    "Mechanical & Manufacturing": [
      "SolidWorks",
      "Creo",
      "Fusion 360",
      "Inventor",
      "3D printing",
      "laser cutting",
      "machining",
    ],
    "Electronics & Embedded": [
      "PCB design (KiCad / Altium)",
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "ADC/DAC",
      "sensors & measurement",
      "analog circuit design",
      "LTspice",
      "QSpice",
    ],
    "Digital Design": ["FPGA fundamentals (in progress)"],
    "Automation & Control": [
      "Siemens PLCs (TIA Portal)",
      "industrial I/O",
      "HMI concepts",
      "PID control",
      "feedback systems & stability analysis",
      "signal acquisition & processing",
      "Node-RED",
    ],
    Programming: ["Python", "C/C++", "MATLAB"],
    Workflow: ["design → prototype → test → iterate", "documentation", "Git/GitHub"],
  },

  interests:
    "Handball (1st league player, coach & referee) · Ironman finisher · Ski instructor · Volunteer firefighter, Nyon",

  languages: [
    "French (native)",
    "Catalan (native)",
    "English (C1)",
    "German (B2)",
    "Spanish (B1)",
  ],
} as const;

export type Site = typeof site;
