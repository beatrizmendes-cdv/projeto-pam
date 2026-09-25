import Image from "next/image";
interface SidebarItemProps {
    label: string;
    icon: string;
}
export function SidebarItem({ label, icon }: SidebarItemProps) {
    return (
        <div className="py-4  w-full border-b border-[#195756]">
            <div className="pl-8 flex">
                <Image src={`/assets/${icon}.png`} alt="Icon" width={24} height={20} />
                <button className="text-white ml-3">
                    {label}
                </button>
            </div>
        </div>

    );

}