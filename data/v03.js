/* Chapter 3 lesson videos: narrated 3D scenes (Sam, your tutor). */
window.COURSE_VIDEO = window.COURSE_VIDEO || {};
window.COURSE_VIDEO[3] = {
  l1: {
    keyPoint: "Clinical AI needs proof, not promises: evidence of consent, untouched data and a trustworthy record of every access, kept where attackers cannot reach it.",
    slides: [
      {
        scene: { type: "bars", title: "Two attacks on the NHS, one shared gap", scale: 0.0002,
          bars: [
            { id: "wc", label: "WannaCry 2017\nappointments", v: 19000, p: [-3.6, 0], c: "red" },
            { id: "sa", label: "Synnovis 2024\nappointments", v: 10000, p: [0, 0], c: "amber" },
            { id: "so", label: "Synnovis 2024\noperations", v: 1700, p: [3.6, 0], c: "amber" }
          ],
          axes: [ { t: "Appointments and operations hit", p: [0, -2.2, 1.6] } ],
          steps: [ "all", "all", ["wc"], ["wc"], ["sa", "so"], ["sa", "so"], "all" ] },
        say: [
          "Welcome to Chapter 3, Trust Infrastructure for Clinical AI, and I'm Sam, your tutor.",
          "This chapter shows how to build proof of what an AI did with patient data, because without that proof nobody can fully trust it.",
          "In 2017 the WannaCry ransomware attack, a kind of attack that locks up computer systems, hit 80 trusts in the NHS, the National Health Service.",
          "It cost the NHS about £92 million, and around 19,000 appointments were cancelled.",
          "In 2024 an attack on Synnovis, a blood-testing supplier serving six major London trusts, exposed the data of about 300,000 patients.",
          "About 10,000 outpatient appointments were cancelled and 1,700 operations were postponed.",
          "In both attacks, investigators struggled to say what data was affected, because the activity logs sat on the same systems that were attacked."
        ]
      },
      {
        scene: { type: "graph", title: "Three questions every clinical AI must answer",
          nodes: [
            { id: "ai", label: "AI tool using\npatient data", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "sep", label: "Record kept\nout of reach", p: [-4.4, 1.9, -0.6], c: "green", shape: "shield", size: 1.0, ls: 0.7 },
            { id: "con", label: "Consent\ncurrent?", p: [-2, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "int", label: "Data free from\ntampering?", p: [2, 3.2, -1.6], c: "amber", shape: "box", size: 0.9, ls: 0.7 },
            { id: "aud", label: "Record of\nevery access?", p: [4.4, 1.9, -0.6], c: "green", shape: "slab", size: 0.9, ls: 0.7 }
          ],
          links: [ ["ai", "con"], ["ai", "int"], ["ai", "aud"], ["aud", "sep"] ],
          steps: [ "all", ["sep"], ["ai"], ["ai", "con"], ["ai", "int"], ["ai", "aud"] ] },
        say: [
          "It is like a shop that keeps its CCTV recorder in the same back room as the safe, so burglars can wipe the footage too.",
          "You need the recording kept somewhere they cannot reach.",
          "Whenever an AI tool uses patient data, someone should be able to answer three questions with evidence, not just promises.",
          "Consent: was the patient's permission current at the moment the AI acted?",
          "Data integrity: was the data free from tampering between collection and use?",
          "Audit: is there a trustworthy record of every time the data was accessed?"
        ]
      },
      {
        scene: { type: "graph", title: "Four words for proof, not promises",
          nodes: [
            { id: "hub", label: "Proof, not\npromises", p: [0, 0.2, 1.0], c: "green", shape: "shield", size: 1.2, spin: true, ls: 0.7 },
            { id: "dp", label: "Data\nprovenance", p: [-4.4, 1.9, -0.6], c: "cyan", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "mp", label: "Model\nprovenance", p: [-2, 3.2, -1.6], c: "cyan", shape: "ico", size: 0.9, ls: 0.7 },
            { id: "at", label: "Audit\ntrail", p: [2, 3.2, -1.6], c: "slate", shape: "slab", size: 0.9, ls: 0.7 },
            { id: "ct", label: "Consent\ntraceability", p: [4.4, 1.9, -0.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 }
          ],
          links: [ ["hub", "dp"], ["hub", "mp"], ["hub", "at"], ["hub", "ct"] ],
          steps: [ ["dp"], ["mp"], ["at"], ["ct"], ["hub"], "all" ] },
        say: [
          "Data provenance is the history of a dataset: where it came from, and proof that it has not been quietly changed.",
          "Model provenance is the same idea for the AI itself: which version ran, what data it was trained on, and how it was checked.",
          "An audit trail is simply a dated record of who did what.",
          "Consent traceability means you can show a patient's permission for a specific use, step by step.",
          "Remember that a policy saying we only use data with consent is not proof, because regulators and investigators want records of what really happened.",
          "Now try the activities below to check you can tell these ideas apart."
        ]
      }
    ]
  },

  l2: {
    keyPoint: "A blockchain keeps a tamper-evident record of what happened to data, not the patient records themselves. Use it only where several parties must trust one shared record.",
    slides: [
      {
        scene: { type: "chain", title: "A blockchain is a shared, sealed record book",
          blocks: ["Entry 1", "Entry 2", "Entry 3", "Entry 4", "Entry 5"],
          focus: 2, focusLabel: "This page is sealed", tamperLabel: "One line rubbed out:\nseals break", okLabel: "Every copy agrees", netLabel: "Copies held by\nmany organisations",
          steps: [0, 0, 1, 2, 3, 4, 4] },
        say: [
          "In this lesson, we look at when a blockchain is genuinely worth it, and when an ordinary database does the job.",
          "A blockchain is a shared record book where each new entry is linked to the one before it by a fingerprint called a hash.",
          "Picture a visitors' book that is photocopied and held by many organisations, with each page stamped by a seal that depends on the page before.",
          "Rub out one line, and every seal after it breaks.",
          "Everyone holding a copy would notice, because many independent computers must agree, so no single organisation can quietly change the record.",
          "This is called immutability, which means a written record cannot be altered without detection.",
          "A third feature is smart contracts, which are rules written as computer code that run automatically, such as no valid consent means no access."
        ]
      },
      {
        scene: { type: "graph", title: "What goes on the chain, and what does not",
          nodes: [
            { id: "chain", label: "Shared record:\nhashes, details,\naccess events", p: [-2.6, 0.6, 0.8], c: "cyan", shape: "box", size: 1.1, spin: true, ls: 0.65 },
            { id: "nhs", label: "NHS systems:\nclinical data", p: [2.6, 0.6, 0.8], c: "green", shape: "cyl", size: 1.1, ls: 0.7 },
            { id: "myth", label: "Myth: blockchain\nencrypts data", p: [0, 3.0, -1.4], c: "red", shape: "sphere", size: 0.9, ls: 0.7 }
          ],
          links: [ ["chain", "nhs"] ],
          steps: [ "all", ["chain"], ["myth"], ["chain", "nhs"] ] },
        say: [
          "Here is the most important point: the blockchain stores the record of what happened to the data, not the patient's clinical records.",
          "That record holds hashes, details such as source and date, and access events.",
          "A common myth is that blockchain encrypts and secures patient data, but it does not.",
          "It makes the governance record tamper-evident, while the clinical data stays in NHS systems."
        ]
      },
      {
        scene: { type: "stairs", title: "Three ways to keep logs",
          levels: [
            { label: "Ordinary\ndatabase logs", c: "slate" },
            { label: "Cloud locked\nstorage", c: "amber" },
            { label: "Permissioned\nblockchain", c: "cyan" }
          ],
          flat: false,
          steps: [ "all", 0, 1, 2, 2, 0, "all" ] },
        say: [
          "There are three main ways to keep logs, from the simplest to the most independent.",
          "Ordinary database logs are simple and cheap, but the administrators who run the system can edit them.",
          "Cloud immutable storage is locked by the vendor's design and is a reasonable short-term step, but you must trust the vendor and its contract.",
          "A permissioned blockchain, which only approved organisations can join, lets any participant check that the record is unaltered.",
          "It is more complex, so it is only worth it where several parties must trust one record.",
          "A central system that already works well, or a record only one department uses, is fine with an ordinary database.",
          "Now try the activities below to sort real situations into the right box."
        ]
      }
    ]
  },

  l3: {
    keyPoint: "A shared, tamper-evident record can enforce consent automatically, show which AI model did what with a human in the loop, and give hospitals one history they can all rely on. For NHS patient data, use a permissioned network.",
    slides: [
      {
        scene: { type: "stairs", title: "Pattern 1: following one patient's consent", flat: true,
          levels: [
            { label: "Consent given\nin NHS app", c: "green" },
            { label: "Smart contract\nchecks consent", c: "cyan" },
            { label: "Access logged\nas an event", c: "slate" },
            { label: "Withdrawal:\naccess blocked", c: "red" },
            { label: "Report for\nthe regulator", c: "violet" }
          ],
          steps: [ "all", 0, 1, 2, 3, 4, "all" ] },
        say: [
          "In this lesson, we look at three trust patterns, starting with what happens when a patient says yes or no to an AI using their data.",
          "The patient gives consent in the NHS app, and it is recorded as an entry on the shared record.",
          "When the AI asks for data, a smart contract checks consent first.",
          "Each access is then logged as an event.",
          "If the patient withdraws, that is recorded as a new entry, the original is kept, and the AI's access is blocked straight away.",
          "A regulator can then ask for a report built from those records.",
          "This matters because GDPR, the General Data Protection Regulation, says withdrawing consent must be as easy as giving it."
        ]
      },
      {
        scene: { type: "graph", title: "Patterns 2 and 3: model governance and shared records",
          nodes: [
            { id: "hub", label: "Shared\nrecord", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "data", label: "Training data\nfingerprint", p: [-4.4, 1.9, -0.6], c: "cyan", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "bias", label: "Bias\ncheck", p: [-2, 3.2, -1.6], c: "amber", shape: "box", size: 0.9, ls: 0.7 },
            { id: "alert", label: "AI raised\nan alert", p: [2, 3.2, -1.6], c: "red", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "review", label: "Clinician\nreview", p: [4.4, 1.9, -0.6], c: "violet", shape: "shield", size: 0.9, ls: 0.7 },
            { id: "inst", label: "Hospitals, GPs\nand suppliers", p: [-4.4, -0.3, 0.4], c: "violet", shape: "torus", size: 0.9, ls: 0.7 }
          ],
          links: [ ["hub", "data"], ["hub", "bias"], ["hub", "alert"], ["hub", "review"], ["alert", "review"], ["hub", "inst"] ],
          steps: [ ["hub"], ["hub", "data", "bias"], ["hub", "alert", "review"], ["hub", "data", "alert", "review"], ["inst"], ["hub", "inst"] ] },
        say: [
          "The second pattern is AI model governance, using the same shared record.",
          "It can hold a fingerprint of the training data and a bias check.",
          "It can also log each time the AI raised an alert, and the clinician review that followed.",
          "This shows which model did what, on which data, with a human in the loop.",
          "The third pattern is sharing across institutions, where hospitals, GP practices, which are local family doctors, and suppliers swap data.",
          "The record of who shared what with whom is held in common, so no single trust owns the history and each can rely on it."
        ]
      },
      {
        scene: { type: "graph", title: "Public or permissioned?",
          nodes: [
            { id: "pub", label: "Public\nblockchain", p: [-2.6, 0.6, 0.8], c: "red", shape: "sphere", size: 1.1, ls: 0.7 },
            { id: "perm", label: "Permissioned\nblockchain", p: [2.6, 0.6, 0.8], c: "green", shape: "shield", size: 1.1, ls: 0.7 },
            { id: "pubsee", label: "Everyone sees\nactivity", p: [-4.6, 2.6, -1.0], c: "red", shape: "slab", size: 0.8, ls: 0.7 },
            { id: "pubcost", label: "High energy,\nunpredictable fees", p: [-1.6, 3.3, -1.6], c: "amber", shape: "cyl", size: 0.8, ls: 0.65 },
            { id: "permctl", label: "Approved members,\nNHS in control", p: [1.6, 3.3, -1.6], c: "violet", shape: "slab", size: 0.8, ls: 0.65 },
            { id: "permcost", label: "Minimal energy,\nfixed cost", p: [4.6, 2.6, -1.0], c: "green", shape: "cyl", size: 0.8, ls: 0.7 }
          ],
          links: [ ["pub", "pubsee"], ["pub", "pubcost"], ["perm", "permctl"], ["perm", "permcost"] ],
          steps: [ ["pub", "pubsee"], ["pub", "pubcost"], ["perm", "permctl"], ["perm", "permcost"], ["perm"], "all" ] },
        say: [
          "Finally, a public blockchain, such as Ethereum, is open to anyone, so everyone can see the activity and nobody in particular controls who joins.",
          "It also uses a very high amount of energy for what is called mining, and its fees per record are unpredictable.",
          "A permissioned blockchain, such as Hyperledger Fabric, lets only approved, known organisations join, with the NHS or a named authority in control.",
          "Its energy use is minimal, and it has a fixed infrastructure cost.",
          "For NHS patient data, permissioned is the recommended choice, and public is not suitable.",
          "Now have a go at the activities below to follow a consent journey and sort the two types."
        ]
      }
    ]
  },

  l4: {
    keyPoint: "The trust layer sits on top of existing systems: the chain holds fingerprints, details and access events, while clinical data stays in the patient record. Good data quality still matters.",
    slides: [
      {
        scene: { type: "stairs", title: "Four layers, from bottom to top",
          levels: [
            { label: "1. Data layer", c: "slate" },
            { label: "2. Record layer", c: "cyan" },
            { label: "3. Rules layer", c: "violet" },
            { label: "4. Application\nlayer", c: "green" }
          ],
          flat: false,
          steps: [ "all", "all", 0, 1, 2, 3 ] },
        say: [
          "In this lesson, the good news is that you do not have to rip out your patient record system to build trust.",
          "The trust layer sits on top of what NHS trusts already have, in four layers from bottom to top.",
          "At the bottom, the data layer is your existing patient record systems, imaging, ward devices and AI models, and nothing is replaced.",
          "Next, the record layer is the permissioned blockchain, holding consent tokens that show a current permission exists, access events, and fingerprints of the data.",
          "Above that, the rules layer holds smart contracts, such as consent enforcement and access control.",
          "At the top, the application layer gives people dashboards for consent, audit queries and compliance reports."
        ]
      },
      {
        scene: { type: "graph", title: "The audit layer listens; clinical data stays put",
          nodes: [
            { id: "ehr", label: "Patient record:\nclinical values", p: [-4.5, 1.0, 0], c: "green", shape: "cyl", size: 1.0, ls: 0.7 },
            { id: "fhir", label: "HL7 FHIR\nconnections", p: [-1.5, 1.0, 0.6], c: "cyan", shape: "torus", size: 1.0, ls: 0.7 },
            { id: "audit", label: "Audit layer\nlistens", p: [1.5, 1.0, 0.6], c: "violet", shape: "ico", size: 1.0, spin: true, ls: 0.7 },
            { id: "chain", label: "On the chain:\nhash, category,\ntimestamp", p: [4.5, 1.0, 0], c: "cyan", shape: "box", size: 1.0, ls: 0.65 }
          ],
          links: [ ["ehr", "fhir"], ["fhir", "audit"], ["audit", "chain"] ],
          steps: [ ["fhir"], ["fhir", "audit"], ["audit", "chain"], ["ehr"], "all" ] },
        say: [
          "HL7 FHIR, short for Fast Healthcare Interoperability Resources, is a standard way for health systems to exchange data through connections called APIs.",
          "The audit layer listens to those exchanges.",
          "Only details such as the data category, a hashed, or fingerprinted, patient identifier and a timestamp go on the chain.",
          "The clinical values stay in the patient record.",
          "It is like a hospital reception visitors' book, which notes who came, when and whom they saw, but never copies the patient's notes into the book."
        ]
      },
      {
        scene: { type: "chain", title: "Example: the audit trail for a sepsis alert tool",
          blocks: ["Consent token", "AI queried data", "Alert with\nconfidence score", "Clinician review"],
          focus: 2, focusLabel: "Fixed once written", tamperLabel: "Any edit shows up", okLabel: "Trail checks out", netLabel: "Copies held by\nseveral parties",
          steps: [0, 0, 1, 2, 1, 4] },
        say: [
          "Take an AI tool that raises sepsis alerts as an example.",
          "The record layer logs a consent token, each time the AI queried data, each alert with its confidence score, and the clinician review of every alert.",
          "Each of these entries is fixed once it is written.",
          "Any later edit would show up, which makes the trail strong evidence.",
          "But records of bad data stay bad, and a tamper-proof trail of poorly coded or incomplete data only makes the mess permanent.",
          "So data quality still matters, and the activities below let you practise deciding what goes on the chain."
        ]
      }
    ]
  },

  l5: {
    keyPoint: "A tamper-evident record helps you prove compliance with GDPR and the EU AI Act, but it does not make legal decisions or replace your Data Protection Officer.",
    slides: [
      {
        scene: { type: "graph", title: "How the record helps with the law",
          nodes: [
            { id: "hub", label: "Tamper-evident\nrecord", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "g52", label: "GDPR Art 5(2)\nprove you comply", p: [-4.4, 1.9, -0.6], c: "violet", shape: "slab", size: 0.9, ls: 0.65 },
            { id: "g7", label: "GDPR Art 7\neasy withdrawal", p: [-2, 3.2, -1.6], c: "violet", shape: "slab", size: 0.9, ls: 0.65 },
            { id: "a10", label: "AI Act Art 10\ndata quality, bias", p: [2, 3.2, -1.6], c: "amber", shape: "box", size: 0.9, ls: 0.65 },
            { id: "a12", label: "AI Act Art 12\nautomatic logs", p: [4.4, 1.9, -0.6], c: "amber", shape: "box", size: 0.9, ls: 0.65 },
            { id: "a14", label: "AI Act Art 14\nhuman oversight", p: [4.4, -0.3, 0.4], c: "green", shape: "shield", size: 0.9, ls: 0.65 }
          ],
          links: [ ["hub", "g52"], ["hub", "g7"], ["hub", "a10"], ["hub", "a12"], ["hub", "a14"] ],
          steps: [ "all", "all", ["hub", "g52"], ["hub", "g7"], ["hub", "a10"], ["hub", "a12", "a14"], "all" ] },
        say: [
          "In this lesson, we look at what the law expects and how a trustworthy record helps you show it.",
          "GDPR, the General Data Protection Regulation, sits alongside the UK Data Protection Act, and the EU AI Act sets extra duties for high-risk AI.",
          "GDPR Article 5(2) asks you to prove you comply, and the records show every use was authorised and logged.",
          "Article 7 says withdrawing consent must be as easy as giving it, and a smart contract can block access straight away.",
          "Under the EU AI Act, Article 10 asks you to document training data quality and bias, which a dataset fingerprint plus a bias audit supports.",
          "Article 12 asks for automatic logs of the AI's operation, and Article 14 asks for human oversight, shown by recording each clinician review of an alert.",
          "Regulators care about integrity, because logs are only valuable if you can show they were not edited after the event."
        ]
      },
      {
        scene: { type: "graph", title: "Breach reporting, and what the record does not solve",
          nodes: [
            { id: "rec", label: "Independent\naccess record", p: [0, 0.2, 1.0], c: "green", shape: "shield", size: 1.2, spin: true, ls: 0.7 },
            { id: "breach", label: "Breach found:\n72-hour clock", p: [-4.4, 1.9, -0.6], c: "amber", shape: "torus", size: 0.9, ls: 0.7 },
            { id: "basis", label: "Legal basis:\npeople decide", p: [-2, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "less", label: "Collecting\nless data", p: [2, 3.2, -1.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "erase", label: "Right to erasure:\nlegal analysis", p: [4.4, 1.9, -0.6], c: "violet", shape: "sphere", size: 0.9, ls: 0.65 }
          ],
          links: [ ["rec", "breach"] ],
          steps: [ ["breach"], ["rec", "breach"], ["basis", "less"], ["erase"], ["erase", "rec"], "all", "all" ] },
        say: [
          "GDPR Article 33 expects a breach to be notified within 72 hours of becoming aware of it.",
          "An independent access record helps you become aware, and know the scope, much sooner.",
          "But the record does not decide your legal basis for using data, because people do that, and it cannot make you collect less data.",
          "The right to erasure, under Article 17, needs separate legal analysis.",
          "In this design, clinical data is erased from the patient record, while the separate governance record of the consent stays.",
          "So the idea that blockchain solves GDPR is a myth, because it supports evidence and enforcement but does not replace a Data Protection Officer's judgement.",
          "Now try the activities below to match each rule to what the record can and cannot do."
        ]
      }
    ]
  },

  l6: {
    keyPoint: "Check readiness first and put governance before technology. Build in three phases, moving on only when each milestone is met, so that your response to an attack is faster and provable.",
    slides: [
      {
        scene: { type: "graph", title: "Six readiness areas, each scored 1 to 5",
          nodes: [
            { id: "hub", label: "Readiness\nscore 1 to 5", p: [0, 0.2, 1.0], c: "white", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "tech", label: "Technical\ninfrastructure", p: [-4.4, 1.9, -0.6], c: "cyan", shape: "box", size: 0.9, ls: 0.7 },
            { id: "gov", label: "Governance and\nlegal framework", p: [-2, 3.2, -1.6], c: "violet", shape: "shield", size: 0.9, ls: 0.7 },
            { id: "data", label: "Data quality\nand standards", p: [2, 3.2, -1.6], c: "cyan", shape: "cyl", size: 0.9, ls: 0.7 },
            { id: "use", label: "Use case\nclarity", p: [4.4, 1.9, -0.6], c: "slate", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "stake", label: "Stakeholder\nreadiness", p: [-4.4, -0.3, 0.4], c: "violet", shape: "torus", size: 0.9, ls: 0.7 },
            { id: "budget", label: "Budget and\nresource", p: [4.4, -0.3, 0.4], c: "amber", shape: "slab", size: 0.9, ls: 0.7 }
          ],
          links: [ ["hub", "tech"], ["hub", "gov"], ["hub", "data"], ["hub", "use"], ["hub", "stake"], ["hub", "budget"] ],
          steps: [ "all", ["hub"], ["hub", "tech", "gov", "data"], ["hub", "use", "stake", "budget"], ["gov"], ["tech", "gov"] ] },
        say: [
          "In this lesson, we ask the question that comes before buying anything: is our organisation ready, and what do we do first?",
          "You can score your organisation from 1 to 5 on six areas.",
          "The first three are technical infrastructure, the governance and legal framework, and data quality and standards.",
          "The other three are use case clarity, stakeholder readiness, and budget and resource.",
          "The rule is governance before technology, always.",
          "A typical trust is stronger on technology than on governance, which is the wrong way round."
        ]
      },
      {
        scene: { type: "stairs", title: "Three phases, each with a milestone",
          levels: [
            { label: "Phase 1 Foundation\nmonths 1-9", c: "violet" },
            { label: "Phase 2 Expansion\nmonths 10-18", c: "cyan" },
            { label: "Phase 3 Enterprise\nmonths 19-30", c: "green" }
          ],
          flat: false,
          steps: [ "all", 0, 0, 1, 2 ] },
        say: [
          "The roadmap has three phases, and you move on when you meet the milestone, not just because time has passed.",
          "Phase 1, Foundation, runs from months 1 to 9, with an audit of your FHIR data standards, a Data Protection Officer review, a pilot and one scoped consent use case.",
          "Its milestone is one AI tool with an audit trail and the Data Protection Officer's sign-off.",
          "Phase 2, Expansion, runs from months 10 to 18, with a legal review of smart contracts, aiming for consent that works across several trusts.",
          "Phase 3, Enterprise, runs from months 19 to 30, building a national network and automated reporting, so the trust is audit-ready for the regulator."
        ]
      },
      {
        scene: { type: "graph", title: "What a tamper-evident record would have changed in WannaCry",
          nodes: [
            { id: "hub", label: "Tamper-evident\nrecord", p: [0, 0.2, 1.0], c: "cyan", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "spot", label: "Spot mass\naccess sooner", p: [-4.4, 1.9, -0.6], c: "amber", shape: "sphere", size: 0.9, ls: 0.7 },
            { id: "scope", label: "Which records?\nHours, not weeks", p: [-2, 3.2, -1.6], c: "cyan", shape: "box", size: 0.9, ls: 0.7 },
            { id: "evid", label: "Evidence that\ncannot be disputed", p: [2, 3.2, -1.6], c: "green", shape: "shield", size: 0.9, ls: 0.65 },
            { id: "notify", label: "Notify the\nright patients", p: [4.4, 1.9, -0.6], c: "violet", shape: "torus", size: 0.9, ls: 0.7 }
          ],
          links: [ ["hub", "spot"], ["hub", "scope"], ["hub", "evid"], ["hub", "notify"] ],
          steps: [ ["hub"], ["hub", "spot"], ["hub", "scope"], ["hub", "evid", "notify"], "all", "all" ] },
        say: [
          "Looking back at WannaCry, a tamper-evident record would not have stopped the attack, but it would have changed the response in four ways.",
          "It would have helped spot unusual mass access sooner.",
          "It would have shown exactly which records were accessed, in hours rather than weeks.",
          "It would have kept evidence that cannot be disputed, and let the trust notify the right patients rather than everyone.",
          "Remember that these attacks caused real harm to real patients, including postponed cancer care, so the aim is learning, not scoring points.",
          "Now have a go at the activities below to plan your own first steps."
        ]
      }
    ]
  }
};
