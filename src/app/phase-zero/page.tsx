// src/app/phase-zero/page.tsx

export default function PhaseZeroPage() {
  const blocks = [
    { id: 0, title: "How Computers Think", concepts: 4, examples: "Programs, sequence, determinism, exactness", icon: "🧠" },
    { id: 1, title: "The First Letters", concepts: 4, examples: "\" \" quotes, ' ' single, # hash, = equals", icon: "🔤" },
    { id: 2, title: "Actions", concepts: 3, examples: "( ) parentheses, , comma, print()", icon: "⚡" },
    { id: 3, title: "Numbers & Math", concepts: 8, examples: "int, float, + - * / // % **", icon: "🔢" },
    { id: 4, title: "Comparison", concepts: 6, examples: "== != < > <= >=", icon: "⚖️" },
    { id: 5, title: "Structure", concepts: 3, examples: ": colon, indentation, True/False", icon: "🏗️" },
    { id: 6, title: "Containers", concepts: 4, examples: "[ ] lists, { } dicts, . dot", icon: "📦" },
    { id: 7, title: "Shortcuts & Strings", concepts: 9, examples: "+= -= f\"\" \\\\ \\n \\t", icon: "✂️" },
    { id: 8, title: "Logic", concepts: 5, examples: "and, or, not, in, is", icon: "🧩" },
    { id: 9, title: "Advanced Preview", concepts: 4, examples: "_ @ ; bitwise", icon: "🔮" },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">Phase Zero</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Before you write code, learn the alphabet.</h1>
        <p className="text-sm md:text-base text-ep_text_muted leading-relaxed">
          Most platforms start with &quot;print Hello World&quot; and assume you know what print means,
          what parentheses do, what quotation marks are for. Emerald Protocol starts differently.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 items-start">
        <div className="ep-card p-6 border-red-500/10">
          <div className="text-[11px] font-bold text-red-400/60 tracking-wider uppercase mb-3">The problem</div>
          <p className="text-[13px] text-ep_text_muted leading-relaxed mb-3">
            A beginner seeing <code className="font-mono text-ep_emerald/60 bg-black/30 px-1.5 py-0.5 rounded">print(&quot;Hello&quot;)</code> encounters
            4+ unknown symbols at once. They memorize patterns without understanding them. The cracks appear later.
          </p>
        </div>
        <div className="ep-card p-6 border-ep_emerald/10">
          <div className="text-[11px] font-bold text-ep_emerald tracking-wider uppercase mb-3">The EP solution</div>
          <p className="text-[13px] text-ep_text_muted leading-relaxed mb-3">
            Phase 0 teaches every symbol individually. By the time you see the full command, every piece is already familiar.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Every concept gets a full lesson</h2>
        <p className="text-[13px] text-ep_text_muted mb-6 max-w-2xl">
          Each of the 50 concepts follows an 11-point structure with Aurum teaching conversationally.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl">
          {["What it is", "How it's used", "Where you'll see it", "Common mistakes",
            "Comparison", "Real-world metaphor", "Diagram / visual", "Code examples",
            "Symbol displayed large", "Dependencies", "Quiz"].map((point, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-ep_bg_soft p-3">
              <span className="text-[10px] font-bold text-ep_emerald shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-[11px] text-ep_text_muted">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-6">10 blocks. 50 concepts. Logical progression.</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {blocks.map((b) => (
            <div key={b.id} className="ep-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{b.icon}</span>
                <span className="text-[12px] font-bold text-ep_emerald">Block {b.id}</span>
              </div>
              <div className="text-[13px] font-medium text-ep_text mb-1">{b.title}</div>
              <div className="text-[10px] text-ep_text_muted mb-2">{b.concepts} concepts</div>
              <div className="text-[10px] text-ep_text_dim font-mono">{b.examples}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="ep-card p-5">
          <h3 className="text-sm font-bold mb-2 text-ep_gold">Aurum in teacher mode</h3>
          <p className="text-[12px] text-ep_text_muted leading-relaxed">Full 1-on-1 tutoring. Ask anything. Get deep explanations with metaphors and examples.</p>
        </div>
        <div className="ep-card p-5">
          <h3 className="text-sm font-bold mb-2 text-ep_emerald">Always accessible</h3>
          <p className="text-[12px] text-ep_text_muted leading-relaxed">Phase 0 stays as a permanent reference. Forgot what % does in Phase 5? Open it and refresh.</p>
        </div>
        <div className="ep-card p-5">
          <h3 className="text-sm font-bold mb-2 text-ep_sapphire">Skippable with test-out</h3>
          <p className="text-[12px] text-ep_text_muted leading-relaxed">Already know the basics? Take a quick assessment and skip to Phase 1.</p>
        </div>
      </section>
    </div>
  );
}
