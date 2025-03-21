import { clsx, type ClassValue } from "clsx";
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
