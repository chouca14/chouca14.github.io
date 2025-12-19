export const site = {
  name: "YOUR NAME",
  headline: "Microengineering student | Mechatronics • Data • Prototyping",
  location: "Geneva, Switzerland",
  email: "you@email.com",
  phone: "+41 XX XXX XX XX", // optional
  links: {
    github: "https://github.com/YOURHANDLE",
    linkedin: "https://www.linkedin.com/in/YOURHANDLE",
  },

  // 2–3 lines max. Manufacturing HR loves: outcomes + reliability + teamwork.
  summary: [
    "Hands-on microengineering student focused on building reliable prototypes and validating them with measurements.",
    "Strong mix of mechanics, electronics, and Python-based data analysis; comfortable documenting work and iterating fast.",
    "Seeking an internship in manufacturing / R&D / industrialization where I can contribute to real products and processes.",
  ],

  // HR keywords for big manufacturing firms (keep it honest)
  competencies: {
    ManufacturingMindset: [
      "Test plans & verification",
      "Root-cause debugging",
      "Clear documentation",
      "Safety & reliability thinking",
    ],
    Engineering: [
      "CAD (Onshape/Fusion/SolidWorks)",
      "3D printing (Voron/Prusa)",
      "Electronics prototyping",
      "Sensors & measurement",
    ],
    SoftwareData: [
      "Python (NumPy/Pandas/Matplotlib)",
      "Git/GitHub",
      "Basic embedded C/C++",
      "Linux / Raspberry Pi",
    ],
    Tools: [
      "Oscilloscope/GBF basics",
      "Soldering",
      "Klipper/Mainsail",
      "Excel/Sheets",
    ],
  },

  // “Proof” section: projects with measurable outcomes
  schoolProjects: [
    {
      title: "RLC resonance lab — model fitting + uncertainty",
      tags: ["Python", "curve fitting", "reporting"],
      bullets: [
        "Extracted f0, Q-factor, bandwidth from measurements using automated fitting",
        "Generated publication-ready plots and annex tables for the lab report",
        "Improved repeatability by using scripted analysis instead of manual steps",
      ],
      link: "", // add repo link if public
    },
    {
      title: "XRD materials lab — phase identification",
      tags: ["materials", "XRD", "analysis"],
      bullets: [
        "Detected peaks and compared samples to identify likely phases",
        "Linked microstructure observations to processing and properties in report",
      ],
      link: "",
    },
  ],

  personalProjects: [
    {
      title: "Voron Salad Fork build — firmware + calibration + debugging",
      tags: ["mechatronics", "Klipper", "integration"],
      bullets: [
        "Configured sensorless homing, probing workflow, and motion tuning",
        "Debugged endstop/probe issues using systematic tests + logs",
        "Documented configuration for reproducibility and maintenance",
      ],
      link: "",
    },
    {
      title: "AI fracture detection — learning prototype plan",
      tags: ["PyTorch", "medical imaging", "ML basics"],
      bullets: [
        "Designed pipeline: dataset, preprocessing, baseline model, evaluation metrics",
        "Goal: build a simple, explainable baseline before complex models",
      ],
      link: "",
    },
  ],

  hobbies: [
    "Hiking & outdoor expeditions (including winter bivouac)",
    "FPV drones / electronics tinkering",
    "Endurance training",
    "Digital fabrication",
  ],

  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "C1 (or your level)" },
    { name: "German", level: "A2–B1 (or your level)" },
  ],
};
