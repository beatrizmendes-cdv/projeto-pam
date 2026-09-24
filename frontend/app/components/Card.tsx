interface CardProps {
  label: string;
  value: number | string;
  unit: string;
}

export function Card({ label, value, unit }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between min-w-[220px]">
      <span className="text-sm font-medium text-gray-500 mb-2">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-[#044947]">{value}</span>
        <span className="text-sm text-gray-500 font-medium">{unit}</span>
      </div>
    </div>
  );
}