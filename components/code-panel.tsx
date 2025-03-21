"use client";
import * as React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CodeEditor } from "@/components/code-editor";
import { StartButton } from "@/components/generation-start-button";
import { sendToDB } from "@/hooks/sendToDB";
interface CodePanelProps {
  sourceCode: string;
  setSourceCode: (sourceCode: string) => void;
  outputCode: string;
  setOutputCode: (outputCode: string) => void;
  isLoading: boolean;
  selectedTest: string;
}

export function CodePanel({
  selectedTest,
  sourceCode,
  setSourceCode,
  outputCode,
  setOutputCode,
  isLoading,
}: CodePanelProps) {
  const [, setIsLoadingSendToDB] = React.useState<boolean>(false);

  return (
    <ResizablePanelGroup direction="vertical" className="w-full h-full">
      <ResizablePanel defaultSize={70}>
        <div className="relative w-full h-full">
          <CodeEditor value={sourceCode} setValueAction={setSourceCode} />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} minSize={20}>
        <div className="relative w-full h-full">
          <CodeEditor value={outputCode} setValueAction={setOutputCode} />
          {outputCode ? (
            <div className="butto-container z-[100] absolute right-[1.5rem] top-[1rem]">
              <StartButton
                className="hover:bg-green-500"
                action={() =>
                  sendToDB({
                    testType: selectedTest,
                    prompt: sourceCode,
                    testCaseGenerated: outputCode,
                    setIsLoading: setIsLoadingSendToDB,
                  })
                }
                buttonText="Send to DB"
              />
            </div>
          ) : (
            <div className="absolute inset-0 z-20 grid place-items-center bg-muted">
              <div className="flex flex-col items-center gap-3">
                <p className="text-lg font-semibold tracking-tight">Tests 🧪</p>
                {!isLoading ? (
                  <p className="text-sm font-light text-muted-foreground">
                    Your generated test will appear here
                  </p>
                ) : (
                  <p className="text-sm font-light text-green-400">
                    Generating test...
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
