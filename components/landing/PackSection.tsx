import Image from 'next/image'
import secure from '@/public/images/secure.svg'
import calendar from '@/public/images/calender.svg'
const PackSection: React.FC = () => {

    return (
        <section className='bg-[#E7E7E7] w-full'>

            <div className="grid grid-cols-1 p-2 lg:p-8 lg:grid-cols-2 max-w-6xl mx-auto gap-[40px] mt-8 border">
                {/* First Card */}
                <div className=" w-full md:w-[80%] lg:w-full xl:w-[550px] bg-[#f3f7ff] border mx-auto border-gray-200 rounded-xl shadow">
                    <div className={`p-3 w-full`}>
                        <Image 
                        src={calendar}
                        width={40}
                        height={40}
                        alt="Moving Company in lagos & abuja Nigeria: calendar icon" 
                        className='float-right'
                        />
                        <div className='clear-both' />
                        <div className="p-4">
                            <h2 className="mb-3 font-bold text-3xl text-[#2E5F9E]">
                                Pack Now, Pay later
                            </h2>
                            <br />
                            <p>
                            Gone are the days of paying in full for your move! With Packmyload, you can now Pack Now, Pay Later through our partnership with Alt Bank. Simply choose to Pack Now, Pay Later when you pick your moving quote - it really is that easy.*
                            </p>
                            <p className='mt-1'><i>*Only applicable for long-distance moves.</i></p>
                        </div>
                    </div>
                    <Image 
                    src={'/images/Packmyload.com-home-office-relocations.webp'}
                    alt="Moving Company in lagos & abuja Nigeria: Happy Customers" 
                    loading='lazy'
                    width={550}
                    height={400}
                    className='float-right w-full h-[330px] object-cover rounded-b-xl'
                    />
                </div>
                {/* Second Card */}
                <div className="w-full md:w-[80%] lg:w-full xl:w-[550px] bg-[#f3f7ff] border mx-auto border-gray-200 rounded-xl shadow">
                    <div className={`p-3 w-full`}>
                        <Image 
                            src={secure} 
                            width={40}
                            height={40}
                            alt="Moving Company in lagos & abuja Nigeria: secure icon" 
                            className='float-right'
                        />
                        <div className='clear-both' />
                        <div className="p-4">
                            <h2 className="mb-3 font-bold text-3xl text-[#2E5F9E]">
                                Coverage for your move
                            </h2>
                            <br />
                            <p>
                            Packmyload offers comprehensive protection for your move across our offerings. Our coverage is specifically built for the household goods moving industry. Claim settlements are fair and accurate and generally processed within 2 weeks of receipt of claim form and required documentation.
                            </p>
                        </div>
                    </div>
                    <img
                    src={'/images/coverge-pack.webp'}
                    alt="Moving Company in lagos & abuja Nigeria: people moving" 
                    loading='lazy'
                    className='float-right w-full h-[330px] object-cover rounded-b-xl'
                    />
                </div>
            </div>
        </section>
    )
}

export default PackSection