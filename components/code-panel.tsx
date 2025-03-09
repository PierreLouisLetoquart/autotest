"use client";
import * as React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CodeEditor } from "@/components/code-editor";

interface CodePanelProps {
  sourceCode: string;
  setSourceCode: (sourceCode: string) => void;
  outputCode: string;
  setOutputCode: (outputCode: string) => void;
  isLoading: boolean;
}

export function CodePanel({
  sourceCode,
  setSourceCode,
  outputCode,
  setOutputCode,
  isLoading,
}: CodePanelProps) {
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
            <div />
          ) : (
            <div className="absolute inset-0 z-20 grid place-items-center bg-muted">
              <div className="flex flex-col items-center gap-3">
                <p className="text-lg font-semibold tracking-tight">Tests 🧪</p>
                {!isLoading ? (
                  <p className="text-sm font-light text-muted-foreground">
                    Your generated test will appear here
                  </p>
                ) : (
                  <p className="text-sm font-light text-muted-foreground text-green-400">
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
