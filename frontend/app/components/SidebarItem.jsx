

export function SidebarItem({label}){
    return(
        <div className="py-4  w-full border-b border-[#195756]">
            <div className="pl-8">
                <button className="text-white">
            {label}
            </button>
            </div>
        </div>
        
    );
    
}