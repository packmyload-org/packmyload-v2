import Image from 'next/image'
import { ServicesHeader } from '@/components/services/ServicesHeader';
import { IconsSection } from './IconsSection';

export default function Storage(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-storage_moves-banner_image.webp)'
                firstText='STORAGE SERVICES WITHIN NIGERIA'
                secondText='Storage'
            />

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Storage and Warehousing in Lagos</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Whether you’re renovating, going traveling or moving abroad, we offer a range of practical and affordable storage solutions in and around Lagos. To discuss your storage requirements, please call one of our project managers today on 0700 722 5776.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Lagos Self Storage</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Our Lagos self-storage facilities are located in the heart of Lagos Mainland. These are all 24-hour storage facilities, open 6 day a week to allow unrestricted access and flexibility to come and go as you please. We’ve always got great long-term rates on the go too.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Lagos Long term storage</h1>
                       
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Container Storage</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        For 20,000 (plus VAT) per week, you get 250 cubic feet of storage – a deal you’re unlikely to find anywhere else. Take a look at our competitors and you’ll see what we mean. Other companies charge anything up to N50,000 for the same amount, and a considerable number come in at over three times our rates. Furthermore, we won’t lure you in with sweetening deal that then go sour after the introductory period is over. Our prices start low and stay low. Our facilities are designed to bring you security and accessibility in equal measure. Customers don’t even have to bring their belongings to our secure storage site. We can come to you, gather up your materials and load them into a container in front of you, before taking them safely away.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Self Storage Lagos</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Self Storage is for people who need regular access to their stored items without any extra charges.One knock-on effect of Lagos house prices is that we often end up with more belongings than we have space to store them. That’s why we’re so committed to bringing good-value storage to the capital and keeping it here for good. Our happy customers find our safe, secure facility a Godsend for all kinds of circumstances – whether in between moves, downsizing or upsizing, we keep your possessions under constant CCTV monitoring. It’s like having an inexpensive bolt-on room just a short distance away. A range of additional services can complement your storage process – from packing to dismantling and more – and we can also provide insurance.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Pack & Store Mini</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        This is our latest storage innovation, available in two sizes, and bringing you incredible value without any sacrificing of packmyload standards. The PackandStoreMini is the petite option, giving you 175 cubic feet of storage at N10000.a week (plus VAT). The PackStoreMIni is the standard option, with 250 cubic feet of storage at N15000 per week (plus VAT). This comes with a free collections offer*. You can visit your PackStoreMIni up to four times per calendar month at no extra charge (additional access is charged at N2000 per visit). Just give us 24 hours of notice and then drop in (Monday to Friday, 8am to 4pm/Saturday, 10am to 2pm). Weekend visits need to be booked during Monday to Friday business hours. But just how is it that we’re able to bring you our PackStoreMIni at such great rates. Well, it’s down to the innovative way in which they’re stored. We keep the storage space free of costly staircases and lifts and then we stack the PackStoreMIni together, making the absolute most of the available space. Since the space saved is so considerable, it translates into brilliant value for you.
                        <br />
                        For bulk or long-term storage we also offer warehousing and containerized storage. We provide a unique short term storage service in London – ‘mini storage’ – if you are between flats, going on holiday or just want to store a single box or a number of boxes without having to hire a whole unit.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>What We Offer</h1>
                        <br />
                        
                        <IconsSection />
                        
                    </section>
                </div>
                <div className='md:w-[50%] lg:w-[30%] sm:w-[90%]'> 
                    <section className='flex items-start gap-2 mt-4'>
                        <Image 
                            src="/images/icons/box-icon.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Store anywhere.</h1>
                            <p className='mt-2 text-[#878C9F]'>Store your belongings at your nearest storage unit or your parents garage. We'll load, haul, and deliver anything, anywhere.</p>
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
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Convenient access</h1>
                            <p className='mt-2 text-[#878C9F]'>Your storage unit and everything in it just a tap away. Picked up and delivered in under an hour.</p>
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