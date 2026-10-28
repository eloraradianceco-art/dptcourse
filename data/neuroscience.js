(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "neuroscience",
  track: "found",
  order: 2,
  code: "DPT 615",
  title: "Neuroscience",
  credits: 4,
  desc: "Structure and function of the nervous system from cells to brain systems, with an emphasis on movement, sensation, and pain. A PT needs it to localize lesions, interpret neurological signs, and explain pain and recovery to patients.",
  objectives: [
    "Describe the cells of the nervous system and how neurons conduct and transmit signals",
    "Trace the major ascending and descending spinal tracts and predict deficits from spinal cord lesions",
    "Relate the functions of the cortical lobes, basal ganglia, cerebellum, brainstem, and cranial nerves to clinical signs",
    "Distinguish upper from lower motor neuron lesions and explain the muscle spindle and Golgi tendon organ",
    "Explain neuroplasticity and central sensitization and apply them to rehabilitation and pain education"
  ],
  units: [
    {
      t: "Neuroanatomy & Cells",
      sub: "Neurons, glia, action potentials, synapses, CNS vs PNS",
      guide: [
        "<b>Neuron parts</b>: dendrites receive input, cell body integrates, axon conducts the action potential, terminals release neurotransmitter.",
        "<b>Glia</b>: <b>oligodendrocytes</b> myelinate CNS axons (one cell, many axons); <b>Schwann cells</b> myelinate PNS axons (one cell, one segment); astrocytes support neurons and the blood-brain barrier; microglia are immune cells.",
        "<b>Action potential</b>: Na+ rushes in (depolarization), K+ flows out (repolarization). Resting membrane potential is about -70 mV.",
        "<b>Saltatory conduction</b>: myelin lets the impulse jump between nodes of Ranvier, so large myelinated fibers conduct fastest.",
        "<b>Demyelination</b>: <b>multiple sclerosis</b> attacks CNS myelin (oligodendrocytes); <b>Guillain-Barre syndrome</b> attacks peripheral myelin (Schwann cells), causing ascending weakness and lost reflexes.",
        "<b>Neurotransmitters</b>: glutamate is the main excitatory CNS transmitter; GABA is the main inhibitory one in the brain (glycine in the spinal cord). Acetylcholine acts at the neuromuscular junction.",
        "<b>Peripheral nerve injury</b> (Seddon): neurapraxia (conduction block, myelin injury, recovers fully), axonotmesis (axon cut, sheath intact, regrows about 1 mm per day or roughly an inch a month), neurotmesis (whole nerve cut, needs surgery).",
        "<b>CNS vs PNS</b>: brain and spinal cord are CNS; cranial and spinal nerves and ganglia are PNS. Peripheral axons can regenerate; CNS axons regenerate poorly."
      ],
      assignment: {
        title: "Nerve injury recovery explainer",
        task: "Write a plain-language explanation for a client who has a radial nerve axonotmesis 20 cm above the wrist extensors. Explain what happened to the nerve, estimate a rough timeline for return using about 1 mm per day, and say what the client can do in the meantime.",
        deliverable: "300-word patient handout with a simple timeline sketch."
      },
      gen: [],
      qs: [
        ["Which cell forms myelin in the central nervous system?", ["Oligodendrocyte", "Schwann cell", "Astrocyte", "Microglia"], "Oligodendrocytes myelinate CNS axons, and one can wrap many axons. Schwann cells myelinate peripheral axons."],
        ["A 29-year-old has episodes of blurred vision and leg numbness that come and go, and MRI shows white matter lesions in the brain. Which process best explains this?", ["Autoimmune demyelination of CNS myelin", "Demyelination of peripheral nerves", "Degeneration of anterior horn cells", "Loss of dopamine neurons in the substantia nigra"], "Relapsing symptoms with brain white matter lesions fit multiple sclerosis, which attacks oligodendrocyte myelin. Peripheral demyelination is Guillain-Barre, and anterior horn cell loss is ALS or polio."],
        ["Two weeks after a viral illness, a patient develops weakness that started in the feet and is climbing up the legs, with absent reflexes. Which condition is most likely?", ["Guillain-Barre syndrome", "Multiple sclerosis", "Amyotrophic lateral sclerosis", "Parkinson disease"], "Guillain-Barre is an acute peripheral demyelination that often follows infection, with ascending weakness and areflexia. It needs medical monitoring because it can reach the breathing muscles."],
        ["What ion movement causes the depolarization phase of an action potential?", ["Sodium flowing into the cell", "Potassium flowing into the cell", "Sodium flowing out of the cell", "Chloride flowing out of the cell"], "Voltage-gated Na+ channels open and Na+ rushes in, making the inside positive. K+ flowing out then repolarizes the membrane."],
        ["Why do myelinated axons conduct impulses faster than unmyelinated axons of the same size?", ["The impulse jumps between nodes of Ranvier", "Myelin releases extra neurotransmitter", "Myelin raises the resting membrane potential", "The impulse travels inside the myelin sheath"], "Myelin insulates the axon so the action potential only regenerates at the nodes, which is called saltatory conduction. This greatly speeds conduction."],
        ["What is the main inhibitory neurotransmitter in the brain?", ["GABA", "Glutamate", "Acetylcholine", "Dopamine"], "GABA is the main inhibitory transmitter in the brain, and glycine plays that role in much of the spinal cord. Glutamate is the main excitatory transmitter."],
        ["A patient had a crush injury that damaged the axons of a nerve while the connective tissue sheath stayed intact. How is this injury classified?", ["Axonotmesis", "Neurapraxia", "Neurotmesis", "Wallerian regeneration"], "Axonotmesis is axon disruption with the sheath intact, so the axon can regrow along its old path. Neurapraxia is only a conduction block, and neurotmesis is a full cut."],
        ["A patient's leg went numb and weak after sitting cross-legged for hours, and full function returned within three weeks. What is the most likely type of nerve injury?", ["Neurapraxia", "Axonotmesis", "Neurotmesis", "Anterior horn cell injury"], "Neurapraxia is a local myelin injury that blocks conduction without cutting axons, so recovery is complete within days to weeks. Axon regrowth would take months."],
        ["An axon is cut 15 cm above the muscle it supplies, with the sheath intact. Using the typical regeneration rate, about how long until the axon reaches the muscle?", ["About 5 months", "About 2 weeks", "About 15 days", "About 3 years"], "Peripheral axons regrow at roughly 1 mm per day. 150 mm at 1 mm per day is about 150 days, or roughly 5 months."],
        ["Which cell type myelinates axons in the peripheral nervous system?", ["Schwann cell", "Oligodendrocyte", "Ependymal cell", "Astrocyte"], "Schwann cells myelinate peripheral axons and also help guide regrowth after injury. That support is one reason peripheral nerves regenerate better than CNS tracts."]
      ]
    },
    {
      t: "Spinal Cord & Tracts",
      sub: "DCML, spinothalamic, corticospinal, spinal cord injury syndromes",
      guide: [
        "<b>DCML</b> (dorsal column-medial lemniscus): fine touch, vibration, proprioception. Ascends on the <b>same side</b> and crosses in the <b>medulla</b>.",
        "<b>Spinothalamic (anterolateral)</b>: pain and temperature. Crosses within one or two segments of entry in the cord, then ascends on the <b>opposite side</b>.",
        "<b>Lateral corticospinal</b>: voluntary movement, especially of the limbs. Crosses at the <b>pyramidal decussation</b> in the lower medulla and descends on the same side as the muscles it controls.",
        "<b>Brown-Sequard (hemisection)</b>: same-side loss of motor and proprioception/vibration below the lesion, opposite-side loss of pain and temperature.",
        "<b>Central cord syndrome</b>: often from a hyperextension injury in an older adult with spondylosis; arms weaker than legs, sacral sparing. <b>Anterior cord syndrome</b>: loss of motor and pain/temperature, with proprioception and vibration preserved. <b>Posterior cord syndrome</b> (rare): loss of proprioception and vibration only.",
        "<b>ASIA (ISNCSCI) scale</b>: A complete (no motor or sensory function in S4-S5); B sensory incomplete; C motor incomplete with fewer than half of key muscles below the level at grade 3 or more; D at least half at grade 3 or more; E normal.",
        "<b>Cauda equina vs conus</b>: cauda equina lesions are LMN (flaccid, areflexic, often asymmetric); conus medullaris lesions can mix UMN and LMN signs.",
        "<b>Autonomic dysreflexia</b>: in injuries at <b>T6 or above</b>, a noxious stimulus (often a full bladder) triggers dangerous hypertension with a pounding headache. Sit the patient up and find and remove the trigger."
      ],
      assignment: {
        title: "Spinal cord injury syndrome comparison",
        task: "Make a table comparing complete injury, Brown-Sequard, central cord, anterior cord, and posterior cord syndromes: mechanism, motor loss, sensory loss by tract, and typical prognosis. Add a box with the steps you would take if a patient with a T4 injury showed signs of autonomic dysreflexia.",
        deliverable: "One-page comparison table plus an emergency steps box."
      },
      gen: [],
      qs: [
        ["After a stab wound to the right side of the thoracic spine, a patient has right leg weakness and loss of vibration, and loss of pain and temperature in the left leg. Which syndrome is this?", ["Brown-Sequard syndrome", "Anterior cord syndrome", "Central cord syndrome", "Posterior cord syndrome"], "Hemisection cuts the same-side corticospinal and DCML tracts and the already crossed spinothalamic fibers from the other side. This gives same-side motor and vibration loss with opposite-side pain and temperature loss."],
        ["Where does the dorsal column-medial lemniscus pathway cross the midline?", ["Medulla", "Spinal cord at the level of entry", "Thalamus", "Primary sensory cortex"], "DCML fibers ascend on the same side and cross in the medulla after synapsing in the gracile and cuneate nuclei. Spinothalamic fibers cross in the cord near entry."],
        ["A 72-year-old with cervical spondylosis falls forward and hyperextends his neck. He has more weakness in his hands than in his legs. Which syndrome is most likely?", ["Central cord syndrome", "Anterior cord syndrome", "Brown-Sequard syndrome", "Cauda equina syndrome"], "Central cord syndrome is classic after hyperextension in an older adult with a narrow canal. The arm fibers are more central in the cord, so the arms are hit harder than the legs."],
        ["After an aortic surgery that reduced flow in the anterior spinal artery, a patient has lost leg movement and pain sensation but can still feel vibration. Which syndrome fits?", ["Anterior cord syndrome", "Posterior cord syndrome", "Central cord syndrome", "Brown-Sequard syndrome"], "The anterior spinal artery supplies the front two-thirds of the cord, including corticospinal and spinothalamic tracts. The dorsal columns are supplied separately and are spared."],
        ["Which tract carries pain and temperature sensation?", ["Spinothalamic tract", "Dorsal column-medial lemniscus", "Lateral corticospinal tract", "Spinocerebellar tract"], "The spinothalamic (anterolateral) tract carries pain and temperature to the thalamus. The DCML carries fine touch, vibration, and proprioception."],
        ["A patient with a T3 complete spinal cord injury suddenly has a pounding headache, flushing above the injury, and blood pressure of 190/110. What should you do first?", ["Sit the patient upright and check for a blocked catheter or full bladder", "Lay the patient flat and raise the legs", "Continue the exercise session and recheck in 15 minutes", "Apply ice packs to the legs"], "This is autonomic dysreflexia, a medical emergency in injuries at T6 or above. Sitting up lowers blood pressure, and the most common trigger is the bladder; lying flat would make it worse."],
        ["A patient has no motor or sensory function in the S4-S5 segments after a spinal cord injury. What is the ASIA classification?", ["ASIA A", "ASIA B", "ASIA C", "ASIA D"], "ASIA A means complete, with no sensory or motor function in S4-S5. Any preserved sacral sensation would make it at least B."],
        ["Where do most lateral corticospinal tract fibers cross the midline?", ["Pyramidal decussation in the lower medulla", "Internal capsule", "Midbrain cerebral peduncle", "Anterior white commissure at each spinal level"], "About 85-90% of corticospinal fibers cross at the pyramidal decussation in the lower medulla. That is why a cortical lesion weakens the opposite side of the body."],
        ["A patient with an L3 burst fracture has flaccid leg weakness, absent ankle reflexes, and saddle numbness. Why are the findings lower motor neuron in type?", ["The injury is below the end of the cord and damages nerve roots", "The corticospinal tract is cut above the lesion", "The cerebellum is damaged by the fall", "Spinal shock always lasts permanently"], "The cord ends near L1-L2, so an L3 injury damages the cauda equina. These are peripheral nerve roots, which produce LMN signs."],
        ["A patient with a spinal cord injury has some motor function below the level, but fewer than half the key muscles below the level are grade 3 or higher. What is the ASIA grade?", ["ASIA C", "ASIA B", "ASIA D", "ASIA E"], "ASIA C is motor incomplete with fewer than half of key muscles below the level at grade 3 or more. ASIA D requires at least half at grade 3 or more."]
      ]
    },
    {
      t: "Brain Systems",
      sub: "Cortical lobes, basal ganglia, cerebellum, brainstem, cranial nerves",
      guide: [
        "<b>Frontal lobe</b>: primary motor cortex (precentral gyrus), planning, behavior, and <b>Broca area</b> (expressive speech, usually left side). <b>Parietal</b>: primary sensory cortex, spatial awareness; right parietal damage can cause left neglect.",
        "<b>Temporal lobe</b>: hearing, memory, <b>Wernicke area</b> (language comprehension). <b>Occipital</b>: vision.",
        "<b>Stroke patterns</b>: <b>MCA</b> = opposite face and arm weaker than leg, aphasia if the dominant side. <b>ACA</b> = opposite leg weaker than arm. <b>PCA</b> = visual field loss.",
        "<b>Basal ganglia</b>: regulate starting and scaling of movement. <b>Parkinson disease</b> = loss of dopamine neurons in the substantia nigra: resting tremor, rigidity, bradykinesia, postural instability. <b>Huntington disease</b> = chorea.",
        "<b>Cerebellum</b>: coordinates movement on the <b>same side</b>. Lesions cause ataxia, intention tremor, dysmetria, dysdiadochokinesia, and a wide-based gait.",
        "<b>Brainstem</b>: midbrain (CN III-IV), pons (CN V-VIII), medulla (CN IX, X, XII; the CN XI nucleus lies in the upper cervical cord). Contains breathing and heart rate centers.",
        "<b>Cranial nerves</b>: I smell, II vision, III/IV/VI eye movement (III also lifts the eyelid and constricts the pupil), V facial sensation and chewing, VII facial expression, VIII hearing and balance, IX/X swallowing and voice, XI SCM and trapezius, XII tongue.",
        "<b>Vestibular system</b> (CN VIII): semicircular canals sense head rotation, otoliths sense linear movement and gravity. The <b>vestibulo-ocular reflex</b> keeps vision steady during head turns."
      ],
      assignment: {
        title: "Cranial nerve screen practice",
        task: "Practice a 12-cranial-nerve screen on a partner and write one quick test and one expected normal finding for each nerve. Then describe what you would see after a right MCA stroke compared with a right cerebellar stroke.",
        deliverable: "Cranial nerve screen checklist plus a half-page comparison of the two strokes."
      },
      gen: [],
      qs: [
        ["A patient has right arm and face weakness greater than leg weakness and cannot produce fluent speech, though comprehension is intact. Which artery is most likely involved?", ["Left middle cerebral artery", "Right middle cerebral artery", "Left anterior cerebral artery", "Left posterior cerebral artery"], "Opposite face and arm weakness greater than leg is the MCA pattern, and expressive aphasia points to Broca area in the dominant (usually left) hemisphere. ACA would weaken the leg more than the arm."],
        ["After a stroke, a patient has weakness of the left leg that is much greater than weakness of the left arm. Which artery is most likely involved?", ["Right anterior cerebral artery", "Right middle cerebral artery", "Left anterior cerebral artery", "Right posterior cerebral artery"], "The ACA supplies the medial frontal cortex where the leg is represented. A right-sided lesion produces left-sided weakness."],
        ["A patient with a right parietal stroke ignores food on the left side of the plate and does not shave the left side of his face. What is this called?", ["Left unilateral neglect", "Right homonymous hemianopia", "Receptive aphasia", "Ideomotor apraxia"], "Right parietal lesions commonly cause neglect of the left side of space and body. It is an attention problem, not just a vision loss."],
        ["Degeneration of dopamine-producing neurons in the substantia nigra causes which condition?", ["Parkinson disease", "Huntington disease", "Multiple sclerosis", "Cerebellar ataxia"], "Parkinson disease results from loss of nigral dopamine neurons, leading to rigidity, bradykinesia, and resting tremor. Huntington disease is a genetic disorder that causes chorea."],
        ["A patient's hand shakes more as it approaches a target during finger-to-nose testing, and the tremor is on the right. Where is the lesion most likely?", ["Right cerebellar hemisphere", "Left cerebellar hemisphere", "Left basal ganglia", "Right primary motor cortex"], "Intention tremor is a cerebellar sign, and the cerebellum controls the same side of the body. A resting tremor would point to the basal ganglia."],
        ["Which cranial nerve should you test if a patient cannot shrug the shoulders against resistance?", ["Accessory nerve (CN XI)", "Hypoglossal nerve (CN XII)", "Vagus nerve (CN X)", "Glossopharyngeal nerve (CN IX)"], "CN XI supplies the trapezius and SCM. CN XII moves the tongue, and CN IX and X handle swallowing and voice."],
        ["A patient after stroke has a drooping right eyelid, a dilated right pupil, and the right eye rests down and out. Which cranial nerve is affected?", ["Oculomotor nerve (CN III)", "Trochlear nerve (CN IV)", "Abducens nerve (CN VI)", "Optic nerve (CN II)"], "CN III lifts the eyelid, constricts the pupil, and moves most eye muscles. Without it, the lateral rectus (VI) and superior oblique (IV) pull the eye down and out."],
        ["Which brainstem region contains the nuclei for cranial nerves IX, X, and XII?", ["Medulla", "Pons", "Midbrain", "Thalamus"], "The medulla holds the nuclei for IX, X, and XII and the breathing and cardiovascular centers (the CN XI nucleus sits in the upper cervical cord). The pons holds V through VIII, and the midbrain holds III and IV."],
        ["A patient walks with a wide base, cannot do rapid alternating hand movements, and overshoots targets, but strength and sensation are normal. Which structure is most likely involved?", ["Cerebellum", "Basal ganglia", "Primary motor cortex", "Dorsal columns"], "Ataxic gait, dysdiadochokinesia, and dysmetria with normal strength point to the cerebellum. Dorsal column loss would also impair proprioception and vibration sense."],
        ["Which part of the vestibular system detects head rotation?", ["Semicircular canals", "Utricle", "Saccule", "Cochlea"], "The three semicircular canals detect angular (rotational) movement. The utricle and saccule are otolith organs that sense linear movement and gravity, and the cochlea is for hearing."]
      ]
    },
    {
      t: "Motor Control & Reflexes",
      sub: "UMN vs LMN signs, muscle spindle, Golgi tendon organ, tone",
      guide: [
        "<b>UMN lesion</b> (brain or spinal cord tracts): spasticity, hyperreflexia, clonus, positive Babinski, weakness in patterns, little early atrophy.",
        "<b>LMN lesion</b> (anterior horn cell, root, peripheral nerve): flaccid weakness, hyporeflexia or areflexia, <b>fasciculations</b>, early and marked atrophy.",
        "<b>ALS</b> damages both UMNs and LMNs, so patients can show both sets of signs; sensation is usually spared.",
        "<b>Spasticity</b> is <b>velocity-dependent</b> resistance to passive stretch (UMN). <b>Rigidity</b> is resistance throughout the range regardless of speed (basal ganglia): lead pipe, or cogwheel when tremor is added.",
        "<b>Muscle spindle</b> (in parallel with muscle fibers) senses muscle length and rate of stretch; Ia afferents trigger the <b>stretch reflex</b> (e.g., patellar reflex). Gamma motor neurons keep the spindle sensitive.",
        "<b>Golgi tendon organ</b> (in series at the musculotendinous junction) senses tension; Ib afferents inhibit the same muscle (<b>autogenic inhibition</b>).",
        "<b>Reciprocal inhibition</b>: Ia input from the agonist excites it and inhibits the antagonist through an interneuron, so the antagonist relaxes.",
        "<b>Modified Ashworth Scale</b> grades spasticity 0, 1, 1+, 2, 3, 4. A <b>positive Babinski</b> (big toe up, toes fan) is normal in infants but means a UMN lesion in adults."
      ],
      assignment: {
        title: "UMN vs LMN case sort",
        task: "Write four short cases (stroke, peripheral nerve injury, ALS, and cauda equina) and list the tone, reflexes, atrophy, fasciculations, and Babinski finding for each. Then explain how the muscle spindle and GTO relate to one technique you already use in massage or stretching, using correct neuroscience terms.",
        deliverable: "Case table plus a 250-word technique explanation."
      },
      gen: [],
      qs: [
        ["A patient has weakness with brisk reflexes, sustained ankle clonus, and a positive Babinski sign. Where is the lesion most likely?", ["Upper motor neuron", "Lower motor neuron", "Neuromuscular junction", "Muscle itself"], "Hyperreflexia, clonus, and Babinski are classic UMN signs. LMN lesions give low reflexes, atrophy, and fasciculations."],
        ["A patient has thigh muscle atrophy, visible twitching under the skin, and an absent patellar reflex. Where is the lesion most likely?", ["Lower motor neuron", "Upper motor neuron", "Basal ganglia", "Cerebellum"], "Atrophy, fasciculations, and areflexia point to an LMN lesion such as anterior horn cell, root, or nerve. UMN lesions raise reflexes."],
        ["A 58-year-old has hand muscle atrophy with fasciculations, yet brisk knee reflexes and a positive Babinski, with normal sensation. Which condition best fits?", ["Amyotrophic lateral sclerosis", "Guillain-Barre syndrome", "Multiple sclerosis", "Peripheral neuropathy"], "ALS damages both upper and lower motor neurons and spares sensation. Mixed UMN and LMN signs without sensory loss are the key clue."],
        ["What does the muscle spindle primarily detect?", ["Muscle length and rate of stretch", "Tension in the tendon", "Joint angle at end range only", "Pain from muscle damage"], "Spindles lie in parallel with muscle fibers and sense length and how fast it changes. Tension in the tendon is detected by the Golgi tendon organ."],
        ["Which mechanism explains relaxation of a muscle in response to high tension sensed in its own tendon?", ["Autogenic inhibition by the Golgi tendon organ", "Reciprocal inhibition from the antagonist spindle", "Gamma motor neuron activation", "The crossed extensor reflex"], "GTO Ib afferents inhibit the same muscle when tension rises, which is autogenic inhibition. Reciprocal inhibition is when an agonist contracts and the antagonist is inhibited."],
        ["When you briskly move a stroke patient's elbow into extension, you feel a strong catch, but slow movement meets little resistance. What does this describe?", ["Spasticity", "Lead-pipe rigidity", "Cogwheel rigidity", "Flaccidity"], "Spasticity is velocity-dependent, so resistance rises with faster stretch. Rigidity is present throughout the range regardless of speed."],
        ["A patient with Parkinson disease shows steady resistance throughout the whole range of passive wrist motion at any speed, with ratchet-like catches. What is this called?", ["Cogwheel rigidity", "Spasticity", "Clasp-knife response", "Clonus"], "Rigidity from basal ganglia disease is not speed dependent, and the ratchet catches come from tremor on top of rigidity. Clasp-knife is a feature of spasticity."],
        ["Contracting the quadriceps causes the hamstrings to relax through a spinal interneuron. What is this called?", ["Reciprocal inhibition", "Autogenic inhibition", "Stretch reflex facilitation", "Recurrent facilitation"], "Ia input from the agonist excites an inhibitory interneuron that relaxes the antagonist. Autogenic inhibition acts on the same muscle via the GTO."],
        ["On Modified Ashworth testing, a patient has a catch followed by minimal resistance through less than half of the remaining range. Which grade is this?", ["1+", "1", "2", "3"], "Grade 1+ is a slight increase in tone with a catch followed by minimal resistance through the rest (less than half) of the range. Grade 1 is a catch and release only at the end of the range."],
        ["Tapping the patellar tendon produces a knee jerk. Which receptor and fiber start this reflex?", ["Muscle spindle with Ia afferents", "Golgi tendon organ with Ib afferents", "Free nerve endings with C fibers", "Pacinian corpuscle with A-beta fibers"], "The tap quickly stretches the quadriceps spindles, and Ia afferents synapse directly on alpha motor neurons. That single synapse makes it a monosynaptic stretch reflex."]
      ]
    },
    {
      t: "Neuroplasticity & Pain Neuroscience",
      sub: "Central sensitization, recovery mechanisms, motor learning",
      guide: [
        "<b>Neuroplasticity</b>: the nervous system changes structure and function with experience. After injury, recovery comes from restoring tissue around the lesion and from other areas taking over function.",
        "<b>Principles of experience-dependent plasticity</b> (Kleim and Jones): use it or lose it, use it and improve it, specificity, <b>repetition matters</b>, <b>intensity matters</b>, time matters, salience matters, age matters, transference, interference.",
        "<b>Constraint-induced movement therapy</b>: restrain the stronger arm and do intensive practice with the weaker arm to overcome learned non-use after stroke.",
        "<b>Nociception vs pain</b>: nociception is the nervous system signaling possible tissue threat; pain is an experience produced by the brain and influenced by thoughts, mood, and context. Tissue damage and pain do not match one-to-one.",
        "<b>Fibers</b>: A-delta fibers carry fast, sharp, well-localized pain; C fibers carry slow, dull, burning pain.",
        "<b>Central sensitization</b>: increased responsiveness of central pain pathways. Signs include <b>allodynia</b> (pain from a normally non-painful touch), <b>hyperalgesia</b> (more pain from a painful stimulus), and pain spreading beyond the injured area.",
        "<b>Gate control theory</b>: input from large A-beta touch fibers can reduce pain transmission in the dorsal horn, one reason rubbing or TENS can ease pain. Descending pathways (e.g., from the periaqueductal gray) can also turn pain down.",
        "<b>Pain neuroscience education</b> explains pain biology to reduce fear and catastrophizing; it works best combined with exercise and graded activity."
      ],
      assignment: {
        title: "Pain education script",
        task: "Write a script you could use with a client who has had back pain for 18 months, light touch hurts, and they fear that bending will damage the spine. Explain sensitization in plain language, use one metaphor, and close with a graded activity plan.",
        deliverable: "400-word script plus a 4-week graded activity outline."
      },
      gen: [],
      qs: [
        ["A client with chronic neck pain says that light brushing of a shirt collar on the skin is painful. What is this called?", ["Allodynia", "Hyperalgesia", "Paresthesia", "Hypoesthesia"], "Allodynia is pain from a stimulus that normally does not hurt, such as light touch. Hyperalgesia is increased pain from something that is already painful."],
        ["Which description best fits central sensitization?", ["Increased responsiveness of central pain pathways, so pain spreads and persists beyond tissue healing", "Ongoing tissue damage that matches the pain intensity", "A peripheral nerve that is cut and no longer conducts", "Pain that comes only from inflamed tissue at the injury site"], "Central sensitization is an upregulated central nervous system response, so pain can spread and outlast healing. It does not require ongoing tissue damage."],
        ["Which fiber type carries fast, sharp, well-localized pain?", ["A-delta fibers", "C fibers", "A-beta fibers", "Ia fibers"], "Thinly myelinated A-delta fibers carry the first sharp pain. Unmyelinated C fibers carry the slower burning pain, and A-beta fibers carry touch."],
        ["Rubbing a bumped elbow eases the pain. Which theory best explains this?", ["Gate control theory", "Specificity theory of pain", "Wallerian degeneration", "Reciprocal inhibition"], "Gate control theory says A-beta touch input inhibits pain transmission in the dorsal horn. Reciprocal inhibition is a motor reflex and does not explain pain relief."],
        ["Six months after a stroke, a patient barely uses the weaker arm even though it can move. Which intervention is designed for this problem?", ["Constraint-induced movement therapy", "Passive range of motion only", "Bracing the weaker arm full time", "Strengthening only the stronger arm"], "Constraint-induced movement therapy restrains the stronger arm and forces intensive use of the weaker one to overcome learned non-use. It uses repetition and intensity to drive plasticity."],
        ["Which principle of experience-dependent plasticity explains why a stroke patient must practice hundreds of reaching repetitions rather than a few?", ["Repetition matters", "Transference", "Interference", "Age matters"], "Plastic changes need enough repetition to be lasting. Transference is about spread to other skills, and interference is when one learned behavior blocks another."],
        ["A patient with chronic low back pain believes bending will break the spine and avoids all bending. What approach is best supported?", ["Pain neuroscience education combined with graded exposure to bending", "Strict rest until the pain is gone", "Telling the patient the pain is all in the head", "Avoiding bending permanently to protect the discs"], "Education reduces fear and catastrophizing, and graded exposure rebuilds confidence in movement. Rest and avoidance tend to reinforce fear and disability."],
        ["Which statement about pain is most accurate according to modern pain science?", ["Pain is produced by the brain and influenced by context, mood, and beliefs", "Pain always equals the amount of tissue damage", "Pain only comes from nociceptors in damaged tissue", "Pain cannot change once it becomes chronic"], "Pain is an output of the brain that weighs danger signals with context and beliefs. That is why pain and tissue damage do not match one-to-one and chronic pain can improve."],
        ["Which brainstem area is a key part of the descending pain-modulating system?", ["Periaqueductal gray", "Substantia nigra", "Red nucleus", "Inferior olive"], "The periaqueductal gray in the midbrain activates descending pathways that dampen pain in the dorsal horn. The substantia nigra is a basal ganglia structure for movement."],
        ["A patient's pain started at the right wrist after a fracture but now hurts with light touch over the whole forearm, months after the bone has healed. What is the best explanation?", ["Central sensitization amplifying pain beyond the original injury", "Ongoing fracture instability at the wrist", "A new tear in the forearm muscles", "Normal healing pain that always lasts this long"], "Spreading pain, allodynia, and pain after tissue healing are hallmarks of central sensitization. Treatment then focuses on the nervous system, not only the original tissue."]
      ]
    }
  ]
});
