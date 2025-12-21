export const site = {
  // ---- Identity ----
  name: "Guilhem Rozier Vilardell",
  headline: "BSc Microengineering (Electronics) — Prototyping • Automation • Embedded",
  location: "Geneva / Nyon, Switzerland",

  // ---- Contact ----
  email: "guilhem.roziervi@hes-so.ch",
  phone: "+41 78 670 23 79",
  links: {
    github: "https://github.com/chouca14",
    linkedin: "https://www.linkedin.com/in/guilhem-rozier-vilardell",
  },

  // ---- Quick positioning (HR scans this in ~10 seconds) ----
  summary: [
    "Microengineering student (electronics) with hands-on experience in manufacturing, automation and prototyping.",
    "I design and build end-to-end systems: mechanical design → electronics/firmware → test & iteration.",
    "Seeking an industrial or R&D internship where I can contribute to reliable products, clear documentation and measurable results.",
  ],

  // Optional: small “focus” pills (safe + relevant)
  focus: [
    "Industrial automation & small-series equipment",
    "Embedded electronics & PCB prototyping",
    "Prototyping, testing and reliability",
  ],

  // ---- Education ----
  education: [
    {
      school: "HEPIA — University of Applied Sciences, Geneva",
      degree: "BSc in Microengineering (Electronics specialization)",
      dates: "2024–Present",
      details: "Grade: 5.3 / 6",
    },
    {
      school: "CPNV, Yverdon",
      degree: "Preparatory Year in Engineering",
      dates: "2023–2024",
      details: "Grade: 5.2 / 6",
    },
  ],

  // ---- Experience ----
  experience: [
    {
      company: "Haleon",
      location: "Nyon, Switzerland",
      role: "Cleaning Agent — GMP Risk Zone",
      dates: "2023–2025",
      bullets: [
        "Worked in GMP-controlled pharmaceutical production under strict hygiene, traceability and safety constraints",
        "Built discipline around SOPs, quality culture and regulated manufacturing environments",
      ],
    },
    {
      company: "GS3Dfactory",
      location: "Nyon, Switzerland",
      role: "Co-Founder & Managing Partner",
      dates: "2020–2022",
      bullets: [
        "Led prototyping and small-scale production from CAD to manufactured prototype under real production constraints",
        "Coordinated test/iteration cycles, supplier interactions and production optimisation (print settings + post-processing)",
      ],
    },
    {
      company: "Hublot",
      location: "Nyon, Switzerland",
      role: "Technical Internship",
      dates: "Apr 2017",
      bullets: [
        "Exposure to high-precision component assembly, quality control and industrial manufacturing processes",
      ],
    },
  ],

  // ---- Core competencies (grouped for HR readability) ----
  competencies: {
    ManufacturingMindset: [
      "GMP / SOP discipline",
      "Quality & traceability mindset",
      "Test plans & verification",
      "Root-cause debugging",
      "Clear documentation",
    ],
    Engineering: [
      "Mechanical design & prototyping",
      "CAD: SolidWorks, Fusion 360, Inventor, Onshape",
      "3D printing, laser cutting, machining basics",
      "Sensors & measurement",
    ],
    SoftwareData: [
      "Python (NumPy / Pandas / Matplotlib)",
      "C/C++ (embedded basics)",
      "Siemens PLC logic (TIA Portal)",
      "Git / GitHub workflow",
    ],
    Tools: [
      "PCB design: KiCad (and exposure to Altium)",
      "ESP32 / Arduino / Raspberry Pi",
      "Oscilloscope & lab instruments",
      "Industrial I/O concepts + HMI basics",
    ],
  },

  // ---- Projects (what / how / results — with numbers) ----
  // Image placeholders:
  // - Set image to a real path later (ex: "/projects/jar-labeller.jpg")
  // - Put files in: /public/projects/
  schoolProjects: [
    {
      title: "Jar Labelling Machine — 14 jars/min, 99% reliability",
      tags: ["Mechanical design", "Automation", "Inventor", "TIA Portal"],
      image: "", // TODO: "/projects/jar-labeller.jpg"
      imageAlt: "Automated jar labelling machine prototype",
      bullets: [
        "Designed and built a labelling machine for small production series, compatible with most jar formats",
        "Implemented mechanically synchronised jar rotation + label peel-off; adjustable label height inspired by 3D-printer mechanics",
        "Reached 14 jars/min throughput with 99% operational reliability across multiple jar formats",
      ],
      link: "",
    },
    {
      title: "EASI2C — I2C integration board (KiCad + Arduino)",
      tags: ["PCB", "KiCad", "Arduino", "C++"],
      image: "", // TODO: "/projects/easi2c.jpg"
      imageAlt: "EASI2C PCB and prototype setup",
      bullets: [
        "Designed a PCB to simplify integration of I2C modules for rapid prototyping",
        "Wrote C++ firmware on Arduino Uno; PCB machined in-house",
        "Enabled expansion with 4 additional components by simple connector integration",
      ],
      link: "",
    },
  ],

  personalProjects: [
    {
      title: "Voron CoreXY 3D printer — 60% faster prints with higher reliability",
      tags: ["Mechatronics", "Klipper", "Linux", "Calibration"],
      image: "", // TODO: "/projects/voron.jpg"
      imageAlt: "Voron CoreXY 3D printer build",
      bullets: [
        "Built and tuned a high-performance CoreXY printer (Raspberry Pi, Linux, GitHub, Klipper)",
        "Improved throughput and reliability through systematic calibration and configuration",
        "Achieved ~60% reduction in print time while improving material compatibility",
      ],
      link: "",
    },
    {
      title: "GS3Dfactory — small-series production (1000+ units sold)",
      tags: ["Product development", "Production", "Onshape", "Iteration"],
      image: "", // TODO: "/projects/gs3d.jpg"
      imageAlt: "GS3Dfactory mask fastener product and production",
      bullets: [
        "Co-created a small business and produced mask fasteners for professionals and individuals",
        "Worked with healthcare professionals for prototyping; optimised production time, printer settings and post-processing",
        "Sold 1000+ units, mainly to customers in the medical sector",
      ],
      link: "",
    },
    {
      title: "FPV cinematic drone — build, firmware and telemetry",
      tags: ["Electronics", "Soldering", "Betaflight", "Debugging"],
      image: "", // TODO: "/projects/fpv.jpg"
      imageAlt: "Custom FPV drone build",
      bullets: [
        "Selected components and assembled a custom FPV drone; optimised layout for cooling and reduced interference",
        "Configured firmware and telemetry in Betaflight; validated performance through field testing",
        "Operational drone with ~1 km range and >100 km/h top speed",
      ],
      link: "",
    },
  ],

  hobbies: [
    "Hiking & outdoor expeditions",
    "FPV drones / electronics tinkering",
    "Endurance training",
    "Digital fabrication",
  ],

  languages: [
    { name: "French", level: "Native" },
    { name: "Catalan", level: "Native" },
    { name: "English", level: "C1" },
    { name: "German", level: "B2" },
    { name: "Spanish", level: "B1" },
  ],
};
