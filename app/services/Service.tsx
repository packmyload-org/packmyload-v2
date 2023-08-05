import React from 'react';
import Image from 'next/image';
import img1 from "../../public/images/Assets/m1.png";
import img2 from "../../public/images/Assets/m2.png";
import img3 from "../../public/images/Assets/m3.png";
import img4 from "../../public/images/Assets/m4.png";
import img5 from "../../public/images/Assets/m5.png";
import img6 from "../../public/images/Assets/m6.png";
import img7 from "../../public/images/Assets/m7.png";
import img8 from "../../public/images/Assets/m8.png";
import img9 from "../../public/images/Assets/m9.png";

export default function Service() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-bold text-2xl mb-4">Services</h2>
          </div>

          {/* Items */}
          <div className="bg-white mx-auto grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img1} alt="Home Relocations" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Home Relocations</p>
            </div>

            {/* 2nd item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img2} alt="Read more" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Office Relocations.</p>
            </div>

            {/* 3rd item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img3} alt="Industry Experience" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Store Delivery</p>
            </div>

            {/* 4th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img4} alt="Borderless" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Student Moves</p>
            </div>

            {/* 5th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img5} alt="Flexible Payment" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Junk Removal</p>
            </div>

            {/* 6th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img6} alt="Simple Model" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Wedding Gifts Handling</p>
            </div>

            {/* 7th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img7} alt="Placeholder" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">International Relocations</p>
            </div>

            {/* 8th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img8} alt="Placeholder" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Cleaning Services</p>
            </div>

            {/* 9th item */}
            <div className="flex flex-col items-center limitless-card p-6 rounded transition-transform hover:scale-110" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={img9} alt="Placeholder" width={664} height={64} />
              <p className="text-center mt-4 underline cursor-pointer pb-1 hover:text-blue-500">Storage</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
