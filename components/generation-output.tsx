import { Textarea } from "./ui/textarea";

export function GenerationOutput() {
  return (
    <Textarea
      disabled
      className="h-32 resize-none bg-muted border-transparent shadow-none"
      value="Keep track of the generation progress here..."
      readOnly
    />
  );
}
