import { MovingForm } from '../services/MovingForm';

export default function HeroSection() {
  
    return (
    <section className={`w-full h-[90vh] sm:h-[80vh] pb-4 md:pb-0 md:h-[90vh] xl:h-[550px] flex flex-col justify-center bg-contain bg-[url('/images/hero-img.jpg')]`}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='my-auto flex flex-col w-full z-10 items-center'>
        <main className='flex flex-col w-full items-center text-center '>
            <h2 className='text-[2rem] p-2 sm:p-2 md:p-0 sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem] w-full font-black text-white'>
              We make your move seamless
            </h2>
         <span className='w-[94%] lg:w-[830px] text-white p-2 md:p-0 mx-auto text-sm md:text-lg font-medium leading-5'>Every Move Is Unique and we have the right relocation solution for you. From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</span>
        </main>
          <MovingForm />
      </div>
    </section>
  )
}
