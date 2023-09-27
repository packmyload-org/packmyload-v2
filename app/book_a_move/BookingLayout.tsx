import { BookingProgress } from './BookingProgress'
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import {IoChevronBackCircleOutline, IoChevronForwardCircleOutline} from 'react-icons/io5'

type BookingLayoutProps = {
    leftContent?: React.ReactNode,
    rightContent: React.ReactNode,
    stepDescription?: string,
    textDescription?: string,
    prev?: string
}

export const BookingLayout: React.FC<BookingLayoutProps> = ({leftContent, rightContent, stepDescription, textDescription, prev }) => {
    const router = useRouter()
    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Left section */}
            <aside className="md:w-[50%] bg-[#f7f6f6] p-4 h-auto sm:h-auto lg:h-[100vh] overflow-y-scroll scrollbar-hide">
                <main className="lg:max-w-3xl lg:mx-auto">

                    <Link href={'/'}>
                    
                        <Image 
                            src="/images/icons/packmyload-blue-logo.svg"
                            alt='Logo'
                            width={100}
                            height={40}
                            className='object-contain w-[150px] cursor-pointer'
                            priority
                        />
                    </Link>

                    <div className="mt-10 space-y-6">
                        <div className="p-2">

                        <p className='text-base text-blue-300 font-bold'>Your steps</p>
                        <br />
                        <BookingProgress />
                        </div>
                        <div className="py-4 px-2 space-y-4">
                        <h1 className="text-4xl font-black text-blue-300">{stepDescription}</h1>
                        <p className="text-base text-blue-300">{textDescription}</p>
                        {/* Render left content */}
                        {leftContent}
                        </div>
                    </div>
                </main>
            </aside>

            {/* Right section */}
            <main className="md:w-[50%] bg-white p-4 h-auto md:h-[90vh] ">
                    <div className='flex w-full justify-between'>
                    <IoChevronBackCircleOutline size={40} className="hidden lg:block cursor-pointer mt-2 text-blue-300 " onClick={() => router.push(prev ?? '')} />
                    </div>
                <div className="flex flex-col lg:flex-row lg:gap-4 lg:max-w-3xl overflow-scroll scrollbar-hide h-full mt-4 pb-10 ">
                    {/* Render right content */}
                    {rightContent}
                </div>
            </main>
        </div>
    )
}