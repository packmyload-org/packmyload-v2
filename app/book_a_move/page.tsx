'use client'
// import dynamic from 'next/dynamic';
// const Map = dynamic(() => import('@/components/Map'))
// const BookingIndexForm = dynamic(() => import('@/components/book_a_move_comp/BookingIndexForm'))
import Map from "@/components/Map"
import BookingIndexForm from "@/components/book_a_move_comp/BookingIndexForm"
import { BookingLayout } from "./BookingLayout"

export default function Booking() {

  const leftContent = (
    <div className="p-2 sm:px-[7rem] lg:px-0"> 
      <Map/>
    </div>
  )

  const rightContent = (
    <div className="p-2 sm:px-[7rem] lg:px-0 w-full lg:w-[90%] mx-auto my-auto">
      <BookingIndexForm/>
    </div>
  )
 
 return (
  <>
    <BookingLayout
      leftContent={leftContent}
      rightContent={rightContent}
      stepDescription="Let's Get Started With Your Move"
     />
  </>
 )
}