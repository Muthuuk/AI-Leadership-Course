window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA[2] = {
  num: 2,
  title: "Understanding AI Maturity: Where Does Your Organisation Sit?",
  part: "Part I: Strategic Foundations",
  tagline: "Before you buy more artificial intelligence (AI), find out honestly how ready your organisation really is.",
  minutes: 60,
  outcomes: [
    "After this chapter you can name the five levels of AI maturity, from AI Unaware to AI Native.",
    "After this chapter you can score your own organisation on six dimensions and spot where it is out of balance.",
    "After this chapter you can explain the Gartner Hype Cycle and why the 'Trough of Disillusionment' happens.",
    "After this chapter you can tell the difference between simply owning AI tools and being genuinely mature.",
    "After this chapter you can sketch a gap-closing roadmap for your current level, with governance first.",
    "After this chapter you can explain what an AI governance council does and why it matters."
  ],
  lessons: [
    {
      id: "l1", title: "The capability illusion", minutes: 9, icon: "🪞",
      hook: "A hospital signs a contract for an AI radiology tool. Is it now an 'AI-ready' hospital? Not necessarily. It may only own a tool.",
      teach: [
        { h: "Owning a tool is not the same as being ready", p: "Chapter 1 explained <i>why</i> AI matters. This chapter asks a harder question: <b>where is your organisation really</b> on the journey? Many leaders feel they are further along than they are. The book calls this the <b>capability illusion</b>." },
        { example: "The book describes a hospital that has a signed contract for an AI radiology tool, but no data governance committee, no clinical champion programme and no proper link between its imaging and electronic health record (EHR) systems. It has an AI tool, not AI maturity." },
        { key: "AI maturity is about the whole organisation: strategy, data, people, rules and culture. Technology is only one part." },
        { h: "Surface-level adoption versus genuine maturity", p: "The book gives seven checks to tell the two apart. Think of them as seven questions you can ask about any AI tool your organisation already uses." },
        { list: [
          "Governance: is there a council, a public list of AI tools (an 'AI register') and a named responsible person for each tool?",
          "Performance monitoring: do you track results with dashboards, or only hear casual feedback?",
          "Clinical engagement: is the tool part of standard workflows, or used only by enthusiasts?",
          "Evidence: has it been tested locally, including for fairness across patient groups?",
          "Data, regulation and training: real-time data links, medical device rules checked with the Medicines and Healthcare products Regulatory Agency (MHRA), and tool-specific staff training." ] },
        { analogy: "Buying a high-spec ambulance does not give you a paramedic service. You also need trained crews, dispatch rules, maintenance and safety checks. The vehicle is the easy part." },
        { warn: "Do not score your organisation on how good you hope it is. The book says honest scoring is the single most important habit. If you are unsure, take the lower score." }
      ],
      activities: [
        { type: "tf", title: "Myth or fact?", intro: "Decide whether each statement about maturity is true or false.",
          items: [
            { s: "If an organisation has bought several AI tools, it is automatically at a high maturity level.", a: false, why: "Tool purchase is only a technology signal. Governance, people and culture must grow alongside it." },
            { s: "Low scores in a self-assessment are useful, because they show where to invest.", a: true, why: "The diagnostic is a navigation tool, not a ranking. Honest low scores point to the right spending." },
            { s: "Anecdotal clinician feedback counts as proper performance monitoring.", a: false, why: "Genuine maturity needs systematic monitoring, such as dashboards and regular bias checks." },
            { s: "A 'no' to the question 'Do you keep a record of every AI tool in use?' is a sign of surface-level adoption.", a: true, why: "The AI register question is the quickest test. No register means surface-level adoption, whatever else you have." },
            { s: "A completed EHR means an organisation is ready for AI.", a: false, why: "An EHR is necessary but not enough. The data must also be clean, consistently coded and easy to extract." },
            { s: "The aim of the maturity framework is to help organisations avoid AI.", a: false, why: "The aim is to navigate AI safely and adopt it at the right pace, not to avoid it." }
          ] },
        { type: "hunt", title: "Red flag hunt: the board paper", intro: "Click the phrases that suggest surface-level adoption. Leave the genuinely sound ones alone.",
          passage: "Board paper extract. Our trust is now AI-ready. [[We have signed contracts for three AI tools, so we are Level 3|Owning tools is a technology signal only. Level 3 also needs governance forming, active champions and literacy training]]. The sepsis alert tool was chosen after a vendor demonstration. [[An AI register and governance council are not needed at this stage|No register or council is the core sign of surface-level adoption]]. [[Doctors tell us informally that it is working well, so we have not set up monitoring|Casual feedback is not systematic performance monitoring]]. [[The vendor's own study is enough, so no local validation is planned|Genuine maturity needs local validation, including fairness checks across patient groups]]. ((Each tool will have tool-specific staff training before go-live.|This is a sign of workforce readiness)) ((We will check each tool's medical device status with the MHRA.|Regulatory awareness is a mark of genuine maturity))."
        }
      ]
    },
    {
      id: "l2", title: "The five levels", minutes: 10, icon: "🪜",
      hook: "Think of a staircase. You cannot jump from the ground floor to the fifth. Each step needs the one below.",
      teach: [
        { h: "From AI Unaware to AI Native", p: "The book describes five levels of AI maturity. Each level is a real jump in capability, not a small tweak. The key rule: <b>you cannot skip levels</b>, because each one is the base for the next." },
        { table: { head: ["Level", "Name", "What it looks like"], rows: [
          ["1", "AI Unaware", "No AI strategy, paper or old systems, no governance, no AI budget"],
          ["2", "AI Aware", "An AI strategy exists, EHR complete, leaders learning, first vendor talks"],
          ["3", "AI Experimenting", "2-4 pilots running, governance forming, clinical champions named"],
          ["4", "AI Scaling", "5+ uses live, governance council working, data platform active, return on investment shown"],
          ["5", "AI Native", "AI built in everywhere, constant learning loops, patient outcomes measured"] ] } },
        { key: "Each level depends on the one before: finish the EHR, then fix the data, then run validated pilots, then set up a working governance council, then scale and keep learning." },
        { analogy: "Learning to drive: you do not start on the motorway. First you learn the controls, then quiet roads, then busy roads, and only then long journeys. Skipping steps is how crashes happen." },
        { warn: "Common mistake: 'We deployed an AI scribe, so we are Level 3.' A scribe is a technology item. Level 3 also needs governance forming, champions active and AI training delivered." },
        { example: "The book says no NHS organisation is assessed at full Level 5. UCSF (University of California, San Francisco) and Mayo Clinic are the nearest international examples. A small trust does not need Level 5. It needs to move from Level 1 to Level 2 properly." }
      ],
      activities: [
        { type: "order", title: "Climb the staircase", intro: "Put the five maturity levels in order, lowest first.",
          items: ["AI Unaware", "AI Aware", "AI Experimenting", "AI Scaling", "AI Native"],
          why: "Each level builds on the one before, so levels cannot be skipped." },
        { type: "match", title: "Level or signal?", intro: "Match each level to the sign that best describes it.",
          pairs: [
            { l: "AI Unaware", r: "No AI strategy and no AI budget" },
            { l: "AI Aware", r: "A strategy exists and first vendor conversations begin" },
            { l: "AI Experimenting", r: "A few pilots run while governance is forming" },
            { l: "AI Scaling", r: "Five or more uses live and a council operating" },
            { l: "AI Native", r: "Continuous learning loops and outcomes measured everywhere" }
          ] },
        { type: "mcq", title: "Spot the level", intro: "Pick the best answer.",
          q: "A trust has a published AI strategy and a complete EHR. Leaders have begun AI training and are talking to vendors. No pilots yet. Which level is this?",
          options: ["AI Unaware (Level 1)", "AI Aware (Level 2)", "AI Experimenting (Level 3)", "AI Scaling (Level 4)"],
          answer: 1,
          why: "A strategy, a complete EHR and first vendor talks are the signs of Level 2. Level 3 would need pilots under way with governance forming. Level 1 has no AI strategy at all.",
          hint: "No pilots yet, so it cannot be Level 3." }
      ]
    },
    {
      id: "l3", title: "Six dimensions and the self-assessment", minutes: 12, icon: "🧭",
      hook: "A single overall score hides the story. Two organisations can both score '3', yet one is safe and one is an accident waiting to happen.",
      teach: [
        { h: "Six things to measure", p: "The self-assessment scores your organisation from 1 to 5 on <b>six dimensions</b>. You can then plot the scores as a spider-web ('radar') chart and compare with a peer benchmark of about Level 4." },
        { list: [
          "Strategy and Leadership: AI in the corporate plan, a named board champion, a dedicated AI budget.",
          "Data Readiness: complete EHR, common data standards (FHIR, a standard way to share health data), data quality work.",
          "Governance and Ethics: council, AI register, bias monitoring, MHRA classification, ethics review.",
          "Workforce Capability: AI literacy, clinical champions, training built into continuing professional development (CPD).",
          "Technology Architecture: cloud plans, links between systems, readiness for an AI platform.",
          "Culture and Change: do clinicians trust AI, is change well managed, are tools co-designed with clinicians?" ] },
        { key: "The shape of your chart matters more than the average. A big gap between technology and governance is the fingerprint of surface-level adoption." },
        { example: "The book's sample NHS trust scores Strategy 2, Data 2, Governance 1, Workforce 2, Technology 3, Culture 2. Technology (3) sits well above Governance (1). The lesson: invest in governance before buying more technology." },
        { analogy: "A car with a huge engine but no brakes is not an advanced car. It is a dangerous one. Technology without governance is the engine without the brakes." },
        { warn: "Technology is usually the highest score in NHS trusts, but misleadingly so. A finished EHR alone only earns around Level 2 on technology." }
      ],
      activities: [
        { type: "selfassess", title: "Where does your organisation sit?", intro: "Pick the description that fits your organisation today, not where you hope to be.",
          dims: [
            { name: "Strategy and Leadership", q: "How is AI handled in your organisation's plans?", levels: [
              "No AI strategy exists", "A basic AI strategy is drafted", "AI strategy published with board sign-off", "A board champion and AI budget line are in place", "AI performance is reported to the board every quarter" ] },
            { name: "Data Readiness", q: "How ready is your data for AI?", levels: [
              "Incomplete EHR and no data standards", "EHR complete but data quality is untested", "Data standards work under way and quality checks active", "Strong data platform with regular quality monitoring", "Real-time data pipelines with full standards compliance" ] },
            { name: "Governance and Ethics", q: "What oversight of AI exists?", levels: [
              "No AI policy and no oversight", "A policy document exists, but no council", "Draft policy and governance forming", "An operational council meets regularly and reviews performance", "Full council and continuous bias audits" ] },
            { name: "Workforce Capability", q: "How AI-literate and supported are your staff?", levels: [
              "No AI literacy and no champions", "Some leaders have had briefings", "Champions active and senior staff trained", "Training widespread and tool-specific", "AI embedded in all staff development" ] },
            { name: "Technology Architecture", q: "How ready are your systems?", levels: [
              "Paper or legacy systems, no cloud", "EHR in place, little else", "Cloud strategy active and pilot links built", "Systems connected and ready for an AI platform", "Real-time analytics and automated monitoring" ] },
            { name: "Culture and Change", q: "How do clinicians feel about AI?", levels: [
              "Clinicians resist and AI is not on the agenda", "Curiosity, but little change support", "Growing engagement and a change programme", "Clinicians often help design the tools", "AI-positive culture and co-design is standard" ] }
          ],
          results: [
            { upto: 2.0, label: "Mostly Level 1: AI Unaware", advice: "Start with the basics: appoint an AI readiness lead, complete the EHR, and brief leaders. Do not buy tools yet." },
            { upto: 3.0, label: "Level 2: AI Aware", advice: "Do a data audit and design a governance framework and council. The book warns that your biggest risk is buying tools before governance exists." },
            { upto: 4.0, label: "Level 3: AI Experimenting", advice: "Launch the governance council properly, set a bias monitoring baseline, and keep pilots small, safe and well documented." },
            { upto: 5.0, label: "Level 4-5: Scaling towards AI Native", advice: "Keep the council reporting to the board, publish your AI register, and build the continuous learning loop. Check no single dimension is lagging behind." }
          ] },
        { type: "sort", title: "Which dimension is the gap?", intro: "Sort each problem into the dimension where the gap really sits.",
          buckets: ["Governance and Ethics", "Data Readiness", "Workforce and Culture"],
          items: [
            { t: "No AI register of tools in use", b: 0, why: "Keeping a register is a governance task." },
            { t: "EHR full of inconsistently coded entries", b: 1, why: "Poor and inconsistent data quality is a data readiness gap." },
            { t: "Clinicians refuse to use the new tool", b: 2, why: "Resistance points to culture and change management." },
            { t: "No bias monitoring baseline", b: 0, why: "Bias monitoring belongs to governance and ethics." },
            { t: "Nobody has had tool-specific training", b: 2, why: "Training is workforce capability." },
            { t: "Cannot pull a clean dataset of sepsis cases quickly", b: 1, why: "If clean data cannot be extracted quickly, data readiness is low (Level 2 or below)." },
            { t: "No named person responsible for each AI tool", b: 0, why: "Named responsible officers are part of governance." }
          ] },
        { type: "mcq", title: "Technology 3, Governance 1", intro: "A realistic board question.",
          q: "A trust scores 3 on Technology Architecture but 1 on Governance and Ethics. What is the best next investment?",
          options: ["More AI tools to build on its technology strength", "Staff AI literacy training only", "A governance council and an AI register", "A new data warehouse"],
          answer: 2,
          why: "Governance is the biggest gap and the prerequisite for safe use of any tool. More tools on a governance score of 1 means more risk, not more value. Training and data help, but they do not fix the missing oversight.",
          hint: "Which dimension is far behind?" }
      ]
    },
    {
      id: "l4", title: "The Hype Cycle", minutes: 10, icon: "🎢",
      hook: "New technologies often go up like a rocket, drop like a stone, then settle into steady usefulness. Healthcare AI is no different.",
      teach: [
        { h: "Five phases of excitement", p: "The Gartner Hype Cycle is a picture of how people feel about a new technology over time. The book applies it to healthcare AI. It adds a time view to the maturity levels: it asks whether the <i>technology</i> is proven, not just whether your <i>organisation</i> is ready." },
        { steps: [
          "Technology Trigger: AI enters healthcare, early experiments begin.",
          "Peak of Inflated Expectations: big promises and big spending, such as IBM Watson for Oncology.",
          "Trough of Disillusionment: failures appear and trust in clinical AI is damaged.",
          "Slope of Enlightenment: evidence builds, for example for validated NHS AI scribes.",
          "Plateau of Productivity: steady, proven value, for example NHS diabetic eye screening AI." ] },
        { key: "The Trough is caused by a maturity mismatch: advanced AI placed on weak organisational foundations. Watson failed not because AI is wrong for cancer care, but because hospitals could not spot its limits before patients were affected." },
        { h: "Do not go cold in the Trough", p: "The book says the Trough is the best time to build foundations, not to stop. Vendors may offer better prices, there is less competition for clinical champions' time, and evidence is growing. Organisations arriving at the Slope with strong foundations deploy more easily and cheaply." },
        { analogy: "Think of a gym in January and February. Everyone joins in the rush, many quit when it gets hard, and the people who quietly kept training are the ones who benefit." },
        { warn: "Do not teach or learn the Hype Cycle as cynicism. Diabetic eye screening AI is a success story. The aim is to navigate the cycle, not avoid AI." }
      ],
      activities: [
        { type: "order", title: "Ride the curve", intro: "Put the five Hype Cycle phases in order.",
          items: ["Technology Trigger", "Peak of Inflated Expectations", "Trough of Disillusionment", "Slope of Enlightenment", "Plateau of Productivity"],
          why: "Hype rises to a peak, falls into disappointment, then rebuilds on evidence until value is steady." },
        { type: "match", title: "Place the example", intro: "Match each phase with its example or sign from the book.",
          pairs: [
            { l: "Technology Trigger", r: "First clinical AI experiments and pilots" },
            { l: "Peak of Inflated Expectations", r: "IBM Watson for Oncology and its big claims" },
            { l: "Trough of Disillusionment", r: "Failures damage trust in clinical AI" },
            { l: "Slope of Enlightenment", r: "NHS AI scribes with growing evidence" },
            { l: "Plateau of Productivity", r: "Diabetic eye screening AI at national scale" }
          ] },
        { type: "cloze", title: "Fill the gaps", intro: "Complete the summary using the word bank.",
          text: "The Trough of Disillusionment is caused by a {{maturity}} mismatch. The book's way to avoid it is {{governance-first}} adoption together with phased sequencing. In the Trough, organisations should invest in their {{foundations}} while others withdraw. Watson was placed at the {{Peak}} of Inflated Expectations.",
          extra: ["pricing", "Plateau"],
          why: "Advanced AI on weak foundations leads to the Trough, so build governance and foundations first." }
      ]
    },
    {
      id: "l5", title: "Case study: UCSF versus Amazon and Walmart", minutes: 10, icon: "🏥",
      hook: "Two giants with huge money and big AI ambitions failed in healthcare. A university hospital, with far less cash, succeeded. Why?",
      teach: [
        { h: "Same period, very different results", p: "The book compares three organisations around 2021 to 2022. UCSF took a phased, safety-first approach. Amazon One Medical and Walmart Health had strong technology but not the healthcare-specific maturity needed." },
        { table: { head: ["Dimension", "UCSF", "Amazon One Medical", "Walmart Health"], rows: [
          ["Strategy and Leadership", "4", "3", "2"],
          ["Governance and Ethics", "4", "1", "1"],
          ["Workforce Capability", "4", "1", "1"],
          ["Technology Architecture", "4", "5", "4"],
          ["Culture and Change", "3", "1", "1"] ] } },
        { key: "Technology at 5 with governance at 1 is the riskiest profile in healthcare AI. More technology with no governance means more risk, not more value." },
        { list: [
          "UCSF spent about a decade building governance, data quality and clinical champions before scaling.",
          "Amazon had top technology but low healthcare-specific governance, workforce and culture.",
          "Walmart Health: culture at Level 1 in a clinical setting. Retail and clinical ways of working did not match.",
          "Money and general technical skill did not replace healthcare-specific maturity." ] },
        { warn: "These scores are the author's estimates from published accounts, for teaching. They are not independently verified figures. Also, the failures do not prove AI cannot work in healthcare." },
        { analogy: "UCSF built the foundations of a house over many years. The others rushed to put up an impressive roof." },
        { example: "A small NHS trust does not need to copy UCSF's top level. The book advises it to move step by step from Level 1 to Level 2, using shared NHS infrastructure such as the Federated Data Platform (FDP) and the NHS AI Lab." }
      ],
      activities: [
        { type: "rush", title: "Quick sort: UCSF or corporate?", intro: "Sort each phrase fast: did it describe UCSF or the corporate failures?", seconds: 45,
          buckets: ["UCSF approach", "Corporate failures"],
          items: [
            { t: "Decade of governance first", b: 0 }, { t: "Technology 5, governance 1", b: 1 },
            { t: "Phased and safety-first", b: 0 }, { t: "Culture stuck at Level 1", b: 1 },
            { t: "Clinical champions developed", b: 0 }, { t: "Big acquisition, thin clinical readiness", b: 1 },
            { t: "Evidence-generating", b: 0 }, { t: "Retail mindset in clinical care", b: 1 },
            { t: "Data quality investment", b: 0 }, { t: "Workforce at Level 1", b: 1 },
            { t: "Governance scored 4", b: 0 }, { t: "Money used instead of maturity", b: 1 },
            { t: "Sector benchmark", b: 0 }, { t: "Walmart health centres closed", b: 1 },
            { t: "Strong in every dimension but culture", b: 0 }, { t: "Strong tech, weak oversight", b: 1 }
          ] },
        { type: "memory", title: "Memory match", intro: "Flip the cards and match each term with its meaning.",
          pairs: [
            { a: "Capability illusion", b: "Owning tools is not maturity" },
            { a: "AI register", b: "List of every AI tool in use" },
            { a: "Surface-level adoption", b: "Strong tech, weak governance" },
            { a: "Trough", b: "Maturity mismatch hits" },
            { a: "UCSF", b: "Decade of foundations first" },
            { a: "Radar chart", b: "Shows imbalance across dimensions" }
          ] },
        { type: "mcq", title: "Why UCSF succeeded", intro: "Pick the best answer.",
          q: "According to the book, what best explains UCSF's advantage over Amazon One Medical?",
          options: ["It had much more money to spend", "It had better general technology", "Amazon had more healthcare experience", "It built healthcare-specific governance, data and workforce maturity over about a decade"],
          answer: 3,
          why: "The advantage was organisational, not financial or technical. Amazon actually had more money and very strong technology, so options about money or technology are wrong.",
          hint: "Think foundations, not funding." }
      ]
    },
    {
      id: "l6", title: "Closing the gap and the governance council", minutes: 10, icon: "🛠️",
      hook: "You know your level and your gaps. Now what do you do first, and who keeps you honest?",
      teach: [
        { h: "A roadmap for each step", p: "The book gives a roadmap for each level jump, split into <b>Months 1-6: Foundation</b> and <b>Months 7-12: Deployment</b>. A milestone is a result you can check, not just an event." },
        { table: { head: ["Move", "Foundation first", "Deployment next", "Milestone"], rows: [
          ["L1 to L2", "Finish EHR, appoint AI readiness lead", "Draft strategy, data audit, design governance", "Score 2.0+ on all six dimensions"],
          ["L2 to L3", "Set up governance council, fix data, launch champions", "First AI scribe with monitoring, bias baseline", "Two pilots with documented outcomes and sign-off"],
          ["L3 to L4", "Mature governance, embed literacy in CPD", "3-5 more uses, publish AI register", "Council reports to board quarterly"],
          ["L4 to L5", "Publish ethics framework, automate monitoring", "Enterprise-wide AI, national benchmarking", "Published outcomes, cleared high-risk tools live"] ] } },
        { key: "Three rules: governance before technology, milestones not dates, and one level at a time. Jumping two levels at once produces surface-level adoption." },
        { h: "The AI governance council", p: "A council is the group that decides which AI tools are used, checks they work safely and fairly, and keeps the AI register. At Level 4 it is operational. By Level 5 it sits at board level. The book also says organisations with formal councils are about twice as likely to achieve their expected return on investment." },
        { list: [
          "It keeps the register of AI tools, with training data and validation evidence.",
          "It names a responsible officer for every tool.",
          "It reviews performance and bias data regularly.",
          "It reports to the board, quarterly at Level 4.",
          "The roadmap suggests giving it at least 15 per cent of the AI budget when moving from Level 2 to Level 3." ] },
        { warn: "Funding governance from pilot budgets after the pilots start is a classic error. Set the governance money aside before pilots go live." },
        { analogy: "A governance council is like a hospital's medicines committee. It does not slow care. It makes sure what reaches patients has been checked." }
      ],
      activities: [
        { type: "sort", title: "Foundation or deployment?", intro: "Decide which half of a 12-month plan each action belongs to.",
          buckets: ["Months 1-6: Foundation", "Months 7-12: Deployment"],
          items: [
            { t: "Set up the AI governance council", b: 0, why: "Governance always sits in the foundation column." },
            { t: "Data quality remediation", b: 0, why: "Data work comes before tools." },
            { t: "Launch clinical champion programme", b: 0, why: "People preparation belongs in the foundation phase." },
            { t: "Deploy first AI scribe with monitoring", b: 1, why: "A tool goes live only after foundations exist." },
            { t: "Start a medium-risk validation study", b: 1, why: "Validation of larger uses follows governance maturity." },
            { t: "Publish the AI register", b: 1, why: "Publishing comes once governance operations have matured." }
          ] },
        { type: "allocate", title: "Split the AI budget", intro: "Share 100 per cent of a new AI budget between four areas. This is a teaching exercise based on the book's governance-first rule.", total: 100, unit: "%",
          categories: [
            { name: "Governance (council, register, monitoring)", tip: "The roadmap suggests at least 15 per cent.", ideal: [15, 35], low: "Too little. The book recommends at least 15 per cent for governance.", high: "Governance matters, but do not starve data, people and tools entirely.", ok: "Good. Governance gets its protected share before tools go live." },
            { name: "Data readiness", tip: "Clean, standard, extractable data.", ideal: [20, 35], low: "Data is the most underrated bottleneck. Weak data undermines every tool.", high: "Plenty for data, but remember people and oversight.", ok: "Good. Data work belongs in the foundation phase." },
            { name: "Workforce and champions", tip: "Training, literacy and champions.", ideal: [15, 30], low: "Without trained staff and champions, tools get resisted or misused.", high: "Training is vital, but it cannot replace governance and data.", ok: "Good. People preparation supports safe use." },
            { name: "Buying AI tools", tip: "Tools come after foundations.", ideal: [20, 40], low: "You need some budget to deploy, or the foundations never pay off.", high: "Too much on tools risks surface-level adoption.", ok: "Balanced. Tools are funded without crowding out foundations." }
          ] },
        { type: "mcq", title: "Council or tools first?", intro: "Pick the best answer.",
          q: "A trust at Level 2 wants to move to Level 3. According to the roadmap, when should the governance council be set up?",
          options: ["After pilots show a return on investment", "In the foundation phase, before tools are deployed", "At the same time as the first deployment", "Only once the trust reaches Level 3"],
          answer: 1,
          why: "The roadmap puts governance and data in the foundation column (Months 1-6), before deployment (Months 7-12). Waiting for proof of return or for Level 3 is backwards, since the council helps you reach Level 3 safely.",
          hint: "Governance always comes first." }
      ]
    }
  ],
  finalQuiz: {
    title: "Chapter check",
    questions: [
      { type: "mcq", q: "What is the 'capability illusion'?", options: ["Believing AI can do everything", "Thinking that owning AI tools means being AI-mature", "Hiding AI failures from the board", "Using AI without clinicians"], answer: 1, why: "It is the belief that having tools equals readiness. Maturity also needs governance, data, people and culture. The first option describes hype, not the illusion of capability." },
      { type: "mcq", q: "Which is the correct order of the five maturity levels?", options: ["Aware, Unaware, Experimenting, Scaling, Native", "Unaware, Aware, Scaling, Experimenting, Native", "Unaware, Aware, Experimenting, Scaling, Native", "Unaware, Experimenting, Aware, Scaling, Native"], answer: 2, why: "Unaware, Aware, Experimenting, Scaling, Native. Pilots (Experimenting) come before wide rollout (Scaling)." },
      { type: "mcq", q: "Why does the shape of a radar chart matter more than the average?", options: ["Averages are always wrong", "A big gap, such as technology far ahead of governance, signals surface-level adoption", "Radar charts are required by law", "The shape shows the budget"], answer: 1, why: "An imbalance shows hidden risk. An average can hide a score of 1 in governance." },
      { type: "mcq", q: "At which Hype Cycle phase is IBM Watson for Oncology placed?", options: ["Technology Trigger", "Plateau of Productivity", "Trough of Disillusionment", "Peak of Inflated Expectations"], answer: 3, why: "Watson attracted big investment and bold claims before performance failures appeared, the pattern of the Peak. The Trough describes the fall-out afterwards." },
      { type: "mcq", q: "What is the best response to the Trough of Disillusionment?", options: ["Stop all AI work", "Invest in maturity foundations while others withdraw", "Buy as many tools as possible at once", "Wait for competitors to move first"], answer: 1, why: "The Trough is a chance to build governance and foundations cheaply while competition is lower. Stopping loses that advantage." },
      { type: "mcq", q: "A CDO says 200 AI scribe deployments make the organisation Level 3. What is the strongest reply?", options: ["Agree, because the tools are live", "Agree, but only if the vendor is reputable", "Disagree, because that is only technology; governance and evidence may still be at Level 1", "Disagree, because 200 is too few"], answer: 2, why: "Tool numbers show technology only. Level 3 also needs governance forming, monitoring and local validation." },
      { type: "mcq", q: "What do UCSF's scores suggest about its strategy?", options: ["It rushed to deploy", "It built healthcare-specific maturity across dimensions before scaling", "It relied on its large budget", "It copied Amazon"], answer: 1, why: "UCSF spent about a decade on governance, data and champions. Money was not its edge; Amazon had more." },
      { type: "mcq", q: "Which rule applies to the gap-closing roadmap?", options: ["Advance two levels each year to catch up", "Deploy technology first, add governance later", "Governance and data before technology, one level at a time", "Plan by calendar dates, not milestones"], answer: 2, why: "Governance and data come first, and jumping levels causes surface-level adoption. Milestones are about evidence, not dates." },
      { type: "mcq", q: "What does an AI governance council do?", options: ["Buys all AI tools", "Replaces clinicians' decisions", "Oversees which tools are used, checks safety and fairness, and keeps the AI register", "Only writes marketing material"], answer: 2, why: "It provides oversight and accountability. It does not make clinical decisions or purchase tools on its own." }
    ]
  },
  capstone: {
    type: "scenario",
    title: "Boss level: The conference tool",
    intro: "You advise a hospital board. Make the calls, one step at a time.",
    setup: "You are the new Chief Digital and Information Officer (CDIO) of a 500-bed NHS trust. The Chief Executive saw an AI radiology triage tool at a conference last week and wants it live quickly. Your own assessment says the trust is Level 2 overall, with Technology at 3 but Governance at 1.",
    start: "s1",
    steps: [
      { id: "s1", text: "At the executive meeting, the Chief Executive asks: 'Can we go ahead?' What do you say first?",
        choices: [
          { label: "Yes, the tool is clinically valuable. Let's sign this month.", fb: "Radiology AI has real value, but you would deploy a medium-risk tool on a Governance score of 1. That is the surface-level adoption pattern.", score: 0, next: "s2" },
          { label: "No. The trust is not mature enough, so we do nothing on AI.", fb: "Too blunt. It ignores the clinical value and offers no path forward. A conditional pathway is better.", score: 1, next: "s2" },
          { label: "Possibly, but first let me show you our maturity profile: technology is ahead of governance.", fb: "Good start. You acknowledge the value and bring the board to the real issue: the mismatch between technology and governance.", score: 2, next: "s2" }
        ] },
      { id: "s2", text: "The Medical Director asks what exactly is missing. What is the most urgent gap?",
        choices: [
          { label: "More cloud storage and faster networks.", fb: "Technology is already your strongest score. More of it will not make a tool safe.", score: 0, next: "s3" },
          { label: "No AI governance council and no AI register.", fb: "Correct. Governance at 1 is the critical gap. Without a council, nobody can detect performance problems before they reach patients.", score: 2, next: "s3" },
          { label: "A communications plan to reassure the public.", fb: "Communication helps trust, but it does not fix missing oversight.", score: 1, next: "s3" }
        ] },
      { id: "s3", text: "The Chief Executive pushes back: 'The vendor says it is already proven.' How do you respond?",
        choices: [
          { label: "Accept the vendor's evidence, since they are the experts.", fb: "A vendor's own study is not local validation. Performance may differ in your patient population.", score: 0, next: "s4" },
          { label: "Propose a local validation study, with fairness checks across patient groups, before deployment.", fb: "Good. Genuine maturity includes local, prospective validation and subgroup fairness testing.", score: 2, next: "s4" },
          { label: "Ask the vendor to carry out all monitoring for the trust.", fb: "The trust needs its own monitoring and named responsible officers. Outsourcing it all leaves a gap.", score: 1, next: "s4" }
        ] },
      { id: "s4", text: "Now you must give the board a plan. Which sequence do you recommend?",
        choices: [
          { label: "Deploy now, set up the council in the second half of the year.", fb: "This reverses the roadmap. Governance must be established in the foundation phase before the tool goes live.", score: 0, next: "s5" },
          { label: "Set up the governance council first, run a local validation study, then deploy with a mandatory monitoring framework.", fb: "This follows the book's three-stage conditional approval: council first, local validation next, then deployment with monitoring.", score: 2, next: "s5" },
          { label: "Do the validation study first, and think about governance later.", fb: "Validation is good, but without a council nobody owns the results or the decision to proceed.", score: 1, next: "s5" }
        ] },
      { id: "s5", text: "A board member asks how you will know it is working. What do you propose?",
        choices: [
          { label: "Ask radiologists for informal feedback after six months.", fb: "Anecdotal feedback is a surface-level sign. It is not systematic monitoring.", score: 0, next: null },
          { label: "Dashboards, regular bias audits, a named responsible officer, and quarterly reporting from the council to the board.", fb: "Excellent. This is genuine maturity: continuous monitoring, accountability and board visibility.", score: 2, next: null },
          { label: "Wait for the vendor's annual report.", fb: "The vendor's report is not independent. The trust must watch its own results.", score: 1, next: null }
        ] }
    ]
  },
  glossary: [
    { term: "AI maturity", def: "How well prepared an organisation really is to use AI safely, across strategy, data, people, rules and culture." },
    { term: "Capability illusion", def: "The mistaken belief that having AI tools means you are AI-ready." },
    { term: "Surface-level adoption", def: "Using AI tools without the governance, evidence and training that make them safe." },
    { term: "Genuine maturity", def: "Real capability shown by working governance, monitoring, evidence and trained staff." },
    { term: "Electronic health record (EHR)", def: "A patient's digital medical record. A complete EHR is needed but not enough for AI." },
    { term: "FHIR", def: "A common standard for sharing health data between systems." },
    { term: "AI register", def: "A record of every AI tool in use, with its evidence and regulatory status." },
    { term: "AI governance council", def: "The group that oversees AI use, checking safety, fairness and accountability." },
    { term: "Radar chart", def: "A web-shaped chart that shows scores across several dimensions at once." },
    { term: "Dimensional imbalance", def: "A big gap between strong and weak dimensions, such as technology far ahead of governance." },
    { term: "Gartner Hype Cycle", def: "A picture of how excitement about a technology rises, falls and then steadies." },
    { term: "Trough of Disillusionment", def: "The phase when failures lead to disappointment and lost trust." },
    { term: "Clinical champion", def: "A respected clinician who helps colleagues adopt a new tool." },
    { term: "MHRA", def: "The Medicines and Healthcare products Regulatory Agency, which regulates medical devices in the UK." },
    { term: "Milestone", def: "A checkable result, such as pilots with documented outcomes and sign-off." }
  ],
  takeaways: [
    "Maturity is not the same as owning tools: it needs governance, data, people and culture as well.",
    "Five levels, six dimensions: be honest about where you really sit, and do not skip levels.",
    "The shape of your chart matters: technology far ahead of governance is the warning sign.",
    "The Hype Cycle's Trough comes from a maturity mismatch, and you can avoid it by building foundations first.",
    "Governance first, one level at a time: UCSF took a decade of foundations, and money alone did not save Amazon or Walmart."
  ]
};
