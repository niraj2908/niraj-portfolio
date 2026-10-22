"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Name, Subtitle, Narrative & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Subtle Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
              <p className="text-xs font-mono tracking-wider text-[#9E9A91] uppercase">
                B.Tech CSE &apos;27 · SRM IST Delhi-NCR
              </p>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#F3EFE6] leading-[1.05] mb-4">
              Niraj Kumar Singh
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-display font-medium text-[#D5D1C8] mb-6">
              Full-Stack Developer &amp; AI Engineer in the Making
            </h2>

            {/* Authentic Introduction */}
            <p className="text-base text-[#9E9A91] font-normal leading-relaxed max-w-xl mb-8">
              I am an undergraduate Computer Science student building full-stack web applications and practical AI systems. I focus on clean architecture, thorough testing, and software designed for real-world reliability.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="px-5 py-3 rounded-sm bg-[#D7192D] hover:bg-[#B71224] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-[#D7192D]/15 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeFile}
                download="Niraj_Kumar_Singh_Resume.pdf"
                className="px-4 py-3 rounded-sm bg-[#141414] hover:bg-[#1f1f1f] border border-[#F3EFE6]/15 hover:border-[#F3EFE6]/30 text-[#F3EFE6] font-mono text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-2"
                aria-label="Download verified resume PDF"
              >
                <Download className="w-4 h-4 text-[#D7192D]" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-3 rounded-sm bg-transparent hover:bg-[#141414] text-[#A39F97] hover:text-[#F3EFE6] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-6 border-t border-[#F3EFE6]/10">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#9E9A91] hover:text-[#F3EFE6] transition-colors"
                aria-label="Niraj's GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#F3EFE6]" />
                <span>GitHub</span>
              </a>

              <span className="text-[#F3EFE6]/20">·</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#9E9A91] hover:text-[#F3EFE6] transition-colors"
                aria-label="Niraj's LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#F3EFE6]" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#F3EFE6]/20">·</span>

              <span className="text-xs font-mono text-[#625F59]">
                CGPA 8.01 / 10
              </span>
            </div>

          </div>

          {/* Right Column: Genuine Portrait Photography (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-sm overflow-hidden bg-[#141414] border border-[#F3EFE6]/10 shadow-2xl shadow-black/80">
              <Image
                src={PERSONAL_INFO.portraitImage}
                alt="Portrait of Niraj Kumar Singh"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover object-top filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
