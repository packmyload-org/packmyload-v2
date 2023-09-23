import BookingProgress from "@/components/book_a_move_comp/BookingProgress"
import Image from 'next/image'
import Link from "next/link"
import {IoChevronBackCircleOutline} from 'react-icons/io5'

type BookingLayoutProps = {
    leftContent: React.ReactNode,
    rightContent: React.ReactNode,
    stepDescription?: string,
    prev?: string,
}

export const BookingLayout: React.FC<BookingLayoutProps> = ({leftContent, rightContent, stepDescription}) => {

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Left section */}
            <aside className="md:w-[50%] bg-[#f7f6f6] p-4 h-auto sm:h-auto lg:h-[100vh] overflow-hidden">
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

                        <BookingProgress />
                        <div className="py-4 px-2 space-y-4">
                        <h1 className="text-3xl font-black">{stepDescription}</h1>
                        {/* Render left content */}
                        {leftContent}
                        </div>
                    </div>
                </main>
            </aside>

            {/* Right section */}
            <main className="md:w-[50%] bg-white p-4 h-auto md:h-[90vh] ">
                    <IoChevronBackCircleOutline size={40} className="hidden lg:block cursor-pointer mt-2" />
                <div className="flex flex-col lg:flex-row lg:gap-4 lg:max-w-3xl overflow-scroll scrollbar-hide h-full mt-4 pb-10 ">
                    {/* Render right content */}
                    {rightContent}
                </div>
            </main>
        </div>
    )
}