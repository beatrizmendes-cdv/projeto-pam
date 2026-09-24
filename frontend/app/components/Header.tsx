import { Menu } from "lucide-react";
export function Header() {
  return (
    <header className="bg-white w-full left-0 h-12 sticky top-0 z-50 border-b border-gray-200 text-white p-4">
      <Menu className="w-4 h-4 text-gray-500" />
    </header>
  );
}