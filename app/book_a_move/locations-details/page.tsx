"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import { useBookingForm } from "@/context/BookingFormContext"
import Link from "next/link"

export default function Location_Details(){
const {state}=useBookingForm()
    return (
        <>
            <section className="mt-10 mb-4 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 ">
                    {/* Your items go here */}
                    <div className="p-5">
                        <LocationServiceForm title={"Your Start Location"} location={state.pickUp} />
                    </div>
                    <div className="p-5">
                        <LocationServiceForm title={"Your End Location"} location={state.destination} />
                    </div>
                </div>
                <div className=' w-1/2 mx-auto flex'>
                    <div className='bg-blue-800 mx-auto text-center w-[160px]  font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-red-500 p-2 rounded-lg'>
                        <Link href={'/book_a_move/items'}>GO BACK</Link>
                    </div>
                    <div className='bg-blue-600 mx-auto text-center w-[160px]  font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'>
                        <Link href={'/book_a_move/checkout'}>Proceed</Link>
                    </div>
                </div>
            </section>
        </>
    )
}