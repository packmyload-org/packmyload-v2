'use client'
import { ArrowCircleLeft, ListNumbers } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { serviceList, serviceFor, serviceType } from "@/utils/bookingService";
export default function BookingIndexForm() {
   const router = useRouter()
  const [displayType, setDisplayType] = useState(false)
  return (
   <div className='bg-blue-200 p-6 h-full mb-4 rounded-md shadow-md'>
             {/* Form Header  */}
        {/* <div className="w-full md:w-[80%] mx-auto space-y-3">
            <div className="flex flex-nowrap w-full justify-between ">
                  <ArrowCircleLeft size={24} className='text-white' />
                <div className="flex w-[70%] justify-between">
                <h2 className="text-lg text-white font-satoshi font-semibold"> Price ${0.32}</h2>
                <div className="hidden relative w-10 h-[30px] flex-col items-center justify-end ">
                    <p className="absolute top-0 right-0 text-sm text-white font-bold">0</p>
                    <ListNumbers size={24} className='text-white'/>
                </div>
                </div>
            </div>
            <h2 className="w-full text-2xl text-white font-bold font-mono text-center">Let's Get Started </h2>
        </div> */}

         {/* Form  */}
         <form className="w-full md:w-[80%] mx-auto space-y-4 flex flex-col items-center " onSubmit={(e) => { e.preventDefault(); router.push('/') }}>
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-white font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='MovingFrom'
              placeholder="Destination From"
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
            />
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-white font-semibold" htmlFor="MovingTo">Moving To <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='MovingTo'
              placeholder="Destination To"
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
            />
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-white font-semibold" htmlFor="MovingFrom">Move Date <span className='text-red-600'>*</span></label>
            <input
              type="date"
              id='MovingFrom'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
            />
          </div>
          <div className="w-[90%] mx-auto flex flex-col items-start">
             <select className='border bg-inherit text-gray-500 border-gray-400 p-3 w-full px-0 rounded-md bg-white outline-none' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.target.value === serviceList[0].label ? setDisplayType(true) : setDisplayType(false)
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
            <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
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
    </div>
  )
}
