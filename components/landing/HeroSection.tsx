import { MovingForm } from '../services/MovingForm';
import Image from 'next/image';
export default function HeroSection() {
  
    return (
    <section className={`w-full h-auto sm:h-auto pb-4 md:pb-0 lg:h-[90vh] xl:h-[550px] flex flex-col justify-center bg-contain`}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='flex flex-col w-full items-center'>
        <main className='flex flex-col w-full items-center text-center mt-8 lg:mt-14 '>
            <h2 className='text-[2rem] p-2 sm:p-2 md:p-0 sm:text-[2rem] md:text-[3rem] lg:text-[4.3rem] w-full font-black text-blue-300'>
              We make moving seamless
            </h2>
         <span className='w-[94%] lg:w-[830px] p-2 md:p-0 mx-auto text-sm md:text-lg font-medium leading-5'>Every move Is unique and we have the right relocation solution for you. From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</span>
        </main>
          <MovingForm />
          <div className="flex flex-wrap w-full justify-center gap-2 lg:gap-6 mt-2 mx-auto">
            <Image src="/images/team/hero-img1.webp" alt="Image 1" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain lg:mt-2'  loading='lazy' width={160} height={160}/>
            <Image src="/images/team/hero-img2.webp" alt="Image 2" className='w-[50px] h-[50px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-contain mt-5 lg:mt-10' loading='lazy' width={120} height={120} />
            <Image src="/images/team/hero-img3.webp" alt="Image 3" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain mt-2 lg:mt-6' loading='lazy' width={160} height={160} />
            <Image src="/images/team/hero-img4.webp" alt="Image 4" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain mt-2 lg:mt-4' loading='lazy' width={160} height={160} />
            <Image src="/images/team/hero-img5.webp" alt="Image 5" className='w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] object-contain mt-3 lg:mt-8' loading='lazy' width={160} height={160} />
        </div>
      </div>
    </section>
  )
}
