import { useBookingForm } from '@/context/BookingFormContext';
import { Col, Modal } from 'antd'
import React, { useState } from 'react'
import { alerts } from '../alerts/Alert';
import { useRouter } from 'next/navigation';

type Props = {
 displayModal: boolean;
 title: string;
 setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomModal = (props: Props) => {
  const { state, dispatch } = useBookingForm();
  const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  const [showPhoneInput, setShowPhoneInput] = useState(false)
  const [showWhatsAppInput, setShowWhatsAppInput] = useState(false)
  const router = useRouter()
  return (
   <Modal
    className='modal__style '
    open={props.displayModal}
      onCancel={() => { props.setDisplayModal(false); handleFieldChange('contactBy', '')}}
    width={700}
      footer={null}
    >
      <Col span={24} className='text-center bg-sky-200 space-y-4 py-4 mt-6 mb-4 input_shadow rounded-lg '>
        <h1 className='font-bold text-gray-800 w-full text-2xl'>{props.title}</h1>
        <div className='w-[90%] mx-auto space-y-5 p-4 pt-0 rounded-lg'>
          <p className='text-base leading-5'>You can speak with our agents, Agree on a day for them to come over an survey and understand your unique move needs by simply select how you want to be contacted.</p>
          <div className=" w-[80%] mx-auto space-y-1">
            <div>
              <button className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 focus:bg-blue-300 ring-black focus:ring hover:ring hover:text-white font-semibold text-lg' onClick={() => { handleFieldChange('contactBy', 'Email'); setShowPhoneInput(false);  setShowWhatsAppInput(false)}}>Send Me An Email</button>
            </div>
            <div>
              {showPhoneInput && !showWhatsAppInput ?
                'open' :
                <button className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 ring-black hover:ring hover:text-white font-semibold text-lg' onClick={() => { setShowPhoneInput(true); setShowWhatsAppInput(false); }}>Phone Call</button>
              }
            </div>
            <div>
              {showWhatsAppInput && !showPhoneInput ?
                "open" :
                <button className='py-4 w-full bg-white rounded-lg hover:bg-blue-300 ring-black hover:ring hover:text-white font-semibold text-lg' onClick={() => { setShowPhoneInput(false); setShowWhatsAppInput(true); }}>What'sApp Message</button>
              }
            </div>
          </div>

          <button className='w-[60%] mx-auto py-3 bg-blue-600 mt-3 font-extrabold text-gray-100 rounded-lg hover:bg-blue-700' onClick={() => {
            if (state.contactBy === '') {
              alerts.error('Invalid Submission', 'Please choose a mode for contact')
              return
            }
            router.push('/book_a_move/checkout')
          }}>PREVIEW INFORMATION</button>
        </div>
      </Col>
   </Modal>
   )
}