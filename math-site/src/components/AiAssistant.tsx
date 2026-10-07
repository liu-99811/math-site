"use client";

import { useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const starters = [
  "解方程 x² − 5x + 6 = 0 这道题",
  "我不懂三角函数图像的平移变换",
  "立体几何里辅助线该怎么作？",
];

export default function AiAssistant() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "你好，我是引导式 AI 助教 👋\n把题目或卡住的地方告诉我。我不会直接给答案，而是陪你一步步想清楚。",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [demo, setDemo] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setDemo(Boolean(data.demo));
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply ?? "（无响应）" },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "请求失败，请稍后再试。" },
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() =>
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        }),
      );
    }
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white">
      <div className="flex items-center justify-between gap-2 border-b border-border p-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-sm">
            🤖
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium">引导式 AI 助教</p>
            <p className="text-xs text-muted-foreground">分级提示 · 不直接给答案</p>
          </div>
        </div>
        <span
          className={
            "rounded-full px-2.5 py-1 text-xs " +
            (demo
              ? "bg-amber-50 text-amber-700"
              : "bg-emerald-50 text-emerald-700")
          }
        >
          {demo ? "演示模式" : "已接入模型"}
        </span>
      </div>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              "flex " + (m.role === "user" ? "justify-end" : "justify-start")
            }
          >
            <div
              className={
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                (m.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground")
              }
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-muted px-3.5 py-2.5 text-sm text-muted-foreground">
              正在思考…
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {starters.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入题目或你的疑问…"
            className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary/60"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            发送
          </button>
        </form>
      </div>
    </div>
  );
}
