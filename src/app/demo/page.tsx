// src/app/demo/page.tsx
import Image from "next/image";

export default function DemoPage() {
  return (
    <div className="space-y-20">
      <header className="max-w-3xl text-center mx-auto">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">Demo</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Experience the Protocol.</h1>
        <p className="text-[15px] text-ep_text_muted leading-relaxed">
          See what it looks like to learn Python the EP way — from cognitive calibration to binary validation.
        </p>
      </header>

      {/* Journey */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold mb-8 text-center">Your journey through Emerald Protocol</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: "Sign up & commit", desc: "Create your account, sign the commitment contract. You're making a decision to learn properly.", color: "#94a3b8", icon: "📝" },
            { step: 2, title: "Cognitive calibration", desc: "15 reasoning tasks generate your 4-dimensional learning vector. Aurum learns how to teach you — not someone else. You.", color: "#34D399", icon: "🧠" },
            { step: 3, title: "Phase 0 — The alphabet", desc: "50 concepts. Every Python symbol taught individually. Metaphors, visuals, quizzes. No code. Just understanding.", color: "#00f2a9", icon: "🔤" },
            { step: 4, title: "The workspace opens", desc: "4-zone professional IDE: Monaco editor, Aurum panel, Obsidian terminal, curriculum sidebar. This is where you write.", color: "#F5C542", icon: "⌨️" },
            { step: 5, title: "63 sections of real code", desc: "Phases 1-7. Every section follows the 6-stage gate cycle. Aurum mentors. Obsidian validates. Sapphire watches.", color: "#A78BFA", icon: "🚀" },
            { step: 6, title: "Binary validation", desc: "PASS or FAIL. Every section. No partial credit. When you finish, you've proven you understand — not just completed.", color: "#F87171", icon: "✓" },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-5 ep-glass rounded-2xl p-5 md:p-6 group hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform group-hover:scale-110"
                style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}>
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: s.color }}>STEP {s.step}</span>
                </div>
                <h3 className="text-[15px] font-bold mb-1">{s.title}</h3>
                <p className="text-[13px] text-ep_text_muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workspace mock */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold mb-8 text-center">The Workspace</h2>
        <div className="ep-card p-5 md:p-6 relative overflow-hidden">
          {/* TopBar */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Image src="/emblem_1.png" alt="EP" width={20} height={20} />
              <span className="text-[10px] font-bold tracking-wider text-ep_gold">EMERALD PROTOCOL</span>
              <span className="text-[8px] text-ep_text_dim ml-1">§1.1 Hello World</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/sapphire.svg" alt="Sapphire" width={12} height={12} className="rounded-sm" />
              <span className="text-[8px] text-ep_sapphire/50 font-mono">REC</span>
              <span className="text-[9px] text-ep_text_dim">Day 1</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2 min-h-[280px]">
            {/* Sidebar */}
            <div className="col-span-2 rounded-xl border border-white/5 bg-black/30 p-3">
              <div className="space-y-2.5 text-[10px]">
                <div className="text-ep_emerald font-medium">📖 Learn</div>
                <div className="text-ep_text_dim pl-2 space-y-1 text-[9px]">
                  <div className="text-ep_emerald">✓ §1.1 Hello World</div>
                  <div className="text-ep_text_muted">● §1.2 Variables</div>
                  <div className="text-ep_text_dim">○ §1.3 Types</div>
                </div>
                <div className="text-ep_sapphire/60">📚 Alexandria</div>
                <div className="text-ep_text_dim">⚡ Training</div>
                <div className="text-ep_text_dim">📝 Notes</div>
              </div>
            </div>

            {/* Editor + Obsidian */}
            <div className="col-span-7 flex flex-col gap-2">
              <div className="flex-[2] rounded-xl border border-white/5 bg-black/40 p-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-amber-400/60" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/60" />
                  <span className="text-[9px] text-ep_text_dim ml-2 font-mono">main.py</span>
                </div>
                <div className="font-mono text-[12px] space-y-1">
                  <div className="text-ep_text_dim"># Section 1.1: Hello World</div>
                  <div className="text-ep_text_dim"># Make the computer speak.</div>
                  <div className="h-2" />
                  <div><span className="text-ep_sapphire/70">print</span>(<span className="text-ep_gold">&quot;Hello, World!&quot;</span>)</div>
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-white/5 bg-black/50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/obsidian.svg" alt="Obsidian" width={14} height={14} className="rounded-sm" />
                  <span className="text-[9px] text-ep_text_dim tracking-wider font-mono">OBSIDIAN</span>
                </div>
                <div className="font-mono text-[11px]">
                  <div className="text-emerald-400">✓ PASS — Output: &quot;Hello, World!&quot;</div>
                  <div className="text-ep_text_dim mt-1">§1.1 certified. Advancing.</div>
                </div>
              </div>
            </div>

            {/* Aurum */}
            <div className="col-span-3 rounded-xl border border-ep_gold_soft/10 bg-black/30 p-3">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/aurum.svg" alt="Aurum" width={16} height={16} className="rounded-sm" />
                <span className="text-[10px] text-ep_gold font-bold">AURUM</span>
              </div>
              <div className="text-[11px] text-ep_text_muted space-y-2 leading-relaxed">
                <p>nice work! your first program runs perfectly. ✓</p>
                <p>see how <code className="text-ep_emerald/60 text-[10px]">print()</code> takes the text in quotes and shows it on screen?</p>
                <p className="text-ep_text_dim">ready for §1.2: variables?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to prove you understand?</h2>
        <p className="text-ep_text_muted mb-8 max-w-md mx-auto text-[14px]">
          Join the closed beta. Start with Phase 0. Structure the chaos.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://discord.gg/rx6U5YQF" target="_blank" rel="noopener noreferrer" className="ep-btn-primary text-sm px-8 py-3.5">Join Discord</a>
          <a href="https://x.com/EmeraldProtocol" target="_blank" rel="noopener noreferrer" className="ep-btn-ghost text-sm px-8 py-3.5">Follow on X</a>
        </div>
      </section>
    </div>
  );
}
