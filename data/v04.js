/* Chapter 4 lesson videos: narrated 3D scenes (Sam, your tutor). */
window.COURSE_VIDEO = window.COURSE_VIDEO || {};
window.COURSE_VIDEO[4] = {
  l1: {
    keyPoint: "The algorithm usually works. Projects fail because of the technology, strategy, governance and culture around it, and real failures usually hit several of these at once.",
    slides: [
      {
        scene: { type: "bars", title: "The failure paradox: strong in research, weak in real hospitals", scale: 0.05,
          bars: [
            { id: "b50", label: "Trial benefit\nfewer than (%)", v: 50, p: [-4.5, 0], c: "amber" },
            { id: "b33", label: "Real-world impact\nfewer than (%)", v: 33, p: [-1.5, 0], c: "red" },
            { id: "b70", label: "Stuck at pilot\nabout (%)", v: 70, p: [1.5, 0], c: "red" },
            { id: "b62", label: "Clinicians using\nunapproved AI (%)", v: 62, p: [4.5, 0], c: "violet" }
          ],
          axes: [ { t: "Per cent", p: [0, -2.2, 1.6] } ],
          steps: [ "all", "all", ["b50"], ["b33"], ["b70"], ["b62"], "all" ] },
        say: [
          "Welcome to Chapter 4, Learning from Failure: Why Healthcare AI Projects Go Wrong, and I'm Sam, your tutor.",
          "This chapter shows why AI tools that shine in research so often stumble in real hospitals, and what must be in place for them to succeed.",
          "A review in The Lancet Digital Health looked at 130 AI clinical trials, and fewer than half showed a clear benefit that stood up statistically.",
          "Fewer than a third had real-world impact beyond the trial itself.",
          "A 2024 McKinsey report found that about 70 per cent of AI projects fail to scale beyond the pilot stage.",
          "In the NHS, the National Health Service, 62 per cent of clinicians were reported in 2024 to use at least one AI tool their employer had not approved.",
          "The big idea is simple: the algorithm usually works, but the governance, strategy, data and culture around it are what fail."
        ]
      },
      {
        scene: { type: "graph", title: "The Healthcare AI Failure Taxonomy: four boxes",
          nodes: [
            { id: "hub", label: "Failed AI\nproject", p: [0, 0.2, 1.0], c: "slate", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "tech", label: "Technology:\nthe plumbing fails", p: [-4.6, 1.9, -0.6], c: "cyan", shape: "box", size: 0.9, ls: 0.65 },
            { id: "strat", label: "Strategy:\nthe plan was wrong", p: [4.6, 1.9, -0.6], c: "amber", shape: "cyl", size: 0.9, ls: 0.65 },
            { id: "gov", label: "Governance:\nnobody was watching", p: [-1.8, 3.3, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "cult", label: "Culture:\npeople left out", p: [1.8, 3.3, -1.6], c: "pink", shape: "sphere", size: 0.9, ls: 0.65 }
          ],
          links: [ ["hub", "tech"], ["hub", "strat"], ["hub", "gov"], ["hub", "cult"] ],
          steps: [ "all", ["hub", "tech"], ["hub", "strat"], ["hub", "gov"], ["hub", "cult"], "all", "all" ] },
        say: [
          "A taxonomy is just a sorting system, and this one has four boxes that every failure story fits into.",
          "Technology means the plumbing does not work, for example the AI cannot read the hospital's record system, or it slows down when 5,000 patients replace 50.",
          "Strategy means the plan was wrong, such as picking AI because a rival did, or signing a contract with no exit clause.",
          "Governance means nobody was watching, with no AI Governance Council, no bias check and no consent framework.",
          "Culture means people were left out, like clinicians who were never consulted or staff quietly using unapproved tools.",
          "Think of a new hospital wing that is perfectly built but has no clear purpose, no safety inspectors and no willing staff, so it stays empty.",
          "Real failures such as Watson and Amazon hit all four boxes at once, so find your weakest box before go-live, starting with the activities below."
        ]
      }
    ]
  },

  l2: {
    keyPoint: "Watson failed mainly through weak governance and strategy, not weak software. Validate locally, demand evidence, use diverse data, respect maturity, plan an exit and be open.",
    slides: [
      {
        scene: { type: "stairs", title: "IBM Watson Health: from quiz show to sale", flat: true,
          levels: [
            { label: "2011\nWins Jeopardy", c: "amber" },
            { label: "2013\nMD Anderson $62m", c: "amber" },
            { label: "2017\nContract cancelled", c: "red" },
            { label: "2021\nSold for $1bn", c: "slate" }
          ],
          steps: [ "all", 0, 1, 2, 3, "all" ] },
        say: [
          "In this lesson, we look at IBM Watson Health, where more than 3 billion dollars was invested over about ten years.",
          "In 2011, IBM's Watson won the TV quiz show Jeopardy, and IBM then marketed it as technology that would transform medicine.",
          "In 2013, MD Anderson, a cancer hospital, committed 62 million dollars.",
          "In 2017, MD Anderson cancelled the contract, and the 62 million dollars was lost.",
          "In 2021, Watson Health was sold for 1 billion dollars.",
          "Buying Watson on the strength of a quiz-show win is like hiring a surgeon because they won a general-knowledge contest."
        ]
      },
      {
        scene: { type: "graph", title: "What went wrong: one hospital's data, used everywhere",
          nodes: [
            { id: "watson", label: "Watson", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "msk", label: "Memorial Sloan\nKettering data", p: [-4.4, 1.9, -0.6], c: "amber", shape: "cyl", size: 0.9, ls: 0.65 },
            { id: "else", label: "India, South Korea,\nThailand", p: [4.4, 1.9, -0.6], c: "red", shape: "sphere", size: 0.9, ls: 0.65 },
            { id: "early", label: "14+ health systems\nbefore validation", p: [-1.9, 3.3, -1.6], c: "red", shape: "box", size: 0.9, ls: 0.65 },
            { id: "gov", label: "Weak governance\nand strategy", p: [1.9, 3.3, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 }
          ],
          links: [ ["msk", "watson"], ["watson", "else"], ["watson", "early"], ["gov", "watson"] ],
          steps: [ ["msk", "watson"], ["watson", "else"], ["watson", "early"], ["watson", "gov"], ["gov"] ] },
        say: [
          "Watson was trained mostly on data from one famous hospital, Memorial Sloan Kettering, whose patients, doctors and record-keeping were unusual.",
          "Elsewhere, including India, South Korea and Thailand, Watson did not perform as hoped.",
          "It had been deployed in 14 or more health systems before validation, meaning proper testing, was complete.",
          "The sources call its language technology genuinely sophisticated, so the failure was mainly weak governance, weak strategy and poor conditions at the hospitals using it.",
          "The earliest warning signs were there years before the contract was cancelled, but there was no route for them to reach people with the power to act."
        ]
      },
      {
        scene: { type: "stairs", title: "Six lessons any hospital can borrow",
          levels: [
            { label: "1. Validate locally", c: "green" },
            { label: "2. Evidence first", c: "cyan" },
            { label: "3. Diverse data", c: "cyan" },
            { label: "4. Maturity first", c: "violet" },
            { label: "5. Exit strategy", c: "amber" },
            { label: "6. Be transparent", c: "green" }
          ],
          steps: [ 0, 1, 2, 3, 4, 5, "all" ] },
        say: [
          "The first of six fair lessons is that local validation is non-negotiable, so test the tool on your own patients before clinical use.",
          "Second, put evidence over marketing, and ask for peer-reviewed evidence from a setting similar to yours.",
          "Third, the training data must reflect the people you actually treat.",
          "Fourth, reach the right maturity level before deploying, and do not skip levels, as covered in Chapter 2.",
          "Fifth, build performance milestones and exit triggers into the contract.",
          "Sixth, choose transparency over cover-up, and publish how the tool performs, including its weaknesses.",
          "Now try the activities below to rebuild the Watson timeline and match each problem to its lesson."
        ]
      }
    ]
  },

  l3: {
    keyPoint: "Failure is a chain: data bias, subgroup unfairness, distribution shift, model degradation and alert fatigue. Each link can be spotted and stopped, but only if someone is looking.",
    slides: [
      {
        scene: { type: "stairs", title: "A chain of five links, falling like dominoes",
          levels: [
            { label: "1. Data bias", c: "red" },
            { label: "2. Subgroup\nunfairness", c: "red" },
            { label: "3. Distribution\nshift", c: "amber" },
            { label: "4. Model\ndegradation", c: "amber" },
            { label: "5. Alert fatigue", c: "red" }
          ],
          steps: [ "all", 0, 1, 2, 3, 4 ] },
        say: [
          "In this lesson, we follow five failure modes that fall like dominoes, so a tool accurate on day one can harm patients by day 300.",
          "It starts with data bias, where the training data is unrepresentative or reflects past unfairness.",
          "That leads to subgroup unfairness, where the tool works worse for some groups of patients.",
          "Next comes distribution shift, where the real patients differ from the ones the tool learned from.",
          "Then model degradation sets in, a slow decline in performance over time.",
          "Finally comes clinical rejection, also called alert fatigue, where staff learn to ignore the alerts."
        ]
      },
      {
        scene: { type: "bars", title: "Obermeyer 2019: patients with the same need, enrolled for extra care", scale: 0.08,
          bars: [
            { id: "black", label: "Black patients", v: 17.7, p: [-2, 0], c: "red" },
            { id: "white", label: "White patients", v: 46.5, p: [2, 0], c: "slate" }
          ],
          axes: [ { t: "Enrolled for extra care (%)", p: [0, -2.2, 1.6] } ],
          steps: [ "all", ["black", "white"], "all", ["black"], ["black"], "all" ] },
        say: [
          "A famous 2019 study by Obermeyer and colleagues looked at a widely used US algorithm that picked patients for extra care.",
          "It enrolled 17 point 7 per cent of Black patients who needed care, against 46 point 5 per cent of white patients with the same level of need.",
          "The reason was that it used past healthcare spending as a stand-in for health need.",
          "Black patients had historically received less costly care at the same level of need, so the tool scored them lower.",
          "It was not intentional discrimination, because the tool simply learned a historical injustice faithfully.",
          "A good overall score can hide a poor result for one group, so always ask for results broken down by ethnicity, age, sex and deprivation."
        ]
      },
      {
        scene: { type: "graph", title: "From changing patients to ignored alerts",
          nodes: [
            { id: "shift", label: "Patients\nchange", p: [-4.5, 1.0, 0], c: "amber", shape: "sphere", size: 1.0, ls: 0.7 },
            { id: "decline", label: "Quiet\ndecline", p: [-1.5, 1.0, 0], c: "amber", shape: "cyl", size: 1.0, ls: 0.7 },
            { id: "alarms", label: "False\nalarms", p: [1.5, 1.0, 0], c: "red", shape: "ico", size: 1.0, ls: 0.7 },
            { id: "ignored", label: "Alerts\nignored", p: [4.5, 1.0, 0], c: "red", shape: "box", size: 1.0, ls: 0.7 }
          ],
          links: [ ["shift", "decline"], ["decline", "alarms"], ["alarms", "ignored"] ],
          steps: [ ["shift"], ["shift"], ["decline"], "all", ["alarms", "ignored"], ["ignored"], "all" ] },
        say: [
          "Distribution shift means the patients in front of the tool no longer look like the ones it learned from.",
          "The sources give the example of tools that predict sepsis, a dangerous reaction to infection, whose accuracy dropped during the COVID pandemic.",
          "Degradation is the slow decline that follows, and because the tool still produces numbers, nobody notices.",
          "It is like a satnav with an old map that still gives confident directions, because the roads changed but the map did not.",
          "Eventually the false alarms teach staff to dismiss alerts, so the tool is switched on but clinically useless.",
          "The warning light to watch is a falling alert acknowledgement rate, meaning fewer alerts are being acknowledged by staff.",
          "Now try the activities below to put the five links of the chain in order."
        ]
      }
    ]
  },

  l4: {
    keyPoint: "Check before, during and after go-live. The checks before go-live create the baselines that later monitoring depends on, so governance cannot catch up afterwards.",
    slides: [
      {
        scene: { type: "stairs", title: "A three-stage safety net",
          levels: [
            { label: "1. Before go-live", c: "green" },
            { label: "2. Live monitoring", c: "cyan" },
            { label: "3. Post-deployment\nreview", c: "violet" }
          ],
          steps: [ "all", 0, 1, 2, "all", "all" ] },
        say: [
          "In this lesson, we look at how to break the chain with a three-stage safety net, before, during and after go-live.",
          "Stage one happens before go-live, and it is the point where effort pays off most, because failures prevented here avoid all later costs.",
          "Stage two is live monitoring, which carries on for as long as the tool is in use.",
          "Stage three is a post-deployment review, held quarterly or yearly, with a bias audit and agreed points for suspending the tool.",
          "The key idea is that stage one creates the starting measurements, or baselines, that stage two needs.",
          "Without a starting measurement, you cannot tell whether performance has slipped."
        ]
      },
      {
        scene: { type: "stairs", title: "Stage one: five actions before switching on",
          levels: [
            { label: "1. Data audit", c: "cyan" },
            { label: "2. Subgroup testing", c: "cyan" },
            { label: "3. Compare\npopulations", c: "cyan" },
            { label: "4. Co-design with\nclinicians", c: "pink" },
            { label: "5. Council sign-off", c: "violet" }
          ],
          steps: [ 0, 1, 2, 3, 4 ] },
        say: [
          "First, a data audit checks that your local data is complete, correctly coded and representative.",
          "Second, subgroup testing looks at results by ethnicity, age band, sex and deprivation, and if the vendor has no such data, you test locally.",
          "Third, a distribution analysis compares the patients the tool was trained on with your own patients.",
          "Fourth, frontline clinicians help shape how alerts appear and what happens when they disagree with the AI.",
          "Finally, the AI Governance Council signs off, because no approval means no deployment."
        ]
      },
      {
        scene: { type: "graph", title: "Stages two and three: triggers agreed in advance",
          nodes: [
            { id: "tool", label: "Live AI tool", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "drift", label: "Example: 5% fall\nin AUC", p: [-4.4, 1.9, -0.6], c: "amber", shape: "cyl", size: 0.9, ls: 0.65 },
            { id: "review", label: "Governance\nreview", p: [-1.9, 3.3, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "trig", label: "Decommission\ntriggers", p: [1.9, 3.3, -1.6], c: "red", shape: "box", size: 0.9, ls: 0.65 },
            { id: "base", label: "Baselines taken\nbefore go-live", p: [4.4, 1.9, -0.6], c: "green", shape: "slab", size: 0.9, ls: 0.65 }
          ],
          links: [ ["tool", "drift"], ["drift", "review"], ["review", "trig"], ["base", "tool"] ],
          steps: [ ["tool", "drift", "review"], ["drift"], ["trig"], ["trig"], ["base"], "all" ] },
        say: [
          "During live use, a pre-set threshold triggers a governance review automatically when performance falls.",
          "For example, the trigger might be a 5 per cent relative fall in AUC, a score of how well a tool tells cases apart, where higher is better.",
          "For the review stage, decommission triggers are set in advance, so the tool is suspended if its score drops too low or the gap between groups grows too wide.",
          "One teaching example suspends a tool if a group's AUC falls more than 10 per cent below the overall AUC, but these figures are examples, not rules.",
          "Governance cannot catch up after go-live, because the baseline measurements can only be taken before deployment.",
          "Now try the activities below to sort each safeguard into the right stage."
        ]
      }
    ]
  },

  l5: {
    keyPoint: "Every failed organisation in the comparison scored 1 on healthcare governance, whatever its technology score. Success needs balance and strong governance, not perfect technology.",
    slides: [
      {
        scene: { type: "bars", title: "Technology scores varied widely", scale: 0.8,
          bars: [
            { id: "wat", label: "IBM Watson", v: 3, p: [-3.6, 0], c: "slate" },
            { id: "amz", label: "Amazon /\nOne Medical", v: 5, p: [-1.2, 0], c: "cyan" },
            { id: "wal", label: "Walmart Health", v: 2, p: [1.2, 0], c: "amber" },
            { id: "ucsf", label: "UCSF benchmark", v: 4, p: [3.6, 0], c: "green" }
          ],
          axes: [ { t: "Technology score", p: [0, -2.2, 1.6] } ],
          steps: [ "all", "all", ["ucsf"], ["amz", "wat", "wal"], "all" ] },
        say: [
          "In this lesson, we look at big companies that moved into primary care, the everyday first-contact care people get from a family doctor.",
          "The chapter names Amazon with One Medical, CVS with Oak Street, and Walmart Health, but the sources only give detailed scores for Amazon and Walmart.",
          "These are compared with IBM Watson and with UCSF, which serves as the benchmark.",
          "On technology, Amazon scored 5, Watson scored 3 and Walmart scored 2.",
          "UCSF scored 4, so technology strength varied a lot across the group."
        ]
      },
      {
        scene: { type: "bars", title: "Healthcare governance: the common weak spot", scale: 0.8,
          bars: [
            { id: "wat", label: "IBM Watson", v: 1, p: [-3.6, 0], c: "red" },
            { id: "amz", label: "Amazon /\nOne Medical", v: 1, p: [-1.2, 0], c: "red" },
            { id: "wal", label: "Walmart Health", v: 1, p: [1.2, 0], c: "red" },
            { id: "ucsf", label: "UCSF benchmark", v: 4, p: [3.6, 0], c: "violet" }
          ],
          axes: [ { t: "Healthcare governance score", p: [0, -2.2, 1.6] } ],
          steps: [ "all", ["wat", "amz", "wal"], ["ucsf"], ["amz"], "all" ] },
        say: [
          "Now look at healthcare governance, where the pattern is striking.",
          "Every failed organisation scored 1 on healthcare governance, whether its technology score was 5 or 2.",
          "UCSF scored 4 across all six dimensions, showing that success needs balance and strong governance, not perfect technology.",
          "A high technology score with a low governance score is the riskiest profile, because more technology without oversight multiplies risk.",
          "It is like a powerful engine in a car with no brakes and no driver training, which is more dangerous than a weak engine, not less."
        ]
      },
      {
        scene: { type: "graph", title: "What the sources say about Amazon and Walmart",
          nodes: [
            { id: "amz", label: "Amazon /\nOne Medical", p: [-3.2, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.1, ls: 0.7 },
            { id: "gov", label: "Weak healthcare\nAI governance", p: [-4.6, 2.4, -0.8], c: "violet", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "priv", label: "Privacy incidents\nand culture clash", p: [-1.5, 3.3, -1.6], c: "red", shape: "box", size: 0.9, ls: 0.65 },
            { id: "wal", label: "Walmart Health\nclosed 2024", p: [3.2, 0.2, 1.0], c: "amber", shape: "cyl", size: 1.0, ls: 0.7 },
            { id: "strat", label: "Price and location,\nweak care model", p: [4.6, 2.4, -0.8], c: "red", shape: "slab", size: 0.9, ls: 0.65 },
            { id: "nhs", label: "NHS trust:\nsame risk", p: [1.5, 3.3, -1.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 }
          ],
          links: [ ["amz", "gov"], ["amz", "priv"], ["wal", "strat"] ],
          steps: [ ["amz", "gov"], ["amz", "priv"], ["wal"], ["wal", "strat"], ["nhs"], ["nhs"], "all" ] },
        say: [
          "For Amazon, the sources point to weak healthcare-specific AI governance.",
          "They also mention privacy incidents under HIPAA, the US health privacy law, and clinicians who saw the corporate culture as a threat to their independence.",
          "Walmart Health closed in 2024, and its main problem was strategy.",
          "Its plan assumed convenient locations and low prices would win patient trust, without a strong clinical care model.",
          "An NHS trust scoring 4 on technology and 1 on governance is in the same risky position.",
          "Being part of the NHS does not automatically supply governance, staff engagement or regulatory readiness.",
          "Now try the activities below to balance your own preparation effort across the areas that matter."
        ]
      }
    ]
  },

  l6: {
    keyPoint: "Rules turn weak processes into real consequences, such as withdrawal or suspension of a tool. Name someone responsible for compliance from the start and close high-priority gaps before go-live.",
    slides: [
      {
        scene: { type: "graph", title: "Who is who: the regulators",
          nodes: [
            { id: "tool", label: "Your AI tool", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true },
            { id: "mhra", label: "MHRA:\nmedical devices", p: [-4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "ico", label: "ICO:\ndata protection", p: [0, 3.3, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "cqc", label: "CQC:\ninspects care", p: [4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9, ls: 0.65 }
          ],
          links: [ ["tool", "mhra"], ["tool", "ico"], ["tool", "cqc"] ],
          steps: [ "all", ["tool", "mhra"], ["ico"], ["cqc"], ["tool", "mhra"] ] },
        say: [
          "In this lesson, we see how unclear or ignored rules make a mistake worse, because your plan may rest on a tool that is forced to stop.",
          "The MHRA, the Medicines and Healthcare products Regulatory Agency, regulates medical devices, including some software.",
          "The ICO, the Information Commissioner's Office, enforces data protection.",
          "The CQC, the Care Quality Commission, inspects care services.",
          "A tool that counts as a software medical device needs regulatory clearance before clinical use, and if nobody has checked, that is a governance gap."
        ]
      },
      {
        scene: { type: "graph", title: "The regulatory risk matrix: gaps and what could happen",
          nodes: [
            { id: "hub", label: "Regulatory\nrisk matrix", p: [0, 0.2, 1.0], c: "slate", shape: "ico", size: 1.1, spin: true, ls: 0.7 },
            { id: "mhra", label: "No MHRA clearance\nHIGH", p: [-4.4, 1.9, -0.6], c: "red", shape: "box", size: 0.85, ls: 0.65 },
            { id: "logs", label: "No EU AI Act logs\nHIGH", p: [4.4, 1.9, -0.6], c: "red", shape: "box", size: 0.85, ls: 0.65 },
            { id: "consent", label: "No consent\nframework: HIGH", p: [-1.9, 3.3, -1.6], c: "red", shape: "box", size: 0.85, ls: 0.65 },
            { id: "bias", label: "No bias testing\nHIGH", p: [1.9, 3.3, -1.6], c: "red", shape: "box", size: 0.85, ls: 0.65 },
            { id: "council", label: "No Governance\nCouncil: MEDIUM", p: [-3.6, -0.3, 1.2], c: "amber", shape: "cyl", size: 0.85, ls: 0.65 },
            { id: "exit", label: "No exit clauses\nMEDIUM", p: [3.6, -0.3, 1.2], c: "amber", shape: "cyl", size: 0.85, ls: 0.65 }
          ],
          links: [ ["hub", "mhra"], ["hub", "logs"], ["hub", "consent"], ["hub", "bias"], ["hub", "council"], ["hub", "exit"] ],
          steps: [ "all", ["hub", "mhra"], ["logs"], ["consent"], ["bias"], ["council", "exit"], "all" ] },
        say: [
          "The chapter's regulatory risk matrix links each gap to who might act and what could happen.",
          "Missing MHRA clearance is high priority, and an MHRA audit could lead to withdrawal of the tool and an enforcement notice.",
          "Article 12 of the European Union's AI Act requires automatically generated logs for high-risk AI, and missing them is high priority, with possible suspension and a penalty.",
          "A missing consent framework is also high priority, because an ICO investigation could lead to the processing of patient data being suspended.",
          "Skipping subgroup bias testing is high priority too, as an Equality Act claim could lead to the tool being taken out of use and audited.",
          "A missing AI Governance Council is medium priority, with a possible improvement notice, and contracts without exit clauses are also rated medium.",
          "A suspended tool means clinicians lose it with no warning, which is a patient-safety issue too."
        ]
      },
      {
        scene: { type: "stairs", title: "Do not leave regulation until later",
          levels: [
            { label: "1. Name a\ncompliance lead", c: "violet" },
            { label: "2. Classify each\nAI tool", c: "cyan" },
            { label: "3. Close HIGH gaps\nbefore go-live", c: "red" },
            { label: "4. Check current\nrules", c: "amber" }
          ],
          steps: [ "all", 0, 1, 2, 3, "all" ] },
        say: [
          "So do not treat regulation as paperwork to sort out later.",
          "The sources urge naming a person responsible for compliance planning from the very start.",
          "Check whether each AI tool counts as a software medical device before it is deployed.",
          "Close high-priority gaps before go-live, even for a pilot, because a pilot still involves real patients and real data.",
          "Always check the current dates and rules, as they change.",
          "Now try the activities below and make the call as the Digital Director."
        ]
      }
    ]
  }
};
