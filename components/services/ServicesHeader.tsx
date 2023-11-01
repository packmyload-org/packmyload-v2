'use client'
import Link from "next/link"
import {usePathname} from 'next/navigation'
interface Props {
    bgImage: string,
    firstText: string,
    secondText: string
}

export const ServicesHeader: React.FC<Props> = ({bgImage, firstText, secondText}) => {

    const path = usePathname()
    const divStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '300px',
        backgroundImage: bgImage
    };
    return (
        <>
            <div 
            className={`w-full h-[150px] mt-[68px]`} 
                style={divStyle}
            >        
                <div className="flex flex-col items-center justify-end h-full">
                    <Link href={`${path.includes('store-delivery')? '/partner' : '/book'}`}>
                    
                        <button
                            className="text-white shadow-lg border-2 text-xl font-bold p-2 w-[200px] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black"
                            >
                            GET STARTED
                        </button>
                    </Link>

                </div>
            </div>

            <div className="mx-auto mt-8 flex flex-col items-center">

                <div 
                className="md:text-4xl text-2xl font-bold opacity-5" style={{position: 'absolute'}}
                >{firstText.toUpperCase()}</div>
                <div className="md:text-3xl text-xl text-[#566985] mt-4 font-bold" style={{ position: 'relative' }}>{secondText}</div>
                <span className="section-separator"></span>
            </div>
        </>
    )
}