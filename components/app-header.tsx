import { ModeToggle } from "./mode-toggle";

export function AppHeader() {
  return (
    <header className="w-full h-16 flex items-center justify-between border-b border-border px-4 md:px-6">
      <h1 className="text-lg font-semibold tracking-tight">RestAuto</h1>
      <div className="flex items-center gap-3">
        <ModeToggle />
      </div>
    </header>
  );
}
