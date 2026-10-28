(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "anatomy-physiology-2",
  track: "prereq",
  order: 2,
  code: "PRE 202",
  title: "Anatomy & Physiology II",
  credits: 4,
  desc: "The visceral systems: endocrine, cardiovascular, respiratory, renal, and digestive. PTs monitor vitals, prescribe exercise to patients with cardiopulmonary and metabolic disease, and must recognize when a symptom is not musculoskeletal.",
  objectives: [
    "Describe hormone signaling and the endocrine control of blood glucose, metabolism, and stress",
    "Trace blood flow through the heart and explain the cardiac cycle, cardiac output, and blood pressure regulation",
    "Explain ventilation mechanics, gas exchange, and the exercise ventilatory response",
    "Describe how the kidneys regulate fluid, electrolytes, and acid-base balance",
    "Summarize digestion, absorption, and how the body stores and uses energy substrates"
  ],
  units: [
    {
      t: "Endocrine System",
      sub: "Hormone types, feedback loops, pancreas, thyroid, adrenals, stress response",
      guide: [
        "<b>Hormone classes</b>: steroid hormones (lipid soluble, from cholesterol; bind intracellular receptors, change gene expression) vs peptide/amine hormones (water soluble; bind membrane receptors, use second messengers like cAMP).",
        "<b>Hypothalamus-pituitary axis</b>: hypothalamic releasing hormones &rarr; anterior pituitary (GH, TSH, ACTH, FSH, LH, prolactin). Posterior pituitary releases ADH and oxytocin made in the hypothalamus.",
        "<b>Negative feedback</b> keeps most hormones in range: e.g., high thyroid hormone suppresses TRH and TSH.",
        "<b>Pancreas</b>: insulin (beta cells) lowers blood glucose by promoting uptake into muscle and fat and glycogen storage; glucagon (alpha cells) raises glucose via glycogenolysis and gluconeogenesis.",
        "<b>Exercise and glucose</b>: contracting muscle takes up glucose through an insulin-independent pathway, so exercise lowers blood glucose. Hypoglycemia risk in insulin users during and after exercise.",
        "<b>Thyroid</b>: T3/T4 set basal metabolic rate. Hypothyroid = fatigue, cold intolerance, weight gain; hyperthyroid = heat intolerance, tachycardia, weight loss.",
        "<b>Adrenal gland</b>: cortex makes cortisol (glucocorticoid), aldosterone (mineralocorticoid), and androgens; medulla makes epinephrine and norepinephrine.",
        "<b>PT link</b>: long-term corticosteroid use causes bone loss, muscle wasting, and fragile skin, so patients on chronic steroids need careful loading and skin care."
      ],
      assignment: {
        title: "Diabetic client exercise plan",
        task: "Write a pre-session safety protocol for a client with type 1 diabetes. Include glucose checks before and after exercise, signs of hypoglycemia, what to keep on hand, and why risk extends for hours after the session.",
        deliverable: "One-page protocol with a hypoglycemia response box."
      },
      gen: [],
      qs: [
        ["Which hormone lowers blood glucose?", ["Insulin", "Glucagon", "Cortisol", "Epinephrine"], "Insulin promotes glucose uptake and storage. Glucagon, cortisol, and epinephrine all raise blood glucose."],
        ["Steroid hormones such as cortisol act mainly by:", ["Entering the cell and binding intracellular receptors that alter gene transcription", "Binding membrane receptors and triggering cAMP second messengers", "Opening ligand-gated ion channels on the cell membrane", "Being stored in vesicles and released by exocytosis on demand"], "Steroids are lipid soluble, cross the membrane, and change gene expression, so their effects are slower and longer lasting. Peptide hormones use membrane receptors and second messengers."],
        ["A client with type 1 diabetes becomes shaky, sweaty, and confused mid-workout. What is the best immediate action?", ["Stop exercise and give fast-acting carbohydrate, then recheck glucose", "Continue exercise at lower intensity to use up excess glucose", "Have the client inject additional insulin", "Have the client lie down and wait for symptoms to pass"], "These are classic hypoglycemia signs. Treat with about 15 g of fast-acting carbohydrate and recheck; more insulin or continued exercise would drop glucose further."],
        ["Why can exercise lower blood glucose even in a person with insulin resistance?", ["Contracting muscle takes up glucose through an insulin-independent pathway", "Exercise causes the pancreas to stop releasing glucagon permanently", "Exercise converts glucose directly into fat in the liver", "Exercise increases cortisol, which lowers glucose"], "Muscle contraction moves GLUT4 transporters to the membrane without needing insulin. This is a major reason exercise helps manage type 2 diabetes."],
        ["A client reports fatigue, cold intolerance, weight gain, and dry skin. Which condition do these suggest?", ["Hypothyroidism", "Hyperthyroidism", "Addison disease", "Hyperparathyroidism"], "Low thyroid hormone lowers metabolic rate, producing cold intolerance and weight gain. Hyperthyroidism causes the opposite: heat intolerance, weight loss, tachycardia."],
        ["Which hormone is released from the posterior pituitary and increases water reabsorption by the kidneys?", ["Antidiuretic hormone (ADH)", "Aldosterone", "Growth hormone", "Thyroid-stimulating hormone"], "ADH (vasopressin) is made in the hypothalamus, released by the posterior pituitary, and inserts water channels in the collecting ducts. Aldosterone is from the adrenal cortex and acts on sodium."],
        ["A patient has taken oral prednisone for 2 years for an autoimmune condition. Which concern is most relevant to exercise planning?", ["Reduced bone density and muscle wasting", "Increased bone density and joint stiffness", "Excessive weight loss and heat intolerance", "Low blood glucose during every session"], "Chronic glucocorticoids increase bone resorption and protein breakdown, raising fracture risk and causing myopathy. Hyperglycemia, not hypoglycemia, is the typical glucose effect."],
        ["Which gland releases epinephrine during the fight-or-flight response?", ["Adrenal medulla", "Adrenal cortex", "Anterior pituitary", "Thyroid gland"], "The adrenal medulla is modified sympathetic tissue that releases epinephrine and norepinephrine. The cortex releases steroid hormones like cortisol and aldosterone."],
        ["High levels of thyroid hormone in the blood suppress TSH release. This is an example of:", ["Negative feedback", "Positive feedback", "Receptor upregulation", "Permissive hormone action"], "The end-product (thyroid hormone) inhibits the upstream signal (TRH and TSH), keeping levels stable. That is negative feedback."],
        ["Between meals, which hormone stimulates the liver to break down glycogen and release glucose?", ["Glucagon", "Insulin", "Calcitonin", "Oxytocin"], "Glucagon from pancreatic alpha cells drives glycogenolysis and gluconeogenesis to maintain blood glucose between meals."]
      ]
    },
    {
      t: "Cardiovascular System",
      sub: "Heart anatomy, conduction, cardiac cycle, blood, vessels, blood pressure",
      guide: [
        "<b>Blood flow</b>: body &rarr; vena cavae &rarr; right atrium &rarr; tricuspid &rarr; right ventricle &rarr; pulmonary valve &rarr; pulmonary arteries &rarr; lungs &rarr; pulmonary veins &rarr; left atrium &rarr; mitral &rarr; left ventricle &rarr; aortic valve &rarr; aorta.",
        "<b>Conduction</b>: SA node (pacemaker) &rarr; atria &rarr; AV node (delay) &rarr; bundle of His &rarr; bundle branches &rarr; Purkinje fibers. ECG: P wave = atrial depolarization, QRS = ventricular depolarization, T wave = ventricular repolarization.",
        "<b>Cardiac cycle</b>: systole (ventricular contraction, ejection) and diastole (relaxation, filling). Coronary arteries fill mainly during diastole.",
        "<b>Key formulas</b>: <span class='formula'>CO = HR &times; SV</span>; <span class='formula'>MAP &asymp; DBP + 1/3(SBP &minus; DBP)</span>; <span class='formula'>BP = CO &times; TPR</span>.",
        "<b>Frank-Starling law</b>: more venous return stretches the ventricle and increases stroke volume.",
        "<b>Exercise response</b>: HR, SV, CO, and systolic BP rise with intensity; diastolic BP stays roughly the same or falls slightly. A drop in SBP with increasing workload is abnormal and a reason to stop.",
        "<b>Blood</b>: plasma (~55%) and formed elements (~45%): RBCs (oxygen on hemoglobin), WBCs (immunity), platelets (clotting). Hematocrit is the % RBC.",
        "<b>Vessels</b>: arteries (thick, elastic, high pressure), arterioles (main site of resistance), capillaries (exchange), veins (low pressure, valves; skeletal muscle pump aids return)."
      ],
      assignment: {
        title: "Vital signs response log",
        task: "Measure resting HR and BP on yourself or a willing client, then again after 3 minutes of moderate exercise and after 5 minutes of recovery. Calculate MAP at each point and explain each change using CO, SV, and TPR.",
        deliverable: "Data table plus a 200-word physiological explanation."
      },
      gen: [],
      qs: [
        ["Which valve does blood pass through when leaving the left ventricle?", ["Aortic valve", "Mitral valve", "Pulmonary valve", "Tricuspid valve"], "The left ventricle ejects through the aortic valve into the aorta. The mitral valve is between the left atrium and left ventricle."],
        ["Which structure normally sets the heart rate?", ["Sinoatrial (SA) node", "Atrioventricular (AV) node", "Bundle of His", "Purkinje fibers"], "The SA node depolarizes fastest, so it paces the heart. The AV node delays the impulse so the atria finish emptying before the ventricles contract."],
        ["A client's resting HR is 60 bpm and stroke volume is 80 mL. What is cardiac output?", ["4.8 L/min", "1.4 L/min", "6.0 L/min", "8.0 L/min"], "CO = HR x SV = 60 x 80 mL = 4800 mL/min, or 4.8 L/min."],
        ["A patient's BP is 120/80 mmHg. What is the approximate mean arterial pressure?", ["93 mmHg", "100 mmHg", "80 mmHg", "107 mmHg"], "MAP = DBP + 1/3(SBP - DBP) = 80 + 1/3(40) = about 93 mmHg. It weights diastole more because the heart spends more time in diastole."],
        ["During a graded exercise test, a patient's systolic BP falls as workload increases. What is the best response?", ["Stop the test; this is an abnormal and potentially dangerous response", "Continue; systolic BP normally falls during exercise", "Increase the workload to recheck the response", "Continue but record diastolic BP more often"], "Systolic BP should rise with workload. A drop suggests the heart cannot meet demand and is a standard indication to terminate exercise."],
        ["What does the QRS complex on an ECG represent?", ["Ventricular depolarization", "Atrial depolarization", "Ventricular repolarization", "Atrial repolarization"], "QRS is ventricular depolarization. P is atrial depolarization; T is ventricular repolarization; atrial repolarization is hidden in the QRS."],
        ["Increased venous return stretches the ventricle and increases stroke volume. This describes:", ["The Frank-Starling law", "Poiseuille's law", "The Bainbridge reflex", "The baroreceptor reflex"], "Frank-Starling: greater end-diastolic stretch produces a more forceful contraction, matching output to return."],
        ["Why do calf pumps help prevent venous pooling in a post-op patient on bed rest?", ["Contracting calf muscles squeeze deep veins, and valves keep blood moving toward the heart", "Calf contraction increases arterial pressure, pushing venous blood upward", "Muscle contraction dissolves existing clots in the veins", "Calf contraction lowers heart rate, reducing venous pressure"], "The skeletal muscle pump compresses veins, and one-way valves direct flow toward the heart, reducing stasis, which is a key DVT risk factor."],
        ["Which vessels are the primary site of control over peripheral resistance?", ["Arterioles", "Large elastic arteries", "Capillaries", "Venules"], "Arterioles have relatively thick smooth muscle walls and change diameter to regulate flow and resistance. Capillaries are the exchange vessels."],
        ["When do the coronary arteries receive most of their blood flow to the left ventricle?", ["During diastole", "During systole", "Only during exercise", "During the P wave"], "During systole the contracting myocardium compresses coronary vessels. Flow occurs mostly during diastole, so very high heart rates that shorten diastole can limit perfusion."]
      ]
    },
    {
      t: "Respiratory System",
      sub: "Airways, ventilation mechanics, lung volumes, gas exchange, O2 transport",
      guide: [
        "<b>Conducting zone</b> (nose to terminal bronchioles) warms, filters, and moistens air; <b>respiratory zone</b> (respiratory bronchioles, alveoli) exchanges gas.",
        "<b>Boyle's law</b>: pressure and volume are inversely related. Inspiration: diaphragm contracts and flattens, thorax volume increases, pressure drops, air flows in.",
        "<b>Quiet expiration</b> is passive (elastic recoil). Forced expiration uses abdominals and internal intercostals. Accessory inspiratory muscles: SCM, scalenes, pec minor.",
        "<b>Volumes</b>: tidal volume (~500 mL), IRV, ERV, residual volume. Vital capacity = TV + IRV + ERV. Total lung capacity = VC + RV.",
        "<b>Gas exchange</b> occurs by diffusion down partial pressure gradients across the thin alveolar-capillary membrane.",
        "<b>O<sub>2</sub> transport</b>: about 98% bound to hemoglobin. The curve shifts right (O<sub>2</sub> released more easily) with increased temperature, CO<sub>2</sub>, acidity, and 2,3-BPG, as in working muscle.",
        "<b>CO<sub>2</sub> transport</b>: mostly as bicarbonate (HCO<sub>3</sub><sup>-</sup>); also bound to hemoglobin and dissolved in plasma.",
        "<b>Control</b>: medullary centers; central chemoreceptors respond mainly to CO<sub>2</sub> (via CSF pH). CO<sub>2</sub>, not O<sub>2</sub>, is the main drive to breathe in healthy people."
      ],
      assignment: {
        title: "Diaphragmatic breathing teaching script",
        task: "Write a script for teaching diaphragmatic breathing to a client who over-uses neck and upper-chest muscles. Explain the mechanics using Boyle's law, name the accessory muscles you want to quiet, and include two cues and one positioning option.",
        deliverable: "Teaching script (about 250 words) with a mechanics note for the clinician."
      },
      gen: [],
      qs: [
        ["During quiet inspiration, which muscle is primarily responsible for increasing thoracic volume?", ["Diaphragm", "Sternocleidomastoid", "Rectus abdominis", "Internal intercostals"], "The diaphragm contracts and descends, doing most of the work of quiet breathing. SCM is accessory for inspiration; abdominals and internal intercostals assist forced expiration."],
        ["Why does air flow into the lungs during inspiration?", ["Thoracic volume increases, so alveolar pressure drops below atmospheric pressure", "Thoracic volume decreases, so alveolar pressure rises above atmospheric pressure", "The lungs actively pull air in using smooth muscle", "Oxygen diffuses down its gradient from the air into the airways"], "By Boyle's law, increasing volume lowers pressure; air moves from higher atmospheric pressure to lower alveolar pressure."],
        ["A client with neck tension breathes with visible upper-chest and scalene activity at rest. Which muscles are being overused?", ["Accessory inspiratory muscles", "Primary expiratory muscles", "Abdominal stabilizers", "Pelvic floor muscles"], "SCM, scalenes, and upper trapezius act as accessory inspiratory muscles. Habitual use at rest is a common target for breathing retraining."],
        ["Vital capacity equals:", ["Tidal volume + inspiratory reserve volume + expiratory reserve volume", "Tidal volume + residual volume", "Total lung capacity + residual volume", "Inspiratory reserve volume + residual volume"], "VC is the maximal air that can be exhaled after a maximal inhalation: TV + IRV + ERV. Residual volume cannot be exhaled, so it is excluded."],
        ["How is most carbon dioxide transported in the blood?", ["As bicarbonate ions in plasma", "Dissolved directly in plasma", "Bound to the iron in hemoglobin", "Bound to albumin"], "Most CO2 is converted to bicarbonate via carbonic anhydrase in RBCs. Smaller amounts bind hemoglobin (as carbaminohemoglobin) or dissolve in plasma."],
        ["In working muscle, temperature, CO2, and acidity rise. How does this affect hemoglobin?", ["It releases oxygen more readily (rightward shift)", "It holds oxygen more tightly (leftward shift)", "It stops carrying oxygen entirely", "It carries more oxygen to the lungs"], "A rightward shift in the oxyhemoglobin curve (Bohr effect) unloads more oxygen exactly where active tissue needs it."],
        ["In a healthy person, what is the primary chemical stimulus to breathe?", ["Rising arterial CO2", "Falling arterial O2", "Rising blood glucose", "Falling blood pressure"], "Central chemoreceptors respond to CO2 through its effect on CSF pH. Low O2 becomes a strong drive only when it drops substantially."],
        ["Why is quiet expiration considered passive?", ["It relies on elastic recoil of the lungs and chest wall", "The diaphragm actively pushes air out", "The abdominal muscles contract with every breath", "Air is drawn out by negative pressure in the pleural space"], "When the diaphragm relaxes, stored elastic energy returns the lungs and chest wall to resting position. Muscles are recruited only for forced expiration."],
        ["Gas exchange between alveoli and blood occurs by:", ["Simple diffusion down partial pressure gradients", "Active transport by membrane pumps", "Bulk flow through capillary pores", "Facilitated diffusion via carrier proteins"], "O2 and CO2 are small, lipid-soluble gases that diffuse across the thin respiratory membrane from high to low partial pressure."],
        ["A patient with a cough asks why the nose matters. Which function belongs to the conducting zone?", ["Warming, humidifying, and filtering inspired air", "Exchanging oxygen and carbon dioxide", "Producing surfactant to prevent alveolar collapse", "Generating the respiratory rhythm"], "The conducting zone moves and conditions air but does no gas exchange. Surfactant is made by type II alveolar cells; rhythm is set in the brainstem."]
      ]
    },
    {
      t: "Renal, Fluid-Electrolyte & Acid-Base",
      sub: "Nephron, filtration, ADH/aldosterone/RAAS, electrolytes, pH regulation",
      guide: [
        "<b>Nephron</b>: glomerulus (filtration) &rarr; proximal tubule (most reabsorption) &rarr; loop of Henle (concentration gradient) &rarr; distal tubule &rarr; collecting duct (fine tuning by hormones).",
        "<b>Three processes</b>: filtration, reabsorption, secretion. Excretion = filtered + secreted &minus; reabsorbed.",
        "<b>GFR</b> (~125 mL/min) estimates kidney function; reported clinically as eGFR from serum creatinine.",
        "<b>ADH</b> increases water reabsorption (concentrated urine). <b>Aldosterone</b> increases Na<sup>+</sup> reabsorption and K<sup>+</sup> secretion; water follows Na<sup>+</sup>.",
        "<b>RAAS</b>: low BP &rarr; kidney releases renin &rarr; angiotensinogen &rarr; angiotensin I &rarr; ACE &rarr; angiotensin II (vasoconstriction, aldosterone, thirst) &rarr; BP rises.",
        "<b>Electrolytes</b>: Na<sup>+</sup> main extracellular cation (fluid volume); K<sup>+</sup> main intracellular cation (abnormal levels cause dangerous arrhythmias and muscle weakness).",
        "<b>Acid-base</b>: normal arterial pH 7.35-7.45. Buffers act in seconds, lungs (CO<sub>2</sub>) in minutes, kidneys (H<sup>+</sup> excretion, HCO<sub>3</sub><sup>-</sup> reabsorption) over hours to days.",
        "<b>Imbalances</b>: respiratory acidosis (hypoventilation, CO<sub>2</sub> up), respiratory alkalosis (hyperventilation), metabolic acidosis (e.g., ketoacidosis, HCO<sub>3</sub><sup>-</sup> down), metabolic alkalosis (e.g., vomiting)."
      ],
      assignment: {
        title: "Dehydration and BP case",
        task: "A client arrives lightheaded after a hot outdoor workout with little water. Explain step by step how ADH, aldosterone, and RAAS respond to restore volume and pressure, and what signs would make you stop the session and seek medical help.",
        deliverable: "Flowchart plus a 200-word case explanation."
      },
      gen: [],
      qs: [
        ["Where in the nephron does most reabsorption of water and solutes occur?", ["Proximal convoluted tubule", "Collecting duct", "Distal convoluted tubule", "Glomerulus"], "The proximal tubule reabsorbs about two-thirds of filtered sodium and water plus nearly all glucose and amino acids. The collecting duct does hormonal fine tuning."],
        ["A dehydrated client produces small amounts of dark, concentrated urine. Which hormone is primarily responsible?", ["Antidiuretic hormone (ADH)", "Atrial natriuretic peptide", "Calcitonin", "Glucagon"], "ADH inserts aquaporins in the collecting ducts so more water is reabsorbed. ANP does the opposite, promoting sodium and water loss."],
        ["What is the main effect of aldosterone on the kidney?", ["Increases sodium reabsorption and potassium secretion", "Increases potassium reabsorption and sodium secretion", "Increases glucose reabsorption", "Decreases water reabsorption in the proximal tubule"], "Aldosterone acts on the distal nephron to retain Na+ (water follows) and excrete K+. That is why aldosterone excess can cause low potassium."],
        ["A patient takes an ACE inhibitor for hypertension. How does this lower blood pressure?", ["It reduces formation of angiotensin II, a potent vasoconstrictor", "It blocks ADH receptors in the collecting duct", "It increases renin release from the kidney", "It directly slows the SA node"], "ACE converts angiotensin I to angiotensin II. Less angiotensin II means less vasoconstriction and less aldosterone, lowering BP."],
        ["What is the normal range for arterial blood pH?", ["7.35-7.45", "7.00-7.20", "7.50-7.65", "6.80-7.00"], "Arterial pH is tightly held between 7.35 and 7.45. Below 7.35 is acidemia; above 7.45 is alkalemia."],
        ["A patient with COPD retains CO2 because of hypoventilation. Which acid-base disturbance results?", ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis"], "Retained CO2 forms carbonic acid and lowers pH. The kidneys compensate over days by retaining bicarbonate."],
        ["An anxious client hyperventilates and reports tingling fingers. What acid-base change is occurring?", ["Respiratory alkalosis from blowing off CO2", "Respiratory acidosis from CO2 retention", "Metabolic acidosis from lactate buildup", "Metabolic alkalosis from bicarbonate loss"], "Hyperventilation removes CO2, raising pH. Alkalosis lowers ionized calcium, which can cause tingling and muscle cramps."],
        ["Which system corrects pH most slowly but most completely?", ["The kidneys", "Chemical buffers in blood", "The lungs", "The liver"], "Buffers act in seconds and the lungs in minutes, but the kidneys can excrete H+ and regenerate bicarbonate over hours to days, fully restoring balance."],
        ["Why do abnormal potassium levels pose an urgent risk during exercise?", ["Potassium sets the resting membrane potential, so abnormal levels can cause cardiac arrhythmias", "Potassium is the main extracellular ion controlling blood volume", "Potassium is needed to activate troponin in skeletal muscle", "Potassium carries oxygen in red blood cells"], "K+ is the main intracellular cation and determines resting potential in heart and muscle; both high and low levels can trigger dangerous rhythms. Sodium is the main extracellular volume ion."],
        ["What triggers renin release from the kidney?", ["Decreased blood pressure or renal perfusion", "Increased blood pressure", "High blood glucose", "Increased blood oxygen"], "Juxtaglomerular cells release renin in response to low renal perfusion pressure, low NaCl delivery sensed by the macula densa, or sympathetic stimulation, starting the RAAS cascade that raises BP."]
      ]
    },
    {
      t: "Digestive System & Metabolism",
      sub: "GI tract, digestion, absorption, liver, energy metabolism",
      guide: [
        "<b>Pathway</b>: mouth &rarr; pharynx &rarr; esophagus &rarr; stomach &rarr; small intestine (duodenum, jejunum, ileum) &rarr; large intestine. Accessory organs: salivary glands, liver, gallbladder, pancreas.",
        "<b>Stomach</b>: HCl (low pH, kills microbes, activates pepsin) and pepsin begin protein digestion.",
        "<b>Small intestine</b>: site of most digestion and nearly all nutrient absorption; villi and microvilli massively increase surface area.",
        "<b>Enzymes</b>: amylase (carbohydrates; saliva and pancreas), proteases like trypsin (protein; pancreas), lipase (fat; pancreas). Bile from the liver (stored in gallbladder) emulsifies fat.",
        "<b>Absorption routes</b>: sugars and amino acids enter capillaries &rarr; hepatic portal vein &rarr; liver. Fats are packaged into chylomicrons &rarr; lacteals (lymph).",
        "<b>Large intestine</b>: absorbs water and electrolytes; gut bacteria produce some vitamins (e.g., vitamin K).",
        "<b>Liver</b>: stores glycogen, performs gluconeogenesis, makes plasma proteins (albumin, clotting factors), produces bile, metabolizes drugs and detoxifies.",
        "<b>Fed vs fasted</b>: fed state (insulin) favors storage; fasted state (glucagon, cortisol) mobilizes glycogen, fat (lipolysis), and amino acids for gluconeogenesis."
      ],
      assignment: {
        title: "Pre-workout fueling guide",
        task: "Write a guide explaining how a meal eaten 2-3 hours before training is digested, absorbed, and stored. Trace a carbohydrate, protein, and fat from mouth to tissue, and explain why a heavy, high-fat meal right before training can cause GI discomfort.",
        deliverable: "One-page client guide with a simple absorption diagram."
      },
      gen: [],
      qs: [
        ["Where does most chemical digestion and nutrient absorption occur?", ["Small intestine", "Stomach", "Large intestine", "Esophagus"], "The small intestine receives pancreatic enzymes and bile and has an enormous absorptive surface from villi and microvilli. The large intestine mainly absorbs water."],
        ["What is the main role of bile in digestion?", ["Emulsifying fats into small droplets for lipase to act on", "Breaking peptide bonds in proteins", "Digesting starch into maltose", "Neutralizing bacteria in the stomach"], "Bile salts break large fat globules into small droplets, increasing surface area for pancreatic lipase. Bile itself is not an enzyme."],
        ["After absorption, dietary fats packaged as chylomicrons first enter:", ["Lacteals of the lymphatic system", "The hepatic portal vein", "The renal artery", "Intestinal capillaries leading directly to muscle"], "Chylomicrons are too large for capillaries, so they enter lacteals and reach the blood via the thoracic duct. Sugars and amino acids go to the liver via the portal vein."],
        ["Which organ produces most of the enzymes that digest carbohydrates, proteins, and fats in the small intestine?", ["Pancreas", "Gallbladder", "Liver", "Stomach"], "The exocrine pancreas secretes amylase, proteases, and lipase into the duodenum. The gallbladder only stores bile; the liver makes bile."],
        ["Which enzyme begins protein digestion in the stomach?", ["Pepsin", "Amylase", "Lipase", "Trypsin"], "Pepsin is activated by stomach acid and begins breaking proteins into peptides. Trypsin acts later, in the small intestine."],
        ["A client eats a large, high-fat meal 20 minutes before a hard training session and gets cramping and nausea. What is the best explanation?", ["Fat slows gastric emptying while exercise diverts blood flow away from the gut", "Fat is digested faster than carbohydrate, overloading the muscles", "Exercise increases stomach acid, which digests fat too quickly", "Fat is absorbed directly into muscle and causes cramping"], "High-fat meals empty slowly from the stomach, and intense exercise redirects blood flow to working muscle, impairing digestion. Allowing 2-3 hours or eating a lighter meal helps."],
        ["A patient with advanced liver disease has easy bruising and swelling in the legs. Which liver function explains this?", ["The liver makes clotting factors and albumin", "The liver stores bile for fat digestion", "The liver absorbs water from the colon", "The liver secretes insulin and glucagon"], "Reduced clotting factor production causes easy bleeding, and low albumin lowers plasma oncotic pressure, leading to edema."],
        ["During an overnight fast, which process helps maintain blood glucose once liver glycogen falls?", ["Gluconeogenesis from amino acids, lactate, and glycerol", "Glycogenesis in skeletal muscle", "Lipogenesis in adipose tissue", "Insulin-driven glucose uptake"], "When glycogen runs low, the liver makes new glucose from non-carbohydrate sources. Glycogenesis and lipogenesis are storage processes of the fed state."],
        ["What is the main function of the large intestine?", ["Absorbing water and electrolytes", "Digesting proteins", "Absorbing most dietary fat", "Producing bile"], "By the time chyme reaches the colon, nutrients are absorbed; the colon reclaims water and electrolytes and forms feces. Gut bacteria there also make vitamin K."],
        ["Which hormone dominates the fed state and promotes storage of glucose, fat, and amino acids?", ["Insulin", "Glucagon", "Cortisol", "Epinephrine"], "Insulin rises after a meal and drives glycogen synthesis, fat storage, and protein synthesis. The other three are mobilizing hormones of the fasted or stressed state."]
      ]
    }
  ]
});
