/* Workshop "From Pilot to Practice" lesson videos: narrated 3D scenes (Sam, your tutor).
   Each sentence in "say" moves the scene on one step. */
window.COURSE_VIDEO = window.COURSE_VIDEO || {};
window.COURSE_VIDEO.pp = {
  l1: {
    keyPoint: "Pilots stall when clinical, technical and management teams each mean something different by “it works”, and nobody owns the decision at the end. Agree what success means together, at the start.",
    slides: [
      {
        scene: { type: "ward", title: "A pilot ward: the AI watches, the alerts appear on a separate screen", steps: [0, 0, 1, 2, 3, 3] },
        say: [
          "Welcome to the From Pilot to Practice workshop. I'm Sam, your tutor.",
          "This is a medical ward in a made-up hospital trust, and it will stay with us for the whole workshop.",
          "The trust is piloting an AI tool that reads each patient's observations and blood results, and warns staff when someone is likely to get worse.",
          "To save time, the alerts appear on a separate screen at the nurses' station, rather than in the patient record.",
          "As the weeks pass, the alerts pile up, the nurses are busy at the bedside, and the screen is watched less and less.",
          "At the end of the pilot, the technical team say the tool works, and the ward team say it doesn't. Both are telling the truth."
        ]
      },
      {
        scene: { type: "graph", title: "Two languages, one decision",
          nodes: [
            { id: "dec", label: "The go/no-go\ndecision", p: [0, 0.3, 1.0], c: "amber", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "cli", label: "Clinical:\nsafer patients,\nfits the ward", p: [-4.6, 1.6, -0.6], c: "green", shape: "sphere", size: 0.9, ls: 0.6 },
            { id: "tec", label: "Technical:\naccurate, reliable,\nsecure", p: [4.6, 1.6, -0.6], c: "cyan", shape: "box", size: 0.9, ls: 0.6 },
            { id: "man", label: "Management:\naffordable,\nworth it", p: [-1.9, 3.3, -1.8], c: "violet", shape: "cyl", size: 0.9, ls: 0.6 },
            { id: "pat", label: "Patients:\nsafe, fair,\nexplained", p: [1.9, 3.3, -1.8], c: "pink", shape: "shield", size: 0.9, ls: 0.6 }
          ],
          links: [["dec", "cli"], ["dec", "tec"], ["dec", "man"], ["dec", "pat"]],
          steps: ["all", ["dec", "cli"], ["dec", "tec"], ["dec", "man"], ["dec", "pat"], ["dec"], "all"] },
        say: [
          "Here is why that happens.",
          "For a clinician, “it works” means patients are safer and the tool fits the way the ward really runs, including at three in the morning.",
          "For a data scientist, it means a high accuracy score on test data, and for the IT team, a system that is secure and reliable.",
          "For managers, it means the benefit is worth the cost, including the hidden costs of training, integration and monitoring.",
          "And for patients, it means they are safe, treated fairly, and told honestly how decisions are made.",
          "When these meanings are never put side by side, the decision at the end falls between the groups, and the pilot drifts. That drift has a name: pilot purgatory.",
          "So the first rule of this workshop is simple: agree what success means, together, before the pilot starts."
        ]
      }
    ]
  },

  l2: {
    keyPoint: "A good pilot is a small experiment: a real question, shared success measures, a baseline, a check in silent mode, an end date with a stop rule, and a named decision owner.",
    slides: [
      {
        scene: { type: "stairs", title: "Seven steps to a pilot that can answer a question", flat: true,
          levels: [
            { label: "1. Agree\nthe problem", c: "cyan" }, { label: "2. Shared\nsuccess measures", c: "green" }, { label: "3. Measure\nthe baseline", c: "amber" },
            { label: "4. Silent\nmode", c: "violet" }, { label: "5. End date\nand stop rule", c: "red" }, { label: "6. Decision\nowner", c: "pink" }, { label: "7. Plan for\nsuccess", c: "cyan" }
          ],
          steps: ["all", 0, 1, 2, 3, 4, 5, 6, "all"] },
        say: [
          "A pilot is an experiment, so it needs a question that a result could pass or fail.",
          "Step one: agree the problem in plain words, with the people who live with it every day.",
          "Step two: agree three to five success measures that clinical, technical and management staff all accept, including at least one the tool could genuinely fail.",
          "Step three: measure the baseline, the before picture, so you can show what changed.",
          "Step four: run the tool in silent mode on your own patients, with the alerts hidden, to see how it really performs here.",
          "Step five: set the end date and the stop rule, the result that would make you end early.",
          "Step six: name the decision owner, the one person who must make the call on the end date.",
          "And step seven: plan for success from day one, because the safety case, data protection assessment and contract will all need updating to go wider.",
          "Miss any of these, and the pilot can run for months without ever producing a decision."
        ]
      }
    ]
  },

  l3: {
    keyPoint: "Ask four questions of any results pack: how many alerts, how many were useful, who was missed, and does it work for everyone? Alert fatigue is a safety risk, and local results matter more than the supplier's figures.",
    slides: [
      {
        scene: { type: "bars", title: "The pilot results pack (illustrative figures)", scale: 0.05,
          bars: [
            { id: "acc1", label: "Supplier\naccuracy (x100)", v: 84, p: [-4.5, 0], c: "cyan" },
            { id: "acc2", label: "Local\naccuracy (x100)", v: 74, p: [-1.5, 0], c: "amber" },
            { id: "ack1", label: "Alerts answered\nin 30 min, month 1 (%)", v: 61, p: [1.5, 0], c: "green" },
            { id: "ack5", label: "Alerts answered\nin 30 min, month 5 (%)", v: 38, p: [4.5, 0], c: "red" }
          ],
          steps: ["all", ["acc1"], ["acc1", "acc2"], ["acc1", "acc2"], ["ack1"], ["ack1", "ack5"], "all"] },
        say: [
          "Now let's open the results pack, and ask four questions: how many alerts, how many were useful, who was missed, and does it work for everyone?",
          "The supplier reported an accuracy score of 0.84, on a scale where 1 is perfect and 0.5 is no better than tossing a coin.",
          "On this trust's own patients, the score was 0.74.",
          "A drop like this is normal, because patients, equipment and recording habits differ between hospitals. That is exactly why you check locally.",
          "In the first month, 61 per cent of alerts were looked at within half an hour.",
          "By month five, it was 38 per cent. With fourteen alerts per ward per day, and only one in six leading to action, staff had started to tune them out. This is alert fatigue.",
          "An alert that nobody reads is worse than no alert at all, because everyone assumes the tool is watching."
        ]
      },
      {
        scene: { type: "curve", title: "Moving the alert threshold: catch more patients, or raise fewer false alarms", normalLabel: "Patients' predicted risk",
          steps: [2.5, 1.2, 1.2, 3.1, 3.1, 2.1, 2.1] },
        say: [
          "Every alerting tool has a threshold: the level of risk at which it raises an alarm.",
          "Set it low, and the tool flags almost everyone who might get worse.",
          "But it also raises many false alarms, and the nurses stop listening.",
          "Set it high, and the alerts are fewer and more trusted.",
          "But more patients who are getting worse slip through unflagged.",
          "There is no perfect setting, only a balance point, and it should be chosen with the nurses who will receive the alerts.",
          "Then check the results for every group, by age, ward and time of day, because an average can hide a gap. In our case, two of the four missed patients were over eighty-five."
        ]
      }
    ]
  },

  l4: {
    keyPoint: "Safety cases, hazard logs and data protection assessments written for a pilot do not cover wider use. Update them before scaling, and make sure every member of staff can explain the tool to patients simply.",
    slides: [
      {
        scene: { type: "graph", title: "The checks around an AI tool in the NHS",
          nodes: [
            { id: "tool", label: "AI early-\nwarning tool", p: [0, 0.3, 1.0], c: "violet", shape: "ico", size: 1.2, spin: true, ls: 0.7 },
            { id: "d129", label: "DCB0129:\nthe maker's\nsafety case", p: [-4.8, 1.4, -0.4], c: "cyan", shape: "box", size: 0.85, ls: 0.58 },
            { id: "d160", label: "DCB0160:\nthe hospital's\nsafety case", p: [-2.4, 3.2, -1.6], c: "green", shape: "shield", size: 0.85, ls: 0.58 },
            { id: "dpia", label: "DPIA:\npersonal data\nrisks", p: [2.4, 3.2, -1.6], c: "amber", shape: "cyl", size: 0.85, ls: 0.58 },
            { id: "mhra", label: "MHRA:\nmedical device\nrules", p: [4.8, 1.4, -0.4], c: "red", shape: "sphere", size: 0.85, ls: 0.58 },
            { id: "pat", label: "Patients:\na simple,\nhonest answer", p: [0, -0.9, 3.2], c: "pink", shape: "torus", size: 0.85, ls: 0.58 }
          ],
          links: [["tool", "d129"], ["tool", "d160"], ["tool", "dpia"], ["tool", "mhra"], ["tool", "pat"]],
          steps: ["all", ["tool", "d129"], ["tool", "d160"], ["tool", "dpia"], ["tool", "mhra"], ["tool", "d160", "dpia"], ["tool", "pat"], "all"] },
        say: [
          "Every AI tool used in NHS care sits inside a set of safety and governance checks.",
          "The supplier follows a standard called DCB0129: it must list what could go wrong with its product, and show how each risk is controlled.",
          "The hospital follows the matching standard, DCB0160. Its clinical safety officer checks the risks on its own wards, keeps a hazard log and signs a safety case.",
          "A data protection impact assessment, or DPIA, checks the risks to patients' personal data, as UK data protection law requires.",
          "And if the software helps diagnose or treat patients, it may count as a medical device, under rules overseen by the MHRA, the UK regulator.",
          "Here is the trap: in our case, the safety case and the DPIA covered only the two pilot wards. Before the tool goes to twenty wards, both must be updated.",
          "Finally, patients. When a daughter asks whether a computer is deciding who gets seen first, every member of staff should be able to answer simply: the computer helps us notice, and people make the decisions.",
          "The paperwork must follow the scale, and the explanation must reach the bedside."
        ]
      }
    ]
  },

  l5: {
    keyPoint: "There are four options: go, go with conditions, extend, or stop. Give every condition an owner, a measure and a date, roll out in phases with the tool built into the patient record, and agree a switch-off point in advance.",
    slides: [
      {
        scene: { type: "stairs", title: "Four doors at the end of a pilot", flat: true,
          levels: [ { label: "Stop:\nrecord what\nwas learned", c: "red" }, { label: "Extend:\none question,\nfixed end", c: "amber" }, { label: "Go with\nconditions", c: "cyan" }, { label: "Go:\nroll out\nin phases", c: "green" } ],
          steps: ["all", 3, 2, 1, 0, "all"] },
        say: [
          "At the end of the pilot there are four doors, and each one can be the right choice.",
          "Go, when the benefit is clear, the risks are controlled at scale, and the tool works for every group of patients.",
          "Go with conditions, when the benefit is real but named gaps must be fixed first, each with an owner, a measure and a date.",
          "Extend the pilot, when one specific question is still unanswered, with a fixed end date and a stop rule.",
          "Or stop, and write down what was learned. Stopping is not failure. Another year in pilot purgatory is."
        ]
      },
      {
        scene: { type: "ward", title: "From pilot to practice: alerts in the patient record, then ward by ward", steps: [3, 4, 4, 4, 5, 5] },
        say: [
          "So what does moving into practice look like on our ward?",
          "First, the tool is linked to the electronic patient record, so alerts reach the nurse's handheld device instead of a screen nobody watches.",
          "The threshold is tuned with the nurses, so they receive fewer alerts, and more of them matter.",
          "The safety case, hazard log, data protection assessment and contract are updated, and staff can explain the tool to patients in one sentence.",
          "Then the tool is rolled out a few wards at a time, checking the results at every step.",
          "And it is watched for as long as it is in use, for drift, for alert fatigue and for gaps between groups of patients, with a switch-off point agreed in advance. That is the journey from pilot to practice."
        ]
      }
    ]
  }
};
