import sl1 from '../assets/stock-level/sl1.png';
import sl2 from '../assets/stock-level/sl2.png';
import sl3 from '../assets/stock-level/sl3.png';
import sl4 from '../assets/stock-level/sl4.png';
import sl5 from '../assets/stock-level/sl5.png';
import sl6 from '../assets/stock-level/sl6.png';

// EduAI Images
import e1 from '../assets/edu-ai/e1.png';
import e2 from '../assets/edu-ai/e2.png';
import e3 from '../assets/edu-ai/e3.png';
import e4 from '../assets/edu-ai/e4.png';
import e5 from '../assets/edu-ai/e5.png';
import e6 from '../assets/edu-ai/e6.png';
import e7 from '../assets/edu-ai/e7.png';
import e8 from '../assets/edu-ai/e8.png';

// Resume Builder Images
import r1 from '../assets/resume-builder/r1.png';
import r2 from '../assets/resume-builder/r2.png';
import r3 from '../assets/resume-builder/r3.png';
import r4 from '../assets/resume-builder/r4.png';
import r5 from '../assets/resume-builder/r5.png';
import r6 from '../assets/resume-builder/r6.png';
import r7 from '../assets/resume-builder/r7.png';
import r8 from '../assets/resume-builder/r8.png';

// EM-Blogs Images
import em1 from '../assets/em-blogs/em1.png';
import em2 from '../assets/em-blogs/em2.png';
import em3 from '../assets/em-blogs/em3.png';
import em4 from '../assets/em-blogs/em4.png';
import em5 from '../assets/em-blogs/em5.png';
import em6 from '../assets/em-blogs/em6.png';
import em7 from '../assets/em-blogs/em7.png';
import em8 from '../assets/em-blogs/em8.png';

export const projects = [
    {
        id: "eduai",
        title: "EduAI",
        description: "An AI-powered study planner that helps students organize their learning schedule efficiently using LLMs for task decomposition.",
        problemStatement: "Traditional study planning is often overwhelming and static. Students struggle to break down complex subjects into actionable daily tasks, leading to procrastination and inefficient learning cycles.",
        fullDescription: "EduAI is a full-stack AI platform that transforms vague learning goals into actionable study schedules. It combines advanced LLMs with a student-centric productivity toolkit to manage complex educational timelines. The system adapts to user preferences for study rhythms (like Pomodoro) and provides deep insights into learning consistency through an interactive analytics dashboard.",
        features: [
            "AI Schedule Generation: Custom day-by-day plans based on goals, deadlines, and current level.",
            "Visual Analytics Dashboard: Track study hours, completion rates, and streaks with interactive charts.",
            "Smart Task Management: Detail-oriented breakdown of study plans into manageable daily sessions.",
            "Adaptive Learning Styles: Support for Pomodoro, long-block, or flexible study session preferences.",
            "Secure Authentication: Robust user management powered by Firebase Auth and server-side verification."
        ],
        techStack: ["React", "Express", "Node.js", "MongoDB", "Firebase", "OpenAI"],
        liveDemo: "https://eduai-ochre.vercel.app/",
        github: "https://github.com/kodurusravani34/EduAI",
        screenshots: [e1, e2, e3, e4, e5, e6, e7, e8]
    },
    {
        id: "stocklevel",
        title: "StockLevel",
        description: "Inventory management system with predictive analytics for small to medium-sized retail businesses.",
        problemStatement: "Market volatility and complex financial data often leave retail investors overwhelmed, leading to missed opportunities or unmanaged risks due to lack of real-time intelligence.",
        fullDescription: "StockLevel is a high-precision stock market intelligence platform. It leverages AI to distill global financial news into actionable 'Bottom Line' summaries, while monitoring real-time market data to trigger custom price and volume alerts. With integrated TradingView technical analysis tools, it provides a professional-grade workspace for tracking symbols across global markets.",
        features: [
            "AI Market Insights: Personalized summaries of complex news tailored to your specific investment goals.",
            "Real-Time Smart Alerts: Trigger email notifications based on custom price thresholds and volume spikes.",
            "Professional TradingView Charts: High-performance technical analysis tools integrated directly into the dashboard.",
            "Personalized Onboarding: Tailored experience based on risk tolerance, sectors, and investment timelines.",
            "Autonomous Workflows: Backend operations managed by Inngest for reliable, event-driven task execution."
        ],
        techStack: ["Next.js", "Typescript", "Inngest", "MongoDB", "Tailwind CSS", "Better-Auth", "AI"],
        liveDemo: "https://stocklevel.vercel.app/",
        github: "https://github.com/kodurusravani34/StockLevel",
        screenshots: [sl1, sl2, sl3, sl4, sl5, sl6]
    },
    {
        id: "resumebuilder",
        title: "Resume Builder",
        description: "A professional resume building application with customizable templates and real-time preview features.",
        problemStatement: "Crafting a professional resume is often a formatting nightmare. Job seekers struggle to write impactful descriptions and maintain consistent styling that satisfies both humans and ATS systems.",
        fullDescription: "This MERN stack application streamlines the job application process with AI-driven content generation. It allows users to manage multiple resumes from a unified dashboard, featuring live editing and professional template selection. The system includes an AI writing assistant to enhance professional summaries and job descriptions, alongside PDF parsing for quick data import.",
        features: [
            "AI Content Assistance: Rewrite and polish professional summaries using integrated LLM models.",
            "Live Visual Builder: Real-time resume editing with instant preview and template switching.",
            "Smart PDF Parsing: Extract data from existing PDF resumes to auto-populate builder fields.",
            "Asset Management: Integrated ImageKit support for high-performance profile picture management.",
            "Multi-Resume Dashboard: Organize, update, and manage different versions of your CV in one place."
        ],
        techStack: ["React", "Express", "Node.js", "MongoDB", "Redux Toolkit", "OpenAI", "ImageKit"],
        liveDemo: "https://resume-builder-flame-alpha.vercel.app/",
        github: "https://github.com/kodurusravani34/ResumeBuilder",
        screenshots: [r1, r2, r3, r4, r5, r6, r7, r8]
    },
    {
        id: "em-blogs",
        title: "EM Blogs",
        description: "A premium editorial publishing platform handcrafted for personal storytelling and thoughtful insights.",
        problemStatement: "Standard blogging platforms often feel cluttered or impersonal. Writers need a cinematic, high-end space that lets their words breathe while maintaining professional-grade editorial aesthetics.",
        fullDescription: "EM Blogs is a premium digital space inspired by the 'Journal' aesthetic of platforms like Medium.com. It features an immersive editorial design with generous whitespace, cinematic article cards, and boutique typography. Built using the MERN stack with Tailwind CSS v4, it offers a distractions-free writing and reading experience, complete with dynamic discovery, personalized libraries, and secure authentication.",
        features: [
            "Immersive Editorial Design: Boutique typography and spacious layouts for a premium reading experience.",
            "Cinematic Article Cards: Large cover images with hover animations and high-contrast editorial styling.",
            "Dynamic Discovery: Sticky category navigation for exploring Design, Technology, Philosophy, and more.",
            "Boutique Journals: Personalized profile pages that act as a curated portfolio of writings.",
            "Personalized Library: Dedicated bookmarking system for saving insights for later reading.",
            "Secure Authentication: JWT-protected accounts with dedicated role-based access for Administrators.",
            "Responsive UI: Handcrafted experience built with Tailwind CSS v4 for all devices."
        ],
        techStack: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express", "MongoDB", "JWT"],
        liveDemo: "https://em-blogs.vercel.app/",
        github: "https://github.com/kodurusravani34/EM-Blogs",
        screenshots: [em1, em2, em3, em4, em5, em6, em7, em8]
    },
    {
        id: "n8n-gmail",
        title: "n8n Gmail Auto-Responder",
        description: "Automated email response workflow using n8n for intelligent email management and automated replies.",
        problemStatement: "Repetitive email inquiries consume hours of productive time daily. Manually drafting personalized responses for high-volume inboxes is unsustainable for growth-focused individuals.",
        fullDescription: "This automation powerhouse uses n8n to bridge the gap between Gmail and OpenAI. It monitors incoming emails in real-time, processes context through GPT-based logic, and sends polished, intelligent responses automatically. The visual workflow design ensures that communication logic is transparent, reliable, and easily expandable with additional conditional nodes.",
        features: [
            "Event-Driven Automation: Real-time monitoring of Gmail inboxes using n8n's trigger architecture.",
            "AI-Powered Drafting: Context-aware response generation using OpenAI GPT models.",
            "Visual Logic Nodes: Intuitive workflow design allowing for easy adjustments to auto-response rules.",
            "Secure API Integration: Robust handling of OAuth credentials for both Gmail and OpenAI services.",
            "High Efficiency: Drastically reduces manual drafting time for incoming inquiries and support mail."
        ],
        techStack: ["n8n", "Gmail API", "OpenAI", "Workflow Automation", "API Integration"],
        github: "https://github.com/kodurusravani34/n8n-gmail-auto-responder",
        screenshots: [
            "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200"
        ]
    },
    {
        id: "netflix-eda",
        title: "Netflix Dataset EDA",
        description: "In-depth Exploratory Data Analysis of Netflix's content catalog to uncover trends in movies and TV shows.",
        problemStatement: "The massive volume of content on streaming platforms like Netflix obscures meaningful trends in content strategy, genre popularity, and geographic distribution without rigorous statistical analysis.",
        fullDescription: "A comprehensive data science project investigating the Netflix catalog through Exploratory Data Analysis (EDA). Using Python's powerful analytical libraries, the project uncovers significant insights into Netflix's pivot towards TV shows since 2015, the dominance of USA and India in content production, and the evolving demographics of maturity ratings across the platform.",
        features: [
            "Statistical Content Analysis: Compare volume and growth trends between Movies and TV Shows.",
            "Geographic Contribution Mapping: Identify top content-producing nations and their market share.",
            "Genre & Rating Insights: Detailed breakdown of most frequent categories and target audiences.",
            "Automated Data Cleaning: Python pipelines to handle missing values and normalize duration formats.",
            "Visualization Suite: High-impact charts using Matplotlib and Seaborn for data-driven storytelling."
        ],
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        github: "https://github.com/kodurusravani34/Netflix-Dataset-EDA",
        screenshots: [
            "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200"
        ]
    }
];
