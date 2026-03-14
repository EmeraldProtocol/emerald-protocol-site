// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-0">

      {/* ═══════════════════════════════════════════════════════════
          HERO — "Prove you understand"
      ═══════════════════════════════════════════════════════════ */}
      <section className="ep-hero px-6 py-14 sm:px-10 sm:py-20 md:flex md:items-center md:gap-14 mb-20">
        <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
          <div className="mb-5 flex items-center justify-center gap-4 md:justify-start ep-hero-logo-animate">
            <div className="relative h-20 w-20 md:h-24 md:w-24">
              <Image src="/emblem_1.png" alt="Emerald Protocol" fill className="object-contain drop-shadow-[0_0_20px_rgba(0,242,169,0.2)]" priority />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-[0.30em] text-ep_gold">EMERALD PROTOCOL</div>
              <div className="text-[9px] font-medium tracking-[0.35em] text-ep_gold_soft/50 uppercase">Structure the chaos</div>
            </div>
          </div>

          <div className="space-y-4 ep-hero-title-animate">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-ep_emerald/60">AI-Powered Python Learning Platform</p>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-[3.2rem] leading-[1.1]">
              Don&apos;t just learn Python.
              <br />
              <span className="ep-glow-text text-ep_emerald">Prove you understand it.</span>
            </h1>
            <p className="max-w-xl text-[15px] text-ep_text_muted leading-relaxed">
              Three AI agents. Binary validation. A curriculum that starts with the alphabet
              before the first line of code. Emerald Protocol doesn&apos;t teach you to copy —
              it forces you to understand.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-3 ep-hero-ctas-animate md:justify-start">
            <a href="/demo" className="ep-btn-primary">Try the Demo</a>
            <a href="/how-it-works" className="ep-btn-ghost">How It Works →</a>
          </div>
        </div>

        {/* Right: animated stats */}
        <div className="relative z-10 mt-12 flex-1 max-w-sm mx-auto md:mt-0 md:max-w-none ep-hero-right-animate">
          <div className="grid grid-cols-2 gap-3">
            <StatCard number="3" label="AI Agents" sublabel="Teach • Validate • Analyze" />
            <StatCard number="50" label="Phase 0 Concepts" sublabel="The Python Alphabet" />
            <StatCard number="63" label="Coding Sections" sublabel="Phases 1–7" />
            <StatCard number="0" label="Partial Credit" sublabel="PASS or FAIL only" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE DIFFERENCE — Comparison Table
      ═══════════════════════════════════════════════════════════ */}
      <section className="mb-20 ep-reveal">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Why This Is Different</p>
          <h2 className="text-2xl md:text-3xl font-bold">Traditional courses teach you to copy.<br /><span className="text-ep_emerald">EP teaches you to understand.</span></h2>
        </div>

        <div className="max-w-2xl mx-auto ep-glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 gap-0 text-[11px] font-bold tracking-wider uppercase border-b border-white/5">
            <div className="px-6 py-4 text-ep_text_muted bg-white/[0.02]">Traditional Courses</div>
            <div className="px-6 py-4 text-ep_emerald">Emerald Protocol</div>
          </div>
          {/* Rows */}
          {[
            ["Watch videos passively", "Interactive reasoning with AI mentor"],
            ["Quiz with multiple choice", "Binary code validation — works or doesn't"],
            ["Progress = time spent", "Progress = proven understanding"],
            ["One-size-fits-all pace", "Cognitive calibration adapts to you"],
            ["Start with 'Hello World'", "Start with the alphabet (Phase 0)"],
            ["Skip ahead freely", "Gate cycle blocks weak foundations"],
            ["Generic feedback", "3 specialized AI agents working together"],
            ["Certificate of completion", "Certificate of understanding"],
          ].map(([trad, ep], i) => (
            <div key={i} className={`grid grid-cols-2 gap-0 text-[13px] border-b border-white/[0.03] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
              <div className="px-6 py-3.5 text-ep_text_muted/70 flex items-center gap-2">
                <span className="text-red-400/40 text-[10px]">✕</span> {trad}
              </div>
              <div className="px-6 py-3.5 text-ep_text flex items-center gap-2">
                <span className="text-ep_emerald text-[10px]">✓</span> {ep}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THREE AGENTS — Premium Cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Three Intelligent Agents</p>
          <h2 className="text-2xl md:text-3xl font-bold">Each one has a role.<br />None can be fooled.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <AgentCard
            logo="/aurum.svg"
            name="AURUM"
            role="Adaptive Mentor"
            color="#F5C542"
            glowClass="hover:shadow-ep-glow-gold"
            desc="Your patient AI tutor. Adapts to your learning style in real time. Teaches freely in Phase 0. Becomes Socratic in Phase 1+ — guiding your thinking without giving answers."
            features={["Cognitive calibration-aware", "Real-time adaptation via Sapphire", "Per-concept context in Phase 0", "Conversational, warm, never robotic"]}
          />
          <AgentCard
            logo="/obsidian.svg"
            name="OBSIDIAN"
            role="Binary Validator"
            color="#8B8FA3"
            glowClass="hover:shadow-[0_0_40px_rgba(139,32,32,0.2)]"
            desc="The judge. Every submission: PASS or FAIL. 7 anti-gaming detectors catch hardcoded outputs, copy-paste, and minimal effort. No partial credit. No exceptions."
            features={["4-stage validation pipeline", "7 anti-gaming detectors", "9 criteria types", "Strict mode in Phase 4+"]}
          />
          <AgentCard
            logo="/sapphire.svg"
            name="SAPPHIRE"
            role="Silent Analyst"
            color="#60A5FA"
            glowClass="hover:shadow-ep-glow-blue"
            desc="The observer. Records everything silently. Computes 8 cognitive vectors that tell Aurum how to adapt and when to intervene. You never interact with Sapphire directly."
            features={["Momentum & accuracy tracking", "Frustration & guessing detection", "Hint dependency analysis", "Engagement scoring"]}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TWO CURRICULA — Side by Side
      ═══════════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Two Curricula</p>
          <h2 className="text-2xl md:text-3xl font-bold">Learn the letters. Then write the words.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Phase 0 */}
          <div className="ep-card p-7 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ep_emerald/[0.03] rounded-full blur-3xl group-hover:bg-ep_emerald/[0.06] transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] font-extrabold tracking-wider text-ep_emerald">CURRICULUM 1</span>
                <span className="ep-pill text-ep_emerald">No Code</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Python Alphabet</h3>
              <p className="text-[14px] text-ep_text_muted leading-relaxed mb-6">
                50 concepts. 10 blocks. Every Python symbol taught one at a time with
                metaphors, visuals, code examples, and quizzes. Aurum in full teacher mode.
                You don&apos;t write a single line of code — you just understand.
              </p>

              {/* Progress teaser */}
              <div className="mb-5">
                <div className="flex justify-between text-[11px] mb-2">
                  <span className="text-ep_text_muted">Phase 0 Progress</span>
                  <span className="text-ep_emerald font-bold">Demo: 50%</span>
                </div>
                <div className="ep-progress-bar">
                  <div className="ep-progress-fill" style={{ width: '50%' }} />
                </div>
                <div className="flex justify-between text-[9px] text-ep_text_dim mt-1.5">
                  <span>Block 0: How Computers Think</span>
                  <span>25/50 concepts</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <MiniStat value="50" label="concepts" />
                <MiniStat value="155+" label="quiz questions" />
                <MiniStat value="10" label="blocks" />
                <MiniStat value="11" label="points per lesson" />
              </div>
            </div>
          </div>

          {/* Phases 1-7 */}
          <div className="ep-card p-7 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ep_gold/[0.03] rounded-full blur-3xl group-hover:bg-ep_gold/[0.06] transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] font-extrabold tracking-wider text-ep_gold">CURRICULUM 2</span>
                <span className="ep-pill text-ep_gold">Real Code</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">The Coding Journey</h3>
              <p className="text-[14px] text-ep_text_muted leading-relaxed mb-6">
                63 sections across 7 phases. Every section follows the 6-stage gate cycle.
                Write real Python in a Monaco editor. Obsidian validates. Aurum adapts.
                Sapphire watches. No shortcuts.
              </p>

              {/* Gate cycle mini */}
              <div className="mb-5 space-y-1.5">
                <div className="text-[10px] text-ep_text_dim tracking-wider uppercase mb-2">The Gate Cycle</div>
                {[
                  { s: "INSTALL", c: "#34D399" }, { s: "PREDICT", c: "#60A5FA" },
                  { s: "EVALUATE", c: "#F59E0B" }, { s: "REFLECT", c: "#A78BFA" },
                  { s: "DRILL", c: "#F472B6" }, { s: "CERTIFY", c: "#34D399" },
                ].map((g) => (
                  <div key={g.s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: g.c }} />
                    <span className="text-[10px] font-bold tracking-wider" style={{ color: g.c }}>{g.s}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <MiniStat value="7" label="phases" />
                <MiniStat value="63" label="sections" />
                <MiniStat value="6" label="gate stages" />
                <MiniStat value="PASS/FAIL" label="binary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT YOU WILL ACHIEVE
      ═══════════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">Your Destination</p>
          <h2 className="text-2xl md:text-3xl font-bold">What you will achieve</h2>
        </div>

        <div className="max-w-3xl mx-auto ep-glass rounded-2xl p-8 md:p-10">
          <p className="text-[14px] text-ep_text_muted mb-8 text-center">
            After completing Emerald Protocol, you won&apos;t just &quot;know Python.&quot;
            You&apos;ll be able to prove it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "🧠", text: "Think like a programmer — not copy like one" },
              { icon: "🏗️", text: "Build structured, clean Python programs from scratch" },
              { icon: "✓", text: "Pass binary validation — code that actually works" },
              { icon: "🔍", text: "Debug with confidence — understand why things break" },
              { icon: "📊", text: "Read and trace code line-by-line" },
              { icon: "🎯", text: "Know every Python symbol and what it does" },
              { icon: "⚡", text: "Write functions, classes, and data structures" },
              { icon: "🏆", text: "Earn Emerald Protocol certification of understanding" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4">
                <span className="text-lg shrink-0">{item.icon}</span>
                <span className="text-[13px] text-ep_text leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-6">The Philosophy</div>
          <blockquote className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            &quot;Most platforms say: <span className="text-ep_text_muted">learn to code.</span>
            <br />
            Emerald Protocol says: <span className="text-ep_emerald ep-glow-text">prove you understand.</span>&quot;
          </blockquote>
          <p className="text-[14px] text-ep_text_muted leading-relaxed">
            No shortcuts. No partial credit. No &quot;close enough.&quot;
            Code either works or it doesn&apos;t. Understanding is binary.
            This is the Emerald Protocol.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="text-center py-12 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to structure the chaos?</h2>
        <p className="text-ep_text_muted mb-8 max-w-md mx-auto text-[14px]">
          Start with Phase 0. Learn the alphabet. Then prove you can write the words.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="/demo" className="ep-btn-primary text-sm px-8 py-3.5">Try the Demo</a>
          <a href="https://discord.gg/rx6U5YQF" target="_blank" rel="noopener noreferrer" className="ep-btn-ghost text-sm px-8 py-3.5">Join Discord</a>
        </div>
      </section>
    </div>
  );
}

/* ─── Reusable Components ─────────────────────────────────────── */

function StatCard({ number, label, sublabel }: { number: string; label: string; sublabel: string }) {
  return (
    <div className="ep-glass rounded-xl p-5 text-center group hover:border-ep_emerald/20 transition-all duration-300">
      <div className="ep-stat-number">{number}</div>
      <div className="text-[12px] font-semibold text-ep_text mt-1">{label}</div>
      <div className="text-[10px] text-ep_text_dim mt-0.5">{sublabel}</div>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-black/30 border border-white/5 p-2.5 text-center">
      <span className="font-bold text-white/70">{value}</span>
      <span className="text-ep_text_muted ml-1">{label}</span>
    </div>
  );
}

function AgentCard({ logo, name, role, color, glowClass, desc, features }: {
  logo: string; name: string; role: string; color: string; glowClass: string; desc: string; features: string[];
}) {
  return (
    <div className={`ep-card p-6 md:p-7 ${glowClass} relative overflow-hidden group`}>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${color}08` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <Image src={logo} alt={name} width={44} height={44} className="rounded-xl object-contain" />
          <div>
            <div className="text-sm font-bold" style={{ color }}>{name}</div>
            <div className="text-[10px] text-ep_text_muted">{role}</div>
          </div>
        </div>
        <p className="text-[13px] text-ep_text_muted leading-relaxed mb-5">{desc}</p>
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px]">
              <div className="w-1 h-1 rounded-full" style={{ background: color }} />
              <span className="text-ep_text_muted">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
