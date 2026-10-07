window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA[1] = {
  num: 1,
  title: "The Healthcare AI Imperative",
  part: "Part I: Strategic Foundations",
  tagline: "AI is already in hospitals. This chapter shows you how to bring it in safely, in the right order, and without joining the pilots that fail.",
  minutes: 45,
  outcomes: [
    "After this chapter you can explain why healthcare AI is a 'now' decision, using the main evidence on usage, policy and market growth.",
    "You can sort AI tools into four risk-and-impact groups and say how carefully each one needs to be governed.",
    "You can explain Wachter's 'gradually, then suddenly' idea and what it means for your planning timeline.",
    "You can name the four basic truths of healthcare AI economics and use them to split a budget sensibly.",
    "You can match an AI tool to the right adoption phase using actionability, explainability and generalisability.",
    "You can diagnose the AI adoption paradox and learn the lessons of the NHS digitisation journey."
  ],
  lessons: [
    {
      id: "l1", title: "Why now?", minutes: 8, icon: "🚀",
      hook: "In one year, the share of US doctors using AI at work jumped from 38% to 66%. What happens to a hospital that is still 'thinking about it'?",
      teach: [
        { h: "AI has already arrived", p: "'AI' means computer systems that do tasks we normally expect a person to do, such as writing notes or spotting patterns in scans. The question is no longer <i>whether</i> AI will change healthcare. It is whether your organisation is ready to benefit." },
        { list: [
          "The American Medical Association (AMA) 2024 survey: <b>66%</b> of US physicians used AI in practice, up from <b>38%</b> in 2023.",
          "Market forecast (Grand View Research, 2024): the global healthcare AI market reaching <b>$148.4 billion by 2029</b>, growing at 48.1% a year. Treat this as a forecast, not a fact.",
          "Studies of AI scribes (2024 to 2025) reported <b>30 to 50%</b> less time spent on documentation."
        ] },
        { h: "The UK policy push", p: "In the UK, the National Health Service (NHS) is being pushed by policy, not just by technology. These are the milestones in the chapter's timeline." },
        { table: { head: ["Year", "Milestone"], rows: [
          ["2019", "NHS AI Lab set up (£250 million investment)"],
          ["2022", "A Plan for Digital Health and Social Care"],
          ["2023", "NHS Federated Data Platform launched"],
          ["2025", "NHS 10-Year Health Plan names AI as one of five transformative technologies"]
        ] } },
        { analogy: "A 'federated' data platform is like a library network. Each library keeps its own books, but anyone can search across all of them. AI can learn from the data without it all being moved to one central store." },
        { h: "Wachter's 'gradually, then suddenly'", p: "Robert Wachter borrows a line from Hemingway's novel <i>The Sun Also Rises</i> (1926): change happens in two ways, <b>gradually, then suddenly</b>. For years AI improved quietly. Now rules, money and competitors are all pushing at once." },
        { key: "Waiting is not neutral. Starting early is cheap and calm. Starting during the 'suddenly' phase means regulator pressure, impatient boards and rushed projects." },
        { warn: "'66% of doctors use AI' tells you how fast usage is growing. It does NOT tell you whether the tools are safe, approved or governed. Some of that use may be unapproved consumer tools." }
      ],
      activities: [
        { type: "memory", title: "Number match", intro: "Flip the cards and pair each number with what it measures.",
          pairs: [
            { a: "66%", b: "US doctors using AI, 2024" },
            { a: "38%", b: "US doctors using AI, 2023" },
            { a: "$148.4B", b: "Forecast market size by 2029" },
            { a: "£250M", b: "NHS AI Lab investment" },
            { a: "30 to 50%", b: "Less documentation time with scribes" },
            { a: "1926", b: "Year of Hemingway's novel" }
          ] },
        { type: "order", title: "NHS policy timeline", intro: "Put these NHS milestones in the order they happened.",
          items: ["NHS AI Lab established", "A Plan for Digital Health and Social Care", "NHS Federated Data Platform launched", "NHS 10-Year Health Plan published"],
          why: "The AI Lab (2019) came first, then the digital plan (2022), the data platform (2023) and the 10-Year Plan (2025)." },
        { type: "cloze", title: "Gradually, then suddenly", intro: "Fill the gaps using the word bank.",
          text: "Wachter borrowed the phrase from the novelist {{Hemingway}}. In the {{gradual}} phase, most organisations only watch. In the {{sudden}} phase, underprepared organisations attempt AI under regulatory scrutiny. The chapter's lesson is that the cost of {{waiting}} rises quickly.",
          extra: ["Fitzgerald", "cheap"],
          why: "Early preparation is cheap and unhurried. Late preparation is expensive and failure-prone." }
      ]
    },
    {
      id: "l2", title: "Not all AI is equal", minutes: 8, icon: "🎯",
      hook: "An AI scribe drafts a note that a doctor checks. A cancer-screening AI could miss a tumour nobody re-checks. Should both get the same rules?",
      teach: [
        { h: "The Risk-Impact Classification Framework", p: "'AI' is not one thing. It is a spectrum. The AI Application Risk-Impact Classification Framework sorts tools into four groups, so you can match the level of care to the level of danger." },
        { table: { head: ["Group", "Examples", "What to do"], rows: [
          ["Low risk / high frequency", "AI scribes, scheduling, inbox help, report summaries", "Deploy first. Standard training, light governance."],
          ["Medium risk / high impact", "Sepsis prediction, deterioration alerts, radiology triage", "Phased pilot. A human must oversee. Test at several sites."],
          ["High risk / high reward", "Cancer screening, diabetes onset, Alzheimer's risk", "Regulator clearance, strong local testing, patient consent."],
          ["High risk / systemic", "Autonomous treatment advice, clinical trial design", "Needs national rules. Research-stage only."]
        ] } },
        { analogy: "Think of road safety. A bicycle needs a helmet. A car needs a licence and insurance. A lorry carrying chemicals needs much more. Same roads, different rules." },
        { key: "Treating all AI the same is the first strategic mistake. Start with low-risk, high-frequency tools to build confidence and savings." },
        { example: "Sepsis is a dangerous reaction to infection. A sepsis AI only assists a clinician, who makes the final call, so it is <b>medium</b> risk. An AI that recommends treatment with no clinician review removes that safety check, so it is <b>high / systemic</b>." },
        { warn: "A common error is to label sepsis AI 'high risk / high reward'. The difference is the human decision point. The chapter also notes that no autonomous treatment systems are deployed in any health system today." }
      ],
      activities: [
        { type: "match", title: "Quadrant to strategy", intro: "Match each group to its recommended approach.",
          pairs: [
            { l: "Low risk / high frequency", r: "Deploy first with light governance" },
            { l: "Medium risk / high impact", r: "Phased pilot with human oversight" },
            { l: "High risk / high reward", r: "Needs regulator clearance and consent" },
            { l: "High risk / systemic", r: "Needs national rules; research only" }
          ] },
        { type: "rush", title: "Tool triage rush", intro: "Sort each AI tool as fast as you can before time runs out.", seconds: 45,
          buckets: ["Low risk / high frequency", "Medium risk / high impact", "High risk (reward or systemic)"],
          items: [
            { t: "AI scribe", b: 0 }, { t: "Appointment scheduling", b: 0 }, { t: "Inbox management", b: 0 },
            { t: "Report summarising", b: 0 }, { t: "A&E demand forecasting", b: 0 },
            { t: "Sepsis prediction", b: 1 }, { t: "Deterioration alerts", b: 1 }, { t: "Radiology triage", b: 1 },
            { t: "Length-of-stay prediction", b: 1 },
            { t: "Cancer screening", b: 2 }, { t: "Diabetes onset prediction", b: 2 }, { t: "Alzheimer's risk scoring", b: 2 },
            { t: "Autonomous treatment advice", b: 2 }, { t: "Clinical trial design", b: 2 }
          ] },
        { type: "mcq", title: "Spot the difference", intro: "Choose the best answer.",
          q: "Why is a sepsis prediction tool 'medium risk' rather than 'high / systemic'?",
          options: ["It is cheaper than cancer screening AI", "A clinician still makes the final decision", "It uses less data than other tools", "It has never been used in the NHS"],
          answer: 1,
          why: "The clinician acts as a safety check. Cost (A) and data volume (C) do not set the risk group. Its use in the NHS (D) is untrue; the Epic Deterioration Index is a widely deployed medium-risk example." }
      ]
    },
    {
      id: "l3", title: "The four basic truths", minutes: 9, icon: "💷",
      hook: "A hospital CEO says: 'Spend the AI budget on cancer screening. Admin AI is just efficiency-chasing.' Sounds sensible. The four truths say otherwise.",
      teach: [
        { h: "Four truths about the money", p: "The chapter sets out four basic truths of healthcare AI economics. They tell you where to put your money, and what happens if you do not." },
        { table: { head: ["Truth", "Evidence in the chapter"], rows: [
          ["1. Governance multiplies ROI", "Organisations with a formal AI council are 2 times more likely to see a return in 12 months"],
          ["2. Data readiness is the bottleneck", "77% of clinicians lose time to incomplete or hard-to-reach data"],
          ["3. Low-risk tools fund high-risk ones", "Early savings pay for validation and regulation costs"],
          ["4. Failure costs compound", "IBM Watson Health: about $3 billion invested, then lost"]
        ] } },
        { h: "Two words to know", p: "ROI means <b>return on investment</b>: what you get back for what you spend. Governance means the rules, checks and people that keep AI safe and accountable." },
        { key: "Organisations that get a return put at least <b>15%</b> of their AI programme budget into governance. The typical (median) figure is only <b>4.2%</b>." },
        { analogy: "Governance is like a building's foundations. Nobody photographs them, but a taller building needs deeper ones. Spending less on them does not save money. It risks the whole building." },
        { list: [
          "Even a cancer-screening tool needs governance (Truth 1).",
          "It also needs clean, joined-up data (Truth 2).",
          "Scribes and scheduling tools can generate the savings that pay for its testing and clearance (Truth 3).",
          "A failed high-profile deployment damages clinical trust for years (Truth 4)."
        ] },
        { warn: "Do not read Truth 3 as 'ignore the exciting tools'. The goal is still the high-impact tools. The point is the order and the funding." }
      ],
      activities: [
        { type: "allocate", title: "Split the starter budget", intro: "You have 100% of a first-year AI budget for an NHS trust. Share it out sensibly.",
          total: 100, unit: "%",
          categories: [
            { name: "Governance", tip: "Council, rules, monitoring. The book's floor is 15%.", ideal: [15, 25],
              low: "Too low. The chapter says successful organisations give at least 15% to governance. The typical 4.2% is the problem.",
              high: "Governance matters, but going far above the floor leaves too little for data and tools.",
              ok: "Good. At least 15% is the benchmark linked to getting a return." },
            { name: "Data readiness", tip: "Truth 2: data is the bottleneck.", ideal: [20, 35],
              low: "Too low. No AI strategy succeeds on poor, fragmented data. Invest in data before applications.",
              high: "Data work is vital, but you also need tools and people to prove value.",
              ok: "Good. Data comes before applications." },
            { name: "AI tool purchase", tip: "Start with low-risk tools.", ideal: [25, 40],
              low: "Too little for tools means no early savings to fund later steps (Truth 3).",
              high: "Too much on tools. Without governance and data, even excellent AI underperforms.",
              ok: "Good. A modest tool budget, aimed at low-risk tools first." },
            { name: "Staff training and clinical involvement", tip: "People who use the tool must shape it.", ideal: [10, 20],
              low: "Too low. Tools not co-designed with clinicians are a main cause of failure.",
              high: "People matter, but the other three need funding too.",
              ok: "Good. Training and co-design protect your investment." }
          ] },
        { type: "match", title: "Truth and evidence", intro: "Match each truth with its evidence.",
          pairs: [
            { l: "Governance multiplies ROI", r: "Councils: 2 times more likely to get a return" },
            { l: "Data readiness is the bottleneck", r: "77% of clinicians lose time to poor data" },
            { l: "Low-risk tools fund high-risk ones", r: "Early savings pay for validation" },
            { l: "Failure costs compound", r: "IBM Watson Health, about $3 billion lost" }
          ] },
        { type: "tf", title: "Myth or fact?", intro: "Decide whether each statement is true.",
          items: [
            { s: "The median AI governance budget is about 4.2% of the programme.", a: true, why: "Yes. That is the typical figure, well below the 15% benchmark." },
            { s: "The CEO's plan to buy only cancer-screening AI is the quickest route to return.", a: false, why: "It ignores governance, data and the funding role of low-risk tools. The chapter calls it economically irrational as stated." },
            { s: "A failed AI project only costs the money spent on it.", a: false, why: "Truth 4: failure erodes clinical trust for years, which makes later projects harder." },
            { s: "Governance is only needed for high-risk tools.", a: false, why: "Governance infrastructure is needed whichever AI you deploy. Light for low risk, heavy for high risk." },
            { s: "Good data should come before AI applications.", a: true, why: "Truth 2: AI cannot succeed on fragmented, poor-quality data." }
          ] }
      ]
    },
    {
      id: "l4", title: "Match the AI to the phase", minutes: 8, icon: "🧩",
      hook: "You would not give a new apprentice the hardest job on day one. The same applies to AI. The Strategic-Technical Alignment Framework tells you what an AI tool must prove before it moves up a level.",
      teach: [
        { h: "Three questions, three phases", p: "The Strategic-Technical Alignment Framework links how mature an AI tool is to your adoption phase: <b>Phase 1 Awareness</b>, <b>Phase 2 Pilot</b>, <b>Phase 3 Enterprise</b>. Three questions apply at each phase." },
        { list: [
          "<b>Actionability:</b> can the output be turned into clinical action without extra expert interpretation?",
          "<b>Explainability:</b> can the tool give a reason a clinician can understand?",
          "<b>Generalisability:</b> does it work equally well for other patients, hospitals and time periods?"
        ] },
        { table: { head: ["Question", "Phase 1", "Phase 2", "Phase 3"], rows: [
          ["Actionability", "AI scribe: draft, review, file", "Sepsis score: clinician review, then protocol", "Recommendation flows into the care pathway"],
          ["Explainability", "Not required", "Required for decision-support tools", "Mandatory, with full audit trail"],
          ["Generalisability", "One site is enough", "Several sites; test fairness across groups", "Whole NHS or national; keep monitoring"]
        ] } },
        { h: "Distribution shift", p: "<b>Distribution shift</b> means an AI's performance drops when it meets patients unlike those it learned from. For example, a sepsis model trained on US hospital data may behave differently in an NHS trust." },
        { key: "Governance is not an optional extra. At every phase it is a technical prerequisite." },
        { warn: "Some powerful AI systems will always be 'black boxes'. The answer is not to wait for perfect explanations. It is to design the right oversight around them." }
      ],
      activities: [
        { type: "sort", title: "Which phase needs this?", intro: "Drag each requirement to the first phase where it becomes necessary.",
          buckets: ["Phase 1: Awareness", "Phase 2: Pilot", "Phase 3: Enterprise"],
          items: [
            { t: "Testing at a single site is enough", b: 0 },
            { t: "Black-box tool acceptable for note drafting", b: 0 },
            { t: "Multi-site validation required", b: 1 },
            { t: "Fairness testing across patient subgroups", b: 1 },
            { t: "Explanations for decision-support tools", b: 1 },
            { t: "NHS-wide or national validation", b: 2 },
            { t: "Full audit trail for regulators", b: 2 },
            { t: "Continuous monitoring for distribution shift", b: 2 }
          ].map(function (x) { x.why = "This requirement first becomes necessary in " + ["Phase 1", "Phase 2", "Phase 3"][x.b] + " of the framework."; return x; }) },
        { type: "mcq", title: "Distribution shift", intro: "Choose the best answer.",
          q: "A US-trained AI performs worse in an NHS trust. What is the best name for this problem?",
          options: ["Distribution shift", "Budget drift", "Vendor lock-in", "Shadow AI"],
          answer: 0,
          why: "Distribution shift is a drop in performance when the new patients differ from the training patients. Shadow AI (D) means unapproved tool use by staff, a different problem." },
        { type: "cloze", title: "The three questions", intro: "Fill the gaps from the word bank.",
          text: "{{Actionability}} asks whether an output can be turned into action. {{Explainability}} asks whether the tool can give a reason. {{Generalisability}} asks whether it works for different patients and places. At Phase 3 a full {{audit trail}} is mandatory.",
          extra: ["Affordability", "Accessibility"] }
      ]
    },
    {
      id: "l5", title: "The adoption paradox", minutes: 7, icon: "🧐",
      hook: "Hospitals want to spend more on AI. Yet 70% of surveyed leaders have already seen a pilot fail. Is that foolish, or is something deeper going on?",
      teach: [
        { h: "A paradox, not a mystery", p: "In the Black Book Research (2025) survey of 182 hospital leaders, <b>70%</b> reported at least one AI pilot failure, while intent to invest remains high. That is the <b>AI adoption paradox</b>: high investment intent alongside persistently high failure." },
        { key: "Each leader's choice is sensible locally ('the last pilot failed for specific reasons'). But the causes are shared, structural and mostly about the organisation, not the technology." },
        { h: "Five structural drivers", p: "The chapter names five causes. All of them are about the organisation, not the technology." },
        { steps: [
          "<b>Data readiness gaps:</b> fragmented data that systems cannot share.",
          "<b>Governance deficits:</b> a 4.2% median budget against the 15% benchmark.",
          "<b>Workflow misalignment:</b> 'AI in a box', not co-designed with clinicians.",
          "<b>Shadow AI:</b> staff using consumer tools such as ChatGPT without safety review.",
          "<b>Technical limits:</b> distribution shift, weak generalisability, explainability gaps."
        ] },
        { h: "Shadow AI", p: "<b>Shadow AI</b> brings privacy risk (patient data in unapproved systems), clinical safety risk and legal risk for the organisation. The chapter's answer: <b>redirect, do not prohibit</b>. Give staff approved alternatives." },
        { warn: "Better technology alone will not fix the paradox. The drivers are organisational, so the fixes are governance, data, clinical engagement and workforce skills." }
      ],
      activities: [
        { type: "match", title: "Name the driver", intro: "Match each symptom to its structural driver.",
          pairs: [
            { l: "Records cannot be shared between systems", r: "Data readiness gap" },
            { l: "Median governance spend of 4.2%", r: "Governance deficit" },
            { l: "Clinicians were not involved in design", r: "Workflow misalignment" },
            { l: "Staff paste notes into a consumer chatbot", r: "Shadow AI" },
            { l: "Tool performs worse on new patients", r: "Technical limitation" }
          ] },
        { type: "hunt", title: "Red flag hunt", intro: "Click the phrases in this board paper that should worry you.",
          passage: "Board paper: AI plan for next year. We will buy the most advanced cancer-screening tool [[to avoid wasting time on administrative AI|ignores the order: low-risk tools build savings and confidence first]]. We have set aside [[2% of the budget for governance|far below the 15% benchmark linked to getting a return]]. Our records sit in several systems that [[do not share data, but the vendor says the AI will cope|data readiness is the bottleneck; AI cannot fix fragmented data]]. ((Clinicians in each ward will help test the tool before roll-out.|good: clinical involvement protects against workflow misalignment)) Staff are [[banned from using any AI tool|prohibition drives shadow AI underground; redirect to approved tools instead]]. ((We will report progress to a governance council each quarter.|good: a formal council is linked to higher chances of return))" },
        { type: "mcq", title: "Local sense, system problem", intro: "Choose the best answer.",
          q: "A hospital that suffered a pilot failure plans to double its AI budget. Why can this be called a paradox?",
          options: ["Spending more always causes more failure", "Each decision seems sensible alone, but the shared structural causes remain untouched", "Pilot failures only happen in small hospitals", "Leaders have no evidence AI works"],
          answer: 1,
          why: "The causes (data, governance, workflow, shadow AI, technical limits) are structural. Doubling spend without fixing them repeats the failure. Option A is too strong; spend is not the cause." }
      ]
    },
    {
      id: "l6", title: "Case study: the NHS digitisation journey", minutes: 8, icon: "🏥",
      hook: "The NHS once spent £12.7 billion on one giant IT programme and walked away. Later, it did something different and became ready for AI.",
      teach: [
        { h: "The story in brief", p: "The National Programme for IT (NPfIT) ran from 2003 to 2011 and cost £12.7 billion. The slides state it was abandoned with less than a quarter delivered. A bottom-up digitisation programme then ran from 2012 to 2022 and put electronic health records (EHRs) into 90% of GP practices and most acute trusts." },
        { table: { head: ["What NPfIT did wrong", "What the bottom-up programme did"], rows: [
          ["Bought technology before checking readiness", "Built organisational readiness first"],
          ["Central control that ignored local differences", "A federated model that fits local needs"],
          ["Imposed systems on clinicians", "Involved clinicians in the work"]
        ] } },
        { example: "The NHS AI Lab's later successes, such as diabetic eye screening AI and Federated Data Platform A&E (accident and emergency) forecasting, were only possible because of the data foundations the bottom-up programme created." },
        { h: "Four lessons", p: "The case boils down to four lessons for any AI strategy." },
        { list: [
          "Data infrastructure comes before AI capability.",
          "Clinical engagement is non-negotiable. The National Audit Office (NAO) report cited clinical disengagement as a main cause of failure.",
          "Governance must sit at the right level: not too central, not too fragmented.",
          "Sequence matters: digitise, make systems talk to each other, build a data platform, then deploy AI."
        ] },
        { key: "The NPfIT failure illustrates Truth 2 (data readiness) and Truth 4 (failure costs compound) together. It is both a failure story and a recovery template." }
      ],
      activities: [
        { type: "order", title: "The winning sequence", intro: "Put the NHS route to AI in the right order.",
          items: ["Digitise records", "Make systems interoperable (able to share data)", "Build a data platform", "Deploy AI"],
          why: "Shortcuts at any stage compound into later failures, which is what happened to NPfIT." },
        { type: "sort", title: "Failure or recovery?", intro: "Drag each approach to the programme it describes.",
          buckets: ["NPfIT (2003 to 2011)", "Bottom-up digitisation (2012 to 2022)"],
          items: [
            { t: "Technology bought before readiness", b: 0, why: "NPfIT put procurement ahead of organisational readiness." },
            { t: "One central model for every site", b: 0, why: "Central governance could not adapt to local variation." },
            { t: "Systems imposed on clinicians", b: 0, why: "Clinical disengagement was a main cause of failure." },
            { t: "Clinicians involved in the work", b: 1, why: "Reversed the NPfIT error of imposing systems." },
            { t: "Federated, locally adaptable approach", b: 1, why: "Governance at the right level is the replicable template." },
            { t: "Readiness built before technology", b: 1, why: "Reversed the error of buying first." }
          ] },
        { type: "mcq", title: "What the case teaches", intro: "Choose the best answer.",
          q: "A trust wants to skip data work and deploy a cancer-screening AI straight away. Which case lesson applies most?",
          options: ["Buy the newest tool to catch up", "Sequencing determines outcomes; shortcuts compound into later failures", "Central control prevents local mistakes", "Clinicians should join after go-live"],
          answer: 1,
          why: "Digitise, interoperate, platform, then AI. Central control (C) is exactly what failed in NPfIT, and involving clinicians late (D) repeats its disengagement error." }
      ]
    }
  ],
  finalQuiz: {
    title: "Chapter check",
    questions: [
      { type: "mcq", title: "Q1", intro: "Choose the best answer.", q: "In the Black Book Research (2025) survey, what share of hospital leaders reported at least one AI pilot failure?",
        options: ["30%", "50%", "70%", "90%"], answer: 2,
        why: "The figure is 70%. 50% is the 'half fail' guess, and 90% overstates the problem enough to undermine the case for AI." },
      { type: "mcq", title: "Q2", intro: "Choose the best answer.", q: "Which group does an AI scribe belong to?",
        options: ["High risk / high reward", "Low risk / high frequency", "Medium risk / high impact", "High risk / systemic"], answer: 1,
        why: "A clinician reviews the draft note, so errors are caught, and it is used daily. High risk / high reward describes tools such as cancer screening." },
      { type: "mcq", title: "Q3", intro: "Choose the best answer.", q: "From which book did Wachter borrow 'gradually, then suddenly'?",
        options: ["The Great Gatsby", "The Innovator's Dilemma", "A Giant Leap", "The Sun Also Rises"], answer: 3,
        why: "It comes from Hemingway's The Sun Also Rises. A Giant Leap is Wachter's own book, not the source of the phrase." },
      { type: "mcq", title: "Q4", intro: "Choose the best answer.", q: "What is the minimum share of AI budget linked to getting a return from governance?",
        options: ["4.2%", "10%", "15%", "25%"], answer: 2,
        why: "15%. The figure 4.2% is the typical (median) spend, which is the governance deficit." },
      { type: "mcq", title: "Q5", intro: "Choose the best answer.", q: "What does 'distribution shift' mean?",
        options: ["Budgets moving from clinical to admin AI", "Vendor price changes at scale", "AI performance dropping when patients differ from the training group", "Workload being redistributed after AI"], answer: 2,
        why: "It is the performance drop on a different population. Budget and workload changes are real effects but are not what the term means." },
      { type: "mcq", title: "Q6", intro: "Choose the best answer.", q: "How is the NHS Federated Data Platform described in this chapter?",
        options: ["A regulator for AI", "A procurement framework", "A privacy-preserving way to use NHS data for AI training without centralising it", "A staff training programme"], answer: 2,
        why: "Federated means data stays where it is while AI can still learn from it. It is infrastructure, not a regulator or training scheme." },
      { type: "mcq", title: "Q7", intro: "Choose the best answer.", q: "Which is NOT one of the five structural drivers of the adoption paradox?",
        options: ["Governance deficits", "Shadow AI", "Workflow misalignment", "Lack of powerful enough algorithms"], answer: 3,
        why: "All five drivers are organisational (data, governance, workflow, shadow AI, technical limits). Waiting for more powerful technology does not fix them." },
      { type: "mcq", title: "Q8", intro: "Choose the best answer.", q: "At Phase 3 (Enterprise), what does the framework say about generalisability?",
        options: ["One site is enough", "NHS-wide or national validation with continuous monitoring", "It is not needed", "Only fairness checks are needed"], answer: 1,
        why: "Phase 1 needs one site and Phase 2 needs several. Phase 3 needs wide validation plus ongoing checks for distribution shift." },
      { type: "mcq", title: "Q9", intro: "Choose the best answer.", q: "How does the chapter suggest handling shadow AI?",
        options: ["Ban all AI tools", "Ignore it", "Redirect staff to approved alternatives", "Wait for national rules"], answer: 2,
        why: "Redirect, do not prohibit. A ban pushes use out of sight, and ignoring it leaves privacy and safety risks." },
      { type: "mcq", title: "Q10", intro: "Choose the best answer.", q: "Which sequence reflects the NHS route to AI success?",
        options: ["AI, data platform, digitise, interoperability", "Digitise, interoperability, data platform, AI", "Data platform, AI, digitise, interoperability", "Interoperability, AI, digitise, data platform"], answer: 1,
        why: "Foundations first. Starting with AI repeats the NPfIT pattern." }
    ]
  },
  capstone: {
    type: "scenario", title: "Boss level: the board decision",
    intro: "You are the Chief Digital Officer. Guide your trust through its first year of AI.",
    setup: "A 600-bed NHS trust has a £1.2 million annual AI programme budget. The Chief Executive is excited, the Chief Medical Officer wants a sepsis tool, and the Finance Director wants proof of savings. The board meets this afternoon.",
    start: "s1",
    steps: [
      { id: "s1", text: "The Chief Executive asks: 'Where do we start?'",
        choices: [
          { label: "Start with cancer-screening AI because it helps patients most", fb: "Tempting, but it is high risk and needs regulator clearance, strong local testing and consent. You have no savings or governance yet.", score: 0, next: "s2" },
          { label: "Start with low-risk, high-frequency tools such as AI scribes and scheduling", fb: "Good. They are quick to deploy, build confidence and create the savings that fund later steps (Truth 3).", score: 2, next: "s2" },
          { label: "Wait two years for the technology to mature", fb: "Waiting risks arriving late in the 'suddenly' phase. You can begin safely now in the low-risk group.", score: 0, next: "s2" }
        ] },
      { id: "s2", text: "The Finance Director asks how much of the budget to put into governance before any deployment.",
        choices: [
          { label: "About 4%, like most organisations", fb: "That is the typical median and the governance deficit. It is far below the benchmark.", score: 0, next: "s3" },
          { label: "At least 15%, and set up a governance council first", fb: "Right. Around 15% is the minimum linked to getting a return, and councils make a return twice as likely.", score: 2, next: "s3" },
          { label: "Nothing now; add governance only if there is a problem", fb: "Governance is needed whichever AI you deploy. Adding it after a problem is too late and costs trust.", score: 0, next: "s3" }
        ] },
      { id: "s3", text: "The Chief Information Officer reports that patient records sit in several systems that do not share data well.",
        choices: [
          { label: "Fund data readiness work alongside the first tools", fb: "Good. Data readiness is the bottleneck, and fragmented data blocks both local use and national platforms.", score: 2, next: "s4" },
          { label: "Ignore it; the AI vendor says the tool will cope", fb: "No AI strategy succeeds on poor, fragmented data. This repeats the NPfIT habit of buying before readiness.", score: 0, next: "s4" },
          { label: "Stop all AI work until every system is replaced", fb: "Too slow and too broad. Low-risk tools can start while data work proceeds.", score: 1, next: "s4" }
        ] },
      { id: "s4", text: "The Chief Medical Officer wants a sepsis prediction tool trained on data from US hospitals. Where does it sit, and what should you ask?",
        choices: [
          { label: "Medium risk. Pilot with human oversight, local validation and fairness testing", fb: "Right. Distribution shift is a real risk, and a medium-risk tool needs phased pilots, multi-site validation and council review.", score: 2, next: "s5" },
          { label: "Low risk. Deploy hospital-wide now", fb: "It influences clinical action, so it is medium risk. This is where many pilot failures happen: governance too light for the risk.", score: 0, next: "s5" },
          { label: "High / systemic. Refuse completely", fb: "Over-cautious. A clinician still decides, so it is medium risk and can proceed with the right safeguards.", score: 1, next: "s5" }
        ] },
      { id: "s5", text: "A survey shows many clinicians already paste notes into a consumer chatbot. The Chief Nurse asks what to do.",
        choices: [
          { label: "Ban it with a strict email warning", fb: "Prohibition drives shadow AI out of sight. The risks to patient data remain.", score: 0, next: null },
          { label: "Redirect: provide approved tools, train staff and explain the risks", fb: "Correct. Redirect, do not prohibit. Together with a council, good data and low-risk starts, you avoid the structural drivers of the adoption paradox.", score: 2, next: null },
          { label: "Ignore it; it is a personal choice", fb: "The trust remains liable for AI use even if it is unofficial, and patient data may be exposed.", score: 0, next: null }
        ] }
    ]
  },
  glossary: [
    { term: "Artificial intelligence (AI)", def: "Computer systems that do tasks we normally expect people to do, such as writing notes or spotting patterns." },
    { term: "NHS", def: "The National Health Service, the UK's public health system." },
    { term: "ROI (return on investment)", def: "What you get back compared with what you spend." },
    { term: "Governance", def: "The rules, checks and responsible people that keep AI safe and accountable." },
    { term: "AI governance council", def: "A formal group that oversees how AI is chosen, tested and monitored." },
    { term: "Risk-Impact Classification Framework", def: "A way to sort AI tools into four groups by risk and impact, so care matches danger." },
    { term: "Gradually, then suddenly", def: "Wachter's idea that change builds slowly, then speeds up fast." },
    { term: "Federated Data Platform", def: "An NHS system that lets AI use data without moving it all into one central store." },
    { term: "Strategic-Technical Alignment Framework", def: "A guide that matches a tool's maturity to an adoption phase using three questions." },
    { term: "Actionability", def: "Whether an AI output can be turned into clinical action without extra interpretation." },
    { term: "Explainability", def: "Whether an AI tool can give a reason a clinician can understand." },
    { term: "Generalisability", def: "Whether an AI works equally well across different patients, hospitals and times." },
    { term: "Distribution shift", def: "A drop in AI performance when new patients differ from those it learned from." },
    { term: "Shadow AI", def: "Staff using unapproved AI tools, such as consumer chatbots, for work." },
    { term: "NPfIT", def: "The National Programme for IT in the NHS (2003 to 2011), a £12.7 billion programme that failed to deliver." }
  ],
  takeaways: [
    "Healthcare AI has already arrived: 66% of US physicians used AI in 2024, up from 38% in 2023.",
    "Not all AI is equal. Start with low-risk, high-frequency tools and move up as you earn trust.",
    "Waiting is not neutral. Policy pressure makes the 'suddenly' phase costly for latecomers.",
    "Put at least 15% of your AI budget into governance. Typical spend is only 4.2%.",
    "The adoption paradox is organisational, and fixable: data, governance, clinical engagement and sequencing."
  ]
};
