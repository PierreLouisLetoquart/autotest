"use client";

import * as React from "react";

import { GenerationPanel } from "@/components/generation-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CodePanel } from "@/components/code-panel";
import { defaultSourceCode } from "@/lib/utils";

export default function Home() {
  const [sourceCode, setSourceCode] = React.useState<string>(defaultSourceCode);
  const [outputCode, setOutputCode] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedTest, setSelectedTest] = React.useState("restassured");

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full"
      suppressHydrationWarning
    >
      <ResizablePanel defaultSize={60}>
        <CodePanel
          selectedTest={selectedTest}
          sourceCode={sourceCode}
          setSourceCode={setSourceCode}
          outputCode={outputCode}
          setOutputCode={setOutputCode}
          isLoading={isLoading}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} maxSize={55}>
        <div className="relative h-full">
          <GenerationPanel
            selectedTest={selectedTest}
            setSelectedTest={setSelectedTest}
            prompt={sourceCode}
            setOuputCode={setOutputCode}
            setIsLoading={setIsLoading}
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
