/* ===========================================
   CENTERCODE TRAINING ACADEMY — DATA LAYER
   Modules, roles, lessons, quiz questions
   =========================================== */

const ROLES = {
  'test-manager': {
    id: 'test-manager',
    icon: '🎯',
    title: 'Test Manager',
    desc: 'Plan and run end-to-end delta testing programs',
    path: ['fundamentals','platform','testers','feedback','reporting','governance','advanced-tools','integrations','maturity','ecosystem'],
  },
  'product-manager': {
    id: 'product-manager',
    icon: '📦',
    title: 'Product Manager',
    desc: 'Use user testing insights to shape your roadmap',
    path: ['fundamentals','platform','feedback','reporting','integrations','maturity','ecosystem'],
  },
  'qa-engineer': {
    id: 'qa-engineer',
    icon: '🔬',
    title: 'QA / Engineer',
    desc: 'Integrate issue workflows and triage feedback',
    path: ['fundamentals','platform','feedback','advanced-tools','integrations'],
  },
  'customer-success': {
    id: 'customer-success',
    icon: '🤝',
    title: 'Customer Success',
    desc: 'Support communities and report program outcomes',
    path: ['fundamentals','platform','testers','reporting','maturity','ecosystem'],
  },
};

const MODULES = {

  /* =====================================================
     MODULE 1 — BETA TESTING FUNDAMENTALS
     ===================================================== */
  fundamentals: {
    id: 'fundamentals',
    title: 'User Testing Fundamentals',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17H8v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7Z"/></svg>',
    duration: '25 min',
    difficulty: 'Beginner',
    description: 'Learn what user testing really is, how Centercode\'s delta testing framework works, and why signal quality beats raw volume every time.',
    lessons: [
      {
        id: 'f-1',
        title: 'What User Testing Actually Is',
        content: `
<h3>The Real Question</h3>
<p>User testing puts your product in front of real people in real conditions before release. The goal isn't just to find what's broken. It's to answer a harder question: does this product work the way your actual customers need it to?</p>
<p>Internal teams can't replicate the diversity, creativity, and occasional chaos of a real user base. You can test your own product for months and still miss the issue a first-time user hits in the first five minutes.</p>


<h3>Types of Delta Testing Programs</h3>
<p>Centercode supports four distinct program types, each built for a different testing goal:</p>
<ul>
  <li><strong>Product Launch Testing:</strong> Engage your target market to validate new products or major releases before they ship. The most common use case.</li>
  <li><strong>Continuous User Testing:</strong> Run ongoing programs with existing customers to continuously improve live products. The right fit for SaaS products shipping frequently.</li>
  <li><strong>Employee Testing:</strong> Gather internal employee feedback to catch issues early and build a product-focused culture before going external.</li>
  <li><strong>Competitive Testing:</strong> Enlist a competitor's customers to gain direct, actionable intelligence about how your product compares to theirs.</li>
</ul>

<h3>What Makes a Program Effective</h3>
<p>Traditional user testing programs typically see 20–30% participant engagement. Programs run with Centercode's approach consistently reach 80–90%. That gap doesn't come from luck. It comes from structure, automation, and treating participants as partners instead of data sources.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>User testing validates with real people in real conditions, not your internal team</li>

  <li>Four program types: Product Launch, Continuous, Employee Testing, Competitive</li>
  <li>80–90% engagement is achievable with the right structure</li>
</ul></div>`,
      },
      {
        id: 'f-2',
        title: 'The Delta Testing Framework',
        content: `
<h3>Centercode's Proprietary Approach</h3>
<p>Delta testing is Centercode's own methodology for running user tests. It's not just a platform feature. It's a system combining specific processes, best practices, and automation designed to produce reliable, actionable results every time.</p>
<p>The structure follows a consistent pattern: <strong>Phases → Features → Activities</strong>. Each phase focuses on a themed set of features. Each feature gets activities that guide participants through specific testing scenarios. That structure keeps feedback organized and tied to what actually matters.</p>
<p>Every project has three scheduled phase types that run in order:</p>
<ul>
  <li><strong>Onboarding:</strong> Feedback submission is disabled. Participants get oriented, receive product access, and set up their environment.</li>
  <li><strong>Engagement:</strong> The primary testing period. Features and activities live here. Ted — Centercode's intelligent engagement bot — reaches out to participants about progress and gaps. (More on Ted in Module 2.)</li>
  <li><strong>Closure:</strong> Wraps up the project. Feedback submission stays open. Ted sends final summaries.</li>
</ul>
<p>There are also two always-active background phases: New User (for onboarding new participants mid-program) and Regression (for re-testing features across multiple engagement cycles).</p>


<h3>The FIPs Feedback Framework</h3>
<p>Every delta testing program collects three types of feedback, known as FIPs (fixes, improvements, and promotions):</p>
<ul>
  <li><strong>Issues</strong>: Problems with the product. These drive fixes.</li>
  <li><strong>Ideas</strong>: Opportunities to improve the product. These drive improvements.</li>
  <li><strong>Praise</strong>: Strengths and delights in the product. These drive promotions.</li>
</ul>
<p>The FIPs framework matters because most programs only capture what's broken. Praise is data too. It tells you what to protect when you're under pressure to ship fast.</p>

<div class="callout callout-info"><div class="callout-head">The minimum dose principle</div><div class="callout-text">Centercode's programs are designed around a minimum dose approach: use the least effort and resources required to get the clearest signal. More activities, more participants, more questions: none of that automatically produces better insight. Often it produces noise.</div></div>

<h3>Signal Over Volume</h3>
<p>The instinct to add more participants when results disappoint is understandable. It's also usually wrong. Low signal isn't a recruiting problem. It's a quality problem. Adding more participants to a noisy program just gives you more noise, faster, at higher cost.</p>
<p>25 engaged participants with context-rich feedback tell you more than 200 participants with shallow responses. The math feels counterintuitive. The outcomes aren't.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Delta testing = Phases → Features → Activities, repeated each phase</li>
  <li>FIPs = Issues (fixes), Ideas (improvements), Praise (promotions)</li>
  <li>Praise is signal: it tells you what to protect, not just what to fix</li>
  <li>Signal quality beats participant volume every time</li>
</ul></div>`,
      },
      {
        id: 'f-3',
        title: 'Program Thinking vs. Project Thinking',
        content: `
<h3>Two Different Mental Models</h3>
<p>A <strong>project</strong> is a specific user test with a defined scope and timeline. A <strong>program</strong> is the durable infrastructure that makes projects work: community relationships, templates, access rules, and institutional knowledge that outlasts any single test.</p>
<p>Most teams start with project thinking. They recruit participants, run the test, wrap it up, and repeat from scratch next time. Programs mature when teams shift to program thinking: building infrastructure once, reusing it, and improving it with every cycle.</p>

<h3>Why Heroics Are a Warning Sign</h3>
<p>If your program only works because one person holds everything together, it isn't really working. It's a program built on heroics, not structure. Heroics are a design smell: a signal that something upstream needs to be encoded into the platform instead of carried in someone's head.</p>
<p>This matters practically. People leave. Roles change. A program that can't survive a personnel transition isn't a program. It's a dependency.</p>

<div class="callout callout-warn"><div class="callout-head">Ted handles what shouldn't be manual</div><div class="callout-text">If your team is manually nudging every inactive participant, Ted isn't being used correctly. Ted is Centercode's intelligent engagement bot — he automates participant communication based on behavior. Module 2 covers how to set him up and configure him.</div></div>

<h3>How Delta Programs Progress</h3>
<p>Every effective delta program moves through the same stages: Plan → Recruit → Activate → Collect → Analyze → Act. Centercode supports all six. The stage teams most often skip or rush is the last one.</p>
<p>If participants never see their feedback reflected in decisions (or even acknowledged), engagement drops on the next program. Closing the loop isn't optional. It's what makes participants want to come back.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Projects are temporary; programs are durable infrastructure</li>
  <li>Heroics are a design smell: the system should work without one person holding it together</li>
  <li>Ted automates participant engagement based on individual behavioral profiles</li>
  <li>Closing the loop after every program builds the engagement you need for the next one</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Your program has 300 participants but only 18% have submitted feedback after two weeks. The right response is:',
        opts: ['Recruit more participants immediately to increase volume','Diagnose why signal is low — the problem is quality, not quantity','Send a manual email blast to all 300 participants','Extend the program timeline to give participants more time'],
        a: 1,
        exp: 'Low feedback submission signals a quality problem, not a volume problem. Adding more participants to a low-engagement program compounds the noise. The right move is to diagnose what\'s preventing participation before doing anything else.',
      },
      {
        q: 'In the FIPs framework, what does Praise specifically drive?',
        opts: ['Fixes — resolving product defects before release','Improvements — additions to the product roadmap','Promotions — identifying and protecting what already works well','Prioritization — ranking which issues to fix first'],
        a: 2,
        exp: 'FIPs stands for fixes, improvements, and promotions. Praise maps to promotions — it tells you what works so you can protect it when shipping pressure builds. Programs that only track Issues and Ideas miss half the picture.',
      },
      {
        q: 'Which two phase types run continuously in the background of every delta project, separate from the three scheduled phases?',
        opts: ['Kickoff and Closure','New User and Regression','Onboarding and Engagement','Planning and Review'],
        a: 1,
        exp: 'Every delta project has three scheduled phases — Onboarding, Engagement, and Closure — plus two background phases that run continuously: New User (for onboarding participants who join mid-program) and Regression (for re-testing features across multiple engagement cycles).',
      },
      {
        q: 'A program that only works because one experienced person manages everything manually is:',
        opts: ['Well-run — that\'s what expertise looks like','A sign the program needs more headcount','Fragile — heroics are a design smell that signals structural problems','Normal for programs under a certain size'],
        a: 2,
        exp: 'Heroics are a design smell. If the program breaks when that person is away, the system isn\'t finished. The fix is encoding decisions and processes into the platform structure, not relying on individual memory.',
      },
      {
        q: 'During the Onboarding phase of a delta project, feedback submission is:',
        opts: ['Open for all feedback types including Issues and Ideas','Disabled — participants orient, receive product access, and set up their environment','Limited to Praise only','Routed to moderation before participants can see it'],
        a: 1,
        exp: 'The Onboarding phase disables feedback submission. Its purpose is orientation: participants get set up, receive product access, and complete any required agreements. The Engagement phase is where active testing and feedback collection begin.',
      },
    ],
    testOut: [
      {
        q: 'A PM says: "We ran 300 participants last time and still got bad data. Let\'s do 600 this time." The correct response is:',
        opts: ['Agree — more participants always improves statistical confidence','Decline — double the participants means double the admin overhead with no signal improvement','Reframe: more participants won\'t fix a signal quality problem. Diagnose what made the first 300 disengaged before recruiting anyone new.','Agree, but only if the budget supports it'],
        a: 2,
        exp: 'The minimum dose principle applies here. More participants won\'t fix low engagement or poor targeting. The right move is to diagnose the root cause (mismatched profiles, unclear activities, poor communication cadence) before spending more recruiting budget.',
      },
      {
        q: 'A participant submits feedback saying "I loved the new checkout flow — it was the fastest I\'ve ever seen." In the FIPs framework, this is:',
        opts: ['Not useful — positive feedback doesn\'t need to be tracked','An Idea — it suggests the checkout flow could be improved further','Praise — it promotes a strength that should be protected','An Issue — it implies the old flow was too slow'],
        a: 2,
        exp: 'Praise maps to the P in FIPs (promotions). It\'s real signal: it tells you what works and what to protect when shipping pressure builds. Programs that only track Issues and Ideas miss half the picture.',
      },
      {
        q: 'Your project structure shows Phases → Features → Activities. A new team member asks what the Activity layer specifically accomplishes. The correct answer is:',
        opts: ['It assigns participants to specific feedback types','It sets the timeline for each program phase','It gives participants specific instructions for how to access and test each feature','It configures Ted\'s engagement cadence per feature'],
        a: 2,
        exp: 'Activities provide instructions that describe how participants access and test each feature. They ensure participants understand the full scope of what they\'re testing, which drives more focused and actionable feedback than open-ended exploration alone.',
      },
      {
        q: 'Six months into a continuous program, the test manager leaves. The replacement admin can\'t find documentation for why key settings are configured the way they are. This is an example of:',
        opts: ['Normal transition friction — this always takes time to resolve','A heroics problem: critical knowledge lived in one person\'s head instead of the platform','A recruiting problem — the right admin wasn\'t hired','A reporting problem — better dashboards would have surfaced the issue'],
        a: 1,
        exp: 'When institutional knowledge lives in one person\'s head instead of encoded in platform structure, templates, and documentation, the program becomes fragile. Program thinking means designing for handoff, not just for today.',
      },
      {
        q: 'At which stage of the delta program lifecycle do most program failures actually originate?',
        opts: ['Collect — teams don\'t capture enough feedback types','Act — teams collect feedback but don\'t close the loop or make decisions','Recruit — teams target the wrong participant profiles','Analyze — teams can\'t process the volume of feedback they receive'],
        a: 1,
        exp: 'The Act phase is where most programs fail silently. When feedback gets collected but decisions aren\'t communicated back to participants, trust erodes. The next program starts with lower engagement, even if the team thinks the previous one went well.',
      },
    ],
  },

  /* =====================================================
     MODULE 2 — NAVIGATING CENTERCODE
     ===================================================== */
  platform: {
    id: 'platform',
    title: 'Navigating the Centercode Platform',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    duration: '20 min',
    difficulty: 'Beginner',
    description: 'Get oriented on the Centercode Platform: how it\'s structured, who owns what, how Ted fits in, and what your daily workflow looks like.',
    lessons: [
      {
        id: 'p-1',
        title: 'How the Platform Is Organized',
        content: `
<h3>The Three-Level Structure</h3>
<p>The Centercode Platform organizes everything around three concepts: Workspace, Community, and Project. Understanding how they relate to each other makes everything else easier.</p>
<ul>
  <li><strong>Workspace</strong>: Your organization's top-level account. Everything lives here.</li>
  <li><strong>Community</strong>: Your persistent pool of members. It exists independently of any single test. Members you recruit today can be invited to programs years from now.</li>
  <li><strong>Project</strong>: A specific user test with defined scope, timeline, and participants. Projects draw from your Community and house all activities, feedback, and reports for that program.</li>
</ul>
<p>The distinction that trips people up most: Community and Project are not the same thing. Your Community is infrastructure. Your Project is execution. Build your Community well and every Project gets easier.</p>

<div class="callout callout-info"><div class="callout-head">Two distinct roles</div><div class="callout-text">Community admins own the shared infrastructure: member profiles, recruiting rules, templates, and global defaults. Project managers execute within that infrastructure. Problems surface when these roles get blended. More on that in the Governance module.</div></div>

<h3>Access Has Six Layers</h3>
<p>Access in Centercode isn't a single on/off switch. It's determined by six layers acting together: Community membership, team assignment, role permissions, project access, workflow state, and notice or gating conditions.</p>
<p>When someone can't access something they should be able to, the problem is almost always in one specific layer, not "the platform isn't working." Knowing the layers helps you diagnose the issue in under a minute instead of escalating a support ticket.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Workspace → Community → Project is the hierarchy</li>
  <li>Community is persistent infrastructure; Project is a time-bound execution instance</li>
  <li>Access is determined by six layers. Know them before troubleshooting.</li>
</ul></div>`,
      },
      {
        id: 'p-2',
        title: 'Inside a Project',
        content: `
<h3>What Lives in a Project</h3>
<p>Every project has the same structure: a Dashboard, Activities, Feedback, Members, and Reports. That consistency is intentional. It means you can orient yourself in any project (yours or a colleague's) in under a minute.</p>
<ul>
  <li><strong>Dashboard</strong>: Your real-time command center. Participation rates, feedback volume, and top-scored items surface here automatically.</li>
  <li><strong>Activities</strong>: The structured testing tasks tied to Features in your Delta program: feature walkthroughs, test scenarios, guided tests. Activities drive focused feedback.</li>
  <li><strong>Tasks</strong>: A separate project component for structured work assignments — onboarding checklists, required actions, acceptance workflows. Participants must accept and complete task lists. Tasks can appear in Notice Chains (controlled access sequences covered in Module 3) and have their own status tracking per participant.</li>
  <li><strong>Feedback</strong>: All participant submissions: Issues, Ideas, and Praise. Scored, tracked through a triage workflow, and linked to features.</li>
  <li><strong>Members</strong>: Participants enrolled in this specific project, with engagement scores and individual contribution data.</li>
  <li><strong>Reports</strong>: Configurable dashboards and shareable reports for stakeholders at every level.</li>
</ul>

<div class="callout callout-warn"><div class="callout-head">Activities vs. organic feedback</div><div class="callout-text">Activities are what you ask participants to do. Feedback is what they choose to submit on their own. Good programs need both. Activities give you coverage across key features. Organic feedback surfaces issues you never thought to ask about.</div></div>

<h3>The Three KPI Metrics</h3>
<p>Every Centercode project tracks three KPIs that update in real time:</p>
<ul>
  <li><strong>Delta Health</strong>: Participant engagement measured by activity completion and feedback submission rates. Displayed as a letter grade (A+ to N/A). When Health falls below a passing threshold, the Success score shows as a range or N/A rather than a precise number.</li>
  <li><strong>Delta Success</strong>: Product health based on the balance of issues vs. praise and resolved feedback. Displays as a whole number once Health is strong; shown as a range at lower Health levels. A score of exactly 50 means issues and positive signals are in perfect balance.</li>
  <li><strong>Delta Impact</strong>: Testing effectiveness — the percentage change in Success attributable to addressed feedback. Feedback counts toward Impact only when its status has an Intent set to one of the Resolved options — Resolved - Verified, Resolved - Other, or Resolved - Exclude. This is the ROI number worth showing an executive.</li>
</ul>
<p>Together, these tell you whether your program is healthy, whether your product is improving, and how much your testing actually moved the needle.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Every project has Dashboard, Activities, Feedback, Members, and Reports</li>
  <li>Activities are structured tasks; organic feedback is participant-initiated</li>
  <li>Delta Health, Success, and Impact are the three core KPIs</li>
</ul></div>`,
      },
      {
        id: 'p-3',
        title: 'Ted, Communication, and Your Daily Workflow',
        content: `
<h3>Who Ted Is</h3>
<p>Ted is Centercode's intelligent bot. He builds a unique behavioral profile for each participant, learning their preferred communication timing, tone, and channel (email or SMS). He then uses that profile to send automated nudges, reminders, and follow-ups without you having to configure each one manually.</p>
<p>Ted handles behavior-driven communication. If a participant hasn't completed an activity in three days, Ted knows and responds accordingly. If a participant just submitted their fifth piece of feedback, Ted knows that too.</p>
<p>Ted AI is a separate LLM-powered layer that handles content generation — test plans, surveys, feedback summaries, and more. Same name family, different function. Module 7 covers Ted AI in detail.</p>

<h3>Activating Ted</h3>
<p>Ted isn't on by default on every project. You activate him from the Management menu under <em>Tester engagement bot settings</em>. The page shows a "Meet Ted" intro and an <em>Activate Ted</em> button. Once active, you configure three areas:</p>
<ul>
  <li><strong>Tester messaging:</strong> Toggle whether Ted sends welcome messages, SMS texts, and thank-you summaries with participation stats.</li>
  <li><strong>Smart engagement:</strong> Three levels — Typical (recommended, max one message per day based on participation), Light (fewer messages, focused on testers falling behind), or None (critical messages only, like phase changes and new features).</li>
  <li><strong>Admin messaging:</strong> Toggle whether Ted sends you daily scrum updates and phase progress and closure updates.</li>
</ul>
<p>Below those settings is <strong>Ted's audience</strong> — a team table where you control which teams receive Tester messages and which receive Management messages. You set each independently per team.</p>
<p>Ted can be deactivated at any time from the same page. A <em>Ted log</em> button gives you a full history of every message he has sent.</p>

<h3>Communication Ownership</h3>
<p>Mature programs divide communication responsibility clearly:</p>
<ul>
  <li><strong>Ted</strong>: Automated, behavior-driven nudges. Activity reminders, follow-ups on platform state, timing-critical messages. If the system already knows the condition, Ted should send the message.</li>
  <li><strong>Project email</strong>: Situational context and exceptions. Explaining a change, clarifying an expectation, adding human context Ted can't infer. Automation handles <em>when</em>; project email explains <em>why</em>.</li>
  <li><strong>Community email</strong>: Broad, non-urgent program communication. Program updates, reinforcing norms, framing upcoming work.</li>
</ul>
<p>When all three send messages to the same audience at the same time, none of them feel authoritative. More messages don't create more engagement. They create confusion.</p>

<div class="callout callout-success"><div class="callout-head">Video feedback</div><div class="callout-text">Participants can record and submit video directly in the browser — webcam video, screen recordings, or audio — without installing anything. The Centercode mobile app for iOS and Android supports the same. Video captures facial expressions, vocal tone, and on-screen interaction simultaneously: context that text alone can't replicate. Activity video recording must be enabled per feature in the project configuration.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Ted builds a behavioral profile per participant and handles automated engagement</li>
  <li>Ted owns behavior-driven nudges; project email owns human context; community email owns program-level communication</li>
  <li>More messages weaken each one. Clear ownership matters.</li>
  <li>Video feedback via mobile captures what text cannot</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'A participant can\'t access a project they were just invited to. Before escalating a support ticket, you should:',
        opts: ['Check whether their Community membership is active, their team assignment is correct, and whether any notices are blocking access','Ask them to sign out and back in','Remove and re-add them to the project from scratch','Check whether the project Dashboard is set to public'],
        a: 0,
        exp: 'Access in Centercode is determined by six layers. The first diagnostic step is checking Community membership, team assignment, and notice or gating conditions — not a full re-enrollment. Most access issues trace to one specific layer once you know where to look.',
      },
      {
        q: 'Delta Health is a KPI displayed as:',
        opts: ['A percentage between 0% and 100%','A letter grade from A+ to N/A, based on activity completion and feedback submission rates','A numeric score from 1 to 100 that updates weekly','A color-coded status: green, yellow, or red'],
        a: 1,
        exp: 'Delta Health is a letter-grade KPI (A+ to N/A) measuring participant engagement: how participants are completing activities and submitting feedback. It\'s the leading indicator of whether your program is on track while there\'s still time to adjust.',
      },
      {
        q: 'Ted is activated on a project from:',
        opts: ['The project Dashboard under Program Settings','Management > Tester engagement bot settings, using the Activate Ted button','The Community admin panel under Integrations','The Reports section, once Delta Health reaches a passing grade'],
        a: 1,
        exp: 'You activate Ted from Management > Tester engagement bot settings. The page shows a Meet Ted intro and an Activate Ted button. From there you configure Tester messaging, Smart engagement level, Admin messaging, and Ted\'s audience table.',
      },
      {
        q: 'What distinguishes a Community from a Project in Centercode?',
        opts: ['Communities are for paying customers; projects are for free-tier accounts','A Community is your persistent member pool that exists across programs; a Project is a time-bound test that draws from it','Communities are public-facing; projects are internal-only','A Community holds feedback; a Project holds members'],
        a: 1,
        exp: 'Your Community is persistent infrastructure: member profiles, recruiting history, and engagement scores. It outlasts any single test. Projects are time-bound execution instances that draw participants from your Community. Build the Community well and each Project starts with an advantage.',
      },
      {
        q: 'A participant wants to record a video of their screen while reproducing a bug and submit it as feedback. Which statement about video feedback is accurate?',
        opts: ['Video submission requires participants to install a separate screen-recording app','In-browser video recording (webcam and screen capture) is available without installing anything; the Centercode mobile app supports the same','Video feedback is available on all feedback types by default with no licensing requirement','Video submissions are stored externally and linked to feedback items via URL'],
        a: 1,
        exp: 'Participants can record webcam video, screen recordings, or audio directly in the browser without installing anything. The Centercode mobile app for iOS and Android supports the same. Activity video recording must be enabled per feature in the project configuration.',
      },
    ],
    testOut: [
      {
        q: 'Your Delta Impact score is 12%. This means:',
        opts: ['Only 12% of participants engaged with the program','12% of feedback has been triaged and resolved','The product\'s Delta Success score improved by 12% as a result of feedback that reached a resolved status intent','12% of activities were completed on time'],
        a: 2,
        exp: 'Delta Impact is the percentage improvement in Delta Success attributable to feedback that reached a resolved status intent. A 12% Delta Impact means the product measurably improved because of what your program surfaced. That\'s the ROI number worth showing an executive.',
      },
      {
        q: 'Ted\'s Smart engagement is set to "Light." What does this mean for participant communication?',
        opts: ['Ted sends up to three messages per day based on activity patterns','Ted sends messages only once per week on a fixed schedule','Ted focuses messages on participants who are falling behind, with fewer messages overall than the Typical setting','Ted is effectively off — only critical system messages go out'],
        a: 2,
        exp: 'Light engagement means Ted focuses his messages on participants who are falling behind, rather than messaging everyone. It sends fewer messages than the Typical setting (which sends up to one message per day) and more than None (which sends only critical messages like phase changes).',
      },
      {
        q: 'An executive asks "how do I know if the program is working right now?" The single best answer in Centercode is:',
        opts: ['Export the feedback CSV and summarize it in a presentation','Show the project Dashboard — Delta Health, feedback velocity, and top-scored items update in real time','Run a weekly community email with participation stats','Ask the test manager for a verbal update'],
        a: 1,
        exp: 'The project Dashboard is designed exactly for this: real-time program health across the metrics that matter. Delta Health surfaces engagement trends. Feedback velocity shows whether signal is flowing. Top-scored items show what needs attention. No export required.',
      },
      {
        q: 'A Delta Success score of exactly 50 indicates:',
        opts: ['The program is halfway through its scheduled duration','Exactly half of participants have completed their required activities','Issues and positive signals are in perfect balance — the product is neither trending toward failure nor toward strong health','The scoring system has insufficient data to produce a precise result'],
        a: 2,
        exp: 'Delta Success measures product health as a ratio of issues to praise and resolved feedback. A score of exactly 50 means the positive and negative signals are in perfect balance. Scores above 50 lean toward health; scores below 50 lean toward concern.',
      },
      {
        q: 'Which combination best describes a healthy Centercode program?',
        opts: ['High feedback volume, many activities, large participant pool','Stable Delta Health trend, clear communication ownership, encoded decisions that don\'t require one person to explain them','100% activity completion rate and zero open issues','Jira integration active, weekly executive reports sent, all feedback triaged within 24 hours'],
        a: 1,
        exp: 'Health isn\'t about volume or activity counts. It\'s about stability: a predictable Delta Health trend, communication ownership that doesn\'t rely on manual intervention, and decisions encoded in the platform so the program runs correctly without heroics.',
      },
    ],
  },

  /* =====================================================
     MODULE 3 — RECRUITING & MANAGING PARTICIPANTS
     ===================================================== */
  testers: {
    id: 'testers',
    title: 'Recruiting and Managing Participants',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    duration: '35 min',
    difficulty: 'Intermediate',
    description: 'Build a quality participant community, run campaigns that attract the right members, and sustain engagement over time without burning your community.',
    lessons: [
      {
        id: 't-1',
        title: 'Signal Starts With the Right People',
        content: `
<h3>The Quality-Before-Volume Principle</h3>
<p>The instinct when signal is weak is to add more participants. That instinct is almost always wrong. If you don't trust your participants, adding more of them won't help.</p>
<p>Low signal almost always traces back to fit: participants who don't actually use the product the way real customers do. They complete activities because they're compliant, not because they have a genuine stake. That compliance looks like engagement on a dashboard. The feedback tells a different story.</p>

<h3>Defining Your Ideal Profile</h3>
<p>Before recruiting anyone, define the profile of the participant who will give you the most useful signal. Consider:</p>
<ul>
  <li><strong>Behavioral fit</strong>: Do they use the product type in the way you need to validate? This is the most predictive signal of feedback quality.</li>
  <li><strong>Technical environment</strong>: Device inventory, operating system versions, enterprise software in use. Centercode captures this through technographic profiles.</li>
  <li><strong>Use-case alignment</strong>: Are they the right customer segment, or just someone in the right demographic?</li>
  <li><strong>Engagement potential</strong>: Do they have the time and motivation to participate consistently?</li>
</ul>

<div class="callout callout-info"><div class="callout-head">The participant energy pool</div><div class="callout-text">Every participant has a limited pool of attention and goodwill. Each ask you make (activity, survey, reminder) draws from it. The job of good program design is to spend that pool on the asks that matter most, not to exhaust it on overhead.</div></div>

<h3>Test Platform Forms</h3>
<p>Before participants submit feedback, you need to know what hardware and software they're testing on. Test Platform Forms are a dedicated form type for capturing this — device model, OS version, app version, enterprise software in use, or any other environment details that matter for your program.</p>
<p>You can require participants to complete a Test Platform Form during onboarding (via a Notice Chain) or attach it to individual feedback forms so participants specify their environment at the point of submission. The data populates their technographic profile and is available as a filter when reviewing feedback — so you can instantly see whether an issue is isolated to one OS version or affects everyone.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Low signal is almost always a fit problem, not a volume problem</li>
  <li>Define your ideal participant profile before recruiting anyone</li>
  <li>Centercode's technographic profiles capture device and software environments</li>
</ul></div>`,
      },
      {
        id: 't-2',
        title: 'Recruiting as a System, Not a Campaign',
        content: `
<h3>The Campaign Trap</h3>
<p>Most teams recruit the way they run email campaigns: blast invitations, collect whoever responds, move on. That works once. By the third program, response rates have dropped and the community is fatigued. Sustainable recruiting doesn't look like this.</p>
<p>Recruiting as a system means treating every interaction as an investment in long-term community health. Every invite spends community trust. Spend it carefully.</p>

<h3>Response Rate as a Diagnostic</h3>
<p>Low response rates are a signal, not a statistic. When only 20% of invited members respond, the real question isn't "how do we get more people to say yes?" It's: what happened to the other 80%?</p>
<p>Five things might explain non-response. They each require a different fix:</p>
<ul>
  <li>The program doesn't feel relevant to their situation</li>
  <li>The time investment isn't worth the benefit they're being offered</li>
  <li>They didn't notice the invitation: wrong timing, competing priorities</li>
  <li>Their experience with the product has been stable, so they have nothing to report</li>
  <li>They don't trust that their feedback leads to anything</li>
</ul>
<p>Adding more recruits fixes none of these. Diagnosing which one is happening does.</p>

<div class="callout callout-warn"><div class="callout-head">Recruiting debt compounds</div><div class="callout-text">Poor recruiting in one program raises the cost of recruiting in the next one. Members who had a poor experience (over-asked, ignored, or never heard back) are harder to re-engage. This debt compounds quickly and is expensive to recover from.</div></div>

<h3>Over-Recruit, But Deliberately</h3>
<p>Expect 20–30% drop-off between acceptance and active participation. If you need 80 active participants, recruit around 100. Centercode manages waitlists so you can activate additional members mid-program if early enrollees don't engage, without scrambling.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Treat recruiting as long-term infrastructure, not a one-time campaign</li>
  <li>Low response rate is a diagnostic signal: there are five distinct causes</li>
  <li>Over-recruit by 20–30% and use the waitlist to compensate for drop-off</li>
  <li>Recruiting debt from poor experiences compounds across programs</li>
</ul></div>`,
      },
      {
        id: 't-3',
        title: 'NDAs, Profiles, and Long-Term Engagement',
        content: `
<h3>Agreement Management Without the Overhead</h3>
<p>Most programs for pre-release products require participants to sign an agreement before accessing anything. The most common types are an <strong>NDA</strong> (Non-Disclosure Agreement, prohibiting participants from sharing what they've seen) and a <strong>TPA</strong> (Tester Participation Agreement, defining the rules and expectations of the program itself). Many programs use both. Centercode handles either through <em>Notice Chains</em>: controlled sequences of pages and agreements participants must complete before accessing program resources.</p>
<p>You upload the agreement, require digital signature, and the platform gates access until it's signed. Centercode logs the timestamp and agreement version automatically. You get a compliance audit trail without manually chasing signatures or tracking spreadsheets.</p>

<h3>Participant Profiles Build Over Time</h3>
<p>Every member in your Community has a profile that accumulates across programs: technographics, demographics, engagement scores, feedback quality ratings, and participation history. Those profiles are what make segmentation possible.</p>
<p>Segmentation examples that save real time:</p>
<ul>
  <li>Send an activity only to participants running iOS 17+ on iPhone 15 hardware</li>
  <li>Invite your top-25 highest-engagement members into an advisory cohort</li>
  <li>Target a follow-up survey only at participants who submitted issues about a specific feature</li>
</ul>

<div class="callout callout-success"><div class="callout-head">Distributed Values: incentives without payment</div><div class="callout-text">Don't pay participants directly — it attracts people motivated by money, not the product, and produces biased feedback. Use Distributed Values instead. You bulk-load a list of items — product keys, gift codes, serial numbers, access codes — into a content item and set per-participant quotas. The platform assigns items automatically as participants qualify, or you assign them manually. Participants receive their value through the content item in the platform. No spreadsheet tracking, no manual fulfillment emails.</div></div>

<h3>Tester Ranking</h3>
<p>Centercode automatically ranks participants by engagement and feedback quality across programs. Those rankings help you identify your best members for priority invitations, recognize contributions, and build the kind of advisory relationship that produces exceptional signal over time.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Notice Chains manage NDA sign-off and create a compliance audit trail automatically</li>
  <li>Member profiles accumulate over time and power precise segmentation</li>
  <li>Don't pay participants directly. Use Distributed Values to reward without biasing feedback.</li>
  <li>Tester ranking identifies your highest-value community members</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Seventeen percent of invited members responded to your last recruitment campaign. The most useful diagnostic question is:',
        opts: ['How do we write a more compelling recruitment email?','What happened to the other 83% — and which of the five root causes explains their non-response?','How many more people do we need to invite next time?','Should we lower the screening requirements to increase the response rate?'],
        a: 1,
        exp: 'Low response rate is a diagnostic signal. Before optimizing the email or expanding the invite list, diagnose the actual cause: relevance, value, timing, stability, or trust. Each one requires a different fix. Adding more invites to an unfixed problem just gets you more non-responses.',
      },
      {
        q: 'You need 60 active participants for your program. How many should you recruit?',
        opts: ['Exactly 60 — over-recruiting creates unnecessary overhead','45 — screen more carefully to reduce drop-off','75–78 — accounting for 20–30% drop-off between acceptance and active participation','120 — double the target to guarantee coverage'],
        a: 2,
        exp: 'Expect 20–30% drop-off between acceptance and active participation. For 60 active participants, recruit 75–78. Centercode\'s waitlist feature lets you activate additional members mid-program if early enrollees don\'t engage, so the buffer doesn\'t go to waste.',
      },
      {
        q: 'A participant wants to report a bug but isn\'t sure which device OS version they\'re running. The Centercode feature specifically designed to capture this environment data is:',
        opts: ['A custom feedback type configured for device details','Test Platform Forms — a dedicated form type for capturing device model, OS version, app version, and other environment details','A survey sent to all participants at onboarding asking for their hardware specs','The technographic profile, which participants fill in manually after joining the community'],
        a: 1,
        exp: 'Test Platform Forms are a dedicated form type for capturing hardware and software environment details. You can require participants to complete one during onboarding via a Notice Chain, or attach it to individual feedback forms so participants specify their environment at the point of submission.',
      },
      {
        q: 'A participant in your community accepted a program invitation 10 days ago but hasn\'t signed the agreement or accessed the program. In Centercode, access is:',
        opts: ['Granted automatically after 7 days regardless of agreement status','Blocked by the Notice Chain until the agreement is signed, and the platform logs the gap automatically','Granted for read-only access until the agreement is completed','Dependent on whether the admin manually reviews the case'],
        a: 1,
        exp: 'Notice Chains gate program access behind agreement completion. Participants can\'t proceed without signing. Centercode logs timestamps and agreement versions automatically, creating the compliance record you need without manual tracking.',
      },
      {
        q: 'You want to distribute product keys to qualified participants without paying them directly or tracking assignments in a spreadsheet. The Centercode feature for this is:',
        opts: ['Notice Chains, which can include a product key delivery page as one step','Distributed Values — you bulk-load a list of items, set per-participant quotas, and the platform assigns them automatically or manually as participants qualify','A custom feedback type that delivers the key as a form element response','A Macro triggered on enrollment that emails each participant their product key individually'],
        a: 1,
        exp: 'Distributed Values let you bulk-load a list of items — product keys, gift codes, serial numbers — and set per-participant quotas. The platform assigns items automatically as participants qualify, or you assign them manually. No spreadsheet tracking, no manual fulfillment emails.',
      },
    ],
    testOut: [
      {
        q: 'Your response rate dropped from 58% in program one to 31% in program three with the same community. Before doing anything else, you should:',
        opts: ['Expand the community by recruiting 200 new members','Run a win-back email campaign to re-engage lapsed members','Diagnose root cause: check whether over-communication, irrelevant asks, or unfulfilled commitments from earlier programs are driving the decline','Lower the participation requirements to make it easier to respond'],
        a: 2,
        exp: 'Declining response rates across programs indicate accumulating recruiting debt. The causes are usually behavioral: over-asking, poor targeting, or closing loops poorly. Adding more people to a fatigued community worsens the problem. Diagnose first.',
      },
      {
        q: 'You\'re building a community for a new enterprise SaaS product. You need participants who use Salesforce daily, run Windows 11, and work in financial services. Before inviting anyone, you configure Centercode to capture this environment data. The feature for this is:',
        opts: ['Custom feedback types configured to ask about environment at submission time','Technographic Profiles — captured via Test Platform Forms during onboarding so every participant\'s device, OS, and software environment is on record before they submit any feedback','A community survey sent to all members asking about their work environment','The participant profile form, which automatically detects software and hardware from the participant\'s browser'],
        a: 1,
        exp: 'Technographic Profiles capture hardware and software environment details via Test Platform Forms. You can require participants to complete one during onboarding, populating their profile with exactly the data you need to segment feedback by environment.',
      },
      {
        q: 'Your program tests a physical device. You want to prevent participants from submitting hardware-specific feedback before they\'ve confirmed receipt of the device. The right configuration in Centercode is:',
        opts: ['Use a Notice Chain to delay program access for 72 hours after enrollment','Use a Test Platform Form required at onboarding to confirm the device is in hand before any feedback types open','Attach hardware feedback types to a product verification step — participants can\'t access those forms until they confirm receipt','Set an activity prerequisite so hardware feedback only unlocks after the first activity is completed'],
        a: 2,
        exp: 'Product verification tracks device delivery per participant. Participants confirm receipt, which opens hardware-specific feedback types that only make sense once the hardware is in hand. This prevents feedback about a product the participant hasn\'t actually received, keeping your signal clean.',
      },
      {
        q: 'A team member suggests: "Let\'s just invite everyone in the community to every program — that way we don\'t miss anyone." The correct response is:',
        opts: ['Agree — broad invites maximize potential participation','Agree, but limit it to members who haven\'t participated recently','Decline — untargeted invites exhaust community trust, drive down response rates, and make future recruiting harder','Decline only if the community has fewer than 500 members'],
        a: 2,
        exp: 'Untargeted invites spend community trust without delivering value. Members who receive irrelevant invites become less likely to respond to relevant ones. Recruiting as a system means matching participants to programs where they\'ll produce useful signal, not maximizing invitation volume.',
      },
      {
        q: 'A participant with a high tester ranking hasn\'t been invited to a program in eight months. The risk is:',
        opts: ['Their profile data will expire and need to be re-collected','They\'re no longer counted in your community size metrics','Without engagement, they may disengage from the community entirely — losing one of your highest-signal participants','Their agreement may have lapsed and need to be re-signed'],
        a: 2,
        exp: 'High-ranking participants are community assets. Long gaps without engagement signal to them that they\'re not valued. Centercode\'s ranking and engagement history makes it easy to identify these members proactively and keep them active before they go quiet permanently.',
      },
    ],
  },

  /* =====================================================
     MODULE 4 — FEEDBACK COLLECTION & ANALYSIS
     ===================================================== */
  feedback: {
    id: 'feedback',
    title: 'Feedback Collection and Analysis',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>',
    duration: '40 min',
    difficulty: 'Intermediate',
    description: 'Collect the right types of feedback, understand how the impact score actually works, and keep your feedback data clean enough to be trustworthy.',
    lessons: [
      {
        id: 'fb-1',
        title: 'What to Collect and Why',
        content: `
<h3>The FIPs Framework in Practice</h3>
<p>Every piece of feedback in a Centercode program falls into one of three types. Most programs over-index on Issues and ignore the rest. That's a mistake.</p>
<ul>
  <li><strong>Issues:</strong> Problems with the product. Crashes, broken flows, incorrect behavior. These drive engineering decisions and signal what must be fixed before release.</li>
  <li><strong>Ideas:</strong> Opportunities to improve. Missing capabilities, workflow gaps, usability friction. These inform the roadmap.</li>
  <li><strong>Praise:</strong> What works. What participants value, what delights them. This tells you what to protect when you're under pressure to ship.</li>
</ul>
<p>You can also create custom feedback types for specific data you need: journal entries, compatibility reports, hardware feedback. Custom types handle edge cases beyond the three core types.</p>

<h3>Structured vs. Organic</h3>
<p>Activities drive structured feedback: participants respond to specific prompts tied to features you've defined. Organic feedback is what participants submit on their own, outside any assigned activity.</p>
<p>The best programs collect both. Activities ensure coverage. Organic feedback surfaces the issues, ideas, and praise you didn't know to ask about. Don't optimize activities so tightly that you squeeze out the organic submissions.</p>

<div class="callout callout-info"><div class="callout-head">Surveys vs. feedback forms</div><div class="callout-text">Surveys and feedback forms are not the same thing. Feedback forms capture participant-initiated input anytime. Surveys are structured questionnaires you send to collect specific data at a defined point in time. Use the right tool for the job.</div></div>

<h3>Form Element Types</h3>
<p>Feedback forms and surveys support 32 element types. Beyond basic text fields, the ones most useful for capturing rich signal are:</p>
<ul>
  <li><strong>Rating scale:</strong> Numeric ratings with configurable left, middle, and right anchor labels. Optional N/A response. Good for measuring severity, satisfaction, or ease of use.</li>
  <li><strong>Matrix:</strong> A row-by-column grid where participants rate multiple items on the same scale in one question. Efficient for comparing features or scenarios side by side.</li>
  <li><strong>Stack rank:</strong> Drag-and-drop ordering of a list of items. Useful for priority questions — "rank these features by importance to you."</li>
  <li><strong>Feature selector:</strong> Lets participants pick which product feature their submission relates to, linking feedback directly to your feature structure.</li>
</ul>

<h3>Conditional Visibility</h3>
<p>Form elements can be shown or hidden based on a participant's answer to a previous element. If someone rates severity as "Critical," a follow-up field can appear asking for reproduction steps. If they rate it "Low," that field stays hidden.</p>
<p>Managers configure parent-child element relationships in the form builder. The logic is client-side — changes happen instantly as participants fill out the form. Conditions can chain: a child element can itself be a parent to a deeper element.</p>

<h3>Element Level Access</h3>
<p>When enabled on a form, individual elements can have per-role visibility and editability. A moderator and a participant can see different fields on the same form. A moderator can have some elements editable and others view-only — without needing separate form versions. This is useful for triage workflows where internal fields (priority, assignee, engineering notes) should be visible to admins but hidden from participants.</p>

<h3>Feedback Checkout</h3>
<p>When checkout is required on a feedback form, a moderator must check out an item before editing it. Only the current owner can edit while it's checked out. If someone else needs to make a change, they can force-checkout, which transfers ownership. Checkout prevents two people from editing the same submission simultaneously and overwriting each other's work.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>The three feedback types are Issues, Ideas, and Praise</li>
  <li>Praise tells you what to protect. It's not a vanity metric.</li>
  <li>Activities drive structured feedback; organic submissions surface what you didn't think to ask</li>
  <li>32 element types are available — rating scales, matrix grids, and stack rank all capture signal text fields can't</li>
  <li>Conditional visibility, Element Level Access, and feedback checkout give you fine-grained control over what participants and moderators see and do</li>
</ul></div>`,
      },
      {
        id: 'fb-config',
        title: 'Configuring Your Feedback Types',
        content: `
<h3>Where to Start</h3>
<p>Feedback types are configured at the project level. Navigate to <em>Management → Project Configuration → Feedback Types</em>. You'll see the three default types — Issues, Ideas, and Praise — already set up. You can modify any of them or create additional custom types from this screen.</p>
<p>Select a type to open its configuration. Each type has four main areas: the form, the status workflow, collaboration settings, and integrations.</p>

<h3>Building the Form</h3>
<p>The form is what participants fill out when they submit feedback of that type. Inside a feedback type, go to the <em>Form</em> tab. From there you can add, reorder, and configure elements.</p>
<p>For each element you add, you set its label, any placeholder text, whether it's required, and which element type it uses — text field, rating scale, matrix, dropdown, file upload, and so on. The order you set here is the order participants see.</p>
<p>Two configuration options that are easy to miss:</p>
<ul>
  <li><strong>Conditional visibility:</strong> On any element, you can set a parent-child relationship — "only show this field if the answer to [parent element] is [value]." Configure this on the child element by selecting its parent and the trigger value. Conditions chain: a child can itself be a parent to a deeper element.</li>
  <li><strong>Element Level Access:</strong> On any element, you can set per-role visibility and editability. This is how you add internal triage fields (priority, assignee, engineering notes) that participants never see. Set this on the element and choose which teams can view or edit it.</li>
</ul>
<p>Also on the form settings: enable or disable <strong>draft saving</strong> (lets participants save incomplete submissions), and enable or disable <strong>feedback checkout</strong> (requires moderators to check out an item before editing).</p>

<div class="callout callout-info"><div class="callout-head">Impact weight is set on form elements</div><div class="callout-text">Single-choice elements (dropdowns, radio buttons) can contribute to the Weight component of the impact score. When you add a single-choice element, enable "Use this element for impact analysis" and assign a weight value to each answer option. A "Severity" element where "Critical" carries high weight and "Low" carries minimal weight is a common example. Set this up before feedback starts coming in — retroactive weight changes rescore all existing submissions immediately.</div></div>

<h3>Configuring the Status Workflow</h3>
<p>Every feedback type has its own status workflow — the sequence of states a submission moves through from open to resolved. Go to the <em>Workflow</em> tab inside a feedback type to configure it.</p>
<p>For each status you create, you set:</p>
<ul>
  <li><strong>Name:</strong> What participants and moderators see (e.g., "Under Review," "In Progress," "Resolved")</li>
  <li><strong>Intent:</strong> The underlying category the status maps to. This is what Centercode uses to calculate Delta Impact — feedback only counts as "addressed" when its status Intent is set to one of the Resolved options: <em>Resolved - Verified</em>, <em>Resolved - Other</em>, or <em>Resolved - Exclude</em>. Intents also drive automation: macros and integrations can trigger on intent categories rather than specific status names, which keeps them stable if you rename a status later.</li>
  <li><strong>Allowed transitions:</strong> Which statuses this status can move to. This prevents participants from closing their own issues or skipping review steps.</li>
</ul>
<p>Set the <strong>default status</strong> — the state all new submissions enter — at the top of the workflow tab. Most programs use something like "New" or "Open" as the default.</p>

<h3>Collaboration Settings</h3>
<p>Go to the <em>Collaboration</em> tab to control how participants interact with each other's feedback and how the popularity component of the impact score is calculated.</p>
<ul>
  <li><strong>Public feedback:</strong> Whether participants can see other participants' submissions. Turn this on to enable voting, predictive duplicate matching, and community discussion. Turn it off for programs where you need submissions to stay private between participant and moderator.</li>
  <li><strong>Voting:</strong> Whether participants can vote on existing items. When enabled, you can customize the vote and unvote button labels. Votes contribute to the Popularity score.</li>
  <li><strong>Predictive match sensitivity:</strong> How aggressively the platform surfaces potential duplicates as participants type. Higher sensitivity = more suggestions, more false positives. Start at the default and adjust based on how your participants respond.</li>
  <li><strong>Popularity factor weights:</strong> The six engagement signals (occurrence count, duplicate links, predictive matches, votes, comments, views) each have a configurable weight. These are the multipliers that determine how much each signal contributes to Popularity. The defaults work for most programs — adjust these only if you have a specific reason to de-emphasize or amplify a particular signal.</li>
</ul>

<h3>Integrations</h3>
<p>The <em>Integrations</em> tab is where you connect this feedback type to external systems. Two common configurations:</p>
<ul>
  <li><strong>Jira integration:</strong> Add Jira as an external destination. When a feedback item reaches a status that matches a configured trigger, the platform creates a ticket using the field mappings you configure here. Only the parent issue is pushed to Jira. Duplicates stay in Centercode.</li>
  <li><strong>Slack notifications:</strong> Add Slack as an external destination to post a message to a configured channel when feedback of this type is submitted or changes status. Set the trigger event and the channel here, or use the community-level Slack integration to route all feedback types to a global channel.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Feedback type configuration lives at Management → Project Configuration → Feedback Types</li>
  <li>Build your form first: elements, conditional visibility, Element Level Access, draft saving, checkout</li>
  <li>Set impact weights on single-choice form elements before feedback arrives — changes rescore immediately</li>
  <li>Status Intent determines whether feedback counts toward Delta Impact — use the Resolved intents for addressed items</li>
  <li>Collaboration settings control voting, public visibility, predictive match sensitivity, and popularity weights</li>
  <li>Jira and Slack integrations are configured per feedback type under the Integrations tab</li>
</ul></div>`,
      },
      {
        id: 'fb-2',
        title: 'How the Impact Score Works',
        content: `
<h3>Weight, Popularity, and Velocity</h3>
<p>The impact score on each feedback item is built from three components that measure different things. Mixing them up leads to bad prioritization decisions.</p>
<p><strong>Weight</strong> reflects strategic importance. It's shaped by how you've configured the feedback form (element choices), whether the item is marked as a blocking issue, the importance rating of the feature it's linked to, and per-team weighting factors. Feature value weighting uses specific multipliers: None=0x, Very Low=0.5x, Low=0.75x, Neutral=1x, High=1.5x, Very High=2x. A blocking issue or a feature marked Very High carries significantly more weight than an uncategorized submission. Weight encodes strategy: how much does this kind of feedback matter to us, independent of how many people reported it?</p>
<p><strong>Popularity</strong> reflects prevalence. It's calculated from six engagement signals: occurrence count, duplicate links, predictive duplicate matches, upvotes, comments, and views. Each signal has a configurable weighting factor per feedback type. Popularity answers: how widespread and resonant is this item across the participant community?</p>
<p><strong>Velocity</strong> is a 7-day change indicator — how quickly the item's score is moving. A high-velocity item is gaining traction fast. Velocity helps surface emerging issues before they accumulate a large score over time.</p>
<p>Centercode separates these intentionally. A single critical issue from one participant might have high weight but low popularity. A minor annoyance reported by 80 participants might have low weight but very high popularity. Both matter. Neither tells the full story alone.</p>

<h3>The Score Is a Signal, Not a Verdict</h3>
<p>The impact score tells you where to look first. It doesn't tell you what to fix, what to ship, or what to commit to leadership.</p>
<p>The correct workflow: review high-impact items → ask why they ranked there → apply business context → make a decision. The score starts the conversation. It doesn't end it.</p>

<div class="callout callout-warn"><div class="callout-head">Don't tune weights reactively</div><div class="callout-text">Weighting should be configured before data arrives: it encodes your strategy, not your reaction to results. Teams that adjust weights to make certain feedback rank higher or lower are destroying the trust in the system, not improving it. If leadership disagrees with the ranked output, the answer is context, not a weight change.</div></div>

<h3>Duplicates Are Signal</h3>
<p>When five participants independently submit the same issue, that's not clutter. That's five votes. Duplicates increase an item's popularity score and tell you something important: how widespread the problem is, how consistently participants experience it, and how easy it is for them to identify.</p>
<p>Over-merging duplicates flattens the popularity signal and produces a prioritization list that underrepresents widespread issues. Leave duplicates in. Let them do their job.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Weight = strategy (importance); Popularity = prevalence (how widespread)</li>
  <li>Impact score is a signal that starts prioritization conversations, not a verdict that ends them</li>
  <li>Set weights before data arrives. Reactive changes erode trust.</li>
  <li>Duplicates measure popularity; over-merging hides it</li>
</ul></div>`,
      },
      {
        id: 'fb-3',
        title: 'Feedback Hygiene and Survey Discipline',
        content: `
<h3>Collaboration Is Data Too</h3>
<p>Comments, discussion threads, and votes on feedback items aren't anecdotal noise. They're signals. Comments tell you which feedback resonates with the broader participant group. Discussion threads surface disagreements and edge cases that a single submission misses. Votes indicate consensus.</p>
<p>Strong programs encourage collaboration and review it alongside scores. Weak programs ignore it entirely or dismiss it as informal. Don't dismiss it.</p>

<h3>The Jira Bridge</h3>
<p>When a feedback item reaches a status that matches a configured trigger in your Jira integration settings, Centercode creates a corresponding ticket automatically. Status updates in Jira sync back to Centercode, and participants see when their reported issue is being worked on, without the test manager manually updating anything.</p>
<p>One important rule: only the parent issue goes to Jira, not all duplicates. Jira is for execution, not discovery. The full context (duplicates, votes, discussion) stays in Centercode, which is the system of record for testing data.</p>

<h3>Survey Discipline</h3>
<p>Every survey question spends participant trust. Optional questions still cost attention. The right question to ask before adding anything to a survey is: what decision will this influence?</p>
<p>If you can't answer that, cut the question. A five-question focused survey consistently outperforms a 20-question omnibus: higher completion rates, cleaner signal, faster decisions, and a community that's more willing to respond next time.</p>

<div class="callout callout-success"><div class="callout-head">If the platform already has the data, don't ask for it again</div><div class="callout-text">Centercode already captures engagement behavior, drop-off patterns, activity completion, and feedback submission rates. Before adding a survey question, check whether the platform already tracks what you're trying to learn. Asking participants to report data the system already has is a waste of their trust.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Comments and votes are signals: they show which feedback resonates and why</li>
  <li>Jira receives parent issues only; Centercode remains the system of record</li>
  <li>Every survey question spends trust. Only ask what has a clear decision behind it.</li>
  <li>A focused five-question survey beats a 20-question omnibus every time</li>
</ul></div>`,
      },
      {
        id: 'fb-4',
        title: 'What Participants Experience When Submitting Feedback',
        content: `
<h3>Why This Matters to You as an Admin</h3>
<p>Everything covered so far — feedback types, impact scoring, form element types, conditional visibility — is configuration. But configuration only has value if participants use it correctly. Understanding what participants actually see and do when they submit feedback helps you design better forms, set accurate expectations, and diagnose problems when signal quality drops.</p>

<h3>The Submission Flow</h3>
<p>When a participant is ready to submit feedback, they navigate to the relevant feature activity or the general feedback area and select a feedback type — Issue, Idea, or Praise. They then see the form you've configured for that type: your element layout, any conditional fields, placeholder text, and guidance copy.</p>
<p>Before they hit submit, two things happen that directly affect your data quality:</p>

<h3>Predictive Duplicate Detection</h3>
<p>As a participant types their submission title, Centercode searches existing feedback in real time and surfaces items that look similar. The participant sees a list of potential matches and can either confirm that their issue is already reported (linking their submission as a duplicate) or continue submitting as a new item.</p>
<p>This matters for your impact scores because the platform tracks both outcomes separately. Confirmed duplicates increase the original item's popularity score by a larger factor than an unconfirmed predictive match. If participants routinely dismiss the duplicate suggestions without reading them, you end up with inflated item counts and diluted popularity scores. If the suggestions are good and participants engage with them, your duplicate density goes up — which is a signal that your program is capturing widespread issues accurately.</p>
<p>You control how aggressively the platform surfaces matches by configuring the predictive match sensitivity on each feedback type. Higher sensitivity surfaces more suggestions but risks false positives that participants ignore. You can tune this as you learn how your participant group behaves.</p>

<div class="callout callout-info"><div class="callout-head">Predictive match only works if feedback is collaborative</div><div class="callout-text">Predictive duplicate search requires participants to be able to see other participants' feedback — it compares against the visible item pool. If your feedback type is configured as private (only the submitter sees their own items), predictive matching has nothing to search against and won't surface suggestions. Check your feedback type's collaboration settings before expecting this feature to work.</div></div>

<h3>Draft Saving</h3>
<p>When draft saving is enabled on a feedback form, a Save Draft button appears alongside Submit. Participants can save an incomplete submission and return to it later. Drafts are scoped per participant, per form — each person has their own draft state and can't see another participant's draft.</p>
<p>From your perspective as an admin, draft saving is most useful for long or complex feedback forms where you're asking participants to provide detailed reproduction steps, attach files, or answer multiple element types. Without draft saving, a participant who gets interrupted mid-submission loses everything they've written. With it, they come back and finish — which improves your completion rates on high-value feedback.</p>

<h3>What Participants See After Submitting</h3>
<p>After a participant submits feedback, they can see their own submissions in their personal feedback view. If your feedback type is configured as collaborative (public), they also see other participants' submissions, can vote on items they've experienced too, and can follow items to receive notifications when the status changes.</p>
<p>Voting is the participant-side action that drives the popularity component of your impact score. A participant who has experienced the same issue clicks Vote. That vote counts toward popularity. Participants cannot vote on their own submissions — the platform prevents this.</p>
<p>Following is separate from voting. A participant who follows an item receives a notification when its status changes. This is how participants stay in the loop on the feedback they submitted without you having to send manual update emails.</p>

<h3>The Moderator View vs. the Participant View</h3>
<p>When a moderator opens a feedback item, they see a different view than the participant who submitted it. Moderators see all fields (including any hidden from participants via Element Level Access), a tabbed summary that includes external data, occurrence history, and linked items, and the Quick Update panel for inline status changes and macro execution. Participants see the submission as they filed it, the current status, and any public comments.</p>
<p>This split is by design. You're building one form that serves two distinct workflows simultaneously — the participant submission workflow and the internal triage workflow. Understanding which elements are visible to whom, and what actions each role can take, is what lets you design forms that work for both without maintaining two separate versions.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Predictive match surfaces similar existing items as participants type — configure sensitivity per feedback type</li>
  <li>Confirmed duplicates score higher in popularity than unconfirmed predictive matches</li>
  <li>Predictive match requires collaborative feedback — private feedback types have no visible pool to search</li>
  <li>Draft saving improves completion rates on complex forms</li>
  <li>Participants vote on others' items; votes drive popularity scores; participants can't vote on their own submissions</li>
  <li>Moderators and participants see different views of the same submission by design</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'You notice that your program has very few duplicate links on feedback items despite participants clearly experiencing the same issues. The most likely cause is:',
        opts: ['Participants are submitting too many items — you need stricter form validation','Your feedback type is configured as private, so participants can\'t see each other\'s submissions and predictive match has nothing to search against','The predictive match sensitivity is too low and not surfacing suggestions','Participants are voting instead of linking duplicates'],
        a: 1,
        exp: 'Predictive duplicate search compares against the visible item pool. If your feedback type is configured as private, participants can\'t see other submissions — predictive match has nothing to search against and won\'t surface suggestions. Check the collaboration settings on your feedback type.',
      },
      {
        q: 'You need certain internal triage fields — priority, assignee, engineering notes — to be visible to moderators but completely hidden from participants on the same feedback form. The correct Centercode feature is:',
        opts: ['Creating separate form versions for moderators and participants','Element Level Access — it lets you set per-role visibility and editability on individual form elements without needing separate forms','Conditional visibility — hiding fields based on the participant\'s role selection answer','Feedback checkout — which restricts who can edit a submission while it\'s checked out'],
        a: 1,
        exp: 'Element Level Access controls per-role visibility and editability at the individual element level on a single form. A moderator and a participant can see different fields on the same submission. This handles triage workflows where internal fields must stay hidden from participants without maintaining two separate form versions.',
      },
      {
        q: 'Your product team lead disagrees with the impact score ranking on a particular issue. The correct response is:',
        opts: ['Adjust the weight configuration until the ranking matches their expectation','Accept their assessment — business context overrides platform data','Use the disagreement to surface missing context: why does the score differ from their expectation? Then decide.','Escalate to a community admin to reconfigure the scoring algorithm'],
        a: 2,
        exp: 'Disagreement between impact score and business judgment is a signal that context is missing, not that the data is wrong. The right workflow is to review why the item ranked where it did, surface the business context the team has that the platform doesn\'t, and make a decision that incorporates both. Never tune weights to match a predetermined outcome.',
      },
      {
        q: 'What are the three components of a feedback item\'s impact score?',
        opts: ['Priority, Severity, and Frequency','Weight, Popularity, and Velocity','Occurrence count, Vote count, and Comment count','Feature value, Blocking flag, and Team factor'],
        a: 1,
        exp: 'Impact score = Weight + Popularity + Velocity. Weight reflects strategic importance. Popularity reflects prevalence across the participant community. Velocity is the 7-day change indicator showing how fast the item\'s score is moving. Centercode separates these intentionally because high weight with few reports and low weight with 80 reports both tell you something different.',
      },
      {
        q: 'When checkout is required on a feedback form and two moderators need to edit the same submission, the correct process is:',
        opts: ['Both moderators can edit simultaneously — the platform merges their changes','The first moderator checks out the item; the second must wait or use force-checkout to transfer ownership','Checkout is automatically released after 30 minutes so the second moderator can proceed','The community admin must manually resolve the conflict from the audit log'],
        a: 1,
        exp: 'Feedback checkout means only the current owner can edit a checked-out item. If another moderator needs to make a change, they can force-checkout the item, which transfers ownership to them. This prevents two people from overwriting each other\'s work on the same submission.',
      },
    ],
    testOut: [
      {
        q: 'Your program has 900 feedback items and the product team asks for the "top 10 things to fix before launch." The most defensible answer comes from:',
        opts: ['Reading every item and applying your own judgment to rank them','Sorting by submission date descending and presenting the most recent issues','Sorting by impact score descending, filtering for open high-weight items, and presenting the top results with their popularity data and supporting comments','Asking the five most engaged participants which issues matter most to them'],
        a: 2,
        exp: 'Impact score + context is the defensible answer. Sort by impact score to get the statistically strongest signal. Add popularity data to show prevalence. Include supporting comments to show why. This is a prioritization argument, not a list, and it\'s one you can defend to anyone who asks.',
      },
      {
        q: 'A feedback form has a "Severity" rating element. When a participant rates it Critical, a "Reproduction Steps" text field should appear. When they rate it Low, that field stays hidden. The Centercode feature that enables this is:',
        opts: ['Element Level Access — configured to show the field only to participants with a Critical severity role','Conditional visibility — parent-child element relationships configured in the form builder that show or hide elements based on prior answers','Feedback checkout — which locks the form until the moderator reviews the severity selection','A Macro that adds the reproduction steps field when a Critical item is submitted'],
        a: 1,
        exp: 'Conditional visibility lets you configure parent-child element relationships so fields show or hide based on a participant\'s answer to a prior element. The logic is client-side — changes happen instantly as the participant fills out the form. Conditions can chain, so a child element can itself be a parent to a deeper element.',
      },
      {
        q: 'A single issue has a very high weight score but only two duplicate submissions. A different issue has low weight but 94 duplicates. Which should get addressed first?',
        opts: ['The high-weight issue — importance matters more than prevalence','The high-popularity issue — more participants affected means higher real-world impact','It depends: high-weight issues signal strategic importance; high-popularity issues signal widespread experience. Review both with business context before deciding.','Neither — both need more signal before a decision is warranted'],
        a: 2,
        exp: 'This is exactly the conversation the impact score is designed to start. Weight signals strategic importance; popularity signals how widespread the experience is. A high-weight issue with two reports might be a critical edge case. A low-weight issue with 94 reports might be a usability problem that will show up in reviews. Apply business context before deciding.',
      },
      {
        q: 'What happens to duplicate issues when a parent issue is escalated to Jira?',
        opts: ['All duplicates are automatically pushed to Jira as child tickets','Only the parent issue is pushed to Jira — duplicates stay in Centercode, which remains the system of record','Duplicates are archived in Centercode and removed from the impact score calculation','All duplicates must be manually reviewed before the parent can be escalated'],
        a: 1,
        exp: 'Jira is for execution, not discovery. Only the parent issue moves to Jira. All duplicates, votes, comments, and discussion threads stay in Centercode, the system of record for your testing data. The full context stays where it belongs.',
      },
      {
        q: 'Leadership asks why the top-ranked feedback item isn\'t on the roadmap. The correct response is:',
        opts: ['Apologize and add it to the next sprint','Explain that the impact score is just one input — business context, feasibility, and timing all factor into roadmap decisions, and you can walk through the reasoning','Re-run the scoring to see if the ranking still holds before committing to a position','Reduce the item\'s weight so it no longer appears in the top 10'],
        a: 1,
        exp: 'This is the core principle: impact score starts conversations, it doesn\'t end them. Leadership context, technical feasibility, timing, and strategy all factor into the final decision. The answer is transparent reasoning, not score manipulation or defensive justification.',
      },
    ],
  },

  /* =====================================================
     MODULE 5 — REPORTING & INSIGHTS
     ===================================================== */
  reporting: {
    id: 'reporting',
    title: 'Reporting and Insights',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    duration: '30 min',
    difficulty: 'Intermediate',
    description: 'Build reports that drive decisions, speak to three different audiences from one platform, and prove program ROI without relying on vanity metrics.',
    lessons: [
      {
        id: 'r-1',
        title: 'Reports That Drive Decisions',
        content: `
<h3>Why Reports Fail</h3>
<p>Reports fail socially before they fail analytically. The data is accurate. The problem is that it doesn't tell anyone what to do next. A report full of charts and statistics that leaves stakeholders asking "so what?" isn't a report. It's a document.</p>
<p>Decision-first reporting starts with the question: what decision is this report trying to influence? Three types of decisions drive most program reporting:</p>
<ul>
  <li><strong>Do we act?</strong>: Is something important enough to fix, address, or escalate?</li>
  <li><strong>Where do we act?</strong>: Which feature, phase, or segment needs attention most?</li>
  <li><strong>When do we act?</strong>: Is this urgent now, or can it wait?</li>
</ul>
<p>If a report doesn't clearly influence one of these, it's informational, not operational.</p>

<h3>One Platform, Three Audiences</h3>
<p>The same program produces data relevant to product owners, executives, and support or operations teams, but each needs it framed differently. Teams that don't address this build three separate reports from three separate exports, introducing drift, conflicting narratives, and unnecessary overhead.</p>
<p>Centercode's approach: one data source, three lenses.</p>
<ul>
  <li><strong>Product owners</strong> care about what's broken, why it matters, and what to work on next. They need impact scores, feature-level aggregation, and context from comments and collaboration.</li>
  <li><strong>Executives</strong> care about trends, progress, and risk. They don't need to see the engine. They need to know the car is moving. High-level trends, movement over time, clear language. No platform jargon.</li>
  <li><strong>Support and operations</strong> care about frequency patterns, escalation risks, and recurring issues. They need what's happening across users, not what should be on the roadmap.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Decision-first reporting asks: do we act, where do we act, or when?</li>
  <li>One source, three lenses: the same data framed for product owners, executives, and support</li>
  <li>Accuracy is table stakes. Interpretation is the value</li>
</ul></div>`,
      },
      {
        id: 'r-2',
        title: 'Dashboards, Reports, and Health Metrics',
        content: `
<h3>Built-In Dashboards</h3>
<p>Centercode includes purpose-built dashboards that update in real time as participants submit feedback and complete activities. You don't have to build these from scratch:</p>
<ul>
  <li><strong>Project Kickoff</strong>: Setup checklist and readiness view for programs about to launch.</li>
  <li><strong>Delta Huddle</strong>: Phase-by-phase review showing current, prior, and next-phase data. Built for team meetings.</li>
  <li><strong>Project Overview</strong>: Comprehensive project health summary for the test manager's daily view.</li>
  <li><strong>Personal</strong>: Each participant's own activity and submission history.</li>
  <li><strong>Feedback Impact</strong>: Feedback broken down by phase and feature with impact scores.</li>
  <li><strong>Activity Engagement</strong>: Activity completion rates and engagement trends across the participant group.</li>
  <li><strong>Product Success Analysis</strong>: A breakdown showing which issues drive the most impact on the Success score.</li>
  <li><strong>Top Feedback</strong>: Highest-impact feedback items across the program.</li>
  <li><strong>Top Testers</strong>: Participant contribution rankings for recognizing high-engagement members.</li>
  <li><strong>User Dashboard</strong>: Community-level view of member activity and engagement history.</li>
</ul>

<h3>What Health Metrics Actually Matter</h3>
<p>Not all metrics tell you something useful. These are the ones that do:</p>
<ul>
  <li><strong>Response rate consistency</strong>: Stable participation over time, not a single-week spike</li>
  <li><strong>Duplicate density</strong>: How many items are generating duplicates, which signals how clearly issues are being experienced</li>
  <li><strong>Time to actionable insight</strong>: How long it takes from feedback submission to a decision</li>
</ul>
<p>The metrics that feel impressive but don't predict outcomes: total feedback volume, number of invites sent, reports created, activities completed. High activity counts can mask a program that's busy without being useful.</p>

<div class="callout callout-warn"><div class="callout-head">Leading indicators over lagging ones</div><div class="callout-text">Participation rate and activity completion trends are leading indicators: they tell you where the program is heading while you still have time to adjust. Total feedback count at program end is a lagging indicator. Watching it at week six of an eight-week program is too late to act.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Centercode's built-in dashboards cover most reporting needs without custom configuration</li>
  <li>Health metrics: response consistency, duplicate density, time to actionable insight</li>
  <li>Vanity metrics (volume, invite count, reports created) don't predict program outcomes</li>
  <li>Watch leading indicators in-program. Lagging ones only confirm what already happened.</li>
</ul></div>`,
      },
      {
        id: 'r-3',
        title: 'ROI, Integration, and Closing the Loop',
        content: `
<h3>Proving Value Without Vanity Metrics</h3>
<p>The most credible ROI argument for a testing program comes from three places:</p>
<ul>
  <li><strong>Issues caught pre-release</strong>: Post-launch fixes cost 4–100x more than pre-launch fixes. Multiply the count of high-severity issues resolved before release by your organization's average fix cost.</li>
  <li><strong>Features validated vs. redirected</strong>: How many planned features were confirmed by participant data vs. changed based on insight? Roadmap pivots that came from real user input are a concrete, defensible ROI signal.</li>
  <li><strong>Participant satisfaction signals</strong>: Delta Success scores and Praise data are leading indicators of launch reception. Track them against post-launch reviews if you want to close the loop with leadership.</li>
</ul>

<h3>Closing the Loop Credibly</h3>
<p>Feedback is a signal, not a mandate. You don't have to implement every idea or fix every issue to maintain participant trust. You do have to explain your decisions. Status updates with brief context (even "not now, and here's why") build more trust than silence.</p>
<p>Centercode links feedback to feature status and preserves decision history automatically. When a participant sees that their reported issue moved from Open to In Progress to Resolved, without anyone manually narrating each step, the loop closes itself.</p>

<h3>Taking Data Further</h3>
<p>For teams with broader reporting needs:</p>
<ul>
  <li><strong>CSV/Excel export</strong>: Any feedback set, member list, or report can be exported for external use</li>
  <li><strong>Jira</strong>: Escalated issues appear in your engineering backlog with bidirectional status sync</li>
  <li><strong>API</strong>: Query Centercode data programmatically for BI tools like Tableau</li>
  <li><strong>Embed</strong>: Charts and dashboards can be embedded in Confluence or external tools</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>ROI is issues caught pre-release + features redirected + satisfaction signal, not total feedback volume</li>
  <li>Closing the loop requires explanation, not agreement. "Not now, and here's why" still maintains trust.</li>
  <li>API and BI integration extend Centercode data into executive dashboards and toolchains</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'A report contains 12 charts covering every metric from the program. Stakeholders walk away saying "interesting" but don\'t make any decisions. The report failed because:',
        opts: ['The data wasn\'t accurate enough to drive decisions','It lacked a clear decision orientation — it was informational, not operational','The charts were too complex for the audience','The program didn\'t produce enough signal to make a case'],
        a: 1,
        exp: 'Reports that don\'t answer "do we act, where do we act, or when?" leave stakeholders with information but no direction. Decision-first reporting identifies the decision first, then builds the report around it. Accuracy is table stakes. Interpretation is the value.',
      },
      {
        q: 'Which of these built-in dashboards is specifically designed for team meetings, showing current, prior, and next-phase data side by side?',
        opts: ['Project Overview','Delta Huddle','Feedback Impact','Product Success Analysis'],
        a: 1,
        exp: 'The Delta Huddle dashboard is built for phase-by-phase review in team meetings. It surfaces current, prior, and next-phase data in one view. The Project Overview is the test manager\'s daily summary; Feedback Impact breaks down items by phase and feature; Product Success Analysis shows which issues drive the most impact on the Success score.',
      },
      {
        q: 'Which of these is a leading indicator (one that tells you where the program is heading while you can still act)?',
        opts: ['Total feedback submitted at program close','Week-over-week participation rate trend during the program','Number of Jira tickets created from escalated issues','Final Delta Success score at program wrap-up'],
        a: 1,
        exp: 'Week-over-week participation rate is a leading indicator. If it drops in week three of an eight-week program, you have five weeks to recover. Total feedback at close, Delta Success at wrap-up, and Jira ticket count are all lagging indicators. They confirm what already happened.',
      },
      {
        q: 'Your product team argues that showing individual issue fixes to executive leadership isn\'t worth the meeting time. The right framing for that audience is:',
        opts: ['Push back — executives should know what specific issues were fixed','Present a trend view: Delta Success change over the program, features redirected based on data, and issues resolved before release with estimated post-launch fix cost','Send them the same detailed report the product team received','Schedule a separate meeting specifically to walk through the issue list'],
        a: 1,
        exp: 'Executives need confidence, not detail. Delta Success movement tells them whether the product improved. Features redirected based on data shows decision quality. Issues resolved pre-release with cost context gives them the ROI argument. None of that requires a line-item walkthrough.',
      },
      {
        q: 'A participant notices that an issue they reported three weeks ago still shows "Open" with no comment. What is the most likely effect?',
        opts: ['No effect — participants don\'t typically track the status of their own submissions','Reduced trust in the program, which will lower engagement in this and future programs','Increased urgency — they\'ll submit more feedback to escalate the issue','They\'ll contact support directly, bypassing the feedback workflow'],
        a: 1,
        exp: 'When participants don\'t see their feedback acknowledged — even with a "not now" status — they stop believing it matters. Trust erodes quietly. Closing the loop with brief status updates, even for items that won\'t be addressed, is what keeps participants engaged across multiple programs.',
      },
    ],
    testOut: [
      {
        q: 'Your program ran for eight weeks and produced 1,200 feedback items. You have 30 minutes with leadership. What do you present?',
        opts: ['Walk through the top 20 issues by impact score, one by one','A synthesis: Delta Success trajectory, top five resolved issues with pre/post comparison, three features the team redirected based on data, and a confidence statement about launch readiness — all in under 10 slides','Export the full feedback dataset and let leadership ask questions','Show participation rates and activity completion across all eight weeks'],
        a: 1,
        exp: 'Program-close reports are synthesis, not accumulation. Leadership needs to know what changed, whether the program worked, and whether they should feel confident. Delta Success trajectory + resolved issues + feature redirects + launch confidence statement = a 30-minute conversation that ends with a decision, not more questions.',
      },
      {
        q: 'Your Delta Success score dropped from 72 to 58 in week five. Before acting, you should:',
        opts: ['Immediately escalate the top 10 issues to Jira','Check whether the drop correlates with a new phase that introduced untested, harder features — a drop during a challenging phase can be expected','Add more participants to generate more positive feedback and recover the score','Report the drop to leadership immediately and suspend the program'],
        a: 1,
        exp: 'Delta Success scores drop when new features with known rough edges are introduced. A drop during a phase testing pre-release functionality is expected and healthy — it signals the testing is working. The right response is context: why did it drop, is the direction consistent with the testing scope, and what\'s the plan?',
      },
      {
        q: 'Engineering asks for a report showing which issues to fix this sprint. The support team asks for a report showing which issues are generating repeat participant contacts. Which is correct?',
        opts: ['Both teams should receive the same report — one source of truth prevents conflicting narratives','Build one shared report and let each team filter it themselves','Engineering gets an impact-score-ranked feature view; support gets a frequency and pattern view — same underlying data, different lenses','Engineering\'s request takes priority; support can review the engineering report for relevant information'],
        a: 2,
        exp: 'One source, two lenses. Engineering needs impact-ranked, actionable items tied to features. Support needs frequency patterns and escalation signals. The underlying data is identical. The framing and grouping are different. Building separate exports introduces drift and conflicting versions of the truth.',
      },
      {
        q: 'A participant says: "I keep submitting feedback but nothing ever seems to happen with it." The most structural fix in Centercode is:',
        opts: ['Send a personal apology and summary of what was done with their feedback','Enable Centercode\'s automatic status update notifications so participants see when their submissions move through the workflow','Add a note to the project brief promising faster response times','Ask the test manager to manually reply to every participant submission'],
        a: 1,
        exp: 'Centercode links feedback to feature status and can notify participants when submissions change state. Enabling that automation closes the loop at scale, without the test manager manually narrating each decision. Participants see movement. Trust holds. No heroics required.',
      },
      {
        q: 'You want to show the CFO the financial ROI of last quarter\'s delta testing program. The most credible single data point is:',
        opts: ['Total feedback submissions: 847 items across 12 weeks','The number of participants who completed all assigned activities','High-severity issues resolved pre-release multiplied by your organization\'s average post-launch fix cost — typically 4–100x the pre-launch cost','Program utilization: percentage of available features covered by testing activities'],
        a: 2,
        exp: 'CFOs respond to numbers with financial meaning. Issues resolved pre-release multiplied by average post-launch fix cost is a concrete, defensible ROI argument. It connects your program directly to cost avoidance. It\'s the language budget decisions are made in.',
      },
    ],
  },

  /* =====================================================
     MODULE 6 — PLATFORM GOVERNANCE & OPERATIONS
     ===================================================== */
  governance: {
    id: 'governance',
    title: 'Platform Governance and Operations',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    duration: '35 min',
    difficulty: 'Intermediate',
    description: 'Build a platform that runs correctly without you: clear ownership models, templates that survive org changes, and a diagnostic eye for programs that look healthy but aren\'t.',
    lessons: [
      {
        id: 'g-1',
        title: 'Who Owns What, and Why It Matters',
        content: `
<h3>Ownership Is Not the Same as Permission</h3>
<p>Permission means you can click the button. Ownership means you're responsible for the outcome when something changes. Most Centercode platform problems trace back to teams that confused these two things. They granted permissions without establishing ownership.</p>
<p>When ownership is ambiguous, things break in slow, hard-to-trace ways: a project manager edits a template used by six other programs, an admin overwrites project settings to "fix" a PM's mistake, and nobody's sure who was supposed to catch either one. The platform didn't fail. The ownership model did.</p>

<h3>Community Admin vs. Project Manager</h3>
<p>The clearest ownership split in Centercode:</p>
<ul>
  <li><strong>Community admins own infrastructure</strong>: member profiles, team structure, recruiting rules, templates, global defaults. These affect every project that inherits from them.</li>
  <li><strong>Project managers own execution</strong>: features, feedback workflow, activity schedules, project-level reporting. They work within the guardrails the community admin set.</li>
</ul>
<p>Problems surface when project managers edit infrastructure, or when admins micromanage execution. Neither works well for long.</p>

<div class="callout callout-info"><div class="callout-head">The right guardrails question</div><div class="callout-text">If a project manager needs admin help to do normal project work, the guardrails are wrong. Guardrails should prevent catastrophic mistakes without creating a bottleneck. If admins are approving routine changes, something in the access model needs adjustment.</div></div>

<h3>Trade Compliance</h3>
<p>For programs with legal or export control requirements, Centercode includes trade compliance controls. Community admins can block access by country (using GeoIP) or by specific IP ranges, with optional whitelist exceptions for known-safe IPs within blocked regions. Project-level rules can add additional restrictions on top of community-level rules, but they can't remove them. Blocked users see a configurable message or get redirected before they ever reach a login screen.</p>
<p>Trade Compliance is configured by community admins under Community Configuration → Trade Compliance.</p>

<h3>Designing Access That Doesn't Break Later</h3>
<p>Access configurations that work fine for one team of three become brittle when the organization grows, roles change, or people leave. The questions to ask when designing access:</p>
<ul>
  <li>If the person who set this up left tomorrow, would it still work correctly?</li>
  <li>Does each permission grant have a clear owner who understands the downstream effects?</li>
  <li>Are any access rules held together by one person's memory rather than the platform's structure?</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Permission = ability to act; ownership = responsibility for outcomes</li>
  <li>Community admins own infrastructure; project managers own execution</li>
  <li>Guardrails prevent catastrophic mistakes without creating bottlenecks</li>
  <li>Design access to survive personnel changes, not just today's team</li>
</ul></div>`,
      },
      {
        id: 'g-2',
        title: 'Templates, Structural Debt, and Program Scale',
        content: `
<h3>Templates Are Infrastructure</h3>
<p>Project templates pre-load teams, feedback types, agreements, onboarding flows, surveys, integrations, and reporting into a consistent starting point for every new program. A well-built template means a new project manager can set up a test in an hour rather than three days. It follows the same structural logic as every other project in the platform.</p>
<p>Templates also encode decisions. When a template includes a specific feedback weighting configuration, it's encoding strategy: this is how we prioritize. When it includes a specific notice chain, it's encoding compliance: this is what participants must agree to. Decisions that live in templates don't require re-explanation every time.</p>

<h3>Structural Debt Accumulates Quietly</h3>
<p>Structural debt is the cost of decisions that made sense once but were never cleaned up. It shows up as:</p>
<ul>
  <li>Teams that were created for a past program and still grant access to the wrong people</li>
  <li>Templates that reflect how you worked two years ago, not how you work now</li>
  <li>One-off exceptions added during a crisis that never got removed</li>
  <li>Reports that no one looks at but no one will delete</li>
</ul>
<p>Structural debt is expensive because it compounds: new admins inherit it, build on top of it, and eventually can't explain why anything is configured the way it is.</p>

<div class="callout callout-warn"><div class="callout-head">The question that surfaces debt</div><div class="callout-text">"What only works because you remember why it exists?" If the answer is more than one or two things, your program has structural debt that will cost more to carry forward than to clean up now.</div></div>

<h3>Visual Themes and Branding</h3>
<p>Community admins control how the platform looks for participants. Under Visual Themes, you configure a 5-tier color palette (menu bar, submenus, page backgrounds, login page), upload logos, set a favicon, and optionally add a background image or video to the login screen. Custom CSS is also available for deeper customization. Projects can inherit the community default theme or have their own.</p>
<p>Advanced Branding expands this to multiple themes per community, six custom palette colors usable in CSS and reports, and additional logo options including report PDF headers.</p>

<h3>UI String Customization</h3>
<p>Every label, button, and message in the platform is editable. Community managers search for any string in the platform text and override it at either the community-wide level or per project. This is how you rename things to match your organization's vocabulary: "Issues" to "Defects," "Ideas" to "Enhancements," or any other substitution that makes the platform feel native to your team.</p>
<p>Bulk changes work via CSV export: download the current strings, edit in a spreadsheet, and re-import. To revert a customized string, delete the override and the default returns.</p>

<h3>Scaling Without Burning Out Admins</h3>
<p>The common failure mode at scale: admins become the bottleneck for everything because no one else knows how anything works. Every routine task requires escalation. Every new team member needs a walkthrough. The program works, but only because of heroics.</p>
<p>The fix: push decisions into templates and platform structure, document the intent behind configurations, and design access so teams can operate independently within guardrails. When the system carries the institutional knowledge instead of one person, you can scale without rebuilding from scratch every time a team member leaves.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Templates encode decisions (strategy, compliance, and structure) into reusable starting points</li>
  <li>Structural debt accumulates quietly and compounds; audit and clean annually</li>
  <li>If admins are the bottleneck for routine work, the access model is too restrictive</li>
  <li>Platform structure should carry institutional knowledge, not individuals</li>
</ul></div>`,
      },
      {
        id: 'g-3',
        title: 'Diagnosing Programs That Look Healthy but Aren\'t',
        content: `
<h3>The Four Warning Signs</h3>
<p>A program can show good numbers and still be fundamentally broken. Four patterns indicate a program that's technically compliant but functionally underperforming.</p>

<p><strong>1. Compliance without insight.</strong> Activities have high completion rates. Feedback volume is solid. But after reviewing results, the team is still debating what to do next. If data isn't reducing uncertainty, the activities weren't asking the right questions.</p>

<p><strong>2. Fragile engagement.</strong> Response rates look healthy, but only because the admin sends manual reminders before every deadline. Remove the reminders and the rates collapse. Engagement driven by pressure isn't stable engagement. It's a dependency.</p>

<p><strong>3. Clean dashboards that don't create conviction.</strong> Reports are polished. Charts are well-designed. Stakeholders still ask "so what?" and schedule follow-up meetings instead of making decisions. A good report answers a question. A great report ends a discussion. If stakeholders keep asking for more context after seeing the data, the reports aren't decision-oriented.</p>

<p><strong>4. Success through heroics.</strong> One person holds everything together. Processes live in their head. The program works, until they're out sick for a week and everything stalls. This isn't success. It's a system that hasn't been finished.</p>

<div class="callout callout-success"><div class="callout-head">The right diagnostic question</div><div class="callout-text">Before the next program cycle, ask: if I were unavailable for two weeks with no handoff, would this program continue running correctly? The honest answer tells you what still needs to be built into the platform.</div></div>

<h3>When to Audit</h3>
<p>Audits aren't a sign that something's wrong. They're how programs stay healthy across years and team changes. A good annual audit asks: what configurations exist for historical reasons that no longer apply? What access rules survive only because someone remembers why they were set? What templates still reflect how the organization worked two years ago?</p>
<p>The goal isn't perfection. It's removing the things that require explanation every time, so the system gets easier to operate instead of harder.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Four warning signs: compliance without insight, fragile engagement, clean-but-unconvincing reports, heroics</li>
  <li>If engagement only works when you push, it isn't stable</li>
  <li>Annual audits are how programs stay maintainable, not a sign of failure</li>
  <li>The "two weeks away" test reveals what still needs to be encoded in the platform</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'A project manager edits a team configuration that\'s also used by four other active projects. Two hours later, three programs have broken access. This happened because:',
        opts: ['The platform has a bug in team inheritance logic','The project manager had permissions they shouldn\'t have had — but also had no clear ownership of the downstream effects of changing shared infrastructure','The community admin should have been monitoring changes in real time','The team configuration was too complex and needed to be simplified'],
        a: 1,
        exp: 'This is the ownership-vs.-permission failure mode. The PM had the permission to make the change, but shared team configurations are community-level infrastructure: the community admin\'s ownership domain. The fix is not just removing the permission; it\'s clarifying the ownership model so everyone understands what\'s shared and what\'s project-specific.',
      },
      {
        q: 'You want to rename "Issues" to "Defects" and "Ideas" to "Enhancements" across your entire community to match your organization\'s vocabulary. The Centercode feature for this is:',
        opts: ['Rebuilding each feedback type from scratch with the new names','UI String Customization — search for any label or message in the platform and override it at the community or project level; bulk changes work via CSV export and re-import','Visual Themes — the branding settings include a label configuration panel','Macros — a bulk action that updates all string references across the platform'],
        a: 1,
        exp: 'UI String Customization lets you override any label, button, or message in the platform at the community or project level. You search for the string, set your override, and it takes effect immediately. Bulk changes work via CSV: download the current strings, edit in a spreadsheet, and re-import.',
      },
      {
        q: 'Your program has 85% activity completion but stakeholders are still unclear on what to prioritize after reviewing results. The most likely diagnosis is:',
        opts: ['The impact score algorithm needs to be recalibrated for your product type','Activities were optimized for completion, not for resolving specific decisions — the data collected doesn\'t reduce uncertainty','Not enough feedback was collected; 85% completion should have generated more actionable signal','The reporting format doesn\'t display activity data clearly enough for stakeholders'],
        a: 1,
        exp: 'This is the compliance without insight warning sign. High completion rates feel like success, but if data doesn\'t help teams make decisions, the activities were measuring the wrong things. Every activity should be tied to a decision: what uncertainty does this resolve? If you can\'t answer that, cut the activity.',
      },
      {
        q: 'Your organization\'s testing programs operate across regions with export control requirements. Centercode\'s Trade Compliance feature handles this by:',
        opts: ['Automatically translating platform content into the local language of blocked regions','Blocking access by country via GeoIP and by specific IP ranges, with optional whitelist exceptions for known-safe IPs','Limiting participant count per country to comply with regional data privacy laws','Routing all feedback from restricted regions to a separate moderation queue'],
        a: 1,
        exp: 'Trade Compliance lets community admins block access by country using GeoIP or by specific IP ranges, with whitelist exceptions for known-safe IPs within blocked regions. Project-level rules can add restrictions on top of community-level rules but can\'t remove them. Configure it under Community Configuration → Trade Compliance.',
      },
      {
        q: 'Which of these is a sign of a mature, durable Centercode program, not just one that\'s currently running well?',
        opts: ['One dedicated test manager who knows the platform deeply and handles all configurations','A new team member can set up a standard project in under two hours using templates, without needing to ask anyone how things are configured','Very low admin turnover — the same person has managed the program for three-plus years','A complete library of reports that covers every stakeholder request that has ever come up'],
        a: 1,
        exp: 'Durability is the test. If a new team member can orient themselves using templates and platform structure alone — without tribal knowledge or a 90-minute onboarding call — the program is mature. If they can\'t, there\'s structural work still to do.',
      },
    ],
    testOut: [
      {
        q: 'You\'re told: "Our delta testing program works great, but when Sarah is out it always falls apart." The correct first action is:',
        opts: ['Hire a backup to cover Sarah\'s responsibilities during absences','Document Sarah\'s processes in a shared folder so others can reference them','Audit what lives in Sarah\'s head vs. what\'s encoded in the platform — templates, access rules, automated workflows — and move the former into the latter','Train other team members to handle Sarah\'s tasks so the dependency is distributed'],
        a: 2,
        exp: 'Documentation helps, but it doesn\'t solve the problem. The fix is moving knowledge from heads into platform structure: templates that encode process, access rules that don\'t need explanation, automated workflows that run without intervention. That\'s the difference between a program that survives a personnel change and one that stalls.',
      },
      {
        q: 'During an annual audit, you find eight teams created two years ago for a program that no longer runs. They still grant access to 23 people. The correct action is:',
        opts: ['Leave them — removing old teams might break something unexpected','Archive them after confirming no active projects depend on them, and revoke access for the 23 members who no longer need it','Ask each of the 23 members individually whether they still need access','Leave them until the next major platform update, when a clean slate is easier'],
        a: 1,
        exp: 'Structural debt cleanup is program leadership work, not admin maintenance. Confirming dependencies, archiving unused teams, and revoking unneeded access removes debt that would otherwise confuse new admins and create security exposure. Do it now. It gets more expensive to carry forward, not less.',
      },
      {
        q: 'A project manager asks you to give them admin-level access "just to move faster." The correct response is:',
        opts: ['Grant it — speed matters more than structural purity','Grant it temporarily, with a review date to reassess','Ask what they can\'t currently do with project-level permissions. If the guardrails are blocking normal work, adjust the guardrails — don\'t escalate to admin access.','Decline — admin access is never appropriate for project managers'],
        a: 2,
        exp: 'If a PM can\'t do normal project work without admin access, the access model is misconfigured. The right fix is adjusting the guardrails to allow what they legitimately need, not elevating them to admin status, which gives them infrastructure-level permissions that affect every project, not just theirs.',
      },
      {
        q: 'You want to give your community a branded experience: a custom color palette, your company logo, and a login background. You also need six custom palette colors usable across reports and CSS. Which feature and license does this require?',
        opts: ['Visual Themes only — you can set a color palette, upload a logo, and customize the login background','Visual Themes for base branding plus Advanced Branding for multiple themes, six custom palette colors, and expanded logo options','UI String Customization — the same tool handles both text and visual branding','Visual Themes are only available on Enterprise'],
        a: 1,
        exp: 'Visual Themes handle base branding: a 5-tier color palette, logo upload, favicon, and optional login background. Advanced Branding expands this to multiple themes per community, six custom palette colors usable in CSS and reports, and additional logo options. Both are configured in community admin settings.',
      },
      {
        q: 'A team is preparing to scale their Centercode program from two projects per year to eight. The first thing to address before scaling is:',
        opts: ['Recruiting additional test managers for each new project','Increasing the community size to match the higher program volume','Ensuring templates, access models, and reporting standards are documented and consistent before the first new project launches — scaling inconsistent programs produces consistent chaos','Adding more participants to the existing community before launching new projects'],
        a: 2,
        exp: 'Scaling a broken or inconsistent program just produces more of the same problems at higher volume and cost. Before adding projects, make sure the infrastructure scales: templates are current, access models are documented, and reporting follows consistent standards. That groundwork is what lets eight projects run as efficiently as two.',
      },
    ],
  },

  /* =====================================================
     MODULE 7 — TED AI AND ADVANCED AUTOMATION
     ===================================================== */
  'advanced-tools': {
    id: 'advanced-tools',
    title: 'Ted AI and Advanced Automation',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
    duration: '35 min',
    difficulty: 'Intermediate',
    description: 'Understand the difference between Ted (the intelligent bot) and Ted AI (the LLM-powered layer). Then add Macro Actions, Dynamic Tags, and Regression Testing to your toolkit.',
    lessons: [
      {
        id: 'at-1',
        title: 'Ted and Ted AI',
        content: `
<h3>Two Different Things, Both Named Ted</h3>
<p>Ted and Ted AI are frequently confused. They're not the same thing. Understanding the difference helps you use both correctly.</p>
<p><strong>Ted</strong> is Centercode's intelligent bot. He builds a behavioral profile for each participant, learning their preferred communication timing and channel, then uses that profile to automate nudges, reminders, and follow-ups. Ted's job is keeping participants engaged across the program lifecycle. His name shows up throughout the platform's communication settings, dashboard panels, and automation configuration.</p>
<p><strong>Ted AI</strong> is a separate LLM-powered layer that handles content generation and feedback assistance. Same name family, different capability entirely.</p>

<h3>What Ted AI Does</h3>
<p>Ted AI's capabilities span four areas:</p>
<ul>
  <li><strong>Test plan generation:</strong> From your product details and phase goals, Ted AI produces a structured test plan with phases, features, and activities. You review and adjust; Ted AI drafts the starting point.</li>
  <li><strong>Survey generation:</strong> Describe the decision the survey needs to support and Ted AI builds the question set, worded to avoid leading phrasing and optimized for completion.</li>
  <li><strong>Feedback summaries:</strong> When you open a feedback submission, Ted AI generates a bullet-point summary of the submission and its comment thread. Summaries update automatically when new comments arrive.</li>
  <li><strong>AI-assisted submission:</strong> Participants can submit free-text feedback in a single input. Ted AI categorizes it into the correct feedback type, detects potential duplicates, and maps values to the right form fields.</li>
  <li><strong>Reply drafting:</strong> When a program manager changes a feedback item's status in Quick Update, Ted AI drafts a reply explaining the status change. The PM reviews and edits before sending.</li>
  <li><strong>Report insights:</strong> Ted AI analyzes survey results and generates written summaries and insights as a report element type, alongside charts and data tables.</li>
  <li><strong>Form element enhancement:</strong> Individual form elements can have Ted AI improve the participant's submitted answer for grammar and clarity. The original answer is preserved. Participants see a toggle to switch between their original text and the AI-enhanced version. Managers enable this per element in the form builder.</li>
</ul>

<div class="callout callout-info"><div class="callout-head">Ted and Ted AI require explicit activation</div><div class="callout-text">Ted does not activate automatically. You turn him on from Management → Tester engagement bot settings. Ted AI features (test plans, surveys, feedback summaries) are activated separately in your community settings.</div></div>

<h3>What Ted AI Doesn't Replace</h3>
<p>Every Ted AI output is a starting point. A generated test plan needs review against your actual product strategy. A summarized feedback thread still needs a human to decide what to do with it. Ted AI reduces the blank-page problem and cuts setup time. You still own the judgment calls.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Ted is the intelligent bot: behavioral profiles, communication timing, automated nudges</li>
  <li>Ted AI is the LLM-powered layer: test plans, surveys, feedback summaries, AI submission, reply drafting, report insights</li>
  <li>Ted AI features are license-gated and may not be active on every account</li>
  <li>Ted AI outputs are starting points for human review, not finished decisions</li>
</ul></div>`,
      },
      {
        id: 'at-2',
        title: 'Macro Actions and Dynamic Tags',
        content: `
<h3>Macros: Automation at Scale</h3>
<p>A Macro is a saved set of actions that can be triggered manually or on a schedule to update feedback, send communications, adjust user data, or execute multiple steps in sequence. Think of it as a script that runs inside Centercode without any coding required.</p>
<p>You create Macros in two places depending on what they act on:</p>
<ul>
  <li><strong>Feedback Macros:</strong> Management → Project Configuration → Feedback Types → select a type → Resources → Add Macro</li>
  <li><strong>User Macros:</strong> Management → Users → User Resources → Add Macro</li>
</ul>
<p>Common Macro use cases:</p>
<ul>
  <li><strong>Bulk feedback updates:</strong> Close all open issues marked as "won't fix" at phase end with a single trigger</li>
  <li><strong>Scheduled notifications:</strong> Send a phase-end thank-you to all participants who submitted at least three pieces of feedback</li>
  <li><strong>Data cleanup:</strong> Archive inactive participants who haven't logged in within 30 days</li>
  <li><strong>Status transitions:</strong> Move all feedback in a specific feature category from Triage to In Review when engineering begins work</li>
</ul>
<p>Macros run on a schedule or on demand. They reduce repetitive admin work without requiring anyone to remember to do it manually. That's a meaningful difference from heroics: the action runs whether or not anyone remembers it exists.</p>

<h3>Dynamic Tags: Personalized Content Without Manual Work</h3>
<p>A Dynamic Tag is a placeholder that pulls live data into text content: email templates, webhook payloads, and AI prompt templates. When the communication goes out, the tag resolves to the actual value for that specific participant, feedback item, or project.</p>
<p>Dynamic Tags use a <code>[[Tag Name]]</code> style format and are inserted by picking from a tag picker in the template editor — you don't type them manually. The platform shows the human-readable label while the tag resolves the correct value at send time.</p>
<p>Examples of Dynamic Tags in practice:</p>
<ul>
  <li>A feedback status email that includes the participant's name, the feedback title, and the new status — all resolved from the record, no manual drafting per item</li>
  <li>An email template that addresses each participant by their first name, pulling from their profile automatically</li>
  <li>A webhook payload that passes the feedback ID, feature name, and assigned team member to an external system on status change</li>
</ul>
<p>Dynamic Tags let you write one template that feels like a custom message to every recipient. At scale, that's the difference between communication that feels personal and communication that feels broadcast.</p>

<div class="callout callout-warn"><div class="callout-head">Macros are powerful and hard to undo</div><div class="callout-text">A Macro that runs on 500 feedback items runs on all 500 simultaneously. Test Macros on a small filtered set before scheduling them at scale. Bulk status changes and bulk archives don't have a single-click undo.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Macros automate bulk actions on feedback, users, and communications on schedule or demand</li>
  <li>Dynamic Tags pull live data into templates so every recipient gets personalized content</li>
  <li>Macros encode recurring admin tasks into the platform, removing the dependency on human memory</li>
  <li>Test Macros on small data sets before running them at scale</li>
</ul></div>`,
      },
      {
        id: 'at-3',
        title: 'Regression Testing and Build Tracking',
        content: `
<h3>Regression Testing in Continuous Programs</h3>
<p>Regression testing re-validates features that were previously tested to confirm they still work correctly after a new build. In a continuous program, this is critical: a fix in one area can break something in another, and without structured regression, you won't find out until a participant complains.</p>
<p>Centercode's regression testing integrates into your phase and feature structure. When you mark a feature as regression scope, the platform generates re-test activities and routes them to participants with history on that feature. They're the right people to catch regressions because they know what the baseline experience felt like.</p>

<h3>Build Tracking: Linking Feedback to Specific Versions</h3>
<p>Build tracking connects every piece of feedback to the exact build version the participant was running when they submitted it. This answers a question that gets asked on every program: "Is this issue still present in the latest build?"</p>
<p>Without build tracking, that question requires manual follow-up with the participant. With it, you can filter the feedback list by build version and immediately see which issues were reported before the fix and which were reported after.</p>

<div class="callout callout-info"><div class="callout-head">Release API and App Store polling</div><div class="callout-text">For non-app-store programs, the Release API lets your CI/CD pipeline push a new build directly to Centercode. Centercode then notifies participants, updates the active build version, and routes activities automatically. For iOS and Android programs using TestFlight or Google Play, the flow is reversed: Centercode polls Apple and Google every five minutes for new builds and creates releases automatically when it detects them. Either way, no one has to manually announce a new build.</div></div>

<h3>Product Verification as a Gate</h3>
<p>For hardware programs, product verification tracks delivery per participant. Participants confirm receipt of a physical device, which opens specific feedback types that only make sense once the hardware is in hand. Centercode logs each confirmation, tracks outstanding deliveries, and can trigger follow-ups to participants whose hardware hasn't been acknowledged.</p>
<p>This is also how you prevent feedback about a product experience from arriving before the product has. A participant who hasn't confirmed receipt literally cannot submit hardware-specific feedback until they do.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Regression testing re-validates previously tested features after new builds</li>
  <li>Build tracking links every feedback item to the exact version running at submission</li>
  <li>The Release API automates build distribution from CI/CD pipelines into Centercode</li>
  <li>Product verification gates hardware-specific feedback until physical receipt is confirmed</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'You have 400 open feedback items at the end of a phase. You want to close everything marked "won\'t fix" and send a notification to each affected participant. The right tool is:',
        opts: ['A manual review by the test manager, item by item','A project email sent to all participants','A Macro that filters for "won\'t fix" status, updates items in bulk, and triggers status notifications','A Dynamic Tag in the existing activity template'],
        a: 2,
        exp: 'Macros are designed for exactly this: bulk conditional actions across feedback items, with optional communication triggers. Doing it manually at 400 items introduces errors and consumes hours. A Macro runs in seconds and creates an auditable record of what changed.',
      },
      {
        q: 'A participant submits free-text feedback in a single input field. Ted AI categorizes it into the correct feedback type, detects a potential duplicate, and maps values to the right form fields. This is:',
        opts: ['Ted\'s behavioral profile at work — he learns each participant\'s submission patterns over time','Ted AI\'s AI-assisted submission feature — it handles categorization, duplicate detection, and field mapping from unstructured text','A Macro triggered on feedback submission that applies category rules','Conditional visibility logic in the feedback form redirecting to the right fields based on keywords'],
        a: 1,
        exp: 'Ted AI\'s AI-assisted submission feature lets participants submit free-text in a single input. Ted AI categorizes the feedback into the correct type, detects potential duplicates, and maps values to the right form fields. This is distinct from Ted the bot, who handles behavioral engagement, not content generation.',
      },
      {
        q: 'Your engineering team ships a new build that fixes the top three issues from last week. Before participants test the new build, you want them to re-validate those specific features. This is:',
        opts: ['A new project phase with fresh activities','Regression testing: re-validating previously tested features after a new build to confirm fixes held','A test-out scenario where participants can skip activities they\'ve already done','A survey targeting participants who originally reported the issues'],
        a: 1,
        exp: 'Regression testing targets previously tested features to confirm they still work after changes. Routing it to participants who tested those features before gives you reviewers who know the baseline, which makes regressions much easier to catch.',
      },
      {
        q: 'A form element has Ted AI\'s form element enhancement enabled. A participant submits an answer with grammar errors. What happens?',
        opts: ['Ted AI rewrites the answer and replaces the original text before it\'s saved','Ted AI improves the answer for grammar and clarity; the original is preserved and participants see a toggle to switch between their original text and the AI-enhanced version','A moderator receives an alert to manually fix the grammar before the submission is processed','The submission is flagged and held in moderation until the grammar issue is resolved'],
        a: 1,
        exp: 'Form element enhancement lets Ted AI improve a participant\'s submitted answer for grammar and clarity without replacing the original. The original answer is preserved. Participants see a toggle to switch between their original text and the enhanced version. Managers enable this per element in the form builder.',
      },
      {
        q: 'A PM asks: "Was this issue present in build 4.2, or did it show up in 4.3?" Without build tracking, the answer requires:',
        opts: ['Filtering the feedback list by submission date','Manual follow-up with the participant who reported it','Checking the engineering changelog for 4.3','Reviewing activity completion rates across the two build periods'],
        a: 1,
        exp: 'Without build tracking, the only way to know which build a participant was running when they submitted feedback is to ask them. With build tracking, every feedback item carries its version context. The PM\'s question becomes a filter, not an investigation.',
      },
    ],
    testOut: [
      {
        q: 'Ted AI generates a test plan for your program. You review it and find 80% of the activities are well-suited to your goals but 20% are off-target. The correct response is:',
        opts: ['Accept the full plan: Ted AI has context you don\'t','Reject the full plan: if 20% is wrong, the whole thing is unreliable','Use the 80% as a foundation, revise the 20%, and treat the output as a starting point, not a finished deliverable','Re-run Ted AI\'s generation with a more detailed prompt until the full plan is right'],
        a: 2,
        exp: 'Ted AI outputs eliminate the blank-page problem. They\'re designed to accelerate human judgment, not replace it. An 80% useful draft is a valuable head start. The 20% revision is where your program-specific knowledge adds value that the AI can\'t infer.',
      },
      {
        q: 'You want to send a weekly engagement summary to each participant showing their personal stats: feedback submitted, activities completed, and current rank. The correct approach is:',
        opts: ['Export participant data weekly and send manual emails','Build a Dynamic Tag template that pulls each participant\'s live stats and schedule it as a recurring communication','Create a survey that asks participants to self-report their own stats','Use project email to broadcast aggregate stats to the full group'],
        a: 1,
        exp: 'Dynamic Tags resolve per recipient at send time. One template with tags for feedback count, activities completed, and participant rank produces a personalized summary for every participant in a single scheduled send. Manual exports create lag and introduce errors.',
      },
      {
        q: 'Your CI/CD pipeline publishes a new build for a non-app-store web program. You want Centercode to notify participants, update the active build version, and route version-specific activities automatically. The correct integration is:',
        opts: ['Configure TestFlight polling — Centercode checks for new builds every five minutes','Use the Release API so CI/CD pushes the new build directly to Centercode, triggering automatic participant notification, version tracking, and activity routing','Set up a Macro scheduled to check for new builds and send an announcement email','Use a Webhook from Centercode to your CI/CD pipeline to trigger the release process'],
        a: 1,
        exp: 'For non-app-store programs, the Release API lets your CI/CD pipeline push a new build directly to Centercode. Centercode then notifies participants, updates the active build version, and routes activities automatically. TestFlight and Google Play programs use a different flow: Centercode polls those stores every five minutes for new builds.',
      },
      {
        q: 'An admin sets up a Macro to archive all participants inactive for 60+ days. It runs on a Sunday night schedule. On Monday morning, the test manager discovers 40 participants were archived, including several who had been intentionally inactive during a device replacement period. The problem is:',
        opts: ['The Macro ran outside business hours and should be scheduled for weekdays only','The Macro lacked a filter exception for participants in a known hold status. Bulk automation needs guardrails built in before it runs.','Ted should have flagged those participants before the Macro ran','The archive threshold of 60 days was too aggressive'],
        a: 1,
        exp: 'Macros execute exactly what they\'re configured to do, on every record that matches the filter, without judgment. If there are exceptions (participants on hold, hardware replacement periods, onboarding delays), those exceptions need to be encoded as filter conditions before the Macro runs. Broad automation without guardrails produces broad mistakes.',
      },
      {
        q: 'Ted AI\'s feedback summary for a 300-item phase flags a cluster of issues around onboarding that don\'t appear in the top 10 by impact score. You should:',
        opts: ['Trust the impact score: if it\'s not in the top 10, it doesn\'t warrant attention','Dismiss the cluster: AI summaries sometimes surface noise that scored items filter out correctly','Investigate the cluster: Ted AI may have identified a pattern that impact scoring (which weights individual items) doesn\'t surface well at the aggregate level','Re-configure the impact score weighting to make the cluster rank higher'],
        a: 2,
        exp: 'Ted AI\'s feedback analysis and the impact score measure different things. Impact score ranks individual items by importance and prevalence. Ted AI\'s summary looks for patterns across items. A cluster of related low-weight issues might indicate a systemic problem that no single submission captures well. Both signals are worth reading.',
      },
    ],
  },

  /* =====================================================
     MODULE 8 — INTEGRATIONS AND DATA FLOW
     ===================================================== */
  integrations: {
    id: 'integrations',
    title: 'Integrations and Data Flow',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    duration: '30 min',
    difficulty: 'Intermediate',
    description: 'Map the full Centercode integration ecosystem, learn which data belongs in which system, and understand how build distribution connects your release pipeline to your testing program.',
    lessons: [
      {
        id: 'i-1',
        title: 'The Integration Ecosystem',
        content: `
<h3>Centercode Doesn\'t Live Alone</h3>
<p>Every organization running Centercode also runs other tools. Engineering has Jira. Communication runs through Slack. Mobile builds go through TestFlight or Google Play. Customer data lives in Salesforce. Insights end up in Tableau or Power BI. Centercode connects to all of them.</p>
<p>The integrations aren\'t just convenience features. They\'re how you prevent data siloing, reduce manual handoffs, and keep your testing program from being a parallel track that nobody else checks.</p>

<h3>The Core Integrations</h3>
<ul>
  <li><strong>Jira:</strong> Escalated feedback items appear in your engineering backlog. Status changes in Jira sync back to Centercode. Module 4 covers the mechanics. The key rule: Centercode is the system of record for testing data. Jira is the system of record for engineering execution.</li>
  <li><strong>Slack:</strong> Bidirectional notifications. New high-priority feedback can post to a designated channel. Triage decisions made in Slack can trigger status updates in Centercode. Stakeholders who won\'t open a dashboard will read a Slack notification.</li>
  <li><strong>TestFlight and Google Play:</strong> When you publish a new build, Centercode automatically notifies enrolled participants and updates the active build version. Participants join TestFlight or Google Play groups through Centercode enrollment, not separately.</li>
  <li><strong>Salesforce:</strong> Salesforce can receive webhook data from Centercode when feedback events occur. There's no native CRM sync. Salesforce is one of the supported webhook endpoint targets.</li>
  <li><strong>Tableau and Domo:</strong> Export Centercode data via Data Packages for consumption by BI tools. Data Packages provide structured JSON on demand or on a schedule.</li>
  <li><strong>Webhooks:</strong> Send event-driven data to any external system when something happens in Centercode: new feedback submitted, status changed, participant enrolled. The receiving system decides what to do with it.</li>
  <li><strong>External Listeners:</strong> Inbound data ingestion from external systems. Three listener types: <strong>External data</strong> (stores field values on user or feedback records), <strong>Add a comment</strong> (posts a comment on a feedback item from an external author), and <strong>Run a macro</strong> (triggers a Centercode macro). Each listener generates a unique API endpoint URL after setup.</li>
  <li><strong>Zapier, Aha!, Discord, TestFairy:</strong> Configured as third-party connectors through webhook macros or external destinations. Operate via the Integration Center hub.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Centercode integrates with Jira, Slack, TestFlight, Google Play, Salesforce, Tableau, and Webhooks</li>
  <li>Jira is for engineering execution; Centercode is the system of record for testing data</li>
  <li>TestFlight and Google Play enrollment flows through Centercode, keeping participant management in one place</li>
  <li>Webhooks enable event-driven data flow to any external system</li>
</ul></div>`,
      },
      {
        id: 'i-2',
        title: 'Integration Strategy: What Belongs Where',
        content: `
<h3>The Question Nobody Asks Until It\'s Too Late</h3>
<p>Most teams integrate systems without a strategy. They connect Centercode to Jira because engineering asked, add a Slack webhook because someone wanted notifications, and build a Power BI report because leadership requested it. Six months later, three systems show conflicting issue counts and nobody knows which one is right.</p>
<p>Integration strategy means deciding, before you connect anything, which system owns which data. Then you build integrations that reflect that decision, not ones that mirror data everywhere.</p>

<h3>A Practical Ownership Framework</h3>
<p>Three questions determine where data belongs:</p>
<ul>
  <li><strong>Where does the data originate?</strong> Feedback from participants originates in Centercode. Engineering execution decisions originate in Jira. Customer relationship context originates in Salesforce. Keep data at its source.</li>
  <li><strong>Who needs to act on it?</strong> Engineers act on issues in Jira. Test managers act on patterns in Centercode. Executives act on trends in dashboards or BI tools. Route data to where decisions are made, not everywhere simultaneously.</li>
  <li><strong>What happens when the systems disagree?</strong> Choose one system as the source of truth for each data type before they disagree, not after. Trying to reconcile two authoritative sources mid-program wastes time and creates friction with stakeholders who cite different numbers.</li>
</ul>

<div class="callout callout-warn"><div class="callout-head">Mirroring data creates drift</div><div class="callout-text">When the same data exists in two places, both places need to stay in sync. They won\'t. One will get stale, someone will rely on the stale version, and you\'ll spend a meeting explaining why the numbers don\'t match. Choose a source of truth per data type and make the other systems read from it.</div></div>

<h3>Data Packages, External Listeners, and Record Lookups</h3>
<p>For teams with more complex needs:</p>
<ul>
  <li><strong>Data Packages:</strong> Custom datasets built from Centercode data, made available for BI tools and third-party systems on a schedule or on demand. </li>
  <li><strong>External Listeners:</strong> Allow external systems to send data into Centercode. Three types: <em>External data</em> (writes field values to user or feedback records), <em>Add a comment</em> (posts a comment on a feedback item from an external author), and <em>Run a macro</em> (triggers a Centercode macro).</li>
  <li><strong>API Keys:</strong> Community-scoped credentials for authenticating Weblistener and webhook endpoints from authorized external systems.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Integration strategy starts with assigning data ownership before connecting systems</li>
  <li>Mirroring data across systems creates drift; choose a source of truth per data type</li>
  <li>Route data to where decisions are made, not everywhere simultaneously</li>
  <li>Data Packages, External Listeners, and Record Lookups handle complex enterprise data flow requirements</li>
</ul></div>`,
      },
      {
        id: 'i-3',
        title: 'Build Distribution and Release Management',
        content: `
<h3>The Gap Between Engineering and Testing</h3>
<p>In most programs, there\'s a gap between when engineering publishes a build and when participants start testing it. Someone has to announce the build, update documentation, route participants to the download, and verify they have the right version. In fast-moving programs with frequent releases, that gap costs real time and introduces version confusion.</p>
<p>Centercode\'s Release Management closes that gap.</p>

<h3>How Release Management Works</h3>
<p>When a new build is published (manually or via the Release API), Centercode does four things automatically:</p>
<ul>
  <li>Notifies enrolled participants that a new build is available</li>
  <li>Updates the active build version tracked across all feedback submissions from that point forward</li>
  <li>Routes version-specific activities to the right participants</li>
  <li>For mobile programs: pushes participants to TestFlight or Google Play groups tied to that build</li>
</ul>
<p>The result: participants move to the new build promptly, feedback is tagged to the correct version, and the test manager doesn\'t manually bridge engineering and testing for every release.</p>

<h3>Software and Product Key Distribution</h3>
<p>Centercode handles both software key delivery and physical product tracking. For software programs, product keys are distributed through Centercode and tied to participant accounts. For hardware programs, physical device assignments are tracked per participant from initial shipment through confirmed receipt.</p>
<p>In both cases, delivery status is visible in the platform without separate tracking tools. Participants who haven\'t received or acknowledged their access can be filtered, followed up with via Ted or Macro, and excluded from feedback analysis until their receipt is confirmed.</p>

<div class="callout callout-success"><div class="callout-head">Private feedback until receipt is confirmed</div><div class="callout-text">For hardware programs, you can gate specific feedback types so they\'re not visible to participants until they confirm product receipt. This prevents participants from submitting hardware-specific feedback about a product they haven\'t actually received yet, which would contaminate your signal.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Release Management automatically notifies participants, updates build versions, and routes activities when a new build ships</li>
  <li>The Release API connects CI/CD pipelines to Centercode without manual announcements</li>
  <li>Software keys and hardware deliveries are tracked per participant in the platform</li>
  <li>Product verification gates feedback types until physical receipt is confirmed</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Your Slack channel shows 12 high-priority issues but your Jira board shows 8. A stakeholder asks which number is correct. This problem originated because:',
        opts: ['Jira\'s sync with Centercode has a known delay','No one decided which system was the source of truth before both systems started tracking issues independently','Slack notifications are delayed and the channel is showing older data','The impact score threshold for Jira escalation is set differently than Slack\'s notification threshold'],
        a: 1,
        exp: 'Conflicting counts between systems are an integration strategy failure, not a sync failure. When two systems both track the same data type without a designated source of truth, they diverge. The fix isn\'t a better sync. It\'s deciding which system owns issue tracking and making the other one read from it.',
      },
      {
        q: 'A participant enrolls in your iOS testing program through Centercode. Where should they expect to receive the build?',
        opts: ['Directly through Centercode\'s mobile app','Via TestFlight, with Centercode managing enrollment; Centercode polls Apple every five minutes for new builds and notifies participants when one is detected','Through a direct download link emailed by the test manager after enrollment','Through Apple\'s standard App Store review process'],
        a: 1,
        exp: 'TestFlight integration routes participants from Centercode enrollment to the correct TestFlight group. Centercode polls Apple every five minutes for new builds and notifies participants automatically when one is detected. Participant management stays in Centercode; build delivery happens through TestFlight.',
      },
      {
        q: 'An external system needs to post a comment on a Centercode feedback item from an external author when a related ticket is updated. Which External Listener type handles this?',
        opts: ['External data — stores field values on user or feedback records','Add a comment — posts a comment on a feedback item from an external author','Run a macro — triggers a Centercode macro','This isn\'t possible with External Listeners — it requires a Webhook instead'],
        a: 1,
        exp: 'External Listeners have three types: External data (store field values on user or feedback records), Add a comment (post a comment on a feedback item from an external author), and Run a macro (trigger a Centercode macro). Each listener generates a unique API endpoint URL after setup. Posting an externally-authored comment onto a Centercode item uses the Add a comment listener.',
      },
      {
        q: 'Your team wants to be notified in Slack whenever a participant submits feedback rated 4 or 5 stars on the overall product experience question. The right integration for this is:',
        opts: ['A Macro that checks feedback ratings and sends project emails','A Webhook that triggers on feedback submission and posts to Slack when the rating condition is met','A daily Slack digest generated by manual export from Centercode','A Dynamic Tag in a scheduled Slack notification template'],
        a: 1,
        exp: 'Webhooks are event-driven: something happens in Centercode, a payload goes to an external system, and that system acts on it. A Webhook listening for high-rated feedback submissions and posting to Slack is exactly the use case they\'re built for. No manual exports, no delays.',
      },
      {
        q: 'When setting up the Centercode Slack integration, you want some feedback types to post to dedicated channels while others go to a general channel. Is this possible?',
        opts: ['No — Slack notifications go to a single global channel only','Yes — you can configure a global default channel and override it per feedback type','Yes — but only if you have a separate Zapier connection for each feedback type','No — Slack integration sends all events to whichever channel is configured in Jira'],
        a: 1,
        exp: 'The Slack integration supports both a global channel (for all feedback events) and per-feedback-type channel routing. Set it up under Community Settings → Integrations → Slack. After OAuth authentication, you choose how to route notifications.',
      },
    ],
    testOut: [
      {
        q: 'Your organization uses Salesforce for customer data, Jira for engineering, Slack for team communication, and Tableau for executive reporting. A new PM asks: "Should all Centercode feedback data flow into all four of these systems?" The correct answer is:',
        opts: ['Yes: maximum visibility across systems ensures no feedback is missed','Yes, but only for high-priority feedback above a certain impact threshold','No: each system should receive the specific data type it acts on. Jira gets escalated issues. Slack gets real-time alerts. Tableau gets aggregate reporting data. Salesforce gets customer-linked activity. Mirroring everything everywhere creates conflicting sources of truth.','No: Centercode data should stay in Centercode. External integrations dilute the integrity of the testing record.'],
        a: 2,
        exp: 'Integration strategy is about routing data to where decisions are made, not copying it everywhere. Jira acts on individual issues. Slack surfaces real-time signals. Tableau analyzes trends. Salesforce provides customer context. Each integration should serve a specific decision, not just duplicate the data.',
      },
      {
        q: 'Your CI/CD pipeline publishes a new iOS build to TestFlight every two weeks. Currently, the test manager manually emails participants after each build. What should replace this?',
        opts: ['A Dynamic Tag template that updates automatically when a new build is detected','A Macro scheduled to run every two weeks with build announcement content','Configure the TestFlight integration — Centercode polls TestFlight every five minutes for new builds and automatically notifies participants, updates the active build version, and routes version-specific activities when a new one is detected','A Webhook that posts the TestFlight link to Slack, where participants are expected to see it'],
        a: 2,
        exp: 'For iOS programs using TestFlight, Centercode polls Apple every five minutes for new builds. When a new build is detected, participants are notified, build versions are updated, and activities are routed automatically. Manual announcement is heroics that the integration eliminates.',
      },
      {
        q: 'Six months into a program, a stakeholder reports that the feedback count in the BI dashboard is 847 but Centercode shows 903. The most defensible first response is:',
        opts: ['Correct the BI dashboard to match Centercode','Correct Centercode to match the BI dashboard','Declare Centercode the source of truth for feedback data, identify when the BI export last ran, and reconcile the delta to understand whether the gap is a sync lag or a structural integration problem','Ask both teams to stop reporting feedback volume until the discrepancy is resolved'],
        a: 2,
        exp: 'Before fixing the number, establish which system is authoritative. Centercode is the system of record for testing data, so its count is the baseline. Then diagnose the gap: is it a sync lag, a filter difference, or a structural mismatch in how "feedback" is defined? Fix the integration, not just the number.',
      },
      {
        q: 'An external system needs to write a custom field value onto a Centercode feedback record when a status change happens in that external system. Which integration type is designed for this inbound data flow?',
        opts: ['A Webhook — configured to send from Centercode to the external system on status change','An External data listener — configured to receive field values from an external system and store them on user or feedback records','A Data Package — configured to pull data from both systems on a shared schedule','A Macro — triggered by the external system to update the feedback record'],
        a: 1,
        exp: 'External Listeners handle inbound data from external systems into Centercode. The External data listener type specifically stores field values against user or feedback records. Each listener generates a unique API endpoint URL after setup. Webhooks go the other direction — outbound from Centercode to external systems.',
      },
      {
        q: 'You\'re setting up Centercode for a physical hardware testing program. When should product-verification-gated feedback types become visible to participants?',
        opts: ['Immediately upon enrollment, so participants can submit pre-receipt expectations','After the participant completes their first activity','Only after the participant confirms receipt of the physical device in Centercode','After a set number of days following the expected delivery date'],
        a: 2,
        exp: 'Product verification gates feedback types to the moment of confirmed receipt. Pre-receipt hardware feedback isn\'t trustworthy — the participant may be speculating based on documentation, not actual experience. Gating those feedback types until receipt is confirmed keeps the signal clean.',
      },
    ],
  },

  /* =====================================================
     MODULE 9 — PROGRAM MATURITY AND RECOVERY
     ===================================================== */
  maturity: {
    id: 'maturity',
    title: 'Program Maturity and Recovery',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    duration: '40 min',
    difficulty: 'Advanced',
    description: 'Design programs that scale across multiple teams, diagnose and recover programs that are underperforming, and build the executive alignment that keeps programs funded and trusted.',
    lessons: [
      {
        id: 'm-1',
        title: 'Designing Programs for Multiple Teams',
        content: `
<h3>The Scaling Problem</h3>
<p>A program designed for one team of three breaks when a second team joins. It breaks not because the platform can\'t handle it, but because the decisions made for the first team are now embedded in the infrastructure that the second team inherits. Templates built for one product type. Access rules written around one workflow. Reports designed for one stakeholder group.</p>
<p>Designing for scale means making those decisions deliberately, before the second team arrives, so the infrastructure they inherit is general enough to work for them without the first team having to redo their setup.</p>

<h3>The Autonomy-with-Guardrails Model</h3>
<p>The goal isn\'t uniformity. Different teams test different products with different workflows. The goal is shared infrastructure with controlled variation: teams can customize within boundaries that the community admin sets, without breaking each other.</p>
<p>In practice, this means:</p>
<ul>
  <li><strong>Community-layer decisions:</strong> Team structure, role permissions, recruiting rules, global templates, branding, and default feedback types are set at the community level. They apply everywhere unless explicitly overridden.</li>
  <li><strong>Project-layer decisions:</strong> Feature sets, activity schedules, project-specific feedback workflows, and reporting configurations live at the project level. Teams own these without affecting other projects.</li>
  <li><strong>Override policy:</strong> Define explicitly which community-layer defaults can be overridden at the project level and which can\'t. Document the policy. Don\'t leave it as an unwritten rule that new admins have to discover by breaking something.</li>
</ul>

<div class="callout callout-warn"><div class="callout-head">Template drift is a multi-team hazard</div><div class="callout-text">When multiple teams share templates, one team\'s "quick fix" to a shared template affects every project that inherits from it. Templates used by more than one team should be owned by the community admin and versioned intentionally. Project-specific variations should fork into project-level templates, not modify the shared baseline.</div></div>

<h3>Access Conflict Resolution</h3>
<p>Four conflict patterns surface when multiple teams share a Centercode community:</p>
<ul>
  <li><strong>Permission inflation:</strong> A PM gets elevated access to fix one problem and keeps it, creating a growing set of users with more access than their role requires</li>
  <li><strong>Team membership conflict:</strong> A participant is on two teams with contradictory permissions, and the platform resolves to the more permissive one</li>
  <li><strong>Project-specific overrides:</strong> A project admin changes a shared configuration to fix a local problem without realizing the change propagates upstream</li>
  <li><strong>Notice or eligibility gate mismatch:</strong> A community-level gate and a project-level gate create conflicting access conditions that neither admin intended</li>
</ul>
<p>The safe resolution sequence: reproduce the conflict with a test account, narrow to the failing access layer, fix the structure rather than adding more permissions, and test with one user before applying broadly.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Autonomy-with-guardrails: shared community infrastructure with controlled project-level variation</li>
  <li>Community-layer decisions affect everything; project-layer decisions are scoped</li>
  <li>Template drift is a multi-team risk: shared templates need community admin ownership</li>
  <li>Four access conflict patterns have a structured resolution sequence: reproduce, narrow, fix structure, test first</li>
</ul></div>`,
      },
      {
        id: 'm-2',
        title: 'Diagnosing and Recovering Underperforming Programs',
        content: `
<h3>Not All Failing Programs Look the Same</h3>
<p>A program that isn\'t working can fail in four distinct ways, each with a different root cause and a different fix. Treating them all as the same problem ("we need more engagement") leads to applying solutions that don\'t match the actual failure.</p>

<p><strong>Signal failure:</strong> Data is being collected but doesn\'t inform decisions. Activities produce compliant submissions but teams remain uncertain after reviewing results. The fix isn\'t more data. It\'s restructuring activities around specific decisions rather than general coverage.</p>

<p><strong>Engagement failure:</strong> Participation is declining, response rates are dropping, or Delta Health is trending down. This is almost always a community relationship problem, not a volume problem. The causes: over-asking, poor targeting, closing the feedback loop badly, or starting programs with the wrong participants.</p>

<p><strong>Expectation failure:</strong> Stakeholders are dissatisfied with program outcomes despite technically successful metrics. The program delivered what it promised, but what it promised didn\'t match what leadership actually needed. This is a pre-program alignment failure, not an execution failure.</p>

<p><strong>Structural failure:</strong> The program runs only because one or two people hold everything together. Replace those people and the program stalls. This is the heroics problem from Module 1, but at a more advanced diagnosis level.</p>

<div class="callout callout-info"><div class="callout-head">Staged recovery vs. restart</div><div class="callout-text">Before ending a program and starting fresh, ask whether staged recovery is possible. A signal failure can be recovered mid-program by restructuring the remaining activities. An engagement failure may recover with a community re-engagement campaign and revised ask volume. Full restarts discard participant trust and historical data. Recover when you can.</div></div>

<h3>The Recovery Sequence</h3>
<p>Before any recovery action, diagnose which failure type you\'re actually dealing with. The four types require different interventions:</p>
<ul>
  <li>Signal failure: audit activities against decisions, cut coverage-only asks, add targeted follow-ups</li>
  <li>Engagement failure: reduce ask volume, review response rate diagnostics from Module 3, close open loops from previous programs</li>
  <li>Expectation failure: re-align stakeholders on what the program can and can\'t answer, then re-scope activities around the actual questions</li>
  <li>Structural failure: audit what lives in individuals\' heads, encode it into templates and platform structure, reassign ownership formally</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Four failure types: signal failure, engagement failure, expectation failure, structural failure</li>
  <li>Each type has a distinct root cause and requires a different fix</li>
  <li>Stage recovery before restarting: restarts discard trust and data</li>
  <li>Diagnose first; don\'t apply solutions before confirming which failure you\'re dealing with</li>
</ul></div>`,
      },
      {
        id: 'm-3',
        title: 'Executive Alignment and Program Storytelling',
        content: `
<h3>Alignment Is Not a Meeting</h3>
<p>Executive alignment is a continuous practice, not an event. Teams that treat it as a recurring meeting where they present last week\'s metrics miss the point. By the time a problem shows up in a presentation, leadership already has opinions about it. Proactive alignment happens before decisions crystallize, not after.</p>
<p>The discipline: bring leadership into the framing of program goals at the start, give them leading indicators during the program so trends aren\'t surprises, and communicate plan deviations with context before they ask about them.</p>

<h3>Translating Operational Data into Executive Language</h3>
<p>Executives don\'t think in Delta Health scores or feedback volume. They think in risk, confidence, and momentum. The translation exercise:</p>
<ul>
  <li>"Delta Health is at B+ and holding" becomes "Participant engagement is stable and we\'re on track for the insight volume we need"</li>
  <li>"We\'ve resolved 14 of the top 20 impact-scored issues" becomes "The product has measurably improved since week one. Here\'s what changed and why it matters for the launch."</li>
  <li>"Response rate dropped from 58% to 41% in week four" becomes "We\'re seeing early signs of participant fatigue. Here\'s what we\'re doing about it before it affects signal quality."</li>
</ul>
<p>The goal isn\'t to hide operational detail. It\'s to frame it in terms of the questions executives are actually asking: are we on track, what are the risks, and what should we do about them?</p>

<h3>The Program Story (Not the Project Summary)</h3>
<p>A project summary tells you what happened in one test. A program story tells you what has changed across multiple tests and why it matters for the product and the organization.</p>
<p>Program storytelling builds longitudinal arguments: engagement has grown because the community trusts the loop-closing process. Product quality has improved because the program surfaces issues that internal QA misses consistently. The investment is justified because the cost of pre-release issue resolution is measurably lower than post-launch fixes.</p>
<p>These arguments protect budget, build internal credibility, and make the program harder to cut when priorities shift. A project summary doesn\'t do any of that.</p>

<h3>Building the Story from Centercode Data</h3>
<p>The data for a longitudinal program story lives across several dashboards. The <strong>Product Success Analysis</strong> dashboard shows how Delta Success has trended across phases. The <strong>Feedback Impact</strong> dashboard shows which issues were resolved and what that did to the Success score. The <strong>Top Testers</strong> dashboard shows whether community engagement has grown or declined over time.</p>
<p>For cross-program reporting, export comparable metrics from each program cycle and track them over time. Delta Success at wrap-up, participation rate at peak, and issues resolved pre-release are the three numbers worth tracking longitudinally. Together, they build the case that the program compounds value over time — which is the argument that protects budget.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Executive alignment is continuous: proactive framing before decisions, not reactive reporting after them</li>
  <li>Translate operational data into executive language: risk, confidence, and momentum</li>
  <li>A program story spans multiple tests and builds a longitudinal argument for the program\'s value</li>
  <li>Program stories protect budget; project summaries don\'t</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Team A and Team B share a Centercode community. Team A\'s admin edits a shared template to add a feedback field their product needs. Two days later, Team B\'s projects start collecting an extra field that doesn\'t apply to their product. This happened because:',
        opts: ['Team A\'s admin made a project-level change that incorrectly propagated upward','Shared templates are community-level infrastructure. Editing them without ownership review affects every project that inherits from them.','Team B\'s project is misconfigured and shouldn\'t be inheriting from the shared template','Feedback fields can\'t be added at the template level without community admin approval'],
        a: 1,
        exp: 'Shared templates are community-level infrastructure. Any change to them affects every project that inherits from them. Team A\'s admin had the permission to edit the template but not the awareness of its downstream effects. The fix: community admin owns shared templates; project-specific variations fork into project-level templates.',
      },
      {
        q: 'Your program has 85% activity completion and solid feedback volume. Leadership reviews the results and still can\'t decide what to prioritize. This is most likely:',
        opts: ['An engagement failure: not enough participants submitted high-quality feedback','A signal failure: activities were built for coverage, not to resolve specific decisions','An expectation failure: leadership wanted different data than the program was designed to provide','A structural failure: the test manager can\'t synthesize the data without help'],
        a: 1,
        exp: 'High completion with low decision-making clarity is the signal failure pattern. The activities produced data, but the data doesn\'t answer the questions leadership needs answered. The fix: audit what decision each activity was meant to support, cut activities that don\'t map to a decision, and add targeted follow-ups that do.',
      },
      {
        q: 'A participant with high tester ranking sends a message saying "my feedback never seems to matter." The most important next step is:',
        opts: ['Send them a personal apology and summary of what was done with their submissions','Check whether the loop-closing process has been working: have their submissions received status updates? Have they seen their feedback acknowledged?','Invite them to a higher-tier advisory cohort to increase their sense of contribution','Escalate their feedback items to Jira immediately to show responsiveness'],
        a: 1,
        exp: 'The "my feedback doesn\'t matter" signal is almost always a loop-closing failure. Before drafting a response, check the record: have their submissions moved through the workflow? Have they received status notifications? If the loop hasn\'t been closed for this participant, the response needs to address that gap specifically, not just reassure them.',
      },
      {
        q: 'Delta Health drops from B to C- in week five of an eight-week program. A PM suggests restarting with a fresh recruiting campaign. The right response is:',
        opts: ['Agree: a fresh start with better participants will produce better results','Agree, but only if the drop exceeds two full letter grades','Diagnose the failure type first. A drop at week five may indicate engagement fatigue, poor ask volume, or a loop-closing gap. Staged recovery has a better success rate than restart and doesn\'t discard five weeks of participant trust.','Decline: restarting is never appropriate mid-program'],
        a: 2,
        exp: 'Restarting is the most expensive option and discards the trust you\'ve built with participants over five weeks. Diagnose which failure type you\'re dealing with before acting. An engagement failure at week five often recovers with reduced ask volume and a targeted re-engagement campaign.',
      },
      {
        q: 'You\'re preparing a quarterly program review for the CMO. Which of these best reflects executive-appropriate framing?',
        opts: ['Delta Health: B+, 847 total feedback items, 14 issues escalated to Jira, 62% activity completion across all phases','The program is on track. Participant engagement is stable. We\'ve resolved the top issues since launch, and the product\'s quality signal has improved measurably. One risk to watch: feedback volume from our enterprise segment is lighter than expected.','This quarter we completed four phases covering 23 product features with 412 participants. Feedback included 309 issues, 188 ideas, and 91 pieces of praise.','All three Delta KPIs are green. No flags for leadership attention.'],
        a: 1,
        exp: 'Executives read for risk, confidence, and momentum. The second option translates operational metrics into those terms: engagement is stable (confidence), quality signal has improved (momentum), one risk to watch (transparency). The other options are either raw data, activity counts, or a dismissal that provides no useful information.',
      },
    ],
    testOut: [
      {
        q: 'You\'re designing a Centercode community that will eventually host eight product teams. The first team is setting up now. Which decisions should be made at the community level vs. the project level?',
        opts: ['All decisions should be made at the project level to preserve team autonomy','All decisions should be made at the community level to ensure consistency','Community level: team structure, role permissions, recruiting rules, global templates, branding. Project level: feature sets, activity schedules, project-specific feedback workflows, reporting configurations. Explicitly document which community defaults can be overridden at the project level.','Community level: branding and templates only. Everything else should default to project-level control to avoid bottlenecks.'],
        a: 2,
        exp: 'The community-layer and project-layer distinction isn\'t about control; it\'s about scope of effect. Community-layer decisions affect every project. Project-layer decisions are scoped. Making infrastructure decisions at the community level means teams two through eight inherit a working starting point instead of building from scratch every time.',
      },
      {
        q: 'A program running for nine months has great engagement metrics. The test manager who designed it is leaving the company. During the transition, you discover that key access rules, template configurations, and communication schedules exist only in their head. This is:',
        opts: ['Normal: every program depends on its founding manager\'s institutional knowledge','A structural failure that needs to be corrected before the transition, not after. Audit what lives in their head, encode it into platform structure and documentation, and validate that a new person can operate the program correctly before the departure.','An acceptable tradeoff: the program worked well because of this person\'s expertise','A governance failure that the community admin should have caught earlier in annual audits'],
        a: 1,
        exp: 'This is a structural failure in its most preventable form. The program is about to become fragile at exactly the moment it changes hands. The right response: run an audit before the departure, not after. Encode undocumented decisions into templates and platform configuration. Validate that the new person can operate without handholding before the transition completes.',
      },
      {
        q: 'Leadership is debating whether to reduce the testing program budget by 40% for next fiscal year. What type of argument is most likely to protect the program?',
        opts: ['A detailed project summary of the last three tests, showing activity completion rates and feedback volumes','A cost-per-issue report showing how much each feedback item cost to collect','A longitudinal program story: engagement has grown because participants trust the loop-closing process, product quality has improved measurably across multiple releases, and the cost of pre-release issue resolution is a fraction of post-launch fix costs. Frame this in terms of risk if the program is reduced.','An executive testimonial from the most senior stakeholder who participated in the last test'],
        a: 2,
        exp: 'Budget decisions are made on risk and return arguments, not operational summaries. A longitudinal program story builds the case that the program\'s value compounds over time, that the cost of not testing is higher than the cost of testing, and that reducing the program creates specific, quantifiable risks. A project summary doesn\'t make that argument.',
      },
      {
        q: 'Your program\'s response rate has dropped from 61% in Q1 to 38% in Q3. You\'ve been running the same participant community with the same recruiting approach across all three quarters. The most likely root cause is:',
        opts: ['The product being tested is less interesting to participants than earlier versions','Seasonal variation: summer months always show lower engagement','Accumulating recruiting debt from Q1 and Q2: over-asking, poor targeting, or not closing the loop adequately has eroded community trust across multiple programs','The platform\'s notification system has a delivery problem that should be escalated to support'],
        a: 2,
        exp: 'Gradual response rate decline across a consistent community is almost always recruiting debt accumulation. Each program that over-asks, targets poorly, or fails to close the loop makes the next one harder. Three quarters of decline with no change in recruiting approach suggests the debt has been building since Q1. Diagnose which debt type is driving it before adding more programs.',
      },
      {
        q: 'You want to prepare your executive sponsor for a presentation about next quarter\'s testing roadmap. When is the right time to involve them?',
        opts: ['At the final review presentation, after the roadmap is complete, so they have full context','Two weeks before the presentation so they have time to review the slides','Before the roadmap is finalized, so their priorities and concerns shape the program design rather than being discovered after the plan is set','Only if they specifically ask to be involved before the formal review'],
        a: 2,
        exp: 'Proactive alignment means getting leadership into the framing before decisions are made, not presenting conclusions afterward. If the executive sponsor has concerns about the direction, it\'s far better to find that out while the roadmap is still being designed than after you\'ve committed to an approach. Pre-decision alignment prevents post-decision re-litigation.',
      },
    ],
  },

  /* =====================================================
     MODULE 10 — THE CENTERCODE ECOSYSTEM
     ===================================================== */
  ecosystem: {
    id: 'ecosystem',
    title: 'Delta Testing Context and Use Cases',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    duration: '30 min',
    difficulty: 'Beginner',
    description: 'Understand the four types of delta testing programs and where Centercode fits relative to other tools.',
    lessons: [
      {
        id: 'e-1',
        title: 'Program Types and Where Centercode Fits',
        content: `
<h3>Four Program Types</h3>
<p>Centercode supports four program types, each built for a different testing goal:</p>
<ul>
  <li><strong>Product Launch Testing:</strong> Engage your target market to validate a new product or major release before it ships. The most common program type.</li>
  <li><strong>Continuous User Testing:</strong> Run ongoing programs with existing customers to continuously improve live products. Built for SaaS products shipping frequently.</li>
  <li><strong>Employee Testing:</strong> Gather internal employee feedback to catch issues early and build a product-focused culture before going external.</li>
  <li><strong>Competitive Testing:</strong> Enlist a competitor\'s customers to gain direct, actionable intelligence about how your product compares to theirs.</li>
</ul>

<h3>Where Centercode Fits in the Market</h3>
<p>Centercode\'s primary competition isn\'t other testing platforms. It\'s the status quo: spreadsheets, email, and point solutions cobbled together. That\'s what most teams are actually replacing.</p>
<p>Adjacent tools that come up in competitive discussions:</p>
<ul>
  <li><strong>UserTesting.com:</strong> Video-based UX research interviews. Answers "do people understand this?" Centercode answers "does this work in real-world use?"</li>
  <li><strong>Applause:</strong> Crowdsourced QA with paid testers. Optimized for bug volume. Centercode optimizes for signal quality from motivated, profiled participants.</li>
  <li><strong>Productboard / Aha:</strong> Roadmap management tools. They organize and prioritize feedback you already have. Centercode generates that feedback through structured programs.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Four program types: Product Launch, Continuous User Testing, Employee Testing, and Competitive Testing</li>
  <li>The primary competitor is the status quo: spreadsheets and email, not named software</li>
  <li>Centercode is distinct from UserTesting (UX research), Applause (paid bug QA), and roadmap tools (feedback organization)</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Your organization wants to run a competitive testing program but your PM has never heard of Competitive Testing as a program type. Which description is correct?',
        opts: ['Competitive Testing uses internal employees to compare your product against a competitor\'s','Competitive Testing enlists a competitor\'s customers to give you direct, actionable intelligence about how your product compares to theirs','Competitive Testing is a community survey sent to your existing participants about competitor products','Competitive Testing is another term for Employee Testing when applied to competing teams within the same company'],
        a: 1,
        exp: 'Competitive Testing puts your product in front of a competitor\'s actual customers, not your own. They evaluate both products and surface gaps and strengths you can\'t see from internal testing alone.',
      },
      {
        q: 'Which program type would you choose to understand how your product compares directly to a competitor\'s?',
        opts: ['Product Launch Testing — run before your next release to validate readiness','Continuous User Testing — run ongoing programs with existing customers','Employee Testing — use internal employees to evaluate the comparison','Competitive Testing — enlist a competitor\'s customers to gain direct intelligence about how your product compares'],
        a: 3,
        exp: 'Competitive Testing puts your product in front of a competitor\'s actual customers. They evaluate both products and surface gaps and strengths you can\'t see from internal testing alone.',
      },
      {
        q: 'Your company ships a SaaS product on a bi-weekly release cycle and wants to validate each release with real users. Which program type fits best?',
        opts: ['Product Launch Testing — run a focused test before each major release','Continuous User Testing — run an always-on program that validates each release as it ships','Employee Testing — use internal users to validate each release before external customers see it','Competitive Testing — compare each release against the closest competitor\'s version'],
        a: 1,
        exp: 'Continuous User Testing is built for products with frequent release cycles. The program runs alongside your release schedule, validating each update with real customers as it ships rather than running separate tests for every release.',
      },
      {
        q: 'A PM says "we should use UserTesting.com instead of Centercode to validate our new feature." The most accurate response is:',
        opts: ['Agree: UserTesting is more cost-effective for feature validation','Disagree: Centercode does everything UserTesting does and more','They answer different questions. UserTesting captures UX research through moderated video sessions. Centercode validates real-world use over time through structured programs.','Disagree: Centercode\'s participant community is larger than UserTesting\'s'],
        a: 2,
        exp: 'UserTesting and Centercode are not competitors. UserTesting is optimal for early-stage UX research: "does this interface make sense?" Centercode is optimal for late-stage validation: "does this product work correctly in real-world conditions over time?" Many organizations use both at different stages.',
      },
      {
        q: 'Your company is launching a new product and wants to validate it with real target-market customers before release. Which program type is this?',
        opts: ['Employee Testing — gather internal feedback before going external','Continuous User Testing — build an always-on program and run the launch through it','Product Launch Testing — engage your target market to validate the product before it ships','Competitive Testing — test the new product against an existing competitor in the market'],
        a: 2,
        exp: 'Product Launch Testing is built for validating new products or major releases before they ship. It\'s time-bounded, focused on a specific release, and engages participants who match your target customer profile.',
      },
      {
        q: 'Your leadership team wants to understand why Centercode is better than "just using a spreadsheet and email" for managing user testing. The core argument is:',
        opts: ['Centercode is less expensive than spreadsheets at scale','Spreadsheets and email are the primary competitor — Centercode replaces that workflow with a purpose-built system for structured programs, automated engagement, and analyzable results','Centercode is the only tool that integrates with Jira, which is what engineering needs','Spreadsheets can\'t track feedback, but Centercode can'],
        a: 1,
        exp: 'The primary competition for Centercode isn\'t other testing platforms — it\'s the status quo of spreadsheets, email, and point solutions cobbled together. Centercode replaces that workflow with a system built specifically for user testing: structured programs, automated participant engagement via Ted, impact-scored feedback, and real-time dashboards.',
      },
    ],
    testOut: [
      {
        q: 'You\'re running a continuous testing program for a SaaS product that ships bi-weekly. Each release needs participant validation. Manual announcement of builds is taking hours per cycle. What replaces this for a non-app-store web program?',
        opts: ['Configure TestFlight polling so Centercode checks for new builds every five minutes','The Release API connected to your CI/CD pipeline, triggering Centercode to notify participants and update the active build version automatically with each publish','A Dynamic Tag template that updates build version references in all active communications when a new release is published','A community email sent manually to participants each time a new build is ready'],
        a: 1,
        exp: 'For non-app-store programs, the Release API lets CI/CD push new builds directly to Centercode. Centercode then notifies participants, updates build versions, and routes version-specific activities automatically. Two-week cycles become hands-off for the test manager.',
      },
      {
        q: 'A product director asks: "We\'re doing a major competitive repositioning next quarter. Can Centercode help us understand whether our product actually beats the competitor on the claims we\'re planning to make?" The right program type is:',
        opts: ['Product Launch Testing: time-bound, focused on your product\'s readiness before the repositioning announcement','A community survey: poll your existing participant base about their competitor product usage','Competitive Testing: the same participant group tests both products on the criteria that matter for the repositioning claims, producing real-world comparison data','Employee Testing: internal employees simulate the competitive evaluation process'],
        a: 2,
        exp: 'Competitive Testing puts your product and a competitor\'s product in front of the same participants on specific criteria. It produces real-world data about differentiation rather than internal assumptions. The results either validate the repositioning claims or surface gaps to fix before making them publicly.',
      },
      {
        q: 'Your team has been running a product launch test for a mobile app. The test is wrapping up but engineering wants to keep validating each new release. How do you structure the next phase?',
        opts: ['Run another Product Launch Test for each major release','Switch to Continuous User Testing — build an always-on program that runs alongside your release cycle and validates each update as it ships','Use Employee Testing to validate internal builds before external releases','Run a Competitive Test to benchmark the app against the top competitor before each release'],
        a: 1,
        exp: 'Once a product is live and shipping frequently, Product Launch Testing becomes impractical for each release. Continuous User Testing builds a persistent program that validates changes as they ship. Participants stay enrolled, feedback accumulates across releases, and you maintain a running signal on product quality.',
      },
      {
        q: 'A PM at your company says: "We don\'t need Centercode. Our beta users just email us feedback." What\'s the strongest counter-argument?',
        opts: ['Email feedback is untrackable — Centercode solves the storage problem','Email-based feedback gives you unstructured, unscored, and unanalyzable signal from self-selected responders. Centercode structures that feedback, tracks it against features, scores it by impact, and automates participant engagement — turning ad-hoc emails into a program.','Centercode is required for compliance with standard user testing practices','Email feedback is fine for small programs but Centercode is needed once you exceed 50 participants'],
        a: 1,
        exp: 'The problem with email feedback isn\'t volume — it\'s signal quality. Without structure, scoring, or engagement automation, email-based feedback is hard to act on and impossible to trend over time. Centercode converts that workflow into a program with measurable outcomes.',
      },
      {
        q: 'Which of the four program types would you use to gather employee feedback on a new internal tool before rolling it out company-wide?',
        opts: ['Product Launch Testing — treat the internal rollout like a product launch','Continuous User Testing — build a persistent program to track adoption over time','Employee Testing — gather internal employee feedback before rolling out more broadly','Competitive Testing — compare the new tool against the tool it\'s replacing'],
        a: 2,
        exp: 'Employee Testing is built for exactly this: gathering internal employee feedback before going external or company-wide. It catches issues early, builds a product-focused culture, and validates internal confidence before broader rollout.',
      },
    ],
  },
};

/* -------------------------------------------------------
   AI INTERVIEW SYSTEM PROMPT
   ------------------------------------------------------- */
function getInterviewSystemPrompt(module) {
  return `You are a knowledgeable and encouraging assessor for the Centercode Training Academy. Your job is to evaluate whether a learner has sufficient knowledge of "${module.title}" to skip this training module.

ASSESSMENT RULES:
- Ask exactly 5 questions, one at a time. Wait for the full answer before proceeding.
- Questions should test practical understanding and applied thinking, not memorization of terms.
- Use Centercode-specific terminology correctly: Issues (not bugs), Ideas (not feature requests), participants (not testers), members (in community context), Ted (not TED), FIPs (fixes, improvements, and promotions), impact score (Weight + Popularity), delta testing, notice chains.
- After each answer, give brief, specific feedback in 1–2 sentences before asking the next question.
- Be encouraging but honest.
- After the learner answers the 5th question, output ONLY a JSON block in this exact format (no other text after it):
{"score": [0-100], "passed": [true/false], "feedback": "brief overall assessment", "strengths": ["strength1", "strength2"], "improvements": ["area1", "area2"]}

SCORING: Pass threshold is 80%. Score honestly. A passing score should reflect genuine competency, not just familiarity with terminology.

MODULE CONTEXT:
${module.lessons.map(l => l.title).join(', ')}

Key topics: ${module.description}

Begin by greeting the learner and explaining you'll ask 5 questions, then ask your first question.`;
}

