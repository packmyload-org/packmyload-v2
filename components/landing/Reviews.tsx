
export const Reviews: React.FC = () => {

    const rating = (
        <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
    )

    return (
        <section className="bg-[#EDF2F8] pt-2">
            <h1 className="md:text-2xl sm:text-xl px-6 mt-3 font-bold text-[#2E5F9E] max-w-6xl mx-auto">
            Packmyload customers. <br />
            <span className="text-4xl">Share their experiences</span>
            </h1>
            <div className="outerdiv">
                <div className="innerdiv">
                <div className="div1 eachdiv">
                    <div className="userdetails">
                        <div className="imgbox">
                            <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600">A</span>
                            </div>
                        </div>
                        <div className="detbox">
                            <p className="name">Aderoju Aboderin</p>
                            {rating}
                        </div>
                    </div>
                    <div className="review">
                    <h4 className="mt-2">Absolutely fantastic company! The whole service was brilliant from start to finish. I had a super swift in person assessment and quote from Doyin and great communication between then and the moving date.
    The move was facilitated by Sogo who were absolutely delightful. Polite, hardworking, communicative and very efficient. Their upbeat attitude made the move stress-free and actually enjoyable! I cannot recommend Packmyload enough.</h4>
                    </div>
                </div>
                <div className="div2 eachdiv">
                    <div className="userdetails">
                    <div className="imgbox">
                        <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600">E</span>
                        </div>
                    </div>
                    <div className="detbox">
                        <p className="name">ENO SABO</p>
                    {rating}
                    </div>
                    </div>
                    <div className="review">
                    <h4 className="mt-2">So let me just say these guys are amazing. Mr. Shogo was very polite and gentle. They were quick, professional and helpful. They did an unbelievable job and we will be hiring them for all future moves:</h4>
                    </div>
                </div>
                <div className="div3 eachdiv">
                    <div className="userdetails">
                    <div className="imgbox">
                        <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600">M</span>
                        </div>
                    </div>
                    <div className="detbox">
                        <p className="name dark">Mercy Ereh</p>
                        {rating}
                    </div>
                    </div>
                    <div className="review dark">
                    <h4 className="mt-2">Positive: Professionalism, Punctuality, Quality, Responsiveness, Value <br />
    We used packmyload today. We had a great experience. Truck arrived on site on time, picked up the heavy product right at the site where it was uninstalled and it was quickly delivered to the exact same address requested in under 3 hours as we planned. We will definitely use this service over renting other moving companies. Much safer and tons of time saved.
    Services: Vehicle transport, Local moving, Moving-related packing, Oversized-item moving, Moving-related storage, In-state moving, Moving-related junk removal</h4>
                    </div>
                </div>
                <div className="div4 eachdiv">
                    <div className="userdetails">
                    <div className="imgbox">
                        <img src="https://lh3.googleusercontent.com/a-/AD_cMMQwXeT-7j7Jxf_7oGbOopX9Ejk9Q_NJ5AUvSLJj5vFIh8Q=w120-h120-p-rp-mo-br100" alt="Avatar" />
                    </div>
                    <div className="detbox">
                        <p className="name dark">pakam zamani</p>
                        {rating}
                    </div>
                    </div>
                    <div className="review dark">
                    <h4 className="mt-2">Positive: Professionalism, Quality, Responsiveness, Value <br />
    Really amazing and professional guys. Prompt, courteous and highly skilled. They’re highly recommended</h4>
                    </div>
                </div>
                <div className="div5 eachdiv">
                    <div className="userdetails">
                    <div className="imgbox">
                        <div className="relative inline-flex items-center justify-center w-[30px] h-[30px] overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600">E</span>
                        </div>
                    </div>
                    <div className="detbox">
                        <p className="name">Elizabeth Paul</p>
                        {rating}
                    </div>
                    </div>
                    <div className="review">
                    <h4 className="mt-2">Positive: Professionalism, Quality, Responsiveness, Value <br />
    The pack my load team did a great job from start to finish. Jessica was very helpful in terms of getting our move schedule rearranged just a date for the  election. Their movers, Frank, Ola and Patrick worked fast despite  a large move with a lot of heavy furniture. We had two different move locations on the island and mainland and they did an awesome job coordinating both locations. We had a lot of items to move and they stayed till close to 10pm in order to finish the job. Overall it was a great experience and I would most definitely recommend to anyone looking to move.</h4>
        
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}