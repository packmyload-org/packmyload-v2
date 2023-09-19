"use client"
import { useRefContext } from "@/context/ServiceRefContext";

interface Props {
    bgImage: string,
    firstText: string,
    secondText: string
}

export const ServicesHeader: React.FC<Props> = ({bgImage, firstText, secondText}) => {

    const contextValue = useRefContext();

    const content = contextValue.content

    const handleButtonClick = () => {
        if(content.current) content.current.scrollIntoView({ behavior: 'smooth' });
    }

    const divStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '450px',
        backgroundImage: bgImage
    };
    return (
        <>
            <div 
            className={`w-full h-[300px] mt-[68px]`} 
                style={divStyle}
            >        
                <div className="flex flex-col items-center justify-end h-full">
                <button
                    onClick={handleButtonClick}
                    className="text-white shadow-lg border-2 text-2xl font-bold p-4 w-[200px] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:bg-white hover:text-black"
                    >
                    GET STARTED
                </button>

                </div>
            </div>

            <div className="mx-auto mt-8 flex flex-col items-center" ref = {content}>

                <div 
                className="md:text-4xl text-2xl font-bold opacity-5" style={{position: 'absolute'}}
                >{firstText.toUpperCase()}</div>
                <div className="md:text-3xl text-xl text-[#566985] mt-4 font-bold" style={{ position: 'relative' }}>{secondText}</div>
                <span className="section-separator"></span>
            </div>
        </>
    )
}