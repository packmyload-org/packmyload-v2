import { useBookingForm } from '@/context/BookingFormContext';
import { Col, Modal } from 'antd'
import React from 'react'
import { alerts } from '../alerts/Alert';

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
    className='modal__style '
    open={props.displayModal}
    onCancel={() => props.setDisplayModal(false)}
    width={700}
      footer={null}
    >
      <Col span={24} className='text-center bg-sky-200 space-y-4 py-4 mt-6 mb-4 input_shadow rounded-lg '>
        <h1 className='font-bold text-gray-800 w-full text-2xl'>{props.title}</h1>
        <div className='w-[90%] mx-auto space-y-4 p-4 rounded-lg'>
          <div className=" w-full md:w-1/2 mx-auto flex justify-evenly ">
          </div>
        </div>
      </Col>
   </Modal>
   )
}