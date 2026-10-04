import Box from "@mui/material/Box";

type BoxProps = {
    name: string;
    date: string;
    total: number;
    onClick?: () => void;
};

export default function SimulationBox({ name, date, total }: BoxProps) {
    return (
        <Box className="min-w-0 w-full min-h-56 rounded-xl border border-gray-200 border-t-4 border-t-[#10B981] bg-white p-5">
            <h2 className="font-sans font-semibold text-[#044947]">{name}</h2>
            <p className="pt-1 font-mono text-xs font-light text-[#64748B]">{date}</p>

            <Box className="mt-5 border-y border-gray-100 pb-5 pt-3">
                <p className="pb-1 text-xs font-light text-[#94A3B8]">Total de turbinas</p>
                <Box className="flex items-baseline gap-1">
                    <span className="font-mono text-2xl font-semibold text-[#044947]">{total}</span>
                    <span className="font-sans text-sm font-light text-[#64748B]">turbinas</span>
                </Box>
            </Box>
        </Box>
    );
}