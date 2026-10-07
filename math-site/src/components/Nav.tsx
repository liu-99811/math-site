import Link from "next/link";
import { meta } from "@/data/site";

const links = [
  { href: "/#vision", label: "项目想法" },
  { href: "/#modules", label: "功能规划" },
  { href: "/#landscape", label: "领域现状" },
  { href: "/#roadmap", label: "路线图" },
  { href: "/#sources", label: "案例与来源" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs text-primary-foreground">
            数
          </span>
          <span>{meta.codename}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demo"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          体验 Demo
        </Link>
      </div>
    </header>
  );
}
