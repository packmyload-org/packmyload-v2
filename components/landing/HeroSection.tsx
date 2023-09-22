import { MovingForm } from '../services/MovingForm';

export default function HeroSection() {

  const divStyle = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom'
  };
  
    return (
    <section className={`w-full h-[80vh] sm:h-[80vh] pb-4 md:pb-0 md:h-[90vh] xl:h-[550px] relative flex flex-col justify-center bg-contain bg-[url('/images/herosection-straight-Img.jpg')] bg-no-repeat`} style={divStyle}>
     {/* <div className='gradient h-full w-full z-0 absolute' /> */}

      <div className='my-auto w-full z-10 '>
        <main className='flex flex-col w-full items-center text-center space-y-6'>
            <h2 className='text-[2rem] p-2 sm:p-2 md:p-0 sm:text-[2rem] md:text-[3rem] lg:text-[4rem] w-full font-black text-blue-300'>
              We make your move seamless
            </h2>
         <span className='w-[94%] lg:w-[830px] p-2 md:p-0 mx-auto text-sm md:text-lg font-medium leading-5'>Every Move Is Unique and we have the right relocation solution for you. From full service and DIY relocation solutions to vehicle transport services for domestic and international moving.</span>
          <MovingForm />
          {/* <div className='max-w-6xl mx-auto'>
            <img
              src="/images/herosection-straight-Img.jpg"
              alt="packmyload process image"
              className="w-full sm:h-[500px] lg:h-auto max-w-full mx-auto"
            />
          </div> */}

        </main>
      </div>
    </section>
  )
}
