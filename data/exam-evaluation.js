(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "exam-evaluation",
  track: "found",
  order: 7,
  code: "DPT 640",
  title: "Examination & Evaluation",
  credits: 4,
  desc: "How a PT gathers and interprets examination data: history, systems review, vital signs, posture, range of motion, strength, neurological screening, special tests, and standardized outcome measures. These skills turn a patient's story and findings into a diagnosis, prognosis, and measurable plan of care.",
  objectives: [
    "Organize an examination using the patient/client management model and the ICF framework",
    "Measure and interpret adult vital signs and observe posture against a plumb-line reference",
    "Perform goniometry and interpret end-feels and capsular patterns",
    "Grade manual muscle tests and screen dermatomes, myotomes, and deep tendon reflexes",
    "Select and interpret common orthopedic special tests and outcome measures, including MDC and MCID"
  ],
  units: [
    {
      t: "Patient/Client Management & History",
      sub: "Management model, ICF, subjective exam, systems review, red flags",
      guide: [
        "<b>Patient/client management model</b> (APTA Guide): <b>Examination</b> (history, systems review, tests and measures), then <b>Evaluation</b> (clinical judgment about the data), <b>Diagnosis</b>, <b>Prognosis</b> (including the plan of care), <b>Intervention</b>, and <b>Outcomes</b>.",
        "<b>ICF model</b> (WHO): <b>Body functions & structures</b> (problems there are <i>impairments</i>), <b>Activities</b> (problems are <i>activity limitations</i>), and <b>Participation</b> (problems are <i>participation restrictions</i>). <b>Contextual factors</b> are environmental and personal.",
        "<b>ICF examples</b>: reduced knee flexion ROM is an impairment, inability to climb stairs is an activity limitation, and inability to work as a mail carrier is a participation restriction.",
        "<b>Subjective exam</b>: chief complaint, mechanism and onset, location and behavior of symptoms (aggravating and easing factors, 24-hour pattern), past medical history, medications, social history and goals. Body charts help map symptoms.",
        "<b>Systems review</b>: a brief screen of the <b>cardiovascular/pulmonary, integumentary, musculoskeletal, and neuromuscular</b> systems, plus communication, affect, cognition, and learning style.",
        "<b>Red flags requiring referral</b>: unexplained weight loss, night pain unchanged by position, history of cancer, fever and chills, and progressive neurological deficit. <b>Saddle anesthesia with bowel or bladder dysfunction</b> suggests cauda equina syndrome and needs emergency referral.",
        "<b>SOAP note</b>: <b>S</b>ubjective (what the patient reports), <b>O</b>bjective (measured findings), <b>A</b>ssessment (your interpretation, problem list, goals), <b>P</b>lan.",
        "<b>Goals</b> should be functional and measurable, often written in the ABCDE format: Audience, Behavior, Condition, Degree, Expected time frame."
      ],
      assignment: {
        title: "ICF case breakdown",
        task: "Take one of your current or past massage/CES clients (de-identified). Write their history as a PT would, then sort every problem into ICF categories: impairments, activity limitations, participation restrictions, and contextual factors. Finish with two functional goals in ABCDE format.",
        deliverable: "One-page ICF table plus two written goals."
      },
      gen: [],
      qs: [
        ["What is the correct order of the patient/client management model?", ["Examination, evaluation, diagnosis, prognosis, intervention, outcomes", "Evaluation, examination, intervention, diagnosis, prognosis, outcomes", "Diagnosis, examination, intervention, evaluation, outcomes, prognosis", "Examination, intervention, evaluation, diagnosis, outcomes, prognosis"], "Data are gathered first (examination), then interpreted (evaluation) to reach a diagnosis and prognosis before intervention and measuring outcomes."],
        ["In the ICF model, a patient's limited shoulder flexion range of motion is classified as what?", ["An impairment of body functions and structures", "An activity limitation", "A participation restriction", "A personal contextual factor"], "Impairments are problems at the level of body function or structure, such as ROM, strength, or pain."],
        ["A carpenter cannot return to his job because he cannot work overhead after a rotator cuff repair. In the ICF model, his inability to return to work is best classified as what?", ["A participation restriction", "An impairment", "An activity limitation", "An environmental factor"], "Participation involves life roles such as work and community activities. Overhead reaching itself would be an activity."],
        ["Which systems are included in the PT systems review?", ["Cardiovascular/pulmonary, integumentary, musculoskeletal, and neuromuscular", "Digestive, endocrine, reproductive, and urinary", "Skeletal, muscular, lymphatic, and endocrine only", "Cardiovascular, renal, hepatic, and respiratory"], "The systems review is a brief screen of these four systems plus communication, affect, cognition, and learning style."],
        ["A patient with low back pain reports new numbness in the groin and inner thighs and difficulty starting urination. What is the most appropriate action?", ["Refer immediately for emergency evaluation of possible cauda equina syndrome", "Begin lumbar stabilization exercises", "Apply heat and reassess at the next visit", "Perform a lumbar manipulation to relieve compression"], "Saddle anesthesia with bladder dysfunction suggests cauda equina compression, a surgical emergency."],
        ["In a SOAP note, where does the statement 'Pt reports pain 6/10 when climbing stairs' belong?", ["Subjective", "Objective", "Assessment", "Plan"], "Information the patient reports goes in the subjective section. Measured findings such as ROM go in objective."],
        ["Which statement is the best example of a measurable functional goal?", ["Patient will climb 12 stairs with one rail, reciprocally, without rest, within 4 weeks", "Patient will improve strength in the quadriceps", "Patient will feel better when walking", "Patient will tolerate therapy well"], "A good goal names who, the functional behavior, the conditions, the degree, and the time frame."],
        ["During the history, a 64-year-old reports 15 pounds of unintentional weight loss over 2 months and back pain that wakes him every night regardless of position. How should you interpret this?", ["As red flags for possible serious pathology that need physician referral", "As typical findings of mechanical low back pain", "As signs that he needs more aggressive exercise", "As irrelevant to the musculoskeletal exam"], "Unexplained weight loss and constant night pain unchanged by position are classic red flags for malignancy or infection."],
        ["Which step of the management model involves making clinical judgments based on the data gathered during the examination?", ["Evaluation", "Examination", "Intervention", "Outcomes"], "Evaluation is the dynamic process of interpreting examination findings, which leads to the diagnosis and prognosis."],
        ["A patient lives alone in a second-floor apartment with no elevator. In the ICF model, this information is best classified as what?", ["An environmental contextual factor", "A body structure impairment", "A participation restriction", "An activity limitation"], "Physical surroundings, social supports, and attitudes are environmental factors that can help or hinder function."]
      ]
    },
    {
      t: "Vital Signs & Observation",
      sub: "Normal adult vitals, blood pressure technique, exercise responses, posture",
      guide: [
        "<b>Normal resting adult vitals</b>: heart rate <b>60-100 bpm</b>, respiratory rate <b>12-20 breaths/min</b>, BP <b>&lt;120/&lt;80 mmHg</b>, SpO2 <b>95-100%</b>, and oral temperature about <b>98.6 °F (37 °C)</b>.",
        "<b>Bradycardia</b> is &lt;60 bpm (can be normal in trained athletes) and <b>tachycardia</b> is &gt;100 bpm. Check the pulse at the radial artery, counting for 30 seconds and multiplying by 2, or for a full 60 seconds if the rhythm is irregular.",
        "<b>BP technique</b>: cuff at heart level, arm supported, correct cuff size (a cuff that is too small gives a falsely high reading), patient seated with feet flat and not talking.",
        "<b>Normal exercise response</b>: systolic BP rises with workload and diastolic stays about the same or changes slightly. A <b>drop in systolic BP with increasing workload</b> is an abnormal response and a reason to stop.",
        "<b>Orthostatic hypotension</b>: a drop of <b>≥20 mmHg systolic or ≥10 mmHg diastolic</b> within 3 minutes of standing, often with dizziness.",
        "<b>Ideal posture, side view (plumb line)</b>: passes through the <b>ear lobe, acromion, greater trochanter</b>, slightly anterior to the knee joint axis, and slightly anterior to the lateral malleolus.",
        "<b>Common postural faults</b>: forward head with rounded shoulders, excessive thoracic kyphosis, excessive lumbar lordosis with anterior pelvic tilt, and sway-back (pelvis shifted forward, trunk leaning back).",
        "<b>Observation also includes</b> skin color and integrity, edema, muscle atrophy, gait, and how the patient moves during transfers and dressing."
      ],
      assignment: {
        title: "Vitals and posture practice log",
        task: "Take resting heart rate, respiratory rate, and blood pressure on five people (friends, family, or clients with permission). Then do a plumb-line side-view posture assessment on each and note deviations from ideal alignment. Compare each set of values to adult norms.",
        deliverable: "A five-row data log with a 200-word reflection on measurement errors you noticed."
      },
      gen: [],
      qs: [
        ["What is the normal resting heart rate range for an adult?", ["60-100 bpm", "40-60 bpm", "100-120 bpm", "80-140 bpm"], "A normal adult resting heart rate is 60-100 bpm. Below 60 is bradycardia and above 100 is tachycardia."],
        ["What is the normal resting respiratory rate for an adult?", ["12-20 breaths per minute", "4-8 breaths per minute", "24-32 breaths per minute", "30-40 breaths per minute"], "A typical adult breathes 12-20 times per minute at rest. Higher rates may signal distress, fever, or anxiety."],
        ["Which pulse oximetry reading is within the normal range for a healthy adult at rest?", ["97%", "85%", "88%", "80%"], "Normal SpO2 is about 95-100%. Readings below 90% indicate significant hypoxemia."],
        ["You measure a client's blood pressure using a cuff that is too small for his large arm. How will this most likely affect the reading?", ["The reading will be falsely high", "The reading will be falsely low", "The cuff size has no effect on the reading", "Only the heart rate will be affected"], "A cuff that is too narrow requires more pressure to compress the artery, which overestimates BP."],
        ["During a graded walking test, a patient's systolic BP drops from 150 to 132 mmHg as the workload increases. How should you interpret this?", ["An abnormal response that is an indication to stop exercise", "A normal response to increasing workload", "A sign that the patient needs a higher workload", "A measurement error that can be ignored"], "Systolic BP should rise with workload. A fall may indicate left ventricular dysfunction or ischemia and is a reason to stop."],
        ["A patient's BP is 128/78 mmHg supine and 104/70 mmHg after 1 minute of standing, and she feels lightheaded. What does this indicate?", ["Orthostatic hypotension", "A normal postural response", "Hypertensive crisis", "Autonomic dysreflexia"], "A systolic drop of 20 mmHg or more on standing, with symptoms, meets the definition of orthostatic hypotension."],
        ["In ideal standing posture viewed from the side, the plumb line passes through which landmarks?", ["Ear lobe, acromion, and greater trochanter", "Nose, sternum, and pubic symphysis", "Mastoid, scapular spine, and ischial tuberosity", "Ear lobe, olecranon, and medial malleolus"], "The plumb line runs through the ear lobe, acromion, greater trochanter, slightly anterior to the knee axis, and slightly anterior to the lateral malleolus."],
        ["Viewed from the side, a client's ear lobe sits well in front of the acromion and her shoulders are rounded. Which postural fault is this?", ["Forward head posture", "Flat-back posture", "Lumbar hyperlordosis", "Scoliosis"], "Forward head posture places the head anterior to the plumb line, which increases the load on the cervical extensors."],
        ["A well-trained 25-year-old distance runner has a resting heart rate of 48 bpm with no symptoms. What is the most likely interpretation?", ["A normal finding reflecting aerobic conditioning", "A medical emergency requiring EMS", "A sign of heart failure", "A sign of hyperthyroidism"], "Endurance training increases stroke volume, so resting bradycardia without symptoms is common and benign in athletes."],
        ["A patient's pulse feels irregular. What is the best way to measure the heart rate?", ["Count for a full 60 seconds", "Count for 10 seconds and multiply by 6", "Count for 15 seconds and multiply by 4", "Estimate it from the patient's breathing rate"], "Short counts multiply the error when the rhythm is irregular, so a full 60-second count is more accurate."]
      ]
    },
    {
      t: "ROM & Goniometry",
      sub: "Goniometer alignment, normal ranges, end-feels, capsular patterns",
      guide: [
        "<b>Goniometer</b>: the axis (fulcrum) goes over the joint axis, the stationary arm along the proximal segment, and the moving arm along the distal segment. Use the standard starting position and stabilize the proximal segment.",
        "<b>Axis landmarks</b>: knee flexion, the <b>lateral femoral epicondyle</b>. Elbow flexion, the <b>lateral epicondyle of the humerus</b>. Hip flexion, the <b>greater trochanter</b>. Ankle dorsiflexion, the <b>lateral malleolus</b>.",
        "<b>Approximate normal adult ROM</b> (AAOS): shoulder flexion 180°, shoulder abduction 180°, shoulder ER 90°, elbow flexion about 150°, hip flexion about 120°, hip abduction about 45°, knee flexion about 135°, ankle dorsiflexion about 20°, ankle plantarflexion about 50°.",
        "<b>Normal end-feels</b>: <b>soft</b> (tissue approximation, e.g., elbow or knee flexion), <b>firm</b> (capsular or ligament stretch, e.g., shoulder ER, hip rotation), and <b>hard/bony</b> (bone on bone, e.g., elbow extension).",
        "<b>Abnormal end-feels</b>: <b>empty</b> (patient stops the motion because of pain before any resistance is felt, e.g., acute bursitis, tumor, fracture), <b>springy block</b> (rebound, e.g., a torn meniscus blocking the knee), <b>muscle spasm</b>, and a hard end-feel occurring earlier than normal (e.g., osteophyte).",
        "<b>Capsular pattern</b> (Cyriax): a predictable pattern of restriction when the whole joint capsule is involved, as in arthritis or adhesive capsulitis. <b>Shoulder</b>: ER > ABD > IR. <b>Elbow</b>: flexion > extension. <b>Knee</b>: flexion > extension. <b>Talocrural</b>: plantarflexion > dorsiflexion.",
        "<b>Noncapsular pattern</b>: a restriction that does not follow the capsular pattern, suggesting a ligament adhesion, internal derangement, or extra-articular lesion.",
        "<b>Active vs passive ROM</b>: if PROM is greater than AROM, suspect weakness or pain inhibition. If both are equally limited, suspect a joint or soft-tissue restriction."
      ],
      assignment: {
        title: "Goniometry lab report",
        task: "Measure shoulder flexion, elbow flexion, hip flexion, knee flexion, and ankle dorsiflexion bilaterally on two people. Record the axis, stationary arm, and moving arm landmarks for each, and note the end-feel you felt. Compare the results to normal values and repeat one measurement three times to check your consistency.",
        deliverable: "Lab data table plus a 200-word reflection on reliability and sources of error."
      },
      gen: [],
      qs: [
        ["Where is the goniometer axis placed when measuring knee flexion?", ["Lateral femoral epicondyle", "Greater trochanter", "Lateral malleolus", "Tibial tuberosity"], "The lateral femoral epicondyle approximates the knee's axis. The stationary arm follows the femur toward the greater trochanter."],
        ["Approximately what is normal ankle dorsiflexion range of motion in adults?", ["20 degrees", "50 degrees", "70 degrees", "5 degrees"], "Normal dorsiflexion is about 20°, and normal plantarflexion is about 50°."],
        ["Which joint motion normally has a hard (bony) end-feel?", ["Elbow extension", "Knee flexion", "Shoulder external rotation", "Hip abduction"], "The olecranon contacting the olecranon fossa creates a bony end-feel. Knee flexion is soft, and shoulder ER and hip abduction are firm."],
        ["What is the normal end-feel for knee flexion in a person with average muscle bulk?", ["Soft (soft-tissue approximation)", "Hard (bony)", "Empty", "Springy block"], "The calf and thigh compress against each other, which produces a soft end-feel."],
        ["What is the capsular pattern of the glenohumeral joint?", ["External rotation, then abduction, then internal rotation", "Flexion, then extension, then abduction", "Internal rotation, then flexion, then external rotation", "Abduction, then adduction, then flexion"], "Adhesive capsulitis and glenohumeral arthritis typically limit ER most, then abduction, then IR."],
        ["A patient with knee osteoarthritis has 90° of knee flexion and lacks 10° of extension. Which pattern does this represent?", ["The capsular pattern of the knee", "A noncapsular pattern from a ligament adhesion", "The capsular pattern of the hip", "Normal knee range of motion"], "The knee capsular pattern is a much greater loss of flexion than of extension, typical of arthritis."],
        ["During passive shoulder abduction, the patient asks you to stop because of severe pain, and you feel no tissue resistance yet. Which end-feel is this, and what might it suggest?", ["Empty end-feel, which may suggest acute bursitis or serious pathology", "Firm end-feel, indicating normal capsular stretch", "Springy block, indicating a loose body", "Soft end-feel, indicating normal muscle bulk"], "An empty end-feel means pain stops the motion before mechanical resistance. It is seen with acute bursitis, abscess, fracture, or tumor."],
        ["A patient cannot fully extend the knee after a twisting injury, and the end-feel has a rebound quality. What is the most likely cause?", ["A displaced meniscus causing a springy block", "Normal soft-tissue approximation", "Bone-on-bone contact from an osteophyte", "Hamstring muscle spasm only"], "A springy block is an abnormal rebound end-feel that suggests an internal derangement such as a torn, displaced meniscus."],
        ["A patient's passive shoulder flexion is 175° but active flexion is only 100°. What does this most likely indicate?", ["Weakness or pain limiting active movement, with a normal joint", "A capsular restriction of the glenohumeral joint", "Bony block from an osteophyte", "Normal findings for all adults"], "When PROM is near normal but AROM is limited, the contractile unit or pain is the issue, not the joint."],
        ["What is the capsular pattern of the talocrural (ankle) joint?", ["Plantarflexion limited more than dorsiflexion", "Dorsiflexion limited more than plantarflexion", "Inversion limited more than eversion", "Equal loss in all directions"], "Per Cyriax, the talocrural capsular pattern is a greater loss of plantarflexion than dorsiflexion."]
      ]
    },
    {
      t: "MMT & Neurological Screen",
      sub: "Manual muscle test grades, dermatomes, myotomes, reflex grading and root levels",
      guide: [
        "<b>MMT grades</b>: <b>5</b> holds against maximal resistance. <b>4</b> holds against moderate resistance. <b>3</b> completes full range against gravity with no added resistance. <b>2</b> completes full range with gravity eliminated. <b>1</b> is a palpable or visible contraction with no motion. <b>0</b> is no contraction.",
        "<b>Grade 3 is the key threshold</b>: it is tested against gravity. If the patient cannot complete the range against gravity, retest in a gravity-eliminated position to decide between grades 2 and 1.",
        "<b>Upper extremity dermatomes</b>: <b>C5</b> lateral arm (over the deltoid), <b>C6</b> lateral forearm and thumb, <b>C7</b> middle finger, <b>C8</b> little finger and medial hand, <b>T1</b> medial forearm. Trunk landmarks: <b>T4</b> nipple line, <b>T10</b> umbilicus.",
        "<b>Lower extremity dermatomes</b>: <b>L1</b> groin, <b>L2-L3</b> anterior thigh, <b>L4</b> medial leg and medial malleolus, <b>L5</b> dorsum of the foot and big toe, <b>S1</b> lateral foot and heel.",
        "<b>Upper extremity myotomes</b>: <b>C5</b> shoulder abduction, <b>C6</b> elbow flexion and wrist extension, <b>C7</b> elbow extension and wrist flexion, <b>C8</b> thumb extension and finger flexion, <b>T1</b> finger abduction.",
        "<b>Lower extremity myotomes</b>: <b>L2</b> hip flexion, <b>L3</b> knee extension, <b>L4</b> ankle dorsiflexion, <b>L5</b> great toe extension, <b>S1</b> ankle plantarflexion and eversion.",
        "<b>Deep tendon reflexes</b>: <b>biceps C5</b>, <b>brachioradialis C6</b>, <b>triceps C7</b>, <b>patellar L4</b>, <b>Achilles S1</b>.",
        "<b>Reflex grading</b>: 0 absent, 1+ diminished, <b>2+ normal</b>, 3+ brisk, 4+ very brisk with clonus. Diminished reflexes suggest an LMN or nerve root problem; brisk reflexes, clonus, or a positive Babinski suggest an UMN lesion."
      ],
      assignment: {
        title: "Lower-quarter screen script",
        task: "Write and practice a complete lower-quarter neurological screen: L1-S1 dermatomes, L2-S1 myotomes, and the patellar and Achilles reflexes. Perform it on a partner, record the results in a standard format, and note which findings would point to an L5 vs an S1 radiculopathy.",
        deliverable: "One-page screening form completed with partner data plus a short L5 vs S1 comparison."
      },
      gen: [],
      qs: [
        ["A patient moves the elbow through full flexion range against gravity but cannot tolerate any added resistance. What is the MMT grade?", ["3 (Fair)", "2 (Poor)", "4 (Good)", "1 (Trace)"], "Full range against gravity with no added resistance is grade 3. Holding against moderate resistance would be grade 4."],
        ["A patient cannot lift the arm against gravity but moves the shoulder through full abduction range while lying supine with gravity eliminated. What is the MMT grade?", ["2 (Poor)", "3 (Fair)", "1 (Trace)", "0 (Zero)"], "Full range in a gravity-eliminated position is grade 2. A contraction with no motion would be grade 1."],
        ["Which reflex primarily tests the L4 nerve root?", ["Patellar tendon reflex", "Achilles tendon reflex", "Biceps reflex", "Triceps reflex"], "The patellar reflex is mainly L4 (with some L3). The Achilles reflex is S1."],
        ["Which reflex is associated with the C7 nerve root?", ["Triceps reflex", "Biceps reflex", "Brachioradialis reflex", "Patellar reflex"], "The triceps reflex tests C7. The biceps tests C5 and the brachioradialis tests C6."],
        ["On a standard reflex grading scale, what does a 2+ response indicate?", ["Normal response", "Absent response", "Very brisk response with clonus", "Diminished response"], "2+ is normal, 1+ is diminished, 3+ is brisk, and 4+ is very brisk with clonus."],
        ["A patient with neck pain reports numbness in the thumb and index finger and has weak wrist extension and a diminished brachioradialis reflex. Which nerve root is most likely involved?", ["C6", "C5", "C7", "C8"], "Thumb sensation, wrist extension, and the brachioradialis reflex all localize to C6."],
        ["A patient with sciatica has numbness over the dorsum of the foot and big toe and weakness of great toe extension, with normal reflexes. Which nerve root is most likely involved?", ["L5", "L4", "S1", "L2"], "The L5 dermatome covers the dorsum of the foot, and its myotome is great toe extension. There is no commonly tested reflex for L5."],
        ["A patient has lateral foot numbness, weak plantarflexion, and an absent Achilles reflex. Which nerve root is most likely compressed?", ["S1", "L4", "L5", "L3"], "The lateral foot dermatome, plantarflexion myotome, and Achilles reflex all point to S1."],
        ["Which dermatome is located at the level of the umbilicus?", ["T10", "T4", "T12", "L1"], "T10 is at the umbilicus and T4 is at the nipple line. These are useful trunk landmarks for SCI sensory levels."],
        ["During a reflex screen, a patient has 4+ patellar reflexes with sustained ankle clonus and an upgoing great toe on plantar stimulation. What is the best interpretation?", ["Signs of an upper motor neuron lesion requiring referral", "Signs of a peripheral nerve injury", "Normal findings in an anxious patient", "Signs of a single lumbar nerve root compression"], "Hyperreflexia, clonus, and a positive Babinski sign indicate a CNS (UMN) lesion, such as cord compression, that needs medical evaluation."]
      ]
    },
    {
      t: "Special Tests & Outcome Measures",
      sub: "Orthopedic special tests, Berg, TUG, 6MWT, LEFS/ODI, MDC and MCID",
      guide: [
        "<b>Knee</b>: <b>Lachman</b> (ACL; the most sensitive clinical ACL test), anterior drawer (ACL), posterior drawer and posterior sag (PCL), valgus stress (MCL), varus stress (LCL), McMurray (meniscus).",
        "<b>Shoulder</b>: Neer and Hawkins-Kennedy (subacromial impingement), empty can (supraspinatus), drop arm (rotator cuff tear), Speed (long head of biceps), apprehension and relocation (anterior instability).",
        "<b>Spine, hip, and other</b>: Spurling (cervical radiculopathy), straight leg raise (lumbar nerve root/sciatic tension, positive roughly between 30° and 70°), Thomas (hip flexor tightness), Ober (ITB/TFL tightness), FABER/Patrick (hip or SI joint), Trendelenburg (gluteus medius weakness), Thompson (Achilles rupture), Phalen (carpal tunnel), Finkelstein (De Quervain).",
        "<b>Sensitivity and specificity</b>: a highly <b>sensitive</b> test, when <b>negative</b>, helps rule a condition <b>out</b> (<b>SnNout</b>). A highly <b>specific</b> test, when <b>positive</b>, helps rule it <b>in</b> (<b>SpPin</b>).",
        "<b>Berg Balance Scale</b>: 14 items scored 0-4, <b>maximum 56</b>. Lower scores mean worse balance and greater fall risk.",
        "<b>Timed Up and Go (TUG)</b>: stand from a chair, walk 3 m, turn, walk back, and sit. Fall-risk cutoffs for community-dwelling older adults vary by source (about <b>12 seconds</b> in CDC STEADI to <b>13.5 seconds</b> in Shumway-Cook); slower times mean higher risk. <b>6-Minute Walk Test</b>: distance walked in 6 minutes, a submaximal measure of functional aerobic capacity.",
        "<b>Patient-reported outcomes</b>: <b>LEFS</b> is scored 0-80, with <b>higher = better</b> function. <b>Oswestry (ODI)</b> is a percentage from 0-100, with <b>higher = more disability</b>.",
        "<b>MDC</b> (minimal detectable change): the smallest change that exceeds measurement error. <b>MCID</b> (minimal clinically important difference): the smallest change that is meaningful to the patient."
      ],
      assignment: {
        title: "Outcome measure battery",
        task: "Choose an outcome battery for a 72-year-old client who has had two falls this year. Administer or simulate the Berg, TUG, and one patient-reported measure, then interpret each score against its norms or cutoffs. Explain how you would use MDC and MCID values to judge progress at re-assessment.",
        deliverable: "One-page assessment summary with scores, interpretation, and a re-test plan."
      },
      gen: [],
      qs: [
        ["Which clinical test is considered the most sensitive for detecting an ACL tear?", ["Lachman test", "Posterior drawer test", "McMurray test", "Valgus stress test at 30°"], "The Lachman, done at 20-30° of knee flexion, is the most sensitive clinical ACL test. The posterior drawer tests the PCL and McMurray tests the meniscus."],
        ["A 45-year-old reports a pop in the back of his ankle while playing basketball. When you squeeze his calf in prone, the foot does not plantarflex. Which test is positive and what does it suggest?", ["Thompson test, suggesting Achilles tendon rupture", "Anterior drawer of the ankle, suggesting ATFL sprain", "Homan sign, suggesting DVT", "Tinel sign, suggesting tarsal tunnel syndrome"], "The absence of plantarflexion when the calf is squeezed is a positive Thompson test, indicating a complete Achilles rupture."],
        ["A patient cannot slowly lower her arm from 90° of abduction, and it drops suddenly to her side. Which condition does this suggest?", ["Rotator cuff tear", "Anterior glenohumeral instability", "Bicipital tendinopathy", "Acromioclavicular arthritis"], "A positive drop arm test indicates a rotator cuff tear, usually of the supraspinatus."],
        ["Which test is used to assess cervical radiculopathy by compressing the cervical spine in extension and lateral flexion toward the painful side?", ["Spurling test", "Speed test", "Finkelstein test", "Ober test"], "Reproduction of radiating arm symptoms during Spurling compression suggests nerve root compression in the foraminal canal."],
        ["A highly sensitive test comes back negative. How does this result help?", ["It helps rule the condition out (SnNout)", "It helps rule the condition in (SpPin)", "It confirms the diagnosis with certainty", "It has no diagnostic value"], "A sensitive test rarely misses true cases, so a negative result makes the condition unlikely."],
        ["What is the maximum possible score on the Berg Balance Scale?", ["56", "100", "80", "24"], "The Berg has 14 items scored 0-4, for a maximum of 56. Lower scores indicate worse balance."],
        ["An 80-year-old community-dwelling woman completes the Timed Up and Go in 18 seconds. How should you interpret this?", ["Increased fall risk, since her time exceeds common TUG cutoffs", "Normal mobility for her age with no fall risk", "Faster than expected for community-dwelling adults", "A valid measure of upper extremity strength"], "Published TUG fall-risk cutoffs range from about 12 to 13.5 seconds, so 18 seconds clearly indicates increased fall risk. The TUG measures functional mobility, not upper extremity strength."],
        ["A patient's LEFS score improves from 32 to 51 over 6 weeks. What does this indicate?", ["Improved lower extremity function, since higher LEFS scores are better", "Worsening disability, since higher scores are worse", "No change in function", "Improvement in low back disability only"], "The LEFS ranges from 0 to 80, with higher scores meaning better function. The ODI is the opposite: higher means more disability."],
        ["What is the difference between the MDC and the MCID?", ["MDC is change beyond measurement error; MCID is change meaningful to the patient", "MDC is meaningful to the patient; MCID is measurement error", "They are two names for the same value", "MDC is used only for balance tests; MCID only for strength"], "A change can exceed the MDC (real change) yet still fall short of the MCID (not clinically meaningful)."],
        ["Which test best assesses a client with suspected hip flexor tightness?", ["Thomas test", "FABER test", "Trendelenburg test", "McMurray test"], "In the Thomas test, the lowered thigh rising off the table indicates iliopsoas tightness, and knee extension in the lowered leg suggests rectus femoris tightness."]
      ]
    }
  ]
});
