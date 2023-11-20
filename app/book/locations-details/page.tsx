"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import { useBookingForm } from "@/context/BookingFormContext"
import {useRouter} from 'next/navigation'
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});
export default function Location_Details(){
    const { state } = useBookingForm()
    const router = useRouter()

    const rightContent = (
        <div className="p-3 sm:px-5 w-full md:w-[95%]  mx-auto ">
            <LocationServiceForm title={"Your Start Location"} location={state.pickUp} />
            <LocationServiceForm title={"Your End Location"} location={state.destination} />
            <p className="text-blue-700 text-lg font-semibold"><span className="font-bold">NOTE:</span> Packing more than 5 meter's attracts more charge.</p>
        </div>
    )
    const textDescription = "Tell us more about your pick up and drop off location.";

      const leftContent = (
   <div className="hidden md:block p-1 lg:px-4 my-auto h-[45vh] w-full location-bg bg-contain">
    
    </div>
    )
    return(
    <BookingLayout
        rightContent={rightContent}
        stepDescription='Almost Done.👏'
        leftContent={leftContent}
        textDescription={textDescription}
        prev="/book/items"
        next="/book/checkout"
        />
    )
}