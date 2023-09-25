'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { serviceType } from "@/utils/data";
import { AutoCompleteInput } from "../AutoCompleteInput";
import { useBookingForm } from '@/context/BookingFormContext';
import { alerts } from '../alerts/Alert';
import services from '@/components/services/services.json'
import CustomDatePicker from '../Datepicker';
import { myCountryCodesObject } from '@/hooks/useCountries'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  service: string;
  moveType?: string;
}
export default function BookingIndexForm() {
  const router = useRouter()
  const { state, dispatch } = useBookingForm();
  const [displayType, setDisplayType] = useState(false)
  const [loading, setLoading] = useState(false)
  const [upperForm, setUpperForm] = useState(false)
  const [calendarVisible, setCalendarVisible] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  useEffect(() => {
    if(state.pickUp === '' ||
      state.destination === '' ||
      state.moveDate === '' ||
      state.moveTime === '') {
      return setUpperForm(true);
      }
  }, [])
  
   const onSubmit: SubmitHandler<FormData> = (data) => {
     // Handle form submission here
    setLoading(true)
    console.log(data);
    handleFieldChange('email', data.email)
    handleFieldChange('firstName', data.firstName)
    handleFieldChange('lastName', data.lastName)
    handleFieldChange('countryCode', data.countryCode)
    handleFieldChange('phoneNumber', data.phoneNumber)
    handleFieldChange('service', data.service)
    router.push('/book_a_move/')
    setLoading(false)
  };
  return (
      <form className="w-[98%] md:w-[90%] rounded-lg bg-blue-200 pt-10 p-6 my-auto  mx-auto space-y-4 flex flex-col items-center" onSubmit={handleSubmit(onSubmit)} >
          {
            upperForm
          &&
          <div className='space-y-6 w-full'>
                 <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-900 font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
            <AutoCompleteInput
              type="text"
              inputName="pickUp"
              inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none place_font"
              placeholder="Destination From"
            />
          </div>
          <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md ext-gray-900 font-semibold" htmlFor="MovingTo">Moving To <span className='text-red-600'>*</span></label>
          
          <AutoCompleteInput
            type="text"
            inputName="destination"
            inputStyle="w-full h-10 p-4 text-gray-500 rounded-md outline-none place_font"
            placeholder="Destination To"
            />
          </div>
            <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start bg-white rounded-md mt-2"
              onClick={() => setCalendarVisible(!calendarVisible)}
            >
              
              <CustomDatePicker 
                calendarVisible={calendarVisible}
                setCalendarVisible={setCalendarVisible}
              />
             </div>
          </div> 
          }
         <div className="w-[98%] md:w-[90%] mx-auto grid grid-cols-2 gap-4 items-center">
        <div className='flex flex-col'>
          <label className="text-md text-gray-800 font-semibold" htmlFor="firstName">First Name <span className='text-red-600'>*</span></label>
          <Controller
            name='firstName'
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => (
              <input
                {...field}
                type='text'
                id='firstName'
                placeholder='John'
                className="w-full h-10 p-4 text-gray-500 rounded-md outline-none place_font"
              />
            )}
          />
           {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>} 
        </div>
        <div className='flex flex-col'>
          <label className="text-md text-gray-800 font-semibold" htmlFor="lastName">Last Name <span className='text-red-600'>*</span></label>
          <Controller
            name='lastName'
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => (
              <input
                {...field}
                type='text'
                id='lastName'
                placeholder='Doe'
                className="w-full h-10 p-4 text-gray-500 rounded-md outline-none place_font"
              />
            )}
          />
           {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>} 
        </div>

       </div>
      <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
        <label className="text-md text-gray-800 font-semibold" htmlFor="email">Email <span className='text-red-600'>*</span></label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, // Email regex pattern
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type='email'
              id='email'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none place_font"
              placeholder='example@mail.com'
            />
          )}
        />
         {errors.email && <p className="text-red-600">{errors.email.message}</p>} 
      </div>
      <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
        <label className="text-md text-gray-800 font-semibold" htmlFor="phoneNumber">Phone <span className='text-red-600'>*</span></label>
        <div className='w-full flex'>
          <Controller
            name='countryCode'
            control={control}
            rules={{ required: 'Country Code is required' }}
            render={({ field }) => (
              <select
                {...field}
                className='w-[23%] rounded-l-md font-bold text-blue-300 text-start pl-2 outline-none ring-blue-300 focus:ring-2 relative'
              >
                <option value='' className='hidden'>+ 234</option>
                {myCountryCodesObject.map((item,i) => (
                  <option className='absolute top-0' value={item.countryCallingCode} key={i}>
                    {item.countryNameEn} {'  '}+{item.countryCallingCode}
                  </option>
                ))}
              </select>
            )}
          />
          <Controller
            name='phoneNumber'
            control={control}
            rules={{ required: 'Phone Number is required', min: 11 }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id='phoneNumber'
                placeholder='66 703 78932'
                className="w-[80%] h-10 p-4 text-gray-500 outline-none rounded-r-md place_font"
              />
            )}
          />
        </div>
        {errors.countryCode && <p className="text-red-600">{errors.countryCode.message}</p>} 
       {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>} 
      </div>
      <div className="w-[98%] md:w-[90%] mx-auto pt-3 flex flex-col items-start">
        <label className="text-md text-gray-800 font-semibold" htmlFor="service">Service <span className='text-red-600'>*</span></label>
        <Controller
          name='service'
          control={control}
          rules={{ required: 'Service is required' }}
          render={({ field }) => (
            <select
              {...field}
              className='border bg-inherit text-gray-500 border-gray-400 p-3 w-full px-0 rounded-md bg-white outline-none ring-blue-300 focus:ring-2'
              onChange={(e) => {
                e.target.value.includes('HOME RELOCATIONS') ? setDisplayType(true) : setDisplayType(false);
                field.onChange(e);
              }}
            >
              <option hidden>Select Service</option>
              {services.map((item,i) => (
                <option value={item.title} key={i}>
                  {item.title}
                </option>
              ))}
            </select>
          )}
        />
        {errors.service && <p className="text-red-600">{errors.service.message}</p>} 
      </div>
          <button
            type='submit'
        className='bg-blue-600 w-[43%] mx-auto text-[12px] md:font-bold md:text-md text-white hover:text-gray-600 hover:bg-blue-700 p-2 rounded-lg'
              disabled={loading}
            >
        {loading ? 'Loading...': 'Proceed' }
      </button>
  
         </form>
      
    
  )
}
