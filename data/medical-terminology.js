(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "medical-terminology",
  track: "prereq",
  order: 7,
  code: "PRE 141",
  title: "Medical Terminology",
  credits: 2,
  desc: "The building blocks of medical language: word parts, directional terms, body-system vocabulary, and the abbreviations that fill every chart. A PT reads referrals, op reports, and notes all day, so fluent terminology is how you read the chart quickly and get it right.",
  objectives: [
    "Break unfamiliar medical terms into prefix, root, combining vowel, and suffix to work out their meaning",
    "Describe body position, movement, and location using standard planes, axes, and directional terms",
    "Define common musculoskeletal, neurological, cardiopulmonary, and systemic terms seen in PT referrals",
    "Interpret standard PT and medical abbreviations, including weight-bearing orders and assist levels",
    "Recognize abbreviations that are unsafe to use and write documentation in clear, standard terms"
  ],
  units: [
    {
      t: "Word Parts",
      sub: "Prefixes, suffixes, roots, and combining forms",
      guide: [
        "<b>Structure</b>: prefix + root + combining vowel + suffix. <span class='formula'>oste/o + arthr + -itis</span> = inflammation of bone and joint. Read the suffix first, then the beginning of the word.",
        "<b>Combining vowel</b> (usually <i>o</i>) links a root to a suffix that starts with a consonant (arthr/o/scopy). Drop it before a vowel (arthr/itis).",
        "<b>Common roots</b>: arthr/o joint, chondr/o cartilage, my/o muscle, oste/o bone, ten/o and tendin/o tendon, spondyl/o and vertebr/o vertebra, neur/o nerve, cardi/o heart, pneum/o and pulmon/o lung, hepat/o liver, nephr/o and ren/o kidney.",
        "<b>Prefixes</b>: brady- slow, tachy- fast, hyper- above or excessive, hypo- below or deficient, dys- difficult or abnormal, a-/an- without, hemi- half, bi- two, peri- around, intra- within, sub- below, poly- many.",
        "<b>Surgical suffixes</b>: -ectomy excision (removal), -otomy incision (cutting into), -ostomy creating an opening, -plasty surgical repair or reconstruction, -desis binding or fusion (arthrodesis), -scopy visual exam with a scope.",
        "<b>Condition suffixes</b>: -itis inflammation, -algia and -dynia pain, -osis abnormal condition, -pathy disease, -malacia softening, -penia deficiency, -plegia paralysis, -paresis weakness, -listhesis slipping, -megaly enlargement.",
        "<b>PT examples</b>: chondromalacia patellae = softening of the patellar cartilage; spondylolisthesis = forward slip of one vertebra on another; osteopenia = reduced bone mass below normal.",
        "<b>Trap</b>: -plegia (paralysis) vs -paresis (weakness). Hemiparesis is one-sided weakness; hemiplegia is one-sided paralysis."
      ],
      assignment: {
        title: "Referral decoder",
        task: "Collect 15 medical terms from real or sample referrals and op reports (for example arthroplasty, spondylolisthesis, tenosynovitis, hemiparesis). Break each into its word parts, give the literal meaning, and write a one-line plain-language version you could say to a patient.",
        deliverable: "A three-column table (term, word parts with meanings, patient-friendly explanation) of 15 terms."
      },
      gen: [],
      qs: [
        ["The suffix -itis means:", ["Inflammation", "Softening", "Enlargement", "Pain"], "-itis means inflammation (tendinitis, bursitis). Softening is -malacia, enlargement is -megaly, and pain is -algia."],
        ["The prefix brady- means:", ["Slow", "Fast", "Difficult", "Absent"], "Brady- means slow, as in bradycardia (slow heart rate). Tachy- is the opposite (fast)."],
        ["A referral reads 's/p total knee arthroplasty.' What does arthroplasty mean?", ["Surgical repair or reconstruction of a joint", "Surgical fusion of a joint", "Incision into a joint", "Visual examination inside a joint"], "-plasty means surgical repair or reconstruction; a total knee arthroplasty is a joint replacement. Fusion is arthrodesis, incision is arthrotomy, and scope exam is arthroscopy."],
        ["Which suffix means surgically creating a new opening?", ["-ostomy", "-ectomy", "-otomy", "-plasty"], "-ostomy creates an opening (colostomy). -ectomy removes, -otomy cuts into, and -plasty repairs. These three get mixed up often."],
        ["A patient's chart lists 'right hemiparesis.' What should you expect?", ["Weakness on the right side of the body", "Paralysis of both lower extremities", "Complete paralysis on the right side of the body", "Weakness in all four limbs"], "Hemi- = half and -paresis = weakness, so this is right-sided weakness. Complete paralysis would be -plegia; both legs is paraplegia; four limbs is tetraparesis."],
        ["A client tells you their doctor diagnosed 'dysphagia.' This means difficulty with:", ["Swallowing", "Speaking", "Breathing", "Walking"], "Dys- = difficult and -phagia = eating or swallowing. Speech problems are dysarthria or aphasia, breathing difficulty is dyspnea."],
        ["A teenage runner's MRI report says 'chondromalacia patellae.' What does that describe?", ["Softening of the cartilage on the underside of the kneecap", "Inflammation of the patellar tendon", "A fracture of the patella", "Inflammation of the bursa in front of the kneecap"], "Chondr/o = cartilage and -malacia = softening. Patellar tendon inflammation would be patellar tendinitis, and prepatellar bursitis is the bursa."],
        ["Which term means low muscle tone?", ["Hypotonia", "Hypertonia", "Dystonia", "Atonia"], "Hypo- = below or deficient, so hypotonia is reduced tone. Hypertonia is increased tone, dystonia is abnormal sustained contractions, and atonia is a complete absence of tone."],
        ["A client with neck pain reports 'paresthesia' in the thumb and index finger. What are they describing?", ["Abnormal sensations such as tingling or pins and needles", "Complete loss of sensation", "Muscle weakness without sensory change", "Increased pain from light touch only"], "Paresthesia is abnormal sensation such as tingling or prickling. Complete loss is anesthesia, and pain from normally non-painful touch is allodynia."],
        ["A lumbar X-ray report reads 'grade 1 L5-S1 spondylolisthesis.' Which is the best interpretation?", ["L5 has slipped forward relative to S1", "There is a stress fracture of the L5 pars without any slippage", "The L5-S1 disc has herniated", "L5 and S1 have been surgically fused"], "Spondyl/o = vertebra and -listhesis = slipping, so one vertebra has slid on the one below it. A pars defect without slip is spondylolysis, which is a common mix-up."]
      ]
    },
    {
      t: "Body Directions, Planes & Regions",
      sub: "Anatomical position, planes and axes, directional terms, abdominal regions",
      guide: [
        "<b>Anatomical position</b>: standing upright, facing forward, arms at sides, <b>palms facing forward</b>, feet forward. All directional terms assume this position.",
        "<b>Sagittal plane</b> divides the body into left and right and contains flexion and extension, around a medial-lateral axis.",
        "<b>Frontal (coronal) plane</b> divides the body into front and back and contains abduction, adduction, and lateral flexion, around an anterior-posterior axis.",
        "<b>Transverse (horizontal) plane</b> divides the body into top and bottom and contains rotation, around a vertical (longitudinal) axis.",
        "<b>Paired terms</b>: anterior/posterior, superior/inferior, medial/lateral, proximal/distal (limbs, measured from the trunk), superficial/deep, ipsilateral (same side) vs contralateral (opposite side), bilateral (both sides).",
        "<b>Positions</b>: supine = lying face up; prone = lying face down; side-lying. Palmar is the palm side of the hand, plantar is the sole of the foot, and dorsal is the back of the hand or top of the foot.",
        "<b>Foot and forearm</b>: inversion turns the sole inward and eversion turns it outward. Supination turns the palm up (forward), and pronation turns the palm down (backward).",
        "<b>Abdominal quadrants</b>: RUQ has the liver and gallbladder, LUQ the stomach and spleen, and RLQ the appendix. Gallbladder problems can refer pain to the right shoulder or scapula, which matters for anyone doing hands-on work."
      ],
      assignment: {
        title: "Plane and axis movement audit",
        task: "Pick five exercises you already coach (for example squat, lateral lunge, cable rotation, side plank, lat pulldown). For each, name the main joint motions, the plane and axis each happens in, and the prime movers. Then write one cue for each exercise using correct directional terms.",
        deliverable: "A one-page table: exercise, joint motion, plane, axis, prime mover, coaching cue."
      },
      gen: [],
      qs: [
        ["Shoulder abduction occurs in which plane?", ["Frontal", "Sagittal", "Transverse", "Oblique"], "Abduction and adduction happen in the frontal plane around an anterior-posterior axis. Flexion and extension are sagittal, and rotation is transverse."],
        ["Trunk rotation during a cable woodchop occurs mainly in which plane and around which axis?", ["Transverse plane, vertical axis", "Sagittal plane, medial-lateral axis", "Frontal plane, anterior-posterior axis", "Transverse plane, medial-lateral axis"], "Rotation happens in the transverse plane around a vertical (longitudinal) axis. Each plane pairs with the axis perpendicular to it."],
        ["You ask a client to lie face down on the table for posterior chain work. What is this position called?", ["Prone", "Supine", "Side-lying", "Fowler's"], "Prone is face down and supine is face up. Fowler's position is semi-sitting with the head of the bed raised."],
        ["A patient had a stroke in the right cerebral hemisphere and now has left-sided weakness. The weakness is ___ to the lesion.", ["Contralateral", "Ipsilateral", "Bilateral", "Proximal"], "Motor pathways cross, so a cerebral lesion causes weakness on the opposite (contralateral) side. Ipsilateral means the same side."],
        ["The knee is ___ to the hip.", ["Distal", "Proximal", "Medial", "Superior"], "On a limb, distal means farther from where the limb attaches to the trunk. The knee is farther from the trunk than the hip."],
        ["Which statement correctly describes the gastrocnemius relative to the soleus?", ["The gastrocnemius is superficial to the soleus", "The gastrocnemius is deep to the soleus", "The gastrocnemius is medial to the soleus", "The gastrocnemius is distal to the soleus"], "The gastrocnemius lies over the soleus, so it is superficial. The soleus is deep and attaches lower on the tibia and fibula."],
        ["During abdominal soft-tissue work, a client reports tenderness in the right upper quadrant that radiates to the right scapula, and it gets worse after fatty meals. Which organ is most likely involved?", ["Gallbladder", "Appendix", "Spleen", "Stomach"], "The gallbladder is in the RUQ and can refer pain to the right shoulder or scapula, especially after fatty meals. Stop the treatment and refer the client for medical evaluation."],
        ["Turning the sole of the foot outward, away from the midline, is called:", ["Eversion", "Inversion", "Dorsiflexion", "Supination of the forearm"], "Eversion turns the sole outward and inversion turns it inward. An inversion mechanism is the classic lateral ankle sprain."],
        ["In anatomical position, which way do the palms face?", ["Forward (anterior)", "Backward (posterior)", "Toward the thighs (medial)", "Downward"], "In anatomical position the forearms are supinated and the palms face forward. This is why the thumb is lateral in standard descriptions."],
        ["A note for a patient with a right L5 radiculopathy says 'pain radiates to the ipsilateral buttock and lateral leg.' Which side is symptomatic?", ["Right", "Left", "Both", "It cannot be determined"], "Ipsilateral means the same side as the reference point, here the right-sided radiculopathy. Contralateral would have meant the left side."]
      ]
    },
    {
      t: "Musculoskeletal & Neuro Terms",
      sub: "Postures, alignment, injury types, tone, and neurological deficits",
      guide: [
        "<b>Spinal curves</b>: kyphosis = posterior convexity (normal in the thoracic spine), lordosis = anterior convexity (normal in the cervical and lumbar spine), and scoliosis = lateral curvature, usually with rotation. Hyper- means the curve is greater than normal.",
        "<b>Valgus vs varus</b>: genu valgum = knock-knees (the distal segment angles away from the midline); genu varum = bowlegs (the distal segment angles toward the midline).",
        "<b>Injury types</b>: a sprain is a ligament injury and a strain is a muscle or tendon injury. Subluxation is partial loss of joint contact; dislocation is complete loss of joint contact.",
        "<b>Other terms</b>: contracture = loss of motion from shortened soft tissue; effusion = fluid inside a joint; edema = swelling in the tissues; crepitus = grinding or crackling with movement.",
        "<b>Tone</b>: spasticity = <i>velocity-dependent</i> resistance to passive stretch (an upper motor neuron sign); rigidity = resistance that does <i>not</i> depend on velocity (lead-pipe or cogwheel, as in Parkinson's disease).",
        "<b>Paralysis patterns</b>: hemiplegia = one side of the body; paraplegia = both lower extremities (often thoracic or lower spinal cord injury); tetraplegia (quadriplegia) = all four limbs (cervical spinal cord injury).",
        "<b>Nerve terms</b>: radiculopathy = nerve root; myelopathy = spinal cord; peripheral neuropathy = peripheral nerves. Ataxia = poor coordination, often from the cerebellum.",
        "<b>Speech and movement</b>: aphasia = a language disorder (expressive/Broca's or receptive/Wernicke's); dysarthria = slurred speech from motor weakness; apraxia = trouble planning a learned movement even though strength and understanding are intact."
      ],
      assignment: {
        title: "Neuro and MSK glossary from cases",
        task: "Find three short case descriptions (textbook, online case bank, or anonymized clients): one orthopedic, one stroke, one spinal cord injury. Underline every MSK or neuro term, define each one, and rewrite each case summary in plain language a family member could follow.",
        deliverable: "Three annotated case summaries, each with a term list and a plain-language rewrite of about 100 words."
      },
      gen: [],
      qs: [
        ["Genu valgum is commonly called:", ["Knock-knees", "Bowlegs", "Back-knee (hyperextension)", "Flexed knees"], "In valgus, the distal segment angles away from the midline, so the knees come together. Bowlegs is genu varum and hyperextension is genu recurvatum."],
        ["A soccer player rolls their ankle into inversion and tears the anterior talofibular ligament. This injury is best called a:", ["Sprain", "Strain", "Contusion", "Subluxation"], "A sprain is a ligament injury. A strain injures muscle or tendon, which is a common terminology trap."],
        ["Resistance to passive stretch that gets stronger the faster you move the limb is called:", ["Spasticity", "Rigidity", "Flaccidity", "Hypotonia"], "Spasticity depends on velocity and is an upper motor neuron sign. Rigidity is present at any speed, as with lead-pipe rigidity in Parkinson's disease."],
        ["After a left-hemisphere stroke, a patient understands instructions well but speaks in short, effortful, non-fluent phrases. Which term fits best?", ["Expressive (Broca's) aphasia", "Receptive (Wernicke's) aphasia", "Dysarthria", "Ataxia"], "Good comprehension with non-fluent, effortful output is expressive (Broca's) aphasia. Receptive aphasia has fluent speech but poor comprehension, and dysarthria is a motor speech problem with intact language."],
        ["A patient after a brainstem stroke has clear, intact language but slurred, hard-to-understand speech from oral muscle weakness. This is:", ["Dysarthria", "Aphasia", "Apraxia", "Dysphagia"], "Dysarthria is a motor speech problem; the patient's language is intact. Aphasia is a language disorder, and dysphagia is difficulty swallowing."],
        ["Radiculopathy refers to pathology of a:", ["Spinal nerve root", "Spinal cord", "Peripheral nerve in the limb", "Cerebellar pathway"], "Radicul/o refers to the nerve root. Spinal cord pathology is myelopathy, and peripheral nerve disease is peripheral neuropathy."],
        ["A patient with a complete T10 spinal cord injury would most likely be described as having:", ["Paraplegia", "Tetraplegia", "Hemiplegia", "Monoplegia"], "A thoracic cord injury affects the trunk and both lower extremities, which is paraplegia. Tetraplegia comes from cervical injuries."],
        ["A partial loss of contact between joint surfaces is called:", ["Subluxation", "Dislocation", "Contracture", "Effusion"], "Subluxation is partial and dislocation is complete. Contracture is soft-tissue shortening, and effusion is fluid inside the joint."],
        ["A patient after stroke has normal strength and understands the request, but cannot work out the sequence for putting on a shirt. Which term fits best?", ["Apraxia", "Ataxia", "Aphasia", "Agnosia"], "Apraxia is trouble planning a learned motor task despite intact strength and comprehension. Ataxia is incoordination, and agnosia is trouble recognizing objects."],
        ["During gait, a patient shows wide-based, unsteady steps and overshoots on finger-to-nose testing. Which term best describes this presentation?", ["Ataxia", "Spasticity", "Rigidity", "Paresthesia"], "Incoordination, dysmetria, and a wide-based gait are signs of ataxia, often from cerebellar involvement. Spasticity and rigidity are tone abnormalities."]
      ]
    },
    {
      t: "Cardiopulmonary & Systemic Terms",
      sub: "Vital-sign terms, cardiac and pulmonary conditions, and other body systems",
      guide: [
        "<b>Heart rate (adult at rest)</b>: tachycardia &gt; 100 bpm; bradycardia &lt; 60 bpm. Hypertension = high blood pressure, hypotension = low blood pressure.",
        "<b>Orthostatic hypotension</b>: blood pressure drops when moving to upright (commonly defined as a drop of 20 mmHg or more systolic or 10 mmHg or more diastolic), often with dizziness. Check before sit-to-stand progressions in at-risk patients.",
        "<b>Breathing</b>: dyspnea = shortness of breath; orthopnea = shortness of breath lying flat (a sign of heart failure); tachypnea = rapid breathing; apnea = no breathing.",
        "<b>Signs</b>: cyanosis = bluish skin from poor oxygenation; diaphoresis = heavy sweating; pallor = paleness; pitting edema = swelling that holds a dent when pressed.",
        "<b>Vascular</b>: ischemia = reduced blood supply; infarction = tissue death from ischemia (MI = myocardial infarction); a thrombus is a clot that forms in place, and an embolus is a clot or mass that travels.",
        "<b>DVT and PE</b>: a deep vein thrombosis can break loose and travel to the lungs (pulmonary embolism). Unilateral calf pain, swelling, warmth, or redness after surgery or immobility means stop, do not massage, and refer right away.",
        "<b>Common acronyms</b>: CAD (coronary artery disease), CHF (congestive heart failure), COPD (chronic obstructive pulmonary disease), DM (diabetes mellitus), HTN (hypertension), CVA (stroke).",
        "<b>Systemic roots</b>: -emia = blood condition (anemia, hyperglycemia), hepat/o liver, nephr/o kidney, gastr/o stomach, -uria urine (hematuria = blood in the urine). Hypoglycemia (low blood sugar) causes shakiness, sweating, and confusion."
      ],
      assignment: {
        title: "Red-flag vocabulary card",
        task: "Make a pocket reference of 12 cardiopulmonary and systemic terms that should change what you do in a session (for example orthostatic hypotension, DVT, hypoglycemia, orthopnea). For each, write the definition, what you would observe, and the action you would take: modify, stop, or refer.",
        deliverable: "A one-page laminated-style reference card with 12 entries: term, definition, what you see, action."
      },
      gen: [],
      qs: [
        ["An adult client's resting heart rate is 112 bpm. This is described as:", ["Tachycardia", "Bradycardia", "Arrhythmia", "Normal sinus rhythm"], "A resting adult heart rate above 100 bpm is tachycardia, and below 60 is bradycardia. An arrhythmia is an irregular rhythm, not just a fast one."],
        ["A patient says they have to sleep propped up on three pillows because they get short of breath lying flat. This symptom is called:", ["Orthopnea", "Tachypnea", "Apnea", "Hyperpnea"], "Orthopnea is shortness of breath when lying flat, and it is classically linked to heart failure. Tachypnea is just a fast breathing rate."],
        ["Diaphoresis means:", ["Profuse sweating", "Bluish skin discoloration", "Difficulty breathing", "Excessive urination"], "Diaphoresis is heavy sweating. Combined with chest pain or shortness of breath it can signal a cardiac event. Bluish skin is cyanosis."],
        ["Three days after knee surgery, a client has unilateral calf swelling, warmth, and tenderness. What is the best next step?", ["Stop and refer immediately for medical evaluation of possible DVT", "Perform calf massage to reduce the swelling", "Progress ankle pumps and resume the session", "Apply heat and recheck next visit"], "These signs suggest a deep vein thrombosis, which can embolize to the lungs. Massage or heat is contraindicated until a physician rules out DVT."],
        ["Hepatomegaly means:", ["Enlargement of the liver", "Inflammation of the liver", "Enlargement of the kidney", "Enlargement of the spleen"], "Hepat/o = liver and -megaly = enlargement. Liver inflammation is hepatitis, and spleen enlargement is splenomegaly."],
        ["Ischemia refers to:", ["Reduced blood supply to a tissue", "Death of tissue from lack of blood", "A clot that travels in the bloodstream", "Swelling from fluid in the tissues"], "Ischemia is inadequate blood flow. Infarction is tissue death that can follow it, and a traveling clot is an embolus."],
        ["A patient stands up from supine and reports dizziness. Their systolic pressure drops 25 mmHg. This is most consistent with:", ["Orthostatic hypotension", "Hypertensive crisis", "Bradycardia", "Vertigo from an inner ear problem"], "A systolic drop of 20 mmHg or more on moving upright, with symptoms, is orthostatic hypotension. Have the patient sit or lie back down and progress position changes slowly."],
        ["A client with type 1 diabetes becomes shaky, sweaty, and confused halfway through a workout. What is the most likely problem?", ["Hypoglycemia", "Hyperglycemia", "Hypotension from dehydration", "Hypokalemia"], "Shakiness, sweating, and confusion during exercise are classic signs of low blood sugar. Stop exercise and give fast-acting carbohydrate if the client can swallow safely."],
        ["Cyanosis is:", ["Bluish discoloration of the skin or lips from low oxygenation", "Yellowing of the skin from liver dysfunction", "Redness of the skin from inflammation", "Paleness from reduced blood flow"], "Cyanosis means poor oxygenation. Yellowing is jaundice, redness is erythema, and paleness is pallor."],
        ["What is the key difference between a thrombus and an embolus?", ["A thrombus forms in place; an embolus travels through the bloodstream", "A thrombus occurs in arteries only; an embolus occurs in veins only", "A thrombus is made of fat; an embolus is made of blood", "A thrombus is always harmless; an embolus is always fatal"], "A thrombus is a clot that forms where it sits. Once it (or another mass) breaks loose and travels, it is an embolus, which is how a DVT becomes a pulmonary embolism."]
      ]
    },
    {
      t: "Clinical Abbreviations & Documentation Terms",
      sub: "Weight-bearing orders, assist levels, frequency, and chart shorthand",
      guide: [
        "<b>Weight-bearing orders</b>: NWB = non-weight-bearing (no weight on the limb); TTWB/TDWB = toe-touch or touch-down (foot touches only for balance); PWB = partial weight bearing (a set portion); WBAT = weight bearing as tolerated; FWB = full weight bearing.",
        "<b>Motion and strength</b>: ROM, AROM (active), AAROM (active-assisted), PROM (passive), MMT (manual muscle test), WNL (within normal limits), WFL (within functional limits; not normal, but enough for function).",
        "<b>Assist levels</b>: Ind (independent), Mod I (modified independent, uses a device), SBA (stand-by assist, close by with no contact), CGA (contact guard, hands on without lifting), then Min A, Mod A, Max A as the helper's effort increases, and Dep (dependent).",
        "<b>History and status</b>: Hx (history), PMH (past medical history), CC (chief complaint), Dx (diagnosis), Tx (treatment), Rx (prescription), s/p (status post, meaning after a procedure or event), R/O (rule out), h/o (history of).",
        "<b>Symptoms and function</b>: SOB (shortness of breath), LOB (loss of balance), ADLs (activities of daily living), HEP (home exercise program), UE/LE (upper/lower extremity), B or bil (bilateral).",
        "<b>Frequency</b>: BID twice a day, TID three times a day, QID four times a day, PRN as needed, NPO nothing by mouth. Write 'daily' rather than QD.",
        "<b>Do Not Use list</b>: The Joint Commission bans abbreviations such as QD and QOD (easily confused with each other and with QID), U for units, and trailing zeros (1.0 mg can be read as 10 mg).",
        "<b>Rule of thumb</b>: use only your facility's approved abbreviations. When in doubt, spell it out, especially anything a patient or payer will read."
      ],
      assignment: {
        title: "Shorthand-to-plain translation",
        task: "Write a sample PT daily note of about 150 words using at least 15 standard abbreviations (weight bearing, assist level, ROM, HEP, and so on). Then rewrite the same note in full plain English. Mark any abbreviation that is on The Joint Commission Do Not Use list or could be misread, and fix it.",
        deliverable: "Two versions of the same note (abbreviated and plain English) plus a short list of corrected high-risk abbreviations."
      },
      gen: [],
      qs: [
        ["A post-op order reads 'WBAT R LE.' What does this allow?", ["The patient may put as much weight on the right leg as is comfortable", "No weight on the right leg", "Only toe contact on the right for balance", "A fixed 50% of body weight on the right leg"], "WBAT means weight bearing as tolerated: the patient decides how much, up to full, based on comfort. NWB means none, and TTWB allows contact only."],
        ["An order reads 'NWB L LE.' Which gait plan follows the order?", ["Walker or crutches with the left foot held off the ground", "Walker with the left foot resting flat for balance", "Single-point cane on the right, with weight shared between the legs", "Normal gait with a knee brace"], "Non-weight-bearing means the affected foot cannot bear any load. The patient uses a device and hops or swings through with the left foot held up."],
        ["In a medication or HEP instruction, PRN means:", ["As needed", "Twice daily", "Before meals", "Every other day"], "PRN (pro re nata) means as needed. BID means twice daily."],
        ["An HEP sheet says 'perform BID.' How often should the patient do the program?", ["Twice a day", "Once a day", "Three times a day", "Every other day"], "BID = twice daily, TID = three times daily, QID = four times daily."],
        ["A referral reads 's/p ACL reconstruction 2 wks.' What does s/p mean?", ["Status post (after the procedure)", "Suspected pathology", "Surgical procedure pending", "Signs present"], "s/p means status post: the patient is two weeks out from ACL reconstruction. This tells you where they are in the healing timeline."],
        ["In PT documentation, HEP stands for:", ["Home exercise program", "Hip extension protocol", "Health education plan", "High-effort performance"], "HEP is the home exercise program. Documenting HEP issuance and the patient's understanding is standard practice."],
        ["During gait training, the PT keeps both hands lightly on the patient's gait belt but provides no lifting help. Which assist level is this?", ["Contact guard assist (CGA)", "Stand-by assist (SBA)", "Minimal assist (Min A)", "Modified independent (Mod I)"], "CGA means hands-on contact for safety without physical help. SBA is close by without contact, and Min A means the helper does provide a small amount of physical help."],
        ["A note says shoulder ROM is 'WFL.' What does that mean?", ["Range is within functional limits: enough for daily tasks, though not necessarily normal", "Range is within normal limits for age", "Range was not formally tested", "Range is limited and needs further evaluation"], "WFL means motion is adequate for function but may not reach normative values. WNL means within normal limits, which is a stronger claim."],
        ["A note documents that a patient 'c/o SOB after 2 flights of stairs.' What does SOB stand for?", ["Shortness of breath", "Side of body", "Start of balance training", "Sit on bench"], "SOB means shortness of breath, and c/o means complains of. Note it with exertion level, vitals, and recovery time."],
        ["Why should a clinician write 'daily' instead of 'QD' on an HEP or order?", ["QD is on The Joint Commission Do Not Use list because it is easily misread as QID or QOD", "QD is a billing code, not a frequency", "QD means every other day in most facilities", "Payers no longer accept Latin abbreviations of any kind"], "QD and QOD are on The Joint Commission Do Not Use list because they get confused with each other and with QID, which can cause dosing errors. Writing 'daily' removes the ambiguity."]
      ]
    }
  ]
});
