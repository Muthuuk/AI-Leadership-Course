/* Virtual hospital simulation for the "From Pilot to Practice" workshop.
   A composite, made-up case. Figures are illustrative. */
window.SIM_PP = {
  title: "The night the alerts went quiet",
  brief: "You chair the AI Governance Council at Northbrook General, a made-up hospital trust. For six months, Wards 7 and 8 have piloted <b>DeteriorAlert</b>, an AI tool that reads patients’ observations and blood results and warns staff when someone is likely to get worse in the next 12 to 24 hours. It ran alongside NEWS2, the national early warning score, and its alerts appeared on a <b>separate screen</b> at the nurses’ station. The board meets on Thursday and wants your recommendation: scale it to all 20 medical wards, change it, extend the pilot or stop.",

  results: [
    ["Alerts raised", "About 14 per ward per day"],
    ["Alerts looked at within 30 minutes", "61% in month 1, 38% by month 5"],
    ["Alerts that led to a change in care", "About 1 in 6"],
    ["Deteriorations caught before NEWS2", "7 patients, about 3 hours earlier"],
    ["Deteriorations missed that NEWS2 caught", "4 patients"],
    ["Accuracy: supplier / local", "0.84 / 0.74 (1.0 perfect, 0.5 a coin toss)"],
    ["Cost for all 20 wards", "About £480,000 a year, plus integration"]
  ],

  measures: {
    intro: "Before you look at anything else, the council must agree how success would be judged. Choose the <b>three</b> best success measures.",
    pick: 3,
    options: [
      { t: "At least 80% of deteriorations flagged before NEWS2 would have flagged them", good: true, why: "A clear patient benefit that the tool could genuinely fail." },
      { t: "At least 70% of alerts looked at within 30 minutes, every month, day and night", good: true, why: "Tests whether the alerts are actually seen, which is where most tools fail." },
      { t: "Performance on local patients within 0.05 of the supplier’s figure, for every age group", good: true, why: "Checks local accuracy and fairness together." },
      { t: "Staff say they like the tool", good: false, why: "Too vague, and liking a tool is not the same as it helping patients." },
      { t: "The supplier’s published accuracy is above 0.8", good: false, why: "The supplier’s figure was known before the pilot started, so it cannot measure the pilot." },
      { t: "The tool raises as many alerts as possible", good: false, why: "More alerts is not better: it drives alert fatigue." },
      { t: "The project finishes on time", good: false, why: "Useful for project management, but says nothing about whether the tool works for patients." }
    ]
  },

  /* Eight people on the ward. pos = [x, z] on the ward floor; c = colour name from the scene palette. */
  roles: [
    { id: "cons", name: "Dr Amara Osei", role: "Consultant physician", c: "green", pos: [-4.6, -0.6],
      cares: "Fewer missed deteriorations, without adding work to stretched teams.",
      says: "Seven patients flagged hours earlier is real. But I went through the four we missed. Two were over 85 with several long-term conditions. That worries me more than the average score.",
      q: "What does Dr Osei’s finding mean for the decision?",
      options: ["The tool may work less well for very elderly patients, so results must be checked by age group", "Elderly patients should be left out of the tool", "Four misses out of hundreds of patients can be ignored"], answer: 0,
      why: "A gap for a group of patients is a safety and fairness issue. It belongs in the hazard log and must be monitored." },
    { id: "nurse", name: "Grace Bello", role: "Ward manager (nurse)", c: "cyan", pos: [1.6, 1.4],
      cares: "Staff workload and safe staffing.",
      says: "Honestly? After the first few weeks, night staff stopped checking that screen. There are two of us for twenty-eight patients. You can’t be at a bedside and staring at a screen across the ward.",
      q: "What kind of problem has Grace described?",
      options: ["A workflow and safety problem: alerts are not reaching staff where they work", "A discipline problem: staff should be told to check the screen", "A technical fault in the screen"], answer: 0,
      why: "The separate screen is a design choice with safety consequences. Workflow is part of the tool." },
    { id: "data", name: "Tom Reyes", role: "Data scientist", c: "violet", pos: [4.4, -0.8],
      cares: "Whether the model is reliable.",
      says: "The model is noticeably worse when observations are recorded late or are incomplete. When does that happen most? At night.",
      q: "Put Tom’s finding next to Grace’s. What do you see?",
      options: ["The tool is weakest and least watched at the same time of day: one linked hazard", "Two separate, minor issues", "Proof that the tool does not work at all"], answer: 0,
      why: "Two facts from two roles combine into the biggest hazard in the pilot. This is why mixed teams matter." },
    { id: "it", name: "Priya Shah", role: "Digital and IT lead", c: "slate", pos: [-1.6, 1.6],
      cares: "Systems that are secure and supportable.",
      says: "We could send alerts straight to the nurses’ handhelds through the patient record. But integration will take about nine months, and the contract needs a new clause.",
      q: "What should the recommendation do with Priya’s information?",
      options: ["Treat integration as a condition before scale-up, with a realistic timeline and budget", "Ignore it: the separate screen worked for the pilot", "Roll out now and integrate later"], answer: 0,
      why: "Integration fixes the root cause of the night-shift gap, so it should come before scale-up, not after." },
    { id: "cso", name: "Dr Lena Novak", role: "Clinical safety officer", c: "amber", pos: [-4.6, 3.4],
      cares: "Patient safety and the required safety paperwork.",
      says: "Our safety case under DCB0160 only covers Wards 7 and 8. I cannot sign off any other ward until the hazards there are assessed. And the night-shift gap is not in the hazard log yet.",
      q: "What does this mean for a decision to go to 20 wards?",
      options: ["The safety case and hazard log must be updated before the tool is used on any new ward", "The supplier’s DCB0129 safety case is enough", "Safety paperwork can be done after go-live"], answer: 0,
      why: "The deploying organisation’s safety case must cover every setting where the tool is used. The paperwork must follow the scale." },
    { id: "ig", name: "Marcus Webb", role: "Information governance lead", c: "pink", pos: [4.6, 3.4],
      cares: "Lawful, proportionate use of patient data.",
      says: "The data protection impact assessment was written for the pilot. Wider use means more patients’ data, so it needs updating before we go further.",
      q: "What should happen to the DPIA?",
      options: ["Update it to cover the wider use before scaling", "Nothing: one DPIA covers the whole trust", "Ask patients to sign consent forms instead"], answer: 0,
      why: "A DPIA must cover the actual processing. Wider use needs an updated assessment." },
    { id: "fin", name: "Helen Carter", role: "Operations and finance manager", c: "red", pos: [-0.2, -3.6],
      cares: "Value for money and capacity.",
      says: "We have room for one new digital project next year, not two. And £480,000 is just the licence. Nobody has costed integration, training or monitoring.",
      q: "How should the recommendation handle cost?",
      options: ["Show the full cost, including integration, training and monitoring, against the benefit", "Quote only the licence to keep the case simple", "Leave cost to the finance team after the decision"], answer: 0,
      why: "Hidden costs are a common reason scale-ups run out of money halfway." },
    { id: "pat", name: "Mrs Joan Ellis", role: "Patient representative", c: "white", pos: [2.6, -3.6],
      cares: "Safety, fairness and being told how decisions are made.",
      says: "Families keep asking me: is a computer deciding who gets seen first now? Nobody has given them a straight answer.",
      q: "What does Mrs Ellis’s point tell you?",
      options: ["Staff need a simple, honest explanation, and patients should help write it before scale-up", "Patients do not need to know about the tool", "The supplier should handle patient questions"], answer: 0,
      why: "Trust depends on honest explanation. Patients and families on every new ward will ask the same question." }
  ],
  minInterviews: 6,

  night: {
    captions: [
      [20, "20:00 · Night shift starts. Two nurses, twenty-eight patients."],
      [22, "22:00 · Alerts keep arriving on the screen at the nurses’ station."],
      [0, "00:00 · Both nurses are busy at bedsides at the far end of the ward."],
      [2, "02:00 · Observations for bed 5 are recorded late. The tool’s risk estimate is less reliable."],
      [3, "03:00 · An alert for bed 5 sits unread among dozens of others."],
      [5, "05:00 · NEWS2 picks up bed 5 on the next round of observations. The patient is moved to intensive care."],
      [8, "08:00 · Morning. 37 alerts were never opened."]
    ],
    q: "What really went wrong at 03:00?",
    options: [
      "The tool was weakest (late observations) and least watched (separate screen) at the same time: one linked hazard",
      "The night nurses did not do their job",
      "The AI tool is useless and should be removed",
      "The alert threshold was set too high"
    ],
    answer: 0,
    why: "No single person failed. A design choice (the separate screen) combined with a known weakness (late observations at night). Fixing the workflow fixes both.",
    fixes: {
      intro: "Choose the <b>two</b> changes that would do most to stop this happening again.",
      pick: 2,
      options: [
        { id: "handheld", t: "Send alerts to nurses’ handhelds through the patient record", good: 2, why: "Gets alerts to where staff actually work: the root-cause fix." },
        { id: "tune", t: "Re-tune the alert threshold with the nurses, so fewer alerts are sent and more of them matter", good: 2, why: "Cuts alert fatigue, and builds staff trust because they shaped it." },
        { id: "routine", t: "Add a check of the alert screen to each hourly round", good: 1, why: "Helps a little, but adds work and still relies on a screen across the ward." },
        { id: "lower", t: "Lower the threshold so even more patients are flagged at night", good: 0, why: "More alerts to a screen nobody is watching makes things worse." },
        { id: "screen", t: "Buy a second, bigger screen for the nurses’ station", good: 0, why: "Same problem, larger screen. Staff are at bedsides, not at the station." },
        { id: "remind", t: "Email night staff reminding them to check alerts", good: 0, why: "Blames people for a design problem, and changes nothing about how they work." }
      ]
    }
  },

  decision: {
    options: [
      { id: "go", t: "Go: roll out to all 20 medical wards now" },
      { id: "cond", t: "Go with conditions: scale up only once named conditions are met" },
      { id: "extend", t: "Extend the pilot on Wards 7 and 8 for six months to test the fixes, with a fixed end date and stop rule" },
      { id: "stop", t: "Stop: end the pilot and write up what was learned" }
    ],
    conditionsIntro: "Tick every condition you would attach to your recommendation. Leave out anything that would make things worse.",
    conditions: [
      { id: "dcb", t: "Update the DCB0160 safety case and hazard log for every new ward", kind: "essential" },
      { id: "integ", t: "Integrate alerts with the patient record (handhelds) before any new ward goes live", kind: "essential" },
      { id: "dpia", t: "Update the data protection impact assessment for wider use", kind: "essential" },
      { id: "age", t: "Report results every month by age group, ward and time of day", kind: "essential" },
      { id: "patient", t: "Agree a patient leaflet and a one-sentence staff explanation, written with patients", kind: "essential" },
      { id: "off", t: "Agree a switch-off point: pause if under 50% of alerts are looked at within 30 minutes for two months", kind: "essential" },
      { id: "contract", t: "Sign a three-year contract now to lock in the supplier’s discount", kind: "harmful", why: "Locks the trust in before the conditions are proven, with no exit route." },
      { id: "skip", t: "Skip silent-mode checks on new wards to save time", kind: "harmful", why: "Each ward’s patients and habits differ; skipping local checks hides problems." }
    ]
  }
};
