'use client'
import { WhatsappLogo } from "@phosphor-icons/react";

const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});
import Image from "next/image";
import { useBookingForm } from "@/context/BookingFormContext";
import { useState } from "react";
import { Spin } from "antd";
import { alerts } from "@/components/alerts/Alert";
import dynamic from "next/dynamic";
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';

export default function Next_Page() {
   const { state, dispatch } = useBookingForm()
   const [loading, setLoading] = useState(false)
   const router = useRouter()
    const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
   async function handleSubmit(contactBy: string) {
      setLoading(true)
      handleFieldChange('contactBy', contactBy)
      let data = {
         firstName: state.firstName,
         lastName: state.lastName,
         email: state.email,
         phoneNumber: state.phoneNumber,
         countryCode: state.countryCode,
         destination: state.destination,
         pickUp: state.pickUp,
         contactBy: state.contactBy || contactBy,
         service: state.service,
         moveDate: state.moveDate,
         moveTime: state.moveTime,
      }
      try {
            if (!data.email) {
               alerts.error('Error', 'Please enter your email address')
               router.push('/book')
               return
            }
            const res = await fetch('/api/booking/contact', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
               });
            if (res.ok) {
               alerts.success('Successfully Requested','A copy of your request has been sent to your mail')
               setLoading(false);
               localStorage.clear()
               return
            }
            alerts.error('Error','Something went wrong, please try again with a different email')
            setLoading(false)
            dispatch({ type: 'UPDATE_FIELD', field: 'email', value: '' });
            localStorage.clear()
            return
      } catch (error) {
      console.error("err ====>",error)
      setLoading(false)
     }
   }

 const leftContent = (
   <div className="hidden md:block p-1 lg:px-4 my-auto h-[45vh] w-full contact-bg">
   
    </div>
 )
   const rightContent = (
      <div className="p-1 lg:px-4 my-auto w-full"> 
         <Spin spinning={loading} delay={500} size="large">
      <div className='w-[90%] px-4 mx-auto py-4 space-y-1'>
      <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full ring-black hover:ring-2 px-3 py-4 rounded-md' onClick={() => handleSubmit('Email Message')}>
              {/* <Envelope size={56} weight="fill" className='text-inherit' /> */}
            <Image src='/images/email.png' alt='email logo' width={56} height={56}/>
           <p className='text-lg font-bold  w-[60%] text-start text-black hover:text-white'>Send Me A Mail</p>
        </div>
        <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full ring-black hover:ring-2 px-3 py-4 rounded-md' onClick={() => handleSubmit('Phone Call')}>
              {/* <PhoneCall size={56} weight="fill" className='text-inherit' /> */}
            <Image src='/images/telephone.png' alt='telephone logo' width={56} height={56}/>
           <p className='text-lg w-[60%]  font-bold text-start text-black hover:text-white'>Phone Call</p>
        </div>
        <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full ring-black hover:ring-2 px-3 py-4 rounded-md'onClick={() => handleSubmit('WhatsApp Message')}>
            <WhatsappLogo size={56} weight="fill" className='text-green-600' />
           <p className='text-lg w-[60%]  font-bold text-start text-black hover:text-white'>What'sApp Message</p>
        </div>
            </div>
         </Spin>
      </div>
  )
return <BookingLayout leftContent={leftContent} rightContent={rightContent} stepDescription="Have Our Agent Contact You." textDescription="Sometimes, life's too busy to fill forms. Opt for a hassle-free experience – let our agents contact you swiftly." prev='/book_a_move' />

}