"use client";

import Image from "next/image";
import { ExternalLink, Check, Shield } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";

export default function ProjectShowcase() {
  const revProject = FEATURED_PROJECTS.find((p) => p.id === "revenue-recovery")!;
  const lldProject = FEATURED_PROJECTS.find((p) => p.id === "lld-design-review")!;
  const xenoProject = FEATURED_PROJECTS.find((p) => p.id === "xeno-crm")!;
  const hiverProject = FEATURED_PROJECTS.find((p) => p.id === "hiver-support-agent")!;

  return (
    <section id="projects" className="py-28 bg-[#0a0a0a] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3EFE6] tracking-tight">
            Selected Case Studies
          </h2>
          <p className="mt-3 text-base text-[#9E9A91] max-w-2xl leading-relaxed">
            Case studies of full-stack systems, evaluated AI workflows, and data pipelines built with Next.js, PostgreSQL, and LLM APIs.
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-28">

          {/* ============================================================== */}
          {/* CASE STUDY 1: REVENUE RECOVERY INTELLIGENCE */}
          {/* ============================================================== */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Screenshot (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#121212] border border-[#F3EFE6]/10 shadow-2xl group">
                <Image
                  src={revProject.previewImage || "/assets/revenue-recovery/02-overview.png"}
                  alt="Revenue Recovery Intelligence Dashboard Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Content & Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D7192D]">
                <span>{revProject.highlightBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE6] tracking-tight mb-2">
                {revProject.name}
              </h3>
              
              <p className="font-mono text-xs text-[#9E9A91] mb-4">
                {revProject.tagline}
              </p>

              <div className="space-y-3 text-sm text-[#D5D1C8] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Problem: </strong>
                  {revProject.problem}
                </p>
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Implementation: </strong>
                  {revProject.solution}
                </p>
              </div>

              {/* Meaningful Technical Decisions */}
              <div className="mb-6 space-y-2 text-xs text-[#9E9A91] font-mono border-l border-[#D7192D]/40 pl-3">
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>HMAC-SHA256 constant-time webhook authentication with event deduplication</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>Counterfactual value model with mandatory operator approval gate</span>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {revProject.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-[#161616] text-[11px] font-mono text-[#D5D1C8] border border-[#F3EFE6]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F3EFE6]/10">
                {revProject.liveUrl && (
                  <a
                    href={revProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={revProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#9E9A91] hover:text-[#F3EFE6] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </article>

          {/* ============================================================== */}
          {/* CASE STUDY 2: DESIGN REVIEW (ALTERNATED LAYOUT) */}
          {/* ============================================================== */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content & Details (5 cols) - First on Desktop */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D7192D]">
                <span>{lldProject.highlightBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE6] tracking-tight mb-2">
                {lldProject.name}
              </h3>
              
              <p className="font-mono text-xs text-[#9E9A91] mb-4">
                {lldProject.tagline}
              </p>

              <div className="space-y-3 text-sm text-[#D5D1C8] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Problem: </strong>
                  {lldProject.problem}
                </p>
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Implementation: </strong>
                  {lldProject.solution}
                </p>
              </div>

              {/* Meaningful Technical Decisions */}
              <div className="mb-6 space-y-2 text-xs text-[#9E9A91] font-mono border-l border-[#D7192D]/40 pl-3">
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>2-stage pipeline: deterministic validation rules + Groq Llama 3.3 70B semantic judge</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>Comprehensive Vitest architecture suite (88.66% statement coverage)</span>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {lldProject.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-[#161616] text-[11px] font-mono text-[#D5D1C8] border border-[#F3EFE6]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F3EFE6]/10">
                {lldProject.liveUrl && (
                  <a
                    href={lldProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={lldProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#9E9A91] hover:text-[#F3EFE6] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Visual Screenshot (7 cols) - Second on Desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#121212] border border-[#F3EFE6]/10 shadow-2xl group">
                <Image
                  src={lldProject.previewImage || "/assets/lld-preview.png"}
                  alt="DesignReview Low Level Design Platform Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </article>

          {/* ============================================================== */}
          {/* CASE STUDY 3: XENO CRM */}
          {/* ============================================================== */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Screenshot (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#121212] border border-[#F3EFE6]/10 shadow-2xl group">
                <Image
                  src={xenoProject.previewImage || "/assets/xeno-preview.png"}
                  alt="Xeno CRM Application Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Content & Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D7192D]">
                <span>{xenoProject.highlightBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE6] tracking-tight mb-2">
                {xenoProject.name}
              </h3>
              
              <p className="font-mono text-xs text-[#9E9A91] mb-4">
                {xenoProject.tagline}
              </p>

              <div className="space-y-3 text-sm text-[#D5D1C8] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Problem: </strong>
                  {xenoProject.problem}
                </p>
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Implementation: </strong>
                  {xenoProject.solution}
                </p>
              </div>

              {/* Meaningful Technical Decisions */}
              <div className="mb-6 space-y-2 text-xs text-[#9E9A91] font-mono border-l border-[#D7192D]/40 pl-3">
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>Translates plain English audience prompts into validated JSON filters via Groq</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>Interactive customer segmentation builder and Recharts analytics dashboard</span>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {xenoProject.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-[#161616] text-[11px] font-mono text-[#D5D1C8] border border-[#F3EFE6]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F3EFE6]/10">
                {xenoProject.liveUrl && (
                  <a
                    href={xenoProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={xenoProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#9E9A91] hover:text-[#F3EFE6] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </article>

          {/* ============================================================== */}
          {/* CASE STUDY 4: HIVER SUPPORT AGENT (RESEARCH PROTOTYPE) */}
          {/* ============================================================== */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content & Details (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D7192D]">
                <span>{hiverProject.highlightBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3EFE6] tracking-tight mb-2">
                {hiverProject.name}
              </h3>
              
              <p className="font-mono text-xs text-[#9E9A91] mb-4">
                {hiverProject.tagline}
              </p>

              <div className="space-y-3 text-sm text-[#D5D1C8] leading-relaxed mb-6">
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Problem: </strong>
                  {hiverProject.problem}
                </p>
                <p>
                  <strong className="text-[#F3EFE6] font-medium">Implementation: </strong>
                  {hiverProject.solution}
                </p>
              </div>

              {/* Technical Invariants */}
              <div className="mb-6 space-y-2 text-xs text-[#9E9A91] font-mono border-l border-[#D7192D]/40 pl-3">
                <div className="flex items-start gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>Strict escalation policy: rules can only escalate to human review</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D7192D] shrink-0 mt-0.5" />
                  <span>518 deterministic tests running 100% offline with zero live API dependencies</span>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {hiverProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-[#161616] text-[11px] font-mono text-[#D5D1C8] border border-[#F3EFE6]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F3EFE6]/10">
                <a
                  href={hiverProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#F3EFE6] hover:text-[#D7192D] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
                <span className="text-[11px] font-mono text-[#8E8A82]">
                  [Backend &amp; Benchmark Evaluation Suite]
                </span>
              </div>
            </div>

            {/* Architecture Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-sm bg-[#121212] border border-[#F3EFE6]/10 font-mono text-xs">
                <div className="text-[#8E8A82] uppercase tracking-wider mb-4 pb-2 border-b border-[#F3EFE6]/10 flex items-center justify-between">
                  <span>Architecture Safeguards</span>
                  <span className="text-emerald-400">Offline Verified</span>
                </div>
                <div className="space-y-4 text-[#D5D1C8]">
                  <div>
                    <span className="text-[#D7192D] font-bold block mb-1">01 / Escalation-Only Policy</span>
                    <p className="text-[#9E9A91] leading-relaxed">
                      Safety gate rejects automated handling when evidence citations fall below threshold or ambiguity is detected.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D7192D] font-bold block mb-1">02 / Historical TF-IDF Retrieval</span>
                    <p className="text-[#9E9A91] leading-relaxed">
                      Grounds responses against 8,000+ real Kaggle customer support interactions.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#D7192D] font-bold block mb-1">03 / Language Gate</span>
                    <p className="text-[#9E9A91] leading-relaxed">
                      Strict classification across 7 supported languages; routes unsupported queries directly to human teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
