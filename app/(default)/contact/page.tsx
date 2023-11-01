import {GoPerson} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {IoCall} from 'react-icons/io5'
import { Row, Col } from "antd";
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import Link from 'next/link'

export default function Contact () {

    return (
        <main>
            <section className="w-[95%] mx-auto lg:w-full mt-[90px] max-w-6xl mx-auto py-2 flex flex-col lg:flex-row gap-3">
                <div className="lg:w-[50%]">
                    <h1 className="font-bold text-xl">Get in Touch</h1>

                    <section className='flex items-center gap-4 mt-4 bg-[#F9F9F9] border p-2 rounded-md'>
                        <GoPerson size={18} color='#4BCBFE' />
                        <input 
                            type="text" 
                            placeholder='Your Name *'
                            className='outline-none p-2 text-sm bg-[#F9F9F9] w-[90%]'
                        />
                    </section>
                    <section className='flex items-center gap-4 mt-4 bg-[#F9F9F9] border p-2 rounded-md'>
                        <HiOutlineMail size={18} color='#4BCBFE' />
                        <input 
                            type="text" 
                            placeholder='Email Address *'
                            className='outline-none p-2 text-sm bg-[#F9F9F9] w-[90%]'
                        />
                    </section>
                    <section className='flex items-center gap-4 mt-4 bg-[#F9F9F9] border p-2 rounded-md'>
                        <IoCall size={18} color='#4BCBFE' />
                        <input 
                            type="text" 
                            placeholder='Phone *'
                            className='outline-none p-2 text-sm bg-[#F9F9F9] w-[90%]'
                        />
                    </section>
                    <section className='flex items-center gap-4 mt-4 bg-[#F9F9F9] border p-2 rounded-md'>
                        <textarea
                            placeholder='Message *'
                            className='outline-none p-2  text-sm bg-[#F9F9F9] w-[100%] h-[120px]'
                        />
                    </section>
                    <button
                        className="mt-4 text-white shadow-lg text-base font-bold p-4 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black rounded-md"
                        >
                        Send &#8658;
                    </button>
                </div>
                <div className='lg:w-[50%] border'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.3427409203!2d3.3700700253090385!3d6.573857262787563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9284c6f53e11%3A0x36b890cc14882b07!2s2%20Hundeyin%20St%2C%20Ogudu%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697780880744!5m2!1sen!2sng"  height="345" className='w-full' style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <section className='w-full p-6'>
                        <div className='flex flex-wrap justify-between items-center border-b py-2'>
                            <span className='flex gap-2 items-center'>
                                <IoCall size={17} color='#4BCBFE' />
                                <p className='text-base'>Phone:</p>
                            </span>
                            <p className='text-base text-slate-400'>0700-722-5776 (0700-PACK-PRO)</p>
                        </div>
                        <div className='mt-1 flex flex-wrap justify-between items-center border-b py-2'>
                            <span className='flex gap-2 items-center'>
                                <HiOutlineMail size={19} color='#4BCBFE' />
                                <p className='text-base'>Mail:</p>
                            </span>
                            <p className='text-base text-slate-400'>enquiries@packmyload.com</p>
                        </div>
                        <div className='flex gap-2 flex-wrap mt-2'>
                            <Link target = '_blank' href= 'https://web.facebook.com/packmyload?_rdc=1&_rdr'>
                                <button
                                    className="text-white shadow-lg text-base font-bold p-3 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-blue-300 hover:text-black rounded-md"
                                    >
                                    <FaFacebookF size={19} color='white' />
                                </button>
                            </Link>
                            <Link target = '_blank' href= 'https://twitter.com/packmyload'>
                                <button
                                    className="text-white shadow-lg text-base font-bold p-3 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-blue-300 hover:text-black rounded-md"
                                    >
                                    <FaXTwitter size={19} color='white' />
                                </button>
                            </Link>
                            <Link target = '_blank' href= 'https://www.linkedin.com/company/packmyload-com/about/'>
                                <button
                                    className="text-white shadow-lg text-base font-bold p-3 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-blue-300 hover:text-black rounded-md"
                                    >
                                    <FaLinkedinIn size={19} color='white' />
                                </button>
                            </Link>
                            <Link target = '_blank' href= 'https://www.instagram.com/packmyload/'>
                                <button
                                    className="text-white shadow-lg text-base font-bold p-3 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-blue-300 hover:text-black rounded-md"
                                    >
                                    <FaInstagram size={19} color='white' />
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
            <section className="gradient-bg grid py-[20px] min-h-[250px] relative">
                <div className="cirle-bg w-full">
                    <div className="bg object-cover" style={{height:'250px'}}></div>   
                </div>
                <div className="w-full lg:w-[1200px] max-w-6xl mx-auto py-12">
                    <div className="join-wrap fl-wrap text-white">
                    <Row className='w-full flex' justify={'space-between'} align={'middle'}>
                        <Col span={24} md={10} className='flex flex-col space-y-6'>
                        <h3 className='text-4xl font-bold'>Do You Have Questions ?</h3>
                        <p>Check out our frequently asked questions.</p>
                        </Col>
                        <Col span={24} md={10} className='flex items-center text-start md:text-end md:justify-center min-h-[100px]'>
                            <Link href={'/Faqs'} className="join-wrap-btn bg-blue-700 focus:bg-blue-300 ">
                            FAQS
                            </Link>
                        </Col>
                    </Row>
                    </div>
                </div>
            </section>
        </main>
    )
}