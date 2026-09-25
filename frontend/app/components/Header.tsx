import Image from "next/image";
import { Menu } from "lucide-react";
export function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between bg-white w-full min-h-16 border-b border-gray-200 text-white px-4 py-2">
      <Menu className="w-6 h-6 text-gray-500" />
      <Image
        src="/logo.png"
        alt="Logo da empresa"
        width={120}
        height={32}
        className="h-8 w-auto"
      />
    </header>
  );
}
