"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#F3EFE6]/10 py-3.5 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name in simple, confident text */}
          <Link
            href="#"
            className="group flex flex-col transition-opacity hover:opacity-90"
            aria-label="Niraj Kumar Singh - Home"
          >
            <span className="font-display font-semibold tracking-tight text-base sm:text-lg text-[#F3EFE6]">
              Niraj Kumar Singh
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#8E8A82]">
              Full-Stack &amp; AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-[#9E9A91] hover:text-[#F3EFE6] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PERSONAL_INFO.resumeFile}
              download="Niraj_Kumar_Singh_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#151515] hover:bg-[#1f1f1f] border border-[#F3EFE6]/15 hover:border-[#F3EFE6]/30 text-[#F3EFE6] font-mono text-xs transition-all"
              aria-label="Download resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#D7192D]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-sm bg-[#D7192D] hover:bg-[#B71224] text-white font-mono text-xs font-medium transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeFile}
              download="Niraj_Kumar_Singh_Resume.pdf"
              className="p-2 rounded-sm bg-[#151515] border border-[#F3EFE6]/15 text-[#F3EFE6]"
              aria-label="Download resume PDF"
            >
              <Download className="w-4 h-4 text-[#D7192D]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-[#151515] border border-[#F3EFE6]/15 text-[#F3EFE6] hover:bg-[#1f1f1f]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-[#F3EFE6]/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-[#D5D1C8] hover:text-[#D7192D] transition-colors py-2 border-b border-[#F3EFE6]/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-2.5 rounded-sm bg-[#D7192D] hover:bg-[#B71224] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
