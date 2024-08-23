import React from "react";
import { MessageCircle } from "lucide-react";

import { cartesiaTTSVoices, Voice } from "../../config";
import { Field } from "../ui/field";
import { Select } from "../ui/select";

type LanguageSelectProps = {
  onSelect: (voice: Voice) => void;
};

const LanguageSelect: React.FC<LanguageSelectProps> = ({ onSelect }) => {
  return (
    <Field label="Voice:">
      <Select
        onChange={(e) => onSelect(cartesiaTTSVoices[e.target.selectedIndex])}
        icon={<MessageCircle size={24} />}
      >
        {cartesiaTTSVoices.map((l: Voice) => (
          <option key={l.id} value={l.id}>
            {l.label}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default LanguageSelect;
