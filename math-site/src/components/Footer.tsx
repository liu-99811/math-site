import { meta } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {meta.codename} · {meta.tagline}
        </p>
        <p>内容仅作项目调研与学习参考，版权归原作者所有。</p>
      </div>
    </footer>
  );
}
