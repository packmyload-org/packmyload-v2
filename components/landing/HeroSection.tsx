import Image from 'next/image';
import { AutoCompleteInput } from '../AutoCompleteInput';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
export default function HeroSection() {
  const router = useRouter()
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    router.push('book_a_move')
  }
    return (
    <section className='w-full h-max pb-4 md:pb-0 md:h-[85dvh] relative flex flex-col justify-center'>
     <div className='gradient h-full w-full z-0 absolute' />

      <div className='my-auto section-title h-1/2 w-full z-10 '>
        <main className='container flex flex-col items-center text-center space-y-8'>
         <h2 className='text-4xl sm:text-3xl font-inter w-full font-semibold text-gray-100'>Moving as easy as <span className='font-extrabold sm:mt-10'>ABC</span></h2>
         <p>Whether moving down the street, to another state, or to
									a new house or business address, we are here to help you with
									managing the stress.</p>
          <div className="sm:w-full sm:mt-10 ">
            <form onSubmit={handleSubmit} className='border-[#9d9d9d] bg-[#9d9d9d] border-[15px] lg:border-[10px] rounded-lg lg:rounded-full w-full mx-auto lg:w-[70%] flex space-y-4 sm:space-y-0 flex-col md:flex-row input_shadow'>
              <div className='flex bg-gray-100 flex-nowrap py-1 px-3 lg:rounded-l-full w-full lg:w-5/12 justify-between border-r-2'>
                  <AutoCompleteInput
                    inputName='pickUp'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-500 '
                    placeholder='Pickup Address'
                    type='text'
                  />
              <Image src="/images/ic_pickup.svg" 
              className='hover:animate-ping'
              alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
              </div>
                <div className='flex bg-gray-100 flex-nowrap py-1 px-3 w-full lg:w-5/12 justify-between'>
                   <AutoCompleteInput
                    inputName='destination'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-500 '
                    placeholder='Destination Address'
                    type='text'
                  />
              <Image src="/images/ic_dropdown.svg"
              className='hover:animate-ping'
              alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
              </div>
              <button type="submit" className='bg-blue-100 hover:bg-blue-600 hover:animate-pulse p-3  w-full lg:w-[150px] rounded-lg lg:rounded-r-full border-[#9d9d9d] text-gray-500 hover:text-gray-100 border-8 lg:border-none uppercase text-xs font-bold'>
                Get Started
              </button>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}
