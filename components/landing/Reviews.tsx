import { ReviewCard } from './custom/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {  Autoplay } from 'swiper/modules';

export const Reviews: React.FC = () => {
    

    const breakpoints = {
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20, 
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20, 
        },
    };

    return (
        <section className="bg-[#EDF2F8] p-2 md:p-6">
            <div className="max-w-6xl mx-auto">
                <div className="w-[53px] h-[8px] bg-[#4DB7FE] rounded-full mx-8 mt-6" />
                <h1 className="text-xl md:text-2xl mt-4 mx-8 font-extrabold text-[#2E5F9E]">
                What Our Customers Say <br />
                </h1>
                <p className="mx-8 text-base font-meduim mt-4">
                Packmyload has earned its reputation as the nation's most trusted moving company, thanks to our commitment to delivering unparalleled service to our valued customers. Whether it's a small local move or a cross-country relocation, over a thousand customers have relied on Packmyload to safely transport them and their belongings to their new homes. Read some testimonials from a handful of our satisfied customers to get a glimpse of their experiences with Packmyload.
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
                    className="mySwiper mt-8 w-[95%] mx-auto h-[450px]"
                >
                    <SwiperSlide>
                    <ReviewCard 
                        text="So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves."
                        name='ENO SABO'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="The driver arrived super early and in great spirits. He handled my items with great care and the move was successful. I am happy about Packmyload services and would recommend it to anyone. Thank you!"
                        name='Chukwuma Azodo'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="Never have I looked forward to packing, but these guys did it smoothly without any hassle and were timely also. Love their work ethics and professionalism. Best office relocation  and I they would do just to house relocation as well"
                        name='Olajide Olatunji'
                        profile='https://lh3.googleusercontent.com/a-/ALV-UjUfGfufE9f3NRUEVO-QfyB4h0Seiy4lgT5wuNpiia8eKn4=w120-h120-p-rp-mo-br100'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="No regrets contacting these guys 😍 excellent customer service, friendly, hardworking and efficient moving team. They were prompt and pretty timely. I will refer packmyload to friends and family any-day! Anytime !!"
                        name='Olayinka adu'
                        profile='https://lh3.googleusercontent.com/a-/ALV-UjUHS2SfbFwuZHMRl56KquQenQ3UoAt5r0LPn1HAoDlTLiG-=w120-h120-p-rp-mo-br100'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="Thank you guys for doing an amazing job getting my mum moved. The process was stress free and easy. They were patient and very considerate and I will recommend them anytime any day! Thank you and thank you again. Keep up the good work."
                        name='Millie Slade'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="Patrick and the team were amazing. Arrived early, worked hard throughout the day and did not leave till I was satisfied. If you need a great moving company, I strongly recommend Pack my load. Services: Moving-related packing, Oversized-item moving"
                        name='Lawrence Olugbenga'
                        profile='https://lh3.googleusercontent.com/a-/ALV-UjXIJCttmFz8_DIUCDzbLriyuLkUPZDtituqdSRZsdHztg=w120-h120-p-rp-mo-br100'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="We had to quickly move and searched the Internet for a moving company. First impression of the website was really great, and the customer service up till the moving process was superb. The guys did an amazing job and I would highly recommend packmyload"
                        name='Tobi Adeniyi'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="If there was 10 stars, it would still not be enough. The guys at pack my load did amazing and we didn’t feel like we were moving. It was an ace team led by Sogo and nothing was much trouble for them. If you’re looking for a professional and reliable moving company in Lagos, then I’d recommend you look no further"
                        name='Saheed Aloba'
                        profile='https://lh3.googleusercontent.com/a-/ALV-UjV5imxCAqBOkJ2KPSnssyMohJF7LMhc85RKHj6ZEXxvCg=w120-h120-p-rp-mo-br100'
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ReviewCard 
                        text="packing and unpacking has been a nightmare from my secondary school days. i trusted packmyload with my recent relocation and i was very impressed. no damages, no complains and very professional duties. STRESS FREE experience with them. I so much recommend their service for anyone that wants to relocate"
                        name='Ayodeji Ajibade'
                        profile='https://lh3.googleusercontent.com/a-/ALV-UjVCBVdBdSX-OrwAk9S85LD2e8Jfg-ivOMdax8F_rNChZA=w120-h120-p-rp-mo-br100'
                    />
                    </SwiperSlide>
                </Swiper>
                
            </div>
            
        </section>
    )
}