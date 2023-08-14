'use client'
import { Col, Dropdown, MenuProps, Space } from 'antd';
import { ArrowLeft,  ListNumbers } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';
const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <p>
       Partner with us
     </p>
   ),
  },
  {
    key: '2',
    label: (
      <p>
        Become A PacMan
      </p>
    ),
  }
];
export default function Booking() {
  const router = useRouter()
 return (
  <Col span={24} className="h-screen bg-blue-900 pt-[81px] md:pt-[90px] pb-2 px-[5%]">
    <div className="flex flex-row flex-wrap-reverse h-full w-full rounded-xl border bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-0 lg:p-6 input_shadow lg:gap-10 justify-evenly overflow-y-scroll lg:overflow-y-hidden">
         {/* Map Section */}
      <div className="flex flex-col h-[300px] lg:h-full bg-cover bg-no-repeat rounded-b-lg lg:rounded-xl w-full lg:w-[45%] bg-[url('https://storage.prompt-hunt.workers.dev/cc21c6f2-9f26-4b1e-8ede-04597b9bba15')]"></div>
         {/* Form  Section*/}
      <div className="w-full rounded-t-lg lg:rounded-xl lg:w-[45%] h-max  section_title p-6 space-y-6">
         {/* Form Header  */}
        <div className="w-full md:w-[80%] mx-auto space-y-3">
            <div className="flex flex-nowrap w-full justify-between ">
                  <ArrowLeft size={24} className='text-white' />
                <div className="flex w-[70%] justify-between">
                <h2 className="text-lg text-white font-satoshi font-semibold"> Price ${0.32}</h2>
                <div className="relative w-10 h-[30px] flex flex-col items-center justify-end ">
                    <p className="absolute top-0 right-0 text-sm text-white font-bold">0</p>
                    <ListNumbers size={24} className='text-white'/>
                </div>
                </div>
            </div>
            <h2 className="w-full text-2xl text-white font-bold font-mono text-center">Let's Get Started </h2>
        </div>

         {/* Form  */}
         <form className="w-full md:w-[80%] mx-auto space-y-4 flex flex-col items-center " onSubmit={(e) => { e.preventDefault(); router.push('/steps?step=0') }}>
          <div className="w-[90%] mx-auto flex flex-col items-start">
            <Dropdown menu={{items}} className='border border-gray-500 p-3 w-full rounded-md'>
              <a onClick={(e) => e.preventDefault()} className='text-white cursor-pointer'>
                <Space className='flex items-start'>
                  Select Service <span className='text-red-600'>*</span>
                </Space>
              </a>
            </Dropdown>
          </div>
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
            <label className="text-md text-gray-500 font-semibold" htmlFor="MovingTo">Moving To <span className='text-red-600'>*</span></label>
            <input
              type="text"
              id='MovingTo'
              placeholder="Destination To"
              className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
              required
            />
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-1 items-start">
            <label className="text-sm lg:text-md text-white font-semibold" htmlFor="MovingTo">Available Date For Virtual Inspection <span className='font-light text-xs'>( video call )</span></label>
            <input
              type="date"
              id='videoCall'
              placeholder="Destination To"
              className="w-full h-10 p-4 text-white rounded-md outline-none"
            />
          </div>
            <button
             type='submit'
             className='bg-blue-600 w-[40%] font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'
            >
              Proceed
          </button>
        </form>
    </div>
    </div>
  </Col>
 )
}