import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import Loading from '@/app/loading';
import { useInputContext } from '@/context/InputContext';
import { calculateRoute } from '@/hooks/useDirections-hook';

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
  });

  const [mapCenter, setMapCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  const { locationValue } = useInputContext();
  const [routeData, setRouteData] = useState<{ direction: google.maps.DirectionsResult | null, distance: string | undefined, duration: string | undefined } | null>(null);

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
        loading ...
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
