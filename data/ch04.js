window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA[4] = {
  num: 4,
  title: "Learning from Failure: Why Healthcare AI Projects Go Wrong",
  part: "Part I: Strategic Foundations",
  tagline: "Most healthcare AI failures are predictable and preventable, so learning how they happen is the cheapest safety measure you have.",
  minutes: 55,
  outcomes: [
    "After this chapter you can sort a failed AI project's problems into four groups: technology, strategy, governance and culture.",
    "After this chapter you can explain what went wrong with IBM Watson Health and name six lessons any hospital can borrow.",
    "After this chapter you can describe, in plain English, how biased data can lead all the way to clinicians ignoring an AI tool.",
    "After this chapter you can set out the checks needed before go-live, during live use and after deployment.",
    "After this chapter you can explain why big-name companies struggled in primary care even with strong technology.",
    "After this chapter you can explain how unclear or ignored rules make a failing project worse."
  ],
  lessons: [
    {
      id: "l1",
      title: "The failure paradox and the four-box map",
      minutes: 10,
      icon: "🗺️",
      hook: "An AI tool beats the doctors in a trial. Two years later, nobody on the ward uses it. What happened in between?",
      teach: [
        { h: "The paradox", p: "AI often works well in controlled research. Yet a review in <i>The Lancet Digital Health</i> found that fewer than half of 130 AI clinical trials showed a clear, statistically significant benefit. Fewer than a third had real-world clinical impact." },
        { list: [
          "Fewer than 50% of 130 AI clinical trials showed a statistically significant benefit (Lancet Digital Health review).",
          "Fewer than 33% had real-world impact beyond the trial.",
          "About 70% of AI projects fail to scale beyond the pilot stage (McKinsey, 2024).",
          "62% of NHS clinicians were reported to use at least one AI tool their employer had not approved (Wolters Kluwer Health, 2024)."
        ] },
        { key: "The chapter's big idea: the algorithm usually works. What fails is the governance, strategy, data and culture around it." },
        { h: "The Healthcare AI Failure Taxonomy", p: "A taxonomy is just a sorting system. This one has four boxes, and every failure story fits at least one." },
        { table: { head: ["Box", "In plain English", "Typical example"], rows: [
          ["Technology", "The plumbing does not work", "AI cannot read the hospital's record system; it slows down when 5,000 patients replace 50"],
          ["Strategy", "The plan was wrong", "Picking AI because a rival did; no exit clause in the contract"],
          ["Governance", "Nobody was watching", "No AI Governance Council; no bias check; no consent framework"],
          ["Culture", "People were left out", "Clinicians not consulted; staff quietly using unapproved tools"]
        ] } },
        { analogy: "Think of a new hospital wing. The building (technology) may be perfect, but without a sensible reason to build it (strategy), safety inspectors (governance) and staff who want to work there (culture), it stays empty." },
        { warn: "Real failures rarely sit in one box. Watson, Amazon and others failed across all four at once. The taxonomy's value is spotting which box your organisation is weakest in <i>before</i> go-live." }
      ],
      activities: [
        {
          type: "tf",
          title: "Myth or fact: why AI fails",
          intro: "Decide whether each statement is true or false.",
          items: [
            { s: "The main message of this chapter is that healthcare AI does not work.", a: false, why: "The chapter says AI that works in research often fails in real hospitals because of the conditions around it. Studying failure shows what must be in place for success." },
            { s: "Most real AI failures sit neatly in just one of the four boxes.", a: false, why: "Real failures such as Watson typically cut across all four boxes at the same time." },
            { s: "Signing a contract with no exit clause is a strategy failure.", a: true, why: "A weak plan, including lock-in with no way out, belongs in the strategy box." },
            { s: "If a hospital's records system cannot talk to the AI tool, that is a technology failure.", a: true, why: "Incompatible record formats are a classic technology failure: the plumbing does not connect." },
            { s: "Banning all unapproved AI tools is the best answer to clinicians using them.", a: false, why: "With so many clinicians already using them, a ban is hard to enforce and drives use underground. The chapter suggests acknowledging it, classifying risk and offering a simple approval route." },
            { s: "A pilot with 50 patients proves the tool will work at full hospital volume.", a: false, why: "Scalability must be tested before deployment. A tool that is quick with 50 patients can crawl with 5,000." }
          ]
        },
        {
          type: "match",
          title: "Match the box to its meaning",
          intro: "Join each failure box to its plain-English description.",
          pairs: [
            { l: "Technology failure", r: "The tool cannot connect to, or cope with, the hospital's systems" },
            { l: "Strategy failure", r: "A poor plan: wrong use case, no exit route, hype ahead of evidence" },
            { l: "Governance failure", r: "No proper oversight, checks or sign-off" },
            { l: "Cultural failure", r: "Staff were not involved, do not trust the tool, or work around it" }
          ]
        },
        {
          type: "sort",
          title: "Which box does it belong in?",
          intro: "Drag each problem into Technology, Strategy or Governance.",
          buckets: ["Technology", "Strategy", "Governance"],
          items: [
            { t: "AI expects a standard data format; the hospital uses an old, unusual one", b: 0, why: "Record-system incompatibility is a technology problem." },
            { t: "Tool is slow once 5,000 patients replace the 50 in the pilot", b: 0, why: "Scalability limits are a technology failure." },
            { t: "A Level 4 AI tool bought by a Level 1 organisation", b: 1, why: "Buying beyond your maturity is a planning (strategy) mistake." },
            { t: "A contract with no performance milestones or exit triggers", b: 1, why: "Lock-in is a strategy failure." },
            { t: "No AI Governance Council exists to approve the tool", b: 2, why: "Missing oversight is a governance failure." },
            { t: "Nobody tested whether the tool treats different ethnic groups fairly", b: 2, why: "A missing bias audit is a governance failure." },
            { t: "Hospital servers too old to run the AI quickly enough", b: 0, why: "Weak infrastructure is a technology failure." },
            { t: "Choosing AI because a rival hospital did, not because of a clinical need", b: 1, why: "A wrong use case is a strategy failure." }
          ]
        },
        {
          type: "rush",
          title: "Failure rush",
          intro: "Sort each card as fast as you can: Strategy, Governance or Culture.",
          seconds: 45,
          buckets: ["Strategy", "Governance", "Culture"],
          items: [
            { t: "No exit clause in contract", b: 0 },
            { t: "Wrong use case chosen", b: 0 },
            { t: "Maturity mismatch", b: 0 },
            { t: "Vendor hype ahead of evidence", b: 0 },
            { t: "Rival bought it, so we did", b: 0 },
            { t: "No AI Governance Council", b: 1 },
            { t: "No consent framework", b: 1 },
            { t: "No bias audit", b: 1 },
            { t: "No performance monitoring", b: 1 },
            { t: "No sign-off before go-live", b: 1 },
            { t: "Clinicians never consulted", b: 2 },
            { t: "Staff using unapproved tools", b: 2 },
            { t: "Workflow disrupted by the AI", b: 2 },
            { t: "Alerts ignored by staff", b: 2 },
            { t: "Leaders ignore warnings", b: 2 }
          ]
        }
      ]
    },
    {
      id: "l2",
      title: "IBM Watson Health: the $3 billion case",
      minutes: 10,
      icon: "🏛️",
      hook: "A computer wins a TV quiz show. Within a few years, hospitals are being asked to trust it with cancer care. What could possibly go wrong?",
      teach: [
        { h: "The story in short", p: "IBM's Watson won the quiz show Jeopardy in 2011. IBM then marketed Watson as technology that would transform medicine. Over about ten years, more than $3 billion was invested. In 2021 the business was sold for $1 billion." },
        { table: { head: ["Year", "What happened"], rows: [
          ["2011", "Watson wins Jeopardy; the hype begins"],
          ["2013", "MD Anderson, a cancer hospital, commits $62 million"],
          ["2017", "MD Anderson cancels the contract; the $62 million is lost"],
          ["2021", "Watson Health is sold for $1 billion"]
        ] } },
        { h: "What went wrong", p: "Watson was trained mostly on data from one famous hospital, Memorial Sloan Kettering (MSK). That hospital's patients, doctors and record-keeping were unusual. Elsewhere, including India, South Korea and Thailand, Watson did not perform as hoped. It had been deployed in 14 or more health systems before validation was complete." },
        { example: "The sources describe Watson's language technology as genuinely sophisticated. The failure was not mainly clever software. It was weak governance, weak strategy and poor conditions at the hospitals using it." },
        { h: "Six lessons for any hospital", p: "These are fair lessons to learn, not accusations. Many organisations could fall into the same traps." },
        { steps: [
          "Local validation is non-negotiable: test on your own patients before clinical use.",
          "Evidence over marketing: ask for peer-reviewed evidence from a similar setting.",
          "Diverse training data: the data must reflect the people you treat.",
          "Maturity before deployment: do not skip levels (see Chapter 2).",
          "Contractual exit strategy: build in performance milestones and exit triggers.",
          "Transparency over cover-up: publish performance, including weaknesses."
        ] },
        { analogy: "Buying Watson on the strength of a quiz-show win is like hiring a surgeon because they won a general-knowledge contest." },
        { key: "The earliest warning signs were available years before the contract was cancelled. The missing piece was a route for those warnings to reach people with the power to act." }
      ],
      activities: [
        {
          type: "order",
          title: "Watson timeline",
          intro: "Put these events in the order they happened.",
          items: [
            "Watson wins the quiz show Jeopardy",
            "MD Anderson commits $62 million",
            "MD Anderson cancels the contract",
            "Watson Health is sold for $1 billion"
          ],
          why: "Hype first (2011), then a big commitment (2013), then cancellation (2017), then the sale (2021)."
        },
        {
          type: "match",
          title: "Name the lesson",
          intro: "Match each Watson problem to the lesson it teaches.",
          pairs: [
            { l: "Worked well at MSK, poorly elsewhere", r: "Local validation is non-negotiable" },
            { l: "Called 'transformative' before trial evidence", r: "Evidence over marketing" },
            { l: "Trained on one unusual hospital's data", r: "Diverse training data is required" },
            { l: "Hospitals could not leave without losing money and prestige", r: "Build in a contractual exit strategy" },
            { l: "Limits were not openly shared", r: "Transparency beats cover-up" }
          ]
        },
        {
          type: "mcq",
          title: "The main cause",
          intro: "Choose the best answer.",
          q: "According to the sources, what best describes the core problem with Watson for Oncology at MD Anderson?",
          options: [
            "The software could not understand written language at all",
            "It was trained mainly on one hospital's data and did not carry over to other patients and settings",
            "IBM had not invested enough in computing equipment",
            "Doctors refused to use it from the first day"
          ],
          answer: 1,
          why: "Watson learned from one exceptional hospital and could not generalise elsewhere. The first option is wrong because the language technology was sophisticated. The last is wrong because staff initially engaged positively; resistance grew as unsafe suggestions piled up."
        }
      ]
    },
    {
      id: "l3",
      title: "Inside the machine: how AI quietly goes wrong",
      minutes: 10,
      icon: "⛓️",
      hook: "A tool can be accurate on day one and still harm patients on day 300. This lesson shows the chain of events that gets it there.",
      teach: [
        { h: "A chain of five links", p: "The chapter describes five failure modes that follow one another, like dominoes. Each can be spotted and stopped, but only if someone is looking." },
        { steps: [
          "Data bias: the training data is unrepresentative or reflects past unfairness.",
          "Subgroup unfairness: the tool works worse for some groups of patients.",
          "Distribution shift: the real patients differ from the training patients.",
          "Model degradation: performance slowly declines over time.",
          "Clinical rejection (alert fatigue): staff learn to ignore the alerts."
        ] },
        { h: "Data bias and subgroup unfairness", p: "A famous 2019 study by Obermeyer and colleagues looked at a widely used US algorithm that picked patients for extra care. It enrolled 17.7% of Black patients who needed care, against 46.5% of white patients with the same level of need." },
        { example: "Why? The algorithm used past healthcare spending as a stand-in for health need. Black patients had historically received less costly care at the same level of need, so the tool scored them lower. It was not intentional discrimination: it faithfully learned a historical injustice." },
        { warn: "A good overall score can hide a poor result for one group. Always ask for performance broken down by ethnicity, age, sex and deprivation." },
        { h: "Distribution shift, degradation and alert fatigue", p: "Distribution shift means the patients in front of the tool no longer look like those it learned from. The sources give the example of sepsis prediction tools whose accuracy dropped during the COVID pandemic. Degradation is the slow decline that follows; the tool still produces numbers, so nobody notices. Eventually the false alarms teach staff to dismiss alerts: the tool is switched on but clinically useless." },
        { analogy: "A satnav with an old map still gives confident directions. The roads changed; the map did not." },
        { key: "Alert fatigue shows up as a falling alert acknowledgement rate, meaning fewer alerts are being acknowledged by staff. It is the warning light to watch." }
      ],
      activities: [
        {
          type: "memory",
          title: "Failure mode flip",
          intro: "Flip cards to pair each failure mode with its plain meaning.",
          pairs: [
            { a: "Data bias", b: "Training data is unrepresentative or unfair" },
            { a: "Subgroup unfairness", b: "Works worse for some patient groups" },
            { a: "Distribution shift", b: "Real patients differ from training patients" },
            { a: "Model degradation", b: "Quiet decline in performance over time" },
            { a: "Alert fatigue", b: "Staff stop responding to alerts" },
            { a: "Clinical rejection", b: "Tool is live but nobody relies on it" }
          ]
        },
        {
          type: "order",
          title: "Follow the chain",
          intro: "Put the five failure modes in order, from root cause to clinical consequence.",
          items: [
            "Data bias",
            "Subgroup unfairness",
            "Distribution shift",
            "Model degradation",
            "Clinical rejection (alert fatigue)"
          ],
          why: "The chain starts with the data and ends with staff ignoring the tool. Each link can be detected and interrupted."
        },
        {
          type: "cloze",
          title: "The Obermeyer lesson",
          intro: "Drag the words into the gaps.",
          text: "The algorithm used past {{spending}} as a stand-in for health {{need}}. Because Black patients had historically received {{less}} costly care at the same need, the tool scored them lower. The cause was biased {{data}}, not intentional discrimination.",
          extra: ["profit", "more"],
          why: "The tool faithfully learned a historical pattern of unequal access to care."
        }
      ]
    },
    {
      id: "l4",
      title: "Breaking the chain: before, during and after go-live",
      minutes: 10,
      icon: "🛡️",
      hook: "'We switch it on in six weeks.' Who in your organisation has the authority to answer: 'not yet'?",
      teach: [
        { h: "A three-stage safety net", p: "The mitigation framework has three stages. The most important idea: stage one creates the baselines that stage two needs. Without a starting measurement, you cannot tell whether performance has slipped." },
        { table: { head: ["Stage", "When", "Core idea"], rows: [
          ["1. Pre-deployment", "Before go-live (the highest-leverage point)", "Check data, test groups, compare populations, co-design, get sign-off"],
          ["2. Live monitoring", "Ongoing", "Automated drift detection; track alert fatigue"],
          ["3. Post-deployment review", "Quarterly or yearly", "Bias audit and decommission triggers"]
        ] } },
        { h: "Stage 1: five actions before switching on", p: "Failures prevented here avoid all later costs." },
        { steps: [
          "Data audit: is the local data complete, correctly coded and representative?",
          "Subgroup testing: results by ethnicity, age band, sex and deprivation. No subgroup data from the vendor? Test locally.",
          "Distribution analysis: compare the training population with your own patients.",
          "Workflow co-design: let frontline clinicians shape how alerts appear and what happens when they disagree with the AI.",
          "Governance sign-off: the AI Governance Council approves. No approval, no deployment."
        ] },
        { h: "Stages 2 and 3", p: "Live monitoring uses a pre-set threshold, for example a 5% relative fall in AUC (a score of how well a tool separates cases, where higher is better), to trigger a governance review automatically. Post-deployment review sets decommission triggers in advance: if the score drops below a set level, or the gap between groups grows too wide, the tool is suspended." },
        { example: "One teaching example: suspend a tool if a group's AUC falls more than 10% below the overall AUC. The sources show these figures as examples, not universal rules." },
        { warn: "Governance cannot 'catch up' after go-live. The baseline measurements can only be taken before deployment." }
      ],
      activities: [
        {
          type: "order",
          title: "Pre-deployment checklist",
          intro: "Put the five pre-deployment actions in order. The last one must be the sign-off.",
          items: [
            "Comprehensive data audit",
            "Mandatory subgroup testing",
            "Distribution analysis",
            "Clinical workflow co-design",
            "Governance Council sign-off"
          ],
          why: "Evidence gathered in the first four steps is what the Council reviews before approving."
        },
        {
          type: "sort",
          title: "Which stage?",
          intro: "Drag each safeguard into the stage where it belongs.",
          buckets: ["Pre-deployment", "Live monitoring", "Post-deployment review"],
          items: [
            { t: "Run results separately for each ethnic group on local data", b: 0, why: "Subgroup testing happens before go-live and sets the baseline." },
            { t: "Automated alert if performance falls past a set threshold", b: 1, why: "Drift detection runs continuously while the tool is live." },
            { t: "Track whether staff are acknowledging alerts", b: 1, why: "Alert fatigue tracking is part of live monitoring." },
            { t: "Agree in advance when the tool will be suspended", b: 2, why: "Decommission triggers are specified before deployment but applied in review." },
            { t: "Quarterly bias audit", b: 2, why: "Regular bias audits belong to the post-deployment review." },
            { t: "Governance Council signs off the evidence", b: 0, why: "No sign-off, no deployment." },
            { t: "Compare training patients with your own population", b: 0, why: "Distribution analysis is a pre-deployment action." }
          ]
        },
        {
          type: "hunt",
          title: "Spot the warning signs",
          intro: "Read this project update. Tap the phrases that should worry you.",
          passage: "Update from the project lead to the board. ((The vendor demo ran smoothly on the test dataset.|A demo is fine as a starting point; the problem is relying on it alone.)) [[The vendor only gave us overall accuracy, which looks excellent, so we skipped the breakdown by group.|Overall scores can hide poor results for particular groups. Group-level results are essential.]] [[Our contract is signed, so governance can review it after launch.|Governance cannot catch up after go-live. Sign-off must come before deployment.]] The tool was built and tested at a single large US hospital. [[We assume our patients are similar enough, so no local testing is planned.|Without comparing populations, distribution shift risk is unknown.]] ((Frontline nurses will receive training next month.|Training is useful, though it does not replace involving them in the design.)) [[We have not set any trigger for pausing the tool.|Without decommission triggers, a failing tool can stay live for years.]]"
        }
      ]
    },
    {
      id: "l5",
      title: "Big companies, big lessons: primary care",
      minutes: 8,
      icon: "🏢",
      hook: "If anyone could get healthcare technology right, surely the world's best-known technology and retail giants could. Yet several tried primary care and stepped back.",
      teach: [
        { h: "Three companies, one pattern", p: "The chapter looks at corporate entries into primary care: Amazon with One Medical, CVS with Oak Street, and Walmart Health. The sources give detailed scores for Amazon and Walmart, and the book's Watson scores for comparison. For CVS/Oak Street, the sources here only name it, so we say no more about it." },
        { table: { head: ["", "Technology", "Healthcare governance", "Clinical workforce"], rows: [
          ["IBM Watson", "3", "1", "2"],
          ["Amazon / One Medical", "5", "1", "1"],
          ["Walmart Health", "2", "1", "1"],
          ["UCSF benchmark", "4", "4", "4"]
        ] } },
        { key: "The pattern: every failed organisation scored 1 on healthcare governance, whether its technology score was 5 or 2." },
        { h: "What the sources say about each", p: "For Amazon, the sources point to weak healthcare-specific AI governance, privacy incidents under the US health privacy law (HIPAA, the Health Insurance Portability and Accountability Act), and clinicians who saw the corporate culture as a threat to their independence. For Walmart Health, which closed in 2024, the main issue was strategy: the plan assumed convenient locations and low prices would be enough to win patient trust, without a strong clinical care model." },
        { analogy: "A powerful engine in a car with no brakes and no driver training is more dangerous than a weak engine, not less." },
        { warn: "Having a high technology score and a low governance score is the riskiest profile. More technology without oversight multiplies risk. An NHS trust scoring 4 on technology and 1 on governance is in the same structural position." },
        { list: [
          "UCSF (the benchmark) scored 4 across all six dimensions, showing balanced maturity.",
          "Success does not need perfect technology; it needs balance, with strong governance.",
          "Being part of the NHS does not automatically supply governance, staff engagement or regulatory readiness."
        ] }
      ],
      activities: [
        {
          type: "tf",
          title: "Lessons from the radar chart",
          intro: "Myth or fact?",
          items: [
            { s: "Amazon failed in primary care mainly because its technology was weak.", a: false, why: "Amazon scored 5 on technology. The sources point to governance and cultural problems." },
            { s: "Every failed organisation in the comparison scored 1 on healthcare governance.", a: true, why: "That is the chapter's common thread." },
            { s: "Walmart Health's primary failure, according to the sources, was strategic.", a: true, why: "Its plan assumed location and price would build trust without a strong clinical care model." },
            { s: "A trust with high technology and weak governance is safer than one with low technology and weak governance.", a: false, why: "More technology without governance generates more risk, not more value." },
            { s: "Success needs top-score technology everywhere.", a: false, why: "The UCSF benchmark scored 4 across the board: balanced, not perfect." },
            { s: "Being an NHS trust automatically protects you from these failure patterns.", a: false, why: "The NHS context does not by itself supply governance, workforce engagement or regulatory readiness." }
          ]
        },
        {
          type: "allocate",
          title: "Balance your effort",
          intro: "You have 100 points of preparation effort for a new AI tool. Spread them across five areas. This is a teaching exercise, not an official formula.",
          total: 100,
          unit: "points",
          categories: [
            { name: "Technology", tip: "Systems, infrastructure, speed.", ideal: [10, 25], low: "Too little: if the tool cannot connect or scale, nothing else matters.", high: "Too much: Amazon's score of 5 did not save it. Technology alone does not protect you.", ok: "Good. Technology matters, but it is one part of the picture." },
            { name: "Healthcare governance", tip: "Oversight, sign-off, bias checks, exit rules.", ideal: [20, 35], low: "Too little: every failure in the comparison scored 1 here. This is the weak spot.", high: "Heavy, but not impossible. Make sure other areas are still covered.", ok: "Good. The benchmark's particular strength was governance." },
            { name: "Clinical workforce", tip: "Involve and train frontline staff.", ideal: [15, 25], low: "Too little: clinicians who feel sidelined distrust the tool or work around it.", high: "Plenty of engagement is good, but it cannot replace governance.", ok: "Good. Clinicians shaping the tool builds trust." },
            { name: "Data readiness", tip: "Complete, well-coded, representative data.", ideal: [15, 25], low: "Too little: poor data feeds bias and shift.", high: "Strong data matters, but it is not the whole job.", ok: "Good. The mitigation framework starts with a data audit." },
            { name: "Regulatory awareness", tip: "Know which rules apply to your tools.", ideal: [10, 25], low: "Too little: unnoticed rules can switch your tool off.", high: "Compliance is vital, but it needs the other areas too.", ok: "Good. Rules are checked early, not after launch." }
          ]
        },
        {
          type: "mcq",
          title: "Reading the pattern",
          intro: "Choose the best answer.",
          q: "What does a profile of Technology 5 and Healthcare Governance 1 most directly show?",
          options: [
            "Money and technology are enough if the investment is big",
            "Technology and governance are unrelated, so they can be handled separately",
            "It is the highest-risk profile: more technology without oversight adds risk, not value",
            "The failure must have been a technology failure that better AI would have prevented"
          ],
          answer: 2,
          why: "Technology without governance means deployment without oversight. The first option is the tempting trap: Amazon had huge resources and still struggled. The last is wrong because the sources point to governance and cultural problems."
        }
      ]
    },
    {
      id: "l6",
      title: "When the rules join the party",
      minutes: 8,
      icon: "⚖️",
      hook: "A weak process is bad. A weak process that also breaks the law can switch your clinical tool off overnight.",
      teach: [
        { h: "Regulation turns risk into consequences", p: "The chapter's regulatory risk matrix links each gap to who might act and what could happen. Unclear or ignored rules compound a strategic mistake: you build your plan on a tool that may be forced to stop." },
        { table: { head: ["Gap", "Who may act", "Possible result", "Priority"], rows: [
          ["No MHRA clearance", "MHRA audit", "Withdrawal, enforcement notice", "HIGH"],
          ["No EU AI Act logging (Art. 12)", "ICO / audit", "Suspension, penalty", "HIGH"],
          ["No consent framework", "ICO investigation", "Processing suspended", "HIGH"],
          ["No subgroup bias testing", "Equality Act claim", "De-deployment, audit", "HIGH"],
          ["No Governance Council", "CQC / MHRA", "Improvement notice", "MEDIUM"]
        ] } },
        { h: "Who is who", p: "The MHRA (Medicines and Healthcare products Regulatory Agency) regulates medical devices, including some software. The ICO (Information Commissioner's Office) enforces data protection. The CQC (Care Quality Commission) inspects care services." },
        { key: "A tool that counts as a software medical device needs regulatory clearance before clinical use. If nobody has checked, that is a governance gap." },
        { list: [
          "Article 12 of the EU AI Act requires automatically generated logs for high-risk AI.",
          "Consent and data-protection gaps can lead to an enforcement notice and a suspension of data processing.",
          "A suspended tool means clinicians lose it with no warning, which is a patient-safety issue too.",
          "Contracts without exit clauses are a medium-priority gap in the matrix."
        ] },
        { warn: "Do not treat regulation as paperwork for later. The sources urge naming a person responsible for compliance planning from the start. Always check current dates and rules, as they change." }
      ],
      activities: [
        {
          type: "sort",
          title: "How urgent is it?",
          intro: "Sort each gap by the priority the matrix gives it.",
          buckets: ["HIGH priority", "MEDIUM priority"],
          items: [
            { t: "No MHRA clearance for a software medical device", b: 0, why: "Marked HIGH: classify all AI tools before deployment." },
            { t: "No automatic logging required for high-risk AI", b: 0, why: "Marked HIGH." },
            { t: "No consent framework for patient data", b: 0, why: "Marked HIGH: consent management is required." },
            { t: "No subgroup bias testing", b: 0, why: "Marked HIGH for medium and high-risk AI." },
            { t: "No AI Governance Council", b: 1, why: "Marked MEDIUM, but it should exist before medium-risk AI." },
            { t: "No exit clauses in AI contracts", b: 1, why: "Marked MEDIUM, yet cheap to fix and valuable." }
          ]
        },
        {
          type: "scenario",
          title: "The vendor wants a quick yes",
          intro: "Make the call as the Digital Director.",
          setup: "A vendor has offered an AI note-taking and triage tool. The Chief Executive wants a start date. The Digital Director is asked to confirm compliance.",
          start: "a1",
          steps: [
            { id: "a1", text: "The vendor says the tool is 'ready to use'. The Chief Executive asks whether you can go live next month. What do you do first?", choices: [
              { label: "Agree, since the vendor says it is ready", fb: "Vendor readiness is not clearance. Nobody has checked whether it counts as a software medical device.", score: 0, next: "a2" },
              { label: "Ask whether the tool counts as a software medical device and check clearance and consent position", fb: "Right. Classification and consent come first, because gaps can lead to forced withdrawal or suspension.", score: 2, next: "a2" },
              { label: "Go live and plan to check compliance afterwards", fb: "This stacks legal risk on top of project risk. Governance cannot catch up after go-live.", score: 0, next: "a2" }
            ] },
            { id: "a2", text: "The checks show no consent framework and no subgroup data. The Chief Executive says it is 'only a pilot'. Your reply?", choices: [
              { label: "A pilot still processes real patient data, so the gaps must be closed or the start delayed", fb: "Correct. A pilot involves real patients and real data. The matrix marks both gaps HIGH.", score: 2, next: null },
              { label: "Fine, but we will mention it in the next audit", fb: "Waiting for an audit means waiting for an inspector to find it.", score: 1, next: null },
              { label: "Agree, because pilots are exempt", fb: "The sources give no such exemption. Real data brings real obligations.", score: 0, next: null }
            ] }
          ]
        },
        {
          type: "mcq",
          title: "Which rule?",
          intro: "Choose the best answer.",
          q: "Which regulatory gap does the matrix say can lead to mandatory withdrawal of an AI tool and an enforcement notice?",
          options: [
            "No exit clauses in the contract",
            "No clearance for a tool that counts as a software medical device",
            "No Governance Council",
            "No quarterly review meeting"
          ],
          answer: 1,
          why: "The matrix links missing MHRA clearance to withdrawal and an enforcement notice. Exit clauses and a missing Council are rated MEDIUM with softer consequences, such as programme review or improvement notices."
        }
      ]
    }
  ],
  finalQuiz: {
    title: "Chapter check",
    questions: [
      { type: "mcq", q: "Which of the following is a TECHNOLOGY failure?", options: ["No bias audit was carried out", "The AI tool cannot read the hospital's record format", "The contract has no exit clause", "Clinicians were never consulted"], answer: 1, why: "Incompatible data formats are the plumbing problem. A missing bias audit is governance, a missing exit clause is strategy, and sidelined clinicians are culture." },
      { type: "mcq", q: "What is the chapter's central argument?", options: ["Healthcare AI should be avoided", "The algorithm usually works; governance, strategy, data and culture are where projects fail", "Only large companies can deploy AI safely", "Regulation is the main cause of failure"], answer: 1, why: "The chapter is not against AI. It shows the conditions that must be in place for it to succeed. Regulation matters but is not presented as the main cause." },
      { type: "mcq", q: "Why did Watson struggle outside its original hospital?", options: ["It was trained mostly on one hospital's data", "It had no language technology", "It was never tested in any hospital", "It was too cheap"], answer: 0, why: "Single-site training did not generalise. The language technology was described as sophisticated." },
      { type: "mcq", q: "In the Obermeyer study, why did the algorithm score Black patients lower?", options: ["Developers deliberately designed it that way", "It used past healthcare spending as a stand-in for need", "The patients were healthier", "The data was too large"], answer: 1, why: "Less had been spent on Black patients at the same level of need, so the tool learned an unfair pattern. It was not deliberate." },
      { type: "mcq", q: "A tool's alert acknowledgement rate drops sharply over six months. What is the most likely issue?", options: ["Alert fatigue", "Improved clinical outcomes", "A larger training dataset", "A new contract clause"], answer: 0, why: "Falling acknowledgement is the key sign that staff are learning to dismiss alerts." },
      { type: "mcq", q: "Why must pre-deployment checks come before live monitoring?", options: ["They create the baselines that monitoring compares against", "Monitoring is optional", "Regulators only inspect before launch", "Vendors insist on it"], answer: 0, why: "Without a starting measurement, you cannot tell whether performance has slipped." },
      { type: "mcq", q: "What do Amazon, IBM Watson and Walmart have in common in the chapter's comparison?", options: ["All scored 5 on technology", "All scored 1 on healthcare governance", "All had the same strategy", "All were fully regulated"], answer: 1, why: "Technology scores differed (5, 3 and 2), but the common factor was a governance score of 1." },
      { type: "mcq", q: "What is the best response to clinicians already using unapproved AI tools?", options: ["Ban everything immediately", "Ignore it", "Acknowledge it, classify the risk and offer a quick approval route", "Wait for a complaint"], answer: 2, why: "Banning is hard to enforce and drives use out of sight; ignoring it leaves patient data unprotected." },
      { type: "mcq", q: "Which gap is rated HIGH priority in the regulatory risk matrix?", options: ["No consent framework", "No team meeting", "No office budget", "No newsletter"], answer: 0, why: "Consent gaps can lead to an enforcement notice and suspension of data processing." }
    ]
  },
  capstone: {
    type: "scenario",
    title: "Boss level: the six-week go-live",
    intro: "You are the Clinical AI Governance Lead. The board wants an answer today.",
    setup: "The board has approved an AI tool to prioritise radiology scans, with go-live in six weeks. The Chief Executive says: 'We are technically ready. Governance can catch up.' Your pre-deployment review finds three problems: the vendor's testing was done at a single US hospital with very few South Asian patients, while your local population has many; the radiology system uses an unusual data format that the tool cannot read properly; and no AI Governance Council exists yet.",
    start: "c1",
    steps: [
      { id: "c1", text: "The Chief Executive asks you to confirm the start date. What do you say?", choices: [
        { label: "Confirm. Delays cost money and the vendor has promised support.", fb: "You have accepted pressure over evidence. Governance cannot catch up after go-live because baseline checks only happen before it.", score: 0, next: "c2" },
        { label: "Say you cannot confirm yet, and list the three gaps with what each would risk.", fb: "Good. You name the problems calmly and link each to a real risk, rather than refusing without reasons.", score: 2, next: "c2" },
        { label: "Say nothing now and raise concerns after launch.", fb: "Silence is how early warnings get lost. Raising them later is too late for the baseline checks.", score: 0, next: "c2" }
      ] },
      { id: "c2", text: "On the population gap, the vendor only has overall accuracy figures. What do you require?", choices: [
        { label: "Accept the overall figure; it is excellent.", fb: "A good overall score can hide a poor result for one group. This is the Obermeyer lesson.", score: 0, next: "c3" },
        { label: "Require results by ethnicity, age, sex and deprivation, or test them locally.", fb: "Correct. No subgroup data means local testing before any deployment.", score: 2, next: "c3" },
        { label: "Ask the vendor to promise it will be fine.", fb: "A promise is not evidence. Watson showed the cost of marketing ahead of evidence.", score: 0, next: "c3" }
      ] },
      { id: "c3", text: "The data format problem: the tool reads some fields from the wrong place. The vendor offers a quick workaround.", choices: [
        { label: "Accept the workaround without further checking to hit the date.", fb: "Wrong patient data could produce wrong outputs that nobody notices.", score: 0, next: "c4" },
        { label: "Insist the data pathway is fixed and tested before go-live, even if the date moves.", fb: "Right. Incompatibility is a technology failure that must be resolved first.", score: 2, next: "c4" },
        { label: "Test it only with the 50-patient demo data.", fb: "Demo data hides scalability and compatibility problems that show up at full volume.", score: 1, next: "c4" }
      ] },
      { id: "c4", text: "There is no AI Governance Council. The Chief Executive says one can be set up later. How do you respond?", choices: [
        { label: "Agree; the tool can run without a Council for now.", fb: "Without sign-off authority, nobody can say 'not yet'. That is the gap that let Watson sites stay locked in.", score: 0, next: "c5" },
        { label: "Propose a Council with real authority to approve or halt, and set decommission triggers and exit terms in advance.", fb: "Excellent. Sign-off authority, pre-set triggers and exit clauses protect patients and money.", score: 2, next: "c5" },
        { label: "Name a single manager to approve it informally.", fb: "Informal approval lacks documented authority and clinical input.", score: 1, next: "c5" }
      ] },
      { id: "c5", text: "Final board paper. What do you recommend?", choices: [
        { label: "Proceed on time with a promise to monitor.", fb: "Monitoring without baselines cannot detect decline.", score: 0, next: null },
        { label: "Delay go-live until local subgroup testing, the data fix and Council sign-off are done, then deploy with live monitoring and quarterly review.", fb: "This follows the three-stage framework. It is a considered delay, not a refusal, and it protects patients and the trust.", score: 2, next: null },
        { label: "Cancel the tool permanently.", fb: "Too drastic. The chapter encourages fixing the conditions for success, not abandoning AI.", score: 1, next: null }
      ] }
    ]
  },
  glossary: [
    { term: "Taxonomy", def: "A sorting system. Here, four boxes for types of failure." },
    { term: "Healthcare AI Failure Taxonomy", def: "The chapter's four boxes: technology, strategy, governance and culture." },
    { term: "Governance", def: "The oversight, rules and sign-off that keep a project safe." },
    { term: "Electronic health record (EHR)", def: "The hospital's digital patient file system." },
    { term: "FHIR R4", def: "A common, standard format for sharing health data between computer systems." },
    { term: "Data bias", def: "When training data is unrepresentative or reflects past unfairness." },
    { term: "Subgroup unfairness", def: "When a tool works worse for some groups of patients." },
    { term: "Distribution shift", def: "When real patients differ from the ones the AI learned from." },
    { term: "Model degradation", def: "A slow, quiet decline in how well an AI tool performs." },
    { term: "Alert fatigue", def: "Staff learn to ignore alerts because there are too many unreliable ones." },
    { term: "AUC (area under the curve)", def: "A score of how well a tool tells cases apart. Higher is better." },
    { term: "Decommission trigger", def: "A pre-agreed point at which a tool is suspended." },
    { term: "Shadow AI", def: "AI tools used by staff without their organisation's approval." },
    { term: "MHRA", def: "Medicines and Healthcare products Regulatory Agency; regulates medical devices." },
    { term: "ICO", def: "Information Commissioner's Office; enforces data protection law." }
  ],
  takeaways: [
    "AI usually fails because of the context around it, not the algorithm.",
    "Sort problems into technology, strategy, governance and culture, and expect overlap.",
    "Watson's lessons: validate locally, demand evidence, use diverse data, respect maturity, plan exits and be open.",
    "Check before, during and after go-live; pre-deployment baselines make later monitoring possible.",
    "Strong governance beats strong technology; and rules left unchecked can switch a tool off."
  ]
};
