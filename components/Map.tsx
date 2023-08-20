import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer ,  useLoadScript} from "@react-google-maps/api";
import { useInputContext } from '@/context/InputContext';
// import { calculateRoute } from '@/hooks/useDirections-hook';

function Map() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
  });

  const [mapCenter, setMapCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  const { locationValue } = useInputContext();
  const [routeData, setRouteData] = useState<{ direction: google.maps.DirectionsResult | null, distance: string | undefined, duration: string | undefined } | null>(null);
  const calculateRoute = async () => {
  const pickUp = localStorage.getItem('pickUp');
  const destination = localStorage.getItem('destination');

  if (!pickUp || !destination) {
    return null;
  }
console.log('pickup',pickUp)
console.log('drop',destination)
  const directionService = new google.maps.DirectionsService();
  const results = await directionService.route({
    origin: pickUp,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
  });
  console.log('results', results)
  return {
    direction: results,
    distance: results.routes[0].legs[0].distance?.text,
    duration: results.routes[0].legs[0].duration?.text,
  };
};

  useEffect(() => {
    async function fetchRouteData() {
      const result = await calculateRoute();
      if (result) {
        setRouteData(result);
        console.log(result)
      }
    }
    fetchRouteData();
  }, []);

  if (!isLoaded) {
    return (
      <div className='w-full'>
        {isLoaded || 'loading...'}
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      <GoogleMap
        center={locationValue || mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={locationValue || mapCenter} />
        {routeData?.direction &&<DirectionsRenderer directions={routeData.direction}/> }
      </GoogleMap>
    </div>
  );
}

export default Map;
