'use client'
import Map from '@/components/Map';
import BookingIndexForm from '@/components/book_a_move_comp/BookingIndexForm';
import { useGoogleMaps } from '@/context/GoogleMapsContext';
import { useState, useEffect } from 'react';
import Loading from '../loading';
// import { calculateRoute } from '@/hooks/useDirections-hook';

export default function Booking() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
    const{isLoaded}=useGoogleMaps()

  
    useEffect(() => {
    if (!isLoaded) {
      setScriptLoaded(!scriptLoaded)
        }
      setScriptLoaded(false)
    }, [])
    
    if (scriptLoaded) {
        return <Loading/>
    }
 return (
  <>
        <div className="grid grid-cols-1 md:p-0 p-4 md:grid-cols-2 max-w-6xl mx-auto md:gap-4 mt-8">
            {/* Your items go here */}
            <div className="px-5 md:px-0 md:p-5"> 
              <Map/>
            </div>
            <div className="p-5">
              <BookingIndexForm/>
            </div>
        </div>
  </>
 )
}