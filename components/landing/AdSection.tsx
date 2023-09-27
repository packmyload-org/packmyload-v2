import Image from 'next/image'
import { useRouter } from 'next/navigation';

export const AdSection: React.FC = () => {
const router =useRouter()
    return (
        <section 
            className="bg-[#2E5F9E] w-[100%]  bg-[url('/images/bg/shapes-big-new.png')] "
        >
            <div 
                className={`max-w-6xl mx-auto flex flex-col py-3 md:flex-row justify-evenly`}
            >

                <section className="w-[100%] md:w-[50%] mt-0 md:mt-11 text-center md:text-left">
                    <span className=" w-[fit-content] mx-auto md:mx-0 flex gap-3 text-white text-2xl md:text-3xl font-bold items-center">
                        <h1 className="border-r border-white/[.55] pr-2 h-8 ">Packmyload</h1> Hub
                    </span>

                    <p className="text-white font-bold text-xl leading-8 md:text-2xl mt-8">
                        One call to connect all your utilities and home services.
                    </p>
                    <p className="text-white text-base mt-2 mx-auto md:mx-0">
                        One concierge service to connect utilities and home services after a move
                    </p>
                    <button className="mt-8 flex justify-evenly mx-auto md:mx-0 items-center hover:animate-pulse w-[180px] p-[8px] border-inherit/20 border-[6px] bg-blue-100 hover:bg-white hover:text-blue-300 text-white font-bold rounded-full text-xs" onClick={()=>router.push('/book_a_move')}>
                        Get Estimate
                    </button>
                </section>
                <section className='flex flex-col items-center mt-4 md:mt-12'>
                    <Image 
                        src={"/images/packman.png"}
                        width={350}
                        height={350}
                        alt='packman'
                        className='rounded-md'
                    />
                </section>
            </div>
        </section>
    )
}