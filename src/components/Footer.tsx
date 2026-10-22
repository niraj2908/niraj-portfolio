import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#F3EFE6]/10 py-10 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#F3EFE6]/5">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-semibold text-base text-[#F3EFE6]">
              Niraj Kumar Singh
            </span>
            <span className="font-mono text-xs text-[#8E8A82] mt-0.5">
              B.Tech CSE (Class of 2027) · SRM IST Delhi-NCR
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-[#9E9A91]">
            <a href="#projects" className="hover:text-[#F3EFE6] transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-[#F3EFE6] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#F3EFE6] transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-[#F3EFE6] transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-[#F3EFE6] transition-colors">
              Contact
            </a>
          </div>

          <div>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#121212] hover:bg-[#1a1a1a] border border-[#F3EFE6]/10 text-xs font-mono text-[#D5D1C8] hover:text-[#F3EFE6] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D7192D]" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#625F59]">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3EFE6] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3EFE6] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div>
            <span>© 2026 Niraj Kumar Singh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
