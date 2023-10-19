import {GoPerson} from 'react-icons/go'
import {HiOutlineMail} from 'react-icons/hi'
import {IoCall} from 'react-icons/io5'
import { Row, Col } from "antd";
import Link from 'next/link'

export default function Contact () {

    return (
        <main>
            <section className="w-[95%] mx-auto lg:w-full mt-[90px] max-w-6xl mx-auto py-2 flex flex-col lg:flex-row">
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
                <div>

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
                            <Link href={'/faqs'} className="join-wrap-btn bg-blue-700 focus:bg-blue-300 ">
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