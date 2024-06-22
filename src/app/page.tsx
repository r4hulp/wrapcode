import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-24">
      <header className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-medium">Wrapcode</h1>
        <ThemeToggle />
      </header>

    </main>
  );
}
