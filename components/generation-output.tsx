import { Textarea } from "./ui/textarea";

export function GenerationOutput() {
  return (
    <Textarea
      className="h-64"
      value="The quick brown fox jumps over the lazy dog."
      readOnly
    />
  );
}
