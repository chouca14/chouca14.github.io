export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  role?: string;
  highlights: string[]; // keep 3–5 short bullets
  links?: ProjectLink[];
  cover?: ProjectMedia;
  gallery?: ProjectMedia[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "jar-labelling-machine",
    title: "Jar Labelling Machine",
    subtitle: "Automation machine for small series — adjustable, multi-jar formats, industrial mindset, designed for a local beekeeper",
    year: "2024",
    tags: ["Automation", "PLC", "Mechanism design", "Inventor", "TIA Portal"],
    role: "Design & build (mechanics + electronics + PLC logic)",
    highlights: [
      "Met specs: 14 pots/min with 99% reliability across multiple jar formats",
      "Designed mechanically synchronized rotation + label peel-off system",
      "Delivered a robust adjustment mechanism inspired by 3D-printer Z-height concepts",
    ],
    links: [{ label: "LinkedIn (add link)", href: "#" }],
    cover: { src: "/projects/jar-labelling/jar-labelling1.png", alt: "Jar labelling machine cover image" },
    gallery: [
      { src: "/projects/jar-labelling/jar-labelling1.png", alt: "Machine overview (placeholder)", caption: "Overview" },
      { src: "/projects/jar-labelling/jar-labelling2.png", alt: "Mechanism detail (placeholder)", caption: "Mechanism detail" },
      { src: "/projects/jar-labelling/jar-labelling3.png", alt: "Label path / adjustment (placeholder)", caption: "Adjustment system" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Design and manufacture of a machine for labelling series of jars. Built to handle the majority of jars on the market, with adjustable label height.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "Mechanical structure designed in Autodesk Inventor",
          "Mechanically synchronized jar rotation and label peel-off system",
          "Height adjustment concept inspired by 3D printers",
          "PLC logic and machine workflow (Siemens TIA Portal)",
        ],
      },
      {
        heading: "Results",
        bullets: ["14 pots per minute throughput", "99% operational reliability", "Improved throughput vs baseline (CV: +180%)"],
      },
      {
        heading: "Why this matters to industry",
        bullets: [
          "Designing for repeatability, tolerance, and real-world variability",
          "Automation thinking (safe sequence, failure modes, simple operator flow)",
          "Delivering measurable outcomes (rate, reliability)",
        ],
      },
    ],
  },

  {
    slug: "easi2c",
    title: "EASI2C Board",
    subtitle: "I2C integration board — quick, clean wiring + easy expansion for extra components",
    year: "2024",
    tags: ["PCB", "KiCad", "Arduino", "C++", "I2C"],
    role: "Electronics + firmware",
    highlights: [
      "Designed PCB in KiCad and machined in-house",
      "Arduino Uno C++ code for I2C module integration",
      "Added capacity for 4 extra components via simple connections",
    ],
    cover: { src: "/projects/easi2c/easi2c1.JPG", alt: "EASI2C board cover image" },
    gallery: [
      { src: "/projects/easi2c/easi2c1.JPG", alt: "PCB top view (placeholder)", caption: "PCB" },
      { src: "/projects/easi2c/easi2c2.png", alt: "Wiring prototype", caption: "wiring" },
      { src: "/projects/easi2c/easi2c3.png", alt: "PCB", caption: "PCB" },
    ],
    sections: [
      { heading: "Overview", paragraphs: ["A circuit designed for easy integration of I2C communication modules, aimed at making prototypes faster and cleaner."] },
      {
        heading: "What I did",
        bullets: [
          "Defined requirements (connectors, power, module layout, expandability)",
          "Designed the PCB in KiCad, manufactured/machined in-house",
          "Wrote Arduino (C++) firmware for the integration workflow",
        ],
      },
      { heading: "Result", bullets: ["In addition to standard functions, supports 4 additional components via simple connections", "Cleaner prototype wiring and quicker bring-up for I2C modules"] },
      { heading: "What this shows", bullets: ["End-to-end electronics execution (design → build → test)", "Pragmatic design for usability and iteration speed"] },
    ],
  },

  {
    slug: "voron-corexy-3d-printer",
    title: "Voron CoreXY 3D Printer",
    subtitle: "High-performance custom printer — build, tuning, firmware, reliability improvements",
    year: "2024–2025",
    tags: ["Mechatronics", "Klipper", "Linux", "Raspberry Pi", "Calibration"],
    role: "Builder / system integrator",
    highlights: [
      "Designed, built, and tuned a CoreXY printer (Linux, Raspberry Pi, GitHub, Klipper)",
      "Achieved ~60% reduction in print time while improving reliability and material compatibility",
      "Focused on repeatable calibration and maintainable configuration",
    ],
    cover: { src: "/projects/placeholder.svg", alt: "Voron printer cover image" },
    gallery: [
      { src: "/projects/placeholder.svg", alt: "Printer overview (placeholder)", caption: "Overview" },
      { src: "/projects/placeholder.svg", alt: "Motion / calibration (placeholder)", caption: "Calibration" },
      { src: "/projects/placeholder.svg", alt: "Printed parts results (placeholder)", caption: "Results" },
    ],
    sections: [
      { heading: "Overview", paragraphs: ["A high-performance custom 3D printer build focused on speed, reliability, and repeatable print quality."] },
      { heading: "What I did", bullets: ["System bring-up (mechanics, electronics, firmware)", "Calibration and tuning for reliable motion and print consistency", "Configuration management with GitHub for traceability and reproducibility"] },
      { heading: "Results", bullets: ["~60% reduction in print time while improving reliability", "Improved compatibility across materials through tuned profiles"] },
      { heading: "Why it matters", bullets: ["System-level engineering: mechanics + electronics + software together", "Debug discipline and validation mindset", "Industrial-style documentation and repeatability"] },
    ],
  },

  {
    slug: "gs3dfactory",
    title: "GS3Dfactory (Co-founder)",
    subtitle: "Prototype → production: designed and manufactured mask fasteners for medical and consumer customers",
    year: "2020–2022",
    tags: ["Product development", "OnShape", "Manufacturing", "Iteration", "Suppliers"],
    role: "Co-founder & managing partner",
    highlights: [
      "Designed on OnShape and iterated with healthcare professionals",
      "Optimized production time, printer settings, and post-processing",
      "Sold more than 1000 fasteners, mainly to the medical sector",
    ],
    cover: { src: "/projects/gs3dfactory/gs3dfactory1.jpeg", alt: "GS3Dfactory cover image" },
    gallery: [
      { src: "/projects/gs3dfactory/gs3dfactory1.jpeg", alt: "Product", caption: "Product" },
      { src: "/projects/gs3dfactory/gs3dfactory2.JPG", alt: "Production", caption: "Production" },
      { src: "/projects/gs3dfactory/gs3dfactory3.JPG", alt: "Packaging", caption: "Packaging" },
    ],
    sections: [
      { heading: "Overview", paragraphs: ["Co-created a business and delivered a real product under real constraints: design, prototypes, production optimization, and delivery."] },
      { heading: "What I did", bullets: ["Mechanical design and prototyping (OnShape)", "Feedback loop with healthcare professionals", "Production optimization (settings, post-processing, throughput)", "Supplier interactions and execution under constraints"] },
      { heading: "Results", bullets: ["More than 1000 fasteners sold", "Customers mainly from the medical sector"] },
      { heading: "What this shows", bullets: ["Ownership and execution", "Real production constraints (time, repeatability, quality)", "Customer-driven iteration"] },
    ],
  },

  {
    slug: "fpv-drone",
    title: "FPV Drone Build (CHOUCA)",
    subtitle: "Custom cinematic FPV drone — assembly, soldering, firmware, telemetry, reliability",
    year: "2021",
    tags: ["Embedded", "Betaflight", "RF/telemetry", "Soldering", "Debugging"],
    role: "Builder",
    highlights: [
      "Optimized component placement for cooling and reduced interference",
      "Configured Betaflight + telemetry and validated real performance",
      "Operational drone with ~1 km range and >100 km/h top speed",
    ],
    cover: { src: "/projects/fpv/fpv1.png", alt: "FPV drone cover image" },
    gallery: [
      { src: "/projects/fpv/fpv1.png", alt: "Drone build (placeholder)", caption: "Build" },
      { src: "/projects/fpv/fpv2.png", alt: "Electronics stack (placeholder)", caption: "Electronics" },
      { src: "/projects/fpv/fpv3.png", alt: "Flight / results (placeholder)", caption: "Results" },
    ],
    sections: [
      { heading: "Overview", paragraphs: ["Assembling and programming an FPV drone with a focus on reliability, clean integration, and real-world performance."] },
      { heading: "What I did", bullets: ["Component selection and integration for cinematic use", "Precision soldering and clean wiring", "Betaflight setup, tuning, and telemetry configuration", "Failure diagnosis and practical fixes"] },
      { heading: "Results", bullets: ["Operational drone", "~1 km range for free video shots", "Maximum speed > 100 km/h"] },
      { heading: "What this shows", bullets: ["Hands-on electronics confidence", "Troubleshooting under constraints", "Performance validation, not just assembly"] },
    ],
  },
];
