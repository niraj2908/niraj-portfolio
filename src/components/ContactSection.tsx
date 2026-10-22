"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-[#F3EFE6]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3EFE6] tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-base text-[#9E9A91] max-w-xl leading-relaxed">
            I am open to full-stack developer and AI engineering opportunities, internships, and engineering discussions. Feel free to send an email or connect on LinkedIn.
          </p>
        </div>

        {/* Clean Contact Row */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#F3EFE6]/10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#8E8A82] uppercase tracking-wider block mb-1">
                Email Address
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-semibold text-lg sm:text-xl text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#181818] hover:bg-[#202020] border border-[#F3EFE6]/10 text-xs font-mono text-[#D5D1C8] transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8E8A82]" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#D7192D] hover:bg-[#B71224] text-white text-xs font-mono font-medium transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct Profiles & Resume */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-mono text-[#9E9A91]">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
              aria-label="Niraj Kumar Singh LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-[#F3EFE6]/20">·</span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
              aria-label="Niraj Kumar Singh GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-[#F3EFE6]/20">·</span>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Niraj_Kumar_Singh_Resume.pdf"
              className="flex items-center gap-2 text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
              aria-label="Download verified resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          <div className="text-[#8E8A82]">
            Delhi-NCR, India
          </div>
        </div>

      </div>
    </section>
  );
}
