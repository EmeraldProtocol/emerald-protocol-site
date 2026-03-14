// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">

      {/* ═══ HERO ═══ */}
      <section className="ep-hero ep-hero-bg-animate px-6 py-12 sm:px-10 sm:py-16 md:flex md:items-center md:gap-14">
        <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
          {/* Logo + brand */}
          <div className="mb-4 flex items-center justify-center gap-4 md:justify-start ep-hero-logo-animate">
            <div className="relative h-20 w-20 md:h-24 md:w-24">
              <Image src="/emblem_1.png" alt="Emerald Protocol" fill className="object-contain" priority />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-[0.30em] text-ep_gold">EMERALD PROTOCOL</div>
              <div className="text-[9px] font-medium tracking-[0.35em] text-ep_gold_soft/50 uppercase">Structure the chaos</div>
            </div>
          </div>

          <div className="space-y-4 ep-hero-title-animate">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
              Learn Python from <span className="text-ep_emerald">absolute zero</span>.
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-ep_text_muted leading-relaxed">
              Emerald Protocol is an AI-powered learning platform with three intelligent agents.
              It teaches you the Python alphabet before you write a single line of code,
              then guides you through 7 phases of real programming — with binary validation
              that ensures you actually understand.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2 ep-hero-ctas-animate md:justify-start">
            <a href="/demo" className="ep-btn-primary">Try the Demo</a>
            <a href="/how-it-works" className="ep-btn-ghost">How It Works</a>
          </div>
        </div>

        {/* Right: Gate cycle preview */}
        <div className="relative z-10 mt-10 flex-1 max-w-md mx-auto md:mt-0 md:max-w-none">
          <div className="ep-card p-5 sm:p-6">
            <div className="text-[10px] tracking-[0.25em] text-ep_text_muted uppercase mb-4">The Gate Cycle</div>
            <div className="space-y-2">
              {[
                { stage: "INSTALL", label: "Learn the concept", color: "#34D399", icon: "📖" },
                { stage: "PREDICT", label: "Predict the output", color: "#60A5FA", icon: "🔮" },
                { stage: "EVALUATE", label: "Run your code", color: "#F59E0B", icon: "▶" },
                { stage: "REFLECT", label: "Explain why", color: "#A78BFA", icon: "💭" },
                { stage: "DRILL", label: "Reinforce", color: "#F472B6", icon: "⚡" },
                { stage: "CERTIFY", label: "Section complete", color: "#34D399", icon: "✓" },
              ].map((s) => (
                <div key={s.stage} className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-3 py-2.5">
                  <span className="text-sm">{s.icon}</span>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold tracking-wider" style={{ color: s.color }}>{s.stage}</span>
                    <span className="text-[11px] text-ep_text_muted ml-2">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-ep_text_dim mt-3 text-center">Every section. No shortcuts. No partial credit.</p>
          </div>
        </div>
      </section>

      {/* ═══ THREE AGENTS ═══ */}
      <section className="space-y-6">
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Three Intelligent Agents</p>
          <h2 className="text-2xl md:text-3xl font-bold">Each one has a role. None can be fooled.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Aurum */}
          <div className="ep-card p-6 border-ep_gold_soft/15 hover:shadow-ep-glow-gold">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(244,211,139,0.1)", border: "1px solid rgba(244,211,139,0.2)" }}>
                <Image src="/logo_B.png" alt="Aurum" width={28} height={28} className="rounded-lg object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-ep_gold">AURUM</div>
                <div className="text-[10px] text-ep_text_muted">Adaptive Mentor</div>
              </div>
            </div>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              Your AI tutor. Aurum teaches concepts, adapts to your learning style,
              and guides your thinking without giving answers. In Phase 0 it answers
              freely. In Phase 1+ it becomes Socratic — making you reason through problems.
            </p>
          </div>

          {/* Obsidian */}
          <div className="ep-card p-6 border-white/10 hover:shadow-ep-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,32,32,0.08)", border: "1px solid rgba(139,32,32,0.2)" }}>
                <Image src="/logo_C.png" alt="Obsidian" width={28} height={28} className="rounded-lg object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-white/70">OBSIDIAN</div>
                <div className="text-[10px] text-ep_text_muted">Binary Validator</div>
              </div>
            </div>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              The judge. Obsidian validates every submission with one rule: PASS or FAIL.
              No partial credit. No "close enough." It detects gaming, hardcoded outputs,
              and copy-paste. Your code either works or it doesn&apos;t.
            </p>
          </div>

          {/* Sapphire */}
          <div className="ep-card p-6 border-ep_sapphire/15 hover:shadow-ep-glow-blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.2)" }}>
                <Image src="/logo_A.png" alt="Sapphire" width={28} height={28} className="rounded-lg object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-ep_sapphire">SAPPHIRE</div>
                <div className="text-[10px] text-ep_text_muted">Silent Analyst</div>
              </div>
            </div>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              The observer. Sapphire silently records everything — your momentum, accuracy,
              frustration, engagement. It computes 8 cognitive vectors that tell Aurum how
              to adapt and when to intervene. You never interact with Sapphire directly.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TWO CURRICULA ═══ */}
      <section className="space-y-6">
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Two Curricula</p>
          <h2 className="text-2xl md:text-3xl font-bold">Learn the alphabet. Then write the words.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Phase 0 */}
          <div className="ep-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold tracking-wider text-ep_emerald">CURRICULUM 1</span>
              <span className="text-[10px] text-ep_text_dim">•</span>
              <span className="text-[11px] text-ep_text_muted">Phase 0</span>
            </div>
            <h3 className="text-xl font-bold mb-3">The Python Alphabet</h3>
            <p className="text-[13px] text-ep_text_muted leading-relaxed mb-4">
              50 concepts across 10 blocks. Every Python symbol taught one at a time —
              quotation marks, parentheses, equals signs, brackets. Each concept gets
              a full lesson with metaphors, visuals, examples, and quizzes.
              No code writing. Just understanding.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_emerald font-bold">50</span>
                <span className="text-ep_text_muted ml-1">concepts</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_emerald font-bold">10</span>
                <span className="text-ep_text_muted ml-1">blocks</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_emerald font-bold">155+</span>
                <span className="text-ep_text_muted ml-1">quiz questions</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_emerald font-bold">0</span>
                <span className="text-ep_text_muted ml-1">lines of code</span>
              </div>
            </div>
          </div>

          {/* Phase 1-7 */}
          <div className="ep-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold tracking-wider text-ep_gold">CURRICULUM 2</span>
              <span className="text-[10px] text-ep_text_dim">•</span>
              <span className="text-[11px] text-ep_text_muted">Phases 1–7</span>
            </div>
            <h3 className="text-xl font-bold mb-3">The Coding Journey</h3>
            <p className="text-[13px] text-ep_text_muted leading-relaxed mb-4">
              63 sections across 7 phases. From Hello World to object-oriented programming.
              Every section follows the 6-stage gate cycle. Aurum mentors. Obsidian validates.
              Sapphire tracks your cognitive state. Real code, real execution, real skills.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_gold font-bold">7</span>
                <span className="text-ep_text_muted ml-1">phases</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_gold font-bold">63</span>
                <span className="text-ep_text_muted ml-1">sections</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_gold font-bold">6</span>
                <span className="text-ep_text_muted ml-1">gate stages</span>
              </div>
              <div className="rounded-lg bg-black/30 border border-white/5 p-2.5">
                <span className="text-ep_gold font-bold">PASS/FAIL</span>
                <span className="text-ep_text_muted ml-1">binary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES EP DIFFERENT ═══ */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold tracking-wide text-ep_text_muted">
          What makes Emerald Protocol different?
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="ep-card p-5">
            <h3 className="text-sm font-bold mb-2">Not a course. A system.</h3>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              No videos. No lectures. EP is an intelligent system that adapts to how you think,
              tracks your cognitive state across 8 vectors, and adjusts everything in real time.
            </p>
          </div>
          <div className="ep-card p-5">
            <h3 className="text-sm font-bold mb-2">Binary validation.</h3>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              Your code works or it doesn&apos;t. No partial credit. No "close enough."
              This is how real engineering works. EP prepares you for it from day one.
            </p>
          </div>
          <div className="ep-card p-5">
            <h3 className="text-sm font-bold mb-2">Cognitive calibration.</h3>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              Before you start, 15 reasoning tasks generate your learning vector —
              a 4-dimensional profile that tells Aurum exactly how to teach you.
              Structure vs freedom. Theory vs practice. Solo vs guided. Cautious vs bold.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to structure the chaos?</h2>
        <p className="text-ep_text_muted mb-6 max-w-md mx-auto text-sm">
          Start with Phase 0. Learn the alphabet. Then write the code.
        </p>
        <a href="/demo" className="ep-btn-primary text-sm px-8 py-3">
          Try the Demo
        </a>
      </section>
    </div>
  );
}
