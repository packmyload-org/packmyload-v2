import { useBookingForm } from '@/context/BookingFormContext';
import { getMinDate, getAvailableTimes } from '@/utils/helpers';
import { DatePicker} from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { Calendar } from '@phosphor-icons/react'

type Props = {
 calendarVisible: boolean;
 style?: string;
 setCalendarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomDatePicker({ calendarVisible, setCalendarVisible , style}: Props) {
 const time = getAvailableTimes(null)
   const [availableTimes, setAvailableTimes] = useState<string[]>(time);
    const {state, dispatch}=useBookingForm()
 
   const minDate = dayjs(getMinDate());
  const disabledDate = (currentDate: dayjs.Dayjs | null) => {
    if (!currentDate) return false; 
    return currentDate.isBefore(minDate, 'day');
  };
 const handleFieldChange = (field: string, value: string) => {
  dispatch({ type: 'UPDATE_FIELD', field, value });
  setCalendarVisible(false)
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
    <DatePicker
      className={`w-full outline-none cursor-pointer  bg-white text-gray-500 ${style} `} 
      suffixIcon={<Calendar color='#2E5F9E' size={30} weight='duotone'/>}
      bordered={false}
      picker='date'
      showToday={false}
      placeholder='Moving Date'
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
        <p className='font-black text-lg px-5'>Select Move Time</p>
        <div className='w-full p-2 px-3 grid grid-cols-3 gap-2'>
          {availableTimes.map((time, index) => (
            <div key={index} className='text-center w-full rounded-full bg-blue-300 text-white hover:bg-inherit hover:text-blue-300 mt-2 cursor-pointer' onClick={()=> handleFieldChange('moveTime', time)}>
              {time}
            </div>
          ))}
        </div>
          <p className='w-full text-sm px-5 my-4'>Moves scheduled during the weekend have up to 20% higher rates.</p>
        </>
           }
        />
   )
}