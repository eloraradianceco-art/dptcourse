(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "chemistry",
  track: "prereq",
  order: 4,
  code: "PRE 111",
  title: "General Chemistry",
  credits: 4,
  desc: "The chemistry behind physiology: bonding, solutions and osmolarity, pH and buffers, reaction energy and enzymes, and the macromolecules that build tissue. It explains why IV fluids are isotonic, how blood pH stays stable, and where ATP energy comes from.",
  objectives: [
    "Describe atomic structure and distinguish ionic, covalent, and hydrogen bonds",
    "Calculate concentration and osmolarity and predict water movement between body compartments",
    "Explain pH, acids, bases, and buffers, including the bicarbonate buffer system",
    "Describe how energy, activation energy, and enzymes control reaction rates",
    "Identify the structure and function of carbohydrates, lipids, proteins, and nucleic acids"
  ],
  units: [
    {
      t: "Atoms & Bonding",
      sub: "Atomic structure, ions, ionic/covalent/hydrogen bonds, polarity",
      guide: [
        "<b>Atom</b>: protons (+, nucleus), neutrons (neutral, nucleus), electrons (&minus;, orbitals). Atomic number = protons; mass number = protons + neutrons.",
        "<b>Isotopes</b> have the same protons but different neutrons (e.g., carbon-12 vs carbon-14). Radioisotopes are used in imaging and bone scans.",
        "<b>Valence electrons</b> determine bonding. Atoms tend to gain, lose, or share electrons to reach a full outer shell (octet rule).",
        "<b>Ions</b>: cations are positive (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>), anions are negative (Cl<sup>&minus;</sup>, HCO<sub>3</sub><sup>&minus;</sup>). Dissolved ions conduct electricity, so they are called electrolytes.",
        "<b>Ionic bond</b>: transfer of electrons, attraction between opposite charges (NaCl). <b>Covalent bond</b>: shared electrons; nonpolar if shared equally, polar if unequally (O-H in water).",
        "<b>Hydrogen bonds</b>: weak attractions between a partially positive H and a partially negative O or N. They hold DNA strands together and shape proteins.",
        "<b>Water</b> is polar, so it dissolves ions and polar molecules (hydrophilic) but not fats (hydrophobic). It has a high specific heat, which stabilizes body temperature.",
        "<b>Electronegativity</b>: O and N pull electrons strongly, creating polar bonds; C-H bonds are nonpolar, which is why hydrocarbons and fats do not mix with water."
      ],
      assignment: {
        title: "Bonds in the body",
        task: "Find one body example for each bond type: ionic (in bone mineral or electrolytes), polar covalent (water), nonpolar covalent (fatty acid tails), and hydrogen bonds (DNA, collagen). For each, explain in 2 sentences how that bond type gives the structure its properties.",
        deliverable: "Four-row table with diagrams of each bond."
      },
      gen: [],
      qs: [
        ["An atom's atomic number equals its number of:", ["Protons", "Neutrons", "Electrons in the outer shell", "Protons plus neutrons"], "Atomic number is the proton count and defines the element. Protons plus neutrons is the mass number."],
        ["Sodium loses one electron to become Na+. It is now a(n):", ["Cation", "Anion", "Isotope", "Neutral atom"], "Losing a negative electron leaves a net positive charge, which defines a cation. Anions carry a negative charge."],
        ["What type of bond holds Na+ and Cl- together in table salt?", ["Ionic bond", "Nonpolar covalent bond", "Hydrogen bond", "Peptide bond"], "Sodium transfers an electron to chlorine, and the resulting oppositely charged ions attract. That electrostatic attraction is an ionic bond."],
        ["Why does water dissolve salts well but not dissolve fats?", ["Water is polar and attracts charged or polar particles but not nonpolar molecules", "Water is nonpolar and repels charged particles", "Fats are ionic compounds that resist water", "Water forms covalent bonds with every solute"], "Polar water surrounds ions and polar molecules. Fats are mostly nonpolar C-H chains, so they are hydrophobic."],
        ["Which bond type holds the two strands of DNA together?", ["Hydrogen bonds between bases", "Ionic bonds between phosphates", "Covalent peptide bonds", "Disulfide bonds"], "Complementary bases pair via hydrogen bonds, which are weak enough to be separated for replication and transcription."],
        ["Electrolytes such as Na+, K+, and Cl- are important in physiology mainly because they:", ["Carry charge and create the membrane potentials needed for nerve and muscle function", "Store large amounts of energy in their bonds", "Form the backbone of DNA", "Make up most of the dry weight of muscle protein"], "Ion gradients across membranes produce resting and action potentials. Electrolyte imbalance can cause weakness, cramping, or arrhythmia."],
        ["Carbon-12 and carbon-14 differ in their number of:", ["Neutrons", "Protons", "Electrons", "Chemical bonds"], "Isotopes of an element have the same number of protons but different numbers of neutrons, which changes mass but not chemical identity."],
        ["The O-H bond in water is a polar covalent bond because:", ["Oxygen pulls the shared electrons more strongly than hydrogen", "Electrons are completely transferred to oxygen", "Hydrogen and oxygen share electrons equally", "Oxygen has no electrons to share"], "Oxygen's higher electronegativity gives it a partial negative charge and leaves hydrogens partially positive."],
        ["Why does water's high specific heat matter during exercise?", ["Body water absorbs a lot of heat with only a small rise in temperature", "Water releases heat instantly, cooling the body", "Water cannot absorb heat, so sweat is needed", "High specific heat makes water evaporate at a lower temperature"], "Water's high specific heat buffers temperature swings, and its high heat of vaporization makes sweat evaporation an effective cooling mechanism."],
        ["Calcium usually exists in the body as Ca2+. How many electrons has it lost relative to the neutral atom?", ["Two", "One", "Three", "Zero"], "A 2+ charge means two electrons were lost. Ca2+ is critical for muscle contraction, clotting, and bone mineral."]
      ]
    },
    {
      t: "Solutions, Concentration & Osmolarity",
      sub: "Molarity, osmolarity, tonicity, body fluid compartments, IV fluids",
      guide: [
        "<b>Solution</b> = solute dissolved in solvent (water in the body).",
        "<b>Molarity</b>: <span class='formula'>M = moles of solute / liters of solution</span>. One mole = 6.02 &times; 10<sup>23</sup> particles; molar mass in grams/mol from the periodic table.",
        "<b>Osmolarity</b> counts dissolved particles: <span class='formula'>osmolarity = molarity &times; particles per formula unit</span>. NaCl dissociates into 2 particles; glucose stays as 1.",
        "<b>Plasma osmolality</b> is about 285-295 mOsm/kg; the body keeps it tightly regulated mainly through ADH and thirst.",
        "<b>Osmosis</b>: water moves from lower solute concentration to higher solute concentration across a semipermeable membrane.",
        "<b>Tonicity</b> (effect on cell volume): isotonic (no change), hypotonic (cell swells), hypertonic (cell shrinks). 0.9% NaCl (normal saline) is isotonic.",
        "<b>Body water</b>: about 60% of adult body weight; roughly 2/3 intracellular, 1/3 extracellular (interstitial + plasma).",
        "<b>Clinical tie</b>: dehydration raises plasma osmolarity, drawing water out of cells; drinking large volumes of plain water during prolonged exercise can dilute plasma sodium (exercise-associated hyponatremia)."
      ],
      assignment: {
        title: "Fluid shift scenarios",
        task: "For three scenarios (heavy sweating without drinking, drinking excessive plain water during a long race, and an IV of normal saline), predict how plasma osmolarity changes and which direction water moves between cells and plasma. Show any calculations.",
        deliverable: "One-page worksheet with arrows showing water movement in each case."
      },
      gen: [],
      qs: [
        ["What is the molarity of a solution with 2 moles of glucose dissolved to make 4 liters?", ["0.5 M", "2 M", "8 M", "0.25 M"], "Molarity = moles / liters = 2 / 4 = 0.5 M."],
        ["A 0.15 M NaCl solution has an osmolarity of about:", ["0.30 Osm/L (300 mOsm/L)", "0.15 Osm/L (150 mOsm/L)", "0.075 Osm/L (75 mOsm/L)", "0.45 Osm/L (450 mOsm/L)"], "NaCl dissociates into Na+ and Cl-, giving 2 particles per unit: 0.15 x 2 = 0.30 Osm/L. That is close to plasma, which is why normal saline is isotonic."],
        ["During osmosis, water moves:", ["Toward the side with the higher solute concentration", "Toward the side with the lower solute concentration", "Only when ATP is supplied", "Only in the direction of gravity"], "Water moves to dilute the more concentrated side. No ATP is required; it is passive."],
        ["Why is 0.9% sodium chloride (normal saline) commonly used to restore blood volume?", ["It is isotonic, so it expands extracellular volume without major water shifts into or out of cells", "It is hypotonic, so it rapidly hydrates the cells", "It is hypertonic, so it pulls water into the cells", "It contains glucose that supplies energy"], "Isotonic saline matches plasma osmolarity and stays largely in the extracellular space. Hypotonic fluids shift water into cells; hypertonic fluids pull water out of cells."],
        ["A cell is placed in a hypertonic solution. What happens?", ["Water leaves the cell and it shrinks", "Water enters the cell and it swells", "There is no net water movement", "Solute enters and the cell bursts"], "A hypertonic solution has more effective solute outside, so water leaves the cell by osmosis."],
        ["A runner drinks large amounts of plain water during a 5-hour marathon and becomes confused with a headache. What is the most likely cause?", ["Exercise-associated hyponatremia from diluted plasma sodium", "Hypernatremia from excessive salt intake", "Hyperkalemia from muscle damage", "Dehydration with concentrated plasma"], "Excess water with sweat sodium losses dilutes plasma sodium. Plasma becomes hypotonic, water moves into brain cells, and swelling causes neurological symptoms."],
        ["About what fraction of total body water is intracellular?", ["Two-thirds", "One-third", "One-half", "One-tenth"], "Roughly 2/3 of body water is inside cells and 1/3 is extracellular (interstitial fluid plus plasma)."],
        ["How many particles does one formula unit of CaCl2 produce when fully dissolved?", ["Three", "Two", "One", "Four"], "CaCl2 dissociates into one Ca2+ and two Cl-, totaling 3 particles. This matters when calculating osmolarity."],
        ["A client has been sweating heavily in the heat without drinking. What happens to plasma osmolarity and cell volume?", ["Plasma osmolarity rises and water moves out of cells", "Plasma osmolarity falls and cells swell", "Plasma osmolarity stays the same and cells shrink", "Plasma osmolarity falls and water leaves cells"], "Sweat is hypotonic, so losing it concentrates plasma. Water shifts out of cells, and rising osmolarity triggers thirst and ADH release."],
        ["Which statement distinguishes osmolarity from tonicity?", ["Osmolarity counts all dissolved particles; tonicity reflects only solutes that cannot cross the membrane and thus affect cell volume", "Osmolarity applies only to cells; tonicity applies only to blood", "They are identical terms used interchangeably", "Tonicity counts particles; osmolarity describes cell volume change"], "A solute that freely crosses the membrane (such as urea) adds to osmolarity but does not create a lasting water shift, so it does not affect tonicity."]
      ]
    },
    {
      t: "Acids, Bases, Buffers & pH",
      sub: "pH scale, strong vs weak acids, buffers, bicarbonate system, compensation",
      guide: [
        "<b>Acid</b> donates H<sup>+</sup>; <b>base</b> accepts H<sup>+</sup> (Bronsted-Lowry).",
        "<b>pH</b>: <span class='formula'>pH = &minus;log[H<sup>+</sup>]</span>. Logarithmic: each 1-unit drop means 10&times; more H<sup>+</sup>. Neutral = 7; blood 7.35-7.45 (slightly basic).",
        "<b>Strong acids</b> (HCl) dissociate completely; <b>weak acids</b> (carbonic acid, lactic acid) dissociate partially, which makes buffering possible.",
        "<b>Buffer</b>: a weak acid plus its conjugate base that resists pH change by absorbing or releasing H<sup>+</sup>.",
        "<b>Bicarbonate buffer</b>: <span class='formula'>CO<sub>2</sub> + H<sub>2</sub>O &harr; H<sub>2</sub>CO<sub>3</sub> &harr; H<sup>+</sup> + HCO<sub>3</sub><sup>&minus;</sup></span>. Carbonic anhydrase speeds the first step.",
        "<b>Le Chatelier's principle</b>: adding CO<sub>2</sub> pushes the reaction right (more H<sup>+</sup>, lower pH); blowing off CO<sub>2</sub> pulls it left (less H<sup>+</sup>, higher pH).",
        "<b>Other buffers</b>: proteins (including hemoglobin) and phosphate buffers (important inside cells and in urine).",
        "<b>Exercise tie</b>: hard exercise produces H<sup>+</sup>; bicarbonate buffers it and releases extra CO<sub>2</sub>, which drives faster breathing (part of the ventilatory threshold)."
      ],
      assignment: {
        title: "Buffer in action",
        task: "Using the bicarbonate equation, explain step by step what happens to H+, HCO3-, CO2, and breathing rate during a hard 2-minute effort and during recovery. Then explain what changes in a client who hyperventilates from anxiety.",
        deliverable: "Two annotated reaction diagrams and a 200-word explanation."
      },
      gen: [],
      qs: [
        ["A solution with pH 5 has how much more H+ than a solution with pH 7?", ["100 times more", "2 times more", "10 times more", "20 times more"], "pH is logarithmic: each unit is a 10-fold change, so 2 units = 10 x 10 = 100 times more H+."],
        ["Which statement best defines a buffer?", ["A weak acid and its conjugate base that resist changes in pH", "A strong acid that lowers pH quickly", "A substance that removes all H+ from a solution", "A salt that raises osmolarity"], "Buffer pairs can absorb added H+ (the base) or release H+ (the acid), keeping pH stable."],
        ["In the bicarbonate buffer system, what happens when blood CO2 rises?", ["The reaction shifts right, producing more H+ and lowering pH", "The reaction shifts left, consuming H+ and raising pH", "Bicarbonate is converted into oxygen", "pH stays exactly the same"], "By Le Chatelier's principle, adding CO2 drives formation of carbonic acid, which dissociates into H+ and HCO3-."],
        ["Which enzyme catalyzes the conversion of CO2 and water into carbonic acid?", ["Carbonic anhydrase", "ATP synthase", "Lactate dehydrogenase", "Pepsin"], "Carbonic anhydrase, abundant in red blood cells and kidney tubules, makes this reaction fast enough to matter physiologically."],
        ["During a hard sprint, H+ accumulates in muscle and blood. What role does bicarbonate play?", ["It binds H+, forming carbonic acid that becomes CO2 and water, limiting the pH drop", "It releases more H+ to speed up glycolysis", "It converts lactate back into glucose", "It increases ATP production in the mitochondria"], "Bicarbonate buffers H+; the resulting extra CO2 is exhaled, which is one reason breathing rises sharply at high intensity."],
        ["Which acid is classified as a strong acid?", ["Hydrochloric acid (HCl)", "Carbonic acid (H2CO3)", "Lactic acid", "Acetic acid"], "Strong acids dissociate completely in water. Carbonic, lactic, and acetic acids are weak and dissociate only partly."],
        ["A client hyperventilates. Using the bicarbonate equation, why does blood pH rise?", ["Exhaling extra CO2 pulls the reaction left, removing H+", "Breathing faster adds H+ to the blood", "Hyperventilation increases bicarbonate excretion in urine immediately", "More oxygen binds to H+ and neutralizes it"], "Removing CO2 shifts the equilibrium toward CO2 and water, consuming H+ and raising pH (respiratory alkalosis)."],
        ["Blood pH is 7.40. Compared with pure water at pH 7.0, blood is:", ["Slightly basic", "Slightly acidic", "Strongly acidic", "Exactly neutral"], "A pH above 7 is basic. Blood is normally kept between 7.35 and 7.45, slightly on the basic side."],
        ["A patient in diabetic ketoacidosis breathes deeply and rapidly. What is the purpose of this breathing pattern?", ["To blow off CO2 and partially compensate for metabolic acidosis", "To take in more oxygen to burn ketones", "To retain CO2 and lower pH further", "To increase bicarbonate production by the lungs"], "Ketoacids lower bicarbonate and pH; the respiratory system compensates by exhaling CO2, which raises pH toward normal."],
        ["Which buffer is especially important inside cells and in urine?", ["Phosphate buffer system", "Carbonic anhydrase system", "Sodium chloride system", "Glucose buffer system"], "The phosphate buffer (H2PO4- / HPO4 2-) is concentrated in intracellular fluid and urine. Bicarbonate is the main extracellular buffer."]
      ]
    },
    {
      t: "Reaction Energy, Rates & Enzymes",
      sub: "Thermodynamics, activation energy, ATP coupling, enzyme kinetics",
      guide: [
        "<b>Energy</b>: potential (stored in bonds) and kinetic (motion, heat). First law: energy is not created or destroyed, only converted.",
        "<b>Exergonic</b> reactions release free energy (spontaneous, &Delta;G negative, e.g., ATP hydrolysis). <b>Endergonic</b> reactions require energy (&Delta;G positive, e.g., protein synthesis).",
        "<b>Coupling</b>: cells drive endergonic reactions by linking them to ATP hydrolysis.",
        "<b>Activation energy</b>: the energy barrier a reaction must overcome to start. Catalysts lower it without being consumed.",
        "<b>Enzymes</b>: usually proteins; highly specific; bind substrate at the active site (induced fit). They do not change &Delta;G or the equilibrium, only the rate.",
        "<b>Factors affecting rate</b>: temperature, pH, substrate concentration, enzyme concentration. Too much heat or wrong pH denatures enzymes.",
        "<b>Saturation</b>: as substrate rises, rate increases until all enzymes are busy (V<sub>max</sub>). Cofactors (minerals) and coenzymes (vitamin-derived, e.g., NAD<sup>+</sup> from niacin) are often required.",
        "<b>Inhibition</b>: competitive inhibitors compete for the active site; noncompetitive inhibitors bind elsewhere. Many drugs work this way (e.g., NSAIDs inhibit COX enzymes, reducing prostaglandins)."
      ],
      assignment: {
        title: "Enzyme and warm-up explainer",
        task: "Explain how warming up affects enzyme activity and reaction rates in muscle, and why extreme heat or acidity can impair performance. Then explain how an NSAID reduces inflammatory pain at the enzyme level.",
        deliverable: "300-word explainer with one graph of enzyme activity vs temperature."
      },
      gen: [],
      qs: [
        ["How does an enzyme speed up a reaction?", ["It lowers the activation energy", "It increases the free energy released", "It shifts the equilibrium toward products", "It supplies ATP to the reactants"], "Enzymes stabilize the transition state, lowering the activation barrier. They do not change the overall energy released or the equilibrium."],
        ["ATP hydrolysis to ADP and phosphate is best described as:", ["Exergonic, releasing usable free energy", "Endergonic, requiring energy input", "A reaction with no energy change", "A reaction that consumes oxygen directly"], "Breaking ATP's terminal phosphate bond releases free energy that cells couple to work such as muscle contraction and active transport."],
        ["Why does a proper warm-up improve muscle performance at the chemical level?", ["Higher tissue temperature increases enzyme reaction rates up to an optimal point", "Heat permanently changes enzyme shape to make it faster", "Warming up increases the activation energy of reactions", "Warming up eliminates the need for ATP"], "Moderate temperature increases speed molecular collisions and enzyme activity. Excessive heat denatures enzymes and reduces activity."],
        ["An enzyme is exposed to very high temperature and loses its function. This is called:", ["Denaturation", "Saturation", "Hydrolysis", "Phosphorylation"], "High heat or extreme pH disrupts the bonds maintaining an enzyme's 3D shape, destroying the active site."],
        ["Substrate concentration keeps increasing, but reaction rate stops rising. Why?", ["All enzyme active sites are occupied (saturation)", "The enzyme has been permanently consumed", "Excess substrate always denatures enzymes", "Activation energy increases with more substrate"], "At Vmax, every enzyme molecule is working at capacity. Adding substrate cannot speed the rate; adding enzyme can."],
        ["A client takes ibuprofen for pain. How does it reduce inflammation?", ["It inhibits cyclooxygenase (COX) enzymes, reducing prostaglandin production", "It increases COX enzyme activity to clear inflammation", "It blocks sodium channels in sensory nerves like a local anesthetic", "It acts as a buffer to raise tissue pH"], "NSAIDs inhibit COX enzymes, lowering prostaglandins that drive inflammation, pain, and fever."],
        ["A competitive inhibitor works by:", ["Binding the active site and competing with the substrate", "Binding a separate site and changing enzyme shape", "Destroying the substrate before it reaches the enzyme", "Raising the activation energy by adding heat"], "Competitive inhibitors resemble the substrate and occupy the active site. High substrate concentrations can outcompete them; noncompetitive inhibitors bind elsewhere."],
        ["Which statement about enzymes is correct?", ["They are not consumed and can be reused many times", "They change the final equilibrium of a reaction", "They work equally well at any pH", "They are always lipids"], "Enzymes are catalysts, so they emerge unchanged. Most are proteins with an optimal pH and temperature."],
        ["Pepsin works best near pH 2, while trypsin works best near pH 8. What does this show?", ["Each enzyme has an optimal pH matching its environment", "All digestive enzymes work best in acid", "pH does not affect enzyme activity", "Enzymes change their optimal pH during a meal"], "Pepsin acts in the acidic stomach; trypsin acts in the more alkaline small intestine. Activity falls away from each enzyme's optimum."],
        ["NAD+, required for glycolysis and the Krebs cycle, is a coenzyme derived from which vitamin?", ["Niacin (vitamin B3)", "Vitamin C", "Vitamin D", "Vitamin K"], "Coenzymes are often vitamin-derived; NAD+ comes from niacin and carries electrons in energy metabolism."]
      ]
    },
    {
      t: "Organic Chemistry & Biomolecules",
      sub: "Carbon, functional groups, carbohydrates, lipids, proteins, nucleic acids",
      guide: [
        "<b>Carbon</b> forms 4 covalent bonds, building chains and rings that make up all biological macromolecules.",
        "<b>Functional groups</b>: hydroxyl (-OH), carboxyl (-COOH, acidic), amino (-NH<sub>2</sub>, basic), phosphate (-PO<sub>4</sub>, energy transfer).",
        "<b>Dehydration synthesis</b> builds polymers by removing water; <b>hydrolysis</b> breaks them by adding water (digestion).",
        "<b>Carbohydrates</b>: monosaccharides (glucose), disaccharides (sucrose), polysaccharides (glycogen in animals, starch in plants). Main quick energy source.",
        "<b>Lipids</b>: triglycerides (glycerol + 3 fatty acids, energy storage), phospholipids (membranes), steroids (cholesterol, cortisol, testosterone). Saturated fats have no C=C double bonds.",
        "<b>Proteins</b>: amino acids joined by peptide bonds. Structure levels: primary (sequence), secondary (alpha helix, beta sheet), tertiary (3D fold), quaternary (multiple chains, e.g., hemoglobin).",
        "<b>Nucleic acids</b>: DNA and RNA are polymers of nucleotides (sugar + phosphate + base). <b>ATP</b> is a nucleotide (adenine + ribose + 3 phosphates).",
        "<b>Tissue tie</b>: collagen is a triple-helix protein (glycine every third residue) giving tendon tensile strength; glycogen stored in muscle and liver fuels exercise."
      ],
      assignment: {
        title: "Macromolecule plate breakdown",
        task: "Take one real meal (e.g., chicken, rice, olive oil, vegetables). Identify each macromolecule, the monomers it is digested into by hydrolysis, and where in the body each monomer is used or stored.",
        deliverable: "Four-row table with a one-line PT or performance relevance for each."
      },
      gen: [],
      qs: [
        ["How many covalent bonds does a carbon atom typically form?", ["Four", "Two", "Three", "Six"], "Carbon has 4 valence electrons and forms 4 covalent bonds, allowing diverse chains, branches, and rings."],
        ["Digestive enzymes break proteins into amino acids by adding water. This reaction is:", ["Hydrolysis", "Dehydration synthesis", "Oxidation", "Phosphorylation"], "Hydrolysis uses water to break bonds between monomers. Dehydration synthesis does the reverse, building polymers and releasing water."],
        ["Which polysaccharide do humans store in liver and muscle?", ["Glycogen", "Starch", "Cellulose", "Chitin"], "Glycogen is a highly branched glucose polymer that can be broken down quickly during exercise. Starch is the plant storage form."],
        ["Which bond links amino acids in a protein?", ["Peptide bond", "Glycosidic bond", "Ester bond", "Phosphodiester bond"], "Peptide bonds form between the carboxyl group of one amino acid and the amino group of the next. Glycosidic bonds link sugars."],
        ["Which lipid forms the main structure of cell membranes?", ["Phospholipids", "Triglycerides", "Saturated fatty acids", "Cholesterol esters"], "Phospholipids have hydrophilic heads and hydrophobic tails, forming a bilayer. Triglycerides are for energy storage."],
        ["Cortisol, testosterone, and estrogen all belong to which class of molecules?", ["Steroids (lipids)", "Proteins", "Carbohydrates", "Nucleic acids"], "These hormones are steroids built on a four-ring structure derived from cholesterol, which is why they cross cell membranes."],
        ["Hemoglobin is made of four polypeptide chains. This describes which level of protein structure?", ["Quaternary", "Primary", "Secondary", "Tertiary"], "Quaternary structure is the arrangement of multiple polypeptide subunits. Primary is the amino acid sequence."],
        ["Why does collagen's triple-helix structure suit tendons?", ["Tightly wound chains provide high tensile strength", "It stores large amounts of glucose", "It conducts electrical signals quickly", "It dissolves easily in water for transport"], "Collagen's three intertwined chains, stabilized by hydrogen bonds and cross-links, resist pulling forces, which is the main load on tendons."],
        ["ATP belongs to which class of biomolecules?", ["Nucleotides", "Amino acids", "Polysaccharides", "Triglycerides"], "ATP is a nucleotide made of adenine, ribose, and three phosphate groups. It is chemically related to the building blocks of RNA."],
        ["A saturated fatty acid differs from an unsaturated fatty acid because it:", ["Has no carbon-carbon double bonds", "Has many carbon-carbon double bonds", "Contains nitrogen in its chain", "Is attached to a phosphate group"], "Saturated means the carbon chain holds the maximum number of hydrogens, with only single C-C bonds. Unsaturated fats have one or more C=C double bonds, causing kinks."]
      ]
    }
  ]
});
