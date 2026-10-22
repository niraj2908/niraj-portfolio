export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "Full-Stack & Systems" | "AI Engineering & LLMs" | "Evaluation & Quality";
  problem: string;
  solution: string;
  myContribution: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  previewImage?: string;
  galleryImages?: { src: string; caption: string }[];
  hasLiveDemo: boolean;
  highlightBadge?: string;
  keyFeatures: string[];
}

export const PERSONAL_INFO = {
  name: "Niraj Kumar Singh",
  title: "Full-Stack Developer & AI Engineer in the Making",
  tagline: "Undergraduate Computer Science student building full-stack web applications and practical AI systems.",
  degree: "B.Tech in Computer Science and Engineering (CSE Core)",
  institution: "SRM Institute of Science and Technology, Delhi-NCR campus",
  graduationYear: "2027",
  cgpa: "8.01 / 10",
  targetRoles: ["Full-Stack Developer", "AI Engineer"],
  email: "nirajsingh0925@gmail.com",
  github: "https://github.com/niraj2908",
  linkedin: "https://www.linkedin.com/in/niraj-kumar-singh-44b294375/",
  location: "Delhi-NCR, India",
  portraitImage: "/assets/niraj-photo.jpg",
  resumeFile: "/assets/niraj-resume.pdf",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "revenue-recovery",
    name: "Revenue Recovery Intelligence",
    tagline: "Economic Decision Layer for Failed Payment Recovery on Razorpay",
    category: "Full-Stack & Systems",
    problem:
      "Most e-commerce systems blindly retry failed transactions or trigger payment links without considering whether the intervention creates revenue that would not have arrived anyway, leading to customer friction and negative expected value.",
    solution:
      "Built for the Razorpay AI Buildathon 2026 (Track 3 — AI Revenue Recovery). Implements an economic decision layer that evaluates at-risk payment events, computes incremental value E[V], enforces strict safety gates (e.g. state-uncertainty fallbacks, 30-min staleness), and mandates operator approval for every action.",
    myContribution:
      "Designed the 21-model PostgreSQL schema, Razorpay HMAC-SHA256 constant-time webhook pipeline, expected-value decision engine, causal experiment assignment logic, and the complete operator Next.js 16 interface.",
    stack: [
      "Next.js 16 (App Router)",
      "TypeScript (Strict)",
      "PostgreSQL",
      "Prisma 5",
      "Razorpay Test Mode",
      "Vercel",
    ],
    metrics: [
      { label: "Unit Tests", value: "671 passing" },
      { label: "Integration Tests", value: "145 passing" },
      { label: "Total Tests", value: "816 verified" },
      { label: "Execution Mode", value: "Operator-approved" },
    ],
    githubUrl: "https://github.com/niraj2908/revenue-recovery-intelligence",
    liveUrl: "https://revenue-recovery-intelligence.vercel.app",
    previewImage: "/assets/revenue-recovery/02-overview.png",
    galleryImages: [
      {
        src: "/assets/revenue-recovery/02-overview.png",
        caption: "Overview Dashboard: Real-time recovery KPIs, at-risk volume, and decision stream",
      },
      {
        src: "/assets/revenue-recovery/03-recovery-queue.png",
        caption: "Recovery Queue: Priority-ranked payment risk events with candidate action matrices",
      },
      {
        src: "/assets/revenue-recovery/04-decision-detail.png",
        caption: "Decision Detail: Expected incremental value breakdown, cost/risk penalty, and Razorpay signals",
      },
      {
        src: "/assets/revenue-recovery/11-security.png",
        caption: "Security & Policy Verification: Tenant isolation, HMAC signature verification, and audit trail",
      },
    ],
    hasLiveDemo: true,
    highlightBadge: "Razorpay AI Buildathon 2026",
    keyFeatures: [
      "Economic Formula: E[V] = amount × (P(rec|act) - P(rec|no_act)) - cost - risk",
      "HMAC-SHA256 signature verification in constant time with event deduplication",
      "Deterministic Demo Workspace seeded with 78 simulated payments and 59 risk events",
      "Zero autonomous loop: Actions require operator authorization and expire after 30 minutes",
    ],
  },
  {
    id: "lld-design-review",
    name: "DesignReview",
    tagline: "Evidence-Grounded LLD Practice & Structured Review Platform",
    category: "AI Engineering & LLMs",
    problem:
      "Learners practicing low-level design usually get no feedback or an arbitrary numeric score with no actionable justification. Furthermore, grading against a single canonical solution penalizes valid alternative decompositions.",
    solution:
      "A complete practice platform where learners build structured designs (classes, interfaces, relationships, decisions, edge-cases). Evaluates submissions through a 2-stage pipeline: deterministic structural checks + an AI semantic judge (Groq Llama 3.3 70B) citing grounded OOP/SOLID principles, complete with attempt evolution comparisons.",
    myContribution:
      "Engineered the domain state machine (IN_PROGRESS → SUBMITTED → EVALUATING → COMPLETED), hybrid evaluation composition root, RAG knowledge retrieval for OOP principles, and comprehensive architecture test suite.",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript (Strict)",
      "PostgreSQL",
      "Prisma 7",
      "pgvector",
      "Groq API (Llama 3.3 70B)",
      "Vitest",
      "oxlint",
    ],
    metrics: [
      { label: "Unit & Arch Tests", value: "384 passing" },
      { label: "Integration Tests", value: "52 passing" },
      { label: "Statement Coverage", value: "88.66%" },
      { label: "Branch Coverage", value: "80.71%" },
    ],
    githubUrl: "https://github.com/niraj2908/lld-design-review",
    liveUrl: "https://lld-design-review.vercel.app",
    previewImage: "/assets/lld-preview.png",
    hasLiveDemo: true,
    highlightBadge: "Production-Grade Evaluation Engine",
    keyFeatures: [
      "Deterministic Evaluation: 5 rules check structural validity, requirement coverage, and edge cases",
      "Semantic Evaluation: 9 criteria judged with LLMProvider port & Groq adapter (Llama 3.3 70B)",
      "Evidence Grounding: Every substantive complaint must cite a real class, relationship, or decision",
      "Attempt Evolution: Visual diffing across drafts showing added, removed, and resolved concerns",
    ],
  },
  {
    id: "xeno-crm",
    name: "Xeno CRM",
    tagline: "AI-Powered Customer Engagement & Natural Language Segmentation",
    category: "Full-Stack & Systems",
    problem:
      "Marketing teams at modern D2C brands cannot write raw SQL queries to slice audience data and spend hours manually drafting generic campaign copy that underperforms.",
    solution:
      "A full-stack CRM platform that translates plain English prompts into structured audience segment filters via Llama 3.3 70B on Groq, generates contextual WhatsApp campaign copy, simulates multi-stage delivery lifecycles, and computes automated campaign insights.",
    myContribution:
      "Implemented the full-stack architecture with Next.js 14 App Router, PostgreSQL schema for 500+ customer records and 2,100+ events, Groq API prompt-to-JSON pipeline, and Recharts analytics dashboards.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Groq API (Llama 3.3 70B)",
      "Recharts",
      "Docker",
    ],
    metrics: [
      { label: "AI Response Latency", value: "< 1.0s (Groq)" },
      { label: "Sample Data", value: "500+ customers" },
      { label: "Event Pipeline", value: "2,100+ events" },
      { label: "Channels", value: "WhatsApp / Email / SMS" },
    ],
    githubUrl: "https://github.com/niraj2908/xeno-crm",
    liveUrl: "https://xeno-crm-nu.vercel.app",
    previewImage: "/assets/xeno-preview.png",
    hasLiveDemo: true,
    highlightBadge: "D2C Marketing Automation",
    keyFeatures: [
      "Natural Language to Query: Converts 'spent > ₹10k and inactive for 90 days' into structured JSON rules",
      "Visual Condition Builder: Multi-condition AND/OR builder with live customer count previews",
      "Campaign Generator: AI crafts targeted WhatsApp messaging tailored to segment personas",
      "Engagement Simulation: Sent → Delivered → Read → Clicked attribution pipeline with CTR metrics",
    ],
  },
  {
    id: "hiver-support-agent",
    name: "Hiver Support Agent",
    tagline: "Grounded AI Customer Support Agent with Strict Escalation Policy",
    category: "AI Engineering & LLMs",
    problem:
      "Autonomous customer service LLMs are notorious for hallucinating commitments, inventing refund policies, or sounding fluent while delivering factually unsupported answers.",
    solution:
      "An evaluated prototype trained on the Kaggle Customer Support on Twitter dataset (AmazonHelp). Pairs intent classification with historical TF-IDF retrieval over 8,000 cases and a 7-rule deterministic escalation policy where every rule can only escalate to human review.",
    myContribution:
      "Architected the 7-rule deterministic escalation engine, language gate (7 languages), TF-IDF historical case retrieval pipeline, and blind human evaluation protocol across 200 cases.",
    stack: [
      "Python 3.11",
      "FastAPI",
      "SQLite",
      "Scikit-learn",
      "Groq & Gemini APIs",
      "Deterministic Test Doubles",
    ],
    metrics: [
      { label: "Test Suite", value: "518 passed (100% offline)" },
      { label: "Escalation Policy", value: "7 deterministic rules" },
      { label: "Historical Index", value: "8,000+ support cases" },
      { label: "Ungrounded Claims", value: "0% auto-handled" },
    ],
    githubUrl: "https://github.com/niraj2908/hiver-support-agent",
    liveUrl: undefined,
    previewImage: undefined,
    hasLiveDemo: false,
    highlightBadge: "Evaluated AI Research Prototype",
    keyFeatures: [
      "Escalation-Only Policy: No rule returns AUTO_HANDLE; rules can only escalate to HUMAN_REVIEW",
      "Evidence Sufficiency Gate: If historical retrieval finds < 2 grounded facts, auto-handling is rejected",
      "Language Gate: Classifies message across 7 supported languages or escalates with language reason code",
      "Blind Human Benchmark: 200-case frozen golden dataset evaluated across intent, grounding, and safety",
    ],
  },
];

export const SECONDARY_PROJECTS = [
  {
    name: "Customer Analytics Dashboard",
    category: "Full-Stack Web SPA",
    description:
      "A responsive MarTech analytics single-page application built with React 18, Tailwind CSS, and Recharts. Visualizes customer retention cohorts, churn trends, channel performance, and revenue breakdowns with CSV export.",
    stack: ["React 18", "JavaScript (ES6+)", "Recharts", "Tailwind CSS", "Context API", "Vercel"],
    githubUrl: "https://github.com/niraj2908/customer-analytics-dashboard",
    liveUrl: "https://customer-analytics-dashboard-tau.vercel.app",
    status: "Live & Deployed",
  },
  {
    name: "Magicpin VERA AI Platform",
    category: "Conversational AI Systems",
    description:
      "Deterministic conversational engagement system for restaurant commerce with a 5-endpoint HTTP contract, deterministic decision compiler, and strict claim firewall that prevents ungrounded AI claims.",
    stack: ["Python 3.11", "FastAPI", "Ruff", "Mypy Strict", "Pytest (109 tests)", "Prompt Firewall"],
    githubUrl: "https://github.com/niraj2908/migicpin_vera_chatbot",
    liveUrl: undefined,
    status: "109 Passing Tests (Offline)",
  },
  {
    name: "Arogyavan AI — Rural Healthcare",
    category: "AI System Design & Ideathon",
    description:
      "Award-winning concept and system architecture for an AI-powered symptom checker and health navigation platform tailored for low-bandwidth, rural healthcare centers.",
    stack: ["AI System Design", "Symptom Decision Trees", "Low-Connectivity Architectures"],
    githubUrl: "https://github.com/niraj2908",
    liveUrl: undefined,
    status: "1st Place Winner, Ideathon 2026 (SRM IST)",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python 3.11", "C++", "SQL (PostgreSQL/MySQL)"],
  },
  {
    category: "Full-Stack & Frontend",
    skills: ["Next.js 16/14 (App Router)", "React 19/18", "Tailwind CSS", "REST API Design", "HTML5 & Semantic Web"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "FastAPI (Python)", "MVC Architecture", "JWT & Session Auth"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "Prisma ORM (5 & 7)", "pgvector", "MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "AI & LLM Systems",
    skills: [
      "Groq API (Llama 3.3 70B)",
      "OpenAI & Gemini APIs",
      "RAG & Embeddings",
      "Deterministic Guardrails & Firewalls",
      "Prompt Engineering",
      "Blind Evaluation Suites",
    ],
  },
  {
    category: "Testing & Engineering Quality",
    skills: ["Vitest", "Pytest", "oxlint & ruff", "Architecture Tests", "Docker", "Git & GitHub", "Vercel"],
  },
];

export const EDUCATION_AND_CREDENTIALS = [
  {
    type: "education",
    title: "Bachelor of Technology — Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology, Delhi-NCR campus",
    period: "2023 – 2027 (Expected)",
    grade: "CGPA: 8.01 / 10",
    description:
      "Core coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming, and Computer Networks.",
  },
  {
    type: "award",
    title: "1st Place Winner — Ideathon 2026",
    institution: "SRM Institute of Science and Technology, Delhi-NCR",
    period: "April 2026",
    grade: "Gold Medal / Winner",
    description:
      "Led the concept design of Arogyavan AI, an AI-powered health triage and symptom-checking system designed for rural low-connectivity clinics.",
  },
  {
    type: "certification",
    title: "Meta Front-End Developer Professional Certificate",
    institution: "Meta (Coursera)",
    period: "Verified Credential",
    grade: "Certified",
    description:
      "Comprehensive mastery of modern React, responsive design principles, web accessibility, and front-end development workflows.",
  },
  {
    type: "certification",
    title: "JPMorgan Chase Software Engineering Simulation",
    institution: "Forage",
    period: "Verified Simulation",
    grade: "Completed",
    description:
      "Hands-on work with financial data visualization, interface integration, and developer tooling in enterprise software environments.",
  },
  {
    type: "certification",
    title: "Natural Language Processing (NLP)",
    institution: "NPTEL / IIT",
    period: "Coursework & Examination",
    grade: "Coursework Verified",
    description:
      "Foundational theory of sequence modeling, transformer architectures, tokenization, embeddings, and statistical language modeling.",
  },
];
