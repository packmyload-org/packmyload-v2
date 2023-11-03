
interface StepCardProps{
    title: string,
    step: string,
    addon: string,
    imageUrl: string

}
const StepCard: React.FC<StepCardProps> = ({title, step, addon, imageUrl}) => {

    return(
        <div className="max-w-sm bg-[#f3f7ff] border border-gray-200 rounded-xl shadow mt-4 md:mt-0 w-[98%] mx-auto">
            <h5 className="mb-2 text-base text-white text-center mx-auto p-2 rounded-b-[12px] font-bold bg-[#2E5F9E] w-[90px]">{step}</h5>
            <div className="p-3">
                <h2 className="mb-3 font-medium text-2xl text-center text-[#2E5F9E]">
                    {title} <br />
                    <span className="font-bold text-sm">{addon}</span>
                </h2>
                <img 
                    src={imageUrl} 
                    alt={`Moving Company in lagos & abuja Nigeria: step to ${addon.toLowerCase()}`} 
                    className="w-[450px] h-[350px] mx-auto mt-2 object-cover"
                />
            </div>
        </div>
    )
}

export default StepCard