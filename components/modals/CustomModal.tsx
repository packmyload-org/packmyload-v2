import { useBookingForm } from '@/context/BookingFormContext';
import { Col, Modal } from 'antd'
import React from 'react'

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
  return (
   <Modal
    className=''
    open={props.displayModal}
    onCancel={() => props.setDisplayModal(false)}
    width={700}
      footer={null}
      
    >
      <Col span={24} className='bg-blue-100 text-center space-y-4 py-4 mt-6 mb-4 input_shadow rounded-lg'>
        <h1 className='font-bold text-gray-900 w-full text-2xl'>{props.title}</h1>
        <form className='bg-white/20 w-[90%] mx-auto space-y-4 p-4 rounded-lg'>
           <div className="w-[85%] mx-auto flex flex-col gap-1 items-start">
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
           <div className="w-[85%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">Email <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='email'
              placeholder='example@example.com'
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
              value={state.email}
              onChange={(e)=>handleFieldChange(e.target.id,e.target.value)}
            />
          </div>
           <div className="w-[85%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-md text-gray-800 font-semibold" htmlFor="MovingFrom">moveTime <span className='text-red-600'>*</span></label>
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
          <div className="w-[85%] mx-auto flex justify-evenly items-start">
              <button className='w-[120px] p-3 rounded-lg text-gray-100 bg-blue-600 hover:bg-red-500' onClick={() => props.setDisplayModal(false)}>
                Go Back
              </button>
              <button className='w-[120px] p-3 rounded-lg text-gray-100 bg-blue-600 hover:bg-blue-400' onClick={() => props.setDisplayModal(false)}>
                Continue
              </button>
          </div>
        </form>
      </Col>
   </Modal>
   )
}