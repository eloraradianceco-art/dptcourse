(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "modalities",
  track: "found",
  order: 9,
  code: "DPT 650",
  title: "Physical Agents & Modalities",
  credits: 3,
  desc: "The physiology, parameters, indications, contraindications, and evidence for thermal, acoustic, electrical, mechanical, and light-based agents. PTs use modalities as adjuncts to active care and must be able to select, dose, and safely withhold them.",
  objectives: [
    "Explain the physiological effects of superficial heat and cryotherapy and select between them by phase of healing",
    "Set ultrasound frequency, duty cycle, and treatment area to match tissue depth and treatment goal",
    "Choose electrical stimulation parameters for pain control, muscle strengthening, and iontophoresis",
    "Apply mechanical traction, compression, and hydrotherapy with correct positioning and dosage",
    "Identify contraindications and precautions for each agent and screen patients before application",
    "Integrate modalities as evidence-informed adjuncts to active rehabilitation"
  ],
  units: [
    {
      t: "Thermal Agents: Superficial Heat & Cryotherapy",
      sub: "Heat transfer, physiological effects, application, indications, contraindications and precautions",
      guide: [
        "<b>Modes of heat transfer</b>: <i>conduction</i> (hot pack, ice pack, paraffin), <i>convection</i> (whirlpool, fluidotherapy), <i>radiation</i> (infrared lamp), <i>conversion</i> (ultrasound, diathermy), <i>evaporation</i> (vapocoolant spray).",
        "<b>Superficial heat effects</b>: vasodilation and increased blood flow, increased metabolic rate, increased nerve conduction velocity, increased collagen extensibility, decreased pain and muscle spasm. Depth is about 1-2 cm or less.",
        "<b>Superficial heat application</b>: hot packs are stored at about 70-75°C (158-167°F) and wrapped in 6-8 layers of towel for 15-20 minutes; paraffin is about 52-54°C (126-130°F). Check skin every 5 minutes.",
        "<b>Cryotherapy effects</b>: vasoconstriction, decreased metabolic rate, decreased nerve conduction velocity, decreased pain and spasm, and reduced formation of edema after acute injury. Typical duration 10-20 minutes; ice massage 5-10 minutes.",
        "<b>Expected sensations with cold</b>: cold → burning → aching → numbness. Numbness signals analgesia has been reached.",
        "<b>Cold contraindications</b>: cold hypersensitivity (cold urticaria), cold intolerance such as Raynaud's phenomenon, cryoglobulinemia, paroxysmal cold hemoglobinuria, over regenerating peripheral nerves, and over areas of circulatory compromise. <b>Precautions</b>: over superficial nerves (fibular nerve at the fibular head, ulnar nerve at the elbow), open wounds, hypertension, impaired sensation or mentation, very young or old.",
        "<b>Heat contraindications</b>: recent or potential hemorrhage, thrombophlebitis or DVT in the area, impaired sensation or mentation, malignancy in the area, and infrared irradiation of the eyes. <b>Precautions</b> include acute inflammation, pregnancy, impaired circulation, edema, and cardiac insufficiency.",
        "<b>Choosing between them</b>: cold for acute injury and inflammation; heat for subacute or chronic stiffness and before stretching. Heat before stretch improves collagen extensibility."
      ],
      assignment: {
        title: "Thermal agent screening checklist",
        task: "Create a pre-application screening checklist you could use before any hot pack or cold pack. Include questions for each contraindication and precaution, a sensation test procedure, skin inspection steps, and what you will document. Then apply it to a mock patient with acute ankle sprain and a history of Raynaud's phenomenon and state your decision.",
        deliverable: "One-page checklist plus a short SOAP-style note for the mock patient."
      },
      gen: [],
      qs: [
        ["A hot pack wrapped in towels warms the skin through which mode of heat transfer?", ["Conduction", "Convection", "Radiation", "Conversion"], "Conduction is heat transfer through direct contact between surfaces. Convection requires a moving medium such as water or air."],
        ["Which agent heats tissue primarily by conversion?", ["Therapeutic ultrasound", "Hot pack", "Fluidotherapy", "Paraffin bath"], "Conversion turns another energy form (mechanical sound energy) into heat. Hot packs and paraffin conduct; fluidotherapy convects."],
        ["Which physiological effect is produced by cryotherapy?", ["Decreased nerve conduction velocity", "Increased metabolic rate", "Increased collagen extensibility", "Vasodilation of superficial vessels during application"], "Cold slows nerve conduction, which contributes to analgesia. Increased metabolism, extensibility, and vasodilation are effects of heat."],
        ["A patient sprained an ankle 2 hours ago and has swelling and warmth. Which thermal agent is most appropriate?", ["Cold pack with elevation", "Moist hot pack", "Paraffin dip", "Warm whirlpool with the foot dependent"], "Cold limits metabolic demand and edema formation in the acute phase. Heat and a dependent warm whirlpool could increase swelling."],
        ["During ice massage, a patient reports cold, then burning, then aching. What is the next expected sensation?", ["Numbness", "Sharp shooting pain", "Warmth", "Itching"], "The normal sequence is cold, burning, aching, then numbness, which indicates analgesia."],
        ["Which condition is a contraindication to cryotherapy?", ["Cold urticaria", "Acute muscle strain", "Post-exercise muscle soreness", "Acute bursitis"], "Cold urticaria is a histamine-mediated hypersensitivity reaction to cold. The other conditions are common indications for cold."],
        ["When applying a cold pack to the lateral knee, which structure requires particular caution?", ["The common fibular (peroneal) nerve near the fibular head", "The femoral artery", "The patellar tendon", "The saphenous vein"], "The fibular nerve is superficial at the fibular head, and prolonged cold there has caused nerve palsy. Limit time and avoid excess pressure."],
        ["A patient with decreased sensation in the lower leg from diabetic neuropathy is scheduled for a hot pack. What is the most appropriate action?", ["Do not apply heat to the area of impaired sensation", "Apply heat with fewer towel layers to speed treatment", "Apply heat for a shorter time without checking the skin", "Apply heat because sensation is not relevant to burns"], "Impaired sensation prevents the patient from reporting excessive heat, which creates a burn risk. Choose another approach for that area."],
        ["A patient with chronic shoulder stiffness will perform stretching. What is the best use of a thermal agent?", ["Apply heat before stretching to increase collagen extensibility", "Apply cold before stretching to increase tissue extensibility", "Apply heat only after stretching to cool the tissue", "Avoid all thermal agents because they reduce range of motion"], "Raising tissue temperature increases collagen extensibility, so heating before or during stretch improves gains in chronic stiffness."],
        ["How many towel layers are typically placed between a standard moist hot pack and the skin?", ["6-8 layers", "1-2 layers", "12-15 layers", "No towels are needed"], "Standard practice is 6-8 layers of towel (or a terry cover equivalent) to prevent burns. Check the skin after about 5 minutes."]
      ]
    },
    {
      t: "Therapeutic Ultrasound",
      sub: "Thermal vs non-thermal effects, frequency and depth, duty cycle, ERA, BNR, contraindications",
      guide: [
        "<b>What it is</b>: a high-frequency mechanical (acoustic) wave produced by a piezoelectric crystal. It needs a coupling medium (gel) because air reflects nearly all of it.",
        "<b>Frequency and depth</b>: <b>1 MHz</b> for deeper tissue (about 2-5 cm); <b>3 MHz</b> for superficial tissue (about 1-2 cm). 3 MHz is absorbed faster and heats about three times faster than 1 MHz.",
        "<b>Duty cycle</b>: <span class='formula'>duty cycle = on time ÷ (on + off time) × 100%</span>. 100% (continuous) is used for thermal effects; low duty cycles such as 20% are used for non-thermal effects.",
        "<b>Thermal effects</b>: increased blood flow, metabolism, collagen extensibility, and pain threshold. Mild heating is about 1°C, moderate about 2-3°C, and vigorous about 3-4°C or more; vigorous heating is needed to increase collagen extensibility.",
        "<b>Non-thermal effects</b>: stable cavitation, acoustic streaming, and microstreaming, which are thought to alter cell membrane permeability. Used when heating is undesirable, such as in acute inflammation.",
        "<b>ERA and treatment area</b>: the effective radiating area is the part of the transducer that produces sound. Treat a small area, only a few times the ERA (texts cite roughly <b>2-4 × ERA</b>); keep the sound head moving to avoid hot spots.",
        "<b>BNR (beam nonuniformity ratio)</b>: peak intensity ÷ average intensity. Lower is better (more uniform, fewer hot spots).",
        "<b>Contraindications</b>: malignancy in the area, pregnancy (over the abdomen, pelvis, or low back), over CNS tissue (such as after laminectomy), over methyl methacrylate cement or plastic components, over a pacemaker, over thrombophlebitis, over the eyes, and over reproductive organs. <b>Precautions</b>: acute inflammation (thermal), open epiphyseal plates, fractures, breast implants."
      ],
      assignment: {
        title: "Ultrasound parameter cards",
        task: "Write parameter cards for three cases: (1) chronic plantar fascia stiffness before stretching, (2) subacute lateral epicondyle tendon irritation in a thin forearm, (3) deep hip external rotator stiffness in a large thigh. For each, specify frequency, duty cycle, treatment area relative to ERA, intended effect, and contraindication screen.",
        deliverable: "Three index-card-style parameter sheets with a one-line rationale each."
      },
      gen: [],
      qs: [
        ["You want to heat a structure about 4 cm deep in the thigh. Which ultrasound frequency is most appropriate?", ["1 MHz", "3 MHz", "5 MHz", "Frequency does not affect depth"], "Lower frequency is absorbed less in superficial tissue, so 1 MHz reaches deeper structures (about 2-5 cm)."],
        ["Which ultrasound frequency is most appropriate for the superficial lateral epicondyle region?", ["3 MHz", "1 MHz", "0.5 MHz", "100 Hz"], "3 MHz is absorbed in superficial tissue (about 1-2 cm), which suits bony, thin areas like the elbow."],
        ["An ultrasound unit is on for 2 ms and off for 8 ms in each cycle. What is the duty cycle?", ["20%", "25%", "80%", "40%"], "Duty cycle = on ÷ total period = 2 ÷ (2 + 8) = 0.2 = 20%. 25% would be on ÷ off, which is a common mistake."],
        ["Which parameter choice best produces thermal effects with ultrasound?", ["100% (continuous) duty cycle", "20% pulsed duty cycle", "10% pulsed duty cycle", "The lowest possible intensity"], "Continuous ultrasound delivers energy without off periods, allowing tissue temperature to rise. Low duty cycles are used for non-thermal effects."],
        ["Two transducers both have an ERA of 5 cm². One has a BNR of 2:1 and the other 6:1. Which is preferred and why?", ["The 2:1 transducer, because its beam is more uniform", "The 6:1 transducer, because it delivers higher peak intensity", "Either, because BNR does not affect safety", "The 6:1 transducer, because it heats faster and more evenly"], "A lower BNR means peak intensity is closer to average, producing fewer hot spots and more comfortable, safer treatment."],
        ["A sound head has an ERA of 5 cm². Which treatment area is most appropriate for a thermal ultrasound treatment?", ["About 10-15 cm², a few times the ERA", "About 50 cm², ten times the ERA", "About 150 cm², the whole anterior thigh", "About 2 cm², with the sound head held still"], "The treatment area should be only a few times the ERA (texts cite about 2-4 times). Larger areas spread the energy too thin to heat tissue, and a stationary head creates hot spots."],
        ["Stable cavitation and acoustic streaming are examples of which ultrasound effects?", ["Non-thermal (mechanical) effects", "Thermal effects only", "Electrical effects", "Photochemical effects"], "Cavitation and streaming are mechanical, non-thermal effects. They are emphasized with pulsed, low duty cycle ultrasound."],
        ["A patient who is 14 weeks pregnant has low back pain. Is therapeutic ultrasound over the lumbar region appropriate?", ["No, ultrasound over the low back, abdomen, or pelvis during pregnancy is contraindicated", "Yes, if pulsed at 20% duty cycle", "Yes, if 3 MHz is used to limit depth", "Yes, after the first trimester"], "Ultrasound is contraindicated over the abdomen, pelvis, and low back in pregnancy because of possible effects on the fetus. Changing parameters does not remove the contraindication."],
        ["A patient had a lumbar laminectomy 4 months ago and now has paraspinal muscle tightness at that level. What is the main concern with ultrasound directly over the surgical site?", ["Possible exposure of spinal cord (CNS) tissue to ultrasound", "Ultrasound will reflect off the hardware and heat the gel", "Ultrasound will dissolve scar tissue too quickly", "There is no concern because the incision has healed"], "Laminectomy removes bone that normally shields the cord, so ultrasound over the site may reach CNS tissue, which is a contraindication."],
        ["During continuous ultrasound, a patient reports a deep, aching pain under the sound head. What should the clinician do first?", ["Stop or reduce intensity and check technique, such as sound head movement and gel coverage", "Increase intensity to push past the discomfort", "Hold the sound head still over the painful point", "Switch to a smaller treatment area at the same intensity"], "Deep aching suggests periosteal overheating. Reduce intensity, keep the head moving, and ensure adequate coupling."]
      ]
    },
    {
      t: "Electrical Stimulation",
      sub: "TENS, NMES, IFC, iontophoresis, parameters, gate control theory, contraindications",
      guide: [
        "<b>Key parameters</b>: <i>frequency</i> (pulses per second, pps), <i>pulse duration</i> (μs), <i>amplitude</i> (mA), <i>duty cycle</i> (on:off time), and <i>ramp</i> (gradual rise and fall).",
        "<b>Gate control theory (Melzack &amp; Wall, 1965)</b>: activation of large-diameter A-beta sensory fibers inhibits transmission of nociceptive input at the dorsal horn (substantia gelatinosa), 'closing the gate.' This is the rationale for sensory-level TENS.",
        "<b>Conventional (high-rate) TENS</b>: about 80-150 pps, short pulse duration (about 50-100 μs), comfortable sensory-level intensity, no motor contraction. Works through gate control and has rapid onset.",
        "<b>Low-rate (acupuncture-like) TENS</b>: about 2-10 pps, longer pulse duration, motor-level intensity with visible twitches. Thought to work through release of endogenous opioids; slower onset, longer carryover.",
        "<b>NMES for strengthening</b>: requires an intact peripheral nerve. About 35-50 pps for a smooth tetanic contraction, intensity to at least 50% of maximal voluntary contraction if tolerated, ramp up, and a long rest (start near 1:5, such as 10 s on and 50 s off) to limit fatigue. <b>Russian current</b> is 2,500 Hz delivered in 50 bursts per second.",
        "<b>Interferential current (IFC)</b>: two medium-frequency currents (about 4,000 Hz) that differ slightly. The <b>beat frequency</b> equals the difference between them (4,000 and 4,100 Hz → 100 Hz).",
        "<b>Iontophoresis</b>: continuous direct current drives charged medication across the skin. Like charges repel: a negative drug (such as dexamethasone or acetate) goes under the <b>cathode (−)</b>; a positive drug (such as lidocaine) goes under the <b>anode (+)</b>. Dose = current × time (<span class='formula'>mA × min</span>), commonly about 40 mA·min.",
        "<b>Contraindications</b>: demand pacemaker or unstable arrhythmia, placement over the carotid sinus, over venous or arterial thrombosis or thrombophlebitis, and over the pelvis, abdomen, trunk, or low back during pregnancy. <b>Precautions</b>: cardiac disease, impaired sensation or mentation, malignancy, skin irritation or open wounds. Avoid the anterior neck and the eyes."
      ],
      assignment: {
        title: "E-stim protocol sheet",
        task: "Write two complete e-stim protocols: (1) conventional TENS for a client with chronic low back pain, and (2) NMES for quadriceps strengthening after total knee arthroplasty. For each, list electrode placement, frequency, pulse duration, intensity target, on:off time, ramp, treatment time, contraindication screen, and how you will progress or wean the patient.",
        deliverable: "Two-protocol reference sheet (one page each)."
      },
      gen: [],
      qs: [
        ["Gate control theory states that pain transmission is reduced at the dorsal horn when which fibers are stimulated?", ["Large-diameter A-beta fibers", "Small-diameter C fibers", "A-delta nociceptive fibers", "Alpha motor neurons"], "Input from large A-beta fibers inhibits nociceptive transmission at the substantia gelatinosa. C and A-delta fibers carry the nociceptive signal itself."],
        ["Which parameter set best describes conventional (high-rate) TENS?", ["100 pps, 60 μs, comfortable tingling without contraction", "4 pps, 250 μs, strong visible muscle twitches", "50 pps, 300 μs, 10 s on and 50 s off at motor level", "Continuous direct current at 4 mA"], "Conventional TENS uses high frequency, short pulse duration, and sensory-level intensity. Low-rate TENS uses low frequency and motor-level intensity."],
        ["Low-rate, acupuncture-like TENS is thought to reduce pain primarily by:", ["Stimulating release of endogenous opioids", "Closing the gate at the dorsal horn only", "Increasing tissue temperature", "Driving medication through the skin"], "Low-rate motor-level TENS is linked to endogenous opioid release, giving slower onset but longer-lasting relief."],
        ["A patient is 2 weeks post total knee arthroplasty and cannot fully activate the quadriceps. Which NMES parameter set is most appropriate?", ["About 50 pps, ramped, high tolerable intensity, about 10 s on and 50 s off", "About 5 pps, sensory level, continuous", "About 100 pps, 50 μs, sensory level, continuous", "Direct current at 2 mA for 20 minutes"], "Strengthening NMES requires a tetanic contraction (about 35-50 pps), strong intensity, ramping, and a long rest period to limit fatigue."],
        ["Why is a long off-time (such as a 1:5 on:off ratio) used early in an NMES strengthening program?", ["To limit muscle fatigue, because NMES recruits motor units synchronously", "To allow the skin to cool between contractions", "To increase the beat frequency", "To prevent endogenous opioid release"], "Electrically elicited contractions fatigue quickly because the same motor units fire synchronously. Long rests preserve contraction quality."],
        ["An IFC unit uses one channel at 4,000 Hz and another at 4,080 Hz. What is the beat frequency?", ["80 Hz", "4,040 Hz", "8,080 Hz", "40 Hz"], "Beat frequency equals the difference between the two carrier frequencies: 4,080 − 4,000 = 80 Hz."],
        ["Dexamethasone sodium phosphate carries a negative charge. For iontophoresis, it should be placed under which electrode?", ["The cathode (negative electrode)", "The anode (positive electrode)", "Either electrode", "The dispersive electrode only"], "Like charges repel, so a negatively charged drug is driven into the tissue from the negative electrode (cathode)."],
        ["An iontophoresis treatment runs at 4 mA for 10 minutes. What dose is delivered?", ["40 mA·min", "14 mA·min", "2.5 mA·min", "400 mA·min"], "Iontophoresis dose = current × time = 4 mA × 10 min = 40 mA·min."],
        ["A patient with a demand-type cardiac pacemaker asks for TENS to the thoracic spine. What is the most appropriate response?", ["Do not apply; electrical stimulation is contraindicated with a demand pacemaker", "Apply TENS at a low intensity", "Apply TENS only on the side opposite the pacemaker", "Apply TENS but switch to low-rate settings"], "E-stim can interfere with demand pacemakers. This is a contraindication that parameter changes do not overcome."],
        ["A patient has complete denervation of the tibialis anterior after a nerve laceration. Why will standard NMES not produce a useful contraction?", ["NMES works by depolarizing the peripheral nerve, which is absent", "The pulse frequency is too high for any muscle", "Denervated muscle is too strong to stimulate", "NMES only works on upper extremity muscles"], "NMES depolarizes motor nerves, which have a much lower threshold than muscle fibers. Denervated muscle requires very long pulse durations to stimulate directly."]
      ]
    },
    {
      t: "Mechanical Agents: Traction, Compression & Hydrotherapy",
      sub: "Spinal traction dosage and position, intermittent pneumatic compression, bandaging, whirlpool and aquatic therapy",
      guide: [
        "<b>Spinal traction effects</b>: joint distraction, reduced disc protrusion, soft tissue stretch, and muscle relaxation. Goal-dependent force: lower forces for relaxation and soft tissue, higher forces for joint separation.",
        "<b>Lumbar traction</b>: separation of lumbar vertebrae generally requires about <b>50% of body weight</b>. A split table reduces friction from the lower body. Hip and knee flexion (hook-lying) flattens lordosis and opens the posterior elements.",
        "<b>Cervical traction</b>: start low (about 3-4.5 kg, 7-10 lb) for relaxation; separation generally requires more. Position the neck in about <b>20-30° of flexion</b> to open the posterior structures and foramina. Avoid chin straps loading the TMJ.",
        "<b>Traction contraindications</b>: where motion is contraindicated (such as unstable fracture), acute injury or inflammation, joint hypermobility or instability, peripheralization of symptoms during traction, and uncontrolled hypertension. <b>Precautions</b>: tumor or infection, osteoporosis, rheumatoid arthritis (upper cervical ligament laxity), pregnancy, claustrophobia, TMJ problems.",
        "<b>Intermittent pneumatic compression (IPC)</b>: used for edema, lymphedema, venous insufficiency, and DVT prevention. Elevate the limb during treatment; inflation pressure is usually kept below diastolic blood pressure.",
        "<b>Compression contraindications</b>: heart failure or pulmonary edema, known or suspected DVT, obstructed lymphatic or venous return, severe peripheral arterial disease, acute local infection, and acute trauma or fracture. Check pulses or ankle-brachial index for arterial disease before compressing a limb.",
        "<b>Short-stretch bandages</b> (low resting, high working pressure) are standard for lymphedema; long-stretch (elastic) bandages have high resting pressure and are not worn overnight.",
        "<b>Hydrotherapy</b>: whirlpool temperatures are about 0-26°C cold, 33-35.5°C neutral, and 37-40°C hot; limit full-body hot immersion. Aquatic exercise uses buoyancy, hydrostatic pressure, and drag. Contraindications to pool immersion include bowel incontinence, infected open wounds, uncontrolled seizures, and severe cardiac or respiratory compromise."
      ],
      assignment: {
        title: "Mechanical traction setup sheet",
        task: "Write a setup and safety sheet for mechanical lumbar traction for a 90 kg patient with a lumbar disc-related radiculopathy whose symptoms centralize with extension. Specify patient position, force for initial session and target force for separation, on/off cycle, treatment time, what you will reassess, and stop criteria (including peripheralization). Add a two-line screen for compression therapy for the same patient's ankle edema.",
        deliverable: "One-page setup and safety sheet."
      },
      gen: [],
      qs: [
        ["Approximately what percentage of body weight is generally needed to separate lumbar vertebrae with mechanical traction?", ["About 50%", "About 7%", "About 10%", "About 100%"], "Lumbar separation generally requires about half of body weight. Lower forces are used for muscle relaxation or the first session."],
        ["For cervical traction aimed at opening the intervertebral foramina, the neck is usually positioned in:", ["About 20-30° of flexion", "Full extension", "Neutral with lateral flexion away from symptoms", "About 45° of rotation"], "Flexion of about 20-30° increases posterior separation and foraminal opening. Extension narrows the foramina."],
        ["During mechanical lumbar traction, a patient's leg pain spreads farther down into the calf. What should the clinician do?", ["Stop or modify the traction, because peripheralization indicates an unfavorable response", "Increase the force to overcome the symptoms", "Continue at the same settings to finish the session", "Add a hot pack and continue"], "Peripheralization of symptoms during traction suggests worsening nerve root irritation and is a reason to stop or change treatment."],
        ["Why is a split table used for lumbar traction?", ["It reduces friction from the lower body so more force reaches the spine", "It increases friction to stabilize the pelvis", "It positions the lumbar spine in extension", "It replaces the need for a thoracic harness"], "Without a split table, much of the applied force is spent overcoming friction between the lower body and the table."],
        ["A patient with rheumatoid arthritis asks for cervical traction. What is the main safety concern?", ["Possible upper cervical ligamentous laxity and instability", "Increased risk of carpal tunnel syndrome", "Excessive muscle hypertrophy", "Impaired lymphatic flow in the arm"], "RA can damage the transverse ligament and other upper cervical ligaments, so traction may stress an unstable atlantoaxial joint."],
        ["Which condition is a contraindication to intermittent pneumatic compression?", ["Congestive heart failure with pulmonary edema", "Post-mastectomy lymphedema", "Chronic venous insufficiency edema", "Post-surgical DVT prevention in a patient without DVT"], "Pushing fluid centrally in a patient with heart failure and pulmonary edema can overload the heart. The other options are indications."],
        ["A patient with a swollen, warm, tender calf after recent surgery is referred for edema management. What is the most appropriate action before using compression?", ["Hold compression and refer for medical evaluation to rule out DVT", "Apply intermittent pneumatic compression to reduce the swelling", "Apply a long-stretch bandage and begin walking", "Massage the calf to move the fluid proximally"], "These signs suggest possible DVT. Compression or massage could dislodge a clot, so medical evaluation comes first."],
        ["Before applying compression bandaging to a patient with leg edema and diabetes, what should you assess for arterial disease?", ["Distal pulses or ankle-brachial index", "Deep tendon reflexes", "Two-point discrimination", "Blood glucose only"], "Compression on a limb with significant arterial insufficiency can cause ischemia. Pulses and ABI screen arterial status."],
        ["Which bandage type is preferred for lymphedema because it provides low resting pressure and high working pressure?", ["Short-stretch bandage", "Long-stretch elastic bandage", "Tubular cotton stockinette", "Adhesive kinesiology tape"], "Short-stretch bandages resist expansion of muscle during activity (high working pressure) while being comfortable at rest."],
        ["Which patient is most clearly inappropriate for group pool therapy?", ["A patient with bowel incontinence", "A patient with knee osteoarthritis", "A patient with chronic low back pain", "A patient recovering from an ankle fracture who is cleared to bear weight"], "Bowel incontinence is a contraindication to shared pool immersion due to contamination risk. The others are typical aquatic therapy candidates."]
      ]
    },
    {
      t: "Light, Evidence & Clinical Decision Making",
      sub: "Laser and photobiomodulation basics, contraindications, evidence for modalities, choosing and documenting",
      guide: [
        "<b>Laser light properties</b>: <i>monochromatic</i> (single wavelength), <i>coherent</i> (in phase), and <i>collimated</i> (minimal divergence). Therapeutic lasers used in rehab are usually low-level Class 3B devices; some clinics also use higher-power Class 4 lasers.",
        "<b>Photobiomodulation (PBM)</b>: red and near-infrared light (roughly 600-1,000 nm) absorbed by cellular chromophores such as cytochrome c oxidase in mitochondria, influencing cellular metabolism. Longer wavelengths in this range penetrate deeper.",
        "<b>Dose</b>: energy density in joules per square centimeter (<span class='formula'>J/cm² = power (W) × time (s) ÷ area (cm²)</span>). Both too little and too much may be less effective.",
        "<b>Laser contraindications</b>: direct irradiation of the eyes (everyone wears wavelength-specific goggles), over malignancy, over hemorrhaging regions, over the thyroid or other endocrine glands, and within months after radiation therapy. <b>Precautions</b>: low back or abdomen during pregnancy, open epiphyseal plates, impaired sensation or mentation, photosensitivity.",
        "<b>Role of modalities</b>: modalities are <b>adjuncts</b> that help a patient participate in active treatment (exercise, education, manual therapy). Clinical practice guidelines generally do not support passive modalities as stand-alone treatment for conditions such as low back pain.",
        "<b>Where evidence is stronger</b>: NMES for quadriceps strength after total knee arthroplasty is supported by clinical practice guidelines. Cryotherapy is widely used for short-term postoperative pain and swelling management.",
        "<b>Decision making</b>: match the agent to the stage of healing and goal (acute: cold, compression, elevation; chronic: heat before stretching, NMES for activation), screen contraindications, set measurable goals, reassess, and discontinue agents that are not producing change.",
        "<b>Documentation</b>: record the agent, parameters, body area, patient position, duration, skin check before and after, response, and how it supported the plan of care."
      ],
      assignment: {
        title: "Modality decision tree",
        task: "Build a decision tree that starts with the patient's main problem (pain, edema, weakness, stiffness) and stage of healing, screens contraindications, then lands on an agent with parameters and a reassessment checkpoint. Test it on two cases: a client 3 days after an acute hamstring strain and a client 4 weeks after TKA with an extension lag.",
        deliverable: "One-page flowchart plus a 200-word walkthrough of both test cases."
      },
      gen: [],
      qs: [
        ["Which set of properties distinguishes laser light from ordinary light?", ["Monochromatic, coherent, and collimated", "Polychromatic, incoherent, and divergent", "Ultraviolet, ionizing, and coherent", "Monochromatic, incoherent, and divergent"], "Laser light is a single wavelength, in phase, and minimally divergent. Ordinary light is polychromatic, incoherent, and divergent."],
        ["What safety measure is required for everyone in the room during therapeutic laser use?", ["Wavelength-specific protective eyewear", "Lead aprons", "Hearing protection", "Grounding mats"], "Direct or reflected laser exposure can damage the retina, so everyone wears goggles matched to the device wavelength."],
        ["A laser delivers 0.5 W for 20 seconds over a 1 cm² area. What energy density is delivered?", ["10 J/cm²", "40 J/cm²", "2.5 J/cm²", "0.025 J/cm²"], "Energy density = power × time ÷ area = 0.5 W × 20 s ÷ 1 cm² = 10 J/cm²."],
        ["A patient has a history of thyroid disease and asks for laser treatment to the anterior neck for muscle pain. What is the best response?", ["Do not apply laser over the thyroid gland", "Apply laser at a lower dose over the thyroid", "Apply laser with the patient's eyes closed", "Apply laser only if the pain is chronic"], "Irradiation over the thyroid and other endocrine glands is contraindicated. Lowering dose does not remove the contraindication."],
        ["Which wavelength range is used for photobiomodulation?", ["Red to near-infrared (about 600-1,000 nm)", "Ultraviolet C (about 100-280 nm)", "X-ray range", "Microwave range"], "PBM uses red and near-infrared light, which penetrates tissue and is absorbed by mitochondrial chromophores. UV and X-rays are not used for PBM."],
        ["According to current practice guidelines, what is the most appropriate role for modalities in managing chronic low back pain?", ["Adjuncts to active treatment such as exercise and education, not stand-alone care", "Primary treatment delivered every visit", "Replacements for exercise when the patient is unmotivated", "Only treatment needed until pain fully resolves"], "Guidelines emphasize active care for low back pain. Passive modalities, if used, should support participation in active treatment."],
        ["For a patient after total knee arthroplasty with persistent quadriceps weakness, which modality has the strongest guideline support?", ["Neuromuscular electrical stimulation to the quadriceps", "Therapeutic ultrasound to the knee joint", "Superficial heat to the anterior thigh", "Low-level laser to the incision"], "NMES for quadriceps strengthening after TKA is supported by clinical practice guidelines. The others lack comparable evidence for strength."],
        ["A client is 2 days after an acute hamstring strain with pain and swelling. What is the most appropriate agent choice?", ["Cryotherapy with compression and elevation", "Continuous 1 MHz ultrasound for vigorous heating", "Moist hot pack before aggressive stretching", "Hot whirlpool with the leg dependent"], "In the acute inflammatory phase, cold, compression, and elevation control pain and swelling. Heat and vigorous thermal ultrasound could worsen inflammation."],
        ["After 4 sessions of TENS, a patient's pain and function are unchanged. What is the best clinical decision?", ["Reassess and discontinue or change the intervention", "Continue TENS indefinitely because it is low risk", "Double the TENS treatment time without reassessing", "Add more passive modalities at each visit"], "Agents that are not producing measurable change should be stopped or modified. Reassessment guides evidence-based decisions."],
        ["Which documentation entry for a modality is most complete?", ["'Moist hot pack, 6 towel layers, R lumbar, prone, 15 min; skin intact before and after; pain 6/10 to 4/10; followed by lumbar mobility exercise'", "'Heat to back, tolerated well'", "'Hot pack given per protocol'", "'Patient relaxed with heat; will continue'"], "Complete documentation lists agent, parameters, area, position, time, skin checks, response, and how it fit the plan of care."]
      ]
    }
  ]
});
