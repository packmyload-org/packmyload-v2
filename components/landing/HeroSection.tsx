import { MovingForm } from '../services/MovingForm';

export default function HeroSection() {
  
    return (
    <section className={`w-full h-[90vh] sm:h-[90vh] pb-4 md:pb-0 md:h-[85dvh] xl:h-[550px] relative flex flex-col justify-center bg-[url('/images/bg/bg-cover.png')] bg-contain`}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='my-auto w-full z-10 '>
        <main className='flex flex-col w-full items-center text-center space-y-8'>
            <h2 className='text-[2rem] p-2 sm:p-2 md:p-0 sm:text-[2rem] md:text-[3rem] lg:text-[4rem] w-full font-black text-blue-300'>
              We make your move seamless
            </h2>
         <p className='w-[94%] lg:w-[830px] p-2 md:p-0 mx-auto text-sm md:text-lg font-medium leading-5'>Every Move Is Unique and we have the right relocation solution for you. From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</p>
          <MovingForm />
        </main>
      </div>
    </section>
  )
}
