import MenuIcon from '@mui/icons-material/Menu'; import logo from "@/public/assets/logo.webp";
import { Menu } from "lucide-react";
export function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between bg-white w-full min-h-16 border-b border-gray-200 text-white px-6 py-2">
      <Menu className=" text-gray-500" />
      <MenuIcon />
    </header>
  );
}
