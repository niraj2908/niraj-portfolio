import { EDUCATION_AND_CREDENTIALS } from "@/data/portfolio-data";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[#0d0d0d] border-t border-[#F3EFE6]/10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D7192D] rounded-full inline-block"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
              Academics &amp; Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F3EFE6] tracking-tight">
            Education &amp; Honors
          </h2>
        </div>

        {/* Editorial Timeline / List */}
        <div className="divide-y divide-[#F3EFE6]/10 border-y border-[#F3EFE6]/10">
          {EDUCATION_AND_CREDENTIALS.map((item, idx) => {
            const isAward = item.type === "award";

            return (
              <div
                key={idx}
                className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
              >
                <div className="md:max-w-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold text-base sm:text-lg text-[#F3EFE6]">
                      {item.title}
                    </h3>
                    {isAward && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D7192D] text-white uppercase tracking-wider">
                        1st Place
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs text-[#9E9A91] mb-2">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A39F97] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center md:flex-col md:items-end justify-between md:justify-start gap-1 font-mono text-xs shrink-0">
                  <span className="text-[#F3EFE6] font-medium">
                    {item.grade}
                  </span>
                  <span className="text-[#8E8A82] text-[11px]">
                    {item.period}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
