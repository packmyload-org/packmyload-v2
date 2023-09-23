"use client"
// import Image from 'next/image';
import { AutoCompleteInput } from '../AutoCompleteInput';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';
import { DatePicker } from 'antd';
import { getAvailableTimes, getMinDate } from '@/utils/helpers';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar, MapPin } from '@phosphor-icons/react'

export const MovingForm: React.FC = () => {
    const time = getAvailableTimes(null)
    const router = useRouter()
    const {state, dispatch}=useBookingForm()
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [availableTimes, setAvailableTimes] = useState<string[]>(time);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(state)
        if (!state.pickUp || !state.destination) {
        alerts.error('Invalid Form Submission', 'All fields required', 1500)
        return;
        }
        router.push('book_a_move')
  }
  const minDate = dayjs(getMinDate());
  const disabledDate = (currentDate: dayjs.Dayjs | null) => {
    if (!currentDate) return false; 
    return currentDate.isBefore(minDate, 'day');
  };
 const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  
const handleDateSelect = (date: dayjs.Dayjs | null) => {
  if (date) {
    const formattedDate = date.format('DD-MM-YYYY');
    handleFieldChange('moveDate', formattedDate); 
    handleFieldChange('moveTime', ''); 
    const times = getAvailableTimes(date.toDate());
    setAvailableTimes(times);
  }
};

    return (
        <div className="w-5/6 pt-3 sm:mt-6">
            <form onSubmit={handleSubmit} className='bg-[#9d9d9d]/20  rounded-lg lg:rounded-full w-full mx-auto lg:w-[950px] flex space-y-2 sm:space-y-0 flex-col md:flex-row input_shadow'>
              <div className='flex bg-gray-100 flex-nowrap py-1 px-3 lg:rounded-l-full w-full lg:w-[30%] justify-between border-r-2 items-center'>
                  <AutoCompleteInput
                    inputName='pickUp'
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
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
                    inputStyle='p-2 h-10 focus:outline-0 text-gray-900 placeholder-blue-300 w-full place_font'
                    placeholder='Moving To'
                    type='text' 
            />
            <MapPin color='#2E5F9E' size={30} weight='duotone' className='hover:animate-ping'/>
              {/* <Image src="/images/marker.png"
              className='hover:animate-ping object-contain w-auto h-auto'
              alt="moving company lagos nigeria-student moving destination indicator" width={20} height={10}/> */}
              </div>
                <div className='flex bg-gray-100 flex-nowrap py-1  w-full lg:w-[30%] justify-between' onClick={() => setCalendarVisible(!calendarVisible)}>
            <DatePicker
              className='w-full outline-none cursor-pointer custom_placeholder'
              suffixIcon={<Calendar color='#2E5F9E' size={30} weight='duotone'/>}
              bordered={false}
              picker='date'
              showToday={false}
              placeholder='Move Date'
              disabledDate={disabledDate}
              open={calendarVisible}
              inputReadOnly={true}
              onOpenChange={open => {
                if (!open && state.moveTime === '')
                  setCalendarVisible(true);
              }}
              onSelect={handleDateSelect} 
              renderExtraFooter={() =>
                <>
                <div className='w-full p-2 px-3 grid grid-cols-3 gap-2'>
                  {availableTimes.map((time, index) => (
                    <div key={index} className='text-center w-full rounded-full bg-blue-300 text-white hover:bg-inherit hover:text-blue-300 mt-6 cursor-pointer' onClick={()=> handleFieldChange('moveTime', time)}>
                      {time}
                    </div>
                  ))}
                  </div>
                  <p className='w-full text-sm px-5 my-4'>Moves scheduled during the weekend have up to 20% higher rates.</p>
                </>
              }
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