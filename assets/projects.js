const projects = [
    {
        id: "femn-platform",
        title: "Femn; On Building For The Margins",
        tag: "Flutter / React / Civic Tech",
        description: "There is a particular kind of frustration that comes from opening a document and realising that the thing it describes does not actually exist yet. Not in any f...",
        content: `There is a particular kind of frustration that comes from opening a document and realising that the thing it describes does not actually exist yet. Not in any functional sense. The navigation goes nowhere. The features are named but not connected. The code is intention dressed up as implementation. That was the first version of Femn's Software Requirements Specification. I was supposed to review it. I reviewed it, found what was broken, and then stayed.

That decision to stay rather than note and move on is the one that defined the next several months of my life as a developer.

Femn is a civic social platform oriented around feminist activism in Nigeria. The premise is simple and the execution is not: build a space for people who are exhausted from organising in the margins of platforms that were never designed with them in mind. Twitter threads. WhatsApp groups. Instagram stories that expire in twenty-four hours. These are the tools Nigerian activists currently use because there is nothing built specifically for them. Femn is an attempt to change that.

The build moved through several iterations. HTML and CSS first, then React, then Flutter. Each migration forced a clearer answer to the question that should drive every product decision: what does this platform actually need to do? Not what is technically possible. Not what would be impressive in a demo. What does the person it is built for actually need when they open it?

The Embers metric came out of that process. Rather than likes and shares metrics that measure reach and agreement Embers measures resonance. The distinction is philosophical before it is technical. Reach tells you how many people saw something. Resonance asks whether it moved them. Building that distinction into the platform's core logic was a deliberate argument about what kind of attention is worth measuring.

I built the direct messaging system, the group chat infrastructure, the settings architecture, the analytics layer, the post types. Piece by piece, mostly alone, over months of returning to the same codebase and finding new things to improve. Femn is still not finished. But it is more real than it has ever been, and the distance between what it was when I first opened that document and what it is now is the truest record of what sustained attention to a hard problem looks like.`,
        image: "assets/project1.png",
        link: "projects/femn-platform.html",
        github: "https://github.com/WaliMedugu/Femn-Mobile-",
        featured: true
    },
    {
        id: "arguuu",
        title: "Arguuu; A Platform For Testing What You Actually Believe",
        tag: "Debate Platform / UI Design",
        description: "The name was the first decision and it was the right one. Arguuu. Three u's because two wasn't enough and four was too many. It needed to feel like the act itse...",
        content: `The name was the first decision and it was the right one. Arguuu. Three u's because two wasn't enough and four was too many. It needed to feel like the act itself insistent, a little playful, unwilling to release its grip. Argumentation as a social form is something I have thought about seriously for a long time. The platforms we have built for public discourse are almost entirely optimised for broadcasting. You say a thing. People react to the thing. The thing that gets the most reactions wins. Whether it deserved to win is a question nobody is asking.

Arguuu is built around that question.

The WIT scoring framework came before any interface was designed. WIT stands for Wit, Insight, and Truth three axes along which the quality of an argument can be evaluated independently of its popularity. Wit measures the elegance and precision of the expression. Insight measures the depth of the thinking behind the position. Truth measures fidelity to evidence and logical consistency. Together they produce a score that rewards arguers who are actually engaging with a question rather than performing confidence at it.

Developing the axes took longer than developing any single screen. What makes an argument witty without being hollow? What is the line between genuine insight and repetition dressed in sophisticated language? These are not questions with clean answers, but they are questions a scoring system has to take a position on. The WIT framework is that position.

Fifty-nine screens followed. Onboarding. Debate room creation and management. User profiles and argument histories. Scoring breakdowns. Notification systems. Moderation tools for managing bad faith participation. Settings for everything a user might want to configure. Every state a person might find themselves in while using the platform was thought through and designed within the Warm Editorial system terracotta, cream, Playfair Display, Lora, DM Mono applied at a scale that pushed the system harder than anything else I have built.

The legal architecture required equal attention. Running a debate platform in Nigeria means confronting real questions about liability, moderation obligations, defamation risk, and terms of service that actually hold up. That work is invisible in the interface but foundational to the product. A platform that performs openness while ignoring its legal obligations to its users does not deserve the trust it is asking for.`,
        image: "assets/project2.png",
        link: "projects/arguuu.html",
        github: "https://github.com/WaliMedugu/Arguuu",
        featured: true
    },
    {
        id: "wher-are-they",
        title: "WherAreThey; The Infrastructure Of Finding Each Other",
        tag: "Missing Persons Platform / Social Impact",
        description: "Missing persons cases in Nigeria exist in a state of fragmentation that makes them significantly harder to resolve than they need to be. An Instagram post here....",
        content: `Missing persons cases in Nigeria exist in a state of fragmentation that makes them significantly harder to resolve than they need to be. An Instagram post here. A WhatsApp status there. A Twitter thread that surfaces briefly, generates some engagement, and then disappears into the archive within twenty-four hours. There is no central record. There is no coordination mechanism. There is no way for a person who saw something three days ago in a different city to connect that observation to a family who needs it.

WherAreThey is an attempt to build that infrastructure.

The platform functions as both a database and a coordination tool. It is designed to centralise missing persons reports in a format that is searchable, verifiable, and persistent not dependent on the algorithmic whims of social media platforms that were not built for this purpose. But the more important design challenge was not the database. It was the network of people who use it. The goal was to transform every mobile phone user into a potential witness someone who might have relevant information and, if the right tool existed, could contribute it in a way that was actually useful to a search effort.

Building WherAreThey meant taking seriously a set of problems that go beyond the technical. How do you verify sightings without requiring families to engage in further traumatic interactions? How do you protect the privacy of families who are already in a vulnerable position? How do you ensure that information in the system is actually actionable by law enforcement, by search parties, by the community networks that often do most of the practical work of finding missing people in Nigeria?

The design language reflects these considerations. The interface prioritises information clarity above aesthetic ambition. Every element is there because it serves the person who is using the platform in the worst circumstances of their life. Empathy is not just a design principle here. It is the specification.

WherAreThey is a reminder that the most important technology is sometimes the technology that helps people find each other when they are most lost. That is not a metaphor. It is a literal description of what this platform is trying to do.`,
        image: "assets/wher-are-they.png",
        link: "projects/wher-are-they.html",
        github: "https://github.com/WaliMedugu/WherAreThey",
        featured: true
    },
    {
        id: "wallet-paddi",
        title: "WalletPaddi; Fintech That Respects Its Users",
        tag: "Fintech / Digital Wallet / Hackathon Winner",
        description: "The central premise of WalletPaddi was a question about design philosophy as much as product strategy: why does financial software have to feel like a spreadshe...",
        content: `The central premise of WalletPaddi was a question about design philosophy as much as product strategy: why does financial software have to feel like a spreadsheet? The category is almost universally built around function at the expense of experience utilitarian interfaces, clinical language, and an implicit assumption that users who need financial tools are willing to tolerate ugliness in exchange for utility. WalletPaddi was built on a different assumption entirely.

The platform is a fintech solution designed for young Nigerians navigating the gap between day-to-day money management and meaningful long-term financial health. It includes smart savings features, automated expense tracking, and a community-driven approach to financial literacy the last of these reflecting a conviction that financial education is more effective when it happens in social context rather than through isolated content consumption. The interface was built within the Warm Editorial design system: considered, premium in feel, and warm in its relationship to the user. The goal was to produce something that felt like a partner in financial growth rather than a digital ledger.

WalletPaddi was built under the conditions of Wema Bank's Hackaholics 6.0 competition extreme time pressure, rapid iteration, and the particular clarity that comes from having a deadline that does not move. The team won the regional finals. That outcome mattered, but less than what the process demonstrated: that rigorous engineering and considered design are not in tension with each other, even under hackathon conditions. The speed required by the format forced better prioritisation decisions, not worse design ones.

The recognition at the regional level was validating. More useful was what the build itself produced a clearer understanding of how to make technology that people in a specific economic context can actually trust with their money and their financial futures. That understanding is the most transferable thing that came out of the competition.`,
        image: "assets/wallet-paddi.png",
        link: "projects/wallet-paddi.html",
        github: "https://github.com/WaliMedugu/WalletPadi",
        featured: true
    },
    {
        id: "beacora",
        title: "Beacora; Safety That Feels Like A Friend",
        tag: "Safety / Location Tracking",
        description: "The observation that started Beacora is not a comfortable one. Safety is something women in Nigeria have to actively manage as a feature of daily life. It is no...",
        content: `The observation that started Beacora is not a comfortable one. Safety is something women in Nigeria have to actively manage as a feature of daily life. It is not a background condition. It is a foreground practice, requiring ongoing attention and effort, and the tools currently available for it were almost entirely built by people who do not live that reality. Location sharing through WhatsApp is clumsy and manual. Emergency contacts exist in an informal, unstructured way. The gap between \"I'm fine\" and \"something is wrong\" is enormous, and there is very little designed to sit in that gap and make it navigable.

Beacora is built for that gap.

At its core, Beacora is a real-time location sharing application. But the architecture goes considerably deeper than coordinates. The platform includes check-in flows designed to establish regular communication rhythms between a user and their trusted contacts. It includes alert systems that escalate progressively rather than immediately, because the goal is not to trigger panic but to ensure that someone always knows where you are and whether you are okay. It includes the ability to signal distress without unlocking your phone a feature that required careful thought about the specific scenarios in which it would be needed.

The central design challenge was one of tone. Safety applications have a tendency toward the clinical and institutional. Everything is a warning. Everything is a red button and a disclaimer. That design language communicates urgency, but it also communicates surveillance. A user who feels watched by their safety tool is not a user who trusts their safety tool. The design challenge was to build something that communicated care rather than monitoring. The goal was for Beacora to feel less like a tracking application and more like a trusted person who happens to know where you are.

That distinction guided decisions at every level of the interface: the language of alerts, the way check-ins present themselves, the visual hierarchy of the home screen, the tone of push notifications. Each decision was tested against the same question: does this feel like safety, or does it feel like surveillance? Those are different feelings and they produce different user behaviours.

Beacora sits within the Blue Particle product family alongside Femn. This relationship is intentional. Both products are answers to the same underlying question about what technology owes the people who use it. The answer Beacora offers is specific: it owes them tools that were actually designed for their lives.`,
        image: "assets/project4.png",
        link: "projects/beacora.html",
        featured: true
    },
    {
        id: "blue-particle-landing",
        title: "Blue Particle Studios; Building The Door",
        tag: "Web Design / Brand Narrative",
        description: "Every organisation eventually needs a door. A single place that announces what it is, what it believes, and what it is building clearly enough that the right pe...",
        content: `Every organisation eventually needs a door. A single place that announces what it is, what it believes, and what it is building clearly enough that the right people can find it and understand it in the time it takes to read a screen.

Blue Particle Studios had products in development, a coherent design system, a point of view about technology and its obligations to the people who use it. What it did not have was that door. The landing page was the project of building it.

The design was developed within the Warm Editorial system: terracotta and cream as the base palette, grain texture for tactility, Playfair Display in italic for the brand voice, Lora for body text, DM Mono for all interface labels. The aesthetic had been established through the portfolio site and refined through the product work. What this project required was not a new visual language but a narrative architecture the structure of how Blue Particle presents itself and its work to someone encountering it for the first time.

The position I arrived at is this: technology with a social conscience, built in Africa, for problems that actually matter here. That is not a marketing tagline. It is a claim about what kind of studio this is and what kind of products it builds. Every decision about the landing page what to include, what to leave out, how to sequence the information, how to describe the products was made in service of communicating that claim as clearly as possible.

Femn and Beacora are presented not as product features but as arguments. They are evidence of a methodology. Each one demonstrates that the studio's stated commitment to building technology that serves people rather than extracting from them is not rhetorical. It is operational.

Writing the landing page taught me that brand copy is a form of philosophical compression. The constraint of a screen and a few seconds of attention forces you to reduce a complex position to its most essential form. Every sentence I wrote, I tested against one question: is this actually true, or does it just sound like something a technology studio would say? Most of the first drafts failed that test. The final version is what survived.`,
        image: "assets/project5.png",
        link: "projects/blue-particle-landing.html",
        featured: false
    },
    {
        id: "portfolio-site",
        title: "walimedugu.com; The Problem Of Presenting Yourself Honestly",
        tag: "Portfolio / Design Systems",
        description: "I built the portfolio site because I needed one. Then I rebuilt it repeatedly because the version I had kept becoming inaccurate. Not technically. The code was ...",
        content: `I built the portfolio site because I needed one. Then I rebuilt it repeatedly because the version I had kept becoming inaccurate. Not technically. The code was always functional. But a portfolio is not a technical document. It is a claim about who you are, and who I was kept changing, and I did not want the site to be out of date by the time someone visited it.

The version I settled on organises itself around three identities: developer, writer, activist. The ordering is deliberate. Developer comes first because it is what most visitors expect to find, and meeting that expectation before complicating it is a more respectful way to introduce complexity. Writer comes second because it is the oldest part of my identity I was writing, seriously and with intent, long before I was building anything in a technical sense. Activist comes third not because it is least important but because it is the most serious claim in the sequence, and serious claims earn their weight by arriving after the context that makes them legible.

The design system that emerged from this project is the most durable artefact I have produced. The Warm Editorial system terracotta, cream, grain texture, Playfair Display in italic, Lora for body text, DM Mono for precision elements did not exist before this site. It was invented here, through iteration, as I tried to find a visual language that felt honestly like mine rather than borrowed from somewhere else. It now runs through every product I build, every document I produce, every interface I design. It is the most consistent thing across everything I make, and it started here.

A portfolio is a strange document because it serves two functions simultaneously. It is proof of work, which is a relatively straightforward thing to demonstrate. And it is a story about what the work means, which is considerably harder. I spent more time on the copy than on the code. The copy is what I would want someone to read if they had five minutes, no prior context, and I was not present to explain myself. Getting that right mattered more to me than any technical decision in the build.`,
        image: "assets/project6.png",
        link: "projects/portfolio-site.html",
        github: "https://github.com/WaliMedugu/Wali-Personal-Portfolio",
        featured: true
    },
    {
        id: "not-even-wali",
        title: "Not Even Wali; Writing As A Practice Of Precision",
        tag: "Writing / Substack",
        description: "The Substack began because the things I wanted to say did not fit the containers available to me. Essays that were too politically specific for creative writing...",
        content: `The Substack began because the things I wanted to say did not fit the containers available to me. Essays that were too politically specific for creative writing platforms and too personally inflected for straight activism accounts. Poems that were too analytical to be romantic and too emotionally direct to be purely intellectual. Not Even Wali became the container I built for what didn't fit elsewhere a publication that refuses to settle into a single register and considers that refusal a feature rather than an inconsistency.

The persona \"Wali\" is not a performance or a disguise. It is a frame that enables precision. Writing as Wali gives me permission to commit to an observation fully, to follow a line of thinking past the point at which it becomes uncomfortable, to hold a contradiction without resolving it prematurely in order to make a reader comfortable. The voice rules I established for the publication no filler, no borrowed phrases, no American political shorthand applied to Nigerian political reality exist in service of that precision. They are constraints that produce rather than limit.

The publication operates across two niches that appear, from the outside, to be opposites. Activism and poetry/romance are not, in my understanding of them, opposites at all. Activism is a sustained inquiry into what the world owes people. Romance is a sustained inquiry into what people owe each other. Underneath both questions is the same foundational one: what does it mean to take someone seriously? Writing across both, in the same voice, in the same publication, without ever allowing one to bleed into the other, is a formal argument that these questions share a root.

Daily writing at this volume is a discipline that produces different things on different days. Some pieces come out whole and require very little revision. Others resist for hours, and the resistance is itself instructive it usually means the thinking has not resolved yet. Both kinds of days are productive. Both kinds of days are the publication. The publication is whatever remains when you commit to it consistently, without conditions, and without requiring every piece to be your best work before you allow it to exist.`,
        image: "assets/project7.png",
        link: "projects/not-even-wali.html",
        featured: true
    },
    {
        id: "femn-activism-build",
        title: "Femn; The Philosophy Behind The Features",
        tag: "Requirements / Analysis",
        description: "Before the first screen of Femn was designed, there was a more fundamental question that needed answering. Not what the platform should look like. Not what tech...",
        content: `Before the first screen of Femn was designed, there was a more fundamental question that needed answering. Not what the platform should look like. Not what technology stack it should run on. What it should actually do, specifically, for the specific person it was being built for.

That question sounds obvious. In practice it is the hardest question in product development, and most platforms never answer it honestly. They answer an easier version what features are generally associated with platforms in this category and call it requirements analysis. What I did with Femn was different, or at least I tried to make it different.

Every feature in the backlog was traced back to a specific need. Not a general need, not a category of users, but a concrete scenario. A feminist activist in Lagos who is trying to coordinate a response to a piece of legislation. A woman in Abuja who has experienced gender-based violence and needs a space to find others organising around the same issue. A student at a Nigerian university who is trying to build a chapter of a national movement without the institutional infrastructure that movement needs to grow. What does each of these people actually need from a platform? What would make their work easier, safer, more effective?

The answers to those questions produced the features. The features produced the backlog. The backlog became a historical record of every significant decision made about the platform's direction what was built, what was deferred, what was reconsidered and why. It is not a document anyone outside the project would find interesting. But it is the document that kept the project honest about what it was trying to do and who it was trying to do it for.

What I came to understand through this process is that requirements analysis is itself a form of activism. To ask seriously what a platform needs is to ask who it is for. To answer that honestly is to take a position. Every product takes a position about whose problems are worth solving. The ones that pretend otherwise are just hiding the position they've already taken.`,
        image: "assets/project8.png",
        link: "projects/femn-activism-build.html",
        featured: false
    }
];
