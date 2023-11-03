'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AutoCompleteInput } from "../AutoCompleteInput";
import { useBookingForm } from '@/context/BookingFormContext';
import services from '@/components/services/services.json'
import CustomDatePicker from '../Datepicker';
import { myCountryCodesObject } from '@/hooks/useCountries'
import { useForm, Controller } from 'react-hook-form';

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
  const [loading, setLoading] = useState(false)
  const [loading1, setLoading1] = useState(false)
  const [upperForm, setUpperForm] = useState(false)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const { control, formState: { errors,  }, trigger ,getValues} = useForm<FormData>();
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

    useEffect(() => {
    if(state.pickUp !== '' &&
      state.destination !== '' &&
      state.moveDate !== '' &&
      state.moveTime !== '') {
      return setUpperForm(false);
      }
  }, [state])
  
  const handleSubmit = async(data:FormData) => {
    // Handle form submission here
    handleFieldChange('email', data.email);
    handleFieldChange('firstName', data.firstName);
    handleFieldChange('lastName', data.lastName);
    data.countryCode !== undefined && handleFieldChange('countryCode', `+ ${data.countryCode}`);
    handleFieldChange('phoneNumber', data.phoneNumber);
    handleFieldChange('service', data.service);
  }


  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;
    const isValid = await trigger();

    if (isValid) {
    const formData = getValues(); 
      if (buttonName === 'submitButton1') {
        // Handle button 1 click
        setLoading1(true);
        await handleSubmit(formData)
        router.push('/book/rooms')
        return;
      } else if (buttonName === 'submitButton2') {
        setLoading(true);
        await handleSubmit(formData)
        router.push('/book/contact-agent')
        return;
      }
    }
  }

  return (
    <form className = "w-[98%] md:w-[90%] rounded-lg bg-blue-200 pt-10 p-6 my-auto  mx-auto space-y-4 flex flex-col items-center">
          {
            upperForm
          &&
          <div className='space-y-6 w-full'>
                 <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="ml-3 text-md text-gray-900 font-semibold" htmlFor="MovingFrom">Moving From <span className='text-red-600'>*</span></label>
            <AutoCompleteInput
              type="text"
              inputName="pickUp"
              inputStyle="w-full h-12 p-4 text-gray-500 rounded-full outline-none placeholder:text-slate-400 placeholder:font-[500]"
              placeholder="Destination From"
            />
          </div>
          <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="ml-3 text-md text-gray-900 font-semibold" htmlFor="MovingTo">Moving To <span className='text-red-600'>*</span></label>
          
          <AutoCompleteInput
            type="text"
            inputName="destination"
            inputStyle="w-full h-12 p-4 text-gray-500 rounded-full outline-none placeholder:text-slate-400 placeholder:font-[500]"
            placeholder="Destination To"
            />
          </div>
            <div className='w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start'>
              <label className="ml-3 text-md text-gray-900 font-semibold" htmlFor="MovingTo">Date <span className='text-red-600'>*</span></label>
              <div className="w-full bg-white rounded-full"
              onClick={() => setCalendarVisible(!calendarVisible)}
            >
              <CustomDatePicker 
                calendarVisible={calendarVisible}
                setCalendarVisible={setCalendarVisible}
                style='move_custom_placeholder h-12'
              />
             </div>
            </div>
          </div> 
          }
         <div className="w-[98%] md:w-[90%] mx-auto grid grid-cols-2 gap-4 items-center">
        <div className='flex flex-col'>
          <label className="ml-3 text-md text-gray-800 font-semibold" htmlFor="firstName">First Name <span className='text-red-600'>*</span></label>
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
                className="w-full h-12 p-4 text-gray-500 rounded-full outline-none placeholder:text-slate-400 placeholder:font-[500]"
              />
            )}
          />
           {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>} 
        </div>
        <div className='flex flex-col'>
          <label className="ml-3 text-md text-gray-800 font-semibold" htmlFor="lastName">Last Name <span className='text-red-600'>*</span></label>
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
                className="w-full h-12 p-4 text-gray-500 rounded-full outline-none placeholder:text-slate-400 placeholder:font-[500]"
              />
            )}
          />
           {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>} 
        </div>

       </div>
      <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
        <label className="ml-3 text-md text-gray-800 font-semibold" htmlFor="email">Email <span className='text-red-600'>*</span></label>
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
              className="w-full h-12 p-4 text-gray-500 rounded-full outline-none placeholder:text-slate-400 placeholder:font-[500]"
              placeholder='example@mail.com'
            />
          )}
        />
         {errors.email && <p className="text-red-600">{errors.email.message}</p>} 
      </div>
      <div className="w-[98%] md:w-[90%] mx-auto flex flex-col gap-1 items-start">
        <label className="ml-3 text-md text-gray-800 font-semibold" htmlFor="phoneNumber">Phone <span className='text-red-600'>*</span></label>
        <div className='w-full flex h-auto'>
          <Controller
            name='countryCode'
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className='w-[32%] rounded-l-full font-bold text-gray-500 text-start pl-2 outline-none ring-blue-300 focus:ring-2 relative text-base'
              >
                <option value='' className='hidden text-slate-400'>Nigeria + 234</option>
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
            rules={{ required: 'Phone Number is required', min: 10 }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id='phoneNumber'
                placeholder='903 222 9225'
                className="w-[68%] h-full p-4 text-gray-500 outline-none rounded-r-full placeholder:text-slate-400 placeholder:font-[500]"
              />
            )}
          />
        </div>
        <div className='flex gap-4'>
          {errors.countryCode && <p className="text-red-600">{errors.countryCode.message}</p>} 
          {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>} 
        </div>
      </div>
      <div className="w-[98%] md:w-[90%] mx-auto  flex flex-col items-start">
        <label className="text-md text-gray-800 font-semibold ml-3 " htmlFor="service">Service <span className='text-red-600'>*</span></label>
        <Controller
          name='service'
          control={control}
          rules={{ required: 'Service is required' }}
          render={({ field }) => (
            <select
              {...field}
              className='border bg-inherit text-gray-500 border-gray-400 w-full rounded-full bg-white outline-none ring-blue-300 focus:ring-2'
              onChange={(e) => {
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
      <div className='w-[95%] flex gap-4 mt-3 pt-4'>
        <button
          type='button' // Change the type to "button"
          name='submitButton1'
          className='bg-blue-300 w-[43%] mx-auto text-[12px] md:font-bold md:text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg'
          disabled={loading1}
          onClick={handleButtonClick} // Handle button click
        >
          {loading1 ? 'Loading...' : 'Book Online'}
        </button>
        <button
          type='button' // Change the type to "button"
          name='submitButton2'
          className='bg-blue-300 w-[43%] mx-auto text-[12px] md:font-bold md:text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg'
          disabled={loading}
          onClick={handleButtonClick} // Handle button click
        >
          {loading ? 'Loading...' : 'Speak With Our Agent'}
        </button>
      </div>
  
         </form>
      
    
  )
}
