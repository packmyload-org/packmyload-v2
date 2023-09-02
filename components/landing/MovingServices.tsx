import MovingServiceCard from "./custom/MovingServiceCard"

export const MovingServices: React.FC = () => {

    return(
        <>
            <h1 className="md:text-2xl sm:text-lg px-6 mt-3 font-bold text-[#2E5F9E] max-w-6xl mx-auto">
            Get more than just moving services. <br />
            Have a safe and secure moving experience.
            </h1>
            <div className="grid grid-cols-1 p-6 md:grid-cols-3 max-w-6xl mx-auto gap-[30px] mt-8">
                {/* First Item */}
                <MovingServiceCard 
                    IconSrc="https://assets.website-files.com/6087d5a85b7a0ab16e57710a/63c1629df02e2dd6d179c9cd_v2-home-3icons-white-01.svg"
                    title = "Available 7 days a week"
                    body = "Packmyload will organize and oversee your move. Have questions? Your Move Coach is available, around the clock, to take care of your requirements."
                />
                {/* Second Item */}
                <MovingServiceCard 
                    IconSrc="https://assets.website-files.com/6087d5a85b7a0ab16e57710a/63c1629d535022bd4d08d1f0_v2-home-3icons-white-02.svg"
                    title = "Trusted moving companies"
                    body = "Packmyload has reviewed, vetted and approved every moving company it works with. Packmyload is there to ensure the our quality standards are upheld during each move."
                />
                {/* Third Item */}
                <MovingServiceCard 
                    IconSrc="https://assets.website-files.com/6087d5a85b7a0ab16e57710a/6316fb078f20f38ca351955c_v2-home-third-row-icons-03.svg"
                    title = "Multiple moving quote"
                    body = "We provide accurate pricing tailored for your move. Our moving quotes only change when the move distance or number of items changes. You can also Move Now, Pay Later."
                />
            </div>
        </>
    )
}