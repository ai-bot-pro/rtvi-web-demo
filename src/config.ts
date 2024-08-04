//const defaultLanguage = "English";
/*
export function composeSystemPrompt(language: string) {
  return `You are a helpful assistant named Gary. Keep responses short and legible. Respond in ${language}.`;
}*/

export const BOT_READY_TIMEOUT = 30 * 1000; // 20 seconds
export const LATENCY_MIN = 300;
export const LATENCY_MAX = 3000;
export const VAD_POSITIVE_SPEECH_THRESHOLD = 0.8;
export const VAD_NEGATIVE_SPEECH_THRESHOLD = 0.8 - 0.15;
export const VAD_MIN_SPEECH_FRAMES = 5;
export const VAD_REDEMPTION_FRAMES = 3;
export const VAD_PRESPEECH_PAD_FRAMES = 1;

export type Language = {
  language: string;
  model_id: string;
  code: string;
  voice: string;
};

export type Voice = {
  label: string;
  id: string;
};

export type LLMModel = {
  label: string;
  id: string;
};

export const ttsVoices: Voice[] = [
  { label: "English Default", id: "79a125e8-cd45-4c13-8a67-188112f4dd22" },
  { label: "Chinese Default", id: "2ee87190-8f84-4925-97da-e52547f9462c" },
  { label: "California Girl", id: "b7d50908-b17c-442d-ad8d-810c63997ed9" },
  { label: "Friendly Reading Man", id: "69267136-1bdc-412f-ad78-0caad210fb40" },
  { label: "Kentucky Man", id: "726d5ae5-055f-4c3d-8355-d9677de68937" },
];

export const languages: Language[] = [
  {
    language: "English",
    model_id: "sonic-english",
    code: "en",
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    language: "French",
    model_id: "sonic-multilingual",
    code: "fr",
    voice: "a8a1eb38-5f15-4c1d-8722-7ac0f329727d",
  },
];

export const llmModels: LLMModel[] = [
  { label: "LLama3.1 70b", id: "llama-3.1-70b-versatile" },
  { label: "Llama3.1 8b", id: "llama-3.1-8b-instant" },
  { label: "LLama3 70b-8192-tool-use", id: "llama3-groq-70b-8192-tool-use-preview" },
  { label: "LLama3 8b-8192-tool-use", id: "llama3-groq-8b-8192-tool-use-preview" },
  { label: "LLama3 70b-8192", id: "llama3-groq-70b-8192" },
  { label: "LLama3 8b-8192", id: "llama3-groq-8b-8192" },
  { label: "Mixtral 8x7b-32768", id: "mixtral-8x7b-32768" },
  { label: "Gemma2 9b-it", id: "gemma2-9b-it" },
  { label: "Gemma 7b-it", id: "gemma-7b-it" },
];

export const defaultConfig = {
  llm: {
    model: llmModels[0].id,
    messages: [
      {
        role: "system",
        content:
          "You are Chatbot, a friendly, helpful robot. Your output will be converted to audio so don't include special characters other than '!' or '?' in your answers. Respond to what the user said in a creative and helpful way, but keep your responses brief. Start by saying hello.",
        //composeSystemPrompt(defaultLanguage),
      },
    ],
  },
  tts: {
    voice: ttsVoices[0].id,
  },
};

export const defaultZHConfig = {
  llm: {
    model: llmModels[0].id,
    messages: [
      {
        role: "system",
        content:
          "你是一位很有帮助中文AI助理机器人。你的目标是用简洁的方式展示你的能力,请用中文简短回答，回答限制在1-5句话内。你的输出将转换为音频，所以不要在你的答案中包含特殊字符。以创造性和有帮助的方式回应用户说的话。",
        //composeSystemPrompt(defaultLanguage),
      },
    ],
  },
  tts: {
    voice: ttsVoices[1].id,
  },
};