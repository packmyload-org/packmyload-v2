import { ReviewCard } from './custom/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

export const Reviews: React.FC = () => {
    

    const breakpoints = {
        // When window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 20, 
        },
    };

    return (
        <section className="bg-[#EDF2F8] p-6">
            <div className="max-w-6xl mx-auto">
                <div className="w-[53px] h-[8px] bg-[#4DB7FE] rounded-full mx-8 mt-6" />
                <h1 className="md:text-2xl mt-4 mx-8 font-extrabold text-[#2E5F9E]">
                What Our Customers Say <br />
                </h1>
                <p className="mx-8 text-base font-meduim mt-4">
                PackMyLoad has earned its reputation as the nation's most trusted moving company, thanks to our commitment to delivering unparalleled service to our valued customers. Whether it's a small local move or a cross-country relocation, over a million customers have relied on PackMyLoad to safely transport them and their belongings to their new homes. Read some testimonials from a handful of our satisfied customers to get a glimpse of their experiences with PackMyLoad.
                </p>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={2}
                    modules={[Autoplay]}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    breakpoints={breakpoints}
                    speed={800}
                    effect="slide"
                    className="mySwiper mt-6 p-4"
                >
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves"
                    />
                    </SwiperSlide>
                </Swiper>
                
            </div>
            
        </section>
    )
}