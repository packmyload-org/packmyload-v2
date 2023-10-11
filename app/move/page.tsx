'use client'

import Map from "@/components/Map"
import BookingIndexForm from "@/components/book_a_move_comp/BookingIndexForm"
const BookingLayout = dynamic(() => import('./BookingLayout'), {
  loading: () => <Loading/>,
});
import { DisplayUpperFormDetails } from "@/components/book_a_move_comp/DisplayUpperFormDetails"
import { useBookingForm } from "@/context/BookingFormContext"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import Loading from "../loading";
import Script from 'next/script';
export default function Booking() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
  const { state } = useBookingForm()
  const {pickUp,destination,moveDate,moveTime}= state
  const [displayDetails, setDisplayDetails] = useState(false)
   const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    localStorage.clear()
    if (document.getElementById('google-maps-api')) {
      setIsLoaded(true)
    }
  }, [])
  useEffect(() => {
    if (pickUp !== '' || 
      destination !== '' ||
      moveDate !== '' ||
      moveTime !== ''
    ) {
      return setDisplayDetails(true)
    }
  },[pickUp,destination,moveDate,moveTime])
  const leftContent = (
    <div className="p-1 lg:px-4 "> 
      <Map />
      {
        displayDetails && 
      <DisplayUpperFormDetails />
      }
    </div>
  )

  const rightContent = (
    <div className="p-1  lg:px-4 w-full mx-auto xl:mt-[80px]">
      <BookingIndexForm/>
    </div>
  )

  return (
    <>
      <Script id='google-maps-api' src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${'places'}`} strategy="lazyOnload"
        async={true} onLoad={()=>setIsLoaded(true)} />  
      {!isLoaded ? <Loading /> :
        <BookingLayout
          leftContent={leftContent}
          rightContent={rightContent}
          stepDescription="Let's Get Started With Your Move 👋"
        />}
  </>
 )
}