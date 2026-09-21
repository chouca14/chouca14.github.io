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
    slug: "akordator",
    title: "Akordator – Analog Bass Guitar Tuner",
    subtitle: "HEPIA electronics design project — a portable 4-string bass tuner built with analog electronics only: instrumentation amplifier, band-pass filter bank and comparator LED display, powered by supercapacitors, simulated in LTspice and laid out in Altium",
    year: "2026",
    tags: ["Analog electronics", "PCB design", "Altium", "LTspice", "Active filters", "Supercapacitors"],
    role: "Analog design, LTspice simulation & PCB layout (Altium)",
    highlights: [
      "Microcontroller-free tuner for a 4-string bass (E1 41.2 · A1 55 · D2 73.4 · G2 98 Hz): filtering turns a frequency measurement into an LED level bar",
      "Sized and simulated every block in LTspice: instrumentation amplifier (gain 7.18), four MFB band-pass filters, summer, comparator ladder and supercapacitor power path (simulated autonomy above the 1 h requirement)",
      "Supercapacitors recharged over USB (LTC3625 balanced charger) and regulated to 3.3 V (LTC3240-3.3) while the stack discharges from 4.8 V down to about 1.7 V",
      "Captured the six-sheet Altium schematic and routed the V1.0 mixed-signal PCB: functional zones, eight ferrite-bead supply islands and about 30 test points",
    ],
    cover: { src: "/projects/akordator/akordator-cover-pcb.png", alt: "Akordator PCB layout in Altium (HepiaPitch V1.0)", caption: "PCB layout, HepiaPitch V1.0 (Altium)" },
    gallery: [
      { src: "/projects/akordator/akordator-block-diagram.svg", alt: "Akordator signal chain and power path", caption: "System architecture: signal path and power path" },
      { src: "/projects/akordator/akordator-schematic-top.png", alt: "Altium top-level schematic", caption: "Altium — top-level sheet (jack input, filter/comparator blocks, USB charging, supercaps, ON/OFF)" },
      { src: "/projects/akordator/akordator-schematic-power.png", alt: "Altium power sheet", caption: "Altium — power sheet: LTC3625 supercap charger, LTC3240-3.3 converter, 1.5 V reference" },
      { src: "/projects/akordator/akordator-schematic-amplifier.png", alt: "Altium instrumentation amplifier sheet", caption: "Altium — instrumentation amplifier (gain ≈ 8.4)" },
      { src: "/projects/akordator/akordator-schematic-filters.png", alt: "Altium band-pass filter sheet", caption: "Altium — band-pass filter sheet (E1 / A1 cells)" },
      { src: "/projects/akordator/akordator-schematic-comparators.png", alt: "Altium summer and comparator sheet", caption: "Altium — summer, threshold ladder and six comparators" },
      { src: "/projects/akordator/akordator-sim-amplifier.png", alt: "LTspice instrumentation amplifier transient", caption: "LTspice — amplifier output centred on 1.65 V, no clipping (±200 mV, 100 Hz input)" },
      { src: "/projects/akordator/akordator-sim-filters-bode.png", alt: "LTspice Bode plot of the four band-pass filters", caption: "LTspice — AC sweep of the four band-pass filters with E24 resistor values" },
      { src: "/projects/akordator/akordator-ltspice-power-path.png", alt: "LTspice power path schematic", caption: "LTspice — power path (LTC3625 + two supercaps + LTC3240-3.3)" },
      { src: "/projects/akordator/akordator-sim-supercap-discharge.png", alt: "LTspice supercapacitor discharge", caption: "LTspice — discharge in scaled time (25 µF standing in for 25 F, ×10⁶): 3.3 V held until the stack falls to about 1.7 V" },
      { src: "/projects/akordator/akordator-sim-leds-41hz.png", alt: "LTspice comparator outputs at 41 Hz", caption: "LTspice — 41 Hz input (E string in tune): every threshold is crossed" },
      { src: "/projects/akordator/akordator-sim-leds-60hz.png", alt: "LTspice comparator outputs at 60 Hz", caption: "LTspice — 60 Hz input (between E1 and A1): only the lower thresholds trigger" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Team project of the HEPIA electronics course (2nd year): design a portable tuner for a 4-string bass guitar using analog electronics only, with no microcontroller and no digital signal processing. The client brief asked for a 6.35 mm jack input, an LED display of tuning accuracy, at least 1 h of autonomy from supercapacitors, USB recharge in under 1 h (750 mA budget), an ON/OFF switch, a charge indicator, a unit cost under CHF 40, SMD parts and E24 resistors, with imposed ICs (LTC3625, LTC3240-3.3, LTC6246, LMV339).",
          "The work ran in two phases: eight weeks of analytical sizing and LTspice validation in a team of two (with Dhurim Ajrizi), block by block over a five-week plan, then eight weeks of individual work in Altium: schematic capture of the instructor's final reference circuit and the design of the PCB.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "The open-string fundamentals come from equal temperament (A = 440 Hz): E1 41.2 Hz, A1 55.0 Hz, D2 73.4 Hz, G2 98.0 Hz",
          "An instrumentation amplifier lifts the ±200 mV pickup signal into the 0.1–3.1 V window of a single 3.3 V supply, biased on a mid-rail reference (1.65 V in the LTspice design, a 1.5 V precision reference on the board)",
          "Four parallel second-order band-pass filters isolate the four fundamentals: a string that drifts away from its target falls onto the filter skirt and its amplitude drops",
          "An inverting summer merges the four filter outputs into one signal; a ladder of comparators lights one more LED each time the amplitude crosses the next threshold",
          "The tuner therefore turns a frequency measurement into an amplitude measurement: the more LEDs lit, the closer the played string is to its target frequency",
          "Power path: USB 5 V → LTC3625 charges two supercapacitors in series with automatic mid-point balancing (PGOOD drives the charge-complete LED) → ON/OFF switch → LTC3240-3.3 charge pump regulates 3.3 V from a 1.8–5.5 V input",
        ],
      },
      {
        heading: "Design & simulation (LTspice)",
        bullets: [
          "Split the brief into five blocks (power, amplification, filtering, summation, comparison), sized each analytically, and validated each one in LTspice before assembling them",
          "Power: energy budget of about 8 mA at 3.3 V (3 LEDs at 2 mA plus 33 % margin, 26 mW) over 1 h, about 95 J, giving supercapacitors of roughly 25–30 F per cell; programmed the charge current with R_PROG inside the 750 mA USB budget; simulated the full discharge in scaled time (25 µF standing in for 25 F, ×10⁶)",
          "Why supercapacitors: more than 500 000 charge cycles versus about 1000 for Li-ion, and charging in seconds to minutes",
          "Amplification: three-op-amp instrumentation amplifier chosen for CMRR, high input impedance and single-resistor gain; equal resistors in the differential stage (6.8 kΩ) make the gain 1 + 2·R2/R1; the gain limit comes from the headroom, (3.1 − 1.65) V / 0.2 V = 7.25, so R1 = 2.2 kΩ gives 7.18",
          "Filtering: multiple-feedback band-pass cells (one op-amp each) sized with the f0 / Q / gain relations for Q = 10 and unity gain; the same resistor set is reused on all four strings and only the capacitor changes (0.82 / 0.62 / 0.47 / 0.35 µF), which limits the number of part references; a follower buffer isolates each cell from the others",
          "Method: every filter checked first in the time domain (no clipping inside 0–3 V), then with an AC sweep, as the course prescribes",
          "Summer and comparators: unity inverting summer around mid-rail; threshold ladder from six equal 100 kΩ resistors (1.925 V to 3.025 V); LED pull-ups sized with R = (Vcc − Vf − Vce,sat) / I for about 2 mA (680 Ω red, 220 Ω green)",
        ],
      },
      {
        heading: "Schematic & PCB (Altium)",
        bullets: [
          "Captured the six-sheet hierarchical schematic of the instructor's final reference circuit: top level, power, amplification, two filter sheets, summer and comparators",
          "Reference circuit vs. my LTspice design: LMV358 op-amps and LM393 comparators, six thresholds (about 1.7, 1.9, 2.2, 2.5, 2.8, 3.1 V from resistor dividers), 1 µF AC-coupled summer inputs, a 1.5 V precision reference (ISL21010), and positive-feedback (Q-enhanced) band-pass cells that go beyond the plain multiple-feedback filters",
          "Power section: micro-USB input with common-mode choke, LTC3625 charger (R_PROG 180 kΩ, about 0.75 A), 2.2 µH inductor rated for 2 A, slide switch on the supercapacitor stack, charge-complete LED driven by PGOOD",
          "Board laid out in labelled zones (power, amplifier, filters, supercapacitors, comparators, LED bar) so the analog chain flows from the jack to the LEDs",
          "Eight local supply islands, one ferrite bead plus 10 nF per IC, to keep the high-gain filter stages from talking to each other through the 3.3 V rail",
          "About 30 test points on every stage, plus dedicated ground points for the oscilloscope probe, to make bring-up and comparison with the simulations easy",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "Instrumentation amplifier: output swings roughly 0.25–3.1 V around 1.65 V for a ±200 mV, 100 Hz input, with no clipping",
          "Filters: the AC sweep shows the four band-pass peaks close to 41.2, 55, 73.4 and 98 Hz with E24/E48 values",
          "Comparators: at 41 Hz (E string in tune) every threshold is crossed and all five LEDs light; at 60 Hz, between two strings, only the lower thresholds trigger and the green LED stays off",
          "LED currents of about 1.9 mA (red) and 2.05 mA (green) with the E24 pull-ups",
          "Power: 3.3 V held while the supercapacitor stack falls from 4.8 V to about 1.7 V, with simulated autonomy above the 1 h requirement",
          "Complete six-sheet schematic and V1.0 PCB layout (June 2026)",
        ],
      },
      {
        heading: "Limitations & next steps",
        bullets: [
          "Amplitude-only detection: the tuner cannot tell whether a string is sharp or flat; a zero-crossing frequency counter on a small microcontroller, or a PLL / analog mixer, would give the direction and a resolution near one cent",
          "Selectivity vs. tolerance: Q = 10 is low for precise tuning (the second harmonic of E1, 82.4 Hz, sits close to the D2 fundamental at 73.4 Hz); a higher Q needs 1 % or better resistors, which is what the reference board pushes towards with positive-feedback cells",
          "Budget lesson: the brief assumed 1 mA per LED, but the approved suppliers only stock LEDs needing 2 mA or more, so the supercapacitor sizing had to be redone; next time, pick the parts before doing the power budget",
          "Next: bring-up and measurement of the V1.0 board against the LTspice results, and string-identification LEDs",
        ],
      },
      {
        heading: "What this shows",
        bullets: [
          "Turning a system specification into independent analog blocks that can be sized by hand and verified in simulation before layout",
          "First-principles analog design: single-supply biasing, output headroom, filter sizing, threshold ladders, energy budgets",
          "Mixed-signal PCB discipline: zoning, per-IC supply filtering, test points and documentation",
          "Critical self-review: quantified limitations and a concrete improvement path",
        ],
      },
    ],
  },
  {
  slug: "Mission CDG",
  title: "Robotics contest – Mission CDG",
  subtitle: "Winner of the robotics contest at University of applied sciences, HEPIA — system architecture, constraint-driven design, and execution under uncertainty",
  year: "2025",
  tags: ["Robotics", "Embedded systems", "Arduino", "System architecture", "Design trade-offs"],
  role: "Project manager",
  highlights: [
    "Architected a two-robot system to decouple locomotion and gap-crossing constraints",
    "Achieved full mission reliability without sensors or wireless communication",
    "Completed the course in 24 seconds, fastest run of the competition",
  ],
  cover: { src: "/projects/CDG/CDG2.JPG", alt: "Our solution" },
  gallery: [
    { src: "/projects/CDG/CDG1.JPG", alt: "System architecture overview", caption: "The dream team" },
    { src: "/projects/CDG/CDG2.JPG", alt: "Bridge robot deployment", caption: "Two-robot architecture" },
    { src: "/projects/CDG/CDG3.png", alt: "Water transport and delivery", caption: "Water transport robot" },
    { src: "/projects/CDG/CDG4.png", alt: "System architecture overview", caption: "Bridge robot" },
    { src: "/projects/CDG/CDG6.PNG", alt: "Water transport and delivery", caption: "Winner designation" },
  ],
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Engineering robotics contest focused on transporting 800 mL of water across two 5 m-long tables separated by a 50 cm gap, with a strict 40 × 40 × 40 cm size constraint. The project emphasized system-level design, constraint decomposition, and reliability over algorithmic complexity.",
      ],
    },
    {
      heading: "What I did",
      bullets: [
        "Led system architecture decisions based on physical constraints and failure modes",
        "Decomposed the problem into two independent functions: gap crossing and water transport",
        "Designed and programmed two Arduino-controlled robots with deterministic wired communication",
        "Established a sensorless control strategy based on repeatable initial conditions and iterative parameter tuning",
      ],
    },
    {
      heading: "Results",
      bullets: [
        "Consistent transport and delivery of 800 mL of water without spillage",
        "Robust crossing of a 50 cm gap exceeding the transport robot footprint",
        "Winning run completed in 24 seconds",
      ],
    },
    {
      heading: "What this shows",
      bullets: [
        "Ability to reduce complex engineering problems into controllable subsystems",
        "Strong preference for deterministic, low-complexity solutions",
        "Engineering judgment focused on reliability, validation, and execution speed",
      ],
    },
  ],
},
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
        bullets: ["14 pots per minute throughput", "99% operational reliability", "Improved production by +180% compared to manual labelling" ],
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
    slug: "voron-corexy-3d-printer",
    title: "Voron CoreXY 3D Printer",
    subtitle: "High-performance custom printer — build, tuning, firmware, reliability improvements",
    year: "2025–2026",
    tags: ["Mechatronics", "Klipper", "Linux", "Raspberry Pi", "Calibration"],
    role: "Builder / system integrator",
    highlights: [
      "Designed, built, and tuned a CoreXY printer (Linux, Raspberry Pi, GitHub, Klipper)",
      "Achieved ~60% reduction in print time while improving reliability and material compatibility",
      "Focused on repeatable calibration and maintainable configuration",
    ],
    cover: { src: "/projects/voron/IMG_3900.jpeg", alt: "Voron printer cover image" },
    gallery: [
      { src: "/projects/voron/IMG_3900.jpeg", alt: "Printer overview (placeholder)", caption: "Overview" },
      { src: "/projects/voron/IMG_3899.jpeg", alt: "Motion / calibration (placeholder)", caption: "Result" },
      { src: "/projects/voron/IMG_0259.jpeg", alt: "Printed parts results (placeholder)", caption: "Electronics" },
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
    role: "Co-founder & CTO",
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
  
]