// src/app/how-it-works/page.tsx

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 md:space-y-24">

      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">How It Works</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          A system designed around one idea: understanding is binary.
        </h1>
        <p className="text-sm md:text-base text-ep_text_muted leading-relaxed">
          You either understand a concept or you don&apos;t. Your code either works or it doesn&apos;t.
          Emerald Protocol is built on this principle from the ground up — from the way concepts
          are taught to the way they&apos;re validated.
        </p>
      </header>

      {/* Step 1: Cognitive Calibration */}
      <section>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ep_emerald/10 border border-ep_emerald/20 flex items-center justify-center text-ep_emerald font-bold text-sm shrink-0">1</div>
          <div>
            <h2 className="text-xl font-bold mb-2">Cognitive Calibration</h2>
            <p className="text-[13px] text-ep_text_muted leading-relaxed max-w-2xl">
              Before anything else, 15 reasoning tasks map how you think. Not what you know — how you
              approach problems. The result is a 4-dimensional learning vector that tells the system
              your preferences across four axes.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 ml-14">
          {[
            { axis: "Structure ↔ Freedom", desc: "Do you want step-by-step guidance or open exploration?" },
            { axis: "Theory ↔ Practice", desc: "Do you learn from concepts first or examples first?" },
            { axis: "Solo ↔ Guided", desc: "Do you prefer figuring it out alone or with help?" },
            { axis: "Cautious ↔ Bold", desc: "Small safe steps or diving into challenges?" },
          ].map((v) => (
            <div key={v.axis} className="rounded-xl border border-white/5 bg-ep_bg_soft p-4">
              <div className="text-[11px] font-bold text-ep_emerald mb-1">{v.axis}</div>
              <p className="text-[11px] text-ep_text_muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 2: Phase 0 */}
      <section>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ep_emerald/10 border border-ep_emerald/20 flex items-center justify-center text-ep_emerald font-bold text-sm shrink-0">2</div>
          <div>
            <h2 className="text-xl font-bold mb-2">Phase 0 — The Python Alphabet</h2>
            <p className="text-[13px] text-ep_text_muted leading-relaxed max-w-2xl">
              Most platforms start with &quot;print Hello World&quot; and assume you know what print means,
              what parentheses do, what quotation marks are. EP doesn&apos;t assume anything.
              Phase 0 teaches every Python symbol one at a time — with metaphors, visuals,
              examples, and quizzes. No code writing. Just deep understanding.
            </p>
          </div>
        </div>
        <div className="ml-14 ep-card p-5 max-w-2xl">
          <div className="text-[10px] tracking-wider text-ep_text_dim uppercase mb-3">Phase 0 Blocks</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-[11px]">
            {[
              "How Computers Think", "The First Letters", "Actions", "Numbers & Math",
              "Comparison", "Structure", "Containers", "Shortcuts & Strings",
              "Logic", "Advanced Preview",
            ].map((b, i) => (
              <div key={b} className="rounded-lg bg-black/30 border border-white/5 p-2 text-center">
                <span className="text-ep_emerald font-bold">0.{i}</span>
                <div className="text-ep_text_muted text-[10px] mt-0.5">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: The Gate Cycle */}
      <section>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ep_emerald/10 border border-ep_emerald/20 flex items-center justify-center text-ep_emerald font-bold text-sm shrink-0">3</div>
          <div>
            <h2 className="text-xl font-bold mb-2">The Gate Cycle</h2>
            <p className="text-[13px] text-ep_text_muted leading-relaxed max-w-2xl">
              Every section in Phases 1-7 follows the same 6-stage cycle.
              You can&apos;t skip stages. You can&apos;t rush through. Each stage serves a purpose.
            </p>
          </div>
        </div>
        <div className="ml-14 space-y-3 max-w-2xl">
          {[
            { stage: "INSTALL", desc: "Aurum introduces the concept. You read, ask questions, build mental models.", color: "#34D399", num: "1" },
            { stage: "PREDICT", desc: "Before running code, you predict what it will do. This tests real understanding.", color: "#60A5FA", num: "2" },
            { stage: "EVALUATE", desc: "You write code. You run it. Obsidian checks: PASS or FAIL. Binary.", color: "#F59E0B", num: "3" },
            { stage: "REFLECT", desc: "You explain your solution. Why does it work? What would break it?", color: "#A78BFA", num: "4" },
            { stage: "DRILL", desc: "Variations on the same concept. Reinforcement through repetition with novelty.", color: "#F472B6", num: "5" },
            { stage: "CERTIFY", desc: "The section is complete. Obsidian signs off. You move forward.", color: "#34D399", num: "6" },
          ].map((s) => (
            <div key={s.stage} className="flex items-start gap-4 rounded-xl border border-white/5 bg-ep_bg_soft p-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold shrink-0" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}>
                {s.num}
              </div>
              <div>
                <div className="text-[12px] font-bold mb-0.5" style={{ color: s.color }}>{s.stage}</div>
                <p className="text-[12px] text-ep_text_muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step 4: Phases 1-7 */}
      <section>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ep_gold/10 border border-ep_gold/20 flex items-center justify-center text-ep_gold font-bold text-sm shrink-0">4</div>
          <div>
            <h2 className="text-xl font-bold mb-2">Phases 1–7 — The Coding Journey</h2>
            <p className="text-[13px] text-ep_text_muted leading-relaxed max-w-2xl">
              63 sections of real Python programming. Each phase builds on the last.
              You write code in a full IDE, Obsidian validates it, and Aurum adapts its teaching
              based on Sapphire&apos;s cognitive analysis of your progress.
            </p>
          </div>
        </div>
        <div className="ml-14 grid gap-2 md:grid-cols-4 lg:grid-cols-7 max-w-4xl">
          {[
            { phase: 1, name: "Foundation", sections: 9, weeks: "1–3" },
            { phase: 2, name: "Control Flow", sections: 9, weeks: "4–6" },
            { phase: 3, name: "Data Structures", sections: 9, weeks: "7–9" },
            { phase: 4, name: "Functions", sections: 9, weeks: "10–12" },
            { phase: 5, name: "File I/O", sections: 9, weeks: "13–15" },
            { phase: 6, name: "OOP", sections: 9, weeks: "16–20" },
            { phase: 7, name: "Capstone", sections: 9, weeks: "21–24" },
          ].map((p) => (
            <div key={p.phase} className="rounded-xl border border-white/5 bg-ep_bg_soft p-3 text-center">
              <div className="text-[18px] font-bold text-ep_gold">{p.phase}</div>
              <div className="text-[11px] font-medium text-ep_text mt-0.5">{p.name}</div>
              <div className="text-[10px] text-ep_text_dim mt-1">{p.sections} sections</div>
            </div>
          ))}
        </div>
      </section>

      {/* Step 5: The Workspace */}
      <section>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-ep_sapphire/10 border border-ep_sapphire/20 flex items-center justify-center text-ep_sapphire font-bold text-sm shrink-0">5</div>
          <div>
            <h2 className="text-xl font-bold mb-2">The Workspace</h2>
            <p className="text-[13px] text-ep_text_muted leading-relaxed max-w-2xl">
              A 4-zone interface inspired by professional IDEs. Top bar for navigation.
              Left sidebar with Learn (curriculum), Alexandria (reference library), Training, and Notes.
              Center: Monaco code editor with Obsidian terminal below.
              Right: Aurum panel for real-time mentoring.
            </p>
          </div>
        </div>
        <div className="ml-14 grid grid-cols-4 gap-2 max-w-2xl text-[11px]">
          {[
            { zone: "TopBar", desc: "Navigation, dashboard, Sapphire indicator", color: "#34D399" },
            { zone: "Left Sidebar", desc: "Learn, Alexandria, Training, Notes", color: "#60A5FA" },
            { zone: "Code Editor", desc: "Monaco + Obsidian terminal", color: "#94a3b8" },
            { zone: "Aurum Panel", desc: "AI mentor, real-time chat", color: "#F5C542" },
          ].map((z) => (
            <div key={z.zone} className="rounded-xl border border-white/5 bg-ep_bg_soft p-3 text-center">
              <div className="font-bold mb-1" style={{ color: z.color }}>{z.zone}</div>
              <div className="text-ep_text_muted text-[10px]">{z.desc}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
