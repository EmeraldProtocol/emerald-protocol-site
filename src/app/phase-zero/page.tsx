// src/app/phase-zero/page.tsx

export default function PhaseZeroPage() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">Phase Zero</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Before you write code,<br /><span className="text-ep_emerald ep-glow-text">learn the alphabet.</span></h1>
        <p className="text-[15px] text-ep_text_muted leading-relaxed">
          Most platforms start with &quot;print Hello World&quot; and assume you know what every symbol means.
          That&apos;s like asking you to write a sentence before you know the letters.
        </p>
      </header>

      {/* Problem vs Solution */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="ep-card p-7 border-red-500/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-red-500/[0.03] rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="text-[12px] font-bold text-red-400/60 tracking-wider uppercase mb-4">❌ The Problem</div>
            <div className="font-mono text-[14px] text-ep_text_muted bg-black/30 rounded-xl p-4 mb-4 border border-white/5">
              print(&quot;Hello, World!&quot;)
            </div>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              A beginner sees this and encounters 4+ unknown symbols at once: <code className="text-red-400/60 font-mono text-[12px]">print</code>,{" "}
              <code className="text-red-400/60 font-mono text-[12px]">(</code>{" "}
              <code className="text-red-400/60 font-mono text-[12px]">&quot;</code>{" "}
              <code className="text-red-400/60 font-mono text-[12px]">)</code>.
              They memorize the pattern without understanding it. The cracks show up in Phase 3, 4, 5.
            </p>
          </div>
        </div>
        <div className="ep-card p-7 border-ep_emerald/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-ep_emerald/[0.03] rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="text-[12px] font-bold text-ep_emerald tracking-wider uppercase mb-4">✓ The EP Solution</div>
            <div className="space-y-2 mb-4">
              {['"  "  → creates text', '(  )  → runs an action', 'print → shows output', ',    → separates items'].map(s => (
                <div key={s} className="font-mono text-[13px] text-ep_emerald/70 bg-black/30 rounded-lg px-4 py-2 border border-ep_emerald/10">{s}</div>
              ))}
            </div>
            <p className="text-[13px] text-ep_text_muted leading-relaxed">
              Each symbol taught individually. By the time you see the full command, every piece is already familiar. Zero confusion.
            </p>
          </div>
        </div>
      </section>

      {/* 11-point structure */}
      <section>
        <h2 className="text-xl font-bold mb-2">Every concept. Full depth.</h2>
        <p className="text-[13px] text-ep_text_muted mb-6 max-w-2xl">Each of the 50 concepts follows an 11-point lesson structure:</p>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl">
          {[
            { n: 1, t: "What it is", c: "#34D399" }, { n: 2, t: "How it's used", c: "#34D399" },
            { n: 3, t: "Where you'll see it", c: "#60A5FA" }, { n: 4, t: "Common mistakes", c: "#F87171" },
            { n: 5, t: "Comparison with similar", c: "#60A5FA" }, { n: 6, t: "Real-world metaphor", c: "#F5C542" },
            { n: 7, t: "Diagram / visual", c: "#A78BFA" }, { n: 8, t: "Code examples", c: "#34D399" },
            { n: 9, t: "Symbol displayed large", c: "#A78BFA" }, { n: 10, t: "Dependencies tree", c: "#F472B6" },
            { n: 11, t: "Quiz (varied types)", c: "#F59E0B" },
          ].map((p) => (
            <div key={p.n} className="flex items-start gap-2 ep-glass p-3 rounded-xl">
              <span className="text-[10px] font-extrabold shrink-0 mt-0.5 w-4 text-right" style={{ color: p.c }}>{p.n}</span>
              <span className="text-[12px] text-ep_text_muted">{p.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10 Blocks */}
      <section>
        <h2 className="text-xl font-bold mb-2">10 blocks. 50 concepts. Like Lego.</h2>
        <p className="text-[13px] text-ep_text_muted mb-6 max-w-2xl">Each block depends on the previous. Nothing floats in air.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { i: "🧠", t: "How Computers Think", n: 4 }, { i: "🔤", t: "The First Letters", n: 4 },
            { i: "⚡", t: "Actions", n: 3 }, { i: "🔢", t: "Numbers & Math", n: 8 },
            { i: "⚖️", t: "Comparison", n: 6 }, { i: "🏗️", t: "Structure", n: 3 },
            { i: "📦", t: "Containers", n: 4 }, { i: "✂️", t: "Shortcuts & Strings", n: 9 },
            { i: "🧩", t: "Logic", n: 5 }, { i: "🔮", t: "Advanced Preview", n: 4 },
          ].map((b, j) => (
            <div key={j} className="ep-card p-4 text-center">
              <span className="text-xl">{b.i}</span>
              <div className="text-[12px] font-bold text-ep_text mt-2">{b.t}</div>
              <div className="text-[10px] text-ep_emerald mt-1">{b.n} concepts</div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress teaser */}
      <section className="max-w-2xl mx-auto ep-glass rounded-2xl p-8 text-center">
        <div className="text-[11px] tracking-wider text-ep_text_dim uppercase mb-3">Phase 0 Progress Demo</div>
        <div className="ep-progress-bar mb-3">
          <div className="ep-progress-fill" style={{ width: '34%' }} />
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-ep_text_muted">Block 3: Numbers & Math</span>
          <span className="text-ep_emerald font-bold">17/50 concepts</span>
        </div>
        <p className="text-[11px] text-ep_text_dim mt-4">
          Phase 0 tracks your progress concept by concept. Come back anytime to continue where you left off.
        </p>
      </section>
    </div>
  );
}
