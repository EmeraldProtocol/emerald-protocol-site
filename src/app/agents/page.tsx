// src/app/agents/page.tsx
import Image from "next/image";

export default function AgentsPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_gold_soft/70 uppercase mb-2">The Three Agents</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Three minds. One system. Zero compromises.
        </h1>
        <p className="text-sm md:text-base text-ep_text_muted leading-relaxed">
          Emerald Protocol doesn&apos;t rely on a single AI. It uses three specialized agents,
          each with a distinct role and personality. They work together to teach, validate,
          and adapt — creating a learning experience that a single AI could never deliver.
        </p>
      </header>

      {/* ═══ AURUM ═══ */}
      <section className="grid gap-8 md:grid-cols-[1fr,1.5fr] items-start">
        <div className="ep-card p-6 md:p-8 border-ep_gold_soft/15 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 mx-auto md:mx-0" style={{ background: "rgba(244,211,139,0.08)", border: "1px solid rgba(244,211,139,0.2)" }}>
            <Image src="/logo_B.png" alt="Aurum" width={52} height={52} className="rounded-xl object-cover" />
          </div>
          <div className="text-xl font-bold text-ep_gold mb-1">AURUM</div>
          <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Adaptive Mentor</div>
        </div>
        <div className="space-y-4">
          <p className="text-[14px] text-ep_text_muted leading-relaxed">
            Aurum is your mentor — a patient, warm AI that adapts to how you think.
            It uses your learning vector (from cognitive calibration) to decide how to teach:
            step-by-step or open-ended, theory-first or examples-first, detailed or concise.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ep_gold_soft/10 bg-ep_bg_soft p-4">
              <div className="text-[11px] font-bold text-ep_gold mb-2">In Phase 0 (Teacher Mode)</div>
              <p className="text-[12px] text-ep_text_muted">Answers questions freely. Explains deeply. Uses metaphors, analogies, and visual examples. No withholding. Pure teaching.</p>
            </div>
            <div className="rounded-xl border border-ep_gold_soft/10 bg-ep_bg_soft p-4">
              <div className="text-[11px] font-bold text-ep_gold mb-2">In Phase 1+ (Mentor Mode)</div>
              <p className="text-[12px] text-ep_text_muted">Guides your thinking without giving answers. Asks Socratic questions. Gives hints, not solutions. Makes you reason through problems.</p>
            </div>
          </div>
          <div className="rounded-xl border border-ep_gold_soft/10 bg-ep_bg_soft p-4">
            <div className="text-[11px] font-bold text-ep_gold mb-2">Adapts in real time</div>
            <p className="text-[12px] text-ep_text_muted">
              Sapphire feeds Aurum your cognitive vectors — momentum, frustration, guessing patterns,
              hint dependency. Aurum adjusts its tone, depth, and approach mid-conversation.
              If you&apos;re stuck, it slows down. If you&apos;re rushing, it adds friction.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ OBSIDIAN ═══ */}
      <section className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
        <div className="space-y-4 order-2 md:order-1">
          <p className="text-[14px] text-ep_text_muted leading-relaxed">
            Obsidian is the judge. Every submission goes through a 4-stage validation pipeline:
            anti-gaming detection, criteria evaluation, strict mode (Phase 4+), and verdict assembly.
            The result is always binary: PASS or FAIL. Nothing in between.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/8 bg-ep_bg_soft p-4">
              <div className="text-[11px] font-bold text-white/60 mb-2">Anti-Gaming (7 detectors)</div>
              <p className="text-[12px] text-ep_text_muted">Catches hardcoded outputs, copy-paste, pattern matching, empty submissions, and minimal-effort code. No gaming gets past Obsidian.</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-ep_bg_soft p-4">
              <div className="text-[11px] font-bold text-white/60 mb-2">Binary Validation</div>
              <p className="text-[12px] text-ep_text_muted">Output matching, function behavior, error handling, code quality — 9 criteria types. Pass all or fail. No partial credit.</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/8 bg-ep_bg_soft p-4">
            <div className="text-[11px] font-bold text-white/60 mb-2">The philosophy</div>
            <p className="text-[12px] text-ep_text_muted">
              &quot;No shortcuts. No partial credit. Code either works or it doesn&apos;t.&quot; —
              This mirrors real engineering. In production, code doesn&apos;t get partial marks.
              EP prepares you for that reality from day one.
            </p>
          </div>
        </div>
        <div className="ep-card p-6 md:p-8 border-white/10 text-center md:text-left order-1 md:order-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 mx-auto md:mx-0" style={{ background: "rgba(139,32,32,0.06)", border: "1px solid rgba(139,32,32,0.2)" }}>
            <Image src="/logo_C.png" alt="Obsidian" width={52} height={52} className="rounded-xl object-cover" />
          </div>
          <div className="text-xl font-bold text-white/70 mb-1">OBSIDIAN</div>
          <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Binary Validator</div>
        </div>
      </section>

      {/* ═══ SAPPHIRE ═══ */}
      <section className="grid gap-8 md:grid-cols-[1fr,1.5fr] items-start">
        <div className="ep-card p-6 md:p-8 border-ep_sapphire/15 text-center md:text-left">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 mx-auto md:mx-0" style={{ background: "rgba(96,165,250,0.06)", border: "1px solid rgba(96,165,250,0.2)" }}>
            <Image src="/logo_A.png" alt="Sapphire" width={52} height={52} className="rounded-xl object-cover" />
          </div>
          <div className="text-xl font-bold text-ep_sapphire mb-1">SAPPHIRE</div>
          <div className="text-[11px] text-ep_text_muted tracking-wider uppercase">Silent Analyst</div>
        </div>
        <div className="space-y-4">
          <p className="text-[14px] text-ep_text_muted leading-relaxed">
            You never interact with Sapphire directly. It watches silently — recording every
            attempt, every timing, every pattern — and computes 8 cognitive vectors that
            inform how Aurum teaches and when the system intervenes.
          </p>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            {[
              { name: "Momentum", desc: "Are you progressing or stalling?" },
              { name: "Accuracy", desc: "How often do you pass on first try?" },
              { name: "Stability", desc: "Is your performance consistent?" },
              { name: "Guessing", desc: "Are you trying randomly?" },
              { name: "Frustration", desc: "Are you hitting walls?" },
              { name: "Hint Dependency", desc: "Can you work independently?" },
              { name: "Speed Index", desc: "Are you rushing or careful?" },
              { name: "Engagement", desc: "Are you actually learning?" },
            ].map((v) => (
              <div key={v.name} className="rounded-lg border border-ep_sapphire/10 bg-ep_bg_soft p-3">
                <div className="text-[10px] font-bold text-ep_sapphire">{v.name}</div>
                <p className="text-[10px] text-ep_text_muted mt-0.5">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
