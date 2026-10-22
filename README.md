# Niraj Kumar Singh — Personal Portfolio

A fast, responsive, and editorial developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **React 19**. Designed with a refined dark editorial aesthetic to showcase full-stack web applications, evaluated AI systems, and engineering case studies.

---

## 🚀 Live Deployment

- **Live Website**: [https://niraj-portfolio-seven.vercel.app/](https://niraj-portfolio-seven.vercel.app/)
- **GitHub Repository**: [https://github.com/niraj2908/niraj-portfolio](https://github.com/niraj2908/niraj-portfolio)
- **LinkedIn**: [https://www.linkedin.com/in/niraj-kumar-singh-44b294375/](https://www.linkedin.com/in/niraj-kumar-singh-44b294375/)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono via `next/font`
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📌 Featured Projects & Case Studies

1. **[Revenue Recovery Intelligence](https://github.com/niraj2908/revenue-recovery-intelligence)** *(Razorpay AI Buildathon 2026, Track 3)*
   - Economic decision layer for failed payment recovery on Razorpay.
   - Computes expected counterfactual recovery value ($E[V]$) before triggering interventions.
   - Implements HMAC-SHA256 constant-time webhook verification, event deduplication, and operator authorization safety gates.
   - *Stack: Next.js 16, TypeScript, PostgreSQL, Prisma, Razorpay APIs.*

2. **[DesignReview](https://github.com/niraj2908/lld-design-review)**
   - Evidence-grounded practice and structured review platform for Low-Level Design (LLD).
   - 2-stage evaluation engine pairing deterministic structural checks with an AI semantic judge (Groq Llama 3.3 70B) citing verified OOP principles.
   - Comprehensive Vitest architecture test suite achieving 88.66% statement coverage.
   - *Stack: Next.js 16, React 19, PostgreSQL, Prisma, Groq API, Vitest.*

3. **[Xeno CRM](https://github.com/niraj2908/xeno-crm)**
   - Full-stack customer engagement platform translating natural language prompts into structured audience segments via Groq (Llama 3.3 70B).
   - Contextual WhatsApp campaign generator with live condition building and Recharts analytics.
   - *Stack: Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Groq API, Recharts.*

4. **[Hiver Support Agent](https://github.com/niraj2908/hiver-support-agent)**
   - Grounded AI customer support agent evaluated on 8,000+ support interactions.
   - 7-rule deterministic escalation policy where rules strictly escalate to human review.
   - 518 automated tests running 100% offline with zero live API dependencies.
   - *Stack: Python 3.11, FastAPI, SQLite, Scikit-learn, Groq & Gemini APIs.*

5. **[Customer Analytics Dashboard](https://github.com/niraj2908/customer-analytics-dashboard)**
   - Responsive MarTech single-page analytics application visualizing customer retention cohorts, churn trends, and channel metrics.
   - *Stack: React 18, Recharts, Tailwind CSS, Context API.*

---

## 📂 Project Structure

```text
portfolio.nsr/
├── public/
│   ├── assets/
│   │   ├── niraj-photo.jpg            # Authentic portrait photograph
│   │   ├── niraj-resume.pdf           # Downloadable verified resume
│   │   ├── lld-preview.png            # DesignReview screenshot
│   │   ├── xeno-preview.png           # Xeno CRM screenshot
│   │   ├── analytics-preview.png      # Analytics Dashboard screenshot
│   │   └── revenue-recovery/          # Revenue Recovery UI gallery
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css                # Custom theme variables and styling
│   │   ├── layout.tsx                 # Root layout, typography, metadata
│   │   └── page.tsx                   # Main editorial portfolio page
│   ├── components/
│   │   ├── Navbar.tsx                 # Responsive header with navigation
│   │   ├── Hero.tsx                   # Editorial hero with portrait & CTAs
│   │   ├── ProjectShowcase.tsx        # Selected case studies presentation
│   │   ├── SecondaryProjects.tsx      # Additional builds & prototypes
│   │   ├── AboutMe.tsx                # Grounded academic narrative
│   │   ├── SkillsSection.tsx          # Categorized technical tooling
│   │   ├── EducationSection.tsx       # Timeline of degree & honors
│   │   ├── ContactSection.tsx         # Clean email copy & contact actions
│   │   ├── Footer.tsx                 # Site footer with social links
│   │   └── Icons.tsx                  # Custom SVG icons
│   └── data/
│       └── portfolio-data.ts          # Centralized data source of truth
├── next.config.ts                     # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: v18.18 or higher (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niraj2908/niraj-portfolio.git
   cd niraj-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 Quality & Build Commands

- **Run Linting**:
  ```bash
  npm run lint
  ```
- **Create Production Build**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run start
  ```

---

## 📬 Contact & Connect

- **Name**: Niraj Kumar Singh
- **Email**: [nirajsingh0925@gmail.com](mailto:nirajsingh0925@gmail.com)
- **LinkedIn**: [linkedin.com/in/niraj-kumar-singh-44b294375](https://www.linkedin.com/in/niraj-kumar-singh-44b294375/)
- **GitHub**: [github.com/niraj2908](https://github.com/niraj2908)
- **Location**: Delhi-NCR, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
