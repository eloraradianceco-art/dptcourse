(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "kinesiology-biomechanics",
  track: "found",
  order: 3,
  code: "DPT 620",
  title: "Kinesiology & Biomechanics",
  credits: 4,
  desc: "How joints move and how muscles produce and control that movement, from joint surface mechanics to whole-body gait. A PT uses it to choose mobilization directions, explain movement faults, and analyze walking.",
  objectives: [
    "Describe joint motion using planes, axes, arthrokinematics, and the convex-concave rule",
    "Apply length-tension, force-velocity, and insufficiency concepts to exercise and testing",
    "Explain normal upper and lower quarter kinematics including scapulohumeral rhythm and screw-home",
    "Identify the phases of gait, the main muscle activity in each, and common gait deviations",
    "Select joint mobilization directions and positions based on arthrokinematic principles"
  ],
  units: [
    {
      t: "Arthrokinematics",
      sub: "Planes and axes, convex-concave rule, close-packed positions, end-feels",
      guide: [
        "<b>Planes and axes</b>: sagittal plane motion (flexion/extension) occurs around a medial-lateral axis; frontal plane (abduction/adduction) around an anterior-posterior axis; transverse plane (rotation) around a vertical axis.",
        "<b>Osteokinematics</b> = bone motion you see. <b>Arthrokinematics</b> = joint surface motion: roll, glide (slide), and spin.",
        "<b>Convex-concave rule</b>: if a <b>convex</b> surface moves on a fixed concave one, roll and glide go in <b>opposite</b> directions. If a <b>concave</b> surface moves on a fixed convex one, roll and glide go in the <b>same</b> direction.",
        "<b>Examples</b>: glenohumeral abduction (convex head moves) = humeral head glides inferiorly. Open-chain knee extension (concave tibia moves) = tibia glides anteriorly.",
        "<b>Close-packed position</b>: max congruency, ligaments taut, least joint play. GH = abduction with ER; knee = full extension with ER of tibia; hip = extension, IR, abduction; ankle (talocrural) = full dorsiflexion; elbow (humeroulnar) = full extension.",
        "<b>Loose-packed (resting) position</b>: least congruency, most joint play, often used for early mobilization. GH = about 55 degrees abduction, 30 degrees horizontal adduction.",
        "<b>Normal end-feels</b>: soft (soft tissue approximation, e.g., elbow flexion), firm (capsular or ligament stretch, e.g., shoulder ER), hard (bone on bone, e.g., elbow extension).",
        "<b>Abnormal end-feels</b>: empty (pain stops motion before a real end, e.g., acute bursitis or serious pathology), springy block (internal derangement such as a meniscus tear), muscle spasm, or a hard end-feel earlier than normal."
      ],
      assignment: {
        title: "Mobilization direction table",
        task: "For the GH, humeroulnar, radiocarpal, tibiofemoral, and talocrural joints, list which surface is convex, which is concave, and the glide direction you would use to improve each main motion. Practice the end-feel at each joint on a partner and record it.",
        deliverable: "One-page table plus an end-feel log for five joints."
      },
      gen: [],
      qs: [
        ["A patient lacks shoulder abduction because of a tight inferior capsule. Which glide of the humeral head would best improve abduction?", ["Inferior glide", "Superior glide", "Anterior glide", "Lateral distraction only at 90 degrees"], "The convex humeral head moves on the concave glenoid, so roll is superior and glide is inferior during abduction. An inferior glide restores this motion."],
        ["During open-chain knee extension, in what direction does the tibia glide on the femur?", ["Anterior", "Posterior", "Medial", "Inferior"], "The concave tibia moves on the convex femur, so roll and glide go the same direction. Extension rolls the tibia anteriorly, so it also glides anteriorly."],
        ["Which statement correctly states the convex-concave rule?", ["A convex surface moving on a concave surface rolls and glides in opposite directions", "A convex surface moving on a concave surface rolls and glides in the same direction", "A concave surface moving on a convex surface rolls and glides in opposite directions", "Roll and glide always occur in the same direction"], "When convex moves on concave, roll and glide are opposite. When concave moves on convex, they go the same way."],
        ["What is the close-packed position of the knee?", ["Full extension with lateral rotation of the tibia", "90 degrees of flexion", "About 25 degrees of flexion", "Full flexion with medial rotation of the tibia"], "Full extension with tibial external rotation (after screw-home) is the knee's most congruent, locked position. About 25 degrees of flexion is closer to its resting position."],
        ["What is the close-packed position of the talocrural joint?", ["Maximal dorsiflexion", "Maximal plantarflexion", "Neutral 0 degrees", "10 degrees plantarflexion with inversion"], "In full dorsiflexion the wider front of the talus wedges into the mortise, making the joint most stable. That is why ankle sprains are more common in plantarflexion."],
        ["Passive elbow flexion stops when the forearm muscles press against the biceps. Which end-feel is this?", ["Soft", "Firm", "Hard", "Empty"], "Soft tissue approximation gives a soft end-feel. A hard end-feel would be bone on bone, as in elbow extension."],
        ["A patient with suspected acute subacromial bursitis stops you during passive shoulder abduction because of severe pain, and you feel no tissue resistance. Which end-feel is this?", ["Empty", "Springy block", "Firm", "Hard"], "An empty end-feel means pain stops motion before any mechanical limit is felt. It can indicate acute inflammation or serious pathology."],
        ["A patient with a knee locking episode has a rebound feeling at the end of knee extension. Which end-feel is this and what does it suggest?", ["Springy block suggesting internal derangement such as a meniscus tear", "Firm end-feel suggesting normal capsular stretch", "Empty end-feel suggesting a fracture", "Soft end-feel suggesting muscle bulk"], "A springy block is a rebound at end range from something inside the joint, such as a torn meniscus. It is abnormal because extension normally ends with a firm feel."],
        ["Shoulder abduction occurs in which plane and around which axis?", ["Frontal plane, anterior-posterior axis", "Sagittal plane, medial-lateral axis", "Transverse plane, vertical axis", "Frontal plane, medial-lateral axis"], "Abduction is a frontal plane motion around an anterior-posterior axis. Sagittal plane motions such as flexion use a medial-lateral axis."],
        ["Why might you choose the loose-packed position for the first mobilization session of a stiff, irritable joint?", ["It has the most joint play and least stress on the capsule and ligaments", "It has the most congruency and joint stability", "It puts the ligaments on maximal stretch", "It is the only position where gliding occurs"], "The resting position has the most laxity, so gentle glides can be done comfortably. Close-packed positions lock the joint and are poor for early mobilization."]
      ]
    },
    {
      t: "Muscle Mechanics",
      sub: "Length-tension, force-velocity, contraction types, insufficiency",
      guide: [
        "<b>Length-tension</b>: a muscle produces the most active force near its mid (resting) length, where actin and myosin overlap best. Too short or too long reduces active force; passive tension rises as the muscle is stretched.",
        "<b>Force-velocity</b>: in concentric work, force decreases as speed increases. <b>Eccentric</b> contractions produce the most force, more than isometric or concentric.",
        "<b>Contraction types</b>: concentric (shortening), eccentric (lengthening under load), isometric (no length change). Lowering into a squat uses the quadriceps eccentrically.",
        "<b>Active insufficiency</b>: a multi-joint muscle cannot shorten enough across all joints at once (e.g., weak grip with full wrist flexion because finger flexors are too short).",
        "<b>Passive insufficiency</b>: a multi-joint muscle cannot stretch enough across all joints at once (e.g., limited knee extension with the hip flexed because of the hamstrings). <b>Tenodesis</b> uses this: wrist extension passively flexes the fingers.",
        "<b>Levers</b>: 1st class (axis in middle, e.g., neck extensors on the head), 2nd class (load in middle, e.g., heel raise), 3rd class (effort in middle, e.g., biceps at elbow, most common in the body). 3rd class levers favor speed and range over force.",
        "<b>Torque</b> = force x moment arm (perpendicular distance from axis). Moving a weight farther from the joint increases the torque the muscle must create.",
        "<b>Muscle roles</b>: agonist (prime mover), antagonist, synergist, stabilizer. A <b>force couple</b> is two forces in different directions making rotation, such as upper trapezius, lower trapezius, and serratus anterior rotating the scapula upward."
      ],
      assignment: {
        title: "Exercise mechanics analysis",
        task: "Pick three exercises you teach clients (for example a squat, a biceps curl, and a heel raise). For each, name the contraction type in each phase, the lever class, where the moment arm is longest, and one way to make it easier or harder by changing torque.",
        deliverable: "One-page analysis table with a sketch of each lever."
      },
      gen: [],
      qs: [
        ["Which type of contraction can generate the greatest force?", ["Eccentric", "Concentric", "Isometric", "Isokinetic at high speed"], "Eccentric contractions produce more force than isometric or concentric contractions. Concentric force falls as speed rises."],
        ["When lowering slowly from standing into a chair, what is the quadriceps doing?", ["Contracting eccentrically", "Contracting concentrically", "Contracting isometrically", "Relaxing completely"], "The quadriceps lengthens under load to control knee flexion, which is eccentric work. Concentric quadriceps work happens when standing back up."],
        ["A patient cannot make a tight fist when the wrist is fully flexed. What explains this?", ["Active insufficiency of the finger flexors", "Passive insufficiency of the finger flexors", "Active insufficiency of the wrist extensors", "Weakness of the intrinsic hand muscles"], "With the wrist flexed, the multi-joint finger flexors are already short and cannot shorten enough to close the fingers fully. That is active insufficiency."],
        ["A client cannot fully straighten the knee during a seated forward reach with the hips flexed, yet has full knee extension in supine. What is the most likely explanation?", ["Passive insufficiency of the hamstrings", "Active insufficiency of the quadriceps", "A knee joint capsule restriction", "Weak hip flexors"], "The hamstrings cross both hip and knee and cannot stretch over both at once. Full knee extension with the hip straight rules out a joint restriction."],
        ["A patient with C6 tetraplegia picks up a cup by actively extending the wrist, which causes the fingers to close. What is this called?", ["Tenodesis grip", "Active insufficiency grip", "Reciprocal inhibition", "Autogenic inhibition"], "Wrist extension stretches the finger flexor tendons, passively flexing the fingers. Tenodesis uses passive insufficiency to grasp without active finger flexors."],
        ["During concentric contraction, what happens to force as the speed of shortening increases?", ["Force decreases", "Force increases", "Force stays the same", "Force first doubles then plateaus"], "The force-velocity relationship shows concentric force drops as shortening speed rises. Eccentric force can rise with speed up to a point."],
        ["The biceps flexing the elbow is an example of which lever class?", ["Third class", "First class", "Second class", "Fourth class"], "The biceps inserts between the elbow axis and the weight in the hand, so effort is in the middle. Third-class levers favor speed and range of motion."],
        ["A client doing a side-lying hip abduction finds it too hard. Which change most directly reduces the torque the hip abductors must produce?", ["Move the ankle weight from the ankle to just above the knee", "Add a second ankle weight", "Straighten the knee fully", "Slow the movement to 5 seconds each way"], "Moving the load closer to the hip shortens the moment arm and lowers torque. Straightening the knee or adding weight would raise demand."],
        ["At what muscle length is maximal active tension usually produced?", ["Near resting (mid) length", "At the fully shortened length", "At the fully lengthened length", "At any length equally"], "Actin and myosin overlap best near resting length, allowing the most cross-bridges. Very short or very long lengths reduce active force."],
        ["Upper trapezius, lower trapezius, and serratus anterior working together to rotate the scapula upward is an example of what?", ["A force couple", "Active insufficiency", "A second-class lever", "Reciprocal inhibition"], "A force couple is two or more forces acting in different directions that create rotation. These muscles pull in different directions to rotate the scapula upward."]
      ]
    },
    {
      t: "Upper Quarter Kinematics",
      sub: "Scapulohumeral rhythm, shoulder complex, elbow, wrist and hand",
      guide: [
        "<b>Scapulohumeral rhythm</b>: about <span class='formula'>2:1</span> GH to scapulothoracic motion. Of 180 degrees of elevation, about 120 comes from the GH joint and 60 from scapular upward rotation.",
        "<b>Upward rotators</b>: upper and lower trapezius plus serratus anterior. Serratus also protracts and holds the scapula on the thorax.",
        "<b>Humeral ER during abduction</b>: the humerus must externally rotate to clear the greater tubercle under the acromion during full abduction in the frontal plane.",
        "<b>Rotator cuff</b> compresses and centers the humeral head, balancing the upward pull of the deltoid. A weak cuff lets the head ride up, contributing to impingement.",
        "<b>Elbow</b>: humeroulnar and humeroradial joints flex and extend; proximal and distal radioulnar joints pronate and supinate. Normal <b>carrying angle</b> (cubitus valgus) is about 5-15 degrees.",
        "<b>Biceps</b> is a strong supinator, especially with the elbow flexed near 90 degrees; <b>brachialis</b> flexes the elbow in any forearm position.",
        "<b>Wrist</b>: radiocarpal joint (convex carpals on concave radius) for flexion/extension and radial/ulnar deviation. <b>Functional grip</b> works best in slight wrist extension (about 20-30 degrees) with slight ulnar deviation.",
        "<b>Thumb CMC</b> is a saddle joint, allowing opposition, which is essential for grasp."
      ],
      assignment: {
        title: "Shoulder elevation observation",
        task: "Watch three clients raise their arms overhead from behind, noting when the scapula starts to rotate, any early shrugging, and any winging on the way down. Describe what you see using scapulohumeral rhythm and force couple language, and suggest one exercise for each fault.",
        deliverable: "Observation sheet for three clients with exercise suggestions."
      },
      gen: [],
      qs: [
        ["During 180 degrees of shoulder elevation, about how much motion comes from the scapulothoracic joint?", ["60 degrees", "120 degrees", "90 degrees", "30 degrees"], "With a 2:1 scapulohumeral rhythm, about 120 degrees comes from the GH joint and about 60 from scapular upward rotation."],
        ["Which muscles form the force couple that rotates the scapula upward?", ["Upper trapezius, lower trapezius, and serratus anterior", "Rhomboids, levator scapulae, and pectoralis minor", "Latissimus dorsi, teres major, and rhomboids", "Middle trapezius, rhomboids, and infraspinatus"], "Upper and lower trapezius and serratus anterior pull the scapula into upward rotation. Rhomboids, levator scapulae, and pectoralis minor rotate it downward."],
        ["Why must the humerus externally rotate during full abduction in the frontal plane?", ["To clear the greater tubercle from under the acromion", "To tighten the inferior capsule", "To lengthen the biceps tendon", "To lock the elbow into extension"], "External rotation turns the greater tubercle back so it passes under the acromion instead of hitting it. Without it, abduction is limited and can pinch the subacromial tissues."],
        ["A swimmer has pain lifting the arm, and you see the shoulder shrug up early with little scapular rotation. Which muscle weakness would most likely contribute?", ["Serratus anterior and lower trapezius", "Upper trapezius and levator scapulae", "Pectoralis major and latissimus dorsi", "Rhomboids and biceps"], "Weak serratus anterior and lower trapezius reduce upward rotation and posterior tilt, so the upper trapezius over-recruits. That pattern narrows the subacromial space."],
        ["What role does the rotator cuff play during deltoid-driven arm elevation?", ["Compresses and centers the humeral head in the glenoid", "Lifts the humeral head superiorly", "Rotates the scapula upward", "Locks the elbow during elevation"], "The deltoid pulls the humeral head upward, while the cuff pulls it into the glenoid and down. This balance keeps the head centered."],
        ["A patient needs to strengthen elbow flexion without the biceps contributing much. In which position is the brachialis the main contributor?", ["Elbow flexion with the forearm pronated", "Elbow flexion with the forearm supinated", "Elbow extension with the forearm neutral", "Shoulder flexion with the elbow straight"], "Pronation reduces the biceps' advantage since it is also a supinator, while brachialis flexes the elbow in any forearm position. That makes pronated flexion a good brachialis bias."],
        ["Which muscle is a strong supinator, especially when the elbow is flexed to about 90 degrees?", ["Biceps brachii", "Brachioradialis", "Pronator quadratus", "Triceps brachii"], "The biceps has its best line of pull for supination near 90 degrees of elbow flexion. Brachioradialis brings the forearm toward neutral and does not supinate strongly from neutral."],
        ["A normal carrying angle at the elbow is best described as what?", ["Slight valgus of about 5-15 degrees", "Slight varus of about 5-15 degrees", "Straight alignment of 0 degrees", "Valgus of about 30-40 degrees"], "The forearm angles slightly away from the body in extension, a normal valgus of about 5-15 degrees. A larger angle is excessive cubitus valgus."],
        ["Which wrist position gives the strongest grip?", ["Slight wrist extension with slight ulnar deviation", "Full wrist flexion", "Full wrist extension with radial deviation", "Neutral wrist with full radial deviation"], "Slight wrist extension keeps the finger flexors at a good length for force. Full wrist flexion causes active insufficiency of the finger flexors."],
        ["Which joint allows thumb opposition?", ["The saddle-shaped first carpometacarpal joint", "The hinge-shaped thumb interphalangeal joint", "The ball-and-socket radiocarpal joint", "The condyloid first metacarpophalangeal joint only"], "The saddle shape of the thumb CMC joint allows flexion, abduction, and rotation needed for opposition. The IP joint is a hinge that only flexes and extends."]
      ]
    },
    {
      t: "Lower Quarter Kinematics",
      sub: "Hip, knee, ankle, screw-home mechanism, Q-angle",
      guide: [
        "<b>Hip</b>: ball and socket; convex femoral head on concave acetabulum. Normal <b>angle of inclination</b> about 125 degrees (coxa vara is smaller, coxa valga larger). Normal adult <b>anteversion</b> about 15 degrees; excessive anteversion often shows as in-toeing.",
        "<b>Screw-home mechanism</b>: in the last degrees of open-chain knee extension the tibia <b>externally rotates</b> on the femur (in closed chain, the femur internally rotates on the tibia) to lock the knee. The <b>popliteus</b> unlocks it by rotating the other way.",
        "<b>Q-angle</b>: line from ASIS to the patella center and from patella center to tibial tuberosity. Normal is about 13 degrees in men and 18 degrees in women; a larger angle increases lateral pull on the patella.",
        "<b>Patellofemoral joint</b>: the patella increases the quadriceps moment arm. Compression rises with knee flexion in closed chain (deep squat).",
        "<b>Talocrural</b>: dorsiflexion and plantarflexion; the convex talus glides <b>posteriorly</b> during dorsiflexion. <b>Subtalar</b>: inversion/eversion; pronation and supination combine motion at the subtalar and other foot joints.",
        "<b>Pronation in weight bearing</b> unlocks the midfoot for shock absorption; <b>supination</b> makes the foot a rigid lever for push-off. The <b>windlass mechanism</b> (toe extension tightens the plantar fascia) raises the arch.",
        "<b>Hip abductors</b> stabilize the pelvis in single-leg stance. Weak hip abductors and external rotators are linked with knee valgus in landing and squatting."
      ],
      assignment: {
        title: "Single-leg squat analysis",
        task: "Film a single-leg squat in two clients from the front. Describe pelvis drop, knee position relative to the foot, and foot pronation, and connect each fault to the hip, knee, and foot mechanics in this unit. List two exercises to address what you see.",
        deliverable: "Annotated screenshots plus a 300-word analysis."
      },
      gen: [],
      qs: [
        ["During the last degrees of open-chain knee extension, how does the tibia rotate on the femur?", ["External rotation", "Internal rotation", "No rotation occurs", "Abduction"], "In the screw-home mechanism the tibia externally rotates to lock the knee in extension. In closed chain, the femur internally rotates on the fixed tibia instead."],
        ["Which muscle unlocks the knee from full extension?", ["Popliteus", "Gastrocnemius", "Biceps femoris long head", "Sartorius"], "The popliteus rotates the tibia internally (or the femur externally in closed chain) to unlock the knee. This lets flexion start."],
        ["What is a normal adult Q-angle for women?", ["About 18 degrees", "About 5 degrees", "About 30 degrees", "About 45 degrees"], "Normal Q-angle is about 13 degrees in men and 18 degrees in women. Values much higher increase lateral pull on the patella."],
        ["A teenage athlete with anterior knee pain has a large Q-angle. Which patellar tendency does this increase?", ["Lateral tracking of the patella", "Medial tracking of the patella", "Superior dislocation of the patella", "Reduced compression in deep flexion"], "A larger Q-angle creates a stronger lateral pull of the quadriceps on the patella. This can increase lateral tracking and patellofemoral stress."],
        ["A patient lacks ankle dorsiflexion due to joint stiffness. Which talus glide would best improve dorsiflexion?", ["Posterior glide of the talus", "Anterior glide of the talus", "Medial glide of the talus", "Superior glide of the talus"], "The convex talus moves on the concave mortise, so roll is anterior and glide is posterior during dorsiflexion. A posterior talar glide restores it."],
        ["What is the normal adult angle of inclination of the femoral neck?", ["About 125 degrees", "About 90 degrees", "About 150 degrees", "About 105 degrees"], "The femoral neck meets the shaft at roughly 125 degrees in adults. Smaller is coxa vara, and larger is coxa valga."],
        ["A child walks with toes pointing inward and sits easily in a W position, with much more hip internal than external rotation. What is the most likely structural cause?", ["Excessive femoral anteversion", "Femoral retroversion", "Coxa vara", "Excessive tibial external torsion"], "Excessive anteversion rotates the femoral head forward, so the leg turns in to center it, causing in-toeing and more hip IR. Retroversion would cause out-toeing."],
        ["How does the windlass mechanism help in late stance?", ["Toe extension tightens the plantar fascia and raises the arch to make the foot rigid", "Toe flexion loosens the plantar fascia to absorb shock", "Ankle dorsiflexion lowers the arch to unlock the midfoot", "Subtalar eversion locks the calcaneus in neutral"], "As the big toe extends, the plantar fascia winds around the metatarsal head and pulls the arch up. This makes the foot a rigid lever for push-off."],
        ["During loading response in walking, what is the main role of subtalar pronation?", ["Unlocking the midfoot for shock absorption", "Making the foot a rigid lever for push-off", "Locking the knee in extension", "Lifting the arch to clear the toes"], "Pronation unlocks the midtarsal joints so the foot can adapt to the ground and absorb shock. Supination is what creates a rigid lever later in stance."],
        ["A runner's knee collapses inward when landing from a jump. Weakness of which muscle group is most commonly linked to this pattern?", ["Hip abductors and external rotators", "Hip flexors", "Ankle plantarflexors", "Knee flexors"], "Weak gluteus medius and hip external rotators allow the femur to adduct and internally rotate, driving the knee inward. That is why hip strengthening is a common part of treatment."]
      ]
    },
    {
      t: "Gait Analysis",
      sub: "Gait cycle phases, muscle activity, common deviations",
      guide: [
        "<b>Gait cycle</b>: stance about 60%, swing about 40% at normal walking speed. Double support happens twice per cycle; running has a flight phase instead.",
        "<b>Rancho Los Amigos phases</b>: stance = initial contact, loading response, midstance, terminal stance, preswing. Swing = initial swing, midswing, terminal swing.",
        "<b>Initial contact to loading response</b>: ankle dorsiflexors work <b>eccentrically</b> to lower the foot; quadriceps work eccentrically to control knee flexion; hip extensors stabilize.",
        "<b>Midstance to terminal stance</b>: plantarflexors work eccentrically to control the tibia moving forward, then the heel rises. <b>Gluteus medius</b> holds the pelvis level in single-limb support.",
        "<b>Swing</b>: hip flexors pull the limb forward; dorsiflexors work concentrically to clear the toes; hamstrings decelerate the leg in terminal swing.",
        "<b>Trendelenburg gait</b>: weak gluteus medius lets the opposite pelvis drop in stance. <b>Compensated</b> Trendelenburg: trunk leans toward the weak side.",
        "<b>Other deviations</b>: foot slap or steppage gait (weak dorsiflexors); <b>gluteus maximus gait</b> (trunk lurches backward at initial contact); knee buckling or hyperextension (weak quadriceps); circumduction or hip hiking (poor swing clearance); antalgic gait (shortened stance on the painful side).",
        "<b>Assistive devices</b>: a cane is held in the hand <b>opposite</b> the affected leg and moves with it, reducing load on the weak hip abductors."
      ],
      assignment: {
        title: "Gait observation report",
        task: "Watch two people walk (on video is fine) from the side and from behind. For each phase, record what the hip, knee, and ankle are doing, note any deviations, and name the most likely muscle or joint cause for each.",
        deliverable: "Gait observation form for two people with a 200-word summary."
      },
      gen: [],
      qs: [
        ["What percentage of the gait cycle is stance phase at normal walking speed?", ["About 60%", "About 40%", "About 50%", "About 80%"], "Stance takes about 60% of the cycle and swing about 40%. As walking speed increases, stance time shrinks."],
        ["During loading response, what is the main action of the ankle dorsiflexors?", ["Eccentric control to lower the foot to the ground", "Concentric pull to lift the toes", "Isometric hold to lock the ankle", "Push-off to start the swing"], "Right after heel strike, the dorsiflexors lengthen under load to lower the forefoot smoothly. If they are weak, the foot slaps down."],
        ["While a patient stands on the left leg during walking, the right pelvis drops and the patient leans the trunk to the left. Which muscle is weak?", ["Left gluteus medius", "Right gluteus medius", "Left gluteus maximus", "Right quadratus lumborum"], "The stance-side gluteus medius keeps the pelvis level. Leaning toward the weak side is a compensated Trendelenburg that reduces the demand on the weak muscle."],
        ["A patient with an L5 radiculopathy lifts the knee very high during swing and the foot slaps down at initial contact. What is the most likely weakness?", ["Ankle dorsiflexors", "Ankle plantarflexors", "Hip abductors", "Knee extensors"], "Weak dorsiflexors cause foot drop, so the patient lifts the knee higher (steppage) to clear the toes. The foot then slaps because it cannot be lowered with control."],
        ["A patient's trunk lurches backward right after heel strike on the right side. Which muscle is most likely weak?", ["Right gluteus maximus", "Right gluteus medius", "Right iliopsoas", "Right tibialis anterior"], "Leaning back moves the body weight behind the hip, reducing the need for hip extensors. This is a gluteus maximus gait."],
        ["Which muscle group works eccentrically during midstance to control forward movement of the tibia over the foot?", ["Ankle plantarflexors", "Ankle dorsiflexors", "Hip flexors", "Knee flexors"], "The soleus and gastrocnemius lengthen under load to slow the tibia moving forward over the fixed foot. This keeps the knee stable without heavy quadriceps work."],
        ["A patient has right hip osteoarthritis and weak right hip abductors. In which hand should the cane be held?", ["Left hand", "Right hand", "Either hand equally", "Both hands with a walker instead"], "Holding the cane opposite the affected side reduces the work of the weak hip abductors and joint load. It moves forward with the right leg."],
        ["What happens to the hamstrings during terminal swing?", ["They contract eccentrically to slow knee extension and hip flexion", "They contract concentrically to flex the knee for toe clearance", "They are silent as the limb swings freely", "They contract to plantarflex the ankle"], "In terminal swing the hamstrings decelerate the forward-moving leg before heel strike. This is also why hamstring strains often happen in late swing during sprinting."],
        ["A patient with a painful knee spends less time standing on that leg and quickly shifts to the other. What is this gait called?", ["Antalgic gait", "Trendelenburg gait", "Steppage gait", "Ataxic gait"], "Antalgic gait shortens stance on the painful limb to avoid load. Trendelenburg relates to hip abductor weakness, and steppage relates to foot drop."],
        ["A patient after stroke swings the affected leg out to the side in a semicircle during swing phase. What is this called and what usually causes it?", ["Circumduction due to poor knee flexion or ankle dorsiflexion for foot clearance", "Antalgic gait due to joint pain", "Trendelenburg gait due to weak hip abductors", "Scissoring gait due to strong hip abductors"], "When the limb is functionally too long because the knee will not bend or the ankle will not dorsiflex, the patient swings it around to clear the floor. Scissoring involves hip adductor overactivity, not abductors."]
      ]
    }
  ]
});
