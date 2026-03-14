// src/app/questions/page.tsx
"use client";
import { useState } from "react";

const CATEGORIES = [
  {
    id: "beginners", label: "Complete Beginners", desc: "Never coded before? Start here.",
    questions: [
      {
        q: "What is Emerald Protocol?",
        a: "Emerald Protocol is an AI-powered Python learning platform with three intelligent agents. It doesn't show you videos — it makes you write real code, validates every line, and adapts to how you think.\n\nThree agents work together: **Aurum** (your mentor — teaches and guides), **Obsidian** (the validator — PASS or FAIL, no partial credit), and **Sapphire** (silent analyst — tracks your cognitive state across 8 vectors).\n\nThe system starts with **Phase 0** (50 concepts teaching every Python symbol one at a time), then progresses through **Phases 1-7** (63 sections of real coding). Every section follows a 6-stage gate cycle that ensures you actually understand, not just memorize.",
      },
      {
        q: "Can I use it if I've never coded before?",
        a: "That's exactly who EP is designed for. Most platforms start with 'print Hello World' and assume you know what print, parentheses, and quotation marks mean.\n\nEmerald Protocol starts with **Phase 0: The Python Alphabet** — 50 concepts that teach you what every symbol does before you see a single line of code. By the time you start coding in Phase 1, every character on screen is already familiar.\n\nThe cognitive calibration (15 reasoning tasks at the start) tells Aurum exactly how to teach **you** — whether you prefer step-by-step guidance or open exploration, theory first or examples first.",
      },
      {
        q: "How is this different from YouTube or Udemy?",
        a: "The core difference: **YouTube teaches you to copy. EP forces you to understand.**\n\n→ Video courses are passive — you watch someone code\n→ EP is active — you write every line yourself\n\n→ Courses give partial credit and move on\n→ EP uses binary validation — PASS or FAIL\n\n→ Courses have one pace for everyone\n→ EP adapts to your cognitive profile in real time\n\n→ Courses start with code from day one\n→ EP teaches the alphabet first (Phase 0)\n\nThe result: when you finish EP, you can actually **write Python from scratch** — not just follow along with a tutorial.",
      },
      {
        q: "Will it be too hard or strict?",
        a: "Strict on understanding. Gentle on people.\n\nObsidian blocks progress when a foundation is weak — that's the strict part. But Aurum adapts its pace, gives deeper explanations, uses metaphors matched to your learning style, and has 6 guardrails that detect frustration and adjust.\n\nThe philosophy: **we'd rather you move slowly and understand deeply than rush ahead with gaps.** Every student who completes EP has genuinely proven they understand Python — that's worth the patience.",
      },
      {
        q: "What happens if I get stuck?",
        a: "Three things happen simultaneously:\n\n1. **Sapphire detects it** — your frustration vector rises, your momentum drops, your accuracy changes pattern\n2. **Aurum adapts** — it slows down, breaks the concept into smaller pieces, tries different metaphors, asks simpler questions\n3. **The gate cycle helps** — you can revisit the INSTALL stage (re-learn the concept), the PREDICT stage (practice prediction), and try again\n\nYou're never alone. Aurum is always available to explain anything. Phase 0 stays accessible forever as a reference. And Alexandria (the reference library) has deep entries for every concept.",
      },
    ],
  },
  {
    id: "developers", label: "Experienced Developers", desc: "Senior devs, mentors, tech leads.",
    questions: [
      {
        q: "What's the technical architecture?",
        a: "**Frontend:** React + Vite + Tailwind. Monaco code editor. 4-zone IDE layout (TopBar, LeftSidebar, Editor+Obsidian, AurumPanel). Resizable panels.\n\n**Backend:** FastAPI (Python). Handles Aurum API calls, code execution (Pyodide for browser-side), and student data.\n\n**Three AI Agents:**\n→ Aurum: Dynamic system prompts modulated by cognitive vectors. 7-layer calibration loop. Per-concept context in Phase 0.\n→ Obsidian: 4-stage validation pipeline. 7 anti-gaming detectors. 9 criteria types. Strict mode in Phase 4+.\n→ Sapphire: 8 cognitive vectors computed from local student state. Feeds into Aurum's system prompt in real time.\n\n**Curriculum:** Phase 0 (50 concepts, 3 data files, dependency tree) + Phases 1-7 (63 sections, 7 phases × 9 sections).\n\n**Admin:** Hidden dashboard (triple-click logo or /admin). 19 files covering student management, AI usage controls, token cost management with hard caps, and system operations.",
      },
      {
        q: "How does the cognitive calibration actually work?",
        a: "15 reasoning tasks (not coding tasks) measure four axes:\n\n→ **Structure ↔ Freedom** — does the student want clear steps or open exploration?\n→ **Theory ↔ Practice** — concepts first or examples first?\n→ **Solo ↔ Guided** — work independently or with help?\n→ **Cautious ↔ Bold** — small safe steps or challenging leaps?\n\nThe result is a 4-element vector [0-1, 0-1, 0-1, 0-1] stored per student. This feeds into `buildSystemPrompt()` in `aurumAgent.js`, modulating 4 style blocks that change how Aurum teaches.\n\nAdditionally, Sapphire computes 8 runtime vectors (momentum, accuracy, stability, guessing, frustration, hintDependence, speedIndex, engagement) that trigger guardrails mid-conversation.",
      },
      {
        q: "How does Obsidian's anti-gaming detection work?",
        a: "A 4-stage pipeline in `obsidianValidator.js` (902 lines):\n\n**Stage 1 — Anti-gaming (7 detectors):**\nHardcoded output detection, copy-paste similarity, pattern matching against known solutions, empty/whitespace submissions, minimal-effort code (< N meaningful lines), print-only solutions, and variable-name gaming.\n\n**Stage 2 — Criteria evaluation (9 types):**\noutput_exact, output_contains, function_exists, function_returns, error_handling, code_quality, no_forbidden, uses_concept, custom.\n\n**Stage 3 — Strict mode (Phase 4+):**\nTightened thresholds, additional quality checks, reduced tolerance for edge cases.\n\n**Stage 4 — Verdict assembly:**\nBinary output: PASS (all criteria met, no gaming detected) or FAIL (any criterion failed or gaming detected). No partial credit.",
      },
    ],
  },
  {
    id: "educators", label: "Educators", desc: "Teachers, bootcamps, institutions.",
    questions: [
      {
        q: "What's the pedagogical model?",
        a: "EP combines several established learning theories into one adaptive system:\n\n→ **Mastery-based learning** — no progression without proven understanding (Bloom's)\n→ **Cognitive load theory** — Phase 0 reduces extraneous load by teaching symbols individually\n→ **Spaced retrieval** — the gate cycle's DRILL stage reinforces through varied practice\n→ **Adaptive instruction** — cognitive calibration + Sapphire vectors = personalized teaching\n→ **Binary assessment** — mirrors real-world engineering (code works or doesn't)\n\nThe 6-stage gate cycle (INSTALL → PREDICT → EVALUATE → REFLECT → DRILL → CERTIFY) covers all levels of Bloom's taxonomy: knowledge, comprehension, application, analysis, synthesis.",
      },
      {
        q: "How are Sapphire's 8 cognitive vectors used?",
        a: "Sapphire computes these from observable student behavior:\n\n1. **Momentum** — progress rate, time between completions\n2. **Accuracy** — first-attempt pass rate\n3. **Stability** — variance in performance over time\n4. **Guessing** — rapid submissions with no code changes\n5. **Frustration** — repeated failures on same concept, long pauses\n6. **Hint Dependency** — how often they ask Aurum before trying\n7. **Speed Index** — time per submission relative to section difficulty\n8. **Engagement** — response length, question quality, exploration patterns\n\nThese feed into Aurum's system prompt as modulation variables. When frustration rises, Aurum gets gentler. When guessing spikes, Aurum adds friction. When engagement drops, Aurum tries re-engagement strategies.",
      },
      {
        q: "Is there administrative control?",
        a: "Yes. A full admin dashboard (hidden from students) provides:\n\n→ **Student management** — individual profiles, progress tracking, vector visualization\n→ **AI usage controls** — model selection, temperature, token limits per session/day/month\n→ **Content management** — curriculum editing, section ordering, difficulty adjustment\n→ **Financial controls** — token cost tracking with hard enforcement walls and emergency kill switches\n→ **System operations** — activity logs, registration management, update deployment\n\nAccessible via triple-click on the EP logo or navigating to /admin. Protected by separate admin authentication.",
      },
    ],
  },
];

export default function QuestionsPage() {
  const [cat, setCat] = useState(CATEGORIES[0].id);
  const [openQ, setOpenQ] = useState<string | null>(null);
  const category = CATEGORIES.find(c => c.id === cat) || CATEGORIES[0];

  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('→ ')) {
        const rest = line.slice(2);
        return <div key={i} className="flex items-start gap-2 my-1"><span className="text-ep_emerald shrink-0">→</span><span>{formatBold(rest)}</span></div>;
      }
      if (line.match(/^\d+\./)) return <div key={i} className="my-1">{formatBold(line)}</div>;
      if (line === '') return <div key={i} className="h-2" />;
      return <p key={i} className="my-1">{formatBold(line)}</p>;
    });
  };

  const formatBold = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-ep_text font-semibold">{part}</strong> : <span key={i}>{part}</span>);
  };

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">FAQ</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Everything you need to know.</h1>
        <p className="text-[15px] text-ep_text_muted">Deep answers. No fluff.</p>
      </header>

      <div className="flex gap-3 flex-wrap">
        {CATEGORIES.map(c => (
          <button key={c.id} onClick={() => { setCat(c.id); setOpenQ(null); }}
            className={`rounded-full px-5 py-2.5 text-[12px] font-medium border transition-all ${
              cat === c.id ? "bg-ep_emerald/10 text-ep_emerald border-ep_emerald/30 shadow-[0_0_15px_rgba(0,242,169,0.1)]" : "text-ep_text_muted border-white/8 hover:border-white/15"
            }`}>{c.label}</button>
        ))}
      </div>
      <p className="text-[12px] text-ep_text_dim">{category.desc}</p>

      <div className="space-y-2 max-w-3xl">
        {category.questions.map(q => {
          const isOpen = openQ === q.q;
          return (
            <div key={q.q} className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-ep_emerald/15 bg-ep_bg_soft shadow-[0_0_20px_rgba(0,242,169,0.04)]' : 'border-white/5 bg-ep_bg_soft/50'}`}>
              <button onClick={() => setOpenQ(isOpen ? null : q.q)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                <span className="text-[15px] font-medium text-ep_text">{q.q}</span>
                <span className={`text-ep_emerald transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-[13px] text-ep_text_muted leading-relaxed border-t border-white/5 pt-4">
                  {formatAnswer(q.a)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
