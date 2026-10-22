import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] border-t border-[#F3EFE6]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3EFE6] tracking-tight">
            Background &amp; Approach
          </h2>
        </div>

        {/* Natural Narrative */}
        <div className="space-y-6 text-base sm:text-lg text-[#D5D1C8] leading-relaxed font-normal">
          <p>
            I&apos;m a Computer Science and Engineering student at SRM IST Delhi-NCR, graduating in 2027. I enjoy building full-stack applications and exploring practical ways to use AI in software. My projects cover web applications, system design, and AI-assisted workflows, with an emphasis on writing reliable code and testing the systems I build.
          </p>

          <p>
            Whether implementing schema-driven backends with PostgreSQL, building deterministic validation pipelines for AI outputs, or refining responsive interfaces with Next.js, I care deeply about code quality, sensible defaults, and measurable engineering outcomes.
          </p>
        </div>

        {/* Fact Summary Grid */}
        <div className="mt-12 pt-8 border-t border-[#F3EFE6]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-mono text-[#8E8A82] uppercase tracking-wider block mb-1">
              Education
            </span>
            <span className="text-sm font-semibold text-[#F3EFE6] block">
              B.Tech in CSE (Core)
            </span>
            <span className="text-xs text-[#9E9A91] block mt-0.5">
              SRM IST Delhi-NCR · 2027
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-[#8E8A82] uppercase tracking-wider block mb-1">
              Academics
            </span>
            <span className="text-sm font-semibold text-[#F3EFE6] block">
              CGPA: 8.01 / 10
            </span>
            <span className="text-xs text-[#9E9A91] block mt-0.5">
              1st Place, Ideathon 2026
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-[#8E8A82] uppercase tracking-wider block mb-1">
              Connect
            </span>
            <div className="flex items-center gap-4 mt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#F3EFE6] hover:text-[#D7192D] transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#F3EFE6]/20">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#F3EFE6] hover:text-[#D7192D] transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
