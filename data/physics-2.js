(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "physics-2",
  track: "prereq",
  order: 6,
  code: "PRE 122",
  title: "Physics II",
  credits: 4,
  desc: "The second semester of algebra-based physics: electricity, circuits, magnetism, waves, optics, and thermal physics. These principles are the operating manual for electrical stimulation, ultrasound, diathermy, laser, thermal agents, and the imaging studies a PT reads every week.",
  objectives: [
    "Describe electric charge, field, and potential and relate them to current flow through tissue",
    "Solve DC circuit problems with Ohm's law and series and parallel resistance, and explain capacitance and impedance in electrical stimulation",
    "Explain electromagnetic induction and apply it to MRI and shortwave diathermy at an introductory level",
    "Calculate wavelength, frequency, and speed and explain the frequency-dependent attenuation, reflection, and absorption of therapeutic ultrasound",
    "Apply reflection, refraction, and lens principles and describe the properties of laser light",
    "Compare conduction, convection, radiation, and conversion, use specific heat in thermal calculations, and distinguish ionizing from non-ionizing radiation"
  ],
  references: [
    "Giancoli DC. Physics: Principles with Applications. Pearson.",
    "Serway RA, Vuille C. College Physics. Cengage.",
    "Cameron MH. Physical Agents in Rehabilitation: An Evidence-Based Approach to Practice. Elsevier.",
    "Bellew JW, Michlovitz SL, Nolan TP. Michlovitz's Modalities for Therapeutic Intervention. F.A. Davis.",
    "Bushberg JT, Seibert JA, Leidholdt EM, Boone JM. The Essential Physics of Medical Imaging. Wolters Kluwer."
  ],
  units: [
    {
      t: "Electric Charge, Fields & Potential",
      sub: "Coulomb's law, electric field, voltage, conductors and insulators",
      lesson: [
        "<b>Electric charge</b> comes in two kinds, positive and negative. Like charges repel and unlike charges attract. Charge is measured in coulombs (C); one electron carries about 1.6 x 10<sup>-19</sup> C. Charge is conserved: it can be moved but not created or destroyed. In the body, the charge carriers are not free electrons as in a copper wire but <b>ions</b>: Na<sup>+</sup>, K<sup>+</sup>, Cl<sup>-</sup>, Ca<sup>2+</sup>, and charged proteins dissolved in water.",
        "<b>Coulomb's law</b> gives the force between two point charges: <span class='formula'>F = k q<sub>1</sub>q<sub>2</sub> / r<sup>2</sup></span>, where k is about 9 x 10<sup>9</sup> N&middot;m<sup>2</sup>/C<sup>2</sup>. The force follows an <b>inverse square law</b>: doubling the distance cuts the force to one quarter; halving the distance makes it four times as strong. The same inverse square pattern appears for gravity, light intensity, and radiation exposure, which is why stepping back from an X-ray source sharply reduces dose.",
        "An <b>electric field (E)</b> describes the force per unit charge at a point in space, <span class='formula'>E = F / q</span>, in newtons per coulomb or volts per meter. Field lines point away from positive charges and toward negative charges; where lines are crowded, the field is strong. A positive charge placed in a field is pushed along the field lines; a negative charge is pushed the opposite way. Between two parallel charged plates, the field is uniform, which is the basic geometry of a capacitor and of the electrode pair in electrical stimulation.",
        "<b>Electric potential</b> (voltage, V) is potential energy per unit charge, measured in volts (1 V = 1 J/C). What matters physically is the <b>potential difference</b> between two points: charges move only if there is a voltage difference. Positive charges move from high to low potential, like water flowing downhill. In a uniform field, <span class='formula'>V = E x d</span>. The membrane is an extreme example: about 70 mV across a membrane only about 7-10 nm thick creates a field of roughly 7-10 million V/m, enough to flip the shape of voltage-gated channel proteins.",
        "Materials differ in how easily charges move. <b>Conductors</b> (metals, and body tissues with high water and electrolyte content such as muscle and blood) let charge move freely. <b>Insulators</b> (rubber, dry skin, fat, bone) resist it. The outer skin layer, the stratum corneum, is the body's main barrier to current, which is why e-stim electrodes use conductive gel and why moist, clean skin lowers resistance. Nerve is a good conductor and has the lowest threshold for stimulation, which is why sensory and motor nerves respond before muscle fibers do.",
        "<b>Static electricity</b> arises when charge is transferred by friction and builds up on an insulated object; it discharges as a spark when a conductive path appears. In clinics, grounding and three-prong plugs with ground-fault circuit interrupters (GFCIs) protect patients. A GFCI compares current going out on the hot wire and returning on the neutral; if they differ by a few milliamps, current is leaking somewhere, possibly through a person, and the circuit trips within a fraction of a second. Whirlpools and any electrical equipment near water should be on GFCI-protected outlets.",
        "Worked example: two small charged particles are 2 cm apart and repel with a force of 0.8 N. If the distance increases to 4 cm, the distance doubles, so the force becomes 0.8 / 2<sup>2</sup> = 0.8 / 4 = 0.2 N. If they are moved to 1 cm, the distance halves and the force becomes 0.8 x 4 = 3.2 N. Clinically, the same inverse square reasoning tells a PT that standing 2 meters from a portable X-ray source gives about one quarter the exposure of standing 1 meter away."
      ],
      guide: [
        "Like charges repel; unlike attract. Charge is conserved. Body charge carriers are <b>ions</b>.",
        "<b>Coulomb</b>: <span class='formula'>F = kq<sub>1</sub>q<sub>2</sub>/r<sup>2</sup></span>. Inverse square: 2x distance = 1/4 force.",
        "<b>Electric field</b> <span class='formula'>E = F/q</span> (N/C or V/m); points away from + toward -.",
        "<b>Voltage</b> = energy per charge (J/C). Current flows only with a potential difference. Uniform field: <span class='formula'>V = Ed</span>.",
        "<b>Conductors</b>: muscle, blood, nerve, metals. <b>Insulators</b>: dry skin, fat, bone, rubber.",
        "Stratum corneum is the main resistance to e-stim; gel and clean moist skin reduce it.",
        "<b>GFCI</b> trips when outgoing and returning current differ; required near water.",
        "Inverse square law also governs radiation exposure and light intensity."
      ],
      terms: [
        ["Electric charge", "A fundamental property of matter, positive or negative, measured in coulombs."],
        ["Coulomb", "The SI unit of electric charge."],
        ["Coulomb's law", "The force between two charges is proportional to the product of the charges and inversely proportional to the square of their distance."],
        ["Inverse square law", "A quantity that decreases with the square of the distance from its source."],
        ["Electric field", "The force per unit charge at a point, pointing in the direction a positive charge would be pushed."],
        ["Electric potential", "The electric potential energy per unit charge at a point, measured in volts."],
        ["Potential difference", "The difference in electric potential between two points that drives the movement of charge."],
        ["Conductor", "A material that allows charge to move easily, such as metal or electrolyte-rich tissue."],
        ["Insulator", "A material that strongly resists the movement of charge, such as rubber or fat."],
        ["Ion", "An atom or molecule with a net electric charge due to loss or gain of electrons."],
        ["Ground fault circuit interrupter", "A safety device that cuts power when outgoing and returning current are unequal."]
      ],
      assignment: {
        title: "Electrical safety audit",
        task: "Inspect (or imagine in detail) a PT clinic's electrical equipment: e-stim units, whirlpool, hydrocollator, treatment tables. List each device, its outlet type, whether GFCI protection is present or needed, cord and plug condition, and calibration status. Explain in physics terms why each safety step protects the patient.",
        deliverable: "A one-page audit table with a short physics rationale for each safety item."
      },
      gen: [],
      qs: [
        ["Two charges repel with a force of 12 N. If the distance between them is tripled, what is the new force?", ["1.33 N", "4 N", "36 N", "108 N"], "Force is proportional to 1/r squared: 12 / 3^2 = 12 / 9 = 1.33 N."],
        ["Two charges attract with a force of 5 N. If the distance between them is halved, the force becomes:", ["20 N", "10 N", "2.5 N", "1.25 N"], "Halving distance multiplies force by 2^2 = 4: 5 x 4 = 20 N."],
        ["Which tissue offers the GREATEST resistance to an electrical stimulation current?", ["Dry outer skin layer", "Muscle", "Blood", "Peripheral nerve"], "The keratinized stratum corneum has low water content and high resistance. Electrolyte-rich tissues conduct well."],
        ["A uniform field of 2,000 V/m exists between two plates 0.05 m apart. What is the potential difference?", ["100 V", "40,000 V", "2,050 V", "0.025 V"], "V = E x d = 2,000 x 0.05 = 100 V."],
        ["What does 1 volt represent?", ["1 joule of energy per coulomb of charge", "1 coulomb of charge per second", "1 ohm of resistance per ampere", "1 newton of force per meter"], "Voltage is energy per unit charge. 1 C/s is an ampere."],
        ["Before applying e-stim, a PT cleans the skin with soap and water and uses fresh conductive gel. The PRIMARY physics purpose is to:", ["Lower skin resistance so less voltage is needed", "Increase skin resistance to protect the patient", "Create a static charge on the skin surface", "Insulate the electrode from the tissue"], "Removing oils and dead cells and adding an electrolyte gel lowers resistance, improving comfort and uniform current flow."],
        ["A whirlpool is plugged into an outlet near a sink. Which safety device is MOST important for this outlet?", ["Ground fault circuit interrupter", "Surge protector power strip", "Two-prong extension cord", "Variable resistor"], "A GFCI detects leakage current, possibly through a person, and trips within a fraction of a second."],
        ["A PT stands 1 m from a portable X-ray unit during an exposure. Moving to 3 m away reduces exposure to about:", ["One ninth", "One third", "One half", "One sixth"], "Inverse square law: (1/3)^2 = 1/9. Distance is one of the three principles of radiation safety, with time and shielding."],
        ["Electric field lines around a single positive point charge:", ["Point radially outward", "Point radially inward", "Form closed circles around it", "Are parallel and uniform"], "Field direction is the force on a positive test charge, which is repelled outward."],
        ["Why are nerves stimulated at lower intensities than muscle fibers during NMES?", ["Nerve has a lower threshold for depolarization", "Nerve is an electrical insulator", "Muscle fibers are deeper than all nerves", "Muscle has no voltage-gated channels"], "Motor nerves depolarize at lower charge than muscle fibers, so NMES works by stimulating the nerve, which then activates the muscle."],
        ["Which statement about electric charge in the body is MOST accurate?", ["Current in tissue is carried mainly by ions in fluid", "Current in tissue is carried mainly by free electrons", "Body tissues contain no mobile charges", "Charge can be created by muscle contraction"], "Electrodes convert electron flow in wires to ion flow in tissue. Charge is conserved, not created."],
        ["A 70 mV potential exists across a membrane 7 nm thick. The electric field across it is about:", ["10 million V/m", "10 V/m", "490 V/m", "1,000 V/m"], "E = V / d = 0.07 V / 7 x 10^-9 m = 1 x 10^7 V/m, which is strong enough to change channel protein shape."],
        ["A negative ion placed in an electric field will move:", ["Opposite the direction of the field lines", "In the direction of the field lines", "Perpendicular to the field lines", "Not at all, because ions are neutral"], "Field direction is defined for positive charges; negative charges feel force in the opposite direction."],
        ["A patient touches a metal treatment table and feels a small shock after walking across a carpet. This is BEST explained by:", ["Discharge of static charge built up by friction", "A ground fault in the treatment table wiring", "Current leaking from an e-stim unit", "Magnetic induction from the lights"], "Friction transfers charge to the patient; touching a conductor allows it to discharge. A persistent tingling would warrant checking equipment."],
        ["Which material is the BEST electrical insulator?", ["Rubber", "Saline", "Copper", "Skeletal muscle"], "Rubber has very few mobile charges. Saline and muscle contain ions; copper has free electrons."]
      ]
    },
    {
      t: "DC & AC Circuits",
      sub: "Ohm's law, series and parallel resistance, capacitance, impedance, e-stim",
      lesson: [
        "<b>Current (I)</b> is the rate of charge flow, measured in amperes (1 A = 1 C/s). <b>Resistance (R)</b>, in ohms (&Omega;), opposes current. <b>Ohm's law</b> links them with voltage: <span class='formula'>V = I x R</span>. For a given voltage, higher resistance means less current; for a given resistance, more voltage drives more current. <b>Power</b>, the rate of energy delivery, is <span class='formula'>P = V x I = I<sup>2</sup>R</span>, in watts. The I<sup>2</sup>R term explains heating: doubling the current through the same resistance quadruples the heat produced, which is why high current density under a small electrode can burn skin.",
        "Resistors can be arranged two ways. In <b>series</b>, current has one path and resistances add: <span class='formula'>R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ...</span>. The same current flows through each, and voltage divides among them. In <b>parallel</b>, current splits among paths, and <span class='formula'>1/R<sub>total</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + ...</span>. Total parallel resistance is always less than the smallest branch. Each branch has the same voltage, and the lowest-resistance branch carries the most current. Body tissues behave like resistors in both arrangements: skin and subcutaneous fat are in series with deeper tissue, while muscle, nerve, and blood vessels lie side by side in parallel, so current preferentially travels through low-resistance tissues like muscle and nerve.",
        "Worked example: skin under each of two electrodes has 1,000 &Omega; resistance, and the deep tissue between them is 500 &Omega;. In series, R<sub>total</sub> = 1,000 + 500 + 1,000 = 2,500 &Omega;. If the stimulator drives 50 V, I = 50 / 2,500 = 0.02 A = 20 mA. Now consider two parallel deep pathways of 600 &Omega; and 300 &Omega;: 1/R = 1/600 + 1/300 = 1/600 + 2/600 = 3/600, so R = 200 &Omega;, less than either path. The 300 &Omega; path carries twice the current of the 600 &Omega; path.",
        "A <b>capacitor</b> stores charge on two conductors separated by an insulator. <b>Capacitance</b> (C, in farads) is <span class='formula'>C = Q / V</span>. A capacitor blocks steady direct current once charged but passes changing current. Cell membranes behave like capacitors: the lipid bilayer is the insulator between two conductive fluids. This is why very short pulses need more amplitude to reach threshold: the membrane needs time to charge. The relationship between pulse amplitude and duration needed to excite a nerve is the <b>strength-duration curve</b>; <b>rheobase</b> is the minimum amplitude with a long pulse, and <b>chronaxie</b> is the pulse duration needed at twice rheobase. Denervated muscle has a much longer chronaxie than innervated muscle.",
        "<b>Direct current (DC)</b> flows continuously in one direction; it is used in iontophoresis because a unidirectional current drives charged drug ions and causes chemical effects (acid under the anode, alkaline under the cathode). <b>Alternating current (AC)</b> reverses direction; household AC is 60 Hz in the US. Clinically, stimulators deliver <b>pulsed current</b>, either monophasic or biphasic. Biphasic pulses with balanced phases leave no net charge, avoiding skin irritation, which is why most TENS and NMES use them.",
        "<b>Impedance (Z)</b> is total opposition to AC, combining resistance and <b>capacitive reactance</b>. Capacitive reactance falls as frequency rises: <span class='formula'>X<sub>C</sub> = 1 / (2&pi;fC)</span>. Skin acts like a resistor and capacitor in parallel, so skin impedance falls at higher frequencies. That is the reasoning behind interferential current, which uses two medium-frequency carriers (around 4,000 Hz) to pass through skin with lower impedance, then interfere in deeper tissue to create a low-frequency beat (for example 4,000 and 4,100 Hz give a 100 Hz beat).",
        "Electrode size changes <b>current density</b> (current per unit area). A small electrode concentrates current, increasing sensation and burn risk; a large electrode spreads it. Placing electrodes closer together produces a superficial current path; spacing them farther apart allows deeper penetration. These are applications of Ohm's law and parallel paths, and they explain much of the art of e-stim setup."
      ],
      guide: [
        "<span class='formula'>V = IR</span>; <span class='formula'>P = VI = I<sup>2</sup>R</span>. Doubling current quadruples heat.",
        "<b>Series</b>: R adds; same current; voltage divides.",
        "<b>Parallel</b>: <span class='formula'>1/R = 1/R<sub>1</sub> + 1/R<sub>2</sub></span>; total &lt; smallest branch; most current in lowest R.",
        "<b>Capacitance</b> <span class='formula'>C = Q/V</span>; membranes act as capacitors. Blocks steady DC, passes changing current.",
        "<b>Rheobase</b>: minimum amplitude at long duration. <b>Chronaxie</b>: duration at 2x rheobase; longer in denervated muscle.",
        "<b>DC</b>: one direction (iontophoresis). <b>AC</b>: alternating. <b>Pulsed</b>: monophasic or biphasic.",
        "<b>Impedance</b> falls with frequency; interferential uses ~4,000 Hz carriers to make a beat frequency in tissue.",
        "Small electrode = high current density; electrodes farther apart = deeper current."
      ],
      terms: [
        ["Current", "The rate of flow of electric charge, measured in amperes."],
        ["Resistance", "Opposition to the flow of current, measured in ohms."],
        ["Ohm's law", "The relationship V = IR between voltage, current, and resistance."],
        ["Series circuit", "A circuit with one current path in which resistances add."],
        ["Parallel circuit", "A circuit with multiple current paths in which total resistance is less than any branch."],
        ["Capacitance", "The ability to store charge per unit voltage, measured in farads."],
        ["Impedance", "The total opposition to alternating current, combining resistance and reactance."],
        ["Current density", "The amount of current per unit area of conductor or electrode."],
        ["Rheobase", "The minimum current amplitude that produces a response with a long pulse duration."],
        ["Chronaxie", "The pulse duration needed to produce a response at twice the rheobase amplitude."],
        ["Biphasic pulse", "A pulse with two phases of opposite polarity, often balanced so there is no net charge."],
        ["Beat frequency", "The low frequency produced where two slightly different medium-frequency currents interfere."]
      ],
      assignment: {
        title: "E-stim parameter worksheet",
        task: "Model an NMES setup for quadriceps strengthening as a circuit (skin resistance under each electrode in series with deep tissue, plus two parallel deep paths). Calculate total resistance and current for a given voltage, then explain how changing electrode size, spacing, and skin prep would change current density and patient comfort.",
        deliverable: "A worksheet with a circuit diagram, two full calculations, and a parameter adjustment table."
      },
      gen: [],
      qs: [
        ["A stimulator delivers 40 V across tissue with 2,000 ohms resistance. What is the current?", ["20 mA", "80 mA", "50 mA", "2 mA"], "I = V / R = 40 / 2,000 = 0.02 A = 20 mA."],
        ["Three resistors of 100, 200, and 300 ohms are connected in series. What is the total resistance?", ["600 ohms", "55 ohms", "200 ohms", "6,000 ohms"], "Series resistances add: 100 + 200 + 300 = 600 ohms."],
        ["Two resistors of 60 ohms and 30 ohms are connected in parallel. What is the total resistance?", ["20 ohms", "90 ohms", "45 ohms", "30 ohms"], "1/R = 1/60 + 1/30 = 1/60 + 2/60 = 3/60, so R = 20 ohms, less than either branch."],
        ["Two equal 400-ohm resistors are connected in parallel. What is the total resistance?", ["200 ohms", "800 ohms", "400 ohms", "100 ohms"], "Two equal parallel resistors give half of one: 400 / 2 = 200 ohms."],
        ["Current through a fixed resistance is doubled. The power dissipated as heat:", ["Quadruples", "Doubles", "Stays the same", "Halves"], "P = I^2 R, so doubling I gives 2^2 = 4 times the heat."],
        ["A patient reports a burning sensation under one small electrode during NMES. What is the BEST adjustment?", ["Use a larger electrode to lower current density", "Use a smaller electrode to focus the current", "Increase the amplitude to override the sensation", "Remove the gel to increase skin resistance"], "A larger electrode spreads current over more area, lowering current density and burn risk. Check skin and electrode contact."],
        ["A PT wants the current to reach deeper muscle. Which electrode change is MOST appropriate?", ["Increase the distance between electrodes", "Place the electrodes closer together", "Use smaller electrodes placed side by side", "Increase the skin resistance with dry skin"], "Wider spacing lets current take deeper paths. Close spacing keeps the current superficial."],
        ["Why does interferential current use carrier frequencies around 4,000 Hz?", ["Skin impedance falls at higher frequencies", "Higher frequency increases skin resistance", "Nerves respond best to 4,000 Hz pulses", "It avoids producing any beat frequency"], "Capacitive reactance falls with frequency, so medium-frequency currents pass skin more comfortably and form a low-frequency beat in deeper tissue."],
        ["Two interferential currents of 4,000 Hz and 4,080 Hz intersect in tissue. What is the beat frequency?", ["80 Hz", "8,080 Hz", "4,040 Hz", "40 Hz"], "Beat frequency is the difference between the two: 4,080 - 4,000 = 80 Hz."],
        ["Which current type is used for iontophoresis?", ["Continuous direct current", "Symmetrical biphasic pulsed current", "High-frequency alternating current", "Burst-modulated alternating current"], "Iontophoresis requires unidirectional current to push charged ions consistently in one direction."],
        ["A muscle is denervated after a peripheral nerve injury. Compared with innervated muscle, its strength-duration curve will show:", ["A longer chronaxie, requiring longer pulse durations", "A shorter chronaxie, requiring shorter pulses", "No change in chronaxie", "A lower rheobase at all pulse durations"], "Denervated muscle must be stimulated directly, which needs much longer pulse durations, shifting the curve right."],
        ["Why do most TENS and NMES units use balanced biphasic pulses?", ["No net charge accumulates, reducing skin irritation", "They produce the strongest chemical effects under electrodes", "They allow drugs to be driven into tissue", "They carry current in one direction only"], "Balanced phases cancel net charge, avoiding the acid or alkaline reactions caused by DC."],
        ["In a parallel circuit of tissue pathways, which pathway carries the MOST current?", ["The one with the lowest resistance", "The one with the highest resistance", "All pathways carry equal current", "The one farthest from the electrodes"], "Each parallel branch has the same voltage; by Ohm's law the lowest-R branch carries the most current."],
        ["A capacitor stores 0.002 C of charge at 10 V. What is its capacitance?", ["200 microfarads", "20 farads", "0.02 farads", "5,000 farads"], "C = Q / V = 0.002 / 10 = 0.0002 F = 200 microfarads."],
        ["Skin under each of two electrodes is 1,500 ohms and the deep tissue is 1,000 ohms, all in series. With 60 V applied, what is the current?", ["15 mA", "60 mA", "24 mA", "40 mA"], "R total = 1,500 + 1,000 + 1,500 = 4,000 ohms. I = 60 / 4,000 = 0.015 A = 15 mA."]
      ]
    },
    {
      t: "Magnetism & Electromagnetic Induction",
      sub: "Magnetic fields, Faraday's law, MRI principle, shortwave diathermy",
      lesson: [
        "<b>Magnetic fields</b> are produced by moving charges. A bar magnet has north and south poles; like poles repel, unlike poles attract, and field lines run outside the magnet from north to south. Unlike electric charges, magnetic poles never occur alone; cutting a magnet in half gives two smaller magnets. Field strength is measured in <b>tesla (T)</b>. Earth's field is about 50 microtesla; clinical MRI scanners commonly use 1.5 T or 3 T, tens of thousands of times stronger.",
        "Any current produces a magnetic field around it. A straight wire produces circular field lines around the wire (right-hand rule: thumb along current, fingers curl in field direction). Coiling the wire into a <b>solenoid</b> concentrates the field inside, creating an electromagnet whose strength rises with current and the number of turns. A charge moving through a magnetic field feels a force perpendicular to both its velocity and the field, <span class='formula'>F = qvB sin&theta;</span>. This is the principle of electric motors and of steering electron beams.",
        "<b>Electromagnetic induction</b> is the reverse: a <b>changing</b> magnetic field induces a voltage and current in a nearby conductor. <b>Faraday's law</b> states that the induced voltage is proportional to the rate of change of magnetic flux. A steady magnet sitting next to a coil does nothing; moving it, or switching the current in a nearby coil on and off, induces current. <b>Lenz's law</b> says the induced current flows in a direction that opposes the change that produced it. Generators, transformers, and induction cooktops work this way.",
        "Induction in tissue is the basis of <b>shortwave diathermy (SWD)</b>. The FCC-assigned frequency most used is 27.12 MHz. In the <b>inductive</b> method, a coil in a drum applicator carries high-frequency alternating current, which creates a rapidly alternating magnetic field. That field induces circulating <b>eddy currents</b> in tissue, and those currents produce heat through resistance (I<sup>2</sup>R). Tissues with high electrolyte content and low resistance, such as muscle and blood, develop the largest eddy currents, so inductive SWD heats muscle more than fat. The <b>capacitive</b> method instead places tissue between two plates as part of an electric field and tends to heat superficial, high-resistance tissue such as fat. Because diathermy induces currents in any conductor, metal implants, pacemakers, and other electronic devices are contraindications, and therapists keep metal, moisture, and electronic devices out of the field.",
        "<b>MRI</b> uses magnetism without ionizing radiation. Hydrogen nuclei (protons) in water and fat behave like tiny magnets. In the strong static field, a slight majority align with it. A radiofrequency pulse at the protons' resonant (Larmor) frequency tips them out of alignment. When the pulse stops, protons relax back, and as they precess they induce a small signal in receiver coils by Faraday's law. Tissues relax at different rates: <b>T1-weighted</b> images show fat bright and fluid dark, giving good anatomic detail; <b>T2-weighted</b> images show fluid bright, highlighting edema, effusion, and many tears. Gradient coils that switch rapidly to localize the signal produce MRI's loud knocking noise.",
        "MRI safety follows directly from the physics. The static field pulls ferromagnetic objects with great force, turning oxygen tanks, wheelchairs, and gait belts with metal buckles into projectiles. The changing fields can induce current and heat in wires and implants, and can disrupt pacemakers and some neurostimulators unless labeled MR-conditional. PTs working in hospitals must follow MRI zone rules and never bring equipment into the scanner room unless it is labeled MR-safe.",
        "Worked example: a patient with a total knee arthroplasty asks for 'deep heat' to her thigh. Inductive SWD would induce eddy currents in the metal implant, concentrating heat and risking a burn. The physics points to a contraindication over the implant region, so the PT chooses an alternative such as a superficial agent, exercise to raise local blood flow, or ultrasound to a site away from the implant per evidence and precautions. Understanding induction prevents an injury."
      ],
      guide: [
        "Magnetic fields come from moving charges; poles always occur in pairs; unit is tesla (T).",
        "Current in a wire makes a circular field; a <b>solenoid</b> concentrates it (electromagnet).",
        "Moving charge in a field: <span class='formula'>F = qvB sin&theta;</span>, perpendicular to velocity and field.",
        "<b>Faraday</b>: a <i>changing</i> magnetic flux induces voltage. <b>Lenz</b>: induced current opposes the change.",
        "<b>Inductive SWD</b> (27.12 MHz): alternating magnetic field induces eddy currents; heats muscle and other low-resistance tissue.",
        "<b>Capacitive SWD</b>: tissue between plates; tends to heat fat and superficial tissue.",
        "Diathermy contraindications include metal implants, pacemakers, and electronic devices in the field.",
        "<b>MRI</b>: strong static field + RF pulse; protons relax and induce signal. T1: fat bright. T2: fluid bright. No ionizing radiation; ferromagnetic projectile hazard."
      ],
      terms: [
        ["Magnetic field", "The region around a magnet or moving charge in which magnetic forces act."],
        ["Tesla", "The SI unit of magnetic field strength."],
        ["Solenoid", "A coil of wire that produces a concentrated magnetic field when current flows."],
        ["Electromagnetic induction", "The generation of voltage in a conductor by a changing magnetic field."],
        ["Faraday's law", "The induced voltage in a circuit is proportional to the rate of change of magnetic flux."],
        ["Lenz's law", "An induced current flows in the direction that opposes the change that caused it."],
        ["Eddy currents", "Circulating currents induced in a conductor by a changing magnetic field."],
        ["Shortwave diathermy", "A deep-heating modality using high-frequency electromagnetic energy, commonly at 27.12 MHz."],
        ["Larmor frequency", "The resonant frequency at which protons precess in a magnetic field, used in MRI."],
        ["T1-weighted image", "An MRI sequence in which fat appears bright and fluid dark, useful for anatomy."],
        ["T2-weighted image", "An MRI sequence in which fluid appears bright, useful for showing edema and effusion."],
        ["Ferromagnetic", "Strongly attracted to a magnet, as with iron, which creates projectile risk near MRI."]
      ],
      assignment: {
        title: "Diathermy and MRI safety screen",
        task: "Write a pre-treatment screening form for shortwave diathermy and a companion MRI-zone checklist for an acute care PT. For each item (implants, pacemakers, metal jewelry, moisture, pregnancy, oxygen tanks, mobility equipment), explain the physical principle behind the hazard: induction, eddy current heating, or ferromagnetic attraction.",
        deliverable: "A two-part screening form with a physics rationale column."
      },
      gen: [],
      qs: [
        ["According to Faraday's law, a voltage is induced in a coil when:", ["The magnetic flux through the coil changes", "A strong magnet sits still beside the coil", "The coil is made of an insulator", "Direct current flows steadily in a nearby wire"], "Induction requires change in flux. A steady field or steady current induces nothing."],
        ["Inductive shortwave diathermy heats tissue MAINLY by:", ["Eddy currents induced by an alternating magnetic field", "Mechanical vibration of tissue molecules", "Conduction from a heated metal drum", "Ionizing radiation absorbed by water"], "The alternating magnetic field induces circulating currents that generate resistive heat."],
        ["Which tissue is heated MOST by inductive shortwave diathermy?", ["Muscle", "Subcutaneous fat", "Cortical bone", "Dry skin"], "Inductive SWD favors low-resistance, electrolyte-rich tissues where eddy currents are largest."],
        ["A patient with a cardiac pacemaker asks for diathermy to the low back. What is the MOST appropriate response?", ["Do not apply diathermy and choose another intervention", "Apply diathermy at a lower intensity", "Apply diathermy with a towel over the pacemaker", "Apply capacitive rather than inductive diathermy"], "Electromagnetic fields can induce current in and disrupt implanted electronic devices. Diathermy is contraindicated."],
        ["On an MRI of the knee, a joint effusion appears bright. The image is MOST likely:", ["T2-weighted", "T1-weighted", "A plain radiograph", "A CT without contrast"], "T2 sequences make fluid bright, highlighting effusion and edema."],
        ["Why is a standard steel oxygen tank prohibited in the MRI scanner room?", ["It can be pulled into the magnet as a projectile", "It blocks the radiofrequency pulse", "It emits ionizing radiation in the field", "It increases the patient's radiation dose"], "Ferromagnetic objects are strongly attracted by the static field. Only MR-safe equipment is allowed."],
        ["Which statement about MRI is correct?", ["It uses magnetic fields and radio waves, not ionizing radiation", "It uses low-dose X-rays to image soft tissue", "It produces images from gamma rays emitted by the patient", "It relies on ultrasound echoes from hydrogen atoms"], "MRI images proton relaxation signals. It carries no ionizing radiation dose."],
        ["A straight wire carries current upward. Using the right-hand rule, the magnetic field around it:", ["Forms circles around the wire", "Points straight up along the wire", "Points straight down along the wire", "Radiates outward like spokes"], "Thumb along current, fingers curl in the field direction, forming concentric circles."],
        ["Lenz's law states that an induced current:", ["Opposes the change in flux that produced it", "Always flows in the same direction as the original current", "Is proportional to resistance", "Occurs only in superconductors"], "The induced current creates a field resisting the change, consistent with conservation of energy."],
        ["What is the MOST common FCC-assigned frequency for therapeutic shortwave diathermy?", ["27.12 MHz", "1 MHz", "60 Hz", "2,450 Hz"], "27.12 MHz is the standard SWD frequency. 1 MHz is common for ultrasound; 60 Hz is household AC."],
        ["A patient with a metal plate in the forearm is referred for treatment of the lateral elbow. Why is inductive diathermy over the plate contraindicated?", ["Eddy currents concentrate in metal and can burn tissue", "Metal blocks all electromagnetic energy from tissue", "The plate becomes a permanent magnet", "Diathermy loosens screws by vibration"], "Metal is an excellent conductor, so induced currents and heat concentrate there."],
        ["Increasing the number of turns in a solenoid while keeping current constant will:", ["Increase the magnetic field inside", "Decrease the magnetic field inside", "Reverse the field direction", "Have no effect on field strength"], "Field strength inside a solenoid is proportional to turns per length and current."],
        ["Which MRI sequence BEST shows fat as bright and fluid as dark for anatomic detail?", ["T1-weighted", "T2-weighted", "Fluid-sensitive STIR", "Gradient echo for hemorrhage"], "T1 sequences show fat bright and fluid dark; STIR suppresses fat and highlights fluid."],
        ["A charged particle moves parallel to a magnetic field. The magnetic force on it is:", ["Zero", "Maximal", "Directed along its velocity", "Equal to qE"], "F = qvB sin theta, and sin 0 = 0. Maximum force occurs at 90 degrees."],
        ["Which statement BEST compares inductive and capacitive shortwave diathermy?", ["Inductive heats muscle more; capacitive heats fat more", "Inductive heats fat more; capacitive heats muscle more", "Both heat only bone", "Neither produces heat in tissue"], "Induction favors low-resistance tissues, while capacitive fields tend to heat superficial high-resistance tissue."]
      ]
    },
    {
      t: "Waves & Sound",
      sub: "Wave properties, Doppler, ultrasound physics: frequency, attenuation, absorption, reflection",
      lesson: [
        "A <b>wave</b> transfers energy without transferring matter. In <b>transverse</b> waves (light, a plucked string) the medium oscillates perpendicular to the direction of travel; in <b>longitudinal</b> waves (sound, ultrasound) particles oscillate parallel to travel, creating compressions and rarefactions. Every wave has a <b>wavelength (&lambda;)</b>, the distance between repeating points; a <b>frequency (f)</b>, cycles per second in hertz; an <b>amplitude</b>, related to energy; and a <b>speed (v)</b>. They are linked by <span class='formula'>v = f&lambda;</span>, or <span class='formula'>&lambda; = v / f</span>. The period is <span class='formula'>T = 1 / f</span>.",
        "Sound is a mechanical wave and needs a medium; it cannot travel through a vacuum. Its speed depends on the medium's stiffness and density: about 343 m/s in air, about 1,480 m/s in water, about 1,540 m/s as an average for soft tissue, and 3,000-4,000 m/s in bone. Human hearing spans roughly 20-20,000 Hz. <b>Ultrasound</b> is sound above 20,000 Hz. Therapeutic ultrasound commonly uses 1 MHz or 3 MHz; diagnostic imaging uses higher frequencies, typically about 2-15 MHz. Worked example: in soft tissue at 1 MHz, &lambda; = 1,540 / 1,000,000 = 0.00154 m = 1.54 mm. At 3 MHz, &lambda; = 1,540 / 3,000,000 = 0.51 mm. Shorter wavelengths give imaging better resolution.",
        "As ultrasound travels through tissue, its intensity decreases: <b>attenuation</b>. Attenuation has three parts: <b>absorption</b> (conversion of energy into heat, the therapeutic effect), <b>scattering</b> (redirection off small structures), and <b>reflection</b> at boundaries. Attenuation increases with frequency. At 3 MHz, energy is absorbed about three times faster than at 1 MHz, so 3 MHz is used for superficial tissue (roughly 1-2 cm, though texts vary) and 1 MHz for deeper tissue (roughly 2-5 cm). The <b>half-value depth</b> is the depth at which intensity falls to half. Tissues with high <b>collagen</b> and protein content, such as tendon, ligament, and joint capsule, absorb more than fat, which is why ultrasound is targeted at dense connective tissue.",
        "<b>Reflection</b> occurs at interfaces between materials with different <b>acoustic impedance</b> (density x speed of sound). The bigger the impedance mismatch, the more energy reflects. The air-skin interface reflects nearly all ultrasound, which is why a coupling medium such as gel is essential. At the soft tissue-bone interface, a large fraction reflects, and the reflected waves can overlap incoming waves to concentrate energy at the periosteum, which is why patients may feel a deep ache over bony prominences and why the head is moved continuously. Diagnostic ultrasound uses reflected echoes and their timing to build an image.",
        "Therapeutic ultrasound has <b>thermal</b> and <b>nonthermal</b> effects. Continuous mode at sufficient intensity and duration produces heating; pulsed mode at low duty cycle (for example 20%) mainly produces nonthermal effects such as <b>cavitation</b> (oscillation of small gas bubbles) and <b>acoustic streaming</b> (one-direction fluid movement along cell membranes). The <b>beam nonuniformity ratio (BNR)</b> compares peak intensity to average intensity; a lower BNR (ideally below about 5:1) means a more even beam and fewer hot spots. The <b>effective radiating area (ERA)</b> is the part of the transducer that actually emits sound; treatment area is usually limited to about two to four times the ERA.",
        "The <b>Doppler effect</b> is the change in observed frequency when source and observer move relative to each other. Approaching sources sound higher in pitch; receding sources sound lower. Doppler ultrasound uses this frequency shift to measure blood flow speed and direction; vascular studies for deep vein thrombosis and the handheld Doppler used for ankle-brachial index measurement both depend on it.",
        "Worked example: a PT plans ultrasound for chronic patellar tendinopathy, a superficial dense tissue. The tendon lies about 1 cm deep, so 3 MHz fits the target depth because energy is absorbed in superficial tissue. If the goal is heating, continuous mode is used at an intensity and duration selected to reach therapeutic temperature, with the transducer kept moving over an area about twice the ERA. If the patient reports a deep ache over the inferior patellar pole, the PT reduces intensity or moves the transducer faster, recognizing periosteal reflection. Note that clinical evidence for ultrasound in many conditions is limited; physics tells you how it works, and the evidence tells you whether to use it."
      ],
      guide: [
        "<span class='formula'>v = f&lambda;</span>; <span class='formula'>&lambda; = v/f</span>; <span class='formula'>T = 1/f</span>.",
        "Sound is longitudinal and needs a medium. Speed: air ~343 m/s; soft tissue ~1,540 m/s; bone faster.",
        "<b>Ultrasound</b> &gt; 20 kHz. Therapeutic 1 MHz (deeper) or 3 MHz (superficial). Diagnostic ~2-15 MHz.",
        "<b>Attenuation</b> = absorption + scattering + reflection; increases with frequency.",
        "High-collagen tissues (tendon, ligament, capsule) absorb more; fat absorbs little.",
        "<b>Acoustic impedance</b> mismatch causes reflection; air reflects almost all, so gel is required. Bone interface: periosteal ache.",
        "Continuous = thermal; pulsed (low duty cycle) = mainly nonthermal (cavitation, acoustic streaming). Low <b>BNR</b> is better.",
        "<b>Doppler</b>: approaching = higher frequency; receding = lower. Used to assess blood flow."
      ],
      terms: [
        ["Wavelength", "The distance between two corresponding points on consecutive cycles of a wave."],
        ["Frequency", "The number of wave cycles per second, measured in hertz."],
        ["Longitudinal wave", "A wave in which particles oscillate parallel to the direction of travel, as in sound."],
        ["Ultrasound", "Sound waves with frequencies above the human hearing range of about 20,000 Hz."],
        ["Attenuation", "The decrease in wave intensity as it travels through a medium."],
        ["Absorption", "Conversion of wave energy into heat within the tissue."],
        ["Acoustic impedance", "A material's resistance to sound transmission, equal to density times the speed of sound."],
        ["Half-value depth", "The tissue depth at which ultrasound intensity has fallen to half its surface value."],
        ["Cavitation", "Formation and oscillation of small gas bubbles in tissue fluids exposed to ultrasound."],
        ["Acoustic streaming", "Steady unidirectional flow of fluid along membranes driven by ultrasound pressure."],
        ["Beam nonuniformity ratio", "The ratio of peak to average intensity in an ultrasound beam; lower is more uniform."],
        ["Doppler effect", "The change in observed frequency caused by relative motion between source and observer."]
      ],
      assignment: {
        title: "Ultrasound parameter decision guide",
        task: "Create a decision guide for therapeutic ultrasound that walks through target depth, frequency, mode (continuous or pulsed), duty cycle, intensity, treatment area relative to ERA, and duration. Include two worked wavelength calculations and three sample cases (superficial tendon, deep hip structure, acute inflammation), and summarize the current evidence quality for each case.",
        deliverable: "A one-page flowchart plus a three-case table with chosen parameters and rationale."
      },
      gen: [],
      qs: [
        ["What is the wavelength of 1 MHz ultrasound in soft tissue (speed 1,540 m/s)?", ["1.54 mm", "0.51 mm", "15.4 mm", "0.154 mm"], "Wavelength = v / f = 1,540 / 1,000,000 = 0.00154 m = 1.54 mm."],
        ["What is the wavelength of 3 MHz ultrasound in soft tissue (1,540 m/s)?", ["About 0.51 mm", "About 4.6 mm", "About 1.54 mm", "About 5.1 mm"], "1,540 / 3,000,000 = 0.000513 m, about 0.51 mm. Tripling frequency divides wavelength by three."],
        ["A sound wave in air (343 m/s) has a frequency of 686 Hz. What is its wavelength?", ["0.5 m", "2 m", "1.5 m", "0.25 m"], "Wavelength = 343 / 686 = 0.5 m."],
        ["A PT wants to heat the deep hip joint capsule in a patient with moderate soft tissue thickness. Which ultrasound frequency is MOST appropriate?", ["1 MHz", "3 MHz", "5 MHz", "10 MHz"], "Lower frequency attenuates less and penetrates deeper. 3 MHz is absorbed superficially."],
        ["Why must a coupling gel be used during ultrasound?", ["Air reflects nearly all ultrasound at the skin", "Gel increases the frequency of the beam", "Gel converts sound into heat before it enters", "Gel blocks cavitation in the tissue"], "The impedance mismatch between air and skin reflects almost all energy; gel removes the air gap."],
        ["During 1 MHz continuous ultrasound over the lateral epicondyle, a patient reports a deep ache. The MOST likely cause is:", ["Periosteal heating from reflection at the bone interface", "Cavitation within the subcutaneous fat", "Insufficient coupling gel causing skin burns", "Acoustic streaming in the joint capsule"], "Reflection at the soft tissue-bone interface concentrates energy at the periosteum. Reduce intensity or move the transducer faster."],
        ["Which tissue absorbs therapeutic ultrasound MOST readily?", ["Tendon", "Subcutaneous fat", "Blood", "Water"], "High collagen content increases absorption. Fat and fluids absorb relatively little."],
        ["Which ultrasound setting is MOST appropriate when the goal is nonthermal effects in a subacute injury?", ["Pulsed mode at a 20 percent duty cycle", "Continuous mode at high intensity", "Continuous mode at 3 MHz for 15 minutes", "Pulsed mode at a 100 percent duty cycle"], "A low duty cycle limits heating while preserving nonthermal effects. 100 percent duty cycle is effectively continuous."],
        ["Two transducers have BNRs of 3:1 and 7:1. Which statement is correct?", ["The 3:1 transducer gives a more uniform beam", "The 7:1 transducer gives a more uniform beam", "BNR does not affect hot-spot risk", "Both are equally safe at any intensity"], "Lower BNR means peak intensity is closer to average, reducing hot spots."],
        ["An ambulance approaches a patient on the sidewalk. Compared with the true siren frequency, the patient hears:", ["A higher frequency", "A lower frequency", "The same frequency", "No sound until it passes"], "The Doppler effect raises observed frequency as a source approaches and lowers it as it recedes."],
        ["Diagnostic vascular ultrasound uses the Doppler shift to measure:", ["The speed and direction of blood flow", "The temperature of the vessel wall", "The ionizing dose to the vessel", "The electrical activity of the vessel"], "Moving red cells shift the reflected frequency, revealing flow velocity and direction, as in DVT studies."],
        ["Why does 3 MHz ultrasound affect shallower tissue than 1 MHz?", ["Attenuation increases with frequency, so energy is absorbed sooner", "Higher frequency waves travel faster through tissue", "3 MHz waves cannot pass through skin", "3 MHz waves reflect completely at fat"], "Higher-frequency energy is absorbed more quickly near the surface."],
        ["Sound cannot travel through a vacuum because it is a:", ["Mechanical wave that needs a medium", "Transverse electromagnetic wave", "Wave with no wavelength", "Form of ionizing radiation"], "Sound requires particles to compress and rarefy. Light, an electromagnetic wave, travels through a vacuum."],
        ["The effective radiating area of a transducer is 5 cm squared. Which treatment area is MOST appropriate?", ["About 10-20 cm squared", "About 2-3 cm squared", "About 100 cm squared", "Any size if intensity is increased"], "Treatment area is usually about two to four times the ERA to deliver adequate energy per area."],
        ["A wave has a frequency of 50 Hz. What is its period?", ["0.02 s", "50 s", "0.5 s", "0.2 s"], "T = 1 / f = 1 / 50 = 0.02 s."]
      ]
    },
    {
      t: "Light & Optics",
      sub: "Electromagnetic spectrum, reflection, refraction, lenses, laser properties",
      lesson: [
        "Light is an <b>electromagnetic (EM) wave</b>: oscillating electric and magnetic fields that travel through a vacuum at about 3 x 10<sup>8</sup> m/s. The EM spectrum runs from long-wavelength, low-energy radio waves through microwaves, infrared, visible light (about 400-700 nm, violet to red), ultraviolet, X-rays, and gamma rays. The same wave equation applies: <span class='formula'>c = f&lambda;</span>. Light also behaves as particles called photons, each with energy <span class='formula'>E = hf</span>, so higher frequency (shorter wavelength) means more energy per photon. This is why UV can damage DNA while infrared mostly warms tissue.",
        "<b>Reflection</b> follows a simple rule: the angle of incidence equals the angle of reflection, both measured from the normal (a line perpendicular to the surface). Smooth surfaces give mirror-like (specular) reflection; rough surfaces scatter light diffusely. In laser therapy, reflection from the skin wastes energy and can reach the eyes, which is one reason the probe is held in contact and perpendicular to the skin.",
        "<b>Refraction</b> is bending as light passes from one medium to another with a different speed. The <b>index of refraction</b> is <span class='formula'>n = c / v</span>; n is about 1.00 for air, 1.33 for water, and about 1.4 for many tissues. <b>Snell's law</b> describes the bending: <span class='formula'>n<sub>1</sub> sin&theta;<sub>1</sub> = n<sub>2</sub> sin&theta;<sub>2</sub></span>. Light entering a denser medium (higher n) slows and bends toward the normal; leaving it, light bends away. When light travels from higher to lower n at an angle beyond the critical angle, it reflects completely: <b>total internal reflection</b>, the principle of fiber optics used in endoscopes and laser delivery fibers.",
        "<b>Lenses</b> use refraction to focus light. A <b>converging (convex)</b> lens brings parallel rays to a focal point; a <b>diverging (concave)</b> lens spreads them. The thin lens equation is <span class='formula'>1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub></span>, and lens power in diopters is <span class='formula'>P = 1/f</span> with f in meters. A lens with f = 0.5 m has a power of +2 D. The eye focuses with the cornea and lens. In <b>myopia</b> (nearsightedness), the image forms in front of the retina and is corrected with a diverging lens; in <b>hyperopia</b>, it forms behind and is corrected with a converging lens; <b>presbyopia</b> is age-related loss of lens accommodation. These matter in balance and fall-risk assessment, because poor vision and multifocal lenses contribute to falls in older adults.",
        "A <b>laser</b> (light amplification by stimulated emission of radiation) produces light with three distinctive properties. It is <b>monochromatic</b> (one wavelength), <b>coherent</b> (waves in phase in time and space), and <b>collimated</b> (a parallel, minimally diverging beam). Therapeutic lasers used in photobiomodulation, also called low-level laser therapy, typically use red to near-infrared wavelengths of roughly 600-1,000 nm, often delivered as Class 3B or Class 4 devices. Longer red and near-infrared wavelengths penetrate tissue more deeply than shorter visible wavelengths because they are absorbed less by melanin and hemoglobin. <b>Light-emitting diodes (LEDs)</b> are also used; they are not coherent or collimated.",
        "Dose matters. <b>Power</b> is in watts, <b>energy</b> is power x time in joules, and <b>energy density (fluence)</b> is joules per square centimeter. Worked example: a 0.5 W laser applied for 20 seconds delivers 0.5 x 20 = 10 J; over a 2 cm<sup>2</sup> spot, the energy density is 10 / 2 = 5 J/cm<sup>2</sup>. Recommended doses vary by condition and source, so the PT follows current guidance and manufacturer settings rather than one fixed number.",
        "Laser safety centers on the eyes. A collimated beam does not spread, so even a reflected beam can concentrate on the retina. Both patient and clinician wear wavelength-specific protective goggles for Class 3B and 4 devices, and the beam is never aimed at the eyes. Precautions and contraindications include treatment over the eyes, over known or suspected malignancy, over the thyroid, over the pregnant abdomen, and over areas recently injected with steroids or with photosensitizing medications, with details varying by guideline."
      ],
      guide: [
        "EM spectrum: radio, microwave, infrared, visible (400-700 nm), UV, X-ray, gamma. <span class='formula'>c = f&lambda;</span>; <span class='formula'>E = hf</span>.",
        "<b>Reflection</b>: angle in = angle out (from the normal).",
        "<b>Refraction</b>: <span class='formula'>n = c/v</span>; <span class='formula'>n<sub>1</sub>sin&theta;<sub>1</sub> = n<sub>2</sub>sin&theta;<sub>2</sub></span>; into denser medium bends toward the normal.",
        "<b>Total internal reflection</b> beyond the critical angle; basis of fiber optics.",
        "<b>Lenses</b>: <span class='formula'>1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub></span>; power (D) = 1/f(m). Myopia: diverging lens; hyperopia: converging.",
        "<b>Laser</b>: monochromatic, coherent, collimated. Photobiomodulation ~600-1,000 nm; longer wavelength penetrates deeper.",
        "Dose: energy (J) = W x s; energy density = J/cm<sup>2</sup>.",
        "Safety: wavelength-specific goggles for patient and clinician; avoid eyes, malignancy, thyroid, pregnant abdomen."
      ],
      terms: [
        ["Electromagnetic spectrum", "The full range of electromagnetic waves ordered by wavelength and frequency."],
        ["Photon", "A discrete packet of electromagnetic energy with energy proportional to its frequency."],
        ["Index of refraction", "The ratio of the speed of light in a vacuum to its speed in a medium."],
        ["Refraction", "The bending of a wave as it passes between media with different wave speeds."],
        ["Snell's law", "The relationship n1 sin theta1 = n2 sin theta2 describing refraction at a boundary."],
        ["Total internal reflection", "Complete reflection of light inside a denser medium when it strikes the boundary beyond the critical angle."],
        ["Focal length", "The distance from a lens to the point where parallel rays converge or appear to diverge."],
        ["Diopter", "The unit of lens power, equal to the reciprocal of focal length in meters."],
        ["Monochromatic", "Consisting of a single wavelength of light."],
        ["Coherence", "The property of light waves being in phase with each other in time and space."],
        ["Collimation", "The property of a light beam having parallel rays with minimal divergence."],
        ["Energy density", "The energy delivered per unit area of tissue, expressed in joules per square centimeter."]
      ],
      assignment: {
        title: "Photobiomodulation dosing and safety sheet",
        task: "Design a laser therapy reference sheet. Explain how monochromaticity, coherence, and collimation differ from ordinary light, show three dose calculations converting power and time to joules and J/cm2, and list contraindications and precautions with a short physics or physiology reason for each.",
        deliverable: "A one-page reference sheet with a calculation box and a safety checklist."
      },
      gen: [],
      qs: [
        ["A 0.2 W laser is applied for 30 seconds to one point. How much energy is delivered?", ["6 J", "0.6 J", "150 J", "60 J"], "Energy = power x time = 0.2 W x 30 s = 6 J."],
        ["A laser delivers 12 J over a 4 cm squared area. What is the energy density?", ["3 J/cm2", "48 J/cm2", "16 J/cm2", "0.33 J/cm2"], "Energy density = 12 / 4 = 3 J/cm2."],
        ["Which property describes laser light waves being in phase with each other?", ["Coherence", "Collimation", "Monochromaticity", "Polarization"], "Coherence means waves are in step. Collimation describes a parallel beam; monochromatic means one wavelength."],
        ["Why do red and near-infrared wavelengths penetrate tissue more deeply than blue light?", ["They are absorbed less by melanin and hemoglobin", "They carry more energy per photon than blue light", "They are not affected by tissue at all", "They travel faster than blue light in tissue"], "Longer wavelengths have less superficial absorption. Blue photons have more energy, not less."],
        ["Light passes from air (n = 1.0) into water (n = 1.33). It will:", ["Slow down and bend toward the normal", "Speed up and bend away from the normal", "Slow down and bend away from the normal", "Travel at the same speed without bending"], "Entering a medium with higher n, light slows and bends toward the normal."],
        ["A converging lens has a focal length of 0.25 m. What is its power?", ["+4 diopters", "+0.25 diopters", "-4 diopters", "+25 diopters"], "P = 1 / f = 1 / 0.25 = +4 D. Converging lenses have positive power."],
        ["A patient's prescription uses diverging (negative) lenses. The patient MOST likely has:", ["Myopia", "Hyperopia", "Presbyopia only", "Normal vision"], "Myopia focuses images in front of the retina; diverging lenses push the focal point back."],
        ["During photobiomodulation with a Class 3B laser, what is the MOST important safety measure?", ["Wavelength-specific goggles for patient and clinician", "Placing a towel between probe and skin", "Using the lowest possible frequency", "Keeping the probe 30 cm from the skin"], "The collimated beam can damage the retina even after reflection. Matched goggles protect both people."],
        ["Total internal reflection, used in fiber-optic endoscopes, occurs when light:", ["Travels from higher to lower n beyond the critical angle", "Travels from lower to higher n at any angle", "Strikes a rough surface and scatters", "Passes through a converging lens"], "Beyond the critical angle, all light reflects back into the denser medium, keeping it inside the fiber."],
        ["Light reflects off a smooth surface at an angle of incidence of 35 degrees. The angle of reflection is:", ["35 degrees", "55 degrees", "70 degrees", "145 degrees"], "The law of reflection: angle of incidence equals angle of reflection, measured from the normal."],
        ["Which form of electromagnetic radiation has the HIGHEST energy per photon?", ["Gamma rays", "Infrared", "Visible red light", "Microwaves"], "E = hf; gamma rays have the highest frequency and energy."],
        ["Which statement BEST distinguishes an LED from a laser?", ["LED light is not coherent or collimated", "LED light is ionizing radiation", "LEDs emit only ultraviolet wavelengths", "LEDs cannot emit visible light"], "LEDs emit a narrow wavelength band but the beam spreads and is not in phase."],
        ["An older adult with new progressive bifocal glasses reports missing steps on stairs. The BEST physics-based explanation is that:", ["The lower lens segment blurs the view of the step edge at distance", "Bifocals increase the speed of light to the retina", "Bifocals cause total internal reflection in the eye", "Bifocals reduce the number of photons reaching the eye"], "Looking down through the near-vision segment blurs the steps, increasing fall risk. Single-vision distance lenses for walking outdoors can help."],
        ["An object is 0.3 m from a converging lens with a focal length of 0.2 m. Where does the image form?", ["0.6 m from the lens", "0.12 m from the lens", "0.5 m from the lens", "0.1 m from the lens"], "1/di = 1/0.2 - 1/0.3 = 5 - 3.33 = 1.67, so di = 0.6 m."],
        ["What is the frequency of light with a wavelength of 600 nm (c = 3 x 10^8 m/s)?", ["5 x 10^14 Hz", "1.8 x 10^17 Hz", "2 x 10^-15 Hz", "5 x 10^11 Hz"], "f = c / wavelength = 3 x 10^8 / 6 x 10^-7 = 5 x 10^14 Hz."]
      ]
    },
    {
      t: "Heat, Thermodynamics & Radiation",
      sub: "Heat transfer in thermal modalities, specific heat, ionizing vs non-ionizing radiation, X-ray and CT",
      lesson: [
        "<b>Temperature</b> measures the average kinetic energy of particles; <b>heat</b> is energy transferred because of a temperature difference, always from hotter to colder. The <b>first law of thermodynamics</b> says energy is conserved: heat added to a system increases its internal energy or does work. The <b>second law</b> says heat spontaneously flows from hot to cold, and every real energy conversion loses some energy as heat. Muscle is only about 20-25% efficient at converting chemical energy into mechanical work; the rest becomes heat, which is why exercise raises body temperature.",
        "<b>Specific heat (c)</b> is the energy needed to raise 1 g of a substance by 1&deg;C. The heat equation is <span class='formula'>Q = m c &Delta;T</span>. Water's specific heat is high (about 4.18 J/g&deg;C, or 1 cal/g&deg;C), which makes water an excellent heat carrier in hydrocollator packs and whirlpools and buffers body temperature. Paraffin has a low specific heat (about 2.7 J/g&deg;C, values vary), so at the same temperature it transfers heat more slowly and feels less hot than water at that temperature; that is why paraffin at around 52-54&deg;C can be tolerated. <b>Thermal conductivity</b> is how easily a material conducts heat: metal conducts quickly, fat and air poorly. Fat insulates, limiting the depth of superficial heating and cooling.",
        "Heat moves four ways in rehab. <b>Conduction</b>: transfer by direct contact (hot packs, cold packs, paraffin, ice massage). <b>Convection</b>: transfer by a moving fluid or air passing over the body (whirlpool, fluidotherapy, a fan). <b>Radiation</b>: transfer by electromagnetic waves without a medium (infrared lamps; the body also loses much of its resting heat by radiating infrared). <b>Conversion</b>: one form of energy turned into heat within the tissue (ultrasound converts mechanical energy; diathermy converts electromagnetic energy). <b>Evaporation</b> is also a heat-loss mechanism and is how vapocoolant sprays and sweat cool.",
        "Worked example: 500 g of water in a hydrocollator pack cools from 70&deg;C to 45&deg;C. Q = m c &Delta;T = 500 x 4.18 x 25 = 52,250 J, about 52 kJ released, part of it into the patient's tissue. This large heat reserve is why toweling layers (often 6-8 layers, depending on the cover) are used to prevent burns, and why the patient must not lie on top of the pack, where body weight compresses the towels and reduces insulation. Superficial heat raises skin temperature most, with effective heating typically limited to about 1-2 cm depth; deep heating requires conversion agents.",
        "<b>Radiation</b> in the physics sense means energy emitted as waves or particles. <b>Non-ionizing</b> radiation, including radio waves, microwaves, infrared, visible light, and most ultraviolet, lacks enough photon energy to remove electrons from atoms; its main tissue effect is heating, though UV can cause sunburn and skin damage. <b>Ionizing</b> radiation, including high-energy UV in the extreme range, X-rays, and gamma rays, has enough energy to remove electrons and break chemical bonds, including DNA. Effects are cumulative, and protection follows <b>ALARA</b> (as low as reasonably achievable) using time, distance, and shielding.",
        "<b>X-ray</b> imaging sends a beam through the body. Dense tissue absorbs more X-rays: bone and metal appear white (radiopaque), air appears black (radiolucent), and soft tissue and fat are shades of gray. Plain films show bone well but soft tissue poorly. <b>Computed tomography (CT)</b> rotates the X-ray source around the patient and reconstructs cross-sectional slices, showing bone in fine detail and soft tissue better than plain films, but with a higher radiation dose than a single plain radiograph. CT is a first-line study in acute head trauma to detect bleeding, while MRI and ultrasound, which use no ionizing radiation, often better show soft tissue.",
        "Clinical decision example: a patient with a recent ankle sprain meets Ottawa ankle rule criteria for imaging. The PT refers for radiographs, knowing X-rays will show a fracture but not ligament grade. If a stress fracture is suspected early with negative X-rays, MRI is more sensitive and avoids ionizing radiation. Understanding the physics of each modality helps a PT choose the right referral and read the report."
      ],
      guide: [
        "<b>Heat</b> flows hot to cold. 1st law: energy conserved. 2nd law: conversions lose heat. Muscle ~20-25% efficient.",
        "<span class='formula'>Q = mc&Delta;T</span>. Water c &asymp; 4.18 J/g&deg;C (high); paraffin lower, so tolerated at higher temperature.",
        "<b>Conduction</b>: hot/cold packs, paraffin, ice. <b>Convection</b>: whirlpool, fluidotherapy. <b>Radiation</b>: infrared lamp. <b>Conversion</b>: ultrasound, diathermy.",
        "Fat is an insulator; superficial agents heat about 1-2 cm deep.",
        "Hot pack safety: adequate towel layers; patient should not lie on the pack.",
        "<b>Non-ionizing</b>: radio, microwave, IR, visible, most UV. <b>Ionizing</b>: X-ray, gamma; breaks bonds and DNA.",
        "<b>ALARA</b>: time, distance (inverse square), shielding.",
        "X-ray: bone white, air black. CT: cross-sections, more dose. MRI/US: no ionizing radiation, better soft tissue."
      ],
      terms: [
        ["Specific heat", "The energy needed to raise the temperature of 1 gram of a substance by 1 degree Celsius."],
        ["Thermal conductivity", "A material's ability to conduct heat."],
        ["Conduction", "Heat transfer through direct contact between materials at different temperatures."],
        ["Convection", "Heat transfer by movement of a fluid or gas across a surface."],
        ["Radiation (thermal)", "Heat transfer by electromagnetic waves without a medium."],
        ["Conversion", "Transformation of a non-thermal form of energy into heat within tissue."],
        ["First law of thermodynamics", "Energy cannot be created or destroyed, only transferred or converted."],
        ["Ionizing radiation", "Radiation with enough energy to remove electrons from atoms and break chemical bonds."],
        ["Non-ionizing radiation", "Radiation without enough energy to ionize atoms, such as radio waves, infrared, and visible light."],
        ["ALARA", "The radiation safety principle of keeping exposure as low as reasonably achievable."],
        ["Radiopaque", "Absorbing X-rays strongly and appearing white on an image, like bone or metal."],
        ["Computed tomography", "An imaging method that uses rotating X-ray beams to reconstruct cross-sectional images."]
      ],
      assignment: {
        title: "Thermal agent comparison chart",
        task: "Build a comparison chart of hot pack, cold pack, paraffin, whirlpool, fluidotherapy, infrared lamp, ultrasound, and shortwave diathermy. For each, list the heat-transfer mechanism, approximate depth of effect, key safety precautions, and one specific-heat or heat-transfer calculation or explanation that justifies a safety step.",
        deliverable: "A one-page comparison table with eight rows and a short calculation appendix."
      },
      gen: [],
      qs: [
        ["How much heat is needed to raise 200 g of water from 20 C to 40 C? (c = 4.18 J/g C)", ["16,720 J", "8,360 J", "836 J", "33,440 J"], "Q = m c delta T = 200 x 4.18 x 20 = 16,720 J."],
        ["A whirlpool transfers heat to the patient's limb MAINLY by:", ["Convection", "Conduction alone", "Conversion", "Radiation"], "Moving water carries heat across the skin, which is convection. A still bath would rely more on conduction."],
        ["Therapeutic ultrasound heats tissue by which mechanism?", ["Conversion", "Conduction", "Convection", "Evaporation"], "Mechanical sound energy is converted into heat within the tissue."],
        ["Why can a patient tolerate paraffin at about 53 C but not water at the same temperature?", ["Paraffin has a lower specific heat and conductivity than water", "Paraffin has a higher specific heat than water", "Paraffin transfers heat by radiation instead", "Paraffin cools to room temperature instantly"], "Paraffin stores and conducts less heat per degree, so it transfers heat more slowly to the skin."],
        ["A patient asks to lie supine directly on top of a hot pack. What is the BEST response?", ["Position the pack on top of the patient instead to avoid compressing the towels", "Allow it if two extra towels are added", "Allow it for 20 minutes without checks", "Use a hotter pack for a shorter time"], "Body weight compresses insulating layers and impairs circulation under the pack, increasing burn risk."],
        ["Which type of radiation can break chemical bonds in DNA?", ["X-rays", "Infrared", "Microwaves", "Radio waves"], "X-rays are ionizing. Infrared, microwaves, and radio waves are non-ionizing and mainly cause heating."],
        ["On a plain radiograph, a fractured tibia shows a white cortex and a dark line at the fracture. The white cortex appears that way because bone:", ["Absorbs X-rays strongly and is radiopaque", "Emits its own X-rays", "Reflects X-rays back to the source", "Is transparent to X-rays"], "Dense mineralized bone absorbs more X-rays, so fewer reach the detector and it appears white."],
        ["A patient with suspected acute intracranial bleeding after a fall is MOST likely to receive which first imaging study?", ["Non-contrast CT of the head", "Plain skull radiograph", "Diagnostic ultrasound of the head", "Bone scan"], "CT is fast and sensitive for acute hemorrhage. Plain films show skull fractures but not brain bleeding."],
        ["Which statement BEST explains why superficial heat has limited depth?", ["Subcutaneous fat is a poor conductor of heat", "Skin reflects most conductive heat", "Heat cannot flow from hot to cold tissue", "Blood flow carries heat deeper"], "Fat insulates deeper tissue, and blood flow carries heat away, limiting depth to about 1-2 cm."],
        ["An infrared lamp warms the skin MAINLY by:", ["Radiation", "Conduction", "Convection", "Conversion of sound"], "Infrared lamps emit electromagnetic waves absorbed by the skin without contact."],
        ["Which radiation safety principle uses the inverse square law?", ["Increasing distance from the source", "Reducing exposure time", "Using lead shielding", "Using MRI instead of X-ray"], "Exposure falls with the square of distance, so stepping back sharply reduces dose."],
        ["During a 30-minute run, a runner's muscles convert chemical energy to mechanical work. The MOST accurate statement is that:", ["Most of the energy is released as heat", "All energy becomes mechanical work", "Energy is destroyed during contraction", "Heat flows from the cooler air into the body"], "Muscle is only about 20-25 percent efficient; the rest becomes heat, raising core temperature."],
        ["A 400 g cold pack absorbs heat and warms by 15 C. If its specific heat is 3.5 J/g C, how much heat did it absorb?", ["21,000 J", "6,000 J", "1,400 J", "5,250 J"], "Q = 400 x 3.5 x 15 = 21,000 J."],
        ["Compared with a single plain radiograph, CT generally:", ["Shows cross-sectional detail with a higher radiation dose", "Uses no ionizing radiation at all", "Shows less detail of bone", "Uses magnetic fields to form images"], "CT reconstructs slices from many X-ray projections, improving detail but increasing dose."],
        ["A vapocoolant spray cools the skin mainly by:", ["Evaporation", "Conduction from ice crystals", "Convection from a fan", "Conversion of electrical energy"], "The liquid absorbs heat as it evaporates rapidly from the skin, cooling it."]
      ]
    }
  ]
});
