import StartButton from "./generation-start-button";
import GenerationStatusBadge from "./generation-status-badge";
import PromptTeaxtarea from "./prompt-textarea";
import SelectTests from "./select-test-type";

export interface GenerationPanelProps {
  code: string;
}

export function GenerationPanel({ code }: GenerationPanelProps) {
  return (
    <div className="relative h-full p-4 md:p-6 pb-16">
      <div className="w-full max-w-lg mx-auto space-y-6 py-10">
        <SelectTests />
        <PromptTeaxtarea />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-border">
        <div className="w-full h-full flex items-center justify-between px-4 md:px-6">
          <GenerationStatusBadge />
          <StartButton />
        </div>
      </div>
    </div>
  );
}
