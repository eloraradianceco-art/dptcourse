(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "biology",
  track: "prereq",
  order: 3,
  code: "PRE 101",
  title: "General Biology",
  credits: 4,
  desc: "The cell-level biology underneath every tissue a PT treats: membranes, energy production, cell division, gene expression, and the inflammatory and repair processes that drive tissue healing timelines.",
  objectives: [
    "Describe cell organelles and compare passive and active membrane transport",
    "Explain how cells produce ATP through glycolysis, the Krebs cycle, and oxidative phosphorylation",
    "Compare mitosis and meiosis and apply basic Mendelian inheritance",
    "Trace the flow of genetic information from DNA to RNA to protein",
    "Outline the phases of tissue healing and relate each phase to rehabilitation loading"
  ],
  units: [
    {
      t: "Cell Structure & Membrane Transport",
      sub: "Organelles, plasma membrane, diffusion, osmosis, active transport",
      guide: [
        "<b>Prokaryotes</b> (bacteria) lack a nucleus and membrane-bound organelles; <b>eukaryotes</b> (human cells) have both.",
        "<b>Organelles</b>: nucleus (DNA), ribosomes (protein synthesis), rough ER (proteins for export/membranes), smooth ER (lipids; in muscle it is the sarcoplasmic reticulum storing Ca<sup>2+</sup>), Golgi (modifies and ships), lysosomes (digestion), mitochondria (ATP).",
        "<b>Fluid mosaic model</b>: phospholipid bilayer with hydrophilic heads facing out and hydrophobic tails inside, plus embedded proteins and cholesterol.",
        "<b>Passive transport</b> (no ATP, down the gradient): simple diffusion (O<sub>2</sub>, CO<sub>2</sub>, lipid-soluble molecules), facilitated diffusion via channels or carriers (glucose via GLUT), osmosis (water).",
        "<b>Active transport</b> (uses energy, against the gradient): primary uses ATP directly (Na<sup>+</sup>/K<sup>+</sup>-ATPase); secondary uses an ion gradient (Na<sup>+</sup>-glucose cotransport in the gut).",
        "<b>Bulk transport</b>: endocytosis (phagocytosis by macrophages) and exocytosis (neurotransmitter release).",
        "<b>Tonicity</b>: in a hypotonic solution cells swell; hypertonic, cells shrink; isotonic, no net change.",
        "<b>Cytoskeleton</b>: microfilaments (actin), intermediate filaments, microtubules. Cell junctions: tight junctions seal, desmosomes anchor, gap junctions connect cytoplasm (cardiac muscle)."
      ],
      assignment: {
        title: "Membrane transport concept map",
        task: "Build a concept map linking each transport type to one real body example: O2 into a muscle cell, glucose into a muscle cell, Na+/K+ pump in a neuron, nutrient absorption in the gut, and a macrophage engulfing debris after injury.",
        deliverable: "One-page concept map with energy source and direction labeled on each arrow."
      },
      gen: [],
      qs: [
        ["Which organelle produces most of the cell's ATP?", ["Mitochondrion", "Golgi apparatus", "Rough endoplasmic reticulum", "Lysosome"], "Mitochondria perform aerobic respiration, generating most cellular ATP. Endurance training increases mitochondrial density in muscle."],
        ["In skeletal muscle, the smooth endoplasmic reticulum is specialized as the:", ["Sarcoplasmic reticulum, which stores calcium", "Sarcolemma, which conducts action potentials", "Myofibril, which contains actin and myosin", "T-tubule, which carries extracellular fluid"], "The sarcoplasmic reticulum is modified smooth ER that stores and releases Ca2+ for contraction. The sarcolemma is the plasma membrane."],
        ["Oxygen moves from the blood into a working muscle cell by:", ["Simple diffusion", "Primary active transport", "Facilitated diffusion through GLUT carriers", "Endocytosis"], "O2 is small and nonpolar, so it crosses the lipid bilayer directly down its concentration gradient without energy."],
        ["The sodium-potassium pump is an example of:", ["Primary active transport", "Secondary active transport", "Facilitated diffusion", "Osmosis"], "The pump hydrolyzes ATP directly to move 3 Na+ out and 2 K+ in against their gradients. Secondary transport uses an existing gradient rather than ATP directly."],
        ["Red blood cells are placed in pure water. What happens?", ["Water enters and the cells swell and may burst", "Water leaves and the cells shrink", "No net water movement occurs", "Sodium rushes in and the cells shrink"], "Pure water is hypotonic relative to the cell interior, so water moves in by osmosis. This is why IV fluids must be isotonic or carefully chosen."],
        ["After a muscle strain, macrophages engulf damaged tissue fragments. Which transport process is this?", ["Phagocytosis (a type of endocytosis)", "Exocytosis", "Facilitated diffusion", "Secondary active transport"], "Phagocytosis is endocytosis of large particles. Clearing debris is a key job in the inflammatory phase of healing."],
        ["Why can steroid hormones cross the cell membrane easily while glucose cannot?", ["Steroids are lipid soluble and pass through the hydrophobic bilayer core", "Steroids are smaller than water molecules", "Glucose is pumped out as fast as it enters", "Steroids use gap junctions to enter cells"], "The membrane interior is hydrophobic, so lipid-soluble molecules diffuse through. Polar glucose needs a carrier protein (facilitated diffusion)."],
        ["Which type of cell junction allows electrical signals to pass directly between cardiac muscle cells?", ["Gap junctions", "Tight junctions", "Desmosomes", "Hemidesmosomes"], "Gap junctions form channels connecting adjacent cytoplasm, letting ions flow so the heart contracts as a unit. Desmosomes provide mechanical anchoring."],
        ["Glucose is absorbed from the small intestine using the sodium gradient. This is:", ["Secondary active transport", "Primary active transport", "Simple diffusion", "Phagocytosis"], "The Na+-glucose cotransporter uses the Na+ gradient (created by the Na+/K+ pump) to move glucose uphill. This principle underlies oral rehydration solutions."],
        ["Which feature distinguishes a human cell from a bacterial cell?", ["A membrane-bound nucleus", "A plasma membrane", "Ribosomes", "DNA as genetic material"], "Eukaryotic cells have a nucleus and membrane-bound organelles. Both cell types have a plasma membrane, ribosomes, and DNA."]
      ]
    },
    {
      t: "Cellular Respiration & Energy",
      sub: "ATP, glycolysis, Krebs cycle, electron transport, energy systems",
      guide: [
        "<b>ATP</b> is the cell's energy currency; breaking the terminal phosphate bond (ATP &rarr; ADP + P<sub>i</sub>) releases usable energy.",
        "<b>Overall reaction</b>: <span class='formula'>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</span>.",
        "<b>Glycolysis</b> (cytoplasm, no O<sub>2</sub> needed): glucose &rarr; 2 pyruvate, net 2 ATP and 2 NADH.",
        "<b>Without enough O<sub>2</sub></b>: pyruvate &rarr; lactate, regenerating NAD<sup>+</sup> so glycolysis can continue. Lactate is recycled as fuel (heart, muscle) or converted back to glucose in the liver (Cori cycle).",
        "<b>Krebs (citric acid) cycle</b> (mitochondrial matrix): acetyl-CoA is oxidized, releasing CO<sub>2</sub> and loading NADH and FADH<sub>2</sub>.",
        "<b>Electron transport chain</b> (inner mitochondrial membrane): NADH/FADH<sub>2</sub> donate electrons, O<sub>2</sub> is the final electron acceptor (forming water), ATP synthase makes most ATP. Total roughly 30-32 ATP per glucose.",
        "<b>Exercise energy systems</b>: phosphagen (ATP-PCr, ~10 s max efforts), glycolytic (~30 s to 2 min), oxidative (longer efforts). All run at once; intensity and duration shift the dominant one.",
        "<b>Fuel use</b>: fats yield the most ATP per gram but require oxygen and are used mostly at lower intensities; carbohydrate becomes dominant as intensity rises."
      ],
      assignment: {
        title: "Energy system interval design",
        task: "Design three interval workouts that each target a different energy system (phosphagen, glycolytic, oxidative). For each, give work and rest times, intensity, and a 2-sentence explanation of which pathway dominates and why the rest period fits.",
        deliverable: "Table of three workouts with physiological rationale."
      },
      gen: [],
      qs: [
        ["Where does glycolysis take place?", ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Nucleus"], "Glycolysis occurs in the cytoplasm and does not require oxygen. The Krebs cycle is in the matrix; the electron transport chain is on the inner membrane."],
        ["What is the final electron acceptor in the electron transport chain?", ["Oxygen", "NAD+", "Pyruvate", "Carbon dioxide"], "O2 accepts electrons at the end of the chain and combines with H+ to form water. Without O2, the chain stops and ATP production drops sharply."],
        ["Which stage of cellular respiration produces the most ATP?", ["Oxidative phosphorylation (electron transport chain)", "Glycolysis", "The Krebs cycle", "Lactate fermentation"], "Most ATP comes from ATP synthase driven by the proton gradient of the electron transport chain. Glycolysis and Krebs produce only small amounts directly."],
        ["During a hard 400 m sprint, why does lactate accumulate?", ["Glycolysis runs faster than the mitochondria can oxidize pyruvate, so pyruvate is converted to lactate", "Muscle cells stop making ATP entirely", "Fat oxidation produces lactate as a byproduct", "The Krebs cycle runs backward under high demand"], "High-rate glycolysis outpaces oxidative capacity; converting pyruvate to lactate regenerates NAD+ so glycolysis can keep supplying ATP."],
        ["A powerlifter performs a 1-repetition maximum squat. Which energy system predominates?", ["Phosphagen (ATP-PCr) system", "Oxidative system using fat", "Oxidative system using carbohydrate", "Anaerobic glycolysis lasting 2 minutes"], "Maximal efforts lasting a few seconds rely on stored ATP and phosphocreatine. These stores largely recover within about 3-5 minutes, which is why heavy sets need long rests."],
        ["Which statement about lactate is most accurate?", ["Lactate can be used as fuel by the heart and muscles or converted to glucose by the liver", "Lactate is a waste product that causes delayed-onset muscle soreness days later", "Lactate is produced only when oxygen is completely absent", "Lactate is stored in muscle for weeks after exercise"], "Lactate is cleared within roughly an hour after exercise and is recycled. DOMS is linked to muscle microdamage and inflammation, not lingering lactate."],
        ["Why does endurance training improve a client's ability to sustain submaximal exercise?", ["It increases mitochondrial density and oxidative enzymes in muscle", "It converts mitochondria into sarcoplasmic reticulum", "It eliminates the need for oxygen in muscle", "It increases reliance on the phosphagen system"], "More mitochondria and capillaries let muscle produce more ATP aerobically and use more fat, sparing glycogen and delaying fatigue."],
        ["Which fuel provides the most energy per gram?", ["Fat", "Carbohydrate", "Protein", "Lactate"], "Fat yields about 9 kcal/g versus about 4 kcal/g for carbohydrate and protein. Fat oxidation requires oxygen and is slower, so it dominates at lower intensities."],
        ["What does the Krebs cycle mainly produce for the electron transport chain?", ["NADH and FADH2", "Glucose and oxygen", "Lactate and pyruvate", "Phosphocreatine"], "The Krebs cycle oxidizes acetyl-CoA, releasing CO2 and loading electron carriers NADH and FADH2, which feed the electron transport chain."],
        ["A client does 4-minute intervals at moderate effort with 1-minute rest for 30 minutes. Which system supplies most of the energy?", ["Oxidative (aerobic) system", "Phosphagen system", "Anaerobic glycolysis only", "Stored ATP only"], "Sustained, moderate efforts over minutes rely mainly on aerobic metabolism. All systems contribute, but duration and intensity favor oxidative pathways here."]
      ]
    },
    {
      t: "Cell Division & Genetics",
      sub: "Cell cycle, mitosis, meiosis, Mendelian inheritance, mutations",
      guide: [
        "<b>Cell cycle</b>: interphase (G1 growth, S DNA replication, G2 preparation) then M phase (mitosis + cytokinesis). Checkpoints stop damaged cells; loss of checkpoint control contributes to cancer.",
        "<b>Mitosis</b> (prophase, metaphase, anaphase, telophase) makes 2 genetically identical diploid cells for growth and repair.",
        "<b>Meiosis</b> makes 4 genetically unique haploid gametes. Crossing over (prophase I) and independent assortment create variation.",
        "<b>Human chromosomes</b>: 46 (23 pairs): 22 autosome pairs + 1 sex chromosome pair. Gametes carry 23.",
        "<b>Terms</b>: gene, allele, genotype (alleles present) vs phenotype (observable trait), homozygous vs heterozygous, dominant vs recessive.",
        "<b>Inheritance patterns</b>: autosomal dominant (e.g., Huntington disease, many forms of osteogenesis imperfecta), autosomal recessive (e.g., cystic fibrosis, sickle cell), X-linked recessive (e.g., Duchenne muscular dystrophy, hemophilia).",
        "<b>Punnett squares</b>: two heterozygous carriers (Aa &times; Aa) have a 25% chance per child of an affected (aa) child for a recessive disorder.",
        "<b>Cell renewal varies</b>: epithelium and bone marrow divide constantly; mature neurons and cardiac muscle cells essentially do not, and skeletal muscle repairs mainly via satellite cells."
      ],
      assignment: {
        title: "Pedigree for a genetic condition",
        task: "Choose Duchenne muscular dystrophy or cystic fibrosis. Draw a three-generation pedigree, show the inheritance pattern with a Punnett square, and write a short note on what the condition means for a PT plan of care.",
        deliverable: "Pedigree diagram, Punnett square, and a 150-word clinical note."
      },
      gen: [],
      qs: [
        ["During which phase of the cell cycle is DNA replicated?", ["S phase", "G1 phase", "G2 phase", "Metaphase"], "DNA synthesis occurs in the S (synthesis) phase of interphase, so each chromosome has two sister chromatids before mitosis."],
        ["What is the main result of mitosis?", ["Two genetically identical diploid cells", "Four genetically unique haploid cells", "Two haploid gametes", "One cell with double the chromosomes"], "Mitosis is for growth and tissue repair and preserves the chromosome number. Meiosis produces four unique haploid gametes."],
        ["Which process during meiosis exchanges genetic material between homologous chromosomes?", ["Crossing over", "Cytokinesis", "DNA replication", "Nondisjunction"], "Crossing over in prophase I swaps segments between homologs, generating genetic diversity. Nondisjunction is an error causing abnormal chromosome numbers."],
        ["Duchenne muscular dystrophy is X-linked recessive. Why does it occur almost exclusively in boys?", ["Males have one X chromosome, so a single mutated copy causes disease", "Males have two X chromosomes that both carry the mutation", "The gene is on the Y chromosome", "Females are immune to dystrophin mutations"], "With only one X, a male has no second normal copy to compensate. Females with one mutated X are usually carriers."],
        ["Two parents are both carriers (Aa) of cystic fibrosis. What is the chance each child will have the disease?", ["25%", "50%", "75%", "100%"], "Aa x Aa gives AA, Aa, Aa, aa; only aa (1 in 4) is affected. Half of children would be carriers."],
        ["A person's genotype is Bb and B is dominant. Their phenotype will show:", ["The dominant trait", "The recessive trait", "A blend of both traits in every case", "Neither trait"], "With complete dominance, one dominant allele determines the phenotype. The recessive trait appears only in bb individuals."],
        ["Why does cardiac muscle damaged by a heart attack form scar rather than new muscle?", ["Mature cardiac muscle cells have very limited ability to divide", "Cardiac muscle divides too rapidly to organize properly", "Scar tissue is stronger and is preferentially formed", "Cardiac cells undergo meiosis instead of mitosis"], "Adult cardiomyocytes are essentially post-mitotic, so lost muscle is replaced by fibrous scar, reducing pumping capacity."],
        ["Skeletal muscle repairs after injury mainly through:", ["Satellite cells that proliferate and fuse with damaged fibers", "Mitosis of mature multinucleated muscle fibers", "Conversion of fibroblasts into muscle fibers", "Meiosis of myoblasts"], "Satellite cells are muscle stem cells beneath the basal lamina; they activate after injury or training and fuse to repair or add nuclei to fibers."],
        ["Loss of cell-cycle checkpoint control most directly contributes to:", ["Uncontrolled cell division as in cancer", "Faster tendon healing", "Increased muscle fiber type conversion", "Reduced DNA replication"], "Checkpoints halt cells with DNA damage. When genes controlling them mutate, damaged cells keep dividing, a hallmark of cancer."],
        ["How many chromosomes are in a normal human sperm or egg cell?", ["23", "46", "22", "92"], "Gametes are haploid with 23 chromosomes, so fertilization restores the diploid number of 46."]
      ]
    },
    {
      t: "Molecular Biology: DNA to Protein",
      sub: "DNA structure, replication, transcription, translation, gene regulation",
      guide: [
        "<b>Central dogma</b>: DNA &rarr; (transcription) &rarr; mRNA &rarr; (translation) &rarr; protein.",
        "<b>DNA structure</b>: double helix, sugar-phosphate backbone, base pairs A-T and G-C held by hydrogen bonds; strands are antiparallel.",
        "<b>RNA differences</b>: single stranded, ribose sugar, uracil (U) replaces thymine (T).",
        "<b>Replication</b> is semiconservative: each new double helix has one old and one new strand. DNA polymerase builds new strands and proofreads.",
        "<b>Transcription</b> (nucleus): RNA polymerase copies a gene into mRNA; introns are spliced out and exons joined.",
        "<b>Translation</b> (ribosome): mRNA codons (3 bases) are read; tRNA anticodons deliver matching amino acids; start codon AUG, stop codons end the chain.",
        "<b>Mutations</b>: point mutations (substitution) can be silent, missense (sickle cell), or nonsense (premature stop). Frameshifts from insertions/deletions alter all downstream codons.",
        "<b>Gene expression responds to training</b>: mechanical load triggers signaling (e.g., mTOR) that increases synthesis of contractile proteins; endurance training increases mitochondrial protein genes."
      ],
      assignment: {
        title: "From gene to collagen",
        task: "Trace how a fibroblast in a healing tendon makes type I collagen: transcription, translation, processing in the ER and Golgi, and secretion. Explain why vitamin C deficiency impairs this and why controlled loading influences collagen alignment.",
        deliverable: "Flow diagram plus a 250-word explanation."
      },
      gen: [],
      qs: [
        ["In DNA, adenine pairs with:", ["Thymine", "Uracil", "Guanine", "Cytosine"], "In DNA, A pairs with T and G pairs with C. Uracil replaces thymine only in RNA."],
        ["What is the process of copying DNA into mRNA called?", ["Transcription", "Translation", "Replication", "Splicing"], "Transcription makes an RNA copy of a gene. Translation uses that mRNA to build a protein; replication copies the whole DNA molecule."],
        ["Where does translation occur?", ["At ribosomes in the cytoplasm or on rough ER", "Inside the nucleus", "In the mitochondrial matrix only", "In lysosomes"], "Ribosomes read mRNA and assemble amino acids. Ribosomes on rough ER make proteins for secretion, such as collagen."],
        ["DNA replication is called semiconservative because:", ["Each new DNA molecule contains one original strand and one new strand", "Only half the genome is copied each cycle", "Both original strands are conserved together in one daughter cell", "Replication stops halfway through the S phase"], "Each parental strand serves as a template, so each daughter helix keeps one old strand."],
        ["A single base change replaces one amino acid in hemoglobin, causing sickle cell disease. This is a:", ["Missense mutation", "Silent mutation", "Nonsense mutation", "Frameshift mutation"], "A missense mutation changes one codon to code for a different amino acid (glutamate to valine in sickle cell)."],
        ["Which mutation is most likely to severely disrupt an entire protein?", ["A single-base deletion near the start of the gene causing a frameshift", "A substitution that codes for the same amino acid", "A substitution in an intron that is spliced out", "A substitution in the last codon before the stop codon"], "A frameshift early in a gene changes every downstream codon, usually producing a nonfunctional protein. Silent and intronic changes often have no effect."],
        ["Each mRNA codon consists of how many nucleotides?", ["Three", "Two", "Four", "Six"], "The genetic code is read in triplets; each codon specifies one amino acid or a stop signal."],
        ["A client asks how lifting weights makes muscles bigger at the cellular level. Which explanation is most accurate?", ["Mechanical load activates signaling that increases synthesis of contractile proteins", "Lifting causes muscle fibers to undergo meiosis", "Lifting inserts new DNA into muscle cells", "Lifting stops protein breakdown permanently"], "Resistance training triggers pathways like mTOR that raise muscle protein synthesis. Over time synthesis exceeding breakdown produces hypertrophy."],
        ["Which molecule brings amino acids to the ribosome?", ["Transfer RNA (tRNA)", "Messenger RNA (mRNA)", "Ribosomal RNA (rRNA)", "DNA polymerase"], "tRNA carries a specific amino acid and has an anticodon that pairs with the mRNA codon. mRNA carries the code; rRNA forms the ribosome."],
        ["Why is vitamin C important for tissue healing?", ["It is required for enzymes that stabilize newly made collagen", "It is a building block of DNA", "It is the final electron acceptor in respiration", "It directly forms hydroxyapatite in bone"], "Vitamin C is a cofactor for enzymes that hydroxylate proline and lysine in collagen. Without it, collagen is weak, as seen in scurvy with poor wound healing."]
      ]
    },
    {
      t: "Tissue Healing & Inflammation",
      sub: "Inflammation, proliferation, remodeling, scar, loading and healing",
      guide: [
        "<b>Three overlapping phases</b>: inflammatory (roughly days 0-6), proliferative/repair (roughly days 3 to 3-6 weeks), maturation/remodeling (weeks to a year or more). Timelines vary by tissue and person.",
        "<b>Cardinal signs of inflammation</b>: redness (rubor), heat (calor), swelling (tumor), pain (dolor), loss of function.",
        "<b>Inflammatory phase</b>: vasoconstriction then vasodilation, increased permeability, platelets form a clot, neutrophils arrive first, then macrophages clear debris and release growth factors.",
        "<b>Proliferative phase</b>: fibroblasts lay down type III collagen (weaker, disorganized), angiogenesis creates granulation tissue, myofibroblasts contract the wound.",
        "<b>Remodeling phase</b>: type III collagen is replaced by stronger type I collagen; fibers align along lines of stress (Davis's law for soft tissue). Scar rarely regains full original strength.",
        "<b>Loading principle</b>: protect during inflammation, introduce gentle controlled load in proliferation, progress load in remodeling. Appropriate tension improves collagen alignment; excessive load re-injures.",
        "<b>Acute vs chronic inflammation</b>: acute is short and protective; chronic inflammation persists, involves lymphocytes and macrophages, and is linked to fibrosis and tissue damage.",
        "<b>Factors that impair healing</b>: poor blood supply, diabetes, smoking, corticosteroids, malnutrition, infection, advanced age."
      ],
      assignment: {
        title: "Healing-phase treatment plan",
        task: "For a grade II lateral ankle sprain, write what you would do in each healing phase: goals, what is happening biologically, soft-tissue and exercise choices consistent with your scope, and signs that load is too much.",
        deliverable: "Three-column plan (one per phase) with biological rationale."
      },
      gen: [],
      qs: [
        ["Which cell type is typically the first to arrive in large numbers at an injury site?", ["Neutrophils", "Fibroblasts", "Osteoblasts", "Plasma cells"], "Neutrophils arrive within hours to fight infection and begin clearing debris. Macrophages follow and coordinate repair; fibroblasts dominate the proliferative phase."],
        ["Which collagen type is laid down first in a healing wound?", ["Type III", "Type I", "Type II", "Type IV"], "Fibroblasts initially produce type III collagen, which is thinner and weaker. It is gradually replaced by type I collagen during remodeling."],
        ["A client sprained an ankle 2 days ago. It is warm, swollen, red, and painful. Which phase is this, and what is the priority?", ["Inflammatory phase; protect the tissue and manage swelling", "Remodeling phase; begin heavy resistance training", "Proliferative phase; aggressive deep friction massage", "Remodeling phase; full return to sport"], "Early heat, redness, and swelling indicate the inflammatory phase. The goal is protection and symptom control while avoiding stresses that disrupt the fragile clot and early repair."],
        ["During the remodeling phase, why is progressive, controlled loading important?", ["Mechanical tension helps align collagen fibers along lines of stress", "Loading prevents any collagen from forming", "Loading converts scar tissue back into original tissue", "Loading stops fibroblasts from producing type I collagen"], "Collagen organizes in response to the stresses placed on it (Davis's law). Without load, scar is disorganized; too much load re-injures it."],
        ["What are the cardinal signs of acute inflammation?", ["Redness, heat, swelling, pain, and loss of function", "Pallor, coldness, numbness, and stiffness", "Atrophy, weakness, and fatigue", "Fever, chills, and night sweats only"], "Increased blood flow causes redness and heat, fluid leakage causes swelling, chemical mediators cause pain, and together they reduce function."],
        ["Which cells produce collagen during the proliferative phase?", ["Fibroblasts", "Neutrophils", "Osteoclasts", "Erythrocytes"], "Fibroblasts migrate into the wound and synthesize collagen and ground substance, forming granulation tissue with new capillaries."],
        ["A client with poorly controlled diabetes heals much more slowly than expected. What is the most likely reason?", ["Impaired circulation and immune function slow every healing phase", "Diabetes speeds healing but makes scar weaker", "High glucose converts collagen to cartilage", "Diabetes only affects healing of bone"], "Diabetes impairs small-vessel circulation, immune cell function, and collagen production. Smoking, steroids, and malnutrition also delay healing."],
        ["At 6 weeks after a hamstring strain, a client asks if the muscle is fully healed. What is the most accurate response?", ["Remodeling continues for months, so strength is still increasing and loading should progress gradually", "Healing is complete at 6 weeks, so maximal sprinting is safe", "The tissue is still in the inflammatory phase at 6 weeks", "Scar tissue at 6 weeks is stronger than the original tissue"], "Remodeling can last a year or more, and new collagen is still maturing. Progressive return to sprinting reduces reinjury risk."],
        ["Which cells contract a healing wound by pulling its edges together?", ["Myofibroblasts", "Osteocytes", "Neutrophils", "Mast cells"], "Myofibroblasts contain contractile proteins and pull wound edges together. Excessive activity can contribute to contracture."],
        ["How does chronic inflammation differ from acute inflammation?", ["It persists over time, involves lymphocytes and macrophages, and can cause fibrosis", "It lasts only a few hours and involves only neutrophils", "It always resolves without tissue damage", "It never produces pain or swelling"], "Acute inflammation is short and protective; chronic inflammation persists, with ongoing tissue damage and repair attempts leading to fibrosis."]
      ]
    }
  ]
});
