import { Col, Modal } from 'antd'
import React, { useState } from 'react'
import { alerts } from '../alerts/Alert';
import { useRouter } from 'next/navigation';
import Success from "@/public/images/Confirmed.gif";
import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react';

type Props = {
 displayModal: boolean;
 setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomModal = (props: Props) => {
  // const { state, dispatch } = useBookingForm();
  // const handleFieldChange = (field: string, value: string) => {
  //   dispatch({ type: 'UPDATE_FIELD', field, value });
  // };
  // const [showPhoneInput, setShowPhoneInput] = useState(false)
  // const [showWhatsAppInput, setShowWhatsAppInput] = useState(false)
  // const router = useRouter()
  return (
   <Modal
    className='modal__style '
    open={props.displayModal}
    onCancel={() => { props.setDisplayModal(false); }}
    
      footer={null}
    >
      {/* <Col span={24} className='text-center bg-sky-200 space-y-4 py-4 mt-6 mb-4 input_shadow rounded-lg '>
        <h1 className='font-bold text-gray-800 w-full text-2xl'>{props.title}</h1>
        <div className='w-[90%] mx-auto space-y-5 p-4 pt-0 rounded-lg'>
          <p className='text-base leading-5'>You can speak with our agents, Agree on a day for them to come over an survey and understand your unique move needs by simply select how you want to be contacted.</p>
          <div className=" w-[80%] mx-auto space-y-1">
            <div>
              <button className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 focus:bg-blue-300 ring-black focus:ring hover:ring hover:text-white font-semibold text-lg' onClick={() => { handleFieldChange('contactBy', 'Email'); setShowPhoneInput(false);  setShowWhatsAppInput(false)}}>Send Me An Email</button>
            </div>
            <div>
              {showPhoneInput && !showWhatsAppInput ?
                <div className='h-12 w-full flex justify-between items-center'>
                  <label htmlFor="phone" className='w-[25%] h-[90%] bg-blue-300 ring-2 ring-black rounded-lg text-center text-white flex items-center justify-center text-lg font-semibold'>
                    Phone No
                  </label>
                  <input 
                    className='w-[72%] h-[75%] py-[5%] rounded-lg text-base'
                    id='phoneNumber'
                    min={11}
                    value={state.phoneNumber}
                    onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
                    defaultValue={state.phoneNumber} />
                </div>
                :
                <button className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 ring-black hover:ring hover:text-white font-semibold text-base' onClick={() => { setShowPhoneInput(true); setShowWhatsAppInput(false); handleFieldChange('contactBy', 'phoneCall'); }}>Phone Call</button>
              }
            </div>
            <div>
              {showWhatsAppInput && !showPhoneInput ?
                 <div className='h-12 w-full flex justify-between items-center'>
                  <label htmlFor="phone" className='w-[25%] h-[90%] bg-blue-300 ring-2 ring-black rounded-lg text-center text-white flex items-center justify-center text-base font-semibold whitespace-nowrap'>
                    What'sApp No
                  </label>
                  <input
                    className='w-[72%] h-[75%] py-[5%] rounded-lg text-base'
                    value={state.whatsApp}
                    defaultValue={state.whatsApp}
                    id='whatsApp'
                    onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
                    placeholder='+66 8350 983 4444'
                  />
                </div>:
                <button
                  className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 ring-black hover:ring hover:text-white font-semibold text-lg'
                  onClick={() => {
                    setShowPhoneInput(false);
                    setShowWhatsAppInput(true);
                    handleFieldChange('contactBy', "WhatsApp");
                  }}>What'sApp Message</button>
              }
            </div>
          </div>

          <button className='w-[60%] mx-auto py-3 bg-blue-600 mt-3 font-extrabold text-gray-100 rounded-lg hover:bg-blue-700' onClick={() => {
            if (state.contactBy === '') {
              alerts.error('Invalid Submission', 'Please choose a mode for contact')
              return
            }
            props.setDisplayModal(!props.displayModal)
            router.push('/book_a_move/checkout')
          }}>PREVIEW INFORMATION</button>
        </div>
      </Col> */}
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex flex-col items-center space-y-6 py-12">
           <p className="text-2xl text-blue-300 text-center font-bold mt-4">
             Successfully Sent Quote!
          </p>
          <p className="text-lg text-gray-500 text-center">
            Thank you for choosing packmyload.
          </p>
          <CheckCircle size={62} weight='duotone' className='text-blue-300'/>
    </div>
   </Modal>
   )
}