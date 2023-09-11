"use client";
import { AutoCompleteInput } from '@/components/AutoCompleteInput';
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import { FormEvent,useRef  } from 'react';
import { alerts } from '@/components/alerts/Alert';
import { useBookingForm } from '@/context/BookingFormContext';

export default function InternationRelocation(){

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
            <div className="w-full h-[300px] mt-[68px] bg-[url('/images/moving-company-lagos-nigeria-packmyload.com-international_moves-banner_image.png')]" style={divStyle}>
                <div className="flex flex-col items-center justify-end h-full">
                    <button 
                    onClick={handleButtonClick}
                    className="text-white shadow-lg border-2 shadow-white text-2xl font-bold p-4 w-[200px] bg-[#4BCBFE] outline-none">GET STARTED</button>
                </div>
            </div>

            <div className="mx-auto mt-8 flex flex-col items-center" ref={content}>

                <div 
                className="md:text-4xl text-2xl font-bold opacity-5" style={{position: 'absolute'}}
                >INTERNATIONAL RELOCATION SERVICES WITHIN NIGERIA</div>
                <div className="md:text-3xl text-xl text-[#566985] mt-4 font-bold" style={{ position: 'relative' }}>International Relocation</div>
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