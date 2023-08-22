'use client'

import { useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation';

const BookingProgress: React.FC = () => {
    let activeStyle = 'flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
    let defaultStyle = 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    const [active, setActive] = useState(0)
    const path = usePathname()
    const router = useRouter()
    useEffect(() => {
        if (path === '/book_a_move') {
            setActive(1)
        }else if (path === '/book_a_move/locations-details') {
            setActive(2)
        }else if (path === '/book_a_move/checkout') {
            setActive(3)
        }
    }, [])
    {/** Works tho */}
    // const handlePrevPage = () => {
    //     if (active > 1) {
    //         setActive((prev) => prev - 1)
    //         let newPathNumber = active - 1
    //         newPathNumber === 2 ? router.push('/book_a_move/locations-details') : newPathNumber === 3 ? router.push('/book_a_move/checkout') : router.push('/book_a_move')
    //         // router.push(`${routes[newPathNumber]}`)
    //         return
    //     }
    //     setActive(active)
    // }
    const handlePrevPage = () => {
        if (active > 1) {
            let newPathNumber = active - 1;
            setActive(newPathNumber);
        if (newPathNumber === 2) {
            return router.push('/book_a_move/locations-details');
        } else if (newPathNumber === 3) {
            return router.push('/book_a_move/checkout');
        }else if (newPathNumber === 1) {
            return router.push('/book_a_move')
        }
            return
        }
        router.push('/book_a_move')
        setActive(active)
    };
    const handleNextPage = () => {
    if (active < 3) {
        let newPathNumber = active + 1;
        setActive(newPathNumber);
        if (newPathNumber === 2) {
            return router.push('/book_a_move/locations-details');
        } else if (newPathNumber === 3) {
            return router.push('/book_a_move/checkout');
        }else if (newPathNumber === 1) {
            return router.push('/book_a_move')
        }
        return;
    }
    setActive(active)
    router.push('/book_a_move/checkout');
        
};

    return (
        <nav aria-label="Page navigation example" className="max-w-6xl mx-auto" style={{marginTop:'110px'}}>
            <ul className="inline-flex -space-x-px text-base h-10 max-w-6xl mx-auto cursor-pointer">
                <li
                    className={defaultStyle}
                    onClick={handlePrevPage}
                    >
                    Previous
                </li>
                <li 
                    className={active === 1 ? activeStyle : defaultStyle}
                    onClick={()=>{router.push('/book_a_move'); setActive(1)}}
                    >
                    1
                </li>
                <li 
                    className={active === 2 ? activeStyle : defaultStyle}
                    onClick={()=>{router.push('/book_a_move/locations-details'); setActive(2)}}
                    >
                    2
                </li>
                <li 
                    className={ active === 3 ? activeStyle : defaultStyle}
                    onClick={()=>{router.push('/book_a_move/checkout'); setActive(3)}}
                    >
                    3
                </li>
                <li className={defaultStyle} onClick={handleNextPage}>
                    Next
                </li>
            </ul>
        </nav>
    )
}

export default BookingProgress