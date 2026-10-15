/* Chapter 1 lesson videos: narrated 3D scenes (Sam, your tutor). */
window.COURSE_VIDEO = window.COURSE_VIDEO || {};
window.COURSE_VIDEO[1] = {
  l1: {
    keyPoint: "Healthcare AI has already arrived, and policy is pushing hard. Waiting is not neutral: starting early is cheap and calm, while starting late means pressure and rushed projects.",
    slides: [
      {
        scene: { type: "bars", title: "US doctors using AI at work: one year, a big jump", scale: 0.05,
          bars: [
            { id: "y23", label: "2023", v: 38, p: [-2, 0], c: "slate" },
            { id: "y24", label: "2024", v: 66, p: [2, 0], c: "cyan" }
          ],
          axes: [ { t: "US doctors using AI (%)", p: [0, -2.2, 1.6] } ],
          steps: [ "all", "all", ["y23"], ["y24"], "all", "all" ] },
        say: [
          "Welcome to Chapter 1, The Healthcare AI Imperative, and I'm Sam, your tutor.",
          "This chapter shows why AI, meaning computer systems that do tasks we normally expect a person to do, is already in hospitals, and how to bring it in safely.",
          "In 2023, 38 per cent of US doctors used AI in their practice, according to the American Medical Association.",
          "In its 2024 survey, that figure had jumped to 66 per cent.",
          "Studies of AI scribes, which draft clinical notes, reported 30 to 50 per cent less time spent on paperwork.",
          "But remember, these numbers show how fast use is growing, not whether the tools are safe, approved or properly overseen."
        ]
      },
      {
        scene: { type: "stairs", title: "The UK policy push: NHS milestones", flat: true,
          levels: [
            { label: "2019\nNHS AI Lab", c: "cyan" },
            { label: "2022\nDigital plan", c: "violet" },
            { label: "2023\nFederated Data\nPlatform", c: "green" },
            { label: "2025\n10-Year Health Plan", c: "amber" }
          ],
          steps: [ "all", 0, 1, 2, 2, 3 ] },
        say: [
          "In the UK, the NHS, the National Health Service, is being pushed towards AI by policy, not just by technology.",
          "In 2019, the NHS AI Lab was set up with a 250 million pound investment.",
          "In 2022 came A Plan for Digital Health and Social Care.",
          "In 2023, the NHS Federated Data Platform was launched.",
          "Federated works like a library network, where each library keeps its own books, so AI can learn from data without moving it all to one central store.",
          "In 2025, the NHS 10-Year Health Plan named AI as one of five transformative technologies."
        ]
      },
      {
        scene: { type: "graph", title: "Gradually, then suddenly: why waiting is not neutral",
          nodes: [
            { id: "ai", label: "Healthcare AI", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "grad", label: "Gradually:\nquiet progress", p: [-4.4, 1.9, -0.6], c: "slate", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "rules", label: "Rules", p: [-1.9, 3.2, -1.6], c: "violet", shape: "shield", size: 0.9 },
            { id: "money", label: "Money", p: [1.9, 3.2, -1.6], c: "amber", shape: "cyl", size: 0.9 },
            { id: "comp", label: "Competitors", p: [4.4, 1.9, -0.6], c: "slate", shape: "box", size: 0.9 },
            { id: "early", label: "Start early:\ncheap and calm", p: [-4.4, -0.4, 0.8], c: "green", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "late", label: "Start late:\nrushed, costly", p: [4.4, -0.4, 0.8], c: "red", shape: "slab", size: 0.9, ls: 0.7 }
          ],
          links: [ ["grad", "ai"], ["rules", "ai"], ["money", "ai"], ["comp", "ai"], ["ai", "early"], ["ai", "late"] ],
          steps: [ "all", ["grad", "ai", "rules", "money", "comp"], ["money", "ai"], ["money", "ai"], ["early"], ["late"], "all" ] },
        say: [
          "Robert Wachter borrows a line from Hemingway's 1926 novel, The Sun Also Rises: change happens gradually, then suddenly.",
          "For years AI improved quietly, but now rules, money and competitors are all pushing at once.",
          "One 2024 forecast from Grand View Research puts the global healthcare AI market at 148 point 4 billion dollars by 2029.",
          "That is a forecast, not a fact, so treat it with care.",
          "Waiting is not neutral, because starting early is cheap and calm.",
          "Starting in the sudden phase means regulator pressure, impatient boards and rushed projects.",
          "Now try the activities below to test what you have learned."
        ]
      }
    ]
  },

  l2: {
    keyPoint: "AI is not one thing. Match the level of care to the level of danger, and start with low-risk, high-frequency tools to build confidence and savings.",
    slides: [
      {
        scene: { type: "stairs", title: "Four groups: the Risk-Impact Classification Framework",
          levels: [
            { label: "Low risk /\nhigh frequency", c: "green" },
            { label: "Medium risk /\nhigh impact", c: "amber" },
            { label: "High risk /\nhigh reward", c: "red" },
            { label: "High risk /\nsystemic", c: "pink" }
          ],
          steps: [ "all", "all", 0, 1, 2, 3 ] },
        say: [
          "In this lesson, we look at why different AI tools need different levels of care.",
          "AI is not one thing but a spectrum, so the Risk-Impact Classification Framework sorts tools into four groups.",
          "Low risk, high frequency tools, such as AI scribes, scheduling and inbox help, can go first with standard training and light rules and checks.",
          "Medium risk, high impact tools, such as sepsis prediction and deterioration alerts, need a phased pilot, human oversight and testing at several sites.",
          "High risk, high reward tools, such as cancer screening, need regulator clearance, strong local testing and patient consent.",
          "High risk, systemic tools, such as autonomous treatment advice, need national rules and stay at the research stage only."
        ]
      },
      {
        scene: { type: "graph", title: "Same roads, different rules: the human decision point",
          nodes: [
            { id: "bike", label: "Bicycle:\nhelmet", p: [-4.4, 2.6, -1.0], c: "green", shape: "sphere", size: 0.85, ls: 0.7 },
            { id: "car", label: "Car: licence,\ninsurance", p: [0, 3.2, -1.6], c: "amber", shape: "box", size: 0.9, ls: 0.7 },
            { id: "lorry", label: "Chemical lorry:\nmuch more", p: [4.4, 2.6, -1.0], c: "red", shape: "slab", size: 1.0, ls: 0.7 },
            { id: "check", label: "Human\ndecision point", p: [0, 0.2, 1.0], c: "violet", shape: "shield", size: 1.1, ls: 0.7 },
            { id: "sepsis", label: "Sepsis AI:\nclinician decides", p: [-3.8, 0.2, 0.6], c: "amber", shape: "ico", size: 0.9, ls: 0.7 },
            { id: "auto", label: "No clinician:\nhigh / systemic", p: [3.8, 0.2, 0.6], c: "red", shape: "ico", size: 0.9, ls: 0.7 }
          ],
          links: [ ["bike", "car"], ["car", "lorry"], ["sepsis", "check"] ],
          steps: [ ["bike", "car"], ["lorry"], ["sepsis", "check"], ["auto"], ["auto"], "all", "all" ] },
        say: [
          "Think of road safety, where a bicycle needs a helmet and a car needs a licence and insurance.",
          "A lorry carrying chemicals needs much more, even though they all share the same roads.",
          "Sepsis is a dangerous reaction to infection, and a sepsis AI only assists a clinician, who makes the final call, so it is medium risk.",
          "An AI that recommends treatment with no clinician review removes that safety check, so it is high risk and systemic.",
          "The chapter also notes that no autonomous treatment systems are deployed in any health system today.",
          "Treating all AI the same is the first strategic mistake, so start with low-risk, high-frequency tools to build confidence and savings.",
          "Now try sorting some real AI tools into their groups in the activities below."
        ]
      }
    ]
  },

  l3: {
    keyPoint: "Governance multiplies return, data is the bottleneck, low-risk tools fund high-risk ones, and failure costs compound. Put at least 15% of your AI budget into governance.",
    slides: [
      {
        scene: { type: "graph", title: "The four basic truths of healthcare AI economics",
          nodes: [
            { id: "hub", label: "AI budget", p: [0, 0.2, 1.0], c: "amber", shape: "cyl", size: 1.2, spin: true },
            { id: "t1", label: "1. Governance\nmultiplies ROI", p: [-4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9, ls: 0.7 },
            { id: "t2", label: "2. Data is the\nbottleneck", p: [-1.9, 3.2, -1.6], c: "cyan", shape: "box", size: 0.9, ls: 0.7 },
            { id: "t3", label: "3. Low risk funds\nhigh risk", p: [1.9, 3.2, -1.6], c: "green", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "t4", label: "4. Failure costs\ncompound", p: [4.4, 1.9, -0.6], c: "red", shape: "slab", size: 0.9, ls: 0.7 }
          ],
          links: [ ["hub", "t1"], ["hub", "t2"], ["hub", "t3"], ["hub", "t4"] ],
          steps: [ "all", "all", ["hub", "t1"], ["hub", "t2"], ["hub", "t3"], ["hub", "t4"] ] },
        say: [
          "In this lesson, we look at the four basic truths of healthcare AI economics, which tell you where to put your money.",
          "ROI means return on investment, what you get back for what you spend, and governance means the rules, checks and people that keep AI safe.",
          "Truth one is that governance multiplies ROI, because organisations with a formal AI council are two times more likely to see a return in 12 months.",
          "Truth two is that data readiness is the bottleneck, as 77 per cent of clinicians lose time to incomplete or hard-to-reach data.",
          "Truth three is that low-risk tools fund high-risk ones, because early savings pay for the costs of testing and regulation.",
          "Truth four is that failure costs compound, as IBM Watson Health showed, with about 3 billion dollars invested and then lost."
        ]
      },
      {
        scene: { type: "bars", title: "Governance share of the AI budget", scale: 0.25,
          bars: [
            { id: "med", label: "Typical\n(median)", v: 4.2, p: [-2, 0], c: "red" },
            { id: "floor", label: "Organisations\ngetting a return", v: 15, p: [2, 0], c: "green" }
          ],
          axes: [ { t: "Share of AI budget on governance (%)", p: [0, -2.2, 1.6] } ],
          steps: [ ["floor"], ["med"], "all", "all" ] },
        say: [
          "Organisations that get a return put at least 15 per cent of their AI programme budget into governance.",
          "The typical, or median, figure is only four point two per cent.",
          "Governance is like a building's foundations, because nobody photographs them, but a taller building needs deeper ones.",
          "Spending less on foundations does not save money, because it risks the whole building."
        ]
      },
      {
        scene: { type: "stairs", title: "Order and funding: low-risk savings pay the way",
          levels: [
            { label: "Low-risk tools", c: "green" },
            { label: "Savings fund\ntesting", c: "amber" },
            { label: "Cancer\nscreening", c: "cyan" }
          ],
          steps: [ "all", 2, 0, 1, "all", 2, "all" ] },
        say: [
          "Picture a hospital chief executive who wants the whole AI budget spent on cancer screening, calling admin AI just efficiency-chasing.",
          "Even a cancer-screening tool needs governance and clean, joined-up data.",
          "Meanwhile, low-risk tools such as scribes and scheduling can generate early savings.",
          "Those savings can pay for the cancer tool's testing and clearance.",
          "And a failed high-profile deployment damages clinical trust for years.",
          "The goal is still the high-impact tool, because the point is the order and the funding.",
          "Next, try splitting a starter budget yourself in the activities below."
        ]
      }
    ]
  },

  l4: {
    keyPoint: "Before an AI tool moves up a phase, it must prove it is actionable, explainable and works in new places. Governance is a prerequisite at every phase, not an extra.",
    slides: [
      {
        scene: { type: "graph", title: "Three questions for every AI tool",
          nodes: [
            { id: "tool", label: "AI tool", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "act", label: "Actionability:\ncan we act on it?", p: [-4.4, 1.9, -0.6], c: "green", shape: "box", size: 0.9, ls: 0.7 },
            { id: "exp", label: "Explainability:\ncan it give a reason?", p: [0, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "gen", label: "Generalisability:\ndoes it work elsewhere?", p: [4.4, 1.9, -0.6], c: "amber", shape: "torus", size: 0.9, ls: 0.7 }
          ],
          links: [ ["tool", "act"], ["tool", "exp"], ["tool", "gen"] ],
          steps: [ "all", "all", "all", ["tool", "act"], ["tool", "exp"], ["tool", "gen"] ] },
        say: [
          "In this lesson, we match each AI tool to the right phase of adoption.",
          "You would not give a new apprentice the hardest job on day one, and the same applies to AI.",
          "The Strategic-Technical Alignment Framework links how mature a tool is to three phases, Awareness, Pilot and Enterprise, and asks three questions at each one.",
          "Actionability asks whether the output can be turned into clinical action without extra expert interpretation.",
          "Explainability asks whether the tool can give a reason a clinician can understand.",
          "Generalisability asks whether it works equally well for other patients, hospitals and time periods."
        ]
      },
      {
        scene: { type: "stairs", title: "The bar rises at each phase",
          levels: [
            { label: "Phase 1\nAwareness", c: "slate" },
            { label: "Phase 2\nPilot", c: "cyan" },
            { label: "Phase 3\nEnterprise", c: "green" }
          ],
          steps: [ 0, 1, 1, 2, 2, "all" ] },
        say: [
          "In Phase 1, Awareness, an AI scribe drafts a note that is reviewed and filed, no explanation is required, and testing at one site is enough.",
          "In Phase 2, Pilot, a clinician reviews a sepsis score before following a protocol, and decision-support tools must be able to explain themselves.",
          "Phase 2 tools must also be tested at several sites, with fairness checked across different groups of patients.",
          "In Phase 3, Enterprise, recommendations flow into the care pathway, and explanations become mandatory with a full audit trail, a complete record for checking.",
          "Testing now covers the whole NHS or the nation, and the tool must keep being monitored.",
          "Governance is not an optional extra, because at every phase it is a technical prerequisite."
        ]
      },
      {
        scene: { type: "graph", title: "Distribution shift and black boxes",
          nodes: [
            { id: "us", label: "US hospital\ntraining data", p: [-4.4, 1.9, -0.6], c: "slate", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "model", label: "Sepsis AI\nmodel", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.1, spin: true, ls: 0.7 },
            { id: "nhs", label: "NHS trust\npatients", p: [4.4, 1.9, -0.6], c: "amber", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "drop", label: "Performance\ncan drop", p: [4.4, -0.3, 0.6], c: "red", shape: "slab", size: 0.85, ls: 0.7 },
            { id: "black", label: "Black-box AI", p: [-1.9, 3.2, -1.6], c: "slate", shape: "box", size: 0.9 },
            { id: "over", label: "Oversight\ndesigned around it", p: [1.9, 3.2, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.7 }
          ],
          links: [ ["us", "model"], ["model", "nhs"], ["nhs", "drop"], ["black", "over"] ],
          steps: [ ["model", "drop"], ["us", "model", "nhs", "drop"], ["black"], ["black", "over"], "all" ] },
        say: [
          "Distribution shift means an AI's performance drops when it meets patients unlike those it learned from.",
          "For example, a sepsis model trained on US hospital data may behave differently in an NHS trust.",
          "Some powerful AI systems will always be black boxes, meaning we cannot fully see how they reach an answer.",
          "The answer is not to wait for perfect explanations, but to design the right oversight around them.",
          "Now try the activities below to match each requirement to its phase."
        ]
      }
    ]
  },

  l5: {
    keyPoint: "The adoption paradox is high investment intent alongside high pilot failure. Its five drivers are organisational, so the fixes are governance, data, clinical engagement and skills.",
    slides: [
      {
        scene: { type: "graph", title: "The AI adoption paradox",
          nodes: [
            { id: "hub", label: "Adoption\nparadox", p: [0, 0.2, 1.0], c: "violet", shape: "torus", size: 1.2, spin: true, ls: 0.7 },
            { id: "intent", label: "High intent\nto invest", p: [-4.4, 1.9, -0.6], c: "green", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "fail", label: "70% saw a\npilot fail", p: [4.4, 1.9, -0.6], c: "red", shape: "slab", size: 0.9, ls: 0.7 },
            { id: "cause", label: "Shared causes in\nthe organisation", p: [0, 3.2, -1.6], c: "slate", shape: "box", size: 0.9, ls: 0.7 }
          ],
          links: [ ["intent", "hub"], ["fail", "hub"], ["cause", "hub"] ],
          steps: [ "all", ["fail"], ["intent"], ["hub", "intent", "fail"], ["cause", "hub"] ] },
        say: [
          "In this lesson, we explore a puzzle called the AI adoption paradox.",
          "In a 2025 survey of 182 hospital leaders by Black Book Research, 70 per cent reported at least one failed AI pilot.",
          "Yet their intent to invest in AI remains high.",
          "Each leader's choice makes sense locally, because the last pilot seemed to fail for its own specific reasons.",
          "But the causes are shared and structural, and mostly about the organisation rather than the technology."
        ]
      },
      {
        scene: { type: "graph", title: "Five structural drivers of failure",
          nodes: [
            { id: "hub", label: "Pilot failure", p: [0, 0.2, 1.0], c: "red", shape: "ico", size: 1.1, spin: true },
            { id: "data", label: "Data\nreadiness gaps", p: [-4.6, 2.0, -0.6], c: "cyan", shape: "box", size: 0.85, ls: 0.7 },
            { id: "gov", label: "Governance\ndeficits", p: [-2.1, 3.3, -1.6], c: "violet", shape: "shield", size: 0.85, ls: 0.7 },
            { id: "wf", label: "Workflow\nmisalignment", p: [2.1, 3.3, -1.6], c: "amber", shape: "cyl", size: 0.85, ls: 0.7 },
            { id: "sh", label: "Shadow AI", p: [4.6, 2.0, -0.6], c: "red", shape: "sphere", size: 0.85 },
            { id: "tech", label: "Technical\nlimits", p: [4.0, -0.3, 0.8], c: "slate", shape: "slab", size: 0.85, ls: 0.7 }
          ],
          links: [ ["data", "hub"], ["gov", "hub"], ["wf", "hub"], ["sh", "hub"], ["tech", "hub"] ],
          steps: [ "all", ["data", "hub"], ["gov", "hub"], ["wf", "hub"], ["sh", "hub"], ["tech", "hub"] ] },
        say: [
          "The chapter names five structural drivers behind the paradox.",
          "First, data readiness gaps, where data is fragmented and systems cannot share it.",
          "Second, governance deficits, with a median governance budget of four point two per cent against the 15 per cent benchmark.",
          "Third, workflow misalignment, where AI arrives in a box instead of being designed together with clinicians.",
          "Fourth, shadow AI, where staff use consumer tools such as ChatGPT without any safety review.",
          "Fifth, technical limits, such as distribution shift, weak generalisability and gaps in explainability."
        ]
      },
      {
        scene: { type: "graph", title: "Shadow AI: redirect, do not prohibit",
          nodes: [
            { id: "sh", label: "Shadow AI", p: [0, 0.2, 1.0], c: "red", shape: "ico", size: 1.1, spin: true },
            { id: "priv", label: "Privacy risk", p: [-4.4, 1.9, -0.6], c: "red", shape: "shield", size: 0.85 },
            { id: "safe", label: "Clinical\nsafety risk", p: [0, 3.2, -1.6], c: "amber", shape: "sphere", size: 0.85, ls: 0.7 },
            { id: "legal", label: "Legal risk", p: [4.4, 1.9, -0.6], c: "amber", shape: "box", size: 0.85 },
            { id: "redir", label: "Redirect to\napproved tools", p: [-4.2, -0.3, 0.8], c: "green", shape: "cyl", size: 0.9, ls: 0.7 }
          ],
          links: [ ["sh", "priv"], ["sh", "safe"], ["sh", "legal"], ["sh", "redir"] ],
          steps: [ ["sh", "priv", "safe", "legal"], ["sh", "redir"], "all", "all", "all" ] },
        say: [
          "Shadow AI brings privacy risk, because patient data ends up in unapproved systems, as well as clinical safety risk and legal risk for the organisation.",
          "The chapter's answer is to redirect, not prohibit, by giving staff approved alternatives.",
          "Better technology alone will not fix the paradox, because its drivers are organisational.",
          "The fixes are governance, data, clinical engagement and workforce skills.",
          "Now head to the activities below and see if you can spot the red flags."
        ]
      }
    ]
  },

  l6: {
    keyPoint: "The NHS learned that sequence decides success: digitise, connect systems, build a data platform, then deploy AI, with clinicians involved and governance at the right level.",
    slides: [
      {
        scene: { type: "stairs", title: "From failure to foundations: the NHS digitisation journey", flat: true,
          levels: [
            { label: "2003 to 2011\nNPfIT", c: "red" },
            { label: "2012 to 2022\nBottom-up", c: "green" },
            { label: "Later\nAI successes", c: "cyan" }
          ],
          steps: [ "all", 0, 0, 1, 1, 2 ] },
        say: [
          "In this lesson, we look at how the NHS learned, the hard way, to get ready for AI.",
          "The National Programme for IT, known as NPfIT, ran from 2003 to 2011 and cost 12 point 7 billion pounds.",
          "According to the chapter's slides, it was abandoned with less than a quarter delivered.",
          "A bottom-up digitisation programme then ran from 2012 to 2022.",
          "It put electronic health records into 90 per cent of GP practices and most acute hospital trusts.",
          "Those data foundations made later NHS AI Lab successes possible, such as diabetic eye screening AI and accident and emergency forecasting on the Federated Data Platform."
        ]
      },
      {
        scene: { type: "graph", title: "What went wrong, and what the recovery did instead",
          nodes: [
            { id: "buy", label: "Bought tech\nbefore readiness", p: [-4.4, 3.3, -1.2], c: "red", shape: "box", size: 0.85, ls: 0.6 },
            { id: "central", label: "Central control,\nignored local", p: [-4.4, 1.4, -0.4], c: "red", shape: "cyl", size: 0.85, ls: 0.6 },
            { id: "impose", label: "Systems imposed\non clinicians", p: [-4.4, -0.5, 0.6], c: "red", shape: "slab", size: 0.85, ls: 0.6 },
            { id: "ready", label: "Readiness\nbuilt first", p: [4.4, 3.3, -1.2], c: "green", shape: "box", size: 0.85, ls: 0.6 },
            { id: "fed", label: "Federated, fits\nlocal needs", p: [4.4, 1.4, -0.4], c: "green", shape: "cyl", size: 0.85, ls: 0.6 },
            { id: "involve", label: "Clinicians\ninvolved", p: [4.4, -0.5, 0.6], c: "green", shape: "sphere", size: 0.85, ls: 0.6 }
          ],
          links: [ ["buy", "ready"], ["central", "fed"], ["impose", "involve"] ],
          steps: [ "all", ["buy", "ready"], ["central", "fed"], ["impose"], ["involve"], "all" ] },
        say: [
          "So what changed between the two programmes?",
          "NPfIT bought technology before checking readiness, while the later programme built readiness first.",
          "NPfIT used central control that ignored local differences, while the later programme used a federated model that fits local needs.",
          "NPfIT imposed systems on clinicians, and the National Audit Office cited clinical disengagement as a main cause of failure.",
          "The later programme involved clinicians in the work instead.",
          "The lesson is that governance must sit at the right level, not too central and not too fragmented."
        ]
      },
      {
        scene: { type: "stairs", title: "The winning sequence: foundations first, then AI",
          levels: [
            { label: "1. Digitise", c: "slate" },
            { label: "2. Systems talk\nto each other", c: "cyan" },
            { label: "3. Data platform", c: "violet" },
            { label: "4. Deploy AI", c: "green" }
          ],
          steps: [ 0, 1, 2, 3, "all", "all" ] },
        say: [
          "The case boils down to a clear sequence, starting with digitising records.",
          "Next, make the systems talk to each other so they can share data.",
          "Then build a data platform.",
          "Only then deploy AI, because data infrastructure comes before AI capability.",
          "NPfIT shows Truth 2, data readiness, and Truth 4, failure costs compound, together, so it is both a failure story and a recovery template.",
          "Now try the activities below to put the winning sequence into practice."
        ]
      }
    ]
  }
};
