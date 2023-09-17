import Image from 'next/image'
import secure from '@/public/images/secure.svg'
import calendar from '@/public/images/calender.svg'
const PackSection: React.FC = () => {

    const divStyle = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        width: '100%',
        height: '600px',
    };

    return (
        <section className='bg-[#F9F9F9] w-full'>

            <div className="grid grid-cols-1 p-8 md:grid-cols-2 max-w-6xl mx-auto gap-[30px] mt-8">
                {/* First Card */}
                <div className={`bg-[#f3f7ff] p-3 border w-[550px] border-gray-200 rounded-xl shadow bg-[url('/images/Packmyload.com-home-office-relocations.png')]`} style={divStyle}>
                    <Image 
                    src={calendar}
                    width={40}
                    height={40}
                    alt="icon" 
                    className='float-right'
                    />
                    <div className='clear-both' />
                    <div className="p-4">
                        <h2 className="mb-3 font-bold text-2xl text-[#2E5F9E]">
                            Pack Now, Pay later
                        </h2>
                        <p>
                        Gone are the days of paying in full for your move! With Packmyload, you can now Pack Now, Pay Later through our partnership with Affirm. Simply choose to Pack Now, Pay Later when you pick your moving quote - it really is that easy.*
                        </p>
                        <p><i>*Only applicable for long-distance moves.</i></p>
                    </div>
                </div>
                {/* Second Card */}
                <div className={`bg-[#f3f7ff] p-3 border w-[550px] border-gray-200 rounded-xl shadow bg-[url('/images/packmyload-insure.png')]`} style={divStyle}>
                    <Image 
                        src={secure} 
                        width={40}
                        height={40}
                        alt="icon" 
                        className='float-right'
                    />
                    <div className='clear-both' />
                    <div className="p-4">
                        <h2 className="mb-3 font-bold text-2xl text-[#2E5F9E]">
                            Coverage for your move
                        </h2>
                        <p>
                        Packmyload offers comprehensive protection for your move across our offerings. Our coverage is specifically built for the household goods moving industry. Claim settlements are fair and accurate and generally processed within 2 weeks of receipt of claim form and required documentation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackSection