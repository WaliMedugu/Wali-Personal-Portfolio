const projects = [
    {
        id: "femn-platform",
        title: "01. Femn — The Platform",
        tag: "Flutter / React / Civic Tech",
        description: "A civic social platform built for feminist activism in Nigeria. Transferred from a broken SRS to a functional prototype, this project redefines digital organizing through resonance metrics like 'Embers'.",
        content: `The first version of Femn was just a document. A Software Requirements Specification I was supposed to review. But when I started going through it I found things that didn't work. Navigation that went nowhere. Features defined but never connected. Code that existed only as intention.\n\nI could have noted the issues and moved on. I didn't. Femn became the project I kept returning to. Not because it was the most technically demanding thing on my plate but because what it was trying to do mattered. A civic social platform built around feminist activism. In Nigeria. For people who are exhausted from organizing in the margins of platforms that were never built with them in mind.\n\nWe moved from the broken SRS to a prototype. HTML, CSS, JavaScript, each screen built by hand to test whether the flows actually made sense to a real person using them. Then React. Then Flutter. Every iteration forced a clearer answer to the same question: what does this platform actually need to do? The Embers metric came out of that process. Instead of likes and shares, Embers measures resonance. Femn is more real than it has ever been. Building something well is mostly a practice of refusing to walk away.`,
        image: "assets/project1.png",
        link: "projects/femn-platform.html",
        featured: true
    },
    {
        id: "arguuu",
        title: "02. Arguuu",
        tag: "Debate Platform / UI Design",
        description: "A sophisticated debate platform featuring the 'WIT' (Wit, Insight, Truth) scoring framework—a system designed to evaluate argument quality over popularity across 59 custom-designed screens.",
        content: `I named it Arguuu because I wanted the name to feel like the act itself. Argumentation as a social form is something I think about probably more than is healthy. We have platforms for broadcasting opinions. We don't have platforms for actually testing them. That gap is what Arguuu is trying to live in.\n\nThe WIT score—Wit, Insight, Truth—is a scoring framework for evaluating the quality of an argument rather than its popularity. It's an attempt to make depth visible in a format that almost always rewards noise instead. Fifty-nine screens. I designed all of them. Onboarding flows, debate rooms, user profiles, scoring breakdowns, moderation tools. Every state a user might find themselves in. The design system is the same one I use across everything I build.\n\nI also had to think seriously about legal compliance. What it actually means to run a debate platform in Nigeria. The liability questions. The moderation obligations. A platform that ignores its legal context doesn't survive long enough to matter to anyone.`,
        image: "assets/project2.png",
        link: "projects/arguuu.html",
        featured: true
    },
    {
        id: "femn-activism-build",
        title: "03. Femn — The Activism Build",
        tag: "Requirements / Analysis",
        description: "An intensive requirements analysis and strategic roadmap for Femn. This project treated requirements as activism—carefully tracing why each feature needed to exist and who it was for.",
        content: `Before there was a single screen in Femn, there was the question of what kind of platform it should be. What features does a feminist activist in Nigeria actually need? What does organizing look like when it moves off WhatsApp groups and Twitter threads and onto something built deliberately for it?\n\nI worked through the requirements analysis carefully. Not just listing features but tracing the logic behind each one. Why it needed to exist. What it would make possible. The historical backlog became a record of that thinking—decisions made, features deferred, priorities shifted as understanding deepened.\n\nWhat I learned from this phase is that requirements analysis is itself a form of activism. To ask seriously what a platform needs is to ask who it's for. And to answer that honestly is to take a position. Every feature in the backlog is an argument about what matters and what doesn't.`,
        image: "assets/project3.png",
        link: "projects/femn-activism-build.html",
        featured: false
    },
    {
        id: "beacora",
        title: "04. Beacora",
        tag: "Safety / Location Tracking",
        description: "A location-tracking application for women in Nigeria. Built on the principle of 'safety as a friend,' it includes real-time sharing, distress signals, and a tone-conscious design.",
        content: `Beacora is a safety and location tracking application. Its core feature is real-time location sharing with trusted contacts—people you've chosen yourself, not people an algorithm selected for you. Safety is something women in Nigeria have to actively manage, and most of the tools available were not built with them in mind.\n\nThe design goes deeper than coordinates on a map. There are check-in flows, alert systems, and the ability to signal distress without needing to unlock your phone. I thought a lot about tone while building Beacora. Safety applications tend to feel clinical or institutional. I wanted Beacora to feel like a friend who knew where you were.\n\nBeacora lives in the Blue Particle product family alongside Femn. They are different answers to the same underlying question about what technology owes the people who use it.`,
        image: "assets/project4.png",
        link: "projects/beacora.html",
        featured: true
    },
    {
        id: "blue-particle-landing",
        title: "05. Blue Particle Landing Page",
        tag: "Web Design / Brand Narrative",
        description: "The digital 'door' for Blue Particle Studios. Designed using a warm editorial system, it serves as a philosophical hub for technology with a social conscience.",
        content: `Every organisation eventually needs a door. Blue Particle Studios had apps in development, a design system, a point of view—but no single place where those things announced themselves together. The landing page was that door.\n\nI designed and wrote it within the Warm Editorial design system. Terracotta and cream. Grain texture. Playfair Display in italic. The answer I arrived at: technology with a social conscience, built in Africa, for problems that actually matter here. That's not a tagline. It's a position.\n\nWriting the page taught me that brand copy is a form of philosophical compression. You have very few words to say something true. Every sentence I wrote, I tested against one question: is this actually true, or does it just sound good? The final version is what survived.`,
        image: "assets/project5.png",
        link: "projects/blue-particle-landing.html",
        featured: false
    },
    {
        id: "portfolio-site",
        title: "06. walimedugu.com",
        tag: "Portfolio / Design Systems",
        description: "A durable design system and portfolio site. Organized around the three core identities: Developer, Writer, and Activist. The foundation for all my future projects.",
        content: `I built my portfolio site because I needed one. Then I kept rebuilding it because I couldn't get it right. The version I settled on is organised around three things: Developer, writer, activist. That ordering is not accidental. Developer comes first because it's what people expect to find. Writer comes second as my oldest identity. Activist comes third as the most serious claim I make about myself.\n\nThe design system that came out of this project is probably the most durable thing I've made. Terracotta. Cream. Grain. Playfair Display in italic. It runs through every product I build now, every document I produce, every interface I design. I invented it here, trying to find a visual language that felt honestly like me.\n\nA portfolio is a strange document. It is proof of work but it is also a story about what the work means. I spent more time on the copy than I did on the code.`,
        image: "assets/project6.png",
        link: "projects/portfolio-site.html",
        featured: true
    },
    {
        id: "not-even-wali",
        title: "07. Not Even Wali",
        tag: "Writing / Substack",
        description: "A Substack publication exploring the intersections of activism, poetry, and romance through a Nigerian lens. A container for sharp thoughts and daily discipline.",
        content: `I started the Substack because I had things to say that didn't fit anywhere else. Essays too political for a creative writing platform and too personal for an activism account. Not Even Wali became the container for all of it. The persona "Wali" is a frame. Writing as Wali gives me permission to be more precise than I sometimes allow myself to be in conversation.\n\nThe two niches—activism and poetry/romance—look like opposites. I don't experience them that way. Activism is about what the world owes people. Romance is about what people owe each other. Underneath both of them is the same question: what does it mean to take someone seriously?\n\nDaily writing is its own kind of discipline. Some days the essay comes out whole. Other days I am reworking a single sentence for forty minutes. The publication is whatever shows up when you commit to it without conditions.`,
        image: "assets/project7.png",
        link: "projects/not-even-wali.html",
        featured: true
    },
    {
        id: "classroom-allocation",
        title: "08. Classroom & Seat Allocation",
        tag: "Group Project / Documentation",
        description: "A systematic approach to solving exam seat allocation chaos in Nigerian universities. Focused on invisible work: requirements, data structures, and task management.",
        content: `This was a group project—the only one in this list. My work was specifically the work of holding a group together. Structuring the documentation. Distributing tasks. Matching students to seats in a way that was fair, verifiable, and reproducible without manual spreadsheets.\n\nMy contribution was mostly in the invisible layer. I wrote the requirements documentation—the functional specs, the constraints, the data structures. I built the task distribution matrix. None of that work is visible in the final system, but none of the system would have cohered without it.\n\nI think about this project when I get frustrated by the invisible parts of building things. The work that makes other work possible is still work. It just doesn't show up in a demo. It's a reason to get better at recognising it in other people's projects.`,
        image: "assets/project8.png",
        link: "projects/classroom-allocation.html",
        featured: false
    }
];
