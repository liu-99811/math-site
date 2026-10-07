"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    GGBApplet?: new (
      params: Record<string, unknown>,
      html5NoWebSimple?: boolean,
    ) => { inject: (id: string) => void };
  }
}

const CONTAINER_ID = "ggb-element";

export default function GeoGebraApplet() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const inject = () => {
      if (!window.GGBApplet) {
        setError(true);
        return;
      }
      const params = {
        appName: "graphing",
        width: 900,
        height: 520,
        showToolBar: true,
        showAlgebraInput: true,
        showMenuBar: false,
        enableRightClick: true,
        language: "zh_CN",
        appletOnLoad: () => setReady(true),
      };
      const applet = new window.GGBApplet(params, true);
      applet.inject(CONTAINER_ID);
      loaded.current = true;
    };

    if (window.GGBApplet) {
      inject();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.geogebra.org/apps/deployggb.js";
    script.async = true;
    script.onload = inject;
    script.onerror = () => setError(true);
    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium">
          GeoGebra 动态几何 / 图形计算器
        </span>
        <span className="text-xs text-muted-foreground">
          在线加载自 geogebra.org（需联网）
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border/60 bg-muted/30">
        <div id={CONTAINER_ID} className="min-h-[520px] min-w-[900px]" />
      </div>

      {!ready && !error && (
        <p className="mt-3 text-xs text-muted-foreground">
          正在加载几何画板，请稍候…
        </p>
      )}
      {error && (
        <p className="mt-3 text-xs text-red-500">
          加载失败：请确认网络可访问 geogebra.org，然后刷新重试。
        </p>
      )}
    </div>
  );
}
