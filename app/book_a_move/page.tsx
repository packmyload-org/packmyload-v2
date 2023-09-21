'use client'
// import dynamic from 'next/dynamic';
// const Map = dynamic(() => import('@/components/Map'))
// const BookingIndexForm = dynamic(() => import('@/components/book_a_move_comp/BookingIndexForm'))
import Map from "@/components/Map"
import BookingIndexForm from "@/components/book_a_move_comp/BookingIndexForm"

export default function Booking() {
 return (
  <>
        <div className="grid grid-cols-1 md:p-0 p-4 lg:grid-cols-2 max-w-6xl mx-auto md:gap-4 mt-8">
            {/* Your items go here */}
            <div className="p-2 sm:px-[7rem] lg:px-0"> 
              <Map/>
            </div>
            <div className="p-2 sm:px-[7rem] lg:px-0">
              <BookingIndexForm/>
            </div>
        </div>
  </>
 )
}