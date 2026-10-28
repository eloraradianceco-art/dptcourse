(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "chemistry-2",
  track: "prereq",
  order: 4,
  code: "PRE 112",
  title: "General Chemistry II",
  credits: 4,
  desc: "The chemistry behind oxygen delivery, acid-base balance, nerve and muscle membrane potentials, and energy metabolism. It covers gases and thermochemistry, kinetics and equilibrium, buffers, electrochemistry, organic fundamentals, and metabolic biochemistry, so that arterial blood gases, Nernst potentials, and exercise metabolism make sense in PT school.",
  objectives: [
    "Apply the gas laws, including Dalton's law of partial pressures, to oxygen delivery at sea level, altitude, and with supplemental oxygen",
    "Explain reaction rates, activation energy, and chemical equilibrium and predict shifts using Le Chatelier's principle",
    "Use the Henderson-Hasselbalch equation and the bicarbonate buffer system to classify acid-base disorders and their compensation",
    "Assign oxidation states and relate electrochemical gradients to the resting membrane potential using the Nernst concept",
    "Identify major organic functional groups, isomers, and reaction types found in biological molecules",
    "Describe enzyme kinetics and the chemistry of glycolysis, the Krebs cycle, the electron transport chain, lipid oxidation, and ketone production"
  ],
  references: [
    "Brown TL, LeMay HE, Bursten BE, Murphy CJ, Woodward PM, Stoltzfus MW. Chemistry: The Central Science. Pearson.",
    "Timberlake KC. General, Organic, and Biological Chemistry: Structures of Life. Pearson.",
    "Nelson DL, Cox MM. Lehninger Principles of Biochemistry. W.H. Freeman.",
    "West JB, Luks AM. West's Respiratory Physiology: The Essentials. Wolters Kluwer.",
    "Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology. Elsevier."
  ],
  units: [
    {
      t: "Gases & Thermochemistry",
      sub: "Gas laws, Dalton's partial pressures and O2 delivery, enthalpy",
      lesson: [
        "Gas behavior is described by a few relationships among pressure (P), volume (V), temperature in kelvin (T), and amount (n). <b>Boyle's law</b>: at constant temperature, pressure and volume are inversely related, <span class='formula'>P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span>. <b>Charles's law</b>: at constant pressure, volume is proportional to absolute temperature, <span class='formula'>V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></span>. These combine into the <b>ideal gas law</b>, <span class='formula'>PV = nRT</span>. Always convert temperature to kelvin (K = &deg;C + 273) before using these equations.",
        "Breathing is Boyle's law in action. When the diaphragm contracts and the rib cage expands, thoracic volume rises, so alveolar pressure falls slightly below atmospheric pressure, and air flows in down the pressure gradient. During quiet exhalation, elastic recoil reduces lung volume, alveolar pressure rises above atmospheric, and air flows out. A patient with weak inspiratory muscles cannot generate enough volume change to create an adequate pressure gradient, which is why inspiratory muscle training and positioning matter.",
        "<b>Dalton's law</b> states that the total pressure of a gas mixture equals the sum of the partial pressures of each gas, and each gas's partial pressure equals its fraction times total pressure: <span class='formula'>P<sub>gas</sub> = F<sub>gas</sub> x P<sub>total</sub></span>. At sea level, barometric pressure is about 760 mmHg and oxygen is about 21% of dry air, so inspired PO<sub>2</sub> is about 0.21 x 760 = 160 mmHg. Once air is humidified in the airways, water vapor takes 47 mmHg at body temperature, so inspired tracheal PO<sub>2</sub> is about 0.21 x (760 - 47) = 150 mmHg. Alveolar PO<sub>2</sub> is lower still (about 100 mmHg) because oxygen is constantly being removed and CO<sub>2</sub> added.",
        "Why does this matter? Oxygen moves from alveoli into blood and from blood into tissue by diffusion, and the driving force is the partial pressure difference, not the percentage. At altitude the percentage of oxygen is still about 21%, but barometric pressure is lower. At a barometric pressure of 500 mmHg, inspired PO<sub>2</sub> is about 0.21 x 500 = 105 mmHg before humidification, so the gradient driving oxygen into blood shrinks. Supplemental oxygen works the opposite way: raising the fraction of inspired oxygen (FiO<sub>2</sub>) raises the partial pressure even though total pressure stays the same. <b>Henry's law</b> adds that the amount of gas dissolved in a liquid is proportional to its partial pressure, which is why dissolved oxygen in plasma rises with FiO<sub>2</sub>.",
        "<b>Thermochemistry</b> tracks heat in reactions. <b>Enthalpy change (&Delta;H)</b> is the heat absorbed or released at constant pressure. <b>Exothermic</b> reactions release heat and have a negative &Delta;H; <b>endothermic</b> reactions absorb heat and have a positive &Delta;H. Oxidizing glucose to CO<sub>2</sub> and water is strongly exothermic, which is why working muscle heats the body. <b>Hess's law</b> says the total enthalpy change is the same whether a reaction happens in one step or many, so the energy from burning glucose in a calorimeter equals the energy from metabolizing it in cells; the cell just captures part of it as ATP. Whether a reaction is spontaneous depends on Gibbs free energy, <span class='formula'>&Delta;G = &Delta;H - T&Delta;S</span>; negative &Delta;G means the reaction can proceed without added energy.",
        "<b>Specific heat</b> and phase changes also matter clinically. Water has a high specific heat, so the body's water content buffers temperature swings. Evaporating sweat absorbs a large amount of heat (heat of vaporization), which is why evaporation is so effective at cooling and why humid air, which slows evaporation, is dangerous for exercise.",
        "Worked example: a patient with COPD lives at sea level and uses 28% oxygen via a Venturi mask. Ignoring humidity, inspired PO<sub>2</sub> = 0.28 x 760 = 213 mmHg, compared with 160 mmHg on room air. The higher partial pressure steepens the gradient for diffusion across thickened or damaged alveolar membranes. If the same patient flies on an airplane pressurized to roughly the equivalent of 6,000-8,000 feet, cabin pressure drops, inspired PO<sub>2</sub> falls, and the physician may prescribe in-flight oxygen. The PT who understands Dalton's law can explain why the patient's saturation drops on the plane even though the air is still about 21% oxygen."
      ],
      guide: [
        "<b>Boyle</b>: <span class='formula'>P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></span> (constant T). Breathing: bigger thorax, lower pressure, air flows in.",
        "<b>Charles</b>: V proportional to T in kelvin. <b>Ideal gas</b>: <span class='formula'>PV = nRT</span>.",
        "<b>Dalton</b>: <span class='formula'>P<sub>gas</sub> = F<sub>gas</sub> x P<sub>total</sub></span>. Sea level PiO<sub>2</sub> &asymp; 0.21 x 760 &asymp; 160 mmHg.",
        "Humidified: subtract water vapor 47 mmHg: 0.21 x 713 &asymp; 150 mmHg. Alveolar PO<sub>2</sub> &asymp; 100 mmHg.",
        "Altitude: same 21%, lower total pressure, lower PO<sub>2</sub>. Supplemental O<sub>2</sub>: higher fraction, higher PO<sub>2</sub>.",
        "<b>Henry</b>: dissolved gas proportional to partial pressure.",
        "<b>&Delta;H &lt; 0</b> exothermic (releases heat); <b>&Delta;H &gt; 0</b> endothermic. <b>&Delta;G &lt; 0</b> spontaneous.",
        "<b>Hess's law</b>: total &Delta;H is independent of pathway."
      ],
      terms: [
        ["Boyle's law", "At constant temperature, the pressure of a gas is inversely proportional to its volume."],
        ["Charles's law", "At constant pressure, the volume of a gas is directly proportional to its absolute temperature."],
        ["Ideal gas law", "The relationship PV = nRT linking pressure, volume, moles, and temperature of a gas."],
        ["Dalton's law", "The total pressure of a gas mixture equals the sum of the partial pressures of its component gases."],
        ["Partial pressure", "The pressure contributed by one gas in a mixture, equal to its fraction times total pressure."],
        ["Henry's law", "The amount of gas dissolved in a liquid is proportional to that gas's partial pressure above the liquid."],
        ["FiO2", "The fraction of inspired oxygen, about 0.21 in room air."],
        ["Enthalpy change", "The heat absorbed or released by a reaction at constant pressure, symbolized delta H."],
        ["Exothermic", "Describing a reaction that releases heat to its surroundings, with a negative delta H."],
        ["Hess's law", "The total enthalpy change of a reaction is the same regardless of the number of steps."],
        ["Gibbs free energy", "The energy available to do work, where a negative delta G indicates a spontaneous reaction."],
        ["Heat of vaporization", "The energy required to convert a liquid to a gas, which makes evaporating sweat an effective coolant."]
      ],
      assignment: {
        title: "Oxygen at altitude patient handout",
        task: "Write a patient education handout for someone with chronic lung disease planning a trip to a mountain town or a long flight. Use Dalton's law with two worked calculations (sea level and altitude) to explain in plain language why oxygen levels drop, and list warning signs and practical strategies, including when to talk to the physician about supplemental oxygen.",
        deliverable: "A one-page handout with two shown calculations and a plain-language explanation."
      },
      gen: [],
      qs: [
        ["At sea level (760 mmHg) and ignoring water vapor, what is the partial pressure of oxygen in room air (21% O2)?", ["About 160 mmHg", "About 100 mmHg", "About 21 mmHg", "About 210 mmHg"], "PO2 = 0.21 x 760 = 159.6, about 160 mmHg. 100 mmHg is the typical alveolar value after humidification and gas exchange."],
        ["Inspired air is fully humidified at body temperature (water vapor 47 mmHg). At a barometric pressure of 760 mmHg, what is the inspired PO2?", ["About 150 mmHg", "About 160 mmHg", "About 140 mmHg", "About 113 mmHg"], "0.21 x (760 - 47) = 0.21 x 713 = 149.7, about 150 mmHg. Forgetting to subtract water vapor gives 160."],
        ["A city sits where barometric pressure is 500 mmHg. Ignoring water vapor, what is the PO2 of air there?", ["About 105 mmHg", "About 160 mmHg", "About 50 mmHg", "About 133 mmHg"], "0.21 x 500 = 105 mmHg. The oxygen percentage is unchanged at altitude; the total pressure falls."],
        ["A patient asks why she feels short of breath at altitude when 'the air still has 21% oxygen.' What is the BEST explanation?", ["Lower total pressure lowers the oxygen partial pressure driving diffusion", "The air at altitude contains a smaller percentage of oxygen", "Cold air at altitude blocks oxygen from entering the alveoli", "Hemoglobin cannot bind oxygen at low temperatures"], "Diffusion depends on partial pressure. With lower barometric pressure, PO2 falls even at 21 percent, reducing the gradient into blood."],
        ["A patient breathes 40% oxygen at sea level. Ignoring water vapor, the inspired PO2 is closest to:", ["304 mmHg", "160 mmHg", "400 mmHg", "190 mmHg"], "0.40 x 760 = 304 mmHg. Raising FiO2 raises partial pressure at the same total pressure."],
        ["A 2 L balloon at 760 mmHg is compressed at constant temperature to 1,520 mmHg. What is the new volume?", ["1 L", "4 L", "0.5 L", "2 L"], "Boyle's law: 760 x 2 = 1,520 x V2, so V2 = 1 L. Doubling pressure halves volume."],
        ["During inspiration, the thoracic cavity expands. Which gas law BEST explains why air flows into the lungs?", ["Boyle's law", "Charles's law", "Henry's law", "Hess's law"], "Larger volume lowers alveolar pressure below atmospheric (Boyle), creating the gradient for airflow."],
        ["Which law explains why dissolved oxygen in plasma rises when a patient receives supplemental oxygen?", ["Henry's law", "Boyle's law", "Charles's law", "Hess's law"], "Henry's law: dissolved gas is proportional to its partial pressure. Higher FiO2 raises PO2 and dissolved O2."],
        ["A reaction has a delta H of -2,800 kJ/mol. This reaction:", ["Releases heat and is exothermic", "Absorbs heat and is endothermic", "Is at equilibrium with no heat change", "Must be nonspontaneous at all temperatures"], "Negative delta H means heat is released. Spontaneity depends on delta G, which also includes entropy."],
        ["Burning glucose in a calorimeter releases the same total energy as fully metabolizing it in muscle. This illustrates:", ["Hess's law", "Le Chatelier's principle", "Dalton's law", "Boyle's law"], "Enthalpy change is path-independent; cells take many steps but the total delta H is the same."],
        ["Why is sweating an effective cooling mechanism?", ["Evaporating water absorbs a large amount of heat", "Sweat has a low specific heat and warms quickly", "Sweat reflects radiant heat away from the skin", "Liquid sweat conducts heat into the air"], "Water's high heat of vaporization means evaporation removes a lot of heat. Humidity limits evaporation."],
        ["A gas sample at 27 C occupies 3 L. At constant pressure it is heated to 127 C. What is the new volume?", ["4 L", "14.1 L", "3.5 L", "2.25 L"], "Convert to kelvin: 300 K and 400 K. V2 = 3 x (400 / 300) = 4 L. Using Celsius gives the wrong answer of 14.1 L."],
        ["A patient with COPD is going on a commercial flight. Which explanation BEST supports discussing in-flight oxygen with his physician?", ["Cabin pressure is lower, so inspired PO2 falls", "Cabin air contains less than 21% oxygen", "Airplane air contains more carbon dioxide than room air", "Higher cabin pressure compresses the lungs"], "Cabins are pressurized to an altitude equivalent, so total pressure and PO2 are lower than at sea level."],
        ["Which condition indicates a reaction is spontaneous?", ["Negative delta G", "Positive delta H", "Positive delta G", "Zero delta H"], "Spontaneity is determined by Gibbs free energy; negative delta G means the reaction can proceed without added energy."],
        ["Total pressure in a gas mixture is 760 mmHg. Nitrogen exerts 593 mmHg and CO2 is negligible. Ignoring other gases, the partial pressure of oxygen is about:", ["167 mmHg", "593 mmHg", "760 mmHg", "100 mmHg"], "Dalton's law: partial pressures sum to total. 760 - 593 = 167 mmHg."]
      ]
    },
    {
      t: "Chemical Kinetics & Equilibrium",
      sub: "Reaction rates, activation energy, Keq, Le Chatelier's principle",
      lesson: [
        "<b>Kinetics</b> asks how fast a reaction happens; <b>equilibrium</b> asks how far it goes. They are separate questions. A reaction can be very favorable but extremely slow (glucose sitting in air does not burst into flame), or fast but barely favorable. Reaction rate depends on how often molecules collide with enough energy and the right orientation. The minimum energy needed is the <b>activation energy (E<sub>a</sub>)</b>.",
        "Four factors raise reaction rate: higher <b>concentration</b> of reactants (more collisions), higher <b>temperature</b> (more molecules exceed E<sub>a</sub>; a common rule of thumb is that rate roughly doubles for each 10&deg;C rise in many biological reactions), larger <b>surface area</b>, and a <b>catalyst</b>. A catalyst lowers activation energy by providing an alternate pathway; it speeds both forward and reverse reactions equally and is not consumed. Enzymes are biological catalysts. Crucially, a catalyst does not change the equilibrium position or &Delta;G; it only helps the system reach equilibrium faster.",
        "The <b>rate law</b> expresses rate in terms of concentrations: <span class='formula'>rate = k[A]<sup>m</sup>[B]<sup>n</sup></span>, where k is the rate constant and the exponents (reaction orders) are found experimentally. In a first-order reaction, doubling [A] doubles the rate. Many drug eliminations follow first-order kinetics: a constant fraction is removed per unit time, giving a constant <b>half-life</b>. After about four to five half-lives, most of a drug is eliminated, which is useful when timing therapy around medications.",
        "Many reactions are reversible. At <b>equilibrium</b>, forward and reverse rates are equal and concentrations stop changing, though both reactions continue. For <span class='formula'>aA + bB &#8652; cC + dD</span>, the equilibrium constant is <span class='formula'>K<sub>eq</sub> = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup></span>. Pure solids and liquids (such as water) are left out. A K<sub>eq</sub> much greater than 1 means products dominate at equilibrium; much less than 1 means reactants dominate. K<sub>eq</sub> changes only with temperature. The <b>reaction quotient Q</b> has the same form using current concentrations: if Q &lt; K, the reaction moves forward; if Q &gt; K, it moves in reverse.",
        "<b>Le Chatelier's principle</b> states that a system at equilibrium responds to a disturbance by shifting to partly offset it. Add reactant or remove product and the reaction shifts right. Add product or remove reactant and it shifts left. For gases, raising pressure favors the side with fewer gas molecules. Raising temperature favors the endothermic direction. The body is full of these shifts. The carbonic acid system, <span class='formula'>CO<sub>2</sub> + H<sub>2</sub>O &#8652; H<sub>2</sub>CO<sub>3</sub> &#8652; H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup></span>, catalyzed by carbonic anhydrase, shifts left when we breathe off CO<sub>2</sub> (H<sup>+</sup> falls) and right when CO<sub>2</sub> accumulates (H<sup>+</sup> rises).",
        "Oxygen loading on hemoglobin is another equilibrium: <span class='formula'>Hb + O<sub>2</sub> &#8652; HbO<sub>2</sub></span>. In the lungs, high PO<sub>2</sub> drives the reaction right and hemoglobin loads oxygen. In working muscle, PO<sub>2</sub> is low, so the reaction shifts left and oxygen unloads. Rising temperature, CO<sub>2</sub>, acidity (H<sup>+</sup>), and 2,3-BPG in active muscle reduce hemoglobin's affinity and shift the dissociation curve right (the <b>Bohr effect</b>), unloading even more oxygen exactly where it is needed.",
        "Worked example: a patient is anxious and breathing rapidly during a first therapy session, then reports tingling around the lips and in the fingers. Hyperventilation removes CO<sub>2</sub>. By Le Chatelier, the carbonic acid equilibrium shifts left, consuming H<sup>+</sup>, so blood pH rises (respiratory alkalosis). Alkalosis increases protein binding of calcium, lowering ionized calcium and making nerves more excitable, producing paresthesias. The therapist pauses, coaches slow diaphragmatic breathing to let CO<sub>2</sub> return toward normal, and monitors symptoms. Equilibrium chemistry explains a common clinic event."
      ],
      guide: [
        "<b>Kinetics</b> = speed; <b>equilibrium</b> = extent. Separate questions.",
        "Rate increases with concentration, temperature, surface area, and catalysts.",
        "<b>Catalysts/enzymes</b> lower E<sub>a</sub>, speed both directions, do not change K<sub>eq</sub> or &Delta;G.",
        "<b>First-order</b>: constant half-life; about 4-5 half-lives to eliminate most of a drug.",
        "<span class='formula'>K<sub>eq</sub> = [products]/[reactants]</span> with coefficients as exponents; omit pure solids/liquids. K &gt; 1 favors products.",
        "<b>Q vs K</b>: Q &lt; K shifts forward; Q &gt; K shifts reverse.",
        "<b>Le Chatelier</b>: add reactant or remove product shifts right; heat favors the endothermic direction.",
        "Hyperventilation removes CO<sub>2</sub>, shifts carbonic acid left, H<sup>+</sup> falls, pH rises."
      ],
      terms: [
        ["Activation energy", "The minimum energy colliding molecules must have for a reaction to occur."],
        ["Catalyst", "A substance that lowers activation energy and speeds a reaction without being consumed."],
        ["Rate constant", "The proportionality constant k in a rate law, which depends on temperature."],
        ["Reaction order", "The exponent of a reactant's concentration in the rate law, determined experimentally."],
        ["Half-life", "The time required for the concentration of a reactant or drug to fall by half."],
        ["Dynamic equilibrium", "The state in which forward and reverse reaction rates are equal and concentrations remain constant."],
        ["Equilibrium constant", "The ratio of product to reactant concentrations at equilibrium, each raised to its coefficient."],
        ["Reaction quotient", "The ratio Q of product to reactant concentrations at any moment, compared with K to predict direction."],
        ["Le Chatelier's principle", "A system at equilibrium shifts to partly counteract a change in conditions."],
        ["Carbonic anhydrase", "The enzyme that rapidly interconverts carbon dioxide and water with carbonic acid."],
        ["Bohr effect", "Reduced hemoglobin affinity for oxygen as CO2 and acidity increase, aiding oxygen unloading."]
      ],
      assignment: {
        title: "Le Chatelier in the body",
        task: "Choose three physiological equilibria (carbonic acid system, hemoglobin-oxygen binding, and one of your choice such as calcium phosphate in bone or myoglobin oxygen binding). For each, write the equation, describe a clinical or exercise disturbance, predict the shift, and explain the observable effect on the patient.",
        deliverable: "A three-row table with equation, disturbance, predicted shift, and clinical consequence."
      },
      gen: [],
      qs: [
        ["How does an enzyme affect a reversible reaction?", ["It lowers activation energy and speeds both directions", "It increases the equilibrium constant", "It makes a positive delta G reaction spontaneous", "It speeds only the forward reaction"], "Catalysts lower Ea for both directions and do not change Keq or delta G; equilibrium is reached faster."],
        ["A patient hyperventilates and develops perioral tingling. Using Le Chatelier's principle, what happens to blood H+?", ["It decreases as the carbonic acid equilibrium shifts left", "It increases as CO2 is converted to carbonic acid", "It is unchanged because CO2 is not part of the equilibrium", "It increases because bicarbonate is lost in the urine"], "Removing CO2 pulls CO2 + H2O <-> H+ + HCO3- to the left, consuming H+ and raising pH (respiratory alkalosis)."],
        ["What is the MOST appropriate immediate intervention for the hyperventilating patient above?", ["Coach slow diaphragmatic breathing to retain CO2", "Increase exercise intensity to raise CO2 production", "Administer supplemental oxygen at a high flow rate", "Have the patient breathe as fast as possible"], "Slowing breathing lets CO2 rise back toward normal and corrects the alkalosis. Rule out medical causes if symptoms persist."],
        ["For the reaction N2 + 3H2 <-> 2NH3, what is the equilibrium expression?", ["[NH3]^2 / ([N2][H2]^3)", "[N2][H2]^3 / [NH3]^2", "[NH3] / ([N2][H2])", "2[NH3] / (3[H2][N2])"], "Products over reactants, each raised to its coefficient."],
        ["A reaction has Keq = 1 x 10^5 at body temperature. At equilibrium:", ["Products greatly predominate", "Reactants greatly predominate", "Reactants and products are equal", "The reaction has stopped completely"], "A very large K means the ratio of products to reactants is large. Both reactions continue at equal rates."],
        ["A reaction mixture has Q = 0.1 and K = 10. In which direction will it proceed?", ["Forward, toward products", "Reverse, toward reactants", "No net change", "It cannot be predicted without temperature"], "Q < K means there are too few products relative to equilibrium, so the reaction proceeds forward."],
        ["Which change alters the value of an equilibrium constant?", ["Changing the temperature", "Adding a catalyst", "Adding more reactant", "Removing product as it forms"], "K depends only on temperature. Concentration changes shift position but not K; catalysts change only rate."],
        ["Hemoglobin in exercising muscle releases more oxygen than at rest. Which factor contributes MOST directly through the Bohr effect?", ["Increased CO2 and H+ in active tissue", "Increased PO2 in muscle capillaries", "Lower temperature in working muscle", "Reduced 2,3-BPG in red cells"], "Higher CO2 and acidity lower hemoglobin's O2 affinity, shifting the curve right and unloading more O2."],
        ["A drug has a half-life of 4 hours and follows first-order elimination. Starting at 100 mg in the body, how much remains after 12 hours?", ["12.5 mg", "25 mg", "33 mg", "0 mg"], "12 hours = 3 half-lives: 100 to 50 to 25 to 12.5 mg. First-order elimination never reaches exactly zero."],
        ["Why does warming tissue before exercise increase metabolic reaction rates?", ["More molecules have energy above the activation threshold", "Warming lowers the equilibrium constant of every reaction", "Heat converts endothermic reactions into exothermic ones", "Warming increases the concentration of every enzyme"], "Higher temperature raises the fraction of collisions exceeding Ea, so rates increase within the enzyme's functional range."],
        ["In the lungs, hemoglobin becomes nearly saturated. Using Le Chatelier's principle, this occurs because:", ["High alveolar PO2 drives Hb + O2 toward HbO2", "Low alveolar PO2 favors oxygen release", "High CO2 in the lungs increases hemoglobin affinity", "Carbonic anhydrase binds oxygen to hemoglobin"], "A high concentration of a reactant (O2) pushes the equilibrium toward the bound product."],
        ["Which statement BEST distinguishes kinetics from equilibrium?", ["Kinetics describes how fast; equilibrium describes how far", "Kinetics describes heat; equilibrium describes speed", "Kinetics applies only to gases; equilibrium to liquids", "Kinetics depends on K; equilibrium depends on k"], "Rate (kinetics) and extent (equilibrium) are independent; a favorable reaction can be slow."],
        ["A patient with COPD retains CO2 over time. Applying Le Chatelier's principle to the carbonic acid system, which change follows?", ["H+ rises and blood pH falls", "H+ falls and blood pH rises", "Bicarbonate is consumed and pH rises", "The equilibrium is unaffected by CO2"], "Excess CO2 drives the reaction right, producing H+ and HCO3-, causing respiratory acidosis."],
        ["Doubling the concentration of reactant A doubles the reaction rate. The reaction is:", ["First order in A", "Zero order in A", "Second order in A", "Independent of A"], "In first-order kinetics, rate is proportional to [A]. Second order would quadruple the rate."],
        ["For an exothermic reaction at equilibrium, raising the temperature will:", ["Shift the equilibrium toward reactants", "Shift the equilibrium toward products", "Have no effect on the equilibrium", "Increase the value of K"], "Treat heat as a product of an exothermic reaction; adding heat shifts left and lowers K."]
      ]
    },
    {
      t: "Acid-Base Equilibria & Buffers",
      sub: "Henderson-Hasselbalch, bicarbonate buffer, acidosis/alkalosis and compensation",
      lesson: [
        "pH is the negative log of hydrogen ion concentration, <span class='formula'>pH = -log[H<sup>+</sup>]</span>. Because it is logarithmic, each 1-unit drop in pH means a tenfold rise in [H<sup>+</sup>]. Normal arterial pH is about 7.35-7.45, a very narrow window; values outside it disturb enzyme function, potassium distribution, cardiac rhythm, and nerve excitability. Weak acids only partly dissociate, <span class='formula'>HA &#8652; H<sup>+</sup> + A<sup>-</sup></span>, with an acid dissociation constant K<sub>a</sub>; <span class='formula'>pK<sub>a</sub> = -log K<sub>a</sub></span>. The lower the pK<sub>a</sub>, the stronger the acid.",
        "A <b>buffer</b> is a weak acid and its conjugate base (or a weak base and its conjugate acid) that resists pH change. Added H<sup>+</sup> is taken up by A<sup>-</sup>; added OH<sup>-</sup> is neutralized by HA. The <b>Henderson-Hasselbalch equation</b> relates pH to the ratio of base to acid: <span class='formula'>pH = pK<sub>a</sub> + log([A<sup>-</sup>]/[HA])</span>. When base and acid are equal, log(1) = 0 and pH = pK<sub>a</sub>. A buffer works best within about 1 pH unit of its pK<sub>a</sub>. Useful log values: log 1 = 0, log 2 &asymp; 0.3, log 10 = 1, log 20 &asymp; 1.3, log 100 = 2.",
        "The body's main extracellular buffer is the <b>bicarbonate system</b>. For blood, the equation becomes <span class='formula'>pH = 6.1 + log([HCO<sub>3</sub><sup>-</sup>] / (0.03 x PaCO<sub>2</sub>))</span>, where 0.03 converts PaCO<sub>2</sub> in mmHg to dissolved CO<sub>2</sub> in mmol/L. With normal values, HCO<sub>3</sub><sup>-</sup> = 24 mmol/L and PaCO<sub>2</sub> = 40 mmHg: 0.03 x 40 = 1.2, 24 / 1.2 = 20, log 20 &asymp; 1.3, so pH &asymp; 6.1 + 1.3 = 7.4. A pK<sub>a</sub> of 6.1 is far from 7.4, yet the system is powerful because it is <i>open</i>: the lungs adjust CO<sub>2</sub> within minutes and the kidneys adjust HCO<sub>3</sub><sup>-</sup> over days. Other buffers include proteins (hemoglobin), phosphate (important inside cells and urine), and bone.",
        "The equation shows the logic of every acid-base disorder: pH depends on the <b>ratio</b> of HCO<sub>3</sub><sup>-</sup> (controlled by kidneys, the metabolic side) to PaCO<sub>2</sub> (controlled by lungs, the respiratory side). <b>Respiratory acidosis</b>: PaCO<sub>2</sub> above about 45 mmHg from hypoventilation (COPD exacerbation, opioid overdose, neuromuscular weakness such as Guillain-Barre or high SCI). <b>Respiratory alkalosis</b>: PaCO<sub>2</sub> below about 35 mmHg from hyperventilation (anxiety, pain, early asthma, altitude, pulmonary embolism). <b>Metabolic acidosis</b>: HCO<sub>3</sub><sup>-</sup> below about 22 mmol/L from added acid or lost base (diabetic ketoacidosis, lactic acidosis, renal failure, severe diarrhea). <b>Metabolic alkalosis</b>: HCO<sub>3</sub><sup>-</sup> above about 26 from lost acid or added base (vomiting, nasogastric suction, some diuretics).",
        "<b>Compensation</b> moves the other system in the same direction to restore the ratio. In metabolic acidosis, the lungs blow off CO<sub>2</sub> (deep, rapid Kussmaul breathing in DKA); this respiratory compensation starts within minutes. In respiratory acidosis, the kidneys retain HCO<sub>3</sub><sup>-</sup> and excrete H<sup>+</sup>, but renal compensation takes days. Compensation usually brings pH toward normal but rarely fully back to 7.40. A quick interpretation method: look at pH (acidemia or alkalemia), then ask whether PaCO<sub>2</sub> or HCO<sub>3</sub><sup>-</sup> explains it. The mnemonic <b>ROME</b> helps: <b>R</b>espiratory <b>O</b>pposite (pH and PaCO<sub>2</sub> move in opposite directions), <b>M</b>etabolic <b>E</b>qual (pH and HCO<sub>3</sub><sup>-</sup> move in the same direction).",
        "Worked example: arterial blood gas shows pH 7.30, PaCO<sub>2</sub> 30 mmHg, HCO<sub>3</sub><sup>-</sup> 14 mmol/L in a patient with type 1 diabetes. pH is low, so acidemia. HCO<sub>3</sub><sup>-</sup> is low and moves in the same direction as pH, so the primary problem is metabolic acidosis. PaCO<sub>2</sub> is low, which would cause alkalosis, so it is compensation. Check with Henderson-Hasselbalch: 0.03 x 30 = 0.9, 14 / 0.9 &asymp; 15.6, log 15.6 &asymp; 1.19, pH &asymp; 7.29, consistent with the reported 7.30. Diagnosis: metabolic acidosis with partial respiratory compensation, likely DKA. Exercise is contraindicated; the PT holds therapy and ensures medical management.",
        "Clinically, the PT does not order blood gases but reads them every day in acute care to decide whether a patient can tolerate mobility, airway clearance, or exercise. A rising PaCO<sub>2</sub> during activity in a patient with neuromuscular weakness signals ventilatory failure, and an unexplained metabolic acidosis may signal lactic acidosis from poor perfusion or sepsis."
      ],
      guide: [
        "<span class='formula'>pH = -log[H<sup>+</sup>]</span>; 1 pH unit = 10x [H<sup>+</sup>]. Normal arterial pH 7.35-7.45.",
        "<b>H-H</b>: <span class='formula'>pH = pK<sub>a</sub> + log([A<sup>-</sup>]/[HA])</span>. Equal amounts: pH = pK<sub>a</sub>.",
        "Blood: <span class='formula'>pH = 6.1 + log(HCO<sub>3</sub><sup>-</sup> / (0.03 x PaCO<sub>2</sub>))</span>. Normal ratio 20:1, pH 7.4.",
        "Normal PaCO<sub>2</sub> about 35-45 mmHg; HCO<sub>3</sub><sup>-</sup> about 22-26 mmol/L.",
        "<b>ROME</b>: Respiratory Opposite (pH vs PaCO<sub>2</sub>), Metabolic Equal (pH vs HCO<sub>3</sub><sup>-</sup>).",
        "Resp acidosis: hypoventilation (COPD, opioids, NM weakness). Resp alkalosis: hyperventilation (anxiety, pain, PE, altitude).",
        "Met acidosis: DKA, lactic acidosis, renal failure, diarrhea. Met alkalosis: vomiting, NG suction, diuretics.",
        "<b>Compensation</b>: lungs fast (minutes); kidneys slow (days). Rarely returns pH fully to 7.40."
      ],
      terms: [
        ["pH", "The negative base-10 logarithm of the hydrogen ion concentration."],
        ["pKa", "The negative log of the acid dissociation constant; the pH at which an acid is half dissociated."],
        ["Buffer", "A mixture of a weak acid and its conjugate base that resists changes in pH."],
        ["Conjugate base", "The species remaining after an acid donates a proton."],
        ["Henderson-Hasselbalch equation", "pH = pKa + log of the ratio of conjugate base to weak acid."],
        ["Bicarbonate buffer system", "The CO2, carbonic acid, and bicarbonate system that is the main extracellular buffer."],
        ["Respiratory acidosis", "Low blood pH caused by CO2 retention from inadequate ventilation."],
        ["Respiratory alkalosis", "High blood pH caused by excessive loss of CO2 through hyperventilation."],
        ["Metabolic acidosis", "Low blood pH caused by a primary decrease in bicarbonate from acid gain or base loss."],
        ["Metabolic alkalosis", "High blood pH caused by a primary increase in bicarbonate from acid loss or base gain."],
        ["Compensation", "A change in the opposite system (renal or respiratory) that moves pH back toward normal."],
        ["Kussmaul respirations", "Deep, rapid breathing that blows off CO2 to compensate for metabolic acidosis."]
      ],
      assignment: {
        title: "ABG interpretation practice set",
        task: "Write six arterial blood gas cases (one for each primary disorder plus two with compensation) with a short patient context typical of acute care PT. For each, show your step-by-step interpretation, verify one case with Henderson-Hasselbalch math, and state whether you would proceed with, modify, or hold mobility and why.",
        deliverable: "A worked ABG casebook with six cases, interpretation steps, and a mobility decision for each."
      },
      gen: [],
      qs: [
        ["A buffer has pKa 6.8 and a base-to-acid ratio of 10:1. What is its pH?", ["7.8", "6.8", "5.8", "16.8"], "pH = 6.8 + log 10 = 6.8 + 1 = 7.8."],
        ["A buffer contains equal concentrations of weak acid and conjugate base. Its pH equals:", ["The pKa", "7.0", "The pKa plus 1", "Zero"], "log(1) = 0, so pH = pKa."],
        ["Using pH = 6.1 + log(HCO3- / (0.03 x PaCO2)), what is the pH when HCO3- is 12 mmol/L and PaCO2 is 40 mmHg?", ["7.1", "7.4", "6.8", "7.6"], "0.03 x 40 = 1.2; 12 / 1.2 = 10; log 10 = 1; pH = 7.1."],
        ["Using the bicarbonate H-H equation, what is the pH when HCO3- is 24 mmol/L and PaCO2 is 20 mmHg (log 40 is about 1.6)?", ["About 7.7", "About 7.4", "About 7.1", "About 7.9"], "0.03 x 20 = 0.6; 24 / 0.6 = 40; log 40 is about 1.6; pH = 6.1 + 1.6 = 7.7. Halving PaCO2 doubles the ratio."],
        ["Solution A has pH 4 and solution B has pH 6. Compared with B, solution A has:", ["100 times more H+", "2 times more H+", "20 times more H+", "100 times less H+"], "Each pH unit is a tenfold change; 2 units = 10 x 10 = 100-fold."],
        ["ABG: pH 7.28, PaCO2 58 mmHg, HCO3- 25 mmol/L in a patient after an opioid overdose. The interpretation is:", ["Uncompensated respiratory acidosis", "Compensated metabolic acidosis", "Uncompensated metabolic alkalosis", "Respiratory alkalosis with compensation"], "Low pH and high PaCO2 (opposite directions) indicate respiratory acidosis. Normal HCO3- means renal compensation has not yet occurred."],
        ["ABG: pH 7.32, PaCO2 28 mmHg, HCO3- 15 mmol/L. What is the primary disorder?", ["Metabolic acidosis with respiratory compensation", "Respiratory acidosis with metabolic compensation", "Respiratory alkalosis without compensation", "Metabolic alkalosis with respiratory compensation"], "Low pH and low HCO3- move in the same direction (metabolic). Low PaCO2 is the lungs compensating."],
        ["A patient in DKA is breathing deeply and rapidly. This breathing pattern is BEST explained as:", ["Respiratory compensation for metabolic acidosis", "A primary respiratory alkalosis from anxiety", "Kidney compensation for respiratory acidosis", "A sign that the acidosis has fully resolved"], "Kussmaul respirations blow off CO2 to raise the HCO3-/CO2 ratio toward normal."],
        ["A patient has had several days of vomiting. Which acid-base disturbance is MOST likely?", ["Metabolic alkalosis", "Metabolic acidosis", "Respiratory acidosis", "Respiratory alkalosis"], "Loss of gastric HCl removes acid, leaving excess HCO3-. Diarrhea, by contrast, loses bicarbonate."],
        ["A patient with COPD has a chronically elevated PaCO2 of 55 mmHg and pH 7.37. Which explanation BEST fits?", ["The kidneys have retained bicarbonate to compensate", "The lungs have compensated by hyperventilating", "This is an acute respiratory alkalosis", "The patient has an untreated metabolic acidosis"], "Chronic CO2 retention gives the kidneys days to retain HCO3-, returning pH close to normal."],
        ["Why is the bicarbonate system effective even though its pKa (6.1) is far from blood pH?", ["The lungs and kidneys can independently adjust CO2 and HCO3-", "Bicarbonate is a strong base that neutralizes all acid", "Its pKa changes with body temperature to match pH", "It is the only buffer present in blood"], "It is an open system: CO2 is exhaled and HCO3- is regulated by the kidneys, multiplying its buffering power."],
        ["During an acute care session, a patient with Guillain-Barre syndrome becomes drowsy and his PaCO2 rises. What is the MOST appropriate action?", ["Stop activity and notify the medical team of possible ventilatory failure", "Increase walking distance to stimulate breathing", "Have the patient hold his breath to raise oxygen levels", "Continue therapy and recheck the ABG tomorrow"], "Rising CO2 with drowsiness suggests respiratory muscle failure and hypercapnia, a medical urgency."],
        ["Which condition causes respiratory alkalosis?", ["Anxiety-related hyperventilation", "Opioid-induced hypoventilation", "Severe diarrhea", "Prolonged nasogastric suction"], "Hyperventilation lowers PaCO2 and raises pH. Opioids cause respiratory acidosis; diarrhea causes metabolic acidosis; NG suction causes metabolic alkalosis."],
        ["Which compensation is the SLOWEST to develop fully?", ["Renal compensation for respiratory acidosis", "Respiratory compensation for metabolic acidosis", "Chemical buffering by plasma proteins", "Hyperventilation in diabetic ketoacidosis"], "Kidneys need days to adjust HCO3-. Ventilation changes within minutes, and chemical buffers act in seconds."],
        ["Lactic acid has a pKa of about 3.9. At a blood pH of 7.4, lactic acid exists mostly as:", ["Lactate, its conjugate base", "Undissociated lactic acid", "Equal parts lactate and lactic acid", "Carbonic acid"], "When pH is far above pKa, the base form dominates. The released H+ is buffered by bicarbonate."]
      ]
    },
    {
      t: "Electrochemistry & Redox",
      sub: "Oxidation states, electrochemical gradients, Nernst and membrane potential",
      lesson: [
        "<b>Redox</b> reactions transfer electrons. <b>Oxidation</b> is loss of electrons; <b>reduction</b> is gain of electrons (OIL RIG). They always occur together: one species is oxidized and another reduced. The species that is oxidized is the <b>reducing agent</b> because it gives electrons away; the species that is reduced is the <b>oxidizing agent</b>. In biology, oxidation often means losing hydrogen atoms (each with its electron) or gaining oxygen, and reduction means gaining hydrogen. NAD<sup>+</sup> is reduced to NADH when it picks up electrons from food molecules.",
        "<b>Oxidation states</b> track electron bookkeeping. Rules: an element alone has oxidation state 0; a monatomic ion's oxidation state equals its charge; oxygen is usually -2; hydrogen is usually +1 with nonmetals; and oxidation states in a neutral compound sum to zero (in an ion they sum to the ion's charge). In Fe<sub>2</sub>O<sub>3</sub>, three oxygens contribute -6, so two irons total +6 and each Fe is +3. In CO<sub>2</sub>, carbon is +4; in CH<sub>4</sub>, carbon is -4. Metabolism moves carbon from reduced (glucose and fat, energy-rich) toward fully oxidized CO<sub>2</sub>, releasing energy.",
        "An <b>electrochemical cell</b> (battery) separates the two half-reactions so electrons flow through a wire. Oxidation occurs at the <b>anode</b> and reduction at the <b>cathode</b> (An Ox, Red Cat). The voltage, or cell potential, reflects how strongly the cathode pulls electrons compared with the anode; a positive cell potential means the reaction is spontaneous. The link to free energy is <span class='formula'>&Delta;G = -nFE</span>, where n is electrons transferred and F is Faraday's constant. The electron transport chain in mitochondria is a biological version: electrons flow from NADH (low reduction potential) to O<sub>2</sub> (high reduction potential), releasing energy used to pump protons.",
        "Cells also store energy as <b>electrochemical gradients</b>: differences in both concentration and charge across a membrane. The Na<sup>+</sup>/K<sup>+</sup>-ATPase pumps 3 Na<sup>+</sup> out and 2 K<sup>+</sup> in, building high K<sup>+</sup> inside and high Na<sup>+</sup> outside. At rest, the membrane is mostly permeable to K<sup>+</sup>. K<sup>+</sup> diffuses out down its concentration gradient, leaving behind unbalanced negative charge (proteins that cannot leave). The interior becomes negative, which pulls K<sup>+</sup> back. When the electrical pull exactly balances the chemical push, there is no net K<sup>+</sup> movement. The voltage at that balance point is the ion's <b>equilibrium (Nernst) potential</b>.",
        "The <b>Nernst equation</b> calculates that potential: <span class='formula'>E<sub>ion</sub> = (61.5 / z) x log([ion]<sub>out</sub> / [ion]<sub>in</sub>)</span> in millivolts at body temperature, where z is the ion's charge. For a monovalent cation, a tenfold concentration ratio corresponds to about 61 mV. With K<sup>+</sup> about 5 mM outside and about 140-150 mM inside, E<sub>K</sub> is roughly -90 mV. With Na<sup>+</sup> about 145 mM outside and about 15 mM inside (a ratio close to 10), E<sub>Na</sub> is roughly +60 mV. The resting membrane potential of a neuron (about -70 mV) or skeletal muscle (about -90 mV) lies near E<sub>K</sub> because K<sup>+</sup> permeability dominates at rest; the Goldman equation weights each ion by its permeability.",
        "This explains why plasma potassium is a vital sign for the heart and muscles. In <b>hyperkalemia</b>, extracellular K<sup>+</sup> rises, the ratio shrinks, E<sub>K</sub> becomes less negative, and the resting potential depolarizes. Initially cells become more excitable, but sustained depolarization inactivates sodium channels, producing weakness and dangerous cardiac arrhythmias. In <b>hypokalemia</b>, the membrane hyperpolarizes, making cells harder to excite and causing weakness, cramps, and arrhythmias. Diuretics, renal failure, and some medications commonly shift potassium.",
        "Worked example: a patient on dialysis has a pre-dialysis K<sup>+</sup> of 6.8 mmol/L (normal roughly 3.5-5.0) and reports new generalized weakness and palpitations before therapy. The Nernst concept predicts a depolarized resting potential in muscle and cardiac cells, explaining weakness and arrhythmia risk. The therapist holds exercise, checks vital signs and rhythm if telemetry is available, and notifies the nurse or physician. Exercise also releases K<sup>+</sup> from working muscle, which could worsen the problem. A chemistry concept becomes a safety decision."
      ],
      guide: [
        "<b>OIL RIG</b>: Oxidation Is Loss, Reduction Is Gain of electrons. Always paired.",
        "Oxidation state rules: element = 0; O usually -2; H usually +1; sum = overall charge.",
        "<b>An Ox, Red Cat</b>: oxidation at anode, reduction at cathode. Positive E means spontaneous; <span class='formula'>&Delta;G = -nFE</span>.",
        "NAD<sup>+</sup> + electrons -> NADH (reduced). O<sub>2</sub> is the final electron acceptor in the ETC.",
        "<b>Nernst</b>: <span class='formula'>E = (61.5/z) log([out]/[in])</span> mV; 10:1 ratio for a +1 ion = about 61 mV.",
        "E<sub>K</sub> about -90 mV; E<sub>Na</sub> about +60 mV; RMP near E<sub>K</sub> because K<sup>+</sup> permeability dominates.",
        "<b>Hyperkalemia</b> depolarizes RMP: weakness, arrhythmia. <b>Hypokalemia</b> hyperpolarizes: weakness, cramps, arrhythmia.",
        "Electrochemical gradient = concentration gradient + electrical gradient."
      ],
      terms: [
        ["Oxidation", "The loss of electrons by an atom, ion, or molecule."],
        ["Reduction", "The gain of electrons by an atom, ion, or molecule."],
        ["Oxidation state", "A bookkeeping number that shows the charge an atom would have if electrons were assigned completely."],
        ["Reducing agent", "The species that donates electrons and is itself oxidized."],
        ["Oxidizing agent", "The species that accepts electrons and is itself reduced."],
        ["Anode", "The electrode where oxidation occurs in an electrochemical cell."],
        ["Cathode", "The electrode where reduction occurs in an electrochemical cell."],
        ["Electrochemical gradient", "The combined driving force of a concentration difference and an electrical potential across a membrane."],
        ["Equilibrium potential", "The membrane voltage at which there is no net movement of a given ion."],
        ["Nernst equation", "The equation that calculates an ion's equilibrium potential from its concentration ratio and charge."],
        ["Resting membrane potential", "The steady voltage across an unstimulated cell membrane, negative inside."],
        ["Hyperkalemia", "An abnormally high plasma potassium concentration that depolarizes excitable cells."]
      ],
      assignment: {
        title: "Potassium and the clinic",
        task: "Using the Nernst equation, calculate E<sub>K</sub> for extracellular K+ of 3.0, 4.5, and 7.0 mM (assume 140 mM inside; show the log values you use). Explain how each value changes resting membrane potential and excitability, then write a short screening protocol for when a PT should hold exercise based on potassium values, symptoms, and medications.",
        deliverable: "A worksheet with three calculations and a one-paragraph screening protocol."
      },
      gen: [],
      qs: [
        ["What is the oxidation state of iron in Fe2O3?", ["+3", "+2", "+6", "-2"], "Three O at -2 = -6, so two Fe = +6 and each Fe = +3."],
        ["What is the oxidation state of carbon in CO2?", ["+4", "-4", "+2", "0"], "Two O at -2 = -4, and the molecule is neutral, so C = +4. Carbon in CO2 is fully oxidized."],
        ["When NAD+ accepts electrons to become NADH, NAD+ is:", ["Reduced", "Oxidized", "Hydrolyzed", "Dehydrated"], "Gaining electrons is reduction. The fuel molecule that gave the electrons is oxidized."],
        ["In the reaction Zn + Cu2+ -> Zn2+ + Cu, which species is the reducing agent?", ["Zn", "Cu2+", "Zn2+", "Cu"], "Zn loses electrons (oxidized), so it is the reducing agent. Cu2+ gains electrons and is the oxidizing agent."],
        ["In an electrochemical cell, oxidation occurs at the:", ["Anode", "Cathode", "Salt bridge", "Voltmeter"], "An Ox, Red Cat: oxidation at the anode, reduction at the cathode."],
        ["For a monovalent cation at body temperature, a tenfold higher concentration outside than inside gives an equilibrium potential of about:", ["+61 mV", "-61 mV", "+30 mV", "+10 mV"], "E = 61.5 x log(10) = about +61 mV; positive because the cation is higher outside and the interior must be positive to stop influx."],
        ["For Ca2+ (z = 2) with a tenfold higher concentration outside the cell, the equilibrium potential is about:", ["+31 mV", "+61 mV", "+123 mV", "-31 mV"], "E = (61.5 / 2) x log 10 = about 31 mV. Divalent ions need half the voltage to balance the same ratio."],
        ["Why is the resting membrane potential of a neuron close to the potassium equilibrium potential?", ["The resting membrane is most permeable to K+", "Potassium is the most abundant ion outside the cell", "The Na+/K+ pump moves potassium out of the cell", "Sodium channels are fully open at rest"], "Resting potential is weighted by permeability; leak K+ channels dominate at rest."],
        ["A patient's serum potassium rises from 4.0 to 7.0 mmol/L. What happens to the resting membrane potential of muscle cells?", ["It becomes less negative (depolarized)", "It becomes more negative (hyperpolarized)", "It does not change", "It reverses to strongly positive"], "Raising [K+]out shrinks the out/in ratio, so EK becomes less negative and the membrane depolarizes."],
        ["A dialysis patient reports new weakness and palpitations, and today's potassium is 6.8 mmol/L. What is the MOST appropriate PT action?", ["Hold exercise and notify the nurse or physician", "Proceed with high-intensity interval training", "Proceed but add extra potassium-rich snacks", "Treat as usual and recheck next week"], "Hyperkalemia with symptoms risks fatal arrhythmia. Exercise can raise K+ further, so hold and notify."],
        ["Which statement about the Na+/K+-ATPase is correct?", ["It moves 3 Na+ out and 2 K+ in using ATP", "It moves 2 Na+ out and 3 K+ in passively", "It creates the action potential upstroke", "It moves Na+ and K+ in the same direction"], "The pump uses ATP to maintain the gradients that store electrochemical energy. The upstroke is from voltage-gated Na+ channels."],
        ["In the electron transport chain, which molecule is the final electron acceptor?", ["Oxygen", "NAD+", "Pyruvate", "Carbon dioxide"], "O2 accepts electrons and protons to form water. Without O2, the chain backs up and aerobic ATP production stops."],
        ["A cell reaction has a positive cell potential (E). Which statement is correct?", ["Delta G is negative and the reaction is spontaneous", "Delta G is positive and the reaction needs energy", "The reaction is at equilibrium", "Electrons flow from cathode to anode"], "delta G = -nFE, so positive E gives negative delta G. Electrons flow from anode to cathode."],
        ["A patient taking a loop diuretic reports muscle cramps and weakness, and labs show potassium of 2.9 mmol/L. The Nernst concept predicts that muscle membranes are:", ["Hyperpolarized and harder to excite", "Depolarized and permanently excitable", "Unaffected because potassium is intracellular", "Reversed in polarity at rest"], "Lower [K+]out makes the out/in ratio smaller, so log(out/in) and EK become more negative. Hypokalemia also carries arrhythmia risk; notify the team."],
        ["Converting glucose to CO2 during metabolism is BEST described as:", ["Oxidation of carbon that releases energy", "Reduction of carbon that stores energy", "A reaction with no electron transfer", "Reduction of oxygen to CO2"], "Carbon goes from a reduced state in glucose to +4 in CO2, releasing energy. Oxygen is reduced to water, not CO2."]
      ]
    },
    {
      t: "Organic Chemistry Fundamentals",
      sub: "Functional groups, isomers, polarity, reactions in biology",
      lesson: [
        "Organic chemistry is the chemistry of carbon compounds. Carbon has four valence electrons and forms four covalent bonds, so it builds chains, branches, and rings, and it bonds strongly to H, O, N, S, and P. A plain carbon-hydrogen skeleton (a <b>hydrocarbon</b>) is nonpolar and hydrophobic. What gives organic molecules their chemical personality is the <b>functional groups</b> attached to that skeleton.",
        "Know these groups by sight. <b>Hydroxyl</b> (-OH) makes alcohols and sugars polar and water-soluble. <b>Carbonyl</b> (C=O) appears as an aldehyde at the chain end or a ketone within the chain; glucose is an aldose and fructose a ketose. <b>Carboxyl</b> (-COOH) is acidic and loses H<sup>+</sup> at body pH to become -COO<sup>-</sup>, as in fatty acids, amino acids, and lactate. <b>Amino</b> (-NH<sub>2</sub>) is basic and gains H<sup>+</sup> to become -NH<sub>3</sub><sup>+</sup>. <b>Phosphate</b> (-OPO<sub>3</sub><sup>2-</sup>) carries negative charge and stores energy in ATP and creatine phosphate. <b>Sulfhydryl</b> (-SH) forms disulfide bridges that stabilize proteins such as keratin and collagen-associated proteins. <b>Esters</b> (from an acid plus an alcohol) link fatty acids to glycerol in triglycerides.",
        "<b>Polarity</b> determines solubility and membrane passage: like dissolves like. Molecules rich in -OH, -COO<sup>-</sup>, or -NH<sub>3</sub><sup>+</sup> are hydrophilic and dissolve in plasma but cross membranes poorly without transporters. Long hydrocarbon chains are hydrophobic and dissolve in lipids. <b>Amphipathic</b> molecules such as phospholipids and bile salts have both a polar head and a nonpolar tail, letting them form membranes and micelles. In pharmacology, lipid-soluble drugs cross the blood-brain barrier and distribute into fat, while water-soluble drugs stay mostly in plasma and are excreted by the kidneys.",
        "<b>Isomers</b> share a molecular formula but differ in arrangement. <b>Structural isomers</b> differ in bonding sequence (glucose and fructose are both C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>). <b>Stereoisomers</b> have the same bonds but different spatial arrangement. <b>Cis-trans</b> isomers differ around a double bond: natural unsaturated fatty acids are mostly cis, which kinks the chain, while industrial trans fats are straighter and raise cardiovascular risk. <b>Enantiomers</b> are nonsuperimposable mirror images around a chiral carbon. Enzymes and receptors are chiral, so the body uses L-amino acids and D-sugars, and two enantiomers of a drug can have different effects.",
        "Biological molecules are built and broken by a few reaction types. <b>Dehydration synthesis</b> (condensation) joins monomers by removing water: amino acids form peptide bonds, glucose units form glycogen through glycosidic bonds, fatty acids attach to glycerol through ester bonds. <b>Hydrolysis</b> splits polymers by adding water, as in digestion and in ATP + H<sub>2</sub>O -> ADP + P<sub>i</sub>. <b>Redox</b> reactions move electrons (dehydrogenase enzymes). <b>Phosphorylation</b> adds a phosphate, often activating or deactivating an enzyme. Other common types are isomerization, decarboxylation (removal of CO<sub>2</sub>, as in the Krebs cycle), and transamination (moving an amino group between molecules).",
        "Worked example: why can topical NSAIDs and lidocaine penetrate skin while many other drugs cannot? Skin's outer barrier, the stratum corneum, is lipid-rich. Molecules with moderate lipid solubility and small size cross it; highly polar, charged molecules do not. Topical drug formulations often add penetration enhancers or use uncharged forms. In iontophoresis, a charged drug is driven across the skin by a like-charged electrode, solving the polarity problem with electrical force. Reading a drug's functional groups predicts whether it carries a charge at body pH and therefore which delivery strategy fits.",
        "The goal is fluency, not memorizing every structure. When you see a molecule in a pharmacology or biochemistry text, find the functional groups, decide if it is polar or nonpolar, and ask which reaction type is happening. That habit makes biochemistry much easier."
      ],
      guide: [
        "<b>Hydroxyl</b> -OH (polar, sugars, alcohols); <b>carbonyl</b> C=O (aldehyde at end, ketone inside).",
        "<b>Carboxyl</b> -COOH (acidic, -COO<sup>-</sup> at body pH); <b>amino</b> -NH<sub>2</sub> (basic, -NH<sub>3</sub><sup>+</sup>).",
        "<b>Phosphate</b> (ATP, energy, charge); <b>sulfhydryl</b> -SH (disulfide bridges); <b>ester</b> (triglycerides).",
        "<b>Like dissolves like</b>: polar/charged = hydrophilic; hydrocarbon = hydrophobic; <b>amphipathic</b> = both.",
        "<b>Isomers</b>: structural (different bonding), cis-trans (around double bond), enantiomers (mirror images).",
        "Body uses <b>L-amino acids</b> and <b>D-sugars</b>; trans fats are straight, cis fats kinked.",
        "<b>Dehydration synthesis</b> builds polymers (removes water); <b>hydrolysis</b> breaks them (adds water).",
        "Other reactions: redox, phosphorylation, decarboxylation, transamination."
      ],
      terms: [
        ["Functional group", "A specific cluster of atoms on a carbon skeleton that gives a molecule its characteristic reactions."],
        ["Hydroxyl group", "An -OH group that makes a molecule more polar and water-soluble."],
        ["Carbonyl group", "A carbon double-bonded to oxygen, forming an aldehyde or ketone."],
        ["Carboxyl group", "A -COOH group that acts as an acid and is ionized to -COO- at body pH."],
        ["Amino group", "An -NH2 group that acts as a base and is protonated to -NH3+ at body pH."],
        ["Amphipathic", "Having both hydrophilic and hydrophobic regions, like a phospholipid."],
        ["Structural isomer", "A molecule with the same formula as another but a different bonding arrangement."],
        ["Enantiomer", "One of a pair of stereoisomers that are nonsuperimposable mirror images."],
        ["Chiral carbon", "A carbon atom bonded to four different groups, creating mirror-image forms."],
        ["Dehydration synthesis", "A reaction that joins two molecules by removing a water molecule."],
        ["Hydrolysis", "A reaction that breaks a bond by adding a water molecule."],
        ["Decarboxylation", "Removal of a carboxyl group as carbon dioxide."]
      ],
      assignment: {
        title: "Functional groups in your treatment room",
        task: "Choose five molecules relevant to PT practice (for example glucose, lactate, ATP, ibuprofen, lidocaine, a triglyceride, or creatine). For each, sketch or describe the structure, label the functional groups, predict polarity and charge at body pH, and explain one clinical consequence (absorption, transport, or delivery route).",
        deliverable: "A five-entry reference sheet with labeled structures and a clinical note for each."
      },
      gen: [],
      qs: [
        ["Which functional group is acidic and is mostly ionized as -COO- at body pH?", ["Carboxyl", "Hydroxyl", "Amino", "Methyl"], "Carboxyl groups donate H+ at physiological pH. Amino groups are basic and accept H+."],
        ["Glucose and fructose share the formula C6H12O6 but differ in bonding arrangement. They are:", ["Structural isomers", "Enantiomers", "Identical molecules", "Cis-trans isomers"], "Glucose has an aldehyde group and fructose a ketone group, giving different bonding sequences."],
        ["Which reaction joins two amino acids into a dipeptide?", ["Dehydration synthesis", "Hydrolysis", "Decarboxylation", "Reduction"], "A peptide bond forms when water is removed between the carboxyl of one amino acid and the amino group of the next."],
        ["ATP + H2O -> ADP + Pi is an example of:", ["Hydrolysis", "Dehydration synthesis", "Isomerization", "Transamination"], "Adding water to break a bond is hydrolysis; this reaction releases energy for muscle contraction."],
        ["Phospholipids form bilayers because they are:", ["Amphipathic, with polar heads and nonpolar tails", "Fully hydrophobic throughout the molecule", "Fully hydrophilic throughout the molecule", "Charged on both ends of the molecule"], "Polar heads face water and hydrophobic tails face each other, forming the bilayer."],
        ["Which drug property MOST favors crossing the blood-brain barrier?", ["High lipid solubility and no charge", "Multiple ionized carboxyl groups", "Large size with many hydroxyl groups", "Permanent positive charge on nitrogen"], "Lipid-soluble, uncharged small molecules pass through endothelial membranes. Charged and highly polar molecules are excluded."],
        ["Why are trans fats considered more harmful than natural cis unsaturated fats?", ["Their straighter chains pack like saturated fat and raise cardiovascular risk", "They contain no carbon-carbon double bonds", "They are more water-soluble and stay in plasma", "They are mirror-image enantiomers the body cannot digest"], "Trans double bonds keep the chain straight, behaving like saturated fat in membranes and lipoproteins."],
        ["The body's proteins are built almost entirely from which form of amino acids?", ["L-amino acids", "D-amino acids", "Equal mixtures of L and D", "Cis amino acids"], "Ribosomes and enzymes are chiral and use L-amino acids. Sugars in the body are mostly D-sugars."],
        ["A PT uses iontophoresis to deliver dexamethasone sodium phosphate, which is negatively charged. Under which electrode should the drug be placed?", ["The negative electrode (cathode)", "The positive electrode (anode)", "Either electrode equally", "Neither, because charged drugs cannot be delivered"], "Like charges repel, so a negatively charged drug is driven into tissue from the cathode."],
        ["Which group forms disulfide bridges that stabilize protein structure?", ["Sulfhydryl", "Phosphate", "Carbonyl", "Hydroxyl"], "Two -SH groups oxidize to form an S-S bond, stabilizing tertiary structure."],
        ["Triglycerides form when three fatty acids attach to glycerol through which bond type?", ["Ester bonds", "Peptide bonds", "Glycosidic bonds", "Disulfide bonds"], "An acid (fatty acid) plus an alcohol (glycerol) forms an ester bond with release of water."],
        ["A carbonyl group located inside a carbon chain (not at the end) forms a:", ["Ketone", "Aldehyde", "Carboxylic acid", "Ester"], "Internal C=O is a ketone; terminal C=O with H is an aldehyde."],
        ["Two enantiomers of a drug have different therapeutic effects. The BEST explanation is that:", ["Receptors and enzymes are chiral and fit one form better", "Enantiomers have different molecular formulas", "One enantiomer is always toxic and the other inactive", "Enantiomers differ in the number of functional groups"], "Like a left hand in a right glove, a receptor's chiral binding site fits one enantiomer better."],
        ["In the Krebs cycle, carbon leaves as CO2 through which reaction type?", ["Decarboxylation", "Dehydration synthesis", "Phosphorylation", "Transamination"], "Decarboxylation removes a carboxyl group as CO2, which is then exhaled."],
        ["Which molecule is MOST hydrophobic?", ["A long-chain saturated fatty acid tail", "Glucose", "Glycine", "Lactate"], "Long hydrocarbon chains are nonpolar. Glucose (many -OH), glycine, and lactate (charged groups) are hydrophilic."]
      ]
    },
    {
      t: "Biochemistry & Metabolism",
      sub: "Enzyme kinetics, glycolysis, Krebs, ETC, lipids and ketones",
      lesson: [
        "Enzymes are protein catalysts that bind substrate at an <b>active site</b> and lower activation energy. <b>Michaelis-Menten kinetics</b> describes how reaction velocity depends on substrate concentration: at low [S], velocity rises nearly linearly; at high [S], all active sites are occupied and velocity approaches a maximum, <b>V<sub>max</sub></b>. The <b>K<sub>m</sub></b> is the substrate concentration that gives half of V<sub>max</sub>. A low K<sub>m</sub> means high affinity: the enzyme works well even at low substrate levels. Enzymes have optimal temperature and pH; high fever or acidosis can distort the active site and slow reactions.",
        "<b>Inhibitors</b> are the basis of many drugs. A <b>competitive inhibitor</b> resembles the substrate and competes for the active site; it raises the apparent K<sub>m</sub> but V<sub>max</sub> is unchanged because enough substrate can outcompete it. A <b>noncompetitive inhibitor</b> binds elsewhere and lowers V<sub>max</sub> without changing K<sub>m</sub>. Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis; some patients develop statin-associated muscle symptoms, which a PT should recognize and report. Many enzymes are also regulated by <b>allosteric</b> effectors and by phosphorylation, which lets the cell respond to energy demand.",
        "<b>Glycolysis</b> occurs in the cytoplasm and splits one glucose (6 carbons) into two pyruvate (3 carbons each). It invests 2 ATP and produces 4, for a net yield of <b>2 ATP</b> and <b>2 NADH</b>. It requires no oxygen. Phosphofructokinase (PFK) is the key regulated step: it is stimulated by AMP and ADP (low energy) and inhibited by ATP and citrate. To keep glycolysis running quickly, NAD<sup>+</sup> must be regenerated. When oxygen delivery or mitochondrial capacity cannot keep up, as in high-intensity exercise, pyruvate is reduced to <b>lactate</b> by lactate dehydrogenase, regenerating NAD<sup>+</sup>. Lactate is not simply waste; it is shuttled to the heart and other muscles as fuel and to the liver for gluconeogenesis (the Cori cycle).",
        "With oxygen available, pyruvate enters the mitochondrion and is converted to <b>acetyl-CoA</b>, releasing CO<sub>2</sub> and producing NADH. Acetyl-CoA combines with oxaloacetate to form citrate and enters the <b>Krebs (citric acid) cycle</b>. Each turn produces 2 CO<sub>2</sub>, 3 NADH, 1 FADH<sub>2</sub>, and 1 GTP (ATP equivalent); because one glucose yields two acetyl-CoA, the cycle turns twice per glucose. The cycle's main job is to strip high-energy electrons from carbon and load them onto NADH and FADH<sub>2</sub>.",
        "The <b>electron transport chain</b> on the inner mitochondrial membrane passes those electrons through protein complexes to oxygen, the final acceptor, forming water. The energy released pumps protons into the intermembrane space, creating an electrochemical proton gradient. Protons flow back through <b>ATP synthase</b>, which phosphorylates ADP to ATP: oxidative phosphorylation. Estimates of total yield from one glucose range from about 30 to 32 ATP in modern texts (older texts list 36-38). Fat yields far more: a 16-carbon palmitate produces about 100 or more ATP through <b>beta-oxidation</b>, which cuts fatty acids into 2-carbon acetyl-CoA units. Fat oxidation requires oxygen, which is why it dominates at rest and low intensity.",
        "When carbohydrate is scarce or insulin is absent, the liver converts excess acetyl-CoA into <b>ketone bodies</b>: acetoacetate, beta-hydroxybutyrate, and acetone. Ketones are an important fuel for brain, heart, and muscle during fasting. Mild nutritional ketosis is controlled because insulin limits production. In <b>diabetic ketoacidosis</b>, absent insulin allows runaway fat breakdown; ketoacids accumulate faster than they are used, overwhelm bicarbonate buffering, and cause metabolic acidosis with Kussmaul breathing and fruity (acetone) breath. Exercise guidance for people with type 1 diabetes advises against vigorous exercise when blood glucose is high and ketones are present, because without insulin exercise can worsen hyperglycemia and ketosis.",
        "Worked example: a 25-year-old with type 1 diabetes arrives for therapy with glucose of 310 mg/dL, nausea, and a positive urine ketone test. Chemistry tells the story: low insulin means glucose cannot enter muscle, fat is oxidized heavily, acetyl-CoA exceeds the Krebs cycle's capacity, and ketones accumulate. Exercise would increase counterregulatory hormones and further raise glucose and ketones. The therapist postpones exercise and directs the patient to follow his sick-day plan and contact his provider. Another patient with glucose of 260 mg/dL, no ketones, and feeling well may exercise with caution and monitoring per current guidance."
      ],
      guide: [
        "<b>V<sub>max</sub></b> = maximum rate; <b>K<sub>m</sub></b> = [S] at half V<sub>max</sub>; low K<sub>m</sub> = high affinity.",
        "<b>Competitive</b> inhibitor: K<sub>m</sub> up, V<sub>max</sub> same. <b>Noncompetitive</b>: V<sub>max</sub> down, K<sub>m</sub> same.",
        "<b>Glycolysis</b>: cytoplasm, glucose to 2 pyruvate, net 2 ATP + 2 NADH, no O<sub>2</sub> needed. PFK is rate-limiting.",
        "Pyruvate to <b>lactate</b> regenerates NAD<sup>+</sup>; lactate is recycled as fuel (Cori cycle).",
        "<b>Krebs</b> per acetyl-CoA: 3 NADH, 1 FADH<sub>2</sub>, 1 GTP, 2 CO<sub>2</sub>; two turns per glucose.",
        "<b>ETC</b>: O<sub>2</sub> final acceptor; proton gradient drives ATP synthase. About 30-32 ATP per glucose.",
        "<b>Beta-oxidation</b> makes acetyl-CoA from fatty acids; needs O<sub>2</sub>; high ATP yield.",
        "<b>Ketones</b>: acetoacetate, beta-hydroxybutyrate, acetone. DKA = metabolic acidosis; avoid vigorous exercise with high glucose and ketones."
      ],
      terms: [
        ["Active site", "The region of an enzyme where substrate binds and the reaction is catalyzed."],
        ["Vmax", "The maximum reaction velocity when an enzyme is fully saturated with substrate."],
        ["Km", "The substrate concentration at which reaction velocity is half of Vmax."],
        ["Competitive inhibitor", "A molecule that competes with substrate for the active site, raising apparent Km."],
        ["Allosteric regulation", "Control of enzyme activity by a molecule binding at a site other than the active site."],
        ["Glycolysis", "The cytoplasmic pathway that splits glucose into two pyruvate, yielding net 2 ATP and 2 NADH."],
        ["Phosphofructokinase", "The main rate-limiting enzyme of glycolysis, regulated by cellular energy status."],
        ["Krebs cycle", "The mitochondrial cycle that oxidizes acetyl-CoA to CO2 while producing NADH, FADH2, and GTP."],
        ["Oxidative phosphorylation", "ATP synthesis driven by the proton gradient generated by the electron transport chain."],
        ["ATP synthase", "The membrane enzyme that uses proton flow to phosphorylate ADP to ATP."],
        ["Beta-oxidation", "The mitochondrial process that breaks fatty acids into two-carbon acetyl-CoA units."],
        ["Ketone bodies", "Acetoacetate, beta-hydroxybutyrate, and acetone made by the liver from acetyl-CoA when carbohydrate or insulin is lacking."]
      ],
      assignment: {
        title: "Energy systems client explainer",
        task: "Create a client-facing explainer that connects glycolysis, the Krebs cycle, the ETC, and fat oxidation to three types of training (a 10-second sprint, a 2-minute hard effort, and a 45-minute easy walk). Include a simple diagram, which fuel dominates in each, and a short safety section on exercise with diabetes, high glucose, and ketones.",
        deliverable: "A one-to-two page explainer with a diagram, three training examples, and a safety box."
      },
      gen: [],
      qs: [
        ["What is the net ATP yield from glycolysis of one glucose molecule?", ["2 ATP", "4 ATP", "36 ATP", "1 ATP"], "Glycolysis makes 4 ATP but invests 2, for a net of 2. 36 is an older estimate for complete aerobic oxidation."],
        ["A competitive inhibitor is added to an enzyme reaction. Which change occurs?", ["Apparent Km increases and Vmax is unchanged", "Vmax decreases and Km is unchanged", "Both Km and Vmax decrease", "Km decreases and Vmax increases"], "High substrate can outcompete a competitive inhibitor, so Vmax is reachable but more substrate is needed (higher Km)."],
        ["Enzyme A has a Km of 0.1 mM and enzyme B has a Km of 5 mM for the same substrate. Which statement is correct?", ["Enzyme A has higher affinity for the substrate", "Enzyme B has higher affinity for the substrate", "Enzyme A has a higher Vmax", "Both enzymes have equal affinity"], "Lower Km means half-maximal velocity is reached at lower substrate concentration, indicating higher affinity. Km says nothing about Vmax."],
        ["During a 400-meter sprint, pyruvate is converted to lactate. What is the PRIMARY purpose of this reaction?", ["Regenerate NAD+ so glycolysis can continue", "Produce additional ATP directly", "Supply oxygen to the electron transport chain", "Convert lactate into glucose in the muscle"], "Lactate dehydrogenase oxidizes NADH to NAD+, allowing glycolysis to keep producing ATP rapidly."],
        ["Which molecule is the final electron acceptor in the electron transport chain?", ["O2", "NAD+", "FAD", "Acetyl-CoA"], "Oxygen accepts electrons and H+ to form water. Without O2, aerobic ATP production stops."],
        ["Per acetyl-CoA, one turn of the Krebs cycle produces:", ["3 NADH, 1 FADH2, 1 GTP, 2 CO2", "2 NADH, 2 FADH2, 2 ATP, 1 CO2", "1 NADH, 1 FADH2, 3 GTP, 3 CO2", "4 NADH, 0 FADH2, 2 ATP, 2 CO2"], "Each turn yields 3 NADH, 1 FADH2, 1 GTP, and 2 CO2; there are two turns per glucose."],
        ["Which enzyme is the main rate-limiting step of glycolysis and is inhibited by high ATP?", ["Phosphofructokinase", "Lactate dehydrogenase", "ATP synthase", "Carbonic anhydrase"], "PFK senses energy status: high ATP and citrate inhibit it, while ADP and AMP stimulate it."],
        ["Where does glycolysis occur?", ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Nucleus"], "Glycolysis is cytoplasmic. The Krebs cycle is in the matrix, and the ETC is on the inner membrane."],
        ["A patient with type 1 diabetes has glucose of 310 mg/dL and positive urine ketones before therapy. What is the MOST appropriate action?", ["Postpone exercise and have him follow his sick-day plan and contact his provider", "Proceed with vigorous exercise to lower his glucose", "Give a carbohydrate snack and proceed", "Proceed with resistance training only"], "High glucose with ketones indicates insulin deficiency; exercise can worsen hyperglycemia and ketosis."],
        ["Why do ketone bodies cause acidosis when they accumulate in DKA?", ["Acetoacetate and beta-hydroxybutyrate are acids that release H+", "Ketones bind bicarbonate and convert it to CO2 gas", "Ketones directly block the lungs from removing CO2", "Ketones are bases that raise pH above normal"], "These ketoacids dissociate at body pH, adding H+ that consumes bicarbonate."],
        ["A patient on a statin reports new symmetrical proximal muscle aching and weakness. What is the MOST appropriate PT action?", ["Report the symptoms to the prescribing provider", "Increase training intensity to overcome weakness", "Advise the patient to stop the statin today", "Attribute the symptoms to normal delayed-onset soreness"], "Statin-associated muscle symptoms can range to serious myopathy. PTs report and do not change medications."],
        ["Fat oxidation is the dominant fuel source during:", ["Rest and low-intensity prolonged exercise", "A maximal 10-second sprint", "Heavy one-repetition lifts", "Repeated all-out 30-second intervals"], "Beta-oxidation requires oxygen and is slower, so it dominates at low intensity. High intensity relies on phosphagens and glycolysis."],
        ["How does the electron transport chain drive ATP synthesis?", ["It pumps protons to create a gradient that powers ATP synthase", "It directly transfers phosphate from NADH to ADP", "It splits glucose into pyruvate in the matrix", "It uses CO2 to phosphorylate ADP"], "Electron flow pumps H+ across the inner membrane; H+ flowing back through ATP synthase makes ATP (chemiosmosis)."],
        ["Lactate produced in working muscle is MOST accurately described as:", ["A fuel that can be oxidized by other tissues or recycled to glucose", "A waste product that causes next-day muscle soreness", "A molecule that cannot leave the muscle cell", "The final electron acceptor in anaerobic metabolism"], "Lactate is shuttled to heart and slow-twitch fibers for oxidation and to the liver for gluconeogenesis. It is not the cause of delayed-onset soreness."],
        ["Which ketone body gives the breath a fruity odor in DKA?", ["Acetone", "Beta-hydroxybutyrate", "Acetoacetate", "Lactate"], "Acetone is volatile and exhaled. Beta-hydroxybutyrate and acetoacetate are the acidic ketones in blood."]
      ]
    }
  ]
});
