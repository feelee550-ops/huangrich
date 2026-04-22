import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getCycleAdvice(phase: string, mood: string, message: string, history: { role: 'user' | 'model', content: string }[] = []) {
  const systemInstruction = `你是一位温柔且专业的女性健康与情绪顾问。
你的名字是“汐月”，这个应用的名字是“汐月 / Tidal”。
你非常了解女性的内分泌节律（月经期、卵泡期、排卵期、黄体期）。
当用户感到不适、焦虑或只是想聊聊时，你会根据她们当前的周期阶段和心情提供建议。

当前用户信息：
- 周期阶段：${phase}
- 当前心情：${mood}

你的回复风格：
1. 温柔、富有同理心。
2. 专业但通俗易懂，多用一些温暖的比喻（如“像月亮一样进入休整期”）。
3. 提供具体的、可操作的小建议（饮食、运动、冥想、休息）。
4. 鼓励用户与自己的身体和解。

保持简短，每次回复控制在 150 字以内。`;

  const contents = [
    ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
    { role: 'user', parts: [{ text: message }] }
  ];

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction,
      },
    });

    return response.text || "抱歉，我现在有点走神，能再说一次吗？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，由于网络原因，我现在无法连接。请稍后再试。";
  }
}
