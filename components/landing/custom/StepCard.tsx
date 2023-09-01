
const StepCard: React.FC = () => {

    return(
        <div className="max-w-sm bg-[#f3f7ff] border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-base text-white text-center mx-auto p-2 rounded-b-[12px] font-bold bg-[#2E5F9E] w-[90px]">Step</h5>
            <div className="p-3">
                <h2 className="mb-3 font-medium text-2xl text-center text-[#2E5F9E]">
                    Schedule a <br />
                    <span className="font-bold"> Video Survey</span>
                </h2>
                <img src={'https://assets.website-files.com/6087d5a85b7a0ab16e57710a/63c02ea6a263142f3563a8b6_v2-4-phones-01.png'} alt="step-image" />
            </div>
        </div>
    )
}

export default StepCard