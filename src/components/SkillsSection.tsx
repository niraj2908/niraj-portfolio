export default function SkillsSection() {
  const skillGroups = [
    {
      group: "Languages",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "SQL (PostgreSQL/MySQL)"],
    },
    {
      group: "Frontend",
      skills: ["Next.js (App Router)", "React", "Tailwind CSS", "HTML5 & Web Standards"],
    },
    {
      group: "Backend & Databases",
      skills: ["Node.js", "Express", "FastAPI (Python)", "PostgreSQL", "Prisma ORM", "SQLite"],
    },
    {
      group: "AI & LLM Systems",
      skills: [
        "Groq API (Llama 3.3 70B)",
        "Gemini API",
        "RAG & Retrieval Pipelines",
        "Deterministic Guardrails",
        "Evaluation Suites",
      ],
    },
    {
      group: "Testing & Tools",
      skills: ["Vitest", "Pytest", "Git & GitHub", "Docker", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-t border-[#F3EFE6]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              Technical Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3EFE6] tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="mt-2 text-base text-[#9E9A91] max-w-xl leading-relaxed">
            Technologies and frameworks applied across my active codebases and verified academic coursework.
          </p>
        </div>

        {/* Clean Typographic Skill Rows */}
        <div className="divide-y divide-[#F3EFE6]/10 border-y border-[#F3EFE6]/10">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#D5D1C8] font-medium">
                  {group.group}
                </span>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-sm bg-[#141414] border border-[#F3EFE6]/10 text-xs font-mono text-[#D5D1C8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
