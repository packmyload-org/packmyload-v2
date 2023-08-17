import React from 'react'
import { useJsApiLoader,GoogleMap,Marker, 
  Autocomplete } from "@react-google-maps/api";
function Map() {
 const { isLoaded} = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  libraries:['places']
 })
 if (!isLoaded) {
  return <>loading...</>
 }

 let center = {lat: 48.8584, lng:2.2945 }

 return (
  <div className='w-full h-full'>
   <GoogleMap
    center={center}
    zoom={15}
    mapContainerStyle={{ width: '100%', height: '100%' }}
    options={{
     streetViewControl: false,
     zoomControl: false,
     mapTypeControl: false,
     fullscreenControl: false,
    }}
   >
    <Marker position={center}/>
   </GoogleMap>
   </div>
  )
}

export default Map

export const AutoCompleteInput = () => {
  const { isLoaded} = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  libraries:['places']
 })
 if (!isLoaded) {
  return <>loading...</>
 }
 return (
 <>
  <Autocomplete>
     <input
         id="location"
         name="storeAddress"
         type="text"
         className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
         placeholder="Destination, Area, Street"
         required
         // onChange={handleInputChange}
               />
  </Autocomplete>
 </>
 )
}