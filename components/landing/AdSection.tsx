import { Play } from '@phosphor-icons/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export const AdSection: React.FC = () => {
const router =useRouter()
    return (
        <section 
            className="bg-[#2E5F9E] w-[100%] bg-[url('/images/bg/shapes-big-new.webp')] "
        >
            <div 
                className={`max-w-6xl mx-auto flex flex-col py-4 px-7 lg:py-10 lg:flex-row justify-center lg:justify-between `}
            >

                <section className="w-[100%] lg:w-[60%] mt-0 text-center lg:text-left lg:my-auto">
                    <span className="w-full lg:w-[fit-content] flex justify-center gap-3 text-white text-2xl md:text-3xl font-bold items-center">
                        <h1 className="border-r border-white/[.55] pr-2 h-8 ">Packmyload</h1> Hub
                    </span>

                    <p className="text-white font-bold text-xl leading-8 md:text-2xl mt-6">
                        One call to connect all your utilities and home services.
                    </p>
                    <p className="text-white text-base mt-2 mx-auto md:mx-0">
                        One concierge service to connect utilities and home services after a move
                    </p>
                    <button className="mt-8 flex justify-evenly items-center w-[150px] p-[8px] book-move bg-blue-100 hover:bg-white hover:text-blue-300 text-white font-black rounded-full text-base mx-auto lg:mx-0" onClick={()=>router.push('/book_a_move')}>
                        Get Estimate
                    </button>
                </section>
                <section className='flex flex-col items-center mt-5 lg:mt-0 lg:my-auto relative'>
                    <Image 
                        src={"/images/packman.webp"}
                        width={345}
                        height={345}
                        alt='Employee Holding Box Ready for Move'
                        className='rounded-[10px]'
                        loading='lazy'
                    />
                     <a className='flex justify-evenly items-center hover:animate-pulse w-[70px] p-[10px] border-gray-400 border-[10px] bg-blue-100 hover:bg-blue-600 absolute top-[40%] left-[40%] text-gray-100 font-bold rounded-full z-10 text-sm' href="https://www.youtube.com/watch?v=WHSjDa1zfyI" target='_blank'>
          <Play size={32} color="#fefbfb" weight="fill" />
                    </a>
                </section>
            </div>
        </section>
    )
}