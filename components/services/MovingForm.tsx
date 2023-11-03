"use client"
import { AutoCompleteInput } from '../AutoCompleteInput';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';
import { useState } from 'react';
import { Calendar, MapPin } from '@phosphor-icons/react'
import CustomDatePicker from '../Datepicker';

export const MovingForm: React.FC = () => {

    const router = useRouter()
    const {state}=useBookingForm()
  const [calendarVisible, setCalendarVisible] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(state)
        if (!state.pickUp || !state.destination) {
        alerts.error('Invalid Form Submission', 'All fields required', 1500)
        return;
        }
        router.push('/book')
  }


    return (
        <div className="w-5/6 pt-3 sm:mt-6">
            <form onSubmit={handleSubmit} className='backdrop-blur-lg bg-gray-100/20 border-gray-400/20 border-[8px] rounded-lg lg:rounded-full w-full mx-auto lg:w-[90%] xl:w-[950px] flex space-y-2 sm:space-y-0 flex-col md:flex-row input_shadow'>
              <div className='flex bg-gray-100 flex-nowrap py-1 px-3 lg:rounded-l-full w-full lg:w-[30%] justify-between border-r-2 items-center'>
                  <AutoCompleteInput
                    inputName='pickUp'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder:text-slate-400 placeholder:font-[500] w-full place_font '
                    placeholder='Moving From'
                    type='text'
            />
              <MapPin color='#2E5F9E' size={30} weight='duotone' className='hover:animate-ping'/>
              {/* <Image src="/images/marker.png" 
              className='hover:animate-ping object-contain w-auto h-auto'
              alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={10}/> */}
              </div>
                <div className='flex bg-gray-100 flex-nowrap py-1 px-3 w-full lg:w-[30%] justify-between items-center border-r-2'>
                  <AutoCompleteInput
                    inputName='destination'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder:text-slate-400 placeholder:font-[500] w-full place_font'
                    placeholder='Moving To'
                    type='text' 
            />
            <MapPin color='#2E5F9E' size={30} weight='duotone' className='hover:animate-ping'/>
              {/* <Image src="/images/marker.png"
              className='hover:animate-ping object-contain w-auto h-auto'
              alt="moving company lagos nigeria-student moving destination indicator" width={20} height={10}/> */}
              </div>
                <div className='flex bg-gray-100 flex-nowrap py-1  w-full lg:w-[30%] justify-between' onClick={() => setCalendarVisible(!calendarVisible)}>
            <CustomDatePicker
              calendarVisible={calendarVisible}
              setCalendarVisible={setCalendarVisible}
              style='custom_placeholder '
            />
              </div>
              <button type="submit" 
                className='bg-blue-100 hover:bg-white p-3 w-full lg:w-[160px] lg:rounded-r-full text-gray-100 hover:text-blue-300 border-none uppercase text-xs font-bold'>
                Get Quote
              </button>
            </form>
        </div>
    )
}