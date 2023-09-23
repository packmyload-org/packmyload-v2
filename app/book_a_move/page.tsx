'use client'

import Map from "@/components/Map"
import BookingIndexForm from "@/components/book_a_move_comp/BookingIndexForm"
import { BookingLayout } from "./BookingLayout"
import { useBookingForm } from "@/context/BookingFormContext"

export default function Booking() {
  const {state}=useBookingForm()
  const leftContent = (
    <div className="p-2 sm:px-[7rem] lg:px-0 "> 
      <Map />
      {![
            state.pickUp,
            state.destination,
            state.moveDate,
            state.moveTime
      ].every((url) => url === '') &&
        <div className="flex flex-wrap gap-3 h-[20vh] w-full">
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-md text-blue-300 font-medium" htmlFor="MovingFrom">Moving From </label>
              <p className="text-blue-300 text-lg">{state.pickUp}</p>
            </div>
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-md text-blue-300 font-medium" htmlFor="MovingTo">Moving To</label>
            <p className="text-blue-300 text-lg">{state.destination}</p>

            </div>
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-md text-blue-300 font-medium" htmlFor="MovingFrom">Date </label>
            <p className="text-blue-300 text-lg">{state.moveDate}</p>
          </div>
          <div className="m-auto flex flex-col gap-1 items-start">
            <label className="text-md text-blue-300 font-medium" htmlFor="MovingFrom">Time</label>
            <p className="text-blue-300 text-lg">{state.moveTime}</p>
          </div>
        </div>
          }
    </div>
  )

  const rightContent = (
    <div className="p-2 sm:px-[7rem] lg:px-0 w-full lg:w-[90%] mx-auto my-auto ">
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