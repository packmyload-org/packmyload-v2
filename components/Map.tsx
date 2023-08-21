import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript, Libraries } from "@react-google-maps/api";
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';

interface RouteData {
  direction: google.maps.DirectionsResult | null;
  distance: string | undefined;
  duration: string | undefined;
}

function Map() {
  let libraries: Libraries = ['places']
  const path = usePathname()
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: libraries,
  });

  const [mapCenter, setMapCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const {locationValue, triggerCalculateRoute} = useInputContext()
  const calculateRoute = async () => {
    const pickUp = localStorage.getItem('pickUp');
    const destination = localStorage.getItem('destination');

    if (!pickUp || !destination) {
      return null;
    }

    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: pickUp,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      return {
        direction: results,
        distance: results.routes[0].legs[0].distance?.text,
        duration: results.routes[0].legs[0].duration?.text,
      };
    } catch (error) {
      console.error('Error calculating route:', error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchRouteData() {
      const result = await calculateRoute();
      if (result) {
        setRouteData(result);
      }
    }
    if (isLoaded && path.includes("book_a_move")) {
      fetchRouteData();
    }
    if (isLoaded && triggerCalculateRoute) {
      fetchRouteData()
    }
  }, [isLoaded, triggerCalculateRoute]);

  useEffect(() => {
    if (path.includes('partner') && isLoaded) {
      setMapCenter(locationValue)
    }
  },[locationValue,isLoaded])

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-full'>
      <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={mapCenter} />
        {routeData?.direction && path.includes('book_a_move') && <DirectionsRenderer directions={routeData.direction} />}
      </GoogleMap>
    </div>
  );
}

export default Map;
