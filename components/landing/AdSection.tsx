import Image from 'next/image'
import { useRouter } from 'next/navigation';

export const AdSection: React.FC = () => {
const router =useRouter()
    return (
        <section 
            className="bg-[#2E5F9E] w-[100%]  bg-[url('/images/bg/shapes-big-new.png')] "
        >
            <div 
                className={`max-w-6xl mx-auto flex flex-col py-4 px-7 md:flex-row justify-between`}
            >

                <section className="w-[100%] md:w-[60%] mt-0  text-center md:text-left md:my-auto">
                    <span className=" w-[fit-content] mx-auto md:mx-0 flex gap-3 text-white text-2xl md:text-3xl font-bold items-center">
                        <h1 className="border-r border-white/[.55] pr-2 h-8 ">Packmyload</h1> Hub
                    </span>

                    <p className="text-white font-bold text-xl leading-8 md:text-2xl mt-6">
                        One call to connect all your utilities and home services.
                    </p>
                    <p className="text-white text-base mt-2 mx-auto md:mx-0">
                        One concierge service to connect utilities and home services after a move
                    </p>
                    <button className="mt-8 flex justify-evenly items-center w-[150px] p-[8px] book-move bg-blue-100 hover:bg-white hover:text-blue-300 text-white font-black rounded-full text-base" onClick={()=>router.push('/book_a_move')}>
                        Get Estimate
                    </button>
                </section>
                <section className='flex flex-col items-center mt-5 md:mt-0 md:my-auto'>
                    <Image 
                        src={"/images/packman.png"}
                        width={345}
                        height={345}
                        alt='packman'
                        className='rounded-[10px]'
                    />
                </section>
            </div>
        </section>
    )
}