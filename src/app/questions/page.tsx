// src/app/questions/page.tsx
"use client";

import { useState } from "react";

type Category = {
  id: string;
  label: string;
  description: string;
  questions: { question: string; answer: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "beginners",
    label: "Complete Beginners",
    description: "Never coded before? Start here.",
    questions: [
      {
        question: "What is Emerald Protocol?",
        answer: "Emerald Protocol is an AI-powered Python learning platform. Three AI agents — Aurum (your mentor), Obsidian (your validator), and Sapphire (your analyst) — work together to teach you programming from absolute zero. It's not a video course. You learn by doing, with real-time AI guidance.",
      },
      {
        question: "Can I use it if I've never coded before?",
        answer: "That's exactly who it's designed for. Phase 0 teaches you every Python symbol one at a time — quotation marks, parentheses, equals signs — before you write a single line of code. By the time you start coding in Phase 1, every symbol on the screen is already familiar.",
      },
      {
        question: "What is Phase 0?",
        answer: "Phase 0 is 'The Python Alphabet' — 50 concepts across 10 blocks that teach you what every Python symbol means. Each concept gets a full lesson with metaphors, visual examples, and quizzes. No code writing, just understanding. It's like learning the letters before writing words.",
      },
      {
        question: "How is this different from YouTube tutorials?",
        answer: "YouTube shows you what to do. EP makes you do it — and validates that you actually understand. Every section follows a 6-stage gate cycle. Your code is checked by Obsidian with binary validation: PASS or FAIL. No partial credit. And Aurum adapts its teaching to how you think, based on cognitive calibration.",
      },
      {
        question: "Is it too hard or strict?",
        answer: "It's strict on understanding, gentle on people. Obsidian blocks progress when foundations are weak, but Aurum adjusts its pace, gives deeper explanations, and uses metaphors that match your learning style. You move forward when you're ready — not on a timer.",
      },
    ],
  },
  {
    id: "developers",
    label: "Experienced Developers",
    description: "Senior devs, mentors, and tech leads.",
    questions: [
      {
        question: "Why would a senior developer care about this?",
        answer: "If you mentor juniors, EP shows a different approach to teaching: cognitive calibration, adaptive AI mentoring, binary validation, and dependency-driven curriculum design. The three-agent architecture (teach, validate, analyze) is itself an interesting system design.",
      },
      {
        question: "What's the tech stack?",
        answer: "React/Vite frontend with Tailwind, FastAPI backend, Monaco code editor. Three AI agents with distinct system prompts. Sapphire computes 8 cognitive vectors from student behavior. Obsidian runs a 4-stage validation pipeline with 7 anti-gaming detectors.",
      },
      {
        question: "Can I skip Phase 0?",
        answer: "Yes. There's a test-out assessment — rapid-fire questions on key symbols. Pass it and jump straight to Phase 1. But Phase 0 stays accessible as a reference library, so even experienced developers find it useful for quick lookups.",
      },
    ],
  },
  {
    id: "educators",
    label: "Educators & Institutions",
    description: "Teachers, bootcamps, and schools.",
    questions: [
      {
        question: "How does the cognitive calibration work?",
        answer: "15 reasoning tasks (not coding tasks) generate a 4-dimensional learning vector: structure vs freedom, theory vs practice, solo vs guided, cautious vs bold. This vector feeds into Aurum's system prompt, modulating its teaching style for each student.",
      },
      {
        question: "What is binary validation?",
        answer: "Every submission is PASS or FAIL. Obsidian checks output matching, function behavior, error handling, and code quality. It detects gaming (hardcoded outputs, copy-paste, pattern matching). No partial credit — because in production, code either works or it doesn't.",
      },
      {
        question: "What are Sapphire's cognitive vectors?",
        answer: "Sapphire computes 8 vectors from student behavior: momentum, accuracy, stability, guessing, frustration, hint dependency, speed index, and engagement. These feed into Aurum's calibration loop, triggering guardrails like anti-guessing, anti-dependence, and re-engagement interventions.",
      },
    
    ],
  },
];

export default function QuestionsPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [openQ, setOpenQ] = useState<string | null>(null);

  const category = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-[11px] tracking-[0.3em] text-ep_text_muted uppercase mb-2">FAQ</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Questions & Answers</h1>
        <p className="text-sm text-ep_text_muted">
          Everything you need to know about Emerald Protocol, organized by audience.
        </p>
      </header>

      {/* Category tabs */}
      <div className="flex gap-3 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setOpenQ(null); }}
            className={`rounded-full px-4 py-2 text-[12px] font-medium border transition-all ${
              activeCategory === cat.id
                ? "bg-ep_emerald/10 text-ep_emerald border-ep_emerald/30"
                : "text-ep_text_muted border-white/8 hover:border-white/15"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="text-[12px] text-ep_text_dim">{category.description}</p>

      {/* Questions */}
      <div className="space-y-2 max-w-3xl">
        {category.questions.map((q) => {
          const isOpen = openQ === q.question;
          return (
            <div key={q.question} className="rounded-xl border border-white/5 bg-ep_bg_soft overflow-hidden">
              <button
                onClick={() => setOpenQ(isOpen ? null : q.question)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              >
                <span className="text-[14px] font-medium text-ep_text">{q.question}</span>
                <span className="text-ep_text_muted text-sm shrink-0">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-[13px] text-ep_text_muted leading-relaxed border-t border-white/5 pt-3">
                  {q.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
