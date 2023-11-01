import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function StoreDelivery(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-store_moves-banner_image.webp)'
                firstText='STORE DELIVERY SERVICES WITHIN NIGERIA'
                secondText='Store Delivery Services'
            />
            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Store Delivery</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Shop that new sofa from your local furniture store and let us pick it up and deliver into your home, right where you want it. Same day. Effortlessly.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>You Purchase</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Purchase your goods at a store of your choice
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>We Pick-Up</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        We pick-up your goods at the store and load them onto a Packmyload moving truck with care.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>We Deliver</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Goods are transported to their new home.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>We Onload</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Your goods will be unloaded and placed into position and packaging materials will be disposed of.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>And More</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Assembly, Installation, Removing old furniture and appliances - GoGetter will be available to assist for any additional jobs you might think of at the time.e
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] lg:w-[30%] sm:w-[90%]'> 
                    <section className='flex items-start gap-2 mt-4'>
                        <Image 
                            src="/images/icons/truck-icon.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Pick up from any store</h1>
                            <p className='mt-2 text-[#878C9F]'>Shop at all your favorite places. We pick up from any store within our service area.</p>
                        </div>
                    </section>
                    <section className='flex items-start gap-2 mt-4'>
                        <Image 
                            src="/images/icons/calendar-icon.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Same day delivery.</h1>
                            <p className='mt-2 text-[#878C9F]'>Your purchases delivered in under 1-hour or any time that works best for you.</p>
                        </div>
                    </section>
                    <section className='flex items-start gap-2 mt-4'>
                        <Image 
                            src="/images/icons/secure-icon.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Your purchase protected.</h1>
                            <p className='mt-2 text-[#878C9F]'>Your delivery with Lugg will be backed by our multi-million dollar insurance policy.</p>
                        </div>
                    </section>
                    <section className='flex items-start gap-2 mt-12'>
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