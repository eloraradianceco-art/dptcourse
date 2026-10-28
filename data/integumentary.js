(window.SUBJECTS = window.SUBJECTS || []).push({
  id: "integumentary",
  track: "clinical",
  order: 4,
  code: "DPT 735",
  title: "Integumentary Physical Therapy",
  credits: 2,
  desc: "Wound healing, wound differentiation, pressure injury prevention, burn care, and wound management for PTs. Skin is the first thing a manual therapist touches, so this course teaches you to recognize what you see and know when compression, debridement, or referral is appropriate.",
  objectives: [
    "Describe the phases of wound healing and the factors that delay them",
    "Differentiate arterial, venous, neuropathic, and pressure wounds by location and appearance",
    "Stage pressure injuries using NPIAP definitions and use the Braden Scale to guide prevention",
    "Classify burn depth, estimate TBSA with the rule of nines, and position to prevent contractures",
    "Select debridement methods and dressings by wound characteristics, and screen for compression contraindications using the ABI"
  ],
  units: [
    {
      t: "Skin & Wound Healing",
      sub: "Skin layers, phases of healing, healing intention, factors that delay healing",
      guide: [
        "<b>Epidermis</b>: avascular outer layer; stratum basale regenerates cells. <b>Dermis</b>: vascular, contains collagen, hair follicles, sweat glands, nerve endings. <b>Hypodermis</b>: subcutaneous fat and connective tissue.",
        "<b>Inflammatory phase</b> (about days 0–6): hemostasis (platelets, clot) then neutrophils and macrophages clear debris; macrophages direct the transition to repair. Signs: redness, heat, swelling, pain.",
        "<b>Proliferative phase</b> (about day 3 to 3 weeks): fibroblasts lay down type III collagen, angiogenesis, granulation tissue (beefy red, moist, bumpy), wound contraction by myofibroblasts, epithelialization.",
        "<b>Maturation/remodeling phase</b> (about 3 weeks to 1–2 years): type III collagen replaced by stronger type I; scar reaches only about 80% of original tensile strength.",
        "<b>Healing by intention</b>: primary = wound edges approximated (sutured incision); secondary = left open to fill with granulation tissue; tertiary (delayed primary) = left open initially, then closed.",
        "<b>Factors that delay healing</b>: poor perfusion/oxygenation, infection, diabetes, malnutrition (low protein), smoking, corticosteroids, advanced age, excessive moisture or dryness, repeated trauma/pressure.",
        "<b>Tissue types</b>: granulation = red, healthy; slough = yellow, stringy, moist nonviable tissue; eschar = black/brown, dry, leathery necrotic tissue. Epibole = rolled, closed wound edges that stop epithelial migration.",
        "<b>Signs of infection</b>: increasing pain, erythema spreading beyond the wound, warmth, purulent drainage, odor, fever, delayed healing; spreading cellulitis or fever = refer."
      ],
      assignment: {
        title: "Healing timeline for a surgical incision",
        task: "Use a client who had knee surgery six weeks ago to describe what is happening at the incision during each healing phase from day 0 through one year. For each phase, note what the scar looks like, what soft-tissue work is and is not appropriate, and which factors in the client's history (diabetes, smoking, steroid use) could slow progress.",
        deliverable: "A timeline graphic or table with a 'safe to do / avoid' column for each phase."
      },
      gen: [],
      qs: [
        ["During which phase of wound healing is granulation tissue formed?", ["Proliferative phase", "Inflammatory phase", "Maturation phase", "Hemostasis phase"], "Fibroblast activity and angiogenesis produce granulation tissue during the proliferative phase."],
        ["Which type of collagen predominates in the maturation phase as scar tissue strengthens?", ["Type I", "Type III", "Type II", "Type IV"], "Early repair lays down weaker type III collagen, which is replaced by stronger type I collagen during remodeling."],
        ["What is the approximate maximum tensile strength a mature scar regains compared with uninjured skin?", ["About 80%", "About 100%", "About 50%", "About 30%"], "Even fully remodeled scar typically reaches only about 80% of the original tissue's tensile strength."],
        ["A surgical incision is closed with sutures and heals without complication. What type of healing is this?", ["Healing by primary intention", "Healing by secondary intention", "Healing by tertiary intention", "Healing by contraction alone"], "Primary intention occurs when wound edges are approximated, as with a sutured surgical incision."],
        ["Which cell type is MOST important for directing the transition from inflammation to the proliferative phase?", ["Macrophages", "Neutrophils", "Platelets", "Keratinocytes"], "Macrophages clear debris and release growth factors that recruit fibroblasts and drive the move into repair."],
        ["A PT notes a wound bed covered in yellow, stringy, moist nonviable tissue. What is this tissue called?", ["Slough", "Eschar", "Granulation tissue", "Epithelial tissue"], "Slough is yellow, moist nonviable tissue. Eschar is dry, black or brown necrotic tissue."],
        ["A patient's wound has rolled, thickened edges that have stopped advancing. What is this finding called?", ["Epibole", "Maceration", "Tunneling", "Undermining"], "Epibole is rolled, closed wound edges that prevent epithelial migration; the edges often need debriding to restart healing."],
        ["A patient with a leg wound has new redness spreading several centimeters beyond the wound edge, warmth, and a fever. What is the MOST appropriate action?", ["Refer to the physician for possible spreading infection", "Apply a more absorptive dressing and reassess next week", "Perform sharp debridement of the wound edges", "Add compression to control the redness"], "Spreading erythema with fever suggests cellulitis or systemic infection, which requires medical evaluation and likely antibiotics."],
        ["A patient with poorly controlled diabetes, low serum albumin, and long-term corticosteroid use has a slow-healing wound. Which statement BEST explains the delay?", ["Hyperglycemia, protein malnutrition, and steroids each impair healing", "Corticosteroids speed healing, so the diabetes is the only cause", "Low albumin indicates excellent nutritional status for healing", "These factors affect only scar appearance, not healing rate"], "Hyperglycemia impairs immune function, low protein limits tissue synthesis, and corticosteroids suppress inflammation needed for repair."],
        ["Which skin layer is avascular?", ["Epidermis", "Dermis", "Hypodermis", "Papillary dermis"], "The epidermis has no blood vessels and is nourished by diffusion from the dermis."]
      ]
    },
    {
      t: "Wound Types & Differentiation",
      sub: "Arterial, venous, neuropathic, and pressure wounds",
      guide: [
        "<b>Arterial ulcers</b>: distal locations (toes, lateral malleolus, areas of trauma). Round, punched-out with well-defined edges, pale or necrotic base, minimal drainage, <b>very painful</b> (worse with elevation, better dependent). Surrounding skin cool, shiny, hairless; diminished pulses.",
        "<b>Venous ulcers</b>: gaiter area, especially the <b>medial malleolus</b>. Irregular shallow edges, ruddy granular base, <b>moderate to heavy drainage</b>, mild to moderate pain (better with elevation). Surrounding edema, hemosiderin staining (brown), lipodermatosclerosis; pulses usually present.",
        "<b>Neuropathic (diabetic) ulcers</b>: plantar surface over bony prominences (metatarsal heads, great toe, heel), surrounded by callus, often <b>painless</b> because of loss of protective sensation. Screen with a 5.07 (10 g) Semmes-Weinstein monofilament.",
        "<b>Pressure injuries</b>: over bony prominences from sustained pressure or pressure plus shear: sacrum/coccyx, heels, ischial tuberosities (sitting), greater trochanters, occiput.",
        "<b>Primary treatments</b>: arterial = restore perfusion (vascular referral), keep dry stable eschar intact; venous = compression and elevation; neuropathic = offloading (total contact cast is the gold standard), glucose control; pressure = pressure redistribution and repositioning.",
        "<b>Charcot foot</b>: warm, swollen, red foot with neuropathy, often painless, possibly mistaken for infection; requires immobilization and offloading, refer promptly.",
        "<b>Exam essentials</b>: location, size (length × width × depth), wound bed tissue, drainage amount/type, edges, periwound skin, tunneling/undermining (clock method), pulses, sensation, pain."
      ],
      assignment: {
        title: "Four-wound comparison chart",
        task: "Build a comparison chart for arterial, venous, neuropathic, and pressure wounds covering location, appearance, drainage, pain, periwound skin, pulses, and primary treatment. Then write one short case for each and identify which chart features gave the diagnosis away.",
        deliverable: "A one-page comparison chart plus four 3-4 sentence cases with answer key."
      },
      gen: [],
      qs: [
        ["A 70-year-old has a shallow, irregular ulcer above the medial malleolus with heavy drainage, brown discoloration of the surrounding skin, and leg edema. Pedal pulses are palpable. What type of wound is this MOST likely to be?", ["Venous ulcer", "Arterial ulcer", "Neuropathic ulcer", "Pressure injury"], "Medial malleolus location, heavy exudate, hemosiderin staining, edema, and present pulses are classic venous findings."],
        ["A patient has a painful, round, punched-out ulcer on the lateral malleolus with a pale base and minimal drainage. The foot is cool and hairless, and pain worsens when the leg is elevated. What type of wound is this MOST likely to be?", ["Arterial ulcer", "Venous ulcer", "Neuropathic ulcer", "Pressure injury"], "Well-defined edges, pale base, little drainage, cool hairless skin, and pain worse with elevation indicate arterial insufficiency."],
        ["A patient with diabetes has a painless ulcer surrounded by callus under the first metatarsal head. Which intervention is MOST important for healing?", ["Offloading pressure from the ulcer site", "Compression wrapping of the lower leg", "Elevating the leg above heart level", "Wet-to-dry dressings applied several times daily"], "Neuropathic plantar ulcers heal when pressure is removed; total contact casting is the gold standard for offloading."],
        ["Which tool is used to screen for loss of protective sensation in the foot of a patient with diabetes?", ["5.07 (10 g) Semmes-Weinstein monofilament", "Two-point discrimination caliper", "128 Hz tuning fork over the patella", "Goniometer at the first MTP joint"], "Inability to feel the 5.07 (10 g) monofilament indicates loss of protective sensation and high ulcer risk."],
        ["What is the primary intervention for venous leg ulcers, provided arterial flow is adequate?", ["Compression therapy with elevation", "Total contact casting", "Keeping the leg dependent at all times", "Leaving the wound open to air to dry"], "Compression counters venous hypertension and edema, the core cause of venous ulcers; it is used once arterial flow is confirmed adequate."],
        ["A patient with diabetic neuropathy has a warm, red, swollen midfoot without an open wound and reports little pain. What is the MOST appropriate action?", ["Refer promptly for evaluation of possible Charcot foot and keep the foot offloaded", "Begin vigorous foot massage to reduce swelling", "Start a walking program to improve circulation", "Apply compression and reassess in a month"], "A hot, swollen neuropathic foot may be acute Charcot neuroarthropathy, which needs immobilization and offloading to prevent collapse."],
        ["A wheelchair user develops a wound over the ischial tuberosity. What is the MOST likely cause?", ["Sustained sitting pressure", "Venous hypertension", "Arterial insufficiency", "Peripheral neuropathy alone"], "The ischial tuberosities bear weight in sitting; prolonged pressure without relief causes pressure injuries there."],
        ["A patient's foot ulcer has a dry, stable black eschar on the heel. The ABI is 0.45. What is the MOST appropriate approach to the eschar?", ["Leave the dry, stable eschar intact and refer for vascular evaluation", "Perform sharp debridement to remove the eschar", "Apply a moist hydrogel to soften the eschar", "Begin compression wrapping to aid healing"], "In poorly perfused limbs, dry stable eschar acts as a protective cover. Debridement and compression are inappropriate without revascularization."],
        ["Which finding MOST strongly suggests a wound is neuropathic rather than arterial?", ["Painless ulcer surrounded by callus on the plantar surface", "Severe pain relieved by hanging the leg off the bed", "Pale wound base with cool, shiny, hairless skin", "Absent pedal pulses and dependent rubor"], "Neuropathic ulcers are painless, callused, and plantar. The other findings are arterial."],
        ["How is the location of tunneling in a wound documented?", ["Using the clock method, with 12 o'clock toward the patient's head", "Using the rule of nines for the body region", "Using the Braden scale subscore for that location", "Using compass directions relative to the clinician"], "Tunneling and undermining are recorded by clock position (12 o'clock toward the head) and measured depth."]
      ]
    },
    {
      t: "Pressure Injuries & Braden",
      sub: "NPIAP staging, prevention, repositioning, Braden Scale",
      guide: [
        "<b>Stage 1</b>: intact skin with non-blanchable erythema (may look different in darkly pigmented skin: warmth, firmness, or color change).",
        "<b>Stage 2</b>: partial-thickness loss with exposed dermis; pink/red moist wound bed or intact/ruptured serum-filled blister. No slough, eschar, or visible fat.",
        "<b>Stage 3</b>: full-thickness skin loss; subcutaneous fat may be visible; slough/eschar may be present; may have undermining or tunneling. No fascia, muscle, tendon, ligament, cartilage, or bone exposed.",
        "<b>Stage 4</b>: full-thickness skin and tissue loss with exposed or directly palpable fascia, muscle, tendon, ligament, cartilage, or bone.",
        "<b>Unstageable</b>: full-thickness loss obscured by slough or eschar so depth cannot be confirmed. <b>Deep tissue pressure injury</b>: intact or non-intact skin with persistent non-blanchable deep red, maroon, or purple discoloration or a blood-filled blister. <b>Pressure injuries are never reverse-staged</b> (a healing stage 4 is a 'healing stage 4').",
        "<b>Braden Scale</b>: six subscales: sensory perception, moisture, activity, mobility, nutrition (each 1–4), and friction/shear (1–3). Total 6–23; <b>lower score = higher risk</b>. A score of 18 or less is commonly used to indicate risk.",
        "<b>Prevention</b>: reposition in bed at regular intervals (commonly every 2 hours); weight shifts in a wheelchair frequently (e.g., every 15–30 minutes); 30° side-lying (avoid lying directly on the trochanter); head of bed at 30° or less when possible to reduce shear; float heels; pressure-redistributing surfaces and cushions; manage moisture and nutrition.",
        "<b>Do not massage</b> reddened areas over bony prominences; massage can damage fragile tissue."
      ],
      assignment: {
        title: "Braden score and prevention plan",
        task: "Score a mock patient on the Braden Scale: an 82-year-old in long-term care who is chairfast, incontinent of urine, eats about half of her meals, and slides down in bed. Show each subscore and the total, then write a prevention plan addressing each low subscore, including the positioning schedule and equipment.",
        deliverable: "A completed Braden worksheet plus a one-page prevention plan for nursing staff."
      },
      gen: [],
      qs: [
        ["A patient's sacrum shows intact skin with a red area that does not blanch with light pressure. What NPIAP stage is this?", ["Stage 1", "Stage 2", "Deep tissue pressure injury", "Unstageable"], "Intact skin with non-blanchable erythema is stage 1. A deep tissue injury shows maroon or purple discoloration."],
        ["A pressure injury on the heel is an intact blister filled with clear serous fluid. What NPIAP stage is this?", ["Stage 2", "Stage 1", "Stage 3", "Deep tissue pressure injury"], "A serum-filled blister is stage 2 partial-thickness loss. A blood-filled blister would suggest deep tissue pressure injury."],
        ["A sacral wound shows full-thickness skin loss with visible subcutaneous fat, but no exposed muscle, tendon, or bone. What NPIAP stage is this?", ["Stage 3", "Stage 2", "Stage 4", "Unstageable"], "Visible fat without exposed fascia, muscle, tendon, or bone defines stage 3."],
        ["A pressure injury over the ischial tuberosity has exposed bone visible in the wound bed. What NPIAP stage is this?", ["Stage 4", "Stage 3", "Unstageable", "Deep tissue pressure injury"], "Exposed or directly palpable bone, tendon, muscle, fascia, or cartilage defines stage 4."],
        ["A pressure injury's wound bed is entirely covered with eschar, and its depth cannot be determined. How should it be documented?", ["Unstageable pressure injury", "Stage 4 pressure injury", "Stage 2 pressure injury", "Deep tissue pressure injury"], "When slough or eschar hides the base so depth cannot be seen, the injury is unstageable until the base is exposed."],
        ["A stage 4 pressure injury is now filling with granulation tissue and appears much shallower. How should it be documented?", ["Healing stage 4 pressure injury", "Stage 3 pressure injury", "Stage 2 pressure injury", "Resolved pressure injury"], "Pressure injuries are not reverse-staged. A stage 4 remains a healing stage 4 as it fills."],
        ["A patient's heel has intact skin with a persistent deep maroon discoloration that does not blanch. What is the MOST appropriate classification?", ["Deep tissue pressure injury", "Stage 1 pressure injury", "Stage 2 pressure injury", "Unstageable pressure injury"], "Persistent deep red, maroon, or purple discoloration over intact skin indicates deep tissue pressure injury."],
        ["A patient has a Braden Scale total score of 11. How should this be interpreted?", ["High risk for pressure injury", "No risk for pressure injury", "Minimal risk requiring no intervention", "Score is invalid because it is below 12"], "Lower Braden scores mean greater risk. A score of 11 is well below the commonly used risk threshold of 18."],
        ["A patient with a high pressure injury risk is on bed rest. Which positioning strategy is MOST appropriate?", ["30° side-lying with heels floated and regular repositioning", "90° side-lying directly on the greater trochanter", "Head of bed elevated to 60° for most of the day", "Supine with the heels resting directly on the mattress"], "30° side-lying avoids loading the trochanter, floating heels removes heel pressure, and a low head-of-bed angle reduces shear."],
        ["A nursing aide wants to massage a reddened area over a resident's sacrum to improve circulation. What is the BEST response?", ["Advise against it, because massage can damage fragile tissue", "Encourage firm circular massage several times a day", "Suggest massage only with a heating pad applied first", "Recommend massage only if the skin is broken"], "Massage over reddened bony prominences can cause further deep tissue damage and is not recommended for prevention."]
      ]
    },
    {
      t: "Burns",
      sub: "Depth classification, rule of nines, positioning to prevent contractures",
      guide: [
        "<b>Superficial (first-degree)</b>: epidermis only; red, dry, painful, blanches, no blisters (e.g., sunburn); heals in about 3–7 days without scarring.",
        "<b>Superficial partial-thickness</b>: epidermis and upper dermis; <b>blisters</b>, moist, red, very painful, blanches; heals in about 1–3 weeks with minimal scarring.",
        "<b>Deep partial-thickness</b>: epidermis and deep dermis; mottled red/white, less painful (some nerve endings destroyed), slow capillary refill; heals in weeks and often benefits from grafting; high risk of hypertrophic scarring.",
        "<b>Full-thickness</b>: through the dermis; white, waxy, leathery, or charred eschar; <b>insensate</b> (nerve endings destroyed), no blanching; requires grafting. Subdermal burns extend into fat, muscle, or bone.",
        "<b>Rule of nines (adult)</b>: head and neck 9%; each upper extremity 9%; anterior trunk 18%; posterior trunk 18%; each lower extremity 18%; perineum/genitals 1%. Children have proportionally larger heads, so a pediatric chart (e.g., Lund-Browder) is used.",
        "<b>Contracture prevention</b>: the position of comfort is the position of contracture (usually flexion and adduction). Position <b>against</b> the expected contracture: neck in extension, shoulder abducted about 90°, elbow extended, hand in the intrinsic-plus (safe) position (wrist extension, MCP flexion, IP extension, thumb abducted), hips extended and slightly abducted, knees extended, ankles at neutral dorsiflexion.",
        "<b>Grafts</b>: immobilize the grafted area typically several days after grafting (per surgeon orders) to allow graft adherence; then begin ROM. <b>Escharotomy</b> releases constricting circumferential eschar.",
        "<b>Scar management</b>: hypertrophic scarring stays within the wound borders; keloids extend beyond them. Pressure garments (worn about 23 hours/day), silicone, scar massage once closed, ROM, and stretching."
      ],
      assignment: {
        title: "Burn unit positioning chart",
        task: "Create a positioning chart for a patient with deep partial-thickness burns to the anterior neck, both axillae, the right anterior elbow, and the dorsum of the right hand. For each area, list the likely contracture, the anti-contracture position, and splint or positioning device. Then estimate TBSA for a separate case: an adult with burns to the entire right arm and the front of the trunk.",
        deliverable: "Positioning chart (area, contracture risk, position, device) plus the TBSA calculation with work shown."
      },
      gen: [],
      qs: [
        ["A cook has a burn on the forearm that is red, moist, blistered, and very painful, and blanches with pressure. How should this burn be classified?", ["Superficial partial-thickness", "Superficial (first-degree)", "Deep partial-thickness", "Full-thickness"], "Blisters, moist red surface, intense pain, and blanching indicate superficial partial-thickness. Superficial burns do not blister."],
        ["A burn appears white and leathery, does not blanch, and the patient cannot feel a pinprick in the area. How should this burn be classified?", ["Full-thickness", "Superficial partial-thickness", "Superficial (first-degree)", "Deep partial-thickness"], "Full-thickness burns destroy dermal nerve endings and vessels, so they are insensate and do not blanch."],
        ["Using the adult rule of nines, what is the TBSA for burns covering the entire right arm and the entire anterior trunk?", ["27%", "18%", "36%", "45%"], "Each upper extremity is 9% and the anterior trunk is 18%, for a total of 27%."],
        ["Using the adult rule of nines, what is the TBSA for burns covering both entire legs?", ["36%", "18%", "27%", "54%"], "Each lower extremity is 18%, so both legs total 36%."],
        ["Why is the adult rule of nines inaccurate for young children?", ["Children's heads make up a larger proportion of body surface area", "Children's legs make up a larger proportion of body surface area", "Children's skin is thicker, so burns are shallower", "Children's trunk accounts for less than 10% of body surface area"], "Infants and young children have relatively larger heads and smaller legs, so pediatric charts such as Lund-Browder are used."],
        ["A patient has burns to the anterior neck. Which position BEST prevents contracture?", ["Neck in extension", "Neck in flexion with a pillow behind the head", "Neck rotated fully to one side", "Neck flexed laterally toward the burn"], "Anterior neck burns contract into flexion. Positioning in extension (e.g., no pillow, a towel roll under the shoulders) counters it."],
        ["A patient has burns to both axillae. Which position is MOST appropriate to prevent contracture?", ["Shoulder abduction to about 90°", "Shoulder adduction with the arms at the sides", "Shoulder internal rotation across the chest", "Shoulder extension with the elbows flexed"], "Axillary burns contract into adduction. Positioning in abduction (about 90°) maintains range."],
        ["A patient has a dorsal hand burn. In which position should the hand be splinted to prevent contracture?", ["Wrist extended, MCPs flexed, IPs extended, thumb abducted", "Wrist flexed, MCPs extended, IPs flexed, thumb adducted", "Wrist neutral, all finger joints fully flexed", "Wrist extended, MCPs extended, IPs flexed"], "The intrinsic-plus (safe) position keeps the MCP collateral ligaments and IP volar structures on stretch to prevent the claw deformity."],
        ["A patient with a burn says that lying with the knees bent on a pillow is most comfortable. What is the MOST appropriate response?", ["Explain that the comfortable position promotes contracture and position the knees in extension", "Allow the position because comfort reduces pain medication needs", "Add a second pillow to increase knee flexion further", "Allow the position at night and extend the knees only during therapy"], "The position of comfort (flexion) is the position of contracture. Positioning against it is essential."],
        ["A raised burn scar is thick and red but stays within the borders of the original burn. What is this scar MOST likely to be?", ["Hypertrophic scar", "Keloid scar", "Atrophic scar", "Normal mature scar"], "Hypertrophic scars stay within the wound borders. Keloids extend beyond them."]
      ]
    },
    {
      t: "Wound Management",
      sub: "Debridement types, dressings by moisture, compression and ABI",
      guide: [
        "<b>Debridement types</b>: <b>sharp/selective</b> (scalpel, scissors, forceps; removes only nonviable tissue; fastest selective method); <b>enzymatic</b> (topical enzymes such as collagenase; selective); <b>autolytic</b> (moisture-retentive dressing lets the body's own enzymes liquefy necrotic tissue; slowest, selective, painless); <b>mechanical</b> (wet-to-dry, pulsed lavage, whirlpool; <b>non-selective</b>, can damage healthy tissue).",
        "<b>Autolytic debridement</b> is contraindicated in infected wounds. Wet-to-dry dressings are non-selective, painful, and generally discouraged on granulating wounds.",
        "<b>Moist wound healing</b> principle: keep the wound bed moist but the periwound dry. Add moisture to dry wounds; absorb from wet wounds.",
        "<b>Dry wounds</b>: hydrogels (donate moisture), transparent films (minimal/no drainage; allow visual inspection; not for infected or draining wounds).",
        "<b>Minimal to moderate drainage</b>: hydrocolloids (occlusive, promote autolytic debridement; not for infected wounds or heavy drainage). <b>Moderate to heavy drainage</b>: foams, alginates (from seaweed; gel on contact with exudate), hydrofibers. Fill dead space (tunnels, cavities) loosely.",
        "<b>Maceration</b> (white, soggy periwound) = too much moisture: use a more absorbent dressing, change more often, protect skin with a barrier.",
        "<b>ABI</b> = ankle SBP ÷ brachial SBP. Normal is roughly 0.9–1.3 (exact cutoffs vary by source; the AHA uses 1.00–1.40). Full compression generally requires ABI 0.8 or more; reduced compression with medical guidance in the moderate range; <b>compression contraindicated in severe arterial disease</b> (commonly ABI below 0.5; some sources use 0.6). Abnormally high values (about 1.3–1.4 or more) = noncompressible vessels, ABI unreliable (use toe pressures).",
        "<b>Other compression contraindications</b>: acute DVT (until medically managed), uncompensated heart failure, and active cellulitis/infection without medical clearance."
      ],
      assignment: {
        title: "Dressing selection algorithm",
        task: "Design a one-page decision algorithm that starts with assessing wound moisture and infection status and ends at a dressing category and debridement method. Then run three cases through it: a dry stable heel eschar in an ischemic limb, a venous ulcer with heavy drainage and macerated edges, and a stage 3 sacral wound with yellow slough and moderate drainage.",
        deliverable: "Flowchart plus the three worked cases, each with dressing, debridement method, and compression decision (with ABI where relevant)."
      },
      gen: [],
      qs: [
        ["A venous ulcer has heavy drainage and white, macerated periwound skin. Which dressing is MOST appropriate?", ["Calcium alginate or foam dressing", "Hydrogel dressing", "Transparent film dressing", "Dry gauze changed once weekly"], "Heavy exudate needs a highly absorbent dressing such as an alginate or foam. Hydrogels add moisture and films do not absorb, worsening maceration."],
        ["A shallow wound has a dry wound bed with no drainage. Which dressing is MOST appropriate to support moist wound healing?", ["Hydrogel", "Calcium alginate", "Foam dressing", "Hydrofiber dressing"], "Hydrogels donate moisture to dry wounds. Alginates, foams, and hydrofibers absorb exudate and would further dry the bed."],
        ["Which debridement method is non-selective?", ["Wet-to-dry dressings", "Sharp debridement", "Enzymatic debridement", "Autolytic debridement"], "Wet-to-dry dressings pull away both necrotic and healthy tissue when removed, so they are non-selective."],
        ["A stable patient's wound has a thin layer of slough and no signs of infection. Which method is the slowest but most painless selective debridement?", ["Autolytic debridement with a moisture-retentive dressing", "Sharp debridement with a scalpel", "Pulsed lavage with suction", "Wet-to-dry gauze dressing"], "Autolytic debridement uses the body's own enzymes under a moisture-retentive dressing; it is selective and painless but slow."],
        ["A patient's wound shows signs of infection. Which debridement method is contraindicated?", ["Autolytic debridement", "Sharp debridement", "Pulsed lavage with suction", "Enzymatic debridement under medical orders"], "Occlusive, moisture-retentive dressings used for autolytic debridement can promote bacterial growth in infected wounds."],
        ["A patient's ankle SBP is 60 mmHg and brachial SBP is 140 mmHg. What is the MOST appropriate decision about compression therapy?", ["Compression is contraindicated", "Full compression is appropriate", "Reduced compression is appropriate without medical input", "ABI cannot be calculated from these values"], "ABI = 60 ÷ 140 ≈ 0.43, which is below the commonly used 0.5 (or 0.6) cutoff for severe arterial disease, so compression is contraindicated."],
        ["A patient with a venous ulcer has an ankle SBP of 126 mmHg and a brachial SBP of 120 mmHg. What is the MOST appropriate next step?", ["Apply therapeutic compression", "Refer for revascularization before any wound care", "Avoid compression because the ABI is abnormal", "Keep the leg dependent to improve perfusion"], "ABI = 126 ÷ 120 = 1.05, which is normal. Compression is safe and is the core treatment for venous ulcers."],
        ["A patient with a deep stage 3 wound has 3 cm of tunneling at 9 o'clock. What is the BEST way to manage the tunnel?", ["Loosely fill the tunnel with an appropriate dressing", "Pack the tunnel as tightly as possible", "Leave the tunnel empty and cover with a film", "Close the tunnel opening with adhesive strips"], "Dead space should be loosely filled to prevent abscess formation and allow healing from the base. Tight packing impairs blood flow."],
        ["A patient with severe arterial insufficiency has a dry, stable heel eschar. Which approach is MOST appropriate?", ["Keep the eschar dry and intact and protect the heel", "Apply hydrogel to soften the eschar for removal", "Perform sharp debridement of the eschar today", "Apply compression to promote healing"], "In ischemic limbs, stable dry eschar is left intact as a natural barrier. Moistening or debriding invites infection without perfusion to heal."],
        ["Which dressing is MOST appropriate for a wound with minimal drainage when the clinician wants to monitor it visually without removing the dressing?", ["Transparent film", "Calcium alginate", "Thick foam dressing", "Hydrofiber dressing"], "Transparent films are suited to minimal-drainage wounds and allow inspection; they are not absorbent and are not used on heavily draining wounds."]
      ]
    }
  ]
});
