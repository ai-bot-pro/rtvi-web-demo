import { Field } from "../ui/field";
import { Input } from "../ui/input";


interface LLMSystemInputProps {
  onChange: (url: string) => void;
  error?: string | undefined | boolean;
  defaultValue?: string;
}

export const LLMSystemInput: React.FC<LLMSystemInputProps> = ({ onChange, error,defaultValue}) => {
  return (
    <Field label="Enter llm system prompt:" error={error}>
      <Input
        type="text"
        variant={error ? "danger" : "default"}
        placeholder=""
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-20 text-gray-900"
      />
    </Field>
  );
};
