type Props = {
 heading: string,
 body: string,
 icon: any,
}
export function SeemlessCard({ heading, body, icon }: Props) {
  return (
   <div className='flex flex-col items-center space-y-2 sm:space-y-4 w-full min-w-[230px] py-8 border-b-[0.3px] border-blue-100'>
    <div className='w-max mx-auto flex gap-2 items-center'>
       <figure className='p-3 bg-[#f9f9f9] rounded-lg'>
        {icon} 
       </figure>
       <h2 className='font-bold text-xl'>{heading}</h2>
     </div>
    <div className='bg-blue-100 rounded py-[1px] w-2/5 mx-auto' />
     <p className='text-[#777674] text-sm leading-5 w-4/5 mx-auto'>{body}</p>
    </div>
  )
}