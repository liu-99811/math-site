// 站点内容数据：集中管理，便于后续替换/接入 CMS
// 内容来源：2026-10 项目调研（详见 sources）

export const meta = {
  codename: "数引 · MathGuide",
  codenameNote: "暂定名，可替换",
  tagline: "会引导思考的高中数学 AI 学习站",
  summary:
    "面向「初高中衔接 + 高中」的学生自学 AI 数学网站。以「分级提示、引导思考」的 AI 答疑为核心，配套人教版同步知识体系与题库，免费开放。",
  status: "项目构思 / 框架搭建阶段",
};

export const highlights = [
  { label: "目标学段", value: "初高中衔接 + 高中" },
  { label: "核心场景", value: "日常学习 · 作业答疑 · 高考复习" },
  { label: "内容基准", value: "人教版同步" },
  { label: "形态", value: "网页 · 免费" },
];

export type Value = { icon: string; title: string; desc: string };

export const values: Value[] = [
  {
    icon: "🧭",
    title: "引导而非代劳",
    desc: "AI 采用苏格拉底式追问与分级提示（Hint 1→2→3），带学生自己走完思考过程，而不是直接抛出答案。",
  },
  {
    icon: "📘",
    title: "教材同步",
    desc: "对齐人教版目录与知识点，从「必修」到「选择性必修」，让练习与课堂进度一致。",
  },
  {
    icon: "🗂️",
    title: "数据底座",
    desc: "以题库 + 错题本为内容底座：常见题走本地预置解析，AI 仅作兜底，兼顾体验与成本。",
  },
  {
    icon: "📐",
    title: "可视化理解",
    desc: "嵌入动态几何与函数图像工具，把抽象概念「画」出来，帮助学生建立直观。",
  },
];

export type Module = { id: string; title: string; desc: string; icon: string; priority: string; star?: boolean };

export const modules: Module[] = [
  {
    id: "ai-tutor",
    title: "AI 引导式答疑",
    icon: "🤖",
    desc: "核心功能。学生提交题目 → AI 先追问卡点 → 逐级给出提示 → 反复尝试后才揭示关键步骤，始终不直接给最终答案。",
    priority: "P0 · 核心",
    star: true,
  },
  {
    id: "knowledge",
    title: "人教版同步知识体系",
    icon: "🧩",
    desc: "以教材目录为骨架：章 → 节 → 知识点 → 关联题目，形成可检索、可导航的知识网络。",
    priority: "P0",
    star: true,
  },
  {
    id: "bank",
    title: "题库 + 错题本",
    icon: "📚",
    desc: "支持按知识点/难度筛题、自动收录错题、定期复盘，是内容与学习闭环的基础。",
    priority: "P1",
    star: true,
  },
  {
    id: "visual",
    title: "动态几何 / 函数可视化",
    icon: "📐",
    desc: "嵌入 GeoGebra，实现函数图像、平面与立体几何的动态演示，辅助概念理解。",
    priority: "P1 · 辅助",
  },
  {
    id: "tools",
    title: "计算工具集",
    icon: "🧮",
    desc: "方程求解、导数积分、数列、统计概率等常用计算器（后期规划）。",
    priority: "P2 · 后期",
  },
];

export type Competitor = {
  name: string;
  region: "国内" | "国际";
  type: string;
  feature: string;
  insight: string;
};

export const landscape: Competitor[] = [
  {
    name: "网络画板",
    region: "国内",
    type: "动态几何 + AI 推理",
    feature: "中科院张景中院士团队研发，具备几何证明自动推理、函数动画、3D 模型，已免费接入国家中小学智慧教育平台。",
    insight: "免费 + 权威 + 国家平台背书，是可视化类的强势对标。",
  },
  {
    name: "学而思 · 九章爱学",
    region: "国内",
    type: "AI 辅导 + 知识图谱",
    feature: "动态几何拆解、错题轻课、知识图谱、个性化学习路径。",
    insight: "大厂闭环，覆盖「诊断—讲解—练习」。",
  },
  {
    name: "飞象老师（猿辅导）",
    region: "国内",
    type: "AI 课件生成",
    feature: "一句话生成 3D 教学动画、AI 互动课件，教师端免费。",
    insight: "面向课堂演示与备课场景。",
  },
  {
    name: "小猿搜题 / 作业帮",
    region: "国内",
    type: "拍照解题 / 题库",
    feature: "拍照搜题、海量题库与直播课程。",
    insight: "流量入口强，但易被诟病「直接给答案」。",
  },
  {
    name: "GeoGebra",
    region: "国际",
    type: "动态数学工具",
    feature: "几何、代数、统计、微积分、3D 一体，免费跨平台，支持嵌入。",
    insight: "可视化的事实标准，可直接嵌入复用。",
  },
  {
    name: "Desmos",
    region: "国际",
    type: "图形计算器",
    feature: "极简界面的在线图形计算器，参数滑块实时渲染。",
    insight: "函数与图像探索体验极佳。",
  },
  {
    name: "Wolfram Alpha",
    region: "国际",
    type: "计算引擎",
    feature: "自然语言驱动的计算引擎，分步解题、符号计算、数学验证。",
    insight: "权威计算能力，适合验算与拆解。",
  },
  {
    name: "Symbolab",
    region: "国际",
    type: "分步解题",
    feature: "分步推导复杂运算，步骤贴近教材书写格式。",
    insight: "过程展示对教学友好。",
  },
  {
    name: "Photomath",
    region: "国际",
    type: "拍照解题",
    feature: "扫描手写题并给出动画式分步讲解，下载量巨大。",
    insight: "拍照识别体验成熟。",
  },
  {
    name: "Khanmigo",
    region: "国际",
    type: "AI 引导式辅导",
    feature: "可汗学院 AI 助手，苏格拉底式提问引导，刻意不直接给答案。",
    insight: "与我们的「引导思考」定位最接近的对标。",
  },
];

export const landscapeInsight =
  "现有产品要么偏「工具」（GeoGebra / Desmos / Wolfram），要么偏「搜题刷题」（小猿 / 作业帮），要么是大厂闭环（学而思 / 猿辅导）。「引导式 AI + 本土教材同步 + 一体化」的组合，仍是明显的空位。";

export type RoadmapPhase = { phase: string; title: string; items: string[] };

export const roadmap: RoadmapPhase[] = [
  {
    phase: "MVP",
    title: "跑通一条引导闭环",
    items: [
      "选定人教版一个模块（如函数 / 三角函数）",
      "知识体系 + 题库 + 分步解析",
      "AI 分级提示：学生卡住 → 引导 → 自己解出",
    ],
  },
  {
    phase: "V2",
    title: "补齐学习闭环",
    items: ["动态几何 / 函数可视化（GeoGebra）", "错题本 + 复习提醒", "拓展到教材同步目录"],
  },
  {
    phase: "V3",
    title: "延伸到教学",
    items: ["教师端：课件生成 / 组卷 / 学情分析", "3D 立体几何专题", "账号与班级体系"],
  },
];

export const techStack = [
  { area: "前端框架", choice: "Next.js + TypeScript + Tailwind CSS" },
  { area: "几何可视化", choice: "GeoGebra 嵌入（2D / 3D）" },
  { area: "公式渲染", choice: "KaTeX" },
  { area: "AI 答疑", choice: "大模型 API + 引导式提示工程" },
  { area: "部署", choice: "Vercel / 静态托管" },
];

export const risks = [
  {
    title: "版权风险",
    desc: "教材与高考真题版权归属复杂，站点内容仅作个人学习参考；对外发布需授权，优先使用自有整理内容。",
  },
  {
    title: "成本风险",
    desc: "「免费 + AI」必须做成本控制：免费用户每日限次、同题缓存、题库优先、AI 兜底。",
  },
  {
    title: "范围风险",
    desc: "个人开发、无 AI 经验，需从极小切口起步，先验证「引导式答疑」体验，再逐模块扩展。",
  },
];

export type Source = { name: string; type: string; url: string; note: string };

export const sources: Source[] = [
  {
    name: "网络画板",
    type: "国内产品",
    url: "https://www.netpad.net.cn/",
    note: "中科院团队动态数学工具，已接入国家平台",
  },
  {
    name: "国家中小学智慧教育平台",
    type: "官方平台",
    url: "https://basic.smartedu.cn",
    note: "聚合成体系的数学 AI 工具与电子教材",
  },
  {
    name: "GeoGebra",
    type: "国际工具",
    url: "https://www.geogebra.org",
    note: "动态几何 / 代数 / 3D，可直接嵌入",
  },
  {
    name: "Desmos",
    type: "国际工具",
    url: "https://www.desmos.com",
    note: "在线图形计算器",
  },
  {
    name: "Wolfram Alpha",
    type: "国际工具",
    url: "https://www.wolframalpha.com",
    note: "权威计算引擎",
  },
  {
    name: "Symbolab",
    type: "国际工具",
    url: "https://www.symbolab.com",
    note: "分步推导",
  },
  {
    name: "Photomath",
    type: "国际工具",
    url: "https://photomath.com",
    note: "拍照解题",
  },
  {
    name: "Khanmigo",
    type: "国际产品",
    url: "https://www.khanmigo.ai",
    note: "苏格拉底式 AI 辅导",
  },
  {
    name: "tchMaterial-parser",
    type: "开源工具",
    url: "https://github.com/happycola233/tchMaterial-parser",
    note: "国家平台电子教材下载工具（MIT）",
  },
  {
    name: "人教版高中数学（B 版）教材",
    type: "内容基准",
    url: "#",
    note: "必修 1–4、选择性必修 1–3（已上传，作知识点参考）",
  },
];
