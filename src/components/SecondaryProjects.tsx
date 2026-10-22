import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SECONDARY_PROJECTS } from "@/data/portfolio-data";

export default function SecondaryProjects() {
  return (
    <section className="py-20 bg-[#0d0d0d] border-t border-[#F3EFE6]/10 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              Additional Builds
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE6] tracking-tight">
            Prototypes &amp; Hackathon Projects
          </h3>
          <p className="mt-2 text-[#9E9A91] text-sm max-w-xl leading-relaxed">
            Targeted single-page applications, challenge submissions, and system architectures.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECONDARY_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#121212] border border-[#F3EFE6]/10 hover:border-[#F3EFE6]/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8E8A82]">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#D7192D]">
                    {proj.status}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-[#F3EFE6] mb-2">
                  {proj.name}
                </h4>

                <p className="text-xs text-[#9E9A91] leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#161616] text-[11px] font-mono text-[#D5D1C8] border border-[#F3EFE6]/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#F3EFE6]/5 flex items-center gap-4 text-xs font-mono">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8E8A82] hover:text-[#F3EFE6] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
