"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface GenerationStatusBadgeProps {
  isLoading: boolean;
  outputCode: string;
}

export default function GenerationStatusBadge({
  isLoading,
  outputCode,
}: GenerationStatusBadgeProps) {
  const [colorBadge, setColorBadge] = React.useState("bg-gray-500");
  const [textBadge, setTextBadge] = React.useState("Generation status");

  React.useEffect(() => {
    if (outputCode !== "" && !isLoading) {
      setColorBadge("bg-green-500");
      setTextBadge("Generation done");
    } else if (isLoading) {
      setColorBadge("bg-amber-500");
      setTextBadge("Generation pending");
    } else {
      setColorBadge("bg-gray-500");
      setTextBadge("Generation status");
    }
  }, [isLoading, outputCode]);

  return (
    <Badge variant="outline" className="gap-1.5">
      {!isLoading ? (
        <span
          className={`size-1.5 rounded-full ${colorBadge}`}
          aria-hidden="true"
        ></span>
      ) : (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          <span
            className={`relative inline-flex size-1.5 rounded-full ${colorBadge}`}
          ></span>
        </span>
      )}
      {textBadge}
    </Badge>
  );
}
