'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { serviceType } from "@/utils/data";
import { AutoCompleteInput } from "../AutoCompleteInput";
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';
import { Row } from 'antd';
import { getMinDate } from '@/utils/helpers';
import services from '@/components/services/services.json'
import { Time } from '@/utils/data';
import CustomDatePicker from '../Datepicker';
import {myCountryCodesObject } from '@/hooks/useCountries'
export default function BookingIndexForm() {
  const router = useRouter()
   const { state, dispatch } = useBookingForm();
  const [displayType, setDisplayType] = useState(false)
    const [calendarVisible, setCalendarVisible] = useState(false)
    const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  console.log(myCountryCodesObject)
  let minDate = getMinDate()

  const handleProceed = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.lastName || !state.phoneNumber || !state.firstName || !state.moveTime) {
      alerts.error('Invalid Form Submission', 'All fields required')
      return;
    }
    if (!state.pickUp|| !state.destination|| !state.moveDate || !state.service ) {
      alerts.error('Invalid Form Submission', 'All fields required')
      return;
    }
    return router.push('/book_a_move/items');
  }

  return (
      <form className="w-[90%] rounded-lg bg-blue-200 md:w-[87%]  pt-10 p-6 my-auto  mx-auto space-y-4 flex flex-col items-center" onSubmit={handleProceed} >
          {
          state.pickUp !== '' ||
          state.destination !== '' ||
          state.moveDate !== '' ||
          state.moveTime !== ''
          ?
            <div className='space-y-6 w-full'>
                 <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-900 font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
            <AutoCompleteInput
              type="text"
              inputName="pickUp"
              inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              placeholder="Destination From"
            />
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md ext-gray-900 font-semibold" htmlFor="MovingTo">Moving To <span className='text-red-600'>*</span></label>
          
          <AutoCompleteInput
            type="text"
            inputName="destination"
            inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
            placeholder="Destination To"
            />
          </div>
            <div className="w-[90%] mx-auto flex flex-col gap-1 items-start bg-white rounded-md mt-2"
              onClick={() => setCalendarVisible(!calendarVisible)}
            >
              
              <CustomDatePicker 
                calendarVisible={calendarVisible}
                setCalendarVisible={setCalendarVisible}
              />
             </div>
          </div> : null
          }
            <div className="w-[90%] mx-auto grid grid-cols-2 gap-4 items-center">
            <div className='flex flex-col'>
                 <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">First Name <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='firstName'
              placeholder='John'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.firstName}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
        </div>
        <div className='flex flex-col'>
          <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Last Name <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='lastName'
              placeholder='Doe'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.lastName}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
        </div>
        
          </div>
           <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Email <span className='text-red-600'>*</span></label>
            <input
          type="email"
          id='email'
          className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
          required
          placeholder='example@mail.com'
          value={state.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!(e.target.value.includes('.com') || e.target.value.includes('.net') || e.target.value.includes('.org'))) {
              return alerts.error('Invalid credentials','Invalid email or unsupported type.')
            }
            handleFieldChange(e.target.id, e.target.value)
          }}
            />
          </div>
           <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
        <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Phone  <span className='text-red-600'>*</span></label>
                <div className='w-full flex '>
          <select
            name='countryCode'
            className='w-[20%] rounded-l-md font-bold text-blue-300 text-start pl-2 outline-none ring-blue-300 focus:ring-2 relative'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { handleFieldChange(e.target.name, e.target.value)}}
          >
                        <option value='' className='hidden '>+ {myCountryCodesObject[0].countryCallingCode}</option>
            {myCountryCodesObject.map((item =>
                        <option className='absolute top-0' value={item.countryCallingCode}>{item.countryNameEn}{'  '}+{ item.countryCallingCode}</option>
                        ))}
                  </select>
                    <input
                      type="text"
                      id='phoneNumber'
                      placeholder='66 703 78932'
                      className="w-[80%] h-10 p-4 text-gray-500 outline-none rounded-r-md"
                      required
                      min={11}
                      value={state.phoneNumber}
                      onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
                    />
                </div>
        
          </div>
          <div className="w-[90%] mx-auto pt-3 flex flex-col items-start">
          <select className='border bg-inherit text-gray-500 border-gray-400 p-3 w-full px-0 rounded-md bg-white outline-none'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.target.value.includes('HOME RELOCATIONS') ? setDisplayType(true) : setDisplayType(false)
            handleFieldChange('service', e.target.value)
          }}
          >
          
                <option hidden>
                  Select Service 
              </option>
              {services.map(item => <option
                value={item.title}
                key={item.title}
               >
                {item.title}
              </option>)
              }
            </select>
          </div>
          {displayType && (
            <div className="w-[90%] mx-auto pt-3 flex flex-col gap-1 items-start">
            <select name="category" id="" className='w-full p-3 px-0 border border-gray-400 text-gray-500 rounded-md bg-white outline-none'
            onChange={(e)=>handleFieldChange('moveType', e.target.value)}>
                 <option value="" hidden>Service Type</option>
                 {serviceType.map(item => <option
                  value={item.label}
                  key={item.key}
                    
                >
                  {item.label}
                </option>)}
              </select>
            </div>
          )}
          <button
            type='submit'
            className='bg-blue-600 w-[43%] mx-auto text-[12px] md:font-bold md:text-md text-white hover:text-gray-600 hover:bg-blue-700 p-2 rounded-lg'
            >
              Proceed
          </button>
  
         </form>
      
    
  )
}
