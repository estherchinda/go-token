type ListTabProps = {
    title: string;
    subtitle: string;
    amount: string;
    count: string;
    onClick?: () => void;
}

export default function ListTab({
    title,
    subtitle,
    amount,
    count,
    onClick,
}: ListTabProps) {
    return (
        <div onClick={onClick} className="w-full h-[126px] border border-[#E5E7EB] bg-[#FEFEFE] hover:bg-gray-50 rounded-[18px] p-4 space-y-3.5 shadow-md cursor-pointer transition-colors duration-200">
            <h4 className="text-[#55565B] font-bold leading-6">{title}</h4>
            <p className="text-[#55565B] font-normal text-sm">{subtitle}</p>
            <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                    <img src="/fox.svg" alt="Mask" />
                    <p className="text-sm text-[#F69626] font-bold">{count}</p>
                </div>
                <div className="flex justify-center items-center bg-[#F4EDFD82] border border-[#F3F4F9] h-5 w-14 rounded-full py-0.5 px-1.5">
                    <span className="text-[#3C3C43] font-bold text-xs leading-5">~${amount}</span>
                </div>
            </div>
        </div>
    )
}