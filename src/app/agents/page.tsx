// src/app/agents/page.tsx
import Image from "next/image";

export default function AgentsPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_gold_soft/70 uppercase mb-2">The Three Agents</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Three minds. One system.<br /><span className="text-ep_emerald ep-glow-text">Zero compromises.</span>
        </h1>
        <p className="text-[15px] text-ep_text_muted leading-relaxed">
          Emerald Protocol doesn&apos;t rely on a single AI. Three specialized agents — each with a distinct
          role and personality — work together to create a learning experience that a single AI could never deliver.
        </p>
      </header>

      {/* Aurum */}
      <section className="grid gap-8 md:grid-cols-[280px,1fr] items-start">
        <div className="ep-card p-8 text-center border-ep_gold_soft/15 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5C542]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Image src="/aurum.svg" alt="Aurum" width={80} height={80} className="rounded-2xl object-contain mb-5 mx-auto" />
            <div className="text-2xl font-extrabold text-ep_gold mb-1">AURUM</div>
            <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Adaptive Mentor</div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[15px] text-ep_text_muted leading-relaxed">
            Aurum is your mentor — a patient, warm AI that adapts to how you think. It uses your
            learning vector (from cognitive calibration) and Sapphire&apos;s real-time cognitive analysis
            to decide how to teach: step-by-step or open-ended, theory-first or examples-first.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="ep-glass p-5 rounded-xl">
              <div className="text-[12px] font-bold text-ep_gold mb-2">Phase 0: Teacher Mode</div>
              <p className="text-[12px] text-ep_text_muted leading-relaxed">Answers freely. Explains deeply. Uses metaphors, analogies, visual examples. No withholding. You ask, Aurum teaches.</p>
            </div>
            <div className="ep-glass p-5 rounded-xl">
              <div className="text-[12px] font-bold text-ep_gold mb-2">Phase 1+: Mentor Mode</div>
              <p className="text-[12px] text-ep_text_muted leading-relaxed">Guides your thinking. Asks Socratic questions. Gives hints, not solutions. Makes you reason through problems yourself.</p>
            </div>
          </div>
          <div className="ep-glass p-5 rounded-xl">
            <div className="text-[12px] font-bold text-ep_gold mb-2">6 Guardrails (powered by Sapphire)</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[11px] text-ep_text_muted">
              {["Anti-guessing intervention", "Anti-dependency check", "Frustration detection", "Re-engagement trigger", "Rushing brake", "Critical risk alert"].map(g => (
                <div key={g} className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-ep_gold" />{g}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obsidian */}
      <section className="grid gap-8 md:grid-cols-[1fr,280px] items-start">
        <div className="space-y-4">
          <p className="text-[15px] text-ep_text_muted leading-relaxed">
            Obsidian is the judge. Every submission goes through a 4-stage validation pipeline.
            The result is always binary: PASS or FAIL. There is no middle ground.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="ep-glass p-5 rounded-xl">
              <div className="text-[12px] font-bold text-white/60 mb-2">4-Stage Pipeline</div>
              <div className="space-y-1.5 text-[11px] text-ep_text_muted">
                {["1. Anti-gaming detection (7 detectors)", "2. Criteria evaluation (9 types)", "3. Strict mode enforcement (Phase 4+)", "4. Verdict assembly (PASS/FAIL)"].map(s => (
                  <div key={s}>{s}</div>
                ))}
              </div>
            </div>
            <div className="ep-glass p-5 rounded-xl">
              <div className="text-[12px] font-bold text-white/60 mb-2">Catches Everything</div>
              <div className="space-y-1.5 text-[11px] text-ep_text_muted">
                {["Hardcoded outputs", "Copy-paste solutions", "Pattern matching", "Empty submissions", "Minimal effort code"].map(s => (
                  <div key={s} className="flex items-center gap-1.5"><span className="text-red-400/40 text-[9px]">✕</span>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ep-card p-8 text-center border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B2020]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Image src="/obsidian.svg" alt="Obsidian" width={80} height={80} className="rounded-2xl object-contain mb-5 mx-auto" />
            <div className="text-2xl font-extrabold text-white/70 mb-1">OBSIDIAN</div>
            <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Binary Validator</div>
          </div>
        </div>
      </section>

      {/* Sapphire */}
      <section className="grid gap-8 md:grid-cols-[280px,1fr] items-start">
        <div className="ep-card p-8 text-center border-ep_sapphire/15 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#60A5FA]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <Image src="/sapphire.svg" alt="Sapphire" width={80} height={80} className="rounded-2xl object-contain mb-5 mx-auto" />
            <div className="text-2xl font-extrabold text-ep_sapphire mb-1">SAPPHIRE</div>
            <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Silent Analyst</div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[15px] text-ep_text_muted leading-relaxed">
            You never interact with Sapphire directly. It watches silently — recording every attempt,
            timing, and behavioral pattern — computing 8 cognitive vectors that power the entire adaptive system.
          </p>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            {[
              { name: "Momentum", desc: "Progressing or stalling?" },
              { name: "Accuracy", desc: "First-try pass rate" },
              { name: "Stability", desc: "Consistent performance?" },
              { name: "Guessing", desc: "Random attempts?" },
              { name: "Frustration", desc: "Hitting walls?" },
              { name: "Hint Dep.", desc: "Works independently?" },
              { name: "Speed", desc: "Rushing or careful?" },
              { name: "Engagement", desc: "Actually learning?" },
            ].map((v) => (
              <div key={v.name} className="ep-glass p-3 rounded-xl">
                <div className="text-[11px] font-bold text-ep_sapphire">{v.name}</div>
                <p className="text-[10px] text-ep_text_muted mt-0.5">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
