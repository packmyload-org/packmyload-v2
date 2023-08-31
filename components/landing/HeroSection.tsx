import Image from 'next/image';
import { AutoCompleteInput } from '../AutoCompleteInput';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';
export default function HeroSection() {
  const router = useRouter()
  const {state}=useBookingForm()
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.pickUp,state.destination)
    if (!state.pickUp || !state.destination) {
      alerts.error('Invalid Form Submission', 'All fields required', 1500)
      return;
    }
    router.push('book_a_move')
  }
    return (
    <section className='w-full h-max pb-4 md:pb-0 md:h-[85dvh] relative flex flex-col justify-center'>
     <div className='gradient h-full w-full z-0 absolute' />

      <div className='my-auto h-1/2 w-full z-10 '>
        <main className='container flex flex-col w-full items-center text-center space-y-8'>
            <h2 className='text-[4rem] sm:text-3xl font-inter w-full font-extrabold text-blue-300' style={{fontSize:'3.5rem'}}>
              We make your move feel effortless
            </h2>
         <p className='w-[50%] sm:w-full mx-auto text-2xl font-normal' style={{fontSize:'18px'}}>Every Move Is Unique and we have the right relocation solution for you.<br/> From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</p>
          <div className="w-5/6 sm:w-full pt-4 sm:mt-14">
            <form onSubmit={handleSubmit} className='border-blue-300/20 bg-[#9d9d9d]/20 border-[15px] lg:border-[10px] rounded-lg lg:rounded-full w-full mx-auto lg:w-[80%] flex space-y-4 sm:space-y-0 flex-col md:flex-row input_shadow'>
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
              <Image src="/images/ic_dropdown.svg"
              className='hover:animate-ping'
              alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
              </div>
              <button type="submit" className='bg-blue-100 hover:bg-blue-600 hover:animate-pulse p-3  w-full lg:w-[180px] rounded-lg lg:rounded-r-full border-[#9d9d9d]/20 text-white hover:text-gray-100 border-8 lg:border-none uppercase text-xs font-bold'>
                Get Quote
              </button>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}
