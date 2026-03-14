// src/app/demo/page.tsx
import Image from "next/image";

export default function DemoPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <header className="max-w-3xl text-center mx-auto">
        <p className="text-[11px] tracking-[0.3em] text-ep_emerald_soft/70 uppercase mb-2">Demo</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Experience the Protocol.
        </h1>
        <p className="text-sm md:text-base text-ep_text_muted leading-relaxed">
          Emerald Protocol is currently in closed beta. Below is a preview of what the
          workspace looks like — and what you&apos;ll experience when you start.
        </p>
      </header>

      {/* What you'll experience */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold mb-6 text-center">Your journey through Emerald Protocol</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: "Sign up & commit", desc: "Create your account and sign the commitment contract. This isn't casual — you're making a decision to learn.", color: "#94a3b8" },
            { step: 2, title: "Cognitive calibration", desc: "15 reasoning tasks generate your 4-dimensional learning vector. Aurum learns how to teach you.", color: "#34D399" },
            { step: 3, title: "Phase 0 — The Python Alphabet", desc: "50 concepts taught one at a time. Aurum in teacher mode. Rich explanations, metaphors, quizzes. No code yet.", color: "#00f2a9" },
            { step: 4, title: "The workspace opens", desc: "4-zone IDE: code editor, Aurum panel, Obsidian terminal, curriculum sidebar. This is where you write code.", color: "#F5C542" },
            { step: 5, title: "Phase 1–7 — The coding journey", desc: "63 sections of real Python. Every section follows the 6-stage gate cycle. Aurum mentors. Obsidian validates. Sapphire watches.", color: "#F5C542" },
            { step: 6, title: "Binary validation", desc: "Your code works or it doesn't. PASS or FAIL. No partial credit. Real skills, proven through real execution.", color: "#8B2020" },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-4 rounded-xl border border-white/5 bg-ep_bg_soft p-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-bold shrink-0" style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}25` }}>
                {s.step}
              </div>
              <div>
                <div className="text-[14px] font-bold mb-1" style={{ color: s.color }}>{s.title}</div>
                <p className="text-[13px] text-ep_text_muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workspace preview */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold mb-6 text-center">The Workspace</h2>
        <div className="ep-card p-5 md:p-6">
          <div className="grid grid-cols-12 gap-2 min-h-[300px]">
            {/* Left sidebar */}
            <div className="col-span-2 rounded-xl border border-white/5 bg-black/30 p-3">
              <div className="text-[9px] tracking-wider text-ep_text_dim uppercase mb-3">Sidebar</div>
              <div className="space-y-2 text-[10px]">
                <div className="text-ep_emerald">📖 Learn</div>
                <div className="text-ep_sapphire">📚 Alexandria</div>
                <div className="text-ep_text_muted">⚡ Training</div>
                <div className="text-ep_text_muted">📝 Notes</div>
              </div>
            </div>
            {/* Center */}
            <div className="col-span-7 flex flex-col gap-2">
              {/* Editor */}
              <div className="flex-[2] rounded-xl border border-white/5 bg-black/40 p-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-amber-400/60" />
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/60" />
                  <span className="text-[9px] text-ep_text_dim ml-2">§1.1 — Hello World</span>
                </div>
                <div className="font-mono text-[11px] text-ep_emerald_soft/60 space-y-1">
                  <div><span className="text-ep_text_dim"># Section 1.1: Hello World</span></div>
                  <div><span className="text-ep_text_dim"># Make the computer speak.</span></div>
                  <div className="mt-2">print(<span className="text-ep_gold">&quot;Hello, World!&quot;</span>)</div>
                </div>
              </div>
              {/* Obsidian terminal */}
              <div className="flex-1 rounded-xl border border-white/5 bg-black/50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/logo_C.png" alt="Obsidian" width={14} height={14} className="rounded-sm" />
                  <span className="text-[9px] text-ep_text_dim tracking-wider">OBSIDIAN</span>
                </div>
                <div className="font-mono text-[10px]">
                  <div className="text-emerald-400">✓ PASS — Output matches: &quot;Hello, World!&quot;</div>
                  <div className="text-ep_text_dim mt-1">Section §1.1 complete. Advancing to §1.2.</div>
                </div>
              </div>
            </div>
            {/* Aurum panel */}
            <div className="col-span-3 rounded-xl border border-ep_gold_soft/10 bg-black/30 p-3">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/logo_B.png" alt="Aurum" width={16} height={16} className="rounded-sm" />
                <span className="text-[10px] text-ep_gold font-bold">AURUM</span>
              </div>
              <div className="text-[10px] text-ep_text_muted space-y-2 leading-relaxed">
                <p>nice work! your first program runs perfectly.</p>
                <p>notice how <code className="text-ep_emerald/60">print()</code> takes the text in quotes and shows it on screen?</p>
                <p>next up: variables. you&apos;ll learn to store values and use them later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-3">Want early access?</h2>
        <p className="text-ep_text_muted mb-6 max-w-md mx-auto text-sm">
          Emerald Protocol is in closed beta. Join the waitlist to be notified when spots open.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://discord.gg/rx6U5YQF" target="_blank" rel="noopener noreferrer" className="ep-btn-primary text-sm px-6 py-3">
            Join Discord
          </a>
          <a href="https://x.com/EmeraldProtocol" target="_blank" rel="noopener noreferrer" className="ep-btn-ghost text-sm px-6 py-3">
            Follow on X
          </a>
        </div>
      </section>
    </div>
  );
}
