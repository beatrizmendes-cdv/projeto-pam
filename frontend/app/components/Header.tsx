import Image from "next/image";
import logo from "../assets/logo.webp";
import { Menu } from "lucide-react";
export function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between bg-white w-full min-h-16 border-b border-gray-200 text-white px-6 py-2">
      <Menu className="w-4 h-4 text-gray-500" />
      <Image
        src={logo}
        alt="Logo da empresa"
        className="h-8 w-auto"
      />
    </header>
  );
}
