import Image from 'next/image'

export const AdSection: React.FC = () => {

    return (
        <section 
            className="max-w-6xl mx-auto mt-10 p-4 "
        >
            <div className="bg-[#2E5F9E] w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row p-11 rounded-2xl justify-between shadow shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)]">

                <section className="w-[100%] md:w-[50%] p-4 mt-0 md:mt-11">
                    <span className="flex gap-3 text-white text-3xl font-bold">
                        <h1 className="border-r border-white/[.55] pr-2 h-8">Packmyload</h1> Connect
                    </span>

                    <p className="text-white font-bold text-2xl mt-8">
                        One call to connect all your utilities and home services.
                    </p>
                    <p className="text-white text-base mt-2">
                        One concierge service to connect utilities and home services after a move
                    </p>
                    <button className="mt-8 flex justify-evenly items-center hover:animate-pulse w-[180px] p-[8px] border-inherit/20 border-[6px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-white font-bold rounded-full text-xs">
                        Explore our Marketplace
                    </button>
                </section>
                <section className=''>
                    <Image 
                        src={"/images/packman-ad.png"}
                        width={300}
                        height={300}
                        alt='packman'
                        className='mb-10'
                    />
                </section>
            </div>
        </section>
    )
}