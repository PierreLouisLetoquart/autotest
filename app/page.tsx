"use client";

import * as React from "react";

import { defaultSourceCode } from "@/lib/utils";
import { GenerationPanel } from "@/components/generation-panel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CodePanel } from "@/components/code-panel";

export default function Home() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full w-full">
      <ResizablePanel defaultSize={60}>
        <CodePanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} maxSize={55}>
        <div className="relative h-full">
          <GenerationPanel />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
