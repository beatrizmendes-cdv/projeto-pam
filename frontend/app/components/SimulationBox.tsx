
type BoxProps = {
    name: string;
    date: string;
    total: number;

}
export default function SimulationBox({ name, date, total }: BoxProps) {
    return (
        <div className=" border border-gray-200 w-72 h-56 rounded-xl p-6 bg-white mt-2 border-t-4 border-t-[#10B981] overflow-hidden">
            <h1 className="text-[#044947] font-sans font-semibold">{name}</h1>
            <p className="text-[#64748B] font-mono font-light text-xs pt-1">{date}</p>

            <div className="mt-5 pt-3 pb-5 border-y border-gray-100">
                <p className="text-xs font-light pb-1 text-[#94A3B8]">Total de turbinas</p>
                <div className="flex gap-1 items-baseline">
                    <span className=" text-[#044947] font-mono font-semibold text-2xl">{total}</span>
                    <span className="text-[#64748B] font-sans font-light text-sm">turbinas</span>
                </div>
            </div>


        </div>
    );
}