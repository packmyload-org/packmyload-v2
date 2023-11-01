import { NeedHelp } from '@/components/book_a_move_comp/NeedHelp'
import { BookingProgress } from './BookingProgress'
import Image from 'next/image'
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import {IoChevronBackCircleOutline} from 'react-icons/io5'

type BookingLayoutProps = {
    leftContent?: React.ReactNode,
    rightContent: React.ReactNode,
    stepDescription?: string,
    textDescription?: string,
    prev?: string
    next?: string
}

export default function BookingLayout ({leftContent, rightContent, stepDescription, textDescription, prev, next }: BookingLayoutProps) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {/* Left section */}
            <aside className="lg:w-[50%] bg-[#f7f6f6] p-4 h-auto sm:h-auto lg:h-[100vh] overflow-y-scroll scrollbar-hide">
                <main className="lg:max-w-3xl lg:mx-auto">

                    <nav className='flex flex-wrap justify-between items-center relative'>

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
                        {pathname !== '/book' && <NeedHelp />}
                    </nav>

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
            <main className="lg:w-[50%] lg:max-w-3xl lg:mx-auto bg-white p-4 h-auto md:h-[90vh] ">
                    <div className='flex w-full justify-between'>
                    <IoChevronBackCircleOutline size={40} className="hidden lg:block cursor-pointer text-blue-300 " onClick={() => router.push(prev ?? '')} />
                    </div>
                <div className="flex flex-col lg:gap-4 lg:max-w-3xl overflow-scroll scrollbar-hide h-[95%] mt-4 pb-10 ">
                    {/* Render right content */}
                    {rightContent}
                </div>
                {next &&
                    <div className='bg-blue-300 mx-auto text-center w-[130px] md:w-[160px] cursor-pointer font-black text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg' onClick={() => router.push(next ?? '')}>
                    Proceed
                </div>}
            </main>
        </div>
    )
}