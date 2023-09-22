import Image from 'next/image'
import { ServicesHeader } from '@/components/services/ServicesHeader';

export default function HomeMoves(){

    return (
        <main className='bg-[#F9F9F9]'>

            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-home_moves-banner_image.png)'
                firstText='Home Relocation within Nigeria'
                secondText='Home Relocation within Nigeria'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Home Moving Company Nigeria</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Whether it’s just a few items that need to be moved to another room, or an entire apartment or house, Packmyload Moving is the cost-effective option. Our moving services will eliminate the hassle of renting a van and doing the heavy lifting yourself. What makes packmyload unique is that once you arrive at your destination, Packmyload will be there to assist in additional chores to alleviate the stress of your move!
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Furniture Moving and Delivery</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        We also deliver and furniture throughout Lagos and around Nigeria. If you’ve just invested in a fantastic piece of furniture, why let anyone but an experienced professional handle it? Our team are fit, friendly and most important of all, they’re specially trained to handle expensive and delicate items. We offer comprehensive packing service packing for furniture; special equipment and material for handling furniture and sensible pricing.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Garbage & Donations Removal</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        On or before your moving day packmyload will pickup and dispose of garbage that you do not wish to take with you to your new home. Alternatively, you may choose to donate certain items. packmyload can deliver these items to the location of your choice.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Moving Day Services</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Packmyload provides full service on your moving day by coming prepared with shrink-wrap to wrap all your furniture before the move to minimize scuffs & stains that can result from the moving process. Also included is the disassembling & reassembling of all items that can not be transported in one piece.
<br />
We disassemble & reassemble: Beds, Sectional desks, Shelves out of bookcases, Entertainment units, China Cabinets, Sectional Sofas and more.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>On-Call Moving & Emergency Moving</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        We realize that all moves are not planned in advance, this is why packmyload offers our On-Call Moving and Emergency moving services. packmyload can make a last minute move painless with our hassle free, full service moving package. Please call us to see if we can help you with your last minute move. We will get you moved the same day where possible, and if not we can usually get you in the next day.
                        </p>
                    </section>
                </div>
                <div className='md:w-[30%] sm:w-[90%]'> 
                    <section className='flex gap-2 items-start mt-4'>
                        <Image 
                            src="/images/icons/recycle-icon.png"
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
                            src="/images/icons/check-icon.png"
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