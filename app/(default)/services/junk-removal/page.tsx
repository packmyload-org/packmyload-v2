import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function JunkMoves(){

    return (
        <main className='bg-[#F9F9F9]'>
                        
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-junk_removal-banner_image.webp)'
                firstText='JUNK REMOVAL SERVICES WITHIN NIGERIA'
                secondText='Junk Removal'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Junk Removal</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        We offer a cost efficient, convenient and professional solution to all your rubbish removal needs. We currently service Lagos City and all surrounding suburbs. We also cover the rural area. No matter where you are based Packmyload.com Junk Removal is a quick and easy solution for all your junk removal needs.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Residential Removals</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Whether you are moving home or you just need a clear out, Packmyload.com Junk Removal can help. We are happy to remove all kinds of unwanted items from green waste to household junk and will take them from where they are currently so you don't need to lift a finger.
                        <br />
                        Packmyload Junk Removal offers the complete service so all you have to do is point at the items you want removed and we will take care of the rest. We endeavour to recycle as much as possible through various local charity's and second hand shops and whatever we cannot donate is taken to the transfer station. We provide up front rates based on volume which include all disposal fees and labour costs, so you only pay once. Because of our up front transparent pricing you are quoted before we do the work and we only charge for the space your items take up. Sometimes it is difficult for our customer to be on site for the collection so we can also visit your premises while you are at work and if the items are outside we can call you before we start the job to give you the quote and if you are happy we can remove the items and even take payment over the phone or via bank transfer.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Commercial/Local Businesses</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        No matter what business you are in, the friendly team at Packmyload Junk Removal can provide a service for your business. We offer a fast, on-time, reliable and friendly removal service. Within shops, offices and commercial premises waste can build up very quickly and getting rid of this waste can be very time consuming and costly for a business owner if there is no building management responsible for removing the waste. Here at Packmyload Junk Removal we can help you with small regular collections right through to one off total office clearances. Top End Junk Removal can take care of all your commercial waste saving you time and money and leaving you to focus on your business.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Construction</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        It is important to keep work sites tidy at all stages of a project so that work can progress. Packmyload Junk Removal can assist your business in saving time and effort by looking after the whole clean-up process from the beginning to the end of the project. Our service can assist you no matter the size of job so whether you are doing a small reno or a complete building reno, Packmyload Junk Removal can take care of the junk while you do what you do best! Simply schedule your construction clean out appointment by calling 070-PACK-PRO. Our friendly team will call you 15 minutes before arrival and when we arrive, just point to the items you want removed and we'll provide you with an up-front, all-inclusive price. Once you're happy with everything, we'll start hauling your debris away and finish by cleaning up the area.
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] lg:[30%] sm:w-[90%]'> 
                    <section className='flex gap-2 items-start mt-4'>
                        <Image 
                            src="/images/icons/recycle-icon.webp"
                            alt='recycle-icon'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Responsible Disposal</h1>
                            <p className='mt-2 text-[#878C9F]'>Your junk is taken to licensed recycling facilities or passed on for reuse.</p>
                        </div>
                    </section>
                    <section className='flex gap-2 items-start mt-12'>
                        <Image 
                            src="/images/icons/check-icon.webp"
                            alt='check-icon'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Thorough</h1>
                            <p className='mt-2 text-[#878C9F]'>Once the team has loaded all the unwanted items, they will give the area one last sweep up and tidy to ensure you are good to go.</p>
                        </div>
                    </section>
                    <section className='flex gap-2 items-start mt-12'>
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