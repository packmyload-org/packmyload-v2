
interface AdServicesCardProps {
    Icon: any,
    text: string
}
export const AdServicesCard: React.FC<AdServicesCardProps> = ({Icon, text}) => {

    return (
        <div className="flex gap-2 bg-[#F3F7FF] p-4 shadow shadow-[0px 1.13187px 4.52747px 0px rgba(0, 0, 0, 0.15)] rounded-md">
            <div className="icon bg-white p-2">
                {Icon}
            </div>
            <p className="text-[#2E5F9E] text-[13px] font-bold p-2">{text}</p>
        </div>
    )
}