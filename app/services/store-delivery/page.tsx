"use client";
import { AutoCompleteInput } from '@/components/AutoCompleteInput';
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { FormEvent,useRef  } from 'react';
import { alerts } from '@/components/alerts/Alert';
import { useBookingForm } from '@/context/BookingFormContext';

export default function StoreDelivery(){

    const router = useRouter()
    const {state} = useBookingForm()
    const content = useRef<any>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(state.pickUp,state.destination)

        if (!state.pickUp || !state.destination) {
        alerts.error('Invalid Form Submission', 'All fields required', 1500)
        return;
        }
        router.push('book_a_move')

    }
    const handleButtonClick = () => {
        content.current.scrollIntoView({ behavior: 'smooth' });
    }

    const divStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '450px',
    };

    return (
        <main className='bg-[#F9F9F9]'>
            <div className="w-full h-[300px] mt-[68px] bg-[url('/images/moving-company-lagos-nigeria-packmyload.com-store_moves-banner_image.png')]" style={divStyle}>
                <div className="flex flex-col items-center justify-end h-full">
                    <button 
                    onClick={handleButtonClick}
                    className="text-white shadow-lg border-2 shadow-white text-base font-bold p-3 w-[150px] bg-[#4BCBFE] outline-none">GET STARTED</button>
                </div>
            </div>

            <div className="mx-auto mt-8 flex flex-col items-center" ref={content}>

                <div 
                className="text-4xl font-bold opacity-5" style={{position: 'absolute'}}
                >STORE DELIVERY SERVICES WITHIN NIGERIA</div>
                <div className="text-3xl text-[#566985] mt-4 font-bold" style={{ position: 'relative' }}>Store Delivery Services</div>
                <span className="section-separator"></span>
            </div>
            <br />
            <div className="max-w-4xl mx-auto sm:w-full md:mt-3 sm:mt-14">
                <form 
                onSubmit={handleSubmit}
                className='border-blue-300/20 bg-[#9d9d9d]/20 border-[15px] lg:border-[10px] rounded-lg lg:rounded-full w-full mx-auto lg:w-[80%] flex space-y-4 sm:space-y-0 flex-col md:flex-row input_shadow'>
                    <div className='flex bg-gray-100 flex-nowrap py-1 px-3 lg:rounded-l-full w-full lg:w-5/12 justify-between border-r-2'>
                        <AutoCompleteInput
                            inputName='pickUp'
                            inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
                            placeholder='Moving From'
                            type='text'
                        />
                        <Image src="/images/ic_pickup.svg" 
                        className='hover:animate-ping'
                        alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
                    </div>
                    <div className='flex bg-gray-100 flex-nowrap py-1 px-3 w-full lg:w-5/12 justify-between'>
                        <AutoCompleteInput
                            inputName='destination'
                            inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
                            placeholder='Moving To'
                            type='text'
                        />
                        <Image 
                        src="/images/ic_dropdown.svg"
                        className='hover:animate-ping'
                        alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
                        </div>
                        <button 
                            type="submit" 
                            className='bg-blue-100 hover:bg-blue-600 hover:animate-pulse p-3  w-full lg:w-[180px] rounded-lg lg:rounded-r-full border-[#9d9d9d]/20 text-white text-gray-100 border-8 lg:border-none uppercase text-xs font-bold'
                        >
                            Get Quote
                        </button>
                </form>
            </div>

            <br />

            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
                <div className='bg-white md:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
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
                        <h1 className='text-xl font-bold text-[#566985]'>We Onload
</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        Your goods will be unloaded and placed into position and packaging materials will be disposed of.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>And More
</h1>
                        <p className='mt-2 text-[#878C9F]'>
                        OAssembly, Installation, Removing old furniture and appliances - GoGetter will be available to assist for any additional jobs you might think of at the time.e
                        </p>
                    </section>
                </div>
                <div className='md:w-[30%] sm:w-[90%]'> 
                    <section className='flex gap-3 mt-4'>
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
                    <section className='flex gap-3 mt-12'>
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