import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  meta,
  highlights,
  values,
  modules,
  landscape,
  landscapeInsight,
  roadmap,
  techStack,
  risks,
  sources,
} from "@/data/site";

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {desc && <p className="mt-3 leading-7 text-muted-foreground">{desc}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  const domestic = landscape.filter((c) => c.region === "国内");
  const international = landscape.filter((c) => c.region === "国际");

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
              {meta.status}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {meta.codename}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">
              {meta.tagline}
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              {meta.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                进入功能体验 Demo
              </Link>
              <Link
                href="#landscape"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                查看领域现状
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-border bg-white p-4"
                >
                  <dt className="text-xs text-muted-foreground">{h.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 项目想法 */}
        <Section
          id="vision"
          eyebrow="项目想法"
          title="我们要做什么"
          desc="一个「会引导思考」而不是「直接给答案」的高中数学自学站：学生卡住时，AI 陪他一步步想清楚。"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6 transition hover:shadow-sm"
              >
                <span className="text-2xl">{v.icon}</span>
                <h3 className="mt-4 font-medium">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 功能规划 */}
        <Section
          id="modules"
          eyebrow="功能规划"
          title="核心功能模块"
          desc="按优先级排布，先做深一条闭环，再逐步扩展。"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.id}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 transition hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    {m.priority}
                  </span>
                </div>
                <h3 className="mt-4 flex items-center gap-2 font-medium">
                  {m.title}
                  {m.star && (
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] text-accent">
                      核心
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 领域现状 */}
        <Section
          id="landscape"
          eyebrow="领域现状"
          title="同类产品与竞争格局"
          desc="工具、搜题、大厂闭环各有强者，但「引导式 AI + 本土教材同步 + 一体化」仍是空位。"
        >
          {[
            { label: "国内", items: domestic },
            { label: "国际", items: international },
          ].map((group) => (
            <div key={group.label} className="mb-10 last:mb-0">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                {group.label}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium">{c.name}</p>
                      <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                        {c.type}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {c.feature}
                    </p>
                    <p className="mt-3 border-l-2 border-primary/40 pl-3 text-sm leading-6">
                      启示：{c.insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-primary/20 bg-accent-soft/60 p-6">
            <p className="text-sm font-medium text-accent">机会点</p>
            <p className="mt-2 leading-7">{landscapeInsight}</p>
          </div>
        </Section>

        {/* 路线图 */}
        <Section
          id="roadmap"
          eyebrow="路线图"
          title="从 MVP 到完整产品"
          desc="个人开发、无 AI 经验，先跑通最小闭环，再逐模块扩展。"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {roadmap.map((p) => (
              <div
                key={p.phase}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {p.phase}
                </span>
                <h3 className="mt-4 font-medium">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-medium">技术选型</h3>
              <dl className="mt-4 divide-y divide-border">
                {techStack.map((t) => (
                  <div
                    key={t.area}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{t.area}</dt>
                    <dd className="font-medium">{t.choice}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-medium">风险与对策</h3>
              <ul className="mt-4 space-y-4">
                {risks.map((r) => (
                  <li key={r.title}>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {r.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 案例与来源 */}
        <Section
          id="sources"
          eyebrow="案例与来源"
          title="调研案例与参考来源"
          desc="以下产品与资料构成本次调研的对标与依据。"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-white p-5 transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{s.name}</p>
                  <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    {s.type}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {s.note}
                </p>
                {s.url !== "#" && (
                  <span className="mt-3 inline-block text-xs text-primary opacity-0 transition group-hover:opacity-100">
                    访问 ↗
                  </span>
                )}
              </a>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                想先看看效果？
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                进入 Demo，体验嵌入的几何画板与引导式 AI 助教。
              </p>
            </div>
            <Link
              href="/demo"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              进入 Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
