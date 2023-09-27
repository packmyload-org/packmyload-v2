"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import { useBookingForm } from "@/context/BookingFormContext"
import {useRouter} from 'next/navigation'
import { BookingLayout } from "../BookingLayout"
export default function Location_Details(){
    const { state } = useBookingForm()
    const router = useRouter()

    const rightContent = (
        <div className="p-3 sm:px-5 w-full md:w-[95%]  mx-auto ">
            <LocationServiceForm title={"Your Start Location"} location={state.pickUp} />
            <LocationServiceForm title={"Your End Location"} location={state.destination} />
            <div className='bg-blue-300 mx-auto text-center w-[130px] md:w-[160px] cursor-pointer  font-black text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg' onClick={()=>router.push('/book_a_move/checkout')}>Proceed</div>
        </div>
    )
    const textDescription = "Let's dive into move location specifics!";

      const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full locations-bg bg-contain">
    
    </div>
    )
    return(
    <BookingLayout
        rightContent={rightContent}
        stepDescription='Almost Done.👏'    leftContent={leftContent}
        textDescription={textDescription}
        prev="/book_a_move/items"
        />
    )
}