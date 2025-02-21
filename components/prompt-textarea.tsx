"use client";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

export default function PromptTeaxtarea() {
  const id = useId();
  const maxLength = 269;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>
        Special Instructions
        <span className="text-muted-foreground ml-2 text-xs">(optional)</span>
      </Label>
      <Textarea
        id={id}
        className="h-32 resize-none"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby={`${id}-description`}
        placeholder="Only test the openssl command..."
      />
      <p
        id={`${id}-description`}
        className="text-muted-foreground mt-2 text-right text-xs"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span>{" "}
        characters left
      </p>
    </div>
  );
}
