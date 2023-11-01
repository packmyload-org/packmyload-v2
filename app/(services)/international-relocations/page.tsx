import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function InternationRelocation(){

    return (
        <main className='bg-[#F9F9F9]'>
            
            <ServicesHeader 
                bgImage='url(/images/extra/Ai-1.webp)'
                firstText='INTERNATIONAL RELOCATION SERVICES WITHIN NIGERIA'
                secondText='International Relocation'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>International Relocations</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Whether you’re taking a business trip for 6-12 month contract overseas or embarking on a permanent move overseas, Packmyload Worldwide will get the job done for international relocation, getting your belongings overseas safely and securely to anywhere in the world.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Personnal Oversees Relocation</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Packmyload Worldwide can move your personal belongings across the globe or to the next street along! We will take care of your personal effects and make sure they are delivered to your new address in perfect condition. We have made international relocation easy, stress-free way to get your belongings door to door from A to B.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Worldwide Excess Baggage Shipping</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        We can ship your excess baggage for any journey - an extra suitcases and bags abroad for a short holiday or getting things back home from any location around the globe. We can also store your baggage safely should you need somewhere to hold it until your arrival or return. Yep, we think of everything. Take a look at our baggage shipping services or grab an online quote today.
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] lg:[30%] sm:w-[90%]'> 
                    <section className='flex gap-2 items-start mt-4'>
                        <Image 
                            src="/images/icons/aid-support.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>24 Hours Support</h1>
                            <p className='mt-2 text-[#878C9F]'>Packmyload.com is proud to offer 24 hours support. When you call the Packmyload.com support team, you’ll speak to a person immediately, addressing any issues and ensuring prompt resolution.</p>
                        </div>
                    </section>
                    <section className='flex gap-2 items-start mt-12'>
                        <Image 
                            src="/images/icons/guarantee-icon.webp"
                            alt='gurantee-icon'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Packmyload.com Guarantee</h1>
                            <p className='mt-2 text-[#878C9F]'>At Packmyload, we apply our ‘can-do’ attitude to every job we take on. We guarantee 100% satisfaction.</p>
                        </div>
                    </section>
                </div>
            </section>

            <br />
        </main>
    )
}