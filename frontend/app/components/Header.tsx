import MenuIcon from '@mui/icons-material/Menu';
import logo from "@/public/assets/logo.webp";
import Image from 'next/image';


export function Header() {
  return (
    <header className="flex shrink-0 items-center justify-between bg-white w-full min-h-16 border-b border-gray-200 text-white px-6 py-2">
      <MenuIcon className='text-gray-500' />
      <Image src={logo} alt="logo" className='h-10 w-auto' />
    </header>
  );
}
