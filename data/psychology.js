(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "psychology",
  track: "prereq",
  order: 6,
  code: "PRE 131",
  title: "Psychology & Lifespan Development",
  credits: 3,
  desc: "Core psychology for rehab: how people learn movement, what drives behavior change, how humans develop across the lifespan, and how thoughts and emotions shape pain. PTs need this to teach motor skills, improve adherence, treat across all ages, and recognize psychosocial barriers to recovery.",
  objectives: [
    "Distinguish major research designs in psychology and interpret their strengths and limits",
    "Apply classical and operant conditioning, stages of motor learning, practice schedules, and feedback to exercise instruction",
    "Use the transtheoretical model, self-efficacy, and motivational interviewing to support behavior change",
    "Describe key lifespan development theories (Piaget, Erikson) and major gross motor milestones",
    "Explain the biopsychosocial model of pain and identify fear-avoidance, catastrophizing, and yellow flags"
  ],
  units: [
    {
      t: "Foundations & Research Methods",
      sub: "Perspectives in psychology, descriptive vs correlational vs experimental designs, variables, validity",
      guide: [
        "<b>Major perspectives</b>: biological, behavioral, cognitive, psychodynamic, humanistic (Maslow, Rogers), and sociocultural. Modern psychology integrates them.",
        "<b>Descriptive research</b>: case studies, naturalistic observation, and surveys describe behavior but cannot establish cause.",
        "<b>Correlational research</b>: measures how two variables relate (r from -1 to +1). <i>Correlation does not imply causation</i>; a third variable may explain both.",
        "<b>Experiments</b>: the researcher manipulates the <b>independent variable</b> and measures the <b>dependent variable</b>. <b>Random assignment</b> to groups is what allows cause-and-effect conclusions.",
        "<b>Controls and bias</b>: placebo groups, blinding (single and double), and control of confounding variables. The <b>Hawthorne effect</b> is behavior change caused simply by being observed.",
        "<b>Reliability vs validity</b>: reliability is consistency of a measure; validity is whether it measures what it claims. A measure can be reliable without being valid, but cannot be valid without being reliable.",
        "<b>Ethics</b>: informed consent, the right to withdraw, confidentiality, debriefing, and Institutional Review Board (IRB) approval for human-subjects research."
      ],
      assignment: {
        title: "Design a mini-study",
        task: "Write a one-page proposal to test whether a 10-minute daily mobility routine improves a self-reported stiffness score in desk workers. Name the independent and dependent variables, describe random assignment and a control condition, identify two possible confounds, and explain how you would protect participants ethically.",
        deliverable: "One-page study proposal."
      },
      gen: [],
      qs: [
        ["A researcher randomly assigns clients to either a balance program or a stretching program and then compares fall rates. The type of program is the:", ["Independent variable", "Dependent variable", "Confounding variable", "Control variable"], "The independent variable is what the researcher manipulates. Fall rate, the outcome measured, is the dependent variable."],
        ["Which feature of a study most allows a researcher to conclude cause and effect?", ["Random assignment of participants to groups", "A large survey sample", "A strong correlation coefficient", "Detailed case observations"], "Random assignment balances unknown confounds between groups, which is what supports causal inference. Correlations and surveys cannot establish cause."],
        ["A study finds that people who own more running shoes report less back pain. What is the most appropriate conclusion?", ["The two variables are related, but this does not show that shoes reduce back pain", "Buying running shoes prevents back pain", "Back pain causes people to buy fewer shoes", "There is no relationship between the variables"], "Correlation does not imply causation. A third variable, such as overall activity level, could explain both."],
        ["Which correlation coefficient represents the strongest relationship?", ["-0.85", "+0.40", "+0.10", "0.00"], "Strength is the absolute value of r. -0.85 is a strong negative relationship; the sign shows only direction."],
        ["Workers increase their productivity simply because they know researchers are watching them. This is called the:", ["Hawthorne effect", "Placebo effect", "Halo effect", "Pygmalion effect"], "The Hawthorne effect is a change in behavior due to awareness of being observed, which is a threat to validity in clinical studies."],
        ["A goniometer gives the same reading every time but is consistently 10° off from the true joint angle. This tool is:", ["Reliable but not valid", "Valid but not reliable", "Both reliable and valid", "Neither reliable nor valid"], "Consistency equals reliability; accuracy equals validity. A consistent but systematically wrong measure is reliable but not valid."],
        ["In a double-blind study:", ["Neither the participants nor the researchers collecting data know who is in which group", "Only the participants are unaware of their group", "Participants are assigned to groups twice", "Two independent researchers analyze the data"], "Double-blinding prevents both participant expectations and researcher bias from influencing results."],
        ["A clinic wants to publish outcomes collected from its patients as research. What is required before data collection begins?", ["Approval from an Institutional Review Board and informed consent", "Permission from the clinic owner only", "Approval from the patients' insurance companies", "Nothing, because clinical data belongs to the clinic"], "Human-subjects research requires IRB review and informed consent to protect participants."],
        ["A detailed report of one patient's unusual recovery after a rare nerve injury is best described as:", ["A case study", "A randomized controlled trial", "A correlational study", "A cohort experiment"], "A case study describes one individual in depth. It generates hypotheses but cannot establish causation or generalize widely."],
        ["Which psychological perspective emphasizes personal growth, free will, and self-actualization?", ["Humanistic", "Behavioral", "Psychodynamic", "Biological"], "Humanistic psychology (Maslow, Rogers) focuses on growth and self-actualization. Behaviorism focuses on observable learned behavior."]
      ]
    },
    {
      t: "Learning & Motor Learning Theory",
      sub: "Classical and operant conditioning, Fitts and Posner stages, practice schedules, feedback",
      guide: [
        "<b>Classical conditioning (Pavlov)</b>: a neutral stimulus paired with an unconditioned stimulus comes to produce a conditioned response. Example: a patient tenses at the sight of a treatment table after painful sessions.",
        "<b>Operant conditioning (Skinner)</b>: behavior is shaped by consequences. <i>Positive</i> = add a stimulus; <i>negative</i> = remove a stimulus. <i>Reinforcement</i> increases behavior; <i>punishment</i> decreases it. Variable-ratio schedules are most resistant to extinction.",
        "<b>Stages of motor learning (Fitts &amp; Posner)</b>: <i>cognitive</i> (what to do; many errors, high attention), <i>associative</i> (how to do it; refining, fewer errors), <i>autonomous</i> (automatic; can dual-task).",
        "<b>Motor learning vs performance</b>: learning is a relatively permanent change measured by <b>retention</b> and <b>transfer</b> tests, not by performance during practice.",
        "<b>Practice schedules</b>: <i>blocked</i> practice (same task repeated) improves performance during the session; <i>random</i> practice (tasks interleaved) creates contextual interference and improves retention. <i>Variable</i> practice improves transfer.",
        "<b>Whole vs part practice</b>: continuous skills (such as gait) and fast discrete skills with tightly linked components are best practiced whole; longer serial skills with separable steps (such as a transfer) can be broken into parts.",
        "<b>Feedback</b>: <i>intrinsic</i> (from the person's own senses) vs <i>extrinsic/augmented</i> (from the clinician). <i>Knowledge of results</i> (KR) is about the outcome; <i>knowledge of performance</i> (KP) is about the movement pattern.",
        "<b>Feedback schedules</b>: frequent, immediate feedback helps early; reduce it as skill improves (faded or summary feedback) to prevent dependence and improve retention."
      ],
      assignment: {
        title: "Re-coach a lift with motor learning principles",
        task: "Pick a client who is learning a hip hinge or deadlift. Identify their current stage of motor learning, then write a 3-session plan describing your practice schedule (blocked vs random, whole vs part), feedback type (KR vs KP), and feedback frequency, and how each will change across sessions. Include a retention test you would use in session 3.",
        deliverable: "3-session coaching plan (one page) with a stated retention test."
      },
      gen: [],
      qs: [
        ["A patient who had painful sessions now tenses up as soon as they see the treatment table. This is an example of:", ["Classical conditioning", "Operant conditioning", "Negative reinforcement", "Observational learning"], "A neutral stimulus (the table) has been paired with pain and now triggers a conditioned response (tensing)."],
        ["A client's back pain eases when they skip their walk, so they skip walking more often. Which principle explains the increase in skipping?", ["Negative reinforcement", "Positive punishment", "Positive reinforcement", "Extinction"], "Removing an unpleasant stimulus (pain) increases the behavior (skipping). Negative reinforcement increases behavior by taking something away."],
        ["A patient learning to use crutches needs constant verbal cues, makes frequent errors, and cannot talk while practicing. Which stage of motor learning are they in?", ["Cognitive", "Associative", "Autonomous", "Retention"], "High attentional demand, many errors, and reliance on cues characterize the cognitive stage."],
        ["A patient can now walk with a cane while carrying on a conversation and scanning the environment. This indicates the:", ["Autonomous stage", "Cognitive stage", "Associative stage", "Acquisition stage"], "Performing a skill under dual-task conditions with little attention indicates the autonomous stage."],
        ["Your goal is long-term retention of three different transfer types. Which practice schedule is best?", ["Random practice, mixing the three transfers", "Blocked practice, finishing all reps of one before the next", "Practicing only the easiest transfer", "Mental practice only"], "Random practice creates contextual interference, which lowers performance during practice but improves retention and transfer."],
        ["During the session, a patient practicing in a blocked schedule performs better than one practicing in a random schedule. What should you expect at a 48-hour retention test?", ["The random-practice patient will likely retain the skill better", "The blocked-practice patient will retain the skill better", "Both will retain equally because their practice was equal", "Neither will retain anything without feedback"], "Blocked practice boosts in-session performance, but random practice produces better retention. Performance during practice is not the same as learning."],
        ["You tell a client, 'Your hips moved before your chest that time; keep your spine neutral.' What type of feedback is this?", ["Knowledge of performance", "Knowledge of results", "Intrinsic feedback", "Concurrent bandwidth feedback"], "Knowledge of performance describes the movement pattern itself. Knowledge of results describes the outcome, such as 'you jumped 30 cm.'"],
        ["A patient in the associative stage relies on your cues for every repetition. What is the best change to your feedback?", ["Fade feedback frequency or give summary feedback after several reps", "Increase feedback to every repetition", "Stop all feedback immediately and permanently", "Switch to only giving feedback during the movement"], "Reducing feedback frequency as skill improves prevents dependence and encourages the learner to use intrinsic feedback, which improves retention."],
        ["Which skill is generally best practiced as a whole rather than broken into parts?", ["Walking (a continuous skill)", "A sit-to-stand-pivot transfer", "A wheelchair-to-bed transfer setup sequence", "A multi-step home exercise routine"], "Continuous skills with interdependent components like gait are best practiced whole. Serial tasks with separable steps can be practiced in parts."],
        ["Motor learning is best measured by:", ["Retention and transfer tests after a delay", "Performance on the last trial of practice", "The number of repetitions completed", "The patient's confidence rating during practice"], "Learning is a relatively permanent change, so it is measured after a delay (retention) or in a new context (transfer)."]
      ]
    },
    {
      t: "Motivation, Behavior Change & Health Psychology",
      sub: "Transtheoretical model, self-efficacy, health belief model, motivational interviewing, adherence",
      guide: [
        "<b>Transtheoretical model (stages of change)</b>: precontemplation (not considering change in the next 6 months) → contemplation (considering, ambivalent) → preparation (planning within about a month) → action (changed behavior for less than 6 months) → maintenance (6+ months). Relapse can occur at any stage.",
        "<b>Match the intervention to the stage</b>: raise awareness in precontemplation, resolve ambivalence in contemplation, build a concrete plan in preparation, and prevent relapse in action and maintenance.",
        "<b>Self-efficacy (Bandura)</b>: confidence in one's ability to perform a specific task. The strongest source is <b>mastery experiences</b> (succeeding), followed by vicarious experience, verbal persuasion, and physiological/emotional states.",
        "<b>Health belief model</b>: action depends on perceived susceptibility, perceived severity, perceived benefits, perceived barriers, cues to action, and self-efficacy.",
        "<b>Intrinsic vs extrinsic motivation</b>: intrinsic motivation (enjoyment, values) tends to sustain behavior better than external rewards alone. Self-determination theory emphasizes autonomy, competence, and relatedness.",
        "<b>Motivational interviewing (MI)</b>: a collaborative, client-centered style that elicits the client's own reasons for change. Core skills are <b>OARS</b>: Open questions, Affirmations, Reflective listening, Summaries.",
        "<b>MI in practice</b>: listen for and reinforce <i>change talk</i>; avoid the 'righting reflex' (arguing for change), which increases resistance. Use importance and confidence rulers (0-10).",
        "<b>Adherence strategies</b>: SMART goals set collaboratively, a simple home program, self-monitoring, and early wins that build self-efficacy."
      ],
      assignment: {
        title: "MI conversation script",
        task: "Write a short dialogue (about 12 exchanges) between you and a client who says they 'know they should do their home exercises but never get to it.' Identify the client's stage of change, label each of your responses with the OARS skill used, and highlight at least two examples of change talk you reinforced.",
        deliverable: "Annotated one-to-two page dialogue script."
      },
      gen: [],
      qs: [
        ["A client says, 'I know I should start exercising, but I'm just not sure it's worth the hassle right now.' Which stage of change are they in?", ["Contemplation", "Precontemplation", "Preparation", "Action"], "They recognize the issue but are ambivalent and have no plan, which is classic contemplation."],
        ["A patient has been doing their home program consistently for 3 months. According to the transtheoretical model, they are in:", ["Action", "Maintenance", "Preparation", "Contemplation"], "Action covers about the first 6 months of changed behavior. Maintenance begins after 6 months."],
        ["A client in precontemplation insists their knee pain has nothing to do with their weight or activity. What is the most appropriate approach?", ["Raise awareness and explore their perspective without pressure", "Give them a detailed 12-week exercise plan", "Focus on relapse prevention strategies", "Tell them firmly that they must change now"], "Precontemplators are not considering change. Building awareness and rapport fits their stage; detailed plans and pressure tend to increase resistance."],
        ["According to Bandura, which is the most powerful source of self-efficacy?", ["Mastery experiences", "Verbal persuasion", "Vicarious experience", "Physiological states"], "Successfully performing the task yourself is the strongest builder of self-efficacy. This is why early, achievable wins matter in rehab."],
        ["An older adult afraid of stairs successfully climbs two steps in clinic with supervision. Why is this the best way to boost their confidence?", ["It provides a mastery experience, the strongest source of self-efficacy", "It provides vicarious experience by watching others", "It relies on verbal persuasion from the therapist", "It reduces their perceived susceptibility to falling"], "Personal success at a graded task (mastery) builds self-efficacy more than watching others or being encouraged verbally."],
        ["In motivational interviewing, what does OARS stand for?", ["Open questions, Affirmations, Reflective listening, Summaries", "Observe, Assess, Recommend, Schedule", "Objectives, Actions, Results, Strategies", "Open questions, Advice, Reassurance, Solutions"], "OARS are the core communication skills of MI. Unsolicited advice and reassurance are not part of OARS."],
        ["A client says, 'I guess if I walked more my back might feel better.' What is the best MI response?", ["'You're noticing that walking might help your back.'", "'Yes, so you need to walk 30 minutes every day.'", "'Then why haven't you started already?'", "'Most people feel better if they walk.'"], "Reflecting the client's own change talk reinforces it. Prescribing or challenging triggers the righting reflex and resistance."],
        ["A clinician repeatedly argues all the reasons a patient should quit smoking, and the patient becomes defensive. In MI terms, the clinician is showing:", ["The righting reflex", "Reflective listening", "Developing discrepancy", "Rolling with resistance"], "The righting reflex is the urge to fix and persuade, which often provokes the client to defend the status quo."],
        ["Under the health belief model, a patient who thinks home exercises will not help their condition has low:", ["Perceived benefits", "Perceived susceptibility", "Perceived severity", "Cues to action"], "Perceived benefits reflect belief that an action will be effective. Low perceived benefit predicts poor adherence."],
        ["Which goal best supports exercise adherence?", ["'Walk 15 minutes after dinner on Monday, Wednesday, and Friday for the next 2 weeks,' set together with the client", "'Get in better shape,' set by the therapist", "'Exercise as much as possible,' set by the client's family", "'Never miss a workout again,' set by the client alone"], "Specific, measurable, time-bound, and collaboratively set goals (SMART) improve adherence more than vague or imposed goals."]
      ]
    },
    {
      t: "Lifespan Development",
      sub: "Piaget, Erikson, gross motor milestones, aging changes",
      guide: [
        "<b>Piaget's cognitive stages</b>: <i>sensorimotor</i> (0-2 y; object permanence), <i>preoperational</i> (2-7 y; symbolic play, egocentrism), <i>concrete operational</i> (7-11 y; conservation, logical thinking about concrete things), <i>formal operational</i> (11+ y; abstract and hypothetical reasoning).",
        "<b>Erikson's psychosocial stages</b>: trust vs mistrust (infancy); autonomy vs shame and doubt (toddler); initiative vs guilt (preschool); industry vs inferiority (school age); identity vs role confusion (adolescence); intimacy vs isolation (young adult); generativity vs stagnation (middle adult); integrity vs despair (older adult).",
        "<b>Motor development principles</b>: cephalocaudal (head to tail) and proximal-to-distal; gross motor before fine motor; milestones vary within normal ranges.",
        "<b>Gross motor milestones (approximate)</b>: head control about 4 months; rolling about 4-6 months; sitting independently about 6-8 months; crawling about 7-10 months; pulling to stand about 9 months; walking independently about 12 months (normal range to about 15-18 months).",
        "<b>Primitive reflexes</b> (such as Moro and asymmetric tonic neck reflex) normally integrate in the first months of life; persistence beyond the expected window is a red flag for neurological involvement.",
        "<b>Adolescence</b>: rapid growth spurts can temporarily affect coordination and flexibility. Formal operational thinking allows more abstract goal-setting.",
        "<b>Older adulthood</b>: sarcopenia, declining power, slower reaction time, and reduced balance reserve are typical. Learning capacity is preserved but may need more practice and time; fall risk rises."
      ],
      assignment: {
        title: "Same exercise, three ages",
        task: "Take one functional skill (such as stepping up a curb) and write how you would teach it to a 6-year-old, a 35-year-old, and a 78-year-old. For each, name the Piaget and Erikson stage and explain how it changes your cueing, goal-setting, and motivation strategy.",
        deliverable: "Three-column comparison table with a short rationale per age."
      },
      gen: [],
      qs: [
        ["A 9-month-old searches for a toy after it is hidden under a blanket. Which Piagetian achievement does this show?", ["Object permanence", "Conservation", "Abstract reasoning", "Egocentrism"], "Object permanence develops during the sensorimotor stage (0-2 years) and means understanding objects exist when out of sight."],
        ["A 4-year-old believes a tall, thin glass holds more juice than a short, wide glass with the same amount. Which stage is this child in?", ["Preoperational", "Concrete operational", "Formal operational", "Sensorimotor"], "Lack of conservation is typical of the preoperational stage (2-7 years). Conservation emerges in the concrete operational stage."],
        ["A 15-year-old athlete can reason through 'what if' scenarios about a return-to-sport plan. This reflects which Piaget stage?", ["Formal operational", "Concrete operational", "Preoperational", "Sensorimotor"], "Formal operational thinking (about 11+ years) allows abstract and hypothetical reasoning."],
        ["According to Erikson, the main psychosocial task of an older adult reviewing their life is:", ["Integrity vs despair", "Generativity vs stagnation", "Intimacy vs isolation", "Identity vs role confusion"], "Late adulthood centers on integrity vs despair, a reflection on whether life has been meaningful."],
        ["A 45-year-old patient is highly motivated to recover so they can keep coaching youth sports and mentoring others. This reflects which Erikson stage?", ["Generativity vs stagnation", "Integrity vs despair", "Industry vs inferiority", "Autonomy vs shame and doubt"], "Middle adulthood's task is generativity: contributing to and guiding the next generation."],
        ["Motor control developing from the head downward toward the feet describes which principle?", ["Cephalocaudal development", "Proximal-to-distal development", "Fine-before-gross development", "Contextual interference"], "Cephalocaudal means head-to-tail. Infants gain head control before trunk control and before standing."],
        ["At approximately what age do most infants first walk independently?", ["About 12 months", "About 6 months", "About 24 months", "About 4 months"], "Independent walking typically emerges around 12 months, with a normal range extending to about 15-18 months."],
        ["A 12-month-old still shows a strong Moro reflex. What is the most appropriate interpretation?", ["It is a possible sign of neurological involvement that warrants further evaluation", "It is normal and expected at this age", "It indicates advanced motor development", "It means the child will walk early"], "The Moro reflex normally integrates in the first months of life. Persistence well beyond that window is a red flag."],
        ["A school-age child in physical therapy is most motivated by mastering new skills and comparing well with peers. This fits which Erikson stage?", ["Industry vs inferiority", "Initiative vs guilt", "Trust vs mistrust", "Intimacy vs isolation"], "School-age children (about 6-12 years) work through industry vs inferiority, building competence through accomplishment."],
        ["Which change is typical of healthy aging and most relevant to fall risk?", ["Declining muscle power and slower reaction time", "Loss of the ability to learn new motor skills", "Increased muscle mass in the lower limbs", "Faster nerve conduction velocity"], "Older adults lose power faster than strength and react more slowly, both of which increase fall risk. Motor learning capacity is preserved."]
      ]
    },
    {
      t: "Pain Psychology & Psychosocial Factors",
      sub: "Biopsychosocial model, fear-avoidance, catastrophizing, yellow flags, pain science education",
      guide: [
        "<b>Biopsychosocial model</b>: pain and disability result from interacting biological (tissue, nervous system), psychological (beliefs, emotions, coping), and social (work, family, culture) factors. It replaces a purely biomedical view.",
        "<b>Pain is an experience</b>: the IASP defines pain as an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage. Nociception and pain are not the same.",
        "<b>Fear-avoidance model</b>: pain → catastrophic interpretation → fear of movement → avoidance and hypervigilance → deconditioning, disability, and more pain. Low-fear patients confront activity and tend to recover.",
        "<b>Pain catastrophizing</b>: rumination, magnification, and helplessness about pain. Measured with the <b>Pain Catastrophizing Scale (PCS)</b>; higher scores predict worse outcomes.",
        "<b>Kinesiophobia</b>: fear of movement or re-injury, measured with the <b>Tampa Scale of Kinesiophobia</b>. The <b>Fear-Avoidance Beliefs Questionnaire (FABQ)</b> has physical activity and work subscales.",
        "<b>Yellow flags</b> are psychosocial risk factors for chronicity (fear-avoidance, catastrophizing, low mood, passive coping, belief that hurt equals harm, work dissatisfaction). They differ from <b>red flags</b>, which suggest serious pathology requiring medical referral.",
        "<b>Screening tools</b>: the <b>STarT Back Screening Tool</b> stratifies low back pain patients into low, medium, and high risk of poor outcome to guide treatment.",
        "<b>Interventions</b>: pain neuroscience education, graded activity (time-contingent goals), graded exposure to feared movements, and promoting active coping. Refer to a mental health professional when depression, anxiety, or trauma exceed PT scope."
      ],
      assignment: {
        title: "Yellow-flag screen and graded exposure plan",
        task: "Write a case of a client with 4 months of low back pain who avoids bending because they fear 'slipping a disc.' Identify their yellow flags, choose two screening tools you would administer, and outline a 4-week graded exposure plan for bending. Include the education message you would give in plain language.",
        deliverable: "One-page case summary with screening plan, graded exposure ladder, and education script."
      },
      gen: [],
      qs: [
        ["Which model explains pain as the interaction of tissue, beliefs and emotions, and social context?", ["Biopsychosocial model", "Biomedical model", "Transtheoretical model", "Health belief model"], "The biopsychosocial model integrates biological, psychological, and social factors. The biomedical model looks only at tissue pathology."],
        ["A patient with low back pain believes bending will damage their spine, so they avoid it and become increasingly deconditioned. This pattern is described by the:", ["Fear-avoidance model", "Gate control theory", "Stages of motor learning", "Health belief model"], "Catastrophic beliefs lead to fear, avoidance, and deconditioning, which perpetuate pain and disability in the fear-avoidance cycle."],
        ["A patient says, 'This pain is terrible and it's never going to get better. I can't stop thinking about it.' This most reflects:", ["Pain catastrophizing", "Kinesiophobia only", "Malingering", "A red flag for cancer"], "Rumination, magnification, and helplessness are the components of catastrophizing, measured with the Pain Catastrophizing Scale."],
        ["Which finding is a yellow flag rather than a red flag?", ["Belief that hurt always means harm", "Unexplained weight loss with night pain", "Saddle anesthesia and new bladder retention", "History of cancer with new constant pain"], "Yellow flags are psychosocial risk factors for chronic disability. The other options are red flags suggesting serious pathology."],
        ["Which tool is designed to stratify patients with low back pain into low, medium, or high risk of a poor outcome?", ["STarT Back Screening Tool", "Tampa Scale of Kinesiophobia", "Berg Balance Scale", "Fear-Avoidance Beliefs Questionnaire"], "STarT Back stratifies risk to match treatment intensity. Tampa and FABQ measure specific fear constructs rather than overall risk stratification."],
        ["You want to measure a patient's fear of movement and re-injury specifically. Which tool is most appropriate?", ["Tampa Scale of Kinesiophobia", "Pain Catastrophizing Scale", "Numeric Pain Rating Scale", "Oswestry Disability Index"], "The Tampa Scale measures kinesiophobia. PCS measures catastrophizing; the NPRS measures intensity; the Oswestry measures disability."],
        ["A patient with high fear of lifting has been cleared of serious pathology. What is the most appropriate intervention approach?", ["Pain education plus graded exposure to progressively more feared lifting tasks", "Strict avoidance of lifting until pain fully resolves", "Passive modalities only until fear subsides", "Bed rest with gradual return when pain-free"], "Graded exposure, combined with education, directly targets fear-avoidance by showing the feared movement is safe. Avoidance and rest reinforce the cycle."],
        ["In graded activity for chronic pain, progression is best based on:", ["Pre-set time or quota goals rather than pain levels", "Stopping whenever pain increases at all", "The patient's daily pain rating alone", "Doing as much as possible on good days"], "Graded activity uses time- or quota-contingent progression to break the pain-guided boom-and-bust cycle."],
        ["According to the IASP definition, which statement about pain is correct?", ["Pain is a sensory and emotional experience and is not the same as nociception", "Pain always indicates the amount of tissue damage", "Pain only exists when tissue damage is visible on imaging", "Nociception and pain are identical processes"], "Pain is an experience produced by the nervous system. Nociception can occur without pain and pain can occur without nociception."],
        ["During treatment, a patient discloses persistent hopelessness and loss of interest in all activities for the past month. What is the most appropriate action?", ["Screen further and refer to a physician or mental health professional", "Ignore it because it is outside the musculoskeletal complaint", "Increase exercise intensity to improve mood", "Tell the patient to think more positively"], "Possible depression is beyond PT scope to treat but within scope to screen and refer. Appropriate referral is part of biopsychosocial care."]
      ]
    }
  ]
});
