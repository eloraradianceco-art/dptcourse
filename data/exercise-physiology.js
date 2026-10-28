(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "exercise-physiology",
  track: "found",
  order: 4,
  code: "DPT 625",
  title: "Exercise Physiology",
  credits: 4,
  desc: "How the body produces energy and responds and adapts to exercise, and how to prescribe exercise safely for healthy and clinical populations. A PT uses it to dose exercise, monitor vital signs, and adjust programs for patients with heart, lung, and metabolic conditions.",
  objectives: [
    "Describe the three energy systems and match them to exercise intensity and duration",
    "Explain acute and chronic cardiorespiratory responses to exercise and calculate target heart rate zones",
    "Distinguish neural from muscular adaptations to resistance training and the roles of fiber types",
    "Apply FITT, overload, specificity, and periodization principles using ACSM guidelines",
    "Modify exercise for heat, altitude, diabetes, and hypertension and monitor intensity with RPE"
  ],
  units: [
    {
      t: "Energy Systems",
      sub: "ATP-PC, glycolysis, oxidative system, substrates, EPOC",
      guide: [
        "<b>ATP</b> is the direct energy source for muscle contraction. Stores in muscle last only a few seconds, so it must be constantly rebuilt.",
        "<b>Phosphagen (ATP-PC)</b>: fastest, no oxygen needed, powers maximal efforts of about <b>0-10 seconds</b> (e.g., a heavy single lift, a short sprint).",
        "<b>Glycolytic (anaerobic glycolysis)</b>: breaks down glucose/glycogen without oxygen; dominates hard efforts of about <b>10 seconds to 2 minutes</b> (e.g., a 400 m run). Produces lactate.",
        "<b>Oxidative (aerobic)</b>: uses oxygen in the mitochondria to break down carbohydrate and fat; slower but nearly unlimited ATP; dominates efforts longer than about 2-3 minutes.",
        "<b>All systems work at once</b>; the one that dominates depends on intensity and duration.",
        "<b>Fuel use</b>: at rest and low intensity, fat contributes more; as intensity rises, carbohydrate use increases. <b>Respiratory exchange ratio</b> about 0.7 = fat, 1.0 = carbohydrate.",
        "<b>Lactate threshold</b>: the intensity where blood lactate starts rising quickly above baseline. Training can raise it, letting a person work harder aerobically.",
        "<b>EPOC</b> (excess post-exercise oxygen consumption): elevated oxygen use after exercise to restore phosphocreatine, clear lactate, and return temperature and heart rate to baseline."
      ],
      assignment: {
        title: "Energy system breakdown",
        task: "Pick three activities from your clients' lives or sports (for example, a heavy deadlift set, a 1-minute circuit, and a 30-minute walk). For each, name the main energy system, the main fuel, and how you would set work-to-rest ratios to train that system.",
        deliverable: "One-page table with a short rationale for each activity."
      },
      gen: [],
      qs: [
        ["Which energy system supplies most of the ATP during a single maximal 5-second lift?", ["Phosphagen (ATP-PC) system", "Anaerobic glycolysis", "Oxidative system", "Fat oxidation"], "Maximal efforts lasting under about 10 seconds rely mainly on stored ATP and phosphocreatine. Glycolysis takes over for longer hard efforts."],
        ["A client runs an all-out 400 m in about 60 seconds. Which energy system is the main contributor?", ["Anaerobic glycolysis", "Phosphagen system only", "Oxidative system only", "Ketone metabolism"], "Hard efforts lasting about 10 seconds to 2 minutes rely mainly on anaerobic glycolysis. The phosphagen system is used up within the first seconds."],
        ["Which energy system is dominant during a 45-minute walk at a comfortable pace?", ["Oxidative system", "Phosphagen system", "Anaerobic glycolysis", "Creatine kinase reaction"], "Long, low-intensity activity relies on aerobic metabolism of fat and carbohydrate in the mitochondria. This system has slow but sustained ATP output."],
        ["As exercise intensity increases from low to high, how does fuel use change?", ["Carbohydrate use increases and fat contributes relatively less", "Fat use increases and carbohydrate contributes less", "Protein becomes the main fuel", "Fuel use stays the same at all intensities"], "Higher intensity needs ATP faster, so carbohydrate becomes the main fuel. Fat is a bigger share at rest and low intensity."],
        ["A respiratory exchange ratio of 1.0 indicates the body is mainly using which fuel?", ["Carbohydrate", "Fat", "Protein", "Equal fat and protein"], "An RER of about 1.0 means carbohydrate is the main fuel, while about 0.7 means mostly fat. RER rises as exercise intensity rises."],
        ["What is the lactate threshold?", ["The intensity at which blood lactate begins to rise rapidly above baseline", "The point where lactate production stops completely", "The maximum heart rate during exercise", "The intensity at which fat becomes the only fuel"], "Lactate threshold marks when lactate production outpaces clearance. Endurance training shifts it to a higher intensity."],
        ["Why does oxygen consumption stay elevated for a while after a hard interval session?", ["To restore phosphocreatine, clear lactate, and return body temperature and heart rate to baseline", "Because muscles keep contracting after exercise", "Because the lungs are damaged by high-intensity work", "To build new muscle fibers immediately"], "EPOC covers recovery processes such as restoring PCr stores and clearing metabolites. Higher intensity sessions produce larger EPOC."],
        ["A soccer player needs to repeat 5-second sprints throughout a game. Which training approach best targets the phosphagen system?", ["Short maximal sprints of 5-10 seconds with long rest periods of about 1:12 or more work-to-rest", "Continuous jogging for 40 minutes", "Two-minute intervals with 30 seconds of rest", "Slow walking with light weights"], "PCr needs a few minutes to rebuild, so short maximal bouts with long rests train this system. Short rests would shift the work toward glycolysis."],
        ["What is the immediate source of energy for muscle contraction?", ["ATP", "Glucose", "Fatty acids", "Lactate"], "Myosin cross-bridges use ATP directly. Glucose, fat, and phosphocreatine are used to rebuild ATP."],
        ["After 12 weeks of endurance training, a client can run at a faster pace before lactate climbs sharply. What adaptation best explains this?", ["A higher lactate threshold from more mitochondria and better lactate clearance", "A lower maximum heart rate", "Fewer capillaries in trained muscle", "A shift to more type IIx muscle fibers"], "Endurance training increases mitochondria and capillaries and improves lactate clearance, raising the threshold. Maximum heart rate is mostly unchanged by training."]
      ]
    },
    {
      t: "Cardiorespiratory Responses & VO2max",
      sub: "Heart rate, stroke volume, blood pressure, VO2max, Karvonen",
      guide: [
        "<b>Cardiac output</b> <span class='formula'>Q = HR x SV</span>. During exercise, HR and SV both rise; SV tends to plateau around 40-60% of VO2max in untrained people.",
        "<b>VO2max</b>: the maximum rate the body can take in and use oxygen; the best single measure of cardiorespiratory fitness. <span class='formula'>VO2 = Q x a-vO2 difference</span> (Fick equation).",
        "<b>Blood pressure response</b>: <b>systolic rises</b> with increasing workload; <b>diastolic stays the same or drops slightly</b>. A drop in systolic BP as workload rises is an abnormal response and a reason to stop.",
        "<b>Age-predicted HRmax</b>: <span class='formula'>220 - age</span> (simple, common), or <span class='formula'>208 - 0.7 x age</span> (Tanaka). These are estimates with real individual variation.",
        "<b>Karvonen (heart rate reserve)</b>: <span class='formula'>THR = [(HRmax - HRrest) x %intensity] + HRrest</span>.",
        "<b>Chronic endurance adaptations</b>: lower resting HR, higher stroke volume, higher VO2max, more capillaries and mitochondria, and lower HR at a given submaximal workload.",
        "<b>Beta-blockers</b> blunt the heart rate response, so HR-based targets are not reliable; use RPE instead.",
        "<b>Valsalva</b> (holding breath while straining) spikes blood pressure; teach patients to exhale during the effort phase."
      ],
      assignment: {
        title: "Target heart rate worksheet",
        task: "Calculate HRmax (both formulas) and a Karvonen target range of 50-70% HRR for three real or made-up clients of different ages and resting heart rates. Note which client you would program with RPE instead and why.",
        deliverable: "Completed worksheet with calculations shown for all three clients."
      },
      gen: [],
      qs: [
        ["Using the formula 220 - age, what is the predicted maximum heart rate of a 40-year-old client?", ["180 bpm", "170 bpm", "190 bpm", "200 bpm"], "220 - 40 = 180 bpm. This is an estimate, and actual maximum heart rate can vary by about 10-12 bpm."],
        ["A 50-year-old client has a resting heart rate of 70 bpm. Using HRmax = 220 - age and the Karvonen method, what is the target heart rate at 60% intensity?", ["130 bpm", "102 bpm", "120 bpm", "140 bpm"], "HRmax = 170, HRR = 170 - 70 = 100, and 60% of 100 = 60, plus 70 resting = 130 bpm. Simply taking 60% of HRmax would give 102 and ignores resting HR."],
        ["What normally happens to systolic and diastolic blood pressure during progressive aerobic exercise?", ["Systolic rises; diastolic stays about the same or drops slightly", "Both systolic and diastolic rise sharply", "Systolic drops; diastolic rises", "Both stay the same"], "Systolic pressure rises with cardiac output, while diastolic stays steady or drops slightly as the vessels in working muscle dilate. A large diastolic rise is abnormal."],
        ["During a graded treadmill test, a patient's systolic blood pressure falls by more than 10 mmHg as the workload increases. What is the best action?", ["Stop the test, as this is an abnormal response", "Increase the workload to confirm the finding", "Continue, since this is a normal adaptation", "Have the patient hold their breath and continue"], "A drop in systolic BP with increasing workload is a sign that the heart cannot meet demand and is a standard reason to stop. Normally systolic BP rises with workload."],
        ["Which equation defines cardiac output?", ["Heart rate x stroke volume", "Stroke volume x a-vO2 difference", "Heart rate x blood pressure", "Ventilation x respiratory rate"], "Cardiac output is how much blood the heart pumps per minute: HR x SV. VO2 is cardiac output times a-vO2 difference."],
        ["Which measure is considered the best single indicator of cardiorespiratory fitness?", ["VO2max", "Resting heart rate", "Resting blood pressure", "Body mass index"], "VO2max reflects how well the heart, lungs, and muscles take in and use oxygen. Resting values are influenced by many other factors."],
        ["A patient taking a beta-blocker is starting an aerobic program. How should intensity be monitored?", ["Use RPE because heart rate response is blunted", "Use 220 - age and 85% of that value", "Use the Karvonen formula unchanged", "Avoid all monitoring since beta-blockers make exercise safe"], "Beta-blockers lower resting and exercise heart rate, so standard HR targets would be wrong. RPE gives a reliable measure of effort."],
        ["After 6 months of endurance training, which change in resting physiology is expected?", ["Lower resting heart rate with higher stroke volume", "Higher resting heart rate with lower stroke volume", "Higher resting heart rate with no change in stroke volume", "No change in heart rate or stroke volume"], "Training enlarges the heart's pumping capacity, so stroke volume rises and the same output is met at a lower heart rate."],
        ["A patient holds their breath and strains while lifting a heavy box during a session. Why should you cue them to exhale during the lift?", ["Breath holding with straining (Valsalva) sharply raises blood pressure", "Exhaling increases muscle force by 50%", "Breath holding lowers heart rate dangerously", "Exhaling prevents lactate production"], "The Valsalva maneuver raises pressure in the chest and abdomen and spikes blood pressure. This is a risk for people with hypertension or heart disease."],
        ["What is the Tanaka formula for age-predicted maximum heart rate?", ["208 - (0.7 x age)", "220 - (0.7 x age)", "206 - (0.5 x age)", "210 - (0.8 x age)"], "Tanaka's equation is 208 - 0.7 x age and is thought to be more accurate in older adults than 220 - age. Both are estimates."]
      ]
    },
    {
      t: "Muscular Adaptations",
      sub: "Fiber types, neural adaptations, hypertrophy, strength",
      guide: [
        "<b>Type I (slow-twitch)</b>: oxidative, fatigue resistant, many mitochondria and capillaries, lower force. Dominant in postural muscles such as soleus.",
        "<b>Type IIa (fast oxidative-glycolytic)</b>: mix of speed and endurance. <b>Type IIx</b> (fast glycolytic): highest force and speed, fatigues fastest.",
        "<b>Size principle</b>: motor units are recruited from smallest (type I) to largest (type II) as force demand rises. Heavy loads or high effort are needed to recruit the largest units.",
        "<b>Early strength gains</b> (roughly the first 6-8 weeks) come mainly from <b>neural adaptations</b>: better recruitment, firing rate, synchronization, and less co-contraction. Later gains add <b>hypertrophy</b>.",
        "<b>Hypertrophy</b> in adults is mainly an increase in fiber size (more myofibrils), not fiber number. Mechanical tension is the main driver.",
        "<b>Cross-education</b>: training one limb increases strength in the untrained limb, a neural effect; useful when one limb is immobilized.",
        "<b>Detraining and disuse</b>: immobilization causes rapid strength loss and atrophy, especially in antigravity muscles such as the quadriceps and soleus.",
        "<b>Sarcopenia</b>: age-related loss of muscle mass and strength, with type II fibers affected most; resistance training is the best countermeasure."
      ],
      assignment: {
        title: "Strength gains explainer",
        task: "A 65-year-old client asks why their strength jumped in the first month but their arms do not look bigger yet. Write an explanation that covers neural adaptation, hypertrophy timing, the size principle, and sarcopenia, plus what they should expect over 6 months.",
        deliverable: "300-word client handout."
      },
      gen: [],
      qs: [
        ["Which muscle fiber type is most fatigue resistant?", ["Type I", "Type IIa", "Type IIx", "All types fatigue equally"], "Type I fibers have many mitochondria and capillaries and rely on aerobic metabolism. Type IIx fibers produce high force but fatigue fastest."],
        ["A client's squat strength rises 20% in the first 4 weeks of training with no measurable change in thigh size. What best explains this?", ["Neural adaptations such as better motor unit recruitment", "Rapid hyperplasia of muscle fibers", "Conversion of type II to type I fibers", "Increased fat storage in the muscle"], "Early strength gains are largely neural: improved recruitment, firing rate, and coordination. Measurable hypertrophy usually takes longer."],
        ["According to the size principle, in what order are motor units recruited as force demands increase?", ["Small, low-threshold units first, then larger, high-threshold units", "Large units first, then small units", "All units at once regardless of force", "Randomly, depending on fatigue"], "Small type I units are recruited first, and larger type II units are added as force demands rise. Heavy loads are needed to reach the largest units."],
        ["What is the main mechanism of muscle hypertrophy in adults?", ["Increase in the size of existing fibers", "Increase in the number of muscle fibers", "Conversion of tendon into muscle", "Increase in intramuscular fat"], "Adult hypertrophy is mainly an increase in fiber cross-sectional area through added myofibrils. Fiber number increase plays little role in humans."],
        ["A patient's left leg is in a cast for 6 weeks. Which intervention could help limit strength loss in the immobilized leg?", ["Strength training the right leg to take advantage of cross-education", "Complete rest of both legs", "Stretching the right hamstrings only", "Cold packs on the casted leg"], "Training one limb produces strength gains in the opposite, untrained limb through neural effects. This can reduce strength loss during immobilization."],
        ["Which fiber type does the soleus contain in the highest proportion?", ["Type I", "Type IIa", "Type IIx", "Equal amounts of all types"], "The soleus is a postural muscle with a high percentage of type I fibers. That suits its job of steady, low-level work during standing."],
        ["A 78-year-old client has trouble rising from a chair and climbing stairs. Which age-related change is most important, and what is the best intervention?", ["Sarcopenia, especially of type II fibers; progressive resistance training", "Increase in type II fibers; aerobic training only", "Loss of type I fibers; stretching only", "Increased muscle mass; balance training only"], "Aging muscle loses mass and power, especially type II fibers needed for quick, strong moves. Progressive resistance training is the most effective countermeasure."],
        ["Which change is a neural adaptation to resistance training?", ["Increased motor unit firing rate", "Increased myofibril number", "Increased mitochondrial density", "Increased capillary density"], "Firing rate, recruitment, and synchronization are neural changes. Myofibrils, mitochondria, and capillaries are structural muscle adaptations."],
        ["Which fiber type produces the highest force and speed but fatigues the fastest?", ["Type IIx", "Type I", "Type IIa", "Slow oxidative"], "Type IIx fibers are fast glycolytic, with the greatest force and speed and low endurance. Type IIa is intermediate."],
        ["A post-op patient's quadriceps has atrophied after 3 weeks in a knee brace. Which muscles are most vulnerable to disuse atrophy?", ["Antigravity muscles such as the quadriceps and soleus", "Hand intrinsic muscles", "Muscles of facial expression", "Muscles of mastication"], "Antigravity muscles that normally work against body weight lose size and strength fastest with disuse. That is why early quadriceps activation is a priority after knee surgery."]
      ]
    },
    {
      t: "Training Principles & Prescription",
      sub: "FITT, overload, specificity, periodization, ACSM guidelines",
      guide: [
        "<b>FITT-VP</b>: Frequency, Intensity, Time, Type, plus Volume and Progression.",
        "<b>Overload</b>: the body must be stressed beyond its usual level to adapt. <b>Progression</b>: increase load gradually as it adapts.",
        "<b>Specificity (SAID)</b>: Specific Adaptation to Imposed Demands. Train the energy system, muscles, speed, and movement pattern you want to improve.",
        "<b>Reversibility</b>: gains are lost when training stops. <b>Individuality</b>: people respond differently to the same program.",
        "<b>ACSM aerobic guideline</b> for adults: at least <b>150 min/week moderate</b> or <b>75 min/week vigorous</b> intensity (or a mix).",
        "<b>ACSM resistance guideline</b>: major muscle groups <b>2-3 days/week</b>. Strength: about 60-70% 1RM for 8-12 reps (novice/intermediate). Muscular endurance: lighter loads under 50% 1RM with 15-25 reps. Older adults and beginners can start at 40-50% 1RM.",
        "<b>Periodization</b>: planned variation in volume and intensity over time. <b>Linear</b> = volume goes down and intensity goes up across phases. <b>Undulating</b> = volume and intensity change more often (e.g., daily or weekly).",
        "<b>Flexibility</b>: hold static stretches about <b>10-30 seconds</b>, at least 2-3 days/week, accumulating about 60 seconds per muscle group."
      ],
      assignment: {
        title: "12-week program design",
        task: "Design a 12-week program for a 45-year-old deconditioned client who wants to lose weight and lift their grandkids. Include aerobic, resistance, and flexibility work using FITT-VP, show how you apply overload and progression, and lay out a simple periodization plan.",
        deliverable: "Program table for 12 weeks plus a half-page rationale citing ACSM guidelines."
      },
      gen: [],
      qs: [
        ["According to ACSM, how much moderate-intensity aerobic activity should most adults accumulate each week?", ["At least 150 minutes", "At least 60 minutes", "At least 300 minutes of vigorous only", "At least 30 minutes total"], "ACSM recommends at least 150 minutes per week of moderate or 75 minutes of vigorous activity, or a combination."],
        ["How often does ACSM recommend resistance training for each major muscle group in healthy adults?", ["2-3 days per week", "Once every 2 weeks", "6-7 days per week", "Once per week only"], "ACSM recommends 2-3 days per week per major muscle group, allowing at least 48 hours of recovery between sessions for the same muscles."],
        ["A basketball player wants a higher vertical jump but trains only with slow, heavy leg presses. Which principle is not being applied well?", ["Specificity", "Reversibility", "Individuality", "Overload"], "The SAID principle says training should match the speed and pattern of the goal. Jumping needs fast, explosive training such as plyometrics."],
        ["A client has done the same 3 sets of 10 at the same weight for 6 months and stopped improving. Which principle should you apply?", ["Progressive overload", "Reversibility", "Specificity", "Detraining"], "The body has adapted to the current load, so it must be raised gradually to keep improving. That is progressive overload."],
        ["Which load and rep range does ACSM suggest for novice to intermediate adults training mainly for muscular strength?", ["About 60-70% of 1RM for 8-12 reps", "About 20% of 1RM for 50 reps", "100% of 1RM for 1 rep every set", "About 40% of 1RM for 30 reps"], "ACSM suggests about 60-70% of 1RM for 8-12 reps for novice and intermediate lifters. Very light loads are used for endurance goals."],
        ["A client stopped training for 3 months and lost much of the fitness gained. Which principle does this show?", ["Reversibility", "Specificity", "Overload", "Individuality"], "Reversibility means adaptations are lost when training stops. Regular maintenance training slows this loss."],
        ["In linear periodization, how do volume and intensity typically change across phases?", ["Volume decreases while intensity increases", "Volume increases while intensity decreases", "Both increase together each week", "Both stay the same for the full year"], "Linear periodization starts with higher volume and lower intensity, then moves to lower volume and higher intensity."],
        ["What does ACSM recommend for the duration of a static stretch hold for most adults?", ["About 10-30 seconds", "About 1-3 seconds", "About 2-3 minutes", "About 5 minutes"], "Holding a static stretch about 10-30 seconds is recommended for most adults, adding up to about 60 seconds per muscle group. Older adults may benefit from 30-60 second holds."],
        ["A sedentary 70-year-old is starting resistance training. Which starting intensity is most appropriate?", ["About 40-50% of 1RM with 10-15 reps", "About 90% of 1RM for 3 reps", "Maximal effort for 1 rep each set", "Bodyweight only with no plan to progress"], "ACSM suggests that beginners and older adults can start with light loads of about 40-50% 1RM to build tolerance safely. The program should still progress over time."],
        ["Two clients follow the same program; one improves much faster. Which principle explains this?", ["Individuality", "Reversibility", "Specificity", "Overload"], "People differ in genetics, training history, sleep, and stress, so they respond differently to the same program. Programs should be adjusted to each person."]
      ]
    },
    {
      t: "Environmental & Special Populations",
      sub: "Heat, altitude, diabetes, hypertension, RPE scales",
      guide: [
        "<b>Heat</b>: sweating and skin blood flow rise; cardiac drift raises heart rate over time. <b>Heat acclimatization</b> takes about 10-14 days and increases plasma volume and earlier, greater sweating.",
        "<b>Heat illness</b>: heat exhaustion (heavy sweating, weakness, normal mental status) vs <b>exertional heat stroke</b> (core temp above about 40 C / 104 F with CNS changes such as confusion); heat stroke is an emergency needing rapid whole-body cold water cooling.",
        "<b>Altitude</b>: lower oxygen pressure reduces VO2max and raises heart rate at a given workload. Acclimatization over weeks increases red blood cell production through erythropoietin.",
        "<b>Diabetes</b>: exercise lowers blood glucose and improves insulin sensitivity. <b>Hypoglycemia</b> risk is highest in people using insulin or certain oral meds. If glucose is below about 100 mg/dL before exercise, eat carbohydrate first. Signs of low blood sugar: shakiness, sweating, confusion.",
        "<b>Hypertension</b>: exercise lowers resting BP. ACSM: do not start exercise if resting systolic BP is above <b>200</b> or diastolic above <b>110</b> mmHg. Avoid Valsalva; aerobic work most days plus resistance training.",
        "<b>Borg RPE scales</b>: 6-20 (roughly heart rate / 10) and 0-10 (CR10). Moderate intensity is about <b>12-13</b> on the 6-20 scale; vigorous about 14-17.",
        "<b>Talk test</b>: at moderate intensity, a person can talk but not sing; at vigorous intensity, only a few words at a time.",
        "<b>Stop exercise</b> for chest pain, unusual shortness of breath, dizziness, confusion, pallor, or a drop in systolic BP with rising workload."
      ],
      assignment: {
        title: "Special populations safety plan",
        task: "Write a safety checklist for a client with type 2 diabetes on insulin who also has controlled hypertension and wants to train outdoors in Mississippi summer. Include pre-exercise checks, intensity monitoring, heat precautions, and what to do if symptoms appear.",
        deliverable: "One-page checklist plus a 3-step emergency plan."
      },
      gen: [],
      qs: [
        ["A client on insulin checks blood glucose before exercise and it is 85 mg/dL. What should you do?", ["Have the client eat a carbohydrate snack before starting", "Start high-intensity intervals to raise glucose", "Give an extra dose of insulin", "Proceed with no changes"], "Glucose below about 100 mg/dL before exercise in someone on insulin raises hypoglycemia risk. A carbohydrate snack first is recommended."],
        ["During an outdoor session, a diabetic client becomes shaky, sweaty, and confused. What is the most likely cause and first step?", ["Hypoglycemia; stop exercise and give fast-acting carbohydrate", "Hyperglycemia; give insulin and continue", "Dehydration only; continue with water", "Normal fatigue; push through the last set"], "Shakiness, sweating, and confusion are classic signs of low blood sugar. Stop and give fast-acting carbohydrate, then recheck glucose."],
        ["A client's resting blood pressure before a session is 205/112 mmHg. What is the best action?", ["Do not start exercise and refer for medical evaluation", "Do a light warm-up and recheck", "Proceed with resistance training only", "Proceed with high-intensity intervals"], "ACSM advises against starting exercise when resting systolic BP is above 200 or diastolic is above 110 mmHg. Exercise would raise BP further."],
        ["On the Borg 6-20 RPE scale, which range corresponds to moderate intensity?", ["12-13", "6-8", "18-20", "9-10"], "An RPE of about 12-13 matches moderate intensity, described as somewhat hard. 18-20 is near maximal effort."],
        ["A football player during summer practice is confused, has a core temperature of 41 C, and has stopped making sense. What is the priority action?", ["Begin rapid whole-body cold water immersion and call emergency services", "Have him sit in the shade and drink water before practice resumes", "Give an over-the-counter fever reducer", "Wrap him in a blanket to prevent shivering"], "A core temperature above about 40 C with CNS changes is exertional heat stroke. Rapid cooling in cold water is the most effective treatment, ideally started before transport."],
        ["About how long does heat acclimatization take?", ["About 10-14 days", "About 1-2 days", "About 6 months", "About 1 year"], "Most heat acclimatization happens over about 10-14 days of exposure. Gains include higher plasma volume, earlier sweating, and lower heart rate in heat."],
        ["What happens to VO2max and submaximal heart rate when a person first arrives at high altitude?", ["VO2max decreases and submaximal heart rate increases", "VO2max increases and heart rate decreases", "Both stay the same", "VO2max increases and heart rate increases"], "Lower oxygen pressure reduces oxygen delivery, lowering VO2max. The heart beats faster to deliver more oxygen at the same workload."],
        ["A client walking on a treadmill can talk in full sentences but cannot sing. What intensity does this suggest?", ["Moderate intensity", "Very light intensity", "Vigorous intensity", "Maximal intensity"], "The talk test says moderate intensity allows talking but not singing. At vigorous intensity a person can speak only a few words at a time."],
        ["How does regular aerobic exercise affect a person with type 2 diabetes?", ["Improves insulin sensitivity and lowers blood glucose", "Increases insulin resistance", "Has no effect on blood glucose", "Raises fasting blood glucose over time"], "Working muscle takes up glucose, and training improves insulin sensitivity. This helps long-term glucose control."],
        ["During a session, a client with heart disease reports new chest pressure and dizziness. What is the most appropriate action?", ["Stop exercise immediately and follow the emergency plan", "Reduce the speed slightly and continue", "Have the client lie down and finish the cool-down later", "Switch to resistance training"], "New chest pain and dizziness are standard reasons to stop exercise right away. They may signal cardiac ischemia, which needs urgent evaluation."]
      ]
    }
  ]
});
