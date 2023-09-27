"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import { useBookingForm } from "@/context/BookingFormContext"
import {useRouter} from 'next/navigation'
import { BookingLayout } from "../BookingLayout"
export default function Location_Details(){
    const { state } = useBookingForm()

    const rightContent = (
        <div className="p-3 sm:px-5 w-full md:w-[95%]  mx-auto ">
            <LocationServiceForm title={"Your Start Location"} location={state.pickUp} />
            <LocationServiceForm title={"Your End Location"} location={state.destination} />
        </div>
    )
    const textDescription = "Let's dive into move location specifics!";

    return(
    <BookingLayout
        rightContent={rightContent}
        stepDescription='Almost Done.👏' 
        textDescription={textDescription}
        prev="/book_a_move/items"
        next="/book_a_move/checkout"
        />
    )
}