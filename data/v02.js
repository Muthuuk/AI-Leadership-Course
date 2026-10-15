/* Chapter 2 lesson videos: narrated 3D scenes (Sam, your tutor). */
window.COURSE_VIDEO = window.COURSE_VIDEO || {};
window.COURSE_VIDEO[2] = {
  l1: {
    keyPoint: "Owning an AI tool is not the same as being AI-mature: maturity also needs strategy, data, people, rules and culture, so score yourself honestly.",
    slides: [
      { scene: { type: "graph", title: "An AI tool is only one part of AI maturity",
          nodes: [
            { id: "ai", label: "AI tool", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "strat", label: "Strategy", p: [-4.4, 1.9, -0.6], c: "violet", shape: "slab", size: 0.9 },
            { id: "data", label: "Data", p: [4.4, 1.9, -0.6], c: "cyan", shape: "cyl", size: 0.9 },
            { id: "people", label: "People", p: [-1.8, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9 },
            { id: "rules", label: "Rules", p: [1.8, 3.2, -1.6], c: "violet", shape: "shield", size: 0.9 },
            { id: "culture", label: "Culture", p: [-4.4, -0.3, 0.5], c: "pink", shape: "torus", size: 0.9 }
          ],
          links: [["ai", "strat"], ["ai", "data"], ["ai", "people"], ["ai", "rules"], ["ai", "culture"]],
          steps: ["all", "all", ["ai"], ["data", "people", "rules"], ["ai"], "all"] },
        say: [
          "Welcome to Chapter 2, Understanding AI Maturity, and I'm Sam, your tutor.",
          "This chapter helps you find out honestly how ready your organisation really is, before you buy more artificial intelligence, or AI.",
          "Picture a hospital that has signed a contract for an AI tool to help with radiology, the work of reading medical images.",
          "It has no data governance committee, no clinical champion programme, and no proper link between its imaging systems and its electronic health records.",
          "It owns an AI tool, but not AI maturity, and the book calls this gap the capability illusion.",
          "AI maturity is about the whole organisation, meaning strategy, data, people, rules and culture, and technology is only one part."
        ] },
      { scene: { type: "graph", title: "Seven checks: surface-level adoption or genuine maturity?",
          nodes: [
            { id: "tool", label: "Your AI tool", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.1, spin: true },
            { id: "gov", label: "Governance", p: [-4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9 },
            { id: "mon", label: "Monitoring", p: [4.4, 1.9, -0.6], c: "cyan", shape: "cyl", size: 0.9 },
            { id: "clin", label: "Clinical use", p: [-1.8, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9 },
            { id: "evid", label: "Local evidence", p: [1.8, 3.2, -1.6], c: "green", shape: "box", size: 0.9 },
            { id: "extra", label: "Data, regulation\nand training", p: [4.4, -0.3, 0.5], c: "amber", shape: "slab", size: 0.8, ls: 0.68 }
          ],
          links: [["tool", "gov"], ["tool", "mon"], ["tool", "clin"], ["tool", "evid"], ["tool", "extra"]],
          steps: ["all", ["gov"], ["mon"], ["clin", "evid"], ["extra"], ["gov"]] },
        say: [
          "The book gives seven checks to tell surface-level adoption apart from genuine maturity, and you can ask them about any AI tool you already use.",
          "First, governance: is there a council, a public list of AI tools called an AI register, and a named responsible person for each tool?",
          "Next, performance monitoring: do you track results with dashboards, or do you only hear casual feedback?",
          "Then clinical engagement and evidence: is the tool part of standard ways of working, and has it been tested locally, including for fairness across patient groups?",
          "The last checks cover real-time data links, medical device rules checked with the MHRA, the Medicines and Healthcare products Regulatory Agency, and tool-specific staff training.",
          "The quickest test is the AI register, because no register means surface-level adoption, whatever else you have."
        ] },
      { scene: { type: "graph", title: "The vehicle is the easy part",
          nodes: [
            { id: "amb", label: "High-spec\nambulance", p: [0, 0.2, 1.0], c: "cyan", shape: "box", size: 1.1, ls: 0.7 },
            { id: "crew", label: "Trained crews", p: [-4.4, 1.9, -0.6], c: "violet", shape: "sphere", size: 0.9 },
            { id: "disp", label: "Dispatch rules", p: [4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9 },
            { id: "maint", label: "Maintenance", p: [-1.8, 3.2, -1.6], c: "slate", shape: "cyl", size: 0.9 },
            { id: "safe", label: "Safety checks", p: [1.8, 3.2, -1.6], c: "green", shape: "shield", size: 0.9 },
            { id: "honest", label: "Honest\nscoring", p: [-4.4, -0.3, 0.5], c: "amber", shape: "torus", size: 0.9, ls: 0.7 }
          ],
          links: [["amb", "crew"], ["amb", "disp"], ["amb", "maint"], ["amb", "safe"]],
          steps: [["amb"], ["crew", "disp", "maint", "safe"], ["amb"], ["honest"], ["honest"], "all"] },
        say: [
          "Here is an everyday comparison: buying a high-spec ambulance does not give you a paramedic service.",
          "You also need trained crews, dispatch rules, maintenance and safety checks.",
          "The vehicle is the easy part, just as the AI tool is the easy part.",
          "The book says the single most important habit is to score your organisation honestly, not on how good you hope it is.",
          "If you are unsure between two scores, take the lower one.",
          "Now try the activities below and see if you can spot the red flags of surface-level adoption."
        ] }
    ]
  },

  l2: {
    keyPoint: "There are five levels of AI maturity, from AI Unaware to AI Native, and you cannot skip any of them, because each level is the base for the next.",
    slides: [
      { scene: { type: "stairs", title: "The five levels of AI maturity",
          levels: [
            { label: "1. AI Unaware", c: "slate" },
            { label: "2. AI Aware", c: "cyan" },
            { label: "3. AI\nExperimenting", c: "amber" },
            { label: "4. AI Scaling", c: "violet" },
            { label: "5. AI Native", c: "green" }
          ],
          flat: false,
          steps: ["all", 0, 1, 2, 3, 4, "all"] },
        say: [
          "In this lesson, we climb the five levels of AI maturity, from AI Unaware to AI Native.",
          "Level 1, AI Unaware, means no AI strategy, paper or old computer systems, no governance and no AI budget.",
          "Level 2, AI Aware, means an AI strategy exists, the electronic health record, or EHR, is complete, leaders are learning and the first talks with suppliers have begun.",
          "Level 3, AI Experimenting, means two to four pilots are running, governance is forming and clinical champions are named.",
          "Level 4, AI Scaling, means five or more uses are live, a governance council is working, a data platform is active and a return on investment has been shown.",
          "Level 5, AI Native, means AI is built in everywhere, with constant learning loops and patient outcomes measured.",
          "Each level is a real jump in capability, not a small tweak."
        ] },
      { scene: { type: "graph", title: "You cannot skip levels: each step is the base for the next",
          nodes: [
            { id: "ehr", label: "Finish\nthe EHR", p: [-4.6, 0.4, 0.2], c: "slate", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "data", label: "Fix the\ndata", p: [-2.3, 2.4, -0.8], c: "cyan", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "pilots", label: "Tested\npilots", p: [0, 0.4, 0.2], c: "amber", shape: "box", size: 0.9, ls: 0.7 },
            { id: "council", label: "Governance\ncouncil", p: [2.3, 2.4, -0.8], c: "violet", shape: "shield", size: 0.9, ls: 0.7 },
            { id: "scale", label: "Scale and\nkeep learning", p: [4.6, 0.4, 0.2], c: "green", shape: "ico", size: 1.0, ls: 0.7, spin: true }
          ],
          links: [["ehr", "data"], ["data", "pilots"], ["pilots", "council"], ["council", "scale"]],
          steps: ["all", ["ehr", "data", "pilots"], ["council", "scale"], "all", ["pilots"], ["pilots", "council"]] },
        say: [
          "The key rule is that you cannot skip levels, because each one is the base for the next.",
          "First you finish the EHR, then you fix the data, then you run validated pilots, meaning pilots that have been properly tested.",
          "After that you set up a working governance council, and only then do you scale up and keep learning.",
          "It is like learning to drive: you start with the controls and quiet roads, not the motorway, and skipping steps is how crashes happen.",
          "A common mistake is thinking that deploying an AI scribe, a tool that helps write up clinical notes, puts you at Level 3.",
          "A scribe is only a technology item, and Level 3 also needs governance forming, champions active and AI training delivered."
        ] },
      { scene: { type: "stairs", title: "You do not need Level 5 to make real progress",
          levels: [
            { label: "1. AI Unaware", c: "slate" },
            { label: "2. AI Aware", c: "cyan" },
            { label: "3. AI\nExperimenting", c: "amber" },
            { label: "4. AI Scaling", c: "violet" },
            { label: "5. AI Native", c: "green" }
          ],
          flat: false,
          steps: [4, 4, 0, 1, "all"] },
        say: [
          "The book says that no organisation in the NHS, the National Health Service, is assessed at full Level 5.",
          "The nearest international examples are UCSF, the University of California, San Francisco, and Mayo Clinic.",
          "But a small trust does not need Level 5.",
          "What it needs is to move properly from Level 1 to Level 2.",
          "Now try the activities below to put the five levels in order and match each one to its signs."
        ] }
    ]
  },

  l3: {
    keyPoint: "Score all six dimensions honestly and look at the shape, not the average: technology far ahead of governance is the warning sign.",
    slides: [
      { scene: { type: "graph", title: "Six dimensions, each scored from 1 to 5",
          nodes: [
            { id: "org", label: "Your\norganisation", p: [0, 0.2, 1.0], c: "white", shape: "ico", size: 1.1, ls: 0.7, spin: true },
            { id: "strat", label: "Strategy and\nLeadership", p: [-4.4, 1.9, -0.6], c: "violet", shape: "slab", size: 0.8, ls: 0.68 },
            { id: "data", label: "Data\nReadiness", p: [4.4, 1.9, -0.6], c: "cyan", shape: "cyl", size: 0.9, ls: 0.68 },
            { id: "gov", label: "Governance\nand Ethics", p: [-1.8, 3.2, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.68 },
            { id: "work", label: "Workforce\nCapability", p: [1.8, 3.2, -1.6], c: "pink", shape: "sphere", size: 0.9, ls: 0.68 },
            { id: "tech", label: "Technology\nArchitecture", p: [-4.4, -0.3, 0.5], c: "cyan", shape: "box", size: 0.9, ls: 0.68 },
            { id: "cult", label: "Culture and\nChange", p: [4.4, -0.3, 0.5], c: "amber", shape: "torus", size: 0.9, ls: 0.68 }
          ],
          links: [["org", "strat"], ["org", "data"], ["org", "gov"], ["org", "work"], ["org", "tech"], ["org", "cult"]],
          steps: ["all", ["strat"], ["data"], ["gov"], ["work"], ["tech"], ["cult"]] },
        say: [
          "In this lesson, you will score your organisation from 1 to 5 on six dimensions, the six areas that together make up AI maturity.",
          "Strategy and Leadership asks whether AI is in the corporate plan, with a named board champion and a dedicated AI budget.",
          "Data Readiness looks for a complete electronic health record, or EHR, common data standards such as FHIR, a standard way to share health data, and work on data quality.",
          "Governance and Ethics covers a council, an AI register, bias monitoring, ethics review and classification by the MHRA, the UK regulator for medical devices.",
          "Workforce Capability means AI literacy, clinical champions, and AI training built into continuing professional development.",
          "Technology Architecture covers cloud plans, links between systems, and readiness for an AI platform.",
          "Culture and Change asks whether clinicians trust AI, whether change is well managed, and whether tools are designed together with clinicians."
        ] },
      { scene: { type: "bars", title: "The book's sample NHS trust: technology well ahead of governance", scale: 1.0,
          bars: [
            { id: "strat", label: "Strategy", v: 2, p: [-5, 0], c: "slate" },
            { id: "data", label: "Data", v: 2, p: [-3, 0], c: "slate" },
            { id: "gov", label: "Governance", v: 1, p: [-1, 0], c: "red" },
            { id: "work", label: "Workforce", v: 2, p: [1, 0], c: "slate" },
            { id: "tech", label: "Technology", v: 3, p: [3, 0], c: "cyan" },
            { id: "cult", label: "Culture", v: 2, p: [5, 0], c: "slate" }
          ],
          axes: [{ t: "Maturity score (1 to 5)", p: [0, -2.2, 1.6] }],
          steps: ["all", "all", ["tech", "gov"], ["tech", "gov"], ["gov"], ["tech"]] },
        say: [
          "You can plot the six scores on a spider-web shape called a radar chart, and compare them with a peer benchmark of about Level 4.",
          "Here is the book's sample trust in the NHS, the National Health Service: Strategy 2, Data 2, Governance 1, Workforce 2, Technology 3 and Culture 2.",
          "Notice that Technology, at 3, sits well above Governance, at 1.",
          "The shape of your chart matters more than the average, because a big gap between technology and governance is the fingerprint of surface-level adoption.",
          "So the lesson is to invest in governance before buying more technology.",
          "Be careful, because technology is usually the highest score in NHS trusts, yet misleadingly so, since a finished EHR alone only earns around Level 2 on technology."
        ] },
      { scene: { type: "graph", title: "Technology without governance: an engine without brakes",
          nodes: [
            { id: "car", label: "Your\norganisation", p: [0, 0.2, 1.0], c: "white", shape: "box", size: 1.1, ls: 0.7 },
            { id: "engine", label: "Technology\n= the engine", p: [-4.2, 1.9, -0.6], c: "cyan", shape: "cyl", size: 1.0, ls: 0.7 },
            { id: "brakes", label: "Governance\n= the brakes", p: [4.2, 1.9, -0.6], c: "red", shape: "shield", size: 1.0, ls: 0.7 }
          ],
          links: [["car", "engine"], ["car", "brakes"]],
          steps: [["car", "engine"], ["car"], ["engine", "brakes"], "all"] },
        say: [
          "Think of a car with a huge engine but no brakes.",
          "It is not an advanced car, it is a dangerous one.",
          "Technology without governance is the engine without the brakes.",
          "Now try the self-assessment below, and pick the description that fits your organisation today, not where you hope to be."
        ] }
    ]
  },

  l4: {
    keyPoint: "The Trough of Disillusionment comes from advanced AI placed on weak foundations, so use it to build governance and foundations rather than giving up on AI.",
    slides: [
      { scene: { type: "hype", title: "The Gartner Hype Cycle applied to healthcare AI",
          points: [
            { label: "Technology\ntrigger", at: 0.05, c: "slate" },
            { label: "Peak of inflated\nexpectations", at: 0.2, c: "red" },
            { label: "Trough of\ndisillusionment", at: 0.42, c: "amber" },
            { label: "Slope of\nenlightenment", at: 0.66, c: "cyan" },
            { label: "Plateau of\nproductivity", at: 0.92, c: "green" }
          ],
          steps: ["all", "all", 0.05, 0.2, 0.42, 0.66, 0.92] },
        say: [
          "In this lesson, we look at the Gartner Hype Cycle, a picture of how people feel about a new technology over time.",
          "It adds a time view to the maturity levels, because it asks whether the technology is proven, not just whether your organisation is ready.",
          "It starts with the Technology Trigger, when AI enters healthcare and early experiments begin.",
          "Next comes the Peak of Inflated Expectations, with big promises and big spending, such as IBM Watson for Oncology.",
          "Then comes the Trough of Disillusionment, when failures appear and trust in clinical AI is damaged.",
          "On the Slope of Enlightenment, evidence builds, for example for properly tested AI scribes in the NHS, the National Health Service.",
          "Finally, the Plateau of Productivity brings steady, proven value, for example the AI used in NHS diabetic eye screening."
        ] },
      { scene: { type: "graph", title: "Why the Trough happens, and what to do in it",
          nodes: [
            { id: "ai", label: "Advanced AI", p: [-4.5, 2.2, -0.6], c: "cyan", shape: "ico", size: 1.0, spin: true },
            { id: "weak", label: "Weak\nfoundations", p: [-4.5, -0.2, 0.5], c: "red", shape: "slab", size: 0.8, ls: 0.7 },
            { id: "trough", label: "The Trough", p: [-0.6, 1.0, 0.8], c: "amber", shape: "torus", size: 1.0 },
            { id: "watson", label: "Watson missed\nits limits", p: [2.0, 3.1, -1.6], c: "red", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "build", label: "Build\nfoundations", p: [4.2, 0.6, 0.5], c: "green", shape: "box", size: 1.0, ls: 0.7 }
          ],
          links: [["ai", "trough"], ["weak", "trough"], ["trough", "watson"], ["trough", "build"]],
          steps: [["ai", "weak", "trough"], ["watson", "weak"], ["build"], ["build"], ["build"]] },
        say: [
          "The book says the Trough is caused by a maturity mismatch, which means advanced AI placed on weak organisational foundations.",
          "Watson did not fail because AI is wrong for cancer care, but because hospitals could not spot its limits before patients were affected.",
          "So the Trough is not a time to go cold, but the best time to build foundations.",
          "Suppliers may offer better prices, there is less competition for clinical champions' time, and evidence is growing.",
          "Organisations that reach the Slope with strong foundations deploy AI more easily and more cheaply."
        ] },
      { scene: { type: "hype", title: "Like a gym in the new year: keep training through the dip",
          points: [
            { label: "January rush", at: 0.2, c: "red" },
            { label: "Many quit", at: 0.42, c: "amber" },
            { label: "Kept training\nand benefit", at: 0.9, c: "green" }
          ],
          steps: [0.2, 0.42, 0.9, "all", "all", "all"] },
        say: [
          "Think of a gym in January and February, when everyone joins in a rush.",
          "Many people quit when it gets hard.",
          "The people who quietly kept training are the ones who benefit.",
          "This is not a lesson in cynicism, because diabetic eye screening AI is a real success story.",
          "The aim is to navigate the cycle, not to avoid AI.",
          "Now try the activities below to put the phases in order and place each example on the curve."
        ] }
    ]
  },

  l5: {
    keyPoint: "UCSF succeeded by building healthcare-specific foundations over about a decade, while money and strong technology alone did not save Amazon or Walmart.",
    slides: [
      { scene: { type: "graph", title: "Same period, very different results",
          nodes: [
            { id: "mat", label: "Healthcare-specific\nmaturity", p: [0, 0.2, 1.0], c: "violet", shape: "ico", size: 1.1, ls: 0.7, spin: true },
            { id: "ucsf", label: "UCSF", p: [-4.4, 1.9, -0.6], c: "green", shape: "box", size: 1.0 },
            { id: "amz", label: "Amazon\nOne Medical", p: [4.4, 1.9, -0.6], c: "red", shape: "cyl", size: 1.0, ls: 0.7 },
            { id: "wal", label: "Walmart\nHealth", p: [4.4, -0.3, 0.5], c: "red", shape: "cyl", size: 1.0, ls: 0.7 }
          ],
          links: [["ucsf", "mat"], ["amz", "mat"], ["wal", "mat"]],
          steps: ["all", ["ucsf", "mat"], ["amz", "wal"], ["ucsf"], ["amz"], ["wal"], "all"] },
        say: [
          "In this lesson, we compare three organisations around 2021 to 2022: UCSF, Amazon One Medical and Walmart Health.",
          "UCSF, the University of California, San Francisco, is a university hospital that took a phased, safety-first approach.",
          "Amazon One Medical and Walmart Health had huge money and strong technology, but not the healthcare-specific maturity needed.",
          "UCSF spent about a decade building governance, data quality and clinical champions before scaling up.",
          "Amazon had top technology, but low healthcare-specific governance, workforce and culture.",
          "At Walmart Health, culture sat at Level 1 in a clinical setting, because retail and clinical ways of working did not match.",
          "Money and general technical skill did not replace healthcare-specific maturity."
        ] },
      { scene: { type: "bars", title: "Technology and governance scores (author's teaching estimates)", scale: 0.8,
          bars: [
            { id: "ut", label: "UCSF\ntechnology", v: 4, p: [-5, 0], c: "cyan" },
            { id: "ug", label: "UCSF\ngovernance", v: 4, p: [-3, 0], c: "green" },
            { id: "at", label: "Amazon\ntechnology", v: 5, p: [-1, 0], c: "cyan" },
            { id: "ag", label: "Amazon\ngovernance", v: 1, p: [1, 0], c: "red" },
            { id: "wt", label: "Walmart\ntechnology", v: 4, p: [3, 0], c: "cyan" },
            { id: "wg", label: "Walmart\ngovernance", v: 1, p: [5, 0], c: "red" }
          ],
          axes: [{ t: "Maturity score (1 to 5)", p: [0, -2.2, 1.6] }],
          steps: ["all", ["ut", "ug"], ["at", "ag"], ["wt", "wg"], ["at", "ag"], "all"] },
        say: [
          "The book scores all three organisations from 1 to 5 on the same dimensions you met earlier.",
          "UCSF scored 4 on technology and 4 on governance, and was strong in every dimension except culture, which scored 3.",
          "Amazon One Medical scored 5 on technology, but only 1 on governance.",
          "Walmart Health scored 4 on technology, and again only 1 on governance.",
          "Technology at 5 with governance at 1 is the riskiest profile in healthcare AI, because more technology with no governance means more risk, not more value.",
          "Remember that these scores are the author's estimates from published accounts, for teaching, and are not independently verified figures."
        ] },
      { scene: { type: "graph", title: "Foundations first, then the roof",
          nodes: [
            { id: "found", label: "Foundations\n(UCSF)", p: [-4.4, 0.2, 0.5], c: "green", shape: "slab", size: 1.0, ls: 0.7 },
            { id: "roof", label: "Impressive roof\n(the others)", p: [-4.4, 2.8, -1.0], c: "red", shape: "box", size: 0.9, ls: 0.7 },
            { id: "trust", label: "Small\nNHS trust", p: [0, 1.0, 1.0], c: "violet", shape: "sphere", size: 1.0, ls: 0.7 },
            { id: "fdp", label: "Federated\nData Platform", p: [4.4, 2.2, -0.6], c: "cyan", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "lab", label: "NHS AI Lab", p: [4.4, -0.2, 0.5], c: "cyan", shape: "ico", size: 0.9 }
          ],
          links: [["found", "roof"], ["trust", "fdp"], ["trust", "lab"]],
          steps: [["found", "roof"], "all", ["trust"], ["trust", "fdp", "lab"], "all"] },
        say: [
          "Think of it this way: UCSF built the foundations of a house over many years, while the others rushed to put up an impressive roof.",
          "These failures do not prove that AI cannot work in healthcare.",
          "And a small trust in the NHS, the National Health Service, does not need to copy UCSF's top level.",
          "The book advises it to move step by step from Level 1 to Level 2, using shared NHS infrastructure such as the Federated Data Platform and the NHS AI Lab.",
          "Now try the activities below to sort the UCSF approach from the corporate failures."
        ] }
    ]
  },

  l6: {
    keyPoint: "Governance before technology, milestones not dates, and one level at a time, with a funded governance council in place before any pilot goes live.",
    slides: [
      { scene: { type: "stairs", title: "A roadmap for each level jump: foundation first, then deployment",
          levels: [
            { label: "Level 1 to 2", c: "slate" },
            { label: "Level 2 to 3", c: "cyan" },
            { label: "Level 3 to 4", c: "violet" },
            { label: "Level 4 to 5", c: "green" }
          ],
          flat: false,
          steps: ["all", "all", 0, 1, 2, 3, "all"] },
        say: [
          "In this lesson, you will turn your maturity score into a plan, and meet the group that keeps you honest.",
          "The book gives a roadmap for each level jump, split into months 1 to 6 for foundations and months 7 to 12 for deployment.",
          "For Level 1 to 2, first finish the electronic health record, or EHR, and appoint an AI readiness lead, then draft a strategy, audit your data and design governance.",
          "For Level 3, set up a governance council, fix the data and launch champions, then start a first AI scribe with monitoring and a baseline for bias.",
          "For Level 4, mature your governance and build AI literacy into staff development, then add three to five more uses and publish the AI register.",
          "For Level 5, publish an ethics framework and automate monitoring, then roll out AI across the whole organisation with national benchmarking.",
          "Each jump ends with a milestone, which is a result you can check, such as two pilots with documented outcomes and sign-off."
        ] },
      { scene: { type: "graph", title: "The AI governance council",
          nodes: [
            { id: "council", label: "Governance\ncouncil", p: [0, 0.2, 1.0], c: "violet", shape: "shield", size: 1.2, ls: 0.7, spin: true },
            { id: "reg", label: "AI register", p: [-4.4, 1.9, -0.6], c: "cyan", shape: "slab", size: 0.8 },
            { id: "officer", label: "Responsible\nofficer per tool", p: [4.4, 1.9, -0.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.68 },
            { id: "review", label: "Performance\nand bias reviews", p: [-1.8, 3.2, -1.6], c: "green", shape: "cyl", size: 0.9, ls: 0.68 },
            { id: "board", label: "Reports to\nthe board", p: [1.8, 3.2, -1.6], c: "violet", shape: "box", size: 0.9, ls: 0.68 },
            { id: "budget", label: "At least 15%\nof AI budget", p: [4.4, -0.3, 0.5], c: "amber", shape: "torus", size: 0.9, ls: 0.68 }
          ],
          links: [["council", "reg"], ["council", "officer"], ["council", "review"], ["council", "board"], ["budget", "council"]],
          steps: ["all", ["council", "reg"], ["officer", "review"], ["board"], ["council"], ["budget"], ["budget"]] },
        say: [
          "Three rules guide the roadmap: governance before technology, milestones not dates, and one level at a time.",
          "The AI governance council is the group that decides which AI tools are used, checks they work safely and fairly, and keeps the AI register.",
          "It names a responsible officer for every tool, and it reviews performance and bias data regularly.",
          "At Level 4 the council is operational and reports to the board every quarter, and by Level 5 it sits at board level.",
          "The book says organisations with formal councils are about twice as likely to achieve their expected return on investment, meaning the value they hoped to get back.",
          "The roadmap suggests giving governance at least 15 per cent of the AI budget when moving from Level 2 to Level 3.",
          "Set that money aside before pilots go live, because funding governance from pilot budgets after they start is a classic error."
        ] },
      { scene: { type: "graph", title: "Like a medicines committee: it checks, it does not slow care",
          nodes: [
            { id: "council", label: "Governance\ncouncil", p: [-4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 1.0, ls: 0.7 },
            { id: "meds", label: "Medicines\ncommittee", p: [-4.4, -0.3, 0.5], c: "green", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "patients", label: "Patients", p: [0, 0.8, 1.0], c: "pink", shape: "sphere", size: 1.1 },
            { id: "one", label: "One level\nat a time", p: [4.4, 1.9, -0.6], c: "amber", shape: "box", size: 0.9, ls: 0.7 }
          ],
          links: [["council", "patients"], ["meds", "patients"]],
          steps: [["council", "meds"], ["patients"], ["one"], "all"] },
        say: [
          "A governance council is like a hospital's medicines committee.",
          "It does not slow care, it makes sure that what reaches patients has been checked.",
          "And remember that jumping two levels at once produces surface-level adoption, so move one level at a time.",
          "Now try the activities below to build your own foundation and deployment plan."
        ] }
    ]
  }
};
