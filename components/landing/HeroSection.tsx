import { MovingForm } from '../services/MovingForm';

export default function HeroSection() {
  
    return (
    <section className={`w-full h-auto sm:h-auto pb-4 md:pb-0 lg:h-[90vh] xl:h-[550px] flex flex-col justify-center bg-contain`}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='my-auto flex flex-col w-full z-10 items-center'>
        <main className='flex flex-col w-full items-center text-center '>
            <h2 className='text-[2rem] p-2 sm:p-2 md:p-0 sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem] w-full font-black text-blue-300'>
              We make moving seamless
            </h2>
         <span className='w-[94%] lg:w-[830px] p-2 md:p-0 mx-auto text-sm md:text-lg font-medium leading-5'>Every move Is unique and we have the right relocation solution for you. From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</span>
        </main>
          <MovingForm />
          <div className="flex flex-wrap w-full justify-center gap-2 lg:gap-6 mt-2 mx-auto">
            <img src="/images/team/hero-img1.jpg" alt="Image 1" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain lg:mt-2' />
            <img src="/images/team/hero-img2.jpg" alt="Image 2" className='w-[50px] h-[50px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-contain mt-4 lg:mt-8' />
            <img src="/images/team/hero-img3.jpg" alt="Image 3" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain lg:mt-5' />
            <img src="/images/team/hero-img4.jpg" alt="Image 4" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain lg:mt-3' />
            <img src="/images/team/hero-img5.jpg" alt="Image 5" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain lg:mt-6' />
        </div>
      </div>
    </section>
  )
}
