window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA[3] = {
  num: 3,
  title: "Trust Infrastructure for Clinical AI",
  part: "Part I: Strategic Foundations",
  tagline: "If nobody can prove what an AI did with patient data, nobody can fully trust it. This chapter shows how to build that proof.",
  minutes: 55,
  outcomes: [
    "After this chapter you can explain what clinical AI must be able to prove: where its data came from, which model was used, who consented and what happened.",
    "You can judge when an ordinary database is enough and when a blockchain genuinely adds value.",
    "You can describe trust patterns for consent, AI model governance and sharing data between hospitals.",
    "You can sketch an audit trail that sits above NHS data standards (HL7 FHIR) without moving clinical records.",
    "You can link audit records to what the law expects under GDPR, the UK Data Protection Act and the EU AI Act.",
    "You can lay out a phased, governance-first roadmap for trust infrastructure."
  ],
  lessons: [
    {
      id: "l1",
      title: "Why trust needs proof",
      minutes: 9,
      icon: "🔐",
      hook: "In 2017 the NHS was hit by the WannaCry ransomware attack. The damage was huge, but one problem lasted longest: nobody could quickly say <i>which patient records had been touched</i>.",
      teach: [
        { h: "Two attacks, one gap", p: "WannaCry (2017) cost the NHS about £92 million, cancelled around 19,000 appointments and hit 80 NHS trusts. Synnovis (2024) was an attack on a blood-testing supplier serving six major London trusts. About 300,000 patients' data was exposed, about 10,000 outpatient appointments were cancelled and 1,700 operations were postponed." },
        { key: "In both attacks, investigators struggled to say what data was affected, because the activity logs sat on the same systems that were attacked." },
        { analogy: "Imagine a shop that keeps its CCTV recorder in the same back room as the safe. If burglars break in, they can wipe the footage too. You need the recording kept somewhere they cannot reach." },
        { h: "Three questions every clinical AI must answer", p: "Whenever an AI tool uses patient data, someone should be able to answer these with evidence, not just promises." },
        { list: [
          "<b>Consent:</b> was the patient's permission current at the moment the AI acted?",
          "<b>Data integrity:</b> was the data free from tampering between collection and use?",
          "<b>Audit:</b> is there a trustworthy record of every time the data was accessed?"
        ] },
        { h: "Four words to know", p: "<b>Data provenance</b> is the history of a dataset: where it came from and that it has not been quietly changed. <b>Model provenance</b> is the same idea for the AI itself: which version ran, on what data it was trained, and how it was checked. An <b>audit trail</b> is a dated record of who did what. <b>Consent traceability</b> means you can show a patient's permission for a specific use, step by step." },
        { warn: "A policy document that says 'we only use data with consent' is not proof. Regulators and investigators want records that show what really happened." }
      ],
      activities: [
        {
          type: "match",
          title: "Match the trust words",
          intro: "Match each term to its plain-English meaning.",
          pairs: [
            { l: "Data provenance", r: "Where the data came from, and proof it has not been changed" },
            { l: "Model provenance", r: "Which AI version ran, what it learned from and how it was checked" },
            { l: "Audit trail", r: "A dated record of who accessed or did what" },
            { l: "Consent traceability", r: "Being able to show a patient's permission for a specific use" },
            { l: "Hash", r: "A mathematical fingerprint of a file that changes if the file changes" }
          ]
        },
        {
          type: "tf",
          title: "Myth or fact?",
          intro: "Decide whether each statement about the two attacks is true.",
          items: [
            { s: "In WannaCry and Synnovis, a major difficulty was working out which data had been compromised.", a: true, why: "Yes. Because audit logs sat on the attacked systems, establishing the scope was slow and uncertain." },
            { s: "A trustworthy audit record should be kept on the same systems it is watching.", a: false, why: "If attackers or insiders control those systems, they can change the logs. An independent record is safer." },
            { s: "Consent traceability means a general 'we may share your data' tick is enough for any AI use.", a: false, why: "Consent has to be current and for the specific purpose, for example a sepsis prediction tool." },
            { s: "If an AI is trained on tampered data, its outputs may be unreliable and become a patient safety risk.", a: true, why: "Corrupted training data can quietly distort results, which is why data provenance matters." },
            { s: "Without an auditable record, an investigation after an incident becomes reconstruction instead of retrieval.", a: true, why: "Retrieval means looking up what happened. Reconstruction means guessing, which is hard to defend legally." },
            { s: "Good policies alone prove that an organisation is compliant.", a: false, why: "Under GDPR you must be able to demonstrate compliance, which needs records and not just policies." }
          ]
        },
        {
          type: "mcq",
          title: "Spot the root problem",
          intro: "Choose the best answer.",
          q: "What did WannaCry and Synnovis have in common that made their aftermath so hard to manage?",
          options: [
            "Both attacks were caused by staff sharing passwords",
            "Both were prevented by older paper systems",
            "Investigators could not easily establish which data had been affected",
            "Both only affected hospitals outside England"
          ],
          answer: 2,
          why: "Uncertainty about the scope of the data compromised was the shared problem, because records of access were on compromised systems. The password option sounds likely, but the sources do not say that, and it misses the governance gap this chapter is about.",
          hint: "Think about where the logs were kept."
        }
      ]
    },
    {
      id: "l2",
      title: "Database or blockchain?",
      minutes: 10,
      icon: "📒",
      hook: "'We need blockchain!' is said in many meetings. Often it is wrong. Sometimes it is exactly right. How do you tell?",
      teach: [
        { h: "What a blockchain actually is", p: "A blockchain is a shared record book. Each new entry is linked to the one before it by a fingerprint (a hash). Change an old entry and the fingerprints stop matching, so tampering shows up." },
        { analogy: "Think of a visitors' book that is photocopied and held by many organisations, with each page stamped using a seal that depends on the page before. Rubbing out one line would break every seal after it, and everyone holding a copy would notice." },
        { h: "Three properties in plain words", p: "These are the useful features for governance." },
        { list: [
          "<b>Immutability:</b> a written record cannot be altered without detection.",
          "<b>Smart contracts:</b> rules written as computer code that run automatically, such as 'no valid consent, no access'.",
          "<b>Distributed consensus:</b> many independent computers must agree, so no single organisation can quietly change the record."
        ] },
        { key: "The blockchain stores the record of what happened to the data (hashes, details such as source and date, and access events). It does not store patient clinical records." },
        { warn: "Common myth: 'blockchain encrypts and secures patient data'. It does not. It makes the governance record tamper-evident. The clinical data stays in NHS systems." },
        { h: "Three ways to keep logs", p: "The instructor material compares ordinary logs, cloud 'locked' storage and blockchain." },
        { table: { head: ["Option", "Strength", "Weakness"], rows: [
          ["Ordinary database logs", "Simple and cheap", "Can be edited by the administrators who run the system"],
          ["Cloud immutable storage", "Locked by the vendor's design; a reasonable short-term step", "You must trust the vendor and its contract"],
          ["Permissioned blockchain", "Any participant can check the record is unaltered", "More complex; only worth it where several parties must trust one record"]
        ] } }
      ],
      activities: [
        {
          type: "sort",
          title: "Database or blockchain?",
          intro: "Drop each situation into the box that fits best.",
          buckets: ["Ordinary database is enough", "Blockchain adds real value", "Blockchain will not fix this"],
          items: [
            { t: "A well-working central system like the NHS Spine", b: 0, why: "Adding blockchain just for its own sake adds complexity without value." },
            { t: "Proving AI logs were not edited, independent of the AI's own administrators", b: 1, why: "Independent tamper-evidence is exactly what immutability and shared copies offer." },
            { t: "Storing large scan or genome files", b: 2, why: "Blockchains are not designed for large files, so the big data stays elsewhere." },
            { t: "A trust with poor information governance habits", b: 2, why: "Technology cannot turn weak governance culture into good governance." },
            { t: "Several organisations need to rely on one shared consent record", b: 1, why: "No single organisation controls it, so each can trust it." },
            { t: "Tracking a medicine from manufacturer to patient across many companies", b: 1, why: "A chain-of-custody record shared by many parties is a good fit." },
            { t: "A single team's private to-do list", b: 0, why: "Nobody needs to prove anything to outsiders, so a simple tool does the job." },
            { t: "A local record that only one department ever uses", b: 0, why: "With one owner and no outside trust problem, a normal database is fine." }
          ]
        },
        {
          type: "hunt",
          title: "Spot the hype",
          intro: "Click the claims in this vendor pitch that should make you suspicious.",
          passage: "Our platform will [[store all your patients' full records on the chain, so nothing can ever be lost|Clinical records should stay in NHS systems; the chain holds hashes and access records only]]. It [[encrypts and secures every record so you can never be hacked|Blockchain makes the audit record tamper-evident; it does not stop attacks or encrypt your data]]. We use a [[fully public network open to everyone for maximum transparency|Public networks make activity visible to all and the NHS cannot control who runs the nodes]], and there is [[no need to involve your Data Protection Officer because the technology guarantees compliance|Legal basis and governance are human decisions; blockchain only records them]]. ((It records fingerprints of datasets and who accessed what, not the clinical data itself|This is the correct, careful description of what goes on the chain)). ((We suggest starting with one pilot use case|A small first step is good practice)).",
        },
        {
          type: "mcq",
          title: "The honest answer",
          intro: "Choose the best answer.",
          q: "A hospital wants tamper-proof logs for an AI tool. The vendor admits cloud immutable storage would work for now. What is the fairest summary?",
          options: [
            "Cloud storage is useless and must never be used",
            "Cloud immutable storage is a reasonable short-term step, but you rely on trusting the vendor, whereas a blockchain lets you check independently",
            "Cloud storage and blockchain are exactly the same",
            "Ordinary logs on the AI's own server are strongest because the hospital controls them"
          ],
          answer: 1,
          why: "The source treats cloud immutable storage as a reasonable short-term solution, but with vendor trust. Blockchain's edge is independent verification. Ordinary logs are weakest because the same administrators can edit them.",
          hint: "Who do you have to trust in each option?"
        }
      ]
    },
    {
      id: "l3",
      title: "Trust patterns",
      minutes: 10,
      icon: "🤝",
      hook: "A patient taps 'I withdraw consent'. How quickly does the AI actually stop using their data? Hours? Days?",
      teach: [
        { h: "Pattern 1: consent management", p: "Consent is recorded as an entry on the shared record. If the patient withdraws, that is recorded as a new entry. The original is kept, so the full history stays visible. A smart contract then blocks the AI's access straight away." },
        { key: "GDPR says withdrawing consent must be as easy as giving it. Automatic enforcement closes the gap between 'the patient said stop' and 'the system stopped'." },
        { steps: [
          "The patient gives consent in the NHS app and it is recorded.",
          "When the AI asks for data, a smart contract checks consent first.",
          "Each access is logged as an event.",
          "If the patient withdraws, a new entry records it and access is blocked.",
          "A regulator can ask for a report built from the records."
        ] },
        { h: "Pattern 2: AI model governance", p: "The same shared record can hold a fingerprint of a training dataset, a bias check, each time the AI raised an alert, and the clinician review that followed. This shows which model did what, on which data, with a human in the loop." },
        { h: "Pattern 3: sharing across institutions", p: "Where hospitals, GP practices and suppliers swap data, the record of who shared what with whom is held in common. No single trust owns the history, so each can rely on it." },
        { h: "Public or permissioned?", p: "A <b>public</b> blockchain such as Ethereum is open to anyone. A <b>permissioned</b> one, such as Hyperledger Fabric, lets only approved, known organisations join. For NHS patient data the sources recommend permissioned." },
        { table: { head: ["Question", "Public", "Permissioned"], rows: [
          ["Who sees activity?", "Everyone", "Approved organisations only"],
          ["Who controls membership?", "Nobody in particular", "The NHS or a named authority"],
          ["Energy use", "Very high (mining)", "Minimal"],
          ["Cost per record", "Unpredictable fees", "Fixed infrastructure cost"],
          ["NHS patient data?", "Not suitable", "Recommended"]
        ] } }
      ],
      activities: [
        {
          type: "order",
          title: "Follow the consent",
          intro: "Put the journey of one patient's consent in the right order.",
          items: [
            "Patient taps 'I consent' in the NHS app",
            "A consent entry is recorded in the shared, tamper-evident record",
            "The AI asks for data and a smart contract checks consent first",
            "The access is allowed and logged as an event",
            "The patient withdraws consent, recorded as a new entry",
            "The smart contract blocks the AI's access straight away",
            "A regulator asks for a report built from the records"
          ],
          why: "Consent is created, checked every time, logged, and withdrawn without erasing history. The report comes last because it is made from records that already exist."
        },
        {
          type: "rush",
          title: "Public or permissioned? Rush!",
          intro: "Sort each card as fast as you can before the timer runs out.",
          seconds: 45,
          buckets: ["Public blockchain", "Permissioned blockchain"],
          items: [
            { t: "Everyone can see activity", b: 0 },
            { t: "Only approved organisations join", b: 1 },
            { t: "NHS cannot control who runs the nodes", b: 0 },
            { t: "NHS decides who joins", b: 1 },
            { t: "Mining uses lots of energy", b: 0 },
            { t: "Voting consensus, minimal energy", b: 1 },
            { t: "Unpredictable per-record fees", b: 0 },
            { t: "Fixed infrastructure cost", b: 1 },
            { t: "Ethereum is an example", b: 0 },
            { t: "Hyperledger Fabric is an example", b: 1 },
            { t: "Not suitable for NHS patient data", b: 0 },
            { t: "Recommended for NHS patient data", b: 1 },
            { t: "Hard to apply NHS governance rules", b: 0 },
            { t: "Access is controlled", b: 1 }
          ]
        },
        {
          type: "memory",
          title: "Pattern pairs",
          intro: "Flip cards to match each pattern with what it records or does.",
          pairs: [
            { a: "Consent token", b: "Shows a current, specific permission exists" },
            { a: "Access event", b: "Logs each time the AI asks for data" },
            { a: "Alert event", b: "Logs when the AI raises an alert" },
            { a: "Oversight record", b: "Shows a clinician reviewed the alert" },
            { a: "Dataset hash", b: "Fingerprint of the training data" },
            { a: "Smart contract", b: "Rule that runs automatically, such as blocking access" }
          ]
        },
        {
          type: "mcq",
          title: "A vendor suggests Ethereum",
          intro: "Choose the best answer.",
          q: "A company proposes public Ethereum for NHS medicine supply tracking because many validators make it tamper-resistant. What is the strongest reply?",
          options: [
            "Accept, because tamper-resistance is the only thing that matters",
            "Accept, but only for patient names",
            "Reject on cost grounds alone",
            "Reject: the NHS cannot control a public network and patient-linked details could count as personal data, so a permissioned network is the safer choice"
          ],
          answer: 3,
          why: "Tamper-resistance is real, but it does not outweigh GDPR concerns and lack of governance control. Even hashed identifiers combined with date, facility and medicine type could count as personal data. Cost is a weaker argument on its own.",
          hint: "Who sees the activity, and who controls who joins?"
        }
      ]
    },
    {
      id: "l4",
      title: "Designing the audit trail",
      minutes: 9,
      icon: "🧱",
      hook: "Good news: you do not have to rip out your patient record system to build trust. The trust layer sits on top of it.",
      teach: [
        { h: "Four layers, bottom to top", p: "The sources describe a four-layer model. It adds to what NHS trusts already have." },
        { steps: [
          "<b>Data layer:</b> existing patient record systems, imaging, ward devices and AI models. Nothing is replaced.",
          "<b>Record layer:</b> the permissioned blockchain holding consent tokens, access events and provenance hashes.",
          "<b>Rules layer:</b> smart contracts such as consent enforcement and access control.",
          "<b>Application layer:</b> dashboards for consent, audit queries and compliance reports."
        ] },
        { h: "Where HL7 FHIR fits", p: "HL7 FHIR (Fast Healthcare Interoperability Resources) is a standard way for health systems to exchange data through connections called APIs. The audit layer listens to those exchanges. Only details such as the data category, a hashed patient identifier and a timestamp go on the chain. The clinical values stay in the patient record." },
        { analogy: "A hospital reception visitors' book notes who came, when and whom they saw. It does not copy the patient's notes into the book." },
        { key: "Put on the chain: hashes, details (source, date, purpose) and access events. Keep in the patient record: the clinical data itself." },
        { example: "For a sepsis alert tool, the record layer logs a consent token, each time the AI queried data, each alert with its confidence score, and the clinician review of every alert." },
        { warn: "Records of bad data stay bad. A tamper-proof trail of poorly coded or incomplete data only makes the mess permanent, so data quality still matters." }
      ],
      activities: [
        {
          type: "sort",
          title: "On the chain or in the record?",
          intro: "Where does each item belong in a well-designed trust layer?",
          buckets: ["On the chain (governance record)", "Stays in patient record systems"],
          items: [
            { t: "Fingerprint (hash) of a training dataset", b: 0, why: "A fingerprint proves integrity without creating another copy of the data." },
            { t: "Patient blood test results", b: 1, why: "Clinical values stay in the patient record, in line with data minimisation." },
            { t: "A log of each time the AI queried a record", b: 0, why: "Access events are exactly the governance record." },
            { t: "A consent token for sepsis monitoring", b: 0, why: "It shows a current, purpose-specific permission exists." },
            { t: "MRI and CT image files", b: 1, why: "Large files are not suited to a blockchain and are clinical data." },
            { t: "The clinician's review note on an AI alert", b: 1, why: "The note is clinical content. The chain records that a review happened, not the note itself." },
            { t: "The date, source system and purpose of a dataset", b: 0, why: "Details like these (metadata) are part of provenance." }
          ]
        },
        {
          type: "cloze",
          title: "Complete the design",
          intro: "Fill the gaps using the word bank.",
          text: "The trust layer {{adds}} to existing systems and does not replace them. It connects through {{HL7 FHIR}} connections. The chain stores {{hashes}} and access events, while clinical data stays in the {{patient record}}.",
          extra: ["scans", "deletes"],
          why: "The design is an add-on that records what happened, not a second home for patient data."
        },
        {
          type: "mcq",
          title: "Which layer?",
          intro: "Choose the best answer.",
          q: "Where do the rules like 'block the AI if consent is missing' live?",
          options: [
            "In the existing patient record system",
            "In the dashboards used by managers",
            "In the paper policy folder",
            "In the smart contracts layer, which checks consent before data is released"
          ],
          answer: 3,
          why: "Smart contracts hold the rules as code, so they are enforced automatically. A dashboard (application layer) lets people view results but does not enforce the rule, and a policy folder is the 'promise without proof' problem from Lesson 1."
        }
      ]
    },
    {
      id: "l5",
      title: "What the law expects",
      minutes: 9,
      icon: "⚖️",
      hook: "A regulator asks: 'Show me what your AI did with this patient's data last March.' Can you?",
      teach: [
        { h: "Laws in plain words", p: "GDPR is the General Data Protection Regulation. The UK Data Protection Act sits alongside it. The EU AI Act sets extra duties for high-risk AI. Audit infrastructure helps with several of their requirements." },
        { table: { head: ["Rule", "What it asks", "How the record helps"], rows: [
          ["GDPR Art. 5(2)", "Prove you comply", "Records show every use was authorised and logged"],
          ["GDPR Art. 7", "Withdrawal as easy as consent", "Smart contract blocks access straight away"],
          ["EU AI Act Art. 10", "Document training data quality and bias", "Dataset fingerprint plus bias audit"],
          ["EU AI Act Art. 12", "Automatic logs of AI operation", "Records that cannot be edited later"],
          ["EU AI Act Art. 14", "Human oversight", "Records each clinician review of an alert"]
        ] } },
        { key: "Regulators care about integrity. Logs are only valuable if you can show they were not edited after the event." },
        { h: "Breach reporting", p: "GDPR Article 33 expects a breach to be notified within 72 hours of becoming aware of it. An independent access record helps you become aware, and know the scope, much sooner." },
        { h: "What the record does NOT solve", p: "It does not decide your legal basis for using data; people do that. It cannot make you collect less data. The right to erasure (Article 17) needs separate legal analysis. The sources point out that clinical data is erased from the patient record, while the separate governance record of the consent stays." },
        { warn: "'Blockchain solves GDPR' is a myth. It supports evidence and enforcement. It does not replace a Data Protection Officer's judgement." }
      ],
      activities: [
        {
          type: "tf",
          title: "Myth or fact?",
          intro: "Decide whether each statement is true.",
          items: [
            { s: "An immutable audit record can help show compliance under GDPR Article 5(2).", a: true, why: "Accountability means demonstrating compliance, and a tamper-evident log is strong evidence." },
            { s: "Blockchain decides the legal basis for processing patient data.", a: false, why: "The legal basis is a governance decision. The record only stores it." },
            { s: "EU AI Act Article 12 is about automatically generated logs for high-risk AI.", a: true, why: "Yes. The logs must be created automatically and be dependable." },
            { s: "Blockchain can force an organisation to collect less data.", a: false, why: "Data minimisation is a design and policy choice. A chain cannot enforce it." },
            { s: "GDPR Article 33 gives 72 hours from becoming aware of a breach.", a: true, why: "Faster awareness of what was accessed makes this deadline easier to meet." },
            { s: "Deleting a patient's clinical record always requires deleting the consent history on the chain.", a: false, why: "The two are separate. The chain holds the governance record, not the clinical record." }
          ]
        },
        {
          type: "mcq",
          title: "Pick the right rule",
          intro: "Choose the best answer.",
          q: "A patient withdraws consent for an AI tool, and the trust wants access to stop immediately. Which requirement is mainly being met?",
          options: [
            "GDPR Article 7: withdrawal must be as easy as giving consent",
            "EU AI Act Article 10: training data quality",
            "GDPR Article 33: breach notification",
            "EU AI Act Article 14: human oversight"
          ],
          answer: 0,
          why: "Article 7 is about withdrawal being as easy as giving consent, with immediate effect. Article 14 sounds relevant because humans are involved, but it concerns clinician oversight of AI alerts, not consent."
        },
        {
          type: "scenario",
          title: "The Data Protection Officer's question",
          intro: "Help a colleague give a sound answer.",
          setup: "The Chief Information Officer tells the Data Protection Officer (DPO) that a new blockchain consent system will 'solve GDPR' for the sepsis AI. The DPO asks you to explain what it really does.",
          start: "s1",
          steps: [
            {
              id: "s1",
              text: "The DPO asks: 'So can we stop worrying about our legal basis and erasure requests?'",
              choices: [
                { label: "Yes, the immutable record covers everything", fb: "Overclaiming. The record stores the legal basis and shows enforcement, but it does not choose or justify it, and erasure still needs legal analysis.", score: 0, next: "s2" },
                { label: "No. It helps prove consent and enforce withdrawal, but legal basis and erasure remain human and legal decisions", fb: "Correct. You separate what the tool helps with from what it cannot decide.", score: 2, next: "s2" },
                { label: "It does nothing useful for GDPR", fb: "Too dismissive. It supports accountability (Art. 5(2)) and fast withdrawal (Art. 7).", score: 1, next: "s2" }
              ]
            },
            {
              id: "s2",
              text: "The DPO then asks which logs to rely on for the AI Act's automatic-logging duty. The trust has only ordinary logs on the AI's own servers.",
              choices: [
                { label: "Keep them. The same administrators running the AI are trustworthy enough", fb: "Weak. Logs on the same infrastructure can be edited by the same administrators, so credibility rests only on promises.", score: 0, next: null },
                { label: "Move to independent, tamper-evident storage; cloud locked storage is a sensible first step and a permissioned blockchain gives independent checking", fb: "Right. This follows the sources: cloud immutable storage is reasonable short-term, and blockchain lets anyone verify independently.", score: 2, next: null },
                { label: "Delete the old logs to avoid risk", fb: "Dangerous. Logs are evidence for surveillance and incident investigation and must not be selectively removed.", score: 0, next: null }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "l6",
      title: "Roadmap and readiness",
      minutes: 10,
      icon: "🗺️",
      hook: "Before buying anything, ask: is our organisation ready, and what do we do first?",
      teach: [
        { h: "Six readiness questions", p: "The sources suggest scoring your organisation from 1 to 5 on six areas." },
        { list: [
          "Technical infrastructure (for example FHIR R4 interfaces)",
          "Governance and legal framework",
          "Data quality and standards",
          "Use case clarity",
          "Stakeholder readiness",
          "Budget and resource"
        ] },
        { key: "Governance before technology, always. A typical trust is stronger on technology than on governance, which is the wrong way round." },
        { h: "Three phases", p: "Phase 1 (months 1-9), Phase 2 (months 10-18), Phase 3 (months 19-30). You move on when you meet the milestone, not just because time has passed." },
        { table: { head: ["Phase", "Focus", "Milestone"], rows: [
          ["1 Foundation", "FHIR R4 audit, DPO review, pilot, scoped consent use case", "One AI tool with an audit trail and DPO sign-off"],
          ["2 Expansion", "Multi-trust design, legal review of smart contracts, supply chain pilot scoped", "Consent portable across trusts"],
          ["3 Enterprise", "National network, automated regulatory reporting", "Audit-ready for the regulator"]
        ] } },
        { h: "What the case studies teach", p: "A tamper-evident record would not have stopped WannaCry. It would have changed the response in four ways." },
        { list: [
          "Spotting unusual mass access sooner",
          "Finding out exactly which records were accessed, in hours not weeks",
          "Keeping evidence that cannot be disputed",
          "Notifying the right patients rather than everyone"
        ] },
        { warn: "Treat these attacks as real harm to real patients, including postponed cancer care. The aim is learning, not scoring points." }
      ],
      activities: [
        {
          type: "order",
          title: "First things first",
          intro: "Put the Phase 1 foundation steps in a sensible order.",
          items: [
            "FHIR R4 compliance audit",
            "Data Protection Officer review of the plan",
            "Scope one consent use case",
            "Run a small permissioned pilot",
            "Deliver staff training and gain DPO sign-off"
          ],
          why: "The sources put the standards audit and DPO review before the pilot. Governance comes before technology so the pilot is safe and lawful."
        },
        {
          type: "allocate",
          title: "Spend your Phase 1 effort",
          intro: "Share 100 points of effort across five Phase 1 areas.",
          total: 100,
          unit: "points",
          categories: [
            { name: "FHIR R4 standards audit", tip: "Standards your systems already speak", ideal: [10, 25], low: "Too little. You need to know how ready your interfaces are.", high: "Too much. The audit is only one of several foundations.", ok: "Good. A focused audit shows what is already in place." },
            { name: "Data Protection Officer review", tip: "Legal and governance check", ideal: [15, 30], low: "Too little. The DPO review comes before the pilot for a reason.", high: "A bit heavy. Governance matters, but you still need a pilot.", ok: "Good. Governance leads technology." },
            { name: "Scoping the consent use case", tip: "One bounded, measurable use case", ideal: [10, 25], low: "Too little. Unclear use cases are a readiness weakness.", high: "Too much. Scope it clearly, then move on.", ok: "Good. One clear use case beats many vague ones." },
            { name: "Small permissioned pilot", tip: "One AI tool with an audit trail", ideal: [15, 30], low: "Too little. Phase 1 must deliver one working audit trail.", high: "Too much. Pilot ahead of governance repeats early AI mistakes.", ok: "Good. A modest pilot builds confidence." },
            { name: "Staff training and engagement", tip: "Clinicians and patients understand it", ideal: [10, 25], low: "Too little. Stakeholder readiness is often weak.", high: "A bit heavy for Phase 1.", ok: "Good. People need to understand what consent means here." }
          ]
        },
        {
          type: "mcq",
          title: "Reading the radar",
          intro: "Choose the best answer.",
          q: "A trust scores 3 on technology but 2 on governance and 2 on stakeholder readiness. What should it do next?",
          options: [
            "Buy more technology to build on its strength",
            "Strengthen governance and stakeholder readiness first",
            "Skip to Phase 3 because technology is strong",
            "Ignore the low scores; they are not important"
          ],
          answer: 1,
          why: "The principle is governance before technology. Buying more technology widens the imbalance, and moving phases by calendar rather than milestone is the wrong approach."
        },
        {
          type: "match",
          title: "WannaCry lessons",
          intro: "Match each change to what it would have given investigators or patients.",
          pairs: [
            { l: "Real-time tamper detection", r: "An alert when mass file access looks unusual" },
            { l: "Scope determination", r: "Knowing exactly which records were accessed" },
            { l: "Evidence preservation", r: "A record that cannot be altered or disputed" },
            { l: "Targeted notification", r: "Telling the affected patients, not everyone" }
          ]
        }
      ]
    }
  ],
  finalQuiz: {
    title: "Chapter check",
    questions: [
      {
        type: "mcq",
        q: "Which statement best describes what the blockchain stores in an NHS trust architecture?",
        options: [
          "Complete patient records, encrypted",
          "Hashes, details such as source and date, and access events",
          "Scan images and genome files",
          "Only the hospital's staff rotas"
        ],
        answer: 1,
        why: "The chain holds the governance record. Clinical data stays in NHS systems, which also fits data minimisation. Encrypted storage of full records sounds safe but still puts clinical data in the wrong place."
      },
      {
        type: "mcq",
        q: "Which feature lets 'no valid consent, no access' happen automatically?",
        options: [
          "Smart contracts",
          "Hashing alone",
          "A public network",
          "Cloud storage"
        ],
        answer: 0,
        why: "Smart contracts are rules written as code that run automatically. Hashing proves integrity but does not make decisions."
      },
      {
        type: "mcq",
        q: "Why is a normal database log a weaker proof than a blockchain record?",
        options: [
          "It is always more expensive",
          "It cannot store dates",
          "It is never used in hospitals",
          "The people who run the system can edit it, so credibility rests on promises"
        ],
        answer: 3,
        why: "Administrators who manage the AI system can edit its logs. Ordinary logs are cheap and fine for many jobs, so cost is not the real weakness."
      },
      {
        type: "mcq",
        q: "For NHS patient data, which type of blockchain do the sources recommend?",
        options: [
          "Public, so everything is visible",
          "Permissioned, with known and approved participants",
          "Any type, as they are all the same",
          "None of the sources discuss this"
        ],
        answer: 1,
        why: "A permissioned network gives control over who joins and who sees what. A public network makes activity visible to all and the NHS cannot control who runs it."
      },
      {
        type: "mcq",
        q: "Which is a case where blockchain will NOT help?",
        options: [
          "Proving AI logs were not edited",
          "Sharing a consent record between several trusts",
          "Storing large imaging files",
          "Tracing a medicine from manufacturer to pharmacy"
        ],
        answer: 2,
        why: "Blockchains are not designed for large data storage. The others are about shared, tamper-evident records, where it can help."
      },
      {
        type: "mcq",
        q: "In the medicine supply chain model, how is a counterfeit product spotted?",
        options: [
          "A pharmacist judges the packaging",
          "An AI reads the barcode artwork",
          "It cannot produce a valid chain-of-custody record because it was never entered at the manufacturer stage",
          "The distributor reports it themselves"
        ],
        answer: 2,
        why: "No valid first entry means no valid chain, however good the packaging looks. Relying on packaging alone is what fakes are designed to beat."
      },
      {
        type: "mcq",
        q: "What is the best summary of what blockchain would have changed in WannaCry?",
        options: [
          "It would have prevented the attack",
          "It would have changed nothing",
          "It would have transformed the response, such as faster scope and preserved evidence",
          "It would have encrypted all files"
        ],
        answer: 2,
        why: "The sources say it does not prevent attacks. It changes the response, for instance knowing which records were accessed within hours rather than weeks."
      },
      {
        type: "mcq",
        q: "What should come first on a trust's roadmap?",
        options: [
          "The biggest possible network",
          "A national rollout",
          "Governance steps such as a standards audit and a DPO review, then a small pilot",
          "Buying technology before checking readiness"
        ],
        answer: 2,
        why: "Governance comes before technology. A large rollout first repeats the early AI pilot mistakes."
      },
      {
        type: "mcq",
        q: "A vendor says the audit record means the trust no longer needs a Data Protection Officer's judgement. What is wrong with this?",
        options: [
          "Nothing, it is correct",
          "Legal basis and erasure questions are still human and legal decisions",
          "The DPO is only needed for paper records",
          "The chain deletes personal data automatically"
        ],
        answer: 1,
        why: "The record stores and proves decisions; it does not make them. It also does not replace separate legal analysis of erasure."
      }
    ]
  },
  capstone: {
    type: "scenario",
    title: "Boss level: the Northfield Trust board",
    intro: "You are advising the board of a fictional NHS trust. Make five decisions.",
    setup: "Northfield NHS Trust is rolling out an AI sepsis alert tool. The Chief Executive wants strong proof of what the AI does with patient data. A vendor has offered a blockchain solution. The Data Protection Officer (DPO), the Chief Information Officer and the Chief Nurse are all in the room.",
    start: "s1",
    steps: [
      {
        id: "s1",
        text: "The vendor proposes a fully public network and says patient identifiers will be hashed, so it is safe. The Chief Executive asks for your view.",
        choices: [
          { label: "Accept: public means maximum transparency", fb: "Risky. Activity is visible to everyone, the NHS cannot control who runs the nodes, and hashed identifiers combined with other details could still count as personal data.", score: 0, next: "s2" },
          { label: "Decline public; ask for a permissioned network where the NHS controls membership", fb: "Right. This matches the guidance for patient data: known participants, control and privacy.", score: 2, next: "s2" },
          { label: "Reject any blockchain and stay with ordinary logs", fb: "Understandable, but ordinary logs can be edited by the administrators running the system, so you lose independent proof.", score: 1, next: "s2" }
        ]
      },
      {
        id: "s2",
        text: "The Chief Information Officer wants to start the pilot next week. The DPO has not seen the plan.",
        choices: [
          { label: "Start now; sort governance later", fb: "This repeats early AI pilot mistakes. Technology ahead of governance is the wrong order.", score: 0, next: "s3" },
          { label: "Do the standards audit and DPO review first, then pilot", fb: "Correct. Governance before technology.", score: 2, next: "s3" },
          { label: "Buy a national network licence", fb: "Too big and too early. Phase 1 is modest and milestone driven.", score: 0, next: "s3" }
        ]
      },
      {
        id: "s3",
        text: "What should the first pilot cover?",
        choices: [
          { label: "One AI tool with a consent trail", fb: "Right. One bounded use case builds confidence and shows regulatory credibility.", score: 2, next: "s4" },
          { label: "Every AI tool, plus scan storage on the chain", fb: "Overreach. Large files do not belong on a chain, and scaling before learning is risky.", score: 0, next: "s4" },
          { label: "A dashboard only, with no real records", fb: "Safe but empty. Without actual consent and access records there is nothing to learn from.", score: 1, next: "s4" }
        ]
      },
      {
        id: "s4",
        text: "A patient withdraws consent. The Chief Nurse says it normally takes days for IT to stop the data flow. How should the design respond?",
        choices: [
          { label: "A smart contract blocks access straight away, and the withdrawal is recorded as a new entry", fb: "Correct. Withdrawal is as easy as giving consent, and history is preserved.", score: 2, next: "s5" },
          { label: "Email IT and wait", fb: "That is the delay GDPR Article 7 is meant to remove.", score: 0, next: "s5" },
          { label: "Delete the original consent entry", fb: "This destroys the history. The design keeps the original and adds the withdrawal.", score: 0, next: "s5" }
        ]
      },
      {
        id: "s5",
        text: "Months later a ransomware drill asks: 'Which patient records were accessed, and what about our blood-test supplier?'",
        choices: [
          { label: "Rebuild the logs from the attacked servers", fb: "The same trap as WannaCry: the evidence sits on compromised systems.", score: 0, next: null },
          { label: "Query the independent access record for the time window, and ensure suppliers are covered by the same trail", fb: "Excellent. Scope in hours, evidence preserved, and the supplier gap closed, as Synnovis showed.", score: 2, next: null },
          { label: "Notify all patients at every affected trust", fb: "Heavy handed and imprecise. A reliable record lets you notify the right people.", score: 1, next: null }
        ]
      }
    ]
  },
  glossary: [
    { term: "Blockchain", def: "A shared record book where each entry is linked to the one before, so changes are easy to spot." },
    { term: "Hash", def: "A mathematical fingerprint of data. If the data changes, the fingerprint changes." },
    { term: "Immutability", def: "Once a record is written, it cannot be altered without detection." },
    { term: "Smart contract", def: "A rule written as computer code that runs automatically, such as blocking access without consent." },
    { term: "Distributed consensus", def: "Many independent computers must agree, so no single organisation can alter the record." },
    { term: "Permissioned blockchain", def: "A blockchain that only approved, known organisations can join." },
    { term: "Public blockchain", def: "A blockchain open to anyone, such as Ethereum." },
    { term: "Data provenance", def: "The history of data: where it came from and proof it has not been changed." },
    { term: "Model provenance", def: "The history of an AI model: its version, training data and checks." },
    { term: "Audit trail", def: "A dated record of who did what with data or systems." },
    { term: "HL7 FHIR", def: "A standard way for health systems to exchange data. Short for Fast Healthcare Interoperability Resources." },
    { term: "Hyperledger Fabric", def: "A permissioned blockchain platform recommended in the sources for NHS use." },
    { term: "GDPR", def: "The General Data Protection Regulation, which sets rules for using personal data." },
    { term: "Data Protection Officer (DPO)", def: "The person responsible for advising on and checking data protection compliance." }
  ],
  takeaways: [
    "Clinical AI must be able to prove where data came from, which model ran, whether consent was current and what happened.",
    "Blockchain stores the record of what happened (hashes, details, access events), not patient clinical data.",
    "Use the simplest tool that gives the trust you need: ordinary logs, cloud locked storage or a permissioned blockchain.",
    "Smart contracts can make consent withdrawal take effect immediately, supporting GDPR Article 7.",
    "Build in phases, governance before technology, and learn from WannaCry and Synnovis: the gain is a faster, provable response."
  ]
};
