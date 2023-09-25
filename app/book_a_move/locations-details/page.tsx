"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import { useBookingForm } from "@/context/BookingFormContext"
import {useRouter} from 'next/navigation'
import { BookingLayout } from "../BookingLayout"
export default function Location_Details(){
    const { state } = useBookingForm()
    const router = useRouter()
    const leftContent = (
        <div className="p-3 sm:px-5">
            <LocationServiceForm title={"Your Start Location"} location={state.pickUp} />
        </div>
    )
    const rightContent = (
        <div className="p-3 sm:px-5 my-auto max-w-[200rem] mx-auto lg:fixed lg:bottom-6">
            <LocationServiceForm title={"Your End Location"} location={state.destination} />
                {/* <div className=' w-1/2 mx-auto flex'>
                    <div className='bg-blue-300 mx-auto text-center w-[130px] md:w-[160px]  font-black text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg' onClick={() => router.push('/book_a_move/checkout')}>
                        Proceed
                    </div>
                </div> */}
        </div>
    )
    return(
    <BookingLayout
        leftContent={leftContent}
        rightContent={rightContent}
        stepDescription='Almost Done.'
        />
    )
}