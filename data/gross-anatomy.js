(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "gross-anatomy",
  track: "found",
  order: 1,
  code: "DPT 610",
  title: "Gross Anatomy",
  credits: 6,
  desc: "Regional study of the musculoskeletal, neural, and visceral structures of the human body. A PT uses it every day to link a patient's weakness, numbness, or pain pattern to the specific muscle, nerve, or root responsible.",
  objectives: [
    "Identify the origin, insertion, innervation, and action of major trunk and limb muscles",
    "Trace the brachial and lumbosacral plexuses from roots to terminal branches",
    "Predict motor and sensory deficits from a peripheral nerve or nerve root lesion",
    "Relate spinal anatomy to disc herniation, root compression, and cauda equina presentations",
    "Describe the anatomy of the thorax, abdominal wall, and pelvic floor as it relates to breathing, trunk control, and continence",
    "Recognize visceral and neurologic findings that require referral"
  ],
  units: [
    {
      t: "Back & Spine",
      sub: "Vertebrae, discs, ligaments, spinal nerves, back musculature",
      guide: [
        "<b>Vertebrae</b>: 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, coccyx. <b>Spinal nerves</b>: 31 pairs (8 C, 12 T, 5 L, 5 S, 1 Co).",
        "<b>Root exit rule</b>: C1-C7 exit <i>above</i> their same-numbered vertebra, C8 exits between C7 and T1, and thoracic/lumbar roots exit <i>below</i> theirs. A posterolateral L4-L5 disc usually hits the traversing <b>L5</b> root; a C5-C6 disc hits <b>C6</b>.",
        "<b>Spinal cord</b> ends at the conus medullaris around <b>L1-L2</b> in adults; below that is the cauda equina (nerve roots, so lesions give LMN signs).",
        "<b>Ligaments</b>: ALL is broad and limits extension; PLL is narrow in the lumbar region (so herniations go posterolateral) and limits flexion; ligamentum flavum is elastic and joins the laminae.",
        "<b>Upper cervical</b>: atlanto-occipital joint does most nodding (flexion/extension); the atlantoaxial (C1-C2) joint provides about half of cervical rotation. The transverse ligament of the atlas holds the dens.",
        "<b>Facet orientation</b>: thoracic facets near the frontal plane favor rotation and side-bending; lumbar facets are mostly sagittal, favoring flexion/extension and limiting rotation.",
        "<b>Superficial back</b>: trapezius (CN XI, spinal accessory), latissimus dorsi (thoracodorsal, C6-C8), rhomboids (dorsal scapular, C5). <b>Deep back</b>: erector spinae (iliocostalis, longissimus, spinalis, lateral to medial) and transversospinalis (semispinalis, multifidus, rotatores), all supplied by <b>dorsal rami</b>.",
        "<b>Red flag</b>: saddle anesthesia, new bowel/bladder dysfunction, and bilateral leg symptoms suggest <b>cauda equina syndrome</b> and need emergency referral."
      ],
      assignment: {
        title: "Root-level decision chart",
        task: "Build a chart for disc levels C4-C5 through L5-S1 showing which root is usually compressed, its key muscle (myotome), dermatome area, and reflex. Add a row of cauda equina red flags and the action you would take.",
        deliverable: "One-page reference table plus a 3-line red-flag box."
      },
      gen: [],
      qs: [
        ["A 42-year-old has a posterolateral L4-L5 disc herniation with weak great toe extension and numbness over the dorsum of the foot. Which nerve root is most likely compressed?", ["L5", "L4", "S1", "L3"], "A posterolateral L4-L5 disc usually compresses the traversing L5 root, which supplies extensor hallucis longus and the dorsal foot. L4 would be the exiting root and is spared by a typical posterolateral herniation."],
        ["Imaging shows a C5-C6 disc herniation in a patient with lateral forearm and thumb numbness. Which root is most likely involved?", ["C6", "C5", "C7", "C8"], "Cervical roots exit above their same-numbered vertebra, so the root at the C5-C6 interspace is C6. The thumb and lateral forearm fit the C6 dermatome."],
        ["In most adults, the spinal cord ends at approximately which vertebral level?", ["L1-L2", "T10-T11", "L4-L5", "S1-S2"], "The conus medullaris sits around L1-L2 in adults. Below this level only nerve roots (the cauda equina) are present, which is why lumbar punctures are done lower."],
        ["Which nerve innervates the trapezius?", ["Spinal accessory nerve (CN XI)", "Dorsal scapular nerve", "Thoracodorsal nerve", "Long thoracic nerve"], "The trapezius and sternocleidomastoid are supplied by CN XI. Dorsal scapular supplies the rhomboids and levator scapulae, and thoracodorsal supplies the latissimus dorsi."],
        ["After a lymph node biopsy in the posterior triangle of the neck, a patient has a drooping shoulder and cannot shrug on that side. Which nerve was most likely injured?", ["Spinal accessory nerve", "Long thoracic nerve", "Suprascapular nerve", "Axillary nerve"], "CN XI runs superficially across the posterior triangle and is vulnerable in neck surgery. Loss of the trapezius causes shoulder droop and weak shrugging."],
        ["Which ligament runs along the front of the vertebral bodies and limits spinal extension?", ["Anterior longitudinal ligament", "Posterior longitudinal ligament", "Ligamentum flavum", "Supraspinous ligament"], "The ALL is broad and anterior, so it becomes taut in extension. The PLL, ligamentum flavum, and supraspinous ligament are posterior and limit flexion."],
        ["Why do lumbar disc herniations most often occur posterolaterally rather than straight posteriorly?", ["The posterior longitudinal ligament narrows in the lumbar region", "The anterior longitudinal ligament is weakest posteriorly", "The ligamentum flavum blocks the midline", "The lumbar facets are oriented in the frontal plane"], "The PLL becomes a narrow band in the lumbar spine, leaving the posterolateral annulus less supported. Lumbar facets are mostly sagittal, not frontal."],
        ["Which joint provides roughly half of total cervical rotation?", ["Atlantoaxial joint (C1-C2)", "Atlanto-occipital joint", "C5-C6 facet joints", "Cervicothoracic junction"], "The atlantoaxial joint pivots the atlas around the dens and supplies about 50% of cervical rotation. The atlanto-occipital joint mainly provides nodding."],
        ["A patient with a large central lumbar disc herniation reports new urinary retention, numbness in the saddle region, and bilateral leg weakness. What is the most appropriate action?", ["Refer immediately for emergency medical evaluation", "Begin repeated lumbar extension exercises", "Apply traction and reassess in one week", "Teach core stabilization and schedule follow-up"], "Saddle anesthesia, bladder dysfunction, and bilateral deficits indicate possible cauda equina syndrome, a surgical emergency. Any conservative treatment delays care that protects bladder and bowel function."],
        ["Lumbar facet joints are oriented mainly in which plane, favoring flexion and extension?", ["Sagittal", "Frontal", "Transverse", "Oblique at 45 degrees to the transverse plane"], "Lumbar facets face mostly medial/lateral in a sagittal orientation, which allows flexion/extension and limits rotation. Thoracic facets lie closer to the frontal plane."]
      ]
    },
    {
      t: "Upper Extremity",
      sub: "Shoulder girdle, brachial plexus, peripheral nerve injuries",
      guide: [
        "<b>Brachial plexus</b>: roots C5-T1, then trunks (upper C5-C6, middle C7, lower C8-T1), divisions, cords, branches. Cords (lateral, posterior, medial) are named by their relation to the <b>axillary artery</b>.",
        "<b>Terminal branches</b>: musculocutaneous (biceps, brachialis, coracobrachialis), axillary (deltoid, teres minor), radial (triceps and posterior forearm extensors), median (most forearm flexors, thenar muscles), ulnar (FCU, medial FDP, most hand intrinsics).",
        "<b>Rotator cuff (SITS)</b>: supraspinatus (abduction, suprascapular n.), infraspinatus (ER, suprascapular n.), teres minor (ER, axillary n.), subscapularis (IR, upper and lower subscapular nn.).",
        "<b>Radial nerve</b> at the spiral groove (midshaft humerus fracture) gives <b>wrist drop</b>. <b>Axillary nerve</b> injury (surgical neck fracture, anterior dislocation) weakens the deltoid and numbs the lateral shoulder.",
        "<b>Median nerve</b> at the carpal tunnel: numbness of thumb, index, middle, and lateral half of ring finger, plus thenar weakness/atrophy. <b>Ulnar nerve</b> (cubital tunnel or Guyon canal): clawing of digits 4-5, weak interossei, positive Froment sign.",
        "<b>Long thoracic nerve</b> (C5-C7) supplies serratus anterior; injury gives <b>medial scapular winging</b>.",
        "<b>Erb palsy</b> (upper trunk C5-C6): arm adducted and internally rotated, elbow extended, forearm pronated (waiter's tip). <b>Klumpke palsy</b> (lower trunk C8-T1): claw hand, sometimes Horner syndrome.",
        "<b>Anatomic snuffbox</b> (between EPL and APL/EPB) overlies the scaphoid; tenderness after a fall on an outstretched hand suggests scaphoid fracture."
      ],
      assignment: {
        title: "Brachial plexus map and lesion cards",
        task: "Draw the brachial plexus from roots to terminal branches from memory, then make one card for each of radial, median, ulnar, axillary, musculocutaneous, and long thoracic nerves listing a common injury site, the motor loss, the sensory loss, and one quick clinical test.",
        deliverable: "One hand-drawn plexus diagram and six lesion cards."
      },
      gen: [],
      qs: [
        ["After a midshaft humeral fracture, a patient cannot extend the wrist or fingers but can still extend the elbow. Which nerve is most likely injured?", ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous nerve"], "The radial nerve runs in the spiral groove of the midshaft humerus, and injury causes wrist drop. The triceps is usually spared because its branches leave the nerve above the groove."],
        ["Following an anterior shoulder dislocation, a patient has weak shoulder abduction and numbness over the lateral upper arm. Which nerve is most likely involved?", ["Axillary nerve", "Suprascapular nerve", "Radial nerve", "Long thoracic nerve"], "The axillary nerve wraps the surgical neck and is stretched in anterior dislocations. It supplies the deltoid and the skin over the lateral shoulder."],
        ["After an axillary lymph node dissection, a patient's scapula wings medially when she pushes against a wall. Which nerve was most likely damaged?", ["Long thoracic nerve", "Dorsal scapular nerve", "Spinal accessory nerve", "Thoracodorsal nerve"], "The long thoracic nerve runs on the lateral chest wall and supplies serratus anterior; loss causes medial winging. Trapezius (CN XI) loss gives lateral winging and shoulder droop instead."],
        ["A newborn delivered after shoulder dystocia holds the arm adducted and internally rotated with the elbow extended and forearm pronated. Which injury is most likely?", ["Upper trunk (C5-C6) Erb palsy", "Lower trunk (C8-T1) Klumpke palsy", "Isolated radial nerve palsy", "Posterior cord injury"], "This waiter's tip posture reflects loss of C5-C6 muscles (deltoid, cuff, biceps, supinator). Klumpke palsy affects the hand intrinsics and gives a claw hand."],
        ["Which finding is most consistent with median nerve compression at the carpal tunnel?", ["Thenar atrophy with numbness of the thumb, index, and middle fingers", "Clawing of the ring and small fingers", "Wrist drop with numbness of the dorsal first web space", "Weak elbow flexion with lateral forearm numbness"], "The median nerve supplies the thenar muscles and the lateral three and a half digits. Clawing of digits 4-5 is ulnar, and wrist drop is radial."],
        ["Which rotator cuff muscle is innervated by the axillary nerve?", ["Teres minor", "Infraspinatus", "Supraspinatus", "Subscapularis"], "Teres minor shares the axillary nerve with the deltoid. Supraspinatus and infraspinatus are supplied by the suprascapular nerve, and subscapularis by the subscapular nerves."],
        ["A positive Froment sign indicates weakness of which muscle?", ["Adductor pollicis (ulnar nerve)", "Flexor pollicis longus (median nerve)", "Abductor pollicis brevis (median nerve)", "Extensor pollicis longus (radial nerve)"], "When pinching paper, the patient flexes the thumb IP joint (FPL) to substitute for a weak ulnar-innervated adductor pollicis. That substitution is the Froment sign."],
        ["The lateral, posterior, and medial cords of the brachial plexus are named for their position relative to which structure?", ["Axillary artery", "Clavicle", "Coracoid process", "Subclavian vein"], "The cords are named by their relation to the axillary artery behind pectoralis minor. This landmark helps place the plexus in a mental map of the axilla."],
        ["A long-distance cyclist has numbness of the small finger and weak finger abduction, but normal sensation on the dorsal ulnar hand. Where is the ulnar nerve most likely compressed?", ["Guyon canal at the wrist", "Cubital tunnel at the elbow", "Between the heads of pronator teres", "Interscalene triangle"], "The dorsal ulnar cutaneous branch leaves the nerve above the wrist, so dorsal sensation is spared in Guyon canal compression. A cubital tunnel lesion would also numb the dorsal ulnar hand."],
        ["After a fall on an outstretched hand, a patient has tenderness in the anatomic snuffbox but a normal initial X-ray. What is the most appropriate step?", ["Immobilize and refer for follow-up imaging for possible scaphoid fracture", "Begin wrist mobilization to restore extension", "Reassure the patient that a normal X-ray rules out fracture", "Start grip strengthening and return to activity"], "Scaphoid fractures are often missed on first X-rays and carry a risk of avascular necrosis. Snuffbox tenderness calls for immobilization and repeat imaging."]
      ]
    },
    {
      t: "Lower Extremity",
      sub: "Hip, knee, ankle, lumbosacral plexus, nerve injuries",
      guide: [
        "<b>Lumbar plexus (L1-L4)</b>: femoral (L2-L4; quadriceps, iliacus, sartorius), obturator (L2-L4; hip adductors), lateral femoral cutaneous (L2-L3; sensory to lateral thigh).",
        "<b>Sacral plexus (L4-S4)</b>: superior gluteal (L4-S1; glute med, glute min, TFL), inferior gluteal (L5-S2; glute max), sciatic (L4-S3) splitting into tibial and common fibular.",
        "<b>Superior gluteal nerve</b> injury weakens hip abductors: when standing on the affected leg, the <i>opposite</i> side of the pelvis drops (positive Trendelenburg).",
        "<b>Common fibular nerve</b> wraps the fibular neck; injury gives <b>foot drop</b> and steppage gait. Deep branch: dorsiflexors and first web space skin. Superficial branch: fibularis longus/brevis and most of the dorsal foot.",
        "<b>Tibial nerve</b>: posterior leg (gastrocnemius, soleus, tibialis posterior, FHL, FDL) and the sole; compressed behind the medial malleolus in <b>tarsal tunnel syndrome</b>.",
        "<b>Myotomes</b>: L2 hip flexion, L3 knee extension, L4 ankle dorsiflexion, L5 great toe extension, S1 plantarflexion/eversion. <b>Reflexes</b>: patellar L4 (L3-L4), Achilles S1.",
        "<b>Hamstrings</b> (semitendinosus, semimembranosus, long head biceps femoris) arise from the ischial tuberosity and are supplied by the tibial division; the <b>short head of biceps femoris</b> is the common fibular division.",
        "<b>Pes anserinus</b>: sartorius (femoral), gracilis (obturator), semitendinosus (tibial). <b>Femoral triangle</b> lateral to medial: nerve, artery, vein."
      ],
      assignment: {
        title: "Lower quarter screen write-up",
        task: "Perform (or role-play) a lower quarter neurological screen: myotomes L2-S1, dermatomes, and patellar and Achilles reflexes. Then write a short case of a patient with common fibular nerve palsy and explain how your screen separates it from an L5 radiculopathy.",
        deliverable: "Completed screen form plus a 300-word case comparison."
      },
      gen: [],
      qs: [
        ["After a fall that fractured the fibular neck, a patient has foot drop and numbness over the dorsum of the foot. Which nerve is most likely injured?", ["Common fibular nerve", "Tibial nerve", "Femoral nerve", "Superior gluteal nerve"], "The common fibular nerve wraps the fibular neck and supplies the dorsiflexors and dorsal foot skin. The tibial nerve supplies plantarflexors and the sole."],
        ["While a patient stands on the right leg, the left side of the pelvis drops. Which nerve is most likely impaired?", ["Right superior gluteal nerve", "Left superior gluteal nerve", "Right inferior gluteal nerve", "Right femoral nerve"], "In stance on the right, the right gluteus medius must hold the pelvis level. Its nerve is the superior gluteal, so weakness lets the opposite (left) pelvis drop."],
        ["A patient with a tight belt reports burning and numbness over the anterolateral thigh with normal strength and reflexes. Which nerve is most likely involved?", ["Lateral femoral cutaneous nerve", "Femoral nerve", "Obturator nerve", "Genitofemoral nerve"], "This is meralgia paresthetica, compression of a purely sensory nerve near the ASIS. Normal strength and reflexes argue against femoral nerve or L3 root involvement."],
        ["Which deep tendon reflex mainly tests the S1 nerve root?", ["Achilles reflex", "Patellar reflex", "Hamstring reflex", "Hoffmann reflex"], "The Achilles reflex is S1. The patellar reflex is L4 (L3-L4), and Hoffmann tests for an upper motor neuron lesion rather than a root."],
        ["Weakness of great toe extension points most specifically to which myotome?", ["L5", "L4", "S1", "L3"], "Extensor hallucis longus is the classic L5 key muscle. L4 is ankle dorsiflexion and S1 is plantarflexion or eversion."],
        ["Which three muscles insert at the pes anserinus?", ["Sartorius, gracilis, semitendinosus", "Sartorius, gracilis, semimembranosus", "Gracilis, semitendinosus, biceps femoris", "Sartorius, rectus femoris, gracilis"], "The pes anserinus is sartorius, gracilis, and semitendinosus on the anteromedial tibia. Semimembranosus inserts posteromedially and biceps femoris on the fibular head."],
        ["Which hamstring muscle is innervated by the common fibular division of the sciatic nerve?", ["Short head of biceps femoris", "Long head of biceps femoris", "Semitendinosus", "Semimembranosus"], "The short head does not cross the hip and is supplied by the common fibular division. All the other hamstrings come from the tibial division."],
        ["After a retroperitoneal hematoma, a patient has trouble climbing stairs, weak knee extension, a reduced patellar reflex, and numbness of the anterior thigh. Which nerve is most likely injured?", ["Femoral nerve", "Obturator nerve", "Sciatic nerve", "Lateral femoral cutaneous nerve"], "The femoral nerve supplies the quadriceps, carries the patellar reflex arc, and gives anterior thigh sensation. It runs alongside the psoas, where a hematoma can compress it."],
        ["Which nerve innervates the gluteus maximus?", ["Inferior gluteal nerve", "Superior gluteal nerve", "Sciatic nerve", "Pudendal nerve"], "The inferior gluteal nerve (L5-S2) supplies gluteus maximus. The superior gluteal supplies gluteus medius, gluteus minimus, and TFL."],
        ["A runner reports burning pain and tingling on the sole of the foot that worsens with prolonged standing, with tenderness behind the medial malleolus. Which nerve is most likely involved?", ["Tibial nerve (tarsal tunnel)", "Deep fibular nerve", "Sural nerve", "Saphenous nerve"], "The tibial nerve passes behind the medial malleolus under the flexor retinaculum and supplies the sole. The sural and saphenous nerves are sensory to the lateral and medial foot edges."]
      ]
    },
    {
      t: "Head, Neck & Thorax",
      sub: "Cervical muscles, TMJ, cranial nerves, breathing mechanics",
      guide: [
        "<b>Sternocleidomastoid</b> (sternum and clavicle to mastoid; CN XI): one side laterally flexes to the same side and rotates the head to the <i>opposite</i> side; both sides flex the neck.",
        "<b>Scalenes</b>: anterior and middle attach to the 1st rib, posterior to the 2nd. The <b>brachial plexus trunks and subclavian artery</b> pass between anterior and middle scalene; the subclavian vein passes in front of anterior scalene.",
        "<b>Suboccipitals</b> (rectus capitis posterior major/minor, obliquus capitis superior/inferior) are supplied by the suboccipital nerve (dorsal ramus of C1). Deep neck flexors: longus colli and longus capitis.",
        "<b>TMJ</b>: lateral pterygoid opens and protrudes the jaw; masseter, temporalis, and medial pterygoid close it. All muscles of mastication are supplied by <b>CN V3</b> (mandibular branch of trigeminal).",
        "<b>Diaphragm</b>: phrenic nerve <b>C3-C5</b>, main muscle of inspiration (descends when it contracts). Accessory inspiratory muscles: scalenes, SCM, pectoralis minor. Forced expiration: abdominals and internal intercostals.",
        "<b>Rib motion</b>: upper ribs move like a pump handle (increase anteroposterior diameter); lower ribs move like a bucket handle (increase transverse diameter).",
        "<b>Sternal angle</b>: joins manubrium and body, marks the 2nd rib and roughly the T4-T5 level.",
        "<b>Facial nerve (CN VII)</b> supplies muscles of facial expression; a peripheral (LMN) lesion such as Bell palsy weakens the whole half of the face, forehead included."
      ],
      assignment: {
        title: "Breathing mechanics assessment",
        task: "Observe three people breathing quietly and then after climbing stairs. Palpate upper and lower rib motion, note accessory muscle use, and explain what you saw using pump-handle, bucket-handle, and diaphragm mechanics.",
        deliverable: "One-page observation log with a short explanation for each person."
      },
      gen: [],
      qs: [
        ["Which nerve roots supply the diaphragm through the phrenic nerve?", ["C3-C5", "C1-C3", "C5-C7", "T1-T4"], "The phrenic nerve comes from C3, C4, and C5. This is why high cervical injuries threaten independent breathing."],
        ["Why do patients with a complete spinal cord injury at C1-C2 typically need mechanical ventilation?", ["The phrenic nerve segments (C3-C5) are cut off from brain control", "The intercostal nerves arise from C1-C2", "The vagus nerve exits at C1-C2", "The scalenes are the main muscles of quiet breathing"], "A lesion above C3 disconnects the phrenic motor neurons from the brainstem respiratory centers. Without the diaphragm, quiet breathing cannot be maintained."],
        ["Contraction of the right sternocleidomastoid alone produces which head motion?", ["Right lateral flexion with rotation to the left", "Right lateral flexion with rotation to the right", "Left lateral flexion with rotation to the right", "Extension with rotation to the right"], "One SCM flexes the head toward its own side and turns the face to the opposite side. Both together flex the neck."],
        ["A patient's hand tingling on the ulnar side increases when the arms are held overhead, and symptoms reproduce with pressure between the anterior and middle scalenes. Which structures pass through this space?", ["Brachial plexus trunks and subclavian artery", "Subclavian vein and phrenic nerve", "Brachial plexus cords and axillary vein", "Vagus nerve and common carotid artery"], "The interscalene triangle carries the brachial plexus trunks and subclavian artery. The subclavian vein runs in front of anterior scalene, outside the triangle."],
        ["Which muscle of mastication opens the mouth and protrudes the jaw?", ["Lateral pterygoid", "Medial pterygoid", "Masseter", "Temporalis"], "The lateral pterygoid pulls the condyle and disc forward, opening and protruding the mandible. The other three close the jaw."],
        ["The muscles of mastication are innervated by which nerve?", ["Mandibular division of the trigeminal nerve (CN V3)", "Facial nerve (CN VII)", "Maxillary division of the trigeminal nerve (CN V2)", "Hypoglossal nerve (CN XII)"], "CN V3 is the only trigeminal division with motor fibers, and it supplies the muscles of mastication. CN VII supplies the muscles of facial expression."],
        ["Pump-handle motion of the upper ribs mainly increases which chest dimension?", ["Anteroposterior diameter", "Transverse diameter", "Vertical diameter only", "Posterior rib angle"], "Upper ribs elevate the sternum forward like a pump handle, increasing AP depth. Lower ribs swing out like a bucket handle, increasing transverse width."],
        ["A patient with severe COPD sits leaning forward with hands on knees, and the neck muscles visibly tense with each breath. Which muscles are being recruited?", ["Scalenes and sternocleidomastoid as accessory inspiratory muscles", "Internal intercostals as accessory inspiratory muscles", "Rectus abdominis to assist inspiration", "Suboccipitals to lift the first rib"], "The scalenes and SCM lift the upper ribs and sternum when the flattened diaphragm cannot do enough. Abdominals and internal intercostals assist forced expiration, not inspiration."],
        ["The sternal angle is a landmark for which structure?", ["The 2nd rib and roughly the T4-T5 vertebral level", "The 1st rib and the C7 vertebra", "The 4th rib and the T8 vertebra", "The xiphoid process and the T10 vertebra"], "The manubriosternal junction lines up with the 2nd costal cartilage and about T4-T5. Clinicians use it to count ribs."],
        ["A patient wakes with one side of the face drooping, cannot close that eye, and cannot raise that side of the forehead. Which lesion best explains this?", ["Peripheral lesion of the facial nerve (CN VII)", "Cortical stroke on the opposite side", "Trigeminal nerve lesion (CN V)", "Hypoglossal nerve lesion (CN XII)"], "Weakness of the whole half of the face, forehead included, points to a lower motor neuron lesion of CN VII such as Bell palsy. A cortical stroke usually spares the forehead because it gets input from both hemispheres."]
      ]
    },
    {
      t: "Abdomen & Pelvis",
      sub: "Abdominal wall, hip flexors, pelvic floor, visceral referral",
      guide: [
        "<b>Abdominal wall</b>: rectus abdominis (trunk flexion), external oblique (fibers run down and in; rotates trunk to the <i>opposite</i> side), internal oblique (rotates to the <i>same</i> side), transversus abdominis (deepest; compresses the abdomen and raises intra-abdominal pressure). Supplied mainly by T7-T12, plus L1 (iliohypogastric and ilioinguinal) for internal oblique and TrA.",
        "<b>Diastasis recti</b>: separation of the two rectus abdominis bellies along the linea alba, common in late pregnancy and postpartum; seen as midline doming during a curl-up.",
        "<b>Pelvic floor</b>: levator ani (puborectalis, pubococcygeus, iliococcygeus) plus coccygeus. Supplied by S3-S4 branches (nerve to levator ani) with help from the <b>pudendal nerve (S2-S4)</b>, which also supplies the external anal and urethral sphincters.",
        "<b>Puborectalis</b> forms a sling around the anorectal junction, keeping the anorectal angle for fecal continence.",
        "<b>Urinary incontinence</b>: stress (leak with cough, sneeze, jump) from poor urethral support; urge (sudden strong urge, detrusor overactivity); mixed. <b>Pelvic floor muscle training</b> is first-line for stress incontinence.",
        "<b>Iliopsoas</b>: psoas major (T12-L5 vertebrae, anterior rami L1-L3) and iliacus (iliac fossa, femoral nerve) both insert on the <b>lesser trochanter</b>; main hip flexor.",
        "<b>Visceral referral</b>: gallbladder to the right shoulder/scapula, appendix starts periumbilical then moves to the right lower quadrant, kidney to the flank. Visceral pain that does not change with movement needs medical referral."
      ],
      assignment: {
        title: "Visceral referral screening guide",
        task: "Make a body chart showing referral areas for the gallbladder, kidney, appendix, heart, and pancreas. For each, list two screening questions you would ask a patient with musculoskeletal complaints in that area.",
        deliverable: "Annotated body chart with 10 screening questions."
      },
      gen: [],
      qs: [
        ["Which abdominal muscle is the deepest layer of the anterolateral abdominal wall?", ["Transversus abdominis", "Internal oblique", "External oblique", "Rectus abdominis"], "From superficial to deep the layers are external oblique, internal oblique, then transversus abdominis. Rectus abdominis lies in its own sheath at the midline."],
        ["Contraction of the right external oblique rotates the trunk in which direction?", ["To the left", "To the right", "Into pure flexion only", "Into right lateral flexion only"], "The external oblique rotates the trunk to the opposite side, working with the opposite internal oblique. The right internal oblique would rotate to the right."],
        ["Eight weeks postpartum, a client notices a ridge bulging along the midline of her abdomen when she lifts her head from the floor. What is the most likely finding?", ["Diastasis recti abdominis", "Inguinal hernia", "Umbilical hernia", "Rectus sheath hematoma"], "Midline doming between the rectus bellies during a curl-up is the classic sign of diastasis recti. An inguinal hernia appears in the groin, not along the linea alba."],
        ["A 45-year-old woman leaks urine when she coughs, sneezes, or jumps, but has no sudden urges. What is the most appropriate first-line conservative intervention?", ["Pelvic floor muscle training", "Bladder retraining with timed voiding only", "Abdominal crunch progression", "Avoiding all fluid intake after noon"], "Leakage with rises in abdominal pressure is stress urinary incontinence. Pelvic floor muscle training is the first-line conservative treatment."],
        ["The pudendal nerve arises from which spinal levels?", ["S2-S4", "L4-S1", "L1-L2", "S4-Co1"], "The pudendal nerve comes from S2-S4 and supplies the external sphincters and perineum. It is often remembered as S2, 3, 4 keeps the pelvic floor off the floor."],
        ["What is the main role of the puborectalis muscle?", ["Maintaining the anorectal angle for fecal continence", "Flexing the coccyx during sitting", "Elevating the bladder during voiding", "Rotating the sacrum into nutation"], "Puborectalis loops around the anorectal junction and pulls it forward, creating the angle that helps hold stool. It relaxes during defecation to straighten the angle."],
        ["A patient with right mid-back and right shoulder pain says the pain flares after fatty meals and does not change with movement. What is the most appropriate action?", ["Refer to a physician for possible gallbladder disease", "Treat as thoracic facet dysfunction", "Begin rotator cuff strengthening", "Apply heat and reassess next week"], "Gallbladder pain refers to the right shoulder or scapula and is linked to fatty meals. Pain that is not mechanical needs medical screening before treating as musculoskeletal."],
        ["Where do the psoas major and iliacus insert?", ["Lesser trochanter of the femur", "Greater trochanter of the femur", "Anterior inferior iliac spine", "Linea aspera"], "Both join as iliopsoas on the lesser trochanter. The greater trochanter receives the gluteus medius, gluteus minimus, and deep rotators."],
        ["A patient reports a sudden, strong need to urinate and often leaks before reaching the toilet, but does not leak with coughing. Which type of incontinence is most likely?", ["Urge incontinence", "Stress incontinence", "Overflow incontinence", "Functional incontinence"], "A sudden, strong urge with leakage points to detrusor overactivity (urge incontinence). Stress incontinence is tied to coughing or exertion."],
        ["The iliacus muscle is innervated by which nerve?", ["Femoral nerve", "Obturator nerve", "Anterior rami of L1-L3 directly", "Superior gluteal nerve"], "Iliacus is supplied by the femoral nerve. Psoas major gets branches directly from the anterior rami of L1-L3."]
      ]
    }
  ]
});
