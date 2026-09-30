"use client";
import { SidebarItem } from './SidebarItem'
import WindPowerIcon from '@mui/icons-material/WindPower';
import AirIcon from '@mui/icons-material/Air';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { usePathname } from 'next/navigation';

export function SiderBar() {
    const path = usePathname();
    return (
        <div className="flex p-2 bg-[#044947] flex-col items-start gap-2 w-80 shrink-0 overflow-y-auto border-r border-gray-200 text-white">
            <nav className="w-full">
                <SidebarItem
                    label="SIMULAÇÕES"
                    icon={AirIcon}
                    href="/simulations"
                    active={path === '/simulations'}
                />
                <SidebarItem
                    label="TURBINAS"
                    icon={WindPowerIcon}
                    href="/turbines"
                    active={path === '/turbines'}
                />
                <SidebarItem
                    label="CATÁLOGO DE TURBINAS"
                    icon={MenuBookIcon}
                    href="/turbine-catalog"
                    active={path === '/turbine-catalog' || path === '/'}
                />
            </nav>

        </div>
    );
}
