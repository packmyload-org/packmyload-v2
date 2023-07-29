import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className='hero w-full h-screen sm:h-[75dvh] relative flex flex-col justify-center'>
     <div className='h-full w-full bg-black opacity-50 z-0 absolute'/>

      <div className='my-auto  h-1/2 w-full z-30 text-gray-100'>
        <main className='container flex flex-col items-center text-center space-y-8'>
         <h1 className='text-3xl sm:text-4xl font-inter w-full font-semibold text-gray-100'>Moving as easy as <span className='font-extrabold'>ABC</span></h1>
         <p >Whether moving down the street, to another state, or to
									a new house or business address, we are here to help you with
									managing the stress.</p>
      <div className="sm:w-full sm:mt-10 ">
         <form action="" className='border-[#9d9d9d] bg-[#9d9d9d] border-[15px] sm:border-[10px] rounded-lg sm:rounded-full w-full mx-auto sm:w-[70%]  flex space-y-4 sm:space-y-0 flex-col md:flex-row' >
          <div className='flex bg-gray-100 flex-nowrap py-2 px-3 sm:rounded-l-full w-full sm:w-5/12 justify-between border-r-2'>
           <input type="text" name="" placeholder='Pickup Address' autoComplete='off' required className='p-2 h-10 focus:outline-0 text-black ' />
           <Image src="/images/ic_pickup.svg" alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
          </div>
          <div className='flex bg-gray-100 flex-nowrap py-2 px-3 w-full sm:w-5/12 justify-between'>
           <input type="text" name="" placeholder='Pickup Address' autoComplete='off' required className='p-2 h-10 focus:outline-0 text-black ' />
           <Image src="/images/ic_pickup.svg" alt="moving company lagos nigeria-student moving pickup indicator" width={20} height={20}/>
          </div>
          <button type="button" className='bg-blue-100 p-3 sm:relative absolute bottom-[8%] w-[250px] sm:w-[150px] mx-auto sm:rounded-r-full'>
            Get Started
          </button>
         </form>
        </div>
        </main>
      </div>
    </section>
  )
}
