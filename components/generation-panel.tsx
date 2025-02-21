import { Separator } from "./ui/separator";
import StartButton from "./generation-start-button";
import GenerationStatusBadge from "./generation-status-badge";
import PromptTeaxtarea from "./prompt-textarea";
import SelectTests from "./select-test-type";
import ModelTemperatureSlider from "./model-temperature-slider";
import { GenerationOutput } from "./generation-output";
import { ScrollArea } from "./ui/scroll-area";

export interface GenerationPanelProps {
  code: string;
}

export function GenerationPanel({ code }: GenerationPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-grow">
        <div className="h-full overflow-y-auto p-4 md:p-6">
          <div className="max-w-lg mx-auto space-y-6 py-8">
            <h2 className="text-lg font-semibold tracking-tight">
              Generation Panel
            </h2>
            <SelectTests />
            <PromptTeaxtarea />
            <ModelTemperatureSlider />
            <Separator />
            {/* <GenerationOutput /> */}
          </div>
        </div>
      </ScrollArea>

      <div className="w-full h-16 border-t border-border flex-shrink-0">
        <div className="w-full h-full flex items-center justify-between px-4 md:px-6">
          <GenerationStatusBadge />
          <StartButton />
        </div>
      </div>
    </div>
  );
}
