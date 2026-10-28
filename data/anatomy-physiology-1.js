(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "anatomy-physiology-1",
  track: "prereq",
  order: 1,
  code: "PRE 201",
  title: "Anatomy & Physiology I",
  credits: 4,
  desc: "The structural and functional foundation of the body: tissues, skin, bone, muscle, and the basic nervous system. Every later PT course, from gross anatomy to neuro rehab, assumes fluency in this material.",
  objectives: [
    "Use anatomical position, planes, and directional terms to describe body structures and movements precisely",
    "Classify the four primary tissue types and relate their structure to healing potential",
    "Explain bone histology, remodeling, and fracture healing and apply Wolff's law to loading decisions",
    "Describe excitation-contraction coupling, the sliding filament mechanism, and motor unit recruitment",
    "Explain how neurons generate and transmit action potentials and how synapses work"
  ],
  units: [
    {
      t: "Body Organization & Tissues",
      sub: "Anatomical language, homeostasis, the four tissue types",
      guide: [
        "<b>Anatomical position</b>: standing upright, facing forward, arms at sides, palms forward. All directional terms (anterior, proximal, medial) assume this position.",
        "<b>Planes &amp; motions</b>: sagittal plane (flexion/extension), frontal/coronal plane (abduction/adduction), transverse plane (rotation).",
        "<b>Levels of organization</b>: chemical &rarr; cellular &rarr; tissue &rarr; organ &rarr; organ system &rarr; organism.",
        "<b>Homeostasis</b>: most control is <i>negative feedback</i> (response opposes the change, e.g., thermoregulation). Positive feedback amplifies (e.g., oxytocin in labor, clotting cascade).",
        "<b>Four tissue types</b>: epithelial (covers/lines, avascular), connective (supports; cells in extracellular matrix), muscle (contracts), nervous (conducts signals).",
        "<b>Connective tissue proper</b>: dense regular (tendons, ligaments: parallel collagen, poor blood supply) vs dense irregular (dermis, joint capsules: multidirectional collagen) vs loose (areolar, adipose).",
        "<b>Cartilage</b>: hyaline (articular surfaces), fibrocartilage (menisci, intervertebral discs, pubic symphysis), elastic (ear, epiglottis). Cartilage is avascular, so it heals poorly.",
        "<b>PT link</b>: tissue vascularity predicts healing rate. Muscle (rich blood supply) heals faster than tendon and ligament, which heal faster than articular cartilage."
      ],
      assignment: {
        title: "Tissue healing comparison chart",
        task: "Build a chart comparing muscle, tendon, ligament, articular cartilage, and bone on: primary tissue type, dominant cell, matrix composition, blood supply, and relative healing speed. Add one line per tissue on what that means for loading a client after injury.",
        deliverable: "One-page comparison table with a clinical-implication column."
      },
      gen: [],
      qs: [
        ["In anatomical position, which way do the palms face?", ["Anteriorly (forward)", "Posteriorly (backward)", "Medially (toward the thigh)", "Inferiorly (toward the floor)"], "Anatomical position has the palms facing forward, which places the radius and ulna parallel. Palms facing the thighs is the common resting stance, not anatomical position."],
        ["A client performs a bicep curl. In which plane does the elbow motion occur?", ["Sagittal plane", "Frontal plane", "Transverse plane", "Oblique plane"], "Elbow flexion and extension occur in the sagittal plane around a mediolateral axis. Frontal plane motion is abduction/adduction; transverse plane is rotation."],
        ["Which tissue type lines body cavities and covers surfaces, and has no direct blood supply?", ["Epithelial tissue", "Dense regular connective tissue", "Smooth muscle tissue", "Nervous tissue"], "Epithelium is avascular and is nourished by diffusion from underlying connective tissue. Dense regular connective tissue is poorly vascularized but not avascular."],
        ["Body temperature rises during exercise and sweating increases to bring it back down. This is an example of:", ["Negative feedback", "Positive feedback", "Feedforward amplification", "Receptor downregulation"], "The response (sweating) opposes the original change (rising temperature), which defines negative feedback. Positive feedback would push temperature even higher."],
        ["Which tissue makes up the menisci of the knee and the annulus fibrosus of intervertebral discs?", ["Fibrocartilage", "Hyaline cartilage", "Elastic cartilage", "Dense irregular connective tissue"], "Fibrocartilage combines dense collagen bundles with cartilage cells to resist compression and shear. Hyaline cartilage covers articular surfaces; elastic cartilage is in the ear and epiglottis."],
        ["A client tore a hamstring muscle belly and her friend tore an ACL in the same week. Why would you expect the muscle to heal faster?", ["Muscle has a far richer blood supply than ligament", "Ligament contains more elastic fibers than muscle", "Muscle is an avascular tissue that heals by diffusion", "Ligament cells divide faster but produce weaker collagen"], "Healing depends heavily on blood supply delivering cells and nutrients. Ligaments and tendons are dense regular connective tissue with relatively poor vascularity, so they remodel slowly."],
        ["Tendons and ligaments are classified as which tissue?", ["Dense regular connective tissue", "Dense irregular connective tissue", "Loose areolar connective tissue", "Fibrocartilage"], "Tendons and ligaments have tightly packed, parallel collagen fibers aligned with the line of pull. Dense irregular tissue (dermis, joint capsule) has multidirectional fibers."],
        ["Which term describes the knee relative to the hip?", ["Distal", "Proximal", "Superior", "Medial"], "On a limb, distal means farther from the point of attachment to the trunk. The knee is farther from the trunk than the hip, so it is distal."],
        ["Why is a full-thickness articular cartilage defect in the knee unlikely to heal on its own with hyaline cartilage?", ["Hyaline cartilage is avascular and its chondrocytes have limited repair capacity", "Hyaline cartilage is richly innervated, so pain limits loading", "Hyaline cartilage is constantly replaced by bone through remodeling", "Hyaline cartilage lacks an extracellular matrix to rebuild"], "Without blood vessels, cartilage cannot mount a normal inflammatory and repair response; defects that do fill tend to fill with weaker fibrocartilage. Cartilage is aneural, not richly innervated."],
        ["A client rotates the head to look over the shoulder. In which plane does this motion occur?", ["Transverse plane", "Sagittal plane", "Frontal plane", "Coronal plane"], "Rotation occurs in the transverse (horizontal) plane around a vertical axis. Frontal and coronal are the same plane, used for side-bending and abduction."]
      ]
    },
    {
      t: "Integumentary System",
      sub: "Epidermis, dermis, hypodermis, skin functions, wound basics",
      guide: [
        "<b>Epidermis</b>: keratinized stratified squamous epithelium, avascular. Layers deep to superficial: stratum basale, spinosum, granulosum, (lucidum in thick skin), corneum.",
        "<b>Stratum basale</b> holds dividing keratinocytes and melanocytes. Cells migrate up and are shed from the stratum corneum in roughly 4 weeks.",
        "<b>Dermis</b>: papillary layer (loose connective tissue, capillaries, touch receptors) and reticular layer (dense irregular connective tissue; collagen and elastin give strength and recoil).",
        "<b>Hypodermis</b> (subcutaneous layer): adipose and loose connective tissue; not technically skin. Insulates and anchors skin to fascia.",
        "<b>Functions</b>: protection, thermoregulation (sweat, vasodilation/vasoconstriction), sensation, vitamin D synthesis (UV light), excretion.",
        "<b>Burn depth</b>: superficial (epidermis only), partial thickness (into dermis; blisters, very painful), full thickness (through dermis; may be painless because nerve endings are destroyed).",
        "<b>Wound healing</b>: shallow wounds heal by epithelial migration from wound edges and remaining hair follicles; deep wounds fill with granulation tissue and form scar.",
        "<b>PT link</b>: pressure injuries form over bony prominences (sacrum, heels, ischial tuberosities) when sustained pressure cuts off capillary blood flow. Repositioning is prevention."
      ],
      assignment: {
        title: "Skin check protocol",
        task: "Write a 5-step skin inspection you could do before soft-tissue work or modality application. Include which bony prominences to check in supine and seated clients, what color and temperature changes mean, and when to stop and refer.",
        deliverable: "One-page checklist suitable for a treatment room wall."
      },
      gen: [],
      qs: [
        ["Which epidermal layer contains the actively dividing cells that replace the skin surface?", ["Stratum basale", "Stratum corneum", "Stratum granulosum", "Stratum lucidum"], "The stratum basale sits on the basement membrane and is the only layer with mitotically active keratinocytes. The corneum is dead, keratin-filled cells being shed."],
        ["The strength and elasticity of the skin come mainly from which layer?", ["Reticular dermis", "Stratum corneum", "Papillary dermis", "Hypodermis"], "The reticular dermis is dense irregular connective tissue with collagen and elastin running in many directions. The papillary dermis is thinner, looser tissue."],
        ["A patient has a burn that is blistered, red, moist, and extremely painful to light touch. This is most consistent with:", ["Partial-thickness burn", "Superficial burn", "Full-thickness burn", "Subdermal burn"], "Blisters plus intense pain indicate damage into the dermis with nerve endings intact. Superficial burns do not blister; full-thickness burns often lack pain because receptors are destroyed."],
        ["Why might a full-thickness burn be relatively painless at its center?", ["Sensory nerve endings in the dermis have been destroyed", "The epidermis has thickened to protect deeper layers", "Swelling compresses the spinal cord pain pathways", "Melanocytes release analgesic chemicals after injury"], "Full-thickness injury destroys the dermis and the receptors within it. Pain at the edges comes from surrounding partial-thickness tissue."],
        ["A client who uses a wheelchair is at highest risk for pressure injury over which site?", ["Ischial tuberosities", "Lateral epicondyles", "Anterior tibia", "Spinous process of C7"], "Seated weight bears through the ischial tuberosities, so sustained sitting compresses tissue there. In supine, the sacrum and heels are the classic sites."],
        ["Which skin function depends on UV light exposure?", ["Synthesis of a vitamin D precursor", "Production of sebum by sebaceous glands", "Secretion of sweat by eccrine glands", "Formation of keratin in the stratum corneum"], "UVB converts a cholesterol derivative in the skin into a vitamin D precursor, which the liver and kidneys then activate. Vitamin D is essential for calcium absorption and bone health."],
        ["During a hot session, a client's skin flushes red. What is happening physiologically?", ["Dermal blood vessels are dilating to release heat", "Melanocytes are increasing pigment production", "Dermal vessels are constricting to conserve heat", "Sebaceous glands are releasing oil to cool the skin"], "Cutaneous vasodilation brings warm blood to the surface so heat can radiate away. Vasoconstriction is the cold response."],
        ["Which tissue makes up the hypodermis?", ["Adipose and loose connective tissue", "Keratinized stratified squamous epithelium", "Dense regular connective tissue", "Hyaline cartilage"], "The hypodermis (subcutaneous layer) is mostly fat and areolar tissue that insulates and anchors the skin to underlying fascia."],
        ["Before applying a hot pack, you notice a reddened area over the sacrum that does not blanch when pressed. What is the best next step?", ["Avoid heat and pressure on the area and report it as a possible pressure injury", "Apply the hot pack to increase blood flow to the area", "Massage the area firmly to restore circulation", "Ignore it because redness always fades within the hour"], "Non-blanchable redness over a bony prominence is a sign of early pressure injury. Adding heat or deep pressure can worsen tissue damage; protect the area and report it."],
        ["Why does a shallow abrasion heal without a scar while a deep laceration usually scars?", ["Shallow wounds re-epithelialize from intact basal cells; deep wounds fill with collagen scar", "Shallow wounds have no blood supply, so inflammation never begins", "Deep wounds heal by regenerating new sweat glands and hair follicles", "Deep wounds heal faster, so collagen is laid down in disorganized layers"], "When the basal layer and adnexa survive, epithelial cells resurface the wound. Deep dermal loss requires granulation tissue and fibroblast collagen, which forms scar."]
      ]
    },
    {
      t: "Skeletal System",
      sub: "Bone histology, remodeling, Wolff's law, fracture healing, joints",
      guide: [
        "<b>Bone cells</b>: osteoblasts build matrix, osteocytes (trapped osteoblasts in lacunae) sense mechanical load, osteoclasts resorb bone.",
        "<b>Compact bone</b> is organized into osteons (Haversian systems) around central canals; <b>spongy (cancellous) bone</b> is a lattice of trabeculae that align along lines of stress.",
        "<b>Matrix</b>: collagen gives flexibility and tensile strength; hydroxyapatite (calcium phosphate) gives hardness and compressive strength.",
        "<b>Growth</b>: long bones lengthen at the epiphyseal (growth) plate by endochondral ossification; bones widen by appositional growth.",
        "<b>Wolff's law</b>: bone adapts to the loads placed on it. Weight-bearing and resistance training increase density; disuse, bed rest, and spaceflight cause loss.",
        "<b>Calcium control</b>: PTH raises blood calcium (stimulates osteoclast activity indirectly); calcitonin lowers it. Vitamin D increases intestinal calcium absorption.",
        "<b>Fracture healing</b>: hematoma &rarr; fibrocartilaginous (soft) callus &rarr; bony (hard) callus &rarr; remodeling.",
        "<b>Joints by function/structure</b>: synarthrosis (sutures), amphiarthrosis (pubic symphysis, intervertebral discs), diarthrosis = synovial joints (capsule, synovial fluid, articular cartilage)."
      ],
      assignment: {
        title: "Wolff's law client handout",
        task: "Write a plain-language handout for a postmenopausal client explaining why bone responds to load. Include the roles of osteoblasts and osteoclasts, which exercise types load bone effectively, and why swimming alone is not enough for bone density.",
        deliverable: "300-word handout with one simple diagram."
      },
      gen: [],
      qs: [
        ["Which bone cell resorbs (breaks down) bone matrix?", ["Osteoclast", "Osteoblast", "Osteocyte", "Chondrocyte"], "Osteoclasts are large multinucleated cells that dissolve mineral and digest matrix. Osteoblasts build bone; osteocytes maintain it and sense strain."],
        ["Which cell is thought to be the primary sensor of mechanical strain in bone?", ["Osteocyte", "Osteoclast", "Fibroblast", "Chondroblast"], "Osteocytes sit in lacunae connected by canaliculi and detect fluid flow from loading, then signal osteoblasts and osteoclasts. This is the cellular basis of Wolff's law."],
        ["A 68-year-old woman with low bone density asks which exercise will best support her bones. Which is best?", ["Progressive resistance training with weight-bearing activity", "Daily lap swimming at moderate intensity", "Stationary cycling with no resistance", "Gentle stretching performed lying down"], "Bone responds to mechanical load, so resistance and weight-bearing exercise provide the strain that stimulates bone formation. Swimming and unloaded cycling place little load on the skeleton."],
        ["A patient spends 6 weeks on bed rest. What change in bone would you expect?", ["Decreased bone density from reduced loading", "Increased bone density from reduced stress", "No change because bone is metabolically inactive", "Increased osteoblast activity in the lower limbs"], "Per Wolff's law, unloaded bone is resorbed faster than it is formed. Bone is a living, constantly remodeling tissue."],
        ["Which component of bone matrix provides most of its compressive strength and hardness?", ["Hydroxyapatite (calcium phosphate) crystals", "Type I collagen fibers", "Proteoglycans", "Elastic fibers"], "Mineral crystals make bone hard and resistant to compression. Collagen provides tensile strength and some flexibility; without it bone would be brittle."],
        ["Where does lengthwise growth of a long bone occur?", ["At the epiphyseal (growth) plate", "At the periosteum", "In the medullary cavity", "At the articular cartilage surface"], "Chondrocytes at the epiphyseal plate proliferate and are replaced by bone (endochondral ossification). The periosteum adds width (appositional growth)."],
        ["What is the correct order of fracture healing?", ["Hematoma, soft callus, hard callus, remodeling", "Soft callus, hematoma, remodeling, hard callus", "Hard callus, hematoma, soft callus, remodeling", "Hematoma, hard callus, soft callus, remodeling"], "Bleeding forms a hematoma, fibrocartilage forms a soft callus, it ossifies into a hard callus, and remodeling restores shape along stress lines."],
        ["Which hormone raises blood calcium, in part by increasing osteoclast-driven bone resorption?", ["Parathyroid hormone", "Calcitonin", "Insulin", "Aldosterone"], "PTH raises blood calcium by promoting bone resorption, increasing renal calcium reabsorption, and stimulating vitamin D activation. Calcitonin has the opposite effect."],
        ["The pubic symphysis is best classified as which type of joint?", ["Cartilaginous amphiarthrosis (slightly movable)", "Fibrous synarthrosis (immovable)", "Synovial diarthrosis (freely movable)", "Fibrous gomphosis"], "The pubic symphysis is a fibrocartilage pad allowing slight movement. Skull sutures are synarthroses; the knee and shoulder are synovial diarthroses."],
        ["Trabeculae in the femoral neck are aligned along lines of stress. What principle does this illustrate?", ["Wolff's law", "Davis's law", "The all-or-none principle", "The length-tension relationship"], "Wolff's law states bone architecture adapts to the loads it experiences. Davis's law is the soft-tissue counterpart; all-or-none and length-tension describe muscle."]
      ]
    },
    {
      t: "Muscular System",
      sub: "Muscle structure, sliding filament, E-C coupling, motor units, fiber types",
      guide: [
        "<b>Structure</b>: muscle &rarr; fascicle &rarr; fiber (cell) &rarr; myofibril &rarr; sarcomere. Connective layers: epimysium, perimysium, endomysium.",
        "<b>Sarcomere</b>: Z-disc to Z-disc. Thick filament = myosin; thin filament = actin with troponin and tropomyosin. A-band (myosin length) stays constant; I-band and H-zone shorten.",
        "<b>E-C coupling</b>: ACh at the neuromuscular junction &rarr; muscle action potential &rarr; T-tubules &rarr; sarcoplasmic reticulum releases Ca<sup>2+</sup> &rarr; Ca<sup>2+</sup> binds troponin &rarr; tropomyosin moves &rarr; cross-bridges form.",
        "<b>ATP roles</b>: powers the myosin power stroke cycle, detaches myosin from actin, and pumps Ca<sup>2+</sup> back into the SR. No ATP = rigor.",
        "<b>Motor unit</b>: one motor neuron + all fibers it innervates. Small units for fine control (eye, hand); large units for force (gastrocnemius, quads).",
        "<b>Henneman's size principle</b>: small, low-threshold units recruited first; larger units added as force demand rises. Force also increases by rate coding (firing frequency).",
        "<b>Fiber types</b>: Type I (slow oxidative, fatigue resistant), Type IIa (fast oxidative-glycolytic), Type IIx (fast glycolytic, powerful, fatigues quickly).",
        "<b>Length-tension</b>: maximal force near resting sarcomere length where actin-myosin overlap is optimal. Early strength gains (first weeks) are largely neural; hypertrophy follows."
      ],
      assignment: {
        title: "Recruitment and programming brief",
        task: "Explain to a new client why the first 4-6 weeks of strength training produce gains before muscles visibly grow. Use the size principle, rate coding, and neural adaptation, and give one programming implication for heavy versus light loads.",
        deliverable: "250-word client-facing explanation plus a 3-line clinician summary."
      },
      gen: [],
      qs: [
        ["During a concentric contraction, which sarcomere region stays the same length?", ["A-band", "I-band", "H-zone", "Distance between Z-discs"], "The A-band equals the length of the thick (myosin) filaments, which do not shorten. Filaments slide past each other, so the I-band, H-zone, and Z-to-Z distance shrink."],
        ["What does calcium bind to in skeletal muscle to begin contraction?", ["Troponin", "Tropomyosin", "Myosin head", "Titin"], "Calcium binds troponin, which shifts tropomyosin off the myosin-binding sites on actin. Tropomyosin is the blocker, not the calcium receptor."],
        ["Rigor mortis occurs after death because:", ["No ATP is available to detach myosin heads from actin", "Calcium is pumped back into the sarcoplasmic reticulum", "Acetylcholine is broken down too quickly", "Tropomyosin permanently covers actin binding sites"], "ATP binding is required for myosin to release actin. Without ATP, cross-bridges stay locked and muscles stiffen."],
        ["A client lifts a light dumbbell, then a much heavier one. According to the size principle, what happens with the heavier load?", ["Larger, higher-threshold motor units are added to the smaller ones already active", "Small motor units shut off and only large units fire", "The same motor units fire with no change in frequency", "Large motor units are recruited first, then small ones"], "Henneman's size principle: small, low-threshold units are recruited first and larger units are added as force demand increases. Small units keep firing; they are not replaced."],
        ["A new client gains significant strength in the first 4 weeks of training with little change in muscle size. The best explanation is:", ["Neural adaptations such as improved recruitment and firing rate", "Rapid conversion of all Type I fibers to Type IIx fibers", "Increased number of muscle fibers through hyperplasia", "Increased bone density increasing leverage"], "Early strength gains are largely neural: better motor unit recruitment, rate coding, and coordination. Measurable hypertrophy typically lags behind."],
        ["Which muscle would have the smallest motor units (fewest fibers per neuron)?", ["Extraocular muscles of the eye", "Gastrocnemius", "Vastus lateralis", "Gluteus maximus"], "Muscles needing fine control have small motor units. Large postural and power muscles have motor units with hundreds to thousands of fibers."],
        ["Which fiber type predominates in a marathon runner's soleus and is most fatigue resistant?", ["Type I (slow oxidative)", "Type IIx (fast glycolytic)", "Type IIa (fast oxidative-glycolytic)", "Type IIb (fast anaerobic)"], "Type I fibers have many mitochondria, rich capillaries, and myoglobin, so they resist fatigue. The soleus is a classic Type I dominant postural muscle."],
        ["Which neurotransmitter is released at the skeletal neuromuscular junction?", ["Acetylcholine", "Norepinephrine", "Dopamine", "GABA"], "Somatic motor neurons release acetylcholine, which binds nicotinic receptors on the motor end plate. Norepinephrine is the main sympathetic postganglionic transmitter."],
        ["A muscle is placed in a fully stretched position and can produce only weak force. What explains this?", ["Too little actin-myosin overlap for cross-bridges to form", "Too much overlap causing filaments to collide", "Lack of calcium release when a muscle is lengthened", "Motor units cannot be recruited in a stretched muscle"], "Per the length-tension relationship, overstretched sarcomeres have minimal overlap and fewer cross-bridges. At very short lengths, filaments overlap excessively; force peaks near resting length."],
        ["Besides increasing the number of active motor units, how else does the nervous system increase muscle force?", ["Increasing the firing frequency of active motor units (rate coding)", "Increasing the size of each action potential", "Lengthening the refractory period of the muscle", "Reducing calcium release from the sarcoplasmic reticulum"], "Faster firing causes twitches to summate toward tetanus, raising force. Action potentials are all-or-none, so their size does not grow."]
      ]
    },
    {
      t: "Nervous System Basics",
      sub: "Neurons, glia, resting potential, action potentials, synapses, CNS/PNS",
      guide: [
        "<b>Divisions</b>: CNS = brain + spinal cord. PNS = cranial and spinal nerves. PNS splits into somatic (voluntary, skeletal muscle) and autonomic (sympathetic, parasympathetic).",
        "<b>Neuron parts</b>: dendrites receive, cell body integrates, axon conducts, axon terminals release neurotransmitter. Afferent = sensory toward CNS; efferent = motor away from CNS.",
        "<b>Glia</b>: oligodendrocytes myelinate CNS axons; Schwann cells myelinate PNS axons (and support PNS regeneration). Astrocytes support the blood-brain barrier; microglia are immune cells.",
        "<b>Resting membrane potential</b> about -70 mV, maintained by the Na<sup>+</sup>/K<sup>+</sup> pump (3 Na<sup>+</sup> out, 2 K<sup>+</sup> in) and K<sup>+</sup> leak channels.",
        "<b>Action potential</b>: threshold reached &rarr; voltage-gated Na<sup>+</sup> channels open (depolarization) &rarr; Na<sup>+</sup> channels inactivate and K<sup>+</sup> channels open (repolarization) &rarr; brief hyperpolarization. All-or-none.",
        "<b>Conduction speed</b> increases with myelination (saltatory conduction between nodes of Ranvier) and larger axon diameter.",
        "<b>Synapse</b>: AP arrives &rarr; voltage-gated Ca<sup>2+</sup> channels open &rarr; vesicles release neurotransmitter &rarr; binds postsynaptic receptors &rarr; EPSP or IPSP. Summation (temporal, spatial) determines firing.",
        "<b>PT link</b>: peripheral nerves can regenerate (slowly, around 1 mm/day) because Schwann cells guide regrowth; CNS axons regenerate poorly, which is why spinal cord injury recovery is limited."
      ],
      assignment: {
        title: "Nerve signal storyboard",
        task: "Create a 6-panel storyboard tracing a signal from a fingertip touch receptor to the brain and back to a finger flexor. Label afferent vs efferent, CNS vs PNS, where myelin speeds conduction, and the synapses involved.",
        deliverable: "Six-panel annotated diagram (hand-drawn or digital)."
      },
      gen: [],
      qs: [
        ["Which ion rushing into the neuron causes the depolarization phase of an action potential?", ["Sodium (Na+)", "Potassium (K+)", "Chloride (Cl-)", "Calcium (Ca2+)"], "Voltage-gated sodium channels open at threshold and Na+ flows in, driving the membrane positive. Potassium outflow causes repolarization."],
        ["Which cell forms myelin around axons in peripheral nerves?", ["Schwann cell", "Oligodendrocyte", "Astrocyte", "Microglia"], "Schwann cells myelinate PNS axons; oligodendrocytes myelinate CNS axons. Schwann cells also support regeneration after peripheral nerve injury."],
        ["A patient has a peripheral nerve injury in the forearm and asks if it can recover. Which statement is most accurate?", ["Peripheral axons can regenerate slowly, roughly 1 mm per day, if the nerve sheath is intact", "Peripheral axons cannot regenerate once cut", "Peripheral axons regenerate fully within 48 hours", "Only CNS axons can regenerate after injury"], "PNS axons can regrow along Schwann cell tubes at about 1 mm/day, so recovery time depends on distance to the target. CNS regeneration is very limited."],
        ["Why does multiple sclerosis slow nerve conduction?", ["It destroys CNS myelin, disrupting saltatory conduction", "It blocks acetylcholine receptors at the neuromuscular junction", "It destroys Schwann cells in peripheral nerves", "It increases axon diameter beyond normal limits"], "MS is a demyelinating disease of the CNS (oligodendrocyte myelin). Losing myelin forces slower, continuous conduction or conduction block."],
        ["What maintains the resting membrane potential of about -70 mV?", ["Na+/K+ pump and potassium leak channels", "Voltage-gated sodium channels staying open", "Calcium entering through ligand-gated channels", "Chloride pumping out of the cell"], "The Na+/K+ pump moves 3 Na+ out and 2 K+ in, and K+ leak channels let K+ exit, leaving the inside negative. Voltage-gated Na+ channels are mostly closed at rest."],
        ["A sensory neuron carrying pain from the foot to the spinal cord is described as:", ["Afferent", "Efferent", "Autonomic motor", "Interneuron"], "Afferent neurons carry information toward the CNS. Efferent neurons carry commands away from the CNS to muscles and glands."],
        ["What triggers neurotransmitter vesicle release at the axon terminal?", ["Calcium influx through voltage-gated calcium channels", "Sodium efflux through leak channels", "Potassium influx through ligand-gated channels", "Chloride influx through the Na+/K+ pump"], "The arriving action potential opens voltage-gated Ca2+ channels; Ca2+ entry triggers vesicle fusion and exocytosis."],
        ["Which axon would conduct an action potential fastest?", ["Large-diameter, myelinated axon", "Small-diameter, myelinated axon", "Large-diameter, unmyelinated axon", "Small-diameter, unmyelinated axon"], "Both myelination and larger diameter increase conduction velocity. Small unmyelinated C fibers (slow, dull pain) are the slowest."],
        ["A stimulus is strong enough to reach threshold. A stronger stimulus is then applied. What happens to the action potential size?", ["It stays the same because action potentials are all-or-none", "It doubles in amplitude", "It becomes smaller due to fatigue", "It reverses polarity"], "Once threshold is reached, the action potential is the same size. Stronger stimuli are encoded by higher firing frequency, not bigger spikes."],
        ["The sympathetic and parasympathetic divisions are part of which system?", ["Autonomic nervous system (PNS)", "Somatic nervous system (PNS)", "Central nervous system", "Enteric glial system"], "The autonomic nervous system controls involuntary functions and has sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) divisions. The somatic system controls skeletal muscle."]
      ]
    }
  ]
});
