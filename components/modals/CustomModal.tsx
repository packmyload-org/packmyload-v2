import { Modal } from 'antd'
import React from 'react'

type Props = {
 displayModal: boolean;
 title: string;
 setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomModal = (props: Props) => {
  return (
   <Modal
    className='modal__style'
    open={props.displayModal}
    title={<h1 className='bg-black text-white w-full'>{props.title}</h1>
    }
    onCancel={() => props.setDisplayModal(false)}
    width={700}
    
   >
     <h1>hello</h1>
   </Modal>
   )
}