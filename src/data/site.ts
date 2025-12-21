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
      "Portfolio of Guilhem Rozier Vilardell — microengineering (electronics) student focused on prototyping, automation, and industrial execution.",
  },

  about: {
    intro:
      "2nd year in BCs. Microengineering. Specializing in electronics, with strong hands-on experience in manufacturing, automation, and prototyping.",
    goal:
      "Seeking an industrial or R&D internship where I can bring practical engineering skills, autonomy, and systems-level problem solving.",
    bullets: [
      "I like fast iteration loops: define constraints → prototype → measure → improve.",
      "Comfortable bridging mechanics, electronics, and software to ship reliable prototypes.",
      "I document decisions so a team can move quickly and maintain systems over time.",
    ],
  },

  experience: [
    {
      company: "Haleon",
      location: "Nyon, Switzerland",
      role: "Cleaning Agent — GMP Risk Zone",
      period: "2023–2025",
      bullets: [
        "Worked in GMP-controlled pharmaceutical production environments under strict hygiene, traceability, and safety constraints.",
        "Built discipline for regulated environments and standard operating procedures.",
      ],
    },
    {
      company: "GS3Dfactory",
      location: "Nyon, Switzerland",
      role: "Co-Founder & Managing Partner",
      period: "2020–2022",
      bullets: [
        "Led prototyping and small-scale production of a medical device from mechanical design to manufactured prototype.",
        "Coordinated testing/iteration cycles and supplier interactions under real production constraints.",
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
      degree: "BSc in Microengineering (Electronics specialization)",
      period: "2024–Present",
      note: "Grade: 5.3 / 6",
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
      "sensors & measurement",
      "QSpice",
    ],
    "Automation & Control": [
      "Siemens PLCs (TIA Portal)",
      "industrial I/O",
      "HMI concepts",
    ],
    Programming: ["Python", "C/C++", "MATLAB"],
    Workflow: ["design → prototype → test → iterate", "documentation", "Git/GitHub"],
  },

  languages: [
    "French (native)",
    "Catalan (native)",
    "English (C1)",
    "German (B2)",
    "Spanish (B1)",
  ],
} as const;

export type Site = typeof site;
