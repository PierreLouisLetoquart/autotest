"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";

export interface CodeEditorProps {
  value: string;
  setValueAction: (value: string) => void;
}

export function CodeEditor({ value, setValueAction }: CodeEditorProps) {
  const { resolvedTheme } = useTheme();

  const onChange = React.useCallback(
    // @ts-expect-error - This is a hack to get around the fact that the CodeMirror
    (val) => {
      console.log("val:", val);
      setValueAction(val);
    },
    [setValueAction],
  );

  return (
    <CodeMirror
      className="absolute inset-0 text-base"
      value={value}
      extensions={[java()]}
      theme={resolvedTheme === "dark" ? githubDark : githubLight}
      height="100%"
      onChange={onChange}
    />
  );
}
