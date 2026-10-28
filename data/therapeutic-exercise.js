(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "therapeutic-exercise",
  track: "found",
  order: 8,
  code: "DPT 645",
  title: "Therapeutic Exercise",
  credits: 4,
  desc: "The principles and techniques of prescribing exercise to restore mobility, strength, power, motor control, balance, and function, from dosing parameters to safe progressions for post-operative and special populations. This is the PT's core intervention, and it builds directly on corrective exercise skills with a stronger clinical and evidence base.",
  objectives: [
    "Apply overload, specificity, and reversibility to dose exercise for strength, hypertrophy, endurance, and power",
    "Select appropriate ROM and stretching techniques, including PNF hold-relax and contract-relax",
    "Choose between open and closed kinetic chain, eccentric, and stabilization exercise based on tissue and goals",
    "Design balance and functional training progressions that target the sensory systems for postural control",
    "Modify exercise safely after surgery and for patients with osteoporosis, joint replacement, or aquatic needs"
  ],
  units: [
    {
      t: "Principles & Dosing",
      sub: "Overload, specificity, reversibility, sets and reps by goal, RPE and RIR",
      guide: [
        "<b>Overload</b>: tissue adapts only when loaded beyond its current level. Progress gradually by adding load, reps, sets, frequency, or complexity, usually one variable at a time.",
        "<b>Specificity (SAID principle)</b>: Specific Adaptations to Imposed Demands. Training effects match the muscle action, speed, range, and energy system used, so train in a way that resembles the goal task.",
        "<b>Reversibility</b>: gains are lost when training stops (detraining). Immobilization causes rapid strength loss and muscle atrophy.",
        "<b>Dosing by goal</b>: <b>strength</b> uses heavy loads and low reps (about ≤6 reps), <b>hypertrophy</b> uses moderate loads for about 6-12 reps, and <b>muscular endurance</b> uses light loads for high reps (about ≥12-15) with short rest.",
        "<b>Power</b> = force × velocity. Train with moderate-to-heavy loads moved <b>as fast as possible</b> for low reps with full rest, or with plyometrics once a strength base is in place.",
        "<b>RPE</b>: the Borg 6-20 scale (12-13 is about 'somewhat hard', moderate intensity) or the 0-10 scale. <b>RIR</b> (reps in reserve) estimates how many more reps were possible, so 2 RIR means stopping two reps short of failure.",
        "<b>DOMS</b> (delayed-onset muscle soreness) peaks about <b>24-72 hours</b> after unaccustomed exercise, especially eccentric work. It is not a sign of injury.",
        "<b>Valsalva</b>: breath-holding during exertion spikes BP. Teach patients with cardiovascular disease, hypertension, or recent surgery to <b>exhale during the effort phase</b>."
      ],
      assignment: {
        title: "Three-goal program design",
        task: "For one exercise, such as a leg press, write three versions of the prescription: one for strength, one for muscular endurance, and one for power. Specify load (as %1RM, RPE, or RIR), sets, reps, rest, and tempo for each, and explain how you would progress each one over 4 weeks.",
        deliverable: "One-page comparison table plus a progression note for each goal."
      },
      gen: [],
      qs: [
        ["What does the SAID principle state?", ["The body adapts specifically to the demands placed on it", "Strength gains are maintained indefinitely without training", "All exercise produces the same general adaptations", "Muscles adapt only to eccentric contractions"], "SAID stands for Specific Adaptations to Imposed Demands, which is the basis of training specificity."],
        ["A client's goal is maximal strength. Which rep scheme best fits this goal?", ["Heavy loads for about 1-6 reps with long rest", "Light loads for 20-25 reps with short rest", "Body weight only for as many reps as possible", "Moderate loads for 12-15 reps with no rest"], "Strength is developed by heavy loads at low reps with adequate rest. High-rep, light-load work develops endurance."],
        ["A postal worker needs to walk and carry mail all day without fatigue. Which dosing best fits her muscular endurance goal?", ["Light loads for high repetitions with short rest periods", "Maximal loads for 1-3 repetitions", "Plyometric jumps with full recovery", "Isometric holds at maximum effort for 3 seconds"], "Muscular endurance is trained with lower loads and many reps, matching the sustained, repetitive demands of her job."],
        ["Which statement best describes power training?", ["Moderate-to-heavy loads moved as quickly as possible", "Very light loads lifted slowly for many reps", "Long isometric holds at end range", "Passive stretching before strength work"], "Power is force times velocity, so it is trained by moving a meaningful load at high speed."],
        ["A client says he could have done two more reps at the end of a set. How would this be recorded?", ["2 reps in reserve (2 RIR)", "RPE of 2 on the 6-20 scale", "2 sets to failure", "A 2-second eccentric tempo"], "RIR is the number of reps a person could still have done before failure."],
        ["A client is sore two days after her first session of eccentric step-downs. The soreness is diffuse, bilateral, and eases as she warms up. What is the most likely explanation?", ["Delayed-onset muscle soreness", "An acute muscle strain", "Deep vein thrombosis", "Rhabdomyolysis"], "DOMS peaks 24-72 hours after unaccustomed eccentric loading and eases with movement. It is not a sign of injury."],
        ["A patient with hypertension holds his breath and strains during every repetition of a leg press. What is the best cue?", ["Exhale during the effort phase to avoid a Valsalva maneuver", "Hold your breath to stabilize your spine", "Breathe only through your nose at the top", "Keep straining, since the BP spike is harmless"], "The Valsalva maneuver causes large BP spikes. Exhaling on exertion reduces cardiovascular stress."],
        ["After 6 weeks in a cast, a patient's quadriceps is visibly smaller and weaker. Which training principle explains this?", ["Reversibility (detraining)", "Specificity", "Overload", "Individuality"], "Without load, the gains of training are lost, and immobilization causes rapid atrophy and strength loss."],
        ["A client has been doing 3 sets of 10 squats with the same weight for 6 weeks and no longer improves. Which principle is being neglected?", ["Progressive overload", "Specificity", "Reversibility", "Regression to the mean"], "Adaptations stop when the stimulus stops exceeding the current capacity. Load, volume, or complexity must be increased."],
        ["On the Borg 6-20 RPE scale, which rating corresponds to about 'somewhat hard' moderate-intensity exercise?", ["12-13", "6-7", "17-18", "19-20"], "12-13 is 'somewhat hard', commonly used for moderate intensity. 6 is no exertion and 19-20 is maximal."]
      ]
    },
    {
      t: "ROM & Flexibility",
      sub: "PROM, AAROM, AROM; static, ballistic, dynamic stretching; PNF techniques",
      guide: [
        "<b>PROM</b>: an external force moves the joint with no voluntary muscle activity. Use it when active motion is contraindicated or not possible (e.g., early post-op protection, paralysis, coma). It does <b>not</b> prevent atrophy or build strength.",
        "<b>AAROM</b>: the patient contracts the muscle and gets help from the clinician, the other limb, or a device (wand, pulley). Use it when the muscle is weak or when progressing from PROM.",
        "<b>AROM</b>: the patient moves the segment independently. It maintains elasticity and contractility and provides sensory feedback, but it does not build strength in a muscle that is already grade 3 or better.",
        "<b>Static stretching</b>: hold a sustained position at end range. A hold of about <b>30 seconds</b> is the commonly recommended duration for most adults.",
        "<b>Ballistic stretching</b>: rapid bouncing into end range. It triggers the stretch reflex (muscle spindle) and is generally avoided in rehab. <b>Dynamic stretching</b> uses controlled movement through range and suits warm-ups.",
        "<b>Hold-relax</b>: the <i>tight muscle</i> is lengthened to end range, contracts isometrically against resistance, relaxes, and is then moved further into range. This is thought to use <b>autogenic inhibition</b> (Golgi tendon organ).",
        "<b>Contract-relax</b>: like hold-relax, but the tight muscle performs a resisted <i>concentric</i> contraction (classically a diagonal pattern with rotation) before relaxing and being moved further. <b>Hold-relax with agonist contraction</b> adds an active contraction of the <i>opposite</i> muscle, which uses <b>reciprocal inhibition</b>.",
        "<b>Contraindications to stretching</b>: a bony block, a recent fracture that is not united, acute inflammation or infection in the area, hypermobility, and cases where a contracture provides needed stability (e.g., tenodesis grip in tetraplegia)."
      ],
      assignment: {
        title: "Hamstring flexibility protocol",
        task: "Write a protocol for improving hamstring length in a client with a 60° straight-leg raise. Include one static stretch, step-by-step instructions for hold-relax and hold-relax with agonist contraction, and a frequency and duration plan. Explain the neurophysiological rationale for each PNF technique.",
        deliverable: "One-page protocol with numbered steps and a short rationale paragraph."
      },
      gen: [],
      qs: [
        ["Two days after a rotator cuff repair, the surgeon's protocol prohibits any active contraction of the cuff. Which form of ROM is appropriate?", ["Passive range of motion", "Active range of motion", "Resisted range of motion", "Active-assisted range of motion with heavy effort"], "PROM moves the joint with no voluntary contraction of the muscle, which protects the repair while maintaining mobility."],
        ["A patient's deltoid is graded 2/5. Which ROM exercise best helps him move his arm overhead while strengthening?", ["Active-assisted ROM using a wand or pulley", "Passive ROM only", "Heavy resisted ROM with dumbbells", "Ballistic arm swings"], "AAROM lets a weak muscle contract while getting help to complete the motion, which bridges between PROM and AROM."],
        ["Which statement about passive ROM is correct?", ["It does not prevent muscle atrophy or increase strength", "It is the best way to build muscle strength", "It requires the patient to contract the target muscle", "It is contraindicated for patients in a coma"], "PROM maintains joint and soft-tissue mobility but provides no strengthening stimulus because the muscle does not contract."],
        ["Which hold duration is commonly recommended for a static stretch in most adults?", ["About 30 seconds", "About 2 seconds", "About 10 minutes", "About 1 second, bounced repeatedly"], "Around 30 seconds per stretch is the commonly cited effective duration for static stretching in adults."],
        ["Why is ballistic stretching generally avoided in rehabilitation?", ["Rapid bouncing triggers the stretch reflex and can injure healing tissue", "It produces too little force to change tissue length", "It only works on joint capsules, not muscle", "It causes autogenic inhibition that weakens muscle"], "Quick stretches activate the muscle spindle, which causes reflex contraction against the stretch and increases the risk of injury."],
        ["To perform hold-relax for a tight hamstring, which muscle performs the isometric contraction?", ["The hamstring (the muscle being stretched)", "The quadriceps (the opposing muscle)", "The gluteus medius", "The hip flexors only"], "In hold-relax, the tight muscle contracts isometrically, then relaxes and is lengthened further into range."],
        ["In hold-relax with agonist contraction for a tight hamstring, the patient actively contracts the quadriceps after the hold. Which mechanism is this intended to use?", ["Reciprocal inhibition of the hamstring", "Autogenic inhibition of the quadriceps", "The muscle spindle stretch reflex", "Post-activation potentiation of the hamstring"], "Contracting the opposing muscle (agonist to the desired motion) reflexively inhibits the tight antagonist."],
        ["A patient with C6 tetraplegia relies on tenodesis to grasp objects. What is the best way to manage his finger flexor length?", ["Avoid stretching the finger flexors with the wrist extended, to preserve tenodesis", "Stretch the finger flexors aggressively with the wrist extended", "Use ballistic stretching to maximize finger extension", "Splint the fingers in full extension day and night"], "Slight tightness in the finger flexors lets wrist extension passively close the fingers, which provides functional grasp."],
        ["Which situation is a contraindication to stretching?", ["A bony block limiting joint motion", "A mild muscle tightness after training", "Reduced flexibility from a sedentary lifestyle", "A chronic, well-healed scar limiting motion"], "No amount of stretching will move past a bony block, and forcing it can cause injury. The other situations are indications for stretching."],
        ["Which statement best distinguishes contract-relax from hold-relax?", ["Contract-relax uses a resisted concentric contraction of the tight muscle; hold-relax uses an isometric one", "Contract-relax uses no contraction at all", "Hold-relax requires the opposite muscle to contract first", "They are two names for the same technique"], "Both start with the tight muscle at end range. The difference is the type of contraction it performs before relaxation."]
      ]
    },
    {
      t: "Strength, Power & Motor Control",
      sub: "Open vs closed chain, eccentric training, core stabilization, plyometrics",
      guide: [
        "<b>Open kinetic chain (OKC)</b>: the distal segment moves freely (e.g., seated knee extension, biceps curl). It isolates a muscle well and is useful when weight bearing is restricted.",
        "<b>Closed kinetic chain (CKC)</b>: the distal segment is fixed against a surface (e.g., squat, leg press, push-up). It produces multi-joint, functional movement, co-contraction, and joint compression that adds stability.",
        "<b>ACL and the knee</b>: OKC knee extension near terminal extension (roughly 30° to 0°) creates more anterior tibial translation and ACL strain. CKC exercise produces co-contraction of the hamstrings and quadriceps and generally less ACL strain.",
        "<b>Eccentric training</b>: the muscle lengthens under tension. It produces <b>greater force at a lower metabolic cost</b> than concentric work, but causes more DOMS. It is a core treatment for tendinopathy (e.g., Achilles and patellar).",
        "<b>Isometric exercise</b>: muscle tension without joint motion. Strength gains are mostly specific to the trained joint angle. It is useful when motion is painful or restricted.",
        "<b>Core stabilization</b>: the local stabilizers (<b>transversus abdominis, multifidus</b>) control segmental stability, and the global movers (rectus abdominis, obliques, erector spinae) produce motion. Start with the abdominal drawing-in maneuver and neutral-spine control, then progress to loaded and dynamic tasks.",
        "<b>Plyometrics</b>: use the <b>stretch-shortening cycle</b> (a rapid eccentric phase followed immediately by a concentric phase). Progress from bilateral to unilateral and from low to high intensity, and only after an adequate strength base.",
        "<b>Motor learning</b>: <b>blocked practice</b> gives better performance during practice, while <b>random practice</b> gives better retention and transfer. Reduce external feedback over time to avoid dependence."
      ],
      assignment: {
        title: "ACL rehab strength progression",
        task: "Design a 12-week strengthening progression for an ACL reconstruction client, moving from isometrics and CKC work to OKC knee extension and then to plyometric training. For each phase, name 3-4 exercises, the safe knee ranges for each, and the criteria for moving on.",
        deliverable: "A phased table with exercises, parameters, and progression criteria."
      },
      gen: [],
      qs: [
        ["Which exercise is an example of a closed kinetic chain exercise for the lower extremity?", ["Leg press", "Seated knee extension", "Prone hamstring curl", "Ankle weight straight-leg raise"], "In a leg press, the feet are fixed against the platform. The other options let the distal segment move freely."],
        ["A client has a non-weight-bearing order after a tibial plateau fracture. Which quadriceps exercise is most appropriate?", ["Open-chain quadriceps sets and straight-leg raises", "Closed-chain squats", "Single-leg step-downs", "Wall sits"], "OKC exercises allow strengthening without loading the limb through weight bearing."],
        ["Early after ACL reconstruction, why are closed-chain exercises such as mini-squats often preferred over open-chain knee extension near full extension?", ["CKC creates hamstring-quadriceps co-contraction and generally less anterior tibial translation", "CKC exercises produce no compressive force at the knee", "OKC exercises cannot strengthen the quadriceps", "CKC exercises isolate the quadriceps more effectively"], "OKC knee extension near terminal range pulls the tibia forward and strains the ACL. CKC co-contraction limits that translation."],
        ["Compared with concentric contractions at the same load, what is true of eccentric contractions?", ["They produce greater force at a lower metabolic cost", "They produce less force and use more energy", "They cannot be used for tendon rehabilitation", "They cause no muscle soreness"], "Eccentric actions generate the highest forces at the lowest energy cost, which is why they are effective but also cause more DOMS."],
        ["A runner has mid-portion Achilles tendinopathy that has persisted for 4 months. Which exercise approach has the strongest support?", ["Progressive eccentric heel drops (heavy tendon loading)", "Complete rest until pain is gone", "Ballistic calf stretching", "Passive ROM of the ankle only"], "Progressive tendon loading, classically eccentric heel drops, is the core treatment for chronic Achilles tendinopathy."],
        ["Which muscles are considered the primary local (segmental) stabilizers of the lumbar spine?", ["Transversus abdominis and multifidus", "Rectus abdominis and external obliques", "Latissimus dorsi and gluteus maximus", "Iliopsoas and rectus femoris"], "The TrA and multifidus provide segmental control. The rectus abdominis and obliques are global movers."],
        ["A patient with chronic low back pain cannot keep a neutral spine during a basic bridge. What is the best first step in his stabilization program?", ["Teach the abdominal drawing-in maneuver and neutral-spine control in supine", "Progress to single-leg bridges on a stability ball", "Begin heavy deadlifts to strengthen the back", "Start plyometric box jumps"], "Stabilization begins with activating the local stabilizers in an easy position before adding load or instability."],
        ["What makes plyometric training effective for developing power?", ["It uses the stretch-shortening cycle, a rapid eccentric followed immediately by a concentric action", "It relies on slow isometric holds", "It removes the eccentric phase entirely", "It trains only the cardiovascular system"], "Stored elastic energy and the stretch reflex increase the force of the concentric phase when it follows quickly after the eccentric phase."],
        ["A high school athlete 4 weeks after ankle surgery cannot yet perform a single-leg squat with control. Is she ready for single-leg hopping drills?", ["No; she needs adequate strength and control before plyometrics", "Yes; plyometrics should start as early as possible", "Yes; hopping is lower intensity than squatting", "No; plyometrics are never appropriate after surgery"], "Plyometrics place high forces on tissue, so a strength and control base must come first. Plyometrics are later-stage rehab, not banned."],
        ["A patient practices transfers, gait, and stair climbing in a random order during each session. Compared with blocked practice, what is the main advantage of this approach?", ["Better long-term retention and transfer of skills", "Better performance during the practice session itself", "Less need for any repetition", "Faster initial learning with fewer errors"], "Random practice is harder during the session but improves retention and transfer. Blocked practice improves short-term performance."]
      ]
    },
    {
      t: "Balance, Coordination & Functional Training",
      sub: "Sensory systems, balance strategies, progressions, task-specific training",
      guide: [
        "<b>Three sensory systems for balance</b>: <b>somatosensory</b> (proprioception and touch from the feet and joints), <b>visual</b>, and <b>vestibular</b> (inner ear). Healthy adults on a firm surface rely mainly on somatosensory input.",
        "<b>Sensory testing</b>: the <b>mCTSIB</b> (modified Clinical Test of Sensory Interaction in Balance) tests standing on firm and foam surfaces with eyes open and closed. Standing on foam with eyes closed forces reliance on vestibular input. A positive <b>Romberg</b> (stable with eyes open, unstable with eyes closed) suggests a proprioceptive deficit.",
        "<b>Postural strategies</b>: the <b>ankle strategy</b> handles small, slow perturbations on a firm, wide surface. The <b>hip strategy</b> handles larger, faster perturbations or a narrow surface. The <b>stepping strategy</b> is used when the center of mass moves outside the base of support.",
        "<b>Balance progressions</b>: wide to narrow base (feet apart, together, tandem, single leg), firm to compliant surface (floor to foam), eyes open to closed, static to dynamic, and single task to dual task (adding a cognitive or motor task).",
        "<b>Coordination</b>: cerebellar dysfunction causes <b>ataxia, dysmetria</b> (overshooting a target), <b>intention tremor</b>, and <b>dysdiadochokinesia</b> (impaired rapid alternating movements). Tests include finger-to-nose, heel-to-shin, and rapid alternating movements.",
        "<b>Frenkel exercises</b>: slow, repetitive, visually guided movements progressing from simple to complex, used for proprioceptive (sensory) ataxia.",
        "<b>Functional training</b>: practice the actual task (sit-to-stand, transfers, gait, stairs) in realistic conditions. Task-specific practice best transfers to daily life.",
        "<b>Fall prevention in older adults</b>: multicomponent programs that include balance challenge and strength training reduce falls. Include home safety, a medication review, and footwear and vision checks."
      ],
      assignment: {
        title: "Six-level balance progression",
        task: "Design a six-level balance progression for a 70-year-old client with mild balance deficits who scored 46/56 on the Berg. For each level, vary only one parameter at a time (base, surface, vision, movement, or dual task). State the criteria for advancing and the safety setup, such as gait belt, counter, and corner position.",
        deliverable: "One-page progression table plus a half-page safety plan."
      },
      gen: [],
      qs: [
        ["Standing on foam with eyes closed mainly forces reliance on which sensory system?", ["Vestibular", "Somatosensory", "Visual", "Auditory"], "Foam distorts somatosensory input and closing the eyes removes vision, leaving mainly vestibular input."],
        ["A patient is stable standing with feet together and eyes open but sways and nearly falls when he closes his eyes. What does this suggest?", ["A proprioceptive (somatosensory) deficit, a positive Romberg", "Normal balance for all adults", "An isolated visual impairment", "Cerebellar ataxia with intention tremor"], "A positive Romberg means the patient depends on vision to make up for lost proprioception, as in peripheral neuropathy."],
        ["A standing patient receives a small, slow nudge on a firm, wide surface. Which balance strategy is most likely to be used?", ["Ankle strategy", "Hip strategy", "Stepping strategy", "Suspension strategy"], "Small, slow perturbations on a stable surface are handled by moving the body around the ankles."],
        ["A client standing on a narrow beam is pushed with a larger, faster perturbation but does not step. Which strategy is most likely to be used?", ["Hip strategy", "Ankle strategy", "Stepping strategy", "Visual fixation strategy"], "Larger, faster perturbations or narrow surfaces call for rapid hip and trunk movement to control the center of mass."],
        ["A client can stand on a firm floor with feet together and eyes closed for 30 seconds safely. Which progression changes only one variable?", ["Feet together on foam with eyes open", "Single leg on foam with eyes closed while catching a ball", "Tandem stance on a rocker board with eyes closed", "Hopping on one leg on a trampoline"], "Good progressions change one variable at a time. Moving to foam while opening the eyes keeps the challenge controlled."],
        ["A patient overshoots the target during finger-to-nose testing and the tremor worsens as he approaches it. Which system is most likely affected?", ["Cerebellum", "Basal ganglia", "Peripheral sensory nerves", "Vestibular nerve"], "Dysmetria and intention tremor are classic cerebellar signs. Basal ganglia disorders produce a resting tremor."],
        ["What is dysdiadochokinesia?", ["Impaired ability to perform rapid alternating movements", "Inability to recognize objects by touch", "Involuntary writhing movements of the trunk", "Loss of the ability to sequence speech"], "Dysdiadochokinesia, tested with rapid forearm pronation and supination, is a sign of cerebellar dysfunction."],
        ["A patient with sensory ataxia from posterior column damage needs coordination training. Which approach is classically used?", ["Frenkel exercises with slow, visually guided movements", "Heavy isokinetic strengthening only", "Ballistic stretching of the hip flexors", "Training only with the eyes closed"], "Frenkel exercises use vision to make up for lost proprioception, progressing from simple to complex movements."],
        ["A 78-year-old with two falls this year wants an exercise program to reduce fall risk. Which plan best matches the evidence?", ["A multicomponent program with progressive balance challenge and strength training", "Seated upper body stretching only", "Walking on a treadmill with full handrail support only", "Avoiding all standing exercise to prevent falls"], "Programs that challenge balance and include strengthening reduce falls in older adults. Seated or fully supported work provides too little balance challenge."],
        ["A patient's goal is to get up from a low couch at home. Which training approach is most likely to transfer to this goal?", ["Practicing sit-to-stand from progressively lower surfaces", "Seated knee extensions with ankle weights only", "Upper body ergometer intervals", "Supine bridges with no standing practice"], "Task-specific practice transfers best to the target function. Isolated strengthening helps but is not enough on its own."]
      ]
    },
    {
      t: "Exercise for Special Conditions",
      sub: "Post-op progressions, osteoporosis, joint replacement, aquatic exercise",
      guide: [
        "<b>Post-operative progression</b>: Phase 1 (protection: PROM or AAROM, isometrics, edema control, respect tissue healing), Phase 2 (controlled motion: AROM, light resistance), Phase 3 (progressive strengthening and function), Phase 4 (return to activity or sport). Follow the surgeon's protocol and use criteria, not only time, to progress.",
        "<b>THA, posterior approach</b> (classic precautions): avoid hip <b>flexion beyond 90°</b>, <b>adduction past midline</b>, and <b>internal rotation</b>. Use a raised toilet seat, a pillow between the knees, and avoid low chairs.",
        "<b>THA, anterior approach</b>: precautions are typically fewer. When used, they involve avoiding combined <b>hip extension and external rotation</b>. Always follow the surgeon's specific orders.",
        "<b>TKA</b>: early priorities are <b>knee extension</b> (to prevent a flexion contracture), quadriceps activation (expect quadriceps inhibition and extension lag), knee flexion ROM, edema control, and gait training. Never place a pillow under the knee.",
        "<b>Osteoporosis</b>: encourage <b>weight-bearing impact as tolerated, progressive resistance training, spinal extensor strengthening, and balance training</b>. Avoid <b>spinal flexion, especially combined with rotation</b>, and loaded flexion (sit-ups, toe touches). Teach hip-hinge mechanics.",
        "<b>Aquatic exercise</b>: <b>buoyancy</b> reduces weight bearing (the deeper the immersion, the greater the unloading), <b>hydrostatic pressure</b> helps reduce edema and supports venous return, and <b>viscosity</b> provides resistance that increases with speed.",
        "<b>Aquatic contraindications and precautions</b>: open wounds, active infection, bowel or bladder incontinence, uncontrolled seizures, and unstable cardiac conditions. Be cautious with fear of water and with decreased vital capacity, since hydrostatic pressure on the chest adds work of breathing."
      ],
      assignment: {
        title: "Post-THA home program",
        task: "Write a 2-week home exercise program for a 68-year-old after a posterior-approach total hip arthroplasty. Include 6-8 exercises with dosing, and adapt each so it respects the hip precautions. Add a short section teaching the patient how to get into bed, sit in a chair, and use the toilet safely.",
        deliverable: "Two-page patient-facing HEP with simple illustrations or descriptions and a precautions checklist."
      },
      gen: [],
      qs: [
        ["Which set of movements must a patient avoid after a posterior-approach total hip arthroplasty under classic precautions?", ["Hip flexion past 90°, adduction past midline, and internal rotation", "Hip extension, abduction, and external rotation", "Knee flexion past 90° and ankle dorsiflexion", "Hip abduction past 20° and hip extension"], "The posterior approach weakens the posterior capsule, so flexion, adduction, and IR could cause posterior dislocation."],
        ["A patient 2 days after a posterior-approach THA wants to sit in her low, soft recliner at home. What is the best recommendation?", ["Use a firm, higher chair with arms so the hip stays below 90° of flexion", "Use the recliner, since it is more comfortable", "Sit on the floor with legs crossed instead", "Lean far forward to stand from the low chair"], "Low seats force hip flexion past 90°, which risks dislocation. A raised, firm chair with arms keeps her within precautions."],
        ["After an anterior-approach THA, precautions, when used, most commonly involve avoiding which combined motion?", ["Hip extension with external rotation", "Hip flexion with internal rotation", "Hip abduction with flexion", "Knee extension with ankle plantarflexion"], "The anterior approach disrupts the anterior structures, so extension combined with external rotation stresses the repair."],
        ["A patient 3 days after a total knee arthroplasty likes to rest with a pillow under the operated knee. What should you advise?", ["Avoid the pillow under the knee to prevent a flexion contracture", "Use two pillows to maximize comfort", "Keep the knee bent at 90° at all times", "Rest only in prone with the knee bent"], "Regaining full extension is a top priority after TKA, and a pillow under the knee encourages a flexion contracture. Elevate the whole limb instead."],
        ["A patient after TKA can fully extend the knee passively but cannot actively straighten it during a straight-leg raise. What is this finding called?", ["Quadriceps extensor lag", "Flexion contracture", "Hamstring spasm", "Springy block end-feel"], "Full passive extension with incomplete active extension is an extensor lag, which reflects quadriceps weakness or inhibition."],
        ["Which exercise is most appropriate for a client with osteoporosis of the spine?", ["Prone or standing spinal extensor strengthening", "Sit-ups with a twist", "Standing toe touches with knees straight", "Seated trunk rotation with a medicine ball"], "Extensor strengthening supports the spine and posture. Flexion and rotation increase vertebral compression fracture risk."],
        ["A 66-year-old woman with osteoporosis (T-score -2.8) asks how to pick up a laundry basket from the floor. What is the best technique to teach?", ["A hip hinge or squat with a neutral spine, keeping the load close", "Bending forward at the waist with straight knees", "Twisting while lifting to reduce effort", "Lifting quickly with a rounded back"], "Keeping the spine neutral and using the hips and legs avoids the flexion and rotation loads that cause vertebral fractures."],
        ["Which property of water helps reduce lower extremity edema during aquatic therapy?", ["Hydrostatic pressure", "Buoyancy", "Viscosity", "Surface tension"], "Hydrostatic pressure increases with depth and supports venous and lymphatic return, which helps reduce edema."],
        ["A patient with painful knee OA cannot tolerate full weight-bearing exercise on land. Why is aquatic exercise a good option?", ["Buoyancy reduces joint loading while allowing movement and strengthening", "Water removes all resistance so no effort is needed", "Hydrostatic pressure increases joint compression", "Aquatic exercise is limited to swimming laps"], "Buoyancy unloads the joints, and viscosity provides resistance that increases with speed, allowing strengthening with less pain."],
        ["Which condition is a contraindication to pool therapy?", ["An open, draining wound", "Mild knee osteoarthritis", "Chronic low back pain", "Well-controlled hypertension"], "Open wounds risk infection for the patient and contaminate the pool. The other conditions are common indications for aquatic exercise."]
      ]
    }
  ]
});
