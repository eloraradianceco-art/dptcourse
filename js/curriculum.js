/* Program structure: prerequisite requirements, semester plan, NPTE blueprint. */
window.PROGRAM = {
  // William Carey University DPT admission requirements (wmcarey.edu admissions page). Confirm with the program each cycle.
  prereqs: [
    { req: "Biological science (2 courses, with lab)", courses: ["biology", "biology-2"] },
    { req: "Chemistry I & II (with lab)", courses: ["chemistry", "chemistry-2"] },
    { req: "Physics I & II (with lab)", courses: ["physics", "physics-2"] },
    { req: "Anatomy & Physiology I & II (or separate Human Anatomy + Physiology)", courses: ["anatomy-physiology-1", "anatomy-physiology-2"] },
    { req: "Psychology (1 course)", courses: ["psychology"] },
    { req: "Statistics: math, psychology, or education (not business stats)", courses: ["research-statistics"] },
    { req: "Medical Terminology (encouraged)", courses: ["medical-terminology"] },
    { req: "GRE General Test (minimum 290)", courses: ["gre-prep"] }
  ],
  admissions: {
    source: "https://www.wmcarey.edu/health-sciences/physical-therapy/admission",
    items: [
      "Bachelor's degree from an accredited institution (or senior standing when you apply)",
      "Prerequisite GPA of 3.0 or higher, and 3.0 overall or over your last 60 hours",
      "Science prerequisites taken for science majors, with lab, grade C or better, within the last 10 years",
      "No more than 2 prerequisites outstanding at the end of the fall term of the application year",
      "GRE scores from the last 5 years (minimum 290), sent through PTCAS",
      "40 observation hours under a licensed PT in at least 2 different settings, verified in PTCAS",
      "Apply through PTCAS (priority deadline Oct 15, final deadline Mar 15)"
    ]
  },
  // Representative 3-year DPT sequence modeled on typical CAPTE-accredited programs (not an official WCU plan of study).
  terms: [
    { name: "Year 1 · Summer", courses: ["gross-anatomy", "patient-care-skills"] },
    { name: "Year 1 · Fall", courses: ["neuroscience", "kinesiology-biomechanics", "exercise-physiology", "exam-evaluation"] },
    { name: "Year 1 · Spring", courses: ["pathophysiology", "pharmacology", "therapeutic-exercise", "modalities", "motor-control"] },
    { name: "Year 2 · Summer", courses: ["imaging-labs", "pain-science", "health-promotion", "evidence-based-practice"] },
    { name: "Year 2 · Fall", courses: ["musculoskeletal", "cardiopulmonary", "integumentary", "differential-diagnosis"] },
    { name: "Year 2 · Spring", courses: ["neuromuscular", "vestibular", "prosthetics-orthotics", "acute-care", "pediatrics"] },
    { name: "Year 3 · Summer", courses: ["geriatrics", "pelvic-health", "oncology-lymphatic", "sports-pt"] },
    { name: "Year 3 · Fall", courses: ["management", "professional-practice", "clinical-education"] },
    { name: "Year 3 · Spring", courses: ["capstone-npte"] }
  ],
  prereqOrder: ["biology", "biology-2", "chemistry", "chemistry-2", "physics", "physics-2", "anatomy-physiology-1", "anatomy-physiology-2", "psychology", "research-statistics", "medical-terminology", "gre-prep"],
  // NPTE mock blueprint: share of questions per content area, approximating the FSBPT content outline weights.
  npte: [
    { area: "Musculoskeletal", share: 0.24, courses: ["musculoskeletal", "gross-anatomy", "kinesiology-biomechanics", "exam-evaluation", "therapeutic-exercise", "sports-pt", "imaging-labs"] },
    { area: "Neuromuscular & nervous", share: 0.24, courses: ["neuromuscular", "neuroscience", "vestibular", "motor-control", "pediatrics"] },
    { area: "Cardiovascular, pulmonary & lymphatic", share: 0.15, courses: ["cardiopulmonary", "exercise-physiology", "oncology-lymphatic", "acute-care"] },
    { area: "Integumentary", share: 0.04, courses: ["integumentary"] },
    { area: "Other systems & system interactions", share: 0.11, courses: ["pathophysiology", "pharmacology", "differential-diagnosis", "pelvic-health", "geriatrics", "pain-science"] },
    { area: "Equipment, devices & modalities", share: 0.08, courses: ["prosthetics-orthotics", "modalities"] },
    { area: "Safety, professional responsibilities & research", share: 0.14, courses: ["patient-care-skills", "professional-practice", "evidence-based-practice", "management", "health-promotion", "clinical-education", "capstone-npte"] }
  ]
};
