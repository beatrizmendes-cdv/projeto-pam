
import { Link } from 'lucide-react';
import { ElementType } from 'react';

interface SidebarItemProps {
    label: string;
    icon: ElementType;
    href: string;
    active?: boolean;
}
export function SidebarItem({ label, icon: Icon, href, active }: SidebarItemProps) {
    return (
        <Link href={href} className={`block py-4 w-full border-b border-[#195756] transition-colors ${active ? 'bg-[#00BFA6]/10 border-l-4 border-l-[#00BFA6]' : 'hover:bg-white/5'}`}>
            <div className="py-4  w-full border-b border-[#195756]">
                <div className="pl-4 flex ">
                    <Icon className={active ? "text-[#00BFA6]" : "text-white"} />
                    <span className={`text-white ml-3 ${active ? 'text-[#00BFA6]' : 'text-white'}`}>
                        {label}
                    </span>
                </div>
            </div>
        </Link>

    );

}