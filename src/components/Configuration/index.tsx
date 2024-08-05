import React from "react";
import { VoiceClientConfigOptions } from "realtime-ai";
import { useVoiceClient } from "realtime-ai-react";

import { Voice} from "@/config";
import { defaultLLMCtxMessage } from "@/config";
import { defaultConf} from "@/config";

import { LLMSystemInput } from "./LLMSystemInput";
import ModelSelect from "./ModelSelect";
import VoiceSelect from "./VoiceSelect";

const Configuration: React.FC<{ showAllOptions: boolean }> = ({
  showAllOptions = false,
}) => {
  const voiceClient = useVoiceClient()!;

  const updateConfig = (config: VoiceClientConfigOptions) => {
    const updateOpts =
      voiceClient.state === "ready"
        ? { sendPartial: true }
        : { useDeepMerge: true };

    voiceClient.updateConfig(config, updateOpts);
  };

  const handleVoiceChange = (voice: Voice) => {
    updateConfig({
      tts: { voice: voice.id },
    });

    // Prompt the LLM to speak
    voiceClient.appendLLMContext(defaultLLMCtxMessage.voice_change);
  };

  const handleModelChange = (model: string) => {
    updateConfig({
      llm: { model: model },
    });

    if (voiceClient.state === "ready") {
      voiceClient.interrupt();

      setTimeout(() => {
        voiceClient.appendLLMContext(defaultLLMCtxMessage.model_change);
      }, 500);
    }
  };

  const handleSystemPromptChange = (prompt: string) => {
    updateConfig({
      llm: { messages: [{role:"system", content: prompt}]},
    });

    if (voiceClient.state === "ready") {
      voiceClient.interrupt();

      setTimeout(() => {
        voiceClient.appendLLMContext(defaultLLMCtxMessage.system_prompt_change);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <ModelSelect onSelect={(model) => handleModelChange(model)} />
      {showAllOptions && (
        <VoiceSelect onSelect={(voice: Voice) => handleVoiceChange(voice)} />
      )}
      <LLMSystemInput onChange={(prompt) => handleSystemPromptChange(prompt)} defaultValue={defaultConf.llm.messages[0].content} />
    </div>
  );
};

export default Configuration;
