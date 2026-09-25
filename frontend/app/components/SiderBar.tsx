import { SidebarItem } from './SidebarItem'

export function SiderBar() {
    return (
        <div className="flex p-2 bg-[#044947] flex-col items-start gap-2 w-80 shrink-0 overflow-y-auto border-r border-gray-200 text-white">
            <SidebarItem icon={"simulation-icon"} label="SIMULACÕES"></SidebarItem>
            <SidebarItem icon={"turbines-icon"} label="TURBINAS"></SidebarItem>
            <SidebarItem icon={"catalog-icon"} label="CATÁLOGO DE TURBINAS"></SidebarItem>

        </div>
    );
}
