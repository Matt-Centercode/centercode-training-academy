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
    icon: '🚀',
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

<div class="callout callout-info"><div class="callout-head">Alpha vs. delta testing</div><div class="callout-text">Alpha testing happens internally. Your team finds issues before the product reaches anyone outside the company. Delta testing (Centercode's methodology) goes external, reaching real participants. Both matter, but they answer different questions. Don't confuse them.</div></div>

<h3>Types of User Testing Programs</h3>
<ul>
  <li><strong>Closed programs</strong>: Invite-only, with screened participants. Best for targeted signal from specific user profiles.</li>
  <li><strong>Open programs</strong>: Anyone can join. Higher volume, less precision. Common for broad consumer launches.</li>
  <li><strong>Continuous programs</strong>: Always on, running alongside regular release cycles. The right fit for SaaS products shipping frequently.</li>
  <li><strong>Dogfooding / Customer Zero</strong>: Internal employees or early customers test the product before external release. Useful for catching basics early.</li>
  <li><strong>UAT (User Acceptance Testing)</strong>: Confirms a product meets defined requirements before handoff. More structured than delta testing.</li>
</ul>

<h3>What Makes a Program Effective</h3>
<p>Traditional user testing programs typically see 20–30% participant engagement. Programs run with Centercode's approach consistently reach 80–90%. That gap doesn't come from luck. It comes from structure, automation, and treating participants as partners instead of data sources.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>User testing validates with real people in real conditions, not your internal team</li>
  <li>Alpha = internal; delta testing = external participants</li>
  <li>Closed, open, continuous, and dogfooding programs serve different needs</li>
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
  <li>Delta testing = Phases → Features → Activities, repeated recursively</li>
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

<div class="callout callout-warn"><div class="callout-head">Ted handles what shouldn't be manual</div><div class="callout-text">Ted is Centercode's AI engagement engine. He builds a unique behavioral profile for each participant, then optimizes timing, tone, and channel (email or SMS) for every automated communication. If your team is manually nudging every inactive participant, Ted isn't being used correctly.</div></div>

<h3>The Customer Validation Lifecycle</h3>
<p>Every effective program moves through the same phases: Plan → Recruit → Activate → Collect → Analyze → Act. Centercode supports all six. The phase teams most often skip or rush is the last one.</p>
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
        opts: ['Recruit more participants immediately to increase volume','Diagnose why signal is low—the problem is quality, not quantity','Send a manual email blast to all 300 participants','Extend the program timeline to give participants more time'],
        a: 1,
        exp: 'Low feedback submission signals a signal quality problem, not a volume problem. Adding more participants to a low-engagement program compounds the noise. The right move is to diagnose what\'s preventing participation before doing anything else.',
      },
      {
        q: 'In the FIPs framework, what does each letter stand for?',
        opts: ['Features, improvements, priorities','Fixes, improvements, and promotions (Issues, Ideas, Praise)','Feedback, issues, and performance','Functions, inputs, and processes'],
        a: 1,
        exp: 'FIPs stands for fixes, improvements, and promotions: the three types of feedback in a delta testing program: Issues (fixes), Ideas (improvements), and Praise (promotions). Praise is often underused, but it tells you what to protect under shipping pressure.',
      },
      {
        q: 'A program that only works because one experienced person manages everything manually is:',
        opts: ['Well-run—that\'s what expertise looks like','A sign the program needs more headcount','Fragile—heroics are a design smell that signals structural problems','Normal for programs under a certain size'],
        a: 2,
        exp: 'Heroics are a design smell. If the program breaks when that person is away, the system isn\'t finished. The fix is encoding decisions and processes into the platform structure, not relying on individual memory.',
      },
      {
        q: 'What engagement rate do Centercode programs typically achieve compared to traditional user testing?',
        opts: ['About the same—30–35%','Slightly higher—40–50%','Significantly higher—80–90% vs. the traditional 20–30%','Lower—Centercode focuses on quality, not participation'],
        a: 2,
        exp: 'Traditional user testing programs see 20–30% participant engagement. Centercode programs consistently reach 80–90%. The difference comes from structure, Ted\'s automated engagement, and treating participants as partners.',
      },
      {
        q: 'What is the correct order of phases in the customer validation lifecycle?',
        opts: ['Recruit → Plan → Collect → Analyze → Activate → Act','Plan → Recruit → Activate → Collect → Analyze → Act','Activate → Recruit → Plan → Collect → Act → Analyze','Analyze → Plan → Recruit → Activate → Collect → Act'],
        a: 1,
        exp: 'The lifecycle runs Plan → Recruit → Activate → Collect → Analyze → Act. The most commonly skipped phase is the last one. When participants don\'t see feedback acknowledged, engagement drops on your next program.',
      },
    ],
    testOut: [
      {
        q: 'A PM says: "We ran 300 participants last time and still got bad data. Let\'s do 600 this time." The correct response is:',
        opts: ['Agree—more participants always improves statistical confidence','Decline—double the participants means double the admin overhead with no signal improvement','Reframe: more participants won\'t fix a signal quality problem. Diagnose what made the first 300 disengaged before recruiting anyone new','Agree, but only if the budget supports it'],
        a: 2,
        exp: 'The minimum dose principle applies here. More participants won\'t fix low engagement or poor targeting. The right move is to diagnose the root cause (mismatched profiles, unclear activities, poor communication cadence) before spending more recruiting budget.',
      },
      {
        q: 'A participant submits feedback saying "I loved the new checkout flow—it was the fastest I\'ve ever seen." In the FIPs framework, this is:',
        opts: ['Not useful—positive feedback doesn\'t need to be tracked','An Idea—it suggests the checkout flow could be improved further','Praise—it promotes a strength that should be protected','An Issue—it implies the old flow was too slow'],
        a: 2,
        exp: 'Praise maps to the P in FIPs (promotions). It\'s real signal: it tells you what works, what to protect when shipping pressure builds, and what to highlight in executive reporting. Programs that only track Issues and Ideas miss half the picture.',
      },
      {
        q: 'Six months into a continuous program, the test manager leaves. The replacement admin can\'t find documentation for why key settings are configured the way they are. This is an example of:',
        opts: ['Normal transition friction—this always takes time to resolve','A heroics problem: critical knowledge lived in one person\'s head instead of the platform','A recruiting problem—the right admin wasn\'t hired','A reporting problem—better dashboards would have surfaced the issue'],
        a: 1,
        exp: 'When institutional knowledge lives in one person\'s head instead of encoded into platform structure, templates, and documentation, the program becomes fragile. Program thinking means designing for handoff, not just for today.',
      },
      {
        q: 'Your delta testing program has Phases, Features, and Activities configured. What does the Activity layer specifically accomplish?',
        opts: ['It assigns participants to specific feedback types','It sets the timeline for each program phase','It gives participants specific instructions for how to access and test each feature','It configures Ted\'s engagement cadence per feature'],
        a: 2,
        exp: 'Activities provide instructions describing how participants access and test each feature. They ensure participants understand the full scope of what they\'re testing, which drives more focused, actionable feedback than open-ended exploration alone.',
      },
      {
        q: 'At which stage of the customer validation lifecycle do most program failures actually originate?',
        opts: ['Collect—teams don\'t capture enough feedback types','Act—teams collect feedback but don\'t close the loop or make decisions','Recruit—teams target the wrong participant profiles','Analyze—teams can\'t process the volume of feedback they receive'],
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
    icon: '🧭',
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
  <li><strong>Activities</strong>: The structured tasks you assign to participants: feature walkthroughs, test scenarios, surveys. Activities drive focused feedback.</li>
  <li><strong>Feedback</strong>: All participant submissions: Issues, Ideas, and Praise. Scored, tracked through a triage workflow, and linked to features.</li>
  <li><strong>Members</strong>: Participants enrolled in this specific project, with engagement scores and individual contribution data.</li>
  <li><strong>Reports</strong>: Configurable dashboards and shareable reports for stakeholders at every level.</li>
</ul>

<div class="callout callout-warn"><div class="callout-head">Activities vs. organic feedback</div><div class="callout-text">Activities are what you ask participants to do. Feedback is what they choose to submit on their own. Good programs need both. Activities give you coverage across key features. Organic feedback surfaces issues you never thought to ask about.</div></div>

<h3>The Three KPI Metrics</h3>
<p>Every Centercode project tracks three proprietary KPIs that update in real time:</p>
<ul>
  <li><strong>Delta Health</strong>: Participant engagement based on activity completion and feedback submission. Graded A+ to N/A.</li>
  <li><strong>Delta Success</strong>: Product quality ratio of positive vs. negative feedback. Scores 0–100.</li>
  <li><strong>Delta Impact</strong>: The improvement in Delta Success attributable to resolved issues and implemented ideas. Expressed as a percentage change.</li>
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
<p>Ted is Centercode's AI engagement engine. He builds a unique behavioral profile for each participant, learning their preferred communication timing, tone, and channel (email or SMS). He then uses that profile to send automated nudges, reminders, and follow-ups without you having to configure each one manually.</p>
<p>Ted handles behavior-driven communication. If a participant hasn't completed an activity in three days, Ted knows and responds accordingly. If a participant just submitted their fifth piece of feedback, Ted knows that too.</p>

<h3>Communication Ownership</h3>
<p>Mature programs divide communication responsibility clearly:</p>
<ul>
  <li><strong>Ted</strong>: Automated, behavior-driven nudges. Activity reminders, follow-ups on platform state, timing-critical messages. If the system already knows the condition, Ted should send the message.</li>
  <li><strong>Project email</strong>: Situational context and exceptions. Explaining a change, clarifying an expectation, adding human context Ted can't infer. Automation handles <em>when</em>; project email explains <em>why</em>.</li>
  <li><strong>Community email</strong>: Broad, non-urgent program communication. Program updates, reinforcing norms, framing upcoming work.</li>
</ul>
<p>When all three send messages to the same audience at the same time, none of them feel authoritative. More messages don't create more engagement. They create confusion.</p>

<div class="callout callout-success"><div class="callout-head">Video feedback and mobile</div><div class="callout-text">Participants can submit feedback through Centercode's mobile app for iOS and Android, including short video recordings. Video captures facial expressions, vocal tone, and screen interaction simultaneously: context that text can't replicate. If you're testing a mobile product, the mobile app is how participants should engage.</div></div>

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
        exp: 'Access in Centercode is determined by six layers. The first diagnostic step is checking Community membership, team assignment, and notice/gating conditions, not a full re-enrollment. Most access issues trace to one specific layer once you know where to look.',
      },
      {
        q: 'Delta Health is a KPI that measures:',
        opts: ['The ratio of Issues to Ideas submitted','Participant engagement based on activity completion and feedback submission','The number of resolved issues in a given phase','The average time between feedback submission and triage'],
        a: 1,
        exp: 'Delta Health is a letter-grade KPI (A+ to N/A) measuring engagement: how participants are completing activities and submitting feedback. It\'s the leading indicator of whether your program is on track while there\'s still time to adjust.',
      },
      {
        q: 'What is the correct owner for automated, behavior-driven participant nudges in Centercode?',
        opts: ['Project email, sent manually by the test manager','Community email on a weekly schedule','Ted, using behavioral profiles built for each participant','A notice chain configured by the community admin'],
        a: 2,
        exp: 'Ted owns automated, behavior-driven communication. He monitors individual participant activity and responds based on behavioral profiles. If the system already knows the condition (three days without activity, just submitted fifth piece of feedback), Ted should send the message, not a manual email.',
      },
      {
        q: 'What distinguishes a Community from a Project in Centercode?',
        opts: ['Communities are for paying customers; projects are for free-tier accounts','A Community is your persistent member pool that exists across programs; a Project is a time-bound test that draws from it','Communities are public-facing; projects are internal-only','A Community holds feedback; a Project holds members'],
        a: 1,
        exp: 'Your Community is persistent infrastructure: member profiles, recruiting history, engagement scores. It outlasts any single test. Projects are time-bound execution instances that draw participants from your Community. Build the Community well and each Project starts with an advantage.',
      },
      {
        q: 'A participant submits an organic piece of feedback about a feature not covered in any assigned activity. This feedback is:',
        opts: ['Invalid—it falls outside the defined testing scope and should be archived','Valuable—organic feedback surfaces issues you didn\'t know to ask about','Less reliable than activity-driven feedback and should be scored lower','A sign that your activities aren\'t comprehensive enough'],
        a: 1,
        exp: 'Organic feedback (submitted by participants without being prompted by an activity) is one of the most valuable types of input. It surfaces issues, ideas, and praise that no amount of structured activities would have uncovered. Good programs treat it as signal, not noise.',
      },
    ],
    testOut: [
      {
        q: 'Your Delta Impact score is 12%. This means:',
        opts: ['Only 12% of participants engaged with the program','12% of feedback has been triaged and resolved','The product\'s Delta Success score improved by 12% as a result of resolved issues and implemented ideas','12% of activities were completed on time'],
        a: 2,
        exp: 'Delta Impact is the percentage improvement in Delta Success attributable to resolved issues and implemented ideas. A 12% Delta Impact means the product measurably improved because of what your program surfaced. That\'s the ROI number worth showing an executive.',
      },
      {
        q: 'Ted sends a reminder to a participant who hasn\'t logged an activity in four days. The next day, an admin also sends a manual project email reminding the same participants to complete activities. The likely outcome is:',
        opts: ['Higher completion rates—two reminders reinforce urgency','No change—participants don\'t notice or care about message source','Confusion and eroded message authority—when everything is urgent, nothing is','Participants will complete activities faster because they received two touchpoints'],
        a: 2,
        exp: 'Communication authority erodes when multiple sources send overlapping messages. Participants stop trusting that any individual message is important. The rule is clear ownership: if Ted already handled it, let Ted handle it. Manual overrides undermine the automation they\'re supposed to support.',
      },
      {
        q: 'An executive asks "how do I know if the program is working right now?" The single best answer in Centercode is:',
        opts: ['Export the feedback CSV and summarize it in a presentation','Show the project Dashboard—Delta Health, feedback velocity, and top-scored items update in real time','Run a weekly community email with participation stats','Ask the test manager for a verbal update'],
        a: 1,
        exp: 'The project Dashboard is designed exactly for this: real-time program health across the metrics that matter. Delta Health surfaces engagement trends. Feedback velocity shows whether signal is flowing. Top-scored items show what needs attention. No export required.',
      },
      {
        q: 'A new test manager joins mid-program and can\'t find documentation explaining why certain team access rules are configured the way they are. According to the platform\'s design intent, this knowledge should be:',
        opts: ['Stored in a shared folder outside Centercode','Memorized by whoever runs the program','Encoded in platform templates and configurations so it survives personnel changes','Documented in meeting notes from the initial setup session'],
        a: 2,
        exp: 'When access rules, template logic, and configuration decisions live only in someone\'s memory, the program is fragile. Centercode\'s design intent is to encode decisions into the platform structure itself (templates, access layers, notices) so the program runs correctly regardless of who\'s managing it.',
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
    icon: '👥',
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

<div class="callout callout-info"><div class="callout-head">The tester energy pool</div><div class="callout-text">Every participant has a limited pool of attention and goodwill. Each ask you make (activity, survey, reminder) draws from it. The job of good program design is to spend that pool on the asks that matter most, not to exhaust it on overhead.</div></div>

<h3>Betabound and the Tester Network</h3>
<p>If you don't have an existing community, Centercode's Betabound network gives you access to around 300,000 deeply profiled, opt-in members. You can filter by dozens of technographic, demographic, and behavioral attributes to find exactly the profile you need, without building that audience from scratch.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Low signal is almost always a fit problem, not a volume problem</li>
  <li>Define your ideal participant profile before recruiting anyone</li>
  <li>Centercode's technographic profiles capture device and software environments</li>
  <li>Betabound provides 300,000+ profiled members for programs that need external participants</li>
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
<p>Most programs for pre-release products require participants to sign an NDA before accessing anything. Centercode handles this through <em>Notice Chains</em>: controlled sequences of pages and agreements that participants must complete before accessing program resources.</p>
<p>You upload the agreement, require digital signature, and the platform gates access until it's signed. Centercode logs the timestamp and agreement version automatically. You get a compliance audit trail without manually chasing signatures or tracking spreadsheets.</p>

<h3>Participant Profiles Build Over Time</h3>
<p>Every member in your Community has a profile that accumulates across programs: technographics, demographics, engagement scores, feedback quality ratings, and participation history. Those profiles are what make segmentation possible.</p>
<p>Segmentation examples that save real time:</p>
<ul>
  <li>Send an activity only to participants running iOS 17+ on iPhone 15 hardware</li>
  <li>Invite your top-25 highest-engagement members into an advisory cohort</li>
  <li>Target a follow-up survey only at participants who submitted issues about a specific feature</li>
</ul>

<div class="callout callout-success"><div class="callout-head">Incentives without payment</div><div class="callout-text">Centercode's approach is deliberate: don't pay participants directly. Direct payment attracts people motivated by money, not by the product. That produces biased, lower-quality feedback. Instead, distribute product keys, gift codes, hardware, or early access through Centercode's Distributed Values feature. It rewards participation without buying it.</div></div>

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
        opts: ['How do we write a more compelling recruitment email?','What happened to the other 83%—and which of the five root causes explains their non-response?','How many more people do we need to invite next time?','Should we lower the screening requirements to increase the response rate?'],
        a: 1,
        exp: 'Low response rate is a diagnostic signal. Before optimizing the email or expanding the invite list, diagnose the actual cause: relevance, value, timing, stability, or trust. Each one requires a different fix. Adding more invites to an unfixed problem just gets you more non-responses.',
      },
      {
        q: 'You need 60 active participants for your program. How many should you recruit?',
        opts: ['Exactly 60—over-recruiting creates unnecessary overhead','45—screen more carefully to reduce drop-off','75–78—accounting for 20–30% drop-off between acceptance and active participation','120—double the target to guarantee coverage'],
        a: 2,
        exp: 'Expect 20–30% drop-off between acceptance and active participation. For 60 active participants, recruit 75–78. Centercode\'s waitlist feature lets you activate additional members mid-program if early enrollees don\'t engage, so the buffer doesn\'t go to waste.',
      },
      {
        q: 'Why does Centercode recommend against paying participants directly?',
        opts: ['It\'s legally complicated in most jurisdictions','Direct payment attracts people motivated by money rather than the product, producing biased and lower-quality feedback','It creates tax liability for participants','It reduces community retention across programs'],
        a: 1,
        exp: 'Direct payment changes who shows up. Participants motivated by compensation give you what they think you want to hear, not what they actually experience. Centercode\'s approach uses Distributed Values (product access, gift codes, hardware) to reward participation without buying false positives.',
      },
      {
        q: 'A participant in your community accepted a program invitation 10 days ago but hasn\'t signed the NDA or accessed the program. In Centercode, access is:',
        opts: ['Granted automatically after 7 days regardless of NDA status','Blocked by the Notice Chain until the agreement is signed, and the platform logs the gap automatically','Granted for read-only access until the NDA is completed','Dependent on whether the admin manually reviews the case'],
        a: 1,
        exp: 'Notice Chains gate program access behind agreement completion. Participants can\'t proceed without signing. Centercode logs timestamps and agreement versions automatically, creating the compliance record you need without manual tracking.',
      },
      {
        q: 'You want to target a follow-up survey only at participants who reported issues with a specific feature last week. The Centercode feature that enables this is:',
        opts: ['A new recruitment campaign filtered by response history','Community segmentation using behavioral and feedback data stored in member profiles','A project email sent manually to the full participant list','A notice chain that shows the survey only to participants in a specific team'],
        a: 1,
        exp: 'Member profiles accumulate behavioral and feedback data over time. Community segmentation uses that data to target specific subgroups (like participants who submitted issues about a feature) without creating a new program or broadcasting to everyone.',
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
        q: 'You\'re building a community for a new enterprise SaaS product. You need participants who use Salesforce daily, run Windows 11, and work in financial services. The fastest path to 50 qualified participants is:',
        opts: ['Post to LinkedIn and accept the first 50 people who respond','Use Betabound to filter for members matching the technographic and demographic profile you need','Run an internal employee pilot first, then expand externally','Ask your sales team for a list of existing customers who fit the profile'],
        a: 1,
        exp: 'Betabound\'s 300,000+ profiled members can be filtered by technographic (software in use, hardware), demographic, and behavioral attributes. For a specific enterprise profile, Betabound delivers pre-qualified participants faster than any list-building campaign.',
      },
      {
        q: 'Six months into a continuous program, your Delta Health has dropped from B+ to C despite no changes to activities or participant count. The most likely explanation is:',
        opts: ['The product got worse and participants are disengaging because of quality issues','Participant energy pools are depleted—they\'ve been over-asked across too many programs','The Delta Health calculation methodology changed in a platform update','Your Jira integration isn\'t syncing status updates back to participants'],
        a: 1,
        exp: 'In a continuous program, gradual Delta Health decline without structural changes almost always signals participant fatigue. Every ask draws from a finite energy pool. If the program is making too many requests without delivering visible value back, engagement erodes across the full community.',
      },
      {
        q: 'A team member suggests: "Let\'s just invite everyone in the community to every program—that way we don\'t miss anyone." The correct response is:',
        opts: ['Agree—broad invites maximize potential participation','Agree, but limit it to members who haven\'t participated recently','Decline—untargeted invites exhaust community trust, drive down response rates, and make future recruiting harder','Decline only if the community has fewer than 500 members'],
        a: 2,
        exp: 'Untargeted invites spend community trust without delivering value. Members who receive irrelevant invites become less likely to respond to relevant ones. Recruiting as a system means matching participants to programs where they\'ll produce useful signal, not maximizing invitation volume.',
      },
      {
        q: 'A participant with a high tester ranking hasn\'t been invited to a program in eight months. The risk is:',
        opts: ['Their profile data will expire and need to be re-collected','They\'re no longer counted in your community size metrics','Without engagement, they may disengage from the community entirely—losing one of your highest-signal participants','Their NDA may have lapsed and need to be re-signed'],
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
    icon: '💬',
    duration: '40 min',
    difficulty: 'Intermediate',
    description: 'Collect the right types of feedback, understand how the impact score actually works, and keep your feedback data clean enough to be trustworthy.',
    lessons: [
      {
        id: 'fb-1',
        title: 'What to Collect and Why',
        content: `
<h3>The FIPs Framework in Practice</h3>
<p>Every piece of feedback in a Centercode program falls into one of three types: FIPs (fixes, improvements, and promotions), represented as Issues, Ideas, and Praise. Most programs over-index on Issues and ignore the other two. That's a mistake.</p>
<ul>
  <li><strong>Issues</strong>: Problems with the product. Bugs, crashes, broken flows. These drive engineering decisions and signal what must be fixed before release.</li>
  <li><strong>Ideas</strong>: Opportunities to improve. Missing features, workflow gaps, usability friction. These inform the roadmap.</li>
  <li><strong>Praise</strong>: What works. What participants value, what delights them. This tells you what to protect when you're under pressure to ship.</li>
</ul>
<p>You can also create custom feedback types for specific data you need: journal entries, compatibility reports, hardware feedback. The default FIPs types handle most programs. Custom types handle edge cases.</p>

<h3>Structured vs. Organic</h3>
<p>Activities drive structured feedback: participants respond to specific prompts tied to features you've defined. Organic feedback is what participants submit on their own, outside any assigned activity.</p>
<p>The best programs collect both. Activities ensure coverage. Organic feedback surfaces the issues, ideas, and praise you didn't know to ask about. Don't optimize activities so tightly that you squeeze out the organic submissions.</p>

<div class="callout callout-info"><div class="callout-head">Surveys vs. feedback forms</div><div class="callout-text">Surveys and feedback forms are not the same thing. Feedback forms capture participant-initiated input anytime. Surveys are structured questionnaires you send to collect specific data at a defined point in time. Use the right tool for the job.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>FIPs = Issues (fixes), Ideas (improvements), Praise (promotions)</li>
  <li>Praise tells you what to protect. It's not a vanity metric.</li>
  <li>Activities drive structured feedback; organic submissions surface what you didn't think to ask</li>
  <li>Custom feedback types handle data needs beyond the default FIPs</li>
</ul></div>`,
      },
      {
        id: 'fb-2',
        title: 'How the Impact Score Works',
        content: `
<h3>Weight and Popularity Are Different Signals</h3>
<p>The impact score is built from two components that measure different things. Mixing them up leads to bad prioritization decisions.</p>
<p><strong>Weight</strong> reflects importance: how your team has configured feedback forms, feature priorities, team importance ratings, and whether something is marked as a blocking issue. Weight encodes strategy. It answers: how much does this kind of feedback matter to us?</p>
<p><strong>Popularity</strong> reflects prevalence: how many participants submitted the same issue, how many upvotes it has, how many comments and discussion threads it generated. Popularity answers: how widespread is this?</p>
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
<p>When you escalate a feedback item to engineering, Centercode's Jira integration creates a corresponding ticket automatically. Status updates in Jira sync back to Centercode, and participants see when their reported issue is being worked on, without the test manager manually updating anything.</p>
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
    ],
    quiz: [
      {
        q: 'A participant submits: "The new onboarding flow was the clearest I\'ve ever seen—I didn\'t get confused once." In the FIPs framework, this is:',
        opts: ['An Idea—the participant is suggesting the flow should always be this clear','Not useful feedback—positive submissions don\'t require action','Praise—it promotes a strength that should be protected when shipping decisions create pressure','An Issue—it implies previous flows were confusing'],
        a: 2,
        exp: 'Praise maps to the P in FIPs (promotions). It tells you what\'s working and what to protect. When the team is under pressure to cut scope, praise data is what keeps strong experiences from being accidentally broken in the next release.',
      },
      {
        q: 'Thirty-two participants independently submit issues about the same login flow problem, worded differently. After processing in Centercode, this should appear as:',
        opts: ['32 separate items to triage individually','One consolidated item with 32 popularity votes and a high impact score','32 items automatically moved to Jira for engineering to prioritize','The issue archived as a duplicate to keep the feedback list manageable'],
        a: 1,
        exp: 'Duplicates measure popularity. They stay in Centercode as separate submissions, each contributing to the popularity component of the impact score. The result is one high-signal item that accurately represents how widespread the problem is, not 32 buried tickets.',
      },
      {
        q: 'Your product team lead disagrees with the impact score ranking on a particular issue. The correct response is:',
        opts: ['Adjust the weight configuration until the ranking matches their expectation','Accept their assessment—business context overrides platform data','Use the disagreement to surface missing context: why does the score differ from their expectation? Then decide','Escalate to a community admin to reconfigure the scoring algorithm'],
        a: 2,
        exp: 'Disagreement between impact score and business judgment is a signal that context is missing, not that the data is wrong. The right workflow is to review why the item ranked where it did, surface the business context the team has that the platform doesn\'t, and make a decision that incorporates both. Never tune weights to match a predetermined outcome.',
      },
      {
        q: 'When should feedback weights be configured in Centercode?',
        opts: ['After reviewing initial feedback results to ensure the weights reflect actual participant priorities','During program setup, before any feedback is submitted, to encode strategy rather than react to data','Halfway through the program, when you have enough data to calibrate accurately','In response to stakeholder feedback about which issues should be prioritized'],
        a: 1,
        exp: 'Weights encode strategy before data arrives. Setting them retroactively, or adjusting them in response to results, defeats the purpose. Reactive weight changes signal to everyone that the system can be tuned to produce desired outputs, which destroys trust in the prioritization process.',
      },
      {
        q: 'What happens to duplicate issues when a parent issue is escalated to Jira?',
        opts: ['All duplicates are automatically pushed to Jira as child tickets','Only the parent issue is pushed to Jira—duplicates stay in Centercode, which remains the system of record','Duplicates are archived in Centercode and removed from the impact score calculation','All duplicates must be manually reviewed before the parent can be escalated'],
        a: 1,
        exp: 'Jira is for execution, not discovery. Only the parent issue moves to Jira. All duplicates, votes, comments, and discussion threads stay in Centercode, the system of record for your testing data. If all the nuance still matters, the decision hasn\'t been made yet.',
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
        q: 'A single issue has a very high weight score but only two duplicate submissions. A different issue has low weight but 94 duplicates. Which should get addressed first?',
        opts: ['The high-weight issue—importance matters more than prevalence','The high-popularity issue—more participants affected means higher real-world impact','It depends: high-weight issues signal strategic importance; high-popularity issues signal widespread experience. Review both with business context before deciding.','Neither—both need more signal before a decision is warranted'],
        a: 2,
        exp: 'This is exactly the conversation the impact score is designed to start. Weight signals strategic importance; popularity signals how widespread the experience is. A high-weight issue with two reports might be a critical edge case. A low-weight issue with 94 reports might be a usability problem that will show up in app store reviews. Apply business context before deciding.',
      },
      {
        q: 'Feedback volume is high but your product team says they still don\'t know what to prioritize. This signals:',
        opts: ['More feedback types should be added to the program','The team needs more training on reading Centercode dashboards','The feedback is activity-compliant but not decision-aligned—activities may not be focused on the right questions','The impact score algorithm needs to be reconfigured for this product type'],
        a: 2,
        exp: 'When teams are still uncertain after collecting lots of feedback, the problem is usually that the activities were optimized for completion, not for resolving specific uncertainties. Every activity should support a decision. If data isn\'t reducing uncertainty, it\'s not the right data.',
      },
      {
        q: 'A participant\'s survey response says: "I give the onboarding a 3/5—it was fine but felt slow in spots." You want to understand where specifically. The right next step is:',
        opts: ['Send a 15-question follow-up survey covering every step of the onboarding flow','Look at the participant\'s existing feedback submissions—they may have already filed an issue or idea with specifics','Ask all participants the same follow-up question to get a representative sample','Escalate the survey result to Jira as a low-priority issue'],
        a: 1,
        exp: 'Before creating a new survey, check what the platform already has. Participants often file detailed feedback organically. A 3/5 rating with a vague comment frequently accompanies a specific issue or idea submission with full reproduction steps. Check the existing signal before spending more participant trust on another ask.',
      },
      {
        q: 'Leadership asks why the top-ranked feedback item isn\'t on the roadmap. The correct response is:',
        opts: ['Apologize and add it to the next sprint','Explain that the impact score is just one input—business context, feasibility, and timing all factor into roadmap decisions, and you can walk through the reasoning','Re-run the scoring to see if the ranking still holds before committing to a position','Reduce the item\'s weight so it no longer appears in the top 10'],
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
    icon: '📊',
    duration: '30 min',
    difficulty: 'Intermediate',
    description: 'Build reports that drive decisions, speak to three different audiences from one platform, and prove program ROI without relying on vanity metrics.',
    lessons: [
      {
        id: 'r-1',
        title: 'Reports That Drive Decisions',
        content: `
<h3>Why Reports Fail</h3>
<p>Reports fail socially before they fail analytically. The data is usually accurate. The problem is that it doesn't tell anyone what to do next. A report full of charts and statistics that leaves stakeholders asking "so what?" isn't a report. It's a document.</p>
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
  <li><strong>Delta Huddle</strong>: Phase-by-phase review showing current, prior, and next-phase data. Built for team meetings.</li>
  <li><strong>Project Overview Dashboard</strong>: Comprehensive project health summary for the test manager's daily view.</li>
  <li><strong>Feedback Impact Dashboard</strong>: Feedback broken down by phase and feature with impact scores.</li>
  <li><strong>Product Success Analysis Dashboard</strong>: A Pareto-style breakdown showing which issues drive the most impact.</li>
  <li><strong>Top Testers Dashboard</strong>: Participant contribution rankings for recognizing high-engagement members.</li>
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
  <li><strong>API</strong>: Enterprise teams can query Centercode data programmatically for BI tools, Tableau, or Power BI integrations</li>
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
        opts: ['The data wasn\'t accurate enough to drive decisions','It lacked a clear decision orientation—it was informational, not operational','The charts were too complex for the audience','The program didn\'t produce enough signal to make a case'],
        a: 1,
        exp: 'Reports that don\'t answer "do we act, where do we act, or when?" leave stakeholders with information but no direction. Decision-first reporting identifies the decision first, then builds the report around it. Accuracy is table stakes. Interpretation is the value.',
      },
      {
        q: 'An executive asks "Is our program healthy?" The best Centercode answer is:',
        opts: ['Export the full feedback dataset and walk through it item by item','Reference the Delta Health trend over the past four weeks—stability and direction matter more to an executive than single-week numbers','Show the total number of feedback submissions as evidence of active participation','Send a detailed report covering every activity completion rate and feedback category'],
        a: 1,
        exp: 'Executives care about trends, progress, and risk, not raw counts or operational detail. Delta Health trend over time tells a story: is engagement stable, improving, or declining? That\'s the health answer an executive can act on. A single-week screenshot misses the trend.',
      },
      {
        q: 'Which of these is a leading indicator (one that tells you where the program is heading while you can still act)?',
        opts: ['Total feedback submitted at program close','Week-over-week participation rate trend during the program','Number of Jira tickets created from escalated issues','Final Delta Success score at program wrap-up'],
        a: 1,
        exp: 'Week-over-week participation rate is a leading indicator. If it drops in week three of an eight-week program, you have five weeks to recover. Total feedback at close, Delta Success at wrap-up, and Jira ticket count are all lagging indicators. They confirm what already happened.',
      },
      {
        q: 'Your product team argues that showing individual issue fixes to executive leadership isn\'t worth the meeting time. The right framing for that audience is:',
        opts: ['Push back—executives should know what specific issues were fixed','Present a trend view: Delta Success change over the program, features redirected based on data, and issues resolved before release with estimated post-launch fix cost','Send them the same detailed report the product team received','Schedule a separate meeting specifically to walk through the issue list'],
        a: 1,
        exp: 'Executives need confidence, not detail. Delta Success movement tells them whether the product improved. Features redirected based on data shows decision quality. Issues resolved pre-release with cost context gives them the ROI argument. None of that requires a line-item walkthrough.',
      },
      {
        q: 'A participant notices that an issue they reported three weeks ago still shows "Open" with no comment. What is the most likely effect?',
        opts: ['No effect—participants don\'t typically track the status of their own submissions','Reduced trust in the program, which will lower engagement in this and future programs','Increased urgency—they\'ll submit more feedback to escalate the issue','They\'ll contact support directly, bypassing the feedback workflow'],
        a: 1,
        exp: 'When participants don\'t see their feedback acknowledged (even with a "not now" status) they stop believing it matters. Trust erodes quietly. Closing the loop with brief status updates, even for items that won\'t be addressed, is what keeps participants engaged across multiple programs.',
      },
    ],
    testOut: [
      {
        q: 'Your program ran for eight weeks and produced 1,200 feedback items. You have 30 minutes with leadership. What do you present?',
        opts: ['Walk through the top 20 issues by impact score, one by one','A synthesis: Delta Success trajectory, top five resolved issues with pre/post comparison, three features the team redirected based on data, and a confidence statement about launch readiness—all in under 10 slides','Export the full feedback dataset and let leadership ask questions','Show participation rates and activity completion across all eight weeks'],
        a: 1,
        exp: 'Year-end and program-close reports are synthesis, not accumulation. Leadership needs to know what changed, whether the program worked, and whether they should feel confident. Delta Success trajectory + resolved issues + feature redirects + launch confidence statement = a 30-minute conversation that ends with a decision, not more questions.',
      },
      {
        q: 'Your Delta Success score dropped from 72 to 58 in week five. Before acting, you should:',
        opts: ['Immediately escalate the top 10 issues to Jira','Check whether the drop correlates with a new phase that introduced untested, harder features—a drop during a challenging phase can be expected','Add more participants to generate more positive feedback and recover the score','Report the drop to leadership immediately and suspend the program'],
        a: 1,
        exp: 'Delta Success scores drop when new features with known rough edges are introduced. A drop during a phase testing pre-release functionality is expected and healthy. It signals the testing is working. The right response is context: why did it drop, is the direction of change consistent with the testing scope, and what\'s the plan?',
      },
      {
        q: 'Engineering asks for a report showing which issues to fix this sprint. The support team asks for a report showing which issues are generating repeat participant contacts. Which is correct?',
        opts: ['Both teams should receive the same report—one source of truth prevents conflicting narratives','Build one shared report and let each team filter it themselves','Engineering gets an impact-score-ranked feature view; support gets a frequency and pattern view—same underlying data, different lenses','Engineering\'s request takes priority; support can review the engineering report for relevant information'],
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
        opts: ['Total feedback submissions: 847 items across 12 weeks','The number of participants who completed all assigned activities','High-severity issues resolved pre-release multiplied by your organization\'s average post-launch fix cost—typically 4–100x the pre-launch cost','Program utilization: percentage of available features covered by testing activities'],
        a: 2,
        exp: 'CFOs respond to numbers with financial meaning. Issues resolved pre-release × average post-launch fix cost is a concrete, defensible ROI argument. It connects your program directly to cost avoidance. It\'s the language budget decisions are made in.',
      },
    ],
  },

  /* =====================================================
     MODULE 6 — PLATFORM GOVERNANCE & OPERATIONS
     ===================================================== */
  governance: {
    id: 'governance',
    title: 'Platform Governance and Operations',
    icon: '⚙️',
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
        opts: ['The platform has a bug in team inheritance logic','The project manager had permissions they shouldn\'t have had—but also had no clear ownership of the downstream effects of changing shared infrastructure','The community admin should have been monitoring changes in real time','The team configuration was too complex and needed to be simplified'],
        a: 1,
        exp: 'This is the ownership-vs.-permission failure mode. The PM had the permission to make the change. But shared team configurations are community-level infrastructure: the community admin\'s ownership domain. The fix is not just removing the permission; it\'s clarifying the ownership model so everyone understands what\'s shared and what\'s project-specific.',
      },
      {
        q: '"What only works because you remember why it exists?" is a diagnostic question that surfaces:',
        opts: ['Gaps in participant onboarding documentation','Structural debt: configurations and exceptions that require individual memory rather than platform structure to function','Underperforming participants who need additional engagement','Reports that need to be redesigned for clarity'],
        a: 1,
        exp: 'Structural debt is the cost of decisions that were never cleaned up. Teams that answer this question honestly typically discover multiple configurations (access rules, templates, reporting setups) that would break if the person who set them up left tomorrow. That\'s the debt worth addressing.',
      },
      {
        q: 'Your program has 85% activity completion but stakeholders are still unclear on what to prioritize after reviewing results. The most likely diagnosis is:',
        opts: ['The impact score algorithm needs to be recalibrated for your product type','Activities were optimized for completion, not for resolving specific decisions—the data collected doesn\'t reduce uncertainty','Not enough feedback was collected; 85% completion should have generated more actionable signal','The reporting format doesn\'t display activity data clearly enough for stakeholders'],
        a: 1,
        exp: 'This is the "compliance without insight" warning sign. High completion rates feel like success. But if data doesn\'t help teams make decisions, the activities were measuring the wrong things. Every activity should be tied to a decision: what uncertainty does this resolve? If you can\'t answer that, cut the activity.',
      },
      {
        q: 'An admin sends a manual reminder email to all participants two days after Ted sent an automated engagement nudge to the same group. The expected effect is:',
        opts: ['Higher completion rates—two reminders reinforce urgency','No change—participants don\'t distinguish between manual and automated messages','Eroded message authority—when everything is urgent, participants start ignoring all communication','Participants feel supported and are more likely to engage with future programs'],
        a: 2,
        exp: 'Every extra message weakens the authority of the next one. When Ted and the admin are both sending messages to the same audience at the same time, participants stop treating either as authoritative. Let Ted do his job. Manual overrides should be reserved for situational context Ted can\'t infer, not as a backup to automation.',
      },
      {
        q: 'Which of these is a sign of a mature, durable Centercode program, not just one that\'s currently running well?',
        opts: ['One dedicated test manager who knows the platform deeply and handles all configurations','A new team member can set up a standard project in under two hours using templates, without needing to ask anyone how things are configured','Very low admin turnover—the same person has managed the program for three-plus years','A complete library of reports that covers every stakeholder request that has ever come up'],
        a: 1,
        exp: 'Durability is the test. If a new team member can orient themselves using templates and platform structure alone (without tribal knowledge or a 90-minute onboarding call) the program is mature. If they can\'t, there\'s structural work still to do.',
      },
    ],
    testOut: [
      {
        q: 'You\'re told: "Our delta testing program works great, but when Sarah is out it always falls apart." The correct first action is:',
        opts: ['Hire a backup to cover Sarah\'s responsibilities during absences','Document Sarah\'s processes in a shared folder so others can reference them','Audit what lives in Sarah\'s head vs. what\'s encoded in the platform—templates, access rules, automated workflows—and move the former into the latter','Train other team members to handle Sarah\'s tasks so the dependency is distributed'],
        a: 2,
        exp: 'Documentation helps, but it doesn\'t solve the problem. The fix is moving knowledge from heads into platform structure: templates that encode process, access rules that don\'t need explanation, automated workflows that run without intervention. That\'s the difference between a program that survives a personnel change and one that stalls.',
      },
      {
        q: 'During an annual audit, you find eight teams created two years ago for a program that no longer runs. They still grant access to 23 people. The correct action is:',
        opts: ['Leave them—removing old teams might break something unexpected','Archive them after confirming no active projects depend on them, and revoke access for the 23 members who no longer need it','Ask each of the 23 members individually whether they still need access','Leave them until the next major platform update, when a clean slate is easier'],
        a: 1,
        exp: 'Structural debt cleanup is program leadership work, not admin maintenance. Confirming dependencies, archiving unused teams, and revoking unneeded access removes debt that would otherwise confuse new admins and create security exposure. Do it now. It gets more expensive to carry forward, not less.',
      },
      {
        q: 'A project manager asks you to give them admin-level access "just to move faster." The correct response is:',
        opts: ['Grant it—speed matters more than structural purity','Grant it temporarily, with a review date to reassess','Ask what they can\'t currently do with project-level permissions. If the guardrails are blocking normal work, adjust the guardrails—don\'t escalate to admin access','Decline—admin access is never appropriate for project managers'],
        a: 2,
        exp: 'If a PM can\'t do normal project work without admin access, the access model is misconfigured. The right fix is adjusting the guardrails to allow what they legitimately need, not elevating them to admin status, which gives them infrastructure-level permissions that affect every project, not just theirs.',
      },
      {
        q: 'You discover that your program\'s high engagement rates for the past six months have been driven primarily by weekly manual reminders from the test manager, not by Ted\'s automated engagement. The risk this creates is:',
        opts: ['None—high engagement is the goal regardless of how it\'s achieved','The engagement is fragile: remove the manual reminders and rates will drop significantly. The program depends on heroics, not structure','The test manager is duplicating Ted\'s work, which will eventually cause message conflicts','Ted\'s behavioral profiles are being overridden, which reduces his long-term effectiveness'],
        a: 1,
        exp: 'Engagement driven by pressure isn\'t stable engagement. When the test manager goes on vacation, takes a new role, or simply burns out, the rates collapse, and the program was never actually healthy. The fix is diagnosing why Ted\'s automation wasn\'t sufficient and building the missing structure, not adding more manual effort.',
      },
      {
        q: 'A team is preparing to scale their Centercode program from two projects per year to eight. The first thing to address before scaling is:',
        opts: ['Recruiting additional test managers for each new project','Increasing the community size to match the higher program volume','Ensuring templates, access models, and reporting standards are documented and consistent before the first new project launches—scaling inconsistent programs produces consistent chaos','Upgrading to the Team Edition to support the higher participant volume'],
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
    icon: '🤖',
    duration: '35 min',
    difficulty: 'Intermediate',
    description: 'Go beyond Ted\'s engagement engine: AI-generated test plans, surveys, and feedback analysis. Then add Macro Actions, Dynamic Tags, and Regression Testing to your toolkit.',
    lessons: [
      {
        id: 'at-1',
        title: 'What Ted Actually Does',
        content: `
<h3>Ted Is Not Just a Reminder System</h3>
<p>Most teams use Ted for one thing: sending automated nudges to participants who haven't completed activities. That's the least of what he does.</p>
<p>Ted is Centercode's AI engagement engine, but "engagement" covers a lot of ground. He builds behavioral profiles per participant, optimizes communication timing and channel, and surfaces patterns across the program that no individual reviewer would catch manually.</p>

<h3>Ted's AI Capabilities</h3>
<p>Beyond communication, Ted brings AI to four areas of program work:</p>
<ul>
  <li><strong>Test plan generation:</strong> Based on your product type, phase goals, and feature set, Ted generates a structured test plan with activities and acceptance criteria as a starting point. You refine; Ted drafts.</li>
  <li><strong>Survey generation:</strong> Describe what decision the survey needs to support and Ted builds the question set. Questions are worded to avoid leading phrasing and optimized for completion rates.</li>
  <li><strong>Feedback analysis and summarization:</strong> Ted reads across hundreds of feedback items and surfaces patterns: recurring themes, clusters of related issues, unusually high-signal items that might be buried by volume. The summary is a starting point for human review, not a replacement for it.</li>
  <li><strong>Engagement recommendations:</strong> When Delta Health trends down, Ted identifies which participants are at risk and why, and recommends specific intervention types based on their behavioral profiles.</li>
</ul>

<div class="callout callout-info"><div class="callout-head">Ted branding</div><div class="callout-text">Ted can be white-labeled for corporate identity alignment. If your organization's testing program has its own name and brand, Ted's communications can carry that identity instead of the Centercode defaults. Participants interact with your brand, not Centercode's.</div></div>

<h3>What Ted Doesn't Replace</h3>
<p>Ted's AI outputs are starting points. A generated test plan needs a human to validate it against actual product strategy. A generated survey needs someone who knows what decision they're actually trying to make. AI-summarized feedback needs a reviewer who has context the platform doesn't.</p>
<p>The right mental model: Ted eliminates the blank page problem and cuts setup time. You still own the judgment calls.</p>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Ted generates test plans, surveys, and feedback summaries, not just reminders</li>
  <li>AI outputs are starting points for human review, not finished work</li>
  <li>Ted can be white-labeled to match your organization's program branding</li>
  <li>Engagement recommendations identify at-risk participants before they go quiet</li>
</ul></div>`,
      },
      {
        id: 'at-2',
        title: 'Macro Actions and Dynamic Tags',
        content: `
<h3>Macros: Automation at Scale</h3>
<p>A Macro is a saved set of actions that can be triggered manually or on a schedule to update feedback, send communications, adjust user data, or execute multiple steps in sequence. Think of it as a script that runs inside Centercode without any coding required.</p>
<p>Common Macro use cases:</p>
<ul>
  <li><strong>Bulk feedback updates:</strong> Close all open issues marked as "won't fix" at phase end with a single trigger</li>
  <li><strong>Scheduled notifications:</strong> Send a phase-end thank-you to all participants who submitted at least three pieces of feedback</li>
  <li><strong>Data cleanup:</strong> Archive inactive participants who haven't logged in within 30 days</li>
  <li><strong>Status transitions:</strong> Move all feedback in a specific feature category from Triage to In Review when engineering begins work</li>
</ul>
<p>Macros run on a schedule or on demand. They reduce repetitive admin work without requiring anyone to remember to do it manually. That's a meaningful difference from heroics: the action runs whether or not anyone remembers it exists.</p>

<h3>Dynamic Tags: Personalized Content Without Manual Work</h3>
<p>A Dynamic Tag is a placeholder that pulls live data into text content: emails, reports, activity instructions, or dashboard elements. When the communication goes out, the tag resolves to the actual value for that specific participant, feedback item, or project.</p>
<p>Examples of Dynamic Tags in practice:</p>
<ul>
  <li>An activity instruction that says "You're currently ranked {{participant.rank}} in this program" — each participant sees their actual rank</li>
  <li>A feedback status email that includes "{{issue.title}} was updated to {{issue.status}} by {{issue.assignee}}" — no manual drafting per item</li>
  <li>A report header that populates "{{project.name}}: Week {{project.week}} of {{project.duration}}" automatically</li>
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

<div class="callout callout-info"><div class="callout-head">Release API</div><div class="callout-text">The Release API automates build distribution. When your CI/CD pipeline produces a new build, it triggers Centercode to notify participants, update the active build version, and route version-specific activities automatically. No one has to manually announce a new build to the testing community.</div></div>

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
        q: 'A participant in your hardware beta receives an email: "Your {{device.model}} was shipped via {{shipment.carrier}} on {{shipment.date}}." This email uses:',
        opts: ['Custom HTML templates written by the admin for each participant','Dynamic Tags that pull live shipment data into the template at send time','A Macro triggered when the shipping label is generated','A custom feedback type linked to the logistics workflow'],
        a: 1,
        exp: 'Dynamic Tags resolve to actual values (device model, carrier, shipping date) at the moment the email sends, without the admin writing a separate email for each participant. One template delivers personalized content to everyone.',
      },
      {
        q: 'Your engineering team ships a new build that fixes the top three issues from last week. Before participants test the new build, you want them to re-validate those specific features. This is:',
        opts: ['A new project phase with fresh activities','Regression testing: re-validating previously tested features after a new build to confirm fixes held','A test-out scenario where participants can skip activities they\'ve already done','A survey targeting participants who originally reported the issues'],
        a: 1,
        exp: 'Regression testing targets previously tested features to confirm they still work after changes. Routing it to participants who tested those features before gives you reviewers who know the baseline, which makes regressions much easier to catch.',
      },
      {
        q: 'Six months into a program, no one can explain why a participant received a certain communication last month. The likely explanation is:',
        opts: ['Ted\'s behavioral profile sent it based on inactivity detection','A Macro triggered on a schedule that no one currently remembers setting up','The participant sent a direct request through the feedback form','A Dynamic Tag resolved incorrectly due to missing data'],
        a: 1,
        exp: 'Scheduled Macros run whether or not anyone remembers them. This is a governance concern: Macros should be documented alongside the rationale for their configuration, reviewed during annual audits, and owned by a named person. A Macro that runs without anyone knowing why is structural debt.',
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
        q: 'Ted generates a test plan for your program. You review it and find 80% of the activities are well-suited to your goals but 20% are off-target. The correct response is:',
        opts: ['Accept the full plan: Ted\'s AI has context you don\'t','Reject the full plan: if 20% is wrong, the whole thing is unreliable','Use the 80% as a foundation, revise the 20%, and treat the output as a starting point, not a finished deliverable','Re-run Ted\'s generation with a more detailed prompt until the full plan is right'],
        a: 2,
        exp: 'Ted\'s AI outputs eliminate the blank page problem. They\'re designed to accelerate human judgment, not replace it. An 80% useful draft is a valuable head start. The 20% revision is where your program-specific knowledge adds value that the AI can\'t infer.',
      },
      {
        q: 'You want to send a weekly engagement summary to each participant showing their personal stats: feedback submitted, activities completed, and current rank. The correct approach is:',
        opts: ['Export participant data weekly and send manual emails','Build a Dynamic Tag template that pulls each participant\'s live stats and schedule it as a recurring communication','Create a survey that asks participants to self-report their own stats','Use project email to broadcast aggregate stats to the full group'],
        a: 1,
        exp: 'Dynamic Tags resolve per recipient at send time. One template with {{participant.feedbackCount}}, {{participant.activitiesCompleted}}, and {{participant.rank}} produces a personalized summary for every participant in a single scheduled send. Manual exports create lag and introduce errors.',
      },
      {
        q: 'Your Release API triggers when a new build is published to TestFlight. What does Centercode do automatically as a result?',
        opts: ['Creates a new project phase and migrates all open feedback forward','Notifies participants of the new build, updates the active build version, and routes version-specific activities, without anyone manually announcing the build','Archives all feedback from the previous build and resets participant activity counts','Runs Ted\'s feedback analysis across the prior build\'s submissions and surfaces a summary'],
        a: 1,
        exp: 'The Release API closes the gap between your build pipeline and your testing program. When CI/CD publishes, Centercode responds: participants are notified, the version context is updated, and the right activities activate. The test manager doesn\'t have to manually bridge engineering and testing.',
      },
      {
        q: 'An admin sets up a Macro to archive all participants inactive for 60+ days. It runs on a Sunday night schedule. On Monday morning, the test manager discovers 40 participants were archived, including several who had been intentionally inactive during a device replacement period. The problem is:',
        opts: ['The Macro ran outside business hours and should be scheduled for weekdays only','The Macro lacked a filter exception for participants in a known hold status. Bulk automation needs guardrails built in before it runs.','Ted should have flagged those participants before the Macro ran','The archive threshold of 60 days was too aggressive'],
        a: 1,
        exp: 'Macros execute exactly what they\'re configured to do, on every record that matches the filter, without judgment. If there are exceptions (participants on hold, hardware replacement periods, onboarding delays), those exceptions need to be encoded as filter conditions before the Macro runs. Broad automation without guardrails produces broad mistakes.',
      },
      {
        q: 'Ted\'s feedback summary for a 300-item phase flags a cluster of issues around onboarding that don\'t appear in the top 10 by impact score. You should:',
        opts: ['Trust the impact score: if it\'s not in the top 10, it doesn\'t warrant attention','Dismiss the cluster: AI summaries sometimes surface noise that scored items filter out correctly','Investigate the cluster: Ted may have identified a pattern that impact scoring (which weights individual items) doesn\'t surface well at the aggregate level','Re-configure the impact score weighting to make the cluster rank higher'],
        a: 2,
        exp: 'Ted\'s feedback analysis and the impact score measure different things. Impact score ranks individual items by importance and prevalence. Ted\'s summary looks for patterns across items. A cluster of related low-weight issues might indicate a systemic problem that no single submission captures well. Both signals are worth reading.',
      },
    ],
  },

  /* =====================================================
     MODULE 8 — INTEGRATIONS AND DATA FLOW
     ===================================================== */
  integrations: {
    id: 'integrations',
    title: 'Integrations and Data Flow',
    icon: '🔗',
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
  <li><strong>Salesforce and HubSpot:</strong> Link tester activity and feedback to customer records. Feedback from a strategic account carries different weight when the reviewer can see it came from that account.</li>
  <li><strong>Tableau and Power BI:</strong> Export Centercode data into your existing BI infrastructure for cross-program analysis, longitudinal reporting, and custom executive visualizations that go beyond built-in dashboards.</li>
  <li><strong>Webhooks:</strong> Send event-driven data to any external system when something happens in Centercode: new feedback submitted, status changed, participant enrolled. The receiving system decides what to do with it.</li>
  <li><strong>Nutanix Frame:</strong> Embed software access inside Centercode so participants can test without installing anything locally. Useful for enterprise software with complex setup requirements.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Centercode integrates with Jira, Slack, TestFlight, Google Play, Salesforce, HubSpot, Tableau, Power BI, and Webhooks</li>
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
  <li><strong>Data Packages:</strong> Custom datasets built from Centercode data, made available for third-party consumption on a schedule or on demand</li>
  <li><strong>External Listeners:</strong> Allow external systems to trigger Centercode automation or store data in Centercode from outside</li>
  <li><strong>Record Lookups:</strong> Authorized external systems can query Centercode for specific records without needing full platform access</li>
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
        q: 'A participant enrolls in your iOS beta program through Centercode. Where should they expect to receive the build?',
        opts: ['Directly through Centercode\'s mobile app','Via TestFlight, with Centercode managing the enrollment and build update notifications','Through a direct download link emailed by the test manager after enrollment','Through Apple\'s standard App Store review process'],
        a: 1,
        exp: 'TestFlight integration routes participants from Centercode enrollment to the correct TestFlight group. When a new build publishes, Centercode notifies participants and directs them to TestFlight. Participant management stays in Centercode; build delivery happens through TestFlight.',
      },
      {
        q: 'Engineering wants to see a summary of tester feedback in Jira without logging into Centercode. The correct approach is:',
        opts: ['Give engineering team members read-only Centercode access','Set up a Webhook that posts a feedback digest to Jira daily','Export feedback manually each morning and paste it into Jira comments','Use a Data Package to make a curated feedback dataset available for Jira to consume on a schedule'],
        a: 3,
        exp: 'Data Packages make Centercode data available for external consumption without giving third parties full platform access. Engineering gets the data in the format they need, on the schedule you set, without creating new Centercode accounts or disrupting your access model.',
      },
      {
        q: 'Your team wants to be notified in Slack whenever a participant submits feedback rated 4 or 5 stars on the overall product experience question. The right integration for this is:',
        opts: ['A Macro that checks feedback ratings and sends project emails','A Webhook that triggers on feedback submission and posts to Slack when the rating condition is met','A daily Slack digest generated by manual export from Centercode','A Dynamic Tag in a scheduled Slack notification template'],
        a: 1,
        exp: 'Webhooks are event-driven: something happens in Centercode, a payload goes to an external system, and that system acts on it. A Webhook listening for high-rated feedback submissions and posting to Slack is exactly the use case they\'re built for. No manual exports, no delays.',
      },
      {
        q: 'A hardware participant confirms receipt of their device on Tuesday. On Wednesday, they try to submit hardware-specific feedback but the form isn\'t available. This is most likely:',
        opts: ['A platform bug that should be reported to Centercode support','Product verification working correctly: the feedback gate hadn\'t updated yet after Tuesday\'s confirmation','An access layer issue unrelated to product verification','A notice chain blocking access until a second confirmation is required'],
        a: 1,
        exp: 'Product verification gates hardware-specific feedback until receipt is confirmed. If the gate is still blocking after confirmation, the most likely explanation is that confirmation happened but the gate update is still processing. Check whether the product verification record shows "confirmed" status in the participant\'s profile.',
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
        opts: ['A Dynamic Tag template that updates automatically when a new build is detected','A Macro scheduled to run every two weeks with build announcement content','The Release API, which triggers Centercode to notify participants, update the active build version, and route version-specific activities automatically when a build publishes','A Webhook that posts the TestFlight link to Slack, where participants are expected to see it'],
        a: 2,
        exp: 'The Release API is built for exactly this: CI/CD publishes, Centercode responds. Participants are notified, build versions are updated, activities are routed. The test manager doesn\'t need to manually bridge engineering and testing for every two-week cycle. Manual announcement is heroics that the API eliminates.',
      },
      {
        q: 'Six months into a program, a stakeholder reports that the feedback count in the BI dashboard is 847 but Centercode shows 903. The most defensible first response is:',
        opts: ['Correct the BI dashboard to match Centercode','Correct Centercode to match the BI dashboard','Declare Centercode the source of truth for feedback data, identify when the BI export last ran, and reconcile the delta to understand whether the gap is a sync lag or a structural integration problem','Ask both teams to stop reporting feedback volume until the discrepancy is resolved'],
        a: 2,
        exp: 'Before fixing the number, establish which system is authoritative. Centercode is the system of record for testing data, so its count is the baseline. Then diagnose the gap: is it a sync lag (last export ran before recent submissions), a filter difference (the BI dashboard excludes a feedback type), or a structural mismatch (different definitions of "feedback")? Fix the integration, not just the number.',
      },
      {
        q: 'An engineering lead asks: "Can I see tester feedback directly in Jira without logging into Centercode?" You want to give them access without granting full platform permissions. The right solution is:',
        opts: ['Create a read-only Centercode account with project-level access for the engineering lead','Set up a Record Lookup that lets Jira query Centercode for specific feedback data on demand','Build a Webhook that mirrors all feedback to a Jira custom field in real time','Export feedback as a CSV weekly and attach it to the relevant Jira epic'],
        a: 1,
        exp: 'Record Lookups allow authorized external systems to query Centercode for specific records without requiring a Centercode account. The engineering lead can pull feedback data into Jira through an authorized query, accessing exactly what they need without being added to the platform as a user.',
      },
      {
        q: 'You\'re setting up Centercode for a physical hardware beta. When should product-verification-gated feedback types become visible to participants?',
        opts: ['Immediately upon enrollment, so participants can submit pre-receipt expectations','After the participant completes their first activity','Only after the participant confirms receipt of the physical device in Centercode','After a set number of days following the expected delivery date'],
        a: 2,
        exp: 'Product verification gates feedback types to the moment of confirmed receipt. Pre-receipt hardware feedback isn\'t trustworthy: the participant may be speculating based on documentation, not actual experience. Gating those feedback types until receipt is confirmed keeps the signal clean.',
      },
    ],
  },

  /* =====================================================
     MODULE 9 — PROGRAM MATURITY AND RECOVERY
     ===================================================== */
  maturity: {
    id: 'maturity',
    title: 'Program Maturity and Recovery',
    icon: '📈',
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
<p>Four conflict patterns appear most often when multiple teams share a Centercode community:</p>
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

<div class="callout callout-info"><div class="callout-head">Staged recovery vs. restart</div><div class="callout-text">Before ending a program and starting fresh, ask whether staged recovery is possible. A signal failure can often be recovered mid-program by restructuring the remaining activities. An engagement failure may recover with a community re-engagement campaign and revised ask volume. Full restarts discard participant trust and historical data. Recover when you can.</div></div>

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
        q: 'A participant with high tester ranking submits a Slack message to your program\'s support channel saying "my feedback never seems to matter." The most important next step is:',
        opts: ['Send them a personal apology and summary of what was done with their submissions','Check whether the loop-closing process has been working: have their submissions received status updates? Have they seen their feedback acknowledged?','Invite them to a higher-tier advisory cohort to increase their sense of contribution','Escalate their feedback items to Jira immediately to show responsiveness'],
        a: 1,
        exp: 'The "my feedback doesn\'t matter" signal is almost always a loop-closing failure. Before drafting a response, check the record: have their submissions moved through the workflow? Have they received status notifications? If the loop hasn\'t been closed for this participant, the response needs to address that gap specifically, not just reassure them.',
      },
      {
        q: 'Delta Health drops from B to C- in week five of an eight-week program. A PM suggests restarting with a fresh recruiting campaign. The right response is:',
        opts: ['Agree: a fresh start with better participants will produce better results','Agree, but only if the drop exceeds two full letter grades','Diagnose the failure type first. A drop at week five may indicate engagement fatigue, poor ask volume, or a loop-closing gap. Staged recovery has a better success rate than restart and doesn\'t discard five weeks of participant trust.','Decline: restarting is never appropriate mid-program'],
        a: 2,
        exp: 'Restarting is the most expensive option and discards the trust you\'ve built with participants over five weeks. Diagnose which failure type you\'re dealing with before acting. An engagement failure at week five often recovers with reduced ask volume and a targeted re-engagement campaign. Reserve restart for programs where the structure is fundamentally broken and unrecoverable.',
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
        exp: 'Budget decisions are made on risk and return arguments, not on operational summaries. A longitudinal program story builds the case that the program\'s value compounds over time, that the cost of not testing is higher than the cost of testing, and that reducing the program creates specific, quantifiable risks. A project summary doesn\'t make that argument.',
      },
      {
        q: 'Your program\'s response rate has dropped from 61% in Q1 to 38% in Q3. You\'ve been running the same participant community with the same recruiting approach across all three quarters. The most likely root cause is:',
        opts: ['The product being tested is less interesting to participants than earlier versions','Seasonal variation: summer months always show lower engagement','Accumulating recruiting debt from Q1 and Q2: over-asking, poor targeting, or not closing the loop adequately has eroded community trust across multiple programs','The platform\'s notification system has a delivery problem that should be escalated to support'],
        a: 2,
        exp: 'Gradual response rate decline across a consistent community is almost always recruiting debt accumulation. Each program that over-asks, targets poorly, or fails to close the loop makes the next one harder. Three quarters of decline with no change in recruiting approach suggests the debt has been building since Q1. The fix requires diagnosing which debt type is driving the decline before adding more programs to the queue.',
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
    title: 'The Centercode Ecosystem',
    icon: '🌐',
    duration: '30 min',
    difficulty: 'Beginner',
    description: 'Understand how Centercode is structured as a product and a company: platform editions, Builder seats, managed services, Betabound\'s full capabilities, and where Centercode fits in the market.',
    lessons: [
      {
        id: 'e-1',
        title: 'Platform Editions and Builder Seats',
        content: `
<h3>Not Every Team Has the Same Platform</h3>
<p>Centercode is sold in four editions. The edition determines which features are available and how many people can use the platform as internal administrators or test managers. Understanding the editions matters because it tells you what\'s available to your organization right now and what would require an upgrade.</p>

<h3>The Four Editions</h3>
<ul>
  <li><strong>Starter:</strong> Free, up to 20 participants. Self-serve, designed as an upgrade from spreadsheets and email. Good for teams running their first test and evaluating the platform.</li>
  <li><strong>Pro:</strong> Up to 5,000 participants. Adds Survey Designer, Custom Feedback Types, Feedback Automation, Release Distribution, Reporting Engine, Continuous Onboarding, Regression Testing, Custom Templates, Jira integration, Advanced Branding, and API access.</li>
  <li><strong>Team:</strong> Up to 20,000 participants. Adds Custom Segmentations, Granular Access Control, Advanced Recruiting, Technographic Profiles, Workflow Automation, Community Surveys, and the Tester Referral System. Built for organizations running multiple programs across teams.</li>
  <li><strong>Enterprise:</strong> No participant cap. Dedicated infrastructure, custom SSO, and an included Onboarding Program. For organizations where testing is a core function, not an occasional activity.</li>
</ul>

<h3>Builder Seats: The Internal User Unit</h3>
<p>A Builder is anyone on your internal team who actively configures, manages, or reports within Centercode. Test managers, community admins, program managers, analysts. Participants are not Builders.</p>
<p>Builder seats are the unit of internal user pricing across all paid editions. You get a base allocation of Builders with each edition. Additional Builders are purchased in packs. This distinction matters when you\'re planning a team expansion: adding participants is priced separately from adding internal users.</p>

<div class="callout callout-info"><div class="callout-head">Pilots before annual contracts</div><div class="callout-text">Centercode offers pilots: 30–90 day trial contracts structured as a fraction of the annual cost. Pilots give teams a real test of the platform with their actual participants before committing to a full contract. They\'re structured as 12-month contracts with an opt-out provision at the pilot end date.</div></div>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Four editions: Starter (free), Pro, Team, Enterprise. Each adds features and participant capacity.</li>
  <li>Builder seats are the unit of internal user pricing. Participants are not Builders.</li>
  <li>Key features like Technographic Profiles and Community Surveys require Team or Enterprise edition</li>
  <li>Pilots provide a structured 30–90 day evaluation with real programs before annual contract commitment</li>
</ul></div>`,
      },
      {
        id: 'e-2',
        title: 'Centercode Services',
        content: `
<h3>Beyond the Platform</h3>
<p>Centercode is a platform company that also offers services. For organizations that don\'t have the bandwidth to run tests themselves, or need to move faster than their current team can support, Centercode provides expert execution alongside the software.</p>

<h3>Managed Tests</h3>
<p>Two service models for organizations that want Centercode to run the test:</p>
<ul>
  <li><strong>Project CPM (P-CPM):</strong> Turn-key test management for a single project. Centercode provides a dedicated test manager, logistics support, and recruitment management from kickoff through final report. Starting around $20K per test for 3–12 week programs with 25–250 participants.</li>
  <li><strong>Annual CPM (A-CPM):</strong> A fixed number of weekly service hours across the full year for ongoing program support. Starting around $100K/year. For organizations running continuous programs or multiple annual tests.</li>
</ul>
<p>In both cases, all data and platform structure remain in your Centercode environment. The transition from managed to self-service is clean: nothing gets rebuilt when you take over.</p>

<h3>Test Logistics</h3>
<p>For hardware programs, Centercode manages the physical side:</p>
<ul>
  <li>Bulk receipt, kitting, serialization, and firmware updates</li>
  <li>Domestic and international shipping with customs expertise</li>
  <li>End-to-end delivery tracking and proactive issue management</li>
  <li>Product return management (99% return rate)</li>
  <li>Each physical unit assigned to a specific participant in Centercode, with full delivery history</li>
</ul>

<h3>Centercode Admin Service and Enterprise Support</h3>
<ul>
  <li><strong>Centercode Admin (CCA):</strong> A dedicated Centercode community admin who configures and maintains your platform settings, builds reports, manages templates, optimizes onboarding workflows, and provides quarterly business reviews. For organizations that need expert administration without hiring for it internally.</li>
  <li><strong>Enterprise Support:</strong> Priority direct escalation to a Field Solutions Consultant, on-demand Zoom/phone support, extended hours, and Betabound recruitment assistance included. Priced at 15% of total platform fee.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Managed tests (P-CPM and A-CPM) provide full test management from kickoff to report</li>
  <li>Test Logistics handles physical hardware receipt, kitting, shipping, and returns</li>
  <li>Centercode Admin Service provides dedicated platform administration without an internal hire</li>
  <li>All data remains in your environment whether Centercode or your team runs the program</li>
</ul></div>`,
      },
      {
        id: 'e-3',
        title: 'Betabound, Program Types, and Market Context',
        content: `
<h3>Betabound: More Than a Tester Network</h3>
<p>Module 3 covered Betabound\'s core function: 300,000+ profiled, opt-in members available for recruiting. The full picture is broader.</p>
<ul>
  <li><strong>Beta Blast Newsletter:</strong> Weekly outreach to around 100,000 subscribers. Used for hard-to-fill programs that need volume fast.</li>
  <li><strong>Ambassador Program:</strong> 65,000 highly engaged members who actively refer others. Particularly useful for reaching demographics that don\'t respond to standard recruiting.</li>
  <li><strong>Social outreach:</strong> Betabound community manager posts to X, Bluesky, and beta-focused Reddit communities for each program that opts in.</li>
  <li><strong>Featured on Betabound:</strong> Badge program for developers to display on their own sites, driving awareness of the testing program to their existing audience.</li>
  <li><strong>Market research panel:</strong> The Betabound community can be surveyed between tests for market trends, competitor product awareness, and feature preferences. Not just a recruiting resource: an ongoing panel for product intelligence.</li>
</ul>

<h3>Five Program Types</h3>
<p>Centercode supports five structurally distinct program types. Each serves different questions:</p>
<ul>
  <li><strong>Product launch testing:</strong> Time-bounded test before a specific release. The standard beta use case.</li>
  <li><strong>Continuous testing:</strong> Always-on programs running alongside regular release cycles. Built for SaaS products shipping frequently.</li>
  <li><strong>Customer Zero / Dogfooding:</strong> Internal employees or strategic early customers test before external release. Useful for catching basics and validating internal confidence before going external.</li>
  <li><strong>Competitive testing:</strong> Testing your product directly against a named competitor\'s product to identify differentiation gaps and strengths.</li>
  <li><strong>Community market research:</strong> Surveying the tester community between tests for product intelligence, not just feedback collection.</li>
</ul>

<h3>Where Centercode Fits in the Market</h3>
<p>Centercode\'s primary competition isn\'t other beta testing platforms. It\'s the status quo: spreadsheets, email, and point solutions cobbled together. That\'s what most teams are actually replacing.</p>
<p>Adjacent tools that often come up in conversations:</p>
<ul>
  <li><strong>UserTesting.com:</strong> Video-based UX research interviews. Answers "do people understand this?" Centercode answers "does this work in real-world use?"</li>
  <li><strong>Applause:</strong> Crowdsourced QA with paid testers. Optimized for bug volume. Centercode optimizes for signal quality from motivated, profiled participants.</li>
  <li><strong>Productboard / Aha:</strong> Roadmap management tools. They organize and prioritize feedback you already have. Centercode generates that feedback through structured programs.</li>
</ul>

<div class="key-box"><div class="key-box-title">Key Takeaways</div><ul>
  <li>Betabound includes a newsletter (100K), Ambassador Program (65K), social channels, and a market research panel</li>
  <li>Five program types: launch, continuous, Customer Zero, competitive, and community research</li>
  <li>The primary competitor is the status quo: spreadsheets and email, not named software</li>
  <li>Centercode is distinct from UserTesting (UX research), Applause (paid bug QA), and roadmap tools (feedback organization)</li>
</ul></div>`,
      },
    ],
    quiz: [
      {
        q: 'Your organization runs programs with 8,000 participants and needs Technographic Profiles for participant segmentation. Which edition is the minimum requirement?',
        opts: ['Pro Edition — it supports up to 5,000 participants and includes advanced features','Team Edition — Technographic Profiles and the participant capacity for 8,000 participants both require Team or higher','Starter Edition — Technographic Profiles are available at all tiers','Enterprise Edition only — Technographic Profiles are an Enterprise-exclusive feature'],
        a: 1,
        exp: 'Technographic Profiles are a Team Edition feature, and Team Edition supports up to 20,000 participants. Pro Edition maxes out at 5,000 participants and doesn\'t include Technographic Profiles. Both the capacity and the feature required here need Team Edition.',
      },
      {
        q: 'Your organization wants to run a beta test but doesn\'t have an internal test manager available. Centercode offers which service to handle this?',
        opts: ['Enterprise Support, which provides a dedicated Field Solutions Consultant for test execution','Centercode Admin Service, which configures the platform but doesn\'t manage the test','Managed Test (P-CPM), which provides a dedicated test manager from kickoff through final report','Beta Blast, which announces the program to Betabound\'s newsletter audience'],
        a: 2,
        exp: 'P-CPM is Centercode\'s managed test service: a dedicated test manager runs the program from kickoff to final report. Enterprise Support provides priority technical access and platform guidance. Centercode Admin Service handles platform configuration. Beta Blast is a Betabound recruiting channel.',
      },
      {
        q: 'A competitor\'s review on a tech blog claims their product\'s onboarding is faster than yours. You want to test whether that claim holds up with real users. This is a:',
        opts: ['Product launch test — validate the onboarding before your next release','Continuous test — add onboarding to your ongoing program scope','Competitive test — directly compare your product against the named competitor with the same participant group','Customer Zero test — use internal employees to assess onboarding speed'],
        a: 2,
        exp: 'Competitive testing puts your product and a competitor\'s product in front of the same participant group to identify differentiation gaps and strengths. It directly answers the question the competitor claim raised: does the real-world experience support or refute their positioning?',
      },
      {
        q: 'You\'re trying to recruit 50 enterprise participants who use Salesforce daily and work in healthcare. Betabound\'s standard profiled network hasn\'t produced enough matches. The next resource to try is:',
        opts: ['The Beta Blast Newsletter, sent to 100,000 general subscribers','The Ambassador Program, whose 65,000 engaged members actively refer others and can help reach specific demographics','Posting a public job listing on LinkedIn targeting healthcare Salesforce users','Expanding the program criteria to include non-Salesforce users to fill the gap'],
        a: 1,
        exp: 'The Ambassador Program is specifically designed for demographics that don\'t respond well to standard recruiting. 65,000 actively engaged members who refer others are more likely to reach niche professional segments than a broad newsletter blast.',
      },
      {
        q: 'A PM says "we should use UserTesting.com instead of Centercode to validate our new feature." The most accurate response is:',
        opts: ['Agree: UserTesting is more cost-effective for feature validation','Disagree: Centercode does everything UserTesting does and more','They answer different questions. UserTesting captures UX research through moderated video sessions. Centercode validates real-world use over time through structured programs. Use UserTesting to answer "do people understand this?" Use Centercode to answer "does this work in real-world conditions?"','Disagree: Centercode\'s tester community is larger than UserTesting\'s'],
        a: 2,
        exp: 'UserTesting and Centercode are not competitors. They serve different research questions at different stages. UserTesting is optimal for early-stage UX research: "does this interface make sense?" Centercode is optimal for late-stage validation: "does this product work correctly in real-world use over time?" Many organizations use both.',
      },
    ],
    testOut: [
      {
        q: 'Your organization has been on Pro Edition for two years. You now have three product teams wanting to share a Centercode community, and each needs granular team-level access control. You also need to run recruiting campaigns targeting specific enterprise segments with technographic filtering. What does this require?',
        opts: ['No change: Pro Edition supports multiple teams and advanced recruiting with the right configuration','A Centercode Admin Service engagement to configure Pro Edition for multi-team use','An upgrade to Team Edition: granular access control and Technographic Profiles are Team Edition features. Multiple teams sharing a community also benefits from Team Edition\'s multi-program infrastructure.','An upgrade to Enterprise Edition: multi-team programs with granular access require dedicated infrastructure'],
        a: 2,
        exp: 'Both Granular Access Control and Technographic Profiles are Team Edition features. Pro Edition doesn\'t include either. Running multiple teams on a shared community is technically possible on Pro, but without granular access control, the ownership model becomes fragile as team count grows.',
      },
      {
        q: 'Your VP asks: "What\'s the difference between what we pay for the platform and what Centercode\'s managed test service would cost?" The correct framing is:',
        opts: ['They\'re the same cost packaged differently: managed tests are the platform fee plus a markup','They\'re completely separate: platform fees cover software access, managed tests (P-CPM/A-CPM) cover Centercode providing test management expertise and execution on top of the platform','Managed tests replace the platform fee: you pay for one or the other, not both','The costs can\'t be compared directly because managed tests use a different platform than self-service'],
        a: 1,
        exp: 'Platform fees and managed test service fees are separate. You pay for platform access regardless of who runs the program. Managed tests add Centercode\'s expert execution layer on top: a dedicated test manager, logistics support, and recruitment management. If your team eventually takes over, you keep the platform; the service fee ends.',
      },
      {
        q: 'A product director asks: "We\'re doing a major competitive repositioning next quarter. Can Centercode help us understand whether our product actually beats the competitor on the claims we\'re planning to make?" The right program type is:',
        opts: ['A product launch test: time-bound, focused on your product\'s readiness before the repositioning announcement','A community survey: poll your existing tester base about their competitor product usage','A competitive test: the same participant group tests both products on the criteria that matter for the repositioning claims, producing real-world comparison data','A Customer Zero program: internal employees simulate the competitive evaluation process'],
        a: 2,
        exp: 'Competitive testing was built for exactly this: testing your product against a named competitor with the same participants on specific criteria. It produces real-world data about differentiation rather than internal assumptions. The results either validate the repositioning claims or surface gaps to fix before making them publicly.',
      },
      {
        q: 'You\'re running a continuous testing program for a SaaS product that ships bi-weekly. Each release needs participant validation. Manual announcement of builds is taking hours per cycle. What replaces this?',
        opts: ['A Macro scheduled to run every two weeks with build announcement content for participants','The Release API connected to your CI/CD pipeline, triggering Centercode to notify participants and update the active build version automatically with each publish','A Dynamic Tag template that updates build version references in all active communications when a new release is published','A Beta Blast to announce each new build to the Betabound newsletter audience'],
        a: 1,
        exp: 'The Release API is the right tool for continuous programs with frequent releases. CI/CD publishes, Centercode responds: participants are notified, build versions are updated, version-specific activities route automatically. Two-week cycles become hands-off for the test manager instead of a multi-hour manual process each time.',
      },
      {
        q: 'Betabound has 300,000 profiled members. A program manager says: "We should be using Betabound for market research between tests, not just recruiting." Is this accurate?',
        opts: ['No: Betabound is a recruiting resource only. Market research requires a separate research panel.','Yes: Betabound functions as an on-demand market research panel that can be surveyed for product intelligence, competitor awareness, and feature preferences between testing programs.','Partially: Betabound can be surveyed, but only about Centercode-related topics, not general market research.','No: running surveys through Betabound requires upgrading to a separate market research contract with a different pricing model.'],
        a: 1,
        exp: 'Betabound is explicitly designed to serve as a market research panel between tests. The 300,000 profiled, opt-in members can be surveyed for product intelligence, competitor awareness, and feature preferences. Programs that use Betabound only for recruiting are leaving a significant research capability unused.',
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

