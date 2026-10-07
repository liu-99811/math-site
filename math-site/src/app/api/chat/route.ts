import { NextRequest } from "next/server";

type Msg = { role: "user" | "assistant" | "system"; content: string };

// 引导式助教的系统提示：刻意「不直接给答案」
const GUIDED_SYSTEM = `你是一位高中数学引导式助教。
规则：
1. 不要直接给出最终答案或完整解题过程。
2. 先用 1-2 个问题帮助学生明确已知条件与目标。
3. 按 Hint 1 → Hint 2 → Hint 3 分级给提示，每次只推进一步。
4. 多用"你觉得……？""如果……会怎样？"这类引导式提问。
5. 语气友好、简短，鼓励学生自己尝试。`;

function mockReply(): string {
  return `我们先不急着看答案，一起理一理 👇

1. 这道题里，已知条件和要求的目标分别是什么？
2. 你觉得它属于哪个知识点（方程 / 函数 / 几何）？
3. 你尝试到哪一步卡住了？

先把第 1 点告诉我，我们一步步来。

（当前为演示模式：配置 DEEPSEEK_API_KEY 后，这里将由真实大模型给出分级提示。）`;
}

export async function POST(req: NextRequest) {
  let body: { messages?: Msg[] } = {};
  try {
    body = await req.json();
  } catch {
    // ignore
  }

  const messages = body.messages ?? [];
  const lastUser =
    [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  const key = process.env.DEEPSEEK_API_KEY;

  // 未配置密钥 → 演示模式，返回引导式示例
  if (!key) {
    return Response.json({ reply: mockReply(), demo: true });
  }

  // 已配置 → 调用（OpenAI 兼容接口，示例用 DeepSeek）
  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.6,
        messages: [
          { role: "system", content: GUIDED_SYSTEM },
          ...messages.filter((m) => m.role !== "system"),
        ],
      }),
    });
    const data = await res.json();
    const reply: string =
      data?.choices?.[0]?.message?.content ?? "（模型无返回内容）";
    return Response.json({ reply, demo: false });
  } catch {
    return Response.json({
      reply: `${mockReply()}\n\n（注：调用模型失败，已回退到演示模式。最后输入：${lastUser.slice(0, 40)}）`,
      demo: true,
    });
  }
}
