/* Workshop module: From Pilot to Practice (based on Chapters 10 and 11 of
   "A Strategic Guide to AI in Healthcare"). Uses the same engine as the chapters. */
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA.pp = {
  num: "pp",
  label: "Workshop",
  title: "From Pilot to Practice: Clinicians and Technical Teams Together",
  part: "Workshop · built on Chapters 10 and 11",
  tagline: "Most AI tools in healthcare never get beyond the pilot. This workshop shows clinicians and technical teams how to take one decision together: scale it, change it or stop it.",
  minutes: 150,
  reviewNew: 6,
  links: [
    { href: "sim.html", tag: "3D SIMULATION", title: "🏥 Virtual hospital: the night the alerts went quiet", text: "Walk the ward, question eight members of staff, fast-forward a night shift and make the call. Best done after Lesson 3." },
    { href: "facilitator.html", tag: "FOR FACILITATORS", title: "🧑‍🏫 Running this in the room", text: "Timings, printable role cards, debrief questions and answer notes for every activity." }
  ],
  outcomes: [
    "Explain why so many healthcare AI pilots stall, and why clinicians and technical staff often judge the same pilot in different ways.",
    "Design a pilot that can actually answer a question: agreed success measures, a starting baseline, an end date and a stop rule.",
    "Read pilot results critically, including false alarms, missed patients, the gap between a supplier’s figures and local results, and how well the tool works for different groups of patients.",
    "Name the safety, data protection and regulatory checks that must be in place before a tool is used more widely, and who owns each one.",
    "Make and defend a go/no-go decision, and turn it into a plan with owners, conditions, monitoring and a switch-off point."
  ],

  lessons: [
    /* ------------------------------------------------------------------ L1 */
    {
      id: "l1",
      title: "Why AI pilots stall: two languages, one decision",
      minutes: 20,
      icon: "🗣️",
      hook: "A pilot ends. The data scientist says “it works: the accuracy score is 0.84”. The ward manager says “it doesn’t work: my nurses stopped looking at it”. They are both right. So who decides what happens next?",
      teach: [
        { h: "Pilot purgatory", p: "A <b>pilot</b> is a small, time-limited trial of a new tool in a real setting, for example on two wards for six months. <b>Pilot purgatory</b> is the name for what happens when a pilot never ends: it is neither stopped nor rolled out, but extended “for one more quarter” again and again. The tool keeps costing money and staff time, but nobody is ever asked to make the decision." },
        { list: [
          "The pilot had no clear question, so no result can answer it.",
          "Nobody owns the decision at the end, so it drifts.",
          "Success was never agreed in advance, so each group reads the results its own way.",
          "The paperwork (safety case, data protection assessment, contract) only covers the pilot, so scaling up means starting again."
        ] },
        { key: "The technology usually works well enough. What stalls is the move into everyday practice, because the decisions that matter fall in the gaps between clinical, technical and management teams." },
        { h: "Two languages", p: "Different professions mean different things by “it works”. None of them is wrong, but if they are not put side by side before the pilot starts, every group will declare a different result at the end." },
        { table: { head: ["Who", "“It works” usually means…", "What they may miss"], rows: [
          ["Clinician", "Patients are safer, and it fits the way we actually work, including at 3 a.m.", "Whether the result would hold up on a larger or different group of patients"],
          ["Data scientist", "The model’s accuracy is high on the test data", "Whether staff see, trust and act on the alert"],
          ["IT and digital lead", "It is secure, reliable and can be supported", "Whether it changes anything for patients"],
          ["Operations and finance", "It saves time or money, or avoids harm that costs money", "Hidden costs: training, integration, monitoring"],
          ["Patient", "I am safer, I am treated fairly, and someone explains how decisions are made", "(Patients often aren’t asked at all)"]
        ] } },
        { example: "Google tested an AI system for diabetic eye disease in clinics in Thailand. In the laboratory its accuracy was excellent. In the clinics, many photos were rejected as too poor quality, often because of the lighting in the room, and slow internet connections held up results. Nurses and patients found the process frustrating. The researchers (Beede and colleagues, 2020) concluded that the setting around the tool matters as much as the tool itself." },
        { analogy: "Think of a sat-nav. The map can be perfect, but if it loses signal in every tunnel, or the driver keeps the sound off, the car still goes the wrong way. A pilot has to test the whole journey, not just the map." },
        { warn: "Bringing clinicians in at the end to “sign off” is not the same as involving them. The questions a pilot asks are set at the start, so that is when every profession needs to be in the room." }
      ],
      activities: [
        {
          type: "sort",
          title: "Who would say this?",
          intro: "Each statement is one way of saying “the AI works”. Drag it to the group most likely to say it.",
          buckets: ["Clinical", "Technical", "Management"],
          items: [
            { t: "The model scored 0.84 on the test data set.", b: 1, why: "An accuracy score on test data is the technical team’s natural measure." },
            { t: "We spotted two patients getting worse hours earlier than usual.", b: 0, why: "Earlier recognition of deterioration is a clinical outcome." },
            { t: "It stays up 99.9% of the time and passed the security review.", b: 1, why: "Reliability and security are the IT team’s measures of “working”." },
            { t: "It cost less per patient than the agency staff we used to need.", b: 2, why: "Cost per patient is a finance and operations measure." },
            { t: "My team can act on the alert without leaving the bedside.", b: 0, why: "Fit with how clinical staff actually work is a clinical measure." },
            { t: "We can roll it out within next year’s budget.", b: 2, why: "Affordability and budget planning belong to management." },
            { t: "The results stay just as good when the data comes from the night shift.", b: 1, why: "Checking whether performance holds on different data is a technical check, even though it matters clinically." },
            { t: "It reduced unplanned transfers to intensive care.", b: 0, why: "Fewer emergency transfers is a patient outcome that clinicians track." }
          ]
        },
        {
          type: "tf",
          title: "Myth or fact: why pilots stall",
          intro: "Decide whether each statement is a fact or a myth.",
          items: [
            { s: "If an AI tool is accurate enough, it will spread across the hospital on its own.", a: false, why: "Accuracy is necessary but never enough. Workflow, trust, safety paperwork, budgets and a clear decision owner decide whether a tool spreads." },
            { s: "Extending a pilot again and again, without a decision, is a warning sign.", a: true, why: "Repeated extensions with no clear question are the classic sign of pilot purgatory." },
            { s: "Clinicians only need to be involved once the results are in.", a: false, why: "The questions a pilot can answer are fixed at the start. If clinicians are not involved then, the pilot may answer the wrong question." },
            { s: "Different professions can honestly reach opposite conclusions from the same pilot.", a: true, why: "They measure different things. That is why success measures must be agreed together before the pilot begins." },
            { s: "A tool that works well in a laboratory study will work just as well in every clinic.", a: false, why: "Lighting, connections, staffing and patient groups all differ. The Thailand eye-screening study is a well-known example." },
            { s: "Patients’ views are a “nice to have” that can be added after go-live.", a: false, why: "Patients and families will ask how decisions are made. If nobody has thought about it, trust suffers, as the case study in this workshop shows." }
          ]
        },
        {
          type: "recall",
          title: "Flashcards: the language of pilots",
          intro: "Repeat until every card feels easy. These terms come up all through the workshop.",
          cards: [
            { f: "What is a <b>pilot</b>?", b: "A small, time-limited trial of a new tool in a real setting, designed to answer a clear question." },
            { f: "What is <b>pilot purgatory</b>?", b: "A pilot that is never stopped or scaled: it is just extended again and again with no decision." },
            { f: "Name two signs of pilot purgatory.", b: "Any two of: no clear question; no end date; no decision owner; repeated “one more quarter” extensions; paperwork that only covers the pilot." },
            { f: "Why do clinicians and technical teams often disagree about a pilot?", b: "They mean different things by “it works”: patient benefit and workflow fit versus accuracy and reliability." },
            { f: "When should every profession be involved in a pilot?", b: "At the start, when the question and success measures are set, not just at sign-off." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ L2 */
    {
      id: "l2",
      title: "Designing a pilot that can answer a question",
      minutes: 25,
      icon: "🧪",
      hook: "The digital board approved a pilot “to evaluate the tool in practice”. Six months later, nobody can say whether it passed. Why? Because no result could ever have failed it.",
      teach: [
        { h: "A pilot is an experiment", p: "A good pilot is a small experiment with a question, a measurement plan and a decision at the end. “Evaluate the tool” is a wish, not a question. A real question sounds like this: <i>“Does the alert help nurses recognise deterioration earlier on our medical wards, without adding more than 30 minutes of work per shift, for all age groups?”</i>" },
        { steps: [
          "<b>Agree the problem</b> in plain words, with the people who live with it.",
          "<b>Agree three to five success measures</b> that clinical, technical and management staff all accept.",
          "<b>Measure the starting point (the baseline)</b> before the tool is switched on, so you can see what changed.",
          "<b>Check the tool on your own patients first</b>, ideally in “silent mode”, where it runs in the background and nobody sees the alerts.",
          "<b>Set the end date and the stop rule</b>: what result would make you stop early, and what result would make you scale up.",
          "<b>Name the decision owner</b>, the person who must make the call on the end date.",
          "<b>Plan for success from day one</b>: what safety, data protection and contract work would be needed to go wider?"
        ] },
        { key: "Decide what success and failure look like <i>before</i> you see the results. Otherwise people will move the goalposts to fit the result they hoped for." },
        { h: "Silent mode and the baseline", p: "In <b>silent mode</b> (sometimes called shadow mode) the AI tool runs on live data but its alerts are hidden. You can then compare what it would have said with what actually happened, without any risk to patients. The <b>baseline</b> is your “before” picture: how many deteriorations were spotted late, how long nurses spent on observations, and so on. Without it, an improvement cannot be shown." },
        { table: { head: ["Weak success measure", "Stronger version"], rows: [
          ["“Staff like it”", "At least 70% of alerts are looked at within 30 minutes, in every month of the pilot"],
          ["“It is accurate”", "Accuracy on <i>our</i> patients is within 0.05 of the supplier’s figure, for every age group"],
          ["“It saves time”", "Nurses’ time per shift on observations does not rise by more than 10 minutes"],
          ["“It improves safety”", "Fewer unplanned transfers to intensive care than in the six months before the pilot"]
        ] } },
        { warn: "Avoid <b>success theatre</b>: choosing only the measures that are easy to hit. Include at least one measure that the tool could genuinely fail, such as missed deteriorations or performance at night." },
        { analogy: "A pilot without a stop rule is like a drug trial without a safety committee. Everyone hopes it will go well, but nobody has agreed when to say “this is not working”." }
      ],
      activities: [
        {
          type: "order",
          title: "Build the pilot protocol",
          intro: "Put the steps of a well-designed pilot in the right order.",
          items: [
            "Agree the clinical problem with the staff who live with it",
            "Agree shared success measures, including at least one the tool could fail",
            "Measure the baseline before the tool is switched on",
            "Run the tool in silent mode on local patients",
            "Go live on the pilot wards with an end date and a stop rule",
            "Make the go/no-go decision on the agreed date"
          ],
          why: "Each step depends on the one before. You cannot measure improvement without a baseline, and you cannot judge the results fairly unless the success measures were agreed first."
        },
        {
          type: "hunt",
          title: "Red flag hunt: the pilot proposal",
          intro: "Here is an extract from a real-sounding pilot proposal. Tap every phrase that should worry the digital board.",
          passage: "The trust will pilot the DeteriorAlert tool on Wards 7 and 8. [[The aim is to evaluate the tool in practice.|This is a wish, not a question. No result could pass or fail it.]] ((The pilot will last six months.|A fixed length is good, as long as there is a decision at the end.)) [[Success will be judged by the project team once results are available.|Success must be agreed before the results are seen, by clinical, technical and management staff together.]] ((Alerts will appear on a screen at the nurses’ station.|This is a real design choice; it is fine to note it, but the pilot should test whether staff actually see the screen.)) [[If results are promising, the pilot may be extended.|An open-ended extension with no stop rule is how pilots slip into purgatory.]] ((The ward manager and a consultant are on the project group.|Good: clinicians are involved from the start.)) [[The supplier’s published accuracy of 0.84 shows the tool is ready.|A supplier’s figure is not proof of performance on your patients. Check locally first.]] [[Data protection and safety paperwork will be completed for the pilot wards.|Fine for a pilot, but there is no plan for what would be needed to scale up, so a success would stall.]]"
        },
        {
          type: "cloze",
          title: "Fill the gaps: a pilot question that can be answered",
          intro: "Drag the right words into the gaps.",
          text: "Before the tool goes live we measure the {{baseline}}, so we can show what changed. We first run the tool in {{silent}} mode, where alerts are hidden from staff. Every profession agrees the {{success}} measures in advance, and the board sets an end date and a {{stop}} rule. One named person, the decision {{owner}}, makes the call on that date.",
          extra: ["supplier", "extension", "accuracy"],
          why: "These five pieces turn a vague “evaluation” into a real experiment with a decision at the end."
        }
      ]
    },

    /* ------------------------------------------------------------------ L3 */
    {
      id: "l3",
      title: "Reading pilot results without fooling yourself",
      minutes: 30,
      icon: "📊",
      hook: "The tool caught seven patients hours before the usual early warning score did. That sounds like a clear win. But it also raised fourteen alerts per ward every day, and by month five most of them were not being looked at.",
      teach: [
        { h: "Four questions to ask of any results pack", p: "When you are handed pilot results, ask four questions: <b>How many alerts?</b> <b>How many were useful?</b> <b>Who was missed?</b> <b>Does it work for everyone?</b> The answers to all four matter more than any single accuracy score." },
        { table: { head: ["Measure", "Plain-English meaning", "In the case study"], rows: [
          ["Alert volume", "How often the tool interrupts staff", "About 14 alerts per ward per day"],
          ["Alerts that led to action", "Of every alert, how many changed what staff did. The technical name is positive predictive value.", "About 1 in 6, so 5 in 6 were false alarms or did not need action"],
          ["Missed cases", "Patients who got worse but the tool did not flag. The share it does catch is called sensitivity.", "4 patients missed that the usual score caught"],
          ["Accuracy score (AUROC)", "A single score for how well the tool ranks sicker patients above less sick ones. 1.0 is perfect; 0.5 is no better than tossing a coin.", "0.84 from the supplier, but 0.74 on the trust’s own patients"]
        ] } },
        { key: "A drop between the supplier’s figures and your own is normal and expected. Different patients, different equipment and different recording habits all change the result. That is why you check locally before trusting any number." },
        { h: "Alert fatigue", p: "<b>Alert fatigue</b> is what happens when staff receive so many alarms that they start to tune them out. It is a safety risk, not a nuisance: an alert that nobody reads is worse than no alert, because everyone assumes the tool is watching. In the case study, alerts looked at within 30 minutes fell from 61% in the first month to 38% by the fifth." },
        { example: "In 2021, researchers at the University of Michigan checked a widely used sepsis prediction tool on their own patients (Wong and colleagues, <i>JAMA Internal Medicine</i>). Its accuracy score was 0.63, well below what had been reported. It raised alerts for 18% of all patients in hospital, yet still missed about two-thirds of the patients who developed sepsis. Local checking revealed what the published figures did not." },
        { h: "Does it work for everyone?", p: "An average can hide a problem. A tool can do well overall but worse for older patients, for people whose skin colour affects a sensor, or at night, when observations are recorded late or incompletely. Always ask for results broken down by age, sex, ethnicity, ward and time of day. In the case study, two of the four missed patients were over 85 with several long-term conditions." },
        { warn: "Lowering the alert threshold to catch more patients always creates more false alarms. Raising it reduces alarms but misses more patients. There is no perfect setting; the balance is a clinical decision, made with the nurses who will receive the alerts." }
      ],
      activities: [
        {
          type: "tune",
          title: "Tune the alert threshold",
          intro: "The <b>threshold</b> is the risk level at which the tool raises an alert. Move the slider and watch what happens to the four measures. Find the setting that meets all four targets, then lock it in. (Figures are illustrative.)",
          goal: "No more than <b>8 alerts per ward per day</b>, at least <b>80% of deteriorations flagged early</b>, at least <b>25% of alerts leading to action</b>, and at least <b>70% of alerts looked at within 30 minutes</b>.",
          slider: "Alert when predicted risk is above",
          left: "Fewer alerts (strict)",
          right: "More alerts (sensitive)",
          start: 2,
          measures: [
            { name: "Alerts per ward per day", unit: "", max: 30, good: "low", target: 8 },
            { name: "Deteriorations flagged early", unit: "%", max: 100, good: "high", target: 80 },
            { name: "Alerts that led to action", unit: "%", max: 100, good: "high", target: 25 },
            { name: "Alerts looked at within 30 min", unit: "%", max: 100, good: "high", target: 70 }
          ],
          levels: [
            { v: "70% risk (very strict)", m: [1.5, 41, 55, 92], fb: "Almost every alert is useful and staff answer them quickly, but more than half of the patients who get worse are not flagged early. The tool has become too quiet to help." },
            { v: "55% risk", m: [3, 62, 45, 88], fb: "Staff trust these alerts, but too many deteriorations are still missed. Patient safety, the reason for the tool, is not yet being served." },
            { v: "40% risk", m: [6, 78, 34, 80], fb: "Very close. Workload and response are good, but early detection is just below the 80% target. A small step to a more sensitive setting would meet every target." },
            { v: "30% risk", m: [8, 84, 27, 72], fb: "All four targets met. Staff receive a manageable number of alerts, most are answered quickly, and most deteriorations are flagged early. This is the balance point for these targets." },
            { v: "20% risk (the pilot setting)", m: [14, 90, 16, 48], fb: "This is roughly what the pilot used. It flags many patients early on paper, but with 14 alerts a day and only half answered, many of those early warnings are never seen in practice." },
            { v: "15% risk", m: [20, 93, 10, 35], fb: "Nine in ten alerts lead to no action, and most are not looked at within 30 minutes. The tool is catching patients in theory and losing them in practice." },
            { v: "10% risk (very sensitive)", m: [28, 96, 7, 22], fb: "Staff are swamped. Almost every deterioration is flagged, but fewer than a quarter of alerts are looked at in time. This is alert fatigue." }
          ],
          best: [3, 3],
          why: "There is no perfect setting, only a trade-off. The right threshold is agreed with the nurses who receive the alerts, tested in silent mode first, and checked again after go-live, because patients and practice change over time."
        },
        {
          type: "match",
          title: "Match the measure to its meaning",
          intro: "Join each term to its plain-English meaning.",
          pairs: [
            { l: "Positive predictive value", r: "Of all the alerts raised, the share that were real and needed action" },
            { l: "Sensitivity", r: "Of all the patients who got worse, the share the tool flagged" },
            { l: "AUROC accuracy score", r: "How well the tool ranks sicker patients above less sick ones: 1.0 perfect, 0.5 a coin toss" },
            { l: "Alert fatigue", r: "Staff tune out alarms because there are too many of them" },
            { l: "Subgroup performance", r: "How well the tool works for a particular group, such as patients over 85" }
          ]
        },
        {
          type: "mcq",
          title: "Why did the score drop?",
          q: "The supplier reported an accuracy score of 0.84. On the trust’s own patients it was 0.74. What is the most likely explanation?",
          options: [
            "The trust’s data team made a mistake in the calculation.",
            "The tool was trained on different patients, equipment and recording habits from the trust’s own.",
            "The supplier deliberately exaggerated the figure.",
            "Accuracy always falls by exactly 0.1 in every new hospital."
          ],
          answer: 1,
          why: "A drop on local data is common and expected, because hospitals differ in their patients, equipment and the way observations are recorded. That is why every tool should be checked locally before anyone relies on it.",
          hint: "Think about what is different between the supplier’s test data and a real ward."
        },
        {
          type: "rush",
          title: "Speed round: helpful sign or warning sign?",
          intro: "Sort each pilot finding as quickly as you can.",
          seconds: 45,
          buckets: ["Encouraging", "Warning sign"],
          items: [
            { t: "Alerts looked at within 30 minutes fell from 61% to 38%", b: 1 },
            { t: "Seven deteriorations were flagged about 3 hours earlier", b: 0 },
            { t: "Two of four missed patients were over 85", b: 1 },
            { t: "Accuracy on local patients was checked before go-live", b: 0 },
            { t: "Night staff stopped checking the alert screen", b: 1 },
            { t: "Results were broken down by age and time of day", b: 0 },
            { t: "Only 1 in 6 alerts led to a change in care", b: 1 },
            { t: "Nurses helped choose the alert threshold", b: 0 },
            { t: "The tool does worse when observations are recorded late", b: 1 },
            { t: "A baseline was measured before the pilot began", b: 0 }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ L4 */
    {
      id: "l4",
      title: "Safety, governance and the patient’s voice",
      minutes: 25,
      icon: "🛡️",
      hook: "A patient’s daughter asks the ward sister: “Is a computer deciding who gets seen first now?” Nobody on the ward has a clear answer. That moment tells you more about readiness than any accuracy score.",
      teach: [
        { h: "The paperwork must follow the scale", p: "Every AI tool used in NHS care sits inside a set of safety, data protection and regulatory checks. Most are completed for the pilot. The common mistake is forgetting that <b>each one has to be updated before the tool is used more widely</b>. If they are not, a successful pilot stalls for months while the paperwork catches up." },
        { table: { head: ["Check", "What it is, in plain English", "Who owns it"], rows: [
          ["DCB0129", "The NHS clinical safety standard for <b>makers</b> of health IT. The supplier must identify what could go wrong (hazards) and show how each risk is controlled.", "The supplier, with its own clinical safety officer"],
          ["DCB0160", "The matching standard for the <b>organisation using</b> the tool. The trust must check the hazards in its own setting, keep a hazard log and write a safety case.", "The trust’s clinical safety officer"],
          ["DPIA", "A data protection impact assessment. Required under UK GDPR when using personal data in ways that could put people at high risk, for example health data used by AI.", "The trust, advised by its data protection officer"],
          ["Medical device rules", "Software that helps diagnose or treat patients may count as a medical device and must be registered and marked under rules overseen by the MHRA (the UK medicines and medical devices regulator).", "The supplier, checked by the trust"],
          ["DTAC", "The Digital Technology Assessment Criteria: the NHS’s standard checklist for clinical safety, data protection, security, interoperability and usability.", "The supplier completes it; the trust reviews it"]
        ] } },
        { key: "A safety case and a data protection assessment written for two pilot wards do not cover twenty. Plan the paperwork for scale-up while the pilot is still running." },
        { h: "The clinical safety officer", p: "A <b>clinical safety officer</b> is a registered clinician, trained in clinical risk management, who signs off that a digital tool is safe to use in a particular setting. They keep the <b>hazard log</b>, a living list of everything that could go wrong, such as “alert not seen at night”, with what is being done about each risk. In our case, the hazard of night-shift staff not checking a separate screen should be in that log." },
        { h: "The patient’s voice", p: "Patients and families have a right to know when AI is being used in their care, and to have it explained simply. That does not mean a technical briefing. It means a short, honest answer that every member of staff can give: <i>“The computer helps us notice if you might be getting worse. A nurse or doctor always makes the decisions about your care.”</i> Involving a patient representative from the start also helps spot fairness problems early." },
        { warn: "If the tool works less well for some groups, such as very elderly patients, that is a fairness issue as well as a clinical one. It belongs in both the hazard log and the trust’s equality impact assessment." }
      ],
      activities: [
        {
          type: "match",
          title: "Match the check to its purpose",
          intro: "Join each safety or governance check to what it does.",
          pairs: [
            { l: "DCB0129", r: "The supplier shows what could go wrong with its product and how each risk is controlled" },
            { l: "DCB0160", r: "The hospital checks the risks of using the tool in its own wards and writes a safety case" },
            { l: "DPIA", r: "An assessment of the risks to people’s personal data, and how they are reduced" },
            { l: "Hazard log", r: "A living list of everything that could go wrong, and what is being done about each one" },
            { l: "DTAC", r: "The NHS checklist covering safety, data protection, security, interoperability and usability" }
          ]
        },
        {
          type: "sort",
          title: "Whose job is it?",
          intro: "Drag each task to the organisation responsible for it.",
          buckets: ["Supplier", "Hospital trust", "Both"],
          items: [
            { t: "Writing the product’s DCB0129 safety case", b: 0, why: "DCB0129 applies to the maker of the health IT system." },
            { t: "Writing the safety case for using the tool on our wards (DCB0160)", b: 1, why: "DCB0160 applies to the organisation deploying the system." },
            { t: "Completing the data protection impact assessment for our patients’ data", b: 1, why: "The trust is responsible for how its patients’ data is used, advised by its data protection officer." },
            { t: "Registering the software as a medical device, if it counts as one", b: 0, why: "Registration and marking is the manufacturer’s responsibility, though the trust should check it has been done." },
            { t: "Agreeing what happens if the tool’s performance drifts over time", b: 2, why: "Monitoring after go-live needs both: the trust watches local results and the supplier must fix and report problems." },
            { t: "Explaining to patients how the tool is used in their care", b: 1, why: "The trust’s staff are the ones patients ask, so the trust owns this." },
            { t: "Sharing information about any incidents or near misses", b: 2, why: "Both sides must report and learn from incidents, which is why it should be written into the contract." }
          ]
        },
        {
          type: "scenario",
          title: "The question at the bedside",
          intro: "You are the ward manager. Choose how to respond.",
          setup: "During visiting time, a patient’s daughter stops you. “My dad’s nurse said a computer flagged him earlier. Is a computer deciding who gets seen first now? Nobody told us.”",
          start: "s1",
          steps: [
            { id: "s1", text: "What do you say first?", choices: [
              { label: "“The computer helps us notice if a patient might be getting worse. A nurse or doctor always makes the decisions about your dad’s care.”", score: 2, fb: "Honest, simple and reassuring, without hiding the tool. This is the kind of answer every member of staff should be able to give.", next: "s2" },
              { label: "“Don’t worry, it’s just a pilot. It doesn’t really affect anything.”", score: 0, fb: "This is untrue (it did flag her father) and it undermines trust. If the tool did not affect care, why use it?", next: "s2" },
              { label: "“I’ll have to ask the IT team. I don’t really know how it works.”", score: 1, fb: "Honest, but it leaves the family worried. Ward staff need a short, simple explanation they can give themselves.", next: "s2" }
            ] },
            { id: "s2", text: "The daughter asks whether she can see what the computer said about her father. What next?", choices: [
              { label: "Explain that alerts are part of his care record, offer to talk it through, and note the question for the project team.", score: 2, fb: "Good. Families can ask about their relative’s care, and noting the question helps the project team plan how to explain the tool.", next: "s3" },
              { label: "Say the AI’s output is confidential to the supplier.", score: 0, fb: "Not correct. Information used in a patient’s care is part of their record, not the supplier’s secret.", next: "s3" },
              { label: "Print the raw alert log from the separate screen and hand it over.", score: 1, fb: "Well meant, but raw logs may include other patients and are hard to read. Share information properly, through the normal process.", next: "s3" }
            ] },
            { id: "s3", text: "After visiting time, what should happen to this conversation?", choices: [
              { label: "Raise it with the project group: they need a patient leaflet, a simple staff script and a patient representative on the group.", score: 2, fb: "Exactly. One family’s question shows a gap in the whole project. Fixing it before scale-up protects trust on twenty wards, not just one.", next: null },
              { label: "Nothing. It went fine in the end.", score: 0, fb: "The same question will come up again on every ward. Without a plan, staff will give different and sometimes wrong answers.", next: null },
              { label: "Email the supplier to ask for a leaflet.", score: 1, fb: "A leaflet may help, but explaining care to patients is the trust’s job, and patients should help write it.", next: null }
            ] }
          ]
        },
        {
          type: "memory",
          title: "Memory game: governance terms",
          intro: "Flip the cards to match each term with its meaning.",
          pairs: [
            { a: "DCB0160", b: "Safety standard for the hospital using the tool" },
            { a: "DCB0129", b: "Safety standard for the maker of the tool" },
            { a: "DPIA", b: "Checks the risks to people’s personal data" },
            { a: "Clinical safety officer", b: "Clinician who signs off the tool as safe here" },
            { a: "MHRA", b: "UK regulator for medicines and medical devices" },
            { a: "Hazard log", b: "Living list of what could go wrong" }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ L5 */
    {
      id: "l5",
      title: "The go/no-go decision and the road to practice",
      minutes: 30,
      icon: "🚦",
      hook: "The pilot is over. The board meets on Thursday. There are four doors: go, go with conditions, extend, or stop. Each one can be right. What makes it right is the reasoning, the conditions and the people who own them.",
      teach: [
        { h: "Four options, not two", p: "A go/no-go decision is rarely a simple yes or no. Most good decisions land in the middle." },
        { table: { head: ["Option", "When it fits", "What it needs"], rows: [
          ["<b>Go</b>", "Clear benefit, safe, fits the workflow, works for all groups, affordable", "A roll-out plan, monitoring and a switch-off point"],
          ["<b>Go with conditions</b>", "Benefit is real but named gaps must be fixed first", "Each condition with an owner, a measure and a date"],
          ["<b>Extend the pilot</b>", "Promising, but a specific question is still unanswered", "One clear question, a fixed end date and a stop rule"],
          ["<b>Stop</b>", "No clear benefit, or risks cannot be controlled", "A short write-up of what was learned, shared widely"]
        ] } },
        { key: "Stopping a pilot is not a failure if you learn from it. The failure is spending another year in pilot purgatory without deciding." },
        { h: "Six questions before you decide", p: "Before choosing, test the evidence against six questions: <b>Benefit</b>: did patients gain? <b>Safety</b>: are the risks controlled at the larger scale? <b>Workflow</b>: does it fit how staff actually work, day and night? <b>Fairness</b>: does it work for every group of patients? <b>Value</b>: is it affordable, including hidden costs? <b>Readiness</b>: are the paperwork, contract and training ready for scale?" },
        { h: "The Toothbrush Test", p: "The book’s <b>Toothbrush Test</b> asks a simple question: would staff choose to use this tool every day, the way they use a toothbrush, because it makes their work easier rather than harder? A tool that needs constant reminders, sits on a separate screen or adds clicks rarely passes. If it fails the test, fix the workflow before you scale." },
        { h: "From decision to practice", p: "Chapter 11 describes scaling as building an <b>organisational central nervous system</b>: the connections that carry information to the right person at the right time. In practice that means linking the tool to the electronic patient record (often using a data-sharing standard called FHIR), so alerts reach the nurse’s handheld rather than a screen nobody watches." },
        { steps: [
          "<b>Fix the conditions</b> agreed at the decision, each with an owner and a date.",
          "<b>Integrate</b> the tool with the patient record so alerts arrive where staff already work.",
          "<b>Update the paperwork</b>: safety case, hazard log, data protection assessment and contract for the wider roll-out.",
          "<b>Train staff and brief patients</b>, including a simple explanation every member of staff can give.",
          "<b>Roll out in phases</b>, a few wards at a time, checking results at each step.",
          "<b>Monitor continuously</b> for drift (performance quietly getting worse as patients or practice change), with a pre-agreed point at which the tool is switched off."
        ] },
        { warn: "Always agree a <b>switch-off point</b> in advance, such as “if fewer than half of alerts are looked at within 30 minutes for two months running, we pause the tool”. Deciding this in the middle of a problem is much harder." }
      ],
      activities: [
        {
          type: "sort",
          title: "Before scale-up, or after go-live?",
          intro: "Some conditions must be met before the tool goes to more wards. Others are things you monitor once it is live. Drag each one into the right box.",
          buckets: ["Must be done before scale-up", "Monitor after go-live"],
          items: [
            { t: "Update the safety case and hazard log for all medical wards", b: 0, why: "The trust cannot safely use the tool on new wards until DCB0160 covers them." },
            { t: "Update the data protection impact assessment", b: 0, why: "The DPIA covered the pilot only; wider use of patient data needs an updated assessment first." },
            { t: "Fix how alerts reach night staff", b: 0, why: "The night-shift gap is a known hazard. Scaling it to twenty wards would multiply the risk." },
            { t: "Check accuracy each month for patients over 85", b: 1, why: "Once the gap is understood and controlled, it must be watched continuously after go-live." },
            { t: "Track the share of alerts looked at within 30 minutes", b: 1, why: "This is a key measure of alert fatigue, to be monitored for as long as the tool is in use." },
            { t: "Agree a patient leaflet and a simple staff script", b: 0, why: "Patients and families on every new ward will ask. The explanation must be ready before they do." },
            { t: "Watch for drift as patients and practice change", b: 1, why: "Drift can only be seen over time, so it is part of monitoring after go-live." },
            { t: "Agree the switch-off point", b: 0, why: "The switch-off rule must be agreed in advance, not invented during a problem." }
          ]
        },
        {
          type: "allocate",
          title: "Budget game: the first year of scale-up",
          intro: "The board has approved <b>100 units</b> of money for the first year of scaling the tool to all medical wards. Move the sliders to split it. Every unit must be spent.",
          total: 100,
          unit: "",
          categories: [
            { name: "Supplier licence for 20 wards", tip: "The contract cost of the tool itself", ideal: [35, 50], ok: "A realistic share. The licence is the biggest single cost, but not the only one.", low: "The supplier’s licence cannot be squeezed this far; the tool would not be available on all wards.", high: "Too much on the licence leaves too little for the work that makes it succeed." },
            { name: "Integration with the patient record", tip: "So alerts reach handhelds, not a separate screen", ideal: [20, 30], ok: "Good. Integration fixes the main cause of alert fatigue seen in the pilot.", low: "Without integration, the separate-screen problem from the pilot will repeat on twenty wards.", high: "Integration matters, but it should not crowd out training and monitoring." },
            { name: "Training and patient information", tip: "Staff training, staff script, patient leaflet", ideal: [10, 20], ok: "Well judged. People need to know why and how to use the tool, and patients need a clear explanation.", low: "Too little. Untrained staff and confused families are how trust is lost.", high: "Generous, but leaves too little for integration or monitoring." },
            { name: "Monitoring, safety and evaluation", tip: "Monthly checks, drift monitoring, safety officer time", ideal: [10, 20], ok: "Good. Continuous monitoring is what keeps a live tool safe.", low: "Too little. Without monitoring, drift and fairness problems go unseen.", high: "More than needed in year one, at the expense of integration or training." }
          ]
        },
        {
          type: "order",
          title: "The road from decision to practice",
          intro: "Put the scale-up steps in a sensible order.",
          items: [
            "Fix the conditions agreed at the go/no-go decision",
            "Integrate the tool with the electronic patient record",
            "Update the safety case, hazard log, DPIA and contract",
            "Train staff and prepare patient information",
            "Roll out to a few wards at a time, checking results at each step",
            "Monitor continuously, with an agreed switch-off point"
          ],
          why: "Fix and prepare first, then roll out in phases, then keep watching. Rolling out before the paperwork and integration are ready is how pilot problems get copied onto every ward."
        },
        {
          type: "recall",
          title: "Flashcards: making the decision",
          intro: "Repeat until every card feels easy.",
          cards: [
            { f: "Name the four go/no-go options.", b: "Go; go with conditions; extend the pilot; stop." },
            { f: "What three things does every condition need?", b: "An owner, a measure and a date." },
            { f: "What is the Toothbrush Test?", b: "Would staff choose to use the tool every day because it makes their work easier rather than harder?" },
            { f: "What is drift?", b: "A tool’s performance quietly getting worse over time as patients, equipment or practice change." },
            { f: "Why agree a switch-off point in advance?", b: "Because deciding when to pause a tool is much harder in the middle of a problem." },
            { f: "Name the six questions to ask before deciding.", b: "Benefit, safety, workflow, fairness, value and readiness." }
          ]
        }
      ]
    }
  ],

  finalQuiz: {
    title: "Workshop quiz: from pilot to practice",
    questions: [
      { q: "What is “pilot purgatory”?", options: ["A pilot that is stopped early for safety reasons", "A pilot that is extended again and again without a decision", "A pilot run on too few patients", "A pilot that the supplier pays for"], answer: 1, why: "Pilot purgatory is the endless extension of a pilot that is never scaled or stopped." },
      { q: "Which of these is a pilot question that can actually be answered?", options: ["Evaluate the tool in practice", "See whether staff like the tool", "Does the alert help nurses spot deterioration earlier, without adding more than 30 minutes of work per shift, for all age groups?", "Prove the supplier’s accuracy figure"], answer: 2, why: "It names the benefit, the cost to staff and the groups it must work for, so a result can pass or fail it." },
      { q: "Why run a tool in silent mode first?", options: ["To save electricity", "To compare what it would have said with what happened, without risk to patients", "So staff do not need training", "Because the regulator requires it for all software"], answer: 1, why: "Silent mode checks performance on local patients while the alerts are hidden, so nobody acts on an untested tool." },
      { q: "In the case study, about 1 in 6 alerts led to a change in care. What does that tell you?", options: ["The tool is 1/6 accurate", "About 5 in every 6 alerts did not need action, a risk for alert fatigue", "One patient in six was missed", "Staff ignored 1 in 6 alerts"], answer: 1, why: "This is the positive predictive value. A low value means many alerts that need no action, which drives alert fatigue." },
      { q: "An AUROC accuracy score of 0.5 means:", options: ["Perfect performance", "Half of patients were treated", "No better than tossing a coin", "The tool was right 50 times"], answer: 2, why: "On this scale 1.0 is perfect and 0.5 means the tool ranks patients no better than chance." },
      { q: "Which standard covers the hospital’s own safety case for using a digital tool?", options: ["DCB0129", "DCB0160", "DTAC", "ISO 9001"], answer: 1, why: "DCB0160 applies to the organisation deploying health IT; DCB0129 applies to the maker." },
      { q: "The data protection impact assessment covered only the two pilot wards. What must happen before wider use?", options: ["Nothing, one DPIA covers the whole trust", "It must be updated to cover the wider use of patient data", "The supplier must write a new one", "Patients must each sign a form"], answer: 1, why: "Paperwork written for a pilot does not cover wider use. The DPIA must be updated before scale-up." },
      { q: "Which is the best example of a condition attached to a “go with conditions” decision?", options: ["“Improve night-shift response”", "“The ward manager will make alerts reach night staff’s handhelds by March, measured by at least 70% of alerts looked at within 30 minutes”", "“Staff should try harder”", "“The supplier will improve the tool”"], answer: 1, why: "A good condition has an owner, a measure and a date." },
      { q: "What is drift?", options: ["Staff moving between wards", "A tool’s performance getting worse over time as patients or practice change", "A delay in the project plan", "Data moving to the cloud"], answer: 1, why: "Drift is why monitoring continues for as long as a tool is in use." },
      { q: "The tool works less well for patients over 85. Which statement is right?", options: ["It is only a technical issue for the supplier", "It is a fairness issue as well as a clinical one, and belongs in the hazard log", "Averages are what matter, so it can be ignored", "Older patients should be excluded from the tool"], answer: 1, why: "Weaker performance for a group is both a safety and a fairness issue, to be recorded, controlled and monitored." }
    ]
  },

  capstone: {
    type: "scenario",
    title: "Boss level: the board meeting",
    intro: "You chair the trust’s AI Governance Council. The deterioration alert pilot has ended, and the board wants your recommendation. Every choice has consequences.",
    setup: "The results: seven patients flagged about three hours earlier than the usual score, four missed, local accuracy 0.74 (supplier 0.84), about 14 alerts per ward per day, only 1 in 6 leading to action, and alerts looked at within 30 minutes down from 61% to 38%. Night staff stopped checking the separate screen. The safety case and data protection assessment cover the pilot wards only. Integration with the patient record would take nine months. Scaling to 20 wards costs about £480,000 a year, and there is budget for one new digital project.",
    start: "b1",
    steps: [
      { id: "b1", text: "The supplier’s representative opens the meeting: “The tool works. Let’s sign for all 20 wards today and fix the details later.” How do you respond?", choices: [
        { label: "Thank them, then ask each role in the room to summarise what only they know before any decision is made.", score: 2, fb: "Strong. The night-shift gap, the over-85s and the paperwork limits only surface when every role speaks.", next: "b2" },
        { label: "Agree: the board wants a quick win and the early detection results are impressive.", score: 0, fb: "Risky. Signing now would copy the pilot’s problems onto twenty wards, with paperwork that does not cover them.", next: "b2" },
        { label: "Say the decision is technical and ask the data scientist to decide.", score: 1, fb: "The data scientist’s view matters, but this decision also needs clinical, safety, financial and patient perspectives.", next: "b2" }
      ] },
      { id: "b2", text: "The ward manager explains that night staff stopped checking the screen. The data scientist adds that the tool is weaker when observations are recorded late, mostly at night. What do you make of this?", choices: [
        { label: "It is one linked problem: the tool is weakest and least watched at the same time of day. It must be fixed before any scale-up.", score: 2, fb: "Exactly. Two facts from two roles combine into the biggest hazard in the pilot. This is why mixed teams matter.", next: "b3" },
        { label: "It is a staffing issue for the nursing directorate, not an AI issue.", score: 0, fb: "The separate screen is a design choice with safety consequences. Workflow is part of the tool.", next: "b3" },
        { label: "Lower the alert threshold so more patients are flagged at night.", score: 0, fb: "More alerts to a screen nobody is watching makes alert fatigue worse, not better.", next: "b3" }
      ] },
      { id: "b3", text: "Which recommendation do you take to the board?", choices: [
        { label: "Go with conditions: scale only after integration, updated safety and data protection paperwork, a fix for night shifts, and a patient explanation, each with an owner and a date.", score: 2, fb: "A strong, defensible choice that keeps the benefit while dealing with the known risks.", next: "b4" },
        { label: "Extend the pilot on the two wards for six months, testing alerts on handhelds at night, with a fixed end date and stop rule.", score: 2, fb: "Also defensible, provided the extension answers one clear question and ends with a real decision.", next: "b4" },
        { label: "Go: roll out to all 20 wards now.", score: 0, fb: "This ignores the night-shift hazard, the over-85s gap and paperwork that only covers the pilot.", next: "b4" },
        { label: "Stop: the tool missed four patients.", score: 1, fb: "Defensible if you also record what was learned, but it throws away a real benefit that may be fixable.", next: "b4" }
      ] },
      { id: "b4", text: "The finance director reminds you that only one new digital project can be funded next year. What do you add to the recommendation?", choices: [
        { label: "Show the full cost (licence, integration, training, monitoring) against the benefit, and agree what would be paused to make room.", score: 2, fb: "Honest and complete. Hidden costs are a common reason scale-ups run out of money halfway.", next: "b5" },
        { label: "Quote only the licence cost to make the case look stronger.", score: 0, fb: "This hides integration and monitoring costs, which will surface later and damage trust in the council.", next: "b5" },
        { label: "Ask the supplier for a discount and leave it there.", score: 1, fb: "A discount helps, but the board still needs the full picture of costs and benefits.", next: "b5" }
      ] },
      { id: "b5", text: "Finally, how will you know if things go wrong after go-live?", choices: [
        { label: "Agree monthly reporting on alerts answered, missed cases and results by age group, with a pre-agreed switch-off point.", score: 2, fb: "Excellent. Monitoring with a switch-off rule is what keeps a live tool safe as patients and practice change.", next: null },
        { label: "Rely on staff to report problems through the incident system.", score: 1, fb: "Incident reporting matters, but it will not reveal slow drift or gaps for particular patient groups.", next: null },
        { label: "Review it again in three years.", score: 0, fb: "Far too late. Drift and alert fatigue can develop within months.", next: null }
      ] }
    ]
  },

  takeaways: [
    "Most AI pilots stall not because the technology fails, but because the decisions fall between clinical, technical and management teams.",
    "Agree a real question, shared success measures, a baseline, an end date, a stop rule and a decision owner before the pilot starts.",
    "Read results with four questions: how many alerts, how many useful, who was missed, and does it work for everyone?",
    "Alert fatigue is a safety risk. The workflow, such as a separate screen, is part of the tool.",
    "Safety cases, hazard logs and data protection assessments written for a pilot do not cover wider use.",
    "Choose between go, go with conditions, extend and stop, and give every condition an owner, a measure and a date.",
    "Scale in phases, integrate with the patient record, and monitor for drift with a switch-off point agreed in advance."
  ],

  glossary: [
    { term: "Pilot", def: "A small, time-limited trial of a new tool in a real setting, designed to answer a clear question." },
    { term: "Pilot purgatory", def: "When a pilot is extended again and again without ever being scaled up or stopped." },
    { term: "Baseline", def: "The “before” picture, measured before the tool is switched on, so you can show what changed." },
    { term: "Silent mode", def: "Running an AI tool on live data with its alerts hidden, to check performance without risk to patients. Also called shadow mode." },
    { term: "Stop rule", def: "A result agreed in advance that would make you end a pilot early." },
    { term: "Success measure", def: "A specific, agreed sign that the pilot worked, such as “70% of alerts looked at within 30 minutes”." },
    { term: "NEWS2", def: "The National Early Warning Score 2, used across the NHS to add up routine observations and spot patients who are getting worse." },
    { term: "Alert threshold", def: "The risk level at which an AI tool raises an alert. Lower thresholds give more alerts and fewer missed patients; higher thresholds the opposite." },
    { term: "Positive predictive value", def: "Of all the alerts raised, the share that were real and needed action." },
    { term: "Sensitivity", def: "Of all the patients who actually got worse, the share the tool flagged." },
    { term: "AUROC", def: "Area under the receiver operating characteristic curve: a single accuracy score from 0.5 (a coin toss) to 1.0 (perfect) for how well a tool ranks sicker patients above less sick ones." },
    { term: "Alert fatigue", def: "Staff tune out alarms because they receive too many, so important ones are missed." },
    { term: "Subgroup performance", def: "How well a tool works for a particular group of patients, such as people over 85." },
    { term: "Drift", def: "A tool’s performance quietly getting worse over time as patients, equipment or practice change." },
    { term: "DCB0129", def: "The NHS clinical risk management standard for manufacturers of health IT systems." },
    { term: "DCB0160", def: "The NHS clinical risk management standard for organisations deploying and using health IT systems." },
    { term: "Clinical safety officer", def: "A registered clinician trained in clinical risk management who signs off a digital tool as safe for a particular setting." },
    { term: "Hazard log", def: "A living record of everything that could go wrong with a digital tool, and how each risk is controlled." },
    { term: "DPIA", def: "Data protection impact assessment: required under UK GDPR for processing personal data that could put people at high risk." },
    { term: "MHRA", def: "The Medicines and Healthcare products Regulatory Agency, the UK regulator for medicines and medical devices, including some software." },
    { term: "DTAC", def: "Digital Technology Assessment Criteria: the NHS standard checklist for digital health tools." },
    { term: "FHIR", def: "Fast Healthcare Interoperability Resources: a common standard that lets health IT systems share data." },
    { term: "Toothbrush Test", def: "From the book: would staff choose to use a tool every day because it makes their work easier rather than harder?" },
    { term: "Switch-off point", def: "A result agreed in advance at which a live tool is paused for review." },
    { term: "Go with conditions", def: "A decision to scale up only after named gaps are fixed, each with an owner, a measure and a date." }
  ],

  /* Spaced-repetition deck for the Daily review tab. Short, single-idea questions. */
  review: [
    { q: "A pilot keeps being extended “for one more quarter”. This is called:", options: ["A phased roll-out", "Pilot purgatory", "Silent mode", "Drift"], answer: 1, why: "Repeated extensions without a decision are pilot purgatory." },
    { q: "When should clinicians be involved in designing a pilot?", options: ["At the start", "At sign-off", "Only if something goes wrong", "After go-live"], answer: 0, why: "The questions a pilot can answer are set at the start." },
    { q: "The “before” measurement taken ahead of switching a tool on is the:", options: ["Threshold", "Baseline", "Hazard log", "Stop rule"], answer: 1, why: "The baseline lets you show what actually changed." },
    { q: "In silent mode, alerts are:", options: ["Sent to doctors only", "Hidden from staff", "Sent to patients", "Printed daily"], answer: 1, why: "Silent mode tests performance on live data without anyone acting on untested alerts." },
    { q: "A result agreed in advance that would end a pilot early is a:", options: ["Stop rule", "Success measure", "Baseline", "Condition"], answer: 0, why: "The stop rule protects patients and prevents endless pilots." },
    { q: "Lowering the alert threshold usually gives:", options: ["Fewer alerts and more missed patients", "More alerts and fewer missed patients", "No change", "Better accuracy for everyone"], answer: 1, why: "More sensitive settings flag more patients, at the cost of more false alarms." },
    { q: "Only 1 in 6 alerts led to action. Which measure is this?", options: ["Sensitivity", "Positive predictive value", "AUROC", "Baseline"], answer: 1, why: "Positive predictive value is the share of alerts that were real and needed action." },
    { q: "An AUROC score of 1.0 means:", options: ["A coin toss", "Perfect ranking of sicker patients", "One alert per day", "One missed patient"], answer: 1, why: "1.0 is perfect; 0.5 is no better than chance." },
    { q: "Supplier accuracy 0.84, local accuracy 0.74. The best response is:", options: ["Trust the supplier’s figure", "Treat the local figure as the one that matters and investigate why", "Ignore both", "Stop the pilot at once"], answer: 1, why: "Local performance is what your patients will experience." },
    { q: "Staff tuning out alarms because there are too many is:", options: ["Alert fatigue", "Drift", "Bias", "Purgatory"], answer: 0, why: "Alert fatigue is a safety risk, not a nuisance." },
    { q: "Which standard does the hospital deploying a digital tool follow?", options: ["DCB0129", "DCB0160", "DTAC", "FHIR"], answer: 1, why: "DCB0160 is for deploying organisations; DCB0129 is for manufacturers." },
    { q: "Which standard does the supplier of a digital tool follow?", options: ["DCB0129", "DCB0160", "DPIA", "NEWS2"], answer: 0, why: "DCB0129 covers manufacturers of health IT." },
    { q: "Who signs off a digital tool as safe for a particular setting?", options: ["The supplier’s sales lead", "The clinical safety officer", "The finance director", "The IT helpdesk"], answer: 1, why: "A trained clinical safety officer signs off the safety case." },
    { q: "A living list of what could go wrong with a tool is the:", options: ["Hazard log", "Business case", "Baseline", "Contract"], answer: 0, why: "The hazard log records each hazard and how it is controlled." },
    { q: "A DPIA assesses risks to:", options: ["The supplier’s profits", "People’s personal data", "Network speed", "Staff rotas"], answer: 1, why: "A data protection impact assessment is required under UK GDPR for high-risk processing." },
    { q: "Every condition in a “go with conditions” decision needs:", options: ["A supplier quote", "An owner, a measure and a date", "A patient signature", "A new pilot"], answer: 1, why: "Without these three, a condition is just a hope." },
    { q: "The Toothbrush Test asks whether staff would:", options: ["Use the tool every day because it makes work easier", "Clean the equipment", "Pass an exam", "Read the manual"], answer: 0, why: "Tools that make work harder are quietly abandoned." },
    { q: "A tool’s performance getting worse over time is called:", options: ["Alert fatigue", "Drift", "Sensitivity", "Scaling"], answer: 1, why: "Drift is why monitoring continues after go-live." },
    { q: "A switch-off point should be agreed:", options: ["In advance", "During a problem", "Only if patients complain", "Never"], answer: 0, why: "It is much harder to decide when to pause a tool in the middle of a problem." },
    { q: "Linking the tool to the patient record so alerts reach handhelds mainly helps with:", options: ["Alert fatigue and missed alerts", "Licence costs", "The supplier’s safety case", "Patient leaflets"], answer: 0, why: "Alerts that arrive where staff already work are far more likely to be seen and acted on." },
    { q: "The tool is weaker for patients over 85. This is:", options: ["Only a technical detail", "A safety and fairness issue for the hazard log", "Irrelevant if the average is good", "The patient’s responsibility"], answer: 1, why: "Gaps for particular groups must be recorded, controlled and monitored." },
    { q: "Which pair of options are both valid outcomes of a go/no-go decision?", options: ["Extend and stop", "Ignore and delay", "Hide and wait", "Sign and forget"], answer: 0, why: "The four options are go, go with conditions, extend and stop." }
  ]
};
