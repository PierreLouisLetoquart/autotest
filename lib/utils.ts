import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This default java source code is displayed in the
// code editor when the main page is loaded
export const defaultSourceCode = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`;

// This function extracts the java code from the generated test case
export function exctractTestCaseCode(texte: string): string[] {
  const regex = /```java\s*([\s\S]*?)```/g;
  const matches = [];
  let match;

  while ((match = regex.exec(texte)) !== null) {
    matches.push(match[1].trim());
  }

  return matches;
}

// This function copy the generated test case to the clipboard
export async function copyToClipboard(text: string) {
  try {
    navigator.clipboard.writeText(text);
    toast.success("Copied to the clipboard");
  } catch (e) {
    toast.error("Failed to copy to the clipboard", {
      description: `Error: ${e}`,
    });
    throw new Error("Failed to copy to the clipboard :" + e);
  }
}
