import StepCard from "./custom/StepCard"


export const ProcedureCards: React.FC = () => {

    return (
        <section className="bg-[#EDF2F8] w-full pt-4">
            <div className="max-w-6xl mx-auto mt-10">
                <h1 className="text-lg md:text-xl text-[#2E5F9E] text-center font-extrabold">HOW TO BOOK</h1>
                <h1 className="text-xl md:text-2xl text-center text-[#2E5F9E] font-bold mt-2">Book a move in three simple steps</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mt-6 items-center">
                    <StepCard 
                        title="Select Your Addresses" 
                        step="STEP 1"
                        addon="Select pick up and drop off locations"
                    />
                    <StepCard 
                        title="Select A Schedule" 
                        step="STEP 2"
                        addon="Reserve a time that suits your schedule"
                    />
                    <StepCard 
                        title="Finalize Your Move" 
                        step="STEP 3"
                        addon="Edit your move if necessary"
                    />
                </div>
            </div>
        </section>
    )
}