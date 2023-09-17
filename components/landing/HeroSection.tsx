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
      // alert('this')
      alerts.error('Invalid Form Submission', 'All fields required', 1500)
      return;
    }
    router.push('book_a_move')
  }
    return (
    <section className={`w-full h-max pb-4 md:pb-0 md:h-[85dvh] xl:h-[550px] relative flex flex-col justify-center bg-[url('/images/bg/bg-cover.png')] bg-contain`}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='my-auto w-full z-10 '>
        <main className='flex flex-col w-full items-center text-center space-y-8'>
            <h2 className='text-[2.3rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[4rem] w-full font-black text-blue-300'>
              We make your move seamless
            </h2>
         <p className='w-[85%] md:w-full mx-auto text-sm md:text-lg font-medium'>Every Move Is Unique and we have the right relocation solution for you.<br/> From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</p>
          <div className="w-5/6 sm:w-full pt-4 sm:mt-14">
            <form onSubmit={handleSubmit} className='border-blue-300/20 bg-[#9d9d9d]/20 border-[15px] lg:border-[10px] rounded-lg lg:rounded-full w-full mx-auto lg:w-[800px] flex space-y-4 sm:space-y-0 flex-col md:flex-row input_shadow'>
              <div className='flex bg-gray-100 flex-nowrap py-1 px-3 lg:rounded-l-full w-full lg:w-5/12 justify-between border-r-2'>
                  <AutoCompleteInput
                    inputName='pickUp'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
                    placeholder='Moving From'
                    type='text'
                  />
              <Image src="/images/marker.png" 
              className='hover:animate-ping object-contain'
              alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={10}/>
              </div>
                <div className='flex bg-gray-100 flex-nowrap py-1 px-3 w-full lg:w-5/12 justify-between'>
                   <AutoCompleteInput
                    inputName='destination'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
                    placeholder='Moving To'
                    type='text'
                  />
              <Image src="/images/marker.png"
              className='hover:animate-ping object-contain'
              alt="moving company lagos nigeria-student moving destination indicator" width={20} height={10}/>
              </div>
              <button type="submit" className='bg-blue-100 hover:bg-blue-600 hover:animate-pulse p-3  w-full lg:w-[180px] rounded-lg lg:rounded-r-full border-[#9d9d9d]/20  text-gray-100 border-8 lg:border-none uppercase text-xs font-bold'>
                Get Quote
              </button>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}
