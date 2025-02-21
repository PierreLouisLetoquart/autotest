import { AppHeader } from "./app-header";

export function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col">
      <AppHeader />
      <div className="flex-grow">{children}</div>
    </main>
  );
}
