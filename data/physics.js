(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "physics",
  track: "prereq",
  order: 5,
  code: "PRE 121",
  title: "Physics I",
  credits: 4,
  desc: "Algebra-based mechanics applied to the body: vectors, Newton's laws, torque and levers, work-energy-power-momentum, fluids, and the stress-strain behavior of tissue. PTs use these principles every day to reason about joint loading, exercise resistance, aquatic therapy, and tissue response to stretch and load. First semester of the physics sequence; electricity, waves, optics, heat, and imaging follow in Physics II.",
  objectives: [
    "Resolve forces into components and apply Newton's three laws to human movement",
    "Calculate torque and solve static equilibrium problems for joints modeled as levers",
    "Compute work, power, kinetic and potential energy, momentum, and impulse in exercise scenarios",
    "Apply pressure, Pascal's principle, and buoyancy to edema management and aquatic therapy",
    "Calculate stress, strain, and stiffness and interpret the stress-strain curve of tendon, ligament, and bone",
    "Explain viscoelastic behaviors (creep, stress relaxation, hysteresis) and apply them to stretching and loading decisions",
    "Use mechanical reasoning to modify exercise difficulty and joint load without changing external weight"
  ],
  references: [
    "Giancoli DC. Physics: Principles with Applications. Pearson.",
    "Serway RA, Vuille C. College Physics. Cengage.",
    "Neumann DA. Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation. Elsevier.",
    "Levangie PK, Norkin CC, Lewek MD. Joint Structure and Function: A Comprehensive Analysis. F.A. Davis.",
    "Nordin M, Frankel VH. Basic Biomechanics of the Musculoskeletal System. Wolters Kluwer."
  ],
  units: [
    {
      t: "Vectors, Forces & Newton's Laws",
      sub: "Scalars vs vectors, force components, inertia, F = ma, action-reaction, friction",
      guide: [
        "<b>Scalar vs vector</b>: scalars have magnitude only (mass, speed, distance, temperature); vectors have magnitude and direction (force, weight, velocity, acceleration, displacement).",
        "<b>Resolving a force</b>: a force F at angle θ from horizontal has components <span class='formula'>Fx = F cos θ</span> and <span class='formula'>Fy = F sin θ</span>. Vectors add tip-to-tail; perpendicular components combine by the Pythagorean theorem.",
        "<b>Newton's 1st law (inertia)</b>: an object stays at rest or in uniform motion unless acted on by a net external force. More mass = more inertia.",
        "<b>Newton's 2nd law</b>: <span class='formula'>F = m × a</span> (N = kg × m/s²). Weight is a force: <span class='formula'>W = m × g</span>, g ≈ 9.8 m/s².",
        "<b>Newton's 3rd law</b>: every action has an equal and opposite reaction. Ground reaction force (GRF) during gait and jumping is the classic clinical example.",
        "<b>Friction</b>: <span class='formula'>f = μ × N</span>. Static friction (before sliding) is greater than kinetic friction (during sliding), which is why starting a slide takes more force than keeping it going.",
        "<b>Center of mass and stability</b>: in anatomical position the COM sits just anterior to S2. Stability increases with a wider base of support, lower COM, and a line of gravity centered within the base."
      ],
      assignment: {
        title: "Force diagram of a sit-to-stand",
        task: "Draw a free-body diagram of a client at the moment of seat-off during sit-to-stand. Label body weight, ground reaction force, and the direction of acceleration, and identify where each of Newton's three laws shows up. Then explain how widening the stance and moving the feet back changes stability and effort.",
        deliverable: "One-page labeled free-body diagram with a 150-word explanation."
      },
      gen: [],
      qs: [
        ["Which of the following is a vector quantity?", ["Velocity", "Mass", "Speed", "Temperature"], "Velocity has both magnitude and direction. Speed is the scalar magnitude of velocity, and mass and temperature have no direction."],
        ["A 70 kg client accelerates forward at 2 m/s² during a sprint start. What net horizontal force is required?", ["140 N", "35 N", "72 N", "686 N"], "F = m × a = 70 kg × 2 m/s² = 140 N. 686 N is the client's weight (70 × 9.8), not the accelerating force."],
        ["What is the approximate weight of a 50 kg person on Earth?", ["490 N", "50 N", "5 N", "4900 N"], "Weight = m × g = 50 × 9.8 ≈ 490 N. Mass (kg) and weight (N) are different quantities; weight is a force."],
        ["A clinician pulls a cable with 100 N of force at 60° above horizontal. What is the horizontal component of that force?", ["50 N", "87 N", "100 N", "60 N"], "Fx = F cos θ = 100 × cos 60° = 100 × 0.5 = 50 N. 87 N is the vertical component (F sin 60°)."],
        ["During gait, the ground pushes up on the foot with a force equal and opposite to the force the foot applies to the ground. Which law does this illustrate?", ["Newton's third law", "Newton's first law", "Newton's second law", "Law of conservation of energy"], "Ground reaction force is the textbook example of action-reaction (Newton's 3rd law)."],
        ["A patient on a sliding board finds it harder to start moving than to keep moving once sliding has begun. What explains this?", ["Static friction is greater than kinetic friction", "Kinetic friction is greater than static friction", "The normal force increases once sliding begins", "Inertia disappears once the patient is moving"], "The coefficient of static friction exceeds that of kinetic friction, so initiating the slide takes more force."],
        ["A patient with balance deficits keeps losing balance when standing with feet together. Which change most directly increases their stability?", ["Widening the base of support", "Raising the center of mass", "Narrowing the stance further", "Moving the line of gravity toward the edge of the base"], "A wider base of support with the line of gravity centered inside it increases stability. Raising the COM or moving the line of gravity toward the edge reduces stability."],
        ["In anatomical position, where is the adult center of mass located?", ["Slightly anterior to the second sacral vertebra", "At the level of the umbilicus posterior to L1", "At the xiphoid process", "Posterior to the third lumbar vertebra"], "The COM in standard anatomical position is just anterior to S2. It shifts with posture and limb position."],
        ["A heavier patient is harder to stop once a transfer is in motion than a lighter patient moving at the same speed. Which concept best explains this?", ["Inertia, which increases with mass", "Friction, which decreases with mass", "Buoyancy, which increases with mass", "Torque, which is independent of mass"], "Newton's first law: inertia (resistance to change in motion) is proportional to mass. This is why guarding a larger patient requires earlier and more deliberate positioning."],
        ["The coefficient of friction between a shoe and a floor is 0.5 and the normal force is 600 N. What is the maximum friction force?", ["300 N", "1200 N", "600 N", "120 N"], "f = μ × N = 0.5 × 600 = 300 N. Lower μ (wet floors, socks) lowers available friction and raises fall risk."]
      ]
    },
    {
      t: "Torque, Levers & Static Equilibrium",
      sub: "Moment arms, classes of levers in the body, mechanical advantage, ΣF = 0 and Στ = 0",
      guide: [
        "<b>Torque (moment)</b>: the rotational effect of a force. <span class='formula'>τ = F × d</span>, where d is the perpendicular distance (moment arm) from the axis to the line of force. With an angle: <span class='formula'>τ = F × r × sin θ</span>.",
        "<b>Moment arm is maximal</b> when the force acts at 90° to the lever. That is why a dumbbell curl feels hardest with the forearm horizontal.",
        "<b>1st-class lever</b>: axis between effort and resistance (seesaw). Example: atlanto-occipital joint balancing the head; triceps extending the elbow via the olecranon.",
        "<b>2nd-class lever</b>: resistance between axis and effort (wheelbarrow). Example: standing heel raise, axis at the metatarsophalangeal joints. Mechanical advantage is always greater than 1.",
        "<b>3rd-class lever</b>: effort between axis and resistance. Example: biceps flexing the elbow. This is the most common lever in the body; it sacrifices force for speed and range (mechanical advantage less than 1).",
        "<b>Mechanical advantage</b>: <span class='formula'>MA = effort arm ÷ resistance arm</span>. MA greater than 1 favors force; MA less than 1 favors speed and range of motion.",
        "<b>Static equilibrium</b>: <span class='formula'>ΣF = 0</span> and <span class='formula'>Στ = 0</span>. Solve for an unknown muscle force by setting clockwise torque equal to counterclockwise torque.",
        "<b>Clinical use</b>: moving a cuff weight distally, or lengthening the lever (straight-leg vs bent-knee), increases resistance torque without adding load."
      ],
      assignment: {
        title: "Lever audit of three exercises",
        task: "Pick three exercises you coach often (for example a heel raise, a biceps curl, and a triceps pushdown). For each one, identify the axis, effort, and resistance, classify the lever, and estimate the resistance torque at the hardest point in the range. Suggest one way to progress each exercise by changing the moment arm instead of the load.",
        deliverable: "A three-row table plus a short paragraph on progressing with moment arms."
      },
      gen: [],
      qs: [
        ["A 50 N cuff weight is strapped 0.3 m from the knee joint axis with the leg horizontal. What torque does it create about the knee?", ["15 N·m", "150 N·m", "1.5 N·m", "167 N·m"], "τ = F × d = 50 N × 0.3 m = 15 N·m. Moving the weight farther from the axis would increase the torque."],
        ["A 100 N force is applied 0.2 m from a joint axis at 30° to the lever arm. What is the torque? (sin 30° = 0.5)", ["10 N·m", "20 N·m", "17 N·m", "5 N·m"], "τ = F × r × sin θ = 100 × 0.2 × 0.5 = 10 N·m. Only the perpendicular component of the force produces rotation."],
        ["The forearm and hand weigh 20 N, acting 0.15 m from the elbow. The biceps inserts 0.04 m from the elbow. With the forearm horizontal and static, what biceps force is needed?", ["75 N", "20 N", "53 N", "3 N"], "Στ = 0: Fb × 0.04 = 20 × 0.15 = 3 N·m, so Fb = 3 ÷ 0.04 = 75 N. Muscles with short moment arms must generate forces much larger than the external load."],
        ["A standing heel raise, with the axis at the metatarsophalangeal joints, body weight acting through the tibia, and the gastrocnemius-soleus pulling at the calcaneus, is which lever class?", ["Second class", "First class", "Third class", "It is not a lever"], "Resistance (body weight) lies between the axis (MTP joints) and the effort (Achilles insertion), which defines a 2nd-class lever."],
        ["Which lever class is most common in the human body and favors speed and range of motion over force?", ["Third class", "First class", "Second class", "Fourth class"], "In 3rd-class levers the effort arm is shorter than the resistance arm (MA less than 1), so they trade force for speed and range. Example: biceps at the elbow."],
        ["Nodding the head at the atlanto-occipital joint, with the neck extensors balancing the weight of the face, is which lever class?", ["First class", "Second class", "Third class", "Compound class"], "The axis (AO joint) lies between the effort (posterior extensors) and the resistance (head weight anterior to the joint), which makes it a 1st-class lever."],
        ["A lever has an effort arm of 0.05 m and a resistance arm of 0.35 m. What is its mechanical advantage?", ["About 0.14", "7", "0.30", "0.40"], "MA = effort arm ÷ resistance arm = 0.05 ÷ 0.35 ≈ 0.14. A value less than 1 is typical of a 3rd-class lever."],
        ["A client can complete straight-leg raises easily with a 2 kg cuff at the ankle. Without changing the weight, what is the best way to reduce difficulty for a weaker client?", ["Move the cuff proximally toward the knee", "Move the cuff to the toes", "Perform the lift faster", "Lift the leg higher"], "Moving the weight closer to the hip shortens its moment arm, which lowers resistance torque without changing the load."],
        ["During a standing dumbbell biceps curl, the resistance torque at the elbow is greatest when the forearm is:", ["Horizontal (elbow at 90°)", "Fully extended and vertical", "Fully flexed near the shoulder", "At 30° of elbow flexion"], "Gravity acts vertically, so the external moment arm is longest when the forearm is horizontal."],
        ["A body segment is in static equilibrium. Which statement must be true?", ["The sum of forces and the sum of torques both equal zero", "Only the sum of forces equals zero", "Only the sum of torques equals zero", "Muscle force equals the external load"], "Static equilibrium requires both translational (ΣF = 0) and rotational (Στ = 0) balance. Muscle force usually far exceeds the external load because of short moment arms."]
      ]
    },
    {
      t: "Work, Energy, Power & Momentum",
      sub: "W = Fd, kinetic and potential energy, power, momentum, impulse",
      guide: [
        "<b>Work</b>: <span class='formula'>W = F × d</span>, in joules (J), counting only the force component in the direction of displacement. No displacement means no mechanical work, so an isometric hold does zero external work even though it costs metabolic energy.",
        "<b>Positive vs negative work</b>: concentric contractions do positive work; eccentric contractions do negative work (the muscle lengthens while absorbing energy).",
        "<b>Power</b>: <span class='formula'>P = W ÷ t</span> or <span class='formula'>P = F × v</span>, in watts (W). The same lift done faster requires more power.",
        "<b>Kinetic energy</b>: <span class='formula'>KE = ½ m v²</span>. Doubling velocity quadruples KE.",
        "<b>Potential energy (gravitational)</b>: <span class='formula'>PE = m g h</span>. Energy is conserved and converted between forms; elastic energy is stored in stretched tendons, as in the stretch-shortening cycle.",
        "<b>Momentum</b>: <span class='formula'>p = m × v</span> (kg·m/s). In a closed system momentum is conserved.",
        "<b>Impulse</b>: <span class='formula'>J = F × Δt = Δp</span>. Increasing the time of impact, for example by landing with hip and knee flexion, lowers peak force for the same change in momentum."
      ],
      assignment: {
        title: "Power profile of a client session",
        task: "Choose a box lift or step-up your client does. Measure or estimate the load, the vertical distance, and the time per rep, then calculate work per rep and average power. Compare a slow-tempo set with a fast-tempo set and explain the training implications for an older adult who needs to rise from a chair quickly.",
        deliverable: "A worked calculation sheet with a 200-word interpretation."
      },
      gen: [],
      qs: [
        ["A patient lifts a 100 N box vertically 1.5 m from floor to shelf. How much work is done on the box?", ["150 J", "66.7 J", "101.5 J", "15 J"], "W = F × d = 100 N × 1.5 m = 150 J. Work uses force times displacement in the direction of the force."],
        ["The same 150 J lift is completed in 3 seconds. What is the average power?", ["50 W", "450 W", "153 W", "0.02 W"], "P = W ÷ t = 150 J ÷ 3 s = 50 W. Doing the same work faster would increase power."],
        ["What is the kinetic energy of a 2 kg medicine ball moving at 3 m/s?", ["9 J", "6 J", "18 J", "3 J"], "KE = ½ m v² = 0.5 × 2 × 3² = 9 J. Remember to square the velocity before multiplying."],
        ["An 80 kg runner moves at 5 m/s. What is the runner's momentum?", ["400 kg·m/s", "85 kg·m/s", "16 kg·m/s", "1000 kg·m/s"], "p = m × v = 80 × 5 = 400 kg·m/s. 1000 would be kinetic energy (½ × 80 × 25), a different quantity."],
        ["A client holds a plank for 60 seconds without moving. How much mechanical work is done on the body?", ["Zero, because there is no displacement", "A large amount, because force is applied for a long time", "It equals body weight times 60", "It equals the metabolic energy used"], "Mechanical work requires displacement. Isometric holds use metabolic energy but do no external mechanical work."],
        ["You are teaching an athlete to land from a jump with soft hip and knee flexion. Which physics principle explains why this reduces peak impact force?", ["Lengthening contact time lowers peak force for the same impulse", "Flexing the joints reduces the athlete's momentum before contact", "Flexing the joints increases potential energy at landing", "Soft landings convert mass into energy"], "Impulse (F × Δt) must equal the change in momentum. Spreading the stop over more time lowers peak force."],
        ["If a cyclist's velocity doubles, the kinetic energy:", ["Quadruples", "Doubles", "Stays the same", "Halves"], "KE depends on v squared, so 2² = 4 times the kinetic energy."],
        ["During the lowering phase of a squat, the quadriceps lengthen under load. What type of work are they doing?", ["Negative work (eccentric)", "Positive work (concentric)", "Zero work (isometric)", "Elastic work only"], "Eccentric contractions absorb energy as the muscle lengthens, which is negative work. Concentric contractions produce positive work."],
        ["A 60 kg patient climbs a 0.2 m step. Approximately how much potential energy is gained? (g ≈ 10 m/s²)", ["120 J", "12 J", "1200 J", "300 J"], "PE = m g h = 60 × 10 × 0.2 = 120 J. Using g = 10 keeps the arithmetic simple."],
        ["An older adult can lift a load slowly but cannot rise from a chair quickly enough to catch a fall. Which physical quantity is most limited?", ["Power", "Work", "Mass", "Momentum"], "Power is the rate of doing work (P = F × v). The ability to produce force quickly declines with age and matters for functional tasks like a fast sit-to-stand."]
      ]
    },
    {
      t: "Fluids & Pressure",
      sub: "Pressure, Pascal's principle, hydrostatic pressure, buoyancy, viscosity and drag",
      guide: [
        "<b>Pressure</b>: <span class='formula'>P = F ÷ A</span> (Pa = N/m²; also mmHg). The same force over a smaller area gives higher pressure, which is why pressure injuries form over bony prominences.",
        "<b>Pascal's principle</b>: pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid. This is the basis of hydraulic lifts and pneumatic compression devices.",
        "<b>Hydrostatic pressure</b>: <span class='formula'>P = ρ g h</span>, so pressure increases with depth. Immersion pushes fluid proximally, which helps limit edema and increases venous return.",
        "<b>Archimedes' principle (buoyancy)</b>: the upward buoyant force equals the weight of the fluid displaced. Deeper immersion offloads more body weight (more unloading at chest depth than at waist depth).",
        "<b>Specific gravity</b>: the average human body is slightly less dense than water, so most people float. Higher body fat means lower density and more buoyancy; lean, muscular people float less.",
        "<b>Buoyancy in exercise</b>: movement toward the surface is buoyancy-assisted, movement toward the pool floor is buoyancy-resisted, and horizontal movement is buoyancy-supported. Floats increase these effects.",
        "<b>Drag and viscosity</b>: resistance in water increases with speed and frontal area. Moving faster or adding paddles increases resistance; slow movement in water is gentle.",
        "<b>Thermal properties</b>: water conducts heat roughly 25 times faster than air, so pool temperature strongly affects how quickly patients warm or cool."
      ],
      assignment: {
        title: "Aquatic progression plan",
        task: "Design a three-phase aquatic program for a client with knee osteoarthritis who cannot tolerate full weight-bearing on land. For each phase, specify immersion depth, the direction of movements relative to buoyancy, and how you will use drag (speed, equipment) to progress. Justify each choice with the physics from this unit.",
        deliverable: "One-page program table with physics rationale for each progression."
      },
      gen: [],
      qs: [
        ["A 600 N force is spread over 0.02 m² of contact area. What is the pressure?", ["30,000 Pa", "12 Pa", "3,000 Pa", "300 Pa"], "P = F ÷ A = 600 ÷ 0.02 = 30,000 Pa. Reducing contact area for the same force raises pressure."],
        ["A patient seated in a wheelchair develops tissue breakdown over the ischial tuberosities instead of the thighs. What is the best physics explanation?", ["The same load concentrated on a smaller area produces higher pressure", "Bony areas experience less force than soft tissue", "Buoyancy is lower over bone", "Friction is the only cause of pressure injury"], "P = F ÷ A. Bony prominences concentrate load on a small area, raising local pressure. Cushions work by spreading load over a larger area."],
        ["Pressure applied to an enclosed fluid is transmitted equally throughout that fluid. This is:", ["Pascal's principle", "Archimedes' principle", "Bernoulli's principle", "Ohm's law"], "Pascal's principle describes transmission of pressure in an enclosed fluid. Archimedes' principle describes buoyancy."],
        ["The upward force on a body immersed in water equals the weight of the water displaced. This is:", ["Archimedes' principle", "Pascal's principle", "Newton's first law", "The law of Laplace"], "Archimedes' principle defines buoyant force, which is the basis of weight offloading in aquatic therapy."],
        ["A patient with ankle swelling stands in chest-deep water. Why does immersion help reduce distal edema?", ["Hydrostatic pressure increases with depth, pushing fluid proximally", "Buoyancy pulls fluid toward the feet", "Water viscosity removes fluid through the skin", "Hydrostatic pressure is equal at all depths"], "Hydrostatic pressure (ρgh) is greatest at the deepest point, so it creates a distal-to-proximal pressure gradient that assists fluid return."],
        ["A patient with limited weight-bearing tolerance needs the most body-weight offloading possible while standing in the pool. Where should the water level be?", ["At chest level", "At the knees", "At the hips", "At mid-thigh"], "Deeper immersion displaces more water and provides more buoyant support. Chest depth offloads much more weight than hip or knee depth."],
        ["In the pool, a patient lifts the arm from the side toward the water surface (shoulder abduction while standing). This motion is:", ["Buoyancy-assisted", "Buoyancy-resisted", "Buoyancy-supported", "Drag-assisted"], "Moving toward the surface is assisted by buoyancy, which makes it useful early in shoulder rehab. Pushing the arm back down toward the floor is buoyancy-resisted."],
        ["To increase resistance for a client walking forward in the pool without adding equipment, the best option is to:", ["Walk faster", "Walk more slowly", "Shorten the stride and slow the cadence", "Hold the breath"], "Drag increases with velocity. Moving faster through water creates more turbulence and resistance."],
        ["Which client is likely to be the most buoyant in water?", ["A client with a high percentage of body fat", "A lean, heavily muscled client", "A client with high bone density", "Buoyancy does not vary between people"], "Fat is less dense than muscle and bone, so higher body fat lowers overall specific gravity and increases flotation."],
        ["Why does a patient lose body heat faster in a cool pool than in air of the same temperature?", ["Water conducts heat much faster than air", "Air has higher thermal conductivity than water", "Buoyancy increases heat loss", "Hydrostatic pressure generates cold"], "Water's thermal conductivity is roughly 25 times that of air, so heat transfers to or from the body much faster when immersed."]
      ]
    },
    {
      t: "Electricity, Waves & Sound",
      sub: "Ohm's law, current types, impedance, current density, wave equation, ultrasound frequency",
      guide: [
        "<b>Ohm's law</b>: <span class='formula'>V = I × R</span>. Current (I, amperes) is directly proportional to voltage and inversely proportional to resistance (ohms). Tissues with more water (muscle, blood) conduct well; skin, fat, and bone resist current.",
        "<b>Reducing skin impedance</b>: clean the skin, use moist or gel electrodes, and ensure good contact. Lower impedance means more comfortable stimulation at a given intensity.",
        "<b>Current types</b>: <i>direct current</i> (continuous one-way flow, used in iontophoresis); <i>alternating current</i> (continuous bidirectional flow, as in interferential and Russian currents); <i>pulsed current</i> (flow interrupted by off periods, as in most TENS and NMES).",
        "<b>Current density</b>: the same current through a smaller electrode gives higher density, a stronger sensation, and more burn risk. Larger electrodes are more comfortable.",
        "<b>Series vs parallel resistance</b>: series resistances add (<span class='formula'>Rt = R1 + R2</span>); in parallel, total resistance is less than the smallest single resistance.",
        "<b>Wave equation</b>: <span class='formula'>v = f × λ</span>. Frequency is in hertz (cycles/s). Sound is a mechanical wave and needs a medium, so ultrasound requires a coupling gel because air reflects almost all of it.",
        "<b>Ultrasound frequency vs depth</b>: therapeutic ultrasound is above 20 kHz (typically 1 or 3 MHz). Higher frequency is absorbed faster and reaches shallower tissue: 3 MHz for superficial targets, 1 MHz for deeper ones.",
        "<b>Inverse square law</b>: intensity from a point source falls with <span class='formula'>1/d²</span>. <b>Cosine law</b>: radiant energy is absorbed best when the beam is perpendicular to the surface."
      ],
      assignment: {
        title: "Electrode setup troubleshooting guide",
        task: "Write a troubleshooting guide for a patient whose TENS feels 'sharp and prickly' at low intensity. Using Ohm's law, impedance, and current density, list the likely causes and fixes (skin prep, electrode size, gel, spacing). Add a short section explaining why ultrasound needs gel but TENS electrodes need good contact for a different reason.",
        deliverable: "One-page clinician quick-reference sheet."
      },
      gen: [],
      qs: [
        ["A stimulator delivers 50 V across a tissue resistance of 1,000 Ω. What current flows?", ["0.05 A (50 mA)", "50,000 A", "20 A", "0.5 A (500 mA)"], "I = V ÷ R = 50 ÷ 1,000 = 0.05 A = 50 mA. Higher resistance gives less current at the same voltage."],
        ["Which tissue is the best electrical conductor?", ["Muscle", "Bone", "Fat", "Dry skin"], "Conductivity follows water and electrolyte content. Muscle and blood conduct well; bone, fat, and dry skin are poor conductors."],
        ["A patient reports that e-stim feels sharp and uncomfortable. The electrodes are small, dry, and placed on unwashed skin. What is the best first fix?", ["Clean the skin and use larger, well-gelled electrodes", "Use even smaller electrodes", "Increase the intensity to override the sensation", "Switch to direct current"], "Cleaning the skin and using moist, larger electrodes lowers impedance and current density, which improves comfort."],
        ["Continuous, unidirectional flow of charged particles is called:", ["Direct current", "Alternating current", "Pulsed biphasic current", "Interferential current"], "Direct current flows in one direction without interruption. It is used for iontophoresis to drive ions across the skin."],
        ["The same current is delivered through a 2 cm² electrode and a 10 cm² electrode. Which statement is correct?", ["Current density is higher under the smaller electrode", "Current density is higher under the larger electrode", "Current density is equal under both", "Electrode size affects only voltage"], "Current density = current ÷ area. The smaller electrode concentrates the current, which feels stronger and raises burn risk."],
        ["Two resistors of 300 Ω and 200 Ω are connected in series. What is the total resistance?", ["500 Ω", "120 Ω", "100 Ω", "60,000 Ω"], "In series, resistances add: 300 + 200 = 500 Ω. 120 Ω would be the result if they were in parallel."],
        ["Sound travels through soft tissue at about 1,540 m/s. What is the wavelength of 1 MHz ultrasound in soft tissue?", ["About 1.5 mm", "About 1.5 m", "About 15 cm", "About 0.15 mm"], "λ = v ÷ f = 1,540 ÷ 1,000,000 ≈ 0.00154 m = 1.54 mm."],
        ["Why must a coupling gel be used between an ultrasound head and the skin?", ["Air reflects nearly all ultrasound energy", "Gel conducts electrical current to the tissue", "Gel increases the ultrasound frequency", "Gel cools the transducer to prevent burns"], "Ultrasound is a mechanical wave. The acoustic mismatch at an air interface reflects almost all of it, so gel provides a transmitting medium."],
        ["You need to treat a superficial target about 1-2 cm deep. Which ultrasound frequency is most appropriate and why?", ["3 MHz, because higher frequency is absorbed more superficially", "1 MHz, because lower frequency is absorbed more superficially", "3 MHz, because higher frequency penetrates deeper", "1 MHz, because frequency does not affect depth"], "Higher frequency is absorbed faster, so 3 MHz deposits its energy in superficial tissue and 1 MHz reaches deeper structures."],
        ["An infrared lamp is moved from 40 cm to 80 cm away from the skin. The intensity reaching the skin becomes:", ["One-quarter as great", "Half as great", "Twice as great", "Unchanged"], "Inverse square law: doubling distance gives 1/2² = 1/4 the intensity."]
      ]
    }
  ]
});
