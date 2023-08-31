'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { serviceList, serviceType } from "@/utils/bookingService";
import { AutoCompleteInput } from "../AutoCompleteInput";
import { useBookingForm } from '@/context/BookingFormContext';
import { CustomModal } from '../modals/CustomModal';
import { alerts } from '../alerts/Alert';

export default function BookingIndexForm() {
  const router = useRouter()
   const { state, dispatch } = useBookingForm();
  const [displayType, setDisplayType] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
    const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  let currentDay = new Date().toISOString();
  let minDate = currentDay.split("T")[0]

  useEffect(() => {
    if (state.MovingOn) {
      setDisplayModal(true)
    }
  },[state.MovingOn])

  const handleProceed = (e: SubmitEvent) => {
    e.preventDefault();
    if (!state.pickUp|| !state.destination|| !state.phoneNumber || !state.email || !state.MovingOn || !state.moveTime ) {
      alerts.error('Invalid Form Submission', 'All fields required')
      return;
    }
    return router.push('/book_a_move/items');
  }

  return (
   <div className='bg-blue-200 p-6 h-full mb-4 rounded-md shadow-md'>
             {/* Form Header  */}
        <div className="w-full md:w-[80%] mx-auto mb-4">
            <h2 className="w-full text-2xl ext-gray-900 font-bold text-center">Let's Get Started </h2>
        </div>

         {/* Form  */}
      <form className="w-full md:w-[80%] mx-auto space-y-4 flex flex-col items-center" onSubmit={()=>handleProceed} >
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md ext-gray-900 font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
          <>
            <AutoCompleteInput
              type="text"
              inputName="pickUp"
              inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              placeholder="Destination From"
            />
              <p className='text-gray-700'>we carry out services from <b className='uppercase text-red-500'>Lagos</b> and <b className='uppercase text-red-500'>Abuja</b>{' '}only.</p>
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
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
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
      
          <div className="w-[90%] mx-auto pt-3 flex flex-col items-start">
             <select className='border bg-inherit text-gray-500 border-gray-400 p-3 w-full px-0 rounded-md bg-white outline-none' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.target.value.includes('HOME RELOCATION') ? setDisplayType(true) : setDisplayType(false)
            }}>
          
                <option hidden>
                  Select Service 
               </option>
               {serviceList.map(item => <option
                 value={item.label}
                 key={item.key}
               >
                 {item.label}
               </option>)
               }
            </select>
          </div>
           {displayType && (
            <div className="w-[90%] mx-auto pt-3 flex flex-col gap-1 items-start">
              <select name="category" id="" className='w-full p-3 px-0 border border-gray-400 text-gray-500 rounded-md bg-white outline-none'>
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
             className='bg-blue-600 w-[40%] font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'
            >
              Proceed
          </button>
         </form>
      
      {/* Form Modal  */}
      {displayModal &&
        <CustomModal
          displayModal={displayModal}
          title={'PROFILE AND MOVE SETUP'}
          setDisplayModal={setDisplayModal}
          />
      }
    </div>
  )
}
