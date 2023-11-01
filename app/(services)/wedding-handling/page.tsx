import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function HomeMoves(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-wedding_gift-banner_image.webp)'
                firstText='WEDDING GIFT HANDLING SERVICES WITHIN NIGERIA'
                secondText='Wedding Gift Handing'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Wedding Gift Handling</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        The gift handling service is offered to clients holding events and occasions where they receive many valuable gifts. Packmyload.com comes in and handles the gifts at the gift table to ensure that no damages or losses occur. We come with a branded truck and two members of our staff in uniform. We provide this service anywhere in Lagos and Nigeria.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Wrapping Materials</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        To prevent the gifts from getting damaged, either by getting scratches or breaking we ensure they are well protected. If some gifts are found not very well packed, we repack them as this is our expertise.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Garbage & Donations Removal</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        On or before your moving day packmyload will pickup and dispose of garbage that you do not wish to take with you to your new home. Alternatively, you may choose to donate certain items. packmyload can deliver these items to the location of your choice.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Gift Consolidation</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        To prevent the gifts from getting lost, we put them together according to their type. The cutleries go together, the glassware and so on. This ensures that none of the gifts received on that day ends up missing.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Gift Registry</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        For accountability and good order, we do gift registration so that we can ensure that all gifts received are documented. This helps the owner when unwrapping them.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Security</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        On the day of the event, we provide security for the gift table if necessary.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Transportation</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        After the event, we transport the gifts to the client’s premises. We then check against the gift registry to make sure that all are delivered.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Storage</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        In the case of weddings, if the couple is heading off for a honeymoon, we store the goods in our warehouse in self storage lockers which are permanently locked. This storage service is free. When you get back, we deliver the goods to the assigned destination for free.
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] lg:w-[30%] sm:w-[90%]'> 
                    <section className='flex items-start gap-2 mt-4'>
                        <Image 
                            src="/images/icons/secure-icon.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Security.</h1>
                            <p className='mt-2 text-[#878C9F]'>Ensure the safety and security of all gift items.</p>
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