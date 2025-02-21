"use client";

import * as React from "react";

import { CodeEditor } from "@/components/code-editor";
import { defaultSourceCode } from "@/lib/utils";
import { GenerationPanel } from "@/components/generation-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  const [sourceCode, setSourceCode] = React.useState<string>(defaultSourceCode);

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full w-full">
      <ResizablePanel defaultSize={60}>
        <div className="relative h-full">
          <CodeEditor value={sourceCode} setValueAction={setSourceCode} />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} maxSize={55}>
        <GenerationPanel code={sourceCode} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
