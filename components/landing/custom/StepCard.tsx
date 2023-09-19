
interface StepCardProps{
    title: string,
    step: string,
    addon: string,

}
const StepCard: React.FC<StepCardProps> = ({title, step, addon}) => {

    return(
        <div className="max-w-sm bg-[#f3f7ff] border border-gray-200 rounded-xl shadow mt-4 md:mt-0 w-[98%]">
            <h5 className="mb-2 text-base text-white text-center mx-auto p-2 rounded-b-[12px] font-bold bg-[#2E5F9E] w-[90px]">{step}</h5>
            <div className="p-3">
                <h2 className="mb-3 font-medium text-2xl text-center text-[#2E5F9E]">
                    {title} <br />
                    <span className="font-bold text-sm">{addon}</span>
                </h2>
                <img 
                    src={'https://assets.website-files.com/6087d5a85b7a0ab16e57710a/63c02ea6a263142f3563a8b6_v2-4-phones-01.png'} 
                    alt="step-image" 
                    className="w-[200px] h-[300px] mx-auto mt-2"
                />
            </div>
        </div>
    )
}

export default StepCard