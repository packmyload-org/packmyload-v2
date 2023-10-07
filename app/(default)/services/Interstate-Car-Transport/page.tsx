import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function StudentMoves(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-students_move-banner_image.webp)'
                firstText='Interstate Car Transport'
                secondText='Interstate Car Transport'
            />
            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Student Moves</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Whether you’re moving into student halls, new student digs or returning back home between semesters, the problem of shifting your belongings from A to B is a constant source of concern. But it needn’t be with packmyload.com’s student move service. We’re here to make the process as effortless as possible.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Moving</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        An experienced member of the Packmyload Student team will collect your belongings, then deliver it to and fro any university across Nigeria. If you need packing supplies, we can deliver these to your door. Packmyload Student boxes are stronger than standard cardboard boxes and are provided to you at a low cost.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Packing</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        When booking moves with packmyload.com, all your belongings will need to be packaged securely when our removals drivers arrive to collect the items. We recommend using either suitcases or strong cardboard boxes to keep your items as safe as possible.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Labels, Labels, Labels!</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Once you've booked, we give you the labels - all that you have to do is put them on the bags, suitcases or boxes and you're away. After that, we’ll collect your luggage and deliver it to where it needs to go. Sounds simple and it is.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Small And Large Student Removals</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        No matter what you need to send, Uni Baggage can help. We offer student removals for items from 1kg up to 30kg and you can book as many items as you like with us.
                        </p>
                    </section>
                </div>
                <div className='md:w-[30%] sm:w-[90%]'> 
                    <section className='flex gap-2 items-start mt-4'>
                        <Image 
                            src="/images/icons/aid-support.png"
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
                            src="/images/icons/guarantee-icon.png"
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