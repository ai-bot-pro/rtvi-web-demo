import React from "react";
import { Package } from "lucide-react";

import { LLMModel, groqLLMModels } from "../../config";
import { Field } from "../ui/field";
import { Select } from "../ui/select";

type ModelSelectProps = {
  onSelect: (model: string) => void;
};

const ModelSelect: React.FC<ModelSelectProps> = ({ onSelect }) => {
  return (
    <Field label="Groq API LLM Model:">
      <Select
        onChange={(e) => onSelect(e.currentTarget.value)}
        icon={<Package size={24} />}
      >
        {groqLLMModels.map((model: LLMModel) => (
          <option key={model.id} value={model.id}>
            {model.label}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default ModelSelect;
