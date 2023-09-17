'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { serviceType } from "@/utils/data";
import { AutoCompleteInput } from "../AutoCompleteInput";
import { useBookingForm } from '@/context/BookingFormContext';
import { CustomModal } from '../modals/CustomModal';
import { alerts } from '../alerts/Alert';
import { Row } from 'antd';
import { getMinDate } from '@/utils/helpers';
import services from '@/components/services/services.json'

export default function BookingIndexForm() {
  const router = useRouter()
   const { state, dispatch } = useBookingForm();
  const [displayType, setDisplayType] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
    const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  let minDate = getMinDate()

  const handleProceed = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email || !state.phoneNumber || !state.fullName || !state.moveTime) {
      alerts.error('Invalid Form Submission', 'All fields required')
      return;
    }
    if (!state.pickUp|| !state.destination|| !state.MovingOn || !state.service ) {
      alerts.error('Invalid Form Submission', 'All fields required')
      return;
    }
    return router.push('/book_a_move/items');
  }
const handleProceedOptions = () => {
    // if (!state.email || !state.phoneNumber || !state.fullName || !state.moveTime) {
    //   alerts.error('Invalid Form Submission', 'All fields required')
    //   return;
    // }
    // if (!state.pickUp|| !state.destination|| !state.MovingOn || !state.service ) {
    //   alerts.error('Invalid Form Submission', 'All fields required')
    //   return;
    // }
    return setDisplayModal(true)
  }
  return (
   <div className='bg-blue-200 p-6 h-full mb-4 rounded-md shadow-md'>
             {/* Form Header  */}
        <div className="w-full md:w-[80%] mx-auto mb-4">
            <h2 className="w-full text-2xl ext-gray-900 font-bold text-center">Let's Get Started </h2>
        </div>

         {/* Form  */}
      <form className="w-full md:w-[80%] mx-auto space-y-4 flex flex-col items-center" onSubmit={handleProceed} >
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-900 font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
          <>
            <AutoCompleteInput
              type="text"
              inputName="pickUp"
              inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              placeholder="Destination From"
            />
          </>
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
        <Row className="w-[90%] mx-auto " justify={'space-between'}>
          <div className="w-[45%] flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Move Date <span className='text-red-600'>*</span></label>
            <input
              type="date"
              id='MovingOn'
              min={minDate}
            
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.MovingOn}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
        </div>
        <div className="w-[45%]  flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Time <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='moveTime'
              placeholder='Enter your preferred move time: 8am-9am'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.moveTime}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
          </div>
          </Row>

            <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Full Name <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='fullName'
              placeholder='John Doe'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.fullName}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
          </div>
           <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Email <span className='text-red-600'>*</span></label>
            <input
              type="email"
              id='email'
              placeholder='example@example.com'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.email}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
          </div>
           <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Phone  <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='phoneNumber'
              placeholder='+66 703 78932'
              min={11}
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.phoneNumber}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
          </div>
          <div className="w-[90%] mx-auto pt-3 flex flex-col items-start">
             <select className='border bg-inherit text-gray-500 border-gray-400 p-3 w-full px-0 rounded-md bg-white outline-none' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.target.value.includes('HOME RELOCATION') ? setDisplayType(true) : setDisplayType(false)
            handleFieldChange('service', e.target.value)
            }}>
          
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
            <div className='w-full pt-4 flex justify-evenly'>
              <button
            className='bg-blue-600 w-[43%] text-[14px] font-bold md:text-md text-white hover:text-gray-600 hover:bg-blue-700 p-2 rounded-lg'
            onClick={handleProceedOptions}
            >
              Schedule A Meet
          </button>
          <button
             type='submit'
             className='bg-blue-600 w-[43%] text-[14px] font-bold md:text-md text-white hover:text-gray-600 hover:bg-blue-700 p-2 rounded-lg'
            >
              Select My Items
          </button>
            </div>
         </form>
      
      {/* Form Modal  */}
      {displayModal &&
        <CustomModal
          displayModal={displayModal}
          title={'SCHEDULE A MEETUP'}
          setDisplayModal={setDisplayModal}
          />
      }
    </div>
  )
}
