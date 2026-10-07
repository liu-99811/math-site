import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GeoGebraApplet from "@/components/GeoGebraApplet";
import AiAssistant from "@/components/AiAssistant";

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            ← 返回首页
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            功能体验 Demo
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            左侧是嵌入的「动态几何 / 图形计算器」（GeoGebra），右侧是「引导式
            AI 助教」的交互框架原型。先把核心能力搭成骨架，再逐步丰富。
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <GeoGebraApplet />
            </div>
            <div className="min-h-[640px] lg:col-span-2">
              <AiAssistant />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-7 text-muted-foreground">
            <p className="font-medium text-foreground">接入说明</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                几何画板：由 GeoGebra 在线提供，无需本地安装，
                <strong className="font-medium text-foreground">联网即可使用</strong>。
              </li>
              <li>
                AI 助教：当前为演示模式；配置环境变量{" "}
                <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                  DEEPSEEK_API_KEY
                </code>{" "}
                后自动切换为真实大模型。
              </li>
              <li>后续可在此页加入「题库 + 错题本」与教材目录导航。</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
