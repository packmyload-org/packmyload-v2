import React from 'react';

interface Props {
}

const ChatComponent: React.FC<Props> = () => {
 return (
  <div className='fixed h-[90vh] lg:right-10 bottom-3 lg:bottom-10 w-[90dvw] sm:w-[80dvw] m-auto lg:w-[30dvw] bg-white '>
   <div className='bg-blue-300 w-full'>
    <h1 className='font-black text-lg text-white'>Mr Packer</h1>
   </div>
  </div>
 );
};

export default ChatComponent;
