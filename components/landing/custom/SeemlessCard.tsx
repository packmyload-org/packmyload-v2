type Props = {
 heading: string,
 body: string,
 icon: any,
}
export function SeemlessCard({ heading, body, icon }: Props) {
  return (
   <div className='flex flex-col space-y-2 sm:space-y-4 w-full min-w-[230px] py-8 border-b-[0.3px]'>
    <div className='w-full flex gap-2 items-center'>
       <figure className='p-3 bg-[#f9f9f9] rounded-lg'>
        {icon} 
       </figure>
       <h2 className='font-bold text-xl text-[#2E5F9E]'>{heading}</h2>
     </div>
    <div className='bg-blue-100 rounded py-[1px] w-[60px]' />
     <p className='text-[#777674] text-left text-sm w-4/5'>{body}</p>
    </div>
  )
}