'use client'

import { usePathname } from 'next/navigation';

const BookingProgress: React.FC = () => {
    let activeStyle = "flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
    let defaultStyle = "flex md:w-full items-center text-gray-800 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
    const path = usePathname()
    return (
       

        <nav aria-label="Page navigation example" className="max-w-6xl mx-auto" style={{marginTop:'110px'}}>

            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                <li className={`${['/book_a_move' ,'/book_a_move/items'].some((url)=>url === path ? activeStyle : defaultStyle)}` }>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        {(path === '/book_a_move' || path === '/book_a_move/items') ?
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        :
                            <span className="mr-2">1</span>
                    }
                        Getting <span className="hidden sm:inline-flex sm:ml-2">Started</span>
                    </span>
                </li>
                   <li className={`${path === '/book_a_move/locations-details' ? activeStyle : defaultStyle}`}>
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        {path === '/book_a_move/locations-details' ? <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg> : <span className="mr-2">2</span>}
                        Location <span className="hidden sm:inline-flex sm:ml-2">Details</span>
                    </span>
                </li>
                <li className={`${path === '/book_a_move/checkout' ? activeStyle : defaultStyle}`}>
                    {path === '/book_a_move/checkout' ? <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>: <span className="mr-2">3</span>}
                    Confirmation
                </li>
            </ol>
        </nav>

    )
}

export default BookingProgress