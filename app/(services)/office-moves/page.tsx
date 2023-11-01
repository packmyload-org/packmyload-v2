import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'

export default function OfficeMoves(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-office_moves-banner_image.webp)'
                firstText='OFFICE RELOCATION SERVICES WITHIN NIGERIA'
                secondText='Office Relocation within Nigeria'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Office Moving Company Nigeria</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        If you’re planning to move into a new office space, packmyload.com can help with customized solutions for small to medium sized moves and inter-office moves. We are experts at disassembling, moving, reassembling and positioning.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Coporate Relocation Services</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        With a full range of corporate relocation services, we take care of all the corporate relocation details, providing a quality experience for transferring your employees. From a corporate relocation program developed to cater to your employees and their families to making sure your offices are moved without a hitch, and with minimal disruption of business, our corporate relocation services are designed to meet every need and exceed your expectations. Our full-service move offerings include packing, crating, storage and vehicle shipping. Additionally, your single source relocation coordinator will assist employees in choosing which services will best suit your employees and their individual relocations.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Preparing for the Move</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Packmyload.com can disassemble cubicles and office furniture and reassemble everything at your new location. If you need felt pads placed at the bottom of furniture legs to prevent floor damage, we can supply those too! If you’re not sure how your existing furniture will fit in the new space, ask us to take measurements!
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Moving Supplies</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Packmyload.com can shrink wrap your office furniture for extra protection from dirt and moisture. The cost of shrink wrapping two items is included in a standard move and extra can be purchased . Alternatively, packmyload.com provides furniture pads and moving blankets at no extra charge.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Loading & Moving</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        packmyload.com's expert movers will load your office furniture into a moving truck with care. Your items will be transported to their new location and unloaded and moved into your new space.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Office Set-Up</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Once all of your office furniture arrives and is unloaded at your new location, packmyload.com can: Assist with unpacking Assemble new furniture quickly and correctly Re-assemble your office furniture Position furniture
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Office Cleaning & Junk Removal</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Ask Packmyload.com to clean your old space after you move out. We use eco-friendly cleaning products. Our cleaning service includes: Dusting, sweeping, vacuuming or mopping Cleaning interior windows Dusting & wiping baseboards Removing all garbage and debris including packaging Dropping off recyclables and donations
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] lg:w-[30%] sm:w-[90%]'> 
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