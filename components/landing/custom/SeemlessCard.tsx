type Props = {
 heading: string,
 body: string,
 icon: any,
}
export function SeemlessCard({ heading, body, icon }: Props) {
  return (
   <div className='flex flex-col sm:space-y-4 items-center lg:items-start w-full min-w-[230px] py-4 border-b-[0.3px]'>
    <div className='w-full flex gap-2 items-center justify-center lg:justify-start'>
       <figure className='p-2 md:p-3 bg-[#f9f9f9] rounded-lg'>
        {icon} 
       </figure>
       <h2 className='font-bold text-base md:text-xl text-[#2E5F9E]'>{heading}</h2>
    </div>
    <div className='bg-blue-100 rounded py-[1px] w-[60px] mt-2' />
     <p className='text-[#777674] text-center lg:text-left text-sm w-4/5 mt-2'>{body}</p>
    </div>
  )
}