// src/app/how-it-works/page.tsx
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <div className="space-y-20 md:space-y-28">

      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">How It Works</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Understanding is binary.<br />
          <span className="text-ep_emerald ep-glow-text">The system is built around that.</span>
        </h1>
        <p className="text-[15px] text-ep_text_muted leading-relaxed">
          You either understand a concept or you don&apos;t. Your code either works or it doesn&apos;t.
          Every part of Emerald Protocol — from onboarding to validation — is designed around this truth.
        </p>
      </header>

      {/* Journey steps */}
      {[
        {
          num: "01", color: "#94a3b8", title: "Sign Up & Commit",
          desc: "Create your account and sign the commitment contract. This isn't casual browsing — you're making a deliberate decision to learn Python properly. The contract frames the experience: this will be challenging, honest, and rewarding.",
          detail: null,
        },
        {
          num: "02", color: "#34D399", title: "Cognitive Calibration",
          desc: "15 reasoning tasks — not coding tasks — map how you approach problems. The result is a 4-dimensional learning vector that tells Aurum exactly how to teach you.",
          detail: {
            type: "axes",
            items: [
              { axis: "Structure ↔ Freedom", desc: "Step-by-step guidance or open exploration?" },
              { axis: "Theory ↔ Practice", desc: "Concepts first or examples first?" },
              { axis: "Solo ↔ Guided", desc: "Figure it out alone or with help?" },
              { axis: "Cautious ↔ Bold", desc: "Small safe steps or diving into challenges?" },
            ],
          },
        },
        {
          num: "03", color: "#00f2a9", title: "Phase 0 — The Python Alphabet",
          desc: "50 concepts across 10 blocks. Every Python symbol taught one at a time — with metaphors, visuals, code examples, and quizzes. Aurum in full teacher mode. No code writing. Just deep understanding.",
          detail: {
            type: "blocks",
            items: ["How Computers Think", "The First Letters", "Actions", "Numbers & Math", "Comparison", "Structure", "Containers", "Shortcuts & Strings", "Logic", "Advanced Preview"],
          },
        },
        {
          num: "04", color: "#F5C542", title: "The Workspace Opens",
          desc: "A 4-zone professional IDE. Monaco code editor. Aurum mentor panel. Obsidian validation terminal. Curriculum sidebar with Alexandria reference library. This is where you write real Python.",
          detail: {
            type: "zones",
            items: [
              { zone: "Left Sidebar", desc: "Learn, Alexandria, Training, Notes", c: "#60A5FA" },
              { zone: "Code Editor", desc: "Monaco with syntax highlighting", c: "#94a3b8" },
              { zone: "Obsidian Terminal", desc: "PASS/FAIL validation", c: "#8B8FA3" },
              { zone: "Aurum Panel", desc: "Real-time AI mentoring", c: "#F5C542" },
            ],
          },
        },
        {
          num: "05", color: "#A78BFA", title: "The Gate Cycle",
          desc: "Every section in Phases 1-7 follows 6 stages. You can't skip any. Each ensures a different dimension of understanding.",
          detail: {
            type: "cycle",
            items: [
              { stage: "INSTALL", desc: "Learn the concept from Aurum", c: "#34D399" },
              { stage: "PREDICT", desc: "Predict output before running code", c: "#60A5FA" },
              { stage: "EVALUATE", desc: "Write code, run it, Obsidian judges", c: "#F59E0B" },
              { stage: "REFLECT", desc: "Explain why your solution works", c: "#A78BFA" },
              { stage: "DRILL", desc: "Variations — reinforce with novelty", c: "#F472B6" },
              { stage: "CERTIFY", desc: "Section complete. Move forward.", c: "#34D399" },
            ],
          },
        },
        {
          num: "06", color: "#F5C542", title: "Phases 1–7: The Coding Journey",
          desc: "63 sections of real Python. From Hello World to object-oriented programming. Every section gate-cycled. Aurum adapts. Obsidian validates. Sapphire watches.",
          detail: {
            type: "phases",
            items: [
              { p: 1, name: "Foundation" }, { p: 2, name: "Control Flow" }, { p: 3, name: "Data" },
              { p: 4, name: "Functions" }, { p: 5, name: "File I/O" }, { p: 6, name: "OOP" }, { p: 7, name: "Capstone" },
            ],
          },
        },
      ].map((step, i) => (
        <section key={step.num} className="ep-reveal" style={{ animationDelay: `${i * 0.05}s` }}>
          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[14px] font-extrabold shrink-0"
              style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20`, boxShadow: `0 0 20px ${step.color}10` }}>
              {step.num}
            </div>
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h2>
              <p className="text-[14px] text-ep_text_muted leading-relaxed">{step.desc}</p>
            </div>
          </div>
          {step.detail && (
            <div className="ml-[4.25rem]">
              {step.detail.type === "axes" && (
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 max-w-3xl">
                  {(step.detail.items as { axis: string; desc: string }[]).map((v) => (
                    <div key={v.axis} className="ep-glass p-4 rounded-xl">
                      <div className="text-[11px] font-bold text-ep_emerald mb-1">{v.axis}</div>
                      <p className="text-[11px] text-ep_text_muted">{v.desc}</p>
                    </div>
                  ))}
                </div>
              )}
              {step.detail.type === "blocks" && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-3xl">
                  {(step.detail.items as string[]).map((b, j) => (
                    <div key={b} className="ep-glass p-3 rounded-xl text-center">
                      <span className="text-[10px] font-bold text-ep_emerald">0.{j}</span>
                      <div className="text-[10px] text-ep_text_muted mt-0.5">{b}</div>
                    </div>
                  ))}
                </div>
              )}
              {step.detail.type === "zones" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                  {(step.detail.items as { zone: string; desc: string; c: string }[]).map((z) => (
                    <div key={z.zone} className="ep-glass p-4 rounded-xl text-center">
                      <div className="text-[12px] font-bold mb-1" style={{ color: z.c }}>{z.zone}</div>
                      <div className="text-[10px] text-ep_text_muted">{z.desc}</div>
                    </div>
                  ))}
                </div>
              )}
              {step.detail.type === "cycle" && (
                <div className="space-y-2 max-w-2xl">
                  {(step.detail.items as { stage: string; desc: string; c: string }[]).map((s) => (
                    <div key={s.stage} className="flex items-center gap-3 ep-glass rounded-xl p-3.5">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.c, boxShadow: `0 0 8px ${s.c}60` }} />
                      <span className="text-[11px] font-bold tracking-wider w-20" style={{ color: s.c }}>{s.stage}</span>
                      <span className="text-[12px] text-ep_text_muted">{s.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              {step.detail.type === "phases" && (
                <div className="grid grid-cols-7 gap-2 max-w-2xl">
                  {(step.detail.items as { p: number; name: string }[]).map((ph) => (
                    <div key={ph.p} className="ep-glass p-3 rounded-xl text-center">
                      <div className="text-[18px] font-extrabold text-ep_gold">{ph.p}</div>
                      <div className="text-[10px] text-ep_text_muted mt-0.5">{ph.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
