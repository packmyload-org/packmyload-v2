"use client"
import Image from 'next/image';
import { AutoCompleteInput } from '../AutoCompleteInput';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';

export const MovingForm: React.FC = () => {
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
        <div className="w-5/6 pt-4 sm:mt-14">
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
              <button type="submit" 
                className='bg-blue-100 hover:bg-white p-3 w-full lg:w-[180px] md:rounded-lg lg:rounded-r-full md:border-[#9d9d9d]/20  text-gray-100 hover:text-blue-300 md:border-8 lg:border-none uppercase text-xs font-bold'>
                Get Quote
              </button>
            </form>
        </div>
    )
}